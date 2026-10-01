# SetAside — Monetization plan (Money Me)

**Live product:** Free 1099 / self-employment tax **set-aside calculator** for freelancers, creators, and gig workers.

| | |
|--|--|
| **Brand** | SetAside |
| **Repo path** | `/workspace/money-me-earn` |
| **Stack** | Next.js (App Router) + Tailwind → Vercel |
| **Live URL** | https://setaside-tax.vercel.app |
| **GitHub** | https://github.com/KJAdeveloper/setaside-tax |

---

## What’s live now (Oct 1, 2026 PT)

| Asset | Status |
|-------|--------|
| Calculator homepage | Live |
| Recommended tools (TurboTax Premium, Keeper, Wave, Found) | Live — **official product URLs + UTM**, not paid affiliate IDs yet |
| Email capture CTA | Live — stores to `localStorage` only |
| AdSense placeholder slots | Live markup — **no AdSense code** until Kenny approved |
| SEO guides | Live paths below |
| Traffic drafts | Ready in `TRAFFIC-DRAFT.md` — **not posted** (no social connectors) |

### Live SEO paths

- https://setaside-tax.vercel.app/guides
- https://setaside-tax.vercel.app/guides/how-much-to-set-aside-for-1099-taxes
- https://setaside-tax.vercel.app/guides/quarterly-estimated-taxes-gig-workers
- https://setaside-tax.vercel.app/guides/self-employment-tax-vs-income-tax
- https://setaside-tax.vercel.app/sitemap.xml

### Tool link pattern (swap affiliate IDs later)

```
utm_source=setaside&utm_medium=affiliate&utm_campaign=launch
```

Current destinations (honest “Recommended tools”, labeled **not paid partners yet**):

- TurboTax Premium: `https://turbotax.intuit.com/personal-taxes/online/premium/`
- Keeper Tax: `https://www.keepertax.com/`
- Wave: `https://www.waveapps.com/`
- Found: `https://found.com/`

Edit: `src/components/AffiliateGrid.tsx`

---

## Why this niche

| Factor | Why it wins |
|--------|-------------|
| **Intent** | “how much should I set aside for 1099 taxes”, “quarterly estimated tax calculator”, “freelance tax percentage” |
| **Competition** | Few polished single-purpose tools vs generic tax blogs |
| **Monetization** | Tax software + bookkeeping + banking + AdSense on guide pages |

---

## Monetization path

1. **Affiliate IDs (Kenny)** — Join TurboTax/Intuit, Keeper, Wave, Found (or Impact/CJ). Paste tracking URLs into `AffiliateGrid` keeping the UTM campaign name for analytics continuity.
2. **Email ESP** — Wire Buttondown / Resend / Mailchimp; form is localStorage until then.
3. **AdSense** — Apply with live URL + privacy policy; replace `AdSlot` placeholders.
4. **Later** — Paid PDF packs, CPA lead gen, Notion tax tracker.

**Do not spend money on ads until affiliates + ESP are wired.**

---

## Still needs Kenny’s accounts

| Item | Why | Status |
|------|-----|--------|
| Affiliate program approvals + tracking URLs | Earn commissions on tool clicks | **Needed** — site uses public product URLs for now |
| Email ESP (Buttondown / Resend / Mailchimp) | Deliver checklist + quarterly reminders | **Needed** |
| Google AdSense | Fill ad slots | **Needed** (+ privacy policy page) |
| Google Search Console | Index guides | **Needed** — submit sitemap |
| Social logins / posting (TikTok, X, Reddit, LinkedIn) | Traffic | **No MCP connectors** — use `TRAFFIC-DRAFT.md` manually |
| Custom domain (optional) | Branding | Optional; `*.vercel.app` is fine |
| Analytics (Vercel / Plausible / GA4) | Measure funnel | Optional |
| Stripe | Only if selling PDFs later | Not required for v1 |

---

## Traffic (next action)

Exact next action: **Kenny (or agent with his login) posts the TikTok/Reel 20s script from `TRAFFIC-DRAFT.md`**, link in bio → https://setaside-tax.vercel.app  
Then one Reddit value-reply in an existing thread (r/freelance or r/gigwork), then X Post 1.

---

## Deploy notes

- Vercel project: `setaside-tax` (`prj_KChvWw3Rh7eXqxcAXslmis28jA5w`)
- Production redeployed Oct 1, 2026 PT (`dpl_E8WpYAb5st7bSZ5wxqUiNAQzA5TT`) — affiliates + guides verified live
- Git→Vercel still hits `git_info_fail`; use MCP `upload_file` (SHA) + `create_deployment` (hybrid) instead
- Env optional: `NEXT_PUBLIC_SITE_URL=https://setaside-tax.vercel.app`

---

## Success metrics (30 days)

- 500+ calculator sessions  
- 50+ email captures  
- Affiliate click-out > 5% of sessions (after IDs live)  
- First affiliate sale  

## Disclaimer

Estimates are educational. Not CPA advice.
