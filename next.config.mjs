/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const app = 'https://app.request.finance'
    return [
      { source: '/products/global-usd-account', destination: '/products/business-account', permanent: true },
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
        ],
      },
    ]
  },
}

export default nextConfig
