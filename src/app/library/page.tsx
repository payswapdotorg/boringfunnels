import Link from "next/link";
import {
  deepDives,
  funnels,
  funnelDetail,
  pagesCatalog,
  sectionsCatalog,
} from "@/data/library";
import { CopyBriefButton } from "@/components/CopyBriefButton";

export const metadata = { title: "Pages that sell · boringfunnels" };

const views = [
  { id: "", label: "Deep dives", n: "6" },
  { id: "funnels", label: "Funnels", n: "15" },
  { id: "pages", label: "Pages", n: "192" },
  { id: "sections", label: "Sections", n: "60" },
];

function ViewTabs({ mode }: { mode: string }) {
  return (
    <nav className="flex flex-wrap gap-2 mb-8" aria-label="Library views">
      {views.map((v) => {
        const active = mode === v.id;
        return (
          <Link
            key={v.id || "dives"}
            href={v.id ? `/library?mode=${v.id}` : "/library"}
            aria-current={active ? "page" : undefined}
            className={`text-[13px] border rounded-full px-3.5 py-1.5 transition-colors ${
              active
                ? "border-go text-go-text font-semibold"
                : "border-line text-muted hover:border-muted"
            }`}
          >
            {v.label} <span className="font-mono ml-1">{v.n}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function WelcomeCard() {
  return (
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
  );
}

function DeepDives() {
  return (
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
          <article key={d.slug} className={`card overflow-hidden ${i === 0 ? "border-go" : ""}`}>
            {d.img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={d.img} alt="" className="w-full h-32 object-cover object-top border-b border-line bg-field" loading="lazy" />
            )}
            <div className="p-5">
              {i === 0 && <p className="eyebrow">THIS WEEK</p>}
              <h3 className="font-display font-bold text-[1.15rem] mt-1">{d.name}</h3>
              <p className="text-[13px] font-mono uppercase tracking-wide text-go-text mt-1">{d.kind}</p>
              <p className="mt-2 text-muted text-[15px] max-w-[600px]">{d.blurb}</p>
              {d.free ? (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-mono text-muted">{(d.steps ?? []).join(" · ")}</span>
                  <Link href={`/library/funnels/${d.slug}`} className="alink text-[14.5px] font-semibold">Open the deep dive →</Link>
                  {funnelDetail[d.slug]?.brief && (
                    <CopyBriefButton brief={funnelDetail[d.slug].brief as string} label="Copy agent brief" className="btn-ghost text-[13px]" />
                  )}
                </div>
              ) : (
                <div className="mt-4 flex items-center gap-3">
                  <Link href={`/library/funnels/${d.slug}`} className="alink text-[14.5px] font-semibold">Open the funnel →</Link>
                  {funnelDetail[d.slug]?.brief ? (
                    <CopyBriefButton brief={funnelDetail[d.slug].brief as string} label="Copy brief" className="btn-ghost text-[13px]" />
                  ) : (
                    <button className="btn-ghost text-[13px]" type="button">Copy brief</button>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FunnelsList() {
  return (
    <section aria-labelledby="funnels" className="mt-12">
      <div className="flex items-baseline justify-between">
        <h2 id="funnels" className="font-display font-extrabold text-[1.5rem] tracking-tight">Funnels</h2>
        <span className="font-mono text-sm text-muted">15</span>
      </div>
      <p className="mt-2 text-muted text-[15px] max-w-[640px]">
        Whole funnels walked from their ads: the ad, every page after it and the emails, each step pinned.
      </p>
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
    </section>
  );
}

function FunnelsGrid() {
  return (
    <section aria-labelledby="funnels">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <h1 id="funnels" className="font-display font-extrabold text-[1.8rem] tracking-tight">Funnels</h1>
        <span className="font-mono text-sm text-muted">15</span>
      </div>
      <p className="mt-2 text-muted text-[15px] max-w-[640px]">
        Whole funnels walked from their ads: the ad, every page after it and the emails, each step pinned.
      </p>
      <ul className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 items-start">
        {funnels.map((f) => (
          <li key={f.slug}>
            <Link href={`/library/funnels/${f.slug}`} className="card block overflow-hidden hover:border-muted transition-colors">
              <span className="relative flex h-28 border-b border-line bg-field">
                {f.strip.map((img) => (
                  <span key={img} className="flex-1 min-w-0 overflow-hidden border-r border-line last:border-r-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
                  </span>
                ))}
                {f.slug === "keystone-roofing" && (
                  <span className="absolute left-2 top-2 bg-go text-go-ink text-[11px] font-bold rounded-full px-2 py-0.5">Deep dive</span>
                )}
              </span>
              <span className="block p-4">
                <span className="font-display font-bold text-[1.05rem]">{f.name}</span>
                <span className="block text-[12.5px] font-mono text-muted mt-1">{f.steps} steps</span>
                <span className="block text-[13.5px] text-muted mt-2">{f.line}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PagesGrid() {
  return (
    <section aria-labelledby="pages">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <h1 id="pages" className="font-display font-extrabold text-[1.8rem] tracking-tight">Pages</h1>
        <span className="font-mono text-sm text-muted">192</span>
      </div>
      <p className="mt-2 text-muted text-[15px] max-w-[640px]">
        Whole pages with paid traffic behind them, taken apart section by section: what the buyer has to believe at each one, and the move that gets them there.
      </p>
      <ul className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 items-start">
        {pagesCatalog.map((p) => (
          <li key={p.slug}>
            <article className="card overflow-hidden h-full">
              {p.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.img} alt={`${p.name}, the first screen`} className="w-full aspect-[4/3] object-cover object-top border-b border-line bg-field" loading="lazy" />
              ) : (
                <div className="w-full aspect-[4/3] bg-field border-b border-line grid place-items-center" aria-hidden="true">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted/70">No screen pinned</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-display font-bold text-[15px]">{p.name}</h3>
                <p className="text-[12.5px] text-muted mt-1">{p.meta} · {p.kind}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SectionsGrid({ job }: { job: string }) {
  const jobs = Array.from(new Set(sectionsCatalog.map((s) => s.job)));
  const shown = job ? sectionsCatalog.filter((s) => s.job === job) : sectionsCatalog;
  return (
    <section aria-labelledby="sections">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <h1 id="sections" className="font-display font-extrabold text-[1.8rem] tracking-tight">Sections</h1>
        <span className="font-mono text-sm text-muted">{shown.length}</span>
      </div>
      <p className="mt-2 text-muted text-[15px] max-w-[640px]">
        Single sections of real pages with paid traffic behind them, each with the move it makes. Pick the job the section does.
      </p>
      <nav className="mt-4 flex flex-wrap gap-2" aria-label="Selling job">
        <Link
          href="/library?mode=sections"
          aria-current={!job ? "page" : undefined}
          className={`text-[13px] border rounded-full px-3 py-1 ${!job ? "border-go text-go-text font-semibold" : "border-line text-muted hover:border-muted"}`}
        >
          Every job <span className="font-mono ml-1">{sectionsCatalog.length}</span>
        </Link>
        {jobs.map((j) => (
          <Link
            key={j}
            href={`/library?mode=sections&job=${encodeURIComponent(j)}`}
            aria-current={job === j ? "page" : undefined}
            className={`text-[13px] border rounded-full px-3 py-1 ${job === j ? "border-go text-go-text font-semibold" : "border-line text-muted hover:border-muted"}`}
          >
            {j} <span className="font-mono ml-1">{sectionsCatalog.filter((s) => s.job === j).length}</span>
          </Link>
        ))}
      </nav>
      <ul className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 items-start">
        {shown.map((s) => (
          <li key={s.slug}>
            <article className="card overflow-hidden h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={`${s.name}: ${s.job}`} className="w-full aspect-[4/3] object-cover object-top border-b border-line bg-field" loading="lazy" />
              <div className="p-4">
                <h3 className="font-display font-bold text-[15px]">{s.name}</h3>
                <p className="text-[12.5px] font-mono uppercase tracking-wide text-go-text mt-1">{s.job}</p>
                <p className="text-[13.5px] text-muted mt-2">{s.note}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; job?: string }>;
}) {
  const { mode = "", job = "" } = await searchParams;

  return (
    <div>
      <ViewTabs mode={mode} />
      {mode === "pages" ? (
        <PagesGrid />
      ) : mode === "sections" ? (
        <SectionsGrid job={job} />
      ) : mode === "funnels" ? (
        <FunnelsGrid />
      ) : (
        <>
          <WelcomeCard />
          <DeepDives />
          <FunnelsList />
          <p className="mt-3 text-[14px] text-muted">
            Every funnel’s walk is open: the ad, the screens, the emails.{" "}
            <Link className="alink" href="/start">The rest with boringfunnels Pro</Link>.
          </p>
        </>
      )}
    </div>
  );
}
