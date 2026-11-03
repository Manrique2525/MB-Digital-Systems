import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => ({ default: m.Services })));
const SoftwareDevelopment = dynamic(() => import("@/components/sections/SoftwareDevelopment").then((m) => ({ default: m.SoftwareDevelopment })));
const DigitalMarketing = dynamic(() => import("@/components/sections/DigitalMarketing").then((m) => ({ default: m.DigitalMarketing })));
const WhyWebsite = dynamic(() => import("@/components/sections/WhyWebsite").then((m) => ({ default: m.WhyWebsite })));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack })));
const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then((m) => ({ default: m.SocialProof })));
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing })));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/layout/Footer").then((m) => ({ default: m.Footer })));
const WhatsAppFloat = dynamic(() => import("@/components/ui/WhatsAppFloat").then((m) => ({ default: m.WhatsAppFloat })));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ overflowX: "hidden" }}>
        <Hero />
        <About />
        <Services />
        <SoftwareDevelopment />
        <TechStack />
        <DigitalMarketing />
        <WhyWebsite />
        <SocialProof />
        <Projects />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
