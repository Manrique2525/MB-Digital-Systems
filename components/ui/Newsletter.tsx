"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("form-name", "newsletter");
      formData.append("email", email);

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus("sent");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
        borderRadius: "20px",
        padding: "clamp(24px, 4vw, 40px)",
        border: "1px solid rgba(59,130,246,0.2)",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "36px", marginBottom: "12px" }}>📬</div>
      <h3
        style={{
          fontSize: "clamp(20px, 2.5vw, 24px)",
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 8px",
        }}
      >
        Tips de Marketing Digital
      </h3>
      <p
        style={{
          fontSize: "15px",
          color: "#94A3B8",
          margin: "0 0 24px",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
        }}
      >
        Recibe gratis consejos prácticos para hacer crecer tu negocio en
        internet. Sin spam, solo contenido de valor.
      </p>

      {status === "sent" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: "rgba(16,185,129,0.15)",
            borderRadius: "12px",
            padding: "16px",
            color: "#10B981",
            fontWeight: 700,
          }}
        >
          ¡Listo! Revisa tu bandeja de entrada 📩
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            maxWidth: "440px",
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            ref={inputRef}
            type="email"
            required
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: "1 1 200px",
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid #334155",
              background: "#0F172A",
              color: "#fff",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#3B82F6";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#334155";
            }}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              background: "#3B82F6",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: status === "sending" ? "wait" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            {status === "sending" ? "..." : "Suscribirme"}
          </button>
        </form>
      )}
    </div>
  );
}
