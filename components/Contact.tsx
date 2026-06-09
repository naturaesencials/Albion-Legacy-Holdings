'use client'

export default function Contact() {
  return (
    <>
      {/* Important Notice */}
      <div style={{
        padding: 'clamp(48px, 6vw, 80px) clamp(24px, 8vw, 80px)',
        background: '#fffbf0',
        borderTop: '4px solid #d4a574',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '11px', fontWeight: 700, color: '#b8894f', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Important Notice
          </p>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: 500, lineHeight: 1.75, color: '#5a4a2a', maxWidth: '860px' }}>
            Albion Legacy Holdings is a private, family-owned holding company investing its own capital. We do not offer investment services and we do not solicit or accept third-party capital into Albion Legacy Holdings.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <section id="contact" className="section" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 80px)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Contact
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#ffffff', letterSpacing: '-0.04em', marginBottom: '24px' }}>
            Corporate Contact
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: 1.8, color: '#aaaaaa', marginBottom: '48px' }}>
            For corporate matters, strategic introductions or portfolio-related enquiries, please reach out directly.
          </p>
          <a
            href="mailto:hello@albionlegacy.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#ffffff',
              color: '#0a0a0a',
              fontFamily: 'Jost, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              padding: '18px 40px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f0ede8')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#ffffff')}
          >
            Get In Touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{
        padding: '48px clamp(24px, 8vw, 80px)',
        background: '#0a0a0a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 400, color: '#666666', letterSpacing: '0.03em' }}>
          © {new Date().getFullYear()} Albion Legacy Holdings. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Albion Wealth', href: 'https://albionwealth.app' },
            { label: 'Business Hub', href: 'https://albionbusinesshub.app' },
            { label: 'Natura Esencials', href: 'https://naturaesencials.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '12px', fontWeight: 400, color: '#666666', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666666')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
