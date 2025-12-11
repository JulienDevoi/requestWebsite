'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function WeglotScript() {
  const weglotApiKey = process.env.NEXT_PUBLIC_WEGLOT_API_KEY

  useEffect(() => {
    if (!weglotApiKey) {
      console.error('Weglot API key is missing. Please set NEXT_PUBLIC_WEGLOT_API_KEY in your environment variables.')
      return
    }

    // Initialize Weglot once the script is loaded
    const initWeglot = () => {
      if (typeof window !== 'undefined' && window.Weglot && !window.weglotInitialized) {
        try {
          window.Weglot.initialize({
            api_key: weglotApiKey,
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
  }, [weglotApiKey])

  if (!weglotApiKey) {
    return null
  }

  return (
    <Script
      src="https://cdn.weglot.com/weglot.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.Weglot && !window.weglotInitialized) {
          try {
            window.Weglot.initialize({
              api_key: weglotApiKey,
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

