interface LogoProps {
  size?: number
  color?: string
  className?: string
}

export default function AlbionLegacyLogo({ size = 160, color = '#F0EDE8' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 920"
      width={size}
      height={size * 1.15}
    >
      {/* Shield outline */}
      <path
        d="M400 120 C520 120 610 165 650 190 L650 385 C650 520 560 625 400 690 C240 625 150 520 150 385 L150 190 C190 165 280 120 400 120 Z"
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinejoin="round"
      />

      {/* Three pillars */}
      <rect x="275" y="292" width="55" height="205" fill={color} />
      <rect x="372.5" y="270" width="55" height="227" fill={color} />
      <rect x="470" y="292" width="55" height="205" fill={color} />

      {/* Base */}
      <rect x="255" y="510" width="290" height="22" fill={color} />

      {/* Tip symbol */}
      <g transform="translate(400, 690)">
        <circle cx="0" cy="0" r="17.5" fill="transparent" stroke={color} strokeWidth="2.2" />
        <g opacity="0.3">
          <line x1="0" y1="-23" x2="0" y2="23" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
          <line x1="-23" y1="0" x2="23" y2="0" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
        </g>
        <line x1="0" y1="-23" x2="0" y2="23" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="-23" y1="0" x2="23" y2="0" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <g opacity="0.95">
          <circle cx="0" cy="0" r="5.4" fill="none" stroke={color} strokeWidth="1.6" />
          <circle cx="0" cy="-7" r="2.2" fill={color} />
          <circle cx="6.3" cy="-2" r="2.2" fill={color} />
          <circle cx="3.9" cy="5.8" r="2.2" fill={color} />
          <circle cx="-3.9" cy="5.8" r="2.2" fill={color} />
          <circle cx="-6.3" cy="-2" r="2.2" fill={color} />
        </g>
      </g>

      {/* ALBION LEGACY */}
      <text
        x="400" y="835"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="44"
        fontWeight="500"
        letterSpacing="5"
        fill={color}
      >
        ALBION LEGACY
      </text>

      {/* HOLDINGS */}
      <text
        x="400" y="875"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        letterSpacing="10"
        fill={color}
        opacity="0.92"
      >
        HOLDINGS
      </text>
    </svg>
  )
}
