export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Eyebrow */}
      <p
        className="animate-fade-up animate-delay-1"
        style={{
          fontFamily: 'Jost, system-ui, sans-serif',
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#C9A96E',
          marginBottom: '32px',
        }}
      >
        London · Est. 2024 · Private Capital
      </p>

      {/* Main headline */}
      <h1
        className="animate-fade-up animate-delay-2"
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          color: '#F0EDE8',
          maxWidth: '900px',
          marginBottom: '32px',
        }}
      >
        Building Legacy
        <br />
        <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Through Vision</em>
      </h1>

      {/* Sub */}
      <p
        className="animate-fade-up animate-delay-3"
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '15px',
          fontWeight: 300,
          lineHeight: 1.7,
          color: '#8A8A9A',
          maxWidth: '480px',
          marginBottom: '64px',
          letterSpacing: '0.02em',
        }}
      >
        A privately held UK holding company deploying long-term capital
        to create, build, and expand exceptional businesses.
      </p>

      {/* Divider + stats */}
      <div
        className="animate-fade-up animate-delay-4"
        style={{
          display: 'flex',
          gap: '64px',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {[
          { value: 'UK', label: 'Incorporated' },
          { value: 'Int\'l', label: 'Reach' },
          { value: 'Long-Term', label: 'Capital Horizon' },
          { value: 'Private', label: 'Ownership' },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '22px',
                fontWeight: 400,
                color: '#F0EDE8',
                letterSpacing: '0.04em',
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontFamily: 'Jost, system-ui, sans-serif',
                fontSize: '9px',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8A8A9A',
                marginTop: '4px',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)',
          }}
        />
      </div>
    </section>
  )
}
