'use client'

export default function Contact() {
  return (
    <>
      {/* Important Notice — mismo tono sobrio que el resto */}
      <div style={{
        padding: 'clamp(48px, 6vw, 72px) clamp(32px, 8vw, 120px)',
        background: '#ffffff',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Jost', system-ui, sans-serif",
            fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#888888', marginBottom: '16px',
          }}>Notice</p>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '15px', fontWeight: 300,
            lineHeight: 1.8, color: '#666666',
            maxWidth: '760px',
          }}>
            Albion Legacy Holdings is a private, family-owned holding company investing
            its own capital. We do not offer investment services and we do not solicit
            or accept third-party capital.
          </p>
        </div>
      </div>

      {/* Contact */}
      <section id="contact" className="section" style={{
        padding: 'clamp(80px, 12vw, 140px) clamp(32px, 8vw, 120px)',
        background: '#0a0a0a',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Jost', system-ui, sans-serif",
            fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#C9A96E', marginBottom: '24px',
          }}>Contact</p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 600, lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#ffffff', marginBottom: '24px',
          }}>
            Selective Engagement.<br />
            <em style={{ fontStyle: 'italic' }}>Substantive Conversations.</em>
          </h2>

          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '15px', fontWeight: 300,
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '52px',
          }}>
            For corporate matters and strategic introductions only.
            Correspondence is reserved for parties with a genuine reason to connect.
          </p>

          <a
            href="mailto:contact@albionlegacy.com"
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{
        padding: '40px clamp(32px, 8vw, 120px)',
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <p style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '12px', fontWeight: 300,
          color: '#888888', letterSpacing: '0.03em',
        }}>
          © {new Date().getFullYear()} Albion Legacy Holdings Ltd · 71-75 Shelton Street, Covent Garden, London WC2H 9JQ
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://www.linkedin.com/company/albion-legacy-holdings"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Jost', system-ui, sans-serif",
              fontSize: '11px', fontWeight: 400,
              color: '#888888', letterSpacing: '0.1em',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  )
}
