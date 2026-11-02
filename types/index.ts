  export type ProjectVisual = "screenshot" | "brand";

  export type ProjectImageFit = "cover" | "contain";

  export type ProjectStatus = "live" | "in-development";

  export type ProjectAuthorization = "confirmed" | "pending";

  export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    desc: string;
    capabilities: readonly string[];
    img: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    imgFit?: ProjectImageFit;
    link?: string;
    status: ProjectStatus;
    authorization: ProjectAuthorization;
    visual: ProjectVisual;
  }

  export interface TestimonialItem {
    name: string;
    role: string;
    company: string;
    text: string;
    avatar: string;
    rating: number;
  }

  export interface MetricItem {
    value: string;
    label: string;
    icon: string;
  }

export type SectionId =
  | "inicio"
  | "nosotros"
  | "servicios"
  | "desarrollo-software"
  | "tecnologia"
  | "marketing-digital"
  | "por-que"
  | "por-que-elegirnos"
  | "testimonios"
  | "portafolio"
  | "proyectos"
  | "laboratorio-marketing"
  | "proceso"
  | "precios"
  | "faq"
  | "contacto";

  export type NavLabel =
    | "Inicio"
    | "Nosotros"
    | "Servicios"
    | "Software"
    | "Marketing"
    | "Portafolio"
    | "Proyectos"
    | "Proceso"
    | "Precios"
    | "Contacto";

export type NavHref = `#${SectionId}`;

export interface NavItem {
  label: NavLabel;
  href: NavHref;
  sectionId: SectionId;
}

export type DivisionId = "software" | "marketing";

export type DivisionAccent = "blue" | "violet";

export interface Division {
  id: DivisionId;
  name: string;
  eyebrow: string;
  description: string;
  accent: DivisionAccent;
  sectionId: SectionId;
  services: readonly string[];
}

export type ServiceOfferingStatus = "confirmed" | "pending";

export interface ServiceOffering {
  id: string;
  division: DivisionId;
  sectionId: SectionId;
  title: string;
  description: string;
  need?: string;
  detail?: string;
  deliverables: readonly string[];
  status: ServiceOfferingStatus;
}

export type SoftwareProjectStatus = "live" | "in-development";

export type ContentAuthorization = "confirmed" | "pending";

export interface SoftwareProject {
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
  image?: string;
  url?: string;
  status: SoftwareProjectStatus;
  authorization: ContentAuthorization;
}

export type MarketingConceptFormat =
  | "social"
  | "branding"
  | "landing"
  | "email"
  | "video"
  | "dashboard"
  | "graphic"
  | "image";

  export interface MarketingConcept {
    id: string;
    title: string;
    category: string;
    format: MarketingConceptFormat;
    disclaimer: "Concepto demostrativo · Marca ficticia";
  }

  export interface MarketingWorkItem {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: readonly string[];
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    label: string;
    credit: string;
  }

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: readonly string[];
}

export type PricingMode = "fixed" | "from" | "quote";

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  mode: PricingMode;
  price?: string;
  currency?: "MXN";
  features: readonly string[];
  highlighted?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type LeadServiceValue =
  | "pagina_web"
  | "ecommerce"
  | "sistema_a_medida"
  | "marketing_digital"
  | "diseno"
  | "otro";

export type ContactIntentId =
  | "sitio-web"
  | "tienda-en-linea"
  | "sistema-empresarial"
  | "automatizacion-integraciones"
  | "marketing-redes"
  | "diseno-contenido"
  | "video-reels"
  | "otro-asesoria";

export interface ContactIntent {
  id: ContactIntentId;
  label: string;
  service: LeadServiceValue;
  interest: string;
}

export type ContactChannelKind =
  | "whatsapp"
  | "email"
  | "phone"
  | "location"
  | "hours";

  export interface ContactChannel {
    id: string;
    kind: ContactChannelKind;
    label: string;
    value: string;
    href?: string;
    verified: boolean;
  }

  export interface SoftwareCapability {
    id: string;
    title: string;
    description: string;
    problem: string;
    solutionType: string;
  }

  export type SoftwareTechLayerId =
    | "interfaz"
    | "aplicacion"
    | "datos"
    | "herramientas";

  export interface SoftwareTechLayer {
    id: SoftwareTechLayerId;
    label: string;
    description: string;
    technologies: readonly string[];
  }