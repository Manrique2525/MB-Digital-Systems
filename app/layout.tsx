import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SkipLink } from "@/components/ui/SkipLink";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mbdigitalsystems.com"),
  title: "MB Digital Systems | Desarrollo Web y Marketing Digital en Tabasco",
  description:
    "Empresa de desarrollo de software y marketing digital en Tabasco, México. Creamos páginas web que convierten visitantes en clientes. Sistemas a medida, e-commerce y más.",
  keywords: [
    "desarrollo web Tabasco",
    "páginas web México",
    "marketing digital",
    "sistemas a medida",
    "e-commerce",
    "diseño web",
    "SEO Tabasco",
  ],
  authors: [{ name: "MB Digital Systems" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "MB Digital Systems",
    title: "MB Digital Systems | Desarrollo Web y Marketing Digital",
    description:
      "Creamos páginas web que convierten visitantes en clientes. Diseño moderno, marketing digital y sistemas a medida para hacer crecer tu negocio.",
    images: [
      {
        url: "/img/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MB Digital Systems - Desarrollo Web y Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Digital Systems | Desarrollo Web y Marketing Digital",
    description:
      "Creamos páginas web que convierten visitantes en clientes. Diseño moderno, marketing digital y sistemas a medida.",
    images: ["/img/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mbdigitalsystems.com",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-sora), system-ui, sans-serif" }}
      >
        <SkipLink />
        <form name="contacto" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contacto" />
          <input name="name" />
          <input name="phone" />
          <input name="email" />
          <input name="subject" />
          <input name="message" />
        </form>
        <JsonLd />
        <Analytics />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
