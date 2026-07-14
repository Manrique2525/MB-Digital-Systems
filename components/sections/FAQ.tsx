"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";

const FAQ_DATA = [
  {
    q: "¿Cuánto tarda en estar lista mi página web?",
    a: "Una landing page está lista en 5-7 días hábiles. Una página empresarial con múltiples secciones toma 2-3 semanas. Sistemas a medida tienen tiempos variables según complejidad, pero siempre te damos un cronograma claro antes de empezar.",
  },
  {
    q: "¿Y si no me gusta el resultado?",
    a: "Trabajamos contigo en cada etapa para asegurar que el resultado sea exactamente lo que necesitas. Ofrecemos revisiones incluidas y, si después de las revisiones no estás satisfecho, no pagas. Así de simple.",
  },
  {
    q: "¿Hay costos ocultos?",
    a: "No. El precio que te cotizamos es el precio final. Incluye diseño, desarrollo, configuración y entrega. Los únicos costos adicionales son el dominio (~$250 MXN/año) y hosting (~$100 MXN/mes), que puedes contratar con nosotros o por tu cuenta.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "Para nada. Nosotros nos encargamos de todo lo técnico. Tú solo nos cuentas qué necesitas y nosotros lo hacemos realidad. Además, te damos una capacitación para que puedas actualizar tu contenido tú mismo.",
  },
  {
    q: "¿Funcionará en el celular de mis clientes?",
    a: "Sí, todas nuestras páginas son 100% responsivas. Se ven perfectas en celular, tablet y computadora. El 80% de tus clientes potenciales te buscarán desde su teléfono, por eso priorizamos la experiencia móvil.",
  },
  {
    q: "¿Puedo vender productos en línea?",
    a: "Sí. Nuestro plan E-commerce incluye catálogo de productos, carrito de compras, pasarela de pagos con tarjeta y PayPal, control de inventario y panel de pedidos. Tu tienda online vende 24/7.",
  },
  {
    q: "¿Cómo me contactan los clientes por WhatsApp?",
    a: "Integramos un botón flotante de WhatsApp que redirige directo a tu número con un mensaje predeterminado. Cuando alguien hace clic, se abre WhatsApp con tu chat listo. También puedes recibir mensajes desde formularios en tu página.",
  },
  {
    q: "¿Ofrecen soporte después de entrega?",
    a: "Sí. Incluimos soporte post-entrega (30-60 días según plan). También ofrecemos planes de mantenimiento mensual para que tu página siempre esté actualizada y funcionando al 100%.",
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Trabajamos con anticipo y contra entrega. Para landing pages, solicitamos 50% al inicio y 50% al entregar. Para proyectos más grandes, definimos un cronograma de pagos por etapas. Aceptamos transferencia bancaria, efectivo y PayPal.",
  },
  {
    q: "¿Puedo hacer cambios después de que esté lista?",
    a: "Sí, cada plan incluye revisiones. Si necesitas cambios adicionales después de las revisiones incluidas, te damos una cotización justa. También ofrecemos planes de mantenimiento mensual para actualizaciones continuas.",
  },
  {
    q: "¿Trabajan con clientes de todo México o solo de Tabasco?",
    a: "Trabajamos con clientes de todo México. Como nuestro equipo es 100% remoto, la ubicación no es un problema. Tenemos clientes en Tabasco, Ciudad de México, Yucatán y otros estados.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo cuéntanos qué necesitas. No necesitas tener diseño, logo ni contenido preparado. Nosotros te guiamos en cada paso: desde el diseño hasta el contenido. Tú solo apruebas y nosotros hacemos todo el trabajo técnico.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      style={{
        borderBottom: "1px solid #E8F0FE",
      }}
    >
      <motion.button
        id={`faq-button-${index}`}
        onClick={() => setOpen(!open)}
        whileHover={{ backgroundColor: "rgba(59,130,246,0.04)" }}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: 700,
            color: "#0F172A",
            fontFamily: "'Sora', sans-serif",
            paddingRight: 16,
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            fontSize: 20,
            color: "#3B82F6",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          +
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: "clamp(14px, 1.6vw, 15px)",
                color: "#64748B",
                lineHeight: 1.75,
                paddingBottom: 20,
                margin: 0,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      style={{
        padding: "clamp(60px, 10vw, 120px) 20px",
        background: "#F8FAFF",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 72px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
              color: "#1E40AF",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Preguntas frecuentes
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
            ¿Tienes{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              dudas?
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#64748B",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Las respuestas a las preguntas que más nos hacen nuestros clientes
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div
            style={{
              background: "#fff",
              border: "1px solid #E8F0FE",
              borderRadius: 24,
              padding: "clamp(16px, 3vw, 32px)",
            }}
          >
            {FAQ_DATA.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection style={{ textAlign: "center", marginTop: 48 }}>
          <p
            style={{
              fontSize: 15,
              color: "#64748B",
              marginBottom: 16,
            }}
          >
            ¿No encontraste lo que buscabas?
          </p>
          <motion.a
            href={whatsappUrl(WHATSAPP_MESSAGES.duda)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg,#3B82F6,#1E40AF)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 100,
              fontSize: 15,
            }}
          >
            💬 Pregúntanos por WhatsApp
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
