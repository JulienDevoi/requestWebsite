// Assumption tables for the savings calculator.
// FX spread ranges are anchored to the "2–8%" claim already used across the site
// (pricing FAQ, homepage hero, demo page): banks/SWIFT sit at the high end,
// neobanks/multi-currency platforms sit at the low end, and currency corridor
// shifts the number within that band.

export const PAYMENT_METHODS = {
  bank: {
    slug: 'bank',
    label: 'Bank / SWIFT wire',
    description: 'Traditional bank wires with correspondent banking fees.',
    feePerTransfer: 35,
    fxSpreadByCorridor: {
      major: 0.03,
      mixed: 0.05,
      emerging: 0.07,
    },
  },
  neobank: {
    slug: 'neobank',
    label: 'Neobank / multi-currency account',
    description: 'Platforms like Wise, Airwallex, or Payoneer.',
    feePerTransfer: 5,
    fxSpreadByCorridor: {
      major: 0.01,
      mixed: 0.02,
      emerging: 0.035,
    },
  },
}

export const CURRENCY_CORRIDORS = {
  major: {
    slug: 'major',
    label: 'Mostly major currencies',
    description: 'USD, EUR, GBP, and other G10 currencies.',
  },
  mixed: {
    slug: 'mixed',
    label: 'Mix of major and emerging markets',
    description: 'A blend of G10 and emerging-market corridors.',
  },
  emerging: {
    slug: 'emerging',
    label: 'Mostly emerging markets',
    description: 'LATAM, Africa, APAC, MENA, and similar corridors.',
  },
}

export const REQUEST_FEES = {
  fiatFeePct: 0.005, // flat 0.5% fiat payout fee, matches TransactionPricing on /pricing
  stablecoinFeePct: 0, // stablecoin payouts are free, matches TransactionPricing on /pricing
  bankingRailFeePerTransfer: 10, // matches "Local (ACH, Wire) $10" on /pricing
}

// Annual-billed monthly prices from the /pricing tiers, used to show a
// conservative "even at our highest tier" net-savings range without asking
// the visitor which plan they'd land on.
export const PRICING_TIERS_FOR_ROI = {
  low: { name: 'Basic', priceMonthly: 250 },
  high: { name: 'Premium', priceMonthly: 1250 },
}

export const CALCULATOR_DEFAULTS = {
  monthlyVolume: 250000,
  paymentsPerMonth: 15,
  method: 'bank',
  corridor: 'mixed',
  stablecoinPct: 0.3,
}

export const VOLUME_RANGE = { min: 10000, max: 2000000, step: 5000 }
export const PAYMENTS_RANGE = { min: 1, max: 200, step: 1 }
export const STABLECOIN_RANGE = { min: 0, max: 100, step: 5 }

export function getDefaultFxSpreadPct(method, corridor) {
  return PAYMENT_METHODS[method]?.fxSpreadByCorridor[corridor] ?? 0.05
}

export function getDefaultFeePerTransfer(method) {
  return PAYMENT_METHODS[method]?.feePerTransfer ?? 35
}
