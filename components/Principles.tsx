const principles = [
  {
    index: '01',
    title: 'Long-Term Orientation',
    body:
      'We measure success in decades, not quarters. Every capital allocation decision is made with the intent to create durable, compounding value — not to optimise for short-term appearance.',
  },
  {
    index: '02',
    title: 'Governance & Continuity',
    body:
      'We structure every holding for clarity of ownership, accountability, and consistent decision-making. Governance is not overhead — it is what allows businesses to grow without losing their identity.',
  },
  {
    index: '03',
    title: 'Execution-Led Building',
    body:
      'We do not invest passively and wait. We build actively: designing systems, deploying teams, and applying direct operational expertise to create businesses that perform.',
  },
  {
    index: '04',
    title: 'Discretion & Integrity',
    body:
      'We operate quietly. We do not seek public attention for its own sake, and we hold ourselves to a standard of professional conduct that needs no announcement.',
  },
]

export default function Principles() {
  return (
    <section
      id="principles"
      className="section"
      style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
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
          How We Think
        </p>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#F0EDE8',
            letterSpacing: '-0.01em',
            maxWidth: '600px',
          }}
        >
          Discipline, Governance
          <br />
          <em style={{ fontStyle: 'italic' }}>&amp; Value Creation</em>
        </h2>
      </div>

      {/* Principles grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '48px',
        }}
      >
        {principles.map((p) => (
          <div key={p.index}>
            {/* Index */}
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                color: 'rgba(201,169,110,0.4)',
                marginBottom: '20px',
              }}
            >
              {p.index}
            </p>

            {/* Gold rule */}
            <div
              style={{
                width: '32px',
                height: '1px',
                background: 'rgba(201,169,110,0.3)',
                marginBottom: '20px',
              }}
            />

            {/* Title */}
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '22px',
                fontWeight: 400,
                color: '#F0EDE8',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {p.title}
            </h3>

            {/* Body */}
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(240,237,232,0.55)',
              }}
            >
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
