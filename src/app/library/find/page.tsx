import Link from "next/link";

export const metadata = { title: "Funnel Finder · boringfunnels" };

const kinds = [
  { label: "Local service", eg: "A roofer, a cleaner, a clinic" },
  { label: "Trades", eg: "Welding, HVAC, gutters" },
  { label: "Professional services", eg: "Law, accounting, planning" },
  { label: "Software", eg: "A trial, then a seat" },
  { label: "Online store", eg: "One product, done well" },
  { label: "Courses and info", eg: "A free class, then the program" },
  { label: "Coaching", eg: "A score, then a call" },
  { label: "Agency", eg: "An audit, then a retainer" },
];

const sells = ["A service", "A product", "A subscription", "A course", "A call"];
const steps = ["One step", "Two steps", "A challenge", "A webinar"];

export default function FindPage() {
  return (
    <div>
      <Link href="/library" className="alink text-[14px]">← Library</Link>
      <h1 className="font-display font-extrabold text-[2rem] tracking-tight mt-4">Funnel Finder</h1>
      <p className="mt-2 text-muted max-w-[560px]">Four taps find the funnel that fits your business, with real ones to study and the brief for your agent.</p>

      <div className="mt-8 space-y-8">
        <fieldset>
          <legend className="kicker mb-3">1 · YOUR KIND OF BUSINESS</legend>
          <div className="grid sm:grid-cols-2 gap-2">
            {kinds.map((k, i) => (
              <button key={k.label} type="button" className={`card text-left px-4 py-3 hover:border-go transition-colors ${i === 0 ? "border-go" : ""}`}>
                <span className="block font-semibold text-[15px]">{k.label}</span>
                <span className="block text-[12.5px] text-muted">{k.eg}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="kicker mb-3">2 · WHAT YOU SELL</legend>
          <div className="flex flex-wrap gap-2">
            {sells.map((s, i) => (
              <button key={s} type="button" className={`text-[14px] border rounded-full px-4 py-1.5 ${i === 0 ? "border-go text-go-text font-semibold" : "border-line text-muted"}`}>{s}</button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="kicker mb-3">3 · HOW YOU WANT IT TO START</legend>
          <div className="flex flex-wrap gap-2">
            {steps.map((s) => (
              <button key={s} type="button" className="text-[14px] border border-line text-muted rounded-full px-4 py-1.5">{s}</button>
            ))}
          </div>
        </fieldset>
        <div className="card bg-field/60 p-6">
          <p className="kicker">4 · YOURS</p>
          <p className="mt-2 text-[15px]">With Pro, the finder hands your agent the plan, the pages and the emails — modeled on the funnels it picked.</p>
          <Link href="/start" className="btn-go mt-4">See what Pro builds</Link>
        </div>
      </div>
    </div>
  );
}
