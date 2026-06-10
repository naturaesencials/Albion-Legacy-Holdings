'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('alh_cookie_consent')
      if (!accepted) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try { localStorage.setItem('alh_cookie_consent', 'accepted') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0,
      zIndex: 1000,
      background: '#0a0a0a',
      borderTop: '1px solid rgba(201,169,110,0.25)',
      padding: '20px clamp(20px,5vw,80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap',
    }}>
      <p style={{
        fontFamily: "'Inter',system-ui,sans-serif",
        fontSize: '13px',
        fontWeight: 300,
        lineHeight: 1.65,
        color: 'rgba(255,255,255,0.6)',
        maxWidth: '680px',
        margin: 0,
      }}>
        This website uses only strictly necessary cookies to function. No tracking, no analytics, no third-party cookies.{' '}
        <a href="/cookies" style={{ color: 'rgba(201,169,110,0.8)', textDecoration: 'underline' }}>Cookie Policy</a>
        {' '}·{' '}
        <a href="/privacy" style={{ color: 'rgba(201,169,110,0.8)', textDecoration: 'underline' }}>Privacy Policy</a>
      </p>

      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            background: '#ffffff',
            color: '#0a0a0a',
            border: 'none',
            fontFamily: "'Jost',system-ui,sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '12px 28px',
            cursor: 'pointer',
          }}
        >
          Accept
        </button>
        <a
          href="/cookies"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: "'Jost',system-ui,sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none',
            padding: '12px 4px',
          }}
        >
          Learn more
        </a>
      </div>
    </div>
  )
}
