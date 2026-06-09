export default function About() {
  return (
    <section id="about" className="section" style={{
      padding: 'clamp(80px, 10vw, 130px) clamp(32px, 8vw, 120px)',
      background: '#ffffff',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          fontFamily: "'Jost', system-ui, sans-serif",
          fontSize: '10px', fontWeight: 600,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#888888', marginBottom: '20px',
        }}>About</p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(38px, 5vw, 60px)',
          fontWeight: 600, lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: '#0a0a0a', marginBottom: '48px',
        }}>
          Built on Conviction.<br />
          <em style={{ fontStyle: 'italic' }}>Governed with Discipline.</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
        }}>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '17px', fontWeight: 300,
            lineHeight: 1.9, color: '#4a4a4a',
          }}>
            Albion Legacy Holdings is a UK-incorporated, privately held holding company
            building long-term value through disciplined ownership. Its capital is its own.
            Its decisions are taken with a long horizon and without the pressure of
            external mandates. Every business within the portfolio is governed directly —
            built from the ground up or expanded with operational rigour applied at every level.
          </p>

          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '17px', fontWeight: 300,
            lineHeight: 1.9, color: '#4a4a4a',
          }}>
            The holding draws on decades of direct experience building and restructuring
            businesses across jurisdictions — from inception to scale, from strategy
            to execution. That experience is not advisory. It is the operating foundation
            of everything Albion owns.
          </p>
        </div>

        <div style={{
          marginTop: '56px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
        }}>
          {[
            { value: 'London', label: 'Registered & Governed' },
            { value: 'Multi-jurisdiction', label: 'Operating Reach' },
            { value: 'Principal Capital', label: 'No External Mandates' },
          ].map((item, i) => (
            <div key={i}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '22px', fontWeight: 600,
                color: '#0a0a0a', marginBottom: '6px',
                letterSpacing: '0.01em',
              }}>{item.value}</p>
              <p style={{
                fontFamily: "'Jost', system-ui, sans-serif",
                fontSize: '10px', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#888888',
              }}>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
