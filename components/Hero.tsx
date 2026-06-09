import AlbionLogo from './AlbionLogo'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #1a1a1a 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Main hero content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 14vw, 160px) clamp(24px, 8vw, 80px) 80px',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        gap: '80px',
      }}
      className="hero-inner"
      >
        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '320px' }} className="hero-text">
          <p style={{
            fontFamily: 'Jost, system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '28px',
          }}>
            Private Capital
          </p>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(44px, 6vw, 76px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '32px',
          }}>
            Building Legacy<br />Through Vision
          </h1>

          <div style={{
            width: '80px',
            height: '3px',
            background: '#ffffff',
            marginBottom: '32px',
          }} />

          <p style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#cccccc',
            maxWidth: '560px',
            marginBottom: '48px',
          }}>
            A private, family-owned investment holding company deploying long-term capital to create, build and expand exceptional companies.
          </p>

          <a
            href="#about"
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
              padding: '18px 36px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            Explore Our Approach
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Right — logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }} className="hero-logo">
          <AlbionLogo size={220} color="#ffffff" />
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '40px clamp(24px, 8vw, 80px)',
        background: 'rgba(0,0,0,0.3)',
      }}>
        <div style={{
          display: 'flex',
          gap: '0',
          maxWidth: '1400px',
          margin: '0 auto',
          flexWrap: 'wrap',
        }}>
          {[
            { value: "UK + Int'l", label: 'Geographic Reach' },
            { value: 'Long-Term', label: 'Capital Horizon' },
            { value: 'Private', label: 'Family Ownership' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1,
              minWidth: '160px',
              textAlign: 'center',
              padding: '16px 24px',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <p style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '26px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                marginBottom: '8px',
              }}>{stat.value}</p>
              <p style={{
                fontFamily: 'Jost, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#666666',
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; gap: 48px !important; padding-top: 120px !important; }
          .hero-logo { display: none !important; }
        }
      `}</style>
    </section>
  )
}
