"use client";

import { useMemo, useState } from "react";
import {
  calculateSetAside,
  formatPct,
  formatUsd,
  type FilingStatus,
} from "@/lib/taxMath";

const STATES: { label: string; rate: number }[] = [
  { label: "No state income tax (TX, FL, WA…)", rate: 0 },
  { label: "Low (~3%)", rate: 3 },
  { label: "Average (~5%)", rate: 5 },
  { label: "High (~7%)", rate: 7 },
  { label: "Very high (~9%+ CA/NY-ish)", rate: 9.5 },
];

export function TaxCalculator() {
  const [income, setIncome] = useState(75000);
  const [expenses, setExpenses] = useState(12000);
  const [status, setStatus] = useState<FilingStatus>("single");
  const [stateRate, setStateRate] = useState(5);

  const result = useMemo(
    () =>
      calculateSetAside({
        annualIncome: income,
        annualExpenses: expenses,
        filingStatus: status,
        stateRatePct: stateRate,
      }),
    [income, expenses, status, stateRate]
  );

  return (
    <div id="calculator" className="grid gap-6 lg:grid-cols-5 lg:gap-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/40 lg:col-span-3">
        <h2 className="text-lg font-semibold text-white">Your numbers</h2>
        <p className="mt-1 text-sm text-slate-400">
          Estimates only — not tax advice. Uses simplified 2026 brackets + SE tax.
        </p>

        <div className="mt-6 space-y-5">
          <Field
            label="Expected annual 1099 / self-employment income"
            value={income}
            onChange={setIncome}
            prefix="$"
          />
          <Field
            label="Expected business expenses / write-offs"
            value={expenses}
            onChange={setExpenses}
            prefix="$"
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Filing status
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  ["single", "Single"],
                  ["married", "Married"],
                  ["hoh", "Head of HH"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setStatus(value)}
                  className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                    status === value
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-300"
                      : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="state"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              State income tax (rough)
            </label>
            <select
              id="state"
              value={stateRate}
              onChange={(e) => setStateRate(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            >
              {STATES.map((s) => (
                <option key={s.label} value={s.rate}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:col-span-2">
        <div className="rounded-2xl border border-emerald-700/50 bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-slate-950 shadow-xl shadow-emerald-900/30">
          <p className="text-sm font-semibold uppercase tracking-wide opacity-80">
            Set aside
          </p>
          <p className="mt-1 text-5xl font-bold tracking-tight">
            {formatPct(result.setAsidePct)}
          </p>
          <p className="mt-2 text-sm font-medium opacity-90">
            of gross income → {formatUsd(result.totalTax)} / year
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Stat label="Each quarter" value={formatUsd(result.quarterlyPayment)} />
          <Stat label="Each month" value={formatUsd(result.monthlySetAside)} />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 text-sm">
          <p className="font-medium text-slate-300">Breakdown</p>
          <ul className="mt-3 space-y-2 text-slate-400">
            <li className="flex justify-between gap-4">
              <span>Net profit</span>
              <span className="font-mono text-slate-200">{formatUsd(result.netProfit)}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Self-employment tax</span>
              <span className="font-mono text-slate-200">{formatUsd(result.selfEmploymentTax)}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Federal income tax</span>
              <span className="font-mono text-slate-200">{formatUsd(result.federalIncomeTax)}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>State income tax</span>
              <span className="font-mono text-slate-200">{formatUsd(result.stateIncomeTax)}</span>
            </li>
          </ul>
          <a
            href="#checklist"
            className="mt-4 block rounded-xl bg-white/5 py-2.5 text-center font-semibold text-emerald-400 transition hover:bg-white/10"
          >
            Get free reminder + checklist →
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            {prefix}
          </span>
        )}
        <input
          type="number"
          min={0}
          step={500}
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className={`w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pr-4 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
            prefix ? "pl-8" : "pl-4"
          }`}
        />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-white">{value}</p>
    </div>
  );
}
