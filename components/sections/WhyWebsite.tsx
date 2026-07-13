"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// ── DATA ──────────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    emoji: "😰",
    title: "¿Tu competencia te está ganando?",
    desc: "Mientras ellos aparecen en Google, tú dependes solo del boca a boca.",
  },
  {
    emoji: "📵",
    title: "¿Todo por WhatsApp?",
    desc: "Sin una web, pareces menos serio que negocios más pequeños que el tuyo.",
  },
  {
    emoji: "🌙",
    title: "¿Pierdes ventas de noche?",
    desc: "Cuando cierras tu negocio, tu presencia digital también desaparece.",
  },
  {
    emoji: "😓",
    title: "¿Nadie te encuentra en Google?",
    desc: "Miles de personas buscan lo que ofreces — y llegan a otro, no a ti.",
  },
];

const TRANSFORMATION = [
  {
    before: "Invisible en Google",
    after: "Primero en búsquedas",
    icon: "🔍",
    color: "#3B82F6",
    bg: "#EFF6FF",
    border: "rgba(59,130,246,0.2)",
  },
  {
    before: "Solo WhatsApp",
    after: "Presencia profesional",
    icon: "💼",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    border: "rgba(139,92,246,0.2)",
  },
  {
    before: "Cierra con el negocio",
    after: "Activo las 24/7",
    icon: "⚡",
    color: "#10B981",
    bg: "#ECFDF5",
    border: "rgba(16,185,129,0.2)",
  },
  {
    before: "Pierde clientes",
    after: "Los atrae solo",
    icon: "🚀",
    color: "#1E40AF",
    bg: "#EFF6FF",
    border: "rgba(30,64,175,0.2)",
  },
];

const RESULTS = [
  { value: "75%", label: "de personas buscan en Google antes de comprar" },
  { value: "3s", label: "para causar primera impresión o perder al cliente" },
  { value: "80%", label: "de búsquedas son desde el celular" },
  { value: "24/7", label: "trabajando para ti aunque estés dormido" },
];

// ── ANIMATED COUNTER ──────────────────────────────────────────────────────────

function Counter({ value }: { value: string }) {
  const num = parseInt(value);
  const suffix = value.replace(String(num), "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || isNaN(num)) return;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * num));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, num]);

  if (isNaN(num)) return <div ref={ref}>{value}</div>;
  return <div ref={ref}>{count}{suffix}</div>;
}

// ── PAIN CARD ─────────────────────────────────────────────────────────────────

function PainCard({ emoji, title, desc, index }: { emoji: string; title: string; desc: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "#F8FAFF",
        border: `1px solid ${hovered ? "rgba(59,130,246,0.25)" : "#E8F0FE"}`,
        borderRadius: 20,
        padding: "clamp(22px,3vw,32px)",
        cursor: "default",
        transition: "all 0.28s ease",
        boxShadow: hovered ? "0 16px 48px rgba(59,130,246,0.12)" : "0 2px 12px rgba(59,130,246,0.04)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 14 }}>{emoji}</div>
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

// ── MAIN ──────────────────────────────────────────────────────────────────────

export function WhyWebsite() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="por-que"
      ref={sectionRef}
      style={{
        background: "linear-gradient(160deg,#EFF6FF 0%,#DBEAFE 40%,#EDE9FE 100%)",
        padding: "clamp(72px,12vw,140px) 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs — mismo estilo Hero */}
      <motion.div style={{ y: orb1Y, position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "8%", left: "-8%",
          width: "min(500px,70vw)", height: "min(500px,70vw)", borderRadius: "50%",
          background: "radial-gradient(circle,rgba(59,130,246,0.15) 0%,transparent 70%)",
        }} />
      </motion.div>
      <motion.div style={{ y: orb2Y, position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", bottom: "5%", right: "-8%",
          width: "min(460px,65vw)", height: "min(460px,65vw)", borderRadius: "50%",
          background: "radial-gradient(circle,rgba(139,92,246,0.11) 0%,transparent 70%)",
        }} />
      </motion.div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ━━━━━━ BLOQUE 1: GANCHO EMOCIONAL ━━━━━━ */}
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(56px,9vw,100px)" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 100, padding: "6px 18px", marginBottom: 32,
              color: "#1E40AF", fontSize: 13, fontWeight: 600,
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#EF4444", display: "inline-block" }}
            />
            ¿Te identificas con esto?
          </motion.div>

          <h2 style={{
            fontSize: "clamp(32px,5.5vw,64px)",
            fontWeight: 900, color: "#0F172A",
            letterSpacing: "-2px", margin: "0 0 24px",
            fontFamily: "'Sora', sans-serif", lineHeight: 1.05,
          }}>
            Cada día sin web,<br />
            <span style={{
              background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              son clientes que se van.
            </span>
          </h2>

          <p style={{
            fontSize: "clamp(15px,2vw,20px)", color: "#64748B",
            maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            No necesitas tecnología complicada.<br />
            Necesitas que tu negocio{" "}
            <strong style={{ color: "#1E40AF", fontWeight: 700 }}>
              trabaje para ti mientras tú haces lo tuyo.
            </strong>
          </p>
        </AnimatedSection>

        {/* ━━━━━━ BLOQUE 2: DOLORES (4 CARDS) ━━━━━━ */}
        <AnimatedSection style={{ marginBottom: "clamp(60px,10vw,110px)" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#EF4444",
              letterSpacing: 3, textTransform: "uppercase", marginBottom: 10,
            }}>
              Situaciones comunes
            </div>
            <h3 style={{
              fontSize: "clamp(22px,3.5vw,38px)",
              fontWeight: 900, color: "#0F172A",
              fontFamily: "'Sora', sans-serif", letterSpacing: "-1px", margin: 0,
            }}>
              ¿Alguno de estos te suena familiar?
            </h3>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 20,
          }}>
            {PAIN_POINTS.map((p, i) => (
              <PainCard key={i} {...p} index={i} />
            ))}
          </div>
        </AnimatedSection>

        {/* ━━━━━━ BLOQUE 3: TRANSFORMACIÓN (ANTES → DESPUÉS) ━━━━━━ */}
        <AnimatedSection style={{ marginBottom: "clamp(60px,10vw,110px)" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#3B82F6",
              letterSpacing: 3, textTransform: "uppercase", marginBottom: 10,
            }}>
              La transformación
            </div>
            <h3 style={{
              fontSize: "clamp(22px,3.5vw,38px)",
              fontWeight: 900, color: "#0F172A",
              fontFamily: "'Sora', sans-serif", letterSpacing: "-1px", margin: 0,
            }}>
              De esto… a esto.
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 20,
          }}>
            {TRANSFORMATION.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: `0 20px 50px ${t.color}22` }}
                style={{
                  background: "#fff",
                  border: `1px solid ${t.border}`,
                  borderRadius: 20,
                  padding: "clamp(22px,3vw,32px)",
                  cursor: "default",
                  transition: "box-shadow 0.28s ease",
                }}
              >
                {/* Icono */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: t.bg, border: `1px solid ${t.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, marginBottom: 20,
                }}>
                  {t.icon}
                </div>

                {/* Antes */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  marginBottom: 12,
                }}>
                  <span style={{
                    background: "#FEF2F2", color: "#991B1B",
                    fontSize: 11, fontWeight: 700,
                    padding: "3px 10px", borderRadius: 100,
                    border: "1px solid #FECACA",
                  }}>
                    ANTES
                  </span>
                  <span style={{ fontSize: 14, color: "#94A3B8", fontWeight: 500 }}>
                    {t.before}
                  </span>
                </div>

                {/* Flecha */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                  style={{
                    fontSize: 18, color: t.color,
                    marginBottom: 12, fontWeight: 900,
                  }}
                >
                  ↓
                </motion.div>

                {/* Después */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    background: t.bg, color: t.color,
                    fontSize: 11, fontWeight: 700,
                    padding: "3px 10px", borderRadius: 100,
                    border: `1px solid ${t.border}`,
                  }}>
                    CON NOSOTROS
                  </span>
                  <span style={{ fontSize: 14, color: "#0F172A", fontWeight: 700 }}>
                    {t.after}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ━━━━━━ BLOQUE 4: STATS CON CONTEXTO ━━━━━━ */}
        <AnimatedSection style={{ marginBottom: "clamp(60px,10vw,110px)" }}>
          <div style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid #E8F0FE",
            borderRadius: 28,
            padding: "clamp(36px,5vw,60px) clamp(24px,4vw,48px)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.08)",
          }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <h3 style={{
                fontSize: "clamp(20px,3vw,34px)",
                fontWeight: 900, color: "#0F172A",
                fontFamily: "'Sora', sans-serif", letterSpacing: "-0.8px", margin: 0,
              }}>
                Los números no mienten
              </h3>
              <p style={{ color: "#64748B", marginTop: 10, fontSize: 15 }}>
                Esto es lo que está pasando ahora mismo mientras lees esto
              </p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 28,
            }}>
              {RESULTS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ textAlign: "center" }}
                >
                  <div style={{
                    fontSize: "clamp(32px,4.5vw,52px)",
                    fontWeight: 900,
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    lineHeight: 1.1, marginBottom: 10,
                  }}>
                    <Counter value={r.value} />
                  </div>
                  <div style={{
                    fontSize: "clamp(12px,1.4vw,14px)",
                    color: "#64748B", lineHeight: 1.55, fontWeight: 500,
                    maxWidth: 180, margin: "0 auto",
                  }}>
                    {r.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ━━━━━━ BLOQUE 5: FRASE PUENTE ━━━━━━ */}
        <AnimatedSection style={{ marginBottom: "clamp(60px,10vw,110px)" }}>
          <div style={{ textAlign: "center" }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: "clamp(18px,2.5vw,26px)",
                color: "#64748B", maxWidth: 600, margin: "0 auto 16px",
                lineHeight: 1.6,
              }}
            >
              Una página web no es un gasto más.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              style={{
                fontSize: "clamp(24px,4vw,44px)",
                fontWeight: 900, color: "#0F172A",
                fontFamily: "'Sora', sans-serif", letterSpacing: "-1.2px",
                maxWidth: 700, margin: "0 auto",
                lineHeight: 1.15,
              }}
            >
              Es el vendedor que trabaja para ti{" "}
              <span style={{
                background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                los 365 días del año.
              </span>
            </motion.p>
          </div>
        </AnimatedSection>

        {/* ━━━━━━ BLOQUE 6: CTA FINAL — mismo estilo Services ━━━━━━ */}
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.005 }}
            style={{
              background: "linear-gradient(135deg,#1E40AF 0%,#3B82F6 50%,#6366F1 100%)",
              borderRadius: 28,
              padding: "clamp(48px,7vw,80px) clamp(28px,5vw,64px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* orbs internos */}
            <div style={{
              position: "absolute", top: "-40%", left: "-10%", width: 500, height: 500, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(255,255,255,0.07) 0%,transparent 60%)", pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: "-30%", right: "-5%", width: 400, height: 400, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 60%)", pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <motion.div
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: 56, marginBottom: 24 }}
              >
                🚀
              </motion.div>

              <h3 style={{
                fontSize: "clamp(26px,4.5vw,52px)",
                fontWeight: 900, color: "#fff",
                fontFamily: "'Sora', sans-serif", letterSpacing: "-1.2px",
                margin: "0 0 18px", lineHeight: 1.1,
              }}>
                ¿Listo para que tu negocio<br />empiece a crecer en internet?
              </h3>

              <p style={{
                fontSize: "clamp(15px,2vw,19px)",
                color: "rgba(255,255,255,0.78)",
                maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.65,
              }}>
                Hablemos hoy. En pocos días, miles de personas podrán encontrar tu negocio en Google.
              </p>

              <div style={{
                display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
              }}>
                <motion.a
                  href="https://wa.me/+529931782620"
                  target="_blank"
                  whileHover={{ scale: 1.07, boxShadow: "0 10px 40px rgba(255,255,255,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#fff", color: "#1E40AF",
                    textDecoration: "none", fontWeight: 800,
                    padding: "16px 32px", borderRadius: 100,
                    fontSize: "clamp(14px,1.8vw,17px)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                  }}
                >
                  💬 Quiero mi página web
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
                    padding: "16px 28px", borderRadius: 100,
                    fontSize: "clamp(13px,1.8vw,16px)",
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  Ver ejemplos →
                </motion.button>
              </div>

              {/* Social proof micro */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                  marginTop: 32,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  color: "rgba(255,255,255,0.6)", fontSize: 13,
                }}
              >
                <span style={{ fontSize: 16 }}>⚡</span>
                Respuesta en menos de 1 hora · Sin compromisos
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}