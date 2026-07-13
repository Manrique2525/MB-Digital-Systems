---
name: netlify-deploy
description: Use when deploying to Netlify, configuring build settings, troubleshooting deployment issues, or when netlify.toml needs to be modified.
---

# Despliegue en Netlify — MB Digital Systems

## Configuración actual

El proyecto está configurado para desplegarse en Netlify con el plugin oficial
de Next.js.

### netlify.toml (raíz del proyecto)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

### netlify.toml (dentro de app/)

Existe un segundo `netlify.toml` en `app/` — ignorar, el de la raíz es el válido.

## Comandos de build

```bash
npm run build      # Build de producción (genera .next/)
npm run lint       # Verificar lint antes de desplegar
```

## Plugin Next.js para Netlify

El paquete `@netlify/plugin-nextjs` (v5) maneja automáticamente:
- Server-side rendering (SSR)
- API routes
- ISR (Incremental Static Regeneration)
- Edge middleware
- Imágenes optimizadas

No requiere configuración adicional más allá de `netlify.toml`.

## Variables de entorno

Si se necesitan variables de entorno (API keys, URLs), configurarlas en:
- Netlify Dashboard → Site → Environment variables
- O en `netlify.toml` bajo `[build.environment]`

**NUNCA** hardcodear secrets en el código fuente.

## Deploy local (preview)

```bash
npx netlify-cli deploy
```

## Deploy manual

```bash
npx netlify-cli deploy --prod
```

## Dominio y DNS

El sitio se despliega en un subdominio de `netlify.app` por defecto.
Para dominio personalizado, configurar DNS en el proveedor de dominio
apuntando a Netlify.

## Troubleshooting

- **Build falla**: Verificar que `npm run build` funcione localmente
- **Página 404 en rutas**: Asegurar que el plugin Next.js esté activo
- **Imágenes 404**: Verificar que las imágenes estén en `public/`
- **Variables de entorno no cargan**: Verificar en Dashboard de Netlify
