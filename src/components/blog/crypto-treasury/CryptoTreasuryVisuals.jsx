export function CryptoTreasuryRiskCards() {
  const risks = [
    {
      icon: '\uD83C\uDF0A',
      title: 'Liquidity risk',
      description: 'Inability to pay obligations on time, in stablecoins or cash. Can arise from unforeseen increases in liabilities or drops in revenue. In crypto winters, exchange trading volumes plummet alongside revenues.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: '\uD83D\uDCC9',
      title: 'Market risk',
      description: 'Negative impacts from price movements, interest rates, and exchange rate shifts. Includes asset price corrections, contagion effects, and on-chain gas price spikes that can make transactions prohibitively expensive.',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: '\uD83C\uDFD7\uFE0F',
      title: 'Operational risk',
      description: 'Business interruptions or costly errors from treasury processes, key-person dependencies, governance failures, payments mistakes, or cybersecurity breaches. FTX\'s bankruptcy filings revealed "a complete failure of corporate controls."',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: '\uD83C\uDFAD',
      title: 'Counterparty risk',
      description: 'Getting rugged. If a custodian, exchange, or lender defaults by freezing withdrawals or filing for bankruptcy, it can cut off your cash inflows and leave you unable to pay creditors. BlockFi had over $1.2 billion tied up with FTX.',
      color: 'bg-purple-50 text-purple-600',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          The four categories of crypto treasury risk
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Often highly correlated, especially in crypto markets
        </p>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        {risks.map((risk) => (
          <div key={risk.title} className="rounded-lg border border-gray-100 bg-gray-50/50 p-5">
            <span className={`inline-flex size-9 items-center justify-center rounded-lg text-lg ${risk.color}`}>
              {risk.icon}
            </span>
            <h4 className="mt-3 text-sm font-semibold text-gray-950">{risk.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{risk.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CryptoTreasuryWalletCards() {
  const wallets = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      title: 'Multi-signature wallets',
      description: 'Require multiple authorized signers to approve transactions. The standard for organizational crypto storage. Popular options: Safe (formerly Gnosis Safe) for EVM chains.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      title: 'MPC wallets',
      description: 'Distribute private key shards across multiple parties using cryptographic protocols. No single point of failure. More flexible than multisig but technically more complex. Example: Krayon Digital.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
        </svg>
      ),
      title: 'Institutional custody',
      description: 'Traditional custodians like Anchorage or Coinbase that hold assets on your behalf. Familiar model for TradFi-native organizations. Trade-off: convenience for self-custody principles.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
      title: 'Financial operations layer',
      description: 'The tooling that sits on top of your wallet, managing invoices, payroll, expenses, and approvals. Request Finance integrates directly with Safe and other wallets to enable batch payments from a single dashboard.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          Wallet types and infrastructure options
        </p>
        <p className="mt-1 text-xs text-gray-400">
          The building blocks of your crypto treasury stack
        </p>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        {wallets.map((wallet) => (
          <div key={wallet.title} className="rounded-lg border border-gray-100 bg-gray-50/50 p-5">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              {wallet.icon}
            </span>
            <h4 className="mt-3 text-sm font-semibold text-gray-950">{wallet.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{wallet.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CryptoTreasuryFrameworkSteps() {
  const steps = [
    {
      number: 1,
      title: 'Identify the risks',
      description: 'What can go wrong? List potential risk statements using an "If... then..." format, classified by category: liquidity, market, operational, or counterparty. Risks can come from external sources (volatile exchange rates, regulatory changes) or internal ones (governance failures, key-person dependencies). Log everything in a risk register.',
    },
    {
      number: 2,
      title: 'Evaluate the risks',
      description: 'What is the likelihood and consequence of each risk materializing? Prioritize by expected damage: probability multiplied by cost. Plot each risk on a matrix by likelihood and severity. Use scenario analysis, stress testing, and sensitivity analysis to quantify potential impacts for single risks and combined groups.',
    },
    {
      number: 3,
      title: 'Respond to the risks',
      description: 'For each evaluated risk, choose one of four responses: Accept (the reward justifies the risk), Avoid (do not take the risk at all), Transfer (pass it to another party through insurance, derivatives, or subcontractors), or Control (manage it with limits, audits, and internal policies). In practice, most risks get mixed treatments.',
    },
    {
      number: 4,
      title: 'Report and review',
      description: 'Track whether risks are being managed as agreed. Analyze deviations between targets and actual performance. Feed information back into the process. This loop is vital because risk management must evolve to keep pace with a market that changes fast.',
    },
  ]

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="px-5 pt-5 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold leading-snug text-gray-950">
          A four-step risk management framework
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Adapted from the Association of Corporate Treasurers (ACT)
        </p>
      </div>
      <div className="relative space-y-0 p-5 pl-12 sm:p-7 sm:pl-14">
        <div className="absolute bottom-12 left-[2.15rem] top-12 w-px bg-gray-200 sm:left-[2.65rem]" />
        {steps.map((step) => (
          <div key={step.number} className="relative pb-6 last:pb-0">
            <span className="absolute -left-7 top-0.5 flex size-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white sm:-left-7">
              {step.number}
            </span>
            <h4 className="text-sm font-semibold text-gray-950">{step.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
