import Link from "next/link";

export const metadata = { title: "Downloads" };

export default function AccountPage() {
  return (
    <div>
      <p className="kicker">YOUR ACCOUNT</p>
      <h1 className="font-display font-extrabold text-[1.9rem] tracking-tight mt-2">You’re on the free library.</h1>
      <p className="mt-3 text-muted max-w-[560px]">
        This week’s deep dive in full, step 1 of every other funnel, and one pick a week, by email. Buy with this address and the locks lift here.
      </p>

      <section className="mt-8 card bg-night text-paper p-6" aria-label="Unlock everything">
        <h2 className="font-display font-extrabold text-[1.3rem]">What unlocking adds</h2>
        <ul className="mt-4 space-y-2.5 text-[15px]">
          <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>The full library inside your agent: every teardown, every whole funnel, every deep study</li>
          <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>The build kit: strategy, copy, the offer, design, the build and the checks</li>
          <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>Every page, the emails and the ad, for every funnel you build</li>
          <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>A new deep study every week, and every kit update</li>
          <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>Tested in Claude Code and Codex, with setup lines for Cursor, VS Code, Gemini CLI and Devin</li>
          <li className="flex gap-3"><span aria-hidden="true" style={{ color: "#7fd6a4" }}>✓</span>Your own business or your clients'</li>
        </ul>
        <Link href="/buy" className="btn-go mt-5">Unlock everything · $299 a year</Link>
      </section>

      <p className="mt-6 text-[14px] text-muted">
        Bought already on another address? Add it under <Link className="alink" href="/account/settings">Settings</Link> and it attaches itself, or tell us the address on your Stripe receipt through <Link className="alink" href="/account/support">Support</Link>.
      </p>
    </div>
  );
}
