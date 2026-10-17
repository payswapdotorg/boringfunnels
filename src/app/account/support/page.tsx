export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <div>
      <p className="kicker">SUPPORT</p>
      <h1 className="font-display font-extrabold text-[1.9rem] tracking-tight mt-2">Tell us what’s wrong.</h1>
      <p className="mt-3 text-muted">A person reads these. You do not need to be polite about it and you do not need a ticket number.</p>

      <form className="mt-6">
        <label htmlFor="sup-what" className="block text-[13px] font-semibold mb-1.5">What is happening</label>
        <textarea id="sup-what" className="field min-h-28" placeholder="We already know who you are and that you own nothing on this address. Skip all that and say what went wrong." />
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-[13px] text-muted">Website</p>
          <button className="btn-go" type="button">Send it</button>
        </div>
      </form>

      <section className="mt-10 card p-6">
        <p className="font-display font-bold">Faster than writing in</p>
        <ul className="mt-3 space-y-3 text-[15px]">
          <li><b>Your agent can’t connect.</b> <span className="text-muted">Run the connect line again, then in Claude Code type /mcp, choose boringfunnels and press Authenticate, signed in with the address you bought with.</span></li>
          <li><b>You bought with a different address.</b> <span className="text-muted">Add it under Settings and your purchase attaches itself.</span></li>
          <li><b>Charged twice, or by mistake?</b> <span className="text-muted">Say so in one line and we refund it straight away. Otherwise Pro isn’t refundable once bought.</span></li>
        </ul>
      </section>
    </div>
  );
}
