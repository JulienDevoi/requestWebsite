export const metadata = {
  title: 'Login - Request Finance',
  description:
    'Sign in to your Request Finance account to manage corporate cards, accounts payable, and global payments. Access your spend management dashboard.',
  keywords: [
    'login',
    'sign in',
    'request finance login',
    'spend management login',
    'business finance portal',
    'account access',
  ],
  openGraph: {
    title: 'Login - Request Finance',
    description:
      'Sign in to your Request Finance account to manage corporate cards, accounts payable, and global payments. Access your spend management dashboard.',
    url: 'https://requestfinance.com/login',
    siteName: 'Request Finance',
    images: [
      {
        url: 'https://requestfinance.com/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Request Finance - Login',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login - Request Finance',
    description:
      'Sign in to your Request Finance account to manage corporate cards, accounts payable, and global payments. Access your spend management dashboard.',
    images: ['https://requestfinance.com/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com/login',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginLayout({ children }) {
  return children
}
