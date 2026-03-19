const profiles = [
  {
    label: 'Early-stage startup',
    size: 'Under 20 people, simple spend',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    need: 'Track a handful of subscriptions, give founders and key hires a simple way to pay for tools.',
    matters: 'Ease of issuance, basic spend limits, simple accounting sync.',
    approach:
      'A fintech-native spend management tool will likely cover everything. Focus on accounting integration quality and monthly cost.',
  },
  {
    label: 'Growing company',
    size: '20–200 people, multiple budget owners',
    color: 'emerald',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    need: 'Give department heads autonomy without losing visibility. Manage a growing subscription stack.',
    matters:
      'Approval workflows, per-card limits, department-level reporting, solid accounting integration.',
    approach:
      'Look for clear request-and-approve flows, the ability to attach cards to cost centres, and a strong accounting software integration.',
  },
  {
    label: 'Mid-market or enterprise',
    size: '200+ people, multiple entities',
    color: 'violet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    need: 'Control across entities, clean data for finance systems, international payment capabilities.',
    matters:
      'Multi-entity support, ERP integration (NetSuite, SAP), multi-currency support, robust user permissions.',
    approach:
      'Evaluate seriously whether your ERP has a native virtual card integration. Fragmented setups create the reconciliation problem you were trying to solve.',
  },
  {
    label: 'Crypto-native or distributed team',
    size: 'International operations, multi-currency spend',
    color: 'amber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
      </svg>
    ),
    need: 'Pay vendors across multiple countries, manage multi-currency spend, minimise FX friction.',
    matters: 'Multi-currency issuance, international acceptance, low FX fees.',
    approach:
      'Look for platforms built for international operations from the ground up, not adapted from a domestic product.',
  },
]

const colorMap = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 ring-blue-200',
    icon: 'bg-blue-100 text-blue-600',
    accent: 'border-t-blue-500',
    label: 'text-blue-600',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    icon: 'bg-emerald-100 text-emerald-600',
    accent: 'border-t-emerald-500',
    label: 'text-emerald-600',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-700 ring-violet-200',
    icon: 'bg-violet-100 text-violet-600',
    accent: 'border-t-violet-500',
    label: 'text-violet-600',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 ring-amber-200',
    icon: 'bg-amber-100 text-amber-600',
    accent: 'border-t-amber-500',
    label: 'text-amber-600',
  },
}

export function VirtualCardFramework() {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {profiles.map((profile) => {
          const c = colorMap[profile.color]
          return (
            <div
              key={profile.label}
              className={`relative overflow-hidden rounded-xl border border-gray-200 border-t-[3px] ${c.accent} bg-white`}
            >
              <div className="px-5 pb-5 pt-4">
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${c.icon}`}>
                    {profile.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-950">{profile.label}</p>
                    <p className="text-xs text-gray-400">{profile.size}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${c.label}`}>
                      Primary need
                    </p>
                    <p className="mt-0.5 text-sm text-gray-700">{profile.need}</p>
                  </div>
                  <div>
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${c.label}`}>
                      What matters most
                    </p>
                    <p className="mt-0.5 text-sm text-gray-700">{profile.matters}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 px-3 py-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      Practical approach
                    </p>
                    <p className="mt-0.5 text-sm text-gray-600">{profile.approach}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
