"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import { ShieldCheckIcon, StarIcon, ArrowRightIcon } from "@/components/ui/icons/Icons";

const STATS: { value: string; label: string; rating?: boolean }[] = [
  { value: "20+", label: "Proyectos entregados" },
  { value: "5/5", label: "Satisfacción", rating: true },
  { value: "< 24h", label: "Respuesta garantizada" },
];

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 140]);
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
        background: "#F8FAFF",
      }}
    >
      <motion.div
        style={{ y: bgY, position: "absolute", inset: "-15% 0 0", zIndex: 0 }}
        aria-hidden="true"
      >
        <Image
          src="/img/hero-workspace.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%", opacity: 0.18 }}
        />
      </motion.div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg,rgba(239,246,255,0.92) 0%,rgba(248,250,255,0.94) 55%,#F8FAFF 100%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(720px,90vw)",
          height: 560,
          zIndex: 1,
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side,rgba(59,130,246,0.14) 0%,rgba(139,92,246,0.08) 55%,transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
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
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100,
            padding: "7px 18px",
            marginBottom: 28,
            color: "#1E40AF",
            fontSize: 13,
            fontWeight: 600,
            boxShadow: "0 4px 16px rgba(59,130,246,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <ShieldCheckIcon size={16} color="#10B981" />
          Garantía de satisfacción: si no te gusta, no pagas
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
            <ArrowRightIcon size={16} color="#fff" />
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
            Ver ejemplos reales
            <ArrowRightIcon size={16} color="#1E40AF" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            marginTop: "clamp(48px,8vw,80px)",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px,6vw,56px)",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "clamp(20px,4vw,28px)",
                  fontWeight: 800,
                  color: "#1E40AF",
                }}
              >
                {stat.rating && (
                  <StarIcon size={20} color="#F59E0B" />
                )}
                {stat.value}
              </div>
              <div
                style={{ fontSize: 13, color: "#64748B", fontWeight: 500, marginTop: 2 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

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
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        ↓
      </motion.div>
    </section>
  );
}
