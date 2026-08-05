"use client";

import { ReactNode } from "react";

interface IconProps {
  size?: number;
  color?: string;
}

// ── Base SVG wrapper ─────────────────────────────────────────────────────────

function Svg({ size = 24, color = "currentColor", children }: IconProps & { children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

export function WhatsAppIcon({ size = 24, color = "#25D366" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HamburgerIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.681-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function CodeIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function DatabaseIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function PlugIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a6 6 0 01-12 0V8" />
    </svg>
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

export function getBenefitIcon(title: string, size?: number) {
  const p = { size };
  switch (title) {
    case "Velocidad que vende": return <ZapIcon {...p} />;
    case "Seguridad garantizada": return <LockIcon {...p} />;
    case "Escalable sin límites": return <ChartUpIcon {...p} />;
    case "Mobile-first": return <SmartphoneIcon {...p} />;
    default: return null;
  }
}

// ── Plan & Use Case Icons (Pricing) ──────────────────────────────────────────

export function BuildingIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </Svg>
  );
}

export function GraduationIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <path d="M22 10v6" />
    </Svg>
  );
}

export function UsersIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  );
}

export function BoxIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </Svg>
  );
}

export function HospitalIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M12 21s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z" />
      <path d="M12 8v6M9 11h6" />
    </Svg>
  );
}

export function HotelIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M2 20V4h2v12h7V6h8a3 3 0 0 1 3 3v11" />
      <path d="M2 20h20" />
      <path d="M14 12h4M14 16h4M14 8h4" />
    </Svg>
  );
}

export function StoreIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M4 9v11h16V9" />
      <path d="M3 4l1.5 5h15L21 4" />
      <path d="M7 20v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
    </Svg>
  );
}

export function PaletteIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M12 22a10 10 0 1 1 10-10c0 2-1.5 3-3 3h-2a2 2 0 0 0-2 2c0 1.5.5 2 .5 2S17 21 12 22z" />
      <circle cx="7.5" cy="11" r="1" fill={color} />
      <circle cx="11" cy="7.5" r="1" fill={color} />
      <circle cx="16" cy="8.5" r="1" fill={color} />
    </Svg>
  );
}

export function FlaskIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M9 3h6" />
      <path d="M10 3v6l-6 9a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 18l-6-9V3" />
      <path d="M7.5 15h9" />
    </Svg>
  );
}

export function SmileIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </Svg>
  );
}

export function ArrowRightIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Svg>
  );
}

export function SparklesIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <Svg size={size} color={color}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </Svg>
  );
}

export function getPlanIcon(key: string, size?: number) {
  const p = { size };
  switch (key) {
    case "rocket": return <RocketIcon {...p} />;
    case "building": return <BuildingIcon {...p} />;
    case "cart": return <CartIcon {...p} />;
    default: return null;
  }
}

export function getUseCaseIcon(key: string, size?: number) {
  const p = { size };
  switch (key) {
    case "graduation": return <GraduationIcon {...p} />;
    case "users": return <UsersIcon {...p} />;
    case "box": return <BoxIcon {...p} />;
    case "hospital": return <HospitalIcon {...p} />;
    case "hotel": return <HotelIcon {...p} />;
    case "store": return <StoreIcon {...p} />;
    default: return null;
  }
}

export function getDevStepIcon(key: string, size?: number) {
  const p = { size };
  switch (key) {
    case "search": return <SearchIcon {...p} />;
    case "palette": return <PaletteIcon {...p} />;
    case "gear": return <GearIcon {...p} />;
    case "flask": return <FlaskIcon {...p} />;
    case "rocket": return <RocketIcon {...p} />;
    default: return null;
  }
}

export function getBonusIcon(key: string, size?: number) {
  const p = { size };
  switch (key) {
    case "globe": return <GlobeIcon {...p} />;
    case "monitor": return <MonitorIcon {...p} />;
    case "search": return <SearchIcon {...p} />;
    case "chart": return <ChartBarIcon {...p} />;
    case "camera": return <CameraIcon {...p} />;
    default: return null;
  }
}

export function getMetricIcon(key: string, size?: number) {
  const p = { size };
  switch (key) {
    case "rocket": return <RocketIcon {...p} />;
    case "smile": return <SmileIcon {...p} />;
    case "clock": return <ClockIcon {...p} />;
    case "zap": return <ZapIcon {...p} />;
    default: return null;
  }
}
