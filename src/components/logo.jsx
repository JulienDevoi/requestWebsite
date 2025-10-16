'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

export function Logo({ className }) {
  return (
    <Image
      src="/images/request-finance.svg"
      alt="Request Finance"
      width={127}
      height={34}
      className={clsx(className)}
      priority
    />
  )
}

export function Mark({ className }) {
  return (
    <Image
      src="/images/icon.svg"
      alt="Request Finance"
      width={34}
      height={34}
      className={className}
    />
  )
}
