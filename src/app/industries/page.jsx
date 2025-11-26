import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { getAllIndustries } from '@/data/industries'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Industries - Request Finance',
  description:
    'Discover how Request Finance serves different industries. From SaaS to Web3, wholesalers to affiliates, we have solutions tailored for your business.',
  openGraph: {
    title: 'Industries - Request Finance',
    description:
      'Discover how Request Finance serves different industries. From SaaS to Web3, wholesalers to affiliates, we have solutions tailored for your business.',
    url: 'https://requestfinance.com/industries',
    siteName: 'Request Finance',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://requestfinance.com/industries',
  },
}

function IndustriesHero() {
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
          <h1 className="font-display text-4xl/[1.2] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[1.2] md:text-6xl/[0.8]">
            Built for every type of business
          </h1>
          <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Request adapts to your company's needs, whether you're managing
            affiliate payouts, processing international transactions, or
            automating vendor payments.
          </p>
        </div>
      </Container>
    </div>
  )
}

function IndustryCard({ industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-lg"
    >
      <div className="aspect-3/2 overflow-hidden">
        <img
          alt={industry.name}
          src={industry.heroImage}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <Subheading>{industry.name}</Subheading>
        <p className="mt-2 text-sm/6 text-gray-600 line-clamp-3">
          {industry.heroDescription}
        </p>
        <div className="mt-6 flex items-center gap-1 text-sm/6 font-medium text-gray-950">
          Learn more
          <ChevronRightIcon className="size-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export default function IndustriesPage() {
  const industries = getAllIndustries()

  return (
    <div className="overflow-hidden">
      <IndustriesHero />
      <main>
        <Container className="py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

