'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export function StablecoinFAQ() {
  const items = [
    {
      question: 'Are B2B stablecoin payments legal?',
      answer:
        'In most major markets, yes. The US GENIUS Act (signed July 2025) created a federal regulatory framework for payment stablecoins. The EU\u2019s MiCA regulation has been in effect since 2024. Singapore, Japan, and several other jurisdictions have their own licensing regimes. However, some countries (notably China) prohibit crypto transactions. Always verify local regulations before initiating stablecoin payments to a new market.',
    },
    {
      question: 'How much can stablecoins save on cross-border payments?',
      answer:
        'Savings vary by corridor. Payments from Southeast Asia to Europe can be 3-4x cheaper using stablecoins compared to SWIFT. Transfers from Africa to Europe can be up to 5-10x cheaper on certain routes. Domestic payments in well-banked countries show minimal or no savings.',
    },
    {
      question: 'Do recipients need a crypto wallet to receive stablecoin payments?',
      answer:
        'Not necessarily. Many B2B payment platforms handle the conversion so recipients receive funds directly in their local bank account. The stablecoin acts as a settlement rail, not something the recipient needs to manage.',
    },
    {
      question: 'How are stablecoins taxed for businesses?',
      answer:
        'Tax treatment varies by jurisdiction, but stablecoins are generally not classified as cash. In the US, they are typically treated as digital assets, and gains or losses on conversion may be taxable events. Consult your tax advisor for jurisdiction-specific guidance.',
    },
    {
      question: 'What happens if a stablecoin loses its peg?',
      answer:
        'Major fiat-backed stablecoins like USDC and USDT have temporarily traded below $1 during extreme market events but restored their peg within days. The risk is real but manageable if you avoid holding large balances for extended periods and use stablecoins primarily as a transfer mechanism rather than a store of value.',
    },
    {
      question: 'Which stablecoin should we use for B2B payments?',
      answer:
        'For compliance-focused organizations, USDC (issued by Circle) is generally preferred due to its transparent reserve reporting, regular third-party attestations, and strong regulatory positioning under both US and EU frameworks. USDT has wider adoption and liquidity but has faced more scrutiny over its reserve disclosures. Avoid algorithmic or partially-collateralized stablecoins for operational treasury use.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Frequently asked questions about B2B stablecoin payments
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Answers to the most common questions from CFOs and finance teams
        </p>
      </div>
      <div className="space-y-1 px-5 pb-5 pt-4 sm:px-7 sm:pb-7">
        {items.map((item, index) => (
          <Disclosure key={index} as="div" defaultOpen={index === 0}>
            <DisclosureButton className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-950 transition hover:bg-gray-100">
              <span>{item.question}</span>
              <ChevronDownIcon className="size-4 shrink-0 text-gray-400 transition-transform duration-200 data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="px-4 py-3 text-sm leading-relaxed text-gray-600">
              {item.answer}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
