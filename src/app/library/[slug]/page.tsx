import Link from "next/link";
import { notFound } from "next/navigation";
import { keystoneEmails } from "@/data/library";

const known = new Set(["keystone-roofing-emails"]);

export const metadata = { title: "Local service pages · boringfunnels" };

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!known.has(slug)) notFound();
  const d = keystoneEmails;

  return (
    <div>
      <Link href="/library" className="alink text-[14px]">← Local service pages</Link>
      <h1 className="font-display font-extrabold text-[1.7rem] tracking-tight mt-4 max-w-[640px]">{d.title}</h1>
      <p className="font-mono text-[13px] uppercase tracking-wide text-go-text mt-2">{d.kind}</p>
      <p className="mt-2 text-[14.5px]"><Link href="/library/funnels/keystone-roofing" className="alink">A step of Keystone Roofing’s funnel →</Link></p>
      <button className="btn-go mt-5" type="button">Copy agent brief</button>

      <div className="mt-10 flex gap-1.5 flex-wrap" aria-label="The sixteen follow-ups">
        {d.counts.map((n) => (
          <span key={n} className="w-9 h-9 rounded-md border border-line grid place-items-center font-mono text-[13px] hover:border-go cursor-default">{n}</span>
        ))}
      </div>
      <ul className="mt-4 flex gap-1.5 flex-wrap">
        {d.tracks.map((t, i) => (
          <li key={i} className="text-[11px] font-mono uppercase tracking-wide text-muted border border-line rounded-full px-2 py-0.5">{t}</li>
        ))}
      </ul>

      <article className="mt-10 card p-6 max-w-[680px]">
        <p className="font-mono text-[13px]">{d.first.label}</p>
        <div className="mt-2 flex gap-2">
          {d.first.tags.map((t) => (
            <span key={t} className="text-[11px] font-mono uppercase tracking-wide text-go-text border border-go/40 rounded-full px-2 py-0.5">{t}</span>
          ))}
        </div>
        <p className="kicker mt-5">THEY MUST BELIEVE</p>
        <p className="hand text-[1.3rem] mt-1">{d.first.believe}</p>
        <p className="kicker mt-5">THE MOVE</p>
        <p className="mt-1 text-[15.5px]">{d.first.move}</p>
        <p className="mt-5 text-[14px]"><button className="alink" type="button">More: the words on the page, how it looks</button></p>
      </article>

      <section className="mt-10 card bg-field/60 p-6">
        <p className="font-display font-bold">In Pro, your agent builds a funnel that sells from this, for your business</p>
        <ul className="mt-3 space-y-2 text-[14.5px]">
          <li>The skills apply it to yours: how to use each move, what to add and what not to copy</li>
          <li>Your funnel from one prompt: copy that sells, design that converts, emails that follow up</li>
        </ul>
        <Link href="/start" className="btn-go mt-4">See what Pro builds</Link>
      </section>

      <p className="mt-10 font-display font-bold text-[1.2rem]">Now have your agent build one that sells, for your business.</p>
      <p className="mt-1 text-muted text-[15px]">No guessing, no templates, no marketing expertise.</p>
    </div>
  );
}
