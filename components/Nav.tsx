'use client'
import { useState, useEffect } from 'react'

function LogoHorizontal({ color = '#ffffff', width = 280 }: { color?: string; width?: number }) {
  const height = width * (220 / 900)
  return (
    <svg width={width} height={height} viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(110, 110) scale(0.38)">
        <path d="M0 -80 C70 -80 115 -52 135 -42 L135 62 C135 135 75 185 0 220 C-75 185 -135 135 -135 62 L-135 -42 C-115 -52 -70 -80 0 -80 Z"
          fill="none" stroke={color} strokeWidth="18" strokeLinejoin="round" />
        <rect x="-62.5" y="12" width="27.5" height="102.5" fill={color} />
        <rect x="-13.75" y="-5.5" width="27.5" height="120" fill={color} />
        <rect x="35" y="12" width="27.5" height="102.5" fill={color} />
        <rect x="-72.5" y="122" width="145" height="11" fill={color} />
        <g transform="translate(0, 220)">
          <circle cx="0" cy="0" r="8.75" fill="transparent" stroke={color} strokeWidth="1.1" />
          <g opacity="0.3">
            <line x1="0" y1="-11.5" x2="0" y2="11.5" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
            <line x1="-11.5" y1="0" x2="11.5" y2="0" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          </g>
          <line x1="0" y1="-11.5" x2="0" y2="11.5" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
          <line x1="-11.5" y1="0" x2="11.5" y2="0" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
          <g opacity="0.95">
            <circle cx="0" cy="0" r="2.7" fill="none" stroke={color} strokeWidth="0.8" />
            <circle cx="0" cy="-3.5" r="1.1" fill={color} />
            <circle cx="3.15" cy="-1" r="1.1" fill={color} />
            <circle cx="1.95" cy="2.9" r="1.1" fill={color} />
            <circle cx="-1.95" cy="2.9" r="1.1" fill={color} />
            <circle cx="-3.15" cy="-1" r="1.1" fill={color} />
          </g>
        </g>
      </g>
      <g transform="translate(220, 0)">
        <text x="0" y="115" fontFamily="Georgia, 'Times New Roman', serif" fontSize="52" fontWeight="500" letterSpacing="7" fill={color}>ALBION LEGACY</text>
        <text x="2" y="148" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" letterSpacing="11" fill={color} opacity="0.92">HOLDINGS</text>
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
