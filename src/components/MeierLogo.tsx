import React from "react";

export default function MeierLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.85rem",
        textDecoration: "none",
        userSelect: "none"
      }}
    >
      {/* Precision German Crane & M Emblem */}
      <svg
        width="46"
        height="46"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }}
      >
        {/* Crane Tower (Mast) */}
        <line x1="22" y1="12" x2="22" y2="88" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="28" y1="12" x2="28" y2="88" stroke="#FFFFFF" strokeWidth="3" />
        {/* Lattice struts */}
        <line x1="22" y1="20" x2="28" y2="28" stroke="#FFFFFF" strokeWidth="1.8" />
        <line x1="22" y1="36" x2="28" y2="28" stroke="#FFFFFF" strokeWidth="1.8" />
        <line x1="22" y1="36" x2="28" y2="44" stroke="#FFFFFF" strokeWidth="1.8" />
        <line x1="22" y1="52" x2="28" y2="44" stroke="#FFFFFF" strokeWidth="1.8" />
        <line x1="22" y1="52" x2="28" y2="60" stroke="#FFFFFF" strokeWidth="1.8" />
        <line x1="22" y1="68" x2="28" y2="60" stroke="#FFFFFF" strokeWidth="1.8" />

        {/* Crane Operator Cabin / Top Mast */}
        <rect x="18" y="10" width="14" height="12" rx="2" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="25" y1="10" x2="25" y2="3" stroke="#FFFFFF" strokeWidth="2.5" />

        {/* Horizontal Jib & Counter-Jib */}
        <line x1="6" y1="14" x2="88" y2="14" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        {/* Counterweight */}
        <rect x="6" y="15" width="10" height="7" rx="1" fill="#FFFFFF" />

        {/* Crane Tie Lines / Cables */}
        <line x1="25" y1="3" x2="8" y2="14" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="25" y1="3" x2="55" y2="14" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Hoist Cable & Hook */}
        <line x1="68" y1="14" x2="68" y2="38" stroke="#FFFFFF" strokeWidth="1.8" strokeDasharray="3 2" />
        <path d="M65 38H71L68 44L65 38Z" fill="#FFFFFF" />

        {/* Architectural 'M' and Building Columns */}
        <path
          d="M38 88V50L53 68L68 50V88"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Base Foundation Bar */}
        <line x1="16" y1="88" x2="74" y2="88" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </svg>

      {/* Brand Typography */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.28rem",
            fontWeight: 800,
            letterSpacing: "0.02em",
            color: "#FFFFFF",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}
        >
          MEIER GMBH
        </span>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "rgba(255, 255, 255, 0.9)",
            textTransform: "uppercase",
            marginTop: "0.2rem",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)"
          }}
        >
          BAUUNTERNEHMEN
        </span>
      </div>
    </div>
  );
}
