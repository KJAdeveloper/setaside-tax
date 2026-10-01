import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Quarterly Estimated Tax Calculator Guide for Gig Workers",
  description:
    "Quarterly estimated taxes for Uber, DoorDash, freelancers, and other gig workers: due dates, how much to pay, and a free calculator.",
  keywords: [
    "quarterly estimated tax calculator gig worker",
    "1099 quarterly taxes",
    "gig worker estimated taxes",
  ],
  alternates: { canonical: "/guides/quarterly-estimated-taxes-gig-workers" },
};

export default function GuideQuarterly() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/35 via-slate-950 to-slate-950" />
      <SiteHeader />
      <article className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-8">
        <p className="text-sm text-emerald-400"><a href="/guides" className="hover:underline">Guides</a> / Quarterly estimates</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Quarterly estimated taxes for gig workers</h1>
        <p className="mt-4 text-lg text-slate-400">If platforms issue you a 1099 and nobody withholds taxes, the IRS generally expects <strong className="text-slate-200">estimated payments</strong> four times a year.</p>
        <div className="mt-8 rounded-2xl border border-emerald-700/40 bg-emerald-950/30 p-5">
          <p className="font-semibold text-emerald-300">Free quarterly estimator</p>
          <p className="mt-1 text-sm text-slate-400">SetAside turns income and expenses into annual tax + quarterly/monthly amounts.</p>
          <a href="/#calculator" className="mt-3 inline-block rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">Calculate my quarterly amount →</a>
        </div>
        <h2 className="mt-10 text-xl font-bold text-white">Typical due dates (U.S.)</h2>
        <p className="mt-3 text-slate-400 leading-relaxed">Usually mid-April, mid-June, mid-September, and mid-January. Confirm exact dates on IRS.gov.</p>
        <h2 className="mt-10 text-xl font-bold text-white">How much should a gig worker pay each quarter?</h2>
        <p className="mt-3 text-slate-400 leading-relaxed">Estimate full-year tax, divide by four, adjust if income spikes. Mileage changes the % — re-run the <a href="/#calculator" className="text-emerald-400 hover:underline">calculator</a>.</p>
        <h2 className="mt-10 text-xl font-bold text-white">Next reads</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
          <li><a href="/guides/how-much-to-set-aside-for-1099-taxes" className="text-emerald-400 hover:underline">How much to set aside for 1099 taxes</a></li>
          <li><a href="/guides/self-employment-tax-vs-income-tax" className="text-emerald-400 hover:underline">Self-employment tax vs income tax</a></li>
        </ul>
        <p className="mt-10 text-sm text-slate-500">Educational only. Not tax advice.</p>
      </article>
      <SiteFooter />
    </div>
  );
}
