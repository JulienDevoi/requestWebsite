export function CryptoTreasuryComparison() {
  const rows = [
    { dimension: 'Market hours', tradfi: 'Business hours, weekday trading, settlement in days', crypto: '24/7/365. Your position can swing while you sleep' },
    { dimension: 'Security model', tradfi: 'FDIC insurance, SIPC coverage, bank recovery processes', crypto: '"Not your keys, not your coins." You are your own bank' },
    { dimension: 'Volatility', tradfi: 'A bad day: 1-2% bond move, 5% equity swing', crypto: 'A normal day: 10-20% moves on BTC. Altcoins can double or halve' },
    { dimension: 'Regulation', tradfi: 'Established frameworks, clear compliance playbooks', crypto: 'Still being written. Varies by jurisdiction, changes frequently' },
    { dimension: 'Liquidity', tradfi: 'Deep markets, reliable even during stress', crypto: 'Can freeze precisely when you need it most' },
    { dimension: 'Technology', tradfi: 'Bloomberg terminals, mature bank platforms', crypto: 'Blockchain keys, wallet management, rapidly evolving tooling' },
    { dimension: 'Pace of change', tradfi: 'Gradual, telegraphed, predictable', crypto: 'What worked last year might be obsolete today' },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Crypto treasury vs. traditional treasury
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Key differences that require fundamentally new approaches
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Dimension</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Traditional</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">Crypto</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.dimension} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="whitespace-nowrap py-3 pr-4 text-sm font-medium text-gray-950">{row.dimension}</td>
                <td className="py-3 pr-4 text-sm text-gray-500">{row.tradfi}</td>
                <td className="py-3 text-sm text-gray-700">{row.crypto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CryptoTreasuryCashRatio() {
  const rows = [
    { metric: 'Monthly net burn', example: '550,000 USDC + 50,000 in native tokens', tells: 'How fast you are consuming reserves' },
    { metric: 'Estimated runway', example: '18.5 months', tells: 'Assumes token holds its value. Often optimistic' },
    { metric: 'Cash ratio runway', example: '~9 months', tells: 'If token drops to zero, this is your real runway' },
    { metric: 'Treasury composition', example: '83.3% native token, 16.7% USDC', tells: 'Dangerous currency mismatch between assets and liabilities' },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Cash ratio: a more honest measure of runway
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Example DAO treasury metrics
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Metric</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Example DAO</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">What it tells you</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.metric} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="whitespace-nowrap py-3 pr-4 text-sm font-medium text-gray-950">{row.metric}</td>
                <td className="py-3 pr-4 text-sm text-gray-700">{row.example}</td>
                <td className="py-3 text-sm text-gray-500">{row.tells}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CryptoTreasuryHedging() {
  const rows = [
    {
      instrument: 'Put options',
      how: 'Buy the right to sell a token at a specific price on a future date. If price drops below strike, exercise the option.',
      consideration: 'Has an expiration date. Must be rolled over to maintain the hedge.',
    },
    {
      instrument: 'Futures contracts',
      how: 'Agree to buy or sell at a set price on a future date. Short futures to profit if the asset drops.',
      consideration: 'Also expires. Requires stablecoin reserve to access most platforms.',
    },
    {
      instrument: 'Perpetual futures',
      how: 'Similar to futures but with no expiration. Create a "synthetic dollar" position by shorting your holdings.',
      consideration: 'Watch the funding rate. Short positions may incur fees. Manage leverage to avoid liquidation.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Hedging instruments for crypto treasuries
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Common derivatives used to protect against drawdowns
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Instrument</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">How it works</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">Key consideration</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.instrument} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="whitespace-nowrap py-3 pr-4 text-sm font-medium text-gray-950">{row.instrument}</td>
                <td className="py-3 pr-4 text-sm text-gray-700">{row.how}</td>
                <td className="py-3 text-sm text-gray-500">{row.consideration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CryptoTreasuryCashCategory() {
  const rows = [
    {
      category: 'Operating cash',
      tradfi: 'Bank deposits, money market instruments',
      defi: 'Stablecoins, money market protocols',
      risk: 'Most liquid, lowest risk',
    },
    {
      category: 'Reserve cash',
      tradfi: 'US Treasuries, commercial paper',
      defi: 'Stablecoins, staking protocols',
      risk: 'Moderate liquidity and risk',
    },
    {
      category: 'Strategic cash',
      tradfi: 'Investment-grade bonds, alternatives',
      defi: 'Real-world assets, venture, token buybacks',
      risk: 'Less liquid, higher risk/return',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Cash categorization: TradFi vs. DeFi equivalents
        </p>
        <p className="mt-1 text-xs text-gray-400">
          How to think about surplus capital allocation
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Cash category</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">TradFi</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">DeFi</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">Risk / return</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.category} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="whitespace-nowrap py-3 pr-4 text-sm font-medium text-gray-950">{row.category}</td>
                <td className="py-3 pr-4 text-sm text-gray-500">{row.tradfi}</td>
                <td className="py-3 pr-4 text-sm text-gray-700">{row.defi}</td>
                <td className="py-3 text-sm text-gray-500">{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CryptoTreasuryMarketRisk() {
  const rows = [
    {
      strategy: 'Diversification',
      definition: 'Assets that are positively but not perfectly correlated with your portfolio, on average.',
      helps: 'Reduces concentration risk. A basket of fiat-backed stablecoins across different jurisdictions beats holding USDC alone, as the SVB/Circle depeg showed.',
    },
    {
      strategy: 'Hedging',
      definition: 'Assets that are uncorrelated or negatively correlated with your portfolio, on average.',
      helps: 'Protects against expected drawdowns using derivatives, currency hedging, or interest rate management.',
    },
    {
      strategy: 'Safe havens',
      definition: 'Assets that are uncorrelated or negatively correlated, specifically during market stress.',
      helps: 'The last line of defense when everything else drops. Different from a hedge, which works on average conditions.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Three approaches to market risk
        </p>
        <p className="mt-1 text-xs text-gray-400">
          How each strategy protects your treasury under different conditions
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Strategy</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Definition</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">When it helps</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.strategy} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="whitespace-nowrap py-3 pr-4 text-sm font-medium text-gray-950">{row.strategy}</td>
                <td className="py-3 pr-4 text-sm text-gray-700">{row.definition}</td>
                <td className="py-3 text-sm text-gray-500">{row.helps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CryptoTreasurySoftware() {
  const rows = [
    {
      solution: 'Request Finance',
      bestFor: 'End-to-end crypto financial operations: invoicing, payroll, expenses, and AP/AR',
      strengths: 'Widest stablecoin and chain support, Safe wallet integration, batch payments, fraud guardrails, accounting exports, mobile expense app. Handles both crypto and fiat.',
    },
    {
      solution: 'Coinshift',
      bestFor: 'On-chain treasury dashboards and cashflow reporting',
      strengths: 'Unified dashboard consolidating multiple safes across networks, portfolio history, batched transactions for grants and disbursements.',
    },
    {
      solution: 'Krayon Digital',
      bestFor: 'MPC-based wallet security',
      strengths: 'Multi-party computation key sharding, blockchain-agnostic, works with NFTs. More technically complex but eliminates single-key risk.',
    },
    {
      solution: 'Circle',
      bestFor: 'USDC-centric treasury operations',
      strengths: 'Near-instant USDC and Euro Coin business payments, multiple custodial models, customizable approval policies. Limited token variety.',
    },
    {
      solution: 'FalconX',
      bestFor: 'Institutional-grade trading and capital efficiency',
      strengths: 'Flexible settlement, direct trading platform integrations, staking against borrowed assets. Aimed at larger, more TradFi-adjacent organizations.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Best crypto treasury management software
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Key solutions worth evaluating and what each does best
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-7 sm:pb-7">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Solution</th>
              <th className="pb-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Best for</th>
              <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wider text-blue-600">Key strengths</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.solution} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="whitespace-nowrap py-3 pr-4 text-sm font-medium text-gray-950">{row.solution}</td>
                <td className="py-3 pr-4 text-sm text-gray-700">{row.bestFor}</td>
                <td className="py-3 text-sm text-gray-500">{row.strengths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
