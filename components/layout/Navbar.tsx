"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";
import { useTracking } from "@/components/hooks/useTracking";
import { PhoneIcon, HamburgerIcon, CloseIcon, MessageIcon } from "@/components/ui/icons/Icons";
import { gradients, easing, radius } from "@/data/theme";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy();
  const { trackEvent } = useTracking();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    trackEvent("nav_click", id.toLowerCase());
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{ cursor: "pointer" }}
            onClick={() => scrollTo("inicio")}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#1E40AF",
                letterSpacing: "-0.5px",
                fontFamily: "'Sora', sans-serif",
              }}
            >
              MB<span style={{ color: "#3B82F6" }}>Digital</span>
            </div>
            <div
              style={{
                fontSize: 9,
                color: "#6B7280",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginTop: -2,
              }}
            >
              Systems
            </div>
          </motion.div>

          <nav
            aria-label="Navegación principal"
            className="mb-nav-desktop"
            style={{ display: "flex", gap: 2, alignItems: "center" }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link;
              return (
                <motion.button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    position: "relative",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    color: isActive ? "#1E40AF" : "#374151",
                    fontWeight: isActive ? 700 : 500,
                    padding: "8px 14px",
                    borderRadius: 10,
                    fontFamily: "inherit",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#3B82F6";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#374151";
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 10,
                        background: "rgba(59,130,246,0.12)",
                      }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{link}</span>
                </motion.button>
              );
            })}
            <a
              href="tel:+529931782620"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "#64748B",
                fontWeight: 600,
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: 8,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#3B82F6"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#64748B"; }}
            >
              <PhoneIcon size={14} color="#64748B" />
              993 178 2620
            </a>
            <motion.a
              href={whatsappUrl(WHATSAPP_MESSAGES.paginaWeb)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("wa_click", "navbar", { plan: "Página Web" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: gradients.button,
                color: "#fff",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 700,
                padding: "10px 22px",
                borderRadius: radius.pill,
                fontFamily: "inherit",
                marginLeft: 4,
                boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
              }}
            >
              <MessageIcon size={14} color="#fff" /> Cotización gratis
            </motion.a>
          </nav>

          <motion.button
            className="mb-nav-mobile"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 24,
              color: "#1E40AF",
              padding: 8,
            }}
          >
            {open ? <CloseIcon size={22} color="#1E40AF" /> : <HamburgerIcon size={22} color="#1E40AF" />}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mb-nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: 68,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(59,130,246,0.12)",
              padding: "12px 20px 20px",
            }}
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link;
              return (
                <motion.button
                  key={link}
                  onClick={() => scrollTo(link)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: isActive ? "rgba(59,130,246,0.08)" : "none",
                    border: "none",
                    borderBottom: "1px solid #F1F5F9",
                    cursor: "pointer",
                    fontSize: 16,
                    color: isActive ? "#3B82F6" : "#374151",
                    fontWeight: isActive ? 700 : 600,
                    padding: "14px 12px",
                    fontFamily: "inherit",
                    borderRadius: 8,
                    transition: "all 0.2s",
                  }}
                >
                  {link}
                </motion.button>
              );
            })}
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <a
                href="tel:+529931782620"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "#1E40AF",
                  fontWeight: 700,
                  padding: "14px",
                  borderRadius: 12,
                  fontSize: 14,
                  textDecoration: "none",
                  fontFamily: "inherit",
                }}
              >
                <PhoneIcon size={16} color="#1E40AF" />
                Llamar ahora
              </a>
              <motion.a
                href={whatsappUrl(WHATSAPP_MESSAGES.paginaWeb)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("wa_click", "navbar", { plan: "Página Web" })}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  background: gradients.button,
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  padding: "14px",
                  borderRadius: 12,
                  fontFamily: "inherit",
                }}
              >
                <MessageIcon size={16} color="#fff" /> Cotización gratis
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
