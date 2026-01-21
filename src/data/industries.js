// Industries data - add new industries here
export const industries = {
  saas: {
    slug: 'saas',
    name: 'SaaS',
    heroTitle: 'Run Your SaaS Finances with unmatched efficiency',
    heroDescription:
      'A modern spend & payments platform built for SaaS companies that want faster operations, lower costs, and full control.',
    heroImage: '/images/saas.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'Fast growth creates financial chaos.',
    introLead:
      'Fast growth creates financial chaos. Multiple tools, scattered data, and manual processes slow down the teams that need to move fastest.',
    introParagraphs: [],
    introBullets: [
      'Juggling dozens of SaaS subscriptions with no central visibility or control',
      'Manual reconciliation between payment processors, banks, and accounting software',
      'Scaling globally means dealing with multiple currencies and payment methods',
      'Engineering and product teams need cards for cloud services, but finance lacks oversight',
      'Burn rate tracking relies on spreadsheets that are always out of date',
      'Vendor payments scattered across different platforms with no audit trail',
      'Month-end close takes days because data lives in too many places',
    ],
    introImage: '/images/saas.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'One platform for all your SaaS financial operations',
    solutionDescription:
      'Request brings together corporate cards, vendor payments, and real-time visibility in a single platform built for high-growth SaaS companies.',
    // Footer CTA customization
    footerEyebrow: 'Built for SaaS',
    footerTitle: 'Ready to scale your SaaS financial operations?',
    footerDescription:
      'Join hundreds of SaaS companies managing their spend with Request. Get started in less than 5 minutes.',
  },
  wholesalers: {
    slug: 'wholesalers',
    name: 'Wholesalers',
    heroTitle: 'Run your finances with enterprise-grade control',
    heroDescription:
      'A modern spend & payments platform built for Wholesalers that want faster operations, lower costs, and full control.',
    heroImage: '/images/wholesalers.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: "Global payments shouldn't be this hard.",
    introLead:
      'Wholesalers operate across borders, but traditional banking makes international payments slow, expensive, and opaque.',
    introParagraphs: [],
    introBullets: [
      'Paying suppliers in 10+ countries means managing multiple banking relationships',
      'FX fees eating into margins on every international transaction',
      'Wire transfers take 3-5 days, causing delays in inventory and fulfillment',
      'No visibility into payment status, so suppliers constantly ask "where is my money?"',
      'Reconciling payments across currencies is a manual nightmare',
      'Auditors require documentation for every cross-border transaction',
      'Different payment terms with each supplier creates cash flow unpredictability',
      'Opening bank accounts in new markets takes weeks or months',
    ],
    introImage: '/images/wholesalers.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Global payments made simple and transparent',
    solutionDescription:
      'Request gives wholesalers the tools to pay suppliers worldwide with competitive rates, instant visibility, and complete audit trails.',
    // Why It Works section
    whyItWorks: {
      title: 'Reduce AP payment operations by 70–80% with automated workflows',
      description:
        'Support both stablecoins & fiat seamlessly. Faster payments mean better supplier relationships and stronger discount negotiation power.',
      reasons: [
        {
          title: 'Pay suppliers across 190+ countries quickly and cheaply',
          description: 'Cut costs on international transfers and FX spreads. Faster payments improve supplier relationships and strengthen discount negotiation power.',
          icon: 'GlobeAltIcon',
        },
        {
          title: 'Automate reconciliation and export clean data',
          description: 'Automate reconciliation and export clean data to accounting tools. Reduce manual work and ensure accurate financial records.',
          icon: 'ArrowPathIcon',
        },
        {
          title: 'Keep full control and avoid fraud',
          description: 'Maintain control with approval layers, roles, and payment limits. Avoid fraud with secure payment instructions and KYB checks.',
          icon: 'DocumentTextIcon',
        },
      ],
    },
    // Footer CTA customization
    footerEyebrow: 'Built for wholesalers',
    footerTitle: 'Ready to streamline your supplier payments?',
    footerDescription:
      'Simplify cross-border transactions and maintain complete audit trails. Your account setup takes less than 5 minutes.',
  },
  affiliates: {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    heroTitle: 'Run your agency finances at the speed of campaigns',
    heroDescription:
      'A modern spend & payments platform built for marketing agencies that need to move fast, pay globally, and keep clients happy.',
    heroImage: '/images/affiliates.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: "Your finances can't keep up with your campaigns.",
    introLead:
      'Marketing agencies juggle multiple clients, vendors, and freelancers across the globe. Traditional banking makes every payment a bottleneck.',
    introParagraphs: [],
    introBullets: [
      'Paying freelancers and contractors across 20+ countries is slow and expensive',
      'Ad spend across Google, Meta, and TikTok requires cards with high limits and real-time controls',
      'Client billing and vendor payments live in different systems with no unified view',
      'Chasing receipts from team members delays month-end close',
      'FX fees eat into margins on international influencer and media payments',
      'Scaling up campaigns means scaling up payment complexity',
      'No visibility into spending until credit card statements arrive',
      'Managing multiple client budgets requires constant manual reconciliation',
    ],
    introImage: '/images/affiliates.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'One platform for all your agency payments',
    solutionDescription:
      'Request gives marketing agencies corporate cards for ad spend, streamlined vendor payments, and real-time visibility across all client accounts.',
    // Why It Works section
    whyItWorks: {
      title: 'Reduce payment ops workload by 80% with automated workflows',
      description:
        'Request Finance enables stablecoin payments to all countries worldwide, as well as fiat payments to over 190 countries, in 20+ currencies.',
      reasons: [
        {
          title: 'Pay affiliates, creators, and influencers anywhere instantly',
          description: 'Eliminate delays and keep campaigns running smoothly.',
          icon: 'GlobeAltIcon',
        },
        {
          title: 'Cut international transfer fees and avoid banking friction',
          description: 'Reduce costs and avoid banking friction with competitive FX rates and transparent fees on all international payments.',
          icon: 'CreditCardIcon',
        },
        {
          title: 'Automated workflows reduce payment ops workload',
          description: 'Batch pay affiliates and influencers. Automate invoice generation and payments.',
          icon: 'BuildingOfficeIcon',
        },
      ],
    },
    // Footer CTA customization
    footerEyebrow: 'Built for Marketing Agencies',
    footerTitle: 'Ready to streamline your agency finances?',
    footerDescription:
      'Manage ad spend, pay vendors globally, and keep client budgets on track. Get started in less than 5 minutes.',
  },
  web3: {
    slug: 'web3',
    name: 'Web3',
    heroTitle: 'Run Your Web3 Finances the modern way',
    heroDescription:
      'A modern spend & payments platform built for Web3 companies that want faster operations, lower costs, and full control.',
    heroImage: '/images/web3.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: "Stablecoins and fiat don't play well together (yet).",
    introLead:
      'Web3 companies juggle stablecoins and fiat, but the tools to manage both are disconnected, manual, and not built for compliance.',
    introParagraphs: [],
    introBullets: [
      'Reconciliation is a nightmare: matching Etherscan with invoices and hunting for missing receipts',
      'Dozens or hundreds of payments need to be made quickly, but wallets are slow and error-prone',
      'Human errors like double payments or sending to the wrong wallet address',
      'Need corporate cards for cloud services and events, but crypto-native options are limited',
      'Vendors want fiat, investors send fiat, but you operate in stablecoins',
      'Offramping to pay vendors requires multiple steps and platforms',
      'CFO needs proper documentation to justify every crypto flow for audits and compliance',
      'No spend management software works with self-custodial wallets (MPC or multisig)',
      'Finance team lacks centralized visibility, with payouts scattered across wallets and chains',
    ],
    introImage: '/images/web3.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Stablecoins and fiat, finally unified',
    solutionDescription:
      'Request bridges crypto and traditional finance, giving Web3 companies the tools to manage treasury, pay vendors, and stay compliant, all in one place.',
    // Why It Works section
    whyItWorks: {
      title: 'Stay compliant and save time with Web3-native finance operations',
      description:
        'Web3 companies handle stablecoins, crypto, and fiat. They need an all-in-one finance solution that is adapted to their needs.',
      reasons: [
        {
          title: 'Pass audits with ease',
          description: 'Accountants and auditors can access the platform and have all documentation in one place. Web3 businesses must be proactive in their compliance.',
          icon: 'DocumentTextIcon',
        },
        {
          title: 'Save time and keep control',
          description: 'C-level executives in Web3 companies handle numerous payments. With self-custodial setup, they delegate bill management and approvals to team members while maintaining control.',
          icon: 'ArrowPathIcon',
        },
        {
          title: 'Business cards for your entire team',
          description: 'Business cards are not easily accessible for Web3 businesses because of their nature. Request Finance provides business cards for the entire team, regardless of their location.',
          icon: 'CreditCardIcon',
        },
      ],
    },
    // Footer CTA customization
    footerEyebrow: 'Built for Web3',
    footerTitle: 'Ready to bridge stablecoins and traditional finance?',
    footerDescription:
      'Manage your stablecoin treasury and fiat operations in one place. Your account setup takes less than 5 minutes.',
  },
  ecommerce: {
    slug: 'ecommerce',
    name: 'E-commerce',
    heroTitle: 'Run Your E-commerce Finances at scale',
    heroDescription:
      'A modern spend & payments platform built for e-commerce businesses that want faster operations, lower costs, and full control.',
    heroImage: '/images/e-commerce.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'High volume, thin margins, zero room for error.',
    introLead:
      'E-commerce businesses process thousands of transactions but struggle with supplier payments, multi-currency complexity, and cash flow visibility.',
    introParagraphs: [],
    introBullets: [
      'Paying suppliers across multiple countries with different currencies and payment terms',
      'Marketplace payouts and seller disbursements require manual processing',
      'FX fees and poor exchange rates eating into already thin margins',
      'No real-time visibility into cash flow across multiple sales channels',
      'Reconciling payments from Shopify, Amazon, and other platforms is time-consuming',
      'Seasonal inventory purchases require flexible payment timing',
      'Returns and refunds create reconciliation headaches',
      'Ad spend across Google, Meta, and TikTok needs better tracking and controls',
    ],
    introImage: '/images/e-commerce.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Financial operations built for e-commerce speed',
    solutionDescription:
      'Request gives e-commerce businesses the tools to manage supplier payments, marketplace disbursements, and multi-channel finances in one platform.',
    // Why It Works section
    whyItWorks: {
      title: 'Reduce AP payment operations by 70–80% with automated workflows',
      description:
        'Support both stablecoins & fiat seamlessly. Faster payments mean better supplier relationships and stronger discount negotiation power.',
      reasons: [
        {
          title: 'Pay suppliers across 190+ countries quickly and cheaply',
          description: 'Cut costs on international transfers and FX spreads. Faster payments improve supplier relationships and strengthen discount negotiation power.',
          icon: 'GlobeAltIcon',
        },
        {
          title: 'Automate reconciliation and export clean data',
          description: 'Automate reconciliation and export clean data to accounting tools. Reduce AP payment operations by 70–80% with automated workflows.',
          icon: 'ArrowPathIcon',
        },
        {
          title: 'Keep full control with approval layers and limits',
          description: 'Maintain control with approval layers, roles, and payment limits. Ensure secure and compliant payment processes.',
          icon: 'DocumentTextIcon',
        },
      ],
    },
    // Footer CTA customization
    footerEyebrow: 'Built for E-commerce',
    footerTitle: 'Ready to streamline your e-commerce finances?',
    footerDescription:
      'Manage suppliers, marketplaces, and multi-currency payments in one place. Get started in less than 5 minutes.',
  },
  healthcare: {
    slug: 'healthcare',
    name: 'Healthcare',
    heroTitle: 'Run Your Healthcare Finances with precision',
    heroDescription:
      'A modern spend & payments platform built for healthcare organizations that want faster operations, lower costs, and full compliance.',
    heroImage: '/images/healthcare.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'Complex payments meet strict compliance requirements.',
    introLead:
      'Healthcare organizations face unique financial challenges: vendor complexity, regulatory requirements, and the need for complete audit trails.',
    introParagraphs: [],
    introBullets: [
      'Managing payments to hundreds of medical suppliers and service providers',
      'Strict compliance requirements demand complete documentation for every transaction',
      'Procurement processes are slow and involve multiple approval layers',
      'Insurance reimbursements and patient payments create reconciliation complexity',
      'Equipment purchases and maintenance contracts require careful budget tracking',
      'Staff expense management across multiple facilities and departments',
      'Vendor onboarding is slow due to compliance and verification requirements',
      'Audit preparation takes weeks of gathering documentation and transaction records',
    ],
    introImage: '/images/healthcare.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Compliant payments, simplified operations',
    solutionDescription:
      'Request provides healthcare organizations with audit-ready payment infrastructure, automated approvals, and complete visibility across all facilities.',
    // Why It Works section
    whyItWorks: {
      title: 'Fast international payments at low cost for vital healthcare activities',
      description:
        'Healthcare actors have vital activities; they need fast international payments at a low cost. Request Finance enables instant stablecoin payments to most countries worldwide, as well as fiat payments to over 190 countries, in 20+ currencies.',
      reasons: [
        {
          title: 'Fast payments across 190+ countries',
          description: 'Request Finance enables instant stablecoin payments to most countries worldwide, as well as fiat payments to over 190 countries, in 20+ currencies.',
          icon: 'GlobeAltIcon',
        },
        {
          title: 'Control over fees with no hidden costs',
          description: 'CFOs at Healthcare companies have control over fees, FX fees, and there are no hidden costs.',
          icon: 'CreditCardIcon',
        },
        {
          title: 'Automations empower finance and accounting',
          description: 'Automations empower the finance and accounting departments with reconciliation and accounting integration.',
          icon: 'ArrowPathIcon',
        },
      ],
    },
    // Footer CTA customization
    footerEyebrow: 'Built for Healthcare',
    footerTitle: 'Ready to modernize your healthcare payments?',
    footerDescription:
      'Streamline vendor payments and stay audit-ready. Your account setup takes less than 5 minutes.',
  },
  'online-travel-agencies': {
    slug: 'online-travel-agencies',
    name: 'Online Travel Agencies',
    heroTitle: 'Run Your Online Travel Agency Finances with global reach',
    heroDescription:
      'A modern spend & payments platform built for Online Travel Agencies that need fast, low-cost payments to many countries worldwide.',
    heroImage: '/images/online-travel-agency.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'Global payments shouldn\'t slow down your business.',
    introLead:
      'Online Travel Agencies operate globally, but traditional banking makes international payments slow, expensive, and unpredictable.',
    introParagraphs: [],
    introBullets: [
      'Margins are thin, and online travel agencies have numerous payments to make abroad; therefore, international payment fees are eroding their margin',
      'Banks often charge unfair FX fees of up to 1%, and sometimes as much as 3%',
      'The currency volatility can have a big impact on the Online Travel Agencies’ (OTA) costs',
      'Suppliers, such as hotels and airlines, often demand payment within 48 hours, whereas cross-border transfers can take more than twice as long',
      'Reconciling payments across currencies is a manual nightmare',
      'Paying vendors/contractors internationally is a struggle because of delays and inefficiencies. SWIFT wires can take up to 5 days',
      'Regulations and scrutiny sometimes lead to payments that simply don’t go through',
      'Hundreds of payments need to be made weekly, sometimes even daily',
      'Reconciliation and multi-currency mismatches can pose significant challenges for the finance team',
    ],
    introImage: '/images/online-travel-agency.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Global payments made simple and transparent',
    solutionDescription:
      'Request gives Online Travel Agencies the tools to pay suppliers worldwide with competitive rates, instant visibility, and complete audit trails.',
    // Why It Works section
    whyItWorks: {
      title: 'Online Travel Agencies need fast payments at a low cost to many countries worldwide',
      description:
        'Request Finance enables stablecoin payments to all countries worldwide, as well as fiat payments to over 190 countries, in 20+ currencies.',
      reasons: [
        {
          title: 'Fast payments at low cost',
          description: 'Request Finance enables stablecoin payments to all countries worldwide, as well as fiat payments to over 190 countries, in 20+ currencies.',
          icon: 'GlobeAltIcon',
        },
        {
          title: 'Subscription-based software',
          description: 'CFOs at Online Travel Agencies prefer a subscription-based software so that they don\'t struggle with surprising FX fees.',
          icon: 'CreditCardIcon',
        },
        {
          title: 'Finance controls and automations',
          description: 'Finance controls and automations empower the C-Level executives with payments.',
          icon: 'BuildingOfficeIcon',
        },
      ],
    },
    // Footer CTA customization
    footerEyebrow: 'Built for Online Travel Agencies',
    footerTitle: 'Ready to streamline your global payments?',
    footerDescription:
      'Simplify cross-border transactions and maintain complete audit trails. Your account setup takes less than 5 minutes.',
  },
  'gaming-betting': {
    slug: 'gaming-betting',
    name: 'Gaming & Betting',
    heroTitle: 'Run Your Gaming & Betting Finances at scale',
    heroDescription:
      'A modern spend & payments platform built for gaming and betting operators that need to automate high-volume, cross-border payment operations.',
    heroImage: '/images/gaming-betting.jpg',
    // Intro section - The Problem
    introEyebrow: 'The Problem',
    introTitle: 'Complex, high-volume, cross-border payment operations.',
    introLead:
      'Gaming and betting operators run some of the most complex, high-volume, cross-border payment operations in the world. Teams struggle with fragmented payment methods, manual reconciliation, and banking friction.',
    introParagraphs: [],
    introBullets: [
      'Thousands of monthly payouts to affiliates, agents, creators, streamers, and traffic partners',
      'Cross-border vendor payments with high failure rates and long settlement times',
      'Expensive USD/EUR transfers to ad networks, data providers, and platform vendors',
      'Partners in high-risk or hard-to-pay regions (LATAM, MENA, Africa, Balkans, Asia)',
      'Fragmented payment methods (bank transfer, crypto, PSPs, wallets)',
      'Manual reconciliation for settlement cycles (weekly/daily)',
      'Complex invoicing workflows with Sportradar, Genius Sports, Evolution Gaming and platform providers',
      'Lack of visibility over payouts, commissions, and rev-share settlements',
      'Difficulties paying remote dev teams, creatives, agencies, and contractors',
      'Banking friction due to industry risk classification',
      'Compliance overhead: KYB, AML checks, audit-ready reporting',
    ],
    introImage: '/images/gaming-betting.jpg',
    introButtonText: 'Open my account',
    // Solution section
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Automate mass payouts and vendor payments across 190+ countries',
    solutionDescription:
      'Request Finance automates how gaming and betting companies pay affiliates, creators, vendors, contractors, data providers, and teams across 190+ countries using stablecoins or connected fiat rails.',
    // Why It Works section
    whyItWorks: {
      title: 'Reduce payment ops workload by 80% with automated workflows',
      description:
        'Pay affiliates, creators, and agents anywhere instantly. Cut international transfer fees and avoid banking friction. Move money using stablecoins or fiat via partners seamlessly via the Global USD Account.',
      reasons: [
        {
          title: 'Pay affiliates, creators, and agents anywhere instantly',
          description: 'Pay hundreds or thousands of partners instantly in stablecoins, crypto or fiat. Handle high-risk regions without traditional banking hurdles.',
          icon: 'GlobeAltIcon',
        },
        {
          title: 'Automate reconciliation and streamline accounting',
          description: 'Streamline accounting with automated reconciliation and unified exports. Clean, audit-ready export for finance teams managing complex rev-share structures.',
          icon: 'ArrowPathIcon',
        },
        {
          title: 'Keep full control and stay compliant',
          description: 'Keep full control with roles, approvals & treasury permissions. Stay compliant with built-in KYB/KYC requirements. Reliable record-keeping for regulators & audits.',
          icon: 'DocumentTextIcon',
        },
      ],
    },
    // Footer CTA customization
    footerEyebrow: 'Built for Gaming & Betting',
    footerTitle: 'Ready to automate your gaming payment operations?',
    footerDescription:
      'Consolidate all payments in one dashboard. Automate mass payouts and vendor payments. Your account setup takes less than 5 minutes.',
  },
}

// Helper to get all industries as an array
export function getAllIndustries() {
  return Object.values(industries)
}

// Helper to get industry by slug
export function getIndustryBySlug(slug) {
  return Object.values(industries).find((industry) => industry.slug === slug) || null
}

// Helper to get all industry slugs (for static generation)
export function getAllIndustrySlugs() {
  return Object.values(industries).map((industry) => industry.slug)
}

