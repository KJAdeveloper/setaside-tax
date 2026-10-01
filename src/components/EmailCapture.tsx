"use client";

import { FormEvent, useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("err");
      return;
    }
    try {
      const key = "setaside_waitlist";
      const prev = JSON.parse(localStorage.getItem(key) || "[]") as string[];
      if (!prev.includes(trimmed)) {
        localStorage.setItem(key, JSON.stringify([...prev, trimmed]));
      }
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("ok");
    }
  }

  return (
    <section
      id="checklist"
      className="border-y border-emerald-900/40 bg-gradient-to-b from-emerald-950/40 to-slate-950"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-14 text-center sm:flex-row sm:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Free: Quarterly tax reminder + deductible checklist
          </h2>
          <p className="mt-2 text-slate-400">
            Get a calendar nudge before each IRS estimated due date, plus a
            one-page write-off list for freelancers and gig workers.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-md flex-col gap-2 sm:w-auto sm:min-w-[320px]"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="you@email.com"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Send me it
            </button>
          </div>
          {status === "ok" && (
            <p className="text-sm text-emerald-400">
              You&apos;re on the list. Wire a real ESP (Buttondown / Resend /
              Mailchimp) to deliver the PDF.
            </p>
          )}
          {status === "err" && (
            <p className="text-sm text-rose-400">Enter a valid email.</p>
          )}
          <p className="text-xs text-slate-500">
            No spam. Unsubscribe anytime. Stored locally until ESP is connected.
          </p>
        </form>
      </div>
    </section>
  );
}
