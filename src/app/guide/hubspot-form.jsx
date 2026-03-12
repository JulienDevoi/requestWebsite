'use client'

import Script from 'next/script'
import { useRef, useEffect } from 'react'

const FORM_CONTAINER_ID = 'hubspot-guide-form'

export function HubSpotGuideForm() {
  const formCreatedRef = useRef(false)

  const createForm = () => {
    if (formCreatedRef.current || typeof window === 'undefined' || !window.hbspt?.forms?.create) return
    const target = document.getElementById(FORM_CONTAINER_ID)
    if (!target) return

    formCreatedRef.current = true
    window.hbspt.forms.create({
      portalId: '4477725',
      formId: 'e815538f-40c1-4aba-b710-e041fe19d1c0',
      region: 'na1',
      target: `#${FORM_CONTAINER_ID}`,
    })
  }

  useEffect(() => {
    if (window.hbspt?.forms?.create) {
      createForm()
    }
  }, [])

  const handleScriptLoad = () => {
    setTimeout(createForm, 0)
  }

  return (
    <>
      <div id={FORM_CONTAINER_ID} />
      <Script
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  )
}
