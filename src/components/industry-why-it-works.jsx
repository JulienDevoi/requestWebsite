import {
  BuildingOfficeIcon,
  CreditCardIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

const iconMap = {
  GlobeAltIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ArrowPathIcon,
}

function ReasonItem({ title, description, icon: Icon }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <Icon className="size-6 text-gray-950" />
      </div>
      <div className="text-sm/6">
        <h3 className="font-medium text-gray-950">{title}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>
    </li>
  )
}

export function IndustryWhyItWorks({ title, description, reasons }) {
  return (
    <Container className="mt-8 mb-32">
      <Subheading>Why It Works</Subheading>
      <Heading as="h3" className="mt-2">
        {title}
      </Heading>
      <p className="mt-8 max-w-5xl text-xl/7 font-medium text-gray-950/75 sm:text-1xl/8">
        {description}
      </p>
      {reasons && reasons.length > 0 && (
        <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon]
            return (
              <ReasonItem
                key={index}
                title={reason.title}
                description={reason.description}
                icon={IconComponent}
              />
            )
          })}
        </ul>
      )}
    </Container>
  )
}

