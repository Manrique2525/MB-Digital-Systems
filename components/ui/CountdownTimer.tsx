"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  label?: string;
}

function calcTimeLeft(target: number) {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer({
  targetDate,
  label = "Oferta termina en",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() =>
    calcTimeLeft(new Date(targetDate).getTime())
  );

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontSize: "clamp(13px, 1.5vw, 15px)",
          color: "#EF4444",
          fontWeight: 700,
          marginBottom: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        ⏰ {label}
      </p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {blocks.map((block) => (
          <div
            key={block.label}
            style={{
              background: "linear-gradient(135deg, #1E293B, #0F172A)",
              borderRadius: "12px",
              padding: "12px 16px",
              minWidth: "64px",
              border: "1px solid rgba(239,68,68,0.2)",
              boxShadow: "0 4px 15px rgba(239,68,68,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {String(block.value).padStart(2, "0")}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#94A3B8",
                fontWeight: 600,
                marginTop: "4px",
                textTransform: "uppercase",
              }}
            >
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
