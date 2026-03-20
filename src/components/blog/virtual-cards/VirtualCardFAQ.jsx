'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export function VirtualCardFAQ() {
  const items = [
    {
      question: 'What is a virtual credit card?',
      answer:
        'A virtual credit card is a card that exists as a digital number only with a card number, CVV, and expiration date but without any physical plastic. It is generated on demand through a banking portal or card management platform and works on the same payment networks as physical cards.',
    },
    {
      question: 'How does a virtual card payment work?',
      answer:
        "When a virtual card is created, it generates a unique card number tied to the company's credit line or account balance. The cardholder enters this number at checkout exactly as they would for a physical card. The payment is processed through the standard card network (Visa, Mastercard, etc.), and the transaction is recorded in the card management platform.",
    },
    {
      question: 'What is the difference between a virtual card and a physical card?',
      answer:
        'Virtual cards are digital-only and can be issued instantly, while physical cards are plastic and require days to produce and deliver. Virtual cards can be configured with precise spend limits, merchant restrictions, and expiration dates that physical cards cannot match.',
    },
    {
      question: 'Are virtual cards safer than physical cards?',
      answer:
        'For online and digital payments, yes. Virtual cards eliminate the physical theft and skimming risks that physical cards carry. Single-use virtual cards expose no reusable credentials. If a virtual card number is compromised, it can be frozen or voided instantly.',
    },
    {
      question: 'What is the best virtual card for business?',
      answer:
        'There is no universal answer. The best virtual card for business depends on company size, transaction volume, accounting system, geographic footprint, and whether you need features like multi-entity support, approval workflows, or international payment capabilities.',
    },
    {
      question: 'Can virtual cards be used for subscriptions?',
      answer:
        'Yes, and this is one of the strongest use cases. Issuing one virtual card per SaaS subscription gives finance teams a clear map of what is running, who authorised it, and what it costs.',
    },
    {
      question: 'Can finance teams set spending limits on virtual cards?',
      answer:
        'Yes. Most virtual card platforms allow hard spend limits to be set at the card level. These are enforced caps, not alerts. Transactions above the limit are declined automatically.',
    },
    {
      question: 'Are virtual cards good for employee expenses?',
      answer:
        'For online and digital expenses, yes. Virtual cards eliminate the reimbursement cycle for expenses made against approved budgets and give finance teams clean transaction records rather than paper receipts.',
    },
    {
      question: 'Do virtual cards work for international payments?',
      answer:
        'Yes, with caveats. Virtual cards run on international card networks and are accepted by most online vendors globally. The main considerations are FX fees, international acceptance rates for specific merchant categories, and multi-currency support.',
    },
    {
      question: 'How do virtual cards help with reconciliation?',
      answer:
        'As each virtual card is issued for a specific purpose (a supplier, a service, a project), the transaction data is already segmented upon arrival. Most platforms sync this data automatically to accounting software, mapping transactions to the correct cost centre or GL account.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Frequently asked questions about virtual cards for business
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Answers to the most common questions from finance teams
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
