export function VirtualCardScenarios() {
  const scenarios = [
    {
      title: 'Scenario 1 — SaaS subscription management',
      problem:
        'A 60-person company has 40+ SaaS subscriptions spread across three credit cards. Three tools charged renewal fees after the company thought they had been cancelled.',
      solution:
        'Issue one dedicated card per SaaS tool. Each card has the vendor name attached, a budget limit, and an annual renewal flag. When a tool is cancelled, the card is deactivated. No second charge is possible.',
      caveat:
        'This only works if the initial setup is thorough. Migrating existing subscriptions to individual cards takes time.',
    },
    {
      title: 'Scenario 2 — Marketing department budget control',
      problem:
        'The marketing team spends on ads, tools, agencies, and events at irregular times. The finance team either becomes a bottleneck or loses visibility.',
      solution:
        'Issue the marketing budget owner a monthly-limit card for recurring spend. For project-specific campaigns, issue single-use cards with the exact approved amount.',
      caveat:
        'Merchant restrictions on ad platform cards can cause issues if the marketing team uses platforms across multiple categories. Configure restrictions carefully.',
    },
    {
      title: 'Scenario 3 — Paying international contractors',
      problem:
        'A finance team pays eight contractors in five countries. Each invoices differently, and reconciliation at month-end is a spreadsheet exercise.',
      solution:
        'Issue a single-use virtual card per contractor payment, for the exact invoice amount, after the invoice is approved. The contractor charges it once. The card expires.',
      caveat:
        'Not all contractors have the infrastructure to charge a card. Verify payment method preferences before building the workflow around virtual cards.',
    },
    {
      title: 'Scenario 4 — Vendor onboarding and one-off purchases',
      problem:
        'A procurement team needs to make a first payment to a new vendor before the vendor is fully set up in the ERP.',
      solution:
        'Issue a card for the exact onboarding payment amount, tied to a specific vendor code. The payment is made, the card expires, and the transaction is already tagged to the right vendor.',
      caveat:
        'This works well for digital payments. If the vendor requires a wire transfer or ACH, a virtual card is not the right instrument.',
    },
    {
      title: 'Scenario 5 — Remote team operational expenses',
      problem:
        'A remote team member needs to buy office supplies and equipment. The current process involves expense reimbursement or shared card access with no controls.',
      solution:
        'Issue a virtual card with a quarterly budget limit for home office expenses. The team member makes purchases within the approved budget. Receipts are attached through the mobile app.',
      caveat:
        'Merchant category controls need to be wide enough to cover the actual purchase types, or legitimate purchases will be declined.',
    },
  ]

  return (
    <div className="my-10 space-y-4">
      {scenarios.map((scenario) => (
        <div key={scenario.title} className="overflow-hidden rounded-xl border border-gray-200">
          <div className="bg-gray-900 px-5 py-3">
            <p className="text-sm font-semibold text-white">{scenario.title}</p>
          </div>
          <div className="space-y-3 px-5 py-4">
            <div>
              <span className="text-sm font-semibold text-gray-950">The problem: </span>
              <span className="text-sm text-gray-700">{scenario.problem}</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-950">How a virtual card helps: </span>
              <span className="text-sm text-gray-700">{scenario.solution}</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-500">Caveat: </span>
              <span className="text-sm italic text-gray-500">{scenario.caveat}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
