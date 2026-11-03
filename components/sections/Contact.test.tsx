import type { ReactNode } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Contact } from "@/components/sections/Contact";
import { CONTACT_INTENTS } from "@/data/constants";

vi.mock("@/components/hooks/useTracking", () => ({
  useTracking: () => ({
    getSessionId: () => "session-test",
    trackEvent: vi.fn(),
  }),
}));

vi.mock("@/components/ui/AnimatedSection", () => ({
  AnimatedSection: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

vi.mock("@/components/ui/LeadMagnet", () => ({
  LeadMagnet: () => null,
}));

const successResponse = {
  ok: true,
  status: 201,
  json: async () => ({ success: true }),
} as Response;

function fillAndSubmit(container: HTMLElement) {
  fireEvent.change(container.querySelector("#contact-name") as HTMLInputElement, {
    target: { value: " Ana " },
  });
  fireEvent.change(container.querySelector("#contact-email") as HTMLInputElement, {
    target: { value: "ana@example.com" },
  });
  fireEvent.change(container.querySelector("#contact-intent") as HTMLSelectElement, {
    target: { value: CONTACT_INTENTS[0].id },
  });
  fireEvent.change(container.querySelector("#contact-message") as HTMLTextAreaElement, {
    target: { value: "Quiero una página web" },
  });

  const form = container.querySelector("form");
  expect(form).not.toBeNull();
  fireEvent.submit(form as HTMLFormElement);
  return form as HTMLFormElement;
}

describe("Contact", () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
  });

  it("envía el payload intacto y muestra éxito", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(successResponse);
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<Contact />);
    fillAndSubmit(container);

    expect(await screen.findByText("Solicitud recibida.")).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.test/api/v1/leads");
    expect(JSON.parse(String(init?.body))).toEqual({
      session_id: "session-test",
      name: "Ana",
      email: "ana@example.com",
      service: CONTACT_INTENTS[0].service,
      message: "Quiero una página web",
      source: "contact_form",
    });
  });

  it("muestra error HTTP y permite reintentar", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({ message: "No disponible" }),
      } as Response)
      .mockResolvedValueOnce(successResponse);
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<Contact />);
    const form = fillAndSubmit(container);

    expect(await screen.findByText(/No disponible/)).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    fireEvent.submit(form);

    expect(await screen.findByText("Solicitud recibida.")).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
