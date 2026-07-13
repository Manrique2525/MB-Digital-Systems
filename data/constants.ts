import { ServiceItem, ProjectItem, TechItem, TestimonialItem, MetricItem } from "@/types";

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
    icon: "devicon-typescript-plain",
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
    desc: "Posicionamos tu negocio en la primera página de Google para que te encuentren tus clientes exactos.",
    color: "#3B82F6",
    price: "2,999",
  },
  {
    icon: "📱",
    title: "Gestión de Redes",
    desc: "Creamos y publicamos contenido que genera comunidad, engagement y mensajes directos de clientes potenciales.",
    color: "#8B5CF6",
    price: "3,499",
  },
  {
    icon: "📢",
    title: "Pauta Publicitaria",
    desc: "Anuncios segmentados en Meta Ads y Google Ads que traen clientes nuevos a tu negocio desde el primer día.",
    color: "#10B981",
    price: "4,999",
  },
  {
    icon: "🔄",
    title: "Funnels de Conversión",
    desc: "Embudos automatizados que convierten visitantes en clientes sin que tengas que vender manualmente.",
    color: "#F59E0B",
    price: "5,999",
  },
];

export const TESTIMONIOS: TestimonialItem[] = [
  {
    name: "Fernando Gutiérrez",
    role: "Dueño",
    company: "Las Tortas Del Chiche",
    text: "Desde que MB Digital Systems creó nuestro sitio web, los pedidos en línea aumentaron un 40%. El equipo es profesional y entregó antes de lo prometido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
  },
  {
    name: "Luis",
    role: "Dueño",
    company: "Llantas Gamma",
    text: "Necesitaba una página web para mi llantera y MB Digital Systems la creó en tiempo récord. Ahora los clientes me encuentran en Google y me escriben por WhatsApp directo.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
  },
  {
    name: "María García",
    role: "Directora",
    company: "Clínica Dental Sonrisa",
    text: "MB Digital Systems nos diseñó una página web moderna y profesional. Los pacientes ahora pueden agendar citas en línea y nuestras consultas aumentaron un 35%.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
  },
  {
    name: "Roberto Hernández",
    role: "Gerente",
    company: "AutoPartes Tabasco",
    text: "El sistema de inventarios que desarrollaron nos ahorraba 3 horas diarias de trabajo manual. Ahora todo está automatizado y tenemos control total del stock.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Fundadora",
    company: "Boutique Elegance",
    text: "Nuestra tienda online generó $50,000 en el primer mes. MB Digital Systems no solo creó el sitio, sino que nos ayudó con la estrategia de marketing digital.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
  },
];

export const METRICS: MetricItem[] = [
  { value: "20+", label: "Proyectos entregados", icon: "🚀" },
  { value: "15+", label: "Clientes satisfechos", icon: "😊" },
  { value: "3+", label: "Años de experiencia", icon: "⏱️" },
  { value: "98%", label: "Satisfacción del cliente", icon: "⭐" },
];