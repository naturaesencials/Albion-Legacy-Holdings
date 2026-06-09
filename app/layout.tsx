import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Albion Legacy Holdings | Private Investment Holding · London',
  description: 'Albion Legacy Holdings is a UK-incorporated, privately held investment holding company deploying long-term capital across operating businesses, digital ventures, and strategic assets.',
  keywords: 'Albion Legacy Holdings, private holding company, UK investment holding, family office, long-term capital, digital ventures',
  authors: [{ name: 'Albion Legacy Holdings Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.albionlegacy.com',
    siteName: 'Albion Legacy Holdings',
    title: 'Albion Legacy Holdings | Private Investment Holding · London',
    description: 'A UK-incorporated, privately held investment holding company deploying long-term capital across operating businesses, digital ventures, and strategic assets.',
    images: [{ url: 'https://www.albionlegacy.com/og-image.jpg', width: 1200, height: 630, alt: 'Albion Legacy Holdings' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albion Legacy Holdings | Private Investment Holding · London',
    description: 'A UK-incorporated, privately held investment holding company deploying long-term capital across operating businesses, digital ventures, and strategic assets.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.albionlegacy.com' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Albion Legacy Holdings Ltd',
  url: 'https://www.albionlegacy.com',
  description: 'A UK-incorporated, privately held investment holding company deploying long-term capital across operating businesses, digital ventures, and international assets.',
  address: { '@type': 'PostalAddress', streetAddress: '66 Paul Street', addressLocality: 'London', postalCode: 'EC2A 4NA', addressCountry: 'GB' },
  areaServed: 'Worldwide',
  sameAs: ['https://linkedin.com/company/albion-legacy-holdings', 'https://albionwealth.app', 'https://albionbusinesshub.app', 'https://naturaesencials.com'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
