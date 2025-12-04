import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export function UseCaseIntro({
  eyebrow,
  title,
  lead,
  paragraphs = [],
  bullets = [],
  image,
  imageAlt,
  buttonText,
  buttonHref = '/demo',
}) {
  return (
    <div className="bg-linear-to-b from-white from-50% to-gray-100 pt-32 pb-32">
      <Container>
        <Subheading>{eyebrow}</Subheading>
        <Heading as="h3" className="mt-2">
          {title}
        </Heading>
        <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
          {lead}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-sm/6 text-gray-600 ${index > 0 ? 'mt-8' : ''}`}
              >
                {paragraph}
              </p>
            ))}
            {bullets.length > 0 && (
              <ul className={`space-y-3 ${paragraphs.length > 0 ? 'mt-8' : ''}`}>
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-baseline gap-3 text-sm/6 text-gray-950">
                    <span className="size-1.5 shrink-0 rounded-full bg-gray-950 translate-y-[-2px]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {buttonText && (
              <div className="mt-6">
                <Button className="w-full sm:w-auto" href={buttonHref}>
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt={imageAlt || ''}
                src={image}
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

