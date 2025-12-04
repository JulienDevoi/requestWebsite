import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { LogoTimeline2 } from '@/components/logo-timeline-2'
import { Map } from '@/components/map'
import { Heading, Subheading } from '@/components/text'

export function IndustrySolution({ eyebrow, title, description }) {
  return (
    <Container>
      <Subheading>{eyebrow || 'The Solution'}</Subheading>
      <Heading as="h3" className="mt-2 max-w-6xl">
        {title || 'The alternative to the banks who failed your business'}
      </Heading>
      <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
        {description ||
          "Managing company spending with spreadsheets, scattered tools, and slow banking systems create chaos, blind spots, and unnecessary work. It's time for an upgrade."}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          key="accounts-payable"
          eyebrow="Global USD Account"
          title="Each entity gets its own account"
          description="No more sharing cards or accounts. Each entity has its own budget, spending limits, and approvals. For a clean audit trail."
          graphic={
            <img
              src="/images/virtual-account.png"
              alt="Global USD Account"
              className="h-full w-full object-cover"
            />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          key="corporate-cards"
          eyebrow="Corporate cards"
          title="Control your spend"
          description="Issue virtual and physical cards with real-time controls and instant notifications."
          graphic={
            <img
              src="/images/corporate-cards.gif"
              alt="Corporate cards"
              className="h-full w-full object-cover"
            />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          key="on-off-ramp"
          eyebrow="Accounts Payable"
          title="Process bills at lightning speed"
          description="Manage invoices, approvals, and payments all in one place with full audit trails. Whether you have 1 or 10,000 accounts payable per month."
          graphic={
            <div className="h-80 relative overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/images/accounts-payable.mp4" type="video/mp4" />
              </video>
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          key="source-reach"
          eyebrow="Integrations"
          title="Connect with your daily tools"
          description="Connect to and from accounting softwares, banks, and all the other tools you use."
          graphic={<LogoTimeline2 />}
          className="lg:col-span-2"
        />
        <BentoCard
          key="operate-globally"
          eyebrow="Worldwide"
          title="Operate globally"
          description="Pay suppliers and vendors worldwide with competitive FX rates and transparent fees. Support for ACH, Wire, SEPA, SWIFT, SPEI (MXN), Faster Payments (GBP), and stablecoins."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

