"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CookieIcon } from "@/components/ui/icons/Icons";
import { colors } from "@/data/theme";

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => acceptRef.current?.focus(), 250);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        localStorage.setItem("cookie-consent", "declined");
        setShow(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [show]);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          role="dialog"
          aria-modal="false"
          aria-label="Aviso de privacidad y cookies"
          aria-describedby="cookie-description"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            padding: "16px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              background: "rgba(15, 23, 42, 0.97)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              boxShadow: "0 -4px 30px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <p
              id="cookie-description"
              style={{
                color: "#E2E8F0",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: 0,
                flex: "1 1 400px",
              }}
            >
              <CookieIcon size={18} color="#E2E8F0" /> Usamos almacenamiento local y medición
              interna para recordar tus preferencias y entender cómo se usa el sitio.
              Al continuar navegando, aceptas su uso.
            </p>
            <div style={{ display: "flex", gap: "10px", flexShrink: 0, flexWrap: "wrap" }}>
              <button
                onClick={decline}
                style={{
                  minHeight: 44,
                  background: "transparent",
                  color: "#CBD5E1",
                  border: "1px solid #64748B",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = "#CBD5E1";
                  event.currentTarget.style.color = "#F8FAFC";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = "#64748B";
                  event.currentTarget.style.color = "#CBD5E1";
                }}
              >
                Rechazar
              </button>
              <button
                ref={acceptRef}
                onClick={accept}
                style={{
                  minHeight: 44,
                  background: colors.primaryDark,
                  color: "#fff",
                  border: "1px solid transparent",
                  borderRadius: "10px",
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = colors.ink;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = colors.primaryDark;
                }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
