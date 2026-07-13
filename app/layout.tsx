import type { Metadata } from "next";
import "./globals.css";

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
        url: "/img/og-image.png",
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
    images: ["/img/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "'Sora', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
