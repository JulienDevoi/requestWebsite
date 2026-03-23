export function StablecoinDecisionFramework() {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Stablecoin payment decision framework
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Work through each question in order. Stop as soon as one answer applies.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <div className="space-y-0">

          {/* Step 1 */}
          <Step
            number={1}
            question="Do you regularly pay vendors, contractors, or affiliates outside your home country?"
            exits={[
              {
                answer: 'No',
                answerColor: 'gray',
                label: 'Stablecoins are unlikely to help',
                description: 'Domestic payment rails (ACH, local wire, cards) are fast and cheap. There is no meaningful cost or speed advantage to adding stablecoins.',
                outcome: 'skip',
              },
            ]}
            continueAnswer="Yes"
          />

          {/* Step 2 */}
          <Step
            number={2}
            question="Are those cross-border payments going primarily to well-banked countries (US, UK, EU, Canada, Australia)?"
            exits={[
              {
                answer: 'No — emerging markets, underbanked regions, or high-inflation economies',
                answerColor: 'green',
                label: 'Strong fit',
                description: 'Stablecoins shine here. They cut intermediary costs by 50–80%, settle in minutes, and eliminate the value loss from multi-day SWIFT delays in weak currency markets.',
                outcome: 'good',
                tags: ['50–80% lower cost', 'Minutes not days', 'No correspondent banks'],
              },
            ]}
            continueAnswer="Yes"
          />

          {/* Step 3 */}
          <Step
            number={3}
            question="Is the average payment above $50K, and is a 2–3 day settlement window acceptable?"
            exits={[
              {
                answer: 'Yes',
                answerColor: 'gray',
                label: 'Traditional wire still makes sense',
                description: 'For large, infrequent transfers to well-banked counterparties, SWIFT remains reliable. The overhead of stablecoin adoption is disproportionate to the savings.',
                outcome: 'skip',
              },
              {
                answer: 'No — smaller or more frequent payments',
                answerColor: 'green',
                label: 'Stablecoins can help',
                description: 'Faster settlement and lower per-transaction costs matter more on high-frequency or smaller-value international payments. This is a good candidate for a stablecoin pilot.',
                outcome: 'good',
              },
            ]}
            isLast
          />

        </div>
      </div>
    </div>
  )
}

function Step({ number, question, exits, continueAnswer, isLast }) {
  return (
    <div className="relative flex gap-4">
      {/* Left: number + connecting line */}
      <div className="flex flex-col items-center">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
          {number}
        </span>
        {!isLast && (
          <div className="mt-1 w-px flex-1 border-l border-dashed border-gray-300" />
        )}
      </div>

      {/* Right: content */}
      <div className={`flex-1 ${!isLast ? 'pb-6' : ''}`}>
        {/* Question */}
        <p className="pt-0.5 text-sm font-medium text-gray-950">{question}</p>

        {/* Exit branches */}
        <div className="mt-3 space-y-2">
          {exits.map((exit) => (
            <ExitBranch key={exit.answer} {...exit} />
          ))}
        </div>

        {/* Continue indicator */}
        {continueAnswer && (
          <div className="mt-3 flex items-center gap-2">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-blue-300 bg-blue-50 text-xs font-bold text-blue-600">
              ↓
            </span>
            <span className="text-xs font-semibold text-blue-600">{continueAnswer} — continue to next question</span>
          </div>
        )}
      </div>
    </div>
  )
}

function ExitBranch({ answer, answerColor, label, description, outcome, tags }) {
  const colors = {
    gray: {
      badge: 'bg-gray-100 text-gray-600',
      card: 'border-gray-200 bg-gray-50',
      labelColor: 'text-gray-700',
      icon: '✕',
      iconStyle: 'border-gray-300 bg-white text-gray-500',
    },
    green: {
      badge: 'bg-green-50 text-green-700 border border-green-200',
      card: 'border-green-200 bg-green-50',
      labelColor: 'text-green-700',
      icon: '✓',
      iconStyle: 'border-green-400 bg-green-50 text-green-600',
    },
    amber: {
      badge: 'bg-amber-50 text-amber-700 border border-amber-200',
      card: 'border-amber-200 bg-amber-50',
      labelColor: 'text-amber-700',
      icon: '→',
      iconStyle: 'border-amber-400 bg-amber-50 text-amber-600',
    },
  }

  const c = colors[answerColor] || colors.gray

  return (
    <div className={`rounded-lg border px-4 py-3 ${c.card}`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`flex size-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${c.iconStyle}`}>
          {c.icon}
        </span>
        <span className="text-xs font-semibold text-gray-600">{answer}</span>
        <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-semibold ${c.badge}`}>
          {label}
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-gray-600">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
