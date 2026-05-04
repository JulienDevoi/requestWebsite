export const stablecoinCardsEarlyLookBody = `Many finance teams that use stablecoins are still forced to run cards the old way. On one side, you have your stablecoin treasury in Request Finance, which is used for bills, payroll, and crypto-to-fiat transactions. On the other, your team pays for SaaS, travel, and ads with cards funded from a separate bank account, in a separate application, with separate rules.

Stablecoin-friendly Business Cards are our way of closing that gap. Our early version introduces virtual cards that are funded via a separate card wallet in USDC and managed directly inside Request Finance. Your team pays online, just as they always have. You keep a single, finance-friendly view of how money leaves the company.

## The card wallet: where card spend starts

When your company joins this early version, we set up a card wallet for you.

Think of it as the starting point for all card spend:

- It is denominated in USD, so finance can read it at a glance.
- It is funded in USDC on a supported network (Ethereum, Solana, Polygon, or Arbitrum) that we confirm with you during onboarding. More funding options will follow later.
- You top it up using the Direct Payments flow you already use in Request, from any wallet you normally pay from.
- **No extra fees:** you fund 1:1 in USDC and spend 1:1 in USD, with no extra Request fees on card top-ups and card payments.

The balance of this wallet is visible at the top of the new Cards section in Request Finance. Every Business Mastercard your team uses draws from this shared balance.

[IMAGE:/blog/stablecoin-cards/The%20card%20wallet.png|Card wallet balance and top-up in Request Finance]

Top up your stablecoin card without leaving Request: no off-ramp to your bank, no extra dashboards, and no hidden fees.

## Issuing and managing Business Mastercards

From the Cards section, your finance team can issue stablecoin cards to the right people without losing control.

In this early version:

- Cards are **virtual Business Mastercards** for online spend.
- Only **Admins** and **Finance Managers** can see the Cards section and create or manage stablecoin cards.
- Cardholders are people you already know in Request: team members or employees.

Creating a stablecoin card is simple. You choose who should hold it, give it a clear name, and set a monthly limit in USD. That card then appears in your list, drawing from the card wallet you funded in USDC.

From there, you can rename it, adjust the limit, or freeze it if something looks off. Card details are available when you need to pay online and can be securely hidden again afterwards.

For employees, it feels like a modern company card. For finance, it stays tightly connected to your existing treasury and spending controls.

[IMAGE:/blog/stablecoin-cards/Issuing%20and%20managing%20Business%20Mastercards.png|Issue and manage virtual Business Mastercards from the Cards section]

## Spending controls and security

The first version of Business Mastercards focuses on controls that finance teams actually use day to day.

Each stablecoin card has a **monthly spending limit in USD**. You can increase or reduce it at any time from the card details view. If a card is compromised or misused, you can **freeze it immediately**. While frozen, it will simply stop working for new transactions.

Cards are issued with a regulated partner on the Mastercard network. Online payments may trigger 3D Secure challenges, just like regular cards.

On the security side:

- Access to the Cards section is restricted to Admins and Finance Managers.
- Card details are handled securely by our issuing partner and are **not** stored in clear text by Request.
- We strongly recommend that **two-factor authentication** be required for anyone accessing card details, managing payments, and handling cards.

We are building Business Mastercards to work naturally with the way you already run payments in Request Finance. You do not need to learn anything new or monitor an extra tool.

[IMAGE:/blog/stablecoin-cards/Spending%20controls%20and%20security.png|Limits, freeze, and secure card details]

## What you will see in Request

Once you are onboarded, the experience lives in two main views: **Cards** and **Transactions**.

**In the Cards view you see:**

- A list of stablecoin cards with the cardholder, card name, type, and status.
- Clicking a card opens a side panel where you can see card details, reveal or hide card information, adjust the name or limit, and freeze or unfreeze the card.

**In the Transactions view you see** day-to-day spend:

- Date and time
- Cardholder
- Merchant name and, when available, location
- Amount in USD, plus original currency if different
- Which card was used, with space for receipts

This means card spend no longer lives in a separate world. It sits next to bills, payroll, and crypto-to-fiat payments, where your finance team already spends most of its time.

[IMAGE:/blog/stablecoin-cards/What%20you%20will%20see%20in%20Request.png|Cards and Transactions in one place]

[IMAGE:/blog/stablecoin-cards/card_details%20request%20finance.png|Card details and controls in the side panel]

## Who this early version of Business Mastercards is for

Business Mastercards are designed for finance teams that want to move more of their operations over to stablecoins. This early version is built with you in mind if you:

- Already transact in USDC as part of your day-to-day activity (on networks like Ethereum, Solana, Polygon, or Arbitrum).
- Are looking for a **stablecoin-friendly** alternative to your current card provider.
- Want to keep tight finance controls and access rights over card spend.

You keep the benefits of a modern business card program, while your treasury continues to live where it belongs: in stablecoins, in one place you can manage.

**Sounds good?** If you have not done this already, [sign up](https://app.request.finance/signup) to get started with Request Finance and stay in the loop as cards roll out.

## What comes next

This early version of Business Mastercards is the first step toward a larger goal: a single environment where finance teams can manage card spend end-to-end with ease and efficiency, in a way that fits their treasury requirements.

Right now, the focus is on:

- Funding card spend from a USDC balance.
- Virtual cards for online business spend.
- Simple, effective controls for finance teams.

Over the next releases, we are planning to bring in:

- More advanced spending controls (for example, by merchant or merchant category).
- Physical cards.
- Support for Apple Pay and Google Pay.
- More networks and funding assets.
- Mobile app support for cards on the go.

[IMAGE:/blog/stablecoin-cards/What%20comes%20next.png|Roadmap: what's shipping now and what's next]

We will shape the details together with early users. If this sounds like the direction you want your finance stack to go, [open your Request account](https://app.request.finance/signup) if you have not joined yet.

**Want to be fully ready when cards launch?** Since cards are a regulated service, make sure your business is verified. You can [start in the app](https://app.request.finance/signup): complete onboarding and business verification to secure access to cards and other services.`
