import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { JoinForm } from "@/components/JoinForm";
import { hero, studyTeaser, insideFree, libraryTeaser, newEveryWeek, kitSection, insteadOf, faq, finalCta } from "@/data/home";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1060px] px-5 pt-14 pb-10">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="font-display font-extrabold tracking-tight text-[2.4rem] leading-[1.08] sm:text-[3.4rem] mt-3 max-w-[860px]">
            {hero.h1Pre}
            <mark>{hero.h1Mark}</mark>
            {hero.h1Post}
          </h1>
          <p className="mt-5 text-[1.12rem] text-muted max-w-[640px]">{hero.sub}</p>
          <div className="mt-8">
            <JoinForm />
          </div>
        </section>

        {/* ── This week's study, teased ────────────────────── */}
        <section className="mx-auto max-w-[1060px] px-5 pt-6 pb-14">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <ol className="space-y-3" aria-label="This week's funnel, at a glance">
                {[
                  studyTeaser.step1,
                  studyTeaser.step2,
                  studyTeaser.step3,
                  studyTeaser.step4,
                ].map((s) => (
                  <li key={s.num} className="flex items-baseline gap-4 border-b border-line pb-3">
                    <span className="rail-num w-5 shrink-0">{s.num}</span>
                    <span className="font-display font-bold text-[1.05rem]">{s.label}</span>
                    <span className="hand hand-tilt ml-auto text-right">{s.note}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-[14px] text-muted">{studyTeaser.thisWeek}</p>
            </div>

            <div className="card p-6">
              <p className="kicker">{studyTeaser.adPanel.kicker}</p>
              <div className="mt-4 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-muted text-sm">{studyTeaser.adPanel.spend}</p>
                  <p className="font-mono text-xl mt-1">—</p>
                </div>
                <div>
                  <p className="text-muted text-sm">{studyTeaser.adPanel.leads}</p>
                  <p className="font-mono text-xl mt-1">3 leads</p>
                </div>
              </div>
              <p className="mt-5 text-[15.5px]">{studyTeaser.adPanel.verdict}</p>
              <div className="mt-5 border border-dashed border-line rounded-lg p-4">
                <p className="font-mono text-sm text-muted">{studyTeaser.adPanel.untitled}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {studyTeaser.adPanel.guesses.map((g) => (
                    <span key={g} className="text-[13px] border border-line rounded-full px-3 py-0.5 text-muted">{g}</span>
                  ))}
                </div>
                <p className="mt-3 text-[14px] text-muted">{studyTeaser.adPanel.guessLine}</p>
              </div>
              <p className="hand text-[1.25rem] mt-4">{studyTeaser.adPanel.swipeLine}</p>
            </div>
          </div>
        </section>

        {/* ── Inside your free account ─────────────────────── */}
        <section className="bg-field/60 border-y border-line">
          <div className="mx-auto max-w-[1060px] px-5 py-14">
            <p className="kicker">{insideFree.kicker}</p>
            <h2 className="font-display font-extrabold text-[1.8rem] sm:text-[2.3rem] tracking-tight mt-2">{insideFree.title}</h2>
            <ul className="mt-5 space-y-2.5 max-w-[640px]">
              {insideFree.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[1.05rem]">
                  <span aria-hidden="true" className="text-go-text font-bold">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <p className="kicker">{insideFree.panelTitle}</p>
                <p className="font-display font-bold text-lg mt-3">{insideFree.funnel.name}</p>
                <p className="text-muted text-sm mt-1">{insideFree.funnel.meta}</p>
                <ol className="mt-5 space-y-2">
                  {insideFree.funnel.steps.map((s) => (
                    <li key={s.num} className="flex items-center gap-3">
                      <span className="rail-num w-4">{s.num}</span>
                      <span className={s.seen ? "text-[15px]" : "text-[15px] text-muted"}>{s.label}</span>
                      {!s.seen && <span className="ml-auto text-[12px] text-muted border border-line rounded-full px-2 py-0.5">Not seen yet</span>}
                      {s.seen && s.num === 3 && <span className="hand ml-auto">Watch this first</span>}
                    </li>
                  ))}
                </ol>
                <button className="btn-go mt-6 w-full" type="button">Copy for your agent <span aria-hidden="true">→</span></button>
              </div>

              <div className="space-y-6">
                <div className="card p-6">
                  <p className="kicker">{insideFree.stepCard.kicker}</p>
                  <p className="font-display font-bold text-lg mt-2">{insideFree.stepCard.title}</p>
                  <p className="eyebrow mt-4">{insideFree.stepCard.moveLabel}</p>
                  <p className="mt-1 text-[1.02rem]">{insideFree.stepCard.move}</p>
                </div>
                <div className="card p-6">
                  <p className="eyebrow">{insideFree.stepCard.emailsLabel}</p>
                  <div className="mt-4 flex items-end gap-1.5" aria-hidden="true">
                    {insideFree.stepCard.days.map((d) => (
                      <div key={d} className="flex-1 text-center">
                        <div
                          className="bg-go/85 rounded-t-sm"
                          style={{ height: `${18 + d * 7}px` }}
                        />
                        <p className="rail-num mt-1">{d}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-muted mt-3">Day 0 to day 7 — the welcome, the lessons, the story, the offer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The library ──────────────────────────────────── */}
        <section className="mx-auto max-w-[1060px] px-5 py-14">
          <p className="kicker">{libraryTeaser.kicker}</p>
          <h2 className="font-display font-extrabold text-[1.8rem] sm:text-[2.3rem] tracking-tight mt-2 max-w-[760px]">
            Real pages taken apart <mark>section by section</mark>
          </h2>
          <p className="mt-4 text-muted max-w-[640px]">{libraryTeaser.sub1}</p>
          <p className="mt-2 text-muted max-w-[640px]">{libraryTeaser.sub2}</p>
          <p className="mt-4">{libraryTeaser.sub3}</p>
          <p className="mt-1 text-[14px] text-muted">{libraryTeaser.sub4}</p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {libraryTeaser.tiles.map((t) => (
              <Link key={t.brand} href="/library" className="card overflow-hidden hover:border-muted transition-colors group">
                <div className="aspect-[4/3] bg-field overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={`${t.brand} — ${t.move}`} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="p-3.5">
                  <p className="text-[11.5px] font-mono uppercase tracking-wide text-go-text">{t.kind}</p>
                  <p className="font-display font-bold mt-0.5">{t.brand}</p>
                  <p className="text-[13px] text-muted mt-1.5 leading-snug">{t.move}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── New every week ───────────────────────────────── */}
        <section className="bg-night text-paper">
          <div className="mx-auto max-w-[1060px] px-5 py-14">
            <p className="kicker" style={{ color: "#9aa38d" }}>{newEveryWeek.kicker}</p>
            <div className="mt-6 grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                {newEveryWeek.lines.map((l, i) => (
                  <p key={i} className={i === 1 ? "text-[1.1rem]" : "text-[1.1rem] text-[#c8cfbd]"}>
                    {i === 1 ? <mark>{l}</mark> : l}
                  </p>
                ))}
              </div>
              <ol className="space-y-3">
                {newEveryWeek.steps.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-4 border-b border-[#2a3022] pb-3">
                    <span className="rail-num w-5" style={{ color: "#9aa38d" }}>{i + 1}</span>
                    <span className="font-semibold">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="eyebrow mt-12" style={{ color: "#7fd6a4" }}>{newEveryWeek.added.kicker}</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {newEveryWeek.added.items.map((a) => (
                <div key={a.brand} className="flex gap-4 border border-[#2a3022] rounded-xl p-4">
                  <div className="w-20 h-20 rounded-lg bg-[#1d2315] shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a.img} alt={`${a.brand} capture`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wide" style={{ color: "#7fd6a4" }}>{a.badge} · {a.kind}</p>
                    <p className="font-display font-bold">{a.brand}</p>
                    <p className="text-[13.5px] text-[#c8cfbd] mt-1 leading-snug">{a.move}</p>
                    <p className="text-[12px] font-mono mt-1.5" style={{ color: "#9aa38d" }}>{a.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Then your agent builds yours ─────────────────── */}
        <section className="mx-auto max-w-[1060px] px-5 py-14">
          <p className="kicker">{kitSection.kicker}</p>
          <h2 className="font-display font-extrabold text-[1.8rem] sm:text-[2.3rem] tracking-tight mt-2">
            Then your agent builds <mark>yours</mark>.
          </h2>
          <p className="mt-5 text-[1.08rem] max-w-[720px]">{kitSection.body}</p>
          <ul className="mt-5 space-y-2.5">
            {kitSection.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[1.02rem]">
                <span aria-hidden="true" className="text-go-text font-bold">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Instead of ───────────────────────────────────── */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-[1060px] px-5 py-14">
            <p className="kicker">{insteadOf.kicker}</p>
            <div className="mt-6 overflow-x-auto scroll-slim">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr>
                    <th className="py-2 pr-4 font-display font-bold">Instead of</th>
                    <th className="py-2 pr-4 font-display font-bold">What it misses</th>
                    <th className="py-2 font-display font-bold">Here</th>
                  </tr>
                </thead>
                <tbody>
                  {insteadOf.rows.map((r) => (
                    <tr key={r.alt} className="border-t border-line align-top">
                      <td className="py-4 pr-4 font-semibold whitespace-nowrap">{r.alt}</td>
                      <td className="py-4 pr-4 text-muted text-[14.5px]">{r.altMiss}</td>
                      <td className="py-4 text-[15px]">{r.here}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="bg-field/60 border-y border-line">
          <div className="mx-auto max-w-[1060px] px-5 py-14">
            <p className="kicker">{faq.kicker}</p>
            <div className="mt-5 max-w-[760px] space-y-3">
              {faq.items.map((f) => (
                <details key={f.q} className="card group">
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-display font-bold text-[1.05rem] list-none">
                    {f.q}
                    <span aria-hidden="true" className="text-muted group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-[15.5px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────── */}
        <section className="mx-auto max-w-[1060px] px-5 py-16">
          <h2 className="font-display font-extrabold text-[1.9rem] sm:text-[2.5rem] tracking-tight">{finalCta.title}</h2>
          <p className="mt-3 text-muted text-[1.05rem]">{finalCta.sub}</p>
          <div className="mt-8">
            <JoinForm compact cta="Get free access" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
