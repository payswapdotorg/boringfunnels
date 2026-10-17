export const metadata = { title: "Account settings" };

export default function SettingsPage() {
  return (
    <div>
      <p className="kicker">ACCOUNT SETTINGS</p>
      <h1 className="font-display font-extrabold text-[1.9rem] tracking-tight mt-2">Where we write to you.</h1>

      <section className="mt-8">
        <h2 className="font-display font-bold text-[1.2rem]">Your addresses</h2>
        <div className="mt-3 card p-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[14.5px]">you@example.com</p>
            <p className="text-[12.5px] text-muted">Sign-in address</p>
          </div>
          <span className="text-[12px] border border-go/40 text-go-text rounded-full px-2.5 py-0.5 font-mono uppercase tracking-wide">Free</span>
        </div>
        <p className="mt-3 text-[14px] text-muted">
          If you bought with a work address and sign in with a personal one, put the other one in here. We will send it a link. Click it and the purchase attaches itself.
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-2 max-w-[520px]">
          <label htmlFor="other-addr" className="sr-only">The other address</label>
          <input id="other-addr" className="field flex-1" type="email" placeholder="The other address" />
          <input className="field sm:w-40" placeholder="Alias" aria-label="Alias" />
          <button className="btn-ghost whitespace-nowrap" type="button">Send a link to that address</button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display font-bold text-[1.2rem]">Change your contact address</h2>
        <p className="mt-2 text-[14px] text-muted max-w-[560px]">
          This is the one to use if the address on this account is wrong: mistyped at checkout, or filled in by a wallet with an address you no longer read. We send one confirmation to the new address and nowhere else, so you never need to open the old mailbox to finish. Your purchase comes with you. The old address is told, as a courtesy.
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-2 max-w-[520px]">
          <label htmlFor="new-contact" className="sr-only">New contact address</label>
          <input id="new-contact" className="field flex-1" type="email" placeholder="New contact address" />
          <button className="btn-ghost whitespace-nowrap" type="button">Send the confirmation</button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display font-bold text-[1.2rem]">Pictures</h2>
        <p className="mt-2 text-[14px] text-muted max-w-[560px]">
          With your own image key, your agent draws a gallery of nine looks for your first page as real pictures, and makes pictures for your pages in your brand. Without one you still get three looks in type and color, and your own photos.
        </p>
        <p className="mt-3 text-[14px]">Get a key from any one of these. Each needs a little credit on that account, and the service bills you directly:</p>
        <ul className="mt-2 space-y-1.5 text-[14.5px]">
          <li><span className="font-mono text-[13.5px]">OpenAI:</span> platform.openai.com/api-keys</li>
          <li><span className="font-mono text-[13.5px]">fal:</span> fal.ai/dashboard/keys</li>
          <li><span className="font-mono text-[13.5px]">Replicate:</span> replicate.com/account</li>
          <li><span className="font-mono text-[13.5px]">Google AI Studio:</span> aistudio.google.com/apikey</li>
        </ul>
        <p className="mt-3 text-[13.5px] text-muted max-w-[560px]">
          Your board shows the cost before anything is made: usually a dollar or two for the looks. Connect it on your board (the Pictures card), never in the chat. It stays on your computer, and we never see it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display font-bold text-[1.2rem] text-red">Delete my account</h2>
        <p className="mt-2 text-[14px] text-muted max-w-[560px]">
          This removes your sign-in, your study history and your settings. Anything your agent saved into your projects is beyond our reach.
        </p>
        <button className="btn-ghost mt-3 border-red/40 text-red" type="button">Delete my account</button>
      </section>
    </div>
  );
}
