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
  'stablecoins-how-they-work-and-what-they-mean-for-your-business': {
    slug: 'stablecoins-how-they-work-and-what-they-mean-for-your-business',
    title: 'Stablecoins: How They Work and What They Mean for Your Business',
    excerpt:
      'Learn about the pros and cons of the different types of stablecoins, and what it means for your business.',
    publishedAt: new Date().toISOString().slice(0, 10),
    author: { name: 'Request Finance', image: null },
    mainImage: '/blog/stablecoins-how-they-work-and-what-they-mean-for-your-business.png',
    categories: [{ slug: 'stablecoins', title: 'Stablecoins' }],
    body: `Cryptocurrencies are increasingly popular among businesses, especially for cross-border payments. A recent [survey](https://www.pymnts.com/wp-content/uploads/2022/06/PYMNTS-Paying-With-Cryptocurrency-June-2022.pdf) found that 85% of businesses with more than $1 billion in annual sales see crypto payments as a way to reach new customers, while 77% are using crypto for lower transaction fees.

But one major concern that has hampered their adoption is their extreme volatility.

Amidst the volatility that characterizes many cryptocurrencies, stablecoins have emerged as a crucial financial instrument. They have all the benefits of blockchain-based currencies, without the volatility.

As businesses increasingly integrate these stablecoins into their financial operations, it's essential to understand how they work, the types available, and their pros and cons.

**What Are Stablecoins?**

Stablecoins, as the name suggests, are a class of cryptocurrencies designed to maintain price stability. Unlike highly volatile cryptocurrencies, stablecoins are pegged to the price of more stable assets like fiat currencies, or commodities like gold.

This reduced volatility makes them ideal for enterprise payments, or as cash management instruments in corporate treasuries. The pegging mechanisms vary, but they all share a common goal: ensuring that their value remains relatively constant, thereby minimizing the price fluctuations typically associated with the crypto market.

What are the key differences in stablecoin designs, and how do they matter for enterprises? Below, we explore three primary types: fiat-collateralized, crypto-collateralized, and algorithmic stablecoins.

**1. Fiat-Collateralized Stablecoins**

The most prevalent type, fiat-collateralized stablecoins, are backed by reserves of fiat currency. For instance, if a stablecoin is pegged to the US Dollar, the issuer must hold a corresponding amount of USD to uphold the stablecoin's value.

Prominent examples include [Tether (USDT)](https://tether.to/) and [USD Coin (USDC)](https://www.circle.com/en/usdc). Tether, the most widely recognized and utilized stablecoin, is tethered to the US Dollar, with each USDT token supposedly backed by one USD held in reserve. Tether is commonly used as a trading pair on cryptocurrency exchanges and as a means of transferring value between different platforms.

USD Coin, a project from Circle and Coinbase, is also pegged to the USD. The companies behind USDC claim to maintain a 1:1 collateralization ratio, providing regular attestation reports from top auditing firms to ensure transparency and trust.

**2. Crypto-Collateralized Stablecoins**

In contrast, crypto-collateralized stablecoins are backed by other cryptocurrencies. These stablecoins operate through smart contracts, and users need to lock up a certain amount of cryptocurrency as collateral. The system then generates an equivalent value of stablecoins.

Examples include [Dai (DAI)](https://makerdao.com/) and [sUSD (sUSD)](https://synthetix.io/). Dai, operating on the MakerDAO platform, is backed by various cryptocurrencies, primarily Ether (ETH). The system allows users to lock up their ETH as collateral and generate Dai tokens, which they can later unlock by repaying the locked ETH.

sUSD is the stablecoin of the Synthetix platform, which enables users to create synthetic assets on the Ethereum blockchain. It is backed by SNX, the native utility token of the Synthetix platform, which users stake as collateral to mint sUSD.

**3. Algorithmic Stablecoins**

Unlike the above two, algorithmic stablecoins operate without direct collateral backing. They depend on algorithms to adjust their supply, ensuring their value remains stable. When the price of the stablecoin rises, the algorithm mints new coins to reduce the price. Conversely, if the price falls, the algorithm buys back stablecoins to increase their value. While this model theoretically maintains stability, it can be affected by market sentiment and user adoption.

Notable algorithmic stablecoins include [Ampleforth (AMPL)](https://www.ampleforth.org/) and [Frax (FRAX)](https://frax.finance/). Ampleforth adjusts its supply based on demand, giving an elastic supply model that aims to maintain a stable price of approximately $1. Frax takes an interesting approach where it combines elements of both algorithmic and collateralized stablecoins. It uses a fractional-algorithmic approach, meaning that it's partially backed by collateral (USDC) while also utilizing algorithms to maintain its peg to the US Dollar.

**Pros and Cons of Different Stablecoins for Businesses**

Each type of stablecoin carries advantages and potential challenges for businesses. Here, we explore the pros and cons of each stablecoin type concerning businesses.

**1. Fiat-Collateralized Stablecoins**

Tether has faced its share of controversies, with concerns over its actual fiat reserves and allegations of market manipulation. However, it remains a dominant stablecoin in the crypto market, with [a massive daily trading volume of nearly $18 billion](https://coinmarketcap.com/currencies/tether/), indicating widespread adoption and usage.

USD Coin, on the other hand, has gained a reputation for its regulatory compliance efforts and the transparency it provides through regular audits. Its growing popularity further emphasizes the demand for fiat-collateralized stablecoins as a reliable means of preserving value.

**Pros**

- Transparency and trust: issuers hold an equivalent amount of fiat in reserve
- Stability: value is tied to established fiat currencies
- Widely accepted across exchanges and platforms, making them [easily accessible to businesses to on-ramp and off-ramp](https://www.request.finance/post/methods-and-best-practices-for-on-ramp-and-off-ramp)

**Cons**

- Centralization: these stablecoins depend on centralized entities to manage reserves
- Auditing requirements: ensuring proper collateralization requires regular auditing, which can be resource-intensive

**2. Crypto-Collateralized Stablecoins**

Crypto-collateralized stablecoins are celebrated for their decentralized nature and the ability to operate without direct reliance on central entities. The fluctuating prices of the underlying collateral, however, can expose these stablecoins to volatility. In times of extreme market turbulence, the value of the collateral may drop significantly, potentially leading to under-collateralization. The MakerDAO platform experienced such an issue during the ["Black Thursday" event in March 2020](https://www.cryptoeq.io/corereports/maker-abridged), when the rapid decline of Ether's price led to a system-wide liquidation of collateralized positions.

**Pros**

- Decentralization gives companies security and autonomy of their financial assets
- Decentralization offers a layer of protection against sudden political upheavals or changes in policy that might jeopardize your assets (e.g. [sudden changes in regulations](https://www.scmp.com/economy/china-economy/article/3114552/chinas-small-exporters-see-bank-accounts-frozen-amid-massive), or [frozen accounts](https://www.engadget.com/paypal-lawsuit-freezing-customer-accounts-funds-073128563.html) and [$2,500 deductions](https://twitter.com/GayRepublicSwag/status/1585151345610600448) by payment processors)
- No banking dependencies: as these stablecoins don't rely on fiat reserves, they eliminate the need for banking partnerships

**Cons**

- Volatility risk: exposure to the price fluctuations of underlying cryptocurrencies
- Overcollateralization: a significant amount of cryptocurrency is often locked up as collateral, which can tie up capital for businesses

**3. Algorithmic Stablecoins**

Algorithmic stablecoins offer an intriguing approach to maintaining stability without relying on direct collateral. However, their effectiveness can be influenced by factors like market sentiment and user adoption. The price dynamics can sometimes lead to periods of instability, and in extreme cases they may temporarily deviate significantly from their intended peg. Users and businesses should carefully consider the mechanisms of these stablecoins and assess their risk appetite before engaging with them.

**Pros**

- Decentralization: they don't rely on centralized collateral reserves
- Innovation potential: this model opens up possibilities for unique DeFi applications and innovative financial solutions for businesses

**Cons**

- Complexity: the algorithms can be complex, making it challenging for businesses to grasp their underlying mechanisms fully
- Market sentiment vulnerability: algorithmic stablecoins can be influenced by market sentiment, potentially leading to price fluctuations

**Implementing Stablecoin Payments to Your Web3 Business**

Depending on your specific needs and risk tolerance, you must carefully choose the most suitable stablecoin for your financial operations.

[IMAGE:/blog/most-popular-payment-currency.png]

At Request Finance, USDC stands out as the cryptocurrency of choice, accounting for [over 33% of all crypto payments](https://www.request.finance/post/request-finance-in-numbers-july-2023-new-ath-in-crypto-payments) made predominantly by our enterprise clientele. USD-pegged stablecoins remain a favored option for enterprise crypto payments, representing 57% of all crypto payments processed.

As one of the largest crypto payroll solutions with [nearly $350 million in total crypto payments volume](https://www.request.finance/post/request-finance-in-numbers-june-2023), Request Finance [supports over 10 types of stablecoins](https://app.gitbook.com/@request-network/s/support/currencies-supported) to help Web3 businesses send and receive stablecoins easily. Learn how you can simplify and automate your stablecoin payments with Request Finance [here](https://www.request.finance/post/we-just-made-crypto-payroll-better).`,
  },
}

// Parse [text](url) in paragraphs and return React nodes (text + <a>)
function parseParagraphWithLinks(text) {
  const parts = []
  let lastIndex = 0
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let match
  let key = 0
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <a
        key={`link-${key++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-950 underline data-hover:text-gray-950/75"
      >
        {match[1]}
      </a>
    )
    lastIndex = re.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length ? parts : [text]
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
      title: `${post.title} - Request Finance Blog`,
      description: post.excerpt,
      images: ['https://requestfinance.com/images/thumbnail.png'],
    },
    alternates: {
      canonical: `https://requestfinance.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPost({ params }) {
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
                    const trimmed = paragraph.trim()
                    // Inline image: [IMAGE:/path/to/image.png]
                    if (trimmed.startsWith('[IMAGE:') && trimmed.endsWith(']')) {
                      const src = trimmed.slice(7, -1).trim()
                      return (
                        <figure key={index} className="my-8">
                          <img
                            src={src}
                            alt=""
                            className="w-full rounded-2xl"
                          />
                        </figure>
                      )
                    }
                    // Check if it's a heading
                    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
                      const headingText = trimmed.slice(2, -2)
                      return (
                        <h2 key={index} className="mt-12 mb-6 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0">
                          {headingText}
                        </h2>
                      )
                    }
                    // List: every line starts with "- "
                    const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean)
                    if (lines.length > 0 && lines.every(l => l.startsWith('- '))) {
                      return (
                        <ul key={index} className="my-6 list-disc space-y-2 pl-6 text-base/8 first:mt-0">
                          {lines.map((line, i) => (
                            <li key={i}>{parseParagraphWithLinks(line.slice(2))}</li>
                          ))}
                        </ul>
                      )
                    }
                    // Regular paragraph (may contain [text](url) links)
                    return (
                      <p key={index} className="my-6 text-base/8 first:mt-0 last:mb-0">
                        {parseParagraphWithLinks(trimmed)}
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
