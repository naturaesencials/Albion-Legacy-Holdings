'use client'

const ventures = [
  {
    category: 'Digital Ecosystem',
    name: 'Albion Wealth App',
    description: 'Multi-country personal wealth management platform. Built for the sophisticated investor who lives and operates across borders.',
    url: 'https://albionwealth.app',
    tag: 'SaaS · Fintech',
  },
  {
    category: 'Digital Ecosystem',
    name: 'Albion Business Hub',
    description: 'Central operating hub for the Albion digital ecosystem. Precision tooling for complex multi-entity structures.',
    url: 'https://albionbusinesshub.app',
    tag: 'SaaS · Operations',
  },
  {
    category: 'Consumer Brand',
    name: 'Natura Esencials',
    description: 'Artisanal natural cosmetics, home care, and pet care. ISO 16128-certified. Active in EU and UK markets.',
    url: 'https://naturaesencials.com',
    tag: 'Consumer · FMCG',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" style={{
      padding: 'clamp(80px, 10vw, 130px) clamp(32px, 8vw, 120px)',
      background: '#0a0a0a',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '64px',
        }}>
          <div>
            <p style={{
              fontFamily: "'Jost', system-ui, sans-serif",
              fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#C9A96E', marginBottom: '20px',
            }}>Portfolio</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(38px, 5vw, 60px)',
              fontWeight: 600, lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#ffffff',
            }}>
              Operating Ventures
            </h2>
          </div>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '14px', fontWeight: 300,
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '320px', lineHeight: 1.7,
          }}>
            Businesses held and governed directly by Albion Legacy Holdings.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
        }}>
          {ventures.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '44px 40px',
                background: '#0a0a0a',
                textDecoration: 'none',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#111111')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0a')}
            >
              <p style={{
                fontFamily: "'Jost', system-ui, sans-serif",
                fontSize: '9px', fontWeight: 500,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: '#555555', marginBottom: '20px',
              }}>{v.category}</p>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '28px', fontWeight: 600,
                color: '#ffffff', marginBottom: '16px',
                lineHeight: 1.15, letterSpacing: '-0.01em',
              }}>{v.name}</h3>

              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '13px', fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '36px',
              }}>{v.description}</p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                paddingTop: '20px',
              }}>
                <span style={{
                  fontFamily: "'Jost', system-ui, sans-serif",
                  fontSize: '9px', fontWeight: 500,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#C9A96E',
                }}>{v.tag}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(255,255,255,0.2)" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
