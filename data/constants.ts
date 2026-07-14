import { ServiceItem, ProjectItem, TechItem, TestimonialItem, MetricItem } from "@/types";

export const WHATSAPP_NUMBER = "+529931782620";

export const WHATSAPP_MESSAGES = {
  landingPage: "Hola MB Digital, me interesa la Landing Page ($4,999 MXN). Quiero una página web para mi negocio en Tabasco.",
  paginaEmpresarial: "Hola MB Digital, me interesa el plan Página Empresarial ($9,999 MXN). Necesito una web profesional con blog y múltiples secciones.",
  ecomerce: "Hola MB Digital, me interesa el plan E-commerce ($18,999 MXN). Quiero una tienda online para vender mis productos 24/7.",
  sistemasAMedida: "Hola MB Digital, me interesa un Sistema a Medida. Quiero automatizar un proceso de mi negocio y necesito una cotización personalizada.",
  desarrolloWeb: "Hola MB Digital, me interesa el servicio de Desarrollo Web. Quiero una página web profesional que aparezca en Google.",
  seo: "Hola MB Digital, me interesa el servicio de SEO. Mi negocio no aparece en Google y quiero estar en la primera página.",
  gestionRedes: "Hola MB Digital, me interesa el servicio de Gestión de Redes. Quiero mejorar mi presencia en redes sociales y atraer clientes.",
  pautaPublicitaria: "Hola MB Digital, me interesa Pauta Publicitaria. Quiero anuncios en Facebook e Instagram que me traigan clientes reales.",
  funnels: "Hola MB Digital, me interesa Funnels de Conversión. Quiero automatizar mis ventas y que mis clientes compren solos.",
  auditoria: "Hola MB Digital, quiero una auditoría digital gratuita para mi negocio. Quiero saber qué puedo mejorar.",
  paginaWeb: "Hola MB Digital, quiero mi página web. Vi su página y me interesa empezar cuanto antes.",
  proyectoSimilar: "Hola MB Digital, vi su portafolio y quiero un proyecto similar. ¿Cuánto cuesta y cuánto tarda?",
  duda: "Hola MB Digital, tengo una duda sobre sus servicios. ¿Me pueden ayudar?",
  contacto: "Hola MB Digital, necesito información sobre sus servicios. ¿Tienen disponibilidad este mes?",
  generico: "Hola MB Digital, me gustaría recibir información sobre sus servicios. Vi su página y me pareció profesional.",
};

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  "Inicio",
  "Servicios",
  "Nosotros",
  "Proyectos",
  "Precios",
  "Contacto",
];

export const SERVICES: ServiceItem[] = [
  {
    icon: "💻",
    title: "Desarrollo Web",
    desc: "Página web que aparece en Google, carga rápido y convierte visitas en mensajes de WhatsApp. Sin plantillas, 100% personalizada.",
    color: "#3B82F6",
  },
  {
    icon: "⚙️",
    title: "Sistemas a Medida",
    desc: "Automatizamos procesos manuales que te quitan tiempo. Control de inventario, clientes, facturación: todo en un solo lugar.",
    color: "#10B981",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Tienda online que vende mientras duermes. Catálogo, carrito, pagos con tarjeta y envíos integrados.",
    color: "#8B5CF6",
  },
];

export const FEATURES = [
  "Apareces en Google cuando te buscan",
  "Vendes 24/7 con tu tienda online",
  "Automatizas procesos que hoy haces manual",
  "Clientes te escriben por WhatsApp directo",
  "Controlas todo desde tu celular",
  "Reporting en tiempo real para tomar decisiones",
];

export const TECH_FRONTEND: TechItem[] = [
  {
    name: "HTML5",
    icon: "fab fa-html5",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "#F7DF1E",
  },
  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    color: "#7952B3",
  },
  {
    name: "Tailwind CSS",
    icon: "fas fa-wind",
    color: "#06B6D4",
  },
  {
    name: "VueJS",
    icon: "fab fa-vuejs",
    color: "#42B883",
  },
  {
    name: "React",
    icon: "fab fa-react",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: "fas fa-code",
    color: "#3178C6",
  },
];

export const TECH_BACKEND: TechItem[] = [
  {
    name: "PHP",
    icon: "fab fa-php",
    color: "#8892BE",
  },
  {
    name: "Laravel",
    icon: "fab fa-laravel",
    color: "#FF2D20",
  },
  {
    name: "MySQL",
    icon: "fas fa-database",
    color: "#4479A1",
  },
  {
    name: "SQL Server",
    icon: "fas fa-server",
    color: "#CC2927",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Sistema SaaS de Torneos",
    desc: "Plataforma multi-tenant para administradores de torneos: generación de torneos, alta de equipos y jugadores, envío de roles a propietarios y gestión completa en la nube.",
    tags: ["SaaS", "Multi-tenant", "Cloud"],
    img: "/img/sass_torneos.jpeg",
    link: "#",
    comingSoon: true,
  },
  {
    title: "Llantas Gamma",
    desc: "Página web para llantera local con diseño moderno, catálogo de productos y botón de WhatsApp para generar clientes a través de presencia en línea.",
    tags: ["Next.js", "Tailwind CSS", "HTML"],
    img: "/img/GAMMA_logo.jpeg",
    link: "https://llantasgamma.netlify.app/",
  },
  {
    title: "Las Tortas Del Chiche",
    desc: "Sitio web para taquería local con diseño responsive, menú digital y funcionalidades para pedidos en línea.",
    tags: ["HTML", "CSS", "JS"],
    img: "/img/tortas_del_chiche.png",
    link: "https://lastortasdelchiche.com/",
  },
];

export const MARKETING_SERVICES: ServiceItem[] = [
  {
    icon: "🔍",
    title: "SEO",
    desc: "Posicionamos tu negocio en la primera página de Google para que te encuentren tus clientes exactos. Incluye auditoría, optimización y reportes mensuales.",
    color: "#3B82F6",
    price: "5,999",
  },
  {
    icon: "📱",
    title: "Gestión de Redes",
    desc: "Creamos y publicamos contenido profesional que genera comunidad, engagement y mensajes directos de clientes potenciales.",
    color: "#8B5CF6",
    price: "4,999",
  },
  {
    icon: "📢",
    title: "Pauta Publicitaria",
    desc: "Anuncios segmentados en Meta Ads y Google Ads que traen clientes nuevos a tu negocio desde el primer día.",
    color: "#10B981",
    price: "6,999",
  },
  {
    icon: "🔄",
    title: "Funnels de Conversión",
    desc: "Embudos automatizados que convierten visitantes en clientes sin que tengas que vender manualmente.",
    color: "#F59E0B",
    price: "8,999",
  },
];

export const TESTIMONIOS: TestimonialItem[] = [
  {
    name: "Fernando Gutiérrez",
    role: "Dueño",
    company: "Las Tortas Del Chiche",
    text: "Desde que MB Digital Systems creó nuestro sitio web, los pedidos en línea aumentaron un 40%. Pasamos de 5 pedidos diarios por WhatsApp a 15+ sin contratar a nadie nuevo. El equipo es profesional y entregó antes de lo prometido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
  },
  {
    name: "Luis",
    role: "Dueño",
    company: "Llantas Gamma",
    text: "Necesitaba una página web para mi llantera y MB Digital Systems la creó en tiempo récord. Ahora los clientes me encuentran en Google cuando buscan llantas en Villahermosa y me escriben por WhatsApp directo. Antes solo vendía por referidos.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
  },
];

export const METRICS: MetricItem[] = [
  { value: "20+", label: "Proyectos entregados", icon: "🚀" },
  { value: "15+", label: "Clientes satisfechos", icon: "😊" },
  { value: "3+", label: "Años de experiencia", icon: "⏱️" },
  { value: "7 días", label: "Tiempo de entrega", icon: "⚡" },
];