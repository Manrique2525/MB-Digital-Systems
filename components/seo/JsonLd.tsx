import { FAQ_ITEMS } from "@/data/constants";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MB Digital Systems",
    description:
      "Empresa de desarrollo de software y marketing digital en Tabasco, México. Diseñamos páginas web, sistemas, automatizaciones y contenido para negocios.",
    url: "https://mbdigitalsystems.com",
    image: "https://mbdigitalsystems.com/img/og-image-brand.png",
    logo: "https://mbdigitalsystems.com/img/logo.jpeg",
    telephone: "+529931782620",
    email: "contacto@mbdigitalsystems.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villahermosa",
      addressRegion: "Tabasco",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.9869,
      longitude: -92.9303,
    },
    areaServed: [
      {
        "@type": "State",
        name: "Tabasco",
      },
      {
        "@type": "Country",
        name: "México",
      },
    ],
    serviceType: [
      "Desarrollo Web",
      "Sistemas a Medida",
      "E-commerce",
      "Automatizaciones e Integraciones",
      "Gestión de Redes Sociales",
      "Estrategia y Contenido",
      "Diseño Gráfico",
      "Edición de Video",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Desarrollo Web",
      provider: { "@type": "LocalBusiness", name: "MB Digital Systems" },
      areaServed: { "@type": "State", name: "Tabasco" },
      description:
        "Diseño y desarrollo de páginas web, landing pages y sitios corporativos adaptados a cada negocio.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Sistemas a Medida",
      provider: { "@type": "LocalBusiness", name: "MB Digital Systems" },
      areaServed: { "@type": "State", name: "Tabasco" },
      description:
        "Desarrollo de sistemas y software a medida para organizar procesos, centralizar información y reducir trabajo manual.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "E-commerce",
      provider: { "@type": "LocalBusiness", name: "MB Digital Systems" },
      areaServed: { "@type": "State", name: "Tabasco" },
      description:
        "Tiendas en línea con catálogo, carrito y panel de pedidos para gestionar la venta de productos.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Marketing Digital",
      provider: { "@type": "LocalBusiness", name: "MB Digital Systems" },
      areaServed: { "@type": "State", name: "Tabasco" },
      description:
        "Gestión de redes sociales, estrategia y creación de contenido, diseño gráfico y edición de video para la presencia digital de la marca.",
    },
  ];

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {services.map((service, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
