"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";

const CONTEXT_MESSAGES: Record<string, string> = {
  Inicio: WHATSAPP_MESSAGES.generico,
  Servicios: "Hola, me interesa un servicio. ¿Me pueden dar más información?",
  Nosotros: WHATSAPP_MESSAGES.contacto,
  Proyectos: WHATSAPP_MESSAGES.proyectoSimilar,
  Precios: "Hola, quiero una cotización personalizada para mi proyecto.",
  Contacto: WHATSAPP_MESSAGES.contacto,
};

const TOOLTIPS: Record<string, string> = {
  Inicio: "¿Necesitas ayuda?",
  Servicios: "¿Te interesa algún servicio?",
  Nosotros: "Hablemos de tu proyecto",
  Proyectos: "¿Quieres algo similar?",
  Precios: "¿Preguntas sobre precios?",
  Contacto: "Escríbenos directo",
};

export function WhatsAppFloat() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isInContact = activeSection === "Contacto";

  const message = useMemo(
    () => CONTEXT_MESSAGES[activeSection] || WHATSAPP_MESSAGES.generico,
    [activeSection]
  );

  const tooltip = useMemo(
    () => TOOLTIPS[activeSection] || "¿Necesitas ayuda?",
    [activeSection]
  );

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <AnimatePresence>
      {scrolled && !isInContact && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "fixed",
            bottom: "clamp(20px, 3vw, 32px)",
            right: "clamp(16px, 2.5vw, 32px)",
            zIndex: 200,
          }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, x: 8, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 10px)",
                  right: 0,
                  whiteSpace: "nowrap",
                  background: "#fff",
                  color: "#0F172A",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: 10,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  pointerEvents: "none",
                }}
              >
                {tooltip}
                <div
                  style={{
                    position: "absolute",
                    bottom: -5,
                    right: 20,
                    width: 10,
                    height: 10,
                    background: "#fff",
                    transform: "rotate(45deg)",
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.05)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button + label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Desktop label */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="whatsapp-float-label"
              style={{
                display: "none",
                background: "#fff",
                color: "#0F172A",
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: 10,
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              💬 Chatea con nosotros
            </motion.span>

            {/* Button with pulse */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid #25D366",
                  }}
                />
                <motion.div
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid #25D366",
                  }}
                />
              </div>

              <motion.a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: "#25D366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  color: "#fff",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.5)",
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                <i className="fab fa-whatsapp" />
              </motion.a>
            </div>
          </div>

          {/* Responsive CSS via style tag */}
          <style>{`
            @media (min-width: 768px) {
              .whatsapp-float-label {
                display: block !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
