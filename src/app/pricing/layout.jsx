import { siteUrl } from '@/lib/config'

export const metadata = {
  title: 'Pricing - Request Finance',
  description:
    'Simple, transparent pricing for bill payments, corporate cards, and global payouts. Three plans starting at $300/month. Volume-based transaction fees that decrease as you grow. Start with a 30-day free trial.',
  keywords: [
    'spend management pricing',
    'corporate cards pricing',
    'bill payments pricing',
    'global payouts pricing',
    'stablecoin payments',
    'business finance pricing',
    'payment platform pricing',
    'expense management pricing',
  ],
  openGraph: {
    title: 'Pricing - Request Finance',
    description:
      'Simple, transparent pricing for bill payments, corporate cards, and global payouts. Three plans starting at $300/month. Volume-based transaction fees that decrease as you grow.',
    url: `${siteUrl}/pricing`,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance - Pricing Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Request Finance',
    description:
      'Simple, transparent pricing for bill payments, corporate cards, and global payouts. Three plans starting at $300/month. Volume-based transaction fees that decrease as you grow.',
    images: [`${siteUrl}/images/thumbnail.png`],
  },
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
}

export default function PricingLayout({ children }) {
  return children
}
