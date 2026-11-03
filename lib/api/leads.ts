import { API_BASE_URL, isApiConfigured } from "@/lib/api/config";

export const LEAD_TIMEOUT_MS = 15000;

export type LeadSource = "contact_form" | "lead_magnet";

export interface LeadPayload {
  session_id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  source: LeadSource;
}

export type LeadSubmissionErrorKind =
  | "configuration"
  | "timeout"
  | "canceled"
  | "network"
  | "http";

const MESSAGES = {
  configuration:
    "El formulario no está disponible en este momento. Puedes escribirnos por WhatsApp.",
  timeout:
    "La solicitud tardó demasiado. Revisa tu conexión y vuelve a intentarlo.",
  canceled: "La solicitud se canceló. Intenta de nuevo cuando quieras.",
  network:
    "No pudimos conectar con el servidor. Revisa tu conexión y vuelve a intentarlo.",
  fallback: "No pudimos enviar tu solicitud. Intenta de nuevo.",
} as const;

export class LeadSubmissionError extends Error {
  readonly kind: LeadSubmissionErrorKind;
  readonly status?: number;

  constructor(kind: LeadSubmissionErrorKind, message: string, status?: number) {
    super(message);
    this.name = "LeadSubmissionError";
    this.kind = kind;
    this.status = status;
  }
}

interface SubmitLeadOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
}

function extractHttpErrorMessage(data: unknown): string {
  if (!data || typeof data !== "object") return MESSAGES.fallback;

  const body = data as {
    message?: unknown;
    errors?: Record<string, unknown>;
  };

  if (typeof body.message === "string" && body.message.trim()) {
    return body.message;
  }

  if (body.errors) {
    const first = Object.values(body.errors)[0];
    if (Array.isArray(first) && typeof first[0] === "string" && first[0].trim()) {
      return first[0];
    }
  }

  return MESSAGES.fallback;
}

export function getLeadErrorMessage(error: unknown): string {
  if (error instanceof LeadSubmissionError) return error.message;
  return MESSAGES.fallback;
}

export async function submitLead(
  payload: LeadPayload,
  options: SubmitLeadOptions = {}
): Promise<void> {
  if (!isApiConfigured()) {
    throw new LeadSubmissionError("configuration", MESSAGES.configuration);
  }

  if (options.signal?.aborted) {
    throw new LeadSubmissionError("canceled", MESSAGES.canceled);
  }

  const timeoutMs = options.timeoutMs ?? LEAD_TIMEOUT_MS;
  const fetchImpl = options.fetchImpl ?? fetch;
  const controller = new AbortController();
  const abortFromCaller = () => controller.abort();
  let timedOut = false;

  options.signal?.addEventListener("abort", abortFromCaller, { once: true });

  const timeoutId = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetchImpl(`${API_BASE_URL}/api/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      throw new LeadSubmissionError(
        "http",
        extractHttpErrorMessage(data),
        response.status
      );
    }
  } catch (error) {
    if (error instanceof LeadSubmissionError) throw error;
    if (timedOut) {
      throw new LeadSubmissionError("timeout", MESSAGES.timeout);
    }
    if (options.signal?.aborted) {
      throw new LeadSubmissionError("canceled", MESSAGES.canceled);
    }
    throw new LeadSubmissionError("network", MESSAGES.network);
  } finally {
    clearTimeout(timeoutId);
    options.signal?.removeEventListener("abort", abortFromCaller);
  }
}
