"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#0B1120",
        gap: "24px",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: "48px",
          height: "48px",
          border: "3px solid rgba(59,130,246,0.2)",
          borderTopColor: "#3B82F6",
          borderRadius: "50%",
        }}
      />
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          color: "#64748B",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        Cargando...
      </motion.p>
    </div>
  );
}
