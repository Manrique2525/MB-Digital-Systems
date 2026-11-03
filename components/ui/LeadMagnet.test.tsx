import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { LeadMagnet } from "@/components/ui/LeadMagnet";

vi.mock("@/components/hooks/useTracking", () => ({
  useTracking: () => ({
    getSessionId: () => "session-test",
    trackEvent: vi.fn(),
  }),
}));

const successResponse = {
  ok: true,
  status: 201,
  json: async () => ({ success: true }),
} as Response;

function fillAndSubmit(container: HTMLElement) {
  fireEvent.change(screen.getByLabelText("Tu correo electrónico"), {
    target: { value: "ana@example.com" },
  });

  const form = container.querySelector("form");
  expect(form).not.toBeNull();
  fireEvent.submit(form as HTMLFormElement);
  return form as HTMLFormElement;
}

describe("LeadMagnet", () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
  });

  it("envía el payload intacto y muestra éxito", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(successResponse);
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<LeadMagnet />);
    fillAndSubmit(container);

    expect(await screen.findByText("Solicitud registrada.")).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.test/api/v1/leads");
    expect(JSON.parse(String(init?.body))).toEqual({
      session_id: "session-test",
      name: "ana",
      email: "ana@example.com",
      message: "Solicitó auditoría digital gratuita",
      source: "lead_magnet",
    });
  });

  it("evita solicitudes duplicadas por doble envío", async () => {
    let resolveFetch: (value: Response) => void = () => {};
    const pendingResponse = new Promise<Response>((resolve) => {
      resolveFetch = resolve;
    });
    const fetchMock = vi.fn<typeof fetch>().mockReturnValue(pendingResponse);
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<LeadMagnet />);
    const form = fillAndSubmit(container);

    fireEvent.submit(form);
    fireEvent.submit(form);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    resolveFetch(successResponse);
    expect(await screen.findByText("Solicitud registrada.")).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("muestra error HTTP y permite reintentar", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce({
        ok: false,
        status: 503,
        json: async () => ({ message: "Servicio no disponible" }),
      } as Response)
      .mockResolvedValueOnce(successResponse);
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<LeadMagnet />);
    const form = fillAndSubmit(container);

    expect(await screen.findByText(/Servicio no disponible/)).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    fireEvent.submit(form);

    expect(await screen.findByText("Solicitud registrada.")).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
