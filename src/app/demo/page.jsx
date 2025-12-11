import { DemoContent } from './demo-content'

export const metadata = {
  title: 'Book a Demo - Request Finance',
  description:
    'Experience the new standard in business spend management. Book a demo to see how Request Finance can streamline your corporate cards, accounts payable, and global payments.',
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
      'Experience the new standard in business spend management. Book a demo to see how Request Finance can streamline your corporate cards, accounts payable, and global payments.',
    url: 'https://requestfinance.com/demo',
    siteName: 'Request Finance',
    images: [
      {
        url: 'https://requestfinance.com/images/thumbnail.png',
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
      'Experience the new standard in business spend management. Book a demo to see how Request Finance can streamline your corporate cards, accounts payable, and global payments.',
    images: ['https://requestfinance.com/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com/demo',
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
      url: 'https://requestfinance.com',
    },
    areaServed: 'Worldwide',
    description:
      'Experience the new standard in business spend management. Book a demo to see how Request Finance can streamline your corporate cards, accounts payable, and global payments.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://requestfinance.com/demo',
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

