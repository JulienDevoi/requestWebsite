import Image from 'next/image'
import { siteUrl } from '@/lib/config'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  customerCategories,
  getAllCustomerSlugs,
  getCustomerStoryBySlug,
} from '@/data/customers'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'

function renderInlineLinks(text) {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    parts.push(
      <a
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-700"
      >
        {match[1]}
      </a>,
    )

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

export async function generateStaticParams() {
  return getAllCustomerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  if (!/^[a-z0-9-_]+$/.test(slug) || slug.length > 100 || slug.length < 1) {
    return {}
  }

  const post = getCustomerStoryBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} - Request Finance`,
    description: post.excerpt,
    keywords: [
      'customer success story',
      'case study',
      'spend management',
      'business finance',
      'corporate cards',
      'accounts payable',
      'fintech',
      ...(post.categories?.map((cat) =>
        typeof cat === 'string' ? cat : cat.title.toLowerCase(),
      ) || []),
    ],
    openGraph: {
      title: `${post.title} - Request Finance`,
      description: post.excerpt,
      url: `${siteUrl}/customers/${post.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: `${siteUrl}/images/thumbnail.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - Request Finance`,
      description: post.excerpt,
      images: [`${siteUrl}/images/thumbnail.png`],
    },
    alternates: {
      canonical: `${siteUrl}/customers/${post.slug}`,
    },
  }
}

export default async function CustomerStory({ params }) {
  const { slug } = await params

  if (!/^[a-z0-9-_]+$/.test(slug)) {
    notFound()
  }

  if (slug.length > 100 || slug.length < 1) {
    notFound()
  }

  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    notFound()
  }

  const post = getCustomerStoryBySlug(slug)
  if (!post) notFound()

  const categories = post.categories.map((slug) => {
    const category = customerCategories.find((item) => item.slug === slug)
    return category || { slug, title: slug.replace(/-/g, ' ') }
  })

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Customers',
        item: `${siteUrl}/customers`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${siteUrl}/customers/${post.slug}`,
      },
    ],
  }

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
        </Subheading>
        <Heading as="h1" className="mt-2">
          {post.title}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={post.author.image}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
            {Array.isArray(categories) && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/customers?category=${category.slug}`}
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              {post.mainImage && (
                <div className="relative mb-10 aspect-3/2 w-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    alt={post.title}
                    src={post.mainImage}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
              )}
              {post.body && (
                <div className="prose prose-gray max-w-none">
                  {post.body.split('\n\n').map((block, index) => {
                    const trimmed = block.trim()
                    if (trimmed.startsWith('[IMAGE:') && trimmed.endsWith(']')) {
                      const src = trimmed.slice(7, -1).trim()
                      return (
                        <figure key={index} className="my-8">
                          <img
                            src={src}
                            alt=""
                            className="w-full rounded-2xl shadow-lg"
                          />
                        </figure>
                      )
                    }
                    const quoteLines = trimmed
                      .split('\n')
                      .map((line) => line.trim())
                      .filter(Boolean)
                    if (
                      quoteLines.length > 0 &&
                      quoteLines.every((line) => line.startsWith('>'))
                    ) {
                      return (
                        <blockquote
                          key={index}
                          className="my-8 border-l-4 border-gray-300 pl-6 text-lg/8 text-gray-700 italic"
                        >
                          {quoteLines.map((line, i) => (
                            <p
                              key={i}
                              className={
                                i > 0
                                  ? 'mt-3 not-italic text-base/7 text-gray-600'
                                  : ''
                              }
                            >
                              {renderInlineLinks(line.replace(/^>\s?/, ''))}
                            </p>
                          ))}
                        </blockquote>
                      )
                    }
                    if (
                      trimmed.startsWith('**') &&
                      trimmed.endsWith('**') &&
                      !trimmed.slice(2, -2).includes('**')
                    ) {
                      return (
                        <h2
                          key={index}
                          className="mt-12 mb-6 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0"
                        >
                          {trimmed.slice(2, -2)}
                        </h2>
                      )
                    }
                    const lines = trimmed
                      .split('\n')
                      .map((l) => l.trim())
                      .filter(Boolean)
                    if (
                      lines.length > 0 &&
                      lines.every((l) => l.startsWith('- '))
                    ) {
                      return (
                        <ul
                          key={index}
                          className="my-6 list-disc space-y-2 pl-6 text-base/8 first:mt-0"
                        >
                          {lines.map((line, i) => (
                            <li key={i}>{renderInlineLinks(line.slice(2))}</li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p
                        key={index}
                        className="my-6 text-base/8 first:mt-0 last:mb-0"
                      >
                        {renderInlineLinks(trimmed)}
                      </p>
                    )
                  })}
                </div>
              )}
              <div className="mt-10">
                <Button variant="outline" href="/customers">
                  <ChevronLeftIcon className="size-4" />
                  Back to customers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
