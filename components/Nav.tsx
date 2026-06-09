'use client'
import { useState, useEffect } from 'react'

function LogoHorizontal({ color = '#ffffff', width = 240 }: { color?: string; width?: number }) {
  const height = width * (200 / 900)
  const bg = color === '#0a0a0a' ? '#ffffff' : '#0a0a0a'
  return (
    <svg width={width} height={height} viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(90, 0)">
        <path d="M0 8 C46 8 72 26 82 34 L82 106 C82 146 50 164 0 172 C-50 164 -82 146 -82 106 L-82 34 C-72 26 -46 8 0 8 Z"
          fill="none" stroke={color} strokeWidth="5.5" strokeLinejoin="round"/>
        <rect x="-38" y="58" width="17" height="68" fill={color}/>
        <rect x="-8.5" y="46" width="17" height="80" fill={color}/>
        <rect x="21" y="58" width="17" height="68" fill={color}/>
        <rect x="-45" y="130" width="90" height="7" fill={color}/>
        <g transform="translate(0, 172)">
          <circle cx="0" cy="0" r="20" fill={bg} stroke={color} strokeWidth="1.8"/>
          <g opacity="0.18">
            <line x1="0" y1="-27" x2="0" y2="27" stroke={color} strokeWidth="7" strokeLinecap="round"/>
            <line x1="-27" y1="0" x2="27" y2="0" stroke={color} strokeWidth="7" strokeLinecap="round"/>
          </g>
          <line x1="0" y1="-27" x2="0" y2="27" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="-27" y1="0" x2="27" y2="0" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="0" cy="0" r="6" fill="none" stroke={color} strokeWidth="1.3"/>
          <circle cx="0"    cy="-8.8" r="2.7" fill={color}/>
          <circle cx="8.4"  cy="-2.7" r="2.7" fill={color}/>
          <circle cx="5.2"  cy="7.1"  r="2.7" fill={color}/>
          <circle cx="-5.2" cy="7.1"  r="2.7" fill={color}/>
          <circle cx="-8.4" cy="-2.7" r="2.7" fill={color}/>
          <circle cx="0" cy="0" r="1.9" fill={color}/>
        </g>
      </g>
      <g transform="translate(196, 0)">
        <text x="0" y="100" fontFamily="Georgia,'Times New Roman',serif"
          fontSize="54" fontWeight="500" letterSpacing="6" fill={color}>ALBION LEGACY</text>
        <text x="2" y="136" fontFamily="Arial,Helvetica,sans-serif"
          fontSize="21" letterSpacing="11.5" fill={color} opacity="0.85">HOLDINGS</text>
      </g>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(20px, 4vw, 48px)',
      transition: 'background 0.4s ease',
      background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
    }}>
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <LogoHorizontal color="#ffffff" width={200} />
      </a>

      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-desktop">
        {['About', 'Principles', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: 'Jost, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#888888',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
          >
            {item}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) { .nav-desktop { display: none !important; } }
      `}</style>
    </nav>
  )
}
