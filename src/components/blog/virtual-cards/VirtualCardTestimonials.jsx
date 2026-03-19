export function VirtualCardTestimonials() {
  const concerns = [
    {
      tag: 'Integration',
      question: '\u201CWill this actually connect to our accounting system?\u201D',
      answer:
        'Integration quality is the most common concern. The fear: a tool that requires a manual CSV export to sync with the GL \u2014 which defeats the purpose.',
    },
    {
      tag: 'Exceptions',
      question: '\u201CHow do we handle exceptions?\u201D',
      answer:
        'What happens when a legitimate purchase is declined, or someone needs to exceed a limit for an approved reason? Rigid controls with no escalation path create friction.',
    },
    {
      tag: 'Permissions',
      question: '\u201CWho can see what?\u201D',
      answer:
        'Spend data confidentiality matters. Not everyone should see executive expenses or cross-department budgets. Granular user roles are evaluated carefully.',
    },
    {
      tag: 'Offboarding',
      question: '\u201CWhat happens when someone leaves?\u201D',
      answer:
        'When an employee exits, their cards should be frozen immediately and automatically \u2014 not tracked down manually after the fact.',
    },
    {
      tag: 'Cost',
      question: '\u201CIs the cost justified at our volume?\u201D',
      answer:
        'A fair question for small teams. For under 10 people with minimal vendor complexity, the monthly cost of a dedicated platform is sometimes hard to justify.',
    },
  ]

  const testimonials = [
    {
      quote:
        'Expense management has really improved as expenses are automatically sent to the manager for approval, removing our finance team as a middleman.',
      name: 'Laura J.',
      role: 'Mid-market company',
      badge: 'G2',
      badgeClass: 'bg-amber-50 text-amber-800',
    },
    {
      quote:
        "We no longer have to comb through expense records for the whole month. Having everything in one spot has been really convenient. It\u2019s been a night-and-day difference.",
      name: 'Fahem',
      role: 'Accounting Associate, Snapdocs',
      badge: 'Case study',
      badgeClass: 'bg-gray-100 text-gray-600',
    },
    {
      quote:
        "It couldn\u2019t be easier for employees to upload their receipts. All receipts and payments are synced automatically with our finance system, making it completely seamless.",
      name: 'Brad',
      role: 'Head of Financial Reporting, UK',
      badge: 'Capterra',
      badgeClass: 'bg-blue-50 text-blue-700',
    },
    {
      quote:
        'This has made our finance process far more organised and secure. Each transaction is tied to a team member or department, making reconciliation faster and improving overall budget visibility.',
      name: 'Verified user',
      role: 'Finance & operations',
      badge: 'G2',
      badgeClass: 'bg-amber-50 text-amber-800',
    },
    {
      quote: 'We save 20 hours per month and buy back days at close.',
      name: 'Finance team',
      role: 'Virtual card consolidation',
      badge: 'Case study',
      badgeClass: 'bg-gray-100 text-gray-600',
    },
    {
      quote:
        'Taking corporate credit card transactions away from the traditional banks to a product that directly integrates with NetSuite was a game changer. Now we save time and make better decisions.',
      name: 'David Watson',
      role: 'Group Financial Controller, State of Play Hospitality',
      badge: 'Capterra',
      badgeClass: 'bg-blue-50 text-blue-700',
    },
  ]

  return (
    <div className="my-10 space-y-8">
      <div className="rounded-xl border border-gray-200 p-5 sm:p-7">
        <p className="text-sm font-semibold text-gray-950">
          What finance teams ask before buying a virtual card platform
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Common evaluation criteria from finance managers, controllers, and CFOs
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((c) => (
            <div key={c.tag} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <span className="inline-block rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                {c.tag}
              </span>
              <p className="mt-2 text-sm font-semibold leading-snug text-blue-700">{c.question}</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{c.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-5 sm:p-7">
        <p className="text-sm font-semibold text-gray-950">
          What finance professionals say publicly
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Verified reviews from G2, Capterra, and public customer testimonials
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-4"
            >
              <div>
                <span className="font-serif text-3xl leading-none text-blue-200">{'\u201C'}</span>
                <p className="mt-1 text-sm italic leading-relaxed text-gray-700">{t.quote}</p>
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-gray-950">{t.name}</p>
                  <p className="truncate text-[11px] text-gray-400">{t.role}</p>
                </div>
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${t.badgeClass}`}
                >
                  {t.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
