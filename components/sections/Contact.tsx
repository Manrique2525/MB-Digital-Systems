"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Newsletter } from "@/components/ui/Newsletter";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validateAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !form.email.includes("@")) newErrors.email = true;
    if (!form.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const formData = new FormData();
    formData.append("form-name", "contacto");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    try {
      await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrors({ submit: true });
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
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
            {[
              ["📍", "Ubicación", "Fracc. Ciudad Bicentenario, Tabasco", null],
              ["📞", "Teléfono", "993 178 2620", "tel:+529931782620"],
              ["✉️", "Email", "contacto@mbdigitalsystems.com", null],
              ["🕐", "Horario", "Lunes a Viernes: 9:00 AM – 6:00 PM", null],
            ].map(([icon, label, value, link]) => (
              <motion.div
                key={label}
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
            name="contacto"
            method="POST"
            action="/__forms.html"
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
            <input type="hidden" name="form-name" value="contacto" />
            <p style={{ display: "none" }}>
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginBottom: 14,
              }}
            >
              <div>
                <label htmlFor="contact-name" style={{ display: "none" }}>Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Nombre *"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={errors.name}
                  style={inputStyle(errors.name)}
                />
              </div>
              <div>
                <label htmlFor="contact-email" style={{ display: "none" }}>Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={errors.email}
                  style={inputStyle(errors.email)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" style={{ display: "none" }}>Asunto</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Asunto"
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                style={{ ...inputStyle(false), marginBottom: 14 }}
              />
            </div>
            <div>
              <label htmlFor="contact-message" style={{ display: "none" }}>Mensaje</label>
              <textarea
                id="contact-message"
                placeholder="Cuéntanos tu proyecto... *"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.message}
                style={{ ...inputStyle(errors.message), resize: "vertical", marginBottom: 20 }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.35)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: "14px 28px",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
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
                    <motion.span
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      ✅
                    </motion.span>
                    Mensaje enviado correctamente
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ✉️ Enviar Mensaje
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120854.859453!2d-93.0!3d17.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e8e0b1b5b5b5b5%3A0x0!2sTabasco%2C+M%C3%A9xico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
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
          <Newsletter />
        </AnimatedSection>
      </div>
    </section>
  );
}