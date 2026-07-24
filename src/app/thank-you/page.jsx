import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Logo } from '@/components/logo'
import { siteUrl } from '@/lib/config'

export const metadata = {
  title: 'Thank You - Request Finance',
  description: 'Your demo is booked. Our team will confirm the details shortly.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteUrl}/thank-you`,
  },
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="12" className="fill-blue-600" />
      <path
        d="M7.5 12.5 10.5 15.5 16.5 8.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ThankYou() {
  return (
    <main className="overflow-hidden">
      {/* Google tag (gtag.js) + Demo Booked conversion — scoped to this page only */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-708726534"
        strategy="afterInteractive"
      />
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-708726534');
          gtag('event', 'conversion', {'send_to': 'AW-708726534/R2CDCNuQzdUcEIae-dEC'});
        `}
      </Script>
      <GradientBackground />
      <header className="w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-center md:h-20">
            <Link className="block" href="/" aria-label="Request Finance">
              <Logo className="h-9" />
            </Link>
          </div>
        </div>
      </header>

      <section className="flex flex-col items-center px-6 py-24 text-center sm:py-32">
        <CheckIcon className="size-10" />
        <h1 className="mt-8 text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          You&apos;re all set!
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Your demo has been booked. Keep an eye on your inbox, we&apos;ll send you a confirmation
          email with the meeting details shortly.
        </p>
        <div className="mt-10">
          <Button href="/">Back to homepage</Button>
        </div>
      </section>
    </main>
  )
}
