"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// ── DATA ─────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  { icon: "🔍", text: "Tu negocio no aparece en Google" },
  { icon: "🐢", text: "Tu página carga lento y la gente se va" },
  { icon: "📵", text: "Todo depende de un solo WhatsApp" },
  { icon: "😶", text: "No transmite confianza ni profesionalismo" },
  { icon: "📱", text: "Se ve mal en celular" },
  { icon: "💸", text: "Pierdes clientes frente a tu competencia" },
  { icon: "🌙", text: "Cuando cierras, tu negocio desaparece" },
];

const SOLUTIONS = [
  { icon: "✓", text: "Diseño moderno que genera confianza al instante" },
  { icon: "✓", text: "Velocidad ultra rápida en cualquier dispositivo" },
  { icon: "✓", text: "Integración con WhatsApp y formularios de contacto" },
  { icon: "✓", text: "Optimizado para aparecer en Google (SEO)" },
  { icon: "✓", text: "Experiencia perfecta en celular, tablet y PC" },
  { icon: "✓", text: "Tu negocio visible y activo las 24 horas" },
  { icon: "✓", text: "Estrategia de conversión: visitas → clientes" },
];

// ── ANIMATED COUNTER ──────────────────────────────────────────────────────────

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 1600, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── PROBLEM ITEM ──────────────────────────────────────────────────────────────

function ProblemItem({ icon, text, index }: { icon: string; text: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 18px",
        borderRadius: 14,
        background: hovered ? "#FEF2F2" : "#F8FAFF",
        border: `1px solid ${hovered ? "#FECACA" : "#E8F0FE"}`,
        transition: "all 0.22s ease",
        cursor: "default",
      }}
    >
      <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
      <span style={{
        fontSize: "clamp(13px,1.5vw,15px)",
        color: hovered ? "#991B1B" : "#374151",
        fontWeight: 500,
        lineHeight: 1.4,
        transition: "color 0.22s ease",
      }}>
        {text}
      </span>
    </motion.div>
  );
}

// ── SOLUTION ITEM ─────────────────────────────────────────────────────────────

function SolutionItem({ text, index }: { text: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 18px",
        borderRadius: 14,
        background: hovered ? "#EFF6FF" : "#F8FAFF",
        border: `1px solid ${hovered ? "rgba(59,130,246,0.3)" : "#E8F0FE"}`,
        transition: "all 0.22s ease",
        cursor: "default",
      }}
    >
      <span style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 900,
        color: "#fff",
        flexShrink: 0,
        boxShadow: hovered ? "0 4px 12px rgba(59,130,246,0.35)" : "none",
        transition: "box-shadow 0.22s ease",
      }}>
        ✓
      </span>
      <span style={{
        fontSize: "clamp(13px,1.5vw,15px)",
        color: hovered ? "#1E40AF" : "#374151",
        fontWeight: 500,
        lineHeight: 1.4,
        transition: "color 0.22s ease",
      }}>
        {text}
      </span>
    </motion.div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export function WhyWebsite() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

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
      {/* Orbs decorativos — igual que Hero */}
      <motion.div style={{ y: orbY, position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "5%", left: "-8%",
          width: "min(500px,70vw)", height: "min(500px,70vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(59,130,246,0.14) 0%,transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "-5%",
          width: "min(420px,60vw)", height: "min(420px,60vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 70%)",
        }} />
      </motion.div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── HEADER ── */}
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(48px,8vw,96px)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100, padding: "6px 16px",
            marginBottom: 28, color: "#1E40AF",
            fontSize: 13, fontWeight: 600,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
            El problema real
          </div>

          <h2 style={{
            fontSize: "clamp(30px,5.5vw,60px)",
            fontWeight: 900,
            color: "#0F172A",
            letterSpacing: "-1.5px",
            margin: "0 0 20px",
            fontFamily: "'Sora', sans-serif",
            lineHeight: 1.08,
          }}>
            Tu negocio puede estar<br />
            <span style={{
              background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              perdiendo clientes hoy.
            </span>
          </h2>

          <p style={{
            fontSize: "clamp(15px,2vw,19px)",
            color: "#64748B",
            maxWidth: 580,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            No necesitas solo una página bonita.{" "}
            Necesitas una herramienta que{" "}
            <strong style={{ color: "#1E40AF", fontWeight: 700 }}>
              genere confianza y convierta visitas en clientes.
            </strong>
          </p>
        </AnimatedSection>

        {/* ── DOS COLUMNAS ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(20px,4vw,48px)",
          marginBottom: "clamp(56px,9vw,100px)",
          alignItems: "start",
        }}>

          {/* IZQUIERDA — PROBLEMAS */}
          <AnimatedSection>
            <div style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              border: "1px solid #E8F0FE",
              borderRadius: 24,
              padding: "clamp(24px,4vw,40px) clamp(20px,3vw,32px)",
              boxShadow: "0 8px 40px rgba(59,130,246,0.07)",
            }}>
              {/* Label cabecera */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16,
                }}>❌</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", letterSpacing: 2, textTransform: "uppercase" }}>
                    Sin presencia digital
                  </div>
                  <div style={{ fontSize: "clamp(16px,2vw,20px)", fontWeight: 800, color: "#0F172A", fontFamily: "'Sora', sans-serif", letterSpacing: "-0.3px" }}>
                    Lo que normalmente pasa
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {PROBLEMS.map((p, i) => (
                  <ProblemItem key={i} icon={p.icon} text={p.text} index={i} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* DERECHA — SOLUCIONES */}
          <AnimatedSection delay={0.15}>
            <div style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(59,130,246,0.18)",
              borderRadius: 24,
              padding: "clamp(24px,4vw,40px) clamp(20px,3vw,32px)",
              boxShadow: "0 8px 40px rgba(59,130,246,0.1)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "#EFF6FF",
                  border: "1px solid rgba(59,130,246,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16,
                }}>✅</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#3B82F6", letterSpacing: 2, textTransform: "uppercase" }}>
                    Con MBDigital
                  </div>
                  <div style={{ fontSize: "clamp(16px,2vw,20px)", fontWeight: 800, color: "#0F172A", fontFamily: "'Sora', sans-serif", letterSpacing: "-0.3px" }}>
                    Lo que hacemos por ti
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {SOLUTIONS.map((s, i) => (
                  <SolutionItem key={i} text={s.text} index={i} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── BRIDGE EMOCIONAL ── */}
        <AnimatedSection style={{ marginBottom: "clamp(56px,9vw,100px)" }}>
          <div style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid #E8F0FE",
            borderRadius: 24,
            padding: "clamp(32px,5vw,56px) clamp(24px,5vw,64px)",
            textAlign: "center",
            boxShadow: "0 8px 40px rgba(59,130,246,0.07)",
          }}>
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: 44, marginBottom: 18 }}
            >
              💡
            </motion.div>
            <p style={{
              fontSize: "clamp(16px,2.2vw,22px)",
              color: "#64748B",
              maxWidth: 600,
              margin: "0 auto 10px",
              lineHeight: 1.6,
            }}>
              Una página web no debería ser un gasto.
            </p>
            <p style={{
              fontSize: "clamp(20px,3vw,32px)",
              fontWeight: 900,
              color: "#0F172A",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "-0.8px",
              margin: 0,
              maxWidth: 640,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.3,
            }}>
              Debería ser la herramienta que atrae clientes{" "}
              <span style={{
                background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                automáticamente.
              </span>
            </p>
          </div>
        </AnimatedSection>

        {/* ── STATS ── */}
        <AnimatedSection style={{ marginBottom: "clamp(56px,9vw,100px)" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 20,
          }}>
            {[
              { value: 75, suffix: "%", label: "de personas buscan negocios en Google antes de visitar" },
              { value: 3,  suffix: "s",  label: "tienes para causar primera impresión antes de que se vayan" },
              { value: 80, suffix: "%", label: "de búsquedas se hacen desde el celular" },
              { value: 24, suffix: "/7", label: "horas activo para mostrar tus servicios y captar clientes" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(59,130,246,0.15)" }}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid #E8F0FE",
                  borderRadius: 20,
                  padding: "clamp(24px,3vw,36px) clamp(18px,2.5vw,28px)",
                  textAlign: "center",
                  boxShadow: "0 4px 24px rgba(59,130,246,0.06)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
              >
                <div style={{
                  fontSize: "clamp(30px,4vw,44px)",
                  fontWeight: 900,
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}>
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{
                  fontSize: "clamp(12px,1.3vw,14px)",
                  color: "#64748B",
                  lineHeight: 1.55,
                  fontWeight: 500,
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── RESULTADO FINAL — mismo estilo al CTA de Services ── */}
        <AnimatedSection>
          <div style={{
            background: "linear-gradient(135deg,#1E40AF 0%,#3B82F6 50%,#6366F1 100%)",
            borderRadius: 24,
            padding: "clamp(40px,6vw,72px) clamp(24px,5vw,60px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "clamp(32px,5vw,56px)",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* orb interno */}
            <div style={{
              position: "absolute", top: "-40%", right: "-8%",
              width: 400, height: 400, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)",
              pointerEvents: "none",
            }} />

            {/* Texto */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)",
                letterSpacing: 3, textTransform: "uppercase", marginBottom: 16,
              }}>
                El resultado
              </div>
              <h3 style={{
                fontSize: "clamp(24px,3.5vw,40px)",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "'Sora', sans-serif",
                letterSpacing: "-0.8px",
                margin: "0 0 18px",
                lineHeight: 1.15,
              }}>
                Tu negocio disponible 24/7
              </h3>
              <p style={{
                fontSize: "clamp(14px,1.6vw,17px)",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.75,
                margin: "0 0 32px",
              }}>
                Mientras trabajas, descansas o duermes — tu página muestra tus servicios, genera confianza y{" "}
                <strong style={{ color: "#fff" }}>capta clientes sin que hagas nada.</strong>
              </p>
              <motion.a
                href="https://wa.me/+529931782620"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  color: "#1E40AF",
                  textDecoration: "none",
                  fontWeight: 800,
                  padding: "14px 28px",
                  borderRadius: 100,
                  fontSize: 15,
                }}
              >
                💬 Quiero mi página web
              </motion.a>
            </div>

            {/* Cards resultado */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
              {[
                { emoji: "💰", title: "Más ventas", desc: "Clientes que llegan solos sin que los busques uno a uno." },
                { emoji: "🏆", title: "Más autoridad", desc: "Tu marca se percibe seria, profesional y confiable." },
                { emoji: "📈", title: "Más crecimiento", desc: "Una base sólida para escalar tu negocio en internet." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    padding: "18px 20px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span style={{ fontSize: 26, flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#fff", fontSize: 16, marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}