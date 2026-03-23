'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export function CryptoTreasuryFAQ() {
  const items = [
    {
      question: 'What is crypto treasury management?',
      answer:
        'Crypto treasury management is the strategic oversight of an organization\u2019s digital assets, encompassing security, liquidity, risk management, regulatory compliance, and investment of idle funds. It applies traditional financial discipline to an asset class with unique characteristics: 24/7 markets, self-custody requirements, extreme volatility, and rapidly evolving regulation.',
    },
    {
      question: 'Who needs crypto treasury management?',
      answer:
        'Any organization holding meaningful amounts of cryptocurrency: DAOs, DeFi protocols, crypto-native startups, Web3 gaming studios, foundations, and increasingly traditional companies with crypto exposure. If your balance sheet includes digital assets, you need a treasury management strategy.',
    },
    {
      question: 'What is the biggest risk for crypto treasuries?',
      answer:
        'Concentration risk: holding the majority of your treasury in a single asset, on a single platform, or in a single jurisdiction. The collapses of FTX, Celsius, and Terra/Luna all demonstrated how quickly undiversified positions can be destroyed. Diversification across assets, currencies, platforms, and jurisdictions is the most reliable defense.',
    },
    {
      question: 'How much of my crypto treasury should be in stablecoins?',
      answer:
        'At minimum, enough to cover 12 months of operating expenses. More cautious CFOs target 18 months. Your cash ratio (stablecoins and fiat divided by monthly operating costs) should be at least 1. Anything less means you are one bad market event away from being unable to meet obligations.',
    },
    {
      question: 'What is the best crypto treasury management software?',
      answer:
        'It depends on your needs. For end-to-end financial operations (invoicing, payroll, expenses, and AP/AR management), Request Finance offers the most comprehensive solution with the widest chain and stablecoin support. For on-chain dashboard and cashflow reporting, Coinshift is strong. For institutional custody, consider Anchorage or Coinbase. Most organizations need a combination of tools working together.',
    },
    {
      question: 'How do DAOs manage their treasury?',
      answer:
        'Effective DAOs typically use multi-signature wallets (like Safe) for secure custody, governance tools (like Snapshot) for community voting on treasury decisions, and financial operations platforms (like Request Finance) to manage payments and maintain transparent on-chain records. The best-run DAOs also maintain diversified holdings, conduct regular liquidity planning, and implement formal risk management frameworks.',
    },
    {
      question: 'What is the difference between a multisig wallet and an MPC wallet?',
      answer:
        'A multisig wallet requires multiple independent private keys to authorize a transaction, for example 3 out of 5 signers must approve. An MPC (multi-party computation) wallet mathematically splits a single private key into encrypted shards distributed across multiple parties, so the full key is never assembled in one place. Multisigs are more widely adopted and battle-tested. MPC is more flexible but technically more complex.',
    },
    {
      question: 'Can I hedge my crypto treasury exposure?',
      answer:
        'Yes. The three primary instruments are put options, futures contracts, and perpetual futures. Perpetuals are the simplest to maintain since they have no expiration date. But all hedging instruments require a stablecoin reserve to access, careful leverage management to avoid liquidation, and ongoing monitoring of funding rates and effectiveness. A hedge that is not actively managed can become a liability itself.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Frequently asked questions about crypto treasury management
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Answers to the most common questions from Web3 CFOs and finance teams
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
