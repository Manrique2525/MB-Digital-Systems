import type {
  ContactIntent,
  Division,
  FaqItem,
  MarketingConcept,
  MarketingWorkItem,
  NavItem,
  NavLabel,
  ProcessStep,
  ProjectItem,
  SectionId,
  ServiceOffering,
  SoftwareCapability,
  SoftwareTechLayer,
  TestimonialItem,
} from "@/types";

export const WHATSAPP_NUMBER = "+529931782620";

export const WHATSAPP_MESSAGES = {
  landingPage: "Hola MB Digital, me interesa la Landing Page ($2,999 MXN). Quiero una página web para mi negocio en Tabasco.",
  paginaEmpresarial: "Hola MB Digital, me interesa el plan Página Empresarial ($8,999 MXN). Necesito una web profesional con blog y múltiples secciones.",
  ecomerce: "Hola MB Digital, me interesa el plan E-commerce ($16,999 MXN). Quiero una tienda en línea para vender mis productos.",
  sistemasAMedida: "Hola MB Digital, me interesa un Sistema a Medida. Quiero automatizar un proceso de mi negocio y necesito una cotización personalizada.",
  desarrolloWeb: "Hola MB Digital, me interesa el servicio de Desarrollo Web. Quiero una página web para mi negocio.",
  gestionRedes: "Hola MB Digital, me interesa el servicio de Gestión de Redes. Quiero mejorar mi presencia en redes sociales.",
  auditoria: "Hola MB Digital, quiero un diagnóstico digital gratuito para mi negocio. Quiero saber qué puedo mejorar.",
  paginaWeb: "Hola MB Digital, quiero mi página web. Vi su página y me interesa empezar cuanto antes.",
  proyectoSimilar: "Hola MB Digital, vi su portafolio y quiero un proyecto similar. ¿Cómo podemos empezar?",
  resultadosSimilares: "Hola MB Digital, vi los proyectos y testimonios en su página y quiero conocer cómo trabajan. ¿Cómo empezamos?",
  duda: "Hola MB Digital, tengo una duda sobre sus servicios. ¿Me pueden ayudar?",
  contacto: "Hola MB Digital, necesito información sobre sus servicios. ¿Tienen disponibilidad este mes?",
  generico: "Hola MB Digital, me gustaría recibir información sobre sus servicios. Vi su página y me pareció profesional.",
  desarrolloSoftware: "Hola MB Digital, vi su sección de Desarrollo de Software y quiero conversar sobre un proyecto.",
  marketingDigital: "Hola MB Digital, vi su sección de Marketing Digital y quiero conversar sobre mi marca.",
  cotizacion: "Hola MB Digital, quiero solicitar una cotización para mi proyecto. ¿Me pueden orientar?",
};

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "tortas-del-chiche",
    title: "Las Tortas Del Chiche",
    category: "Comercio electrónico",
    desc: "Tienda en línea para pedidos con carrito de compra, pagos en efectivo y tarjeta, y panel administrativo para el negocio.",
    capabilities: ["Carrito de compra", "Pagos en efectivo y tarjeta", "Panel administrativo"],
    img: "/img/tortas_del_chiche.webp",
    imgAlt: "Captura del sitio web de Las Tortas Del Chiche",
    imgWidth: 1200,
    imgHeight: 500,
    link: "https://lastortasdelchiche.com/",
    status: "live",
    authorization: "confirmed",
    visual: "screenshot",
  },
  {
    id: "llantas-gamma",
    title: "Llantas Gamma",
    category: "Sitio web",
    desc: "Página web para una llantera local, con catálogo de productos y contacto directo por WhatsApp.",
    capabilities: ["Catálogo de productos", "Contacto por WhatsApp", "Presencia local"],
    img: "/img/GAMMA_logo.jpeg",
    imgAlt: "Logotipo de Llantas Gamma",
    imgWidth: 445,
    imgHeight: 429,
    link: "https://llantasgama.com/",
    status: "live",
    authorization: "confirmed",
    visual: "brand",
  },
  {
    id: "sistema-saas-torneos",
    title: "Sistema SaaS de Torneos",
    category: "Producto en desarrollo",
    desc: "Plataforma multi-tenant para administrar torneos, equipos y jugadores, con roles de acceso y gestión en la nube.",
    capabilities: ["Torneos", "Equipos y jugadores", "Roles y acceso"],
    img: "/img/sass_torneos.webp",
    imgAlt: "Vista del Sistema SaaS de Torneos en desarrollo",
    imgWidth: 1600,
    imgHeight: 665,
    status: "in-development",
    authorization: "confirmed",
    visual: "screenshot",
  },
];

export const TESTIMONIOS: TestimonialItem[] = [
  {
    name: "Fernando Gutiérrez",
    role: "Dueño",
    company: "Las Tortas Del Chiche",
    text: "Desde que MB Digital Systems creó nuestro sitio web, los pedidos en línea tienen un canal más ordenado. El equipo fue profesional y cumplió con lo acordado.",
    avatar: "/img/logo_tortas_avatar.webp",
    rating: 5,
  },
  {
    name: "Luis",
    role: "Dueño",
    company: "Llantas Gamma",
    text: "Necesitaba una página web para mi llantera y MB Digital Systems la desarrolló. Ahora los clientes encuentran la información del negocio y me escriben por WhatsApp directo.",
    avatar: "/img/GAMMA_logo.jpeg",
    rating: 5,
  },
];

export const SECTION_IDS = [
  "inicio",
  "nosotros",
  "servicios",
  "desarrollo-software",
  "tecnologia",
  "marketing-digital",
  "proyectos",
  "precios",
  "faq",
  "contacto",
] as const satisfies readonly SectionId[];

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Inicio", href: "#inicio", sectionId: "inicio" },
  { label: "Nosotros", href: "#nosotros", sectionId: "nosotros" },
  { label: "Servicios", href: "#servicios", sectionId: "servicios" },
  { label: "Software", href: "#desarrollo-software", sectionId: "desarrollo-software" },
  { label: "Marketing", href: "#marketing-digital", sectionId: "marketing-digital" },
  { label: "Proyectos", href: "#proyectos", sectionId: "proyectos" },
  { label: "Precios", href: "#precios", sectionId: "precios" },
  { label: "Contacto", href: "#contacto", sectionId: "contacto" },
];

export const SECTION_MAP: Record<SectionId, NavLabel> = {
  inicio: "Inicio",
  nosotros: "Nosotros",
  servicios: "Servicios",
  "desarrollo-software": "Software",
  tecnologia: "Software",
  "marketing-digital": "Marketing",
  "por-que": "Servicios",
  "por-que-elegirnos": "Servicios",
  testimonios: "Proyectos",
  portafolio: "Portafolio",
  proyectos: "Proyectos",
  "laboratorio-marketing": "Portafolio",
  proceso: "Proceso",
  precios: "Precios",
  faq: "Contacto",
  contacto: "Contacto",
};

export const DIVISIONS = [
  {
    id: "software",
    name: "Desarrollo de software",
    eyebrow: "División 01 · Construir",
    description:
      "Diseñamos y desarrollamos sitios, plataformas y sistemas que responden a necesidades concretas del negocio.",
    accent: "blue",
    sectionId: "desarrollo-software",
    services: [
      "Páginas web y landing pages",
      "Sitios corporativos y comerciales",
      "Tiendas en línea",
      "Sistemas empresariales",
      "Software a medida",
      "Automatizaciones e integraciones",
    ],
  },
  {
    id: "marketing",
    name: "Marketing digital",
    eyebrow: "División 02 · Conectar",
    description:
      "Trabajamos la presencia digital de la marca con estrategia, contenido y diseño para comunicar con claridad.",
    accent: "violet",
    sectionId: "marketing-digital",
    services: [
      "Gestión de redes sociales",
      "Estrategia y planificación de contenido",
      "Creación de contenido digital",
      "Diseño gráfico",
      "Edición de imágenes",
      "Edición de videos y reels",
    ],
  },
] as const satisfies readonly Division[];

export const SERVICE_OFFERINGS = [
  {
    id: "paginas-web-landing",
    division: "software",
    sectionId: "desarrollo-software",
    title: "Páginas web y landing pages",
    description:
      "Sitios claros y enfocados en un objetivo: presentar tu negocio, explicar tu oferta y facilitar el contacto.",
    deliverables: ["Diseño a medida", "Versión móvil", "Publicación"],
    status: "confirmed",
  },
  {
    id: "sitios-corporativos",
    division: "software",
    sectionId: "desarrollo-software",
    title: "Sitios corporativos y comerciales",
    description:
      "Una presencia digital completa para mostrar quién eres, qué haces y cómo pueden contactarte.",
    deliverables: ["Arquitectura de contenido", "Secciones corporativas", "Formularios"],
    status: "confirmed",
  },
  {
    id: "tiendas-en-linea",
    division: "software",
    sectionId: "desarrollo-software",
    title: "Tiendas en línea",
    description:
      "Catálogos y procesos de compra para vender tus productos con una experiencia ordenada y confiable.",
    deliverables: ["Catálogo", "Carrito de compra", "Panel de pedidos"],
    status: "confirmed",
  },
  {
    id: "sistemas-empresariales",
    division: "software",
    sectionId: "desarrollo-software",
    title: "Sistemas empresariales",
    description:
      "Herramientas internas para organizar información, dar seguimiento a procesos y reducir trabajo manual.",
    deliverables: ["Panel de control", "Roles y permisos", "Reportes"],
    status: "confirmed",
  },
  {
    id: "software-a-medida",
    division: "software",
    sectionId: "desarrollo-software",
    title: "Software a medida",
    description:
      "Desarrollo de soluciones específicas para procesos que no encajan en una herramienta genérica.",
    deliverables: ["Análisis", "Desarrollo", "Implementación"],
    status: "confirmed",
  },
  {
    id: "automatizaciones-integraciones",
    division: "software",
    sectionId: "desarrollo-software",
    title: "Automatizaciones e integraciones",
    description:
      "Conectamos herramientas y automatizamos tareas repetitivas para que tu equipo se concentre en lo importante.",
    deliverables: ["Integración de APIs", "Flujos automáticos", "Sincronización de datos"],
    status: "confirmed",
  },
  {
    id: "gestion-redes",
    division: "marketing",
    sectionId: "marketing-digital",
    title: "Gestión de redes sociales",
    description:
      "Planificación y publicación de contenido para mantener una presencia constante y coherente en tus canales.",
    detail:
      "Organizamos la publicación alrededor de una línea editorial: qué decir, con qué frecuencia y en qué formato, para que cada canal tenga intención y no solo actividad.",
    need:
      "La marca publica sin continuidad o cada publicación sigue una dirección distinta.",
    deliverables: ["Calendario", "Publicaciones", "Seguimiento"],
    status: "confirmed",
  },
  {
    id: "estrategia-contenido",
    division: "marketing",
    sectionId: "marketing-digital",
    title: "Estrategia y planificación de contenido",
    description:
      "Definimos temas, formatos y una línea editorial que represente a tu marca y hable de lo que le importa a tu audiencia.",
    detail:
      "Definimos los temas, formatos y mensajes que sostienen la comunicación de la marca, a partir de lo que hace y de lo que su audiencia necesita entender.",
    need:
      "Hay muchas ideas sueltas, pero no una dirección clara para convertirlas en contenido.",
    deliverables: ["Línea editorial", "Calendario", "Guías de contenido"],
    status: "confirmed",
  },
  {
    id: "creacion-contenido",
    division: "marketing",
    sectionId: "marketing-digital",
    title: "Creación de contenido digital",
    description:
      "Producimos piezas visuales y textos para comunicar tu oferta con claridad en el entorno digital.",
    detail:
      "Convertimos la estrategia en piezas concretas: textos, gráficos y adaptaciones pensadas para cada punto de contacto.",
    need:
      "La marca tiene claro qué quiere decir, pero necesita llevarlo a formatos claros y consistentes.",
    deliverables: ["Piezas gráficas", "Textos", "Adaptaciones"],
    status: "confirmed",
  },
  {
    id: "diseno-grafico",
    division: "marketing",
    sectionId: "marketing-digital",
    title: "Diseño gráfico",
    description:
      "Diseño de materiales visuales para tus canales, campañas y comunicación de marca.",
    detail:
      "Construimos sistemas visuales y materiales que mantienen la identidad de la marca reconocible en cada soporte.",
    need:
      "Las piezas se ven distintas entre sí y la marca pierde consistencia.",
    deliverables: ["Materiales", "Plantillas", "Adaptaciones"],
    status: "confirmed",
  },
  {
    id: "edicion-imagenes",
    division: "marketing",
    sectionId: "marketing-digital",
    title: "Edición de imágenes",
    description:
      "Retoque y preparación de imágenes para que tus productos y contenido se vean consistentes y profesionales.",
    detail:
      "Ajustamos color, composición y detalle para que las imágenes acompañen el mensaje y se vean cuidadas en cada formato.",
    need:
      "Las imágenes no tienen la calidad visual o la coherencia necesaria para representar la marca.",
    deliverables: ["Retoque", "Ajustes de color", "Formatos para redes"],
    status: "confirmed",
  },
  {
    id: "video-reels",
    division: "marketing",
    sectionId: "marketing-digital",
    title: "Edición de videos y reels",
    description:
      "Edición de piezas de video para redes sociales, con ritmo, subtítulos y formatos adecuados para cada canal.",
    detail:
      "Editamos video con ritmo, subtítulos y encuadres pensados para consumo móvil, sin perder claridad del mensaje.",
    need:
      "Hay material en video, pero no una versión lista para publicar o para explicar la idea.",
    deliverables: ["Edición", "Subtítulos", "Formatos verticales"],
    status: "confirmed",
  },
] as const satisfies readonly ServiceOffering[];

export const SOFTWARE_CAPABILITIES: readonly SoftwareCapability[] = [
  {
    id: "paginas-web",
    title: "Páginas web y landing pages",
    description:
      "Estructuramos el contenido para explicar qué haces, a quién sirves y cuál es el siguiente paso.",
    problem:
      "La oferta no se entiende rápido o el sitio no tiene una ruta clara hacia el contacto.",
    solutionType: "Sitio web / landing page",
  },
  {
    id: "sitios-corporativos",
    title: "Sitios corporativos y comerciales",
    description:
      "Organizamos la información en una arquitectura que permite recorrer la empresa, sus servicios y sus canales.",
    problem:
      "La empresa tiene varias líneas, sedes o audiencias y la información vive dispersa.",
    solutionType: "Sitio corporativo / comercial",
  },
  {
    id: "tiendas-en-linea",
    title: "Tiendas en línea",
    description:
      "Construimos catálogo, carrito y panel de pedidos como un flujo continuo, no como piezas aisladas.",
    problem:
      "Los pedidos se concentran en mensajes y el catálogo cambia sin un orden común.",
    solutionType: "Comercio electrónico",
  },
  {
    id: "sistemas-empresariales",
    title: "Sistemas empresariales",
    description:
      "Diseñamos paneles, roles y registros para que la operación tenga una fuente común de información.",
    problem:
      "El equipo trabaja con archivos, tareas manuales y datos que no coinciden entre áreas.",
    solutionType: "Sistema interno / panel",
  },
  {
    id: "software-a-medida",
    title: "Software a medida",
    description:
      "Modelamos reglas, permisos y flujos alrededor de cómo trabaja realmente tu equipo.",
    problem:
      "El proceso central del negocio no encaja en una herramienta genérica.",
    solutionType: "Aplicación a medida",
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones e integraciones",
    description:
      "Conectamos servicios mediante APIs y definimos flujos para mover información entre herramientas.",
    problem:
      "Hay tareas repetitivas y sistemas que no se comunican entre sí.",
    solutionType: "Integración / automatización",
  },
];

export const SOFTWARE_APPROACH: readonly ProcessStep[] = [
  {
    id: "entender",
    number: "01",
    title: "Entender el proceso",
    description:
      "Revisamos cómo opera el negocio, quién usa la herramienta y qué decisiones debe facilitar.",
    deliverables: ["Contexto", "Usuarios", "Flujos"],
  },
  {
    id: "definir",
    number: "02",
    title: "Definir el alcance",
    description:
      "Convertimos necesidades en módulos, reglas y criterios de entrega verificables.",
    deliverables: ["Alcance", "Reglas", "Prioridades"],
  },
  {
    id: "construir",
    number: "03",
    title: "Construir la solución",
    description:
      "Diseñamos interfaz, lógica y datos como una sola experiencia, no como capas separadas.",
    deliverables: ["Interfaz", "Lógica", "Datos"],
  },
  {
    id: "validar",
    number: "04",
    title: "Validar y entregar",
    description:
      "Probamos los recorridos principales, ajustamos lo necesario y documentamos la puesta en marcha.",
    deliverables: ["Pruebas", "Ajustes", "Documentación"],
  },
];

export const SOFTWARE_TECH_LAYERS: readonly SoftwareTechLayer[] = [
  {
    id: "interfaz",
    label: "Interfaz",
    description: "Componentes, estados y diseño responsive.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "aplicacion",
    label: "Aplicación",
    description: "Reglas de negocio, permisos y APIs.",
    technologies: ["Laravel", "PHP"],
  },
  {
    id: "datos",
    label: "Datos",
    description: "Modelado, consultas y persistencia.",
    technologies: ["MySQL", "PostgreSQL"],
  },
  {
    id: "herramientas",
    label: "Herramientas",
    description: "Paneles administrativos y entornos reproducibles.",
    technologies: ["Filament", "Docker"],
  },
];

export const MARKETING_WORKS: readonly MarketingWorkItem[] = [
  {
    id: "yaris-control-financiero",
    title: "Diseño visual — Sistema de control de ingresos y gastos | Yaris",
    category: "Marketing Digital · Diseño gráfico y contenido digital",
    description:
      "Diseño visual realizado en Canva para presentar una solución de administración financiera para pequeños negocios. La pieza comunica el registro de ingresos, gastos y movimientos de caja de forma organizada y sencilla.",
    tags: [
      "Diseño en Canva",
      "Diseño de interfaces",
      "Composición visual",
      "Gestión administrativa",
    ],
    image: "/img/yaris-1200.webp",
    imageAlt:
      "Diseño visual del Sistema de control de ingresos y gastos para Salón & Barbería Control Yaris",
    imageWidth: 1200,
    imageHeight: 656,
    label: "Trabajo de diseño",
    credit: "Diseño realizado en Canva",
  },
];

export const MARKETING_CONCEPTS: readonly MarketingConcept[] = [
  {
    id: "publicacion-editorial",
    title: "Naroa: publicación para redes.",
    category: "Publicaciones para redes sociales",
    format: "social",
    disclaimer: "Concepto demostrativo · Marca ficticia",
  },
  {
    id: "sistema-marca",
    title: "Casa Vela: identidad visual.",
    category: "Identidad visual",
    format: "branding",
    disclaimer: "Concepto demostrativo · Marca ficticia",
  },
  {
    id: "nueva-etapa",
    title: "Umbra: pieza promocional.",
    category: "Piezas promocionales",
    format: "graphic",
    disclaimer: "Concepto demostrativo · Marca ficticia",
  },
  {
    id: "encuadre-imagen",
    title: "Áurea: creatividad comercial.",
    category: "Creatividades comerciales",
    format: "image",
    disclaimer: "Concepto demostrativo · Marca ficticia",
  },
  {
    id: "reel-movimiento",
    title: "Nóta: composición digital.",
    category: "Composiciones digitales",
    format: "video",
    disclaimer: "Concepto demostrativo · Marca ficticia",
  },
  {
    id: "sistema-grafico",
    title: "Orden: contenido gráfico.",
    category: "Contenido gráfico para marcas",
    format: "graphic",
    disclaimer: "Concepto demostrativo · Marca ficticia",
  },
];

export const MARKETING_APPROACH: readonly ProcessStep[] = [
  {
    id: "comprender",
    number: "01",
    title: "Comprender la marca",
    description:
      "Escuchamos qué hace el negocio, a quién quiere hablarle y qué necesita comunicar con claridad.",
    deliverables: ["Contexto", "Audiencia", "Objetivos"],
  },
  {
    id: "definir",
    number: "02",
    title: "Definir la dirección",
    description:
      "Traducimos el contexto en una línea editorial, un tono y un sistema visual que den coherencia a las piezas.",
    deliverables: ["Tono", "Línea editorial", "Sistema visual"],
  },
  {
    id: "planificar",
    number: "03",
    title: "Planificar y crear",
    description:
      "Organizamos el contenido y desarrollamos las piezas para los canales y formatos acordados.",
    deliverables: ["Calendario", "Piezas", "Adaptaciones"],
  },
  {
    id: "preparar",
    number: "04",
    title: "Revisar y preparar",
    description:
      "Revisamos legibilidad, consistencia y formato antes de dejar cada pieza lista para publicar.",
    deliverables: ["Revisión", "Ajustes", "Archivos finales"],
  },
];

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "tiempos",
    question: "¿Cuánto tarda en estar lista mi página web?",
    answer:
      "El tiempo depende del alcance. Después de revisar lo que necesitas, te compartimos una propuesta con etapas y fechas estimadas.",
  },
  {
    id: "cambios",
    question: "¿Y si no me gusta el resultado?",
    answer:
      "Trabajamos con revisiones y validaciones durante el proceso. El alcance y las condiciones de entrega se acuerdan antes de comenzar.",
  },
  {
    id: "costos",
    question: "¿Hay costos ocultos?",
    answer:
      "La cotización incluye el alcance acordado. Dominio, hosting y servicios de terceros se detallan por separado para que no haya sorpresas.",
  },
  {
    id: "tecnologia",
    question: "¿Necesito saber de tecnología?",
    answer:
      "No. Nos encargamos de la parte técnica. Tú nos cuentas qué necesitas y coordinamos el proceso contigo.",
  },
  {
    id: "movil",
    question: "¿Funcionará en el celular de mis clientes?",
    answer:
      "Sí. Diseñamos y desarrollamos con un enfoque responsive para que la experiencia funcione en celular, tablet y computadora.",
  },
  {
    id: "venta-en-linea",
    question: "¿Puedo vender productos en línea?",
    answer:
      "Sí. Podemos desarrollar una tienda en línea con catálogo, carrito, panel de pedidos y los métodos de pago que se definan en la propuesta.",
  },
  {
    id: "whatsapp",
    question: "¿Cómo me contactan los clientes por WhatsApp?",
    answer:
      "Podemos integrar un botón de WhatsApp y formularios para que los clientes te contacten directamente desde tu sitio.",
  },
  {
    id: "soporte",
    question: "¿Ofrecen soporte después de entrega?",
    answer:
      "Sí. El alcance del soporte posterior a la entrega se define en la propuesta. También podemos acordar mantenimiento mensual.",
  },
  {
    id: "pago",
    question: "¿Cómo es el proceso de pago?",
    answer:
      "El esquema de pagos se acuerda en la cotización y puede dividirse por etapas según el tamaño del proyecto.",
  },
  {
    id: "ajustes",
    question: "¿Puedo hacer cambios después de que esté lista?",
    answer:
      "Sí. La propuesta incluye un número de revisiones. Los cambios adicionales se cotizan por separado.",
  },
  {
    id: "ubicacion",
    question: "¿Trabajan con clientes de todo México o solo de Tabasco?",
    answer:
      "Trabajamos con clientes de diferentes estados de México. La coordinación puede ser remota.",
  },
  {
    id: "empezar",
    question: "¿Qué necesito para empezar?",
    answer:
      "Solo cuéntanos qué necesitas. No necesitas tener todo definido; te guiamos para ordenar alcance, contenido y siguientes pasos.",
  },
];

export const CONTACT_INTENTS: readonly ContactIntent[] = [
  {
    id: "sitio-web",
    label: "Página web, landing o sitio corporativo",
    service: "pagina_web",
    interest: "Página web, landing o sitio corporativo",
  },
  {
    id: "tienda-en-linea",
    label: "Tienda en línea",
    service: "ecommerce",
    interest: "Tienda en línea",
  },
  {
    id: "sistema-empresarial",
    label: "Sistema empresarial o software a medida",
    service: "sistema_a_medida",
    interest: "Sistema empresarial o software a medida",
  },
  {
    id: "automatizacion-integraciones",
    label: "Automatización e integraciones",
    service: "sistema_a_medida",
    interest: "Automatización e integraciones",
  },
  {
    id: "marketing-redes",
    label: "Marketing digital y gestión de redes",
    service: "marketing_digital",
    interest: "Marketing digital y gestión de redes",
  },
  {
    id: "diseno-contenido",
    label: "Diseño y creación de contenido",
    service: "diseno",
    interest: "Diseño y creación de contenido",
  },
  {
    id: "video-reels",
    label: "Edición de video y reels",
    service: "marketing_digital",
    interest: "Edición de video y reels",
  },
  {
    id: "otro-asesoria",
    label: "Otro / Necesito asesoría",
    service: "otro",
    interest: "Otro / Necesito asesoría",
  },
];