const OFFERS = [
  {
    name: "TurboTax Self-Employed",
    blurb: "File 1099 income with quarterly estimates and Schedule C help.",
    cta: "Compare pricing",
    href: "#affiliate-turbotax",
    tag: "Filing",
  },
  {
    name: "Keeper Tax",
    blurb: "Find write-offs automatically from your bank & Stripe feeds.",
    cta: "See write-offs",
    href: "#affiliate-keeper",
    tag: "Deductions",
  },
  {
    name: "Wave Accounting",
    blurb: "Free invoicing + bookkeeping so April is not a scramble.",
    cta: "Start free",
    href: "#affiliate-wave",
    tag: "Books",
  },
];

export function AffiliateGrid() {
  return (
    <section id="tools" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          Recommended next
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Tools that pay for themselves at tax time
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Affiliate links — we may earn a commission if you sign up. No extra
          cost to you. Replace hrefs with your approved partner URLs.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {OFFERS.map((o) => (
          <a
            key={o.name}
            href={o.href}
            className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-emerald-600/60 hover:bg-slate-900"
          >
            <span className="w-fit rounded-full bg-emerald-950 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
              {o.tag}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-white">{o.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              {o.blurb}
            </p>
            <span className="mt-4 text-sm font-semibold text-emerald-400 group-hover:underline">
              {o.cta} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
