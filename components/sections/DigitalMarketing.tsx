"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowRightIcon } from "@/components/ui/icons/Icons";
import { ConceptTile } from "@/components/sections/DigitalMarketing/ConceptTile";
import {
  MARKETING_APPROACH,
  MARKETING_CONCEPTS,
  MARKETING_WORKS,
  SERVICE_OFFERINGS,
} from "@/data/constants";
import { colors, fonts, radius, section } from "@/data/theme";
import type { ServiceOffering } from "@/types";

const MARKETING_CAPABILITIES: readonly ServiceOffering[] = SERVICE_OFFERINGS.filter(
  (service) => service.division === "marketing"
);

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

const smallBodyStyle: CSSProperties = {
  margin: 0,
  color: colors.slate,
  fontSize: 13,
  lineHeight: 1.65,
};

const tagStyle: CSSProperties = {
  border: `1px solid ${colors.border}`,
  borderRadius: radius.pill,
  color: colors.primaryDark,
  fontFamily: fonts.sora,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.02em",
  lineHeight: 1.4,
  padding: "5px 10px",
};

export function DigitalMarketing() {
  return (
    <section
      id="marketing-digital"
      aria-labelledby="marketing-title"
      style={{
        position: "relative",
        padding: section.paddingWide,
        background: colors.bg,
        scrollMarginTop: 80,
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -220,
          right: -160,
          width: 480,
          height: 480,
          border: "1px solid rgba(139,92,246,0.18)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: section.maxWidth, margin: "0 auto" }}>
        <AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
              alignItems: "stretch",
              borderRadius: radius.panel,
              overflow: "hidden",
              background: colors.white,
              border: `1px solid ${colors.border}`,
              boxShadow: "0 24px 64px rgba(15,23,42,0.07)",
            }}
          >
            <figure
              style={{
                position: "relative",
                margin: 0,
                minHeight: "clamp(340px, 48vw, 520px)",
                background: colors.ink,
              }}
            >
              <img
                src="/img/marketing-studio.webp"
                srcSet="/img/marketing-studio-720.webp 720w, /img/marketing-studio-1200.webp 1200w"
                sizes="(max-width: 950px) 100vw, 600px"
                width={1600}
                height={1068}
                alt="Mesa de trabajo con materiales de identidad visual y paleta de color"
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
                    "linear-gradient(180deg, rgba(15,23,42,0.04) 38%, rgba(15,23,42,0.7) 100%)",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  right: 24,
                  bottom: 22,
                  left: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: 8, height: 8, borderRadius: "50%", background: colors.violet }}
                />
                <span
                  style={{
                    color: colors.white,
                    fontFamily: fonts.sora,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Dirección creativa
                </span>
              </figcaption>
            </figure>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "clamp(28px, 5vw, 56px)",
                borderLeft: `3px solid ${colors.violet}`,
              }}
            >
              <p style={microLabelStyle}>Marketing digital</p>
              <h2
                id="marketing-title"
                style={{
                  margin: "12px 0 16px",
                  color: colors.ink,
                  fontFamily: fonts.sora,
                  fontSize: "clamp(30px, 4vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.045em",
                  lineHeight: 1.06,
                  textWrap: "balance",
                }}
              >
                Ideas que toman forma y marcas que encuentran su voz.
              </h2>
              <p style={{ ...bodyStyle, maxWidth: "46ch" }}>
                Estrategia, contenido y diseño para comunicar con claridad y mantener una presencia
                coherente.
              </p>

              <ul
                aria-label="Áreas de trabajo de marketing"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  listStyle: "none",
                  margin: "22px 0 26px",
                  padding: 0,
                }}
              >
                {["Estrategia", "Contenido", "Diseño", "Edición"].map((tag) => (
                  <li key={tag} style={tagStyle}>
                    {tag}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div style={{ marginTop: "clamp(56px, 9vw, 96px)" }}>
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
                <p style={microLabelStyle}>Capacidades creativas</p>
                <h3 style={subheadingStyle}>Lo que podemos crear para tu marca.</h3>
              </div>
              <p style={{ ...bodyStyle, flex: "0 1 400px", minWidth: 0, maxWidth: "52ch" }}>
                Cada capacidad atiende una necesidad distinta y puede integrarse a un mismo sistema
                de comunicación.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                columnGap: "clamp(24px, 3vw, 40px)",
                marginTop: "clamp(24px, 4vw, 40px)",
              }}
            >
              {MARKETING_CAPABILITIES.map((capability, index) => (
                <article
                  key={capability.id}
                  aria-labelledby={`marketing-capability-${capability.id}`}
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
                        fontSize: 18,
                        fontWeight: 800,
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4
                      id={`marketing-capability-${capability.id}`}
                      style={{
                        margin: 0,
                        minWidth: 0,
                        color: colors.ink,
                        fontFamily: fonts.sora,
                        fontSize: "clamp(17px, 1.8vw, 20px)",
                        fontWeight: 800,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.25,
                      }}
                    >
                      {capability.title}
                    </h4>
                  </div>
                  <p style={smallBodyStyle}>{capability.description}</p>
                  <ul
                    aria-label={`Entregables de ${capability.title}`}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      listStyle: "none",
                      margin: "14px 0 0",
                      padding: 0,
                    }}
                  >
                    {capability.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        style={{
                          background: colors.white,
                          border: `1px solid ${colors.border}`,
                          borderRadius: 4,
                          color: colors.primaryDark,
                          fontFamily: fonts.sora,
                          fontSize: 10,
                          fontWeight: 600,
                          lineHeight: 1.4,
                          padding: "4px 7px",
                        }}
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div
            id="trabajos-marketing"
            style={{
              marginTop: "clamp(56px, 9vw, 96px)",
              scrollMarginTop: 84,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "clamp(22px, 4vw, 48px)",
                marginBottom: "clamp(22px, 4vw, 36px)",
              }}
            >
              <div style={{ flex: "1 1 460px", minWidth: 0 }}>
                <p style={microLabelStyle}>Trabajo destacado</p>
                <h3 style={subheadingStyle}>Diseño aplicado a un negocio real.</h3>
              </div>
              <p style={{ ...bodyStyle, flex: "0 1 390px", minWidth: 0, maxWidth: "52ch" }}>
                Una pieza de diseño visual que traduce una solución de gestión financiera en una
                comunicación clara y ordenada.
              </p>
            </div>

            {MARKETING_WORKS.map((work) => (
              <article
                key={work.id}
                aria-labelledby={`marketing-work-${work.id}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                  alignItems: "stretch",
                  overflow: "hidden",
                  borderRadius: radius.panel,
                  border: "1px solid rgba(139,92,246,0.34)",
                  background:
                    "linear-gradient(135deg, #0B1020 0%, #111A33 56%, #1E1B4B 100%)",
                  boxShadow: "0 28px 72px rgba(15,23,42,0.16)",
                }}
              >
                <figure
                  style={{
                    position: "relative",
                    minHeight: "clamp(280px, 46vw, 430px)",
                    margin: 0,
                    background: "#070A14",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "clamp(18px, 3vw, 32px)",
                    }}
                  >
                    <Image
                      src={work.image}
                      alt={work.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </figure>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minWidth: 0,
                    padding: "clamp(26px, 4vw, 48px)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      alignSelf: "flex-start",
                      marginBottom: 14,
                      padding: "6px 10px",
                      border: "1px solid rgba(139,92,246,0.36)",
                      borderRadius: radius.pill,
                      background: "rgba(139,92,246,0.12)",
                      color: "#DDD6FE",
                      fontFamily: fonts.sora,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      lineHeight: 1.4,
                      textTransform: "uppercase",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ width: 6, height: 6, borderRadius: "50%", background: colors.violet }}
                    />
                    {work.label}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      color: "#C4B5FD",
                      fontFamily: fonts.sora,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      lineHeight: 1.6,
                    }}
                  >
                    {work.category}
                  </p>
                  <h4
                    id={`marketing-work-${work.id}`}
                    style={{
                      margin: "12px 0 14px",
                      color: colors.white,
                      fontFamily: fonts.sora,
                      fontSize: "clamp(23px, 2.8vw, 34px)",
                      fontWeight: 800,
                      letterSpacing: "-0.035em",
                      lineHeight: 1.14,
                      textWrap: "balance",
                    }}
                  >
                    {work.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "#CBD5E1",
                      fontSize: "clamp(14px, 1.5vw, 16px)",
                      lineHeight: 1.75,
                    }}
                  >
                    {work.description}
                  </p>

                  <ul
                    aria-label={`Etiquetas de ${work.title}`}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 7,
                      listStyle: "none",
                      margin: "22px 0 0",
                      padding: 0,
                    }}
                  >
                    {work.tags.map((tag) => (
                      <li
                        key={tag}
                        style={{
                          border: "1px solid rgba(139,92,246,0.32)",
                          borderRadius: radius.pill,
                          background: "rgba(139,92,246,0.1)",
                          color: "#DDD6FE",
                          fontFamily: fonts.sora,
                          fontSize: 10,
                          fontWeight: 600,
                          lineHeight: 1.4,
                          padding: "5px 10px",
                        }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      margin: "24px 0 0",
                      color: "#A5B4FC",
                      fontFamily: fonts.sora,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 16,
                        height: 1,
                        background: colors.violet,
                      }}
                    />
                    {work.credit}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div
            id="laboratorio-marketing"
            style={{
              marginTop: "clamp(56px, 9vw, 96px)",
              scrollMarginTop: 84,
              background: colors.white,
              border: `1px solid ${colors.border}`,
              borderRadius: radius.panel,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "clamp(22px, 4vw, 48px)",
                padding: "clamp(24px, 4vw, 40px)",
              }}
            >
              <div style={{ flex: "1 1 500px", minWidth: 0 }}>
                <p style={microLabelStyle}>Laboratorio visual</p>
                <h3 style={subheadingStyle}>Seis conceptos de dirección creativa.</h3>
              </div>
              <p style={{ ...smallBodyStyle, flex: "0 1 360px", minWidth: 0 }}>
                <strong style={{ color: colors.ink }}>Piezas demostrativas.</strong> No son
                proyectos de clientes, campañas ejecutadas ni marcas reales.
              </p>
            </div>

            <div
              role="list"
              aria-label="Conceptos demostrativos de marketing"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: 1,
                borderTop: `1px solid ${colors.border}`,
                background: colors.border,
              }}
            >
              {MARKETING_CONCEPTS.map((concept) => (
                <div key={concept.id} role="listitem" style={{ minWidth: 0 }}>
                  <ConceptTile concept={concept} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div
            style={{
              marginTop: "clamp(56px, 9vw, 96px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "clamp(28px, 5vw, 64px)",
            }}
          >
            <div style={{ flex: "0 1 300px", minWidth: 0 }}>
              <p style={microLabelStyle}>Enfoque de trabajo</p>
              <h3 style={subheadingStyle}>De la idea a las piezas para comunicar.</h3>
              <p style={bodyStyle}>
                Un proceso de cuatro etapas para ordenar la comunicación antes de producir contenido.
              </p>
            </div>

            <ol
              aria-label="Etapas del enfoque de marketing"
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
              {MARKETING_APPROACH.map((step) => (
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

        <AnimatedSection delay={0.06}>
          <div
            style={{
              position: "relative",
              marginTop: "clamp(44px, 7vw, 76px)",
              padding: "clamp(28px, 5vw, 52px)",
              background: colors.ink,
              borderRadius: radius.panel,
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -110,
                right: -80,
                width: 300,
                height: 300,
                border: "1px solid rgba(139,92,246,0.32)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: 180,
                height: 180,
                background: colors.violet,
                opacity: 0.14,
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "clamp(24px, 4vw, 48px)",
              }}
            >
              <div style={{ flex: "1 1 520px", minWidth: 0 }}>
                <p style={{ ...microLabelStyle, color: colors.muted }}>Siguiente paso</p>
                <h3 style={{ ...subheadingStyle, color: colors.white, maxWidth: "22ch" }}>
                  Tu marca también merece una comunicación a su altura.
                </h3>
                <p style={{ ...bodyStyle, color: colors.muted, maxWidth: "56ch" }}>
                  Cuéntanos qué quieres comunicar y exploremos cómo darle forma.
                </p>
              </div>
              <ButtonLink href="#contacto" variant="secondary">
                Hablemos de tu marca
                <ArrowRightIcon size={16} color={colors.primaryDark} />
              </ButtonLink>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
