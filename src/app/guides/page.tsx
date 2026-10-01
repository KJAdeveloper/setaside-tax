import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "1099 Tax Guides for Freelancers & Gig Workers",
  description:
    "Practical guides on how much to set aside for 1099 taxes, quarterly estimated payments for gig workers, and self-employment tax vs income tax.",
  alternates: { canonical: "/guides" },
};

const GUIDES = [
  {
    href: "/guides/how-much-to-set-aside-for-1099-taxes",
    title: "How much to set aside for 1099 taxes",
    blurb:
      "A practical percentage range, what drives it up or down, and a free calculator.",
  },
  {
    href: "/guides/quarterly-estimated-taxes-gig-workers",
    title: "Quarterly estimated taxes for gig workers",
    blurb:
      "Due dates, underpayment penalties, and a simple quarterly workflow.",
  },
  {
    href: "/guides/self-employment-tax-vs-income-tax",
    title: "Self-employment tax vs income tax",
    blurb:
      "Why SE tax is separate from federal income tax — and how both hit 1099 earners.",
  },
];

export default function GuidesIndex() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-950 to-slate-950"
      />
      <SiteHeader />
      <main className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          Guides
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          1099 tax guides for freelancers & gig workers
        </h1>
        <p className="mt-3 text-slate-400">
          Educational only — not tax advice. Use the{" "}
          <a href="/#calculator" className="text-emerald-400 hover:underline">
            free SetAside calculator
          </a>{" "}
          for a personalized estimate.
        </p>
        <ul className="mt-10 space-y-4">
          {GUIDES.map((g) => (
            <li key={g.href}>
              <a
                href={g.href}
                className="block rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-emerald-600/50"
              >
                <h2 className="text-lg font-semibold text-white">{g.title}</h2>
                <p className="mt-2 text-sm text-slate-400">{g.blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-emerald-400">
                  Read guide →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
