import { ServiceItem, ProjectItem, TechItem, TestimonialItem, MetricItem } from "@/types";

export const NAV_LINKS = [
  "Inicio",
  "Servicios",
  "Nosotros",
  "Proyectos",
  "precios",
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
    title: "Sistema de Gestión Hotelera",
    desc: "Plataforma completa para administrar reservaciones, habitaciones y servicios de hotel.",
    tags: ["PHP", "Laravel", "MySQL"],
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    link: "#",
  },
  {
    title: "Las Tortas Del Chiche",
    desc: "Sitio web para taquería local con diseño responsive, menú digital y funcionalidades para pedidos.",
    tags: ["HTML", "CSS", "JS"],
    img: "/img/tortas_del_chiche.png",
    link: "https://lastortasdelchiche.com/",
  },
  {
    title: "Sistema de Análisis Financiero",
    desc: "Herramienta para visualización y análisis de datos financieros con reportes personalizados.",
    tags: ["Python", "Django", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    link: "#",
  },
];

export const MARKETING_SERVICES: ServiceItem[] = [
  {
    icon: "🔍",
    title: "SEO",
    desc: "Posicionamos tu negocio en la primera página de Google para que te encuentren tus clientes exactos.",
    color: "#3B82F6",
  },
  {
    icon: "📱",
    title: "Gestión de Redes",
    desc: "Creamos y publicamos contenido que genera comunidad, engagement y mensajes directos de clientes potenciales.",
    color: "#8B5CF6",
  },
  {
    icon: "📢",
    title: "Pauta Publicitaria",
    desc: "Anuncios segmentados en Meta Ads y Google Ads que traen clientes nuevos a tu negocio desde el primer día.",
    color: "#10B981",
  },
  {
    icon: "🔄",
    title: "Funnels de Conversión",
    desc: "Embudos automatizados que convierten visitantes en clientes sin que tengas que vender manualmente.",
    color: "#F59E0B",
  },
];

export const TESTIMONIOS: TestimonialItem[] = [
  {
    name: "Carlos Mendoza",
    role: "Dueño",
    company: "Las Tortas Del Chiche",
    text: "Desde que MB Digital Systems creó nuestro sitio web, los pedidos en línea aumentaron un 40%. El equipo es profesional y entregó antes de lo prometido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
  },
  {
    name: "María López",
    role: "Directora",
    company: "Hotel Vista al Mar",
    text: "El sistema de gestión hotelera nos ahorró horas de trabajo administrativo. Ahora todo está centralizado y funciona perfecto.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
  },
  {
    name: "Roberto García",
    role: "Gerente",
    company: "Comercializadora G&G",
    text: "Necesitábamos un sistema a medida para controlar nuestro inventario. MB Digital lo desarrolló exactamente como lo imaginábamos, y a mejor precio que otras propuestas.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
  },
];

export const METRICS: MetricItem[] = [
  { value: "20+", label: "Proyectos entregados", icon: "🚀" },
  { value: "15+", label: "Clientes satisfechos", icon: "😊" },
  { value: "3+", label: "Años de experiencia", icon: "⏱️" },
  { value: "98%", label: "Satisfacción del cliente", icon: "⭐" },
];