import { Footer } from '@/components/footer'
import { Industries } from '@/components/industries'
import { ProductBenefits } from '@/components/product-benefits'
import { ProductHero } from '@/components/product-hero'
import { Testimonials } from '@/components/testimonials'
import { getProductBySlug, getAllProductSlugs } from '@/data/products'
import { notFound } from 'next/navigation'

// Generate static params for all products
export async function generateStaticParams() {
  const slugs = getAllProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {}
  }

  return {
    title: `${product.name} - Request Finance`,
    description: product.heroDescription,
    keywords: [
      product.name.toLowerCase(),
      'spend management',
      'corporate cards',
      'accounts payable',
      'business finance',
      'fintech',
      'payment platform',
    ],
    openGraph: {
      title: `${product.name} - Request Finance`,
      description: product.heroDescription,
      url: `https://requestfinance.com/products/${product.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: '/images/thumbnail.png',
          width: 1200,
          height: 630,
          alt: `Request Finance ${product.name}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Request Finance`,
      description: product.heroDescription,
      images: ['/images/thumbnail.png'],
    },
    alternates: {
      canonical: `https://requestfinance.com/products/${product.slug}`,
    },
  }
}

export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="overflow-hidden">
      <ProductHero
        title={product.heroTitle}
        description={product.heroDescription}
        image={product.heroImage}
      />
      <main>
        <ProductBenefits
          eyebrow={product.benefitsEyebrow}
          title={product.benefitsTitle}
          description={product.benefitsDescription}
          benefits={product.benefits}
        />
        <Testimonials />
        <Industries />
      </main>
      <Footer />
    </div>
  )
}

