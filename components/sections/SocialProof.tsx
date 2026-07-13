"use client";

import { motion } from "framer-motion";
import { TESTIMONIOS, METRICS } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function SocialProof() {
  return (
    <section
      id="testimonios"
      style={{ padding: "clamp(60px, 10vw, 120px) 20px", background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Métricas */}
        <AnimatedSection
          style={{ marginBottom: "clamp(60px, 10vw, 100px)" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 24,
            }}
          >
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  textAlign: "center",
                  padding: "clamp(24px, 3vw, 36px) 16px",
                  background: "#F8FAFF",
                  border: "1px solid #E8F0FE",
                  borderRadius: 20,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{m.icon}</div>
                <div
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 900,
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-1px",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#64748B",
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonios */}
        <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
              color: "#1E40AF",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Testimonios reales
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Lo que dicen nuestros{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              clientes
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#64748B",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Resultados reales de negocios que confiaron en nosotros
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIOS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 60px rgba(59,130,246,0.12)",
                }}
                style={{
                  background: "#F8FAFF",
                  border: "1px solid #E8F0FE",
                  borderRadius: 24,
                  padding: "clamp(24px, 4vw, 36px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Estrellas + métrica destacada */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <span key={si} style={{ color: "#F59E0B", fontSize: 16 }}>
                        ★
                      </span>
                    ))}
                  </div>
                  {t.text.match(/\d+%/)?.[0] && (
                    <div style={{
                      background: "#ECFDF5",
                      border: "1px solid #A7F3D0",
                      borderRadius: 100,
                      padding: "4px 12px",
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#065F46",
                    }}>
                      📈 {t.text.match(/\d+%/)?.[0]} mejora
                    </div>
                  )}
                </div>

                {/* Texto */}
                <p
                  style={{
                    fontSize: 15,
                    color: "#334155",
                    lineHeight: 1.8,
                    margin: "0 0 24px",
                    flex: 1,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Persona */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <img
                    src={t.avatar}
                    alt={`Foto de ${t.name}, ${t.role} en ${t.company}`}
                    width={48}
                    height={48}
                    loading="lazy"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#0F172A",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#94A3B8",
                      }}
                    >
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
