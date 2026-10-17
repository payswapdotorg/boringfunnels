import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import type { LegalSection } from "@/data/legal";

export function LegalPage({
  title, updated, intro, sections,
}: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main id="main" className="flex-1 mx-auto w-full max-w-[640px] px-5 py-12">
        <p className="kicker">{updated}</p>
        <h1 className="font-display font-extrabold text-[2.1rem] tracking-tight mt-2">{title}</h1>
        <p className="mt-3 text-[1.05rem] text-muted">{intro}</p>
        <div className="mt-8 space-y-9">
          {sections.map((s, i) => (
            <section key={i}>
              {s.h && <h2 className="font-display font-bold text-[1.25rem] mb-3">{s.h}</h2>}
              {s.list && (
                <ul className="mb-4 space-y-2">
                  {s.list.map((li) => (
                    <li key={li} className="flex gap-3"><span aria-hidden="true" className="text-go-text">·</span><span>{li}</span></li>
                  ))}
                </ul>
              )}
              {s.paras.map((p, j) => (
                <p key={j} className="text-[15.5px] leading-relaxed mb-3">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
