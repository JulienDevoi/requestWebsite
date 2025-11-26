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

// Note: metadata moved to layout or handled via generateMetadata in a server component wrapper if needed

const tiers = [
  {
    name: 'Basic',
    slug: 'basic',
    description: 'Ideal for small businesses.',
    priceMonthly: 600,
    priceAnnually: 500,
    href: '#',
    highlights: [
      { description: 'Accounts & Payments', isSection: true },
      { description: 'Stablecoins & crypto transfers (up to $50,000/m in volume included)' },
      { description: 'On-/Off-Ramp (0.45% to 1.00% fee)' },
      { description: 'Cross-border payments' },
      { description: 'Stablecoin account (Soon)' },
      { description: 'Business Mastercards (Soon)', isSection: true },
      { description: 'Unlimited cards' },
      { description: 'Fund 1:1 in stablecoins' },
      { description: 'Spending controls' },
      { description: 'Accounts Payable', isSection: true },
      { description: 'Bill management & import (OCR)' },
      { description: 'Pay via stablecoins, ACH, SEPA, SWIFT, and more' },
      { description: 'Payroll & Expenses', isSection: true },
      { description: 'Payroll templates' },
      { description: 'Reimbursement requests (via dedicated mobile app)' },
      { description: 'Receivables', isSection: true },
      { description: 'Unlimited invoices' },
      { description: 'Automated reconciliation' },
      { description: 'Accounting', isSection: true },
      { description: 'Transaction import (for up to 50,000 transactions)' },
      { description: 'QuickBooks Online and Xero integrations' },
      { description: 'Treasury & portfolio views' },
      { description: 'Support', isSection: true },
      { description: 'Human support via Email & Chat (median response time 2h)' },
    ],
    features: [
      // Accounts
      { section: 'Accounts', name: 'Stablecoin Account', value: true },
      { section: 'Accounts', name: 'Receive, hold, and pay in stablecoins', value: true },
      // Payments
      { section: 'Payments', name: 'Outgoing payment volume included (crypto-to-crypto)', value: '$50,000' },
      { section: 'Payments', name: 'Fee on overage payment volume (crypto-to-crypto)', value: '0.70%' },
      { section: 'Payments', name: 'On-Ramp to stablecoins', value: 'Starting at 1%' },
      { section: 'Payments', name: 'Off-Ramp to fiat (e.g. USD, EUR, ...)', value: 'Starting at 1%' },
      { section: 'Payments', name: 'Global, cross-border bank payments', value: true },
      { section: 'Payments', name: 'Fee-saving batch payments', value: true },
      // Business Mastercards
      { section: 'Business Mastercards', name: 'Virtual Mastercards', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Physical Mastercards', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Fund cards 1:1 in stablecoins', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Spending controls', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Advanced spending controls', value: false },
      // Payables
      { section: 'Payables', name: 'Pay bills via stablecoins, ACH, SEPA, SWIFT, and more', value: true },
      { section: 'Payables', name: 'Double payment protection', value: true },
      { section: 'Payables', name: 'Approval policies', value: false },
      { section: 'Payables', name: 'Scam protection', value: true },
      { section: 'Payables', name: 'Bills import/forwarding', value: true },
      { section: 'Payables', name: 'Direct Payments (Single)', value: true },
      { section: 'Payables', name: 'Direct Payments (Bulk Upload)', value: true },
      // Payroll
      { section: 'Payroll', name: 'Payroll templates', value: true },
      { section: 'Payroll', name: 'Pay fiat compensation, using stablecoins', value: true },
      { section: 'Payroll', name: 'One-off payments', value: true },
      { section: 'Payroll', name: 'Automatic sending of salary receipts to employees', value: true },
      { section: 'Payroll', name: 'Bulk upload for payroll', value: true },
      // Expenses
      { section: 'Expenses', name: 'Mobile app to let employees submit expense claims', value: true },
      { section: 'Expenses', name: 'Pay fiat expenses, using stablecoins', value: true },
      { section: 'Expenses', name: 'Approval workflows', value: true },
      // Receivables
      { section: 'Receivables', name: 'Create, send & track invoices', value: true },
      { section: 'Receivables', name: 'Denominate invoices in fiat, get paid in crypto or fiat', value: true },
      { section: 'Receivables', name: 'Automatic invoice payment detection', value: true },
      { section: 'Receivables', name: 'Automatic recurring invoices', value: true },
      { section: 'Receivables', name: 'Number of invoices included', value: 'Unlimited' },
      { section: 'Receivables', name: 'Client management', value: true },
      { section: 'Receivables', name: 'Invoice templates', value: true },
      // Accounting
      { section: 'Accounting', name: 'Number of transactions included', value: '50,000' },
      { section: 'Accounting', name: 'Accounting integrations', value: 'QuickBooks Online, Xero' },
      { section: 'Accounting', name: 'Treasury & portfolio views', value: true },
      { section: 'Accounting', name: 'Data exports in standard CSV format', value: true },
      { section: 'Accounting', name: 'Data exports in accounting-ready CSVs', value: true },
      { section: 'Accounting', name: 'PDF exports', value: true },
      { section: 'Accounting', name: 'Custom labels for invoices and bills', value: true },
      { section: 'Accounting', name: 'Accounting rules', value: true },
      { section: 'Accounting', name: 'Advanced accounting rules', value: false },
      { section: 'Accounting', name: 'Request a custom report', value: false },
      { section: 'Accounting', name: 'Custom Accounting integration', value: false },
      { section: 'Accounting', name: 'Accounting-ready', value: false },
      // Services
      { section: 'Services', name: 'Human support', value: true },
      { section: 'Services', name: 'Add your own custom currency', value: false },
      { section: 'Services', name: 'Premium support', value: false },
      { section: 'Services', name: 'White-glove onboarding priority', value: false },
      { section: 'Services', name: 'CFO-as-a-Service', value: false },
      { section: 'Services', name: 'Accounts Receivable & Accounts Payable management', value: false },
      { section: 'Services', name: 'Stablecoin Account management', value: false },
      { section: 'Services', name: 'Custom development', value: false },
      // Employee Management
      { section: 'Employee Management', name: 'Add & manage employees', value: true },
      { section: 'Employee Management', name: 'Import employees via CSV', value: true },
      // Team & Organization Management
      { section: 'Team & Organization Management', name: 'Number of seats included', value: '5' },
      { section: 'Team & Organization Management', name: 'Number of entities included', value: '3' },
      // Platform
      { section: 'Platform', name: 'Over 350 cryptocurrencies and 20 networks supported', value: true },
      { section: 'Platform', name: 'Over 20 fiat currencies supported', value: true },
      { section: 'Platform', name: 'Email notifications', value: true },
      { section: 'Platform', name: 'In-app notifications', value: true },
      { section: 'Platform', name: 'Transaction insurance', value: false },
      { section: 'Platform', name: 'Test payments', value: false },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    description: 'Ideal for medium businesses.',
    priceMonthly: 'Custom',
    priceAnnually: 'Custom',
    href: '#',
    includesLabel: 'Everything in Basic, plus:',
    highlights: [
      { description: 'Accounts & Payments', isSection: true },
      { description: 'Stablecoins & crypto transfers (tailored volume)' },
      { description: 'On-/Off-Ramp (0.4% to 0.95% fee)' },
      { description: 'Business Mastercards (Soon)', isSection: true },
      { description: 'Advanced spending controls' },
      { description: 'Accounts Payable', isSection: true },
      { description: 'Approval policies' },
      { description: 'Accounting', isSection: true },
      { description: 'Transaction import (tailored transaction limit)' },
      { description: 'Advanced accounting rules' },
      { description: 'NetSuite integration (Soon)' },
      { description: 'Request a custom report' },
      { description: 'Global', isSection: true },
      { description: 'Custom currency' },
      { description: 'Transaction insurance' },
      { description: 'Test payments' },
      { description: 'Support', isSection: true },
      { description: 'Dedicated senior customer success manager' },
      { description: 'White-glove onboarding priority' },
      { description: 'Support via Slack' },
    ],
    features: [
      // Accounts
      { section: 'Accounts', name: 'Stablecoin Account', value: true },
      { section: 'Accounts', name: 'Receive, hold, and pay in stablecoins', value: true },
      // Payments
      { section: 'Payments', name: 'Outgoing payment volume included (crypto-to-crypto)', value: 'Custom' },
      { section: 'Payments', name: 'Fee on overage payment volume (crypto-to-crypto)', value: '0.40%' },
      { section: 'Payments', name: 'On-Ramp to stablecoins', value: 'Starting at 0.95%' },
      { section: 'Payments', name: 'Off-Ramp to fiat (e.g. USD, EUR, ...)', value: 'Starting at 0.95%' },
      { section: 'Payments', name: 'Global, cross-border bank payments', value: true },
      { section: 'Payments', name: 'Fee-saving batch payments', value: true },
      // Business Mastercards
      { section: 'Business Mastercards', name: 'Virtual Mastercards', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Physical Mastercards', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Fund cards 1:1 in stablecoins', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Spending controls', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Advanced spending controls', value: true },
      // Payables
      { section: 'Payables', name: 'Pay bills via stablecoins, ACH, SEPA, SWIFT, and more', value: true },
      { section: 'Payables', name: 'Double payment protection', value: true },
      { section: 'Payables', name: 'Approval policies', value: true },
      { section: 'Payables', name: 'Scam protection', value: true },
      { section: 'Payables', name: 'Bills import/forwarding', value: true },
      { section: 'Payables', name: 'Direct Payments (Single)', value: true },
      { section: 'Payables', name: 'Direct Payments (Bulk Upload)', value: true },
      // Payroll
      { section: 'Payroll', name: 'Payroll templates', value: true },
      { section: 'Payroll', name: 'Pay fiat compensation, using stablecoins', value: true },
      { section: 'Payroll', name: 'One-off payments', value: true },
      { section: 'Payroll', name: 'Automatic sending of salary receipts to employees', value: true },
      { section: 'Payroll', name: 'Bulk upload for payroll', value: true },
      // Expenses
      { section: 'Expenses', name: 'Mobile app to let employees submit expense claims', value: true },
      { section: 'Expenses', name: 'Pay fiat expenses, using stablecoins', value: true },
      { section: 'Expenses', name: 'Approval workflows', value: true },
      // Receivables
      { section: 'Receivables', name: 'Create, send & track invoices', value: true },
      { section: 'Receivables', name: 'Denominate invoices in fiat, get paid in crypto or fiat', value: true },
      { section: 'Receivables', name: 'Automatic invoice payment detection', value: true },
      { section: 'Receivables', name: 'Automatic recurring invoices', value: true },
      { section: 'Receivables', name: 'Number of invoices included', value: 'Unlimited' },
      { section: 'Receivables', name: 'Client management', value: true },
      { section: 'Receivables', name: 'Invoice templates', value: true },
      // Accounting
      { section: 'Accounting', name: 'Number of transactions included', value: 'Custom' },
      { section: 'Accounting', name: 'Accounting integrations', value: '... and NetSuite (Soon)' },
      { section: 'Accounting', name: 'Treasury & portfolio views', value: true },
      { section: 'Accounting', name: 'Data exports in standard CSV format', value: true },
      { section: 'Accounting', name: 'Data exports in accounting-ready CSVs', value: true },
      { section: 'Accounting', name: 'PDF exports', value: true },
      { section: 'Accounting', name: 'Custom labels for invoices and bills', value: true },
      { section: 'Accounting', name: 'Accounting rules', value: true },
      { section: 'Accounting', name: 'Advanced accounting rules', value: true },
      { section: 'Accounting', name: 'Request a custom report', value: true },
      { section: 'Accounting', name: 'Custom Accounting integration', value: false },
      { section: 'Accounting', name: 'Accounting-ready', value: false },
      // Services
      { section: 'Services', name: 'Human support', value: true },
      { section: 'Services', name: 'Add your own custom currency', value: true },
      { section: 'Services', name: 'Premium support', value: true },
      { section: 'Services', name: 'White-glove onboarding priority', value: true },
      { section: 'Services', name: 'CFO-as-a-Service', value: false },
      { section: 'Services', name: 'Accounts Receivable & Accounts Payable management', value: false },
      { section: 'Services', name: 'Stablecoin Account management', value: false },
      { section: 'Services', name: 'Custom development', value: false },
      // Employee Management
      { section: 'Employee Management', name: 'Add & manage employees', value: true },
      { section: 'Employee Management', name: 'Import employees via CSV', value: true },
      // Team & Organization Management
      { section: 'Team & Organization Management', name: 'Number of seats included', value: '10' },
      { section: 'Team & Organization Management', name: 'Number of entities included', value: '5' },
      // Platform
      { section: 'Platform', name: 'Over 350 cryptocurrencies and 20 networks supported', value: true },
      { section: 'Platform', name: 'Over 20 fiat currencies supported', value: true },
      { section: 'Platform', name: 'Email notifications', value: true },
      { section: 'Platform', name: 'In-app notifications', value: true },
      { section: 'Platform', name: 'Transaction insurance', value: true },
      { section: 'Platform', name: 'Test payments', value: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    description: 'Managed services.',
    priceMonthly: 9000,
    priceAnnually: 7500,
    href: '#',
    includesLabel: 'Everything in Pro, plus:',
    highlights: [
      { description: 'Accounts & Payments', isSection: true },
      { description: 'Stablecoins & crypto transfers (unlimited)' },
      { description: 'On-/Off-Ramp (custom fee)' },
      { description: 'Accounting', isSection: true },
      { description: 'Transaction import (unlimited transactions)' },
      { description: 'Custom ERP integrations' },
      { description: 'Custom Services', isSection: true },
      { description: 'AP & AR management' },
      { description: 'Accounting-ready' },
      { description: 'Stablecoin account management' },
      { description: 'Custom development' },
    ],
    features: [
      // Accounts
      { section: 'Accounts', name: 'Stablecoin Account', value: true },
      { section: 'Accounts', name: 'Receive, hold, and pay in stablecoins', value: true },
      // Payments
      { section: 'Payments', name: 'Outgoing payment volume included (crypto-to-crypto)', value: 'Unlimited' },
      { section: 'Payments', name: 'Fee on overage payment volume (crypto-to-crypto)', value: 'Free' },
      { section: 'Payments', name: 'On-Ramp to stablecoins', value: 'Custom fee' },
      { section: 'Payments', name: 'Off-Ramp to fiat (e.g. USD, EUR, ...)', value: 'Custom fee' },
      { section: 'Payments', name: 'Global, cross-border bank payments', value: true },
      { section: 'Payments', name: 'Fee-saving batch payments', value: true },
      // Business Mastercards
      { section: 'Business Mastercards', name: 'Virtual Mastercards', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Physical Mastercards', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Fund cards 1:1 in stablecoins', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Spending controls', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Advanced spending controls', value: true },
      // Payables
      { section: 'Payables', name: 'Pay bills via stablecoins, ACH, SEPA, SWIFT, and more', value: true },
      { section: 'Payables', name: 'Double payment protection', value: true },
      { section: 'Payables', name: 'Approval policies', value: true },
      { section: 'Payables', name: 'Scam protection', value: true },
      { section: 'Payables', name: 'Bills import/forwarding', value: true },
      { section: 'Payables', name: 'Direct Payments (Single)', value: true },
      { section: 'Payables', name: 'Direct Payments (Bulk Upload)', value: true },
      // Payroll
      { section: 'Payroll', name: 'Payroll templates', value: true },
      { section: 'Payroll', name: 'Pay fiat compensation, using stablecoins', value: true },
      { section: 'Payroll', name: 'One-off payments', value: true },
      { section: 'Payroll', name: 'Automatic sending of salary receipts to employees', value: true },
      { section: 'Payroll', name: 'Bulk upload for payroll', value: true },
      // Expenses
      { section: 'Expenses', name: 'Mobile app to let employees submit expense claims', value: true },
      { section: 'Expenses', name: 'Pay fiat expenses, using stablecoins', value: true },
      { section: 'Expenses', name: 'Approval workflows', value: true },
      // Receivables
      { section: 'Receivables', name: 'Create, send & track invoices', value: true },
      { section: 'Receivables', name: 'Denominate invoices in fiat, get paid in crypto or fiat', value: true },
      { section: 'Receivables', name: 'Automatic invoice payment detection', value: true },
      { section: 'Receivables', name: 'Automatic recurring invoices', value: true },
      { section: 'Receivables', name: 'Number of invoices included', value: 'Unlimited' },
      { section: 'Receivables', name: 'Client management', value: true },
      { section: 'Receivables', name: 'Invoice templates', value: true },
      // Accounting
      { section: 'Accounting', name: 'Number of transactions included', value: 'Unlimited' },
      { section: 'Accounting', name: 'Accounting integrations', value: false },
      { section: 'Accounting', name: 'Treasury & portfolio views', value: true },
      { section: 'Accounting', name: 'Data exports in standard CSV format', value: true },
      { section: 'Accounting', name: 'Data exports in accounting-ready CSVs', value: true },
      { section: 'Accounting', name: 'PDF exports', value: true },
      { section: 'Accounting', name: 'Custom labels for invoices and bills', value: true },
      { section: 'Accounting', name: 'Accounting rules', value: true },
      { section: 'Accounting', name: 'Advanced accounting rules', value: true },
      { section: 'Accounting', name: 'Request a custom report', value: true },
      { section: 'Accounting', name: 'Custom Accounting integration', value: true },
      { section: 'Accounting', name: 'Accounting-ready', value: true },
      // Services
      { section: 'Services', name: 'Human support', value: true },
      { section: 'Services', name: 'Add your own custom currency', value: true },
      { section: 'Services', name: 'Premium support', value: true },
      { section: 'Services', name: 'White-glove onboarding priority', value: true },
      { section: 'Services', name: 'CFO-as-a-Service', value: true },
      { section: 'Services', name: 'Accounts Receivable & Accounts Payable management', value: true },
      { section: 'Services', name: 'Stablecoin Account management', value: true },
      { section: 'Services', name: 'Custom development', value: true },
      // Employee Management
      { section: 'Employee Management', name: 'Add & manage employees', value: true },
      { section: 'Employee Management', name: 'Import employees via CSV', value: true },
      // Team & Organization Management
      { section: 'Team & Organization Management', name: 'Number of seats included', value: 'Unlimited' },
      { section: 'Team & Organization Management', name: 'Number of entities included', value: 'Unlimited' },
      // Platform
      { section: 'Platform', name: 'Over 350 cryptocurrencies and 20 networks supported', value: true },
      { section: 'Platform', name: 'Over 20 fiat currencies supported', value: true },
      { section: 'Platform', name: 'Email notifications', value: true },
      { section: 'Platform', name: 'In-app notifications', value: true },
      { section: 'Platform', name: 'Transaction insurance', value: true },
      { section: 'Platform', name: 'Test payments', value: true },
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
          Save 16%
        </span>
      </span>
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pricing that grows with your needs.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Whether you're a startup, global enterprise, or somewhere in between, Request Finance is designed to save you time and money.
      </Lead>
    </Container>
  )
}

function PricingCards({ billingPeriod, setBillingPeriod }) {
  return (
    <div className="relative pt-12 pb-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
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
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
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
            <Button href="/demo">Book a demo</Button>
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
              <Button variant="outline" href="/demo">
                Book a demo
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Book a demo</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href="/demo">
                  Book a demo
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
                    alt=""
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

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              Do you have a free trial?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, you can use all paid plans entirely for free for 30 days — without commitments. You can switch to the Free plan at any time during your free trial to avoid paying fees. Note that we will bill for any excess payment volume that you incur during your free trial. Don&apos;t worry: the included volumes are more than enough to test the platform and we&apos;ll tell you when you&apos;re about to exceed your volume.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Do you have a yearly payment option?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes! You can pay yearly and save 16% compared to paying monthly.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What are the fees for Crypto-to-Fiat transfers?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              It&apos;s important to us to offer the best rate in the market. We power SWIFT, SEPA and ACH payments to 170+ countries. Those banking systems can be costly. Despite that, we manage to offer fees starting at 1% (minimum fees apply) with subscription plans. We also offer tailored fees and automated discounts for high-value offramps, perfect for things like acquisitions, paying out investors, cashing out treasury funds, or settling big supplier invoices.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How do I pay a Request Finance bill?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Paying a Request Finance bill is as easy as paying any bill on the platform. Once you signed up, you can use your preferred wallet to pay.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What currencies do you accept?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              <p>Request Finance&apos;s AP, AR, Expenses, Payroll, and Accounting modules support +350 crypto and fiat currencies, and +18 payment networks.</p>
              <p className="mt-3">As for your subscription, you can choose in which currency and on which network you want to pay. The available currencies and networks are:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Avalanche: USDC, USDT</li>
                <li>BSC: USDC, USDT</li>
                <li>Ethereum: USDC, USDT, DAI</li>
                <li>Polygon: USDC, USDT, DAI</li>
              </ul>
              <p className="mt-3">You can change your preferred network and currency any time in your settings.</p>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Is there a free plan available for Crypto-to-Fiat?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, there&apos;s a limited option to use Crypto-to-Fiat as part of a Free plan at 1.5% fees on the volume. However, we recommend booking a demo first to assess if a subscription makes more sense due to reduced fees and added features for efficient financial operations.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I switch to the Free plan during my free trial?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, you can switch your plans in a few clicks once you signed up. If you switch to the Free plan during your free trial and did not exceed your payment volume, then you won&apos;t be billed.
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
      <PricingTable selectedTier={selectedTier} setSelectedTier={setSelectedTier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
