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

export const metadata = {
  title: 'Pricing',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}

const tiers = [
  {
    name: 'Basic',
    slug: 'basic',
    description: 'Ideal for small businesses.',
    priceMonthly: 500,
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
      { section: 'Accounts & Payments', name: 'Stablecoins & crypto transfers', value: 'Up to $50,000/m' },
      { section: 'Accounts & Payments', name: 'On-/Off-Ramp', value: '0.45% to 1.00% fee' },
      { section: 'Accounts & Payments', name: 'Cross-border payments', value: true },
      { section: 'Accounts & Payments', name: 'Stablecoin account', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Unlimited cards', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Fund 1:1 in stablecoins', value: 'Soon' },
      { section: 'Business Mastercards', name: 'Spending controls', value: 'Soon' },
      { section: 'Accounts Payable', name: 'Bill management & import (OCR)', value: true },
      { section: 'Accounts Payable', name: 'Pay via stablecoins, ACH, SEPA, SWIFT, and more', value: true },
      { section: 'Payroll & Expenses', name: 'Payroll templates', value: true },
      { section: 'Payroll & Expenses', name: 'Reimbursement requests', value: true },
      { section: 'Receivables', name: 'Unlimited invoices', value: true },
      { section: 'Receivables', name: 'Automated reconciliation', value: true },
      { section: 'Accounting', name: 'Transaction import', value: 'Up to 50,000' },
      { section: 'Accounting', name: 'QuickBooks Online and Xero integrations', value: true },
      { section: 'Accounting', name: 'Treasury & portfolio views', value: true },
      { section: 'Support', name: 'Human support via Email & Chat', value: '2h response' },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    description: 'Ideal for medium businesses.',
    priceMonthly: 'Custom',
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
      { section: 'Accounts & Payments', name: 'Stablecoins & crypto transfers', value: 'Tailored volume' },
      { section: 'Accounts & Payments', name: 'On-/Off-Ramp', value: '0.4% to 0.95% fee' },
      { section: 'Business Mastercards', name: 'Advanced spending controls', value: 'Soon' },
      { section: 'Accounts Payable', name: 'Approval policies', value: true },
      { section: 'Accounting', name: 'Transaction import', value: 'Tailored limit' },
      { section: 'Accounting', name: 'Advanced accounting rules', value: true },
      { section: 'Accounting', name: 'NetSuite integration', value: 'Soon' },
      { section: 'Accounting', name: 'Request a custom report', value: true },
      { section: 'Global', name: 'Custom currency', value: true },
      { section: 'Global', name: 'Transaction insurance', value: true },
      { section: 'Global', name: 'Test payments', value: true },
      { section: 'Support', name: 'Dedicated senior customer success manager', value: true },
      { section: 'Support', name: 'White-glove onboarding priority', value: true },
      { section: 'Support', name: 'Support via Slack', value: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    description: 'Managed services.',
    priceMonthly: 7500,
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
      { section: 'Accounts & Payments', name: 'Stablecoins & crypto transfers', value: 'Unlimited' },
      { section: 'Accounts & Payments', name: 'On-/Off-Ramp', value: 'Custom fee' },
      { section: 'Accounting', name: 'Transaction import', value: 'Unlimited' },
      { section: 'Accounting', name: 'Custom ERP integrations', value: true },
      { section: 'Custom Services', name: 'AP & AR management', value: true },
      { section: 'Custom Services', name: 'Accounting-ready', value: true },
      { section: 'Custom Services', name: 'Stablecoin account management', value: true },
      { section: 'Custom Services', name: 'Custom development', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pricing that grows with your needs.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Whether you’re a startup, global enterprise, or somewhere in between, Request Finance is designed to save you time and money.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            {typeof tier.priceMonthly === 'number' ? (
              <>
                <div className="text-5xl font-medium text-gray-950">
                  ${tier.priceMonthly}
                </div>
                <div className="text-sm/5 text-gray-950/75">
                  <p>USD</p>
                  <p>per month</p>
                </div>
              </>
            ) : (
              <div className="text-5xl font-medium text-gray-950">
                {tier.priceMonthly}
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

function PricingTable({ selectedTier }) {
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
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
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

export default async function Pricing({ searchParams }) {
  let params = await searchParams
  let tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      {/* <PricingTable selectedTier={tier} /> */}
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
