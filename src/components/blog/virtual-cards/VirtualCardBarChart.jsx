export function VirtualCardBarChart() {
  const data = [
    { year: '2023', total: 15.7, b2b: 11.0 },
    { year: '2024', total: 19.0, b2b: 13.4 },
    { year: '2025*', total: 23.0, b2b: 16.2 },
    { year: '2026*', total: 27.9, b2b: 19.6 },
    { year: '2027*', total: 33.8, b2b: 23.8 },
    { year: '2028*', total: 40.9, b2b: 28.8 },
    { year: '2029*', total: 49.6, b2b: 34.9 },
    { year: '2030*', total: 60.1, b2b: 42.3 },
  ]
  const maxValue = 65

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Global virtual card market — revenue growth 2023–2030
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Source: Grand View Research, 2024 · CAGR 2025–2030: +21.2%
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 px-5 sm:px-7">
        {[
          { label: '2024 market value', value: '~$19B' },
          { label: '2030 projection', value: '~$60B' },
          { label: 'CAGR 2025–2030', value: '+21.2%' },
        ].map((stat) => (
          <div key={stat.label} className="min-w-[110px] flex-1 rounded-lg bg-blue-50 px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              {stat.label}
            </p>
            <p className="mt-1 text-xl font-bold text-blue-700">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-5 px-5 sm:px-7">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-400" />
          Total market
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
          B2B segment (~70%)
        </div>
      </div>

      <div className="mt-4 flex items-end gap-1 px-5 pb-2 sm:gap-2 sm:px-7" style={{ height: 240 }}>
        {data.map((d) => (
          <div key={d.year} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className="relative flex w-full items-end justify-center gap-px"
              style={{ height: 200 }}
            >
              <div
                className="w-[45%] rounded-t-sm bg-blue-400"
                style={{ height: `${(d.total / maxValue) * 100}%` }}
                title={`Total: $${d.total}B`}
              />
              <div
                className="w-[45%] rounded-t-sm bg-emerald-500"
                style={{ height: `${(d.b2b / maxValue) * 100}%` }}
                title={`B2B: $${d.b2b}B`}
              />
            </div>
            <span className="text-[10px] leading-none text-gray-400 sm:text-[11px]">{d.year}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 px-5 py-3 sm:px-7">
        <p className="text-[11px] text-gray-400">
          * 2026–2030 values projected based on 21.2% CAGR — Grand View Research
        </p>
      </div>
    </div>
  )
}
