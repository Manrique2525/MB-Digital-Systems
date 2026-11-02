"use client";

import type { ProjectItem } from "@/types";
import { useTracking } from "@/components/hooks/useTracking";
import { ArrowRightIcon } from "@/components/ui/icons/Icons";
import { colors, fonts } from "@/data/theme";
import { ProjectVisual } from "@/components/sections/Projects/ProjectVisual";

interface ProjectStoryProps {
  project: ProjectItem;
  index: number;
  dark?: boolean;
  flip?: boolean;
}

export function ProjectStory({ project, index, dark = false, flip = false }: ProjectStoryProps) {
  const { trackEvent } = useTracking();
  const titleId = `project-${project.id}-title`;
  const number = String(index + 1).padStart(2, "0");
  const accent = dark ? "#93C5FD" : colors.primaryDark;
  const line = dark ? "rgba(255,255,255,0.18)" : colors.border;
  const titleColor = dark ? colors.white : colors.ink;
  const bodyColor = dark ? "rgba(255,255,255,0.66)" : colors.slate;
  const chipColor = dark ? "rgba(255,255,255,0.8)" : colors.ink;

  return (
    <article
      aria-labelledby={titleId}
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: dark ? "clamp(18px, 3vw, 30px)" : 0,
        padding: dark ? "clamp(26px, 4.5vw, 52px)" : "clamp(42px, 6vw, 72px) 0",
        borderTop: dark ? "none" : `1px solid ${line}`,
        borderRadius: dark ? 30 : 0,
        background: dark
          ? "linear-gradient(135deg, #0F172A 0%, #111C33 58%, #172554 100%)"
          : "transparent",
      }}
    >
      {dark ? (
        <>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -150,
              right: -110,
              width: 380,
              height: 380,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 68%)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -170,
              left: -130,
              width: 360,
              height: 360,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 68%)",
              pointerEvents: "none",
            }}
          />
        </>
      ) : null}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          alignItems: "center",
          gap: "clamp(30px, 5vw, 64px)",
        }}
      >
        <div style={{ order: flip ? 2 : 1, minWidth: 0 }}>
          <ProjectVisual project={project} dark={dark} />
        </div>

        <div style={{ order: flip ? 1 : 2, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span
              style={{
                color: accent,
                fontFamily: fonts.sora,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.12em",
                lineHeight: 1.4,
              }}
            >
              {number}
            </span>
            <span aria-hidden="true" style={{ width: 34, height: 1, background: line }} />
            <span
              style={{
                color: bodyColor,
                fontFamily: fonts.sora,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                lineHeight: 1.4,
                textTransform: "uppercase",
              }}
            >
              {project.category}
            </span>
          </div>

          <h3
            id={titleId}
            style={{
              margin: 0,
              maxWidth: "12ch",
              color: titleColor,
              fontFamily: fonts.sora,
              fontSize: "clamp(30px, 4.2vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.02,
              overflowWrap: "break-word",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              maxWidth: "42ch",
              margin: "20px 0 0",
              color: bodyColor,
              fontSize: "clamp(14px, 1.4vw, 16px)",
              lineHeight: 1.75,
            }}
          >
            {project.desc}
          </p>

          <p
            style={{
              margin: "26px 0 10px",
              color: bodyColor,
              fontFamily: fonts.sora,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              lineHeight: 1.4,
              textTransform: "uppercase",
            }}
          >
            Capacidades
          </p>

          <ul
            aria-label={`Capacidades de ${project.title}`}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 18px",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {project.capabilities.map((capability) => (
              <li
                key={capability}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  minWidth: 0,
                  color: chipColor,
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: 1.55,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: dark ? colors.violet : colors.primary,
                    flexShrink: 0,
                  }}
                />
                {capability}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 30 }}>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar el sitio de ${project.title}, abre en una pestaña nueva`}
                onClick={() => trackEvent("project_click", project.title)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 44,
                  borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.45)" : colors.primaryDark}`,
                  color: dark ? colors.white : colors.primaryDark,
                  fontFamily: fonts.sora,
                  fontSize: 13,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  textDecoration: "none",
                }}
              >
                Visitar sitio
                <ArrowRightIcon size={16} />
              </a>
            ) : (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  minHeight: 44,
                  color: dark ? "rgba(255,255,255,0.6)" : colors.slate,
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: colors.violet,
                  }}
                />
                Vista del producto en desarrollo
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
