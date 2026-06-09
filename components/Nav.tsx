'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '24px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s ease, padding 0.4s ease',
        background: scrolled ? 'rgba(8,9,14,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : 'none',
      }}
    >
      {/* Wordmark */}
      <a
        href="/"
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '18px',
          fontWeight: 400,
          letterSpacing: '0.12em',
          color: '#F0EDE8',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}
      >
        Albion Legacy
      </a>

      {/* Nav links — desktop */}
      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
        }}
        className="hidden md:flex"
      >
        {['About', 'Portfolio', 'Principles', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: 'Jost, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8A8A9A',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A9A')}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
