const UTM =
  "utm_source=setaside&utm_medium=affiliate&utm_campaign=launch";

const OFFERS = [
  {
    name: "TurboTax Premium",
    blurb:
      "DIY filing for Schedule C / 1099 self-employment income (formerly Self-Employed).",
    cta: "See TurboTax Premium",
    href: `https://turbotax.intuit.com/personal-taxes/online/premium/?${UTM}`,
    tag: "Filing",
  },
  {
    name: "Keeper Tax",
    blurb:
      "Scan bank & Stripe feeds for write-offs so you keep more of every 1099 dollar.",
    cta: "Visit Keeper Tax",
    href: `https://www.keepertax.com/?${UTM}`,
    tag: "Deductions",
  },
  {
    name: "Wave Accounting",
    blurb:
      "Free invoicing + bookkeeping so April is not a scramble.",
    cta: "Start with Wave",
    href: `https://www.waveapps.com/?${UTM}`,
    tag: "Books",
  },
  {
    name: "Found",
    blurb:
      "Banking built for the self-employed — tax tools alongside your business account.",
    cta: "Explore Found",
    href: `https://found.com/?${UTM}`,
    tag: "Banking",
  },
];

export function AffiliateGrid() {
  return (
    <section id="tools" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          Recommended tools
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Tools that pair well with a set-aside plan
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Honest recommendations — we are{" "}
          <strong className="font-medium text-slate-300">
            not paid partners yet
          </strong>
          . Links go to official product pages with tracking params so we can
          swap in affiliate IDs later. No extra cost to you.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {OFFERS.map((o) => (
          <a
            key={o.name}
            href={o.href}
            target="_blank"
            rel="noopener noreferrer"
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
