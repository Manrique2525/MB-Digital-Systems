"use client";

import { motion } from "framer-motion";
import { SERVICES, FEATURES } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Services() {
  return (
    <section
      id="servicios"
      style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection
          style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,80px)" }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#3B82F6",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Lo que hacemos
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,5vw,52px)",
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Nuestros Servicios
          </h2>
          <p
            style={{
              fontSize: "clamp(14px,2vw,18px)",
              color: "#64748B",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Soluciones digitales a la medida para cada tipo de negocio
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24,
            marginBottom: "clamp(40px,7vw,80px)",
          }}
        >
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(59,130,246,0.15)" }}
                style={{
                  background: "#F8FAFF",
                  border: "1px solid #E8F0FE",
                  borderRadius: 20,
                  padding: "clamp(24px,4vw,40px) clamp(20px,3vw,32px)",
                  height: "100%",
                  cursor: "default",
                  transition: "border-color 0.3s",
                }}
              >
                <div style={{ fontSize: 42, marginBottom: 20 }}>{s.icon}</div>
                <h3
                  style={{
                    fontSize: "clamp(18px,2.5vw,22px)",
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 12,
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, margin: 0 }}>
                  {s.desc}
                </p>
                <motion.a
                  href="https://wa.me/+529931782620?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.title)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: 28,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: s.color,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  Cotizar este servicio →
                </motion.a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div
            style={{
              background:
                "linear-gradient(135deg,#1E40AF 0%,#3B82F6 50%,#6366F1 100%)",
              borderRadius: 24,
              padding: "clamp(32px,5vw,64px) clamp(20px,4vw,48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "clamp(28px,4vw,48px)",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 900,
                  color: "#fff",
                  margin: "0 0 16px",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.5px",
                }}
              >
                Desarrollo a la Medida
              </h3>
              <p
                style={{
                  fontSize: "clamp(14px,1.5vw,16px)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                }}
              >
                ¿Necesitas algo específico para tu negocio? Escríbenos y juntos
                convertimos tu idea en realidad.
              </p>
              <motion.a
                href="https://wa.me/+529931782620"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  color: "#1E40AF",
                  textDecoration: "none",
                  fontWeight: 800,
                  padding: "14px 28px",
                  borderRadius: 100,
                  fontSize: 15,
                }}
              >
                💬 Solicitar Cotización
              </motion.a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "clamp(12px,1.5vw,14px)",
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 12,
                    }}
                  >
                    ✓
                  </span>
                  {f}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}