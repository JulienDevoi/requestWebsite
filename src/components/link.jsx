import * as Headless from '@headlessui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

export const Link = forwardRef(function Link(props, ref) {
  // DataInteractive defaults to Fragment; `as` must be a real element/component so Headless UI can forward ref + event props.
  return <Headless.DataInteractive as={NextLink} ref={ref} {...props} />
})
