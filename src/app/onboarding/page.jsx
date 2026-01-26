'use client'

import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { saveLead } from '@/lib/leads'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Onboarding() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleOptionClick = async (optionId) => {
    if (loading) return // Prevent multiple clicks
    
    setSelected(optionId)
    setLoading(true)
    
    try {
      // Update existing lead with step1 data (lead was created on signup)
      const leadData = {
        step1_venture_funding: optionId,
      }
      
      // Save to database (will update existing lead)
      await saveLead(leadData, 'step1')
      
      router.push('/onboarding/step-2')
    } catch (error) {
      console.error('Error saving lead:', error)
      setLoading(false)
    }
  }

  const options = [
    {
      id: 'yes',
      label: '💰 Yes, we have raised venture funding',
    },
    {
      id: 'no',
      label: '🚀 No, we have not raised venture funding',
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
                style={{ width: '45%' }}
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
                Has your company raised venture capital funding?
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
                href="/"
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
