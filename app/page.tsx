"use client";

import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {
    // Cargar fuentes y Font Awesome
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const fa = document.createElement("link");
    fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    fa.rel = "stylesheet";
    document.head.appendChild(fa);
  }, []);

  return (
    <div style={{ fontFamily: "'Sora', system-ui, sans-serif", overflowX: "hidden" }}>
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
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}