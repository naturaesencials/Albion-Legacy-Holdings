'use client'

export default function Contact() {
  return (
    <>
      {/* Contact */}
      <section
        id="contact"
        className="section"
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
          background: 'rgba(12,16,32,0.5)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'Jost, system-ui, sans-serif',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9A96E',
              marginBottom: '24px',
            }}
          >
            Contact
          </p>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#F0EDE8',
              letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}
          >
            Selective Engagement,
            <br />
            <em style={{ fontStyle: 'italic' }}>Meaningful Conversations</em>
          </h2>

          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#8A8A9A',
              marginBottom: '48px',
            }}
          >
            We do not respond to unsolicited proposals. Correspondence is reserved
            for parties with a genuine, substantive reason to connect.
          </p>

          <a
            href="mailto:hello@albionlegacy.com"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              border: '1px solid rgba(201,169,110,0.4)',
              fontFamily: 'Jost, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A96E',
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(201,169,110,0.08)'
              el.style.borderColor = 'rgba(201,169,110,0.7)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.borderColor = 'rgba(201,169,110,0.4)'
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="section"
        style={{
          padding: '40px clamp(24px, 8vw, 120px)',
          borderTop: '1px solid rgba(240,237,232,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <p
          style={{
            fontFamily: 'Jost, system-ui, sans-serif',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.14em',
            color: '#8A8A9A',
          }}
        >
          © {new Date().getFullYear()} Albion Legacy Holdings Ltd · 66 Paul Street, London EC2A 4NA
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
              style={{
                fontFamily: 'Jost, system-ui, sans-serif',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                color: '#8A8A9A',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A9A')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
