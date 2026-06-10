export default function CookiePolicy() {
  const sections = [
    {
      title: '1. What Are Cookies',
      body: `Cookies are small text files stored on your device when you visit a website. They are widely used to make websites function correctly and to provide information to website operators.`,
    },
    {
      title: '2. How We Use Cookies',
      body: `www.albionlegacy.com uses only strictly necessary cookies. We do not use analytics cookies, advertising cookies, social media tracking cookies, or any other non-essential cookies.\n\nWe do not use any third-party tracking technologies. No data collected through cookies on this Website is shared with advertisers or marketing platforms.`,
    },
    {
      title: '3. Cookies We Use',
      body: `The following strictly necessary cookies may be set when you visit this Website:\n\n• __Host-next-auth.csrf-token — Set by Next.js for security purposes (CSRF protection). Session cookie, deleted when you close your browser.\n• __Secure-next-auth.session-token — Set by Next.js for session management. Session cookie, deleted when you close your browser.\n\nThese cookies are essential for the Website to function and cannot be disabled without affecting Website functionality.`,
    },
    {
      title: '4. Legal Basis',
      body: `Strictly necessary cookies do not require your consent under the UK Privacy and Electronic Communications Regulations (PECR) or the EU ePrivacy Directive. We use these cookies on the basis of our legitimate interest in operating a functional and secure website.`,
    },
    {
      title: '5. How to Control Cookies',
      body: `You can control and delete cookies through your browser settings. Most browsers allow you to:\n\n• View cookies stored on your device\n• Delete individual or all cookies\n• Block cookies from specific websites\n• Block all cookies\n\nPlease note that disabling cookies may affect the functionality of this Website. For guidance on managing cookies in your browser, visit www.allaboutcookies.org.`,
    },
    {
      title: '6. Changes to This Policy',
      body: `We may update this Cookie Policy from time to time. The date at the top of this page reflects the most recent revision.`,
    },
    {
      title: '7. Contact',
      body: `For any questions regarding our use of cookies:\n\nAlbion Legacy Holdings Ltd\n71-75 Shelton Street, Covent Garden\nLondon WC2H 9JQ, United Kingdom\ncontact@albionlegacy.com`,
    },
  ]

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', padding: 'clamp(100px,12vw,140px) clamp(32px,8vw,120px) 80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>Legal</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,52px)', fontWeight: 600, lineHeight: 1.05, color: '#0a0a0a', marginBottom: '12px' }}>Cookie Policy</h1>
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
          <a href="/terms" style={{ fontFamily: "'Jost',system-ui,sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}>Terms of Use</a>
        </div>
      </div>
    </main>
  )
}
