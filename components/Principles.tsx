const principles = [
  { index: '01', title: 'Long-Term Orientation', text: 'We prioritise durable value creation over short-term outcomes, building businesses designed to last decades.' },
  { index: '02', title: 'Governance & Continuity', text: 'We structure for clarity, oversight and consistent decision-making across all portfolio holdings.' },
  { index: '03', title: 'Execution-Led Building', text: 'We focus on fundamentals: strong operations, cash discipline and scalable business models.' },
  { index: '04', title: 'Discretion & Integrity', text: 'We operate with confidentiality and professional standards in every business relationship.' },
]

export default function Principles() {
  return (
    <section id="principles" className="section" style={{
      padding: 'clamp(72px, 10vw, 120px) clamp(32px, 8vw, 120px)',
      background: '#ffffff',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontFamily: "'Jost', system-ui, sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888888', marginBottom: '20px' }}>
          How We Think
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#0a0a0a', marginBottom: '64px' }}>
          Discipline, Governance<br /><em style={{ fontStyle: 'italic' }}>&amp; Value Creation</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px 64px' }}>
          {principles.map((p) => (
            <div key={p.index}>
              <div style={{
                width: '56px', height: '56px',
                background: '#0a0a0a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '28px',
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>{p.index}</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px', letterSpacing: '-0.01em' }}>{p.title}</h3>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 300, lineHeight: 1.8, color: '#666666' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
