"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  const comingSoonProject = PROJECTS.find((p) => p.comingSoon);
  const otherProjects = PROJECTS.filter((p) => !p.comingSoon);

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
              fontWeight: 800,
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

        {/* Proyectos completados */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24,
            marginBottom: "clamp(48px,8vw,80px)",
          }}
        >
          {otherProjects.map((p, i) => (
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
                    alt={`Proyecto: ${p.title} - ${p.desc}`}
                    width={600}
                    height={338}
                    loading="lazy"
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
                          rel="noopener noreferrer"
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
                          Visitar Sitio →
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

        {/* Próximamente */}
        {comingSoonProject && (
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)",
                borderRadius: 28,
                overflow: "hidden",
                position: "relative",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 0,
              }}
            >
              <div style={{
                position: "absolute", top: "-30%", right: "-10%",
                width: 500, height: 500, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: "-20%", left: "-5%",
                width: 400, height: 400, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 60%)",
                pointerEvents: "none",
              }} />

              <div style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 300,
              }}>
                <img
                  src={comingSoonProject.img}
                  alt={comingSoonProject.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,64,175,0.4) 100%)",
                }} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{
                    position: "absolute",
                    top: 20, left: 20,
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(59,130,246,0.9)",
                    backdropFilter: "blur(8px)",
                    borderRadius: 100,
                    padding: "8px 20px",
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: "#10B981", display: "inline-block",
                    }}
                  />
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: "#fff",
                    letterSpacing: 1.5, textTransform: "uppercase",
                  }}>
                    Próximamente
                  </span>
                </motion.div>
              </div>

              <div style={{
                padding: "clamp(28px,4vw,48px)",
                display: "flex", flexDirection: "column", justifyContent: "center",
                position: "relative", zIndex: 1,
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 16,
                }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: "#8B5CF6",
                    letterSpacing: 2.5, textTransform: "uppercase",
                  }}>
                    En desarrollo
                  </span>
                </div>
                <h3 style={{
                  fontSize: "clamp(24px,3.5vw,36px)",
                  fontWeight: 800, color: "#fff",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.8px", margin: "0 0 16px", lineHeight: 1.15,
                }}>
                  {comingSoonProject.title}
                </h3>
                <p style={{
                  fontSize: "clamp(14px,1.6vw,16px)",
                  color: "rgba(255,255,255,0.7)", lineHeight: 1.75,
                  margin: "0 0 28px",
                }}>
                  {comingSoonProject.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                  {comingSoonProject.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(139,92,246,0.2)",
                        border: "1px solid rgba(139,92,246,0.3)",
                        color: "#C4B5FD",
                        fontSize: 12, fontWeight: 700,
                        padding: "5px 14px", borderRadius: 100,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 10,
                  color: "rgba(255,255,255,0.5)", fontSize: 14,
                }}>
                  <span style={{ fontSize: 18 }}>🚀</span>
                  Lanzamiento estimado: Próximamente
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        )}

        <AnimatedSection style={{ textAlign: "center", marginTop: 56 }}>
          <motion.a
            href={whatsappUrl(WHATSAPP_MESSAGES.proyectoSimilar)}
            target="_blank"
            rel="noopener noreferrer"
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
