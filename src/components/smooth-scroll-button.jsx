'use client'

import { Button } from './button'

export function SmoothScrollButton({ href, children, ...props }) {
  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const offset = 100 // Offset for navbar/spacing
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <Button {...props} href={href} onClick={handleClick}>
      {children}
    </Button>
  )
}

