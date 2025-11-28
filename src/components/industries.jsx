'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'
import { getAllIndustries } from '@/data/industries'

const industries = getAllIndustries().map((industry) => ({
  slug: industry.slug,
  img: industry.heroImage,
  title: industry.name,
}))

function IndustryCard({
  slug,
  title,
  img,
  bounds,
  scrollX,
  ...props
}) {
  let ref = useRef(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <Link href={`/industries/${slug}`}>
      <motion.div
        ref={ref}
        style={{ opacity }}
        {...props}
        className="group relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
      >
        <img
          alt={title}
          src={img}
          className="absolute inset-x-0 top-0 aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
        />
        <figcaption className="relative p-10 pt-0 pb-10">
          <div className="border-t border-white/20 pt-6">
            <p className="text-xl/7 font-medium">
              <span className="bg-linear-to-r from-[#60d5ff] from-28% via-[#2b6ff4] via-70% to-[#1e40af] bg-clip-text text-transparent">
                {title}
              </span>
            </p>
          </div>
        </figcaption>
      </motion.div>
    </Link>
  )
}

function CallToAction() {
  return (
    <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
      From SaaS to healthcare, e-commerce to Web3, Request Finance provides industry-specific solutions that streamline your financial operations.
    </p>
  )
}

export function Industries() {
  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="bg-linear-to-b from-gray-100 to-white py-32 overflow-hidden">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>Who's it for?</Subheading>
          <Heading as="h3" className="mt-2">
          Built for every type of business
          </Heading>
          <CallToAction />
        </div>
        
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {industries.map(({ slug, img, title }, industryIndex) => (
          <IndustryCard
            key={industryIndex}
            slug={slug}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
          />
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-center">
          <div className="hidden sm:flex sm:gap-2">
            {industries.map(({ title }, industryIndex) => (
              <Headless.Button
                key={industryIndex}
                onClick={() => scrollTo(industryIndex)}
                data-active={
                  activeIndex === industryIndex ? true : undefined
                }
                aria-label={`Scroll to ${title}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-active:bg-gray-400 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

