// Use cases data - add new use cases here
export const useCases = {
  'affiliate-payments': {
    slug: 'affiliate-payments',
    name: 'Affiliate Payments',
    heroTitle: 'Affiliate payments at scale',
    heroDescription:
      'A modern payout platform built for businesses that need to pay hundreds or thousands of affiliates quickly, accurately, and globally.',
    heroImage: '/images/affiliates.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'Manual payouts are killing your growth.',
    introLead:
      'Your affiliate network is growing, but your payment process is stuck in spreadsheets and manual bank transfers.',
    introParagraphs: [],
    introBullets: [
      'Paying hundreds of affiliates manually takes days every payment cycle',
      'Affiliates in different countries need different currencies and payment methods',
      'Commission tracking lives in spreadsheets prone to errors and disputes',
      'Double payments and incorrect amounts damage partner relationships',
      'No self-service portal, so affiliates constantly ask about payment status',
      'Tax documentation and compliance varies by country and is hard to manage',
      'Bank fees on international transfers eat into your payout budget',
      'Reconciling payouts with campaign performance is a manual process',
    ],
    introImage: '/images/affiliates.jpg',
    introButtonText: 'Book a demo',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Automate payouts to your entire network',
    solutionDescription:
      'Request lets you pay hundreds of affiliates in one click with multi-currency support, transparent tracking, and self-service portals.',
    // Footer CTA customization
    footerEyebrow: 'Built for Affiliate Payments',
    footerTitle: 'Ready to automate your affiliate payouts?',
    footerDescription:
      'Pay your entire network in minutes, not days. Get started in less than 5 minutes.',
  },
  'recurring-payments': {
    slug: 'recurring-payments',
    name: 'Recurring Payments',
    heroTitle: 'Recurring payments on autopilot',
    heroDescription:
      'A modern payment platform built for businesses that need to manage subscriptions, retainers, and regular vendor payments effortlessly.',
    heroImage: '/images/saas.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'Recurring payments require constant attention.',
    introLead:
      'Managing subscriptions, retainers, and regular vendor payments manually creates unnecessary work and risk of missed payments.',
    introParagraphs: [],
    introBullets: [
      'Tracking payment due dates across dozens of vendors and subscriptions',
      'Manual payments mean risk of late fees and service disruptions',
      'No visibility into upcoming payment obligations and cash flow impact',
      'Vendor payment terms vary, making scheduling complex',
      'Subscription sprawl leads to paying for unused services',
      'Approval workflows for recurring payments are cumbersome',
      'Reconciling recurring payments with contracts is time-consuming',
      'No alerts for price changes or contract renewals',
    ],
    introImage: '/images/saas.jpg',
    introButtonText: 'Book a demo',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Set it and forget it payments',
    solutionDescription:
      'Request automates your recurring payments with smart scheduling, approval workflows, and complete visibility into your payment calendar.',
    // Footer CTA customization
    footerEyebrow: 'Built for Recurring Payments',
    footerTitle: 'Ready to automate your recurring payments?',
    footerDescription:
      'Never miss a payment again. Get started in less than 5 minutes.',
  },
  'import-export': {
    slug: 'import-export',
    name: 'Import/Export',
    heroTitle: 'International trade payments simplified',
    heroDescription:
      'A modern payment platform built for importers and exporters who need fast, affordable, and transparent cross-border transactions.',
    heroImage: '/images/wholesalers.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'Cross-border payments are slow and expensive.',
    introLead:
      'International trade requires fast, reliable payments, but traditional banking makes cross-border transactions painful and costly.',
    introParagraphs: [],
    introBullets: [
      'Wire transfers take 3-5 business days, delaying shipments and inventory',
      'Hidden FX fees and poor exchange rates eat into profit margins',
      'No visibility into payment status, leaving suppliers asking "where is my money?"',
      'Different payment methods required for different countries and suppliers',
      'Compliance documentation for international transfers is complex',
      'Managing multiple banking relationships across countries',
      'Letter of credit and trade finance processes are outdated',
      'Reconciling payments with customs and shipping documents is manual',
    ],
    introImage: '/images/wholesalers.jpg',
    introButtonText: 'Book a demo',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Global payments at local speed',
    solutionDescription:
      'Request enables fast, transparent international payments with competitive FX rates, real-time tracking, and complete audit trails for trade compliance.',
    // Footer CTA customization
    footerEyebrow: 'Built for Import/Export',
    footerTitle: 'Ready to simplify your trade payments?',
    footerDescription:
      'Pay suppliers worldwide with speed and transparency. Get started in less than 5 minutes.',
  },
}

// Helper to get all use cases as an array
export function getAllUseCases() {
  return Object.values(useCases)
}

// Helper to get use case by slug
export function getUseCaseBySlug(slug) {
  return useCases[slug] || null
}

// Helper to get all use case slugs (for static generation)
export function getAllUseCaseSlugs() {
  return Object.keys(useCases)
}

