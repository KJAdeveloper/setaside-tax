const RADAR =
  "https://opportunity-radar-kjaagent-1178.vercel.app?utm_source=setaside&utm_medium=footer&utm_campaign=earn_network";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-slate-900 py-8 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} SetAside · Educational estimator only ·
        Not tax, legal, or financial advice
      </p>
      <p className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <a href="/" className="hover:text-slate-300">
          Calculator
        </a>
        <a href="/guides" className="hover:text-slate-300">
          Guides
        </a>
        <a href="/#tools" className="hover:text-slate-300">
          Recommended tools
        </a>
        <a href="/#more-tools" className="hover:text-slate-300">
          More tools
        </a>
      </p>
      <p className="mt-4 text-xs leading-relaxed text-slate-600">
        Also from this earn network:{" "}
        <a
          href={RADAR}
          className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
          rel="noopener noreferrer"
        >
          Opportunity Radar
        </a>{" "}
        — CRE &amp; small-business cashflow map (free top-N ranks).
      </p>
      <p className="mt-3 text-xs text-slate-500">
        <a
          href="https://v3.coinos.io/npub1cu9kyj4hel6k72vkfqsglcesefrdn2hfrmgwz8f500mhe6pmf5fqr03wdd"
          className="text-amber-400/90 underline-offset-2 hover:text-amber-300 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Tip Lightning / Coinos
        </a>
        {" · "}
        <span className="text-slate-600">kja-radar@coinos.io</span>
      </p>
      <p className="mt-2 text-xs text-slate-600">
        Monetization: recommended tools + tips · Money Me
      </p>
    </footer>
  );
}
