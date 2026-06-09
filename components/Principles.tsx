const principles = [
  { index: '01', title: 'Long-Term Orientation', text: 'We prioritise durable value creation over short-term outcomes, building businesses designed to last decades.' },
  { index: '02', title: 'Governance & Continuity', text: 'We structure for clarity, oversight and consistent decision-making across all portfolio holdings.' },
  { index: '03', title: 'Execution-Led Building', text: 'We focus on fundamentals: strong operations, cash discipline and scalable business models.' },
  { index: '04', title: 'Discretion & Integrity', text: 'We operate with confidentiality and professional standards in every business relationship.' },
]

export default function Principles() {
  return (
    <section id="principles" className="section" style={{
      padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px)',
      background: '#f8f8f8',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '20px' }}>
          How We Think
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#0a0a0a', letterSpacing: '-0.04em', marginBottom: '56px' }}>
          Discipline, Governance<br />&amp; Value Creation
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {principles.map((p) => (
            <div key={p.index} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '40px',
              padding: '48px 0',
              borderBottom: '2px solid #dddddd',
              alignItems: 'start',
            }}>
              <div style={{
                width: '60px', height: '60px',
                background: '#0a0a0a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '18px', fontWeight: 700, color: '#ffffff', letterSpacing: '0.06em' }}>{p.index}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.3px', marginBottom: '16px' }}>{p.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '17px', fontWeight: 400, lineHeight: 1.75, color: '#4a4a4a' }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
