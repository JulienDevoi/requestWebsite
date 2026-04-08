/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const app = 'https://app.request.finance'
    return [
      { source: '/blog/crypto-treasury-management-guide', destination: '/blog/crypto-treasury-management', permanent: true },
      { source: '/blog/virtual-credit-card-business-guide', destination: '/blog/virtual-credit-card-for-business', permanent: true },
      { source: '/login', destination: `${app}/login`, permanent: true },
      { source: '/login/:path*', destination: `${app}/login`, permanent: true },
      { source: '/book', destination: `${app}/signup`, permanent: true },
      { source: '/book/:path*', destination: `${app}/signup`, permanent: true },
      { source: '/onboarding', destination: `${app}/signup`, permanent: true },
      { source: '/onboarding/:path*', destination: `${app}/signup`, permanent: true },
      { source: '/open', destination: `${app}/signup`, permanent: true },
      { source: '/open/:path*', destination: `${app}/signup`, permanent: true },
    ]
  },
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
          // CSP is set per-request by src/middleware.js (with a nonce).
          // The middleware overrides this header for all page requests.
          // This fallback covers any routes the middleware may not match (e.g. static assets).
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.weglot.com https://weglot.com https://api.weglot.com https://cdn-api-weglot.com https://beamanalytics.b-cdn.net https://*.beamanalytics.com https://beamanalytics.com https://api.fontshare.com https://static.hsappstatic.net https://js.hs-scripts.com https://js.hsforms.net https://plausible.io https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://api.fontshare.com https://cdn.weglot.com https://weglot.com https://static.hsappstatic.net https://js.hsforms.net https://fonts.googleapis.com",
              "img-src 'self' data: https://cdn.weglot.com https://weglot.com https://cdn-api-weglot.com https://track.hubspot.com https:",
              "font-src 'self' https://api.fontshare.com data: https://static.hsappstatic.net https://js.hsforms.net https://fonts.gstatic.com",
              "connect-src 'self' https://cdn.weglot.com https://weglot.com https://api.weglot.com https://cdn-api-weglot.com https://beamanalytics.b-cdn.net https://beamanalytics.com https://*.beamanalytics.com https://api.hubapi.com https://api.hubspot.com https://api.hsforms.com https://forms.hubspot.com https://forms.hsforms.com https://hubspot-forms-static-embed.s3.amazonaws.com https://content.request.finance https://plausible.io https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://googleads.g.doubleclick.net",
              "frame-src 'self' https://content.request.finance https://app.hubspot.com https://forms.hsforms.com",
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
