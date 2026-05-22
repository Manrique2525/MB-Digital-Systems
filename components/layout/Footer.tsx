"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/data/constants";

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
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "clamp(28px,4vw,48px)",
            marginBottom: "clamp(28px,4vw,48px)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 900,
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
              Soluciones web profesionales que transforman tu negocio en el mundo
              digital.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                "fab fa-facebook-f",
                "fab fa-twitter",
                "fab fa-linkedin-in",
                "fab fa-instagram",
              ].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
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
                  }}
                >
                  <i className={icon} />
                </motion.a>
              ))}
            </div>
          </div>
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
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <span>📞 993 178 2620</span>
              <span>✉️ manriquemontero25@gmail.com</span>
              <span>📍 Tabasco, México</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            textAlign: "center",
            fontSize: 12,
          }}
        >
          © 2025 MB Digital Systems. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}