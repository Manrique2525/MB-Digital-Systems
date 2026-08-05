"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { useTracking } from "@/components/hooks/useTracking";
import { AlertIcon, SlashCircleIcon, MoonIcon, FrownIcon, MessageIcon, ZapIcon } from "@/components/ui/icons/Icons";
import { gradients, easing, radius } from "@/data/theme";

const PAIN_POINTS = [
  {
    icon: <AlertIcon size={32} />,
    title: "¿Tu competencia te está ganando?",
    desc: "Mientras ellos aparecen en Google, tú dependes solo del boca a boca.",
  },
  {
    icon: <SlashCircleIcon size={32} />,
    title: "¿Todo por WhatsApp?",
    desc: "Sin una web, pareces menos serio que negocios más pequeños que el tuyo.",
  },
  {
    icon: <MoonIcon size={32} />,
    title: "¿Pierdes ventas de noche?",
    desc: "Cuando cierras tu negocio, tu presencia digital también desaparece.",
  },
  {
    icon: <FrownIcon size={32} />,
    title: "¿Nadie te encuentra en Google?",
    desc: "Miles de personas buscan lo que ofreces — y llegan a otro, no a ti.",
  },
];

function PainCard({ icon, title, desc, index }: { icon: React.ReactNode; title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: easing }}
      whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(59,130,246,0.12)" }}
      style={{
        background: "#F8FAFF",
        border: "1px solid #E8F0FE",
        borderRadius: radius.card,
        padding: "clamp(22px,3vw,32px)",
        cursor: "default",
        transition: "all 0.28s ease",
      }}
    >
      <div style={{ marginBottom: 14 }}>{icon}</div>
      <h4 style={{
        fontSize: "clamp(15px,1.8vw,18px)",
        fontWeight: 800,
        color: "#0F172A",
        margin: "0 0 8px",
        fontFamily: "'Sora', sans-serif",
        letterSpacing: "-0.3px",
      }}>
        {title}
      </h4>
      <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, margin: 0 }}>
        {desc}
      </p>
    </motion.div>
  );
}

export function WhyWebsite() {
  const { trackEvent } = useTracking();
  return (
    <section
      id="por-que"
      style={{
        background: gradients.heroBg,
        padding: "clamp(72px,12vw,120px) 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Bloque 1: Gancho emocional */}
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(56px,9vw,80px)" }}>
          <h2 style={{
            fontSize: "clamp(32px,5.5vw,56px)",
            fontWeight: 800, color: "#0F172A",
            letterSpacing: "-2px", margin: "0 0 24px",
            fontFamily: "'Sora', sans-serif", lineHeight: 1.05,
          }}>
            Cada día sin web,<br />
            <span style={{
              background: gradients.text,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              son clientes que se van.
            </span>
          </h2>
          <p style={{
            fontSize: "clamp(15px,2vw,19px)", color: "#64748B",
            maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            No necesitas tecnología complicada. Necesitas que tu negocio{" "}
            <strong style={{ color: "#1E40AF", fontWeight: 700 }}>
              trabaje para ti mientras tú haces lo tuyo.
            </strong>
          </p>
        </AnimatedSection>

        {/* Bloque 2: Dolores (4 cards) */}
        <AnimatedSection style={{ marginBottom: "clamp(60px,10vw,80px)" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#EF4444",
              letterSpacing: 3, textTransform: "uppercase", marginBottom: 10,
            }}>
              Situaciones comunes
            </div>
            <h3 style={{
              fontSize: "clamp(22px,3.5vw,36px)",
              fontWeight: 800, color: "#0F172A",
              fontFamily: "'Sora', sans-serif", letterSpacing: "-1px", margin: 0,
            }}>
              ¿Alguno de estos te suena familiar?
            </h3>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
          }}>
            {PAIN_POINTS.map((p, i) => (
              <PainCard key={i} {...p} index={i} />
            ))}
          </div>
        </AnimatedSection>

        {/* Bloque 3: CTA final */}
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.005 }}
            style={{
              background: gradients.section,
              borderRadius: 28,
              padding: "clamp(48px,7vw,72px) clamp(28px,5vw,64px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{
                fontSize: "clamp(18px,2.5vw,24px)",
                color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto 8px",
                lineHeight: 1.5,
              }}>
                Una página web no es un gasto más.
              </p>
              <h3 style={{
                fontSize: "clamp(24px,4vw,40px)",
                fontWeight: 800, color: "#fff",
                fontFamily: "'Sora', sans-serif", letterSpacing: "-1.2px",
                maxWidth: 700, margin: "0 auto 32px",
                lineHeight: 1.15,
              }}>
                Es el vendedor que trabaja para ti{" "}
                <span style={{
                  background: "linear-gradient(90deg,#93C5FD,#C4B5FD)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  los 365 días del año.
                </span>
              </h3>

              <div style={{
                display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
              }}>
                <motion.a
                  href={whatsappUrl(WHATSAPP_MESSAGES.paginaWeb)}
                  target="_blank"
                  whileHover={{ scale: 1.07, boxShadow: "0 10px 40px rgba(255,255,255,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => trackEvent("wa_click", "por-que", { plan: "Página Web" })}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#fff", color: "#1E40AF",
                    textDecoration: "none", fontWeight: 800,
                    padding: "16px 32px", borderRadius: radius.pill,
                    fontSize: "clamp(14px,1.8vw,17px)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                  }}
                >
                  <MessageIcon size={18} color="#1E40AF" /> Quiero mi página web
                </motion.a>
                <motion.button
                  onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
                  whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.14)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff", fontWeight: 600,
                    padding: "16px 28px", borderRadius: radius.pill,
                    fontSize: "clamp(13px,1.8vw,16px)",
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  Ver ejemplos →
                </motion.button>
              </div>

              <div style={{
                marginTop: 32,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                color: "rgba(255,255,255,0.6)", fontSize: 13,
              }}>
                <span><ZapIcon size={18} /></span>
                Respuesta en menos de 1 hora · Sin compromisos
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
