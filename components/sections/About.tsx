"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section
      id="nosotros"
      style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#fff" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "center",
        }}
      >
        <AnimatedSection>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#3B82F6",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Sobre nosotros
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,48px)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1px",
              margin: "0 0 24px",
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.15,
            }}
          >
            No somos solo programadores.<br />
            <span
              style={{
                background: "linear-gradient(90deg,#3B82F6,#6366F1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Somos tu equipo de crecimiento.
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px,1.8vw,16px)",
              color: "#64748B",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Empezamos como desarrolladores, pero aprendimos algo importante:
            un bonito sitio web que no trae clientes es solo un gasto. Por eso
            combinamos desarrollo con marketing digital para que cada proyecto
            genere resultados reales.
          </p>
          <p
            style={{
              fontSize: "clamp(14px,1.8vw,16px)",
              color: "#64748B",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Trabajamos contigo de principio a fin: desde entender tu negocio
            hasta lanzar y medir resultados. Sin complicaciones, sin excusas.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              ["Proyectos", "20+"],
              ["Clientes", "15+"],
              ["Tecnologías", "8+"],
            ].map(([label, val]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "clamp(28px,5vw,36px)",
                    fontWeight: 800,
                    color: "#3B82F6",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {val}
                </div>
                <div style={{ fontSize: 13, color: "#64748B", fontWeight: 600 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div style={{ position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                background: "linear-gradient(160deg,#EFF6FF 0%,#DBEAFE 40%,#EDE9FE 100%)",
                aspectRatio: "4/3",
                position: "relative",
                boxShadow: "0 32px 80px rgba(59,130,246,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "5%",
                  width: "min(200px,40vw)",
                  height: "min(200px,40vw)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle,rgba(59,130,246,0.2) 0%,transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <motion.div
                animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{
                  position: "absolute",
                  bottom: "10%",
                  right: "5%",
                  width: "min(260px,50vw)",
                  height: "min(260px,50vw)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle,rgba(139,92,246,0.15) 0%,transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 40 }}>
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ fontSize: 72, marginBottom: 20 }}
                >
                  💻
                </motion.div>
                <div style={{
                  fontSize: "clamp(18px,3vw,28px)",
                  fontWeight: 800,
                  color: "#0F172A",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.8px",
                  marginBottom: 8,
                }}>
                  Equipo 100% remoto
                </div>
                <div style={{
                  fontSize: "clamp(13px,1.8vw,16px)",
                  color: "#64748B",
                  maxWidth: 300,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}>
                  Trabajamos desde cualquier lugar para darte el mejor resultado
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: -20,
                left: -16,
                background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                borderRadius: 18,
                padding: "16px 22px",
                boxShadow: "0 16px 40px rgba(59,130,246,0.3)",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 11,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                Disponibilidad
              </div>
              <div
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: "#10B981",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                Proyectos abiertos
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}