import Link from "next/link";

export const metadata = { title: "Boring Marketing, LLC" };

export default async function BuyPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  const monthly = plan === "monthly";
  const price = monthly ? "$79.00" : "$299.00";
  const per = monthly ? "month" : "year";

  return (
    <div className="min-h-screen flex flex-col bg-night text-paper">
      <header>
        <div className="mx-auto max-w-[520px] px-5 h-16 flex items-center">
          <Link href="/start" className="text-[15px] hover:underline" style={{ color: "#c8cfbd" }}>Back</Link>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-[520px] px-5 pb-16">
        <h1 className="font-display font-extrabold text-[1.7rem]">Subscribe to boringfunnels.com</h1>
        <p className="mt-4 text-3xl font-display font-extrabold">{price} <span className="text-base font-normal text-[#9aa38d]">per {per}</span></p>

        <div className="mt-6 border border-[#2a3022] rounded-xl p-4 text-[14.5px]">
          <p className="flex justify-between"><span className="text-[#9aa38d]">Billed {monthly ? "monthly" : "annually"}</span><span>{price}</span></p>
          <p className="flex justify-between mt-2"><span className="text-[#9aa38d]">Subtotal</span><span>{price}</span></p>
          <p className="flex justify-between mt-2 font-semibold"><span>Total due today</span><span>{price}</span></p>
        </div>

        <p className="mt-6 text-[13.5px] text-[#9aa38d]">
          boringfunnels.com — The full funnel library on the web and inside your coding agent: a real funnel taken apart every week, and the tools to build yours via MCP.
        </p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold">Contact information</h2>
          <label className="block mt-3">
            <span className="block text-[13px] text-[#9aa38d] mb-1.5">Email</span>
            <input className="field" type="email" placeholder="you@example.com" />
          </label>
          <h2 className="text-lg font-semibold mt-7">Payment method</h2>
          <div className="mt-3 border border-[#2a3022] rounded-xl p-4">
            <p className="font-semibold text-[15px]">Card</p>
            <div className="mt-3 space-y-3">
              <input className="field font-mono" placeholder="1234 1234 1234 1234" inputMode="numeric" />
              <div className="grid grid-cols-2 gap-3">
                <input className="field font-mono" placeholder="MM / YY" />
                <input className="field font-mono" placeholder="CVC" />
              </div>
              <input className="field" placeholder="Cardholder name" />
              <p className="text-[12px] text-[#9aa38d]">Accepted: Visa, Mastercard, American Express, UnionPay, JCB, Discover, Diners Club</p>
            </div>
          </div>
          <p className="mt-6 text-[12.5px] text-[#9aa38d]">
            This is a study clone — the checkout is a facsimile of the production Stripe form and charges nothing. The real checkout runs on Stripe (Boring Marketing, LLC).
          </p>
          <button className="btn-go w-full mt-6 text-[1.02rem]" type="button" disabled style={{ opacity: 0.5 }}>Pay {price}</button>
        </section>
      </main>
    </div>
  );
}
