import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Self-Employment Tax vs Income Tax Explained (1099)",
  description:
    "Self-employment tax vs federal income tax for freelancers: what the ~15.3% SE tax covers, how income tax stacks on top, and how much to set aside.",
  keywords: ["self employment tax vs income tax", "what is self employment tax", "1099 se tax"],
  alternates: { canonical: "/guides/self-employment-tax-vs-income-tax" },
};

export default function GuideSeVsIncome() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/35 via-slate-950 to-slate-950" />
      <SiteHeader />
      <article className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-8">
        <p className="text-sm text-emerald-400"><a href="/guides" className="hover:underline">Guides</a> / SE vs income tax</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Self-employment tax vs income tax</h1>
        <p className="mt-4 text-lg text-slate-400">They are <strong className="text-slate-200">not the same bill</strong>. Freelancers generally pay both halves of Social Security/Medicare via SE tax — plus federal and state income tax.</p>
        <div className="mt-8 rounded-2xl border border-emerald-700/40 bg-emerald-950/30 p-5">
          <p className="font-semibold text-emerald-300">See both in one estimate</p>
          <p className="mt-1 text-sm text-slate-400">SetAside breaks out SE tax, federal income tax, and a rough state estimate.</p>
          <a href="/#calculator" className="mt-3 inline-block rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">Run the calculator →</a>
        </div>
        <h2 className="mt-10 text-xl font-bold text-white">Self-employment tax (~15.3%)</h2>
        <p className="mt-3 text-slate-400 leading-relaxed">Roughly 12.4% Social Security + 2.9% Medicare on net earnings from self-employment (with nuances like the wage base).</p>
        <h2 className="mt-10 text-xl font-bold text-white">Federal (and state) income tax</h2>
        <p className="mt-3 text-slate-400 leading-relaxed">Income tax uses brackets after deductions. Filing status and state can change the bill a lot.</p>
        <h2 className="mt-10 text-xl font-bold text-white">How they stack</h2>
        <p className="mt-3 text-slate-400 leading-relaxed">Total set-aside ≈ SE + federal + state, divided across the year. Start with <a href="/guides/how-much-to-set-aside-for-1099-taxes" className="text-emerald-400 hover:underline">how much to set aside</a>, then schedule <a href="/guides/quarterly-estimated-taxes-gig-workers" className="text-emerald-400 hover:underline">quarterly payments</a>.</p>
        <p className="mt-10 text-sm text-slate-500">Educational only. Not tax advice.</p>
      </article>
      <SiteFooter />
    </div>
  );
}
