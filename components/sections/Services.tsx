"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CodeIcon, MegaphoneIcon } from "@/components/ui/icons/Icons";
import { DIVISIONS, SERVICE_OFFERINGS } from "@/data/constants";
import { colors, fonts, section } from "@/data/theme";
import type { ServiceOffering } from "@/types";

const SOFTWARE_OFFERINGS = SERVICE_OFFERINGS.filter(
  (service) => service.division === "software"
).slice(0, 3);
const MARKETING_OFFERINGS = SERVICE_OFFERINGS.filter(
  (service) => service.division === "marketing"
).slice(0, 3);
const [SOFTWARE_DIVISION, MARKETING_DIVISION] = DIVISIONS;

interface DivisionPanelProps {
  services: readonly ServiceOffering[];
  title: string;
  description: string;
  label: string;
  href: string;
  cta: string;
  dark?: boolean;
}

function DivisionPanel({
  services,
  title,
  description,
  label,
  href,
  cta,
  dark = false,
}: DivisionPanelProps) {
  const accent = dark ? colors.violet : colors.primary;
  const titleColor = dark ? colors.white : colors.ink;
  const bodyColor = dark ? colors.muted : colors.slate;
  const lineColor = dark ? "rgba(255,255,255,0.16)" : colors.border;

  return (
    <article
      aria-label={label}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "clamp(26px, 4vw, 48px)",
        background: dark ? colors.ink : colors.white,
        border: dark ? "none" : `1px solid ${colors.border}`,
        borderTop: `3px solid ${accent}`,
        borderRadius: 24,
        boxShadow: dark
          ? "0 24px 64px rgba(15,23,42,0.14)"
          : "0 12px 36px rgba(15,23,42,0.05)",
      }}
    >
      {dark ? (
        <>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -130,
              right: -110,
              width: 330,
              height: 330,
              border: "1px solid rgba(139,92,246,0.24)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: -130,
              bottom: -150,
              width: 330,
              height: 330,
              borderRadius: "50%",
              background:
                "radial-gradient(closest-side, rgba(139,92,246,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </>
      ) : null}

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 22,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {dark ? (
              <MegaphoneIcon size={18} color={accent} />
            ) : (
              <CodeIcon size={18} color={accent} />
            )}
            <span
              style={{
                color: dark ? colors.muted : colors.primaryDark,
                fontFamily: fonts.sora,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                lineHeight: 1.5,
                textTransform: "uppercase",
              }}
            >
              {label}
            </span>
          </div>
          <span
            aria-hidden="true"
            style={{
              color: dark ? "rgba(255,255,255,0.65)" : colors.slate,
              fontFamily: fonts.sora,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            {dark ? "02" : "01"}
          </span>
        </div>

        <h3
          style={{
            margin: "0 0 12px",
            color: titleColor,
            fontFamily: fonts.sora,
            fontSize: "clamp(27px, 3.2vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: "0 0 30px",
            maxWidth: "44ch",
            color: bodyColor,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>

      <ul
        aria-label={`${label}: servicios`}
        style={{
          position: "relative",
          zIndex: 1,
          listStyle: "none",
          margin: "0 0 32px",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
          columnGap: "clamp(18px, 3vw, 32px)",
        }}
      >
        {services.map((service, index) => (
          <li
            key={service.id}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              borderTop: `1px solid ${lineColor}`,
              padding: "12px 0",
              minWidth: 0,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                color: dark ? "#C4B5FD" : colors.primaryDark,
                flexShrink: 0,
                fontFamily: fonts.sora,
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: "0.1em",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                color: titleColor,
                fontSize: 13,
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              {service.title}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ position: "relative", zIndex: 1, marginTop: "auto" }}>
        <ButtonLink href={href} variant={dark ? "secondary" : "primary"}>
          {cta}
          <ArrowRightIcon size={16} color={dark ? colors.primaryDark : colors.white} />
        </ButtonLink>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="servicios"
      aria-label="Servicios"
      style={{ padding: section.padding, background: colors.bg }}
    >
      <div style={{ maxWidth: section.maxWidth, margin: "0 auto" }}>
        <AnimatedSection>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "clamp(24px, 5vw, 64px)",
              marginBottom: "clamp(40px, 6vw, 64px)",
            }}
          >
            <div style={{ flex: "1 1 580px", minWidth: 0 }}>
              <SectionHeading
                eyebrow="Servicios"
                title="Dos disciplinas, una misma dirección."
                description="Construimos las herramientas digitales y fortalecemos la manera en que tu marca las comunica."
              />
            </div>
            <p
              style={{
                flex: "0 1 260px",
                margin: 0,
                borderTop: `1px solid ${colors.border}`,
                paddingTop: 16,
                color: colors.slate,
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              Cada división puede trabajar por separado. Juntas, cierran el círculo entre producto y
              comunicación.
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
            alignItems: "stretch",
          }}
        >
          <AnimatedSection>
            <DivisionPanel
              services={SOFTWARE_OFFERINGS}
              title={SOFTWARE_DIVISION.name}
              description={SOFTWARE_DIVISION.description}
              label="Construir"
              href="#desarrollo-software"
              cta="Ver desarrollo de software"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DivisionPanel
              services={MARKETING_OFFERINGS}
              title={MARKETING_DIVISION.name}
              description={MARKETING_DIVISION.description}
              label="Conectar"
              href="#marketing-digital"
              cta="Ver marketing digital"
              dark
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
