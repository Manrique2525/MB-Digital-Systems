"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const BENEFITS = [
  {
    icon: "⚡",
    title: "Velocidad que vende",
    desc: "Tu página carga en menos de 2 segundos. Cada segundo de retraso pierde el 7% de tus clientes potenciales.",
    stat: "< 2s",
    statLabel: "carga promedio",
    color: "#3B82F6",
    bg: "#EFF6FF",
    border: "rgba(59,130,246,0.2)",
  },
  {
    icon: "🔒",
    title: "Seguridad garantizada",
    desc: "Certificados SSL, proteccion contra ataques y respaldo automatico. Tu informacion y la de tus clientes esta segura.",
    stat: "100%",
    statLabel: "protegido",
    color: "#10B981",
    bg: "#ECFDF5",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: "📈",
    title: "Escalable sin limites",
    desc: "Empieza con una landing y crece a e-commerce o sistema completo sin reconstruir desde cero.",
    stat: "3x",
    statLabel: "mas rapido",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    border: "rgba(139,92,246,0.2)",
  },
  {
    icon: "📱",
    title: "Mobile-first",
    desc: "El 80% de tus clientes buscan desde el celular. Tu pagina se ve perfecta en cualquier dispositivo.",
    stat: "80%",
    statLabel: "trafico movil",
    color: "#F59E0B",
    bg: "#FFFBEB",
    border: "rgba(245,158,11,0.2)",
  },
];

const TECH_USED = [
  { name: "React", icon: "fab fa-react", color: "#61DAFB" },
  { name: "Next.js", icon: "fas fa-code", color: "#0F172A" },
  { name: "Laravel", icon: "fab fa-laravel", color: "#FF2D20" },
  { name: "Vue.js", icon: "fab fa-vuejs", color: "#42B883" },
  { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
  { name: "PHP", icon: "fab fa-php", color: "#8892BE" },
];

export function TechStack() {
  return (
    <section
      style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#F8FAFF" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection
          style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,72px)" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
              color: "#1E40AF",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10B981",
                display: "inline-block",
              }}
            />
            Tecnologia de verdad
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,5vw,52px)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1.5px",
              margin: "0 0 20px",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            No usamos plantillas.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Codificamos tu exito.
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px,2vw,18px)",
              color: "#64748B",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Cada proyecto esta construido con tecnologia moderna que garantiza
            resultados. No te explicamos que usamos — te explicamos{" "}
            <strong style={{ color: "#1E40AF", fontWeight: 700 }}>
              que obtienes.
            </strong>
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 20,
            marginBottom: "clamp(40px,7vw,72px)",
          }}
        >
          {BENEFITS.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 50px ${b.color}18`,
                }}
                style={{
                  background: "#fff",
                  border: `1px solid ${b.border}`,
                  borderRadius: 20,
                  padding: "clamp(24px,3vw,32px)",
                  height: "100%",
                  cursor: "default",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: b.bg,
                      border: `1px solid ${b.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                    }}
                  >
                    {b.icon}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "clamp(22px,3vw,28px)",
                        fontWeight: 800,
                        color: b.color,
                        fontFamily: "'Sora', sans-serif",
                        lineHeight: 1,
                      }}
                    >
                      {b.stat}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#94A3B8",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {b.statLabel}
                    </div>
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(16px,2vw,19px)",
                    fontWeight: 800,
                    color: "#0F172A",
                    margin: "0 0 8px",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#64748B",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {b.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div
            style={{
              background: "#fff",
              border: "1px solid #E8F0FE",
              borderRadius: 20,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#64748B",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              Stack tecnologico:
            </span>
            {TECH_USED.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.1, y: -2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#F8FAFF",
                  border: "1px solid #E8F0FE",
                  borderRadius: 100,
                  padding: "6px 14px",
                  cursor: "default",
                }}
              >
                <i
                  className={tech.icon}
                  style={{ color: tech.color, fontSize: 16 }}
                />
                <span
                  style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
