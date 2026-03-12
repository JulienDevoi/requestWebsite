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
  'streamlining-crypto-accounting-at-scale': {
    slug: 'streamlining-crypto-accounting-at-scale',
    title: 'Streamlining Crypto Accounting at Scale',
    excerpt:
      'How a decentralised governance research group simplified crypto reconciliation and month-end reporting with Request Accounting.',
    publishedAt: '2025-03-07',
    author: { name: 'Governance research group', image: null },
    mainImage: '/customers/web3.png',
    categories: [{ slug: 'case-studies', title: 'Case Studies' }],
    body: `Managing cryptocurrency payments and accounting across 200 wallets, multiple entities, and various blockchains sounds like chaos. For this research-driven group focused on governance, decentralisation, and technology, it was—until they adopted Request Accounting. The platform helped them reduce month-end close time by 90%, provided a unified portfolio view across blockchains, and streamlined vendor payments. With seamless ERP integration, flexible reporting, and strong customer support, Request became their all-in-one solution for crypto finance operations.

**The Complexity of Decentralised Operations**

This research collective operates at the cutting edge of decentralised governance and emerging technologies. By nature, their work spans multiple projects, each with different legal entities, operational teams, and financial structures. But this flexibility came at a cost: at one point, the team was managing up to 200 active wallets across a variety of blockchains, resulting in a manual, fragmented, and time-consuming month-end close process.

They needed more than just visibility. They needed:

- A single source of truth across all wallets and chains
- A way to standardise crypto accounting and outputs
- Reliable, fast, and accurate reconciliation workflows
- A solution for working with vendors not yet crypto-native

**Solution**

Request Accounting delivered exactly what the team was looking for. With its multi-chain support, real-time portfolio dashboard, and automated reconciliation features, it became the backbone of their crypto finance operations. In particular, it helped them:

- Reduce manual work by 90% during month-end close
- Gain a real-time portfolio view to monitor liquidity
- Automatically reconcile transactions with control accounts
- Standardise cryptocurrency reports for internal and external needs
- Streamline vendor payments in multiple fiat and crypto currencies

**Why Request Accounting?**

When comparing tools, the team chose Request for several reasons:

- Exchange support: unified views across wallet and exchange accounts
- Flexible reporting: custom outputs tailored to project, legal, or accounting needs
- Great support: a responsive team that collaborates on real feature needs
- Fair pricing: a structure that works well for project-based organisations
- ERP integration: plug-and-play compatibility with their systems

The platform is simple and intuitive. After a brief onboarding session and demo, the team was fully operational: managing reporting and payments with greater speed and accuracy than ever before.

**Results**

The impact was immediate and measurable:

- 90% reduction in monthly close time
- Streamlined cross-border vendor payments
- Consolidated visibility across 200+ wallets and exchange accounts
- Unified crypto reporting for decision-makers
- Increased trust in financial data to inform critical strategic decisions

Today, the team relies exclusively on Request for all crypto reporting and the majority of its crypto payments.

**About the Organisation**

This governance and decentralisation research collective works at the intersection of technology, policy, and crypto ecosystems. With a portfolio of global projects and decentralised teams, they help design future-ready systems across Web3. By turning to Request Accounting and Request Finance, they've brought order to the chaos of multi-chain financial operations: gaining the clarity and control needed to operate at the speed of innovation.`,
  },
  polemos: {
    slug: 'polemos',
    title: 'Polemos - Powering Web3 Gaming at Scale',
    excerpt:
      'How Request Finance helps Polemos streamline fiat and crypto payments to power the next generation of blockchain gaming.',
    publishedAt: '2025-03-12',
    author: { name: 'Polemos', image: null },
    mainImage: '/customers/polemos.png',
    categories: [{ slug: 'case-studies', title: 'Case Studies' }],
    body: `Polemos is building the infrastructure layer for the future of blockchain gaming. From asset management to cross-chain tools and community engagement features, Polemos aims to remove friction for players, guilds, and developers alike. With a global team and a growing list of ecosystem partners, managing payments in both fiat and crypto became a logistical hurdle—manual payments through platforms like Fireblocks and Safe were slowing down operations and draining valuable time from the finance team.

**Problem**

Before adopting Request Finance, Polemos faced a set of recurring challenges:

- Manual crypto payments through Fireblocks and other wallets made payment operations time-consuming
- Recurring fiat invoice payments were especially painful, with no streamlined way to collect, validate, and process them
- Batch payments and handling a growing number of B2B partners added more operational complexity
- As the team scaled across multiple chains, the need for a single, professional platform became critical

**Solution**

As an early supporter of the platform (thanks to a personal connection with co-founder Christophe), Polemos adopted Request Finance more than two years ago to streamline its payment workflows. The platform quickly became indispensable for the company's finance and operations team. Today, Polemos uses Request Finance primarily to:

- Receive and validate invoices from B2B partners
- Pay both crypto and fiat invoices quickly and reliably
- Eliminate manual workflows while improving visibility and traceability

What the team appreciated most was the simplicity and stability of the platform. In just a few clicks, they could validate an invoice and trigger fiat payments—something that used to take hours through legacy systems.

**Results**

Request Finance has significantly improved Polemos's ability to operate at scale. By eliminating manual crypto operations and streamlining fiat payments, the platform saves time, reduces errors, and enables a more agile finance operation. The dashboard gives the team the visibility it needs to stay on top of monthly operations and plan confidently as they prepare for major milestones, such as:

- Onboarding 18+ million Web2 gamers into Web3
- Launching a multi-chain master wallet
- Introducing staking, governance, and social features into their ecosystem
- Preparing for their token generation event (TGE)

As Polemos accelerates toward the next chapter in Web3 gaming, Request Finance remains a key enabler of its operational success.

**About Polemos**

Polemos is a leading Web3 gaming infrastructure platform, supporting seamless onboarding, asset lending, strategic guild operations, and cross-chain engagement tools. Backed by $14M+ in funding and strategic partnerships with networks like Immutable X, Ronin, and Base, Polemos powers major titles like Illuvium and Guild of Guardians, and is preparing to onboard millions of traditional gamers into the Web3 world. Their platform features tools to buy crypto with credit cards (via Stripe), swap assets (via SwapKit), and bridge chains (via ThorSwap), while supporting chains like Ethereum, Polygon, IMX, zkEVM, Root, and more. With a global team and growing ecosystem, Polemos is shaping the future of blockchain gaming, one transaction at a time.`,
  },
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  
  // Validate slug format
  if (!/^[a-z0-9-_]+$/.test(slug) || slug.length > 100 || slug.length < 1) {
    return {}
  }
  
  const post = mockPosts[slug]
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
          url: 'https://requestfinance.com/images/thumbnail.png',
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
      images: ['https://requestfinance.com/images/thumbnail.png'],
    },
    alternates: {
      canonical: `https://requestfinance.com/customers/${post.slug}`,
    },
  }
}

export default async function CustomerStory({ params }) {
  const { slug } = await params
  
  // Validate slug format - alphanumeric, hyphens, underscores only
  if (!/^[a-z0-9-_]+$/.test(slug)) {
    notFound()
  }
  
  // Length validation
  if (slug.length > 100 || slug.length < 1) {
    notFound()
  }
  
  // Additional security: prevent path traversal attempts
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    notFound()
  }
  
  const post = mockPosts[slug]
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
                  {post.body.split('\n\n').map((block, index) => {
                    const trimmed = block.trim()
                    // Section heading: **Heading**
                    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
                      return (
                        <h2 key={index} className="mt-12 mb-6 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0">
                          {trimmed.slice(2, -2)}
                        </h2>
                      )
                    }
                    // List: every line starts with "- "
                    const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean)
                    if (lines.length > 0 && lines.every(l => l.startsWith('- '))) {
                      return (
                        <ul key={index} className="my-6 list-disc space-y-2 pl-6 text-base/8 first:mt-0">
                          {lines.map((line, i) => (
                            <li key={i}>{line.slice(2)}</li>
                          ))}
                        </ul>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={index} className="my-6 text-base/8 first:mt-0 last:mb-0">
                        {trimmed}
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

