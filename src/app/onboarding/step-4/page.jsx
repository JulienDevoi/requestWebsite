'use client'

import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { saveLead } from '@/lib/leads'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function OnboardingStep4() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  const handleOptionClick = async (optionId) => {
    setSelected(optionId)
    
    // Save to database
    await saveLead(
      {
        step4_stablecoin_volume: optionId,
      },
      'step4'
    )
    
    router.push('/onboarding/step-5')
  }

  const options = [
    {
      id: '0',
      label: '🚫 $0',
    },
    {
      id: '1-50k',
      label: '💰 $1-$50k',
    },
    {
      id: '50k-100k',
      label: '💵 $50k-$100k',
    },
    {
      id: '100k-250k',
      label: '💳 $100k-$250k',
    },
    {
      id: '250k-500k',
      label: '💎 $250k-$500k',
    },
    {
      id: '500k-1mm',
      label: '🏦 $500k-$1mm',
    },
    {
      id: '1mm-3mm',
      label: '💸 $1mm-$3mm',
    },
    {
      id: '3mm-plus',
      label: '🌟 $3mm+',
    },
  ]

  return (
    <main className="overflow-hidden bg-gray-50">
      <div className="flex min-h-dvh flex-col">
        {/* Header */}
        <header className="flex flex-col items-center pt-8">
          <Link href="/" title="Home">
            <Logo />
          </Link>
          {/* Progress Bar */}
          <div className="mt-6 w-full max-w-md px-6">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: '90%' }}
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col items-center px-6 pb-8 pt-20">
          <div className="w-full max-w-md space-y-8">
            {/* Question Header */}
            <div className="space-y-2 text-center">
              <p className="text-sm/6 text-gray-600">
                Is Request Finance right for your business?
              </p>
              <h1 className="text-2xl/8 font-medium tracking-tight text-gray-950">
                How much stablecoin payment volume does your business do per month?
              </h1>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleOptionClick(option.id)}
                  className={clsx(
                    'flex w-full cursor-pointer rounded-lg border border-transparent',
                    'bg-white px-4 py-4 transition-all duration-200',
                    selected === option.id ? 'ring-0' : 'ring-1 ring-black/10',
                    'hover:bg-[#fafafa] hover:ring-black/15',
                    'focus:outline-2 focus:outline-offset-2 focus:outline-black',
                  )}
                >
                  <span className="text-sm/6 font-semibold text-gray-950">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Back Link */}
            <div className="pt-4">
              <Link
                href="/onboarding/step-3"
                className="cursor-pointer text-sm/6 text-gray-600 underline hover:text-gray-950"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
