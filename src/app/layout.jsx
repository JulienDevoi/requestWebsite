import '@/styles/tailwind.css'
import { headers } from 'next/headers'
import Script from 'next/script'
import { WeglotScript } from '@/components/weglot'
import { OpenAccountConversionTracker } from '@/components/open-account-conversion'
import { siteUrl } from '@/lib/config'

export const metadata = {
  title: {
    template: '%s - Request Finance',
    default: 'Request Finance - Spend Management for Modern Companies',
  },
  description:
    'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
  keywords: [
    'spend management',
    'corporate cards',
    'accounts payable',
    'stablecoins',
    'business finance',
    'expense management',
    'fintech startup',
    'business payments',
    'Global USD Account',
    'accrual accounting',
  ],
  openGraph: {
    title: 'Request Finance - Spend Management for Modern Companies',
    description:
      'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
    url: siteUrl,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance - Spend Management Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RequestFinance',
    title: 'Request Finance - Spend Management for Modern Companies',
    description:
      'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
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

export default async function RootLayout({ children }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const beamAnalyticsToken = process.env.NEXT_PUBLIC_BEAM_ANALYTICS_TOKEN

  return (
    <html lang="en" translate="no">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-708726534"
          strategy="afterInteractive"
          nonce={nonce}
        />
        <Script id="google-ads" strategy="afterInteractive" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-708726534');
          `}
        </Script>
        {/* Privacy-friendly analytics by Plausible — https://plausible.io/docs/integration-guides */}
        <Script
          src="https://plausible.io/js/pa-cGM-QYfVbusT8oUQwySvd.js"
          strategy="afterInteractive"
          nonce={nonce}
        />
        <Script id="plausible-init" strategy="afterInteractive" nonce={nonce}>
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
        <OpenAccountConversionTracker />
        {children}
        {beamAnalyticsToken && (
          <Script
            src="https://beamanalytics.b-cdn.net/beam.min.js"
            data-token={beamAnalyticsToken}
            strategy="afterInteractive"
            nonce={nonce}
          />
        )}
      </body>
    </html>
  )
}
