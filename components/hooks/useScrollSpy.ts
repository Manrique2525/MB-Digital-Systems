"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = ["inicio", "servicios", "nosotros", "proyectos", "precios", "contacto"];

export function useScrollSpy() {
  const [active, setActive] = useState("Inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          const sectionMap: Record<string, string> = {
            inicio: "Inicio",
            servicios: "Servicios",
            nosotros: "Nosotros",
            proyectos: "Proyectos",
            precios: "Precios",
            contacto: "Contacto",
          };
          setActive(sectionMap[id] || "Inicio");
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
