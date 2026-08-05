"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { PlanCard } from "@/components/sections/Pricing/PlanCard";
import { useSectionViewOnce, useTracking } from "@/components/hooks/useTracking";
import { GiftIcon, InfoIcon, ShieldCheckIcon, MonitorIcon, GearIcon, MessageIcon, ZapIcon, ClipboardIcon, LockIcon, CodeIcon, DatabaseIcon, PlugIcon, getUseCaseIcon, getDevStepIcon } from "@/components/ui/icons/Icons";

// ── DATA ──────────────────────────────────────────────────────────────────────

const WEB_PLANS = [
  {
    id: "starter",
    icon: "rocket",
    name: "Landing Page",
    tagline: "Empieza a captar clientes hoy",
    price: "2,999",
    originalPrice: "3,332",
    promoEnd: "31 de agosto",
    desc: "Para negocios que necesitan presencia digital YA. En 7 días tienes tu página funcionando.",
    features: [
      "Diseño moderno y premium",
      "Se adapta a celular, tablet y PC",
      "Botón de WhatsApp directo",
      "Aparece en búsquedas de Google",
      "Formulario que llega a tu correo",
      "Te ayudamos con dominio y hosting",
      "1 revisión incluida",
    ],
    launchBonus: [
      { icon: "globe", text: "Dominio gratis 1 año", value: "$250" },
      { icon: "monitor", text: "Hosting 3 meses gratis", value: "$300" },
      { icon: "search", text: "SEO básico configurado", value: "$1,500" },
    ],
    cta: "Quiero mi landing page",
    whatsappMessage: WHATSAPP_MESSAGES.landingPage,
    highlight: false,
    accentColor: "#3B82F6",
    accentBg: "#EFF6FF",
    accentBorder: "rgba(59,130,246,0.2)",
  },
  {
    id: "business",
    icon: "building",
    name: "Página Empresarial",
    tagline: "La más elegida por nuestros clientes",
    price: "8,999",
    originalPrice: "9,999",
    promoEnd: "31 de agosto",
    desc: "Para empresas que quieren verse profesionales y administrar su contenido sin depender de un programador.",
    features: [
      "Todo lo del plan Landing",
      "Hasta 8 secciones personalizadas",
      "Actualizas contenido tú mismo",
      "Blog para atraer clientes por Google",
      "Posicionamiento SEO avanzado",
      "Galería de fotos y portafolio",
      "Formularios inteligentes",
      "Soporte prioritario 30 días",
    ],
    launchBonus: [
      { icon: "globe", text: "Dominio gratis 1 año", value: "$250" },
      { icon: "monitor", text: "Hosting 6 meses gratis", value: "$600" },
      { icon: "search", text: "SEO avanzado configurado", value: "$3,000" },
      { icon: "chart", text: "Google Analytics configurado", value: "$1,000" },
    ],
    cta: "Quiero mi página empresarial",
    whatsappMessage: WHATSAPP_MESSAGES.paginaEmpresarial,
    highlight: true,
    accentColor: "#1E40AF",
    accentBg: "linear-gradient(135deg,#1E40AF,#3B82F6 60%,#8B5CF6)",
    accentBorder: "transparent",
  },
  {
    id: "premium",
    icon: "cart",
    name: "E-commerce",
    tagline: "Vende 24/7 sin límites",
    price: "16,999",
    originalPrice: "18,888",
    promoEnd: "31 de agosto",
    desc: "Tu tienda online que vende mientras duermes. Catálogo, pagos y envíos listos para usar.",
    features: [
      "Todo lo del plan Empresarial",
      "Catálogo de productos ilimitado",
      "Carrito de compras inteligente",
      "Pagos con tarjeta y PayPal",
      "Control de inventario automático",
      "Panel de pedidos y envíos",
      "WhatsApp Business integrado",
      "Soporte 60 días",
    ],
    launchBonus: [
      { icon: "globe", text: "Dominio gratis 1 año", value: "$250" },
      { icon: "monitor", text: "Hosting 12 meses gratis", value: "$1,200" },
      { icon: "search", text: "SEO avanzado configurado", value: "$3,000" },
      { icon: "chart", text: "Google Analytics + Meta Pixel", value: "$2,000" },
      { icon: "camera", text: "Fotos de producto profesionales", value: "$2,500" },
    ],
    cta: "Quiero mi tienda online",
    whatsappMessage: WHATSAPP_MESSAGES.ecomerce,
    highlight: false,
    accentColor: "#8B5CF6",
    accentBg: "#F5F3FF",
    accentBorder: "rgba(139,92,246,0.2)",
  },
];

const SYSTEM_CAPABILITIES = [
  "Panel administrativo completo",
  "Roles y permisos de usuarios",
  "Reportes en tiempo real",
  "Integraciones con APIs externas",
  "Sistema multiusuario",
  "Control de inventarios",
  "Facturación electrónica",
  "WhatsApp Business API",
  "Dashboards interactivos",
  "Automatizaciones de procesos",
  "WebSockets (tiempo real)",
  "Infraestructura en la nube",
];

const USE_CASES = [
  { icon: "graduation", title: "Gestión Escolar", desc: "Control de alumnos, asistencias, calificaciones y pagos.", color: "#3B82F6", bg: "#EFF6FF" },
  { icon: "users", title: "CRM Empresarial", desc: "Seguimiento de clientes, ventas y oportunidades de negocio.", color: "#8B5CF6", bg: "#F5F3FF" },
  { icon: "box", title: "Control de Inventarios", desc: "Automatización de almacenes, entradas, salidas y alertas.", color: "#10B981", bg: "#ECFDF5" },
  { icon: "hospital", title: "Sistemas Médicos", desc: "Expedientes de pacientes, citas, seguimiento y historial.", color: "#3B82F6", bg: "#EFF6FF" },
  { icon: "hotel", title: "Gestión Hotelera", desc: "Reservaciones, habitaciones, servicios y reportes.", color: "#10B981", bg: "#ECFDF5" },
  { icon: "store", title: "Punto de Venta", desc: "Ventas, caja, inventario y reportes diarios en tiempo real.", color: "#1E40AF", bg: "#EFF6FF" },
];

const DEV_STEPS = [
  { num: "01", icon: "search", title: "Análisis", desc: "Entendemos tu proceso, objetivos y requerimientos exactos." },
  { num: "02", icon: "palette", title: "UX / UI", desc: "Diseñamos las pantallas y el flujo antes de escribir código." },
  { num: "03", icon: "gear", title: "Desarrollo", desc: "Construimos con tecnología moderna, segura y escalable." },
  { num: "04", icon: "flask", title: "Pruebas", desc: "Testing exhaustivo antes de entregar para garantizar calidad." },
  { num: "05", icon: "rocket", title: "Lanzamiento", desc: "Implementación, capacitación y soporte post-entrega incluido." },
];

const SYSTEM_STACK = [
  { name: "Laravel", color: "#FF2D20", icon: "code" },
  { name: "Vue.js", color: "#42B883", icon: "code" },
  { name: "React", color: "#61DAFB", icon: "code" },
  { name: "MySQL", color: "#4479A1", icon: "database" },
  { name: "PHP", color: "#8892BE", icon: "code" },
  { name: "APIs REST", color: "#10B981", icon: "plug" },
];



// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useSectionViewOnce("pricing_view", sectionRef);
  const { trackEvent } = useTracking();

  return (
    <section
      id="precios"
      ref={sectionRef}
      style={{
        background: "#fff",
        padding: "clamp(72px,12vw,140px) 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ━━━ HEADER ━━━ */}
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(52px,8vw,88px)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 28,
            color: "#1E40AF", fontSize: 13, fontWeight: 600,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
            Planes y precios
          </div>
          <h2 style={{
            fontSize: "clamp(30px,5.5vw,60px)", fontWeight: 800,
            color: "#0F172A", letterSpacing: "-2px",
            margin: "0 0 20px", fontFamily: "'Sora', sans-serif", lineHeight: 1.06,
          }}>
            Planes para hacer<br />
            <span style={{
              background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              crecer tu negocio
            </span>
          </h2>
          <p style={{
            fontSize: "clamp(15px,2vw,19px)", color: "#64748B",
            maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            Desde landing pages hasta plataformas completas. Soluciones modernas
            enfocadas en{" "}
            <strong style={{ color: "#1E40AF", fontWeight: 700 }}>resultados reales.</strong>
          </p>
          <div style={{ marginTop: 32 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg,#ECFDF5,#D1FAE5)",
                border: "1px solid #A7F3D0",
                borderRadius: 100,
                padding: "10px 22px",
                color: "#065F46",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              <GiftIcon size={18} color="#065F46" />
              10% de descuento por lanzamiento — Válido hasta el 31 de agosto
            </div>
          </div>
        </AnimatedSection>

        {/* ━━━ SECCIÓN 1: PÁGINAS WEB ━━━ */}
        <AnimatedSection style={{ marginBottom: "clamp(80px,12vw,140px)" }}>

          {/* Divider label */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16, marginBottom: 48,
          }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,#E8F0FE)" }} />
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#F8FAFF", border: "1px solid #E8F0FE",
              borderRadius: 100, padding: "8px 20px",
            }}>
              <MonitorIcon size={18} color="#1E40AF" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1E40AF", letterSpacing: 1.5, textTransform: "uppercase" }}>
                Páginas Web
              </span>
            </div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#E8F0FE,transparent)" }} />
          </div>

          {/* Cards — plan del medio elevado */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 20,
            alignItems: "center",
          }}>
            {WEB_PLANS.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          {/* Nota de precio */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              textAlign: "center", marginTop: 28,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              color: "#64748B", fontSize: 13,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <InfoIcon size={16} color="#64748B" />
              Los precios son referenciales. Cada proyecto tiene su propia cotización gratuita.
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ECFDF5", border: "1px solid #A7F3D0",
              borderRadius: 100, padding: "6px 16px",
              color: "#065F46", fontWeight: 600,
            }}>
              <ShieldCheckIcon size={16} color="#065F46" />
              Garantía de satisfacción: Si no te gusta, no pagas
            </div>
          </motion.div>
        </AnimatedSection>

        {/* ━━━ SECCIÓN 2: SISTEMAS A MEDIDA ━━━ */}
        <AnimatedSection>

          {/* Divider label */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16, marginBottom: 48,
          }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,#E8F0FE)" }} />
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#F8FAFF", border: "1px solid #E8F0FE",
              borderRadius: 100, padding: "8px 20px",
            }}>
              <GearIcon size={18} color="#1E40AF" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1E40AF", letterSpacing: 1.5, textTransform: "uppercase" }}>
                Sistemas a Medida
              </span>
            </div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#E8F0FE,transparent)" }} />
          </div>

          {/* Intro sistemas */}
          <div style={{
            textAlign: "center", marginBottom: 56,
            maxWidth: 640, margin: "0 auto 56px",
          }}>
            <h3 style={{
              fontSize: "clamp(22px,3.5vw,40px)", fontWeight: 800,
              color: "#0F172A", fontFamily: "'Sora', sans-serif",
              letterSpacing: "-1px", margin: "0 0 16px",
            }}>
              Automatiza y escala<br />
              <span style={{
                background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                tu negocio
              </span>
            </h3>
            <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: "#64748B", lineHeight: 1.7 }}>
              No vendemos software. Desarrollamos la plataforma exacta que tu empresa necesita
              para eliminar procesos manuales y crecer sin límites.
            </p>
          </div>

          {/* Grid: capacidades + casos de uso */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 24,
            marginBottom: 40,
          }}>

            {/* Capacidades */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "#F8FAFF",
                border: "1px solid #E8F0FE",
                borderRadius: 24,
                padding: "clamp(28px,4vw,44px) clamp(22px,3vw,36px)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#3B82F6", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>
                Capacidades del sistema
              </div>
              <h4 style={{
                fontSize: "clamp(18px,2.2vw,24px)", fontWeight: 800,
                color: "#0F172A", fontFamily: "'Sora', sans-serif",
                margin: "0 0 24px", letterSpacing: "-0.4px",
              }}>
                Todo lo que necesitas en uno
              </h4>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}>
                {SYSTEM_CAPABILITIES.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      background: "#fff", border: "1px solid #E8F0FE",
                      borderRadius: 10, padding: "10px 12px",
                    }}
                  >
                    <span style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, color: "#fff", fontWeight: 800, marginTop: 1,
                    }}>✓</span>
                    <span style={{ fontSize: 12, color: "#374151", lineHeight: 1.4, fontWeight: 500 }}>{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Casos de uso */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "#F8FAFF",
                border: "1px solid #E8F0FE",
                borderRadius: 24,
                padding: "clamp(28px,4vw,44px) clamp(22px,3vw,36px)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#8B5CF6", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>
                Casos de uso
              </div>
              <h4 style={{
                fontSize: "clamp(18px,2.2vw,24px)", fontWeight: 800,
                color: "#0F172A", fontFamily: "'Sora', sans-serif",
                margin: "0 0 24px", letterSpacing: "-0.4px",
              }}>
                ¿Para qué tipo de negocio?
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {USE_CASES.map((uc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    whileHover={{ x: 4 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      background: "#fff", border: "1px solid #E8F0FE",
                      borderRadius: 14, padding: "14px 16px",
                      cursor: "default", transition: "border-color 0.2s ease",
                    }}
                  >
                    <div style={{
                      width: 42, height: 42, borderRadius: 12,
                      background: uc.bg, border: `1px solid ${uc.color}22`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, color: uc.color,
                    }}>
                      {getUseCaseIcon(uc.icon, 20)}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A", marginBottom: 2 }}>{uc.title}</div>
                      <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.4 }}>{uc.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Proceso de desarrollo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              background: "#F8FAFF",
              border: "1px solid #E8F0FE",
              borderRadius: 24,
              padding: "clamp(28px,4vw,44px) clamp(22px,3vw,36px)",
              marginBottom: 24,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#10B981", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 8 }}>
                Cómo lo hacemos
              </div>
              <h4 style={{
                fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 800,
                color: "#0F172A", fontFamily: "'Sora', sans-serif",
                margin: 0, letterSpacing: "-0.5px",
              }}>
                Proceso de desarrollo
              </h4>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
              gap: 20,
            }}>
              {DEV_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ textAlign: "center", position: "relative" }}
                >
                  {i < DEV_STEPS.length - 1 && (
                    <motion.div
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      style={{
                        position: "absolute", top: 30, right: "-12%",
                        width: "24%", height: 2,
                        background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
                      }}
                    />
                  )}
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "linear-gradient(135deg,#EFF6FF,#E0E7FF)",
                    border: "2px solid rgba(59,130,246,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px", position: "relative", color: "#1E40AF",
                  }}>
                    {getDevStepIcon(step.icon, 24)}
                    <span style={{
                      position: "absolute", top: -8, right: -8,
                      width: 22, height: 22, borderRadius: "50%",
                      background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
                      color: "#fff", fontSize: 9, fontWeight: 800,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {step.num}
                    </span>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#0F172A", marginBottom: 6, fontFamily: "'Sora', sans-serif" }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.55 }}>
                    {step.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stack tecnológico */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: "#F8FAFF", border: "1px solid #E8F0FE",
              borderRadius: 20, padding: "24px 32px",
              display: "flex", alignItems: "center",
              gap: 20, flexWrap: "wrap", justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: "#64748B", letterSpacing: 1.5, textTransform: "uppercase", flexShrink: 0 }}>
              Stack tecnológico:
            </span>
            {SYSTEM_STACK.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.1, y: -2 }}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "#fff", border: "1px solid #E8F0FE",
                  borderRadius: 100, padding: "6px 14px",
                  cursor: "default",
                }}
              >
                {tech.icon === "code" && <CodeIcon size={16} color={tech.color} />}
                {tech.icon === "database" && <DatabaseIcon size={16} color={tech.color} />}
                {tech.icon === "plug" && <PlugIcon size={16} color={tech.color} />}
                <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Sistemas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "linear-gradient(135deg,#1E40AF 0%,#3B82F6 50%,#8B5CF6 100%)",
              borderRadius: 24,
              padding: "clamp(40px,6vw,64px) clamp(24px,5vw,56px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "clamp(28px,4vw,48px)",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: "-40%", right: "-8%", width: 400, height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 60%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>
                Sistemas a medida
              </div>
              <h3 style={{
                fontSize: "clamp(22px,3vw,36px)", fontWeight: 800,
                color: "#fff", fontFamily: "'Sora', sans-serif",
                letterSpacing: "-0.8px", margin: "0 0 16px", lineHeight: 1.15,
              }}>
                Cotización personalizada<br />sin costo
              </h3>
              <p style={{
                fontSize: "clamp(14px,1.6vw,16px)",
                color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: "0 0 28px",
              }}>
                Cada sistema es único. Cuéntanos tu idea y te damos una propuesta detallada
                con alcance, tiempos y presupuesto.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <span style={{
                  background: "rgba(255,255,255,0.2)", color: "#fff",
                  fontSize: 12, fontWeight: 700, padding: "4px 12px",
                  borderRadius: 100,
                }}>
                  Proyectos desde $25,000 MXN
                </span>
              </div>
              <motion.a
                href={whatsappUrl(WHATSAPP_MESSAGES.sistemasAMedida)}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => trackEvent("wa_click", "precios", { plan: "Sistema a Medida" })}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "#fff", color: "#1E40AF",
                  textDecoration: "none", fontWeight: 800,
                  padding: "14px 28px", borderRadius: 100, fontSize: 15,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                <MessageIcon size={18} color="#1E40AF" /> Solicitar cotización
              </motion.a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
              {[
                { emoji: "⚡", title: "Respuesta en menos de 1 hora", desc: "Te contactamos rápido para entender tu proyecto." },
                { emoji: "📋", title: "Análisis gratuito", desc: "Evaluamos tu idea sin compromiso y te damos un diagnóstico." },
                { emoji: "🔒", title: "Precio cerrado", desc: "Una vez acordado, el presupuesto no cambia." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 14,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 16, padding: "16px 18px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.emoji === "⚡" ? <ZapIcon size={20} /> : item.emoji === "📋" ? <ClipboardIcon size={20} /> : <LockIcon size={20} />}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#fff", fontSize: 14, marginBottom: 3, fontFamily: "'Sora', sans-serif" }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </AnimatedSection>
      </div>
    </section>
  );
}