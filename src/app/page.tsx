import { AdSlot } from "@/components/AdSlot";
import { AffiliateGrid } from "@/components/AffiliateGrid";
import { EmailCapture } from "@/components/EmailCapture";
import { TaxCalculator } from "@/components/TaxCalculator";

const FAQS = [
  {
    q: "How much should a 1099 freelancer set aside for taxes?",
    a: "Many freelancers aim for 25-35% of gross, but it depends on profit, filing status, and state. Use the calculator above for a personalized estimate that includes self-employment tax.",
  },
  {
    q: "When are quarterly estimated taxes due?",
    a: "Typically mid-April, mid-June, mid-September, and mid-January of the following year. Missing them can mean underpayment penalties even if you file on time in April.",
  },
  {
    q: "Is self-employment tax the same as income tax?",
    a: "No. Self-employment tax (~15.3%) covers Social Security and Medicare. You may also owe federal and state income tax on top of that.",
  },
  {
    q: "Is this tax advice?",
    a: "No. SetAside is an educational estimator. Talk to a CPA or enrolled agent for your situation — especially if you have W-2 wages, investments, or employees.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-950 to-slate-950"
      />

      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <a href="/" className="flex items-center gap-2 font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-sm text-slate-950">
            $
          </span>
          SetAside
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#calculator" className="text-slate-400 hover:text-white">
            Calculator
          </a>
          <a href="#tools" className="hidden text-slate-400 hover:text-white sm:inline">
            Tools
          </a>
          <a
            href="#checklist"
            className="rounded-full bg-emerald-500 px-3.5 py-1.5 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Free checklist
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-5xl px-4 pb-10 pt-8 text-center sm:pt-14">
          <p className="inline-flex items-center rounded-full border border-emerald-800/60 bg-emerald-950/50 px-3 py-1 text-xs font-medium text-emerald-300">
            Built for freelancers, creators & gig workers
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Know how much to{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              set aside
            </span>{" "}
            for 1099 taxes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Instant quarterly estimate from your income, expenses, filing
            status, and state — so April is boring (in a good way).
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
            <span>✓ Free, no signup required</span>
            <span>✓ SE + federal + state</span>
            <span>✓ Mobile-friendly</span>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-12">
          <TaxCalculator />
        </section>

        <div className="mx-auto max-w-5xl px-4 pb-8">
          <AdSlot label="Leaderboard ad slot" />
        </div>

        <EmailCapture />

        <AffiliateGrid />

        <section className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-white">FAQ</h2>
          <dl className="mt-8 space-y-4">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <dt className="font-semibold text-white">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-400">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mx-auto max-w-5xl px-4 pb-16">
          <AdSlot label="Footer ad slot" />
        </div>
      </main>

      <footer className="relative z-10 border-t border-slate-900 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} SetAside · Educational estimator only ·
          Not tax, legal, or financial advice
        </p>
        <p className="mt-1">
          Monetization: affiliates + AdSense · Money Me / Kenny Alves
        </p>
      </footer>
    </div>
  );
}
