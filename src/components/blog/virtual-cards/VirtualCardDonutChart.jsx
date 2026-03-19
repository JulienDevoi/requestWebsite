export function VirtualCardDonutChart() {
  const r = 80
  const cx = 100
  const cy = 100
  const strokeWidth = 36
  const circumference = 2 * Math.PI * r

  const segments = [
    {
      label: 'B2B businesses',
      pct: 70.3,
      color: '#3b82f6',
      desc: 'Vendor payments, AP automation, SaaS subscriptions',
    },
    {
      label: 'B2C online payments',
      pct: 20,
      color: '#10b981',
      desc: 'E-commerce, consumer subscriptions, one-time purchases',
    },
    {
      label: 'B2C point of sale',
      pct: 9.7,
      color: '#f59e0b',
      desc: 'Digital wallets, contactless payments',
    },
  ]

  let cumulativeOffset = 0

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Virtual card market breakdown by segment — 2024
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Source: Grand View Research · CoinLaw, 2024
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-8 px-5 pb-2 sm:flex-row sm:items-start sm:gap-10 sm:px-7">
        <div className="relative h-[200px] w-[200px] flex-shrink-0">
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            {segments.map((seg) => {
              const length = (seg.pct / 100) * circumference
              const offset = -cumulativeOffset
              cumulativeOffset += length
              return (
                <circle
                  key={seg.label}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${length} ${circumference - length}`}
                  strokeDashoffset={offset}
                />
              )
            })}
          </svg>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-start gap-3">
              <span
                className="mt-1 h-3 w-3 flex-shrink-0 rounded-sm"
                style={{ background: seg.color }}
              />
              <div>
                <p className="text-sm font-semibold text-gray-950">
                  {seg.label} — {seg.pct}%
                </p>
                <p className="text-xs text-gray-500">{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mb-5 mt-4 rounded-lg border-l-[3px] border-blue-600 bg-blue-50 px-4 py-3 sm:mx-7">
        <p className="text-xs leading-relaxed text-blue-800">
          <span className="font-semibold">Key takeaway:</span> Virtual cards are overwhelmingly
          driven by businesses. B2B represents over 70% of market value — this is not a consumer
          technology, it is an operational finance tool.
        </p>
      </div>
    </div>
  )
}
