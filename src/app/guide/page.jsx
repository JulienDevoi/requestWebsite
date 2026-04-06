import { siteUrl } from '@/lib/config'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { HubSpotGuideForm } from './hubspot-form'

export const metadata = {
  title: 'Download guide - Request Finance',
  description:
    'Download our guide: Global finance for every business. Learn how Request Finance helps anyone, anywhere pay and get paid with confidence.',
  keywords: [
    'Request Finance guide',
    'global payments guide',
    'finance operations',
    'stablecoins business',
  ],
  openGraph: {
    title: 'Download guide - Request Finance',
    description:
      'Download our guide: Global finance for every business. Learn how Request Finance helps anyone, anywhere pay and get paid with confidence.',
    url: `${siteUrl}/guide`,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance - Stablecoins Guide for CFOs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download guide - Request Finance',
    description:
      'Download our guide: Global finance for every business. Learn how Request Finance helps anyone, anywhere pay and get paid with confidence.',
    images: [`${siteUrl}/images/thumbnail.png`],
  },
  alternates: {
    canonical: `${siteUrl}/guide`,
  },
}

function GuideSection() {
  return (
    <Container className="mt-16 pb-16 sm:pb-24">
      <Subheading>Guide</Subheading>
      <Heading as="h1" className="mt-2">
        The ultimate stablecoins guide for CFOs
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        A comprehensive and actionable resource for finance managers involved with stablecoins
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image on the left */}
        <div className="max-lg:max-w-lg">
          <img
            src="/images/stablecoin-guide.jpeg"
            alt="Stablecoin guide"
            className="block max-w-full h-auto"
          />
        </div>
        {/* Form on the right */}
        <div className="max-w-lg">
          <HubSpotGuideForm />
        </div>
      </div>
    </Container>
  )
}

export default function GuidePage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <GuideSection />
      <Footer />
    </main>
  )
}
