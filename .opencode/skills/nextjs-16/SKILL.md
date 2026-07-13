---
name: nextjs-16
description: Use when working with Next.js App Router, creating pages/layouts, using "use client"/"use server", metadata API, or when any Next.js API is needed. Covers Next.js 16 breaking changes and conventions.
---

# Next.js 16 — Guía de referencia

Next.js 16 tiene breaking changes respecto a versiones anteriores. Siempre consultar
`node_modules/next/dist/docs/` antes de usar APIs de Next.js.

## Estructura App Router

```
app/
  layout.tsx      # Root layout (obligatorio)
  page.tsx        # Página raíz /
  globals.css     # Estilos globales
```

- `layout.tsx` se envuelve alrededor de `page.tsx` y otros layouts
- `page.tsx` define la UI de una ruta
- Los layouts preservan estado y son reutilizados durante navegación

## "use client" vs Server Components

- **Server Components** (por defecto): acceso a `async/await`, base de datos, filesystem
- **Client Components**: necesitan `"use client"` al inicio del archivo si usan `useState`, `useEffect`, `onClick`, acceso a `window`, o Framer Motion

```tsx
"use client"; // Solo en archivos que necesitan interactividad

import { useState } from "react";

export function MiComponente() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

**Regla**: No anidar `"use client"` innecesariamente. Un componente hijo de un
Client Component también es Client Component sin necesidad de repetir la directiva.

## Metadata API

```tsx
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Sitio",
  description: "Descripción del sitio",
};
```

## Fonts con next/font

```tsx
import { Geist } from "next/font/google";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});
```

## Imágenes con next/image

```tsx
import Image from "next/image";

<Image src="/foto.jpg" alt="Descripción" width={600} height={400} />
```

## Turbopack

Este proyecto usa Turbopack como bundler (integrado en Next.js 16). La config
está en `next.config.ts`:

```ts
const nextConfig = {
  turbopack: { root: __dirname },
};
```

## Rutas dinámicas

```
app/blog/[slug]/page.tsx   → /blog/mi-post
app/[...catchAll]/page.tsx → Catch-all
```

## Layouts anidados

Los layouts se heredan. Un `layout.tsx` en `app/dashboard/` se envuelve
alrededor de todas las páginas dentro de `dashboard/`.

## Error handling

```
app/error.tsx        # Error boundary por ruta
app/not-found.tsx    # 404 personalizado
app/loading.tsx      # Loading state por ruta
```
