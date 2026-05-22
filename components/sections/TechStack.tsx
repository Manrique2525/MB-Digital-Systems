"use client";

import { motion } from "framer-motion";
import { TECH_FRONTEND, TECH_BACKEND } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { TechItem } from "@/types";

interface TechCardProps {
  tech: TechItem;
  i: number;
}

function TechCard({ tech, i }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
      style={{
        background: "#fff",
        border: "1px solid #E8F0FE",
        borderRadius: 16,
        padding: "20px 18px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "default",
      }}
    >
      <i
        className={tech.icon}
        style={{ fontSize: 28, color: tech.color, flexShrink: 0 }}
      />
      <span style={{ fontWeight: 700, color: "#1E293B", fontSize: 15 }}>
        {tech.name}
      </span>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section
      style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#F8FAFF" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection
          style={{ textAlign: "center", marginBottom: "clamp(36px,6vw,64px)" }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#3B82F6",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Tecnología
          </div>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,46px)",
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-1px",
              margin: "0 0 16px",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Nuestro Stack Tecnológico
          </h2>
          <p
            style={{
              fontSize: "clamp(13px,1.8vw,16px)",
              color: "#64748B",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Las mejores tecnologías del mercado para soluciones robustas y escalables
          </p>
        </AnimatedSection>

        {[
          {
            label: "Front-end",
            emoji: "🖥",
            items: TECH_FRONTEND,
            bg: "#DBEAFE",
            color: "#1E40AF",
          },
          {
            label: "Back-end",
            emoji: "🖧",
            items: TECH_BACKEND,
            bg: "#D1FAE5",
            color: "#065F46",
          },
        ].map((cat, ci) => (
          <AnimatedSection
            key={cat.label}
            delay={ci * 0.1}
            style={{ marginBottom: ci === 0 ? 40 : 0 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div
                style={{
                  background: cat.bg,
                  padding: "10px 14px",
                  borderRadius: 12,
                  color: cat.color,
                  fontSize: 18,
                }}
              >
                {cat.emoji}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1E293B",
                  margin: 0,
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {cat.label}
              </h3>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                gap: 14,
              }}
            >
              {cat.items.map((t, i) => (
                <TechCard key={t.name} tech={t} i={i} />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}