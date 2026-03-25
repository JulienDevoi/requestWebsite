'use client'

import { useEffect } from 'react'

/**
 * Tracks clicks that open a Request account (app signup) for Google Ads conversion.
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

    function isOpenAccountHref(href) {
      try {
        const base = href.startsWith('http') ? href : new URL(href, window.location.origin).href
        const u = new URL(base)
        const isSignup =
          u.hostname === 'app.request.finance' &&
          (u.pathname === '/signup' || u.pathname.startsWith('/signup/'))
        return isSignup
      } catch {
        return false
      }
    }

    function handleClick(e) {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      if (isOpenAccountHref(href)) {
        fireConversion()
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
