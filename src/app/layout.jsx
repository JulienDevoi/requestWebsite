import '@/styles/tailwind.css'
import Script from 'next/script'
import { WeglotScript } from '@/components/weglot'

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
    url: 'https://requestfinance.com',
    siteName: 'Request Finance',
    images: [
      {
        url: 'https://requestfinance.com/images/thumbnail.png',
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
    title: 'Request Finance - Spend Management for Modern Companies',
    description:
      'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
    images: ['https://requestfinance.com/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com',
  },
  icons: {
    icon: [
      { url: 'https://requestfinance.com/favicon.ico', sizes: 'any' },
      { url: 'https://requestfinance.com/images/icon2.png', type: 'image/png' },
    ],
    shortcut: 'https://requestfinance.com/favicon.ico',
    apple: [
      { url: 'https://requestfinance.com/images/icon2.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }) {
  const beamAnalyticsToken = process.env.NEXT_PUBLIC_BEAM_ANALYTICS_TOKEN

  return (
    <html lang="en" translate="no">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-708726534"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-708726534');
          `}
        </Script>
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
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
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
