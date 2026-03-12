import { Feed } from 'feed'
import assert from 'node:assert'

// Mock data
const mockPosts = [
  {
    slug: 'stablecoins-how-they-work-and-what-they-mean-for-your-business',
    title: 'Stablecoins: How They Work and What They Mean for Your Business',
    excerpt:
      'Learn about the pros and cons of the different types of stablecoins, and what it means for your business.',
    publishedAt: new Date().toISOString().slice(0, 10),
    author: { name: 'Request Finance' },
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
    title: 'The Radiant Blog',
    description:
      'Stay informed with product updates, company news, and insights on how to sell smarter at your company.',
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
      link: `${siteUrl}/blog/${post.slug}`,
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
