import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Subheading } from '@/components/text'
import { getAllProducts } from '@/data/products'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Products - Request Finance',
  description:
    'Discover Request Finance products. Corporate cards, virtual accounts, and more tools to manage your business spending.',
  openGraph: {
    title: 'Products - Request Finance',
    description:
      'Discover Request Finance products. Corporate cards, virtual accounts, and more tools to manage your business spending.',
    url: 'https://requestfinance.com/products',
    siteName: 'Request Finance',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://requestfinance.com/products',
  },
}

function ProductsHero() {
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
            Products built for modern finance
          </h1>
          <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            From corporate cards to virtual accounts, Request gives you the
            tools to manage spending, automate payments, and stay in control.
          </p>
        </div>
      </Container>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-lg"
    >
      <div className="aspect-3/2 overflow-hidden">
        <img
          alt={product.name}
          src={product.heroImage}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <Subheading>{product.name}</Subheading>
        <p className="mt-2 text-sm/6 text-gray-600 line-clamp-3">
          {product.heroDescription}
        </p>
        <div className="mt-6 flex items-center gap-1 text-sm/6 font-medium text-gray-950">
          Learn more
          <ChevronRightIcon className="size-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="overflow-hidden">
      <ProductsHero />
      <main>
        <Container className="py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

