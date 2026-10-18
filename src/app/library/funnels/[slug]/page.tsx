import Link from "next/link";
import { notFound } from "next/navigation";
import { funnelDetail, funnels } from "@/data/library";
import { CopyBriefButton } from "@/components/CopyBriefButton";

export function generateStaticParams() {
  return funnels.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = funnelDetail[slug];
  return { title: d ? `${d.name} · boringfunnels` : "Funnels · boringfunnels" };
}

export default async function FunnelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = funnelDetail[slug];
  if (!d) notFound();
  // On the fresh free tier every funnel's walk is open: the ad, the screens,
  // the emails, the edges between them. The per-step records and the skills
  // stay in Pro, rendered as the upsell at the end.
  const guitarSteps = ["ad", "optin", "confirm", "video", "email", "lessons", "offer", "checkout"];

  return (
    <div>
      <Link href="/library?mode=funnels" className="alink text-[14px]">← Funnels</Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-[2rem] tracking-tight">{d.name}</h1>
          <p className="text-[13.5px] font-mono uppercase tracking-wide text-go-text mt-1">
            {d.kind} · {d.pattern} · {d.stepsMeta}
          </p>
        </div>
        {d.brief && <CopyBriefButton brief={d.brief} />}
      </div>

      <p className="mt-4 text-muted max-w-[640px]">{d.blurb}</p>

      {/* The step rail */}
      <section className="mt-10" aria-label="The funnel, step by step">
        <ol className="space-y-0">
          {d.steps.map((s, i) => (
            <li key={s.num} className={`flex gap-4 ${i > 0 ? "-mt-px" : ""}`}>
              <div className="flex flex-col items-center">
                <span className={`w-8 h-8 rounded-full grid place-items-center font-mono text-[13px] shrink-0 border ${s.seen ? "bg-go text-go-ink border-go" : "bg-paper text-muted border-line"}`}>
                  {s.num}
                </span>
                {i < d.steps.length - 1 && <span className={`w-px flex-1 min-h-6 ${s.seen ? "bg-go/50" : "bg-line"}`} aria-hidden="true" />}
              </div>
              <div className={`pb-7 min-w-0 flex-1 ${!s.seen ? "opacity-60" : ""}`}>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h2 className="font-display font-bold text-[1.08rem]">{s.label}</h2>
                  {!s.seen && <span className="text-[11.5px] text-muted border border-line rounded-full px-2 py-0.5">Not seen</span>}
                  {s.seen && s.thought && <span className="hand text-[1.15rem]">→ {s.thought}</span>}
                </div>
                {s.seen && s.img && (
                  <div className="mt-2 w-full max-w-[420px] rounded-lg border border-line overflow-hidden bg-field">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={`${d.name} — step ${s.num}, ${s.label}`}
                      className="w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                )}
                {slug === "guitar-challenge" && s.seen && (
                  <div className="mt-2 w-full max-w-[420px] rounded-lg border border-line overflow-hidden bg-field">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/study/guitar-challenge-${guitarSteps[s.num - 1] ?? "ad"}.jpg`}
                      alt={`${d.name} — step ${s.num}, ${s.label}`}
                      className="w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {d.arrows && d.arrows.length > 0 && (
        <section className="mt-2" aria-label="How the steps connect">
          <p className="kicker mb-3">THE PATHS BETWEEN STEPS</p>
          <ul className="space-y-2">
            {d.arrows.map((a) => (
              <li key={a} className="flex gap-3 text-[15px] text-muted"><span aria-hidden="true" className="text-go-text">→</span>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {d.ads && d.ads.length > 0 && (
        <section className="mt-12" aria-label="The ads">
          <p className="kicker">1 · AD — THE ADS</p>
          <p className="mt-2 text-muted text-[15px] max-w-[640px]">
            {d.adDoes ??
              (slug === "guitar-challenge"
                ? "8 active Meta ads pointed at the opt-in page on Oct 11, 2026; the oldest started Jun 17, 2025 (482 days). The 6 longest-running are kept here. Our research walkthrough came through the oldest, ad 1004325811688575."
                : "The longest-running ads are kept here.")}
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4 items-start">
            {d.ads.map((ad, i) => (
              <article key={`${ad.headline}-${i}`} className="card p-4">
                {ad.img && (
                  <div className="mb-3 rounded-lg border border-line overflow-hidden bg-field">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ad.img}
                      alt={`${d.name}'s ad${ad.headline ? `: ${ad.headline}` : ""}`}
                      className="w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="font-display font-bold text-[15.5px]">{ad.headline}</p>
                {ad.body.trim() !== "" && <p className="text-[13.5px] text-muted mt-1.5">{ad.body}</p>}
                <p className="font-mono text-[12px] text-go-text mt-3">{ad.kind} · {ad.running} · {ad.cta}</p>
                <p className="text-[12px] mt-2">
                  <a className="alink" href={ad.lib ?? "https://www.facebook.com/ads/library/"} target="_blank" rel="noreferrer">In the Ad Library ↗</a>
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {d.observed && (
        <p className="mt-10 text-[13.5px] text-muted border-l-2 border-line pl-4 max-w-[640px]">{d.observed}</p>
      )}

      {/* This week's study: the three moves to steal */}
      {d.moves && d.moves.length > 0 && (
        <section className="mt-12" aria-label="Steal these three">
          <p className="kicker">STEAL THESE THREE</p>
          <ol className="mt-4 space-y-6">
            {d.moves.map((m) => (
              <li key={m.title} className="max-w-[680px]">
                <h3 className="font-mono text-[13px] font-bold uppercase tracking-wide">{m.title}</h3>
                <p className="mt-2 text-[15.5px]">{m.body}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {slug === "keystone-roofing" && (
        <section className="mt-12" aria-label="The study">
          <p className="kicker">THIS WEEK’S STUDY, FREE</p>
          <h2 className="font-display font-extrabold text-[1.6rem] tracking-tight mt-2 max-w-[640px]">
            Where every roofer offers a free inspection, the one who answers wins.
          </h2>
          <p className="mt-3 text-[15.5px] max-w-[680px]">
            Keystone Roofing, a sample Kansas City roofer, gets 60 to 80 leads a month and closes about 1 in 6. We played the owner in a test run and typed why into the agent as one prompt: slow callbacks, and nobody follows up after an estimate. Pro read the local market, found the promise the three Kansas City roofers it read leave open, and built the funnel around it: book in a minute, a text back in a minute, and an estimate that explains itself.
          </p>
          <p className="mt-4 font-mono text-[13px] text-muted">16 emails taken apart · 8 of 9 steps seen</p>
          <Link href="/library/keystone-roofing-emails" className="alink inline-block mt-4 font-semibold">The sixteen follow-ups, taken apart →</Link>
        </section>
      )}

      <section className="mt-12 card bg-night text-paper p-6" aria-label="Pro upsell">
        <p className="kicker" style={{ color: "#9aa38d" }}>IN PRO, YOUR AGENT BUILDS A FUNNEL THAT SELLS FROM THIS, FOR YOUR BUSINESS</p>
        <ul className="mt-4 space-y-2.5 text-[15px]">
          <li>The skills apply it to yours: how to use each move, what to add and what not to copy</li>
          <li>Your funnel from one prompt: copy that sells, design that converts, emails that follow up</li>
          <li>Checked by a second reviewer, then live fast</li>
        </ul>
        <Link href="/start" className="btn-go mt-5">See what Pro builds</Link>
      </section>
    </div>
  );
}
