"use client";

import { motion } from "framer-motion";
import { NAV_LINKS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";

export function Footer() {
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
                { icon: "fab fa-facebook-f", href: "https://facebook.com/MBDigitalSystems", label: "Facebook" },
                { icon: "fab fa-instagram", href: "https://instagram.com/mbdigitalsystems", label: "Instagram" },
                { icon: "fab fa-linkedin-in", href: "https://linkedin.com/company/mbdigitalsystems", label: "LinkedIn" },
                { icon: "fab fa-whatsapp", href: whatsappUrl(WHATSAPP_MESSAGES.contacto), label: "WhatsApp" },
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, color: "#3B82F6" }}
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
                  <i className={social.icon} />
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
                📞 993 178 2620
              </a>
              <span>✉️ contacto@mbdigitalsystems.com</span>
              <span>📍 Tabasco, México</span>
              <span>🕐 Lun - Vie: 9:00 AM – 6:00 PM</span>
            </div>
            <motion.a
              href={whatsappUrl(WHATSAPP_MESSAGES.contacto)}
              target="_blank"
              whileHover={{ scale: 1.03 }}
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
              💬 WhatsApp directo
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
              textDecoration: "none",
              fontSize: 12,
              transition: "color 0.2s",
            }}
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
