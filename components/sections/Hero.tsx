"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowRightIcon } from "@/components/ui/icons/Icons";
import { colors, easing, fonts, section } from "@/data/theme";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const transition = (delay: number) =>
    reduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: easing };
  const initial = (y: number) => (reduceMotion ? false : { y });

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      style={{
        position: "relative",
        overflow: "hidden",
        background: colors.bg,
        padding: "clamp(112px, 14vw, 160px) 20px clamp(72px, 10vw, 112px)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.75), transparent 76%)",
          WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.75), transparent 76%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-22%",
          right: "-10%",
          width: "min(680px, 74vw)",
          height: "min(680px, 74vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.03) 58%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: section.maxWidth,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
          alignItems: "center",
          gap: "clamp(48px, 7vw, 88px)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <motion.p
            initial={initial(16)}
            animate={{ y: 0 }}
            transition={transition(0.05)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              margin: "0 0 24px",
              color: colors.primaryDark,
              fontFamily: fonts.sora,
              fontSize: "clamp(11px, 1vw, 13px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              lineHeight: 1.5,
              textTransform: "uppercase",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: 30, height: 1, background: colors.primary, flexShrink: 0 }}
            />
            Software + marketing digital · Tabasco, México
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={initial(24)}
            animate={{ y: 0 }}
            transition={transition(0.15)}
            style={{
              margin: "0 0 26px",
              maxWidth: 700,
              color: colors.ink,
              fontFamily: fonts.sora,
              fontSize: "clamp(40px, 5.6vw, 68px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.02,
              overflowWrap: "break-word",
              textWrap: "balance",
            }}
          >
            Software que funciona.{" "}
            <span style={{ color: colors.primaryDark }}>Marketing</span> que{" "}
            <span style={{ color: colors.violet }}>conecta.</span>
          </motion.h1>

          <motion.p
            initial={initial(20)}
            animate={{ y: 0 }}
            transition={transition(0.25)}
            style={{
              margin: "0 0 32px",
              maxWidth: 560,
              color: colors.slate,
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.75,
            }}
          >
            Diseñamos herramientas digitales y comunicación con criterio para negocios que
            quieren crecer.
          </motion.p>

          <motion.div
            initial={initial(18)}
            animate={{ y: 0 }}
            transition={transition(0.35)}
            style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
          >
            <ButtonLink href="#contacto" variant="primary">
              Hablemos de tu proyecto
              <ArrowRightIcon size={16} color={colors.white} />
            </ButtonLink>
            <ButtonLink href="#servicios" variant="secondary">
              Explorar servicios
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={initial(12)}
            animate={{ y: 0 }}
            transition={transition(0.45)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              margin: "24px 0 0",
              color: colors.slate,
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: colors.success,
                flexShrink: 0,
              }}
            />
            Un solo equipo para construir y comunicar.
          </motion.p>
        </div>

        <motion.figure
          initial={reduceMotion ? false : { y: 28, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          transition={transition(0.3)}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 480,
            margin: "0 0 0 auto",
            minWidth: 0,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -18,
              right: -18,
              width: "72%",
              height: "58%",
              border: "1px solid rgba(139,92,246,0.28)",
              borderRadius: 28,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              overflow: "hidden",
              borderRadius: 28,
              background: colors.border,
              boxShadow: "0 30px 80px rgba(15, 23, 42, 0.14)",
            }}
          >
            <img
              src="/img/hero-team.webp"
              srcSet="/img/hero-team-720.webp 720w, /img/hero-team-1200.webp 1200w"
              sizes="(max-width: 1000px) 100vw, 480px"
              width={1600}
              height={1068}
              alt="Equipo de desarrollo colaborando en una oficina moderna"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "52% center",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0) 52%, rgba(15,23,42,0.68) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 18,
                bottom: 18,
                left: 18,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                padding: "13px 16px",
                background: "rgba(255,255,255,0.94)",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: 14,
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  color: colors.ink,
                  fontFamily: fonts.sora,
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Un solo equipo
              </span>
              <span style={{ color: colors.slate, fontSize: 12, lineHeight: 1.5 }}>
                Estrategia · Diseño · Desarrollo
              </span>
            </div>
          </div>
          <figcaption
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
              whiteSpace: "nowrap",
            }}
          >
            Equipo de trabajo colaborando en un espacio moderno.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
