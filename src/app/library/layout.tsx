import Link from "next/link";
import { getSession } from "@/lib/session";
import { libraryStats, industries } from "@/data/library";

export default async function LibraryLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip">Skip to the content</a>
      <header className="border-b border-line sticky top-0 bg-paper z-40">
        <div className="mx-auto max-w-[1200px] px-5 h-16 flex items-center justify-between">
          <Link href="/library" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              <rect x="1" y="1" width="24" height="24" rx="7" fill="#00a651" />
              <path d="M6 8.5h14l-4.4 5.2v4.6L12.5 21v-7.3L6 8.5z" fill="#fff" />
            </svg>
            boringfunnels
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/account" className="btn-ghost text-sm">Account</Link>
            <span className="hidden sm:inline text-[13px] text-muted">Signed in as {session?.email ?? "you@example.com"}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-5 w-full flex-1 grid lg:grid-cols-[220px_1fr] gap-10 py-10">
        <aside aria-label="Library">
          <p className="eyebrow">FREE</p>
          <nav className="mt-3">
            <p className="kicker mb-2">LIBRARY</p>
            <ul className="space-y-1.5 text-[14.5px]">
              <li><Link className="text-muted hover:text-go-text" href="/library">Deep dives</Link></li>
              <li><Link className="text-muted hover:text-go-text" href="/library?mode=funnels">Funnels</Link></li>
              <li><Link className="text-muted hover:text-go-text" href="/library?mode=pages">Pages</Link></li>
              <li><Link className="text-muted hover:text-go-text" href="/library?mode=sections">Sections</Link></li>
              <li><Link className="text-muted hover:text-go-text" href="/library/built">Built with Pro</Link></li>
            </ul>
          </nav>
          <nav className="mt-6">
            <p className="kicker mb-2">INDUSTRY</p>
            <ul className="space-y-1.5 text-[14.5px]">
              {industries.map((i, idx) => (
                <li key={i}>
                  <button className={`text-left hover:text-go-text ${idx === 0 ? "font-bold text-go-text" : "text-muted"}`}>{i}</button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 border-t border-line pt-4 space-y-1.5">
            {libraryStats.map((s) => (
              <div key={s.label} className="flex justify-between text-[13.5px]">
                <span className="text-muted">{s.label}</span>
                <span className="font-mono">{s.n.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-line pt-4">
            <p className="kicker mb-2">TOOLS</p>
            <ul className="space-y-1.5 text-[14.5px]">
              <li><Link className="text-muted hover:text-go-text" href="/library/find">Funnel Finder</Link></li>
              <li><Link className="text-muted hover:text-go-text" href="/funnel-math">Funnel math</Link></li>
            </ul>
          </div>
          <div className="mt-6 border-t border-line pt-4">
            <Link href="/start" className="alink text-[14px] font-semibold">See what Pro builds →</Link>
            <p className="text-[12.5px] text-muted mt-1.5">No guessing, no templates: your agent builds funnels that sell, from the whole library and a pro’s skills, from one prompt. $299 a year</p>
          </div>
        </aside>
        <main id="main" className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
