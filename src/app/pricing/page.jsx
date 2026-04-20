'use client'

import { useState } from 'react'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'

const tiers = [
  {
    name: 'Basic',
    slug: 'basic',
    description: 'For small teams getting started.',
    priceMonthly: 300,
    priceAnnually: 250,
    href: 'https://app.request.finance/signup',
    highlights: [
      { description: 'Spend Management & Cards', isSection: true },
      { description: 'Up to 5 team members' },
      { description: 'Up to 5 corporate cards' },
      { description: 'Spend limits & controls' },
      { description: 'One Virtual Account' },
      { description: 'Bill Payments', isSection: true },
      { description: 'Bill approval workflows' },
      { description: 'Bill import & OCR' },
      { description: 'Pay via ACH, SEPA, SWIFT, stablecoins & more' },
      { description: 'Finance & Accounting', isSection: true },
      { description: 'Automated reconciliation' },
      { description: 'Payroll & Expenses', isSection: true },
      { description: 'Payroll templates & bulk upload' },
      { description: 'Mobile expense claims' },
      { description: 'Support', isSection: true },
      { description: 'Email & chat support (median response 2h)' },
    ],
    features: [
      { section: 'Spend Management', name: 'Team members included', value: '5' },
      { section: 'Spend Management', name: 'Corporate cards', value: '5' },
      { section: 'Spend Management', name: 'Virtual Accounts', value: '1' },
      { section: 'Spend Management', name: 'Physical cards', value: false },
      { section: 'Spend Management', name: 'Spend limits & controls', value: true },
      { section: 'Spend Management', name: 'Advanced spending controls', value: false },
      { section: 'Bill Payments & Payables', name: 'Bill approval workflows', value: true },
      { section: 'Bill Payments & Payables', name: 'Advanced approval workflows', value: false },
      { section: 'Bill Payments & Payables', name: 'Bill import & OCR', value: true },
      { section: 'Bill Payments & Payables', name: 'Pay via ACH, SEPA, SWIFT, stablecoins & more', value: true },
      { section: 'Bill Payments & Payables', name: 'Double payment protection', value: true },
      { section: 'Bill Payments & Payables', name: 'Scam protection', value: true },
      { section: 'Bill Payments & Payables', name: 'Batch payments', value: true },
      { section: 'Payroll & Expenses', name: 'Payroll templates', value: true },
      { section: 'Payroll & Expenses', name: 'Expense claims via mobile app', value: true },
      { section: 'Payroll & Expenses', name: 'Automatic salary receipts', value: true },
      { section: 'Payroll & Expenses', name: 'Bulk payroll upload', value: true },
      { section: 'Receivables', name: 'Create, send & track invoices', value: true },
      { section: 'Receivables', name: 'Automatic payment detection', value: true },
      { section: 'Receivables', name: 'Recurring invoices', value: true },
      { section: 'Receivables', name: 'Unlimited invoices', value: true },
      { section: 'Receivables', name: 'Client management', value: true },
      { section: 'Accounting & Integrations', name: 'Automated reconciliation', value: true },
      { section: 'Accounting & Integrations', name: 'Accounting integrations', value: false },
      { section: 'Accounting & Integrations', name: 'NetSuite integration', value: false },
      { section: 'Accounting & Integrations', name: 'CSV & PDF exports', value: true },
      { section: 'Support & Services', name: 'Email & chat support', value: true },
      { section: 'Support & Services', name: 'Dedicated CSM', value: false },
      { section: 'Support & Services', name: 'Priority routing', value: false },
      { section: 'Support & Services', name: 'Slack support', value: false },
      { section: 'Support & Services', name: 'White-glove onboarding', value: false },
      { section: 'Team & Organization', name: 'Number of seats', value: '5' },
      { section: 'Team & Organization', name: 'Multi-entity support', value: false },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    description: 'For growing finance teams.',
    priceMonthly: 600,
    priceAnnually: 500,
    href: 'https://app.request.finance/signup',
    featured: true,
    includesLabel: 'Everything in Basic, plus:',
    highlights: [
      { description: 'Spend Management & Cards', isSection: true },
      { description: 'Up to 20 users' },
      { description: 'Up to 20 cards, including physical' },
      { description: 'Up to 3 Virtual Accounts' },
      { description: 'Bill Payments', isSection: true },
      { description: 'Advanced approval workflows' },
      { description: 'Accounting & Integrations', isSection: true },
      { description: 'QuickBooks Online & Xero integrations' },
      { description: 'Multi-entity', isSection: true },
      { description: 'Manage multiple entities from one dashboard' },
      { description: 'Support', isSection: true },
      { description: 'Dedicated senior CSM' },
      { description: 'Slack support' },
    ],
    features: [
      { section: 'Spend Management', name: 'Team members included', value: '20' },
      { section: 'Spend Management', name: 'Corporate cards', value: '20' },
      { section: 'Spend Management', name: 'Virtual Accounts', value: '3' },
      { section: 'Spend Management', name: 'Physical cards', value: true },
      { section: 'Spend Management', name: 'Spend limits & controls', value: true },
      { section: 'Spend Management', name: 'Advanced spending controls', value: true },
      { section: 'Bill Payments & Payables', name: 'Bill approval workflows', value: true },
      { section: 'Bill Payments & Payables', name: 'Advanced approval workflows', value: true },
      { section: 'Bill Payments & Payables', name: 'Bill import & OCR', value: true },
      { section: 'Bill Payments & Payables', name: 'Pay via ACH, SEPA, SWIFT, stablecoins & more', value: true },
      { section: 'Bill Payments & Payables', name: 'Double payment protection', value: true },
      { section: 'Bill Payments & Payables', name: 'Scam protection', value: true },
      { section: 'Bill Payments & Payables', name: 'Batch payments', value: true },
      { section: 'Payroll & Expenses', name: 'Payroll templates', value: true },
      { section: 'Payroll & Expenses', name: 'Expense claims via mobile app', value: true },
      { section: 'Payroll & Expenses', name: 'Automatic salary receipts', value: true },
      { section: 'Payroll & Expenses', name: 'Bulk payroll upload', value: true },
      { section: 'Receivables', name: 'Create, send & track invoices', value: true },
      { section: 'Receivables', name: 'Automatic payment detection', value: true },
      { section: 'Receivables', name: 'Recurring invoices', value: true },
      { section: 'Receivables', name: 'Unlimited invoices', value: true },
      { section: 'Receivables', name: 'Client management', value: true },
      { section: 'Accounting & Integrations', name: 'Automated reconciliation', value: true },
      { section: 'Accounting & Integrations', name: 'Accounting integrations', value: 'QuickBooks, Xero' },
      { section: 'Accounting & Integrations', name: 'NetSuite integration', value: false },
      { section: 'Accounting & Integrations', name: 'CSV & PDF exports', value: true },
      { section: 'Support & Services', name: 'Email & chat support', value: true },
      { section: 'Support & Services', name: 'Dedicated CSM', value: true },
      { section: 'Support & Services', name: 'Priority routing', value: false },
      { section: 'Support & Services', name: 'Slack support', value: true },
      { section: 'Support & Services', name: 'White-glove onboarding', value: false },
      { section: 'Team & Organization', name: 'Number of seats', value: '20' },
      { section: 'Team & Organization', name: 'Multi-entity support', value: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    description: 'For mature or high-volume teams.',
    priceMonthly: 1500,
    priceAnnually: 1250,
    href: 'https://app.request.finance/signup',
    includesLabel: 'Everything in Pro, plus:',
    highlights: [
      { description: 'Spend Management & Cards', isSection: true },
      { description: 'Unlimited users' },
      { description: 'Unlimited cards' },
      { description: 'Up to 5 Virtual Accounts' },
      { description: 'Accounting & Integrations', isSection: true },
      { description: 'NetSuite integration' },
      { description: 'Operations', isSection: true },
      { description: 'Priority routing on all payouts' },
      { description: 'Custom development available' },
      { description: 'Support', isSection: true },
      { description: 'Dedicated CSM' },
      { description: 'White-glove onboarding' },
    ],
    features: [
      { section: 'Spend Management', name: 'Team members included', value: 'Unlimited' },
      { section: 'Spend Management', name: 'Corporate cards', value: 'Unlimited' },
      { section: 'Spend Management', name: 'Virtual Accounts', value: '5' },
      { section: 'Spend Management', name: 'Physical cards', value: true },
      { section: 'Spend Management', name: 'Spend limits & controls', value: true },
      { section: 'Spend Management', name: 'Advanced spending controls', value: true },
      { section: 'Bill Payments & Payables', name: 'Bill approval workflows', value: true },
      { section: 'Bill Payments & Payables', name: 'Advanced approval workflows', value: true },
      { section: 'Bill Payments & Payables', name: 'Bill import & OCR', value: true },
      { section: 'Bill Payments & Payables', name: 'Pay via ACH, SEPA, SWIFT, stablecoins & more', value: true },
      { section: 'Bill Payments & Payables', name: 'Double payment protection', value: true },
      { section: 'Bill Payments & Payables', name: 'Scam protection', value: true },
      { section: 'Bill Payments & Payables', name: 'Batch payments', value: true },
      { section: 'Payroll & Expenses', name: 'Payroll templates', value: true },
      { section: 'Payroll & Expenses', name: 'Expense claims via mobile app', value: true },
      { section: 'Payroll & Expenses', name: 'Automatic salary receipts', value: true },
      { section: 'Payroll & Expenses', name: 'Bulk payroll upload', value: true },
      { section: 'Receivables', name: 'Create, send & track invoices', value: true },
      { section: 'Receivables', name: 'Automatic payment detection', value: true },
      { section: 'Receivables', name: 'Recurring invoices', value: true },
      { section: 'Receivables', name: 'Unlimited invoices', value: true },
      { section: 'Receivables', name: 'Client management', value: true },
      { section: 'Accounting & Integrations', name: 'Automated reconciliation', value: true },
      { section: 'Accounting & Integrations', name: 'Accounting integrations', value: 'QuickBooks, Xero & more' },
      { section: 'Accounting & Integrations', name: 'NetSuite integration', value: true },
      { section: 'Accounting & Integrations', name: 'CSV & PDF exports', value: true },
      { section: 'Support & Services', name: 'Email & chat support', value: true },
      { section: 'Support & Services', name: 'Dedicated CSM', value: true },
      { section: 'Support & Services', name: 'Priority routing', value: true },
      { section: 'Support & Services', name: 'Slack support', value: true },
      { section: 'Support & Services', name: 'White-glove onboarding', value: true },
      { section: 'Team & Organization', name: 'Number of seats', value: 'Unlimited' },
      { section: 'Team & Organization', name: 'Multi-entity support', value: true },
    ],
  },
]

function BillingToggle({ billingPeriod, setBillingPeriod }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <span
        className={clsx(
          'text-sm font-medium transition-colors',
          billingPeriod === 'monthly' ? 'text-gray-950' : 'text-gray-500'
        )}
      >
        Monthly
      </span>
      <button
        type="button"
        onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
        className={clsx(
          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
          billingPeriod === 'annually' ? 'bg-blue-600' : 'bg-gray-200'
        )}
        role="switch"
        aria-checked={billingPeriod === 'annually'}
      >
        <span
          className={clsx(
            'pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            billingPeriod === 'annually' ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
      <span
        className={clsx(
          'text-sm font-medium transition-colors',
          billingPeriod === 'annually' ? 'text-gray-950' : 'text-gray-500'
        )}
      >
        Annually
        <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          Save 17%
        </span>
      </span>
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Simple pricing for global spend and corporate cards.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Bill payments, corporate cards, and global payouts on a single platform. Predictable subscriptions. Simple, transparent transaction fees.
      </Lead>
    </Container>
  )
}

function PricingCards({ billingPeriod, setBillingPeriod }) {
  return (
    <div className="relative pt-12 pb-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="flex items-center justify-center">
          <Subheading>Spend Management & Corporate Cards</Subheading>
        </div>
        <BillingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} billingPeriod={billingPeriod} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier, billingPeriod }) {
  const price = billingPeriod === 'annually' ? tier.priceAnnually : tier.priceMonthly

  return (
    <div className={clsx(
      '-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md',
      tier.featured && 'ring-2 ring-blue-600'
    )}>
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <div className="flex items-center gap-3">
            <Subheading>{tier.name}</Subheading>
            {tier.featured && (
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/20 ring-inset">
                Most popular
              </span>
            )}
          </div>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            {typeof price === 'number' ? (
              <>
                <div className="text-5xl font-medium text-gray-950">
                  ${price.toLocaleString()}
                </div>
                <div className="text-sm/5 text-gray-950/75">
                  <p>USD</p>
                  <p>per month{billingPeriod === 'annually' ? ', billed annually' : ''}</p>
                </div>
              </>
            ) : (
              <div className="text-5xl font-medium text-gray-950">
                {price}
              </div>
            )}
          </div>
          <div className="mt-8">
            <Button href="https://app.request.finance/signup" target="_blank">Start free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              {tier.includesLabel || 'Includes:'}
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function TransactionPricing() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Subheading>Transaction Pricing</Subheading>
          <Heading as="h2" className="mt-2">
            Simple, flat transaction fees
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl">
            Your subscription covers the platform. Transaction fees are separate, transparent, and always flat — no tiers, no surprises.
          </Lead>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Stablecoin Payouts — FREE anchor */}
          <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
            <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
              <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold text-gray-950">Stablecoin Payouts</p>
                <p className="mt-1 text-sm/6 text-gray-950/75">
                  Send crypto to vendors, employees, or partners directly from your treasury.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-gray-950">Free</span>
                  <span className="text-sm text-gray-950/75">unlimited volume</span>
                </div>
                <div className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm/6 text-green-800 ring-1 ring-green-200/80 ring-inset">
                  Zero processing fees on all stablecoin payouts, regardless of volume.
                </div>
              </div>
            </div>
          </div>

          {/* Fiat Payouts */}
          <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
            <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
              <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold text-gray-950">Fiat Payouts</p>
                <p className="mt-1 text-sm/6 text-gray-950/75">
                  No FX needed. Competitive with neobanks.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-gray-950">0.5%</span>
                  <span className="text-sm text-gray-950/75">flat fee</span>
                </div>
                <div className="mt-6 rounded-xl bg-gray-50 px-4 py-3 text-sm/6 text-gray-700 ring-1 ring-gray-200/80 ring-inset">
                  Single flat rate on all fiat payouts, regardless of volume.
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  Banking rails: Local (ACH, Wire) $10 · SWIFT $30
                </p>
              </div>
            </div>
          </div>

          {/* Global USD Account */}
          <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
            <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
              <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold text-gray-950">Global USD Account</p>
                <p className="mt-1 text-sm/6 text-gray-950/75">
                  Fees apply only when adding money to your account.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-gray-950">0.10%</span>
                  <span className="text-sm text-gray-950/75">as low as</span>
                </div>
                <table className="mt-6 w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-2 text-left font-medium text-gray-500">Funding method</th>
                      <th className="pb-2 text-right font-medium text-gray-500">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-2.5 text-gray-700">Stablecoin top-up (USDC / USDT)</td>
                      <td className="py-2.5 text-right font-medium text-gray-950">0.10%</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2.5 text-gray-700">Fiat top-up (USD, local & international)</td>
                      <td className="py-2.5 text-right font-medium text-gray-950">0.20%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-gray-700">Fiat top-up (EUR, BRL, MXN & GBP)</td>
                      <td className="py-2.5 text-right font-medium text-gray-950">0.60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise callout */}
        <div className="mt-12 text-center">
          <p className="text-sm/6 text-gray-600">
            <span className="font-semibold text-gray-950">Enterprise needs?</span>{' '}
            Custom contracts, dedicated CSM, and tailored pricing available.{' '}
            <Link href="https://app.request.finance/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Talk to sales &rarr;
            </Link>
          </p>
        </div>
      </Container>
    </div>
  )
}

function PricingTable({ selectedTier, setSelectedTier }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <button
                          type="button"
                          onClick={() => setSelectedTier(tier)}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex w-full items-center gap-2 rounded-md px-2 py-1 text-left data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </button>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href="https://app.request.finance/signup" target="_blank">
                Start free trial
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Start free trial</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href="https://app.request.finance/signup" target="_blank">
                  Start free trial
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({ description, isSection = false }) {
  const hasSoon = description.includes('(Soon)')
  const textWithoutSoon = description.replace(' (Soon)', '').replace('(Soon)', '')

  const SoonBadge = () => (
    <span className="ml-1.5 bg-linear-to-r from-[#60d5ff] from-28% via-[#2b6ff4] via-70% to-[#1e40af] bg-clip-text text-transparent font-medium">
      Soon
    </span>
  )

  if (isSection) {
    return (
      <li className="pt-4 first:pt-0 text-sm/6 font-semibold text-gray-950">
        {textWithoutSoon}
        {hasSoon && <SoonBadge />}
      </li>
    )
  }

  return (
    <li className="flex items-start gap-4 text-sm/6 text-gray-950/75">
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {textWithoutSoon}
      {hasSoon && <SoonBadge />}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt="David Norris, Head of Finance at Near Protocol"
                    src="/testimonials/david.jpeg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['\201C'] after:absolute after:content-['\201D'] lg:text-4xl">
                  Request Finance has improved the security of our stablecoin payment processes.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">David Norris</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#60d5ff] from-28% via-[#2b6ff4] via-70% to-[#1e40af] bg-clip-text text-transparent">
                    Head of Finance, Near Protocol
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

const faqItems = [
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes. Every paid plan comes with a 30-day free trial — no commitments. You get full access to all features so you can see the value before you pay. If you decide it\'s not for you, you can cancel anytime during the trial.',
  },
  {
    question: 'How does the pricing work? What do I pay for?',
    answer:
      'Your pricing has two parts: a monthly subscription that covers the full platform — corporate cards, bill approval workflows, automated reconciliation, multi-entity management, payroll, and more — and transaction fees that apply only when you actually move money. Fees are flat and simple: stablecoin payouts are always free, and fiat payouts are a flat 0.5% regardless of volume.',
  },
  {
    question: 'How are transaction fees calculated?',
    answer:
      'Transaction fees are flat and straightforward. Stablecoin payouts are always free, regardless of volume. Fiat payouts are a flat 0.5% — no tiers, no volume thresholds, no surprises. Banking rail fees (ACH, Wire, SWIFT) apply on top where applicable.',
  },
  {
    question: 'What are funding fees?',
    answer:
      'Funding fees are a small, one-time cost that applies only when you add money to your Global USD Account. Stablecoin top-ups are just 0.10%, and fiat USD top-ups are 0.20%. These are not recurring — you only pay when you fund your account.',
  },
  {
    question: 'Do you have a yearly payment option?',
    answer: 'Yes! You can pay yearly and save 17% compared to paying monthly.',
  },
  {
    question: 'What payment rails and currencies do you support?',
    answer:
      'Request Finance supports ACH, SEPA, SWIFT, local fast payment rails, and stablecoin transfers across 20+ networks. You can pay vendors and employees in 350+ crypto and 20+ fiat currencies worldwide. For your subscription, you can pay with USDC, USDT, or DAI on Ethereum, Polygon, Avalanche, or BSC.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle. If you need a custom arrangement for higher volumes or more entities, our sales team is happy to help.',
  },
]

function FrequentlyAskedQuestions() {
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

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              Do you offer a free trial?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes. Every paid plan comes with a 30-day free trial — no commitments. You get full access to all features so you can see the value before you pay. If you decide it&apos;s not for you, you can cancel anytime during the trial.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How does the pricing work? What do I pay for?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              <p>Your pricing has two parts:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>A monthly subscription</strong> that covers the full platform — corporate cards, bill approval workflows, automated reconciliation, multi-entity management, payroll, and more.</li>
                <li><strong>Transaction fees</strong> that apply only when you actually move money. Fees are flat — no tiers, no volume thresholds.</li>
              </ul>
              <p className="mt-3">Stablecoin payouts are always free. Fiat payouts are a flat 0.5% regardless of volume.</p>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How are transaction fees calculated?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Transaction fees are flat and straightforward. Stablecoin payouts are always free, regardless of volume. Fiat payouts are a flat 0.5% — no tiers, no volume thresholds, no surprises. Banking rail fees (ACH, Wire, SWIFT) apply on top where applicable.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What are funding fees?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Funding fees are a small, one-time cost that applies only when you add money to your Global USD Account. Stablecoin top-ups are just 0.10%, and fiat USD top-ups are 0.20%. These are not recurring — you only pay when you fund your account.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Do you have a yearly payment option?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes! You can pay yearly and save 17% compared to paying monthly.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What payment rails and currencies do you support?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              <p>Request Finance supports ACH, SEPA, SWIFT, local fast payment rails, and stablecoin transfers across 20+ networks. You can pay vendors and employees in 350+ crypto and 20+ fiat currencies worldwide.</p>
              <p className="mt-3">For your subscription, you can pay with USDC, USDT, or DAI on Ethereum, Polygon, Avalanche, or BSC.</p>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I switch plans later?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle. If you need a custom arrangement for higher volumes or more entities, our sales team is happy to help.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('annually')
  const [selectedTier, setSelectedTier] = useState(tiers[0])

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
      <TransactionPricing />
      <PricingTable selectedTier={selectedTier} setSelectedTier={setSelectedTier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
