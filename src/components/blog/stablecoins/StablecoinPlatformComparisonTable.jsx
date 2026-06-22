function CellValue({ value }) {
  if (value === 'yes') {
    return <span className="text-green-600 font-medium" aria-label="Yes">✓</span>
  }
  if (value === 'no') {
    return <span className="text-red-500 font-medium" aria-label="No">✗</span>
  }
  return <span className="text-xs text-gray-600 leading-snug">{value}</span>
}

const platforms = [
  'Request Finance',
  'Rise',
  'Bitwave',
  'Slash',
  'Dakota',
  'Reap',
  'Ramp',
  'Brex',
]

const rows = [
  {
    feature: 'Stablecoin AP / invoicing',
    values: ['yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
  },
  {
    feature: 'Crypto payroll',
    values: ['yes', 'yes', 'Limited', 'no', 'no', 'no', 'no', 'no'],
  },
  {
    feature: 'Multi-entity support',
    values: ['✓ Native', 'no', 'Limited', 'no', 'no', 'no', 'yes', 'yes'],
  },
  {
    feature: 'ERP integrations',
    values: ['yes', 'Limited', 'yes', 'no', 'no', 'no', 'yes', 'yes'],
  },
  {
    feature: 'Embedded KYB',
    values: ['yes', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'yes'],
  },
  {
    feature: 'Expense cards',
    values: ['yes', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'yes'],
  },
  {
    feature: 'Fiat-first operations',
    values: ['Limited', 'no', 'no', 'yes', 'yes', 'Limited', 'yes', 'yes'],
  },
  {
    feature: 'Stablecoin accounting',
    values: ['yes', 'Limited', '✓ Full', 'no', 'no', 'no', 'no', 'no'],
  },
  {
    feature: 'Primary use case',
    values: [
      'Full finance stack',
      'Payroll only',
      'Crypto accounting',
      'Business account',
      'Crypto banking',
      'Expense cards',
      'Fiat spend mgmt',
      'Global spend mgmt',
    ],
  },
]

export function StablecoinPlatformComparisonTable() {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Platform comparison
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Nine platforms across stablecoin-native and fiat-first categories
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                Capability
              </th>
              {platforms.map((platform) => (
                <th
                  key={platform}
                  className="pb-2 pr-3 text-left text-xs font-semibold text-gray-950 last:pr-0"
                  style={{ minWidth: 72 }}
                >
                  {platform}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}
              >
                <td className="py-3 pr-4 text-sm font-medium text-gray-950 align-top whitespace-nowrap">
                  {row.feature}
                </td>
                {row.values.map((value, j) => (
                  <td key={platforms[j]} className="py-3 pr-3 align-top last:pr-0">
                    <CellValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
