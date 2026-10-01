type AdSlotProps = {
  label?: string;
  className?: string;
};

/** AdSense-ready placeholder. Swap inner markup for real ad unit once approved. */
export function AdSlot({ label = "Advertisement", className = "" }: AdSlotProps) {
  return (
    <aside
      className={`flex min-h-[90px] items-center justify-center rounded-xl border border-dashed border-emerald-800/40 bg-slate-900/40 px-4 py-6 text-center ${className}`}
      aria-label={label}
      data-ad-slot="ready"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-sm text-slate-400">
          AdSense slot — paste your unit code here after approval
        </p>
      </div>
    </aside>
  );
}
