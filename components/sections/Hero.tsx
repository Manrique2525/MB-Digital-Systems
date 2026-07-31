"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import { ShieldCheckIcon } from "@/components/ui/icons/Icons";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { trackEvent } = useTracking();

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(160deg,#EFF6FF 0%,#DBEAFE 40%,#EDE9FE 100%)",
      }}
    >
      <motion.div
        style={{
          y,
          opacity,
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "clamp(100px,15vw,130px) 20px 60px",
          maxWidth: 820,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100,
            padding: "6px 16px",
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
          Solo tomamos 3 proyectos este mes
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(38px,7vw,80px)",
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#0F172A",
            letterSpacing: "-2px",
            margin: "0 0 24px",
            fontFamily: "'Sora', sans-serif",
          }}
        >
          Del primer mensaje<br />
          <span
            style={{
              background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            a tu primer cliente
          </span>
          {" "}en 7 días
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            fontSize: "clamp(15px,2.5vw,20px)",
            color: "#64748B",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          Creamos páginas web que convierten visitantes en clientes de WhatsApp.
          Diseño moderno, marketing digital y sistemas a medida.{" "}
          <strong style={{ color: "#1E40AF", fontWeight: 700 }}>
            Sin complicaciones, con resultados reales.
          </strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href={whatsappUrl(WHATSAPP_MESSAGES.paginaWeb)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("hero_cta", "inicio");
              trackEvent("wa_click", "inicio", { plan: "Página Web" });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(59,130,246,0.45)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 100,
              fontSize: "clamp(14px,2vw,16px)",
              boxShadow: "0 4px 24px rgba(59,130,246,0.35)",
            }}
          >
            <span>Cotización gratis por WhatsApp</span>
            <span style={{ fontSize: 18 }}>→</span>
          </motion.a>
          <motion.button
            onClick={() =>
              document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.04, background: "rgba(59,130,246,0.08)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#1E40AF",
              fontWeight: 600,
              padding: "14px 24px",
              borderRadius: 100,
              fontSize: "clamp(13px,2vw,15px)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              fontFamily: "inherit",
            }}
          >
            Ver ejemplos reales →
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            marginTop: "clamp(48px,8vw,80px)",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px,6vw,56px)",
            flexWrap: "wrap",
          }}
        >
          {[
            ["20+", "Proyectos entregados"],
            ["⭐ 5/5", "Satisfacción"],
            ["< 24h", "Respuesta garantizada"],
          ].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(20px,4vw,28px)",
                  fontWeight: 800,
                  color: "#1E40AF",
                }}
              >
                {val}
              </div>
              <div
                style={{ fontSize: 13, color: "#64748B", fontWeight: 500, marginTop: 2 }}
              >
                {label}
              </div>
            </div>
          ))}
          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{
              marginTop: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#ECFDF5",
                border: "1px solid #A7F3D0",
                borderRadius: 100,
                padding: "6px 14px",
                color: "#065F46",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <ShieldCheckIcon size={16} color="#065F46" /> Garantía de satisfacción: si no te gusta, no pagas
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#64748B",
            fontSize: 22,
          }}
        >
          ↓
        </motion.div>
    </section>
  );
}