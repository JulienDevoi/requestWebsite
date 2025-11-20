'use client'

import { Button } from './button'

// Custom easing function for smooth, natural scrolling
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function SmoothScrollButton({ href, children, ...props }) {
  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const offset = 100 // Offset for navbar/spacing
        const startPosition = window.pageYOffset
        const targetPosition = targetElement.getBoundingClientRect().top + startPosition - offset
        const distance = targetPosition - startPosition
        const duration = Math.min(Math.abs(distance) * 0.5, 1200) // Max 1.2s, scales with distance
        let startTime = null

        function animateScroll(currentTime) {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)
          
          // Apply easing
          const ease = easeInOutCubic(progress)
          window.scrollTo(0, startPosition + distance * ease)

          if (progress < 1) {
            requestAnimationFrame(animateScroll)
          }
        }

        requestAnimationFrame(animateScroll)
      }
    }
  }

  return (
    <Button {...props} href={href} onClick={handleClick}>
      {children}
    </Button>
  )
}

