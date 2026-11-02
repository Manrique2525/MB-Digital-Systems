"use client";

import { motion } from "framer-motion";
import { NAV_ITEMS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, MessageIcon, FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/icons/Icons";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { colors, radius } from "@/data/theme";

export function Footer() {
  const { trackEvent } = useTracking();
  return (
    <footer
      style={{
        background: colors.ink,
        color: colors.muted,
        padding: "clamp(40px,7vw,64px) 20px clamp(24px,4vw,32px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "clamp(28px,4vw,48px)",
            marginBottom: "clamp(28px,4vw,48px)",
          }}
        >
          {/* Marca */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <BrandLogo size="clamp(60px, 8vw, 76px)" radius={18} />
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 20,
              }}
            >
              Desarrollo de software y marketing digital para negocios que
              quieren crecer. Cotización sin compromiso.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: "facebook", href: "https://facebook.com/MBDigitalSystems", label: "Facebook" },
                { icon: "instagram", href: "https://instagram.com/mbdigitalsystems", label: "Instagram" },
                { icon: "linkedin", href: "https://linkedin.com/company/mbdigitalsystems", label: "LinkedIn" },
                { icon: "whatsapp", href: whatsappUrl(WHATSAPP_MESSAGES.contacto), label: "WhatsApp" },
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, color: colors.white }}
                  onClick={
                    social.icon === "whatsapp"
                      ? () => trackEvent("wa_click", "footer", { plan: "Contacto" })
                      : undefined
                  }
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(255,255,255,0.09)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.muted,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  {social.icon === "facebook" && <FacebookIcon size={18} color={colors.muted} />}
                  {social.icon === "instagram" && <InstagramIcon size={18} color={colors.muted} />}
                  {social.icon === "linkedin" && <LinkedinIcon size={18} color={colors.muted} />}
                  {social.icon === "whatsapp" && <WhatsAppIcon size={18} color={colors.muted} />}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 700,
                marginBottom: 18,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Servicios
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Páginas web",
                "Sistemas a medida",
                "Tiendas en línea",
                "Marketing digital",
                "Diseño y contenido",
              ].map((service) => (
                <span
                  key={service}
                  style={{
                    color: colors.muted,
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 700,
                marginBottom: 18,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Navegación
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.sectionId}
                  href={item.href}
                  whileHover={{ x: 4, color: colors.white }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: 44,
                    color: colors.muted,
                    textDecoration: "none",
                    fontSize: 14,
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 700,
                marginBottom: 18,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Contacto
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }}>
              <a
                href="tel:+529931782620"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  color: colors.muted,
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <PhoneIcon size={16} color={colors.muted} /> 993 178 2620
              </a>
              <a
                href="mailto:contacto@mbdigitalsystems.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  color: colors.muted,
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <MailIcon size={16} color={colors.muted} /> contacto@mbdigitalsystems.com
              </a>
              <a
                href="https://maps.google.com/?q=17.9869,-92.9303"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  color: colors.muted,
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <MapPinIcon size={16} color={colors.muted} /> Villahermosa, Tabasco
              </a>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 44 }}>
                <ClockIcon size={16} color={colors.muted} /> Lun - Vie: 9:00 AM – 6:00 PM
              </span>
            </div>
            <motion.a
              href={whatsappUrl(WHATSAPP_MESSAGES.contacto)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              onClick={() => trackEvent("wa_click", "footer", { plan: "Contacto" })}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                background: colors.primaryDark,
                color: colors.white,
                textDecoration: "none",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: radius.pill,
                fontSize: 13,
                marginTop: 16,
              }}
            >
              <MessageIcon size={16} color={colors.white} /> WhatsApp directo
            </motion.a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            textAlign: "center",
            fontSize: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div>
            © 2026 MB Digital Systems. Todos los derechos reservados.
          </div>
          <a
            href="/politica-privacidad"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: 44,
              color: colors.muted,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
