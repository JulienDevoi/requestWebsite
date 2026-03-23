import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Steps } from '@/components/steps'
import { Testimonials } from '@/components/testimonials'
import { LogoCloud } from '@/components/logo-cloud'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Switch to Request Finance — vs Ramp, Brex & Airwallex',
  description:
    'See how Request Finance compares to other spend management platforms. Built for global companies, powered by stablecoins, simplified for everyone.',
  keywords: [
    'ramp alternative',
    'brex alternative',
    'airwallex alternative',
    'ramp vs brex',
    'ramp vs airwallex',
    'brex vs airwallex',
    'request finance comparison',
    'corporate card comparison',
    'spend management comparison',
  ],
  openGraph: {
    title: 'Switch to Request Finance — vs Ramp, Brex & Airwallex',
    description:
      'See how Request Finance compares to other spend management platforms. Built for global companies, powered by stablecoins, simplified for everyone.',
    url: 'https://requestfinance.com/alternative-to',
    siteName: 'Request Finance',
    images: [
      {
        url: 'https://requestfinance.com/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Switch to Request Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://requestfinance.com/alternative-to',
  },
}

const competitors = ['Request Finance', 'Ramp', 'Brex', 'Airwallex']

const comparisonData = [
  {
    category: 'Corporate Cards',
    features: [
      { name: 'Virtual cards', values: [true, true, true, true] },
      { name: 'Physical cards', values: [true, true, true, true] },
      { name: 'Real-time spend controls', values: [true, true, true, 'Basic'] },
      { name: 'Per-card spending limits & merchant restrictions', values: [true, true, true, 'Partial'] },
      { name: 'Cards work in 190+ countries', values: [true, false, 'Partial', true] },
      { name: 'Fund cards with stablecoins', values: [true, false, false, false] },
      { name: 'No hidden FX markup on international spend', values: [true, false, false, false] },
      { name: 'Issue cards to non-US team members', values: [true, false, 'Partial', true] },
    ],
  },
  {
    category: 'Accounts Payable',
    features: [
      { name: 'Invoice capture & management', values: [true, true, true, 'Basic'] },
      { name: 'Multi-level approval workflows', values: [true, true, true, 'Partial'] },
      { name: 'Batch payments (mass payout)', values: [true, true, 'Partial', true] },
      { name: 'Pay via ACH', values: [true, true, true, true] },
      { name: 'Pay via SEPA', values: [true, false, false, true] },
      { name: 'Pay via SWIFT', values: [true, false, false, true] },
      { name: 'Pay via SPEI (Mexico)', values: [true, false, false, 'Partial'] },
      { name: 'Pay via Faster Payments (UK)', values: [true, false, false, true] },
      { name: 'Pay vendors in stablecoins (USDC, USDT)', values: [true, false, false, false] },
      { name: 'Offramp: crypto → fiat to vendor bank', values: [true, false, false, false] },
      { name: 'Contractor & freelancer payments worldwide', values: [true, 'Partial', 'Partial', true] },
    ],
  },
  {
    category: 'Global Operations',
    features: [
      { name: 'Dedicated USD account per entity', values: [true, false, false, true] },
      { name: 'Multi-currency accounts', values: [true, false, false, true] },
      { name: 'Multi-entity management', values: [true, true, true, true] },
      { name: 'Vendor payments in 190+ countries', values: [true, false, 'Partial', true] },
      { name: 'Transparent, competitive FX rates', values: [true, 'Partial', 'Partial', true] },
      { name: 'Stablecoin treasury management', values: [true, false, false, false] },
      { name: 'Yield on idle balances', values: ['Coming soon', false, false, false] },
      { name: 'No revenue minimums or complex pricing', values: [true, true, false, true] },
      { name: 'Onboarding in under 5 minutes', values: [true, true, false, false] },
    ],
  },
  {
    category: 'Integrations & Accounting',
    features: [
      { name: 'QuickBooks / Xero sync', values: [true, true, true, true] },
      { name: 'NetSuite & ERP integrations', values: [true, true, true, true] },
      { name: 'Accrual accounting built-in', values: [true, false, false, false] },
      { name: 'Bank account connections', values: [true, true, true, true] },
      { name: 'Crypto wallet connections (MetaMask, Safe, Ledger)', values: [true, false, false, false] },
      { name: 'Receipt management', values: [true, true, true, 'Partial'] },
    ],
  },
  {
    category: 'Security & Compliance',
    features: [
      { name: 'SOC 2 compliance', values: [true, true, true, true] },
      { name: 'Role-based access controls', values: [true, true, true, true] },
      { name: 'Complete audit trail', values: [true, true, true, 'Partial'] },
      { name: 'Double payment protection', values: [true, false, false, false] },
      { name: 'Scam & fraud vigilance tools', values: [true, 'Partial', 'Partial', 'Partial'] },
      { name: 'Insurance coverage', values: [true, true, true, 'Partial'] },
    ],
  },
]

const platformSummaries = [
  {
    name: 'Request Finance',
    slug: null,
    tagline: 'The complete spend management platform',
    description: 'Corporate cards, accounts payable, stablecoin payments, and accrual accounting — all in one. Built for global companies that want control, speed, and flexibility.',
    bestFor: 'Global companies, stablecoin-native businesses, multi-entity operations',
    highlight: true,
  },
  {
    name: 'Ramp',
    slug: 'ramp',
    tagline: 'US-focused spend management',
    description: 'Strong corporate card product with good expense management for US-based startups. Falls short on international payments, global accounts, and has zero crypto support.',
    bestFor: 'US-only startups that don\'t need international payment rails',
  },
  {
    name: 'Brex',
    slug: 'brex',
    tagline: 'Enterprise cards for VC-backed companies',
    description: 'Well-known corporate card platform that dropped SMBs to focus on enterprise. Good US card controls but limited global payment infrastructure and no crypto capabilities.',
    bestFor: 'Large US enterprises with VC backing and simple domestic payment needs',
  },
  {
    name: 'Airwallex',
    slug: 'airwallex',
    tagline: 'FX and banking infrastructure',
    description: 'Excellent multi-currency accounts and FX rates. But card controls are basic, AP features feel bolted on, onboarding takes weeks, and there\'s no stablecoin support.',
    bestFor: 'Companies that primarily need FX and multi-currency accounts',
  },
]

function CellValue({ value, isRequestColumn }) {
  if (value === true) {
    return (
      <span className={`inline-flex items-center justify-center size-6 rounded-full ${isRequestColumn ? 'bg-emerald-100' : 'bg-emerald-50'}`}>
        <CheckIcon className={`size-4 ${isRequestColumn ? 'text-emerald-700' : 'text-emerald-600'}`} />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center size-6 rounded-full bg-gray-100">
        <XMarkIcon className="size-4 text-gray-400" />
      </span>
    )
  }
  return (
    <span className="inline-flex items-center text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5 whitespace-nowrap">
      {value}
    </span>
  )
}

function FullComparisonTable() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading>Full comparison</Subheading>
          <Heading as="h2" className="mt-2">
            Every feature, side by side
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg/7 text-gray-600">
            The complete feature comparison across Request Finance, Ramp, Brex, and Airwallex.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {comparisonData.map((group) => (
            <div
              key={group.category}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
            >
              <div className="bg-gray-950 px-6 py-3">
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              </div>

              <div className="hidden lg:grid lg:grid-cols-[1fr_repeat(4,120px)] items-center gap-2 px-6 py-3 border-b border-gray-100 bg-gray-50/50">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</span>
                {competitors.map((name, i) => (
                  <span
                    key={name}
                    className={`text-xs font-medium uppercase tracking-wider text-center ${i === 0 ? 'text-emerald-700' : 'text-gray-500'}`}
                  >
                    {i === 0 ? 'Request' : name}
                  </span>
                ))}
              </div>

              <div className="divide-y divide-gray-100">
                {group.features.map((feature) => (
                  <div key={feature.name}>
                    <div className="hidden lg:grid lg:grid-cols-[1fr_repeat(4,120px)] items-center gap-2 px-6 py-3.5">
                      <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                      {feature.values.map((val, i) => (
                        <div key={i} className="flex justify-center">
                          <CellValue value={val} isRequestColumn={i === 0} />
                        </div>
                      ))}
                    </div>

                    <div className="lg:hidden px-6 py-4">
                      <p className="text-sm font-medium text-gray-900 mb-3">{feature.name}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {competitors.map((name, i) => (
                          <div key={name} className="flex items-center gap-2">
                            <CellValue value={feature.values[i]} isRequestColumn={i === 0} />
                            <span className={`text-xs ${i === 0 ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                              {i === 0 ? 'Request' : name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="https://app.request.finance/signup" target="_blank">Try Request Finance free</Button>
        </div>
      </Container>
    </div>
  )
}

function PlatformCards() {
  return (
    <Container className="py-24">
      <Subheading>At a glance</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        Which platform is right for you?
      </Heading>
      <p className="mt-6 max-w-2xl text-lg/7 text-gray-600">
        Every platform has its strengths. Here&apos;s a quick summary to help you decide.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {platformSummaries.map((platform) => (
          <div
            key={platform.name}
            className={`flex flex-col rounded-2xl p-6 ${
              platform.highlight
                ? 'bg-gray-950 text-white ring-2 ring-gray-950'
                : 'bg-white ring-1 ring-gray-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`text-lg font-semibold ${platform.highlight ? 'text-white' : 'text-gray-950'}`}>
                {platform.name}
              </h3>
              {platform.highlight && (
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Best
                </span>
              )}
            </div>
            <p className={`text-xs font-medium mb-4 ${platform.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
              {platform.tagline}
            </p>
            <p className={`text-sm/6 flex-1 ${platform.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
              {platform.description}
            </p>
            <div className={`mt-6 pt-4 border-t ${platform.highlight ? 'border-white/10' : 'border-gray-100'}`}>
              <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${platform.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                Best for
              </p>
              <p className={`text-sm font-medium ${platform.highlight ? 'text-white' : 'text-gray-900'}`}>
                {platform.bestFor}
              </p>
            </div>
            {platform.slug && (
              <Link
                href={`/alternative-to/${platform.slug}`}
                className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${
                  platform.highlight ? 'text-white' : 'text-gray-950'
                }`}
              >
                Full comparison
                <ChevronRightIcon className="size-4" />
              </Link>
            )}
            {platform.highlight && (
              <div className="mt-4">
                <Button href="https://app.request.finance/signup" target="_blank" className="w-full bg-white! text-gray-950! data-hover:bg-gray-100!">
                  Open my account
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}

function ScoreCard() {
  const scores = [
    { category: 'Corporate Cards', values: [5, 4, 4, 3] },
    { category: 'Accounts Payable', values: [5, 4, 3, 3] },
    { category: 'Global Payments', values: [5, 2, 2, 5] },
    { category: 'Stablecoin Support', values: [5, 0, 0, 0] },
    { category: 'Integrations', values: [5, 4, 4, 4] },
    { category: 'Onboarding Speed', values: [5, 5, 2, 2] },
    { category: 'Pricing Transparency', values: [5, 4, 3, 4] },
  ]

  return (
    <Container className="py-24">
      <div className="text-center">
        <Subheading>Scorecard</Subheading>
        <Heading as="h2" className="mt-2">
          How they stack up
        </Heading>
        <p className="mx-auto mt-6 max-w-2xl text-lg/7 text-gray-600">
          Our assessment of each platform across the categories that matter most to global finance teams.
        </p>
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
        <div className="hidden sm:grid sm:grid-cols-[1fr_repeat(4,1fr)] items-center gap-4 px-6 py-4 border-b border-gray-100 bg-gray-50">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Category</span>
          {competitors.map((name, i) => (
            <span
              key={name}
              className={`text-xs font-medium uppercase tracking-wider text-center ${i === 0 ? 'text-emerald-700' : 'text-gray-500'}`}
            >
              {i === 0 ? 'Request' : name}
            </span>
          ))}
        </div>

        <div className="divide-y divide-gray-100">
          {scores.map((row) => (
            <div key={row.category}>
              <div className="hidden sm:grid sm:grid-cols-[1fr_repeat(4,1fr)] items-center gap-4 px-6 py-4">
                <span className="text-sm font-medium text-gray-900">{row.category}</span>
                {row.values.map((score, i) => (
                  <div key={i} className="flex justify-center gap-0.5">
                    {[...Array(5)].map((_, dot) => (
                      <span
                        key={dot}
                        className={`size-2.5 rounded-full ${
                          dot < score
                            ? i === 0
                              ? 'bg-emerald-500'
                              : 'bg-gray-400'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="sm:hidden px-6 py-4">
                <p className="text-sm font-medium text-gray-900 mb-3">{row.category}</p>
                <div className="space-y-2">
                  {competitors.map((name, i) => (
                    <div key={name} className="flex items-center justify-between">
                      <span className={`text-xs ${i === 0 ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                        {i === 0 ? 'Request' : name}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, dot) => (
                          <span
                            key={dot}
                            className={`size-2 rounded-full ${
                              dot < row.values[i]
                                ? i === 0
                                  ? 'bg-emerald-500'
                                  : 'bg-gray-400'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function IndividualLinks() {
  const links = [
    { name: 'Ramp', slug: 'ramp', description: 'US-focused corporate cards and expense management' },
    { name: 'Brex', slug: 'brex', description: 'Enterprise cards for VC-backed companies' },
    { name: 'Airwallex', slug: 'airwallex', description: 'FX platform with multi-currency accounts' },
  ]

  return (
    <div className="bg-gray-950 py-24">
      <Container>
        <Subheading dark>Detailed comparisons</Subheading>
        <Heading as="h2" dark className="mt-2">
          Want a deeper dive?
        </Heading>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-400">
          Read our detailed head-to-head comparisons to understand exactly how Request Finance compares to each platform.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.slug}
              href={`/alternative-to/${item.slug}`}
              className="group rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Request Finance vs
              </p>
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm/6 text-gray-400">{item.description}</p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-white group-data-hover:text-gray-300">
                Read comparison
                <ChevronRightIcon className="size-4 transition-transform group-data-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function AlternativeTo() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Switch to Request Finance — vs Ramp, Brex & Airwallex',
    description:
      'See how Request Finance compares to other spend management platforms. Built for global companies, powered by stablecoins, simplified for everyone.',
    url: 'https://requestfinance.com/alternative-to',
    publisher: {
      '@type': 'Organization',
      name: 'Request Finance',
      url: 'https://requestfinance.com',
    },
  }

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
        <Container className="relative">
          <Navbar
            banner={
              <Link
                href="https://app.request.finance/signup" target="_blank"
                className="flex items-center gap-1 rounded-full bg-blue-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-blue-950/30"
              >
                Ready to Simplify Your Business Spend Management?
                <ChevronRightIcon className="size-4" />
              </Link>
            }
          />
          <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
            <h1 className="font-display text-4xl/[1.2] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[1.15] md:text-6xl/[1.15] max-w-5xl">
              Switch to Request Finance
            </h1>
            <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              See how Request Finance compares to other spend management platforms. Built for global companies, powered by stablecoins, simplified for everyone.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="https://app.request.finance/signup" target="_blank">Open my account</Button>
              <Button variant="secondary" href="/pricing">
                See pricing
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>

        <PlatformCards />
        <FullComparisonTable />
        <ScoreCard />
        <IndividualLinks />

        <div className="bg-linear-to-b from-white from-50% to-gray-100">
          <Steps />
        </div>

        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
