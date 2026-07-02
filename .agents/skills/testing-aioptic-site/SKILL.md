---
name: testing-aioptic-site
description: Test the AIOptic marketing site and dashboard demo (web/ Next.js app) end-to-end. Use when verifying landing page, animations, or /dashboard UI changes.
---

# Testing the AIOptic website

## Setup
- App lives in `web/` (Next.js 14 App Router + TypeScript + Tailwind + Framer Motion).
- Run: `cd web && npm install && npm run dev` → http://localhost:3000. Routes: `/` (landing) and `/dashboard` (demo).
- Verify quickly with `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000`.
- Lint/build gates: `npm run lint` and `npm run build` (all routes are static; no backend, all dashboard data is mock).

## What to test (golden paths)
1. Landing page top-to-bottom scroll: hero (animated SVG chart + floating stat cards), Trusted By marquee, Product, 16 feature cards, Live Dashboard preview (animated counters), Integrations (3 clouds + 10 provider chips), Self-hosted terminal mock, Security, Pricing (3 tiers, "Most popular" badge), Testimonials, FAQ, Contact, Footer.
2. FAQ accordion: single-open behavior — opening one item collapses the previous (check `aria-expanded`).
3. Contact form: submit an email → form is replaced by "Thanks! We'll be in touch within one business day." (client-side only, no network call).
4. Navbar anchors smooth-scroll to sections (e.g. #pricing); "Live Demo" navigates to `/dashboard`.
5. Dashboard: sidebar item clicks change the header title and active highlight (state-only, no route change); requests table includes a red 429 status row.
6. Responsive: resize window to ~500px width (`wmctrl -r :ACTIVE: -e 0,100,50,500,860` after removing maximized state) → hamburger menu appears; click opens mobile nav with Get Started button.

## Tips / gotchas
- The stripped DOM returned by computer-use includes `aria-expanded` attributes — useful for asserting accordion/menu state without pixel-checking.
- Animations respect `prefers-reduced-motion`; if animations look missing, check the OS/browser setting first.
- There is no CI configured on this repo (as of PR #1); rely on local lint/build.
- Record the walkthrough (browser UI) and annotate tests; restore window maximization after the mobile test.

## Devin Secrets Needed
None — everything runs locally with mock data.
