"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="proyectos"
      style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#F8FAFF" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection
          style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,72px)" }}
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
            Portafolio
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
            Proyectos Recientes
          </h2>
          <p
            style={{
              fontSize: "clamp(14px,2vw,18px)",
              color: "#64748B",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Cada proyecto diseñado y desarrollado para superar expectativas
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -10 }}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid #E8F0FE",
                  boxShadow:
                    hovered === i
                      ? "0 24px 60px rgba(59,130,246,0.18)"
                      : "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "16/9",
                  }}
                >
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    animate={{ scale: hovered === i ? 1.07 : 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(30,64,175,0.75)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <motion.a
                          href={p.link}
                          target="_blank"
                          initial={{ y: 12, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.05 }}
                          style={{
                            color: "#fff",
                            border: "2px solid #fff",
                            borderRadius: 100,
                            padding: "10px 28px",
                            fontWeight: 700,
                            fontSize: 14,
                            textDecoration: "none",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          {p.link === "#" ? "Ver Detalles" : "Visitar Sitio"} →
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div style={{ padding: "clamp(20px,3vw,28px)" }}>
                  <h3
                    style={{
                      fontSize: "clamp(16px,2vw,18px)",
                      fontWeight: 800,
                      color: "#0F172A",
                      margin: "0 0 10px",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#64748B",
                      lineHeight: 1.7,
                      margin: "0 0 16px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "#EFF6FF",
                          color: "#1E40AF",
                          fontSize: 12,
                          fontWeight: 700,
                          padding: "4px 12px",
                          borderRadius: 100,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection style={{ textAlign: "center", marginTop: 56 }}>
          <motion.a
            href="https://wa.me/+529931782620"
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(59,130,246,0.35)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: "clamp(14px,2vw,16px)",
              boxShadow: "0 4px 24px rgba(59,130,246,0.3)",
            }}
          >
            ¿Quieres un proyecto similar? 💬
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}