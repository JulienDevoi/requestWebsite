import { siteUrl } from '@/lib/config'
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
      'Experience the new standard in business spend management. Book a demo to see how Request Finance can streamline your corporate cards, accounts payable, and global payments.',
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
      'Experience the new standard in business spend management. Book a demo to see how Request Finance can streamline your corporate cards, accounts payable, and global payments.',
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

