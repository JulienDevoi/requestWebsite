import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export function UseCaseCaseStudy({ story }) {
  if (!story?.summary || !story?.highlights?.length) {
    return null
  }

  return (
    <Container className="py-24">
      <div className="overflow-hidden rounded-3xl bg-gray-950 ring-1 ring-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src={story.mainImage}
              alt={story.author?.name || story.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/20 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-gray-950/90" />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <Subheading dark>Customer story</Subheading>
            <p className="mt-4 text-2xl/8 font-medium tracking-tight text-white sm:text-3xl/9">
              {story.title}
            </p>
            <p className="mt-4 text-base/7 text-gray-400">{story.summary}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {story.highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs/5 text-gray-500">{item.label}</dt>
                  <dd className="mt-1 text-lg/7 font-semibold text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={`/customers/${story.slug}`}>Read the full story</Button>
              <Link
                href={`/customers/${story.slug}`}
                className="inline-flex items-center gap-1 text-sm/6 font-medium text-gray-400 hover:text-white"
              >
                {story.author?.name}
                <ChevronRightIcon className="size-4 fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
