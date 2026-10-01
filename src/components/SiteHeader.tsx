export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
      <a
        href="/"
        className="flex items-center gap-2 font-bold tracking-tight text-white"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-sm text-slate-950">
          $
        </span>
        SetAside
      </a>
      <nav className="flex items-center gap-4 text-sm">
        <a href="/#calculator" className="text-slate-400 hover:text-white">
          Calculator
        </a>
        <a
          href="/guides"
          className="hidden text-slate-400 hover:text-white sm:inline"
        >
          Guides
        </a>
        <a
          href="/#checklist"
          className="rounded-full bg-emerald-500 px-3.5 py-1.5 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Free checklist
        </a>
      </nav>
    </header>
  );
}
