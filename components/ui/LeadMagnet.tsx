"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import {
  ChartBarIcon,
  CheckCircleIcon,
  LockIcon,
  MessageIcon,
} from "@/components/ui/icons/Icons";
import { useTracking } from "@/components/hooks/useTracking";
import { colors, fonts, radius } from "@/data/theme";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

type LeadStatus = "idle" | "sending" | "success" | "error";

export function LeadMagnet() {
  const { getSessionId, trackEvent } = useTracking();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [error, setError] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);

  const auditMessage = email.trim()
    ? `${WHATSAPP_MESSAGES.auditoria} Mi correo: ${email.trim()}`
    : WHATSAPP_MESSAGES.auditoria;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setEmailInvalid(true);
      setStatus("error");
      setError("Escribe un correo electrónico válido.");
      return;
    }

    setEmailInvalid(false);

    if (!API_URL) {
      setStatus("error");
      setError("No pudimos registrar tu correo. Puedes escribirnos por WhatsApp.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`${API_URL}/api/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          session_id: getSessionId(),
          name: normalizedEmail.split("@")[0],
          email: normalizedEmail,
          message: "Solicitó auditoría digital gratuita",
          source: "lead_magnet",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.message || "No pudimos registrar tu correo. Puedes escribirnos por WhatsApp."
        );
      }

      trackEvent("form_submit", "lead-magnet", { plan: "Auditoría gratuita" });
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No pudimos registrar tu correo. Puedes escribirnos por WhatsApp."
      );
    }
  };

  const reset = () => {
    setEmail("");
    setError("");
    setEmailInvalid(false);
    setStatus("idle");
  };

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colors.ink} 0%, #111C33 100%)`,
        border: "1px solid rgba(59,130,246,0.22)",
        borderRadius: radius.panel,
        padding: "clamp(22px, 4vw, 32px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(20px, 4vw, 36px)",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                background: "rgba(59,130,246,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              <ChartBarIcon size={20} color="#93C5FD" />
            </span>
            <p
              style={{
                margin: 0,
                color: "#93C5FD",
                fontFamily: fonts.sora,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Diagnóstico
            </p>
          </div>
          <h3
            style={{
              margin: 0,
              color: colors.white,
              fontFamily: fonts.sora,
              fontSize: "clamp(20px, 2.6vw, 26px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            Auditoría digital gratuita
          </h3>
          <p
            style={{
              margin: "8px 0 0",
              color: "#A8B4C7",
              fontSize: 14,
              lineHeight: 1.65,
              maxWidth: "48ch",
            }}
          >
            Revisamos tu presencia digital y te compartimos una orientación inicial sin costo.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 16,
              color: "#7C8BA3",
              fontSize: 12,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <LockIcon size={14} color="#7C8BA3" />
              Sin compromiso
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <MessageIcon size={14} color="#7C8BA3" />
              También por WhatsApp
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {status === "success" ? (
            <motion.div
              key="success"
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.28)",
                borderRadius: radius.card,
                padding: "18px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <CheckCircleIcon size={20} color={colors.success} />
                <p
                  style={{
                    margin: 0,
                    color: colors.white,
                    fontFamily: fonts.sora,
                    fontSize: 15,
                    fontWeight: 800,
                  }}
                >
                  Solicitud registrada.
                </p>
              </div>
              <p style={{ margin: "8px 0 16px", color: "#A8B4C7", fontSize: 13, lineHeight: 1.6 }}>
                Si quieres avanzar ahora, continúa por WhatsApp y revisamos tu caso.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a
                  href={whatsappUrl(auditMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("wa_click", "lead-magnet", { plan: "Auditoría gratuita" })
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 7,
                    minHeight: 44,
                    padding: "10px 16px",
                    borderRadius: radius.pill,
                    background: "#25D366",
                    color: colors.ink,
                    fontFamily: fonts.sora,
                    fontSize: 13,
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  <MessageIcon size={16} color={colors.ink} />
                  Continuar por WhatsApp
                </a>
                <button
                  type="button"
                  onClick={reset}
                  style={{
                    minHeight: 44,
                    padding: "10px 12px",
                    border: "none",
                    background: "transparent",
                    color: "#A8B4C7",
                    cursor: "pointer",
                    fontFamily: fonts.sora,
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Enviar otro correo
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <form onSubmit={handleSubmit} noValidate>
                <label
                  htmlFor="audit-email"
                  style={{
                    display: "block",
                    marginBottom: 7,
                    color: "#C7D2E3",
                    fontFamily: fonts.sora,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Tu correo electrónico
                </label>
                <div style={{ display: "grid", gap: 10 }}>
                  <input
                    id="audit-email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={255}
                    required
                    aria-required="true"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status === "error") {
                        setStatus("idle");
                        setError("");
                        setEmailInvalid(false);
                      }
                    }}
                    aria-invalid={emailInvalid}
                    aria-describedby={error ? "audit-email-error" : undefined}
                    style={{
                      width: "100%",
                      minHeight: 48,
                      border: `1px solid ${emailInvalid ? "#F87171" : "#334155"}`,
                      borderRadius: 12,
                      background: "#0B1425",
                      color: colors.white,
                      fontFamily: fonts.sora,
                      fontSize: 16,
                      outline: "none",
                      padding: "12px 14px",
                      boxSizing: "border-box",
                    }}
                  />
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status === "sending" ? undefined : { scale: 1.01 }}
                    whileTap={status === "sending" ? undefined : { scale: 0.99 }}
                    style={{
                      width: "100%",
                      minHeight: 48,
                      border: "none",
                      borderRadius: radius.pill,
                      background: colors.white,
                      color: colors.ink,
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      fontFamily: fonts.sora,
                      fontSize: 14,
                      fontWeight: 800,
                      opacity: status === "sending" ? 0.72 : 1,
                    }}
                  >
                    {status === "sending" ? "Registrando…" : "Solicitar diagnóstico"}
                  </motion.button>
                </div>
              </form>
              {error ? (
                <div
                  id="audit-email-error"
                  role="alert"
                  style={{
                    marginTop: 10,
                    color: "#FCA5A5",
                    fontSize: 12,
                    lineHeight: 1.6,
                  }}
                >
                  {error}{" "}
                  <a
                    href={whatsappUrl(auditMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("wa_click", "lead-magnet", { plan: "Fallback de auditoría" })
                    }
                    style={{ color: "#FCA5A5", fontWeight: 800 }}
                  >
                    Ir a WhatsApp
                  </a>
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
