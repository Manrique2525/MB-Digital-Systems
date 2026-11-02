import Image from "next/image";

interface BrandLogoProps {
  size?: string;
  radius?: number;
  priority?: boolean;
}

export function BrandLogo({
  size = "clamp(44px, 6vw, 52px)",
  radius = 15,
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      style={{
        position: "relative",
        isolation: "isolate",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: radius,
        border: "1px solid rgba(30,64,175,0.18)",
        background:
          "linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 55%, #EFF6FF 100%)",
        boxShadow:
          "0 9px 24px rgba(30,64,175,0.18), inset 0 0 0 1px rgba(255,255,255,0.7)",
      }}
    >
      <Image
        src="/img/logo-mark-256.png"
        alt="MB Digital Systems"
        width={256}
        height={256}
        priority={priority}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </span>
  );
}
