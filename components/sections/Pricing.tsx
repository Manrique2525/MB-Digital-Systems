"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { PlanCard } from "@/components/sections/Pricing/PlanCard";
import { useSectionViewOnce, useTracking } from "@/components/hooks/useTracking";
import { InfoIcon, MonitorIcon, GearIcon, MessageIcon, ZapIcon, ClipboardIcon, LockIcon, getUseCaseIcon } from "@/components/ui/icons/Icons";
import { section, gradients, easing, radius } from "@/data/theme";

// ── DATA ──────────────────────────────────────────────────────────────────────

const WEB_PLANS = [
  {
    id: "starter",
    icon: "rocket",
    name: "Landing Page",
    tagline: "Presencia digital enfocada",
    price: "2,999",
    desc: "Para negocios que necesitan una presencia digital clara y enfocada en generar contacto.",
    features: [
      "Diseño moderno y premium",
      "Se adapta a celular, tablet y PC",
      "Botón de WhatsApp directo",
      "Estructura preparada para publicar",
      "Formulario que llega a tu correo",
      "Te ayudamos con dominio y hosting",
      "1 revisión incluida",
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
    tagline: "Para empresas que necesitan más secciones",
    price: "8,999",
    desc: "Para empresas que quieren presentar su operación y administrar su contenido sin depender de un programador.",
    features: [
      "Todo lo del plan Landing",
      "Hasta 8 secciones personalizadas",
      "Actualizas contenido tú mismo",
      "Sección de blog o noticias",
      "Contenido organizado por secciones",
      "Galería de fotos y portafolio",
      "Formularios inteligentes",
      "Acompañamiento posterior a la entrega",
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
    tagline: "Tu tienda en línea",
    price: "16,999",
    desc: "Una tienda en línea con catálogo, pedidos y pagos integrados.",
    features: [
      "Todo lo del plan Empresarial",
      "Catálogo de productos",
      "Carrito de compras",
      "Pagos en línea",
      "Control de inventario",
      "Panel de pedidos y envíos",
      "Integración con WhatsApp",
      "Acompañamiento posterior a la entrega",
    ],
    cta: "Quiero mi tienda online",
    whatsappMessage: WHATSAPP_MESSAGES.ecomerce,
    highlight: false,
    accentColor: "#8B5CF6",
    accentBg: "#F5F3FF",
    accentBorder: "rgba(139,92,246,0.2)",
  },
];

const USE_CASES = [
  { icon: "graduation", title: "Gestión Escolar", desc: "Control de alumnos, asistencias, calificaciones y pagos.", color: "#1E40AF", bg: "#EFF6FF" },
  { icon: "users", title: "CRM Empresarial", desc: "Seguimiento de clientes, ventas y oportunidades de negocio.", color: "#1E40AF", bg: "#F5F3FF" },
  { icon: "box", title: "Control de Inventarios", desc: "Automatización de almacenes, entradas, salidas y alertas.", color: "#1E40AF", bg: "#ECFDF5" },
  { icon: "hospital", title: "Sistemas Médicos", desc: "Expedientes de pacientes, citas, seguimiento y historial.", color: "#1E40AF", bg: "#EFF6FF" },
  { icon: "hotel", title: "Gestión Hotelera", desc: "Reservaciones, habitaciones, servicios y reportes.", color: "#1E40AF", bg: "#ECFDF5" },
  { icon: "store", title: "Punto de Venta", desc: "Ventas, caja, inventario y reportes diarios en tiempo real.", color: "#1E40AF", bg: "#EFF6FF" },
];

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
        padding: section.paddingWide,
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
            borderRadius: radius.pill, padding: "6px 18px", marginBottom: 28,
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
              background: gradients.text,
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
            <strong style={{ color: "#1E40AF", fontWeight: 700 }}>objetivos concretos.</strong>
          </p>
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
              borderRadius: radius.pill, padding: "8px 20px",
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
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
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
              Los precios mostrados son referenciales. Cada proyecto recibe una cotización según su alcance.
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
              borderRadius: radius.pill, padding: "8px 20px",
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
                background: gradients.text,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                tu negocio
              </span>
            </h3>
            <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: "#64748B", lineHeight: 1.7 }}>
              Desarrollamos la plataforma que tu empresa necesita para ordenar procesos
              manuales y seguir creciendo.
            </p>
          </div>

          {/* Grid: capacidades + casos de uso */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap: 24,
            marginBottom: 40,
          }}>

            {/* Casos de uso */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
              style={{
                background: "#F8FAFF",
                border: "1px solid #E8F0FE",
                borderRadius: radius.panel,
                padding: "clamp(28px,4vw,44px) clamp(22px,3vw,36px)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#1E40AF", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>
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

          {/* CTA Sistemas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "linear-gradient(135deg,#0F172A 0%,#1E40AF 100%)",
              borderRadius: radius.panel,
              padding: "clamp(40px,6vw,64px) clamp(24px,5vw,56px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
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
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.92)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>
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
                color: "rgba(255,255,255,0.92)", lineHeight: 1.7, margin: "0 0 28px",
              }}>
                Cada sistema es único. Cuéntanos tu idea y te damos una propuesta detallada
                con alcance, tiempos y presupuesto.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <span style={{
                  background: "rgba(255,255,255,0.2)", color: "#fff",
                  fontSize: 12, fontWeight: 700, padding: "4px 12px",
                  borderRadius: radius.pill,
                }}>
                  Cotización según alcance
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
                  padding: "14px 28px", borderRadius: radius.pill, fontSize: 15,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                <MessageIcon size={18} color="#1E40AF" /> Solicitar cotización
              </motion.a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
              {[
                { emoji: "⚡", title: "Te respondemos a la brevedad", desc: "Te contactamos para entender tu proyecto." },
                { emoji: "📋", title: "Diagnóstico inicial", desc: "Evaluamos tu idea sin compromiso y te damos una orientación." },
                { emoji: "🔒", title: "Alcance definido", desc: "El alcance y el presupuesto se acuerdan antes de comenzar." },
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
                  <span style={{ display: "inline-flex", color: "#fff", flexShrink: 0 }}>{item.emoji === "⚡" ? <ZapIcon size={20} /> : item.emoji === "📋" ? <ClipboardIcon size={20} /> : <LockIcon size={20} />}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#fff", fontSize: 14, marginBottom: 3, fontFamily: "'Sora', sans-serif" }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>{item.desc}</div>
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