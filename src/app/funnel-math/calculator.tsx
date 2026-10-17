"use client";

import Link from "next/link";
import { useState } from "react";

export function Calculator() {
  const [visitors, setVisitors] = useState(2000);
  const [cvr, setCvr] = useState(2.0);
  const [price, setPrice] = useState(300);

  const leads = Math.round((visitors * cvr) / 100);
  const buyers = Math.round(leads * 0.2);
  const revenue = buyers * price;
  const betterCvr = cvr * 1.5;
  const betterLeads = Math.round((visitors * betterCvr) / 100);
  const betterBuyers = Math.round(betterLeads * 0.2);
  const betterRevenue = betterBuyers * price;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1060px] px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              <rect x="1" y="1" width="24" height="24" rx="7" fill="#00a651" />
              <path d="M6 8.5h14l-4.4 5.2v4.6L12.5 21v-7.3L6 8.5z" fill="#fff" />
            </svg>
            boringfunnels
          </Link>
          <Link href="/start" className="btn-ghost text-sm">Get Pro</Link>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-[720px] w-full px-5 py-14">
        <p className="eyebrow">Funnel math</p>
        <h1 className="font-display font-extrabold text-[2.2rem] sm:text-[2.8rem] tracking-tight mt-2 leading-[1.08]">
          What could a <mark>better funnel</mark> do for you?
        </h1>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="kicker block mb-2">VISITORS A MONTH</span>
            <input className="field font-mono" type="number" min={0} value={visitors} onChange={(e) => setVisitors(Math.max(0, +e.target.value || 0))} />
          </label>
          <label className="block">
            <span className="kicker block mb-2">OPT-IN RATE %</span>
            <input className="field font-mono" type="number" step="0.1" min={0} max={100} value={cvr} onChange={(e) => setCvr(Math.min(100, Math.max(0, +e.target.value || 0)))} />
          </label>
          <label className="block">
            <span className="kicker block mb-2">WHAT YOU SELL, $</span>
            <input className="field font-mono" type="number" min={0} value={price} onChange={(e) => setPrice(Math.max(0, +e.target.value || 0))} />
          </label>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="card p-6">
            <p className="kicker">TODAY, GUESSED</p>
            <p className="font-mono text-2xl mt-3">${revenue.toLocaleString()}</p>
            <p className="text-[13.5px] text-muted mt-2">{leads.toLocaleString()} leads · {buyers.toLocaleString()} buyers (1 in 5 leads buys)</p>
          </div>
          <div className="card border-go p-6">
            <p className="kicker text-go-text">WITH A BETTER FUNNEL (×1.5 THE OPT-IN)</p>
            <p className="font-mono text-2xl mt-3">${betterRevenue.toLocaleString()}</p>
            <p className="text-[13.5px] text-muted mt-2">{betterLeads.toLocaleString()} leads · {betterBuyers.toLocaleString()} buyers</p>
            <p className="hand mt-3">${(betterRevenue - revenue).toLocaleString()} more, same ads.</p>
          </div>
        </div>

        <p className="mt-8 text-muted text-[15px] max-w-[560px]">
          The moves in the library are what move that opt-in rate: the offer, the first screen, the follow-up. Your agent applies them from one prompt.
        </p>
        <Link href="/start" className="btn-go mt-5">See what Pro builds</Link>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-[1060px] px-5 py-8 text-sm text-muted">boringfunnels · a study clone</div>
      </footer>
    </div>
  );
}
