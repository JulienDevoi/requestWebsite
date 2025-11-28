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

// Mock customer stories data
const mockPosts = {
  'acme-corp-transformation': {
    slug: 'acme-corp-transformation',
    title: 'How Acme Corp Increased Revenue by 150%',
    excerpt: 'Learn how Acme Corp transformed their sales process and achieved record-breaking growth using our platform.',
    publishedAt: '2024-01-15',
    author: { name: 'Sarah Johnson', image: null },
    mainImage: null,
    categories: [{ slug: 'case-studies', title: 'Case Studies' }],
    body: `Acme Corp came to us with a challenge: their sales process was inefficient, and revenue growth had stagnated. Within 12 months of implementing our platform, they increased their revenue by 150%.

**The Challenge**

Acme Corp's sales team was spending too much time on manual tasks and not enough time selling. Their outdated systems made it difficult to track leads, manage pipelines, and close deals efficiently.

**The Solution**

We worked closely with Acme Corp to implement our comprehensive sales platform. The solution included automated workflows, intelligent lead scoring, and real-time analytics that gave their team the insights they needed to succeed.

**The Results**

The impact was immediate and dramatic. Within the first quarter, Acme Corp saw a 40% increase in sales productivity. By the end of the year, their revenue had grown by 150%, and their sales team was closing deals 60% faster.

**Key Takeaways**

This success story demonstrates the power of the right tools and processes. By automating routine tasks and providing actionable insights, we helped Acme Corp unlock their full potential.`,
  },
  'techstart-success-story': {
    slug: 'techstart-success-story',
    title: 'TechStart Scales from 10 to 100 Customers',
    excerpt: 'Discover how TechStart leveraged our tools to scale their customer base tenfold in just 12 months.',
    publishedAt: '2024-01-10',
    author: { name: 'Michael Chen', image: null },
    mainImage: null,
    categories: [{ slug: 'success-stories', title: 'Success Stories' }],
    body: `TechStart is a rapidly growing SaaS company that needed to scale quickly without sacrificing quality. Our platform helped them grow from 10 to 100 customers in just one year.

**The Journey**

When TechStart first approached us, they had a great product but struggled with customer acquisition and retention. They needed a scalable solution that could grow with them.

**Our Approach**

We implemented a comprehensive customer success platform that included automated onboarding, customer health monitoring, and proactive engagement tools. This allowed TechStart to provide excellent service at scale.

**Impressive Growth**

The results speak for themselves. TechStart's customer base grew 10x in 12 months, while maintaining a 95% customer satisfaction rate. Their team was able to manage this growth without proportionally increasing headcount.

**Looking Forward**

TechStart continues to use our platform as they scale even further. They're now positioned to become a market leader in their space.`,
  },
  'global-solutions-testimonial': {
    slug: 'global-solutions-testimonial',
    title: 'Global Solutions: A Partnership Built on Trust',
    excerpt: 'Why Global Solutions chose us as their long-term partner for business growth and innovation.',
    publishedAt: '2024-01-05',
    author: { name: 'Emily Davis', image: null },
    mainImage: null,
    categories: [{ slug: 'testimonials', title: 'Testimonials' }],
    body: `Global Solutions has been our partner for over three years, and our relationship continues to grow stronger. Here's why they chose us and why they continue to trust us with their business.

**Why They Chose Us**

Global Solutions evaluated multiple vendors before selecting our platform. They chose us because of our commitment to innovation, excellent customer support, and proven track record of success.

**The Partnership**

Over the past three years, we've worked closely with Global Solutions to understand their evolving needs. We've customized our platform to fit their unique requirements and provided dedicated support every step of the way.

**The Impact**

Global Solutions has seen consistent growth in productivity and efficiency. More importantly, they've found a partner they can trust to support their long-term business goals.

**Customer Voice**

"Choosing this platform was one of the best decisions we've made. The team truly cares about our success and goes above and beyond to ensure we get the most value from their solution." - CEO, Global Solutions`,
  },
  'innovate-inc-case-study': {
    slug: 'innovate-inc-case-study',
    title: 'Innovate Inc Reduces Costs by 40%',
    excerpt: 'See how Innovate Inc streamlined operations and significantly reduced operational costs with our solution.',
    publishedAt: '2023-12-20',
    author: { name: 'David Wilson', image: null },
    mainImage: null,
    categories: [{ slug: 'case-studies', title: 'Case Studies' }],
    body: `Innovate Inc was facing rising operational costs and inefficiencies across their organization. Our platform helped them reduce costs by 40% while improving overall productivity.

**The Problem**

Manual processes and disconnected systems were costing Innovate Inc time and money. They needed a unified solution that could streamline operations and reduce overhead.

**Implementation**

We conducted a thorough analysis of their workflows and implemented our platform with custom integrations to their existing systems. The transition was smooth, with minimal disruption to their operations.

**Cost Savings**

The financial impact was significant. Innovate Inc reduced operational costs by 40% through automation and improved efficiency. They also freed up resources to focus on strategic initiatives.

**Beyond Cost Savings**

While cost reduction was important, Innovate Inc also gained better visibility into their operations, improved collaboration across teams, and increased employee satisfaction.`,
  },
  'startup-xyz-growth': {
    slug: 'startup-xyz-growth',
    title: 'Startup XYZ: From Idea to Market Leader',
    excerpt: 'The inspiring journey of how Startup XYZ became an industry leader with the right tools and support.',
    publishedAt: '2023-12-15',
    author: { name: 'Jennifer Brown', image: null },
    mainImage: null,
    categories: [{ slug: 'success-stories', title: 'Success Stories' }],
    body: `Startup XYZ's journey from a small startup to an industry leader is truly inspiring. Our platform played a crucial role in enabling their rapid growth and success.

**The Beginning**

When Startup XYZ launched, they knew they needed the right infrastructure to support their ambitious goals. They chose our platform from day one, allowing them to focus on product development and customer acquisition.

**Rapid Growth**

With our platform handling their operational needs, Startup XYZ was able to scale quickly. They went from 0 to 1000 customers in 18 months, a remarkable achievement for any startup.

**Market Leadership**

Today, Startup XYZ is recognized as a leader in their industry. They've raised significant funding, expanded their team, and continue to innovate at a rapid pace.

**The Role of Technology**

Having the right technology foundation was critical to Startup XYZ's success. Our platform gave them enterprise-grade capabilities from day one, allowing them to compete with much larger competitors.`,
  },
}

export async function generateMetadata({ params }) {
  const post = mockPosts[(await params).slug]
  if (!post) return {}
  
  return {
    title: `${post.title} - Request Finance`,
    description: post.excerpt,
    keywords: [
      'customer success story',
      'case study',
      'spend management',
      'business finance',
      'corporate cards',
      'accounts payable',
      'fintech',
      ...(post.categories?.map(cat => cat.title.toLowerCase()) || []),
    ],
    openGraph: {
      title: `${post.title} - Request Finance`,
      description: post.excerpt,
      url: `https://requestfinance.com/customers/${post.slug}`,
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
      title: `${post.title} - Request Finance`,
      description: post.excerpt,
      images: ['/images/thumbnail.png'],
    },
    alternates: {
      canonical: `https://requestfinance.com/customers/${post.slug}`,
    },
  }
}

export default async function CustomerStory({ params }) {
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
                    href={`/customers?category=${category.slug}`}
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
                <Button variant="outline" href="/customers">
                  <ChevronLeftIcon className="size-4" />
                  Back to customers
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

