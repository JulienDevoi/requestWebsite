import Image from 'next/image'
import { siteUrl } from '@/lib/config'
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

function renderInlineLinks(text) {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    parts.push(
      <a
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-700"
      >
        {match[1]}
      </a>
    )

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

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
  'tokenizing-a-real-estate-empire-with-realt': {
    slug: 'tokenizing-a-real-estate-empire-with-realt',
    title: 'Tokenizing a Real Estate Empire with RealT',
    excerpt:
      'How RealT used Request Finance on Gnosis Chain for USDC payouts, xDAI billing, and a WooCommerce checkout gateway—plus results and the full RealT story.',
    publishedAt: '2025-03-13',
    author: {
      name: 'RealT',
      image:
        'https://cdn.prod.website-files.com/606beb3c434b8b5fced72854/627e67b9c939f344a667d0a5_Icon%20realT.jpeg',
    },
    mainImage: '/customers/realt/realt.png',
    categories: [{ slug: 'case-studies', title: 'Case Studies' }],
    body: `**Problem**

Investors in RealT were facing difficulties with their distribution payouts in USDC on the [Gnosis Chain](https://www.gnosis.io/). They had no easy way to reinvest that income into buying new RealTokens.

RealT's attempts to get existing payment processing partners to support crypto payments on Gnosis Chain were unsuccessful, and the available alternatives were costly and complex. The challenges included:

- Lack of support for crypto payments on Gnosis Chain by existing partners
- Difficulty in reinvesting distribution payouts
- Inability to set up bill payments in xDAI in addition to USDC, leading to a poor user experience
- High fees charged by other platforms for processing crypto payments

[IMAGE:/customers/realt/6508097b46fe3499151cc597_realt.png]

**Solution**

RealT found a comprehensive solution in [Request Finance](https://request.finance/), which addressed all the above challenges:

- Request Finance enabled the simplicity and speed of accepting payments in xDAI, allowing RealT's customers to reinvest their distribution payouts.
- It also made billing RealT's users in crypto easy, with a pricing plan that was far lower than any alternatives.
- RealT uses Request Finance to accept payments on Gnosis Chain, in USD stablecoins like USDC when investors want to buy new real estate assets or insurance products in RealT. This is the primary way their users receive distribution payouts from their tokenized real estate assets, so it is critical that they are able to easily spend those stablecoins in-app.
- Request Finance now serves as a payment gateway in RealT's checkout process. This required them to write a custom gateway plugin for [WooCommerce](https://woocommerce.com/). At checkout, a Request invoice is generated, along with a polling job to check the Request API for updates. Orders are updated based on poll responses.

[IMAGE:/customers/realt/realt-how-it-works.png]

**Increased customer base, lower transaction costs**

Michael Courvoisier, COO at RealT, initiated the integration, and their Lead Web Engineer, Ben Hoverter, ensured its technical feasibility and handled implementation.

The process involved three basic steps:

- (i) setting up the Auth0 credentialing call
- (ii) setting up the invoice creation call
- (iii) setting up the invoice status poll

The integration provided RealT's customers a little pressure relief when subscribing to new property listings, as they don't have to be 100% certain that their wallet is properly funded before checkout, since they have some time to finalize their payment. Those factors significantly improve quality of life for everyone.

> "Since we started using Request Finance, we have seen an uptick in new customers, a larger average basket at checkout, and lower transaction fees. It makes billing our users in crypto easy, and the 0.1% fee charged by the platform is far lower than any alternatives out there. The responsiveness of the support team has been tremendously helpful, saving us hours of labor along with customer frustration."

> Jeremiah Wagstaff, CEO and Co-founder at Subspace Labs

[IMAGE:/customers/realt/realt-sales.png]

**About RealT**

Some of the best startup founders are seasoned industry insiders. Armed with intimate insights into the workings of an industry, they are best positioned to revolutionize the way things are done at the world's largest and oldest trades. And few can claim to be as old—or as resistant to disruption—as selling real estate. That's exactly what two brothers, Jean Marc Jacobson and Remy Jacobson, are doing with [RealT](https://realt.co/)—a blockchain-based real estate tokenization platform.

It would be an understatement to say that the Jacobsons know a thing or two about real estate. Jean Marc, the eldest of the pair, began his career in real estate in 1993, with Remy joining him seven years later. Nearly three decades on, they have successfully amassed an impressive real estate portfolio. Together, the Jacobson brothers say they currently own and manage an estimated 18,000 units in Montreal, Canada.

While realtors rarely make the headlines for innovation, the pair have always been eager early adopters of new technologies. As early as 2011, they set up a Bitcoin mining company and launched the world's first Bitcoin Embassy two years later—a space where Canada's crypto-community and startups came together to form a blockchain hub in Montreal.

But it wasn't until late 2018, when clarifications from the U.S. Securities and Exchange Commission (SEC) around token regulations enabled the Jacobson brothers to marry their love for both blockchain and real estate. At the time, utility token initial coin offerings were all the rage. But the brothers saw a clear and compelling opportunity to tokenize smaller real estate assets to make them more accessible, and liquid to smaller investors.

Listing real estate assets on a stock exchange through traditional real estate investment trusts, or REITs, is incredibly complex and costly—limiting the size and type of assets that could be made available to smaller investors. But by tokenizing shares in a limited liability company (LLC) that owns a title deed to a property, smaller yet equally attractive assets can also be collectively owned by token holders.

[IMAGE:/customers/realt/realt-vs.png]

The platform allows investors from all over the world to own a slice of real estate, with as little as $50. RealTokens are a digital representation of ownership in the LLC that owns the deed to the property. Each property on RealT has its own set of unique, ERC-20 RealTokens associated with it.

More importantly, RealT eliminates the hassle, delay, fees and paperwork typically involved in renting out or selling a property. This is thanks to DeFi innovations like stablecoins, and decentralized exchanges that facilitates secondary trading of RealTokens.

Token holders can receive their distribution payouts via cryptocurrencies like USDC from the asset management company, or buy or sell their RealTokens in 2 clicks. Integrations with leading DeFi protocols like [Uniswap](https://uniswap.org/) and Swapcat allow peer-to-peer exchanges around the clock, slashing the time to purchase real estate from a minimum of 30 days, to just 30 minutes with RealT.

Today, RealT has become a market leader in real estate tokenization. Launched at the end of 2019, RealT has built a loyal and ever-growing community of over 7,500 active investors in 125 different countries, and more than 18,000 registered users. RealT has already tokenized over 200 properties in the United States worth over $45 million, ranging from single-family homes to larger multi-family apartment buildings.

Despite all this, the Jacobson brothers aren't content to merely democratize access to real estate investments. They have been hard at work enhancing the in-app experience for investors. In March 2021, the company partnered with leading crypto wallet provider, [Mt Pelerin](https://mtpelerin.com/) to develop the RealT mobile wallet, which lets investors using RealT to manage their real estate portfolios easily, and transfer their sale or rental income directly into their bank account.

In addition to the basic insurance that already covers things like fire and water damage for all of RealT's properties, a partnership with the decentralized insurance protocol, Opium Network, allows RealT's users to buy insurance against the loss of rental income from such business interruptions.

Over this year, the RealT team has been expanding the DeFi services available to investors. In early 2022, they launched the Real Market Maker, or RMM, a borrowing platform allowing RealTokens to be posted as collateral. For the first time in history, investors are able to borrow against their real estate collateral in a privacy-preserving, permissionless manner. By the year's end, RealT will launch its governance token, REG, in order to gradually decentralize control over the protocol.

Like every other disruptor, RealT has grown to be bigger than just the visionary pair that co-founded the company. The current team of about twenty, have specialized competencies in critical components of the entire value chain.

On the ground, the team has specialists to oversee the day-to-day asset management activities like assessing and tokenizing properties, managing tenants, and rent payments. Compliance is also a core pillar of the company. Sherri Perlski, CFO & CCO of RealT, formerly leading divisions of investment funds such as Black Rock, Natixis, and ensures RealT remains in line with US (SEC) and French (AMF) regulations.

The company also has a strong team of experts in the DeFi space like their COO, Michael Courvoisier, who also advises various projects, like [Jarvis Network](https://jarvis.network/) and Mt Pelerin, as well as their advisors, Anton Bukov and Sergej Kunz—co-founders of the decentralized exchange aggregator, [1inch](https://1inch.io/).`,
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
      url: `${siteUrl}/customers/${post.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: `${siteUrl}/images/thumbnail.png`,
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
      images: [`${siteUrl}/images/thumbnail.png`],
    },
    alternates: {
      canonical: `${siteUrl}/customers/${post.slug}`,
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Customers', item: `${siteUrl}/customers` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/customers/${post.slug}` },
    ],
  }

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
                <div className="relative mb-10 aspect-3/2 w-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    alt={post.title}
                    src={post.mainImage}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
              )}
              {post.body && (
                <div className="prose prose-gray max-w-none">
                  {post.body.split('\n\n').map((block, index) => {
                    const trimmed = block.trim()
                    // Inline image: [IMAGE:/path] or [IMAGE:https://...]
                    if (trimmed.startsWith('[IMAGE:') && trimmed.endsWith(']')) {
                      const src = trimmed.slice(7, -1).trim()
                      return (
                        <figure key={index} className="my-8">
                          <img
                            src={src}
                            alt=""
                            className="w-full rounded-2xl shadow-lg"
                          />
                        </figure>
                      )
                    }
                    // Block quote: lines prefixed with ">"
                    const quoteLines = trimmed
                      .split('\n')
                      .map((line) => line.trim())
                      .filter(Boolean)
                    if (
                      quoteLines.length > 0 &&
                      quoteLines.every((line) => line.startsWith('>'))
                    ) {
                      return (
                        <blockquote
                          key={index}
                          className="my-8 border-l-4 border-gray-300 pl-6 text-lg/8 text-gray-700 italic"
                        >
                          {quoteLines.map((line, i) => (
                            <p key={i} className={i > 0 ? 'mt-3 not-italic text-base/7 text-gray-600' : ''}>
                              {renderInlineLinks(line.replace(/^>\s?/, ''))}
                            </p>
                          ))}
                        </blockquote>
                      )
                    }
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
                            <li key={i}>{renderInlineLinks(line.slice(2))}</li>
                          ))}
                        </ul>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={index} className="my-6 text-base/8 first:mt-0 last:mb-0">
                        {renderInlineLinks(trimmed)}
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

