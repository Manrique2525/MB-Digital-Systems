# AGENTS.md — MB Digital Systems

## Descripción del proyecto

Sitio web institucional de **MB Digital Systems**, empresa de desarrollo de software
ubicada en Tabasco, México. Es una landing page / página de marketing que presenta
servicios (desarrollo web, sistemas a medida, e-commerce), portafolio, planes y
precios, y formulario de contacto con integración a WhatsApp.

## Stack tecnológico

| Capa          | Tecnología           | Versión    |
| ------------- | -------------------- | ---------- |
| Framework     | Next.js (App Router) | 16.2.6     |
| Lenguaje      | TypeScript           | ^5         |
| UI Library    | React                | 19.2.4     |
| Estilos       | Tailwind CSS v4      | ^4 (PostCSS) |
| Animaciones   | Framer Motion        | ^12.40.0   |
| Fuentes       | Google Fonts (Sora)  | CDN dinámico |
| Iconos        | Font Awesome 6       | CDN externo |
| Bundler       | Turbopack            | integrado  |
| Despliegue    | Netlify              | plugin Next.js |
| Node          | Node.js              | 20         |
| Linting       | ESLint 9             | next/core-web-vitals + typescript |

## Estructura del proyecto

```
app/
  layout.tsx          # Root layout (Geist fonts, metadata)
  page.tsx            # Página principal ("use client", ensambla todas las secciones)
  globals.css         # Estilos globales (@tailwind + reset mínimo)
components/
  layout/
    Navbar.tsx         # Barra de navegación fija, responsive
    Footer.tsx         # Pie de página
  sections/
    Hero.tsx           # Sección principal con CTAs
    WhyWebsite.tsx     # Por qué tener página web
    Services.tsx       # Servicios que ofrece la empresa
    TechStack.tsx      # Stack tecnológico que usan
    About.tsx          # Sobre la empresa
    Projects.tsx       # Portafolio de proyectos
    Pricing.tsx        # Planes y precios (web + sistemas a medida)
    Contact.tsx        # Formulario de contacto + info
  ui/
    AnimatedSection.tsx # Wrapper de animación reutilizable (IntersectionObserver)
    WhatsAppFloat.tsx   # Botón flotante de WhatsApp
  hooks/
    useIsMobile.ts     # Hook para detectar viewport móvil
data/
  constants.ts         # Datos estáticos: nav links, servicios, tecnologías, proyectos
types/
  index.ts             # Interfaces TypeScript (TechItem, ServiceItem, ProjectItem)
public/
  img/                 # Imágenes del proyecto
```

## Convenciones de código

### Estilos
- **Estilos inline** con objetos `style={{}}` como patrón principal (NO Tailwind classes en JSX)
- Tailwind solo se usa en `globals.css` para reset/base (`@tailwind base/components/utilities`)
- Colores del sistema: `#3B82F6` (azul primario), `#1E40AF` (azul oscuro), `#8B5CF6` (violeta), `#10B981` (verde)
- Tipografía: `clamp()` para tamaños responsivos, fuente Sora
- Bordes redondeados grandes (20-24px), gradientes suaves

### Componentes
- **Componentes funcionales** con hooks
- Todos los componentes de sección usan `"use client"` (necesitan Framer Motion)
- Cada sección es un archivo independiente en `components/sections/`
- Animaciones con `framer-motion`: `motion.div`, `whileHover`, `whileInView`, `AnimatePresence`
- Componente reutilizable `AnimatedSection` para animaciones de entrada al hacer scroll
- Datos estáticos en `data/constants.ts`, importados por los componentes

### TypeScript
- Interfaces en `types/index.ts`
- Props tipadas explícitamente
- Path alias: `@/*` mapea a la raíz del proyecto

### Contenido
- Todo el texto visible está en **español**
- Moneda: MXN (pesos mexicanos)
- Contacto: WhatsApp `+529931782620`

## Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo (Turbopack)
npm run build    # Build de producción
npm run start    # Iniciar servidor de producción
npm run lint     # ESLint
```

## Reglas importantes

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

- **NO agregar comentarios** al código a menos que el usuario lo pida explícitamente
- **NO crear archivos de documentación** (*.md) salvo que se solicite
- **NO hacer commit** a menos que el usuario lo pida
- **Ejecutar lint** (`npm run lint`) después de hacer cambios para verificar corrección
- Si se crea un componente nuevo, seguir el patrón existente: archivo en la carpeta correcta, `"use client"`, estilos inline, animaciones con Framer Motion
- Antes de usar cualquier API de Next.js, consultar `node_modules/next/dist/docs/` porque esta versión (16) tiene breaking changes
