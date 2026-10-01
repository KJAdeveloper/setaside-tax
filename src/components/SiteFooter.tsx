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
      </p>
      <p className="mt-2">Monetization: tools + AdSense · Money Me / Kenny Alves</p>
    </footer>
  );
}
