"use client";

import type { CSSProperties } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons/Icons";
import { SOFTWARE_APPROACH, SOFTWARE_CAPABILITIES } from "@/data/constants";
import { colors, fonts, section } from "@/data/theme";

const microLabelStyle: CSSProperties = {
  margin: 0,
  color: colors.primaryDark,
  fontFamily: fonts.sora,
  fontSize: "clamp(10px, 1vw, 12px)",
  fontWeight: 700,
  letterSpacing: "0.16em",
  lineHeight: 1.5,
  textTransform: "uppercase",
};

const subheadingStyle: CSSProperties = {
  margin: "10px 0 12px",
  color: colors.ink,
  fontFamily: fonts.sora,
  fontSize: "clamp(24px, 3vw, 34px)",
  fontWeight: 800,
  letterSpacing: "-0.035em",
  lineHeight: 1.12,
};

const bodyStyle: CSSProperties = {
  margin: 0,
  color: colors.slate,
  fontSize: "clamp(14px, 1.5vw, 16px)",
  lineHeight: 1.7,
};

export function SoftwareDevelopment() {
  return (
    <section
      id="desarrollo-software"
      aria-labelledby="software-title"
      style={{
        padding: section.paddingWide,
        background: colors.white,
        scrollMarginTop: 80,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: section.maxWidth, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            gap: "clamp(40px, 7vw, 80px)",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <SectionHeading
              eyebrow="Desarrollo de software"
              title="Software que se adapta a cómo opera tu negocio."
              titleId="software-title"
              description="Primero entendemos el proceso. Después elegimos la tecnología y construimos una solución que se pueda usar y mantener."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <figure
              style={{
                position: "relative",
                margin: 0,
                width: "100%",
                maxWidth: 540,
                marginLeft: "auto",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  width: "64%",
                  height: "52%",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: 22,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  borderRadius: 22,
                  background: colors.border,
                  boxShadow: "0 24px 60px rgba(15,23,42,0.13)",
                }}
              >
                <img
                  src="/img/software-workspace.webp"
                  srcSet="/img/software-workspace-720.webp 720w, /img/software-workspace-1200.webp 1200w"
                  sizes="(max-width: 1000px) 100vw, 540px"
                  width={1600}
                  height={1068}
                  alt="Desarrollador trabajando frente a monitores con código"
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0) 50%, rgba(15,23,42,0.72) 100%)",
                  }}
                />
                <figcaption
                  style={{
                    position: "absolute",
                    right: 20,
                    bottom: 20,
                    left: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    color: colors.white,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.sora,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Del proceso a la entrega
                  </span>
                  <span
                    aria-hidden="true"
                    style={{ width: 34, height: 2, background: colors.primary }}
                  />
                </figcaption>
              </div>
            </figure>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.04}>
          <div
            style={{
              marginTop: "clamp(56px, 9vw, 96px)",
              paddingTop: "clamp(32px, 5vw, 48px)",
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "clamp(22px, 4vw, 48px)",
              }}
            >
              <div style={{ flex: "1 1 520px", minWidth: 0 }}>
                <p style={microLabelStyle}>Capacidades</p>
                <h3 style={subheadingStyle}>Qué podemos construir</h3>
              </div>
              <p style={{ ...bodyStyle, flex: "0 1 400px", minWidth: 0, maxWidth: "50ch" }}>
                Cada solución parte del problema que debe resolver, no del tipo de página o sistema
                que se quiere comprar.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                columnGap: "clamp(24px, 3vw, 40px)",
                marginTop: "clamp(24px, 4vw, 40px)",
              }}
            >
              {SOFTWARE_CAPABILITIES.map((capability, index) => (
                <article
                  key={capability.id}
                  aria-labelledby={`software-capability-${capability.id}`}
                  style={{
                    minWidth: 0,
                    borderTop: `1px solid ${colors.border}`,
                    padding: "20px 0 24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 12,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        color: colors.primaryDark,
                        flexShrink: 0,
                        fontFamily: fonts.sora,
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        lineHeight: 1.5,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4
                      id={`software-capability-${capability.id}`}
                      style={{
                        margin: 0,
                        minWidth: 0,
                        color: colors.ink,
                        fontFamily: fonts.sora,
                        fontSize: "clamp(16px, 1.7vw, 19px)",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                      }}
                    >
                      {capability.title}
                    </h4>
                  </div>
                  <p style={{ margin: 0, color: colors.slate, fontSize: 13, lineHeight: 1.65 }}>
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.06}>
          <div
            style={{
              marginTop: "clamp(48px, 7vw, 80px)",
              paddingTop: "clamp(32px, 5vw, 48px)",
              borderTop: `1px solid ${colors.border}`,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "clamp(28px, 5vw, 56px)",
            }}
          >
            <div style={{ flex: "0 1 280px", minWidth: 0 }}>
              <p style={microLabelStyle}>Enfoque</p>
              <h3 style={subheadingStyle}>Cómo construimos</h3>
              <p style={bodyStyle}>
                Cuatro etapas para pasar de una necesidad operativa a una solución lista para usarse.
              </p>
            </div>

            <ol
              style={{
                flex: "1 1 620px",
                minWidth: 0,
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
                columnGap: "clamp(24px, 3vw, 40px)",
              }}
            >
              {SOFTWARE_APPROACH.map((step) => (
                <li
                  key={step.id}
                  style={{
                    minWidth: 0,
                    borderTop: `1px solid ${colors.border}`,
                    padding: "18px 0 22px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: colors.primaryDark,
                      fontFamily: fonts.sora,
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      lineHeight: 1.5,
                    }}
                  >
                    {step.number}
                  </span>
                  <h4
                    style={{
                      margin: "10px 0 7px",
                      color: colors.ink,
                      fontFamily: fonts.sora,
                      fontSize: "clamp(16px, 1.7vw, 19px)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ margin: 0, color: colors.slate, fontSize: 13, lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            style={{
              marginTop: "clamp(44px, 7vw, 72px)",
              paddingTop: "clamp(28px, 4vw, 40px)",
              borderTop: `1px solid ${colors.border}`,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "clamp(20px, 4vw, 40px)",
            }}
          >
            <div style={{ flex: "1 1 520px", minWidth: 0 }}>
              <p style={microLabelStyle}>Siguiente paso</p>
              <h3 style={subheadingStyle}>¿Tienes un proceso que necesita una solución digital?</h3>
              <p style={{ ...bodyStyle, maxWidth: "58ch" }}>
                Cuéntanos qué necesitas ordenar, atender o automatizar. Revisamos el contexto y te
                decimos cómo abordarlo.
              </p>
            </div>
            <ButtonLink href="#contacto" variant="primary">
              Hablemos de tu proyecto
              <ArrowRightIcon size={16} color={colors.white} />
            </ButtonLink>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
