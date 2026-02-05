'use client'

import { useEffect } from 'react'

/**
 * Tracks outbound clicks on Open account links (/open) for Google Ads conversion.
 * Listens for clicks on header, footer, homepage, and any other /open links.
 */
export function OpenAccountConversionTracker() {
  useEffect(() => {
    function gtag_report_conversion(url) {
      const callback = function () {
        if (typeof url !== 'undefined') {
          window.location.href = url
        }
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-708726534/SFBpCLOJ9_IbEIae-dEC',
          value: 1.0,
          currency: 'EUR',
          event_callback: callback,
        })
      } else {
        callback()
      }
    }

    window.gtag_report_conversion = gtag_report_conversion

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
        e.preventDefault()
        const url = anchor.href || `${window.location.origin}/open`
        gtag_report_conversion(url)
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
      delete window.gtag_report_conversion
    }
  }, [])

  return null
}
