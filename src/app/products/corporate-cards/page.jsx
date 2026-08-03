import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Logo } from '@/components/logo'
import { siteUrl } from '@/lib/config'
import { HubSpotCardsWaitlistForm } from './hubspot-form'

export const metadata = {
  title: 'Corporate Cards — Join the Waitlist',
  description:
    'Join the waitlist for Request Finance Corporate Cards. Virtual and physical cards with real-time controls, launching soon.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Corporate Cards — Join the Waitlist | Request Finance',
    description:
      'Virtual and physical cards with real-time controls and instant notifications. Join the waitlist — launching soon.',
    url: `${siteUrl}/products/corporate-cards`,
    siteName: 'Request Finance',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Request Finance Corporate Cards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `${siteUrl}/products/corporate-cards`,
  },
}

export default function CorporateCardsWaitlistPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <header className="w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center md:h-20">
            <Link className="block" href="/" aria-label="Request Finance">
              <Logo className="h-9" />
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
              Coming soon
            </p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
              Corporate Cards
            </h1>
            <p className="mt-6 text-lg/7 text-gray-600">
              Virtual and physical cards with real-time controls and instant notifications — funded
              from your Request account in fiat or stablecoins.
            </p>
            <ul className="mt-8 space-y-3 text-sm/6 text-gray-600">
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                Per-card limits, merchant rules, and instant freeze
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                One view alongside AP, payroll, and treasury
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                Built for finance teams paying across borders
              </li>
            </ul>
            <div className="mt-10">
              <HubSpotCardsWaitlistForm />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
              <Image
                src="/images/corporate-cards.gif"
                alt="Request Finance corporate cards preview"
                width={640}
                height={480}
                className="h-auto w-full"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Script src="https://js.hsforms.net/forms/embed/v2.js" strategy="afterInteractive" />

      <Footer />
    </main>
  )
}
