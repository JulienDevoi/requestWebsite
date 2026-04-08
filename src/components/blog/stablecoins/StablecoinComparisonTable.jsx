function Badge({ type }) {
  if (type === 'great') return <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700"><span className="size-1.5 rounded-full bg-green-500 inline-block" />Great fit</span>
  if (type === 'ok') return <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700"><span className="size-1.5 rounded-full bg-amber-400 inline-block" />Acceptable</span>
  if (type === 'poor') return <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600"><span className="size-1.5 rounded-full bg-red-400 inline-block" />Poor fit</span>
  return null
}

export function StablecoinComparisonTable() {
  const rows = [
    {
      scenario: 'Cross-border payments to emerging markets',
      stablecoin: { badge: 'great', note: 'Fast, cheap, no correspondent banks' },
      swift: { badge: 'poor', note: '2-5 days, 3-7% in fees' },
      cards: { badge: 'poor', note: 'Often unavailable or blocked in these markets' },
    },
    {
      scenario: 'Domestic B2B payments (US, EU, UK)',
      stablecoin: { badge: 'poor', note: 'No meaningful advantage over ACH' },
      swift: { badge: 'ok', note: 'Reliable, well-understood' },
      cards: { badge: 'great', note: 'ACH / local rails: fast and near-free' },
    },
    {
      scenario: 'Recurring international payouts (affiliates, freelancers)',
      stablecoin: { badge: 'great', note: 'Cents per transaction, any frequency' },
      swift: { badge: 'poor', note: '$15-50 per wire makes weekly batches uneconomical' },
      cards: { badge: 'ok', note: 'Works in some corridors, FX markup applies' },
    },
    {
      scenario: 'Large one-time transfers ($100K+) to established counterparties',
      stablecoin: { badge: 'ok', note: 'Works, but requires setup and counterparty readiness' },
      swift: { badge: 'great', note: 'Familiar, auditable, well-supported by banks' },
      cards: { badge: 'poor', note: 'Transaction limits make this impractical' },
    },
    {
      scenario: 'Supplier payments in high-inflation economies',
      stablecoin: { badge: 'great', note: 'Preserves value for recipient, settles in minutes' },
      swift: { badge: 'poor', note: 'Value loss during 3-5 day settlement in weak currencies' },
      cards: { badge: 'poor', note: 'Rarely an option for B2B supplier payments' },
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Stablecoins vs. traditional rails by payment scenario
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Compared against wire/SWIFT and <a href="https://www.requestfinance.com/blog/virtual-credit-card-for-business" className="underline hover:text-gray-600">card payments</a> across common B2B use cases
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Scenario</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">Stablecoins</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Wire / SWIFT</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Cards</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.scenario} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="py-3 pr-4 text-sm font-medium text-gray-950 align-top" style={{ minWidth: 160 }}>{row.scenario}</td>
                <td className="py-3 pr-4 align-top">
                  <Badge type={row.stablecoin.badge} />
                  <p className="mt-1 text-xs text-gray-500 leading-snug">{row.stablecoin.note}</p>
                </td>
                <td className="py-3 pr-4 align-top">
                  <Badge type={row.swift.badge} />
                  <p className="mt-1 text-xs text-gray-500 leading-snug">{row.swift.note}</p>
                </td>
                <td className="py-3 align-top">
                  <Badge type={row.cards.badge} />
                  <p className="mt-1 text-xs text-gray-500 leading-snug">{row.cards.note}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
