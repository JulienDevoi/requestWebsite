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
import { Heading, Lead, Subheading } from '@/components/text'
import { SmoothScrollButton } from '@/components/smooth-scroll-button'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Request Finance - Spend Management for Modern Companies',
  description:
    'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
  keywords: [
    'spend management',
    'corporate cards',
    'accounts payable',
    'stablecoins',
    'business finance',
    'expense management',
    'fintech',
    'business payments',
  ],
  openGraph: {
    title: 'Request Finance - Spend Management for Modern Companies',
    description:
      'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
    url: 'https://requestfinance.com',
    siteName: 'Request Finance',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Request Finance - Spend Management Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Finance - Spend Management for Modern Companies',
    description:
      'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
    images: ['/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com',
  },
}

function HeroSaved() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/demo"
              className="flex items-center gap-1 rounded-full bg-blue-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-blue-950/30"
            >
              Ready to Simplify Your Business Spend Management?
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-4xl/[1.2] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[1.15] md:text-6xl/[1.15]">
            Spend management for modern companies
          </h1>
          <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Empower your finance team with corporate cards, accounts payable, and accrual accounting. <br />Powered by stablecoins, simplified for everyone.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/demo">Book a demo</Button>
            <SmoothScrollButton variant="secondary" href="#get-to-know-request">
              Discover how it works
            </SmoothScrollButton>
          </div>
        </div>
      </Container>
    </div>
  )
}

function HeroSavedVideoWhite() {
  return (
    <div className="relative">
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/request-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-100/70" />
      </div>
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/demo"
              className="flex items-center gap-1 rounded-full bg-blue-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-blue-950/30"
            >
              Ready to Simplify Your Business Spend Management?
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-4xl/[1.2] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[1.15] md:text-6xl/[1.15]">
            Spend management for modern companies
          </h1>
          <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Empower your finance team with corporate cards, accounts payable, and accrual accounting. <br />Powered by stablecoins, simplified for everyone.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/demo">Book a demo</Button>
            <SmoothScrollButton variant="secondary" href="#get-to-know-request">
              Discover how it works
            </SmoothScrollButton>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/request-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/demo"
              className="flex items-center gap-1 rounded-full bg-blue-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-blue-950/30"
            >
              Ready to Simplify Your Business Spend Management?
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-4xl/[1.2] font-medium tracking-tight text-balance text-white sm:text-6xl/[1.15] md:text-6xl/[1.15]">
            Spend management for modern companies
          </h1>
          <p className="mt-8 max-w-5xl text-xl/7 font-medium text-white/90 sm:text-2xl/8">
            Empower your finance team with corporate cards, accounts payable, and accrual accounting. <br />Powered by stablecoins, simplified for everyone.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button 
              href="/demo"
              className="bg-white text-gray-950 data-hover:bg-gray-100"
            >
              Book a demo
            </Button>
            <SmoothScrollButton 
              variant="secondary" 
              href="#get-to-know-request"
              className="bg-white/15 text-white border-white/20 ring-white/20 data-hover:bg-white/20"
            >
              Discover how it works
            </SmoothScrollButton>
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
    <Container id="get-to-know-request">
      <Subheading>Get to know Request</Subheading>
      <Heading as="h3" className="mt-2 max-w-6xl">
        The alternative to the banks who failed your business
      </Heading>
      <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
      Managing company spending with spreadsheets, scattered tools, and slow banking systems create chaos, blind spots, and unnecessary work. It's time for an upgrade.
        </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          key="accounts-payable"
          eyebrow="Global USD Account"
          title="Each entity gets its own account"
          description="No more sharing cards or accounts. Each entity has its own budget, spending limits, and approvals. For a clean audit trail."
          graphic={
            <img 
              src="/images/virtual-account.png" 
              alt="Global USD Account" 
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
          description="Issue virtual and physical cards with real-time controls and instant notifications."
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
          description="Pay suppliers and vendors worldwide with competitive FX rates and transparent fees. Support for ACH, Wire, SEPA, SWIFT, SPEI (MXN), Faster Payments (GBP), and stablecoins."
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
      examples: ['Affiliate payments', 'Content creator payouts', 'Commission distributions'],
      image: '/company/1.jpg',
    },
    {
      title: 'International Payments',
      description: 'Simplify international transactions for import/export, marketplaces, and global operations. Pay suppliers worldwide with competitive FX rates and transparent fees.',
      examples: ['Import/export transactions', 'Marketplace payments', 'Global supplier payments'],
      image: '/company/2.jpg',
    },
    {
      title: 'Accounts Payable',
      description: 'Automate your accounts payable process with seamless vendor payments. Manage invoices, approvals, and payments all in one place with full audit trails.',
      examples: ['Vendor invoices', 'Recurring payments', 'Invoice automation'],
      image: '/company/3.jpg',
    },
  ]

  return (
    <div className="bg-linear-to-b from-gray-100 to-white py-32">
      <Container>
        <Subheading>Use Cases</Subheading>
        <Heading as="h2" className="mt-2">
          Built for every payment scenario.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Request adapts to your business needs, whether you're managing affiliate payouts, 
          processing international transactions, or automating vendor payments.
        </Lead>
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
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm/6 text-gray-600">
                        <span className="size-1.5 shrink-0 rounded-full bg-gray-400" />
                        {example}
                      </li>
                    ))}
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
        Request gives finance teams full control over corporate cards, vendor payments, and accrual accounting, with the power of stablecoins built in, without the complexity.
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
            description="Unlock the full potential of stablecoins and fiat payments with our business credit card."
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
    url: 'https://requestfinance.com',
    logo: 'https://requestfinance.com/images/request-finance.svg',
    description: 'Empower your finance team with corporate cards, accounts payable, and accrual accounting. Powered by stablecoins, simplified for everyone.',
    sameAs: [
      // Add social media links here when available
      // 'https://twitter.com/requestfinance',
      // 'https://linkedin.com/company/requestfinance',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://requestfinance.com/demo',
    },
  }

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Request Finance',
    url: 'https://requestfinance.com',
    description: 'Spend management for modern companies. Corporate cards, accounts payable, and accrual accounting powered by stablecoins.',
    publisher: {
      '@type': 'Organization',
      name: 'Request Finance',
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
              description: "Issue virtual and physical cards with real-time controls and instant notifications.",
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
      <UseCases />
      <Footer />
    </div>
  )
}
