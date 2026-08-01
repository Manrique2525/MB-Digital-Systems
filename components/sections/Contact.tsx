"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LeadMagnet } from "@/components/ui/LeadMagnet";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon } from "@/components/ui/icons/Icons";
import { useTracking } from "@/components/hooks/useTracking";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const SERVICE_OPTIONS = [
  { value: "pagina_web", label: "Página Web", icon: "💻" },
  { value: "ecommerce", label: "E-commerce", icon: "🛒" },
  { value: "sistema_a_medida", label: "Sistema a Medida", icon: "⚙️" },
  { value: "marketing_digital", label: "Marketing Digital", icon: "📣" },
  { value: "diseno", label: "Diseño", icon: "🎨" },
  { value: "otro", label: "No estoy seguro", icon: "🤔" },
];

export function Contact() {
  const { trackEvent, getSessionId } = useTracking();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "otro",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "El teléfono debe tener 10 dígitos";
    if (!form.email.trim()) newErrors.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      newErrors.email = "Ingresa un email válido";
    if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (!API_URL) {
      setErrors({ submit: "API no configurada - revisa NEXT_PUBLIC_API_URL" });
      return;
    }

    setSending(true);
    setErrors((prev) => ({ ...prev, submit: "" }));

    try {
      const res = await fetch(`${API_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: getSessionId(),
          name: form.name,
          phone: form.phone,
          email: form.email.trim() || undefined,
          service: form.service,
          message: form.message,
          source: "contact_form",
        }),
      });

      if (!res.ok) {
        let message = "Error al enviar. Intenta de nuevo.";
        try {
          const data = await res.json();
          if (data?.message) message = data.message;
          else if (data?.errors) {
            const first = Object.values(data.errors)[0];
            if (Array.isArray(first) && first.length > 0) message = first[0];
          }
        } catch {
          // keep generic message
        }
        throw new Error(message);
      }

      trackEvent("form_submit", "contact");
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", phone: "", email: "", service: "otro", message: "" });
    } catch (err) {
      setErrors({
        submit:
          err instanceof Error
            ? err.message
            : "Error al enviar. Intenta de nuevo.",
      });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    if (value && !sessionStorage.getItem("started_form")) {
      trackEvent("form_start", "contact");
      try {
        sessionStorage.setItem("started_form", "1");
      } catch {
        // ignore
      }
    }
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const inputStyle = (hasError: boolean) => ({
    background: "#fff",
    border: `1px solid ${hasError ? "#EF4444" : "#E2E8F0"}`,
    borderRadius: 12,
    padding: "12px 14px",
    fontSize: 14,
    color: "#1E293B",
    outline: "none",
    fontFamily: "inherit",
    width: "100%" as const,
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s ease",
  });

  const errorTextStyle = (field: string): React.CSSProperties => ({
    color: "#EF4444",
    fontSize: 12,
    fontWeight: 500,
    marginTop: 4,
    display: errors[field] ? "flex" : "none",
    alignItems: "center",
    gap: 4,
  });

  return (
    <section
      id="contacto"
      style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#fff" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "clamp(40px,6vw,80px)",
        }}
      >
        <AnimatedSection>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#3B82F6",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Contacto
          </div>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,44px)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.2,
            }}
          >
            ¿Listo para hacer<br />crecer tu negocio?
          </h2>
          <p
            style={{
              fontSize: "clamp(14px,1.8vw,16px)",
              color: "#64748B",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Cuéntanos qué necesitas y te damos una cotización personalizada sin
            compromiso. Respondemos en menos de 24 horas.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {([
              ["map", <MapPinIcon key="map" size={18} color="#3B82F6" />, "Ubicación", "Villahermosa, Tabasco", "https://maps.google.com/?q=17.9869,-92.9303"] as const,
              ["phone", <PhoneIcon key="phone" size={18} color="#3B82F6" />, "Teléfono", "993 178 2620", "tel:+529931782620"] as const,
              ["mail", <MailIcon key="mail" size={18} color="#3B82F6" />, "Email", "contacto@mbdigitalsystems.com", null] as const,
              ["clock", <ClockIcon key="clock" size={18} color="#3B82F6" />, "Horario", "Lunes a Viernes: 9:00 AM – 6:00 PM", null] as const,
            ] as const).map(([id, icon, label, value, link]) => (
              <motion.div
                key={id}
                whileHover={{ x: 4 }}
                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    background: "#EFF6FF",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#64748B",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {label}
                  </div>
                  {link ? (
                    <a
                      href={link}
                      style={{ fontSize: 15, color: "#334155", fontWeight: 500, marginTop: 2, display: "block", textDecoration: "none" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <div
                      style={{ fontSize: 15, color: "#334155", fontWeight: 500, marginTop: 2 }}
                    >
                      {value}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <motion.form
            onSubmit={validateAndSubmit}
            noValidate
            whileHover={{ boxShadow: "0 20px 60px rgba(59,130,246,0.1)" }}
            style={{
              background: "#F8FAFF",
              border: "1px solid #E8F0FE",
              borderRadius: 24,
              padding: "clamp(24px,4vw,40px)",
            }}
          >

            <div style={{ marginBottom: 14 }}>
              <label htmlFor="contact-name" style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
              }}>
                Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Nombre *"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                style={inputStyle(!!errors.name)}
              />
              <div id="name-error" style={errorTextStyle("name")} role="alert">
                ⚠ {errors.name}
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label htmlFor="contact-phone" style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
              }}>
                Teléfono
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Teléfono *"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby="phone-error"
                style={inputStyle(!!errors.phone)}
              />
              <div id="phone-error" style={errorTextStyle("phone")} role="alert">
                ⚠ {errors.phone}
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label htmlFor="contact-email" style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
              }}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                style={inputStyle(!!errors.email)}
              />
              <div id="email-error" style={errorTextStyle("email")} role="alert">
                ⚠ {errors.email}
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#334155",
                  marginBottom: 10,
                }}
              >
                ¿Qué necesitas? <span style={{ color: "#EF4444" }}>*</span>
              </div>
              <div
                role="radiogroup"
                aria-label="¿Qué necesitas?"
                style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
              >
                {SERVICE_OPTIONS.map((opt) => {
                  const active = form.service === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => handleChange("service", opt.value)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 14px",
                        borderRadius: 100,
                        border: `1.5px solid ${active ? "#3B82F6" : "#E2E8F0"}`,
                        background: active ? "#EFF6FF" : "#fff",
                        color: active ? "#1E40AF" : "#475569",
                        fontWeight: active ? 700 : 500,
                        fontSize: 13,
                        cursor: "pointer",
                        fontFamily: "inherit",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span aria-hidden="true">{opt.icon}</span>
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
              }}>
                Mensaje
              </label>
              <textarea
                id="contact-message"
                placeholder="Cuéntanos tu proyecto... *"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                style={{ ...inputStyle(!!errors.message), resize: "vertical", marginBottom: 14 }}
              />
              <div id="message-error" style={errorTextStyle("message")} role="alert">
                ⚠ {errors.message}
              </div>
            </div>
            {errors.submit ? (
              <div
                role="alert"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  color: "#B91C1C",
                  borderRadius: 12,
                  padding: "10px 14px",
                  fontSize: 13,
                  fontWeight: 500,
                  marginBottom: 14,
                }}
              >
                <span aria-hidden="true">⚠</span>
                {errors.submit}
              </div>
            ) : null}
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={
                sending
                  ? {}
                  : { scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.35)" }
              }
              whileTap={sending ? {} : { scale: 0.97 }}
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: "14px 28px",
                fontSize: 16,
                fontWeight: 700,
                cursor: sending ? "not-allowed" : "pointer",
                opacity: sending ? 0.7 : 1,
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <CheckCircleIcon size={20} color="#10B981" />
                    Mensaje enviado correctamente
                  </motion.span>
                ) : sending ? (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <MailIcon size={18} color="#fff" /> Enviando…
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <MailIcon size={18} color="#fff" /> Enviar Mensaje
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <p style={{ fontSize: 12, color: "#64748B", marginTop: 12, textAlign: "center" }}>
              * Campos obligatorios. Respondemos en menos de 24 horas.
            </p>
          </motion.form>
        </AnimatedSection>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          marginTop: "clamp(40px,6vw,80px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "clamp(24px,4vw,40px)",
        }}
      >
        <AnimatedSection>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid #E2E8F0",
              height: "100%",
              minHeight: 300,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.918579182823!2d-92.9308478!3d17.9869428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e8e0b1b5b5b5b5%3A0x0!2sVillahermosa%2C+Tab.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de MB Digital Systems en Tabasco"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <LeadMagnet />
        </AnimatedSection>
      </div>
    </section>
  );
}
