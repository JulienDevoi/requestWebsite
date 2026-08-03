import Image from 'next/image'
import { siteUrl } from '@/lib/config'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { LogoTimeline2 } from '@/components/logo-timeline-2'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { BeforeAfter } from '@/components/before-after'
import { Solutions } from '@/components/solutions'
import { Steps } from '@/components/steps'
import { Testimonials } from '@/components/testimonials'
import { Industries } from '@/components/industries'
import { Security } from '@/components/security'
import { FAQ } from '@/components/faq'
import { Heading, Lead, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Request Finance - Global Payments, Settled in Minutes',
  description:
    'Pay vendors and manage spend on a platform built for stablecoins. Get instant, global settlement, accounts payable, and accrual accounting, with no crypto complexity.',
  keywords: [
    'spend management',
    'corporate cards',
    'accounts payable',
    'stablecoins',
    'stablecoin payments',
    'crypto payments',
    'business finance',
    'expense management',
    'fintech',
    'business payments',
  ],
  openGraph: {
    title: 'Request Finance - Global Payments, Settled in Minutes',
    description:
      'Pay vendors and manage spend on a platform built for stablecoins. Get instant, global settlement, accounts payable, and accrual accounting, with no crypto complexity.',
    url: siteUrl,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance - Stablecoin-Powered Payments Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Finance - Global Payments, Settled in Minutes',
    description:
      'Pay vendors and manage spend on a platform built for stablecoins. Get instant, global settlement, accounts payable, and accrual accounting, with no crypto complexity.',
    images: [`${siteUrl}/images/thumbnail.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

const homepageFaqItems = [
  {
    question: 'We already have a bank account.',
    answer:
      "Banks don't do stablecoins, and they charge you 2–8% every time you pay someone abroad. Request gives you fiat Global Accounts and stablecoin rails in one place, so you stop paying the cross-border tax without giving up the tooling.",
  },
  {
    question: "We're not ready for crypto.",
    answer:
      "You don't have to be. Start with the fiat Global Accounts and AP/AR alone, and switch on stablecoin payouts whenever you're ready. It's modular, and you never have to hold a digital asset to use it.",
  },
  {
    question: 'What about compliance and KYB?',
    answer:
      "KYB is required before you go live and usually takes a few days. We think that's a feature: it means your counterparties are verified too, and your auditors get a complete paper trail.",
  },
  {
    question: 'We already use Coinbase or Binance.',
    answer:
      'Those are wallets, not finance platforms. No invoicing, no approval workflows, no payroll, no accrual accounting, no fiat payouts. Request is the layer on top.',
  },
]

function HeroSaved() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://app.request.finance/signup" target="_blank"
              className="flex items-center gap-1 rounded-full bg-blue-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-blue-950/30"
            >
              Ready to Settle Payments in Minutes, Not Days?
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Link
                  href="https://www.capterra.com/p/246076/Request-Finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img src="/images/capterra.svg" alt="Capterra" className="h-6 sm:h-7" />
                </Link>
              </div>
              <h1 className="font-display text-4xl/[1.2] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[1.15] md:text-6xl/[1.15]">
                One business account for all your currencies, including stablecoins.
              </h1>
              <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                Send and receive in 25+ currencies with virtual IBANs, SWIFT and stablecoin wallets. Settle globally in minutes instead of days, and stop losing 2–8% to your bank. AP/AR, payroll and accounting built in.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href="/demo">Book a 15-min demo</Button>
                <Button variant="secondary" href="https://app.request.finance/signup" target="_blank">
                  Start for free
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-start gap-4 sm:gap-6">
                <div className="flex -space-x-3 sm:-space-x-4">
                  {[
                    '/testimonials/david.jpeg',
                    '/testimonials/magdalena.jpeg',
                    '/testimonials/sebastien.jpg',
                    '/testimonials/juan.jpeg',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="size-10 w-10 rounded-full border-2 border-white bg-gray-200 object-cover shadow-sm sm:size-12 sm:w-12"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-950/80 sm:text-base">
                  1,500+ finance teams · $1B+ processed
                </p>
              </div>
            </div>
            <div className="flex shrink-0 justify-center lg:-mt-6 lg:w-[560px] xl:-mt-10 xl:w-[640px] lg:justify-end lg:self-start">
              <Image
                src="/screenshots/request-global-fiat-stablecoin.png"
                alt="Global fiat and stablecoin payments across New York, Paris, London, Singapore, and San Francisco"
                width={960}
                height={640}
                className="w-full max-w-[420px] object-contain sm:max-w-[480px] lg:max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}


{/*function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-4xl">
    Traditional spend management can't keep up
        </Heading>
        <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
        Managing company spending with spreadsheets, scattered tools, and slow banking systems creates chaos, blind spots, and unnecessary work.
        
        </p>
       
        <BeforeAfter className="mt-8 max-w-4xl" />
        <p className="mt-8 max-w-5xl text-xl/7 font-semibold text-gray-950 sm:text-1xl/8">
        Finance teams spend more time fixing problems than driving strategy.
          </p>
      </Container>
    </div>
  )
}*/}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt={`${name} - ${description}`} src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-12 mb-32">
      <Subheading>The problem</Subheading>
      <Heading as="h3" className="mt-2">
      The hidden cost of outdated spend management
      </Heading>
      <Lead className="mt-6 max-w-3xl">
      Managing company spending with spreadsheets, scattered tools, and slow banking systems create chaos, blind spots, and unnecessary work.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-xl font-medium text-gray-400">+</span>
              <p className="text-sm/6 text-gray-600 flex-1">
                <span className="font-semibold text-gray-950">3–7 days</span> waiting for reimbursement approvals
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl font-medium text-gray-400">+</span>
              <p className="text-sm/6 text-gray-600 flex-1">
              <span className="font-semibold text-gray-950">2.9–4%</span> lost in fees using traditional corporate cards
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl font-medium text-gray-400">+</span>
              <p className="text-sm/6 text-gray-600 flex-1">
              <span className="font-semibold text-gray-950">12–48 hours</span> chasing receipts and employee expense reports
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl font-medium text-gray-400">+</span>
              <p className="text-sm/6 text-gray-600 flex-1">
              <span className="font-semibold text-gray-950">2 weeks</span> to open new bank accounts for new entities
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl font-medium text-gray-400">+</span>
              <p className="text-sm/6 text-gray-600 flex-1">
              <span className="font-semibold text-gray-950">5%</span> lost on FX when teams spend abroad
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl font-medium text-gray-400">+</span>
              <p className="text-sm/6 text-gray-600 flex-1">
              <span className="font-semibold text-gray-950">∞</span> worrying about budget overruns, rogue spending, and last-minute surprises...
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-medium text-gray-950">=</span>
              <div>
                <p className="text-lg font-semibold text-gray-950">
                  Endless payment headaches
                </p>
               
              </div>
            </div>
          </div>
          {/*<div className="mt-8">
            <Button className="w-full sm:w-auto" href="/demo">
              Book a demo
            </Button>
          </div>*/}
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="Business spend management dashboard showing expense tracking and payment processing"
              src="/images/spend-management.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      
    </Container>
  )
}

function BentoSection() {
  return (
    <Container id="proactive-spend-control">
      <Subheading>Proactive spend control, not reactive expense tracking</Subheading>
      <Heading as="h3" className="mt-2 max-w-6xl">
        Money that moves at internet speed, not bank speed
      </Heading>
      <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
      Spreadsheets, scattered tools, and slow banking systems create chaos, blind spots, and unnecessary work. Request replaces the slow rails with stablecoins, so spend moves as fast as your business does.
        </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          key="accounts-payable"
          eyebrow="Business Account"
          title="Each entity gets its own account"
          description="No more sharing cards or accounts. Each entity has its own budget, spending limits, and approvals. For a clean audit trail."
          graphic={
            <img 
              src="/images/virtual-account.png" 
              alt="Business Account" 
              className="h-full w-full object-cover"
            />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          key="corporate-cards"
          eyebrow="Corporate cards"
          title="Control your spend"
          description="Virtual and physical cards with real-time controls and instant notifications. Join the waitlist — launching soon."
          comingSoon
          waitlistHref="/products/corporate-cards"
          graphic={
            <img 
              src="/images/corporate-cards.gif" 
              alt="Corporate cards" 
              className="h-full w-full object-cover"
            />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          key="on-off-ramp"
          eyebrow="Accounts Payable"
          title="Process bills at lightning speed"
          description="Manage invoices, approvals, and payments all in one place with full audit trails. Whether you have 1 or 10,000 accounts payable per month."
          graphic={
            <div className="h-80 relative overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/images/accounts-payable.mp4" type="video/mp4" />
              </video>
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          key="source-reach"
          eyebrow="Integrations"
          title="Connect with your daily tools"
          description="Connect to and from accounting softwares, banks, and all the other tools you use."
          graphic={
            // <LogoCluster />
            <LogoTimeline2 />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          key="operate-globally"
          eyebrow="Worldwide"
          title="Operate globally"
          description="Send and receive in 25+ currencies. Pay suppliers in 190+ countries via virtual IBANs, SWIFT, ACH, SEPA, and stablecoin wallets."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function UseCases() {
  const useCases = [
    {
      title: 'Mass Payout',
      description: 'Streamline affiliate payments, content creator payouts, and bulk disbursements. Send payments to hundreds of recipients simultaneously with automated workflows and real-time tracking.',
      examples: [
        { text: 'Affiliate payments', href: '/use-cases/affiliate-payments' },
        { text: 'Content creator payouts', href: '/use-cases/content-creator-payouts' },
        { text: 'Commission distributions', href: '/use-cases/commission-distributions' },
      ],
      image: '/company/mass-payout.jpg',
    },
    {
      title: 'International Payments',
      description: 'Simplify international transactions for import/export, marketplaces, and global operations. Pay suppliers worldwide with competitive FX rates and transparent fees.',
      examples: [
        { text: 'Import/export transactions', href: '/use-cases/import-export' },
        { text: 'Marketplace payments', href: '/use-cases/marketplace-payments' },
        { text: 'Global supplier payments', href: '/use-cases/global-supplier-payments' },
      ],
      image: '/company/international-payments.jpg',
    },
    {
      title: 'Accounts Payable',
      description: 'Automate your accounts payable process with seamless vendor payments. Manage invoices, approvals, and payments all in one place with full audit trails.',
      examples: [
        { text: 'Vendor invoices', href: null },
        { text: 'Recurring payments', href: '/use-cases/recurring-payments' },
        { text: 'Invoice automation', href: '/use-cases/invoice-automation' },
      ],
      image: '/company/account-payable.jpg',
    },
  ]

  return (
    <div className="bg-linear-to-b from-gray-100 to-white py-32">
      <Container>
        <Subheading>Use Cases</Subheading>
        <Heading as="h2" className="mt-2">
          Built for every payment scenario.
        </Heading>
        <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
          Request adapts to your business needs, whether you're managing affiliate payouts, 
          processing international transactions, or automating vendor payments.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {useCase.image && (
                <img
                  alt={`${useCase.title} use case illustration for ${useCase.description.substring(0, 50)}...`}
                  src={useCase.image}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl font-medium tracking-tight text-gray-950">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-sm/6 text-gray-600">
                  {useCase.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Common Use Cases
                  </p>
                  <ul className="mt-3 space-y-2">
                    {useCase.examples.map((example, i) => {
                      const exampleText = typeof example === 'string' ? example : example.text
                      const exampleHref = typeof example === 'string' ? null : example.href
                      return (
                        <li key={i} className="flex items-center gap-2 text-sm/6 text-gray-600">
                          <span className="size-1.5 shrink-0 rounded-full bg-gray-400" />
                          {exampleHref ? (
                            <Link href={exampleHref} className="text-gray-950 data-hover:text-gray-950/75 font-medium">
                              {exampleText}
                            </Link>
                          ) : (
                            exampleText
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function DarkBentoSection() {
  return (
    <div id="introducing" className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Introducing</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-6xl">
          The easier way to manage company spend
        </Heading>
        <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-400 sm:text-1xl/8">
        Request gives finance teams full control over vendor payments and accrual accounting, with the power of stablecoins built in, without the complexity. Corporate cards are coming soon.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            key="all-in-one-platform"
            dark
            eyebrow="Fast, secure, and compliant"
            title="All-in-one platform for stablecoins & fiat operations"
            description="Accounts Payable, Accounts Receivable, and Accounting. Stay compliant, be audit-ready. No more juggling multiple tools."
            graphic={
              <div className="h-80 bg-[url(/images/screenshot.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            key="integrations-bridging"
            dark
            eyebrow="Integrations"
            title="Bridging stablecoins & fiat"
            description="Connect to and from wallets, accounting software, and banks."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            key="crypto-to-fiat"
            dark
            eyebrow="Crypto to fiat"
            title="Offramp payments made easy"
            description="Pay in stablecoins and your beneficiaries receive fiat, seamlessly."
            graphic={
              <div className="h-80 relative overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://cheq-public.s3.eu-west-2.amazonaws.com/req-tech+(2).mp4" type="video/mp4" />
                </video>
              </div>
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            key="spend-management-simplified"
            dark
            eyebrow="Corporate cards"
            title="Spend management simplified"
            description="Stablecoin- and fiat-funded business cards with real-time controls. Launching soon."
            comingSoon
            waitlistHref="/products/corporate-cards"
            graphic={
              <div className="h-80 bg-[url(/images/corporate-cards.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Request Finance',
    url: siteUrl,
    logo: `${siteUrl}/images/icon2.png`,
    description: 'Empower your finance team with accounts payable and accrual accounting. Powered by stablecoins, simplified for everyone.',
    sameAs: [
      'https://twitter.com/requestfinance',
      'https://linkedin.com/company/request-finance',
      'https://github.com/RequestNetwork',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: `${siteUrl}/demo`,
    },
  }

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Request Finance',
    url: siteUrl,
    description: 'Spend management for modern companies. Accounts payable and accrual accounting powered by stablecoins.',
    publisher: {
      '@type': 'Organization',
      name: 'Request Finance',
    },
  }

  const softwareAppStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Request Finance',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: siteUrl,
    description:
      'Spend management platform for modern companies. Accounts payable automation and accrual accounting powered by stablecoins.',
    offers: {
      '@type': 'Offer',
      price: '300',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '300',
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Request Finance',
      url: siteUrl,
    },
  }

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppStructuredData) }}
      />
      <HeroSaved />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        {/* <Solutions 
          eyebrow="Get to know Request"
          title="Your alternative to banks"
          description="Managing company spending with spreadsheets, scattered tools, and slow banking systems creates chaos, blind spots, and unnecessary work. It's time for an upgrade."
          items={[
            {
              title: "Corporate Cards",
              description: "Virtual and physical cards with real-time controls — coming soon.",
              image: "/images/corporate-cards.png",
            },
            {
              title: "Accounts Payable",
              description: "Automate vendor payments, invoice processing, and approval workflows.",
              image: "/company/3.jpg",
            },
            {
              title: "Accounting Integration",
              description: "Seamlessly sync with your existing accounting software and maintain accurate records.",
              image: "/images/screenshot.png",
            },
            {
              title: "Multi-Currency Support",
              description: "Manage payments in multiple currencies with competitive FX rates and transparent fees.",
              image: "/company/2.jpg",
            },
            {
              title: "Real-Time Reporting",
              description: "Get instant insights into your spending with comprehensive dashboards and analytics.",
              image: "/company/1.jpg",
            },
            {
              title: "Expense Management",
              description: "Streamline expense tracking, receipt capture, and reimbursement workflows.",
              image: "/company/4.jpg",
            },
          ]}
          className="pt-24"
        /> */}
        <div className="bg-linear-to-b from-white from-50% to-gray-100">
          <div className="py-32">
            {/* <FeatureSection /> */}
            {/* <Team /> */}
            <BentoSection />
          </div>
          <Steps />  
        </div>
          
      </main>
      
      <Testimonials />
      
      <Industries />
      <Security />
      <UseCases />
      <FAQ
        eyebrow="Straight answers"
        title="The four questions every finance team asks us"
        items={homepageFaqItems}
      />
      <Footer />
    </div>
  )
}
