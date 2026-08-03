'use client'

import { useEffect, useRef } from 'react'

const FORM_CONTAINER_ID = 'hubspot-cards-waitlist-form'

function createHubSpotForm() {
  if (!window.hbspt?.forms?.create) return false

  const target = document.getElementById(FORM_CONTAINER_ID)
  if (!target || target.dataset.formReady === 'true') return false

  target.dataset.formReady = 'true'
  window.hbspt.forms.create({
    portalId: '4477725',
    formId: '24585042-0d08-4cde-a063-7a8daa467d43',
    region: 'na1',
    target: `#${FORM_CONTAINER_ID}`,
  })

  return true
}

export function HubSpotCardsWaitlistForm() {
  const intervalRef = useRef(null)

  useEffect(() => {
    if (createHubSpotForm()) return

    intervalRef.current = window.setInterval(() => {
      if (createHubSpotForm() && intervalRef.current) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, 200)

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  return <div id={FORM_CONTAINER_ID} />
}
