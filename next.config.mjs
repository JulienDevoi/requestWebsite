/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.weglot.com https://weglot.com https://api.weglot.com https://cdn-api-weglot.com https://beamanalytics.b-cdn.net https://api.fontshare.com https://static.hsappstatic.net https://js.hs-scripts.com https://js.hsforms.net",
              "style-src 'self' 'unsafe-inline' https://api.fontshare.com https://cdn.weglot.com https://weglot.com",
              "img-src 'self' data: https: https://cdn.weglot.com https://weglot.com https://cdn-api-weglot.com",
              "font-src 'self' https://api.fontshare.com data:",
              "connect-src 'self' https://cdn.weglot.com https://weglot.com https://api.weglot.com https://cdn-api-weglot.com https://beamanalytics.b-cdn.net https://beamanalytics.com https://api.beamanalytics.com https://app.beamanalytics.com https://api.hubapi.com https://api.hubspot.com https://content.request.finance",
              "frame-src 'self' https://content.request.finance https://app.hubspot.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self' https://forms.hubspot.com",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
