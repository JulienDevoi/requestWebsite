export function VirtualCardWorkflow() {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Virtual card payment workflow — from request to reconciliation
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Decision point at the approval stage
        </p>
      </div>

      <div className="overflow-x-auto px-5 pb-2 sm:px-7">
        <svg
          width="100%"
          viewBox="0 0 680 560"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-4 min-w-[480px]"
        >
          <defs>
            <marker
              id="wf-arr-gray"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
            <marker
              id="wf-arr-red"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {/* Step 1: Request */}
          <rect x="210" y="30" width="260" height="58" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.5" />
          <text x="340" y="52" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#1f2937">Card creation request</text>
          <text x="340" y="72" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#6b7280">Submitted via platform</text>

          {/* Arrow down to diamond */}
          <line x1="340" y1="88" x2="340" y2="116" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#wf-arr-gray)" />

          {/* Decision diamond */}
          <polygon points="340,118 440,162 340,206 240,162" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
          <text x="340" y="162" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#78350f">Approval?</text>

          {/* Arrow right to rejected */}
          <line x1="440" y1="162" x2="466" y2="162" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#wf-arr-red)" />
          <text x="453" y="153" textAnchor="middle" fontSize="11" fill="#b91c1c">Rejected</text>

          {/* Rejected box */}
          <rect x="468" y="134" width="186" height="56" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
          <text x="561" y="157" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#7f1d1d">Request declined</text>
          <text x="561" y="176" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#b91c1c">Requester notified</text>

          {/* Rejected loop back */}
          <path d="M655 162 L655 40 L472 40" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#wf-arr-red)" />
          <text x="662" y="104" textAnchor="start" fontSize="11" fill="#b91c1c">Resubmit</text>

          {/* Arrow down from diamond: Approved */}
          <line x1="340" y1="206" x2="340" y2="232" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#wf-arr-gray)" />
          <text x="350" y="221" fontSize="11" fill="#166534">Approved</text>

          {/* Step 2: Card issued */}
          <rect x="210" y="234" width="260" height="58" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="0.5" />
          <text x="340" y="256" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#1e40af">Card issued instantly</text>
          <text x="340" y="276" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#3b82f6">Limits &amp; merchant controls set</text>

          {/* Arrow */}
          <line x1="340" y1="292" x2="340" y2="316" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#wf-arr-gray)" />

          {/* Step 3: Payment */}
          <rect x="210" y="318" width="260" height="58" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="0.5" />
          <text x="340" y="340" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#1e40af">Payment made</text>
          <text x="340" y="360" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#3b82f6">Vendor charges the virtual card</text>

          {/* Arrow */}
          <line x1="340" y1="376" x2="340" y2="400" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#wf-arr-gray)" />

          {/* Step 4: ERP sync */}
          <rect x="210" y="402" width="260" height="58" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="0.5" />
          <text x="340" y="424" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#1e40af">Transaction sync to ERP</text>
          <text x="340" y="444" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#3b82f6">Auto-mapped to GL code &amp; cost centre</text>

          {/* Arrow */}
          <line x1="340" y1="460" x2="340" y2="484" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#wf-arr-gray)" />

          {/* Step 5: Complete */}
          <rect x="210" y="486" width="260" height="58" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="0.5" />
          <text x="340" y="508" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#065f46">Reconciliation complete</text>
          <text x="340" y="528" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#059669">Month-end close ready</text>
        </svg>
      </div>

      <div className="flex flex-wrap gap-4 border-t border-gray-100 px-5 py-3 sm:px-7">
        {[
          { label: 'Request', bg: 'bg-gray-100', border: 'border-gray-300' },
          { label: 'Decision', bg: 'bg-amber-50', border: 'border-amber-500' },
          { label: 'Rejected', bg: 'bg-red-50', border: 'border-red-400' },
          { label: 'Process step', bg: 'bg-blue-50', border: 'border-blue-400' },
          { label: 'Complete', bg: 'bg-emerald-50', border: 'border-emerald-400' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs text-gray-500">
            <span className={`h-2.5 w-2.5 rounded-sm border ${item.bg} ${item.border}`} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
