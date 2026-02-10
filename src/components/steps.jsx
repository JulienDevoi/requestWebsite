import { Container } from './container'
import { Subheading, Heading } from './text'
import { Button } from './button'

export function Steps() {
  const steps = [
    {
      number: '1',
      title: 'Open your account',
      description: 'Complete your Know Your Business verification quickly and securely or do it later.',
    },
    {
      number: '2',
      title: 'Top up your account',
      description: 'Deposit any currency: fiat or stablecoin. Flexible funding options for your business needs.',
    },
    {
      number: '3',
      title: 'You are set up!',
      description: 'Your finance team is ready to go. Control, approve, and monitor business spend in real time.',
    },
  ]

  return (
    <div className="pt-8 pb-32">
      <Container>
        <Subheading>Get started</Subheading>
        <Heading as="h2" className="mt-2 max-w-6xl">
          3 steps to transform your company's spend management
        </Heading>
        {/*<p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
          Managing company spending with spreadsheets, scattered tools, and slow banking systems creates chaos, blind spots, and unnecessary work. It's time for an upgrade.
        </p>*/}
        <div className="mt-16 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-gray-200" />
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col"
              >
                {/* Number badge */}
                <div className="flex items-center mb-6">
                  <div className="relative flex size-12 items-center justify-center rounded-full bg-gray-950 text-white text-xl font-medium z-10">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-gray-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm/6 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*<div className="mt-12 flex justify-center">
          <Button href="/demo">Book a demo</Button>
        </div>*/}
      </Container>
    </div>
  )
}

