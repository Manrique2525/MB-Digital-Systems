"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIOS, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTracking } from "@/components/hooks/useTracking";
import { StarIcon, MessageIcon, ArrowRightIcon } from "@/components/ui/icons/Icons";
import { radius } from "@/data/theme";

export function SocialProof() {
  const { trackEvent } = useTracking();
  return (
    <section
      id="testimonios"
      style={{ padding: "clamp(60px, 10vw, 120px) 20px", background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Testimonios */}
        <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: radius.pill,
              padding: "6px 16px",
              marginBottom: 24,
              color: "#1E40AF",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Experiencias de clientes
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Lo que dicen nuestros{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              clientes
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#64748B",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Experiencias de negocios que trabajaron con nosotros
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIOS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 60px rgba(59,130,246,0.12)",
                }}
                style={{
                  background: "#F8FAFF",
                  border: "1px solid #E8F0FE",
                  borderRadius: radius.panel,
                  padding: "clamp(24px, 4vw, 36px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  role="img"
                  aria-label={`Calificación: ${t.rating} de 5`}
                  style={{ display: "flex", alignItems: "center", marginBottom: 16 }}
                >
                  <div aria-hidden="true" style={{ display: "flex", gap: 4 }}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <span key={si} style={{ color: "#1E40AF", fontSize: 16 }}>
                        <StarIcon size={16} color="#1E40AF" />
                      </span>
                    ))}
                  </div>
                </div>

                {/* Texto */}
                <p
                  style={{
                    fontSize: 15,
                    color: "#334155",
                    lineHeight: 1.8,
                    margin: "0 0 24px",
                    flex: 1,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Persona */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Image
                    src={t.avatar}
                    alt={`Logo de ${t.company}`}
                    width={52}
                    height={52}
                    style={{
                      borderRadius: 12,
                      objectFit: "cover",
                      border: "1px solid #E8F0FE",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#0F172A",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#64748B",
                      }}
                    >
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection style={{ textAlign: "center", marginTop: "clamp(48px,8vw,72px)" }}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
              background: "#F8FAFF",
              border: "1px solid #E8F0FE",
              borderRadius: radius.panel,
              padding: "clamp(36px,5vw,56px) clamp(24px,4vw,48px)",
              maxWidth: 720,
              margin: "0 auto",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 480,
                height: 480,
                borderRadius: "50%",
                background:
                  "radial-gradient(closest-side,rgba(59,130,246,0.1) 0%,rgba(139,92,246,0.06) 55%,transparent 100%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontSize: "clamp(22px,3.5vw,34px)",
                  fontWeight: 800,
                  color: "#0F172A",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.8px",
                  margin: "0 0 12px",
                  lineHeight: 1.15,
                }}
              >
                ¿Quieres un proyecto con este nivel de acompañamiento?
              </h3>
              <p
                style={{
                  fontSize: "clamp(14px,2vw,16px)",
                  color: "#64748B",
                  maxWidth: 480,
                  margin: "0 auto 28px",
                  lineHeight: 1.7,
                }}
              >
                Cada negocio es único, pero el método es el mismo: entender, diseñar y acompañar.
                Cuéntanos tu caso y empezamos.
              </p>
              <motion.a
                href={whatsappUrl(WHATSAPP_MESSAGES.resultadosSimilares)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("wa_click", "testimonios", { plan: "Resultados similares" })}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 48,
                  background: "#1E40AF",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  padding: "16px 36px",
                  borderRadius: radius.pill,
                  fontSize: "clamp(14px,2vw,16px)",
                  boxShadow: "0 4px 24px rgba(59,130,246,0.3)",
                }}
              >
                <MessageIcon size={18} color="#fff" /> Hablemos de tu proyecto
                <ArrowRightIcon size={16} color="#fff" />
              </motion.a>
              <div
                style={{
                  marginTop: 16,
                  fontSize: 13,
                  color: "#64748B",
                  fontWeight: 500,
                }}
              >
                Te respondemos a la brevedad · Sin compromiso
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
