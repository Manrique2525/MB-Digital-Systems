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
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-1px",
              margin: "0 0 24px",
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.15,
            }}
          >
            Tecnología que<br />
            <span
              style={{
                background: "linear-gradient(90deg,#3B82F6,#6366F1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              impulsa tu negocio
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
            MB Digital Systems es una empresa especializada en el desarrollo de
            soluciones web personalizadas. Combinamos creatividad y tecnología para
            ofrecer productos de alta calidad.
          </p>
          <p
            style={{
              fontSize: "clamp(14px,1.8vw,16px)",
              color: "#64748B",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Entregamos proyectos a tiempo, dentro del presupuesto y superando las
            expectativas de cada cliente.
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
                    fontWeight: 900,
                    color: "#3B82F6",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {val}
                </div>
                <div style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600 }}>
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
                boxShadow: "0 32px 80px rgba(59,130,246,0.18)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80"
                alt="Equipo MB Digital"
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                }}
              />
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