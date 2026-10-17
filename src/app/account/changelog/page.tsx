export const metadata = { title: "Changelog" };

export default function ChangelogPage() {
  return (
    <div>
      <p className="kicker">CHANGELOG</p>
      <h1 className="font-display font-extrabold text-[1.9rem] tracking-tight mt-2">What changed, and when.</h1>
      <p className="mt-4 text-muted">Nothing to report yet. When there is, it appears here and in Downloads, and you get an email.</p>
      <p className="mt-6 text-[14.5px]">
        Any time you want your kit again, go to <span className="font-mono text-[13.5px]">boringfunnels.com/access</span> and enter the email address you bought with. That is the only address you need to remember.
      </p>
    </div>
  );
}
