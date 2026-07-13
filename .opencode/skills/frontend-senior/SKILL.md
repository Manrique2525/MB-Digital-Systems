---
name: frontend-senior
description: Use when improving design, optimizing performance, ensuring accessibility, implementing responsive layouts, or when frontend architecture and UX best practices are needed. Covers Core Web Vitals, WCAG, mobile-first, animation purpose, and SEO technical.
---

# Frontend Senior — Guía de referencia

Skill de referencia para arquitectura frontend, performance, accesibilidad,
responsive design y SEO técnico. Aplicar al modificar componentes de la landing page.

---

## Performance — Core Web Vitals

### LCP (Largest Contentful Paint) < 2.5s
- Optimar la imagen/elemento más grande visible (Hero image)
- Usar `loading="lazy"` en imágenes que no son above-the-fold
- Preload de fuentes críticas
- Evitar render-blocking resources

### FID (First Input Delay) < 100ms
- Minimizar JavaScript en initial load
- Componentes pesados → lazy load con `React.lazy()` o carga condicional
- Evitar `useEffect` costosos en montaje

### CLS (Cumulative Layout Shift) < 0.1
- Siempre definir `width` y `height` en imágenes
- Usar `aspectRatio` en CSS para reservar espacio
- Evitar inyectar contenido dinámico que desplace el layout

---

## Accesibilidad (WCAG 2.1 AA)

### Nivel A (obligatorio)
- Todas las imágenes tienen `alt` descriptivo
- Formularios tienen `<label>` asociado
- Navegación por teclado funcional (Tab, Enter, Escape)
- Color no es la única forma de transmitir información
- Videos tienen subtítulos

### Nivel AA (objetivo)
- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande
- Tamaño de texto al menos 16px base
- Espaciado entre líneas al menos 1.5x el tamaño de fuente
- Focus visible en todos los elementos interactivos

### Prácticas específicas
```tsx
// Botones y links accesibles
<motion.button
  aria-label="Enviar mensaje de WhatsApp"
  role="button"
>
  Contactar
</motion.button>

// Imágenes
<img src="..." alt="Descripción de la imagen" loading="lazy" />

// Navegación
<nav aria-label="Navegación principal">...</nav>

// Formularios
<label htmlFor="nombre">Nombre</label>
<input id="nombre" name="nombre" required aria-required="true" />
```

---

## Responsive Design (Mobile-First)

### Breakpoints del proyecto
```ts
// Usar clamp() para transiciones suaves
fontSize: "clamp(16px, 2.5vw, 24px)"

// Usar min() para limites máximos
width: "min(380px, 60vw)"

// Media queries cuando sea necesario
@media (max-width: 768px) { ... }
```

### Patrones responsive
- **Grid auto-fit**: `gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"`
- **Stacking**: En móvil, todo en columna. En desktop, grid.
- **Padding**: `clamp(20px, 5vw, 60px)` para lados
- **Alturas**: `min(100vh)` para hero, `clamp()` para secciones

### Touch targets
- Mínimo 44x44px para botones en móvil
- Espacio mínimo 8px entre elementos clickeables

---

## Jerarquía visual

### Tamaños de fuente (línea base 16px)
```
H1: clamp(36px, 6vw, 72px) — Bold/Black
H2: clamp(28px, 4vw, 48px) — Bold
H3: clamp(20px, 2.5vw, 28px) — Semibold
Body: clamp(14px, 1.5vw, 16px) — Regular
Small: 12-13px — Solo para labels, badges
```

### Espaciado vertical
```
Entre secciones: 80-120px (desktop), 48-64px (móvil)
Entre título y subtítulo: 16-24px
Entre subtítulo y contenido: 32-48px
Entre elementos de lista: 12-16px
```

### Colores de texto
```ts
heading: "#0F172A"      // casi negro
body: "#64748B"         // gris medio
muted: "#94A3B8"        // gris claro
accent: "#3B82F6"       // azul primario
accentDark: "#1E40AF"   // azul oscuro
```

---

## Animaciones con propósito

### Reglas
- **No decorativas**: Cada animación debe guiar la atención o dar feedback
- **Consistentes**: Misma duración y easing en elementos similares
- **Respetar prefers-reduced-motion**: Si el usuario tiene esta preferencia, reducir animaciones

### Duraciones típicas
```ts
micro: 0.15s    // Cambio de color, scale pequeño
small: 0.25s    // Hover effects
medium: 0.4s    // Aparición de elementos
large: 0.6s     // Entradas de secciones
```

### Easing
```ts
// Suave y profesional (el que usa este proyecto)
ease: [0.22, 1, 0.36, 1]

// Bounce sutil
ease: [0.34, 1.56, 0.64, 1]
```

### Patrones útiles
```tsx
// Scroll reveal (IntersectionObserver + Framer Motion)
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// Hover feedback
whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(59,130,246,0.15)" }}
transition={{ duration: 0.3 }}
```

---

## SEO técnico

### Meta tags
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: "MB Digital Systems | Desarrollo Web y Marketing Digital",
  description: "Empresa de desarrollo de software y marketing digital en Tabasco...",
  openGraph: { ... },
};
```

### Estructura semántica
```tsx
<header>     → Navbar
<nav>        → Navegación principal
<main>       → Contenido principal
<section>    → Cada sección de la landing
<article>    → Contenido independiente (blog posts)
<footer>     → Pie de página
```

### Imágenes
- Formato WebP/AVIF cuando sea posible
- `loading="lazy"` en imágenes below-the-fold
- `alt` descriptivo con keywords relevantes
- Dimensiones explícitas para evitar CLS

---

## Code quality

### TypeScript
- Tipar todas las props
- Evitar `any`
- Usar interfaces para objetos complejos

### Componentes
- Un componente por archivo
- Props interfaces separadas o al inicio del archivo
- No más de 200-300 líneas por componente (si es más, dividir)

### Performance de código
- Memoizar cálculos costosos con `useMemo`
- Callbacks que se pasan como props con `useCallback`
- Lazy load de componentes pesados
- Evitar re-renders innecesarios
