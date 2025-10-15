import { Feed } from 'feed'
import assert from 'node:assert'

// Mock data
const mockPosts = [
  {
    slug: 'introducing-radiant-2-0',
    title: 'Introducing Radiant 2.0',
    excerpt: 'We are excited to announce the launch of Radiant 2.0, packed with new features to help you close deals faster.',
    publishedAt: '2024-01-15',
    author: { name: 'Sarah Johnson' },
  },
  {
    slug: 'how-to-improve-sales-process',
    title: 'How to Improve Your Sales Process',
    excerpt: 'Learn the best practices for streamlining your sales process and closing more deals.',
    publishedAt: '2024-01-10',
    author: { name: 'Michael Chen' },
  },
  {
    slug: 'radiant-raises-series-b',
    title: 'Radiant Raises $50M Series B',
    excerpt: 'We are thrilled to announce our Series B funding round to accelerate our growth.',
    publishedAt: '2024-01-05',
    author: { name: 'Emily Davis' },
  },
]

export async function GET(req) {
  let siteUrl = new URL(req.url).origin

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
    image: `${siteUrl}/favicon.ico`,
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
