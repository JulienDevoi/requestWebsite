import { getAllProducts } from '@/data/products'
import { getAllUseCases } from '@/data/use-cases'
import { getAllIndustries } from '@/data/industries'

export default function sitemap() {
  const baseUrl = 'https://requestfinance.com'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Product pages
  const products = getAllProducts().map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Use case pages
  const useCases = getAllUseCases().map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Industry pages
  const industries = getAllIndustries().map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Blog posts - using mock data slugs
    {
      url: `${baseUrl}/blog/introducing-radiant-2-0`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/how-to-improve-sales-process`,
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/radiant-raises-series-b`,
      lastModified: new Date('2024-01-05'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  // Customer pages
  const customerPages = [
    {
      url: `${baseUrl}/customers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Customer stories - using mock data slugs
    {
      url: `${baseUrl}/customers/acme-corp-transformation`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/customers/techstart-success-story`,
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/customers/global-solutions-testimonial`,
      lastModified: new Date('2024-01-05'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  return [
    ...staticPages,
    ...products,
    ...useCases,
    ...industries,
    ...blogPages,
    ...customerPages,
  ]
}
