'use client'

import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { saveLead } from '@/lib/leads'
import { Field, Input, Label } from '@headlessui/react'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function OnboardingStep5() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    linkedinUrl: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    if (!formData.linkedinUrl.trim()) {
      newErrors.linkedinUrl = 'LinkedIn URL is required'
    } else if (!formData.linkedinUrl.match(/^https?:\/\/(www\.)?linkedin\.com\/.+/i)) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Save to database
      await saveLead(
        {
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          company_name: formData.companyName.trim(),
          linkedin_url: formData.linkedinUrl.trim(),
        },
        'step5'
      )

      // Redirect to book page
      router.push('/book')
    } catch (error) {
      console.error('Error saving form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
                style={{ width: '100%' }}
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
                Tell us about yourself
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Label className="text-sm/5 font-medium text-gray-950">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className={clsx(
                      'mt-2 block w-full rounded-lg border border-transparent ring-1',
                      'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-sm/6',
                      'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
                      errors.firstName
                        ? 'ring-red-500 bg-red-50'
                        : 'ring-black/10 bg-white',
                    )}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                  )}
                </Field>

                <Field>
                  <Label className="text-sm/5 font-medium text-gray-950">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className={clsx(
                      'mt-2 block w-full rounded-lg border border-transparent ring-1',
                      'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-sm/6',
                      'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
                      errors.lastName
                        ? 'ring-red-500 bg-red-50'
                        : 'ring-black/10 bg-white',
                    )}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                  )}
                </Field>
              </div>

              <Field>
                <Label className="text-sm/5 font-medium text-gray-950">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  required
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className={clsx(
                    'mt-2 block w-full rounded-lg border border-transparent ring-1',
                    'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-sm/6',
                    'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
                    errors.companyName
                      ? 'ring-red-500 bg-red-50'
                      : 'ring-black/10 bg-white',
                  )}
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
                )}
              </Field>

              <Field>
                <Label className="text-sm/5 font-medium text-gray-950">
                  LinkedIn URL <span className="text-red-500">*</span>
                </Label>
                <Input
                  required
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className={clsx(
                    'mt-2 block w-full rounded-lg border border-transparent ring-1',
                    'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-sm/6',
                    'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
                    errors.linkedinUrl
                      ? 'ring-red-500 bg-red-50'
                      : 'ring-black/10 bg-white',
                  )}
                />
                {errors.linkedinUrl && (
                  <p className="mt-1 text-xs text-red-600">{errors.linkedinUrl}</p>
                )}
              </Field>

              <div className="flex items-center justify-between pt-4">
                <Link
                  href="/onboarding/step-4"
                  className="cursor-pointer text-sm/6 text-gray-600 underline hover:text-gray-950"
                >
                  Back
                </Link>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer bg-gray-950 text-white data-hover:bg-gray-800 data-disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
