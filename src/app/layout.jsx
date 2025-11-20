import '@/styles/tailwind.css'
import Script from 'next/script'

export const metadata = {
  title: {
    template: '%s - Request',
    default: 'Request Finance',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
