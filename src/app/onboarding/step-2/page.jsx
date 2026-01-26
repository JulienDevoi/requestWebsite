'use client'

import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { saveLead } from '@/lib/leads'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function OnboardingStep2() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleOptionClick = async (optionId) => {
    if (loading) return // Prevent multiple clicks
    
    setSelected(optionId)
    setLoading(true)
    
    try {
      // Save to database
      await saveLead(
        {
          step2_employee_count: optionId,
        },
        'step2'
      )
      
      router.push('/onboarding/step-3')
    } catch (error) {
      console.error('Error saving lead:', error)
      setLoading(false)
    }
  }

  const options = [
    {
      id: '1-10',
      label: '👥 1-10 Employees',
    },
    {
      id: '11-50',
      label: '👨‍👩‍👧‍👦 11-50 Employees',
    },
    {
      id: '51-100',
      label: '🏢 51-100 Employees',
    },
    {
      id: '101-250',
      label: '🏛️ 101-250 Employees',
    },
    {
      id: '251+',
      label: '🌐 251+ Employees',
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
                style={{ width: '60%' }}
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
                How many employees does your company have?
              </h1>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {options.map((option) => {
                const isSelected = selected === option.id
                const isLoading = loading && isSelected
                
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleOptionClick(option.id)}
                    disabled={loading}
                    className={clsx(
                      'flex w-full items-center justify-center gap-2 rounded-lg border border-transparent',
                      'bg-white px-4 py-4 transition-all duration-200',
                      selected === option.id ? 'ring-0' : 'ring-1 ring-black/10',
                      loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
                      !loading && 'hover:bg-[#fafafa] hover:ring-black/15',
                      'focus:outline-2 focus:outline-offset-2 focus:outline-black',
                    )}
                  >
                    {isLoading && (
                      <svg
                        className="size-4 animate-spin text-gray-950"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                    <span className="text-sm/6 font-semibold text-gray-950">
                      {option.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Back Link */}
            <div className="pt-4">
              <Link
                href="/onboarding"
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
