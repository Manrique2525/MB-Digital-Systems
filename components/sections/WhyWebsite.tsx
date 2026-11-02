"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import {
  AlertIcon,
  FrownIcon,
  MessageIcon,
  MoonIcon,
  SlashCircleIcon,
  ZapIcon,
} from "@/components/ui/icons/Icons";
import { colors, easing, fonts, radius } from "@/data/theme";

const PAIN_POINTS = [
  {
    icon: SlashCircleIcon,
    accent: colors.primaryDark,
    label: "Software",
    title: "Tu operación depende de procesos manuales.",
    description:
      "Hojas de cálculo, mensajes y tareas repetitivas consumen tiempo que debería estar en el negocio.",
  },
  {
    icon: AlertIcon,
    accent: colors.violet,
    label: "Software",
    title: "La información vive en lugares distintos.",
    description:
      "Cuando cada área trabaja con sus propios archivos, cuesta tomar decisiones con una visión completa.",
  },
  {
    icon: MoonIcon,
    accent: colors.primaryDark,
    label: "Marketing",
    title: "Tu marca publica sin una dirección clara.",
    description:
      "La presencia digital existe, pero no siempre comunica lo mismo ni sostiene una línea reconocible.",
  },
  {
    icon: FrownIcon,
    accent: colors.violet,
    label: "Marketing",
    title: "Te cuesta explicar lo que te hace diferente.",
    description:
      "Sin un mensaje y una identidad bien ordenados, la oferta se pierde entre opciones parecidas.",
  },
];

function PainCard({
  icon: Icon,
  accent,
  label,
  title,
  description,
  index,
}: {
  icon: typeof AlertIcon;
  accent: string;
  label: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: easing }}
      whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(30,64,175,0.1)" }}
      style={{
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: radius.card,
        padding: "clamp(22px, 3vw, 30px)",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: colors.white,
            border: `1px solid ${colors.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={22} color={accent} />
        </span>
        <span
          style={{
            color: colors.primaryDark,
            fontFamily: fonts.sora,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            lineHeight: 1.5,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      </div>
      <h3
        style={{
          margin: "0 0 8px",
          color: colors.ink,
          fontFamily: fonts.sora,
          fontSize: "clamp(16px, 1.9vw, 19px)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, color: colors.slate, fontSize: 13, lineHeight: 1.65 }}>
        {description}
      </p>
    </motion.article>
  );
}

export function WhyWebsite() {
  const { trackEvent } = useTracking();

  return (
    <section
      id="por-que"
      aria-labelledby="why-title"
      style={{
        background: "linear-gradient(160deg, #EFF6FF 0%, #F8FAFF 45%, #EDE9FE 100%)",
        padding: "clamp(72px, 12vw, 120px) 20px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 64px)" }}>
          <p
            style={{
              margin: "0 0 14px",
              color: colors.primaryDark,
              fontFamily: fonts.sora,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              lineHeight: 1.5,
              textTransform: "uppercase",
            }}
          >
            Software + marketing
          </p>
          <h2
            id="why-title"
            style={{
              margin: "0 0 20px",
              color: colors.ink,
              fontFamily: fonts.sora,
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.06,
              textWrap: "balance",
            }}
          >
            Crecer no debería depender de{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1E40AF, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              improvisar.
            </span>
          </h2>
          <p
            style={{
              maxWidth: 620,
              margin: "0 auto",
              color: colors.slate,
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.7,
            }}
          >
            Software y marketing resuelven problemas distintos. Juntos cierran el círculo entre una
            operación ordenada y una marca que se explica con claridad.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: 18,
            marginBottom: "clamp(44px, 7vw, 68px)",
          }}
        >
          {PAIN_POINTS.map((point, index) => (
            <PainCard key={point.title} {...point} index={index} />
          ))}
        </div>

        <AnimatedSection>
          <div
            style={{
              background: "linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)",
              borderRadius: radius.panel,
              padding: "clamp(34px, 6vw, 60px) clamp(24px, 5vw, 56px)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <p
              style={{
                margin: "0 auto 10px",
                maxWidth: 620,
                color: "rgba(255,255,255,0.88)",
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.6,
              }}
            >
              No se trata de tener más herramientas.
            </p>
            <h3
              style={{
                maxWidth: 700,
                margin: "0 auto 28px",
                color: colors.white,
                fontFamily: fonts.sora,
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.14,
                textWrap: "balance",
              }}
            >
              Se trata de que cada pieza tenga una razón y un siguiente paso.
            </h3>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a
                href={whatsappUrl(WHATSAPP_MESSAGES.cotizacion)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => trackEvent("wa_click", "por-que", { plan: "Cotización" })}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  minHeight: 48,
                  background: colors.white,
                  color: colors.primaryDark,
                  textDecoration: "none",
                  fontWeight: 800,
                  padding: "14px 28px",
                  borderRadius: radius.pill,
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                }}
              >
                <MessageIcon size={18} color={colors.primaryDark} /> Cuéntanos tu proyecto
              </motion.a>
              <a
                href="#servicios"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  minHeight: 48,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.55)",
                  color: colors.white,
                  fontWeight: 700,
                  padding: "14px 26px",
                  borderRadius: radius.pill,
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                  textDecoration: "none",
                }}
              >
                Explorar servicios
              </a>
            </div>

            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                margin: "26px 0 0",
                color: "rgba(255,255,255,0.86)",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              <ZapIcon size={16} color={colors.white} /> Te respondemos a la brevedad · Sin compromiso
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
