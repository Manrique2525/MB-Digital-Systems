"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { MarketingConcept } from "@/types";
import { colors, easing, fonts } from "@/data/theme";

const artLabelStyle: CSSProperties = {
  color: colors.primaryDark,
  fontFamily: fonts.sora,
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: "0.16em",
  lineHeight: 1.4,
  textTransform: "uppercase",
};

const artLabelDarkStyle: CSSProperties = {
  ...artLabelStyle,
  color: colors.muted,
};

const artIndexStyle: CSSProperties = {
  color: colors.slate,
  fontFamily: fonts.sora,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.12em",
  lineHeight: 1.4,
};

function SocialArtwork() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "inherit",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={artLabelStyle}>NAROA / social</span>
        <span
          aria-hidden="true"
          style={{ width: 8, height: 8, borderRadius: "50%", background: colors.violet }}
        />
      </div>

      <div style={{ position: "relative", margin: "24px 0 20px" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: -24,
            top: -26,
            width: 104,
            height: 104,
            border: `1px solid ${colors.border}`,
            borderRadius: "50%",
          }}
        />
        <div
          aria-hidden="true"
          style={{ width: 42, height: 3, background: colors.violet, marginBottom: 14 }}
        />
        <p
          style={{
            position: "relative",
            margin: 0,
            maxWidth: 260,
            color: colors.ink,
            fontFamily: fonts.sora,
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 800,
            letterSpacing: "-0.055em",
            lineHeight: 0.98,
          }}
        >
          Naroa tiene
          <br />
          algo que decir.
        </p>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
          <span
            aria-hidden="true"
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: colors.bg,
              border: `1px solid ${colors.border}`,
              flexShrink: 0,
            }}
          />
          <span
            aria-hidden="true"
            style={{ width: 72, height: 6, borderRadius: 4, background: colors.border }}
          />
          <span
            aria-hidden="true"
            style={{ width: 38, height: 6, borderRadius: 4, background: colors.border }}
          />
        </div>
        <div style={{ height: 1, background: colors.border, marginBottom: 10 }} />
        <p style={{ margin: 0, color: colors.slate, fontSize: 11, lineHeight: 1.55 }}>
          Una idea, un formato, una voz.
        </p>
      </div>
    </div>
  );
}

function BrandingArtwork() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "inherit",
        gap: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={artLabelDarkStyle}>CASA VELA / identidad</span>
        <span
          aria-hidden="true"
          style={{ width: 8, height: 8, borderRadius: "50%", background: colors.violet }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px, 3vw, 22px)" }}>
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
          <circle cx="39" cy="39" r="30" stroke={colors.violet} strokeWidth="1.5" />
          <circle cx="39" cy="39" r="13" stroke={colors.white} strokeWidth="1.5" />
          <path d="M39 5v68M5 39h68" stroke={colors.white} strokeOpacity="0.22" />
          <path d="M18 60L60 18" stroke={colors.violet} strokeOpacity="0.75" />
        </svg>
        <div>
          <div
            style={{
              color: colors.white,
              fontFamily: fonts.sora,
              fontSize: "clamp(42px, 6vw, 62px)",
              fontWeight: 800,
              letterSpacing: "-0.07em",
              lineHeight: 0.82,
            }}
          >
            Aa
          </div>
          <div
            style={{
              marginTop: 10,
              color: colors.muted,
              fontFamily: fonts.sora,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.18em",
              lineHeight: 1.4,
              textTransform: "uppercase",
            }}
          >
            Voz / forma / ritmo
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {[colors.violet, colors.primary, colors.success, colors.bg].map((color: string) => (
          <span
            key={color}
            aria-hidden="true"
            style={{
              width: 18,
              height: 18,
              border: color === colors.bg ? `1px solid rgba(255,255,255,0.2)` : "none",
              background: color,
            }}
          />
        ))}
        <span
          aria-hidden="true"
          style={{ height: 1, flex: 1, marginLeft: 8, background: "rgba(255,255,255,0.16)" }}
        />
      </div>
    </div>
  );
}

function PromotionArtwork() {
  return (
    <div style={{ position: "relative", minHeight: "inherit", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "42%",
          background: colors.violet,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          width: 58,
          height: 58,
          border: "1px solid rgba(255,255,255,0.55)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <span style={artLabelStyle}>UMBRA / campaña</span>
          <span
            style={{
              ...artIndexStyle,
              padding: "2px 6px",
              borderRadius: 4,
              background: "rgba(255,255,255,0.94)",
              color: colors.ink,
            }}
          >
            01
          </span>
        </div>

        <div style={{ maxWidth: "64%", margin: "24px 0" }}>
          <p
            style={{
              margin: 0,
              color: colors.ink,
              fontFamily: fonts.sora,
              fontSize: "clamp(30px, 4.6vw, 46px)",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 0.92,
            }}
          >
            Nueva
            <br />
            colección.
          </p>
          <p style={{ margin: "14px 0 0", color: colors.slate, fontSize: 11, lineHeight: 1.6 }}>
            Una idea visual para anunciar lo que sigue.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span aria-hidden="true" style={{ width: 34, height: 1, background: colors.ink }} />
          <span
            style={{
              color: colors.primaryDark,
              fontFamily: fonts.sora,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.16em",
              lineHeight: 1.4,
              textTransform: "uppercase",
            }}
          >
            Concepto
          </span>
        </div>
      </div>
    </div>
  );
}

function ImageArtwork() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={artLabelStyle}>ÁUREA / producto</span>
        <span style={artIndexStyle}>02</span>
      </div>

      <div style={{ position: "relative", flex: 1, minHeight: 160, margin: "18px 0 0" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "10% 20% 15% 0",
            border: `1px solid ${colors.border}`,
            background: colors.bg,
            transform: "rotate(-4deg)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0 0 0 30%",
            border: `1px solid ${colors.violet}`,
            background: colors.primary,
            opacity: 0.14,
            transform: "rotate(4deg)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10%",
            right: "16%",
            bottom: "22%",
            zIndex: 1,
            width: "22%",
            minWidth: 30,
            maxWidth: 56,
            borderRadius: "16px 16px 8px 8px",
            border: "1px solid rgba(255,255,255,0.38)",
            background: `linear-gradient(180deg, ${colors.violet}, ${colors.primaryDark})`,
            boxShadow: "0 16px 34px rgba(30,64,175,0.24)",
            transform: "rotate(3deg)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -7,
              left: "32%",
              right: "32%",
              height: 10,
              borderRadius: "4px 4px 0 0",
              background: colors.ink,
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: "36% 12% 28%",
              display: "grid",
              placeItems: "center",
              borderRadius: 4,
              background: colors.white,
              color: colors.primaryDark,
              fontFamily: fonts.sora,
              fontSize: 7,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            ÁUREA
          </span>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "flex-end",
            height: "100%",
            padding: "20px 8px 20px 20px",
          }}
        >
          <span
            style={{
              maxWidth: "58%",
              color: colors.primaryDark,
              fontFamily: fonts.sora,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              lineHeight: 1.5,
              textTransform: "uppercase",
            }}
          >
            Color / textura / detalle
          </span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 16 }}>
        {[colors.primaryDark, colors.violet, colors.success].map((color: string) => (
          <span
            key={color}
            aria-hidden="true"
            style={{ width: 18, height: 4, background: color }}
          />
        ))}
        <span style={{ marginLeft: 6, color: colors.slate, fontSize: 10, lineHeight: 1.5 }}>
          Ajuste de color
        </span>
      </div>
    </div>
  );
}

function ReelArtwork() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "inherit",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={artLabelDarkStyle}>NÓTA / reel</span>
        <span style={{ ...artIndexStyle, color: colors.muted }}>9:16</span>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div
          style={{
            position: "relative",
            width: "clamp(104px, 34%, 144px)",
            aspectRatio: "9 / 16",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 18,
            overflow: "hidden",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(160deg, ${colors.violet} 0%, rgba(139,92,246,0.12) 55%, ${colors.primaryDark} 100%)`,
              opacity: 0.72,
            }}
          />
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, margin: "auto" }}
          >
            <circle cx="17" cy="17" r="16" stroke="rgba(255,255,255,0.55)" />
            <path d="M14 11.5L23 17L14 22.5V11.5Z" fill={colors.white} />
          </svg>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 10,
              right: 10,
              bottom: 10,
              height: 3,
              borderRadius: 2,
              background: "rgba(255,255,255,0.38)",
            }}
          />
        </div>
      </div>

      <p
        style={{
          margin: 0,
          color: colors.white,
          fontFamily: fonts.sora,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
        }}
      >
Nóta / Idea en movimiento.
      </p>
    </div>
  );
}

function SystemArtwork() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "inherit",
        gap: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={artLabelStyle}>ORDEN / sistema</span>
        <span style={artIndexStyle}>03</span>
      </div>

      <div
        aria-hidden="true"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 6,
        }}
      >
        <span style={{ aspectRatio: "1", borderRadius: "50%", background: colors.violet }} />
        <span style={{ aspectRatio: "1", border: `1px solid ${colors.primary}`, background: colors.bg }} />
        <span style={{ aspectRatio: "1", background: colors.ink }} />
        <span style={{ aspectRatio: "1", border: `1px solid ${colors.border}`, background: colors.white }} />
      </div>

      <div>
        <div style={{ height: 1, background: colors.border, marginBottom: 12 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span aria-hidden="true" style={{ width: 24, height: 1, background: colors.violet }} />
          <span style={{ color: colors.slate, fontSize: 11, lineHeight: 1.55 }}>
            Reglas claras para piezas consistentes.
          </span>
        </div>
      </div>
    </div>
  );
}

function ConceptArtwork({ concept }: { concept: MarketingConcept }) {
  if (concept.format === "social") return <SocialArtwork />;
  if (concept.format === "branding") return <BrandingArtwork />;
  if (concept.format === "video") return <ReelArtwork />;
  if (concept.format === "image") return <ImageArtwork />;
  if (concept.id === "nueva-etapa") return <PromotionArtwork />;
  return <SystemArtwork />;
}

export function ConceptTile({ concept }: { concept: MarketingConcept }) {
  const dark = concept.format === "branding" || concept.format === "video";
  const artBackground = dark ? colors.ink : concept.format === "image" ? colors.bg : colors.white;
  const captionBorder = dark ? "rgba(255,255,255,0.16)" : colors.border;
  const categoryColor = dark ? colors.muted : colors.slate;
  const titleColor = dark ? colors.white : colors.ink;

  return (
    <motion.figure
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: easing }}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: 0,
        minWidth: 0,
        background: dark ? colors.ink : colors.white,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          flex: 1,
          minHeight: "clamp(200px, 24vw, 240px)",
          padding: "clamp(18px, 2.5vw, 26px)",
          background: artBackground,
        }}
      >
        <ConceptArtwork concept={concept} />
      </div>

      <figcaption
        style={{
          borderTop: `1px solid ${captionBorder}`,
          padding: "clamp(16px, 2.2vw, 22px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          <span
            style={{
              color: categoryColor,
              fontFamily: fonts.sora,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.14em",
              lineHeight: 1.5,
              textTransform: "uppercase",
            }}
          >
            {concept.category}
          </span>
          <span
            style={{
              color: dark ? colors.white : colors.ink,
              fontFamily: fonts.sora,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.5,
            }}
          >
            {concept.disclaimer}
          </span>
        </div>

        <p
          style={{
            margin: "8px 0 0",
            color: titleColor,
            fontFamily: fonts.sora,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.4,
          }}
        >
          {concept.title}
        </p>
      </figcaption>
    </motion.figure>
  );
}
