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