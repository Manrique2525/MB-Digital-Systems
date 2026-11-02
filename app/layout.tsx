import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { SkipLink } from "@/components/ui/SkipLink";
import { PageViewTracker } from "@/components/ui/PageViewTracker";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mbdigitalsystems.com"),
  title: "MB Digital Systems | Desarrollo de Software y Marketing Digital en Tabasco",
  description:
    "Empresa de desarrollo de software y marketing digital en Tabasco, México. Creamos páginas web, sistemas a medida, tiendas en línea y contenido para negocios.",
  keywords: [
    "desarrollo web Tabasco",
    "páginas web México",
    "desarrollo de software",
    "marketing digital",
    "sistemas a medida",
    "e-commerce",
    "diseño web",
  ],
  authors: [{ name: "MB Digital Systems" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "MB Digital Systems",
    title: "MB Digital Systems | Desarrollo de Software y Marketing Digital",
    description:
      "Páginas web, sistemas a medida, tiendas en línea y marketing digital para negocios en Tabasco y México.",
    images: [
      {
        url: "/img/og-image-brand.png",
        width: 1200,
        height: 630,
        alt: "MB Digital Systems - Desarrollo de Software y Marketing Digital en Tabasco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Digital Systems | Desarrollo de Software y Marketing Digital",
    description:
      "Páginas web, sistemas a medida, tiendas en línea y marketing digital para negocios.",
    images: ["/img/og-image-brand.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mbdigitalsystems.com",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-sora), system-ui, sans-serif" }}
      >
        <noscript>
          <style>{`[style*="opacity:0;"], [style*="opacity: 0;"], [style$="opacity:0"], [style$="opacity: 0"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <MotionProvider>
          <SkipLink />
          <JsonLd />
          <Analytics />
          <CookieConsent />
          {children}
          <PageViewTracker />
        </MotionProvider>
      </body>
    </html>
  );
}
