interface LogoProps {
  size?: number
  color?: string
}

export default function AlbionLogo({ size = 160, color = '#F0EDE8' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 960"
      width={size}
      height={size * (960 / 800)}
    >
      {/* Shield */}
      <path
        d="M400 120 C520 120 610 165 650 190 L650 385 C650 520 560 625 400 690 C240 625 150 520 150 385 L150 190 C190 165 280 120 400 120 Z"
        fill="none" stroke={color} strokeWidth="9" strokeLinejoin="round"
      />
      {/* Three pillars */}
      <rect x="275" y="292" width="55" height="205" fill={color}/>
      <rect x="372.5" y="270" width="55" height="227" fill={color}/>
      <rect x="470" y="292" width="55" height="205" fill={color}/>
      {/* Base */}
      <rect x="255" y="510" width="290" height="22" fill={color}/>

      {/* Rosetón grande */}
      <g transform="translate(400, 715)">
        <circle cx="0" cy="0" r="38" fill="transparent" stroke={color} strokeWidth="2.2"/>
        <g opacity="0.25">
          <line x1="0" y1="-50" x2="0" y2="50" stroke={color} strokeWidth="10" strokeLinecap="round"/>
          <line x1="-50" y1="0" x2="50" y2="0" stroke={color} strokeWidth="10" strokeLinecap="round"/>
        </g>
        <line x1="0" y1="-50" x2="0" y2="50" stroke={color} strokeWidth="2.4" strokeLinecap="round"/>
        <line x1="-50" y1="0" x2="50" y2="0" stroke={color} strokeWidth="2.4" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="11" fill="none" stroke={color} strokeWidth="2"/>
        <circle cx="0"     cy="-16"  r="4.8" fill={color}/>
        <circle cx="15.2"  cy="-4.9" r="4.8" fill={color}/>
        <circle cx="9.4"   cy="12.9" r="4.8" fill={color}/>
        <circle cx="-9.4"  cy="12.9" r="4.8" fill={color}/>
        <circle cx="-15.2" cy="-4.9" r="4.8" fill={color}/>
        <circle cx="0" cy="0" r="3.5" fill={color}/>
      </g>

      {/* ALBION LEGACY */}
      <text x="400" y="838" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="44" fontWeight="500" letterSpacing="5" fill={color}
      >ALBION LEGACY</text>
      {/* HOLDINGS */}
      <text x="400" y="878" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22" letterSpacing="10" fill={color} opacity="0.92"
      >HOLDINGS</text>
    </svg>
  )
}
