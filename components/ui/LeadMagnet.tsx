"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 100px) 20px",
        background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 40%, #EDE9FE 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "5%",
          left: "-5%",
          width: "min(400px,60vw)",
          height: "min(400px,60vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: "min(350px,50vw)",
          height: "min(350px,50vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <AnimatedSection style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 28,
              color: "#1E40AF",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10B981",
                display: "inline-block",
              }}
            />
            Auditoría digital gratuita
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.1,
            }}
          >
            ¿Tu página web está{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              perdiendo clientes?
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#64748B",
              maxWidth: 540,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            Recibe gratis un diagnóstico completo de tu presencia digital.
            Te decimos qué mejorar para que tus clientes te encuentren y te contacten.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  display: "flex",
                  gap: 12,
                  maxWidth: 480,
                  margin: "0 auto",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Tu email para enviarte el diagnóstico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: "1 1 220px",
                    padding: "14px 18px",
                    borderRadius: 100,
                    border: "1px solid #E2E8F0",
                    background: "#fff",
                    color: "#0F172A",
                    fontSize: 15,
                    outline: "none",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#3B82F6";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                />
                <motion.a
                  href={whatsappUrl(WHATSAPP_MESSAGES.auditoria)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    if (email && email.includes("@")) setSubmitted(true);
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    padding: "14px 28px",
                    borderRadius: 100,
                    fontSize: 15,
                    boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
                    flexShrink: 0,
                  }}
                >
                  <span>📊</span>
                  Quiero mi auditoría
                </motion.a>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "32px 28px",
                  maxWidth: 480,
                  margin: "0 auto",
                  border: "1px solid #A7F3D0",
                  boxShadow: "0 16px 48px rgba(16,185,129,0.12)",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 8,
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  ¡Auditoría en camino!
                </div>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                  Te enviaremos los resultados a tu correo. Mientras tanto, ¿quieres hablar con nosotros directamente?
                </p>
                <motion.a
                  href={whatsappUrl(WHATSAPP_MESSAGES.auditoria)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    padding: "12px 24px",
                    borderRadius: 100,
                    fontSize: 14,
                    marginTop: 20,
                    boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
                  }}
                >
                  💬 Hablar por WhatsApp
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {[
              ["⚡", "Respuesta en < 1 hora"],
              ["🔒", "Sin compromiso"],
              ["📊", "Incluye recomendaciones accionables"],
            ].map(([icon, text]) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "#64748B",
                  fontWeight: 500,
                }}
              >
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
