---
name: component-patterns
description: Use when creating new components, sections, or UI elements in this project. Covers the inline styles pattern, Framer Motion animations, AnimatedSection usage, and folder conventions.
---

# Patrones de componentes — MB Digital Systems

## Estructura de carpetas

```
components/
  sections/    → Secciones de la página (Hero, Services, Contact, etc.)
  layout/      → Navbar, Footer
  ui/          → Componentes reutilizables (AnimatedSection, WhatsAppFloat)
  hooks/       → Custom hooks (useIsMobile)
```

## Regla de estilos: INLINE STYLES

Este proyecto usa **estilos inline** con objetos `style={{}}` como patrón principal.
NO usar clases de Tailwind en JSX. Tailwind solo se usa en `globals.css`.

```tsx
// CORRECTO
<div style={{ background: "#F8FAFF", borderRadius: 20, padding: 24 }}>
  <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0F172A" }}>
    Título
  </h2>
</div>

// INCORRECTO — no usar classes de Tailwind
<div className="bg-blue-50 rounded-2xl p-6">
  <h2 className="text-2xl font-bold text-slate-900">Título</h2>
</div>
```

## Colores del sistema

| Uso          | Valor      |
| ------------ | ---------- |
| Primario     | `#3B82F6`  |
| Oscuro       | `#1E40AF`  |
| Violeta      | `#8B5CF6`  |
| Verde        | `#10B981`  |
| Texto oscuro | `#0F172A`  |
| Texto gris   | `#64748B`  |
| Fondo claro  | `#F8FAFF`  |
| Borde        | `#E8F0FE`  |

## Tipografía responsiva

Usar `clamp()` para tamaños de fuente:
```ts
fontSize: "clamp(28px, 5vw, 52px)"
```

## Patrón de una sección nueva

```tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function MiSeccion() {
  return (
    <section
      id="mi-seccion"
      style={{ padding: "clamp(60px, 10vw, 120px) 20px", background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            fontSize: 13, fontWeight: 700, color: "#3B82F6",
            letterSpacing: 3, textTransform: "uppercase", marginBottom: 16,
          }}>
            Subtítulo
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900,
            color: "#0F172A", letterSpacing: "-1.5px",
            fontFamily: "'Sora', sans-serif",
          }}>
            Título Principal
          </h2>
        </AnimatedSection>

        {/* Contenido */}
      </div>
    </section>
  );
}
```

## AnimatedSection

Wrapper reutilizable que anima elementos al hacer scroll (IntersectionObserver):

```tsx
<AnimatedSection delay={0.1}>
  <div>Contenido que aparece con animación</div>
</AnimatedSection>
```

## Framer Motion — patrones comunes

```tsx
// Hover effect
<motion.div whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(59,130,246,0.15)" }}>

// Animación al hacer scroll
<motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

// Animación de entrada
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

// Transiciones suaves
transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
```

## Datos estáticos

Los datos de servicios, proyectos, tecnologías y nav links van en `data/constants.ts`.
Los componentes importan desde ahí, no definen datos inline.

## Interfaces

Definir en `types/index.ts`:
```ts
export interface MiItem {
  title: string;
  desc: string;
}
```

## Naming conventions

- Archivos: `PascalCase.tsx` (ej: `Hero.tsx`, `AnimatedSection.tsx`)
- Componentes: funciones nombradas `export function MiComponente()`
- Hooks: `camelCase` con prefijo `use` (ej: `useIsMobile`)
- Export siempre con nombre, NO default export
