import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "How Much to Set Aside for 1099 Taxes (2026 Guide)",
  description:
    "How much should freelancers set aside for 1099 taxes? Typical 25-35% ranges, what changes your number, and a free set-aside calculator.",
  keywords: [
    "how much to set aside for 1099 taxes",
    "freelance tax percentage",
    "1099 tax set aside",
    "self employed tax savings rate",
  ],
  alternates: { canonical: "/guides/how-much-to-set-aside-for-1099-taxes" },
  openGraph: {
    title: "How Much to Set Aside for 1099 Taxes",
    description:
      "Practical set-aside percentages for freelancers and gig workers — plus a free calculator.",
    type: "article",
  },
};

export default function GuideSetAside() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/35 via-slate-950 to-slate-950"
      />
      <SiteHeader />
      <article className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-8">
        <p className="text-sm text-emerald-400">
          <a href="/guides" className="hover:underline">Guides</a> / Set-aside %
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          How much to set aside for 1099 taxes
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Short answer: many freelancers and gig workers aim for{" "}
          <strong className="text-slate-200">25–35% of gross</strong> — but
          your real number depends on profit, filing status, and state.
        </p>
        <div className="mt-8 rounded-2xl border border-emerald-700/40 bg-emerald-950/30 p-5">
          <p className="font-semibold text-emerald-300">Use the free calculator</p>
          <p className="mt-1 text-sm text-slate-400">
            Enter income, expenses, filing status, and state tax band for an instant set-aside % and quarterly amount.
          </p>
          <a href="/#calculator" className="mt-3 inline-block rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
            Open SetAside calculator →
          </a>
        </div>
        <h2 className="mt-10 text-xl font-bold text-white">Why 25–30% is only a starting point</h2>
        <p className="mt-3 text-slate-400 leading-relaxed">
          Self-employment tax alone is about <strong className="text-slate-200">15.3%</strong> on most net earnings
          (Social Security + Medicare). On top of that you may owe federal and state income tax.
        </p>
        <h2 className="mt-10 text-xl font-bold text-white">A simple workflow that works</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-400">
          <li>Estimate annual 1099 / self-employment income.</li>
          <li>Subtract realistic business expenses.</li>
          <li>Run <a href="/#calculator" className="text-emerald-400 hover:underline">SetAside</a> for SE + federal + rough state.</li>
          <li>Move that % into a separate savings account every payout.</li>
          <li>Pay quarterly estimates — see our <a href="/guides/quarterly-estimated-taxes-gig-workers" className="text-emerald-400 hover:underline">gig worker quarterly guide</a>.</li>
        </ol>
        <h2 className="mt-10 text-xl font-bold text-white">Common mistakes</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
          <li>Saving only income tax and forgetting SE tax.</li>
          <li>Using gross when expenses are high (or vice versa).</li>
          <li>Waiting until April instead of setting money aside weekly.</li>
        </ul>
        <p className="mt-10 text-sm text-slate-500">Educational only. Not CPA advice. Related: <a href="/guides/self-employment-tax-vs-income-tax" className="text-emerald-400 hover:underline">SE tax vs income tax</a></p>
      </article>
      <SiteFooter />
    </div>
  );
}
