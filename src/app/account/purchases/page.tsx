export const metadata = { title: "Purchases" };

export default function PurchasesPage() {
  return (
    <div>
      <p className="kicker">PURCHASES</p>
      <h1 className="font-display font-extrabold text-[1.9rem] tracking-tight mt-2">What you’ve bought, and what it costs you.</h1>
      <p className="mt-4 text-muted">Nothing yet — you are on the free library.</p>
      <div className="mt-6 card p-5">
        <p className="text-[14.5px]">
          There is no Stripe customer on your purchase, which happens with an older or imported sale. Your receipt is still in the email Stripe sent you at the time. Ask on the <a className="alink" href="/account/support">support page</a> and we will send it again.
        </p>
      </div>
      <p className="mt-6 text-[14px] text-muted">
        Cancelling: anytime from here. Nothing more is charged, and you keep access to the end of the month or year you paid for.
      </p>
    </div>
  );
}
