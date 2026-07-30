import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyWebsite } from "@/components/sections/WhyWebsite";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { SocialProof } from "@/components/sections/SocialProof";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Pricing } from "@/components/sections/Pricing";
import dynamic from "next/dynamic";

const MarketingServices = dynamic(() => import("@/components/sections/MarketingServices").then((m) => ({ default: m.MarketingServices })));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const ExitIntentPopup = dynamic(() => import("@/components/ui/ExitIntentPopup").then((m) => ({ default: m.ExitIntentPopup })));

export default function Home() {
  return (
    <div id="main-content" style={{ overflowX: "hidden" }}>
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
      <ExitIntentPopup />
    </div>
  );
}