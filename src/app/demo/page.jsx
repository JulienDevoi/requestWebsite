import { siteUrl } from '@/lib/config'
import { DemoContent } from './demo-content'

export const metadata = {
  title: 'Book a Demo - Request Finance',
  description:
    'Book a 30-minute working session to see what your cross-border payments really cost. Map your payment flows and get a written cost comparison versus Request.',
  keywords: [
    'book a demo',
    'spend management demo',
    'corporate cards demo',
    'accounts payable demo',
    'business finance platform',
    'fintech demo',
  ],
  openGraph: {
    title: 'Book a Demo - Request Finance',
    description:
      'Book a 30-minute working session to see what your cross-border payments really cost. Map your payment flows and get a written cost comparison versus Request.',
    url: `${siteUrl}/demo`,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance - Book a Demo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Demo - Request Finance',
    description:
      'Book a 30-minute working session to see what your cross-border payments really cost. Map your payment flows and get a written cost comparison versus Request.',
    images: [`${siteUrl}/images/thumbnail.png`],
  },
  alternates: {
    canonical: `${siteUrl}/demo`,
  },
}

export default function Demo() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Spend Management Platform',
    provider: {
      '@type': 'Organization',
      name: 'Request Finance',
      url: siteUrl,
    },
    areaServed: 'Worldwide',
    description:
      'Book a 30-minute working session to see what your cross-border payments really cost. Map your payment flows and get a written cost comparison versus Request.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/demo`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DemoContent />
    </>
  )
}

