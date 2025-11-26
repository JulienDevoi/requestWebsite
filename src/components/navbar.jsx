'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/demo', label: 'Book a demo' }
]

const industries = [
  { href: '/industries/saas', label: 'SaaS' },
  { href: '/industries/ecommerce', label: 'E-commerce' },
  { href: '/industries/healthcare', label: 'Healthcare' },
  { href: '/industries/wholesalers', label: 'Wholesalers' },
  { href: '/industries/affiliates', label: 'Marketing Agencies' },
  { href: '/industries/web3', label: 'Web3' },
]

const useCases = [
  { href: '/use-cases/affiliate-payments', label: 'Affiliate Payments' },
  { href: '/use-cases/recurring-payments', label: 'Recurring Payments' },
  { href: '/use-cases/import-export', label: 'Import/Export' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex items-center">
      <PlusGridItem className="relative flex items-center group">
        <Link
          href="/industries"
          className="flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
        >
          Industries
          <ChevronDownIcon className="size-4 transition-transform duration-200 group-hover:rotate-180" />
        </Link>
        <div className="absolute left-0 top-full z-20 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="w-48 origin-top rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
            {industries.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-950 transition hover:bg-gray-50"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </PlusGridItem>
      <PlusGridItem className="relative flex items-center group">
        <Link
          href="/use-cases"
          className="flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
        >
          Use Cases
          <ChevronDownIcon className="size-4 transition-transform duration-200 group-hover:rotate-180" />
        </Link>
        <div className="absolute left-0 top-full z-20 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="w-48 origin-top rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
            {useCases.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-950 transition hover:bg-gray-50"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </PlusGridItem>
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex items-center">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: 0 },
          }}
        >
          <p className="text-sm font-medium text-gray-500 mb-2">Industries</p>
          <div className="flex flex-col gap-3 pl-3">
            {industries.map(({ href, label }) => (
              <Link key={href} href={href} className="text-base font-medium text-gray-950">
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: 0.1 },
          }}
        >
          <p className="text-sm font-medium text-gray-500 mb-2">Use Cases</p>
          <div className="flex flex-col gap-3 pl-3">
            {useCases.map(({ href, label }) => (
              <Link key={href} href={href} className="text-base font-medium text-gray-950">
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: (linkIndex + 2) * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
