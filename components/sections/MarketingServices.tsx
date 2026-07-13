"use client";

import { motion } from "framer-motion";
import { MARKETING_SERVICES } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function MarketingServices() {
  return (
    <section
      id="marketing"
      style={{ padding: "clamp(60px, 10vw, 120px) 20px", background: "#F8FAFF" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection
          style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 80px)" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
              color: "#8B5CF6",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10B981",
                display: "inline-block",
              }}
            />
            Marketing Digital
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Atrae más clientes{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #8B5CF6, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sin vender más
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#64748B",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Tu negocio necesita visibilidad. Hacemos que tus clientes ideales te
            encuentren cuando buscan exactamente lo que ofreces.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: "clamp(40px, 7vw, 80px)",
          }}
        >
          {MARKETING_SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: `0 24px 60px ${s.color}15`,
                }}
                style={{
                  background: "#fff",
                  border: "1px solid #E8F0FE",
                  borderRadius: 20,
                  padding: "clamp(24px, 4vw, 40px) clamp(20px, 3vw, 32px)",
                  height: "100%",
                  cursor: "default",
                  transition: "border-color 0.3s",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: 42, marginBottom: 20 }}>{s.icon}</div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 12,
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#64748B",
                    lineHeight: 1.7,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                {s.price && (
                  <div style={{
                    marginTop: 20,
                    padding: "12px 0",
                    borderTop: "1px solid #E8F0FE",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                  }}>
                    <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>Desde</span>
                    <span style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 800,
                      fontFamily: "'Sora', sans-serif",
                      color: s.color,
                    }}>
                      ${s.price}
                    </span>
                    <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>/mes</span>
                  </div>
                )}
                <motion.a
                  href={`https://wa.me/+529931782620?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: 16,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: `linear-gradient(135deg,${s.color},#1E40AF)`,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    padding: "12px 20px",
                    borderRadius: 100,
                  }}
                >
                  Cotizar ahora →
                </motion.a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)",
              borderRadius: 24,
              padding: "clamp(32px, 5vw, 64px) clamp(20px, 4vw, 48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "clamp(28px, 4vw, 48px)",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40%",
                right: "-8%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 16px",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.5px",
                }}
              >
                ¿Tu negocio no aparece en Google?
              </h3>
              <p
                style={{
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                }}
              >
                Cada día, cientos de personas buscan tus servicios en internet. Si no
                apareces, van con tu competencia. Cambiamos eso.
              </p>
              <motion.a
                href="https://wa.me/+529931782620?text=Hola,%20quiero%20una%20auditor%C3%ADa%20digital%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  color: "#8B5CF6",
                  textDecoration: "none",
                  fontWeight: 800,
                  padding: "14px 28px",
                  borderRadius: 100,
                  fontSize: 15,
                }}
              >
                📊 Auditoría digital gratuita
              </motion.a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { emoji: "📈", title: "Resultados medibles", desc: "Reportes mensuales con métricas reales de crecimiento." },
                { emoji: "🎯", title: "Segmentación precisa", desc: "Tus anuncios llegan exactamente a quien necesita tu servicio." },
                { emoji: "💰", title: "Retorno de inversión", desc: "Cada peso invertido se traduce en clientes reales." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "clamp(12px, 1.5vw, 14px)",
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
                    {item.emoji}
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 2 }}>{item.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.7)" }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
