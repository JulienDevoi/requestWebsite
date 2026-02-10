'use client'

import { useEffect } from 'react'

/**
 * Tracks outbound clicks on Open account links (/open) for Google Ads conversion.
 * Listens for clicks on header, footer, homepage, and any other /open links.
 * Fires the conversion and lets the link navigate normally so /open always works.
 */
export function OpenAccountConversionTracker() {
  useEffect(() => {
    function fireConversion() {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-708726534/SFBpCLOJ9_IbEIae-dEC',
          value: 1.0,
          currency: 'EUR',
        })
      }
    }

    function handleClick(e) {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      const pathname = href.startsWith('/')
        ? new URL(href, window.location.origin).pathname
        : (() => {
            try {
              return new URL(href).pathname
            } catch {
              return ''
            }
          })()

      if (pathname === '/open' || pathname === '/open/') {
        fireConversion()
        // Let the default link behavior happen so navigation always works
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
