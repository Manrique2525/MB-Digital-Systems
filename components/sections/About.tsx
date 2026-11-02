"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIVISIONS } from "@/data/constants";
import { colors, fonts, section } from "@/data/theme";

export function About() {
  return (
    <section
      id="nosotros"
      aria-label="Nosotros"
      style={{ padding: section.padding, background: colors.white }}
    >
      <div style={{ maxWidth: section.maxWidth, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(42px, 7vw, 88px)",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <SectionHeading
              eyebrow="Nosotros"
              title="Tecnología que construye. Marketing que conecta."
              description="Entendemos el negocio, construimos lo que necesita y comunicamos lo que lo hace valioso."
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "clamp(32px, 5vw, 48px)",
              }}
            >
              {DIVISIONS.map((division, index) => {
                const accent = division.accent === "blue" ? colors.primary : colors.violet;
                return (
                  <div
                    key={division.id}
                    style={{
                      borderTop: `1px solid ${colors.border}`,
                      padding: "22px 0 22px 22px",
                      position: "relative",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: 22,
                        bottom: 22,
                        left: 0,
                        width: 3,
                        background: accent,
                      }}
                    />
                    <p
                      style={{
                        margin: "0 0 7px",
                        color: colors.slate,
                        fontFamily: fonts.sora,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        lineHeight: 1.5,
                        textTransform: "uppercase",
                      }}
                    >
                      {index === 0 ? "Tecnología" : "Comunicación"}
                    </p>
                    <h3
                      style={{
                        margin: "0 0 7px",
                        color: colors.ink,
                        fontFamily: fonts.sora,
                        fontSize: "clamp(20px, 2.2vw, 26px)",
                        fontWeight: 800,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.2,
                      }}
                    >
                      {division.name}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        maxWidth: "52ch",
                        color: colors.slate,
                        fontSize: "clamp(14px, 1.5vw, 16px)",
                        lineHeight: 1.7,
                      }}
                    >
                      {division.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <figure
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: -16,
                  bottom: -16,
                  width: "58%",
                  height: "38%",
                  border: "1px solid rgba(59,130,246,0.28)",
                  borderRadius: 24,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                  borderRadius: 24,
                  background: colors.border,
                  boxShadow: "0 24px 64px rgba(15, 23, 42, 0.12)",
                }}
              >
                <img
                  src="/img/about-team.webp"
                  srcSet="/img/about-team-720.webp 720w, /img/about-team-1200.webp 1200w"
                  sizes="(max-width: 900px) 100vw, 460px"
                  width={1800}
                  height={2700}
                  alt="Personas colaborando frente a una pantalla en una oficina"
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
                      "linear-gradient(180deg, rgba(15,23,42,0) 46%, rgba(15,23,42,0.84) 100%)",
                  }}
                />
                <figcaption
                  style={{
                    position: "absolute",
                    right: 24,
                    bottom: 24,
                    left: 24,
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 2,
                      marginBottom: 14,
                      background: colors.violet,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      maxWidth: "22ch",
                      color: colors.white,
                      fontFamily: fonts.sora,
                      fontSize: "clamp(20px, 2.4vw, 28px)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.35,
                    }}
                  >
                    Entender primero. Construir con criterio. Comunicar con claridad.
                  </p>
                </figcaption>
              </div>
            </figure>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
