"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { ChartBarIcon, CheckCircleIcon, MessageIcon, ZapIcon, LockIcon } from "@/components/ui/icons/Icons";
import { useTracking } from "@/components/hooks/useTracking";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export function LeadMagnet() {
  const { getSessionId, trackEvent } = useTracking();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    try {
      await fetch(`${API_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: getSessionId(),
          name: email.split("@")[0],
          email,
          message: "Solicitó auditoría digital gratuita",
          source: "lead_magnet",
        }),
      });
    } catch {
      // Silent fail — WhatsApp still opens
    }

    setSubmitted(true);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
        borderRadius: 20,
        padding: "clamp(28px, 4vw, 40px)",
        border: "1px solid rgba(59,130,246,0.2)",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ChartBarIcon size={48} color="#3B82F6" />
      <h3
        style={{
          fontSize: "clamp(18px, 2.5vw, 22px)",
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 8px",
          fontFamily: "'Sora', sans-serif",
        }}
      >
        Auditoría digital gratuita
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "#94A3B8",
          margin: "0 0 24px",
          lineHeight: 1.6,
        }}
      >
        Descubre qué está frenando tu presencia digital. Recibe un diagnóstico
        completo sin costo.
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
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: "1 1 180px",
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #334155",
                background: "#0F172A",
                color: "#fff",
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#3B82F6";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#334155";
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
                trackEvent("wa_click", "lead-magnet", { plan: "Auditoría gratuita" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                padding: "12px 24px",
                borderRadius: 12,
                fontSize: 14,
                boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
                flexShrink: 0,
              }}
            >
              Quiero mi auditoría
            </motion.a>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: "rgba(16,185,129,0.15)",
              borderRadius: 12,
              padding: "20px",
            }}
          >
            <CheckCircleIcon size={20} color="#10B981" />
            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: "#10B981",
                marginBottom: 6,
                fontFamily: "'Sora', sans-serif",
              }}
            >
              ¡Auditoría en camino!
            </div>
            <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.5, margin: "0 0 16px" }}>
              Te enviaremos los resultados a tu correo.
            </p>
            <motion.a
              href={whatsappUrl(WHATSAPP_MESSAGES.auditoria)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => trackEvent("wa_click", "lead-magnet", { plan: "Auditoría gratuita" })}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: 12,
                fontSize: 13,
              }}
            >
              <MessageIcon size={18} color="#fff" /> Hablar por WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          marginTop: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {[
          [<ZapIcon key="zap" size={16} />, "Respuesta rápida"],
          [<LockIcon key="lock" size={16} />, "Sin compromiso"],
        ].map(([icon, text], i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "#64748B",
              fontWeight: 500,
            }}
          >
            <span>{icon}</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
