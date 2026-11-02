import Image from "next/image";
import type { ProjectItem } from "@/types";
import { colors, fonts, radius } from "@/data/theme";

interface ProjectVisualProps {
  project: ProjectItem;
  dark?: boolean;
}

function getStatusLabel(project: ProjectItem) {
  return project.status === "live" ? "Sitio publicado" : "En desarrollo";
}

function ScreenshotFrame({ project, dark = false }: ProjectVisualProps) {
  const domain = project.link
    ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "Vista del producto";
  const isLive = project.status === "live";

  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: radius.panel,
        border: dark ? "1px solid rgba(255,255,255,0.12)" : `1px solid ${colors.border}`,
        background: colors.white,
        boxShadow: dark
          ? "0 32px 90px rgba(0,0,0,0.34)"
          : "0 28px 70px rgba(15,23,42,0.14)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          minHeight: 40,
          padding: "8px 12px",
          background: "#0B1220",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div aria-hidden="true" style={{ display: "flex", gap: 5, flexShrink: 0 }}>
          {["#F87171", "#FBBF24", "#34D399"].map((color) => (
            <span
              key={color}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: color,
                opacity: 0.9,
              }}
            />
          ))}
        </div>
        <span
          style={{
            flex: 1,
            minWidth: 0,
            overflow: "hidden",
            color: "rgba(255,255,255,0.58)",
            fontFamily: fonts.sora,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.02em",
            lineHeight: 1.4,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {domain}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            flexShrink: 0,
            color: isLive ? "#6EE7B7" : "#C4B5FD",
            fontFamily: fonts.sora,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.08em",
            lineHeight: 1.4,
            textTransform: "uppercase",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: isLive ? colors.success : colors.violet,
            }}
          />
          {isLive ? "En vivo" : "En desarrollo"}
        </span>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          minHeight: 210,
          background: project.imgFit === "contain" ? "#0B1220" : "#E8EEF8",
        }}
      >
        <Image
          src={project.img}
          alt={project.imgAlt}
          width={project.imgWidth}
          height={project.imgHeight}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: project.imgFit ?? "cover",
            objectPosition: project.imgFit === "contain" ? "center" : "top center",
            display: "block",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              project.imgFit === "contain"
                ? "linear-gradient(180deg, rgba(15,23,42,0.02) 72%, rgba(15,23,42,0.1) 100%)"
                : "linear-gradient(180deg, rgba(15,23,42,0.02) 60%, rgba(15,23,42,0.22) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

function BrandFrame({ project, dark = false }: ProjectVisualProps) {
  const isLive = project.status === "live";

  return (
    <figure
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "clamp(320px, 40vw, 460px)",
        margin: 0,
        padding: "clamp(22px, 3vw, 32px)",
        overflow: "hidden",
        borderRadius: radius.panel,
        border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : colors.border}`,
        background: dark
          ? "linear-gradient(145deg, #0F172A 0%, #172554 100%)"
          : "linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 48%, #EFF6FF 100%)",
        boxShadow: dark
          ? "0 32px 90px rgba(0,0,0,0.34)"
          : "0 28px 70px rgba(15,23,42,0.09)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -70,
          right: -60,
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : colors.border}`,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -30,
          bottom: -90,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 68%)"
            : "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
            : "linear-gradient(rgba(30,64,175,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.04) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(135deg, rgba(0,0,0,0.8), transparent 72%)",
          WebkitMaskImage: "linear-gradient(135deg, rgba(0,0,0,0.8), transparent 72%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <span
          style={{
            color: dark ? "rgba(255,255,255,0.6)" : colors.slate,
            fontFamily: fonts.sora,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.16em",
            lineHeight: 1.4,
            textTransform: "uppercase",
          }}
        >
          Identidad del proyecto
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: colors.primaryDark,
            fontFamily: fonts.sora,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.08em",
            lineHeight: 1.4,
            textTransform: "uppercase",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: isLive ? colors.success : colors.violet,
            }}
          />
          {getStatusLabel(project)}
        </span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          alignSelf: "center",
          display: "grid",
          placeItems: "center",
          width: "min(72%, 300px)",
          aspectRatio: "1",
          margin: "28px 0",
          padding: "clamp(16px, 2.5vw, 28px)",
          borderRadius: 30,
          background: colors.white,
          boxShadow: "0 24px 60px rgba(15,23,42,0.14)",
        }}
      >
        <Image
          src={project.img}
          alt={project.imgAlt}
          width={project.imgWidth}
          height={project.imgHeight}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      <figcaption
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          color: dark ? "rgba(255,255,255,0.58)" : colors.slate,
          fontSize: 11,
          lineHeight: 1.5,
        }}
      >
        <span>Logotipo del proyecto</span>
        <span>Presencia digital</span>
      </figcaption>
    </figure>
  );
}

export function ProjectVisual({ project, dark = false }: ProjectVisualProps) {
  if (project.visual === "brand") {
    return <BrandFrame project={project} dark={dark} />;
  }

  return <ScreenshotFrame project={project} dark={dark} />;
}
