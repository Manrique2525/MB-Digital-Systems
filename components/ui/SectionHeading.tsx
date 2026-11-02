import type { CSSProperties } from "react";
import { colors, fonts } from "@/data/theme";

type SectionHeadingAlign = "left" | "center" | "right";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: SectionHeadingAlign;
  className?: string;
}

const alignment: Record<SectionHeadingAlign, CSSProperties> = {
  left: { alignItems: "flex-start", textAlign: "left" },
  center: { alignItems: "center", textAlign: "center" },
  right: { alignItems: "flex-end", textAlign: "right" },
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(10px, 1.4vw, 16px)",
        width: "100%",
        ...alignment[align],
      }}
    >
      {eyebrow ? (
        <p
          style={{
            margin: 0,
            color: colors.primaryDark,
            fontFamily: fonts.sora,
            fontSize: "clamp(11px, 1.1vw, 13px)",
            fontWeight: 700,
            letterSpacing: "0.16em",
            lineHeight: 1.4,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={titleId}
        style={{
          margin: 0,
          maxWidth: "100%",
          color: colors.ink,
          fontFamily: fonts.sora,
          fontSize: "clamp(26px, 4.2vw, 46px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1.1,
          overflowWrap: "break-word",
        }}
      >
        {title}
      </h2>

      {description ? (
        <p
          style={{
            margin: 0,
            maxWidth: align === "center" ? "62ch" : "68ch",
            color: colors.slate,
            fontSize: "clamp(14px, 1.5vw, 17px)",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
