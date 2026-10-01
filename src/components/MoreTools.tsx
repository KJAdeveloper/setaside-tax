const RADAR = "https://opportunity-radar-kjaagent-1178.vercel.app";
const utm = (campaign: string) =>
  `utm_source=setaside&utm_medium=crosspromo&utm_campaign=${campaign}`;

const links = [
  {
    href: `${RADAR}?${utm("earn_network")}`,
    label: "Opportunity Radar map",
    blurb: "CRE + small-biz cashflow ranks (free top-N)",
  },
  {
    href: `${RADAR}/guides/small-business-acquisition-roi?${utm("guide_roi")}`,
    label: "SB acquisition ROI guide",
    blurb: "How to estimate buy-a-business returns",
  },
  {
    href: `${RADAR}/guides/deal-scarcity-signals?${utm("guide_scarcity")}`,
    label: "Deal scarcity signals",
    blurb: "What means a deal won’t last",
  },
  {
    href: `${RADAR}/guides/sde-vs-ebitda-buyer?${utm("guide_sde")}`,
    label: "SDE vs EBITDA for buyers",
    blurb: "Which number to trust before you LOI",
  },
] as const;

export function MoreTools() {
  return (
    <section
      id="more-tools"
      className="mx-auto max-w-5xl px-4 pb-12"
      aria-labelledby="more-tools-heading"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
          More tools · Earn network
        </p>
        <h2
          id="more-tools-heading"
          className="mt-2 text-xl font-bold text-white sm:text-2xl"
        >
          Built for operators who follow the cash
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          SetAside helps freelancers park the right tax set-aside. Opportunity
          Radar ranks CRE and small-business deals by cashflow and value-add —
          free guides and top-N map, recommended tools for the rest.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 hover:border-emerald-600/50"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-semibold text-emerald-300">
                  {l.label} →
                </span>
                <span className="mt-1 block text-xs text-slate-400">{l.blurb}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-xl border border-amber-700/40 bg-amber-950/30 px-4 py-3">
          <p className="text-sm font-semibold text-amber-200">Support the free tools</p>
          <p className="mt-1 text-xs text-amber-100/70">
            Lightning tips keep SetAside and Opportunity Radar online — no account needed.
          </p>
          <a
            href="https://v3.coinos.io/npub1cu9kyj4hel6k72vkfqsglcesefrdn2hfrmgwz8f500mhe6pmf5fqr03wdd"
            className="mt-3 inline-flex rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tip via Coinos →
          </a>
          <p className="mt-2 text-[11px] text-amber-200/50">
            Lightning: kja-radar@coinos.io
          </p>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Internal network — SetAside ↔ Opportunity Radar. Sample / educational;
          not MLS or tax advice.
        </p>
      </div>
    </section>
  );
}
