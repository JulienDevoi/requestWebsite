import { Feed } from 'feed'
import assert from 'node:assert'
import { getAllPosts } from '@/lib/blog'

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

  const posts = getAllPosts()

  let feed = new Feed({
    title: 'Request Finance Blog',
    description:
      'Stay informed with product updates, company news, and insights on spend management, corporate finance, and stablecoins.',
    author: {
      name: 'Request Finance',
      email: 'hello@requestfinance.com',
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

  posts.forEach((post) => {
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
