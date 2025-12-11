import { UseCaseFooter } from '@/components/use-case-footer'
import { UseCaseHero } from '@/components/use-case-hero'
import { UseCaseIntro } from '@/components/use-case-intro'
import { UseCaseSolution } from '@/components/use-case-solution'
import { Industries } from '@/components/industries'
import { Steps } from '@/components/steps'
import { Testimonials } from '@/components/testimonials'
import { getUseCaseBySlug, getAllUseCaseSlugs } from '@/data/use-cases'
import { notFound } from 'next/navigation'

// Generate static params for all use cases
export async function generateStaticParams() {
  const slugs = getAllUseCaseSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)

  if (!useCase) {
    return {}
  }

  return {
    title: `${useCase.name} - Request Finance`,
    description: useCase.heroDescription,
    keywords: [
      useCase.name.toLowerCase(),
      'spend management',
      'business payments',
      'corporate cards',
      'accounts payable',
      'payment automation',
      'fintech',
      'business finance',
    ],
    openGraph: {
      title: `${useCase.name} - Request Finance`,
      description: useCase.heroDescription,
      url: `https://requestfinance.com/use-cases/${useCase.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: 'https://requestfinance.com/images/thumbnail.png',
          width: 1200,
          height: 630,
          alt: `Request Finance for ${useCase.name}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${useCase.name} - Request Finance`,
      description: useCase.heroDescription,
      images: ['https://requestfinance.com/images/thumbnail.png'],
    },
    alternates: {
      canonical: `https://requestfinance.com/use-cases/${useCase.slug}`,
    },
  }
}

export default async function UseCasePage({ params }) {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)

  if (!useCase) {
    notFound()
  }

  return (
    <div className="overflow-hidden">
      <UseCaseHero
        title={useCase.heroTitle}
        description={useCase.heroDescription}
        image={useCase.heroImage}
      />
      <main>
        <UseCaseIntro
          eyebrow={useCase.introEyebrow}
          title={useCase.introTitle}
          lead={useCase.introLead}
          paragraphs={useCase.introParagraphs}
          bullets={useCase.introBullets}
          image={useCase.introImage}
          imageAlt={`${useCase.name} illustration`}
          buttonText={useCase.introButtonText}
          buttonHref="/demo"
        />
        <div className="bg-linear-to-b from-white from-50% to-gray-100">
          <div className="py-32">
            <UseCaseSolution
              eyebrow={useCase.solutionEyebrow}
              title={useCase.solutionTitle}
              description={useCase.solutionDescription}
            />
          </div>
          <Steps />
        </div>
        <Testimonials />
        <Industries />
      </main>
      <UseCaseFooter useCase={useCase} />
    </div>
  )
}

