interface LogoProps {
  size?: number
  color?: string
  bg?: string
}

export default function AlbionLogo({ size = 160, color = '#ffffff', bg = '#0a0a0a' }: LogoProps) {
  const h = size * (960 / 800)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 960" width={size} height={h}>
      <path d="M400 120 C520 120 610 165 650 190 L650 385 C650 520 560 625 400 690 C240 625 150 520 150 385 L150 190 C190 165 280 120 400 120 Z"
        fill="none" stroke={color} strokeWidth="9" strokeLinejoin="round"/>
      <rect x="275" y="292" width="55" height="205" fill={color}/>
      <rect x="372.5" y="270" width="55" height="227" fill={color}/>
      <rect x="470" y="292" width="55" height="205" fill={color}/>
      <rect x="255" y="510" width="290" height="22" fill={color}/>
      <g transform="translate(400, 690)">
        <circle cx="0" cy="0" r="44" fill={bg} stroke={color} strokeWidth="3"/>
        <g opacity="0.18">
          <line x1="0" y1="-62" x2="0" y2="62" stroke={color} strokeWidth="14" strokeLinecap="round"/>
          <line x1="-62" y1="0" x2="62" y2="0" stroke={color} strokeWidth="14" strokeLinecap="round"/>
        </g>
        <line x1="0" y1="-62" x2="0" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        <line x1="-62" y1="0" x2="62" y2="0" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="13" fill="none" stroke={color} strokeWidth="2.2"/>
        <circle cx="0"     cy="-19"  r="5.8" fill={color}/>
        <circle cx="18.1"  cy="-5.9" r="5.8" fill={color}/>
        <circle cx="11.2"  cy="15.4" r="5.8" fill={color}/>
        <circle cx="-11.2" cy="15.4" r="5.8" fill={color}/>
        <circle cx="-18.1" cy="-5.9" r="5.8" fill={color}/>
        <circle cx="0" cy="0" r="4.2" fill={color}/>
      </g>
      <text x="400" y="852" textAnchor="middle"
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize="44" fontWeight="500" letterSpacing="5" fill={color}>ALBION LEGACY</text>
      <text x="400" y="892" textAnchor="middle"
        fontFamily="Arial,Helvetica,sans-serif"
        fontSize="22" letterSpacing="10" fill={color} opacity="0.88">HOLDINGS</text>
    </svg>
  )
}
