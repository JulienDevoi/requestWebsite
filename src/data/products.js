export const products = [
  {
    slug: 'corporate-cards',
    name: 'Corporate Cards',
    heroTitle: 'Corporate cards that work globally',
    heroDescription:
      'Issue virtual and physical cards instantly. Control spending in real-time. No hidden fees, no FX surprises.',
    heroImage: '/screenshots/app.png',
    benefitsEyebrow: 'Why choose our corporate cards',
    benefitsTitle: 'Everything you need to manage spend',
    benefitsDescription:
      'From instant issuance to real-time controls, our corporate cards give you full visibility and control over every dollar spent.',
    benefits: [
      {
        name: 'Instant Issuance',
        description: 'Create virtual cards in seconds for your team or vendors',
        icon: 'BoltIcon',
      },
      {
        name: 'Global Acceptance',
        description: 'Spend anywhere Visa or Mastercard is accepted worldwide',
        icon: 'GlobeAltIcon',
      },
      {
        name: 'Built-in Security',
        description: 'Set spending limits, freeze cards, and control access in real-time',
        icon: 'ShieldCheckIcon',
      },
      {
        name: 'Zero FX Fees',
        description: 'No hidden currency conversion fees on international purchases',
        icon: 'CurrencyDollarIcon',
      },
      {
        name: 'Real-time Tracking',
        description: 'Monitor all transactions as they happen with instant notifications',
        icon: 'ChartBarIcon',
      },
      {
        name: 'Unlimited Cards',
        description: 'Issue as many virtual cards as you need at no extra cost',
        icon: 'CreditCardIcon',
      },
    ],
  },
  {
    slug: 'virtual-account',
    name: 'Virtual Account',
    heroTitle: 'One account per entity, zero complexity',
    heroDescription:
      'Get a dedicated virtual account when you sign up. Top up instantly, manage multiple entities, and keep your finances organized.',
    heroImage: '/screenshots/virtual-account.png',
    benefitsEyebrow: 'Why choose virtual accounts',
    benefitsTitle: 'Simplify your business banking',
    benefitsDescription:
      'A dedicated account for each entity, with instant top-ups, multi-currency support, and complete visibility over your funds.',
    benefits: [
      {
        name: 'Instant Setup',
        description: 'Get your account ready in minutes, not weeks like traditional banks',
        icon: 'BoltIcon',
      },
      {
        name: 'One Account Per Entity',
        description: 'Keep finances organized with dedicated accounts for each business unit',
        icon: 'BuildingOfficeIcon',
      },
      {
        name: 'Easy Top-ups',
        description: 'Fund your account instantly via bank transfer or card',
        icon: 'ArrowPathIcon',
      },
      {
        name: 'Multi-currency Support',
        description: 'Hold and manage funds in multiple currencies from one dashboard',
        icon: 'CurrencyDollarIcon',
      },
      {
        name: 'Complete Visibility',
        description: 'Track every transaction with real-time balance updates',
        icon: 'ChartBarIcon',
      },
      {
        name: 'Secure & Compliant',
        description: 'Bank-grade security with full regulatory compliance',
        icon: 'ShieldCheckIcon',
      },
    ],
  },
  {
    slug: 'accounts-payable',
    name: 'Accounts Payable',
    heroTitle: 'A month of AP done in minutes',
    heroDescription:
      'Process bills, accelerate approvals, and manage cash flow 2.4x faster than legacy software.',
    heroImage: '/images/accounts-payable.mp4',
    benefitsEyebrow: 'Why choose our accounts payable',
    benefitsTitle: 'Bill processing, reimagined',
    benefitsDescription:
      'From invoice capture to payment execution, automate your entire AP workflow and close the books faster.',
    benefits: [
      {
        name: 'Smart Invoice Capture',
        description: 'Auto-extract data from invoices with AI-powered OCR',
        icon: 'DocumentTextIcon',
      },
      {
        name: 'Accelerated Approvals',
        description: 'Custom approval workflows that route to the right people automatically',
        icon: 'ClockIcon',
      },
      {
        name: 'Batch Payments',
        description: 'Pay hundreds of vendors in one click across multiple currencies',
        icon: 'BanknotesIcon',
      },
      {
        name: 'Cash Flow Control',
        description: 'Schedule payments strategically to optimize your working capital',
        icon: 'ChartBarIcon',
      },
      {
        name: 'Vendor Management',
        description: 'Centralized vendor database with payment history and documents',
        icon: 'UserGroupIcon',
      },
      {
        name: 'Audit-ready Records',
        description: 'Complete paper trail with automatic receipt matching',
        icon: 'ShieldCheckIcon',
      },
    ],
  },
]

export function getAllProducts() {
  return products
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}

export function getAllProductSlugs() {
  return products.map((product) => product.slug)
}

