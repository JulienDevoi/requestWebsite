'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon, LinkIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { Button } from '@/components/button'
import { Link } from '@/components/link'
import {
  CALCULATOR_DEFAULTS,
  CURRENCY_CORRIDORS,
  PAYMENT_METHODS,
  PAYMENTS_RANGE,
  PRICING_TIERS_FOR_ROI,
  REQUEST_FEES,
  STABLECOIN_RANGE,
  VOLUME_RANGE,
  getDefaultFeePerTransfer,
  getDefaultFxSpreadPct,
} from '@/data/savings-calculator'

function formatCurrency(amount, { showSign = false } = {}) {
  const rounded = Math.round(amount)
  const sign = showSign && rounded > 0 ? '+' : ''
  return `${rounded < 0 ? '-' : sign}$${Math.abs(rounded).toLocaleString('en-US')}`
}

function AnimatedCurrency({ value, className }) {
  const motionValue = useMotionValue(value)
  const spring = useSpring(motionValue, { damping: 30, stiffness: 120 })
  const display = useTransform(spring, (v) => formatCurrency(v))

  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  return <motion.span className={className}>{display}</motion.span>
}

function SegmentedControl({ options, value, onChange }) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((option) => {
        const selected = value === option.value

        return (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={clsx(
            'cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium ring-1 ring-inset transition-colors',
            selected
              ? 'bg-gray-950 text-white ring-gray-950'
              : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50',
          )}
        >
          {option.label}
          {option.description && (
            <span
              className={clsx(
                'mt-0.5 block text-xs font-normal',
                value === option.value ? 'text-white/70' : 'text-gray-500',
              )}
            >
              {option.description}
            </span>
          )}
        </button>
        )
      })}
    </div>
  )
}

function FieldLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-gray-950">
      {children}
    </label>
  )
}

function VolumeInput({ value, onChange }) {
  return (
    <div>
      <FieldLabel htmlFor="volume">Monthly cross-border payment volume</FieldLabel>
      <div className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 ring-1 ring-gray-200 ring-inset focus-within:ring-2 focus-within:ring-blue-600">
        <span className="text-gray-500">$</span>
        <input
          id="volume"
          type="text"
          inputMode="numeric"
          value={value.toLocaleString('en-US')}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9]/g, '')
            onChange(raw === '' ? 0 : Math.min(50000000, parseInt(raw, 10)))
          }}
          className="w-full border-0 bg-transparent p-0 text-lg font-semibold text-gray-950 focus:ring-0 focus:outline-none"
        />
        <span className="shrink-0 text-sm text-gray-500">/ month</span>
      </div>
      <input
        type="range"
        aria-label="Monthly cross-border payment volume"
        min={VOLUME_RANGE.min}
        max={VOLUME_RANGE.max}
        step={VOLUME_RANGE.step}
        value={Math.min(value, VOLUME_RANGE.max)}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="mt-3 w-full accent-blue-600"
      />
      <div className="mt-1 flex justify-between text-xs text-gray-400">
        <span>${VOLUME_RANGE.min.toLocaleString()}</span>
        <span>${VOLUME_RANGE.max.toLocaleString()}+</span>
      </div>
    </div>
  )
}

function SliderInput({ id, label, value, min, max, step, formatValue, onChange, hint }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <span className="text-sm font-semibold text-gray-950">
          {formatValue ? formatValue(value) : value}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="mt-3 w-full accent-blue-600"
      />
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  )
}

function ComparisonBar({ label, sublabel, amount, maxAmount, barClassName }) {
  const pct = maxAmount > 0 ? Math.min(100, Math.max(2, (amount / maxAmount) * 100)) : 0

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-950">{label}</p>
          {sublabel && <p className="text-xs text-gray-500">{sublabel}</p>}
        </div>
        <p className="shrink-0 text-xl font-semibold text-gray-950">
          {formatCurrency(amount)}
          <span className="ml-1 text-xs font-normal text-gray-500">/yr</span>
        </p>
      </div>
      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={clsx('h-full rounded-full transition-all duration-500 ease-out', barClassName)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function AssumptionField({ id, label, value, onChange, suffix, step = 0.1, min = 0 }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-gray-500">
        {label}
      </label>
      <div className="mt-1 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 ring-1 ring-gray-200 ring-inset focus-within:ring-2 focus-within:ring-blue-600">
        <input
          id={id}
          type="number"
          step={step}
          min={min}
          value={value}
          onChange={(e) => onChange(e.target.value === '' ? 0 : parseFloat(e.target.value))}
          className="w-full border-0 bg-transparent p-0 text-sm font-medium text-gray-950 focus:ring-0 focus:outline-none"
        />
        <span className="shrink-0 text-xs text-gray-500">{suffix}</span>
      </div>
    </div>
  )
}

function readQueryParams() {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  if (![...params.keys()].length) return null

  const result = {}
  if (params.has('volume')) result.volume = parseInt(params.get('volume'), 10)
  if (params.has('payments')) result.paymentsPerMonth = parseInt(params.get('payments'), 10)
  if (params.has('method') && PAYMENT_METHODS[params.get('method')]) result.method = params.get('method')
  if (params.has('corridor') && CURRENCY_CORRIDORS[params.get('corridor')]) result.corridor = params.get('corridor')
  if (params.has('stablecoin')) result.stablecoinPct = parseInt(params.get('stablecoin'), 10)

  return result
}

export function SavingsCalculator() {
  const [volume, setVolume] = useState(CALCULATOR_DEFAULTS.monthlyVolume)
  const [paymentsPerMonth, setPaymentsPerMonth] = useState(CALCULATOR_DEFAULTS.paymentsPerMonth)
  const [method, setMethod] = useState(CALCULATOR_DEFAULTS.method)
  const [corridor, setCorridor] = useState(CALCULATOR_DEFAULTS.corridor)
  const [stablecoinPct, setStablecoinPct] = useState(CALCULATOR_DEFAULTS.stablecoinPct * 100)
  const [fxSpreadPct, setFxSpreadPct] = useState(
    () => getDefaultFxSpreadPct(CALCULATOR_DEFAULTS.method, CALCULATOR_DEFAULTS.corridor) * 100,
  )
  const [feePerTransfer, setFeePerTransfer] = useState(() =>
    getDefaultFeePerTransfer(CALCULATOR_DEFAULTS.method),
  )
  const [copyState, setCopyState] = useState('idle')
  const copyTimeoutRef = useRef(null)

  // Reset assumption overrides whenever the method or corridor changes, so the
  // advanced panel always reflects the currently selected combination.
  useEffect(() => {
    setFxSpreadPct(getDefaultFxSpreadPct(method, corridor) * 100)
    setFeePerTransfer(getDefaultFeePerTransfer(method))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, corridor])

  // Restore state from a shared link, if present.
  useEffect(() => {
    const fromQuery = readQueryParams()
    if (!fromQuery) return

    if (Number.isFinite(fromQuery.volume) && fromQuery.volume > 0) setVolume(fromQuery.volume)
    if (Number.isFinite(fromQuery.paymentsPerMonth) && fromQuery.paymentsPerMonth > 0) {
      setPaymentsPerMonth(fromQuery.paymentsPerMonth)
    }
    if (fromQuery.method) setMethod(fromQuery.method)
    if (fromQuery.corridor) setCorridor(fromQuery.corridor)
    if (Number.isFinite(fromQuery.stablecoinPct)) {
      setStablecoinPct(Math.min(100, Math.max(0, fromQuery.stablecoinPct)))
    }
  }, [])

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    }
  }, [])

  const results = useMemo(() => {
    const annualVolume = volume * 12
    const annualPayments = paymentsPerMonth * 12
    const stablecoinFraction = stablecoinPct / 100

    const currentFxCost = annualVolume * (fxSpreadPct / 100)
    const currentFeeCost = annualPayments * feePerTransfer
    const currentAnnualCost = currentFxCost + currentFeeCost

    const requestFiatCost = annualVolume * (1 - stablecoinFraction) * REQUEST_FEES.fiatFeePct
    const requestRailCost = annualPayments * REQUEST_FEES.bankingRailFeePerTransfer
    const requestAnnualCost = requestFiatCost + requestRailCost

    const netAnnualSavings = currentAnnualCost - requestAnnualCost
    const isSaving = netAnnualSavings >= 0

    const premiumAnnual = PRICING_TIERS_FOR_ROI.high.priceMonthly * 12
    const basicAnnual = PRICING_TIERS_FOR_ROI.low.priceMonthly * 12
    const roiFloor = netAnnualSavings - premiumAnnual
    const roiCeiling = netAnnualSavings - basicAnnual

    return {
      currentFxCost,
      currentFeeCost,
      currentAnnualCost,
      requestFiatCost,
      requestRailCost,
      requestAnnualCost,
      netAnnualSavings,
      isSaving,
      roiFloor,
      roiCeiling,
      maxAmount: Math.max(currentAnnualCost, requestAnnualCost),
    }
  }, [volume, paymentsPerMonth, fxSpreadPct, feePerTransfer, stablecoinPct])

  function handleShare() {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams({
      volume: String(volume),
      payments: String(paymentsPerMonth),
      method,
      corridor,
      stablecoin: String(Math.round(stablecoinPct)),
    })
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`

    navigator.clipboard
      ?.writeText(url)
      .then(() => {
        setCopyState('copied')
        if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
        copyTimeoutRef.current = setTimeout(() => setCopyState('idle'), 2500)
      })
      .catch(() => {
        window.prompt('Copy this link:', url)
      })

    if (window.history?.replaceState) {
      window.history.replaceState(null, '', `?${params.toString()}`)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
      {/* Inputs */}
      <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
        <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
          <div className="space-y-8 rounded-3xl bg-white p-8 ring-1 ring-black/5">
            <VolumeInput value={volume} onChange={setVolume} />

            <SliderInput
              id="payments"
              label="Cross-border payments per month"
              value={paymentsPerMonth}
              min={PAYMENTS_RANGE.min}
              max={PAYMENTS_RANGE.max}
              step={PAYMENTS_RANGE.step}
              formatValue={(v) => `${v} / month`}
              onChange={setPaymentsPerMonth}
            />

            <div>
              <FieldLabel>How do you send this money today?</FieldLabel>
              <div className="mt-2">
                <SegmentedControl
                  value={method}
                  onChange={setMethod}
                  options={Object.values(PAYMENT_METHODS).map((m) => ({
                    value: m.slug,
                    label: m.label,
                    description: m.description,
                  }))}
                />
              </div>
            </div>

            <div>
              <FieldLabel>Currency mix</FieldLabel>
              <div className="mt-2">
                <SegmentedControl
                  value={corridor}
                  onChange={setCorridor}
                  options={Object.values(CURRENCY_CORRIDORS).map((c) => ({
                    value: c.slug,
                    label: c.label,
                    description: c.description,
                  }))}
                />
              </div>
            </div>

            <SliderInput
              id="stablecoin"
              label="How open are you to paying via stablecoin (USDC/USDT)?"
              value={stablecoinPct}
              min={STABLECOIN_RANGE.min}
              max={STABLECOIN_RANGE.max}
              step={STABLECOIN_RANGE.step}
              formatValue={(v) => `${v}%`}
              onChange={setStablecoinPct}
              hint="Leave at 0% to see fiat-only savings — stablecoin payouts are always free on Request."
            />

            <Disclosure>
              {({ open }) => (
                <div className="border-t border-gray-100 pt-6">
                  <DisclosureButton className="flex w-full cursor-pointer items-center justify-between text-left text-sm font-medium text-gray-700 hover:text-gray-950">
                    <span>Adjust the assumptions</span>
                    <ChevronDownIcon
                      className={clsx('size-4 transition-transform duration-200', open && 'rotate-180')}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-4 grid grid-cols-2 gap-4">
                    <AssumptionField
                      id="fx-spread"
                      label="FX spread you pay today"
                      value={Math.round(fxSpreadPct * 10) / 10}
                      onChange={setFxSpreadPct}
                      suffix="%"
                    />
                    <AssumptionField
                      id="fee-per-transfer"
                      label="Fee per transfer"
                      value={feePerTransfer}
                      onChange={setFeePerTransfer}
                      suffix="$"
                      step={1}
                    />
                    <p className="col-span-2 text-xs text-gray-500">
                      These default to typical rates for your selected method and currency mix — override
                      them with your own numbers for a more precise estimate.
                    </p>
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-6 lg:sticky lg:top-8">
        <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
          <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
            <div className="rounded-3xl bg-gray-950 p-8">
              <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">
                Estimated annual cost, current setup
              </p>
              <AnimatedCurrency
                value={results.currentAnnualCost}
                className="mt-2 block text-5xl font-medium tracking-tighter text-white"
              />
              {results.isSaving && results.netAnnualSavings > 1 && (
                <p className="mt-3 text-sm/6 text-gray-300">
                  <span className="font-semibold text-white">
                    {formatCurrency(results.netAnnualSavings)}
                  </span>{' '}
                  of that is avoidable FX spread and fees.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
          <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
            <div className="space-y-6 rounded-3xl bg-white p-8 ring-1 ring-black/5">
              <ComparisonBar
                label="Your current setup"
                sublabel={`FX spread + ${PAYMENT_METHODS[method].label.toLowerCase()} fees`}
                amount={results.currentAnnualCost}
                maxAmount={results.maxAmount}
                barClassName="bg-gray-950"
              />
              <ComparisonBar
                label="Cost on Request"
                sublabel="Flat 0.5% fiat, free stablecoin payouts"
                amount={results.requestAnnualCost}
                maxAmount={results.maxAmount}
                barClassName="bg-blue-600"
              />

              <div className="border-t border-gray-100 pt-6">
                {results.isSaving ? (
                  <>
                    <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      Net annual savings: {formatCurrency(results.netAnnualSavings)}
                    </div>
                    {results.roiFloor > 0 ? (
                      <p className="mt-3 text-sm/6 text-gray-600">
                        Even after a platform subscription of $250–$1,250/month, you&apos;d still net{' '}
                        <span className="font-semibold text-gray-950">
                          {formatCurrency(Math.max(0, results.roiFloor))}–
                          {formatCurrency(results.roiCeiling)}
                        </span>{' '}
                        per year. See{' '}
                        <Link href="/pricing" className="font-medium text-blue-600 hover:text-blue-500">
                          pricing &rarr;
                        </Link>
                      </p>
                    ) : (
                      <p className="mt-3 text-sm/6 text-gray-600">
                        At this volume, transaction savings alone may not fully cover a subscription — talk
                        to us about which plan makes sense, starting at{' '}
                        <Link href="/pricing" className="font-medium text-blue-600 hover:text-blue-500">
                          $250/month
                        </Link>
                        .
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                      Estimated difference: {formatCurrency(Math.abs(results.netAnnualSavings))} more on
                      Request
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-600">
                      At very low volume with frequent small transfers, our flat per-transfer rail fee can
                      outweigh FX savings. Request tends to win most clearly at $50K+/month or when
                      switching off bank/SWIFT wires — try adjusting your volume or payment method above.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            <LinkIcon className="size-4" />
            {copyState === 'copied' ? 'Link copied!' : 'Share these results'}
          </button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary" href="/demo">
              Book a demo, bring your own numbers
            </Button>
            <Button href="https://app.request.finance/signup" target="_blank">
              Start for free
            </Button>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          Estimates are based on industry-average FX spreads and typical bank wire fees. Actual savings
          vary by currency corridor, provider, and payment volume.
        </p>
      </div>
    </div>
  )
}
