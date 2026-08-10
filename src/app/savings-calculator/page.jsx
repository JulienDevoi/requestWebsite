'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { FAQ } from '@/components/faq'
import { SavingsCalculator } from '@/components/savings-calculator'

const faqItems = [
  {
    question: 'Where do these numbers come from?',
    answer:
      'The calculator uses typical FX spread ranges for bank/SWIFT wires and neobank/multi-currency platforms across major and emerging-market corridors, plus average per-transfer fees. Request Finance\u2019s side uses our actual published pricing: a flat 0.5% on fiat payouts, free stablecoin payouts, and a $10 local rail fee. Open "Adjust the assumptions" to override any of it with your own numbers.',
  },
  {
    question: "What if I don't know my exact FX spread?",
    answer:
      'Most finance teams don\u2019t \u2014 banks rarely disclose it. That\u2019s the point: the default assumptions are set from typical rates for your payment method and currency mix, calibrated to the 2\u20138% range most companies actually pay once spreads, lifting fees, and intermediary charges are added up. If you do know your rate, plug it in for a precise number.',
  },
  {
    question: 'Does this include settlement delay costs?',
    answer:
      'Not in the headline number. The calculator focuses on FX spread and per-transfer fees, which are the largest and most measurable costs. Slow settlement (2\u20135 days on wires vs. minutes for stablecoins) adds a real but harder-to-standardize working capital cost on top \u2014 ask us about it on a call and we\u2019ll model it against your actual payment cadence.',
  },
  {
    question: 'We already have a bank account.',
    answer:
      "Banks don't do stablecoins, and they charge you 2\u20138% every time you pay someone abroad. Request gives you fiat Global Accounts and stablecoin rails in one place, so you stop paying the cross-border tax without giving up the tooling.",
  },
  {
    question: "We're not ready for crypto.",
    answer:
      "You don't have to be. Leave the stablecoin slider at 0% above to see fiat-only savings. Start with fiat Global Accounts and AP/AR alone, and switch on stablecoin payouts whenever you're ready.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

function Header() {
  return (
    <Container className="mt-16">
      <Subheading>Savings Calculator</Subheading>
      <Heading as="h1" className="mt-2">
        See what your bank is really costing you.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Banks and legacy rails quietly take 2–8% out of every cross-border payment through FX
        spreads, wire fees, and settlement delays. Enter your own volume below and see your actual
        annual leakage, compared to Request&apos;s flat-fee model. No signup required.
      </Lead>
    </Container>
  )
}

function Methodology() {
  return (
    <Container className="py-16">
      <Subheading>How we calculate this</Subheading>
      <Heading as="h2" className="mt-2 max-w-2xl">
        Every number is transparent and editable.
      </Heading>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <p className="text-sm font-semibold text-gray-950">Your current setup</p>
          <p className="mt-2 text-sm/6 text-gray-600">
            (Annual volume × FX spread for your method and currency mix) + (payments per month ×
            12 × average fee per transfer).
          </p>
        </div>
        <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <p className="text-sm font-semibold text-gray-950">Cost on Request</p>
          <p className="mt-2 text-sm/6 text-gray-600">
            (Fiat share of your volume × 0.5% flat fee) + (payments per month × 12 × $10 local
            rail fee). Stablecoin payouts are always free, regardless of volume.
          </p>
        </div>
        <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <p className="text-sm font-semibold text-gray-950">Fully editable</p>
          <p className="mt-2 text-sm/6 text-gray-600">
            Open &ldquo;Adjust the assumptions&rdquo; in the calculator to plug in your own FX
            spread and fee if you know them &mdash; the rest of the math updates instantly.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function SavingsCalculatorPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Container className="mt-16 pb-8">
        <SavingsCalculator />
      </Container>
      <Methodology />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ
        eyebrow="Straight answers"
        title="Where these numbers come from"
        items={faqItems}
      />
      <Footer />
    </main>
  )
}
