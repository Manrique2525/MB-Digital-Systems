"use client";

import { useState } from "react";
import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react";
import { colors, fonts, radius } from "@/data/theme";

type ButtonLinkVariant = "primary" | "secondary" | "whatsapp";

interface ButtonLinkProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel" | "aria-label"> {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  className?: string;
}

const baseStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  maxWidth: "100%",
  minHeight: 48,
  padding: "13px clamp(20px, 2.4vw, 30px)",
  border: "1.5px solid transparent",
  borderRadius: radius.pill,
  boxSizing: "border-box",
  cursor: "pointer",
  fontFamily: fonts.sora,
  fontSize: "clamp(14px, 1.2vw, 15px)",
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "center",
  textDecoration: "none",
  transition:
    "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, filter 0.2s ease",
  whiteSpace: "normal",
};

const variantStyles: Record<ButtonLinkVariant, { base: CSSProperties; hover: CSSProperties }> = {
  primary: {
    base: {
      backgroundColor: colors.primaryDark,
      borderColor: colors.primaryDark,
      color: colors.white,
    },
    hover: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
  },
  secondary: {
    base: {
      backgroundColor: colors.white,
      borderColor: colors.slate,
      color: colors.primaryDark,
    },
    hover: {
      backgroundColor: colors.bg,
      borderColor: colors.primary,
    },
  },
  whatsapp: {
    base: {
      backgroundColor: colors.success,
      borderColor: colors.ink,
      color: colors.ink,
    },
    hover: {
      filter: "brightness(0.92)",
    },
  },
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const [hovered, setHovered] = useState(false);
  const styles = variantStyles[variant];
  const isBlank = target?.toLowerCase() === "_blank";
  const relTokens = (rel ?? "").split(/\s+/).filter(Boolean);
  const safeRelTokens = relTokens.filter((token) => token.toLowerCase() !== "opener");
  const hasRelToken = (token: string) =>
    safeRelTokens.some((item) => item.toLowerCase() === token);

  if (isBlank) {
    if (!hasRelToken("noopener")) safeRelTokens.push("noopener");
    if (!hasRelToken("noreferrer")) safeRelTokens.push("noreferrer");
  }

  const resolvedRel = safeRelTokens.length > 0 ? safeRelTokens.join(" ") : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={resolvedRel}
      aria-label={ariaLabel}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseStyle,
        ...styles.base,
        ...(hovered ? styles.hover : null),
      }}
    >
      {children}
    </a>
  );
}
