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
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="px-4 py-3 text-left font-medium" />
              <th className="px-4 py-3 text-left font-medium">Virtual card</th>
              <th className="px-4 py-3 text-left font-medium">Physical card</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap">
                  {row.feature}
                </td>
                <td className="px-4 py-3 text-gray-700">{row.virtual}</td>
                <td className="px-4 py-3 text-gray-700">{row.physical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
