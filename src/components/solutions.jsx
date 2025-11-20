import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'

export function Solutions({ 
  eyebrow, 
  title, 
  description, 
  items = [],
  className = '' 
}) {
  return (
    <div className={className}>
      <Container>
        {eyebrow && <Subheading>{eyebrow}</Subheading>}
        {title && (
          <Heading as="h2" className={eyebrow ? 'mt-2' : ''}>
            {title}
          </Heading>
        )}
        {description && (
          <Lead className="mt-6 max-w-3xl">
            {description}
          </Lead>
        )}
      </Container>
      {items.length > 0 && (
        <div className="relative pt-12 pb-8">
          {/* <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" /> */}
          <Container className="relative">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {items.map((item, index) => (
                <SolutionCard key={index} {...item} />
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}

function SolutionCard({ title, description, content, image }) {
  return (
    <div className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5">
      {image && (
        <img
          alt={title || ''}
          src={image}
          className="aspect-3/2 w-full rounded-2xl object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-8">
        {title && (
          <h3 className="text-xl font-medium tracking-tight text-gray-950">
            {title}
          </h3>
        )}
        {description && (
          <p className="mt-4 text-sm/6 text-gray-600">{description}</p>
        )}
        {content && <div className="mt-8">{content}</div>}
      </div>
    </div>
  )
}

