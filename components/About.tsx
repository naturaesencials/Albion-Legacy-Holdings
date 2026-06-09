export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left — label + title */}
        <div>
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
            About
          </p>
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
            Built to Build
            <br />
            <em style={{ fontStyle: 'italic' }}>Enduring Businesses</em>
          </h2>

          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'rgba(201,169,110,0.5)',
              marginTop: '40px',
            }}
          />
        </div>

        {/* Right — text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(240,237,232,0.75)',
              letterSpacing: '0.01em',
            }}
          >
            Albion Legacy Holdings is a UK-incorporated, privately held, family-owned holding
            company established to consolidate and grow long-term ownership across operating
            businesses, digital ventures, and complementary strategic assets.
          </p>

          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(240,237,232,0.75)',
              letterSpacing: '0.01em',
            }}
          >
            Our approach is active, not passive. We create, build, and govern the businesses
            within our portfolio directly — applying long-term capital discipline, operational
            rigour, and strategic clarity to everything we own.
          </p>

          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(240,237,232,0.75)',
              letterSpacing: '0.01em',
            }}
          >
            Registered in London. Operating internationally.
          </p>

          {/* Notice */}
          <div
            style={{
              marginTop: '16px',
              padding: '20px 24px',
              borderLeft: '2px solid rgba(201,169,110,0.3)',
              background: 'rgba(201,169,110,0.04)',
            }}
          >
            <p
              style={{
                fontFamily: 'Jost, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: '#8A8A9A',
                lineHeight: 1.6,
              }}
            >
              Albion Legacy Holdings is a private, family-owned company investing its own capital.
              It does not seek public investment and does not offer financial products or services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
