"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyWebsite } from "@/components/sections/WhyWebsite";
import { Services } from "@/components/sections/Services";
import { MarketingServices } from "@/components/sections/MarketingServices";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { SocialProof } from "@/components/sections/SocialProof";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
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
    </div>
  );
}