"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (dismissed) return;
      if (e.clientY <= 0) {
        setShow(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exit-popup-shown");
    if (alreadyShown) return;

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const close = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit-popup-shown", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, #0F172A, #1E293B)",
              borderRadius: "24px",
              padding: "40px",
              maxWidth: "480px",
              width: "100%",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              textAlign: "center",
            }}
          >
            <button
              onClick={close}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                color: "#64748B",
                fontSize: "24px",
                cursor: "pointer",
                padding: "4px",
                lineHeight: 1,
              }}
            >
              {"\u2715"}
            </button>

            <div style={{ fontSize: "48px", marginBottom: "16px" }}>{"\uD83C\uDF81"}</div>

            <h3
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 0 12px",
                lineHeight: 1.2,
              }}
            >
              {"\u00A1"}Espera! Antes de irte...
            </h3>

            <p
              style={{
                fontSize: "16px",
                color: "#94A3B8",
                margin: "0 0 24px",
                lineHeight: 1.6,
              }}
            >
              Descarga nuestra{" "}
              <strong style={{ color: "#3B82F6" }}>
                Gu\u00EDa Gratis: 10 Errores que Destruyen tu Presencia Digital
              </strong>{" "}
              y aprende a evitarlos.
            </p>

            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.auditoria)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(37,211,102,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(37,211,102,0.3)";
              }}
            >
              {"\uD83D\uDCF2"} Quiero mi gu\u00EDa gratis
            </a>

            <p
              style={{
                fontSize: "12px",
                color: "#475569",
                marginTop: "16px",
                margin: "16px 0 0",
              }}
            >
              Sin spam. Solo contenido de valor para tu negocio.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
