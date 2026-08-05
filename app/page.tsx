import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const WhyWebsite = dynamic(() => import("@/components/sections/WhyWebsite").then((m) => ({ default: m.WhyWebsite })));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => ({ default: m.Services })));
const MarketingServices = dynamic(() => import("@/components/sections/MarketingServices").then((m) => ({ default: m.MarketingServices })));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack })));
const About = dynamic(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then((m) => ({ default: m.SocialProof })));
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing })));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/layout/Footer").then((m) => ({ default: m.Footer })));
const WhatsAppFloat = dynamic(() => import("@/components/ui/WhatsAppFloat").then((m) => ({ default: m.WhatsAppFloat })));

export default function Home() {
  return (
    <main id="main-content" style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <WhyWebsite />
      <Services />
      <MarketingServices />
      <TechStack />
      <About />
      <SocialProof />
      <Projects />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
