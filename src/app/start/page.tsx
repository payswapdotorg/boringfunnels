import Link from "next/link";

export const metadata = {
  title: "boringfunnels Pro · build funnels that sell with the coding agent you already use",
};

const works = ["Claude Code", "Codex", "Cursor", "VS Code + Copilot", "Gemini CLI", "Devin"];

const gallery = [
  { kind: "BOOKING PAGE", name: "Summit Air", note: "A $79 furnace tune-up" },
  { kind: "LOCAL SERVICE", name: "Hollis Lawn Care", note: "$45 a cut, a photo after every one" },
  { kind: "PRODUCT PAGE", name: "Morning Draft", note: "A $65 holiday gift box" },
  { kind: "LEAD PAGE", name: "Closer Academy", note: "A free score, then a $997 program" },
  { kind: "DIGITAL PRODUCT", name: "30-Day Dinner Planner", note: "A $19 printable planner" },
  { kind: "ADVERTORIAL", name: "Ridgeline", note: "A $48 sock three-pack" },
  { kind: "FREE PLAN", name: "Vow & Venue", note: "A free wedding plan, then a call" },
  { kind: "SOFTWARE TRIAL", name: "Chairside", note: "14 days free, then $39 a month" },
  { kind: "INTRO OFFER", name: "Pawsh Wash", note: "$20 off a first weekday groom" },
  { kind: "ONE-CLICK UPSELL", name: "Reset Club", note: "$197, after the $27 order" },
  { kind: "CALCULATOR", name: "Quoteflow", note: "A free calculator, then 14 days free" },
  { kind: "SCORECARD", name: "The Offer Workshop", note: "A free score, then a $297 seat" },
  { kind: "COACHING", name: "Strong After 40", note: "A free strength check, then $497 coaching" },
  { kind: "QUIZ", name: "A pitch to Morning Draft", note: "The quiz that prescribes" },
];

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1060px] px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              <rect x="1" y="1" width="24" height="24" rx="7" fill="#00a651" />
              <path d="M6 8.5h14l-4.4 5.2v4.6L12.5 21v-7.3L6 8.5z" fill="#fff" />
            </svg>
            boringfunnels
          </Link>
          <div className="flex gap-3 items-center">
            <Link href="/library?welcome=1" className="text-[15px] font-semibold hover:text-go-text">Open my free library</Link>
            <Link href="/buy" className="btn-go text-sm">Get Pro</Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-[860px] px-5 pt-14">
          <p className="eyebrow">boringfunnels Pro</p>
          <h1 className="font-display font-extrabold text-[2.4rem] sm:text-[3.2rem] tracking-tight leading-[1.06] mt-3">
            Build funnels that sell with the coding agent you already use.
          </h1>
          <p className="mt-5 text-[1.12rem] text-muted max-w-[680px]">
            Tell your agent about your business. It hands you the funnel plan, the pages, the emails and the ad, modeled on real funnels that sell, in your brand, checked. Your part: a few answers and a few clicks.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link href="/buy" className="btn-go text-[1.05rem]">Get Pro · $299 a year</Link>
            <span className="text-[14px] text-muted">Full library + build kit in your agent · cancel anytime · or <Link className="alink" href="/buy?plan=monthly">$79 a month</Link></span>
          </div>
          <p className="kicker mt-8">WORKS IN</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13.5px]">
            {works.map((w) => <li key={w}>{w}</li>)}
          </ul>
        </section>

        <section className="mx-auto max-w-[1060px] px-5 py-14">
          <h2 className="font-display font-extrabold text-[1.8rem] tracking-tight">Every kind of page a funnel needs.</h2>
          <p className="mt-2 text-muted max-w-[640px]">
            Booking pages, calculators, quizzes, free classes, advertorials, software trials, one-click upsells, order forms. All built by the agent for businesses we made up to test it, each in its own look.
          </p>
          <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <li key={g.name} className="card p-4">
                <p className="text-[10.5px] font-mono uppercase tracking-wide text-go-text">{g.kind}</p>
                <p className="font-display font-bold mt-1">{g.name}</p>
                <p className="text-[13px] text-muted mt-1">{g.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-[860px] px-5 pb-16">
          <div className="card bg-night text-paper p-8">
            <h2 className="font-display font-extrabold text-[1.6rem]">What unlocking adds</h2>
            <ul className="mt-4 space-y-2.5 text-[15.5px]">
              <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>The full library inside your agent: every teardown, every whole funnel, every deep study</li>
              <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>The build kit: strategy, copy, the offer, design, the build and the checks</li>
              <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>Every page, the emails and the ad, for every funnel you build</li>
              <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>A new deep study every week, and every kit update</li>
              <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>Tested in Claude Code and Codex, with setup lines for Cursor, VS Code, Gemini CLI and Devin</li>
              <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>Your own business or your clients'</li>
            </ul>
            <Link href="/buy" className="btn-go mt-6">Unlock everything · $299 a year</Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-[1060px] px-5 py-8 flex gap-5 text-sm text-muted">
          <Link href="/terms" className="hover:text-go-text">Terms</Link>
          <Link href="/privacy" className="hover:text-go-text">Privacy</Link>
          <Link href="/refunds" className="hover:text-go-text">Refunds</Link>
          <Link href="/removal" className="hover:text-go-text">Removal</Link>
        </div>
      </footer>
    </div>
  );
}
