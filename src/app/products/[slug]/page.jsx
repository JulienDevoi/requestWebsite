import { Footer } from '@/components/footer'
import { FAQ } from '@/components/faq'
import { Industries } from '@/components/industries'
import { ProductBenefits } from '@/components/product-benefits'
import { ProductHero } from '@/components/product-hero'
import { Testimonials } from '@/components/testimonials'
import { siteUrl } from '@/lib/config'
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
  
  // Validate slug format
  if (!/^[a-z0-9-_]+$/.test(slug) || slug.length > 100 || slug.length < 1) {
    return {}
  }
  
  const product = getProductBySlug(slug)

  if (!product) {
    return {}
  }

  return {
    title: `${product.metaTitle || product.name} - Request Finance`,
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
      title: `${product.metaTitle || product.name} - Request Finance`,
      description: product.heroDescription,
      url: `${siteUrl}/products/${product.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: `${siteUrl}/images/thumbnail.png`,
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
      title: `${product.metaTitle || product.name} - Request Finance`,
      description: product.heroDescription,
      images: [`${siteUrl}/images/thumbnail.png`],
    },
    alternates: {
      canonical: `${siteUrl}/products/${product.slug}`,
    },
  }
}

export default async function ProductPage({ params }) {
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
  
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${siteUrl}/products/${product.slug}` },
    ],
  }

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductHero
        title={product.heroTitle}
        subtitle={product.heroSubtitle}
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
        {product.faq && (
          <FAQ
            eyebrow={product.faq.eyebrow}
            title={product.faq.title}
            items={product.faq.items}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

