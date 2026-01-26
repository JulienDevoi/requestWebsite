'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Container } from './container'
import { Heading, Subheading } from './text'

export function FAQ({ eyebrow, title, items = [] }) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <Container className="pt-16 pb-32">
      {eyebrow && <Subheading>{eyebrow}</Subheading>}
      {title && (
        <Heading as="h3" className={eyebrow ? 'mt-2' : ''}>
          {title}
        </Heading>
      )}
      <div className="mt-6 w-full">
        <div>
          <table className="w-full text-left">
            <colgroup>
              <col className="w-full" />
              <col className="w-0" />
            </colgroup>
            <thead className="sr-only">
              <tr>
                <th scope="col">Question</th>
                <th scope="col">Toggle</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <Disclosure key={index} as="tr" defaultOpen={index === 0} className="block mb-2">
                  <td className="block px-0" colSpan={2}>
                    <DisclosureButton className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-left text-sm/6 font-semibold transition hover:bg-gray-100">
                      <span>{item.question}</span>
                      <ChevronDownIcon className="size-4 shrink-0 transition-transform duration-200 data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 py-4 text-sm/6 text-gray-600">
                      {item.answer}
                    </DisclosurePanel>
                  </td>
                </Disclosure>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}
