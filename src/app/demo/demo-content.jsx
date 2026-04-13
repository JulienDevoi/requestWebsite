'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'
import { Logo } from '@/components/logo'

// Replace this label with the one from your Google Ads conversion action (Tools → Conversions → Demo Booked)
const DEMO_BOOKED_CONVERSION_LABEL = 'Bye1CNz-oZscEIae-dEC'

export function DemoContent() {
  // Fire Google Ads conversion when HubSpot meeting is successfully booked
  useEffect(() => {
    function handleMeetingBooked(event) {
      if (event.data?.meetingBookSucceeded) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: `AW-708726534/${DEMO_BOOKED_CONVERSION_LABEL}`,
          })
        }
      }
    }
    window.addEventListener('message', handleMeetingBooked)
    return () => window.removeEventListener('message', handleMeetingBooked)
  }, [])

  useEffect(() => {
    // HubSpot script should automatically initialize, but we can trigger it manually if needed
    const initHubSpot = () => {
      // The HubSpot script automatically finds elements with class 'meetings-iframe-container'
      // and data-src attribute, so we just need to ensure the script is loaded
      if (window.hbspt && typeof window.hbspt.meetings !== 'undefined') {
        // Force re-initialization if needed
        const containers = document.querySelectorAll('.meetings-iframe-container')
        containers.forEach((container) => {
          if (!container.querySelector('iframe')) {
            const dataSrc = container.getAttribute('data-src')
            if (dataSrc) {
              // Create iframe directly since HubSpot's auto-init might not work in React
              const iframe = document.createElement('iframe')
              iframe.src = dataSrc
              iframe.style.width = '100%'
              iframe.style.height = '100%'
              iframe.style.border = 'none'
              iframe.style.minHeight = '600px'
              iframe.setAttribute('frameborder', '0')
              iframe.setAttribute('allowtransparency', 'true')
              container.appendChild(iframe)
            }
          }
        })
      }
    }

    // Try to initialize immediately
    initHubSpot()

    // Also check periodically in case script loads later
    const interval = setInterval(() => {
      initHubSpot()
    }, 500)

    // Cleanup
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="block" href="/" aria-label="Request Finance">
                <Logo className="h-9" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="grow">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-36 pb-12 md:pt-40 md:pb-20">
              <div className="lg:flex lg:space-x-12 xl:space-x-16">
                {/* Left side */}
                <div className="grow lg:mt-16 mb-16 lg:mb-0 text-center lg:text-left">
                  {/* Dual-audience pill badge */}
                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    Built for crypto-native companies &amp; traditional finance teams
                  </div>

                  <h1 className="text-4xl font-medium tracking-tight text-gray-950 mb-4 sm:text-5xl">Your AP process is costing you more than you think</h1>
                  <p className="text-lg text-gray-600 mb-4 max-w-xl mx-auto lg:mx-0">
                  Book a 15-min demo and see what fixing it actually looks like:
                  </p>

                  <div className="mb-12">
                    <ul className="inline-flex flex-col text-slate-500 space-y-4 max-w-xl mx-auto lg:mx-0 text-left w-full">
                      <li className="flex items-start text-left w-full">
                        <svg className="shrink-0 mr-3 mt-0.5" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <div>
                          <span className="font-medium text-gray-900">Cut invoice cycles from 14+ hours to under 2</span>
                          <span className="block text-sm text-gray-500 mt-0.5">Based on analysis of 600+ AP teams processing 100+ invoices/month.</span>
                        </div>
                      </li>
                      <li className="flex items-start text-left w-full">
                        <svg className="shrink-0 mr-3 mt-0.5" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <div>
                          <span className="font-medium text-gray-900">Save 20+ hours a month your team is currently doing manually</span>
                          <span className="block text-sm text-gray-500 mt-0.5">Automate capture, multi-level approval, and payment in one connected workflow.</span>
                        </div>
                      </li>
                      <li className="flex items-start text-left w-full">
                        <svg className="shrink-0 mr-3 mt-0.5" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <div>
                          <span className="font-medium text-gray-900">Eliminate $3–8 per-invoice processing costs</span>
                          <span className="block text-sm text-gray-500 mt-0.5">Replace fragmented tools with a single platform, no more spreadsheet handoffs.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* What to expect */}
                  <div className="mb-10 max-w-xl mx-auto lg:mx-0 text-left bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      What happens in your 15 minutes
                    </h3>
                    <ol className="space-y-3">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">01</span>
                        <div>
                          <span className="text-sm font-semibold text-gray-900">We map your current AP workflow</span>
                          <span className="block text-sm text-gray-500">Identify your biggest time drains and cost leaks, no prep required from you.</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">02</span>
                        <div>
                          <span className="text-sm font-semibold text-gray-900">You see a live walkthrough of your exact use case</span>
                          <span className="block text-sm text-gray-500">Not a generic product tour, a session tailored to how your team actually works.</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">03</span>
                        <div>
                          <span className="text-sm font-semibold text-gray-900">You leave with a custom ROI estimate</span>
                          <span className="block text-sm text-gray-500">Hours saved, costs reduced, and a clear picture of payback time for your team size.</span>
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* Press logos */}
                  <div className="w-full">
                    <div className="text-xs text-slate-400 font-[350] uppercase tracking-wider text-center lg:text-left mb-5">
                      Trusted by 600+ finance teams processing $100M+ monthly
                    </div>

                    <div className="flex flex-nowrap items-center justify-center lg:justify-start -m-4 lg:-m-2 xl:-m-4">
                      {/* Facebook */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <img className="inline-flex max-w-full" src="/images/ht.svg" alt="Harris & Trotter" />
                      </div>

                      {/* Nike */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <img className="inline-flex max-w-full" src="/images/deloitte.svg" alt="Deloitte" />
                      </div>

                      {/* Samsung */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <img className="inline-flex max-w-full" src="/images/pwc.svg" alt="PWC" />
                      </div>

                      {/* Disney */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <img className="inline-flex max-w-full" src="/images/xange.svg" alt="Xange" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="relative shrink-0 text-center lg:text-left">
                  {/* Bg */}
                  <div
                    className="absolute inset-0 mb-44 -mx-4 sm:-mx-6 lg:-mt-[9999px] lg:ml-0 lg:-mr-[9999px] rounded-bl-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
                    aria-hidden="true"
                  />

                  {/* Illustration */}
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -mt-40 ml-20 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src="/images/hero-illustration.svg"
                    alt="Request Finance spend management platform illustration"
                    width={600}
                    height={600}
                    aria-hidden="true"
                  />

                  <div className="flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20">
                    <div className="w-full max-w-[480px] mx-auto lg:w-[480px] lg:max-w-none lg:mx-0 xl:w-[512px] bg-white shadow-2xl overflow-hidden rounded-t-2xl">
                      {/* Above-form urgency + CTA framing */}
                      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{backgroundColor: '#ffc124'}} />
                          <span className="text-xs font-medium" style={{color: '#ffc124'}}>Demo slots this week are filling fast</span>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-0.5">
                          Get your custom AP savings estimate
                        </h2>
                        <p className="text-sm text-gray-500">
                          15 minutes. No prep required. Cancel anytime.
                        </p>
                      </div>

                      {/* HubSpot Meetings Embed */}
                      <div 
                        className="meetings-iframe-container w-full min-h-[600px]" 
                        data-src="https://content.request.finance/meetings/rf-team/demo-call?embed=true"
                      ></div>

                      {/* Below-form micro-copy */}
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-gray-500">
                          <li className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            No spam, ever.
                          </li>
                          <li className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Confirmed within 1 business hour
                          </li>
                          <li className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Working session, not a sales pitch
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />
    </>
  )
}

