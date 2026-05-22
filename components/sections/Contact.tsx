"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

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
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-1px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.2,
            }}
          >
            Hablemos de<br />tu proyecto
          </h2>
          <p
            style={{
              fontSize: "clamp(14px,1.8vw,16px)",
              color: "#64748B",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Cuéntanos tu idea y la convertimos en realidad. Respondemos en menos de
            24 horas.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              ["📍", "Ubicación", "Fracc. Ciudad Bicentenario, Tabasco"],
              ["📞", "Teléfono", "993 178 2620"],
              ["✉️", "Email", "manriquemontero25@gmail.com"],
              ["🕐", "Horario", "Lunes a Viernes: 9:00 AM – 6:00 PM"],
            ].map(([icon, label, value]) => (
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
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#94A3B8",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{ fontSize: 15, color: "#334155", fontWeight: 500, marginTop: 2 }}
                  >
                    {value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ boxShadow: "0 20px 60px rgba(59,130,246,0.1)" }}
            style={{
              background: "#F8FAFF",
              border: "1px solid #E8F0FE",
              borderRadius: 24,
              padding: "clamp(24px,4vw,40px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginBottom: 14,
              }}
            >
              {["name", "email"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Nombre" : "Email"}
                  value={form[field as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                  style={{
                    background: "#fff",
                    border: "1px solid #E2E8F0",
                    borderRadius: 12,
                    padding: "12px 14px",
                    fontSize: 14,
                    color: "#1E293B",
                    outline: "none",
                    fontFamily: "inherit",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
              ))}
            </div>
            <input
              type="text"
              placeholder="Asunto"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              style={{
                width: "100%",
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                padding: "12px 14px",
                fontSize: 14,
                color: "#1E293B",
                outline: "none",
                marginBottom: 14,
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
            <textarea
              placeholder="Cuéntanos tu proyecto..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              style={{
                width: "100%",
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                padding: "12px 14px",
                fontSize: 14,
                color: "#1E293B",
                outline: "none",
                resize: "vertical",
                marginBottom: 20,
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ✅ Mensaje enviado
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
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
}