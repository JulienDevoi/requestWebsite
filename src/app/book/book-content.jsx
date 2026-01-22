'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'
import { Logo } from '@/components/logo'

export function BookContent() {
  useEffect(() => {
    // Google Ads conversion tracking - wait for gtag to be available
    const triggerConversion = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-708726534/wuA_CJHprOobEIae-dEC',
          'value': 1.0,
          'currency': 'EUR'
        })
        return true
      }
      return false
    }

    // Try immediately, then retry if gtag isn't ready yet
    if (!triggerConversion()) {
      const checkInterval = setInterval(() => {
        if (triggerConversion()) {
          clearInterval(checkInterval)
        }
      }, 100)

      // Stop checking after 5 seconds
      setTimeout(() => clearInterval(checkInterval), 5000)
    }

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
            <div className="pt-24 pb-12 md:pt-28 md:pb-20">
              <div className="lg:flex lg:space-x-12 xl:space-x-16">
                {/* Left side */}
                <div className="grow lg:mt-8 mb-16 lg:mb-0 text-center lg:text-left">
                  <h1 className="text-4xl font-medium tracking-tight text-gray-950 mb-6 sm:text-5xl">Let's get your account set up</h1>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    Schedule a quick 30-minute call with our team to open your global USD account, issue corporate cards, set up accounts payable, and start making global payments.
                  </p>

                  <div className="mb-12">
                    <ul className="inline-flex flex-col text-slate-500 space-y-2.5">
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Control corporate card spend in real-time</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Save 2.9–4% on card fees with transparent pricing</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Process accounts payable in minutes, not days</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Pay suppliers globally with competitive FX rates</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Seamless stablecoin and fiat integration</span>
                      </li>
                    </ul>
                  </div>

                  {/* Press logos */}
                  <div className="w-full">
                    <div className="text-xs text-slate-400 font-[350] uppercase tracking-wider text-center lg:text-left mb-5">
                      Trusted by the best
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
                    <div className="w-full max-w-[480px] mx-auto lg:w-[480px] lg:max-w-none lg:mx-0 xl:w-[512px] bg-white shadow-2xl overflow-hidden">
                      {/* HubSpot Meetings Embed */}
                      <div 
                        className="meetings-iframe-container w-full min-h-[600px]" 
                        data-src="https://content.request.finance/meetings/rf-team/demo-call?embed=true"
                      ></div>
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
