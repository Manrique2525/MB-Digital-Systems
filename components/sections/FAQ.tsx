"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQ_ITEMS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import { MessageIcon } from "@/components/ui/icons/Icons";
import { easing, radius } from "@/data/theme";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      style={{
        borderBottom: "1px solid #E8F0FE",
      }}
    >
      <motion.button
        id={`faq-button-${index}`}
        onClick={() => setOpen(!open)}
        whileHover={{ backgroundColor: "rgba(59,130,246,0.04)" }}
        style={{
          width: "100%",
          minHeight: 56,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: 700,
            color: "#0F172A",
            fontFamily: "'Sora', sans-serif",
            paddingRight: 16,
          }}
        >
          {q}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            fontSize: 20,
            color: "#1E40AF",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          +
        </motion.span>
      </motion.button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        aria-hidden={!open}
        inert={!open}
        initial={false}
        animate={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: easing }}
        style={{ display: "grid", gridTemplateRows: "0fr" }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <p
            style={{
              fontSize: "clamp(14px, 1.6vw, 15px)",
              color: "#64748B",
              lineHeight: 1.75,
              paddingBottom: 20,
              margin: 0,
            }}
          >
            {a}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  const { trackEvent } = useTracking();
  return (
    <section
      id="faq"
      style={{
        padding: "clamp(60px, 10vw, 120px) 20px",
        background: "#F8FAFF",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 72px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: radius.pill,
              padding: "6px 16px",
              marginBottom: 24,
              color: "#1E40AF",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Preguntas frecuentes
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            ¿Tienes{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              dudas?
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#64748B",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Las respuestas a las preguntas que más nos hacen nuestros clientes
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div
            style={{
              background: "#fff",
              border: "1px solid #E8F0FE",
              borderRadius: radius.panel,
              padding: "clamp(16px, 3vw, 32px)",
            }}
          >
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={item.id} q={item.question} a={item.answer} index={i} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection style={{ textAlign: "center", marginTop: 48 }}>
          <p
            style={{
              fontSize: 15,
              color: "#64748B",
              marginBottom: 16,
            }}
          >
            ¿No encontraste lo que buscabas?
          </p>
          <motion.a
            href={whatsappUrl(WHATSAPP_MESSAGES.duda)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => trackEvent("wa_click", "faq", { plan: "Dudas generales" })}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#1E40AF",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: radius.pill,
              fontSize: 15,
            }}
          >
            <MessageIcon size={18} color="#fff" /> Pregúntanos por WhatsApp
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
