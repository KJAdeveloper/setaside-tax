/** Approximate US self-employment + federal income tax set-aside helper (educational, not advice). */

export type FilingStatus = "single" | "married" | "hoh";

export type TaxInputs = {
  annualIncome: number;
  annualExpenses: number;
  filingStatus: FilingStatus;
  /** Rough state income tax rate as percent, e.g. 5 for 5% */
  stateRatePct: number;
};

export type TaxResult = {
  netProfit: number;
  selfEmploymentTax: number;
  federalIncomeTax: number;
  stateIncomeTax: number;
  totalTax: number;
  setAsidePct: number;
  quarterlyPayment: number;
  monthlySetAside: number;
};

const STANDARD_DEDUCTION_2026: Record<FilingStatus, number> = {
  single: 15750,
  married: 31500,
  hoh: 23625,
};

/** Simplified 2026-ish ordinary brackets (taxable income → marginal). */
function federalTaxOnTaxable(taxable: number, status: FilingStatus): number {
  if (taxable <= 0) return 0;

  const brackets: [number, number][] =
    status === "married"
      ? [
          [23850, 0.1],
          [96950, 0.12],
          [206700, 0.22],
          [394600, 0.24],
          [501050, 0.32],
          [751600, 0.35],
          [Infinity, 0.37],
        ]
      : status === "hoh"
        ? [
            [17000, 0.1],
            [64850, 0.12],
            [103350, 0.22],
            [197300, 0.24],
            [250500, 0.32],
            [375800, 0.35],
            [Infinity, 0.37],
          ]
        : [
            [11925, 0.1],
            [48475, 0.12],
            [103350, 0.22],
            [197300, 0.24],
            [250525, 0.32],
            [626350, 0.35],
            [Infinity, 0.37],
          ];

  let tax = 0;
  let prev = 0;
  for (const [limit, rate] of brackets) {
    const chunk = Math.min(taxable, limit) - prev;
    if (chunk > 0) tax += chunk * rate;
    if (taxable <= limit) break;
    prev = limit;
  }
  return tax;
}

export function calculateSetAside(inputs: TaxInputs): TaxResult {
  const income = Math.max(0, inputs.annualIncome);
  const expenses = Math.max(0, inputs.annualExpenses);
  const netProfit = Math.max(0, income - expenses);

  // SE tax on 92.35% of net earnings (simplified; SS wage base ignored for UX)
  const seBase = netProfit * 0.9235;
  const selfEmploymentTax = seBase * 0.153;
  const seDeduction = selfEmploymentTax / 2;

  const agi = Math.max(0, netProfit - seDeduction);
  const std = STANDARD_DEDUCTION_2026[inputs.filingStatus];
  const taxable = Math.max(0, agi - std);
  const federalIncomeTax = federalTaxOnTaxable(taxable, inputs.filingStatus);

  const stateRate = Math.max(0, Math.min(15, inputs.stateRatePct)) / 100;
  const stateIncomeTax = Math.max(0, agi - std) * stateRate;

  const totalTax = selfEmploymentTax + federalIncomeTax + stateIncomeTax;
  const setAsidePct = income > 0 ? (totalTax / income) * 100 : 0;

  return {
    netProfit,
    selfEmploymentTax,
    federalIncomeTax,
    stateIncomeTax,
    totalTax,
    setAsidePct,
    quarterlyPayment: totalTax / 4,
    monthlySetAside: totalTax / 12,
  };
}

export function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function formatPct(n: number): string {
  return `${n.toFixed(1)}%`;
}
