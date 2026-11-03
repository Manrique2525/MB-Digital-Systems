"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LeadMagnet } from "@/components/ui/LeadMagnet";
import {
  CheckCircleIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageIcon,
  PhoneIcon,
} from "@/components/ui/icons/Icons";
import { CONTACT_INTENTS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import { colors, fonts, radius, section } from "@/data/theme";
import { isApiConfigured } from "@/lib/api/config";
import { getLeadErrorMessage, submitLead } from "@/lib/api/leads";

type FormField = "name" | "phone" | "email" | "intentId" | "message";
type FormStatus = "idle" | "sending" | "success" | "error";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  intentId: "",
  message: "",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 7,
  color: colors.ink,
  fontFamily: fonts.sora,
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.4,
};

const helperStyle: React.CSSProperties = {
  margin: "6px 0 0",
  color: colors.slate,
  fontSize: 12,
  lineHeight: 1.55,
};

export function Contact() {
  const { trackEvent, getSessionId } = useTracking();
  const formStarted = useRef(false);
  const submittingRef = useRef(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedIntent = CONTACT_INTENTS.find((intent) => intent.id === form.intentId);

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Escribe tu nombre para poder dirigirnos a ti.";
    }

    const email = form.email.trim();
    if (!email) {
      nextErrors.email = "Escribe tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Revisa el formato del correo electrónico.";
    }

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length > 0 && (phoneDigits.length < 10 || phoneDigits.length > 15)) {
      nextErrors.phone = "Escribe un teléfono de 10 a 15 dígitos o déjalo vacío.";
    }

    if (!selectedIntent) {
      nextErrors.intentId = "Elige la opción que mejor describa lo que necesitas.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submittingRef.current) return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      const firstInvalid = (["name", "email", "phone", "intentId"] as const).find(
        (field) => nextErrors[field]
      );
      if (firstInvalid) {
        const fieldId = firstInvalid === "intentId" ? "contact-intent" : `contact-${firstInvalid}`;
        requestAnimationFrame(() => document.getElementById(fieldId)?.focus());
      }
      return;
    }

    if (!selectedIntent) return;

    if (!isApiConfigured()) {
      setStatus("error");
      setErrors({
        submit: "El formulario no está disponible en este momento. Puedes escribirnos por WhatsApp.",
      });
      return;
    }

    submittingRef.current = true;
    setErrors({});
    setStatus("sending");

    try {
      await submitLead({
        session_id: getSessionId(),
        name: form.name.trim(),
        phone: form.phone.replace(/\D/g, "") || undefined,
        email: form.email.trim(),
        service: selectedIntent.service,
        message:
          form.message.trim() ||
          `Solicito información sobre ${selectedIntent.interest}.`,
        source: "contact_form",
      });

      trackEvent("form_submit", "contact", { service: selectedIntent.service });
      setForm(INITIAL_FORM);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrors({ submit: getLeadErrorMessage(error) });
    } finally {
      submittingRef.current = false;
    }
  };

  const handleChange = (field: FormField, value: string) => {
    if (value.trim() && !formStarted.current) {
      formStarted.current = true;
      trackEvent("form_start", "contact");
    }

    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field] && !current.submit) return current;
      const next = { ...current };
      delete next[field];
      delete next.submit;
      return next;
    });

    if (status === "error") {
      setStatus("idle");
    }
  };

  const fieldStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    minHeight: 48,
    border: `1px solid ${hasError ? "#EF4444" : "#DCE6F5"}`,
    borderRadius: 12,
    background: colors.white,
    color: colors.ink,
    fontFamily: fonts.sora,
    fontSize: 16,
    lineHeight: 1.4,
    outline: "none",
    padding: "12px 14px",
    boxSizing: "border-box",
  });

  const renderError = (field: string) =>
    errors[field] ? (
      <p
        id={`contact-${field}-error`}
        role="alert"
        style={{ margin: "6px 0 0", color: "#DC2626", fontSize: 12, lineHeight: 1.5 }}
      >
        {errors[field]}
      </p>
    ) : null;

  const contactChannels = [
    {
      id: "whatsapp",
      icon: <MessageIcon size={18} color={colors.primaryDark} />,
      label: "WhatsApp",
      value: "993 178 2620",
      href: whatsappUrl(WHATSAPP_MESSAGES.contacto),
      external: true,
    },
    {
      id: "email",
      icon: <MailIcon size={18} color={colors.primaryDark} />,
      label: "Correo electrónico",
      value: "contacto@mbdigitalsystems.com",
      href: "mailto:contacto@mbdigitalsystems.com",
      external: false,
    },
    {
      id: "phone",
      icon: <PhoneIcon size={18} color={colors.primaryDark} />,
      label: "Teléfono",
      value: "993 178 2620",
      href: "tel:+529931782620",
      external: false,
    },
  ];

  return (
    <section
      id="contacto"
      style={{
        padding: section.padding,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
      }}
    >
      <style>{`
        .contact-field:focus {
          border-color: #3B82F6 !important;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
        }
        .contact-field[aria-invalid="true"]:focus {
          border-color: #EF4444 !important;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.12);
        }
        .contact-channel:hover {
          color: #1E40AF !important;
        }
        .contact-channel:hover .contact-channel-icon {
          background: #DBEAFE !important;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 390px), 1fr))",
            gap: "clamp(32px, 6vw, 72px)",
            alignItems: "start",
          }}
        >
          <AnimatedSection>
            <div style={{ maxWidth: 480 }}>
              <p
                style={{
                  margin: "0 0 16px",
                  color: colors.primary,
                  fontFamily: fonts.sora,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 2.4,
                  textTransform: "uppercase",
                }}
              >
                Contacto
              </p>
              <h2
                style={{
                  margin: 0,
                  color: colors.ink,
                  fontFamily: fonts.sora,
                  fontSize: "clamp(30px, 4.2vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.045em",
                  lineHeight: 1.08,
                  textWrap: "balance",
                }}
              >
                Hablemos de tu siguiente paso.
              </h2>
              <p
                style={{
                  margin: "20px 0 0",
                  color: colors.slate,
                  fontSize: "clamp(15px, 1.7vw, 16px)",
                  lineHeight: 1.75,
                }}
              >
                Cuéntanos qué necesitas. Revisamos tu contexto y te proponemos un siguiente paso
                concreto, sin compromiso.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 2,
                  marginTop: 32,
                  borderTop: `1px solid ${colors.border}`,
                }}
              >
                {contactChannels.map((channel) => (
                  <a
                    key={channel.id}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    onClick={
                      channel.external
                        ? () => trackEvent("wa_click", "contacto", { plan: "Contacto directo" })
                        : undefined
                    }
                    className="contact-channel"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      borderBottom: `1px solid ${colors.border}`,
                      color: colors.ink,
                      padding: "13px 0",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <span
                      className="contact-channel-icon"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "#EFF6FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background-color 0.2s ease",
                      }}
                      aria-hidden="true"
                    >
                      {channel.icon}
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span
                        style={{
                          display: "block",
                          color: colors.slate,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: 1.2,
                          lineHeight: 1.4,
                          textTransform: "uppercase",
                        }}
                      >
                        {channel.label}
                      </span>
                      <span
                        style={{
                          display: "block",
                          marginTop: 2,
                          fontFamily: fonts.sora,
                          fontSize: 15,
                          fontWeight: 600,
                          lineHeight: 1.5,
                          overflowWrap: "anywhere",
                        }}
                      >
                        {channel.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px 22px",
                  marginTop: 24,
                  color: colors.slate,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <MapPinIcon size={15} color={colors.slate} />
                  Villahermosa, Tabasco
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <ClockIcon size={15} color={colors.slate} />
                  Lun–Vie · 9:00–18:00
                </span>
              </div>
              <p style={{ ...helperStyle, marginTop: 12 }}>
                Atendemos proyectos en todo México.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              style={{
                width: "100%",
                maxWidth: 560,
                justifySelf: "center",
                background: colors.white,
                border: `1px solid ${colors.border}`,
                borderRadius: radius.panel,
                boxShadow: "0 24px 60px rgba(15,23,42,0.06)",
                padding: "clamp(22px, 4vw, 36px)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ padding: "clamp(10px, 3vw, 24px) 0" }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        background: "rgba(16,185,129,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <CheckCircleIcon size={26} color={colors.success} />
                    </div>
                    <h3
                      style={{
                        margin: 0,
                        color: colors.ink,
                        fontFamily: fonts.sora,
                        fontSize: "clamp(22px, 3vw, 28px)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                      }}
                    >
                      Solicitud recibida.
                    </h3>
                    <p
                      style={{
                        margin: "12px 0 0",
                        color: colors.slate,
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
                    >
                      Revisaremos tu mensaje y te contactaremos por correo o WhatsApp para darle
                      seguimiento.
                    </p>
                    <p style={{ ...helperStyle, marginTop: 16 }}>
                      Si necesitas avanzar antes, también puedes escribirnos directamente.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 12,
                        marginTop: 24,
                      }}
                    >
                      <a
                        href={whatsappUrl(WHATSAPP_MESSAGES.contacto)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent("wa_click", "contacto", { plan: "Seguimiento de formulario" })
                        }
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          minHeight: 46,
                          padding: "11px 20px",
                          borderRadius: radius.pill,
                          background: colors.primaryDark,
                          color: colors.white,
                          fontFamily: fonts.sora,
                          fontSize: 14,
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        <MessageIcon size={16} color={colors.white} />
                        Abrir WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        style={{
                          minHeight: 46,
                          padding: "11px 18px",
                          border: `1px solid ${colors.border}`,
                          borderRadius: radius.pill,
                          background: "transparent",
                          color: colors.slate,
                          cursor: "pointer",
                          fontFamily: fonts.sora,
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      >
                        Enviar otra solicitud
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-busy={status === "sending"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: colors.ink,
                        fontFamily: fonts.sora,
                        fontSize: "clamp(21px, 2.8vw, 26px)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                      }}
                    >
                      Cuéntanos qué tienes en mente
                    </h3>
                    <p style={{ ...helperStyle, margin: "8px 0 22px" }}>
                      Déjanos lo esencial. Si falta algo, lo vemos en la conversación.
                    </p>

                    <div style={{ display: "grid", gap: 14 }}>
                      <div>
                        <label htmlFor="contact-name" style={labelStyle}>
                          Nombre *
                        </label>
                        <input
                          id="contact-name"
                          className="contact-field"
                          type="text"
                          autoComplete="name"
                          maxLength={200}
                          placeholder="Tu nombre"
                          value={form.name}
                          onChange={(event) => handleChange("name", event.target.value)}
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          style={fieldStyle(Boolean(errors.name))}
                        />
                        {renderError("name")}
                      </div>

                      <div>
                        <label htmlFor="contact-email" style={labelStyle}>
                          Correo electrónico *
                        </label>
                        <input
                          id="contact-email"
                          className="contact-field"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          maxLength={255}
                          placeholder="tu@correo.com"
                          value={form.email}
                          onChange={(event) => handleChange("email", event.target.value)}
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          style={fieldStyle(Boolean(errors.email))}
                        />
                        {renderError("email")}
                      </div>

                      <div>
                        <label htmlFor="contact-phone" style={labelStyle}>
                          Teléfono o WhatsApp <span style={{ color: colors.slate, fontWeight: 500 }}>(opcional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          className="contact-field"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          maxLength={25}
                          placeholder="993 000 0000"
                          value={form.phone}
                          onChange={(event) => handleChange("phone", event.target.value)}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                          style={fieldStyle(Boolean(errors.phone))}
                        />
                        {renderError("phone")}
                      </div>

                      <div>
                        <label htmlFor="contact-intent" style={labelStyle}>
                          ¿Qué necesitas? *
                        </label>
                        <select
                          id="contact-intent"
                          className="contact-field"
                          value={form.intentId}
                          onChange={(event) => handleChange("intentId", event.target.value)}
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.intentId)}
                          aria-describedby={errors.intentId ? "contact-intentId-error" : undefined}
                          style={fieldStyle(Boolean(errors.intentId))}
                        >
                          <option value="" disabled>
                            Elige una opción
                          </option>
                          {CONTACT_INTENTS.map((intent) => (
                            <option key={intent.id} value={intent.id}>
                              {intent.label}
                            </option>
                          ))}
                        </select>
                        {renderError("intentId")}
                      </div>

                      <div>
                        <label htmlFor="contact-message" style={labelStyle}>
                          Cuéntanos brevemente{" "}
                          <span style={{ color: colors.slate, fontWeight: 500 }}>(opcional)</span>
                        </label>
                        <textarea
                          id="contact-message"
                          className="contact-field"
                          rows={3}
                          maxLength={600}
                          placeholder="¿Qué quieres lograr o qué problema necesitas resolver?"
                          value={form.message}
                          onChange={(event) => handleChange("message", event.target.value)}
                          style={{ ...fieldStyle(false), resize: "vertical" }}
                        />
                        <p style={helperStyle}>
                          Si prefieres, lo vemos directamente en la conversación.
                        </p>
                      </div>
                    </div>

                    {errors.submit ? (
                      <div
                        role="alert"
                        style={{
                          marginTop: 16,
                          background: "#FEF2F2",
                          border: "1px solid #FECACA",
                          borderRadius: 12,
                          padding: "12px 14px",
                          color: "#B91C1C",
                          fontSize: 13,
                          lineHeight: 1.6,
                        }}
                      >
                        {errors.submit}{" "}
                        <a
                          href={whatsappUrl(WHATSAPP_MESSAGES.contacto)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackEvent("wa_click", "contacto", { plan: "Fallback de formulario" })
                          }
                          style={{ color: "#991B1B", fontWeight: 700 }}
                        >
                          Continuar por WhatsApp
                        </a>
                      </div>
                    ) : null}

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={status === "sending" ? undefined : { scale: 1.01 }}
                      whileTap={status === "sending" ? undefined : { scale: 0.99 }}
                      style={{
                        width: "100%",
                        minHeight: 50,
                        marginTop: 20,
                        border: "none",
                        borderRadius: radius.pill,
                        background: colors.primaryDark,
                        color: colors.white,
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 9,
                        fontFamily: fonts.sora,
                        fontSize: 16,
                        fontWeight: 700,
                        opacity: status === "sending" ? 0.72 : 1,
                      }}
                    >
                      {status === "sending" ? (
                        <>Enviando…</>
                      ) : (
                        <>
                          <MailIcon size={18} color={colors.white} />
                          Enviar solicitud
                        </>
                      )}
                    </motion.button>

                    <p
                      style={{
                        margin: "12px 0 0",
                        color: colors.slate,
                        fontSize: 12,
                        lineHeight: 1.6,
                        textAlign: "center",
                      }}
                    >
                      Al enviar, aceptas nuestro{" "}
                      <a
                        href="/politica-privacidad"
                        style={{ color: colors.primaryDark, fontWeight: 700 }}
                      >
                        aviso de privacidad
                      </a>
                      .
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 6,
                        marginTop: 16,
                        color: colors.slate,
                        fontSize: 13,
                      }}
                    >
                      <span>¿Prefieres WhatsApp?</span>
                      <a
                        href={whatsappUrl(WHATSAPP_MESSAGES.contacto)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent("wa_click", "contacto", { plan: "Alternativa a formulario" })
                        }
                        style={{ color: colors.primaryDark, fontWeight: 700 }}
                      >
                        Escríbenos directo
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>

        <div style={{ marginTop: "clamp(32px, 5vw, 48px)" }}>
          <AnimatedSection delay={0.1}>
            <LeadMagnet />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
