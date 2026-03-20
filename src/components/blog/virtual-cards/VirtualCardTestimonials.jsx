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
    {
      tag: 'Compliance',
      question: '\u201CDoes this create a clean audit trail?\u201D',
      answer:
        'Finance teams need every card transaction to be traceable \u2014 who requested it, who approved it, what it was for, and when it was used. Platforms that don\u2019t log this clearly create problems at audit time.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          What finance teams ask before buying a virtual card platform
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Common evaluation criteria from finance managers, controllers, and CFOs
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 px-5 pb-5 pt-5 sm:grid-cols-2 sm:px-7 sm:pb-7 lg:grid-cols-3">
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
  )
}
