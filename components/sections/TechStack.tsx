"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ChartUpIcon,
  LockIcon,
  SmartphoneIcon,
  ZapIcon,
} from "@/components/ui/icons/Icons";
import { SOFTWARE_TECH_LAYERS } from "@/data/constants";
import { colors, fonts, radius, section } from "@/data/theme";

const BENEFITS = [
  {
    icon: ZapIcon,
    title: "Rendimiento",
    description:
      "Una base ligera y buenas prácticas de carga para que la experiencia sea ágil desde el primer contacto.",
    stat: "Ligero",
    statLabel: "base técnica",
  },
  {
    icon: LockIcon,
    title: "Seguridad",
    description:
      "Configuraciones, certificados y respaldos definidos según lo que el proyecto necesita proteger.",
    stat: "Seguro",
    statLabel: "por diseño",
  },
  {
    icon: ChartUpIcon,
    title: "Escalabilidad",
    description:
      "La arquitectura permite sumar secciones, funciones o integraciones conforme crece la operación.",
    stat: "Escalable",
    statLabel: "arquitectura",
  },
  {
    icon: SmartphoneIcon,
    title: "Enfoque móvil",
    description:
      "Diseñamos primero para pantallas pequeñas y ampliamos la experiencia a tablet y escritorio.",
    stat: "Móvil",
    statLabel: "primero",
  },
];

export function TechStack() {
  return (
    <section
      id="tecnologia"
      aria-labelledby="tech-title"
      style={{
        padding: section.padding,
        background: colors.bg,
        scrollMarginTop: 84,
      }}
    >
      <div style={{ maxWidth: section.maxWidth, margin: "0 auto" }}>
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow="Base técnica"
            title="Tecnología elegida por el problema, no por moda."
            titleId="tech-title"
            description="Cada solución se construye con herramientas que el equipo puede mantener y que responden al alcance real del proyecto."
          />
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: 20,
            marginTop: "clamp(36px, 6vw, 56px)",
          }}
        >
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection key={benefit.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(30,64,175,0.12)" }}
                  style={{
                    height: "100%",
                    background: colors.white,
                    border: `1px solid ${colors.border}`,
                    borderRadius: radius.card,
                    padding: "clamp(22px, 3vw, 30px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} color={colors.primaryDark} />
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          color: colors.primaryDark,
                          fontFamily: fonts.sora,
                          fontSize: "clamp(20px, 2.6vw, 25px)",
                          fontWeight: 800,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.1,
                        }}
                      >
                        {benefit.stat}
                      </div>
                      <div
                        style={{
                          marginTop: 3,
                          color: colors.slate,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          lineHeight: 1.5,
                          textTransform: "uppercase",
                        }}
                      >
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      color: colors.ink,
                      fontFamily: fonts.sora,
                      fontSize: "clamp(16px, 1.8vw, 19px)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ margin: 0, color: colors.slate, fontSize: 13, lineHeight: 1.65 }}>
                    {benefit.description}
                  </p>
                </motion.article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.12}>
          <div
            style={{
              marginTop: "clamp(36px, 6vw, 56px)",
              padding: "clamp(24px, 4vw, 38px)",
              background: colors.white,
              border: `1px solid ${colors.border}`,
              borderRadius: radius.panel,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "clamp(18px, 3vw, 36px)",
                marginBottom: "clamp(20px, 3vw, 30px)",
              }}
            >
              <div style={{ flex: "1 1 420px", minWidth: 0 }}>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: colors.primaryDark,
                    fontFamily: fonts.sora,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    lineHeight: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  Herramientas
                </p>
                <h3
                  style={{
                    margin: 0,
                    color: colors.ink,
                    fontFamily: fonts.sora,
                    fontSize: "clamp(22px, 3vw, 30px)",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.15,
                  }}
                >
                  Una base que se puede mantener.
                </h3>
              </div>
              <p
                style={{
                  flex: "0 1 360px",
                  minWidth: 0,
                  margin: 0,
                  color: colors.slate,
                  fontSize: 13,
                  lineHeight: 1.7,
                }}
              >
                La selección final depende del alcance, el equipo y la operación. No se elige una
                herramienta solo porque esté de moda.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                columnGap: "clamp(20px, 3vw, 36px)",
              }}
            >
              {SOFTWARE_TECH_LAYERS.map((layer) => (
                <div
                  key={layer.id}
                  style={{
                    minWidth: 0,
                    borderTop: `1px solid ${colors.border}`,
                    padding: "16px 0 18px",
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 6px",
                      color: colors.ink,
                      fontFamily: fonts.sora,
                      fontSize: 14,
                      fontWeight: 800,
                      lineHeight: 1.3,
                    }}
                  >
                    {layer.label}
                  </h4>
                  <p style={{ margin: "0 0 10px", color: colors.slate, fontSize: 12, lineHeight: 1.55 }}>
                    {layer.description}
                  </p>
                  <ul
                    aria-label={`Tecnologías de ${layer.label.toLowerCase()}`}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {layer.technologies.map((technology) => (
                      <li
                        key={technology}
                        style={{
                          border: `1px solid ${colors.border}`,
                          borderRadius: 6,
                          background: colors.bg,
                          color: colors.primaryDark,
                          fontFamily: fonts.sora,
                          fontSize: 10,
                          fontWeight: 700,
                          lineHeight: 1.4,
                          padding: "5px 8px",
                        }}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
