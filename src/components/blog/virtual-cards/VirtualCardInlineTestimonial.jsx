function TestimonialCard({ quote, name, role, badge, badgeClass, sourceUrl }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 py-5 sm:px-7">
        <div>
          <span className="font-serif text-3xl leading-none text-blue-200">{'\u201C'}</span>
          <p className="mt-1 text-sm italic leading-relaxed text-gray-700">{quote}</p>
        </div>
        <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-gray-950">{name}</p>
            <p className="truncate text-[11px] text-gray-400">{role}</p>
          </div>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition hover:opacity-75 ${badgeClass}`}
          >
            {badge}
          </a>
        </div>
      </div>
    </div>
  )
}

export function TestimonialLaura() {
  return (
    <TestimonialCard
      quote="Expense management has really improved as expenses are automatically sent to the manager for approval, removing our finance team as a middleman."
      name="Laura J."
      role="Mid-market company"
      badge="G2"
      badgeClass="bg-amber-50 text-amber-800"
      sourceUrl="https://payhawk.com/en-us/blog/game-changing-business-spend-management-as-per-g2-and-capterra-users"
    />
  )
}


export function TestimonialBrad() {
  return (
    <TestimonialCard
      quote={"It couldn\u2019t be easier for employees to upload their receipts. All receipts and payments are synced automatically with our finance system, making it completely seamless."}
      name="Brad"
      role="Head of Financial Reporting, UK"
      badge="Capterra"
      badgeClass="bg-blue-50 text-blue-700"
      sourceUrl="https://payhawk.com/en-us/blog/game-changing-business-spend-management-as-per-g2-and-capterra-users"
    />
  )
}

export function TestimonialG2User() {
  return (
    <TestimonialCard
      quote="This has made our finance process far more organised and secure. Each transaction is tied to a team member or department, making reconciliation faster and improving overall budget visibility."
      name="Verified user"
      role="Finance & operations"
      badge="G2"
      badgeClass="bg-amber-50 text-amber-800"
      sourceUrl="https://www.g2.com/products/extend/reviews"
    />
  )
}


export function TestimonialDavid() {
  return (
    <TestimonialCard
      quote="Taking corporate credit card transactions away from the traditional banks to a product that directly integrates with NetSuite was a game changer. Now we save time and make better decisions."
      name="David Watson"
      role="Group Financial Controller, State of Play Hospitality"
      badge="Case study"
      badgeClass="bg-blue-50 text-blue-700"
      sourceUrl="https://payhawk.com/en-eu/customers/analysing-venue-performance-with-spend-categorisation-at-state-of-play"
    />
  )
}
