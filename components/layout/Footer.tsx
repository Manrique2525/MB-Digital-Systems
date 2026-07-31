"use client";

import { motion } from "framer-motion";
import { NAV_LINKS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, MessageIcon, FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/icons/Icons";

export function Footer() {
  const { trackEvent } = useTracking();
  return (
    <footer
      style={{
        background: "#0F172A",
        color: "#94A3B8",
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
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "#fff",
                fontFamily: "'Sora', sans-serif",
                marginBottom: 4,
              }}
            >
              MB<span style={{ color: "#3B82F6" }}>Digital</span>
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Systems
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 20,
              }}
            >
              Desarrollo web y marketing digital para negocios que quieren
              crecer. Cotización sin compromiso.
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
                  whileHover={{ y: -3, color: "#3B82F6" }}
                  onClick={
                    social.icon === "whatsapp"
                      ? () => trackEvent("wa_click", "footer", { plan: "Contacto" })
                      : undefined
                  }
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  {social.icon === "facebook" && <FacebookIcon size={16} color="#94A3B8" />}
                  {social.icon === "instagram" && <InstagramIcon size={16} color="#94A3B8" />}
                  {social.icon === "linkedin" && <LinkedinIcon size={16} color="#94A3B8" />}
                  {social.icon === "whatsapp" && <WhatsAppIcon size={16} color="#94A3B8" />}
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
                "Desarrollo Web",
                "Sistemas a Medida",
                "E-commerce",
                "SEO",
                "Marketing Digital",
              ].map((service) => (
                <span
                  key={service}
                  style={{
                    color: "#94A3B8",
                    fontSize: 14,
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
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 4, color: "#3B82F6" }}
                  style={{
                    color: "#94A3B8",
                    textDecoration: "none",
                    fontSize: 14,
                  }}
                >
                  {link}
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
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <PhoneIcon size={16} color="#94A3B8" /> 993 178 2620
              </a>
              <span><MailIcon size={16} color="#94A3B8" /> contacto@mbdigitalsystems.com</span>
              <a href="https://maps.google.com/?q=17.9869,-92.9303" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8", textDecoration: "none", fontSize: 13 }}>
                <MapPinIcon size={16} color="#94A3B8" /> Villahermosa, Tabasco
              </a>
              <span><ClockIcon size={16} color="#94A3B8" /> Lun - Vie: 9:00 AM – 6:00 PM</span>
            </div>
            <motion.a
              href={whatsappUrl(WHATSAPP_MESSAGES.contacto)}
              target="_blank"
              whileHover={{ scale: 1.03 }}
              onClick={() => trackEvent("wa_click", "footer", { plan: "Contacto" })}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: 100,
                fontSize: 13,
                marginTop: 16,
              }}
            >
              <MessageIcon size={16} color="#fff" /> WhatsApp directo
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
              color: "#64748B",
              fontSize: 12,
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
