import Link from "next/link";
import { deepDives, funnels } from "@/data/library";

export const metadata = { title: "Pages that sell · boringfunnels" };

export default function LibraryPage() {
  return (
    <div>
      <div className="card bg-field/60 border-line p-5 mb-10">
        <p className="kicker">YOUR FREE ACCOUNT</p>
        <h1 className="font-display font-extrabold text-[1.7rem] tracking-tight mt-2">The whole library is open to you.</h1>
        <p className="mt-2 text-muted max-w-[560px] text-[15px]">
          Every funnel walked from its ad, every page taken apart section by section, every section’s move. Four taps find the funnel that fits your business, with real ones to study and the brief for your agent.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/library/find" className="btn-go">Find the funnel for your business <span aria-hidden="true">→</span></Link>
          <Link href="/library/funnels/keystone-roofing" className="btn-ghost">Open this week’s deep dive</Link>
        </div>
      </div>

      <section aria-labelledby="deep-dives">
        <div className="flex items-baseline justify-between">
          <h2 id="deep-dives" className="font-display font-extrabold text-[1.5rem] tracking-tight">Deep dives</h2>
          <span className="font-mono text-sm text-muted">6</span>
        </div>
        <p className="mt-2 text-muted text-[15px] max-w-[640px]">
          One funnel a week, taken apart at full depth: the big idea, the moves to steal, every screen pinned, and what not to copy.
        </p>

        <div className="mt-6 space-y-4">
          {deepDives.map((d, i) => (
            <article key={d.slug} className={`card p-5 ${i === 0 ? "border-go" : ""}`}>
              {i === 0 && <p className="eyebrow">THIS WEEK</p>}
              <h3 className="font-display font-bold text-[1.15rem] mt-1">{d.name}</h3>
              <p className="text-[13px] font-mono uppercase tracking-wide text-go-text mt-1">{d.kind}</p>
              <p className="mt-2 text-muted text-[15px] max-w-[600px]">{d.blurb}</p>
              {d.free ? (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-mono text-muted">{d.steps.join(" · ")}</span>
                  <Link href={`/library/funnels/${d.slug}`} className="alink text-[14.5px] font-semibold">Open the deep dive →</Link>
                  <button className="btn-ghost text-[13px]" type="button">Copy agent brief</button>
                </div>
              ) : (
                <div className="mt-4 flex items-center gap-3">
                  <button className="btn-ghost text-[13px]" type="button">Copy brief</button>
                  <Link href="/start" className="alink text-[13.5px]">Pro opens this deep dive</Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="funnels" className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 id="funnels" className="font-display font-extrabold text-[1.5rem] tracking-tight">Funnels</h2>
          <span className="font-mono text-sm text-muted">15</span>
        </div>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {funnels.map((f) => (
            <li key={f.slug}>
              <Link href={`/library/funnels/${f.slug}`} className="flex items-center gap-4 py-3.5 hover:bg-field/50 transition-colors -mx-3 px-3 rounded-lg">
                <span className="font-display font-bold text-[1.02rem]">{f.name}</span>
                <span className="text-[13px] text-muted">{f.kind} · {f.pattern}</span>
                <span className="ml-auto font-mono text-[12.5px] text-muted">{f.steps} steps, {f.seen} seen</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[14px] text-muted">
          Free: every funnel’s first step and its selling move. <Link className="alink" href="/start">The rest with boringfunnels Pro</Link>.
        </p>
      </section>
    </div>
  );
}
