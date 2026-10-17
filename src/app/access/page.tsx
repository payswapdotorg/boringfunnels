import Link from "next/link";
import { SiteFooter } from "@/components/SiteChrome";
import { AccessForm } from "@/components/AccessForm";

export const metadata = { title: "Get your kit" };

export default function AccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip">Skip to the content</a>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1060px] px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              <rect x="1" y="1" width="24" height="24" rx="7" fill="#00a651" />
              <path d="M6 8.5h14l-4.4 5.2v4.6L12.5 21v-7.3L6 8.5z" fill="#fff" />
            </svg>
            boringfunnels
          </Link>
          <Link href="/#join" className="btn-ghost text-sm">Get your kit</Link>
        </div>
      </header>

      <main id="main" className="flex-1">
        <section className="mx-auto max-w-[640px] px-5 py-14">
          <p className="eyebrow">Your kit</p>
          <h1 className="font-display font-extrabold text-[2rem] sm:text-[2.6rem] tracking-tight mt-2">
            Enter your email.
          </h1>
          <p className="mt-4 text-[1.08rem] text-muted">
            Free or Pro, we will send a link that signs you in. There is no password, because there is nothing here worth a password.
          </p>

          <div className="mt-8">
            <AccessForm />
          </div>

          <p className="mt-8 text-[15px]">
            A free account, no purchase? <Link className="alink" href="/#join">Sign in from the home page</Link>: it sends a link to any address.
          </p>

          <div className="mt-12 card p-6">
            <p className="font-display font-bold text-lg">If that does not work</p>
            <p className="mt-2 text-muted text-[15px]">There are only really three reasons a link does not arrive, and all of them are fixable.</p>
            <ul className="mt-4 space-y-4 text-[15px]">
              <li>
                <b>You bought with a different address.</b>{" "}
                <span className="text-muted">Work address, personal address, an alias your password manager made up. Open the Stripe receipt in your inbox and use the address it was sent to.</span>
              </li>
              <li>
                <b>The email is sitting in a filter.</b>{" "}
                <span className="text-muted">Search your mail for boringfunnels rather than scrolling.</span>
              </li>
              <li>
                <b>Somebody else paid.</b>{" "}
                <span className="text-muted">A company card, an assistant, a founder buying for a team. Ask them to forward the receipt, then tell us below and we will move the purchase to your address.</span>
              </li>
            </ul>
            <p className="mt-6">
              <a className="btn-ghost text-sm" href="mailto:help@boringfunnels.com">Ask a person</a>
            </p>
          </div>

          <p className="mt-10 text-[14px] text-muted">
            This page is boringfunnels.com/access, and it is the only address you need to remember. Bookmark it if you like, but you will find it at the bottom of every email we send.
          </p>
        </section>
      </main>

      <footer className="border-t border-line mt-10">
        <div className="mx-auto max-w-[1060px] px-5 py-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="font-display font-bold text-ink">boringfunnels</span>
          <Link href="/account/license" className="hover:text-go-text">License</Link>
          <Link href="/account/changelog" className="hover:text-go-text">Changelog</Link>
          <a href="mailto:help@boringfunnels.com" className="hover:text-go-text">Support</a>
          <span className="ml-auto flex gap-4">
            <Link href="/terms" className="hover:text-go-text">Terms</Link>
            <Link href="/privacy" className="hover:text-go-text">Privacy</Link>
            <Link href="/refunds" className="hover:text-go-text">Refunds</Link>
            <Link href="/removal" className="hover:text-go-text">Removal</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
