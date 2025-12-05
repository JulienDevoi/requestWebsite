'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function WeglotScript() {
  useEffect(() => {
    // Initialize Weglot once the script is loaded
    const initWeglot = () => {
      if (typeof window !== 'undefined' && window.Weglot && !window.weglotInitialized) {
        try {
          window.Weglot.initialize({
            api_key: 'wg_87c7a6f782faec80e6c5680db823a4295',
          })
          window.weglotInitialized = true
        } catch (error) {
          console.error('Weglot initialization error:', error)
        }
      }
    }

    // Check if Weglot is already available
    if (typeof window !== 'undefined' && window.Weglot) {
      initWeglot()
    } else {
      // Poll for Weglot to be available
      let attempts = 0
      const maxAttempts = 50
      const checkInterval = setInterval(() => {
        attempts++
        if (typeof window !== 'undefined' && window.Weglot) {
          initWeglot()
          clearInterval(checkInterval)
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval)
          console.error('Weglot script failed to load')
        }
      }, 100)
    }
  }, [])

  return (
    <Script
      src="https://cdn.weglot.com/weglot.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.Weglot && !window.weglotInitialized) {
          try {
            window.Weglot.initialize({
              api_key: 'wg_87c7a6f782faec80e6c5680db823a4295',
            })
            window.weglotInitialized = true
          } catch (error) {
            console.error('Weglot initialization error:', error)
          }
        }
      }}
      onError={() => {
        console.error('Failed to load Weglot script')
      }}
    />
  )
}

