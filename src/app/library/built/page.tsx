import Link from "next/link";
import { builtSamples } from "@/data/library";

export const metadata = { title: "Built with Pro · boringfunnels" };

const segs = [
  { id: "all", label: "All" },
  { id: "service", label: "Local service" },
  { id: "course", label: "Courses" },
  { id: "product", label: "Products" },
  { id: "software", label: "Software" },
  { id: "agency", label: "Agency" },
];

export default function BuiltPage() {
  return (
    <div>
      <Link href="/library" className="alink text-[14px]">← Library</Link>
      <div className="mt-4 flex items-baseline justify-between flex-wrap gap-3">
        <h1 className="font-display font-extrabold text-[1.8rem] tracking-tight">Built with Pro</h1>
        <span className="font-mono text-sm text-muted">28</span>
      </div>
      <p className="mt-2 text-muted text-[15px] max-w-[640px]">
          Every kind of page a funnel needs — booking pages, calculators, quizzes, free classes, advertorials, software trials, one-click upsells, order forms. All built by the agent for businesses we made up to test it, each in its own look.
      </p>
      <nav className="mt-5 flex gap-2 flex-wrap" aria-label="Segments">
        {segs.map((s, i) => (
          <span key={s.id} className={`text-[13px] border rounded-full px-3 py-1 ${i === 0 ? "border-go text-go-text font-semibold" : "border-line text-muted"}`}>{s.label}</span>
        ))}
      </nav>
      <ul className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {builtSamples.map((b) => (
          <li key={b.slug}>
            <Link href={`/library/built/${b.slug}`} className="card block p-5 h-full hover:border-muted transition-colors">
              <p className="text-[11px] font-mono uppercase tracking-wide text-go-text">{b.seg}</p>
              <p className="font-display font-bold text-[1.05rem] mt-1">{b.name}</p>
              <p className="text-[13.5px] text-muted mt-1.5">{b.note}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
