import { getAllProducts } from '@/data/products'
import { getAllUseCases } from '@/data/use-cases'
import { getAllIndustries } from '@/data/industries'
import { getAllAlternatives } from '@/data/alternatives'
import { getAllPosts } from '@/lib/blog'
import { siteUrl } from '@/lib/config'

export default function sitemap() {
  const baseUrl = siteUrl

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternative-to`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/customers`,
      lastModified: new Date('2025-03-13'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  const products = getAllProducts().map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date('2026-01-01'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const useCases = getAllUseCases().map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: new Date('2026-01-01'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industries = getAllIndustries().map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date('2026-01-01'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const alternatives = getAllAlternatives().map((alt) => ({
    url: `${baseUrl}/alternative-to/${alt.slug}`,
    lastModified: new Date('2026-01-01'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  const customerStories = [
    {
      url: `${baseUrl}/customers/streamlining-crypto-accounting-at-scale`,
      lastModified: new Date('2025-03-07'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/customers/polemos`,
      lastModified: new Date('2025-03-12'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/customers/tokenizing-a-real-estate-empire-with-realt`,
      lastModified: new Date('2025-03-13'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  return [
    ...staticPages,
    ...products,
    ...useCases,
    ...industries,
    ...alternatives,
    ...blogPosts,
    ...customerStories,
  ]
}
