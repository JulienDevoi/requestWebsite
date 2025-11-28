import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'

// Mock blog posts data
const mockPosts = {
  'introducing-radiant-2-0': {
    slug: 'introducing-radiant-2-0',
    title: 'Introducing Radiant 2.0',
    excerpt: 'We are excited to announce the launch of Radiant 2.0, packed with new features to help you close deals faster.',
    publishedAt: '2024-01-15',
    author: { name: 'Sarah Johnson', image: null },
    mainImage: null,
    categories: [{ slug: 'product-updates', title: 'Product Updates' }],
    body: `We are thrilled to announce the launch of Radiant 2.0, our biggest update yet. This release brings a host of new features and improvements designed to help sales teams close deals faster and more efficiently.

**What's New**

Our team has been working tirelessly to bring you features that matter most. Radiant 2.0 includes improved analytics, better integrations, and a completely redesigned user interface that makes it easier than ever to manage your sales pipeline.

**Enhanced Analytics**

Get deeper insights into your sales performance with our new analytics dashboard. Track key metrics, identify trends, and make data-driven decisions to improve your sales process.

**Seamless Integrations**

Connect Radiant with all your favorite tools including Salesforce, HubSpot, Slack, and more. Our new integration marketplace makes it easy to extend Radiant's functionality.

**Getting Started**

Existing customers can upgrade to Radiant 2.0 right away from their account dashboard. New to Radiant? Sign up for a free trial and see how we can help transform your sales process.`,
  },
  'how-to-improve-sales-process': {
    slug: 'how-to-improve-sales-process',
    title: 'How to Improve Your Sales Process',
    excerpt: 'Learn the best practices for streamlining your sales process and closing more deals.',
    publishedAt: '2024-01-10',
    author: { name: 'Michael Chen', image: null },
    mainImage: null,
    categories: [{ slug: 'insights', title: 'Insights' }],
    body: `A well-defined sales process is crucial for consistent success. Here are our top tips for improving your sales workflow.

**Define Clear Stages**

Start by mapping out each stage of your sales process. From initial contact to closed deal, every step should be clearly defined with specific actions and goals.

**Use the Right Tools**

Invest in technology that supports your sales process. A good CRM like Radiant can help you track leads, manage follow-ups, and analyze performance.

**Train Your Team**

Regular training ensures your team stays sharp and up-to-date with best practices. Hold weekly coaching sessions and share success stories across the team.

**Measure and Optimize**

Track key metrics like conversion rates, average deal size, and sales cycle length. Use this data to identify bottlenecks and opportunities for improvement.`,
  },
  'radiant-raises-series-b': {
    slug: 'radiant-raises-series-b',
    title: 'Radiant Raises $50M Series B',
    excerpt: 'We are thrilled to announce our Series B funding round to accelerate our growth.',
    publishedAt: '2024-01-05',
    author: { name: 'Emily Davis', image: null },
    mainImage: null,
    categories: [{ slug: 'company-news', title: 'Company News' }],
    body: `Today marks an exciting milestone in Radiant's journey. We are thrilled to announce that we have raised $50 million in Series B funding led by top-tier investors.

**Our Mission**

Since founding Radiant, our mission has been to help sales teams close every deal. This funding will enable us to accelerate product development, expand our team, and better serve our growing customer base.

**What This Means for Customers**

This investment allows us to double down on innovation. Expect more features, better support, and continued improvements to the platform you rely on every day.

**Looking Ahead**

We are just getting started. With this funding, we are positioned to become the leading sales platform for teams of all sizes. Thank you to our customers, team, and investors for believing in our vision.`,
  },
  'new-integrations-available': {
    slug: 'new-integrations-available',
    title: 'New Integrations Now Available',
    excerpt: 'Connect Radiant with your favorite tools including Salesforce, HubSpot, and more.',
    publishedAt: '2023-12-20',
    author: { name: 'David Wilson', image: null },
    mainImage: null,
    categories: [{ slug: 'product-updates', title: 'Product Updates' }],
    body: `We are excited to announce new integrations that make Radiant even more powerful as part of your sales tech stack.

**New Integrations**

We have added support for Salesforce, HubSpot, Microsoft Teams, Slack, and Gmail. These integrations allow you to sync data, automate workflows, and stay connected across all your tools.

**How It Works**

Setting up integrations is simple. Just visit the integrations page in your Radiant dashboard, select the tools you use, and follow the setup wizard. Most integrations can be configured in minutes.

**What's Next**

We are constantly adding new integrations based on customer feedback. Let us know what tools you would like to see supported next.`,
  },
  'sales-best-practices-2024': {
    slug: 'sales-best-practices-2024',
    title: 'Sales Best Practices for 2024',
    excerpt: 'Discover the top sales strategies and tactics that will help you succeed in 2024.',
    publishedAt: '2023-12-15',
    author: { name: 'Jennifer Brown', image: null },
    mainImage: null,
    categories: [{ slug: 'insights', title: 'Insights' }],
    body: `As we head into 2024, sales teams need to adapt to changing buyer behaviors and market conditions. Here are the strategies that will set you apart.

**Personalization at Scale**

Today's buyers expect personalized experiences. Use data and automation to deliver tailored messaging without sacrificing efficiency.

**Multi-Channel Engagement**

Don't rely on a single channel. Successful sales teams use email, phone, social media, and video to reach prospects where they are.

**Value-First Selling**

Lead with value, not features. Understand your prospect's challenges and demonstrate how you can solve their specific problems.

**Continuous Learning**

The sales landscape is always evolving. Stay ahead by investing in continuous learning and development for your team.`,
  },
}

export async function generateMetadata({ params }) {
  const post = mockPosts[(await params).slug]
  if (!post) return {}
  
  return {
    title: `${post.title} - Request Finance Blog`,
    description: post.excerpt,
    keywords: [
      'business finance',
      'spend management',
      'corporate finance',
      'fintech',
      ...(post.categories?.map(cat => cat.title.toLowerCase()) || []),
    ],
    openGraph: {
      title: `${post.title} - Request Finance Blog`,
      description: post.excerpt,
      url: `https://requestfinance.com/blog/${post.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: '/images/thumbnail.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - Request Finance Blog`,
      description: post.excerpt,
      images: ['/images/thumbnail.png'],
    },
    alternates: {
      canonical: `https://requestfinance.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPost({ params }) {
  const post = mockPosts[(await params).slug]
  if (!post) notFound()

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
        </Subheading>
        <Heading as="h1" className="mt-2">
          {post.title}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={post.author.image}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
            {Array.isArray(post.categories) && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog?category=${category.slug}`}
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={post.mainImage}
                  className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
                />
              )}
              {post.body && (
                <div className="prose prose-gray max-w-none">
                  {post.body.split('\n\n').map((paragraph, index) => {
                    // Check if it's a heading
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      const headingText = paragraph.slice(2, -2)
                      return (
                        <h2 key={index} className="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0">
                          {headingText}
                        </h2>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={index} className="my-10 text-base/8 first:mt-0 last:mb-0">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              )}
              <div className="mt-10">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
