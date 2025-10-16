import { clsx } from 'clsx'

const painPoints = [
  { time: '3-7 days', task: 'waiting for international wire transfers' },
  { time: '2.9-4%', task: 'paying excessive payment processing fees' },
  { time: '48 hrs', task: 'managing chargeback disputes' },
  { time: '2 weeks', task: 'opening business bank accounts globally' },
  { time: '5%', task: 'losing money on currency conversions' },
  { time: '24 hrs', task: 'reconciling payment data across platforms' },
  { time: '∞', task: 'worrying about account freezes...' },
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
