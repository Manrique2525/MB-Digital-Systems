export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MB Digital Systems",
    description:
      "Empresa de desarrollo de software y marketing digital en Tabasco, México. Creamos páginas web que convierten visitantes en clientes.",
    url: "https://mbdigitalsystems.com",
    telephone: "+529931782620",
    email: "contacto@mbdigitalsystems.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tabasco",
      addressRegion: "Tabasco",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.9869,
      longitude: -92.9303,
    },
    areaServed: {
      "@type": "State",
      name: "Tabasco",
    },
    serviceType: [
      "Desarrollo Web",
      "Sistemas a Medida",
      "E-commerce",
      "Marketing Digital",
      "SEO",
      "Gestión de Redes Sociales",
      "Pauta Publicitaria",
      "Funnels de Conversión",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Desarrollo Web",
      provider: { "@type": "LocalBusiness", name: "MB Digital Systems" },
      areaServed: { "@type": "State", name: "Tabasco" },
      description:
        "Página web que aparece en Google, carga rápido y convierte visitas en mensajes de WhatsApp. Sin plantillas, 100% personalizada.",
      offers: {
        "@type": "Offer",
        price: "4999",
        priceCurrency: "MXN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Sistemas a Medida",
      provider: { "@type": "LocalBusiness", name: "MB Digital Systems" },
      areaServed: { "@type": "State", name: "Tabasco" },
      description:
        "Automatizamos procesos manuales que te quitan tiempo. Control de inventario, clientes, facturación: todo en un solo lugar.",
      offers: {
        "@type": "Offer",
        price: "25000",
        priceCurrency: "MXN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "E-commerce",
      provider: { "@type": "LocalBusiness", name: "MB Digital Systems" },
      areaServed: { "@type": "State", name: "Tabasco" },
      description:
        "Tienda online que vende mientras duermes. Catálogo, carrito, pagos con tarjeta y envíos integrados.",
      offers: {
        "@type": "Offer",
        price: "18999",
        priceCurrency: "MXN",
      },
    },
  ];

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tarda en estar lista mi página web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una landing page está lista en 5-7 días hábiles. Una página empresarial con múltiples secciones toma 2-3 semanas. Sistemas a medida tienen tiempos variables según complejidad, pero siempre te damos un cronograma claro antes de empezar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Y si no me gusta el resultado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabajamos contigo en cada etapa para asegurar que el resultado sea exactamente lo que necesitas. Ofrecemos revisiones incluidas y, si después de las revisiones no estás satisfecho, no pagas. Así de simple.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hay costos ocultos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. El precio que te cotizamos es el precio final. Incluye diseño, desarrollo, configuración y entrega. Los únicos costos adicionales son el dominio (~$250 MXN/año) y hosting (~$100 MXN/mes), que puedes contratar con nosotros o por tu cuenta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito saber de tecnología?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para nada. Nosotros nos encargamos de todo lo técnico. Tú solo nos cuentas qué necesitas y nosotros lo hacemos realidad. Además, te damos una capacitación para que puedas actualizar tu contenido tú mismo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funcionará en el celular de mis clientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, todas nuestras páginas son 100% responsivas. Se ven perfectas en celular, tablet y computadora. El 80% de tus clientes potenciales te buscarán desde su teléfono, por eso priorizamos la experiencia móvil.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo vender productos en línea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Nuestro plan E-commerce incluye catálogo de productos, carrito de compras, pasarela de pagos con tarjeta y PayPal, control de inventario y panel de pedidos. Tu tienda online vende 24/7.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo me contactan los clientes por WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Integramos un botón flotante de WhatsApp que redirige directo a tu número con un mensaje predeterminado. Cuando alguien hace clic, se abre WhatsApp con tu chat listo. También puedes recibir mensajes desde formularios en tu página.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen soporte después de entrega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Incluimos soporte post-entrega (30-60 días según plan). También ofrecemos planes de mantenimiento mensual para que tu página siempre esté actualizada y funcionando al 100%.",
        },
      },
    ],
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
