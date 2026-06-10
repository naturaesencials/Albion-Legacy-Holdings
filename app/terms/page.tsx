export default function TermsOfUse() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      body: `By accessing or using www.albionlegacy.com (the "Website"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Website.\n\nThese Terms are governed by the laws of England and Wales.`,
    },
    {
      title: '2. About This Website',
      body: `This Website is operated by Albion Legacy Holdings Ltd, a private limited company registered in England and Wales (the "Company"). The Website provides general information about the Company and its activities.\n\nThe Website is intended for informational purposes only. It does not constitute an offer, solicitation, or invitation to invest, nor does it constitute financial, legal, or investment advice.`,
    },
    {
      title: '3. No Investment Offer',
      body: `Albion Legacy Holdings Ltd is a privately held company that invests its own capital. Nothing on this Website constitutes an offer to the public to subscribe for or purchase any securities, nor any solicitation of investment from third parties.\n\nAlbion Legacy Holdings Ltd is not authorised or regulated by the Financial Conduct Authority (FCA) or any other financial regulatory authority. The information on this Website should not be relied upon for investment decisions.`,
    },
    {
      title: '4. Intellectual Property',
      body: `All content on this Website — including text, design, graphics, logos, and the Albion Legacy Holdings name and mark — is the property of Albion Legacy Holdings Ltd and is protected by applicable intellectual property laws.\n\nYou may not reproduce, distribute, modify, or use any content from this Website without our prior written consent.`,
    },
    {
      title: '5. Accuracy of Information',
      body: `We make reasonable efforts to ensure the information on this Website is accurate and up to date. However, we make no warranties or representations, express or implied, as to the completeness, accuracy, or suitability of any information on the Website.\n\nWe reserve the right to modify or withdraw the Website or any content at any time without notice.`,
    },
    {
      title: '6. External Links',
      body: `This Website may contain links to third-party websites. These links are provided for convenience only. Albion Legacy Holdings Ltd has no control over the content of those websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.`,
    },
    {
      title: '7. Limitation of Liability',
      body: `To the fullest extent permitted by law, Albion Legacy Holdings Ltd shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of or inability to use this Website, including any loss of data, profits, or business opportunity.`,
    },
    {
      title: '8. Privacy',
      body: `Your use of this Website is also subject to our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at www.albionlegacy.com/privacy.`,
    },
    {
      title: '9. Cookies',
      body: `This Website uses only technically essential cookies. Please review our Cookie Policy at www.albionlegacy.com/cookies for full details.`,
    },
    {
      title: '10. Governing Law and Jurisdiction',
      body: `These Terms of Use are governed by the laws of England and Wales. Any dispute arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
    },
    {
      title: '11. Changes to These Terms',
      body: `We may update these Terms of Use at any time. The date at the top of this page reflects the most recent revision. Continued use of the Website after any changes constitutes your acceptance of the revised Terms.`,
    },
    {
      title: '12. Contact',
      body: `Albion Legacy Holdings Ltd\n71-75 Shelton Street, Covent Garden\nLondon WC2H 9JQ, United Kingdom\ncontact@albionlegacy.com`,
    },
  ]

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', padding: 'clamp(100px,12vw,140px) clamp(32px,8vw,120px) 80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>Legal</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,52px)', fontWeight: 600, lineHeight: 1.05, color: '#0a0a0a', marginBottom: '12px' }}>Terms of Use</h1>
        <p style={{ fontFamily: "'Inter',system-ui,sans-serif", fontSize: '13px', color: '#888', marginBottom: '56px' }}>Last updated: June 2026</p>

        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '22px', fontWeight: 600, color: '#0a0a0a', marginBottom: '16px' }}>{s.title}</h2>
            {s.body.split('\n\n').map((p, j) => (
              <p key={j} style={{ fontFamily: "'Inter',system-ui,sans-serif", fontSize: '15px', fontWeight: 300, lineHeight: 1.85, color: '#4a4a4a', marginBottom: '12px', whiteSpace: 'pre-line' }}>{p}</p>
            ))}
          </div>
        ))}

        <div style={{ marginTop: '48px', display: 'flex', gap: '32px' }}>
          <a href="/" style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}>← Home</a>
          <a href="/privacy" style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/cookies" style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}>Cookie Policy</a>
        </div>
      </div>
    </main>
  )
}
