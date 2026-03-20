export function VirtualCardComparisonTable() {
  const rows = [
    { feature: 'Issuance speed', virtual: 'Seconds', physical: 'Days to weeks' },
    { feature: 'Security', virtual: 'High: single-use option, no physical exposure', physical: 'Medium: can be lost, stolen, or skimmed' },
    { feature: 'Spend control', virtual: 'Precise: per-card limits and merchant locks', physical: 'Broad: general credit limit only' },
    { feature: 'In-person use', virtual: 'Limited: mobile wallet required', physical: 'Full: tap, swipe, or insert' },
    { feature: 'Subscription mgmt', virtual: 'Excellent: one card per subscription', physical: 'Poor: shared numbers, hard to track' },
    { feature: 'Fraud recovery', virtual: 'Fast: instant freeze, no physical replacement', physical: 'Slower: card must be reissued' },
    { feature: 'Reconciliation', virtual: 'Streamlined: pre-categorised by card', physical: 'Manual effort required' },
    { feature: 'Cash access', virtual: 'None', physical: 'ATM capable' },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Virtual card vs physical card — feature comparison
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Side-by-side comparison across key operational criteria
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400" />
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">Virtual card</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Physical card</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="whitespace-nowrap py-3 pr-4 text-sm font-medium text-gray-950">
                  {row.feature}
                </td>
                <td className="py-3 pr-4 text-sm text-gray-700">{row.virtual}</td>
                <td className="py-3 text-sm text-gray-500">{row.physical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
