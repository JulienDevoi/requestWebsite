import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export function ProductHero({ title, description, image }) {
  return (
    <div className="relative pb-16 sm:pb-20 lg:pb-24">
      {/* Gradient background - stops at middle of image */}
      <Gradient className="absolute inset-2 bottom-1/3 rounded-4xl ring-1 ring-black/5 ring-inset" />
      
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/demo"
              className="flex items-center gap-1 rounded-full bg-blue-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-blue-950/30"
            >
              Ready to Simplify Your Business Spend Management?
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-16 sm:pt-24 sm:pb-20">
          <Heading as="h1" className="max-w-4xl">
            {title}
          </Heading>
          <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {description}
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/demo">Book a demo</Button>
            <Button variant="secondary" href="/pricing">
              Pricing
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Full-width image/video that overlaps gradient and white background */}
      {image && (
        <Container className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
            {image.endsWith('.mp4') ? (
              <video
                src={image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            ) : (
              <img
                src={image}
                alt=""
                className="w-full"
              />
            )}
          </div>
        </Container>
      )}
    </div>
  )
}

