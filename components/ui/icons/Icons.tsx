"use client";

import { ReactNode } from "react";

interface IconProps {
  size?: number;
  color?: string;
}

// ── Base SVG wrapper ─────────────────────────────────────────────────────────

function Svg({ size = 24, color = "currentColor", children }: IconProps & { children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

// ── Service Icons (large, ~44px) ─────────────────────────────────────────────

export function MonitorIcon({ size = 48, color = "#3B82F6" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </Svg>
  );
}

export function GearIcon({ size = 48, color = "#10B981" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Svg>
  );
}

export function CartIcon({ size = 48, color = "#8B5CF6" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </Svg>
  );
}

export function SearchIcon({ size = 48, color = "#3B82F6" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="11" y1="8" x2="11" y2="14" />
    </Svg>
  );
}

export function MegaphoneIcon({ size = 48, color = "#8B5CF6" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M15 14s3 2 5 2V4c-2 0-5 2-5 2" />
      <path d="M9 14H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4l6-4v12l-6-4z" />
      <line x1="9" y1="14" x2="9" y2="20" />
      <line x1="12" y1="18" x2="6" y2="18" />
    </Svg>
  );
}

export function TargetIcon({ size = 48, color = "#10B981" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </Svg>
  );
}

export function FunnelIcon({ size = 48, color = "#8B5CF6" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      <polyline points="16 8 20 5" />
      <polyline points="8 8 4 5" />
    </Svg>
  );
}

export function getServiceIcon(title: string, size?: number) {
  const p = { size };
  switch (title) {
    case "Desarrollo Web": return <MonitorIcon {...p} />;
    case "Sistemas a Medida": return <GearIcon {...p} />;
    case "E-commerce": return <CartIcon {...p} />;
    case "SEO": return <SearchIcon {...p} />;
    case "Gestión de Redes": return <MegaphoneIcon {...p} />;
    case "Pauta Publicitaria": return <TargetIcon {...p} />;
    case "Funnels de Conversión": return <FunnelIcon {...p} />;
    default: return null;
  }
}

// ── Plan Icons ───────────────────────────────────────────────────────────────

export function RocketIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M12 2s-4 6-4 10c0 2.2 1.8 4 4 4s4-1.8 4-4c0-4-4-10-4-10z" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 16v6" />
      <path d="M8 22h8" />
    </Svg>
  );
}

export function BuildingIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="6" x2="9" y2="10" />
      <line x1="15" y1="6" x2="15" y2="10" />
      <line x1="9" y1="14" x2="9" y2="18" />
      <line x1="15" y1="14" x2="15" y2="18" />
      <line x1="6" y1="22" x2="18" y2="22" />
    </Svg>
  );
}

// ── Use Case Icons ────────────────────────────────────────────────────────────

export function GraduationIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </Svg>
  );
}

export function UsersIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  );
}

export function PackageIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </Svg>
  );
}

export function HospitalIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </Svg>
  );
}

export function StoreIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M3 3h18v2H3z" />
      <path d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
      <path d="M15 9a3 3 0 0 1-6 0" />
    </Svg>
  );
}

// ── Dev Step Icons ───────────────────────────────────────────────────────────

export function PaletteIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="4" cy="10" r="2" />
      <circle cx="20" cy="10" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
    </Svg>
  );
}

export function FlaskIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M9 2v7.5L4 20c-.4.7.1 1.5.9 1.5h14.2c.8 0 1.3-.8.9-1.5L15 9.5V2" />
      <line x1="9" y1="2" x2="15" y2="2" />
      <line x1="9" y1="8" x2="15" y2="8" />
    </Svg>
  );
}

// ── Feature / Benefit Icons ──────────────────────────────────────────────────

export function ZapIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </Svg>
  );
}

export function LockIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </Svg>
  );
}

export function ChartUpIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </Svg>
  );
}

export function SmartphoneIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </Svg>
  );
}

export function ShieldCheckIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </Svg>
  );
}

export function GiftIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="7" x2="12" y2="22" />
      <path d="M12 7h-2a3 3 0 0 1 0-6 3 3 0 0 1 3 3" />
      <path d="M12 7h2a3 3 0 0 0 0-6 3 3 0 0 0-3 3" />
    </Svg>
  );
}

export function StarIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </Svg>
  );
}

export function CheckCircleIcon({ size = 20, color = "#10B981" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </Svg>
  );
}

export function InfoIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </Svg>
  );
}

export function GlobeIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Svg>
  );
}

export function ChartBarIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </Svg>
  );
}

export function ClipboardIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="15" y2="14" />
      <line x1="9" y1="18" x2="13" y2="18" />
    </Svg>
  );
}

export function CameraIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </Svg>
  );
}

export function MessageIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Svg>
  );
}

export function PhoneIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  );
}

export function MailIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </Svg>
  );
}

export function ClockIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Svg>
  );
}

export function MapPinIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </Svg>
  );
}

export function CookieIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="8" r="1.5" fill={color} />
      <circle cx="15" cy="9" r="1.5" fill={color} />
      <circle cx="9" cy="15" r="1.5" fill={color} />
      <circle cx="14" cy="14" r="1" fill={color} />
    </Svg>
  );
}

export function MoneyIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </Svg>
  );
}

export function SmileIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </Svg>
  );
}

export function TimerIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <line x1="10" y1="2" x2="14" y2="2" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <circle cx="12" cy="13" r="9" />
      <polyline points="12 9 12 13 15 15" />
    </Svg>
  );
}

// ── Pain Point Icons (WhyWebsite) ────────────────────────────────────────────

export function AlertIcon({ size = 32, color = "#EF4444" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </Svg>
  );
}

export function SlashCircleIcon({ size = 32, color = "#EF4444" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </Svg>
  );
}

export function MoonIcon({ size = 32, color = "#3B82F6" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Svg>
  );
}

export function FrownIcon({ size = 32, color = "#64748B" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </Svg>
  );
}

// ── Misc ─────────────────────────────────────────────────────────────────────

export function CheckIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <polyline points="20 6 9 17 4 12" />
    </Svg>
  );
}

// ── Data mapping helpers ─────────────────────────────────────────────────────

export function getPlanIcon(title: string, size?: number) {
  const p = { size };
  switch (title) {
    case "Landing Page": return <RocketIcon {...p} />;
    case "Página Empresarial": return <BuildingIcon {...p} />;
    case "E-commerce": return <CartIcon {...p} />;
    default: return null;
  }
}

export function getUseCaseIcon(title: string, size?: number) {
  const p = { size };
  switch (title) {
    case "Gestión Escolar": return <GraduationIcon {...p} />;
    case "CRM Empresarial": return <UsersIcon {...p} />;
    case "Control de Inventarios": return <PackageIcon {...p} />;
    case "Sistemas Médicos": return <HospitalIcon {...p} />;
    case "Gestión Hotelera": return <BuildingIcon {...p} />;
    case "Punto de Venta": return <StoreIcon {...p} />;
    default: return null;
  }
}

export function getDevStepIcon(title: string, size?: number) {
  const p = { size };
  switch (title) {
    case "Análisis": return <SearchIcon {...p} />;
    case "UX / UI": return <PaletteIcon {...p} />;
    case "Desarrollo": return <GearIcon {...p} />;
    case "Pruebas": return <FlaskIcon {...p} />;
    case "Lanzamiento": return <RocketIcon {...p} />;
    default: return null;
  }
}

export function getBenefitIcon(title: string, size?: number) {
  const p = { size };
  switch (title) {
    case "Velocidad que vende": return <ZapIcon {...p} />;
    case "Seguridad garantizada": return <LockIcon {...p} />;
    case "Escalable sin limites": return <ChartUpIcon {...p} />;
    case "Mobile-first": return <SmartphoneIcon {...p} />;
    default: return null;
  }
}

export function getMetricIcon(label: string, size?: number) {
  const p = { size };
  switch (label) {
    case "Proyectos entregados": return <RocketIcon {...p} />;
    case "Clientes satisfechos": return <SmileIcon {...p} />;
    case "Años de experiencia": return <TimerIcon {...p} />;
    case "Tiempo de entrega": return <ZapIcon {...p} />;
    default: return null;
  }
}
