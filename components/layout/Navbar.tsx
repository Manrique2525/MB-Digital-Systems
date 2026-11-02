"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";
import { useTracking } from "@/components/hooks/useTracking";
import { PhoneIcon, HamburgerIcon, CloseIcon, MessageIcon } from "@/components/ui/icons/Icons";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { colors, radius } from "@/data/theme";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy();
  const { trackEvent } = useTracking();
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1200) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        window.setTimeout(() => toggleRef.current?.focus(), 0);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    trackEvent("nav_click", sectionId);
  };

  const navLinkStyle = (isActive: boolean) => ({
    position: "relative" as const,
    display: "inline-flex",
    alignItems: "center",
    minHeight: 44,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
    color: isActive ? colors.primaryDark : colors.line,
    fontWeight: isActive ? 700 : 500,
    padding: "8px 14px",
    borderRadius: 10,
    fontFamily: "inherit",
    textDecoration: "none",
    transition: "color 0.2s",
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
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
          <motion.a
            href="#inicio"
            aria-label="MB Digital Systems, ir al inicio"
            whileHover={{ scale: 1.03 }}
            onClick={() => handleNavClick("inicio")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <BrandLogo priority />
          </motion.a>

          <nav
            aria-label="Navegación principal"
            className="mb-nav-desktop"
            style={{ display: "flex", gap: 2, alignItems: "center" }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <motion.a
                  key={item.sectionId}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => handleNavClick(item.sectionId)}
                  style={navLinkStyle(isActive)}
                  onMouseEnter={(event) => {
                    if (!isActive) event.currentTarget.style.color = colors.primaryDark;
                  }}
                  onMouseLeave={(event) => {
                    if (!isActive) event.currentTarget.style.color = colors.line;
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
                  <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
                </motion.a>
              );
            })}
            <a
              href="tel:+529931782620"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                minHeight: 44,
                fontSize: 13,
                color: colors.slate,
                fontWeight: 600,
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: 8,
                transition: "color 0.2s",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = colors.primaryDark;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = colors.slate;
              }}
            >
              <PhoneIcon size={14} color={colors.slate} />
              993 178 2620
            </a>
            <motion.a
              href={whatsappUrl(WHATSAPP_MESSAGES.cotizacion)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("wa_click", "navbar", { plan: "Cotización" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                minHeight: 44,
                background: colors.primaryDark,
                color: colors.white,
                textDecoration: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 700,
                padding: "10px 22px",
                borderRadius: radius.pill,
                fontFamily: "inherit",
                marginLeft: 4,
                boxShadow: "0 4px 20px rgba(30,64,175,0.28)",
              }}
            >
              <MessageIcon size={14} color={colors.white} /> Cotización gratis
            </motion.a>
          </nav>

          <motion.button
            ref={toggleRef}
            className="mb-nav-mobile"
            onClick={() => setOpen((current) => !current)}
            whileTap={{ scale: 0.9 }}
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{
              width: 44,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: colors.primaryDark,
              padding: 0,
            }}
          >
            {open ? (
              <CloseIcon size={22} color={colors.primaryDark} />
            ) : (
              <HamburgerIcon size={22} color={colors.primaryDark} />
            )}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            id="mobile-menu"
            aria-label="Navegación móvil"
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
              maxHeight: "calc(100dvh - 68px)",
              overflowY: "auto",
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(59,130,246,0.12)",
              padding: "12px 20px 20px",
            }}
          >
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.label;
              return (
                <motion.a
                  key={item.sectionId}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => handleNavClick(item.sectionId)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    minHeight: 48,
                    textAlign: "left",
                    background: isActive ? "rgba(59,130,246,0.08)" : "none",
                    border: "none",
                    borderBottom: `1px solid ${colors.border}`,
                    cursor: "pointer",
                    fontSize: 16,
                    color: isActive ? colors.primaryDark : colors.line,
                    fontWeight: isActive ? 700 : 600,
                    padding: "12px",
                    fontFamily: "inherit",
                    textDecoration: "none",
                    borderRadius: 8,
                    transition: "all 0.2s",
                  }}
                >
                  {item.label}
                </motion.a>
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
                  minHeight: 48,
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: colors.primaryDark,
                  fontWeight: 700,
                  padding: "12px",
                  borderRadius: 12,
                  fontSize: 14,
                  textDecoration: "none",
                  fontFamily: "inherit",
                }}
              >
                <PhoneIcon size={16} color={colors.primaryDark} />
                Llamar ahora
              </a>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.cotizacion)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setOpen(false);
                  trackEvent("wa_click", "navbar", { plan: "Cotización" });
                }}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  minHeight: 48,
                  background: colors.primaryDark,
                  color: colors.white,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "12px",
                  borderRadius: 12,
                  fontFamily: "inherit",
                }}
              >
                <MessageIcon size={16} color={colors.white} /> Cotización gratis
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
