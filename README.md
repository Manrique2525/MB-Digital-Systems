# MB Digital Systems

Sitio web institucional de **MB Digital Systems**, agencia de desarrollo de software
en Tabasco, México. Landing page de marketing con servicios, portafolio, planes y
precios, y formulario de contacto con integración a WhatsApp.

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, static export) |
| Lenguaje | TypeScript |
| UI | React 19 |
| Estilos | Tailwind CSS v4 + estilos inline (tokens en `data/theme.ts`) |
| Animaciones | Framer Motion |
| Despliegue | Netlify (`out/`) |

## Comandos

```bash
npm run dev      # Servidor de desarrollo (Turbopack)
npm run build    # Build de producción (genera out/)
npm run start    # Servir build local
npm run lint     # ESLint
```

## Estructura

```
app/                 # Layout, página principal, SEO (sitemap/robots) y privacidad
components/
  layout/            # Navbar y Footer
  sections/          # Secciones de la landing (Hero, Services, Pricing, Contact, ...)
  ui/                # AnimatedSection, WhatsAppFloat, LeadMagnet, CookieConsent, iconos
  hooks/             # useScrollSpy, useTracking
  seo/               # JSON-LD
  analytics/         # GA4 + Meta Pixel
data/                # constants.ts (contenido) y theme.ts (tokens de diseño)
types/               # Interfaces TypeScript
public/img/          # Imágenes del proyecto
```

## Notas

- La landing usa `output: "export"`: el build genera `out/`, que es lo que Netlify publica.
- El backend (Laravel) vive en `mb-digital-api/`, fuera del bundle del frontend.
