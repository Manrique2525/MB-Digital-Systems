"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = ["inicio", "servicios", "por-que", "marketing", "nosotros", "testimonios", "proyectos", "precios", "faq", "contacto"];

const SECTION_MAP: Record<string, string> = {
  inicio: "Inicio",
  servicios: "Servicios",
  "por-que": "Servicios",
  marketing: "Servicios",
  nosotros: "Nosotros",
  testimonios: "Proyectos",
  proyectos: "Proyectos",
  precios: "Precios",
  faq: "Contacto",
  contacto: "Contacto",
};

let observer: IntersectionObserver | null = null;
let currentId = "Inicio";
const listeners = new Set<(id: string) => void>();

function ensureObserver() {
  if (observer) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        currentId = SECTION_MAP[visible[0].target.id] || "Inicio";
        listeners.forEach((cb) => cb(currentId));
      }
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
  );

  SECTION_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer!.observe(el);
  });
}

export function useScrollSpy() {
  const [active, setActive] = useState(currentId);

  useEffect(() => {
    ensureObserver();
    listeners.add(setActive);
    return () => {
      listeners.delete(setActive);
    };
  }, []);

  return active;
}
