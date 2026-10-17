import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight" style={{ color: dark ? "var(--paper)" : "var(--ink)" }}>
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <rect x="1" y="1" width="24" height="24" rx="7" fill="#00a651" />
        <path d="M6 8.5h14l-4.4 5.2v4.6L12.5 21v-7.3L6 8.5z" fill="#fff" />
      </svg>
      boringfunnels
    </Link>
  );
}

export function SiteHeader({ signedIn = false }: { signedIn?: boolean }) {
  return (
    <header className="border-b border-line">
      <a href="#main" className="skip">Skip to the content</a>
      <div className="mx-auto max-w-[1060px] px-5 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <Link href="/library" className="hidden sm:inline text-[15px] font-semibold hover:text-go-text">Library</Link>
          <Link href="/funnel-math" className="hidden sm:inline text-[15px] font-semibold hover:text-go-text">Funnel math</Link>
          {signedIn ? (
            <Link href="/account" className="btn-ghost text-sm">Your account</Link>
          ) : (
            <Link href="/access" className="btn-ghost text-sm">Sign in</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="mx-auto max-w-[1060px] px-5 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Footer">
            <Link href="/terms" className="hover:text-go-text">Terms</Link>
            <Link href="/privacy" className="hover:text-go-text">Privacy</Link>
            <Link href="/refunds" className="hover:text-go-text">Refunds</Link>
            <Link href="/removal" className="hover:text-go-text">Removal</Link>
          </nav>
        </div>
        <p className="text-sm text-muted">A study clone, built from the real thing with rea.</p>
      </div>
    </footer>
  );
}
