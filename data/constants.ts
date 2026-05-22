import { ServiceItem, ProjectItem, TechItem } from "@/types";

export const NAV_LINKS = [
  "Inicio",
  "Servicios",
  "Nosotros",
  "Proyectos",
  "Contacto",
];

export const SERVICES: ServiceItem[] = [
  {
    icon: "💻",
    title: "Desarrollo Web",
    desc: "Sitios web personalizados, responsivos y optimizados para SEO que representan tu marca en internet.",
    color: "#3B82F6",
  },
  {
    icon: "⚙️",
    title: "Sistemas a Medida",
    desc: "Soluciones para automatizar procesos y mejorar la eficiencia de tu negocio con tecnología actual.",
    color: "#10B981",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Tiendas online completas con catálogo, carrito de compras y pasarelas de pago integradas.",
    color: "#8B5CF6",
  },
];

export const FEATURES = [
  "Páginas web informativas y corporativas",
  "Tiendas en línea (e-commerce)",
  "Sistemas administrativos y de gestión",
  "Formularios inteligentes y automatización",
  "Integración con APIs, WhatsApp Business y pagos",
  "Paneles de administración seguros y fáciles de usar",
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