import { siteUrl } from '@/lib/config'

export const metadata = {
  title: 'Savings Calculator - Request Finance',
  description:
    'Calculate how much your business loses to FX spreads and wire fees on cross-border payments — and see what the same volume would cost on Request Finance. Free, instant, no signup required.',
  keywords: [
    'cross-border payment cost calculator',
    'FX fee calculator',
    'international wire transfer cost',
    'stablecoin payment savings',
    'bank fee calculator for business',
    'cross-border payment savings',
    'B2B payment cost comparison',
  ],
  openGraph: {
    title: 'Savings Calculator - Request Finance',
    description:
      'See your own annual leakage to FX spreads and wire fees, and what the same volume costs on Request Finance. Free, instant, no signup required.',
    url: `${siteUrl}/savings-calculator`,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance - Savings Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savings Calculator - Request Finance',
    description:
      'See your own annual leakage to FX spreads and wire fees, and what the same volume costs on Request Finance. Free, instant, no signup required.',
    images: [`${siteUrl}/images/thumbnail.png`],
  },
  alternates: {
    canonical: `${siteUrl}/savings-calculator`,
  },
}

export default function SavingsCalculatorLayout({ children }) {
  return children
}
