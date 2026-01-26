export const metadata = {
  title: 'Open Account - Request Finance',
  description:
    'Open your Request Finance account to manage corporate cards, accounts payable, and global payments. Get started with spend management today.',
  keywords: [
    'open account',
    'sign up',
    'create account',
    'request finance signup',
    'spend management signup',
    'business finance account',
    'corporate finance',
  ],
  openGraph: {
    title: 'Open Account - Request Finance',
    description:
      'Open your Request Finance account to manage corporate cards, accounts payable, and global payments. Get started with spend management today.',
    url: 'https://requestfinance.com/open',
    siteName: 'Request Finance',
    images: [
      {
        url: 'https://requestfinance.com/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Request Finance - Open Account',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Account - Request Finance',
    description:
      'Open your Request Finance account to manage corporate cards, accounts payable, and global payments. Get started with spend management today.',
    images: ['https://requestfinance.com/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com/open',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function OpenLayout({ children }) {
  return children
}
