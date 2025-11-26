import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import {
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CreditCardIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  BanknotesIcon,
  UserGroupIcon,
  LockClosedIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline'

const iconMap = {
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CreditCardIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  BanknotesIcon,
  UserGroupIcon,
  LockClosedIcon,
  BuildingOfficeIcon,
}

function Benefit({ name, description, icon }) {
  const Icon = iconMap[icon] || BoltIcon
  return (
    <li className="flex items-center gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-950">
        <Icon className="size-6 text-white" />
      </div>
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

export function ProductBenefits({ eyebrow, title, description, benefits }) {
  return (
    <Container className="py-24">
      <Subheading>{eyebrow}</Subheading>
      <Heading as="h3" className="mt-2">
        {title}
      </Heading>
      {description && (
        <p className="mt-6 max-w-3xl text-xl/7 font-medium text-gray-950/75">
          {description}
        </p>
      )}
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {benefits.map((benefit) => (
          <Benefit
            key={benefit.name}
            name={benefit.name}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </ul>
    </Container>
  )
}

