export const colors = {
  primary: "#3B82F6",
  primaryDark: "#1E40AF",
  violet: "#8B5CF6",
  success: "#10B981",
  ink: "#0F172A",
  slate: "#64748B",
  muted: "#94A3B8",
  line: "#374151",
  bg: "#F8FAFF",
  border: "#E8F0FE",
  white: "#FFFFFF",
};

export const fonts = {
  sora: "'Sora', sans-serif",
};

export const radius = {
  card: 20,
  panel: 24,
  pill: 100,
};

export const shadows = {
  card: "0 2px 12px rgba(0,0,0,0.04)",
  lift: "0 12px 32px rgba(59,130,246,0.12)",
  glow: "0 24px 60px rgba(59,130,246,0.18)",
  glowViolet: "0 24px 60px rgba(139,92,246,0.18)",
  hero: "0 32px 80px rgba(30,64,175,0.25)",
};

export const gradients = {
  text: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
  textViolet: "linear-gradient(90deg,#8B5CF6,#3B82F6)",
  button: "linear-gradient(135deg,#3B82F6,#1E40AF)",
  section: "linear-gradient(135deg,#1E40AF 0%,#3B82F6 50%,#6366F1 100%)",
  sectionViolet: "linear-gradient(135deg,#8B5CF6 0%,#1E40AF 50%,#3B82F6 100%)",
  heroBg: "linear-gradient(160deg,#EFF6FF 0%,#DBEAFE 40%,#EDE9FE 100%)",
  heroBgDeep: "linear-gradient(170deg,#EFF6FF 0%,#DBEAFE 45%,#E0E7FF 100%)",
};

export const section = {
  padding: "clamp(60px,10vw,120px) 20px",
  paddingWide: "clamp(72px,12vw,140px) 20px",
  maxWidth: 1200,
};

export const easing = [0.22, 1, 0.36, 1] as const;
