import { Feed } from 'feed'
import assert from 'node:assert'

// Mock data
const mockPosts = [
  {
    slug: 'streamlining-crypto-accounting-at-scale',
    title: 'Streamlining Crypto Accounting at Scale',
    excerpt:
      'How a decentralised governance research group simplified crypto reconciliation and month-end reporting with Request Accounting.',
    publishedAt: '2025-03-07',
    author: { name: 'Governance research group' },
  },
  {
    slug: 'polemos',
    title: 'Polemos - Powering Web3 Gaming at Scale',
    excerpt:
      'How Request Finance helps Polemos streamline fiat and crypto payments to power the next generation of blockchain gaming.',
    publishedAt: '2025-03-12',
    author: { name: 'Polemos' },
  },
  {
    slug: 'tokenizing-a-real-estate-empire-with-realt',
    title: 'Tokenizing a Real Estate Empire with RealT',
    excerpt:
      'How RealT used Request Finance on Gnosis Chain for USDC payouts, xDAI billing, and a WooCommerce checkout gateway—plus results and the full RealT story.',
    publishedAt: '2025-03-13',
    author: { name: 'RealT' },
  },
]

export async function GET(req) {
  const url = new URL(req.url)
  let origin = url.origin
  
  // Validate against allowed origins
  const allowedOrigins = [
    'https://requestfinance.com',
    'https://www.requestfinance.com',
    process.env.NEXT_PUBLIC_SITE_URL,
  ].filter(Boolean)
  
  // Use environment variable or default to production URL
  const siteUrl = allowedOrigins.includes(origin) 
    ? origin 
    : (process.env.NEXT_PUBLIC_SITE_URL || 'https://requestfinance.com')

  let feed = new Feed({
    title: 'Customer Success Stories',
    description:
      'Discover how leading companies are using our platform to transform their business and achieve remarkable results.',
    author: {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
    },
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/images/icon2.png`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  mockPosts.forEach((post) => {
    try {
      assert(typeof post.title === 'string')
      assert(typeof post.slug === 'string')
      assert(typeof post.excerpt === 'string')
      assert(typeof post.publishedAt === 'string')
    } catch (error) {
      console.log('Post is missing required fields for RSS feed:', post, error)
      return
    }

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${siteUrl}/customers/${post.slug}`,
      content: post.excerpt,
      author: post.author?.name ? [{ name: post.author.name }] : [],
      contributor: post.author?.name ? [{ name: post.author.name }] : [],
      date: new Date(post.publishedAt),
    })
  })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}

