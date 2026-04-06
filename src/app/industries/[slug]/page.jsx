import { IndustryFooter } from '@/components/industry-footer'
import { IndustryHero } from '@/components/industry-hero'
import { IndustryIntro } from '@/components/industry-intro'
import { IndustrySolution } from '@/components/industry-solution'
import { IndustryWhyItWorks } from '@/components/industry-why-it-works'
import { Steps } from '@/components/steps'
import { Testimonials } from '@/components/testimonials'
import { siteUrl } from '@/lib/config'
import { getIndustryBySlug, getAllIndustrySlugs } from '@/data/industries'
import { notFound } from 'next/navigation'

// Generate static params for all industries
export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  
  // Validate slug format
  if (!/^[a-z0-9-_]+$/.test(slug) || slug.length > 100 || slug.length < 1) {
    return {}
  }
  
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return {}
  }

  return {
    title: `${industry.name} - Request Finance`,
    description: industry.heroDescription,
    keywords: [
      `${industry.name} spend management`,
      `${industry.name} finance`,
      'spend management',
      'corporate cards',
      'accounts payable',
      'business finance',
      'fintech',
      industry.name.toLowerCase(),
    ],
    openGraph: {
      title: `${industry.name} - Request Finance`,
      description: industry.heroDescription,
      url: `${siteUrl}/industries/${industry.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: `${siteUrl}/images/thumbnail.png`,
          width: 1200,
          height: 630,
          alt: `Request Finance for ${industry.name}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${industry.name} - Request Finance`,
      description: industry.heroDescription,
      images: [`${siteUrl}/images/thumbnail.png`],
    },
    alternates: {
      canonical: `${siteUrl}/industries/${industry.slug}`,
    },
  }
}

export default async function IndustryPage({ params }) {
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
  
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteUrl}/industries` },
      { '@type': 'ListItem', position: 3, name: industry.name, item: `${siteUrl}/industries/${industry.slug}` },
    ],
  }

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IndustryHero
        title={industry.heroTitle}
        description={industry.heroDescription}
        image={industry.heroImage}
      />
      <main>
        <IndustryIntro
          eyebrow={industry.introEyebrow}
          title={industry.introTitle}
          lead={industry.introLead}
          paragraphs={industry.introParagraphs}
          bullets={industry.introBullets}
          image={industry.introImage}
          imageAlt={`${industry.name} industry illustration`}
          buttonText={industry.introButtonText}
          buttonHref="https://app.request.finance/signup"
        />
        <div className="bg-linear-to-b from-white from-50% to-gray-100">
          <div className="py-32">
            <IndustrySolution
              eyebrow={industry.solutionEyebrow}
              title={industry.solutionTitle}
              description={industry.solutionDescription}
            />
          </div>
          {industry.whyItWorks && (
            <IndustryWhyItWorks
              title={industry.whyItWorks.title}
              description={industry.whyItWorks.description}
              reasons={industry.whyItWorks.reasons}
            />
          )}
          <Steps />
        </div>
        <Testimonials />
      </main>
      <IndustryFooter industry={industry} />
    </div>
  )
}

