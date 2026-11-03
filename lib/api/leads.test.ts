import { describe, expect, it, vi } from "vitest";
import { LeadSubmissionError, submitLead, type LeadPayload } from "@/lib/api/leads";

const payload: LeadPayload = {
  session_id: "session-test",
  name: "Ana",
  email: "ana@example.com",
  phone: "9931234567",
  service: "web",
  message: "Necesito una página web",
  source: "contact_form",
};

function createAbortableFetch(): typeof fetch {
  return vi.fn<typeof fetch>((_input, init) => {
    return new Promise<Response>((_resolve, reject) => {
      const signal = init?.signal;
      const abort = () => reject(new DOMException("Aborted", "AbortError"));

      if (signal?.aborted) {
        abort();
        return;
      }

      signal?.addEventListener("abort", abort, { once: true });
    });
  });
}

describe("submitLead", () => {
  it("aborta por timeout y devuelve un error de timeout", async () => {
    const error = await submitLead(payload, {
      timeoutMs: 10,
      fetchImpl: createAbortableFetch(),
    }).catch((caught) => caught);

    expect(error).toBeInstanceOf(LeadSubmissionError);
    expect(error).toMatchObject({ kind: "timeout" });
  });

  it("distingue cancelación externa de timeout", async () => {
    const controller = new AbortController();
    const promise = submitLead(payload, {
      signal: controller.signal,
      timeoutMs: 1000,
      fetchImpl: createAbortableFetch(),
    });

    setTimeout(() => controller.abort(), 5);

    const error = await promise.catch((caught) => caught);
    expect(error).toMatchObject({ kind: "canceled" });
  });

  it("expone el mensaje de error HTTP del API", async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockResolvedValue({
      ok: false,
      status: 422,
      json: async () => ({ errors: { email: ["Correo inválido"] } }),
    } as Response);

    const error = await submitLead(payload, { fetchImpl }).catch((caught) => caught);

    expect(error).toMatchObject({
      kind: "http",
      status: 422,
      message: "Correo inválido",
    });
  });

  it("mapea fallos de red sin alterar el payload ni el contrato", async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockRejectedValue(new TypeError("Failed to fetch"));

    const error = await submitLead(payload, { fetchImpl }).catch((caught) => caught);

    expect(error).toMatchObject({ kind: "network" });
  });

  it("envía el payload intacto al endpoint de leads", async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockResolvedValue({
      ok: true,
      status: 201,
      json: async () => ({ success: true }),
    } as Response);

    await submitLead(payload, { fetchImpl });

    expect(fetchImpl).toHaveBeenCalledTimes(1);
    const [url, init] = fetchImpl.mock.calls[0];

    expect(url).toBe("https://api.test/api/v1/leads");
    expect(init?.method).toBe("POST");
    expect(init?.headers).toEqual({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    expect(JSON.parse(String(init?.body))).toEqual(payload);
  });
});
