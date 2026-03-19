import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { getPostBySlug, resolveCategories } from '@/lib/blog'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { TableOfContents } from './TableOfContents'
import { blogComponents } from '@/components/blog/blog-components'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'

// Extract h2 (##) and h3 (###) headings for the TOC; returns [{ id, text, level }]
function getTocFromBody(body) {
  if (!body) return []
  const slugs = new Map()
  return body
    .split('\n\n')
    .map(block => block.trim())
    .filter(block =>
      (block.startsWith('## ') && !block.startsWith('### ')) ||
      (block.startsWith('### ') && !block.startsWith('#### '))
    )
    .map(block => {
      const isH3 = block.startsWith('### ')
      const text = isH3 ? block.slice(4).trim() : block.slice(3).trim()
      const level = isH3 ? 3 : 2
      const base = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      let id = base
      let n = 1
      while (slugs.has(id)) {
        id = `${base}-${++n}`
      }
      slugs.set(id, true)
      return { id, text, level }
    })
}

function parseParagraphWithLinks(text) {
  const parts = []
  let lastIndex = 0
  const re = /(\*\*(.+?)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g
  let match
  let key = 0
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1]) {
      parts.push(
        <strong key={`bold-${key++}`} className="font-semibold text-gray-950">
          {match[2]}
        </strong>
      )
    } else if (match[3]) {
      parts.push(
        <a
          key={`link-${key++}`}
          href={match[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-950 underline data-hover:text-gray-950/75"
        >
          {match[4]}
        </a>
      )
    }
    lastIndex = re.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length ? parts : [text]
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  if (!/^[a-z0-9-_]+$/.test(slug) || slug.length > 100 || slug.length < 1) {
    return {}
  }

  const post = getPostBySlug(slug)
  if (!post) return {}

  const resolvedCategories = resolveCategories(post.categories)

  return {
    title: `${post.title} - Request Finance Blog`,
    description: post.excerpt,
    keywords: [
      'business finance',
      'spend management',
      'corporate finance',
      'fintech',
      ...resolvedCategories.map(cat => cat.title.toLowerCase()),
    ],
    openGraph: {
      title: `${post.title} - Request Finance Blog`,
      description: post.excerpt,
      url: `https://requestfinance.com/blog/${post.slug}`,
      siteName: 'Request Finance',
      images: [
        {
          url: 'https://requestfinance.com/images/thumbnail.png',
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
      title: `${post.title} - Request Finance Blog`,
      description: post.excerpt,
      images: ['https://requestfinance.com/images/thumbnail.png'],
    },
    alternates: {
      canonical: `https://requestfinance.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params

  if (!/^[a-z0-9-_]+$/.test(slug)) notFound()
  if (slug.length > 100 || slug.length < 1) notFound()
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) notFound()

  const post = getPostBySlug(slug)
  if (!post) notFound()

  const resolvedCategories = resolveCategories(post.categories)
  const toc = post.body ? getTocFromBody(post.body) : []
  let tocIndex = -1

  return (
    <main>
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
          <div className="flex flex-col items-start gap-4 lg:self-start lg:sticky lg:top-8 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
            {resolvedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {resolvedCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog?category=${category.slug}`}
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
            {toc.length > 0 && <TableOfContents toc={toc} />}
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={post.mainImage}
                  className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
                />
              )}
              {post.body && (
                <div className="prose prose-gray max-w-none">
                  {post.body.split('\n\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim()
                    // Inline image: [IMAGE:/path/to/image.png]
                    if (trimmed.startsWith('[IMAGE:') && trimmed.endsWith(']')) {
                      const src = trimmed.slice(7, -1).trim()
                      return (
                        <figure key={index} className="my-8">
                          <img
                            src={src}
                            alt=""
                            className="w-full rounded-2xl"
                          />
                        </figure>
                      )
                    }
                    // Custom embedded component
                    if (trimmed.startsWith('[COMPONENT:') && trimmed.endsWith(']')) {
                      const componentName = trimmed.slice(11, -1).trim()
                      const Component = blogComponents[componentName]
                      if (Component) return <Component key={index} />
                      return null
                    }
                    // Blockquote
                    if (trimmed.startsWith('> ')) {
                      const lines = trimmed.split('\n')
                      const quoteLines = []
                      let attribution = null
                      for (const line of lines) {
                        const content = line.replace(/^>\s?/, '')
                        if (content.startsWith('\u2014 ')) {
                          attribution = content
                        } else {
                          quoteLines.push(content)
                        }
                      }
                      return (
                        <blockquote key={index} className="my-8 border-l-[3px] border-gray-300 pl-5">
                          <p className="text-base/7 italic text-gray-600">{quoteLines.join(' ')}</p>
                          {attribution && (
                            <footer className="mt-2 text-sm not-italic text-gray-500">{attribution}</footer>
                          )}
                        </blockquote>
                      )
                    }
                    // h2
                    if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
                      tocIndex += 1
                      const headingText = trimmed.slice(3).trim()
                      const id = toc[tocIndex]?.id ?? headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                      return (
                        <h2
                          key={index}
                          id={id}
                          className="mt-14 mb-4 scroll-mt-24 text-2xl/8 font-semibold tracking-tight text-gray-950 first:mt-0"
                        >
                          {headingText}
                        </h2>
                      )
                    }
                    // h3
                    if (trimmed.startsWith('### ') && !trimmed.startsWith('#### ')) {
                      tocIndex += 1
                      const headingText = trimmed.slice(4).trim()
                      const id = toc[tocIndex]?.id ?? headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                      return (
                        <h3
                          key={index}
                          id={id}
                          className="mt-10 mb-3 scroll-mt-24 text-xl/7 font-semibold text-gray-900"
                        >
                          {headingText}
                        </h3>
                      )
                    }
                    // h4
                    if (trimmed.startsWith('#### ')) {
                      const headingText = trimmed.slice(5).trim()
                      return (
                        <h4
                          key={index}
                          className="mt-6 mb-2 text-sm/6 font-semibold uppercase tracking-wide text-gray-500"
                        >
                          {headingText}
                        </h4>
                      )
                    }
                    // List: every line starts with "- "
                    const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean)
                    if (lines.length > 0 && lines.every(l => l.startsWith('- '))) {
                      return (
                        <ul key={index} className="my-6 list-disc space-y-2 pl-6 text-base/8 first:mt-0">
                          {lines.map((line, i) => (
                            <li key={i}>{parseParagraphWithLinks(line.slice(2))}</li>
                          ))}
                        </ul>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={index} className="my-6 text-base/8 first:mt-0 last:mb-0">
                        {parseParagraphWithLinks(trimmed)}
                      </p>
                    )
                  })}
                </div>
              )}
              <div className="mt-10">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
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
