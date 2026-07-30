"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { whatsappUrl } from "@/data/constants";
import { StarIcon, CheckIcon, GiftIcon, MessageIcon } from "@/components/ui/icons/Icons";

interface PlanCardProps {
  plan: {
    id: string;
    icon: string;
    name: string;
    tagline: string;
    price: string;
    originalPrice: string;
    promoEnd: string;
    desc: string;
    features: string[];
    launchBonus: { icon: string; text: string; value: string }[];
    cta: string;
    whatsappMessage: string;
    highlight: boolean;
    accentColor: string;
    accentBg: string;
    accentBorder: string;
  };
  index: number;
}

export function PlanCard({ plan, index }: PlanCardProps) {
  const [hovered, setHovered] = useState(false);

  if (plan.highlight) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: plan.accentBg as string,
          borderRadius: 24,
          padding: "clamp(28px,4vw,44px) clamp(22px,3vw,36px)",
          position: "relative",
          overflow: "hidden",
          boxShadow: hovered
            ? "0 32px 80px rgba(30,64,175,0.45)"
            : "0 16px 56px rgba(30,64,175,0.3)",
          transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(-4px) scale(1.01)",
          transition: "all 0.3s ease",
          zIndex: 2,
        }}
      >
        <div style={{
          position: "absolute", top: "-30%", right: "-15%",
          width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(255,255,255,0.2)",
          borderRadius: 100, padding: "4px 14px",
          marginBottom: 24, fontSize: 11, fontWeight: 700,
          color: "#fff", letterSpacing: 1.5, textTransform: "uppercase",
        }}>
          <StarIcon size={14} color="#FCD34D" /> {plan.tagline}
        </div>

        <div style={{ fontSize: 40, marginBottom: 12 }}>{plan.icon}</div>
        <h3 style={{
          fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 800,
          color: "#fff", fontFamily: "'Sora', sans-serif",
          letterSpacing: "-0.5px", margin: "0 0 8px",
        }}>
          {plan.name}
        </h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", margin: "0 0 20px", lineHeight: 1.5 }}>
          {plan.desc}
        </p>

        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{
              background: "rgba(255,255,255,0.2)",
              borderRadius: 100, padding: "3px 10px",
              fontSize: 10, fontWeight: 800, color: "#fff",
              letterSpacing: 0.5,
            }}>
              10% OFF
            </span>
          </div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>Desde</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 2 }}>
            <span style={{
              fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700,
              color: "rgba(255,255,255,0.4)",
              textDecoration: "line-through",
            }}>
              ${plan.originalPrice}
            </span>
            <span style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 800, color: "#fff", fontFamily: "'Sora', sans-serif", letterSpacing: "-1px" }}>
              ${plan.price}
            </span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>MXN</span>
          </div>
          <div style={{ fontSize: 13, color: "#10B981", fontWeight: 700, marginTop: 4 }}>
            Ahorras ${(parseInt(plan.originalPrice.replace(",", "")) - parseInt(plan.price.replace(",", ""))).toLocaleString()} MXN
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
            Válido hasta {plan.promoEnd}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>
            Equivalente a ${Math.round(parseInt(plan.price.replace(",", "")) / 30).toLocaleString()}/día
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {plan.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + i * 0.05 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span style={{
                width: 20, height: 20, borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: "#fff", fontWeight: 800, flexShrink: 0,
              }}><CheckIcon size={14} color="#fff" /></span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.88)", lineHeight: 1.4 }}>{f}</span>
            </motion.div>
          ))}
        </div>

        <div style={{
          background: "rgba(255,255,255,0.12)",
          borderRadius: 14,
          padding: "14px 16px",
          marginBottom: 28,
          border: "1px solid rgba(255,255,255,0.15)",
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: "#FCD34D",
            letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10,
          }}>
            <GiftIcon size={16} color="#FCD34D" /> Beneficios de lanzamiento
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {plan.launchBonus.map((bonus, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14 }}>{bonus.icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{bonus.text}</span>
                </div>
                <span style={{ fontSize: 11, color: "#FCD34D", fontWeight: 700, whiteSpace: "nowrap" }}>GRATIS</span>
              </div>
            ))}
          </div>
        </div>

        <motion.a
          href={whatsappUrl(plan.whatsappMessage)}
          target="_blank"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: "#fff", color: "#1E40AF",
            textDecoration: "none", fontWeight: 800,
            padding: "14px 24px", borderRadius: 100,
            fontSize: 15, width: "100%",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          }}
        >
          <MessageIcon size={18} color="#1E40AF" /> {plan.cta}
        </motion.a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "#F8FAFF",
        border: `1px solid ${hovered ? plan.accentColor + "40" : "#E8F0FE"}`,
        borderRadius: 24,
        padding: "clamp(28px,4vw,44px) clamp(22px,3vw,36px)",
        boxShadow: hovered
          ? `0 24px 60px ${plan.accentColor}20`
          : "0 4px 20px rgba(59,130,246,0.06)",
        transform: hovered ? "translateY(-6px)" : "none",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 12 }}>{plan.icon}</div>
      <h3 style={{
        fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 800,
        color: "#0F172A", fontFamily: "'Sora', sans-serif",
        letterSpacing: "-0.5px", margin: "0 0 8px",
      }}>
        {plan.name}
      </h3>
      <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 20px", lineHeight: 1.5 }}>
        {plan.desc}
      </p>

      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{
            background: `${plan.accentColor}15`,
            border: `1px solid ${plan.accentColor}30`,
            borderRadius: 100, padding: "3px 10px",
            fontSize: 10, fontWeight: 800, color: plan.accentColor,
            letterSpacing: 0.5,
          }}>
            10% OFF
          </span>
        </div>
        <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>Desde</span>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 2 }}>
          <span style={{
            fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700,
            color: "#94A3B8",
            textDecoration: "line-through",
          }}>
            ${plan.originalPrice}
          </span>
          <span style={{
            fontSize: "clamp(32px,4vw,44px)", fontWeight: 800,
            fontFamily: "'Sora', sans-serif", letterSpacing: "-1px",
            background: `linear-gradient(135deg,${plan.accentColor},#1E40AF)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            ${plan.price}
          </span>
          <span style={{ fontSize: 14, color: "#64748B", fontWeight: 600 }}>MXN</span>
        </div>
        <div style={{ fontSize: 13, color: "#10B981", fontWeight: 700, marginTop: 4 }}>
          Ahorras ${(parseInt(plan.originalPrice.replace(",", "")) - parseInt(plan.price.replace(",", ""))).toLocaleString()} MXN
        </div>
        <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>
          Válido hasta {plan.promoEnd}
        </div>
        <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>
          Equivalente a ${Math.round(parseInt(plan.price.replace(",", "")) / 30).toLocaleString()}/día
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
        {plan.features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + i * 0.04 }}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{
              width: 20, height: 20, borderRadius: "50%",
              background: `linear-gradient(135deg,${plan.accentColor},#1E40AF)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, color: "#fff", fontWeight: 800, flexShrink: 0,
}}><CheckIcon size={14} color="#1E40AF" /></span>
              <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.4 }}>{f}</span>
          </motion.div>
        ))}
      </div>

      <div style={{
        background: "linear-gradient(135deg,#FFFBEB,#FEF3C7)",
        borderRadius: 14,
        padding: "14px 16px",
        marginBottom: 28,
        border: "1px solid #FDE68A",
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: "#B45309",
          letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10,
        }}>
          <GiftIcon size={16} color="#B45309" /> Beneficios de lanzamiento
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {plan.launchBonus.map((bonus, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14 }}>{bonus.icon}</span>
                <span style={{ fontSize: 13, color: "#92400E", fontWeight: 500 }}>{bonus.text}</span>
              </div>
              <span style={{ fontSize: 11, color: "#B45309", fontWeight: 700, whiteSpace: "nowrap" }}>GRATIS</span>
            </div>
          ))}
        </div>
      </div>

      <motion.a
        href={whatsappUrl(plan.whatsappMessage)}
        target="_blank"
        whileHover={{ scale: 1.04, boxShadow: `0 8px 32px ${plan.accentColor}40` }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
background: `linear-gradient(135deg,${plan.accentColor},#1E40AF)`,
            color: "#fff", textDecoration: "none", fontWeight: 800,
            padding: "14px 24px", borderRadius: 100,
            fontSize: 15, width: "100%",
            boxShadow: `0 4px 20px ${plan.accentColor}35`,
          }}
        >
          <MessageIcon size={18} color="#fff" /> {plan.cta}
      </motion.a>
    </motion.div>
  );
}
