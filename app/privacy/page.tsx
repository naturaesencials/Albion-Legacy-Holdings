export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Who We Are',
      body: `Albion Legacy Holdings Ltd ("Albion Legacy Holdings", "we", "us", "our") is a private limited company registered in England and Wales. Registered address: 71-75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom.\n\nFor any data protection matter, contact us at: contact@albionlegacy.com`,
    },
    {
      title: '2. Scope of This Policy',
      body: `This Privacy Policy explains how we collect, use, and protect personal data when you visit www.albionlegacy.com (the "Website"). It applies to all visitors regardless of location and complies with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the EU General Data Protection Regulation (EU GDPR) where applicable.`,
    },
    {
      title: '3. Data We Collect',
      body: `We collect minimal data. When you visit our Website, our hosting provider (Vercel Inc.) automatically collects standard server log data, which may include your IP address, browser type, referring URL, and pages visited. This data is collected for security and performance purposes only and is not used for tracking or profiling.\n\nIf you contact us via email, we will collect your name and email address for the purpose of responding to your enquiry.`,
    },
    {
      title: '4. Legal Basis for Processing',
      body: `We process personal data on the following legal bases:\n\n• Legitimate interests (Article 6(1)(f) UK/EU GDPR): server logs for website security and performance.\n• Contract performance or pre-contractual steps (Article 6(1)(b)): responding to direct enquiries.\n• Legal obligation: where required by applicable law.`,
    },
    {
      title: '5. Cookies',
      body: `Our Website uses only technically essential cookies necessary for the Website to function. We do not use analytics cookies, advertising cookies, or any third-party tracking technologies.\n\nEssential cookies used:\n• Session cookies set by Next.js for page rendering. These are deleted when you close your browser.\n\nNo consent is required for strictly necessary cookies under UK PECR and EU ePrivacy rules. You may disable cookies in your browser settings; however, this may affect Website functionality.`,
    },
    {
      title: '6. Data Retention',
      body: `Server log data is retained for a maximum of 30 days by our hosting provider (Vercel). Email correspondence is retained for as long as necessary to respond to your enquiry and for a maximum of 2 years thereafter, unless a longer retention period is required by law.`,
    },
    {
      title: '7. Data Sharing',
      body: `We do not sell, rent, or share your personal data with third parties for marketing purposes. We share data only with:\n\n• Vercel Inc. (hosting provider) — located in the United States, processing under Standard Contractual Clauses.\n\nNo other third-party processors have access to personal data collected through this Website.`,
    },
    {
      title: '8. International Transfers',
      body: `Our Website is hosted by Vercel Inc., which may process data in the United States. Such transfers are conducted under appropriate safeguards including Standard Contractual Clauses approved by the UK Information Commissioner's Office (ICO) and the European Commission.`,
    },
    {
      title: '9. Your Rights',
      body: `Under UK GDPR and EU GDPR, you have the right to:\n\n• Access the personal data we hold about you\n• Rectify inaccurate data\n• Request erasure of your data ("right to be forgotten")\n• Restrict or object to processing\n• Data portability\n• Lodge a complaint with the ICO (UK): www.ico.org.uk, or your local EU supervisory authority\n\nTo exercise any of these rights, contact us at contact@albionlegacy.com. We will respond within 30 days.`,
    },
    {
      title: '10. Security',
      body: `We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or disclosure. Our Website uses HTTPS encryption for all data in transit.`,
    },
    {
      title: '11. Changes to This Policy',
      body: `We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. We encourage you to review this page periodically.`,
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
        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,52px)', fontWeight: 600, lineHeight: 1.05, color: '#0a0a0a', marginBottom: '12px' }}>Privacy Policy</h1>
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
          <a href="/terms" style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}>Terms of Use</a>
          <a href="/cookies" style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}>Cookie Policy</a>
        </div>
      </div>
    </main>
  )
}
