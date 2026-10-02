import React from "react";

interface LogoProps {
  className?: string;
  variant?: "white" | "original" | "default";
  height?: number;
}

export default function MeierLogo({
  className = "",
  variant = "white",
  height = 42
}: LogoProps) {
  const src =
    variant === "original"
      ? "/images/inzag-logo.png"
      : "/images/inzag-logo-white.png";

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        userSelect: "none"
      }}
    >
      <img
        src={src}
        alt="INZAG Logo"
        width={135}
        height={114}
        style={{
          height: `${height}px`,
          width: "auto",
          display: "block",
          objectFit: "contain",
          filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45))"
        }}
      />
    </div>
  );
}
