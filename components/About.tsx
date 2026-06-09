const whatWeDo = [
  { title: 'Venture Creation', desc: 'Forming companies from the ground up with rigorous planning and execution' },
  { title: 'Business Building', desc: 'Product development, operations, systems and governance infrastructure' },
  { title: 'Growth & Expansion', desc: 'Scaling teams, entering new markets and building capabilities' },
  { title: 'International Reach', desc: 'Strategic expansion beyond domestic markets where appropriate' },
]

const pillars = [
  { title: 'Operating Companies', focus: 'Primary Focus', desc: 'UK and international operating businesses with strong fundamentals and growth potential' },
  { title: 'Financial Investments', focus: 'Strategic Allocation', desc: 'Selected public markets exposure for diversification and liquidity management' },
  { title: 'Property & Real Assets', focus: 'Long-Term Holdings', desc: 'Real estate and tangible assets that support portfolio resilience' },
]

const icons = [
  <svg key={0} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4-4-4 4-4z"/></svg>,
  <svg key={1} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  <svg key={2} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  <svg key={3} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
]

function SectionLabel({ text, light }: { text: string; light?: boolean }) {
  return (
    <p style={{
      fontFamily: "'Jost', system-ui, sans-serif",
      fontSize: '10px', fontWeight: 600,
      letterSpacing: '0.3em', textTransform: 'uppercase',
      color: light ? '#888888' : '#888888',
      marginBottom: '20px',
    }}>{text}</p>
  )
}

function SectionTitle({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: 'clamp(38px, 5vw, 60px)',
      fontWeight: 600, lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: light ? '#ffffff' : '#0a0a0a',
      marginBottom: '28px',
    }}>{children}</h2>
  )
}

const pad = 'clamp(72px, 10vw, 120px) clamp(32px, 8vw, 120px)'

export default function About() {
  return (
    <>
      {/* ── ABOUT — BLANCO ── */}
      <section id="about" className="section" style={{ padding: pad, background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel text="About" />
          <SectionTitle>Built to Build<br /><em style={{ fontStyle: 'italic' }}>Enduring Businesses</em></SectionTitle>
          <div style={{ width: '48px', height: '2px', background: '#0a0a0a', marginBottom: '36px', opacity: 0.3 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '17px', fontWeight: 300, lineHeight: 1.85, color: '#4a4a4a' }}>
              Albion Legacy Holdings is a UK-based, privately held, family-owned holding company established to consolidate and grow long-term ownership across operating businesses and complementary assets.
            </p>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '17px', fontWeight: 300, lineHeight: 1.85, color: '#4a4a4a' }}>
              Our strategy is centred on company creation and expansion — with an active approach to governance, capital discipline and execution.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — NEGRO ── */}
      <section className="section" style={{ padding: pad, background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel text="What We Do" light />
          <SectionTitle light>Company Creation<br /><em style={{ fontStyle: 'italic' }}>&amp; Expansion</em></SectionTitle>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: '56px', maxWidth: '640px' }}>
            Our primary focus is the creation of operating companies and the long-term expansion of businesses with strong fundamentals.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', background: 'rgba(255,255,255,0.06)' }}>
            {whatWeDo.map((item, i) => (
              <div key={i} style={{ padding: '48px 36px', background: '#0a0a0a' }}>
                <div style={{ color: '#C9A96E', marginBottom: '24px' }}>{icons[i]}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '24px', fontWeight: 600, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR MODEL — GRIS CLARO ── */}
      <section className="section" style={{ padding: pad, background: '#f4f4f2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel text="Our Model" />
          <SectionTitle>Principal Capital<br /><em style={{ fontStyle: 'italic' }}>Long-Term Ownership</em></SectionTitle>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: '#666', marginBottom: '56px', maxWidth: '600px' }}>
            We operate as a holding company with a long-term horizon and a disciplined approach to ownership across three core pillars.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ background: '#ffffff', padding: '48px 40px', borderTop: '3px solid #0a0a0a' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', fontWeight: 600, color: '#0a0a0a', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontFamily: "'Jost', system-ui, sans-serif", fontSize: '10px', fontWeight: 600, color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '18px' }}>{p.focus}</p>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: '#666' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
