'use client'

export default function Contact() {
  return (
    <>
      {/* ── NOTICE — CREMA DORADO ── */}
      <div style={{
        padding: 'clamp(48px, 6vw, 72px) clamp(32px, 8vw, 120px)',
        background: '#fffbf0',
        borderTop: '3px solid #C9A96E',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0, marginTop: '4px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: "'Jost', system-ui, sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '10px' }}>
              Important Notice
            </p>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: 400, lineHeight: 1.75, color: '#5a4a2a', maxWidth: '760px' }}>
              Albion Legacy Holdings is a private, family-owned holding company investing its own capital. We do not offer investment services and we do not solicit or accept third-party capital into Albion Legacy Holdings.
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTACT CTA — NEGRO ── */}
      <section id="contact" className="section" style={{
        padding: 'clamp(80px, 12vw, 140px) clamp(32px, 8vw, 120px)',
        background: '#0a0a0a',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', system-ui, sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '24px' }}>
            Contact
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#ffffff', marginBottom: '24px' }}>
            Corporate Contact
          </h2>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.5)', marginBottom: '52px' }}>
            For corporate matters, strategic introductions or portfolio-related enquiries, please reach out directly.
          </p>
          <a
            href="mailto:hello@albionlegacy.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '14px',
              background: '#ffffff', color: '#0a0a0a',
              fontFamily: "'Jost', system-ui, sans-serif",
              fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '20px 48px', textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f0ede8')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#ffffff')}
          >
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="section" style={{
        padding: '40px clamp(32px, 8vw, 120px)',
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: 300, color: '#555555', letterSpacing: '0.03em' }}>
          © {new Date().getFullYear()} Albion Legacy Holdings Ltd · 66 Paul Street, London EC2A 4NA
        </p>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Albion Wealth', href: 'https://albionwealth.app' },
            { label: 'Business Hub', href: 'https://albionbusinesshub.app' },
            { label: 'Natura Esencials', href: 'https://naturaesencials.com' },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Jost', system-ui, sans-serif", fontSize: '11px', fontWeight: 400, color: '#555555', textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555555')}
            >{link.label}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
