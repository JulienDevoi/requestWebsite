import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

const securityFeatures = [
  {
    title: 'Insurance',
    description: 'We partnered with OpenCover to protect you against hacks and protocol issues.',
    image: '/images/insurance.svg',
  },
  {
    title: 'SOC 2 Type 1 audited',
    description:
      'We work with sensitive financial data and therefore follow the best standards to ensure their protection.',
    image: '/images/soc2.png',
  },
  {
    title: 'Double payment detection',
    description:
      "We detect on chain behaviors to prevent double payments so that you're in full confidence.",
    image: '/images/double-payment.svg',
  },
  {
    title: 'Scam vigilance',
    description: 'We do extra work so that no scammer can reach you.',
    image: '/images/scam-vigilance.svg',
  },
]

function SecurityFeature({ title, description, image }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-3xl bg-white shadow-md ring-1 shadow-black/5 ring-black/5">
      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden">
        <img src={image} alt="" className="size-full object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium tracking-tight text-gray-950">
          {title}
        </h3>
        <p className="mt-2 text-sm/6 text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export function Security() {
  return (
    <div className="bg-linear-to-b from-white to-gray-50 pt-8 pb-32">
      <Container>
        <Subheading>Safety first</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl">
         We protect your data and your payments
        </Heading>
        <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
          From the protocols we use to the features and insurances we offer.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {securityFeatures.map((feature, index) => (
            <SecurityFeature
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden">
              <img src="/images/cybersecurity.svg" alt="" className="size-full object-contain" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium tracking-tight text-gray-950">
                Cybersecurity
              </h3>
              <p className="mt-2 text-sm/6 text-gray-600">
                We implement industry-leading security measures to safeguard
                your financial data and transactions, ensuring comprehensive
                protection at every layer of our platform.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

