"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { PROJECTS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSectionViewOnce, useTracking } from "@/components/hooks/useTracking";
import { ArrowRightIcon, MessageIcon } from "@/components/ui/icons/Icons";
import { ProjectStory } from "@/components/sections/Projects/ProjectStory";
import { colors, fonts, gradients, radius, section } from "@/data/theme";

export function Projects() {
  const { trackEvent } = useTracking();
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionViewOnce("portfolio_view", sectionRef);

  const visibleProjects = PROJECTS.filter((project) => project.authorization === "confirmed");
  const liveCount = visibleProjects.filter((project) => project.status === "live").length;
  const developmentCount = visibleProjects.filter(
    (project) => project.status === "in-development"
  ).length;

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      aria-labelledby="projects-title"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: section.padding,
        background: colors.bg,
      }}
    >
      <div style={{ maxWidth: section.maxWidth, margin: "0 auto" }}>
        <AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              alignItems: "end",
              gap: "clamp(28px, 5vw, 72px)",
              marginBottom: "clamp(34px, 6vw, 58px)",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  margin: "0 0 18px",
                  color: colors.primaryDark,
                  fontFamily: fonts.sora,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  lineHeight: 1.5,
                  textTransform: "uppercase",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: colors.success,
                  }}
                />
                Portafolio · Trabajo seleccionado
              </p>
              <h2
                id="projects-title"
                style={{
                  maxWidth: "14ch",
                  margin: 0,
                  color: colors.ink,
                  fontFamily: fonts.sora,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.045em",
                  lineHeight: 1.02,
                  overflowWrap: "break-word",
                }}
              >
                Ideas que se convierten en{" "}
                <span
                  style={{
                    background: gradients.text,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  soluciones digitales.
                </span>
              </h2>
            </div>

            <div style={{ minWidth: 0, maxWidth: 500 }}>
              <p
                style={{
                  margin: 0,
                  color: colors.slate,
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  lineHeight: 1.75,
                }}
              >
                Una selección de sitios, sistemas y productos digitales. Cada proyecto parte de una
                necesidad concreta y se construye con un alcance definido.
              </p>
              <p
                style={{
                  margin: "18px 0 0",
                  color: colors.slate,
                  fontFamily: fonts.sora,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  lineHeight: 1.7,
                  textTransform: "uppercase",
                }}
              >
                {visibleProjects.length} proyectos · {liveCount}{" "}
                {liveCount === 1 ? "sitio publicado" : "sitios publicados"} · {developmentCount} en
                desarrollo
              </p>
            </div>
          </div>
        </AnimatedSection>

        {visibleProjects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.04}>
            <ProjectStory
              project={project}
              index={index}
              dark={project.status === "in-development"}
              flip={index % 2 === 1}
            />
          </AnimatedSection>
        ))}

        <AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              alignItems: "start",
              gap: "clamp(20px, 4vw, 56px)",
              marginTop: "clamp(48px, 7vw, 80px)",
              padding: "clamp(26px, 4vw, 38px) 0",
              borderTop: `1px solid ${colors.border}`,
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  margin: "0 0 10px",
                  color: colors.primaryDark,
                  fontFamily: fonts.sora,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  lineHeight: 1.5,
                  textTransform: "uppercase",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: colors.violet,
                    flexShrink: 0,
                  }}
                />
                Marketing y dirección creativa
              </p>
              <h3
                style={{
                  maxWidth: "24ch",
                  margin: 0,
                  color: colors.ink,
                  fontFamily: fonts.sora,
                  fontSize: "clamp(22px, 2.8vw, 30px)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.18,
                }}
              >
                Dirección creativa, contenido y sistemas visuales.
              </h3>
            </div>

            <div style={{ minWidth: 0 }}>
              <p style={{ margin: 0, color: colors.slate, fontSize: 14, lineHeight: 1.75 }}>
                El trabajo de diseño se presenta con su contexto. Los conceptos del laboratorio son
                ejercicios de dirección creativa, no proyectos de clientes.
              </p>
              <a
                href="#marketing-digital"
                onClick={() => trackEvent("nav_click", "marketing-digital")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  minHeight: 44,
                  marginTop: 12,
                  borderBottom: `1px solid ${colors.violet}`,
                  color: colors.primaryDark,
                  fontFamily: fonts.sora,
                  fontSize: 13,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  textDecoration: "none",
                }}
              >
                Ver Marketing Digital
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              marginTop: "clamp(52px, 8vw, 92px)",
              padding: "clamp(30px, 5vw, 52px)",
              borderRadius: 32,
              border: `1px solid ${colors.border}`,
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 56%, #EFF6FF 100%)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -90,
                right: -70,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 68%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                alignItems: "end",
                gap: "clamp(26px, 5vw, 64px)",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    margin: "0 0 12px",
                    color: colors.primaryDark,
                    fontFamily: fonts.sora,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    lineHeight: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  Siguiente paso
                </p>
                <h3
                  style={{
                    maxWidth: "17ch",
                    margin: 0,
                    color: colors.ink,
                    fontFamily: fonts.sora,
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                    lineHeight: 1.06,
                  }}
                >
                  ¿Tienes un proyecto en mente?{" "}
                  <span
                    style={{
                      background: gradients.text,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Construyamos la solución.
                  </span>
                </h3>
              </div>

              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, color: colors.slate, fontSize: 14, lineHeight: 1.75 }}>
                  Cuéntanos qué necesitas. Revisamos el alcance y te decimos cómo podemos
                  ayudarte.
                </p>
                <motion.a
                  href={whatsappUrl(WHATSAPP_MESSAGES.proyectoSimilar)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("wa_click", "proyectos", { plan: "Proyecto similar" })}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    minHeight: 50,
                    maxWidth: "100%",
                    marginTop: 22,
                    padding: "14px clamp(22px, 3vw, 32px)",
                    border: `1.5px solid ${colors.primaryDark}`,
                    borderRadius: radius.pill,
                    background: gradients.button,
                    boxShadow: "0 12px 32px rgba(59,130,246,0.24)",
                    color: colors.white,
                    fontFamily: fonts.sora,
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  <MessageIcon size={18} />
                  Hablemos de tu proyecto
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
