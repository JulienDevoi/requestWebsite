import { clsx } from 'clsx'

const painPoints = [
  { time: 'The hidden cost', task: 'of outdated spend management' },
  { time: '3–7 days', task: 'waiting for reimbursement approvals' },
  { time: '2.9–4%', task: 'lost in fees using traditional corporate cards' },
  { time: '12–48 hours', task: 'chasing receipts and employee expense reports' },
  { time: '2 weeks', task: 'to open new bank accounts for new entities' },
  { time: '5% lost', task: 'on FX when teams spend abroad' },
  { time: '∞', task: 'worrying about budget overruns, rogue spending, and last-minute surprises...' },
]

export function BeforeAfter({ className }) {
  return (
    <div className={clsx('relative', className)}>
      <div className="relative overflow-hidden rounded-4xl bg-gray-900 p-12">
        <div className="space-y-4 text-left">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-center">
              {index === 0 ? (
                <span className="text-lg text-white">
                  <span className="font-medium text-orange-400">{point.time}</span> {point.task}
                </span>
              ) : (
                <>
                  <span className="mr-4 text-lg text-white">+</span>
                  <span className="text-lg text-white">
                    <span className="font-medium text-orange-400">{point.time}</span> {point.task}
                  </span>
                </>
              )}
            </div>
          ))}
          <div className="flex items-center pt-4">
            <span className="mr-4 text-lg text-white">=</span>
            <span className="text-lg text-white">
              <span className="font-medium text-orange-400">Endless</span> payment headaches
            </span>
            <span className="ml-2 text-white">☁️</span>
          </div>
        </div>
      </div>
    </div>
  )
}
