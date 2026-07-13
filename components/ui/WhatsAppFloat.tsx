"use client";

import { motion } from "framer-motion";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/data/constants";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappUrl(WHATSAPP_MESSAGES.generico)}
      target="_blank"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "fixed",
        bottom: "clamp(20px,3vw,32px)",
        right: "clamp(16px,2.5vw,32px)",
        zIndex: 200,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        color: "#fff",
        boxShadow: "0 4px 24px rgba(37,211,102,0.5)",
        textDecoration: "none",
      }}
    >
      <i className="fab fa-whatsapp" />
    </motion.a>
  );
}