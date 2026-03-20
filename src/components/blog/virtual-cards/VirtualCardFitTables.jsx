export function VirtualCardFitTables() {
  const strongFit = [
    'Online purchases, SaaS subscriptions, and digital vendor payments',
    'Teams that need to issue spend access quickly without physical card logistics',
    'Finance teams that want to enforce approval workflows and hard spending limits',
    'Businesses with subscription sprawl problems',
    'AP teams processing high volumes of vendor payments',
    'Companies with distributed or remote teams',
    'Anyone trying to reduce manual reconciliation effort',
  ]

  const weakerFit = [
    'Field sales teams or operations staff who regularly make in-person purchases without reliable mobile wallet support',
    'Businesses with significant cash transaction requirements',
    'Vendors or markets where online card payment infrastructure is unreliable',
    'Companies where the ERP or accounting setup is too fragmented to benefit from automated data sync',
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Virtual cards — where they fit and where they don't
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Based on common use cases and operational requirements
        </p>
      </div>
      <div className="space-y-4 px-5 pb-5 pt-5 sm:px-7 sm:pb-7">
        <div className="overflow-hidden rounded-lg border border-emerald-200">
          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Strong fit</p>
          </div>
          <div className="divide-y divide-gray-100">
            {strongFit.map((item, i) => (
              <div key={i} className="px-4 py-2.5 text-sm text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-red-200">
          <div className="flex items-center gap-2 bg-red-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <p className="text-xs font-semibold uppercase tracking-wider text-red-700">Weaker fit</p>
          </div>
          <div className="divide-y divide-gray-100">
            {weakerFit.map((item, i) => (
              <div key={i} className="px-4 py-2.5 text-sm text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
