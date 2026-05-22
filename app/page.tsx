"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Inicio", "Servicios", "Nosotros", "Proyectos", "Contacto"];

const SERVICES = [
  { icon: "💻", title: "Desarrollo Web", desc: "Sitios web personalizados, responsivos y optimizados para SEO que representan tu marca en internet.", color: "#3B82F6" },
  { icon: "⚙️", title: "Sistemas a Medida", desc: "Soluciones para automatizar procesos y mejorar la eficiencia de tu negocio con tecnología actual.", color: "#10B981" },
  { icon: "🛒", title: "E-commerce", desc: "Tiendas online completas con catálogo, carrito de compras y pasarelas de pago integradas.", color: "#8B5CF6" },
];

const FEATURES = [
  "Páginas web informativas y corporativas",
  "Tiendas en línea (e-commerce)",
  "Sistemas administrativos y de gestión",
  "Formularios inteligentes y automatización",
  "Integración con APIs, WhatsApp Business, pagos",
  "Paneles de administración seguros y fáciles de usar",
];

const TECH_FRONTEND = [
  { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fab fa-js", color: "#F0A500" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
];

const TECH_BACKEND = [
  { name: "PHP", icon: "fab fa-php", color: "#8892BE" },
  { name: "Laravel", icon: "fab fa-laravel", color: "#FF2D20" },
  { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
  { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4" },
];

const PROJECTS = [
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

// Hook para detectar si es móvil
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function AnimatedSection({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Cierra el menú al cambiar a desktop
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} style={{ cursor: "pointer" }} onClick={() => scrollTo("inicio")}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#1E40AF", letterSpacing: "-0.5px", fontFamily: "'Sora', sans-serif" }}>
              MB<span style={{ color: "#3B82F6" }}>Digital</span>
            </div>
            <div style={{ fontSize: 9, color: "#6B7280", letterSpacing: 2, textTransform: "uppercase", marginTop: -2 }}>Systems</div>
          </motion.div>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {NAV_LINKS.map((link) => (
                <motion.button key={link} onClick={() => scrollTo(link)} whileHover={{ color: "#3B82F6" }}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#374151", fontWeight: 500, padding: "8px 14px", borderRadius: 8, fontFamily: "inherit" }}>
                  {link}
                </motion.button>
              ))}
              <motion.button onClick={() => scrollTo("contacto")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ background: "linear-gradient(135deg,#3B82F6,#1E40AF)", color: "#fff", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700, padding: "10px 22px", borderRadius: 100, fontFamily: "inherit", marginLeft: 8, boxShadow: "0 4px 20px rgba(59,130,246,0.35)" }}>
                Cotizar
              </motion.button>
            </nav>
          )}

          {/* Hamburger (solo móvil) */}
          {isMobile && (
            <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.9 }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, color: "#1E40AF", padding: 8 }}>
              <i className={open ? "fas fa-times" : "fas fa-bars"} />
            </motion.button>
          )}
        </div>
      </motion.header>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            style={{ position: "fixed", top: 68, left: 0, right: 0, zIndex: 99, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(59,130,246,0.12)", padding: "12px 20px 20px" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button key={link} onClick={() => scrollTo(link)}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", borderBottom: "1px solid #F1F5F9", cursor: "pointer", fontSize: 16, color: "#374151", fontWeight: 600, padding: "14px 0", fontFamily: "inherit" }}>
                {link}
              </motion.button>
            ))}
            <motion.button onClick={() => scrollTo("contacto")} whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
              style={{ marginTop: 14, width: "100%", background: "linear-gradient(135deg,#3B82F6,#1E40AF)", color: "#fff", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700, padding: "14px", borderRadius: 12, fontFamily: "inherit" }}>
              Solicitar Cotización
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "linear-gradient(160deg,#EFF6FF 0%,#DBEAFE 40%,#EDE9FE 100%)" }}>
      {/* Orbs animados */}
      <motion.div animate={{ x: [0,30,0], y: [0,-20,0], scale: [1,1.1,1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "10%", left: "5%", width: "min(380px,60vw)", height: "min(380px,60vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.18) 0%,transparent 70%)", pointerEvents: "none" }} />
      <motion.div animate={{ x: [0,-20,0], y: [0,30,0], scale: [1,1.15,1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: "10%", right: "5%", width: "min(500px,70vw)", height: "min(500px,70vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 70%)", pointerEvents: "none" }} />
      <motion.div animate={{ x: [0,15,0], y: [0,15,0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: "40%", right: "20%", width: "min(200px,35vw)", height: "min(200px,35vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(16,185,129,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />

      <motion.div style={{ y, opacity, position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(100px,15vw,130px) 20px 60px", maxWidth: 820, margin: "0 auto", width: "100%" }}>
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 28, color: "#1E40AF", fontSize: 13, fontWeight: 600 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
          Disponible para nuevos proyectos
        </motion.div>

        {/* Título */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22,1,0.36,1] }}
          style={{ fontSize: "clamp(38px,7vw,80px)", fontWeight: 900, lineHeight: 1.08, color: "#0F172A", letterSpacing: "-2px", margin: "0 0 24px", fontFamily: "'Sora', sans-serif" }}>
          Desarrollo Web<br />
          <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Profesional
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
          style={{ fontSize: "clamp(15px,2.5vw,20px)", color: "#64748B", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65, fontWeight: 400 }}>
          Transformamos tus ideas en soluciones digitales efectivas. Desde páginas web hasta sistemas complejos a medida.
        </motion.p>

        {/* Botones */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
          style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <motion.a href="https://wa.me/+529931782620" target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(59,130,246,0.45)" }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#3B82F6,#1E40AF)", color: "#fff", textDecoration: "none", fontWeight: 700, padding: "14px 28px", borderRadius: 100, fontSize: "clamp(14px,2vw,16px)", boxShadow: "0 4px 24px rgba(59,130,246,0.35)" }}>
            <span>Iniciar Proyecto</span>
            <span style={{ fontSize: 18 }}>→</span>
          </motion.a>
          <motion.button onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.04, background: "rgba(59,130,246,0.08)" }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.7)", border: "1px solid rgba(59,130,246,0.25)", color: "#1E40AF", fontWeight: 600, padding: "14px 24px", borderRadius: 100, fontSize: "clamp(13px,2vw,15px)", cursor: "pointer", backdropFilter: "blur(8px)", fontFamily: "inherit" }}>
            Ver Proyectos
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
          style={{ marginTop: "clamp(48px,8vw,80px)", display: "flex", justifyContent: "center", gap: "clamp(24px,6vw,56px)", flexWrap: "wrap" }}>
          {[["100%","Compromiso"],["⚡ Rápido","Entrega"],["🔒 Seguro","Desarrollo"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 800, color: "#1E40AF" }}>{val}</div>
              <div style={{ fontSize: 13, color: "#94A3B8", fontWeight: 500, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0,8,0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", color: "#94A3B8", fontSize: 22 }}>↓</motion.div>
    </section>
  );
}

// ─── SERVICES ──────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="servicios" style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,80px)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Lo que hacemos</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-1.5px", margin: "0 0 20px", fontFamily: "'Sora', sans-serif" }}>Nuestros Servicios</h2>
          <p style={{ fontSize: "clamp(14px,2vw,18px)", color: "#64748B", maxWidth: 560, margin: "0 auto" }}>Soluciones digitales a la medida para cada tipo de negocio</p>
        </AnimatedSection>

        {/* Cards de servicios */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24, marginBottom: "clamp(40px,7vw,80px)" }}>
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12}>
              <motion.div whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(59,130,246,0.15)" }}
                style={{ background: "#F8FAFF", border: "1px solid #E8F0FE", borderRadius: 20, padding: "clamp(24px,4vw,40px) clamp(20px,3vw,32px)", height: "100%", cursor: "default", transition: "border-color 0.3s" }}>
                <div style={{ fontSize: 42, marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 800, color: "#0F172A", marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                <div style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 6, color: s.color, fontWeight: 700, fontSize: 14 }}>
                  Saber más →
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Banner de desarrollo a la medida */}
        <AnimatedSection>
          <div style={{ background: "linear-gradient(135deg,#1E40AF 0%,#3B82F6 50%,#6366F1 100%)", borderRadius: 24, padding: "clamp(32px,5vw,64px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", fontFamily: "'Sora', sans-serif", letterSpacing: "-0.5px" }}>Desarrollo a la Medida</h3>
              <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 28px" }}>¿Necesitas algo específico para tu negocio? Escríbenos y juntos convertimos tu idea en realidad.</p>
              <motion.a href="https://wa.me/+529931782620" target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#1E40AF", textDecoration: "none", fontWeight: 800, padding: "14px 28px", borderRadius: 100, fontSize: 15 }}>
                💬 Solicitar Cotización
              </motion.a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {FEATURES.map((f, i) => (
                <motion.div key={f} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.9)", fontSize: "clamp(12px,1.5vw,14px)" }}>
                  <span style={{ width: 22, height: 22, background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12 }}>✓</span>
                  {f}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── TECH STACK ─────────────────────────────────────────────────────────────────
function TechStack() {
  const TechCard = ({ tech, i }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22,1,0.36,1] }}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
      style={{ background: "#fff", border: "1px solid #E8F0FE", borderRadius: 16, padding: "20px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "default" }}>
      <i className={tech.icon} style={{ fontSize: 28, color: tech.color, flexShrink: 0 }} />
      <span style={{ fontWeight: 700, color: "#1E293B", fontSize: 15 }}>{tech.name}</span>
    </motion.div>
  );

  return (
    <section style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#F8FAFF" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(36px,6vw,64px)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Tecnología</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-1px", margin: "0 0 16px", fontFamily: "'Sora', sans-serif" }}>Nuestro Stack Tecnológico</h2>
          <p style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "#64748B", maxWidth: 500, margin: "0 auto" }}>Las mejores tecnologías del mercado para soluciones robustas y escalables</p>
        </AnimatedSection>

        {[{ label: "Front-end", emoji: "🖥", items: TECH_FRONTEND, bg: "#DBEAFE", color: "#1E40AF" },
          { label: "Back-end", emoji: "🖧", items: TECH_BACKEND, bg: "#D1FAE5", color: "#065F46" }
        ].map((cat, ci) => (
          <AnimatedSection key={cat.label} delay={ci * 0.1} style={{ marginBottom: ci === 0 ? 40 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ background: cat.bg, padding: "10px 14px", borderRadius: 12, color: cat.color, fontSize: 18 }}>{cat.emoji}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1E293B", margin: 0, fontFamily: "'Sora', sans-serif" }}>{cat.label}</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 14 }}>
              {cat.items.map((t, i) => <TechCard key={t.name} tech={t} i={i} />)}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="nosotros" style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>
        <AnimatedSection>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>Sobre nosotros</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-1px", margin: "0 0 24px", fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}>
            Tecnología que<br />
            <span style={{ background: "linear-gradient(90deg,#3B82F6,#6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              impulsa tu negocio
            </span>
          </h2>
          <p style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "#64748B", lineHeight: 1.8, marginBottom: 20 }}>
            MB Digital Systems es una empresa especializada en el desarrollo de soluciones web personalizadas. Combinamos creatividad y tecnología para ofrecer productos de alta calidad.
          </p>
          <p style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "#64748B", lineHeight: 1.8, marginBottom: 40 }}>
            Entregamos proyectos a tiempo, dentro del presupuesto y superando las expectativas de cada cliente.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[["Proyectos","20+"],["Clientes","15+"],["Tecnologías","8+"]].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontSize: "clamp(28px,5vw,36px)", fontWeight: 900, color: "#3B82F6", fontFamily: "'Sora', sans-serif" }}>{val}</div>
                <div style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div style={{ position: "relative" }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
              style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(59,130,246,0.18)" }}>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80" alt="Equipo MB Digital"
                style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ position: "absolute", bottom: -20, left: -16, background: "linear-gradient(135deg,#3B82F6,#1E40AF)", borderRadius: 18, padding: "16px 22px", boxShadow: "0 16px 40px rgba(59,130,246,0.3)" }}>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, fontWeight: 600, marginBottom: 4 }}>Disponibilidad</div>
              <div style={{ color: "#fff", fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, background: "#10B981", borderRadius: "50%", display: "inline-block" }} />
                Proyectos abiertos
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── PROJECTS ───────────────────────────────────────────────────────────────────
function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="proyectos" style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#F8FAFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,72px)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Portafolio</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-1.5px", margin: "0 0 20px", fontFamily: "'Sora', sans-serif" }}>Proyectos Recientes</h2>
          <p style={{ fontSize: "clamp(14px,2vw,18px)", color: "#64748B", maxWidth: 520, margin: "0 auto" }}>Cada proyecto diseñado y desarrollado para superar expectativas</p>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div onHoverStart={() => setHovered(i)} onHoverEnd={() => setHovered(null)} whileHover={{ y: -10 }}
                style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #E8F0FE", boxShadow: hovered === i ? "0 24px 60px rgba(59,130,246,0.18)" : "0 2px 12px rgba(0,0,0,0.04)", transition: "box-shadow 0.3s" }}>
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                  <motion.img src={p.img} alt={p.title}
                    animate={{ scale: hovered === i ? 1.07 : 1 }} transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: "absolute", inset: 0, background: "rgba(30,64,175,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <motion.a href={p.link} target="_blank" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}
                          style={{ color: "#fff", border: "2px solid #fff", borderRadius: 100, padding: "10px 28px", fontWeight: 700, fontSize: 14, textDecoration: "none", backdropFilter: "blur(4px)" }}>
                          {p.link === "#" ? "Ver Detalles" : "Visitar Sitio"} →
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div style={{ padding: "clamp(20px,3vw,28px)" }}>
                  <h3 style={{ fontSize: "clamp(16px,2vw,18px)", fontWeight: 800, color: "#0F172A", margin: "0 0 10px", fontFamily: "'Sora', sans-serif" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7, margin: "0 0 16px" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ background: "#EFF6FF", color: "#1E40AF", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 100 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection style={{ textAlign: "center", marginTop: 56 }}>
          <motion.a href="https://wa.me/+529931782620" target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(59,130,246,0.35)" }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#3B82F6,#1E40AF)", color: "#fff", textDecoration: "none", fontWeight: 700, padding: "16px 36px", borderRadius: 100, fontSize: "clamp(14px,2vw,16px)", boxShadow: "0 4px 24px rgba(59,130,246,0.3)" }}>
            ¿Quieres un proyecto similar? 💬
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contacto" style={{ padding: "clamp(60px,10vw,120px) 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(40px,6vw,80px)" }}>
        <AnimatedSection>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>Contacto</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-1px", margin: "0 0 20px", fontFamily: "'Sora', sans-serif", lineHeight: 1.2 }}>
            Hablemos de<br />tu proyecto
          </h2>
          <p style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "#64748B", lineHeight: 1.8, marginBottom: 40 }}>
            Cuéntanos tu idea y la convertimos en realidad. Respondemos en menos de 24 horas.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              ["📍","Ubicación","Fracc. Ciudad Bicentenario, Tabasco"],
              ["📞","Teléfono","993 178 2620"],
              ["✉️","Email","manriquemontero25@gmail.com"],
              ["🕐","Horario","Lunes a Viernes: 9:00 AM – 6:00 PM"],
            ].map(([icon, label, value]) => (
              <motion.div key={label} whileHover={{ x: 4 }} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, background: "#EFF6FF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
                  <div style={{ fontSize: 15, color: "#334155", fontWeight: 500, marginTop: 2 }}>{value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <motion.form onSubmit={handleSubmit} whileHover={{ boxShadow: "0 20px 60px rgba(59,130,246,0.1)" }}
            style={{ background: "#F8FAFF", border: "1px solid #E8F0FE", borderRadius: 24, padding: "clamp(24px,4vw,40px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              {["name","email"].map((field) => (
                <input key={field} type={field === "email" ? "email" : "text"} placeholder={field === "name" ? "Nombre" : "Email"}
                  value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} required
                  style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "12px 14px", fontSize: 14, color: "#1E293B", outline: "none", fontFamily: "inherit", width: "100%", boxSizing: "border-box" }} />
              ))}
            </div>
            <input type="text" placeholder="Asunto" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
              style={{ width: "100%", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "12px 14px", fontSize: 14, color: "#1E293B", outline: "none", marginBottom: 14, boxSizing: "border-box", fontFamily: "inherit" }} />
            <textarea placeholder="Cuéntanos tu proyecto..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required
              style={{ width: "100%", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "12px 14px", fontSize: 14, color: "#1E293B", outline: "none", resize: "vertical", marginBottom: 20, boxSizing: "border-box", fontFamily: "inherit" }} />
            <motion.button type="submit" whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.35)" }} whileTap={{ scale: 0.97 }}
              style={{ width: "100%", background: "linear-gradient(135deg,#3B82F6,#1E40AF)", color: "#fff", border: "none", borderRadius: 100, padding: "14px 28px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <AnimatePresence mode="wait">
                {sent
                  ? <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>✅ Mensaje enviado</motion.span>
                  : <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>✉️ Enviar Mensaje</motion.span>}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#0F172A", color: "#94A3B8", padding: "clamp(40px,7vw,64px) 20px clamp(24px,4vw,32px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "clamp(28px,4vw,48px)", marginBottom: "clamp(28px,4vw,48px)" }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", fontFamily: "'Sora', sans-serif", marginBottom: 4 }}>
              MB<span style={{ color: "#3B82F6" }}>Digital</span>
            </div>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Systems</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>Soluciones web profesionales que transforman tu negocio en el mundo digital.</p>
            <div style={{ display: "flex", gap: 10 }}>
              {["fab fa-facebook-f","fab fa-twitter","fab fa-linkedin-in","fab fa-instagram"].map((icon) => (
                <motion.a key={icon} href="#" whileHover={{ y: -3, color: "#3B82F6" }}
                  style={{ width: 36, height: 36, background: "rgba(255,255,255,0.07)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#94A3B8", fontSize: 14 }}>
                  <i className={icon} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 18, fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Navegación</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map((link) => (
                <motion.a key={link} href={`#${link.toLowerCase()}`} whileHover={{ x: 4, color: "#3B82F6" }}
                  style={{ color: "#94A3B8", textDecoration: "none", fontSize: 14 }}>{link}</motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 18, fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <span>📞 993 178 2620</span>
              <span>✉️ manriquemontero25@gmail.com</span>
              <span>📍 Tabasco, México</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, textAlign: "center", fontSize: 12 }}>
          © 2025 MB Digital Systems. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

// ─── WHATSAPP FLOAT ──────────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <motion.a href="https://wa.me/+529931782620" target="_blank"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
      style={{ position: "fixed", bottom: "clamp(20px,3vw,32px)", right: "clamp(16px,2.5vw,32px)", zIndex: 200, width: 58, height: 58, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, color: "#fff", boxShadow: "0 4px 24px rgba(37,211,102,0.5)", textDecoration: "none" }}>
      <i className="fab fa-whatsapp" />
    </motion.a>
  );
}

// ─── APP ────────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
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
      <Services />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}