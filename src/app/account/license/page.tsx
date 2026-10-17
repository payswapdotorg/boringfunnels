export const metadata = { title: "License" };

export default function LicensePage() {
  return (
    <div>
      <p className="kicker">LICENSE</p>
      <h1 className="font-display font-extrabold text-[1.9rem] tracking-tight mt-2">What you are allowed to do with it.</h1>
      <p className="mt-3 text-muted">The short version: it is yours, use it on anything you are paid to build, do not sell the kit itself.</p>
      <p className="mt-6 card p-5 text-[14.5px] bg-field/60">There is nothing on this address to license yet.</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <section>
          <h2 className="font-display font-bold text-[1.2rem] text-go-text">Yes</h2>
          <ul className="mt-3 space-y-2.5 text-[15px]">
            <li className="flex gap-3"><span aria-hidden="true" className="text-go-text">✓</span>Use it for your own business, on as many of your own projects as you like.</li>
            <li className="flex gap-3"><span aria-hidden="true" className="text-go-text">✓</span>Use it for client work, and charge whatever you charge.</li>
            <li className="flex gap-3"><span aria-hidden="true" className="text-go-text">✓</span>Change anything. Rewrite anything. Feed it to any agent you like.</li>
            <li className="flex gap-3"><span aria-hidden="true" className="text-go-text">✓</span>Keep the kit you set up: it runs on your computer and never phones home. The library and its weekly additions come with an active plan.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display font-bold text-[1.2rem] text-red">No</h2>
          <ul className="mt-3 space-y-2.5 text-[15px]">
            <li className="flex gap-3"><span aria-hidden="true" className="text-red">✕</span>Do not resell the kit, or a lightly repainted version of it, as a product.</li>
            <li className="flex gap-3"><span aria-hidden="true" className="text-red">✕</span>Do not put it in a course, a members area or a swipe file that other people buy.</li>
            <li className="flex gap-3"><span aria-hidden="true" className="text-red">✕</span>Don't share your sign-in or your agent's connection. Both are tied to you.</li>
          </ul>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="font-display font-bold text-[1.1rem]">If you are not sure</h2>
        <p className="mt-2 text-muted text-[15px]">
          Ask. The honest answer is that if you are using it to do work, that is what it is for, and if you are using it to become a competing seller of it, that is not. Anything in between, write in and we will say yes or no in a sentence.
        </p>
      </section>
    </div>
  );
}
