"use client";

import { motion } from "framer-motion";
import { SERVICES, FEATURES, whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTracking } from "@/components/hooks/useTracking";
import { getServiceIcon, MessageIcon } from "@/components/ui/icons/Icons";
import { section, gradients, radius } from "@/data/theme";

export function Services() {
  const { trackEvent } = useTracking();
  return (
    <section
      id="servicios"
      style={{ padding: section.padding, background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection
          style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,80px)" }}
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
            Lo que hacemos
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
            Nuestros Servicios
          </h2>
          <p
            style={{
              fontSize: "clamp(14px,2vw,18px)",
              color: "#64748B",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Soluciones digitales a la medida para cada tipo de negocio
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24,
            marginBottom: "clamp(40px,7vw,80px)",
          }}
        >
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, boxShadow: `0 28px 64px ${s.color}22` }}
                style={{
                  background: "#F8FAFF",
                  border: "1px solid #E8F0FE",
                  borderRadius: radius.card,
                  padding: "clamp(24px,4vw,40px) clamp(20px,3vw,32px)",
                  height: "100%",
                  cursor: "default",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color + "45"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8F0FE"; }}
              >
                <div style={{ marginBottom: 20 }}>{getServiceIcon(s.title, 44)}</div>
                <h3
                  style={{
                    fontSize: "clamp(18px,2.5vw,22px)",
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 12,
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, margin: 0 }}>
                  {s.desc}
                </p>
                <motion.a
                  href={whatsappUrl(`Hola, me interesa el servicio de ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("service_click", s.title);
                    trackEvent("wa_click", "servicios", { plan: s.title });
                  }}
                  style={{
                    marginTop: 28,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: s.color,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  Cotizar este servicio →
                </motion.a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div
            style={{
              background:
                gradients.section,
              borderRadius: radius.panel,
              padding: "clamp(32px,5vw,64px) clamp(20px,4vw,48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "clamp(28px,4vw,48px)",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 16px",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.5px",
                }}
              >
                Desarrollo a la Medida
              </h3>
              <p
                style={{
                  fontSize: "clamp(14px,1.5vw,16px)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                }}
              >
                ¿Necesitas algo específico para tu negocio? Escríbenos y juntos
                convertimos tu idea en realidad.
              </p>
              <motion.a
                href={whatsappUrl(WHATSAPP_MESSAGES.sistemasAMedida)}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => trackEvent("wa_click", "servicios", { plan: "Sistema a Medida" })}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  color: "#1E40AF",
                  textDecoration: "none",
                  fontWeight: 800,
                  padding: "14px 28px",
                  borderRadius: radius.pill,
                  fontSize: 15,
                }}
              >
                <MessageIcon size={18} color="#1E40AF" /> Solicitar Cotización
              </motion.a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "clamp(12px,1.5vw,14px)",
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 12,
                    }}
                  >
                    ✓
                  </span>
                  {f}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}