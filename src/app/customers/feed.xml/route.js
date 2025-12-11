import { Feed } from 'feed'
import assert from 'node:assert'

// Mock data
const mockPosts = [
  {
    slug: 'acme-corp-transformation',
    title: 'How Acme Corp Increased Revenue by 150%',
    excerpt: 'Learn how Acme Corp transformed their sales process and achieved record-breaking growth using our platform.',
    publishedAt: '2024-01-15',
    author: { name: 'Sarah Johnson' },
  },
  {
    slug: 'techstart-success-story',
    title: 'TechStart Scales from 10 to 100 Customers',
    excerpt: 'Discover how TechStart leveraged our tools to scale their customer base tenfold in just 12 months.',
    publishedAt: '2024-01-10',
    author: { name: 'Michael Chen' },
  },
  {
    slug: 'global-solutions-testimonial',
    title: 'Global Solutions: A Partnership Built on Trust',
    excerpt: 'Why Global Solutions chose us as their long-term partner for business growth and innovation.',
    publishedAt: '2024-01-05',
    author: { name: 'Emily Davis' },
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

