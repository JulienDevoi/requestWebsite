import { BookContent } from './book-content'

export const metadata = {
  title: 'Complete Your Account Setup - Request Finance',
  description:
    'Finalize your Request Finance account setup. Schedule a call with our team to get started with corporate cards, accounts payable, and global payments.',
  keywords: [
    'account setup',
    'spend management',
    'corporate cards',
    'accounts payable',
    'business finance platform',
    'fintech',
  ],
  openGraph: {
    title: 'Complete Your Account Setup - Request Finance',
    description:
      'Finalize your Request Finance account setup. Schedule a call with our team to get started with corporate cards, accounts payable, and global payments.',
    url: 'https://requestfinance.com/book',
    siteName: 'Request Finance',
    images: [
      {
        url: 'https://requestfinance.com/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Request Finance - Complete Your Account Setup',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Your Account Setup - Request Finance',
    description:
      'Finalize your Request Finance account setup. Schedule a call with our team to get started with corporate cards, accounts payable, and global payments.',
    images: ['https://requestfinance.com/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com/book',
  },
}

export default function Book() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Spend Management Platform',
    provider: {
      '@type': 'Organization',
      name: 'Request Finance',
      url: 'https://requestfinance.com',
    },
    areaServed: 'Worldwide',
    description:
      'Finalize your Request Finance account setup. Schedule a call with our team to get started with corporate cards, accounts payable, and global payments.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://requestfinance.com/book',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Event snippet for ViewedPage Book conversion page */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-708726534/MrztCMTa-ukbEIae-dEC',
              'value': 1.0,
              'currency': 'EUR'
            });
          `,
        }}
      />
      <BookContent />
    </>
  )
}
