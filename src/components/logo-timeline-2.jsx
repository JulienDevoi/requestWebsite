import { clsx } from 'clsx'
import { Mark } from './logo'

function Row({ children }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-gray-300 from-[2px] to-[2px] bg-size-[12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-gray-200 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({ label, src, className }) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap',
        'rounded-full bg-linear-to-t from-gray-100 from-50% to-gray-50 ring-1 ring-gray-300 ring-inset',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]',
      )}
    >
      <img alt="" src={src} className="size-4" />
      <span className="text-sm/6 font-medium text-gray-950">{label}</span>
    </div>
  )
}

export function LogoTimeline2() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: `url('data:image/svg+xml,<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>')`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
          }}
        />
        <div className="relative flex size-24 items-center justify-center rounded-xl bg-linear-to-t from-gray-100 to-gray-50 shadow-sm ring-1 ring-gray-300 outline outline-offset-[-5px] outline-gray-200 ring-inset">
          <Mark className="h-9 fill-gray-950" />
        </div>
      </div>
      <div className="@container absolute inset-0 grid grid-cols-1 pt-8">
        <Row key="row-safe-revolut">
          <Logo
            key="safe"
            label="Safe"
            src="/logo-timeline/safe.jpg"
            className="[animation-delay:-26s] [animation-duration:30s]"
          />
          <Logo
            key="revolut"
            label="Revolut"
            src="/logo-timeline/revolut.svg"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
        <Row key="row-ledger-metamask">
          <Logo
            key="ledger"
            label="Ledger"
            src="/logo-timeline/ledger.png"
            className="[animation-delay:-40s] [animation-duration:40s]"
          />
          <Logo
            key="metamask"
            label="Metamask"
            src="/logo-timeline/metamask.png"
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row key="row-xero-sap">
          <Logo
            key="xero"
            label="Xero"
            src="/logo-timeline/xero.png"
            className="[animation-delay:-10s] [animation-duration:40s]"
          />
          <Logo
            key="sap"
            label="SAP"
            src="/logo-timeline/sap.svg"
            className="[animation-delay:-32s] [animation-duration:40s]"
          />
        </Row>
        <Row key="row-dbs-citibank">
          <Logo
            key="dbs"
            label="DBS"
            src="/logo-timeline/dbs.png"
            className="[animation-delay:-45s] [animation-duration:45s]"
          />
          <Logo
            key="citibank"
            label="Citibank"
            src="/logo-timeline/citibank.png"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>
        <Row key="row-chase-wise">
          <Logo
            key="chase"
            label="Chase"
            src="/logo-timeline/chase.png"
            className="[animation-delay:-55s] [animation-duration:60s]"
          />
          <Logo
            key="wise"
            label="Wise"
            src="/logo-timeline/wise.svg"
            className="[animation-delay:-20s] [animation-duration:60s]"
          />
        </Row>
        <Row key="row-quickbooks-aspire">
          <Logo
            key="quickbooks"
            label="Quickbooks"
            src="/logo-timeline/quickbooks.svg"
            className="[animation-delay:-9s] [animation-duration:40s]"
          />
          <Logo
            key="aspire"
            label="Aspire"
            src="/logo-timeline/aspire.png"
            className="[animation-delay:-28s] [animation-duration:40s]"
          />
        </Row>
      </div>
    </div>
  )
}

