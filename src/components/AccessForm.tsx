"use client";

import { useState } from "react";

/**
 * The access page's dual sign-in: Google first, or the Stripe-receipt email
 * with "Send me a link". Mirrors the production /access form exactly.
 */
export function AccessForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [sheet, setSheet] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    try {
      const fd = new FormData();
      fd.set("email", email);
      await fetch("/api/join", { method: "POST", body: fd, credentials: "same-origin" });
      setSent(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <p className="text-[15px] mb-4">Use the Google account with your boringfunnels address, free or Pro.</p>

      <button
        type="button"
        onClick={() => setSheet(true)}
        className="w-full flex items-center justify-center gap-3 border-[1.5px] border-line rounded-[10px] bg-paper px-4 py-3.5 text-[15.5px] font-semibold hover:border-muted transition-colors"
      >
        <svg width="19" height="19" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.6 30.2.5 24 .5 14.6.5 6.5 5.9 2.6 13.8l7.8 6.1C12.3 13.9 17.6 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.4z" />
          <path fill="#FBBC05" d="M10.4 28.1a14.5 14.5 0 0 1 0-8.2l-7.8-6.1a24 24 0 0 0 0 20.4l7.8-6.1z" />
          <path fill="#34A853" d="M24 47.5c6.2 0 11.4-2 15.2-5.6l-7.6-5.9c-2.1 1.4-4.8 2.3-7.6 2.3-6.4 0-11.7-4.4-13.6-10.2l-7.8 6.1C6.5 42.1 14.6 47.5 24 47.5z" />
        </svg>
        Sign in with Google
      </button>

      <p className="flex items-center gap-3 my-4 text-[13px] text-muted" aria-hidden="true">
        <span className="flex-1 h-px bg-line" />
        <span>or</span>
        <span className="flex-1 h-px bg-line" />
      </p>

      {sent ? (
        <div className="card p-6" role="status">
          <p>
            <b>Check your email.</b> Your email with a sign-in link (and a code) is on its way. It usually lands within a minute.
          </p>
          <p className="text-sm text-muted mt-3">
            In this clone no mail is sent — the Google button above signs straight in.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor="access-email" className="block text-[13px] font-semibold mb-1.5">
              Email address <span className="font-normal text-muted">— The address on your Stripe receipt. Not the one you meant to use.</span>
            </label>
            <input
              id="access-email"
              className="field"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-[14px] text-muted">
              <input type="checkbox" defaultChecked className="accent-[#00a651]" />
              Company
            </label>
            <button className="btn-go" type="submit" disabled={busy} aria-busy={busy}>
              {busy ? "Sending…" : "Send me a link"}
            </button>
          </div>
        </form>
      )}

      {sheet && <ConsentSheet onClose={() => setSheet(false)} />}
    </div>
  );
}

function ConsentSheet({ onClose }: { onClose: () => void }) {
  const [busy, setBusy] = useState(false);
  async function go() {
    setBusy(true);
    try {
      const r = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ intent: "signin", next: "/account" }),
        credentials: "same-origin",
      });
      const d = await r.json().catch(() => ({}));
      if (d.to) window.location.assign(d.to);
      else onClose();
    } catch {
      onClose();
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink/30 p-4" role="dialog" aria-modal="true" aria-label="Sign in with Google">
      <div className="w-full max-w-[380px] rounded-2xl bg-paper shadow-2xl border border-line overflow-hidden">
        <div className="px-5 pt-5 pb-3 text-sm text-muted">Sign in</div>
        <p className="px-5 pb-2 text-[15px]">with your Google Account. This account will be available to other Google apps in the browser.</p>
        <button onClick={go} disabled={busy} className="m-4 mt-1 w-full flex items-center gap-3 border border-line rounded-xl px-4 py-3 hover:bg-field transition-colors text-left">
          <span className="w-8 h-8 rounded-full bg-field grid place-items-center font-bold text-go-text">y</span>
          <span>
            <span className="block text-[14.5px] font-semibold">Continue to your kit</span>
            <span className="block text-[12.5px] text-muted">demo account (clone)</span>
          </span>
        </button>
        <div className="px-5 py-3 border-t border-line text-[12.5px] text-muted">
          To continue, Google will share your name and email address with this site. <button className="alink" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
