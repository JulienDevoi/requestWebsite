'use client'

import { useEffect, useState } from 'react'

export function TableOfContents({ toc }) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (!toc.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          // Pick the topmost visible heading
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          setActiveId(top.target.id)
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )

    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [toc])

  return (
    <nav className="w-full lg:min-w-[14rem]" aria-label="On this page">
      <p className="text-sm/6 font-medium text-gray-950/80">In this blog post</p>
      <ul className="mt-3 space-y-1 border-l border-gray-200 pl-4 text-sm/6">
        {toc.map(({ id, text, level }) => {
          const isActive = id === activeId
          return (
            <li key={id} className={level === 3 ? 'pl-3' : ''}>
              <a
                href={`#${id}`}
                className={
                  isActive
                    ? 'block rounded px-1 font-medium text-blue-600 bg-blue-50'
                    : level === 3
                      ? 'text-gray-500 data-hover:text-gray-800'
                      : 'font-medium text-gray-600 data-hover:text-gray-950'
                }
              >
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
