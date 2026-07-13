"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B1120",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            fontSize: "clamp(80px, 15vw, 140px)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
            marginBottom: "16px",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 12px",
          }}
        >
          Página no encontrada
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#94A3B8",
            margin: "0 0 36px",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          La página que buscas no existe o fue movida. Pero no te preocupes,
          podemos ayudarte a crear algo mejor.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #2563EB)",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
            }}
          >
            ← Volver al inicio
          </Link>

          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.contacto)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid #334155",
              padding: "16px 32px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
