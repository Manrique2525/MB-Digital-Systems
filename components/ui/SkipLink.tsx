"use client";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: "absolute",
        left: "-9999px",
        top: 0,
        zIndex: 10000,
        background: "#3B82F6",
        color: "#fff",
        padding: "12px 24px",
        fontSize: 16,
        fontWeight: 700,
        borderRadius: "0 0 8px 0",
        textDecoration: "none",
      }}
      onFocus={(e) => { e.currentTarget.style.left = "0"; }}
      onBlur={(e) => { e.currentTarget.style.left = "-9999px"; }}
    >
      Saltar al contenido principal
    </a>
  );
}
