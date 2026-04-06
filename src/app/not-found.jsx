import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Page Not Found - Request Finance',
  description: 'The page you are looking for could not be found. Explore Request Finance spend management platform.',
}

const helpfulLinks = [
  { label: 'Home', href: '/', description: 'Back to the Request Finance homepage.' },
  { label: 'Pricing', href: '/pricing', description: 'See our plans starting at $300/month.' },
  { label: 'Book a Demo', href: '/demo', description: 'Talk to the team and see the platform live.' },
  { label: 'Blog', href: '/blog', description: 'Insights on spend management and stablecoins.' },
  { label: 'Customers', href: '/customers', description: 'See how other companies use Request Finance.' },
  { label: 'Company', href: '/company', description: 'Learn about our mission and team.' },
]

export default function NotFound() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="py-32 sm:py-48">
        <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
          404 error
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-lg text-lg/7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have moved or no longer exists.
        </p>
        <div className="mt-10 flex gap-4">
          <Button href="/">Go home</Button>
          <Button variant="secondary" href="/demo">
            Book a demo
          </Button>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-12">
          <p className="text-sm font-semibold text-gray-950">Popular pages</p>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {helpfulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex flex-col gap-1 rounded-2xl border border-gray-200 p-6 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-950 group-hover:text-blue-600">
                    {link.label}
                  </span>
                  <span className="text-sm/6 text-gray-500">{link.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
