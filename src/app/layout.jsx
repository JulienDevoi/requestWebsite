import '@/styles/tailwind.css'
import Script from 'next/script'
import { WeglotScript } from '@/components/weglot'
import { siteUrl } from '@/lib/config'

export const metadata = {
  title: {
    template: '%s - Request Finance',
    default: 'Request Finance - Global Payments, Settled in Minutes',
  },
  description:
    'Pay vendors and manage spend on a platform built for stablecoins. Get instant, global settlement, corporate cards, accounts payable, and accrual accounting, with no crypto complexity.',
  keywords: [
    'spend management',
    'corporate cards',
    'accounts payable',
    'stablecoins',
    'stablecoin payments',
    'crypto payments',
    'cryptocurrency',
    'business finance',
    'expense management',
    'fintech startup',
    'business payments',
    'Business Account',
    'accrual accounting',
  ],
  openGraph: {
    title: 'Request Finance - Global Payments, Settled in Minutes',
    description:
      'Pay vendors and manage spend on a platform built for stablecoins. Get instant, global settlement, corporate cards, accounts payable, and accrual accounting, with no crypto complexity.',
    url: siteUrl,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance - Stablecoin-Powered Payments Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RequestFinance',
    title: 'Request Finance - Global Payments, Settled in Minutes',
    description:
      'Pay vendors and manage spend on a platform built for stablecoins. Get instant, global settlement, corporate cards, accounts payable, and accrual accounting, with no crypto complexity.',
    images: [`${siteUrl}/images/thumbnail.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: `${siteUrl}/favicon.ico`, sizes: 'any' },
      { url: `${siteUrl}/images/icon2.png`, type: 'image/png' },
    ],
    shortcut: `${siteUrl}/favicon.ico`,
    apple: [
      { url: `${siteUrl}/images/icon2.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }) {
  const beamAnalyticsToken = process.env.NEXT_PUBLIC_BEAM_ANALYTICS_TOKEN

  return (
    <html lang="en" translate="no">
      <head>
        {/* HubSpot tracking */}
        <Script
          src="https://js.hs-scripts.com/4477725.js"
          strategy="afterInteractive"
        />
        {/* Privacy-friendly analytics by Plausible — https://plausible.io/docs/integration-guides */}
        <Script
          src="https://plausible.io/js/pa-cGM-QYfVbusT8oUQwySvd.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Request Finance Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <WeglotScript />
        {children}
        {beamAnalyticsToken && (
          <Script
            src="https://beamanalytics.b-cdn.net/beam.min.js"
            data-token={beamAnalyticsToken}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
