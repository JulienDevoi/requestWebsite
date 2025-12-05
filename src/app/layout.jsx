import '@/styles/tailwind.css'
import Script from 'next/script'

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
    'fintech',
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
        url: '/images/thumbnail.png',
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
    images: ['/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com',
  },
  icons: {
    icon: '/images/icon.svg',
    shortcut: '/images/icon.svg',
    apple: '/images/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/icon.svg"
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
        <Script
          src="https://cdn.weglot.com/weglot.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="weglot-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof Weglot !== 'undefined') {
                Weglot.initialize({
                  api_key: 'wg_87c7a6f782faec80e6c5680db823a4295'
                });
              } else {
                window.addEventListener('load', function() {
                  if (typeof Weglot !== 'undefined') {
                    Weglot.initialize({
                      api_key: 'wg_87c7a6f782faec80e6c5680db823a4295'
                    });
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="text-gray-950 antialiased">
        {children}
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="4ca70d3b-e6aa-48ea-bdb2-1515a762fd66"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
