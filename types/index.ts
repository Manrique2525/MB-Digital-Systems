export interface TechItem {
    name: string;
    icon: string;
    color: string;
  }
  
  export interface TechCardProps {
    tech: TechItem;
    i: number;
  }
  
  export interface ServiceItem {
    icon: string;
    title: string;
    desc: string;
    color: string;
  }
  
  export interface ProjectItem {
    title: string;
    desc: string;
    tags: string[];
    img: string;
    link: string;
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