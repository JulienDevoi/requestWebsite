'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Logo } from '@/components/logo'

const CALENDLY_URL = 'https://calendly.com/d/dvrx-9cq-5ch/30-min-intro-call'

export function DemoContent() {
  return (
    <>
      <header className="absolute w-full z-30">
        <div className="px-6 sm:px-10 lg:pl-12 xl:pl-16 2xl:pl-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0 mr-4">
              <Link className="block" href="/" aria-label="Request Finance">
                <Logo className="h-9" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="grow">
        <section className="lg:grid lg:grid-cols-2 lg:min-h-screen">
          {/* Left column */}
          <div className="px-6 sm:px-10 lg:pl-12 xl:pl-16 2xl:pl-24 lg:pr-10 xl:pr-16 pt-36 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                For finance teams paying across borders
              </div>

              <h1 className="text-4xl font-medium tracking-tight text-gray-950 mb-4 sm:text-5xl xl:text-[3.25rem]/[1.15]">
                See what your cross-border payments really cost
              </h1>
              <p className="text-lg text-gray-600 mb-4 xl:text-xl/8">
                Book a 30-minute working session. We&apos;ll map your current payment flows and show you, in your own numbers, what you&apos;re losing to FX spreads, wire fees and settlement delays — and what the same payments look like on Request.
              </p>

              <div className="mb-12">
                <ul className="flex flex-col text-slate-500 space-y-4 text-left w-full">
                  <li className="flex items-start text-left w-full">
                    <svg className="shrink-0 mr-3 mt-0.5" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Find the 2–8% you&apos;re losing today.</span>
                      <span className="block text-sm text-gray-500 mt-0.5">Most teams are surprised by the true all-in cost once spreads, lifting fees and intermediary charges are added up.</span>
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
                      <span className="font-medium text-gray-900">Settle in minutes instead of days.</span>
                      <span className="block text-sm text-gray-500 mt-0.5">See a live stablecoin payout land, and a fiat payout at a flat 0.5%.</span>
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
                      <span className="font-medium text-gray-900">Leave with a written cost comparison.</span>
                      <span className="block text-sm text-gray-500 mt-0.5">Your current setup versus Request, at your actual volume and currency mix.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 text-left bg-gray-50 rounded-xl p-5 xl:p-6 border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  What happens in your 30 minutes
                </h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">01</span>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">We map your payment flows.</span>
                      <span className="block text-sm text-gray-500">Which countries, which currencies, who you pay and how often. No prep needed.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">02</span>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">You see your exact use case, live.</span>
                      <span className="block text-sm text-gray-500">Not a generic tour, but a walkthrough built around how your team actually moves money.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">03</span>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">You get the numbers in writing.</span>
                      <span className="block text-sm text-gray-500">Current cost, cost on Request, and what it would take to switch.</span>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="w-full">
                <div className="text-xs text-slate-400 font-[350] uppercase tracking-wider mb-5">
                  1,500+ finance teams · $1B+ processed
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <img className="h-7 w-auto sm:h-8" src="/images/ht.svg" alt="Harris & Trotter" />
                  <img className="h-7 w-auto sm:h-8" src="/images/deloitte.svg" alt="Deloitte" />
                  <img className="h-7 w-auto sm:h-8" src="/images/pwc.svg" alt="PWC" />
                  <img className="h-7 w-auto sm:h-8" src="/images/xange.svg" alt="Xange" />
                </div>
              </div>
            </div>
          </div>

          {/* Right column — full half-width blue panel */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-bl-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none"
              aria-hidden="true"
            />

            <Image
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -mt-32 ml-16 pointer-events-none max-w-none mix-blend-lighten opacity-90 xl:w-[520px] 2xl:w-[600px]"
              src="/images/hero-illustration.svg"
              alt=""
              width={600}
              height={600}
              aria-hidden="true"
            />

            <div className="relative px-6 sm:px-10 lg:px-10 xl:px-14 2xl:px-20 pt-12 lg:pt-40 pb-12 md:pb-20">
              <div className="w-full bg-white shadow-2xl overflow-hidden rounded-t-2xl">
                <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900 mb-0.5">
                    Get your cross-border cost breakdown
                  </h2>
                  <p className="text-sm text-gray-500">
                    30 minutes. No prep required. Cancel anytime.
                  </p>
                </div>

                <div
                  className="calendly-inline-widget w-full"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: '320px', height: '700px' }}
                />

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <ul className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-xs text-gray-500">
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
                      A working session, not a sales pitch
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  )
}
