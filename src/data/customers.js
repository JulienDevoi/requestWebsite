export const customerCategories = [
  { slug: 'case-studies', title: 'Case Studies' },
  { slug: 'success-stories', title: 'Success Stories' },
  { slug: 'testimonials', title: 'Testimonials' },
]

export const customerStories = {
  'latam-freelancer-payroll': {
    slug: 'latam-freelancer-payroll',
    title: 'How a US staffing firm cut payroll fees from 8% to under 1%',
    excerpt:
      'A Florida-based recruitment company processing $100K+ in monthly LATAM freelancer payroll replaced costly Binance P2P conversions with Request Finance stablecoin payouts.',
    publishedAt: '2026-08-08',
    author: { name: 'US staffing firm', image: null },
    mainImage: '/images/saas.jpg',
    featured: true,
    categories: ['case-studies'],
    useCases: ['recurring-payments'],
    highlights: [
      { label: 'Payment fees', value: '8% → <0.5%' },
      { label: 'Monthly payroll', value: '$100K+' },
      { label: 'Freelancers paid', value: '100+ / month' },
    ],
    summary:
      'A Florida-based staffing firm placing 80–100 LATAM freelancers each month was losing up to 8% on every payroll cycle through Binance P2P conversions. After moving to Request Finance, they fund one Business Account via wire and pay every freelancer in USDT at a fraction of the cost.',
    body: `A Florida-based recruitment and sourcing company places 80 to 100 freelancers from Latin America every month. With operations across the US and Canada and over $100,000 in monthly freelancer payroll, stablecoin payouts had become essential — but the process of getting there was anything but efficient.

**The Problem**

To pay freelancers in USDT, the team was converting USD through Binance P2P. Fees regularly reached 8%, and every transaction required back-and-forth negotiation. There was no central system to manage payroll, track payment status, or handle USD and CAD to stablecoin conversion at scale. Each month meant manual work, unpredictable costs, and zero visibility into what had actually been paid.

**The Solution**

The company onboarded onto Request Finance and funded their [Business Account](https://www.requestfinance.com/products/business-account) with a single wire transfer. From there, they pay all freelancers in USDT directly to their wallets each month — at an onramp fee of 0.3%, down from up to 8% on Binance P2P.

No more negotiations. No more manual conversions. One account, one transfer, 100+ payments in two clicks.

**Results**

- Payment fees reduced from up to 8% to under 0.5%
- $100K+ in monthly stablecoin payroll processed through Request Finance
- 100+ payments per month to LATAM freelancers completed in seconds
- Full AP visibility with invoice management and approval workflows

**Why It Matters**

The LATAM diaspora represents one of the largest cross-border payment corridors in the world. For US-based companies sourcing talent from Argentina, Venezuela, Colombia, or Brazil, traditional banking and P2P crypto exchanges are slow, expensive, and unpredictable. Request Finance gives these companies the infrastructure to pay in stablecoins at near-zero cost — no negotiations, no intermediaries.

**About the Company**

This Florida-based recruitment and sourcing firm operates across the US and Canada, placing freelance talent from Latin America with clients who need flexible, remote workforces. With a growing roster of 80 to 100 active freelancers each month, reliable and cost-effective payroll is central to their business model.`,
  },
  'whatever-digital-influencer-payments': {
    slug: 'whatever-digital-influencer-payments',
    title: 'How Whatever Digital pays 40+ influencers in seconds',
    excerpt:
      'Whatever Digital replaced hours of manual influencer payments across multiple jurisdictions with batch stablecoin and fiat payouts through Request Finance.',
    publishedAt: '2026-08-09',
    author: { name: 'Whatever Digital', image: null },
    mainImage: '/images/affiliates.jpg',
    featured: true,
    categories: ['case-studies'],
    useCases: ['content-creator-payouts'],
    highlights: [
      { label: 'Processing time', value: 'Hours → seconds' },
      { label: 'Contractors paid', value: '40+ monthly' },
      { label: 'Monthly volume', value: '$80K+' },
    ],
    summary:
      'Whatever Digital connects brands with influencers across Europe. As their contractor network grew past 40 people, bank transfers failed in key markets and each payment cycle consumed hours. Request Finance let them batch-pay everyone — stablecoin or fiat — from a single Business Account.',
    body: `Whatever Digital is a marketing agency connecting brands with influencers across Europe. With 40+ contractors and a growing roster, they manage monthly payments to creators across multiple jurisdictions — a mix of fiat and stablecoin depending on where each influencer banks.

**The Problem**

As the business scaled, paying influencers became a bottleneck. Bank transfers worked for some contractors but failed entirely in certain jurisdictions — some influencers simply could not be reached via traditional banking. Each payment cycle took hours of manual work across processing and reconciliation, and contractors regularly experienced late or failed payments. With more influencers onboarding every month, the process was not sustainable.

**The Solution**

Whatever Digital onboarded onto Request Finance with USD and Euro virtual accounts approved via KYB. They now run [batch payments](https://www.requestfinance.com/use-cases/content-creator-payouts) to 40+ contractors in a single flow — stablecoin where needed, fiat where preferred — directly from their Request Business Account. Their accountant is connected to QuickBooks for automatic reconciliation.

**Results**

- Payment processing time reduced from hours to seconds
- 40 contractors paid monthly across multiple jurisdictions, including markets unreachable by bank
- $80K+ in monthly contractor payments processed through Request Finance
- Zero failed payments due to jurisdiction issues
- Reconciliation automated via QuickBooks integration

**Why It Matters**

The influencer economy is borderless by nature. Creators are everywhere, and paying them reliably — regardless of where they bank — is increasingly the difference between a smooth operation and a scaling nightmare. Request Finance gives marketing agencies one place to pay anyone, in any currency, without the manual overhead.

**About Whatever Digital**

Whatever Digital is a European marketing agency that connects brands with influencers and content creators. As their network of contractors grows across multiple countries and payment preferences, they rely on Request Finance to keep payouts fast, reliable, and fully reconciled.`,
  },
  'ub-ads-media-affiliate-payments': {
    slug: 'ub-ads-media-affiliate-payments',
    title: 'How UB Ads Media unified affiliate payouts across 4 countries',
    excerpt:
      'UB Ads Media replaced four fragmented local payment gateways with a single Request Business Account to pay publishers across South Korea, Australia, Malaysia, and Indonesia.',
    publishedAt: '2026-08-10',
    author: { name: 'UB Ads Media', image: null },
    mainImage: '/images/gaming-betting.jpg',
    featured: true,
    categories: ['case-studies'],
    useCases: ['affiliate-payments'],
    highlights: [
      { label: 'First month volume', value: '$120K+' },
      { label: 'Markets unified', value: '4 countries' },
      { label: 'Local gateways replaced', value: '4 → 1' },
    ],
    summary:
      'UB Ads Media operates an affiliate network across South Korea, Australia, Malaysia, and Indonesia. Four local payment gateways meant fragmented fees, compliance headaches, and payouts appearing under provider names instead of their own. Request Finance replaced all of it with one Business Account.',
    body: `UB Ads Media is a digital media and affiliate marketing company operating across South Korea, Australia, Malaysia, and Indonesia. They connect major advertisers — including Shopee, Booking, and Amazon — with publishers, collecting advertiser funds and distributing payouts across a complex multi-jurisdiction network.

**The Problem**

Operating across four countries meant relying on four different local payment gateways — each with its own fees, limitations, and compliance requirements. In South Korea alone, crypto transactions were regularly flagged by banks, making stablecoin payouts nearly impossible. Local gateways charged roughly 4.5 KRW plus 10% VAT per pay-in, and publishers in certain jurisdictions simply could not be reached reliably.

The bigger issue: payouts were appearing from the payment provider's name rather than UB Ads Media, creating reconciliation confusion and trust issues with publishers. With $400K+ held across local accounts in Korea alone, repatriating funds efficiently was becoming a serious operational bottleneck.

**The Solution**

UB Ads Media onboarded onto Request Finance with a [Business Account](https://www.requestfinance.com/products/business-account) in their company name. They now collect advertiser funds, repatriate from local gateways via USD SWIFT, and pay publishers in both stablecoin and fiat across all four markets from a single account.

Payouts appear under the UB Ads Media name, eliminating reconciliation confusion. The transparent fee structure replaced the patchwork of local gateway costs.

**Results**

- $120K+ in payments processed in their first month
- Publishers paid across South Korea, Australia, Malaysia, and Indonesia from one account
- Stablecoin and fiat payouts in a single flow
- Company-named transactions — no more provider names on publisher payouts
- Replaced multiple local gateways with one platform

**Why It Matters**

Affiliate networks are inherently global — advertisers in one country, publishers in another, funds moving constantly across jurisdictions. Local payment gateways solve one market but create fragmentation at scale. Request Finance gives affiliate and performance marketing companies a single financial infrastructure to collect, hold, and distribute across borders in fiat and stablecoin, under their own company name.

**About UB Ads Media**

UB Ads Media is a digital media and affiliate marketing company connecting major advertisers with publishers across Asia-Pacific. With operations spanning South Korea, Australia, Malaysia, and Indonesia, they process high-volume payouts to a distributed network of affiliate partners.`,
  },
  'streamlining-crypto-accounting-at-scale': {
    slug: 'streamlining-crypto-accounting-at-scale',
    title: 'Streamlining Crypto Accounting at Scale',
    excerpt:
      'How a decentralised governance research group simplified crypto reconciliation and month-end reporting with Request Accounting.',
    publishedAt: '2025-03-07',
    author: { name: 'Governance research group', image: null },
    mainImage: '/customers/web3.png',
    featured: true,
    categories: ['case-studies'],
    useCases: [],
    highlights: [],
    summary: '',
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
    featured: true,
    categories: ['case-studies'],
    useCases: [],
    highlights: [],
    summary: '',
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
    featured: true,
    categories: ['case-studies'],
    useCases: [],
    highlights: [],
    summary: '',
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

On the ground, the team has specialists to oversee the day-to-day asset management activities like assessing and tokenizing properties, managing tenants, and rent payments. Compliance is also a core pillar of the company. Sherri Perlski, CFO & CCO of RealT, formerly leading divisions of investment funds such as Black Rock, Natixis, and ensures RealT remains in line with US (SEC) and French (AMF) regulations.`,
  },
}

export function getAllCustomerStories() {
  return Object.values(customerStories)
}

export function getCustomerStoryBySlug(slug) {
  return customerStories[slug] || null
}

export function getCustomerStoryByUseCase(useCaseSlug) {
  return getAllCustomerStories().find((story) =>
    story.useCases?.includes(useCaseSlug),
  )
}

export function getAllCustomerSlugs() {
  return Object.keys(customerStories)
}

export function getCustomerStoriesForListing() {
  return getAllCustomerStories().map((story) => {
    const { body: _body, highlights: _highlights, summary: _summary, useCases: _useCases, ...listing } = story
    return listing
  })
}
