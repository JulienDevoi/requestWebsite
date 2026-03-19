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
    <div className="my-10 space-y-6">
      <div className="overflow-hidden rounded-xl border border-emerald-200">
        <div className="bg-emerald-700 px-5 py-3">
          <p className="text-sm font-semibold text-white">Strong fit</p>
        </div>
        <div className="divide-y divide-gray-100">
          {strongFit.map((item, i) => (
            <div
              key={i}
              className={`px-5 py-3 text-sm text-gray-700 ${i % 2 === 0 ? 'bg-emerald-50/50' : 'bg-white'}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-red-200">
        <div className="bg-red-700 px-5 py-3">
          <p className="text-sm font-semibold text-white">Weaker fit</p>
        </div>
        <div className="divide-y divide-gray-100">
          {weakerFit.map((item, i) => (
            <div
              key={i}
              className={`px-5 py-3 text-sm text-gray-700 ${i % 2 === 0 ? 'bg-red-50/50' : 'bg-white'}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
