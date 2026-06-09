'use client'

const ventures = [
  {
    category: 'Digital Ecosystem',
    name: 'Albion Wealth App',
    description:
      'Multi-country personal wealth management platform. Supports all EU markets, UK, and USA. Built for the sophisticated user who lives and invests across borders.',
    url: 'https://albionwealth.app',
    tag: 'SaaS · Fintech',
    status: 'Live',
  },
  {
    category: 'Digital Ecosystem',
    name: 'Albion Business Hub',
    description:
      'Central hub connecting all Albion business tools. Designed for operators managing complex multi-entity structures with precision and clarity.',
    url: 'https://albionbusinesshub.app',
    tag: 'SaaS · Operations',
    status: 'Live',
  },
  {
    category: 'Digital Ecosystem',
    name: 'Albion Assistant',
    description:
      'AI-powered administrative assistant automating operational tasks across all entities within the holding.',
    url: '#',
    tag: 'AI · Automation',
    status: 'In Development',
  },
  {
    category: 'Consumer Brand',
    name: 'Natura Esencials',
    description:
      'Artisanal natural cosmetics, home care, and pet care brand. ISO 16128-certified. Operating across the EU and UK markets.',
    url: 'https://naturaesencials.com',
    tag: 'Consumer · FMCG',
    status: 'Live',
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section"
      style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
        background: 'rgba(12,16,32,0.5)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <p
            style={{
              fontFamily: 'Jost, system-ui, sans-serif',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9A96E',
              marginBottom: '20px',
            }}
          >
            Portfolio
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#F0EDE8',
                letterSpacing: '-0.01em',
              }}
            >
              Our Ventures
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 300,
                color: '#8A8A9A',
                maxWidth: '360px',
                lineHeight: 1.6,
              }}
            >
              Operating businesses and digital ventures held and governed
              directly by Albion Legacy Holdings.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(240,237,232,0.06)',
          }}
        >
          {ventures.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target={v.url !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '40px 36px',
                background: '#08090E',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
                cursor: v.url === '#' ? 'default' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (v.url !== '#') (e.currentTarget as HTMLElement).style.background = '#0C1020'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#08090E'
              }}
            >
              {/* Category */}
              <p
                style={{
                  fontFamily: 'Jost, system-ui, sans-serif',
                  fontSize: '9px',
                  fontWeight: 400,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#8A8A9A',
                  marginBottom: '20px',
                }}
              >
                {v.category}
              </p>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '26px',
                  fontWeight: 400,
                  color: '#F0EDE8',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                {v.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(240,237,232,0.55)',
                  marginBottom: '32px',
                }}
              >
                {v.description}
              </p>

              {/* Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Jost, system-ui, sans-serif',
                    fontSize: '9px',
                    fontWeight: 400,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#C9A96E',
                  }}
                >
                  {v.tag}
                </span>
                <span
                  style={{
                    fontFamily: 'Jost, system-ui, sans-serif',
                    fontSize: '9px',
                    fontWeight: 400,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: v.status === 'Live' ? 'rgba(201,169,110,0.6)' : '#8A8A9A',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: v.status === 'Live' ? '#C9A96E' : '#8A8A9A',
                      opacity: v.status === 'Live' ? 1 : 0.4,
                    }}
                  />
                  {v.status}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
