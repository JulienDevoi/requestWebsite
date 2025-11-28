export const metadata = {
  title: 'Pricing - Request Finance',
  description:
    'Transparent pricing for spend management. Choose from Basic, Pro, or Premium plans. All plans include corporate cards, accounts payable, and global payments. Start with a 30-day free trial.',
  keywords: [
    'spend management pricing',
    'corporate cards pricing',
    'accounts payable pricing',
    'business finance pricing',
    'fintech pricing',
    'payment platform pricing',
    'expense management pricing',
  ],
  openGraph: {
    title: 'Pricing - Request Finance',
    description:
      'Transparent pricing for spend management. Choose from Basic, Pro, or Premium plans. All plans include corporate cards, accounts payable, and global payments. Start with a 30-day free trial.',
    url: 'https://requestfinance.com/pricing',
    siteName: 'Request Finance',
    images: [
      {
        url: '/images/thumbnail.png',
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
      'Transparent pricing for spend management. Choose from Basic, Pro, or Premium plans. All plans include corporate cards, accounts payable, and global payments. Start with a 30-day free trial.',
    images: ['/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com/pricing',
  },
}

export default function PricingLayout({ children }) {
  return children
}

