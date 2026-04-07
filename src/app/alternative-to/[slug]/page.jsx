import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Steps } from '@/components/steps'
import { Testimonials } from '@/components/testimonials'
import { siteUrl } from '@/lib/config'
import { getAlternativeBySlug, getAllAlternativeSlugs } from '@/data/alternatives'
import { CheckIcon, XMarkIcon, MinusIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import {
  GlobeAltIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { notFound } from 'next/navigation'

const iconMap = {
  GlobeAltIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  SparklesIcon,
}

export async function generateStaticParams() {
  const slugs = getAllAlternativeSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  if (!/^[a-z0-9-_]+$/.test(slug) || slug.length > 100 || slug.length < 1) {
    return {}
  }

  const alt = getAlternativeBySlug(slug)
  if (!alt) return {}

  return {
    title: alt.metaTitle,
    description: alt.metaDescription,
    keywords: [
      `${alt.name} alternative`,
      `${alt.name} vs request finance`,
      `request finance vs ${alt.name.toLowerCase()}`,
      'spend management',
      'corporate cards',
      'accounts payable',
      'stablecoin payments',
      'business finance',
    ],
    openGraph: {
      title: alt.metaTitle,
      description: alt.metaDescription,
      url: `${siteUrl}/alternative-to/${alt.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: `${siteUrl}/images/thumbnail.png`,
          width: 1200,
          height: 630,
          alt: alt.metaTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: alt.metaTitle,
      description: alt.metaDescription,
      images: [`${siteUrl}/images/thumbnail.png`],
    },
    alternates: {
      canonical: `${siteUrl}/alternative-to/${alt.slug}`,
    },
  }
}

function ComparisonValue({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center size-6 rounded-full bg-emerald-50">
        <CheckIcon className="size-4 text-emerald-600" />
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
    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5">
      {value}
    </span>
  )
}

function ComparisonTable({ alt }) {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading>Feature comparison</Subheading>
          <Heading as="h2" className="mt-2">
            {alt.comparisonTitle}
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg/7 text-gray-600">
            {alt.comparisonDescription}
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {alt.comparison.map((group) => (
            <div
              key={group.category}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
            >
              <div className="bg-gray-950 px-6 py-3">
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              </div>
              <div className="hidden sm:grid sm:grid-cols-[1fr_140px_140px] items-center gap-4 px-6 py-3 border-b border-gray-100 bg-gray-50/50">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Request Finance</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center">{alt.name}</span>
              </div>
              <div className="divide-y divide-gray-100">
                {group.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_140px_140px] items-center gap-2 sm:gap-4 px-6 py-4"
                  >
                    <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                    <div className="flex items-center gap-2 sm:justify-center">
                      <span className="text-xs text-gray-400 sm:hidden">Request Finance:</span>
                      <ComparisonValue value={feature.request} />
                    </div>
                    <div className="flex items-center gap-2 sm:justify-center">
                      <span className="text-xs text-gray-400 sm:hidden">{alt.name}:</span>
                      <ComparisonValue value={feature.competitor} />
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

function Advantages({ alt }) {
  return (
    <Container className="py-24">
      <Subheading>Why Request Finance?</Subheading>
      <Heading as="h2" className="mt-2 max-w-4xl">
        {alt.advantagesTitle}
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {alt.advantages.map((advantage) => {
          const Icon = iconMap[advantage.icon]
          return (
            <div
              key={advantage.title}
              className="relative flex gap-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              {Icon && (
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gray-950">
                  <Icon className="size-6 text-white" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-950">{advantage.title}</h3>
                <p className="mt-2 text-sm/6 text-gray-600">{advantage.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

function UseCases({ alt }) {
  return (
    <div className="bg-gray-950 py-24">
      <Container>
        <Subheading dark>Use cases</Subheading>
        <Heading as="h2" dark className="mt-2 max-w-4xl">
          {alt.useCasesTitle}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {alt.useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
              </div>
              <p className="text-sm/6 text-gray-400">{useCase.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="https://app.request.finance/signup" target="_blank" className="bg-white! text-gray-950! data-hover:bg-gray-100!">
            Start for free
          </Button>
        </div>
      </Container>
    </div>
  )
}

function PainPoints({ alt }) {
  return (
    <div className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Subheading>{alt.introEyebrow}</Subheading>
            <Heading as="h2" className="mt-2">
              {alt.introTitle}
            </Heading>
            <p className="mt-6 text-lg/7 text-gray-600">
              {alt.introLead}
            </p>
            <div className="mt-8">
              <Button href="https://app.request.finance/signup" target="_blank">Switch to Request Finance</Button>
            </div>
          </div>
          <div>
            <ul className="space-y-4">
              {alt.introBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-950" />
                  <span className="text-sm/6 text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function AlternativePage({ params }) {
  const { slug } = await params

  if (!/^[a-z0-9-_]+$/.test(slug)) notFound()
  if (slug.length > 100 || slug.length < 1) notFound()
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) notFound()

  const alt = getAlternativeBySlug(slug)
  if (!alt) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: alt.metaTitle,
    description: alt.metaDescription,
    url: `${siteUrl}/alternative-to/${alt.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Request Finance',
      url: siteUrl,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${siteUrl}/alternative-to` },
      { '@type': 'ListItem', position: 3, name: `Request Finance vs ${alt.name}`, item: `${siteUrl}/alternative-to/${alt.slug}` },
    ],
  }

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-950/5 px-4 py-1.5 text-sm font-medium text-gray-700 mb-6">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {alt.heroLabel}
            </div>
            <h1 className="font-display text-4xl/[1.2] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[1.15] md:text-6xl/[1.15] max-w-4xl">
              {alt.heroTitle}
            </h1>
            <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              {alt.heroDescription}
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="https://app.request.finance/signup" target="_blank">Start for free</Button>
              <Button variant="secondary" href="/demo">
                Book a demo
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>

        <PainPoints alt={alt} />
        <ComparisonTable alt={alt} />
        <Advantages alt={alt} />
        <UseCases alt={alt} />

        <div className="bg-linear-to-b from-white from-50% to-gray-100">
          <Steps />
        </div>

        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
