import Link from "next/link";
import { notFound } from "next/navigation";
import { builtSamples } from "@/data/library";

export function generateStaticParams() {
  return builtSamples.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = builtSamples.find((x) => x.slug === slug);
  return { title: b ? `${b.name} · Built with Pro · boringfunnels` : "Built with Pro · boringfunnels" };
}

export default async function BuiltDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = builtSamples.find((x) => x.slug === slug);
  if (!b) notFound();

  return (
    <div>
      <Link href="/library/built" className="alink text-[14px]">← Built with Pro</Link>
      <p className="kicker mt-6">SAMPLE BUSINESS, BUILT BY PRO</p>
      <h1 className="font-display font-extrabold text-[2rem] tracking-tight mt-2">{b.name}</h1>
      <p className="text-muted mt-2 text-[15px]">{b.note} · Warm and local</p>

      <div className="mt-8 card p-6">
        <p className="kicker">WHAT THE OWNER TYPED</p>
        <p className="mt-3 text-[15px] max-w-[640px] italic">
          “I run {b.name} in town. We get plenty of leads, but we only close about 1 in 6. We're slow to call back, and after we give an estimate nobody follows up. I want the follow-up handled: a fast reply to every new lead, and a sequence that brings estimates back to a yes. Build me the funnel.”
        </p>
        <div className="mt-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-mono text-lg">1 + 13</p>
            <p className="text-[12px] text-muted">the prompt and its follow-ups</p>
          </div>
          <div>
            <p className="font-mono text-lg">61 min</p>
            <p className="text-[12px] text-muted">to the first version</p>
          </div>
          <div>
            <p className="font-mono text-lg">$1.12</p>
            <p className="text-[12px] text-muted">for the pictures</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <div className="card p-6">
          <p className="kicker">THE PLAN · THE OFFER</p>
          <p className="mt-2 text-[15px]">A free first visit booked in a minute, a text back within a minute, a written price after the visit</p>
        </div>
        <div className="card p-6">
          <p className="kicker">THE HEADLINE</p>
          <p className="mt-2 font-display font-bold text-[1.1rem]"><mark>{b.note}, booked in one minute.</mark> No waiting for a callback.</p>
        </div>
      </div>

      <section className="mt-8 card p-6">
        <p className="kicker">THE PAGES, IN ORDER</p>
        <ol className="mt-3 space-y-2">
          {["Book your visit", "You're booked", "Your estimate, explained", "The 2-minute check"].map((p, i) => (
            <li key={p} className="flex gap-3 text-[15px]"><span className="rail-num">{i + 1}</span>{p}</li>
          ))}
        </ol>
        <p className="mt-4 text-[13px] text-muted">LEARNED FROM · the library’s local-service funnels, graded 11 or 12</p>
      </section>

      <Link href="/start" className="btn-go mt-8">See what Pro builds</Link>
    </div>
  );
}
