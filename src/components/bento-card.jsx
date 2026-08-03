'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Subheading } from './text'

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  comingSoon = false,
  waitlistHref,
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-white shadow-xs ring-1 ring-black/5',
        'data-dark:bg-gray-800 data-dark:ring-white/15',
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes('top') && (
          <div key="fade-top" className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]" />
        )}
        {fade.includes('bottom') && (
          <div key="fade-bottom" className="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]" />
        )}
      </div>
      <div className="relative p-10">
        <Subheading as="h3" dark={dark} className="flex items-center gap-2">
          {eyebrow}
          {comingSoon && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold normal-case tracking-normal text-gray-600">
              Coming soon
            </span>
          )}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          {description}
        </p>
        {comingSoon && waitlistHref && (
          <Link
            href={waitlistHref}
            className="mt-4 inline-flex text-sm font-semibold text-blue-600 data-hover:text-blue-700"
          >
            Join the waitlist →
          </Link>
        )}
      </div>
    </motion.div>
  )
}
