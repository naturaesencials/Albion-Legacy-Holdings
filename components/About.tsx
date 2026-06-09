export default function About() {
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

  return (
    <>
      {/* About */}
      <section id="about" className="section" style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px)',
        background: '#ffffff',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '20px' }}>About</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#0a0a0a', letterSpacing: '-0.04em' }}>
            Built to Build<br />Enduring Businesses
          </h2>
        </div>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 1.6vw, 18px)', fontWeight: 400, lineHeight: 1.8, color: '#4a4a4a', marginBottom: '24px', maxWidth: '860px' }}>
          Albion Legacy Holdings is a UK-based, privately held, family-owned holding company established to consolidate and grow long-term ownership across operating businesses and complementary assets.
        </p>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 1.6vw, 18px)', fontWeight: 400, lineHeight: 1.8, color: '#4a4a4a', maxWidth: '860px' }}>
          Our strategy is centred on company creation and expansion — with an active approach to governance, capital discipline and execution.
        </p>
      </section>

      {/* What We Do — dark */}
      <section style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px)',
        background: '#0a0a0a',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '20px' }}>What We Do</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#ffffff', letterSpacing: '-0.04em', marginBottom: '24px' }}>
            Company Creation<br />&amp; Expansion
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: 1.8, color: '#aaaaaa', marginBottom: '56px', maxWidth: '700px' }}>
            Our primary focus is the creation of operating companies and the long-term expansion of businesses with strong fundamentals.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {whatWeDo.map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '40px',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>}
                    {i === 1 && <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>}
                    {i === 2 && <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>}
                    {i === 3 && <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.3px', marginBottom: '14px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.7, color: '#aaaaaa' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px)',
        background: '#ffffff',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '20px' }}>Our Model</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#0a0a0a', letterSpacing: '-0.04em', marginBottom: '24px' }}>
            Principal Capital<br />Long-Term Ownership
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: 1.8, color: '#4a4a4a', marginBottom: '56px', maxWidth: '700px' }}>
            We operate as a holding company with a long-term horizon and a disciplined approach to ownership across three core pillars.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                background: '#f8f8f8',
                padding: '48px',
                borderLeft: '4px solid #0a0a0a',
              }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '24px', fontWeight: 700, color: '#0a0a0a', marginBottom: '8px', marginTop: '0' }}>{p.title}</h3>
                <p style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '11px', fontWeight: 700, color: '#666666', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>{p.focus}</p>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.7, color: '#4a4a4a' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
