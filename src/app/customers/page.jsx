import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Customers - Request Finance',
  description:
    'Discover how leading companies are using Request Finance to transform their business spend management, streamline payments, and achieve remarkable results. Read success stories and case studies.',
  keywords: [
    'customer success stories',
    'case studies',
    'spend management success',
    'business finance testimonials',
    'corporate cards success',
    'accounts payable case studies',
    'fintech customer stories',
  ],
  openGraph: {
    title: 'Customers - Request Finance',
    description:
      'Discover how leading companies are using Request Finance to transform their business spend management, streamline payments, and achieve remarkable results. Read success stories and case studies.',
    url: 'https://requestfinance.com/customers',
    siteName: 'Request Finance',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Request Finance - Customer Success Stories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customers - Request Finance',
    description:
      'Discover how leading companies are using Request Finance to transform their business spend management, streamline payments, and achieve remarkable results. Read success stories and case studies.',
    images: ['/images/thumbnail.png'],
  },
  alternates: {
    canonical: 'https://requestfinance.com/customers',
  },
}

// Mock data
const mockCategories = [
  { slug: 'case-studies', title: 'Case Studies' },
  { slug: 'success-stories', title: 'Success Stories' },
  { slug: 'testimonials', title: 'Testimonials' },
]

const mockPosts = [
  {
    slug: 'acme-corp-transformation',
    title: 'How Acme Corp Increased Revenue by 150%',
    excerpt: 'Learn how Acme Corp transformed their sales process and achieved record-breaking growth using our platform.',
    publishedAt: '2024-01-15',
    author: { name: 'Sarah Johnson', image: null },
    mainImage: null,
    featured: true,
    categories: ['case-studies'],
  },
  {
    slug: 'techstart-success-story',
    title: 'TechStart Scales from 10 to 100 Customers',
    excerpt: 'Discover how TechStart leveraged our tools to scale their customer base tenfold in just 12 months.',
    publishedAt: '2024-01-10',
    author: { name: 'Michael Chen', image: null },
    mainImage: null,
    featured: true,
    categories: ['success-stories'],
  },
  {
    slug: 'global-solutions-testimonial',
    title: 'Global Solutions: A Partnership Built on Trust',
    excerpt: 'Why Global Solutions chose us as their long-term partner for business growth and innovation.',
    publishedAt: '2024-01-05',
    author: { name: 'Emily Davis', image: null },
    mainImage: null,
    featured: true,
    categories: ['testimonials'],
  },
  {
    slug: 'innovate-inc-case-study',
    title: 'Innovate Inc Reduces Costs by 40%',
    excerpt: 'See how Innovate Inc streamlined operations and significantly reduced operational costs with our solution.',
    publishedAt: '2023-12-20',
    author: { name: 'David Wilson', image: null },
    mainImage: null,
    featured: false,
    categories: ['case-studies'],
  },
  {
    slug: 'startup-xyz-growth',
    title: 'Startup XYZ: From Idea to Market Leader',
    excerpt: 'The inspiring journey of how Startup XYZ became an industry leader with the right tools and support.',
    publishedAt: '2023-12-15',
    author: { name: 'Jennifer Brown', image: null },
    mainImage: null,
    featured: false,
    categories: ['success-stories'],
  },
]

const postsPerPage = 5

async function FeaturedPosts() {
  let featuredPosts = mockPosts.filter(post => post.featured).slice(0, 3)

  if (featuredPosts.length === 0) {
    return
  }

  return (
    <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={post.mainImage}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/customers/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
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
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

async function Categories({ selected }) {
  let categories = mockCategories

  if (categories.length === 0) {
    return
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            'All categories'}
          <ChevronUpDownIcon className="size-4 fill-gray-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/customers"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">All categories</p>
            </Link>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/customers?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-selected:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button variant="outline" href="/customers/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS Feed
      </Button>
    </div>
  )
}

async function Posts({ page, category }) {
  let posts = mockPosts
  
  // Filter by category if provided
  if (category) {
    posts = posts.filter(post => post.categories.includes(category))
  }
  
  // Paginate
  const start = (page - 1) * postsPerPage
  const end = page * postsPerPage
  posts = posts.slice(start, end)

  if (posts.length === 0 && (page > 1 || category)) {
    notFound()
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No customer stories found.</p>
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
              {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
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
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/customers/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function Pagination({ page, category }) {
  function url(page) {
    let params = new URLSearchParams()

    if (category) params.set('category', category)
    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/customers?${params.toString()}` : '/customers'
  }

  let allPosts = category 
    ? mockPosts.filter(post => post.categories.includes(category))
    : mockPosts
  
  let totalPosts = allPosts.length
  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-hover:bg-gray-100',
              'data-active:shadow-sm data-active:ring-1 data-active:ring-black/10',
              'data-active:data-hover:bg-gray-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default async function Customers({ searchParams }) {
  let params = await searchParams
  let page =
    'page' in params
      ? typeof params.page === 'string' && parseInt(params.page) > 1
        ? parseInt(params.page)
        : notFound()
      : 1

  let category =
    typeof params.category === 'string' ? params.category : undefined

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Customers</Subheading>
        <Heading as="h1" className="mt-2">
          Success stories from our customers.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Discover how leading companies are using our platform to transform
          their business and achieve remarkable results.
        </Lead>
      </Container>
      {page === 1 && !category && <FeaturedPosts />}
      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>
      <Footer />
    </main>
  )
}

