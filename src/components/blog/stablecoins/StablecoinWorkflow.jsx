export function StablecoinWorkflow() {
  const steps = [
    {
      label: 'Fund payment',
      sublabel: 'USD / fiat',
      detail: 'Your company sends funds via bank transfer or existing balance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H18M3 10.5h1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H3" />
        </svg>
      ),
      color: 'text-gray-600 bg-gray-100',
      time: null,
      cost: null,
    },
    {
      label: 'Convert to stablecoin',
      sublabel: 'USDC / USDT',
      detail: 'Platform converts to a fiat-backed stablecoin at near-zero spread',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      color: 'text-blue-600 bg-blue-50',
      time: '~30 sec',
      cost: '<0.1%',
    },
    {
      label: 'Blockchain transfer',
      sublabel: 'On-chain settlement',
      detail: 'Stablecoin transferred directly to recipient wallet via blockchain',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      ),
      color: 'text-indigo-600 bg-indigo-50',
      time: '1–5 min',
      cost: '$0.01–$2',
    },
    {
      label: 'Recipient receives',
      sublabel: 'Local currency',
      detail: 'Platform converts to local fiat, or recipient holds stablecoin directly',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      color: 'text-green-600 bg-green-50',
      time: 'Total: ~5 min',
      cost: '50–80% less vs. SWIFT',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Stablecoin payment flow: sender to recipient
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Approximate time and cost at each step vs. traditional SWIFT wire
        </p>
      </div>

      <div className="relative p-5 pl-12 sm:p-7 sm:pl-14">
        {/* Vertical connecting line */}
        <div className="absolute bottom-10 left-[2.15rem] top-10 w-px border-l border-dashed border-gray-200 sm:left-[2.65rem]" />

        {steps.map((step, i) => (
          <div key={step.label} className={`relative flex gap-4 ${i < steps.length - 1 ? 'pb-6' : ''}`}>
            {/* Icon */}
            <span className={`absolute -left-7 top-0 flex size-8 shrink-0 items-center justify-center rounded-full sm:-left-7 ${step.color}`}>
              {step.icon}
            </span>

            {/* Content */}
            <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-gray-950">{step.label}</p>
                  <p className="text-xs text-gray-400">{step.sublabel}</p>
                </div>
                {(step.time || step.cost) && (
                  <div className="flex shrink-0 flex-wrap gap-1.5">
                    {step.time && (
                      <span className="inline-block rounded-full bg-white px-2 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-gray-200">
                        {step.time}
                      </span>
                    )}
                    {step.cost && (
                      <span className="inline-block rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-200">
                        {step.cost}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
