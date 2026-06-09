const principles = [
  {
    index: '01',
    title: 'Permanent Capital',
    text: 'No fund cycles. No external redemptions. Capital is allocated with a horizon measured in decades, not quarters — which changes every decision made.',
  },
  {
    index: '02',
    title: 'Direct Governance',
    text: 'Every holding is governed hands-on. Strategy, operations, and people — managed with the same standards applied across every jurisdiction we operate in.',
  },
  {
    index: '03',
    title: 'Earned Confidence',
    text: 'Credibility is built through execution, not communication. We say less and deliver more — and expect the same from every business we own.',
  },
  {
    index: '04',
    title: 'Absolute Discretion',
    text: 'We do not seek visibility. Our relationships, positions, and decisions remain private. This is not a limitation — it is a deliberate advantage.',
  },
]

export default function Principles() {
  return (
    <section id="principles" className="section" style={{
      padding: 'clamp(80px, 10vw, 130px) clamp(32px, 8vw, 120px)',
      background: '#f4f4f2',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          fontFamily: "'Jost', system-ui, sans-serif",
          fontSize: '10px', fontWeight: 600,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#888888', marginBottom: '20px',
        }}>How We Operate</p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(38px, 5vw, 60px)',
          fontWeight: 600, lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: '#0a0a0a', marginBottom: '72px',
        }}>
          Four Principles.<br />
          <em style={{ fontStyle: 'italic' }}>No Exceptions.</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '48px 64px',
        }}>
          {principles.map((p) => (
            <div key={p.index}>
              <div style={{
                width: '48px', height: '48px',
                background: '#0a0a0a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '18px', fontWeight: 600,
                  color: '#ffffff', letterSpacing: '0.05em',
                }}>{p.index}</span>
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '24px', fontWeight: 600,
                color: '#0a0a0a', marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}>{p.title}</h3>
              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '14px', fontWeight: 300,
                lineHeight: 1.85, color: '#666666',
              }}>{p.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
