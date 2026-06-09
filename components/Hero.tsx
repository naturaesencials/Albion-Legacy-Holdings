import AlbionLogo from './AlbionLogo'

export default function Hero() {
  return (
    <section id="hero" className="section" style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold radial glow — más pronunciado */}
      <div style={{
        position: 'absolute',
        top: '35%', left: '60%',
        transform: 'translate(-50%, -50%)',
        width: '900px', height: '700px',
        background: 'radial-gradient(ellipse, rgba(201,169,110,0.09) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />



      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(100px, 12vw, 140px) clamp(60px, 10vw, 140px) 60px clamp(80px, 12vw, 160px)',
        maxWidth: '1600px',
        margin: '0 auto',
        width: '100%',
        gap: '60px',
      }} className="hero-inner">

        {/* Izquierda — texto */}
        <div style={{ flex: '1 1 500px' }} className="fade-up-1">
          <p style={{
            fontFamily: "'Jost', system-ui, sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            marginBottom: '32px',
          }}>
            London · Private Capital
          </p>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(52px, 7vw, 96px)',
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '36px',
          }}>
            Building Legacy<br />
            <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Through Vision</em>
          </h1>

          <div style={{ width: '64px', height: '2px', background: '#C9A96E', marginBottom: '36px', opacity: 0.7 }} />

          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 'clamp(15px, 1.4vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '480px',
            marginBottom: '52px',
            letterSpacing: '0.01em',
          }}>
            Capital with conviction. Legacy by design. A privately held UK holding company — building, owning and governing businesses for the long term, on our own terms.
          </p>

          <a href="#about" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            background: '#ffffff',
            color: '#0a0a0a',
            fontFamily: "'Jost', system-ui, sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '18px 40px',
            textDecoration: 'none',
          }}>
            Enter
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Derecha — logo grande */}
        <div style={{
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} className="hero-logo fade-up-2">
          <AlbionLogo size={400} color="#ffffff" />
        </div>
      </div>

      {/* Stats bar — blanco con borde dorado, transición limpia al About */}
      <div style={{ background: '#ffffff', borderTop: '3px solid #C9A96E' }}>
        <div style={{
          display: 'flex',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 clamp(60px, 10vw, 140px)',
        }} className="stats-bar">
          {[
            { value: "UK + Int'l", label: 'Geographic Reach' },
            { value: 'Long-Term', label: 'Capital Horizon' },
            { value: 'Private', label: 'Family Ownership' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1,
              padding: '36px 24px',
              textAlign: 'center',
              borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '28px',
                fontWeight: 600,
                color: '#0a0a0a',
                marginBottom: '6px',
                letterSpacing: '0.02em',
              }}>{stat.value}</p>
              <p style={{
                fontFamily: "'Jost', system-ui, sans-serif",
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#888888',
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { flex-direction: column !important; padding: 120px 32px 48px !important; gap: 48px !important; }
          .hero-logo { order: -1; }
          .hero-logo svg { width: 200px !important; height: auto !important; }
          .stats-bar { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
