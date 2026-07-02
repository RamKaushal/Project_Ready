"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Quote, Aperture } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

/* ---------------- Pricing ---------------- */

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    blurb: "For teams exploring AI and estimating costs.",
    features: [
      "Up to $5k/mo tracked AI spend",
      "2 providers, 1 cloud",
      "Cost forecasting & LLM comparison",
      "7-day data retention",
      "Community support",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    blurb: "For teams running AI in production.",
    features: [
      "Up to $100k/mo tracked AI spend",
      "Unlimited providers & clouds",
      "Budget alerts & anomaly detection",
      "Team & project cost allocation",
      "90-day retention, priority support",
    ],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    blurb: "For organizations governing AI at scale.",
    features: [
      "Unlimited tracked spend",
      "Self-hosted & on-prem monitoring",
      "SSO, SCIM, audit logs, RBAC",
      "Custom data residency & BAA",
      "Dedicated success engineer",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">Pricing</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Pricing that scales with your AI, not against it
          </h2>
          <p className="mt-4 text-zinc-400">
            Start free. Upgrade when your AI spend justifies it — typically we pay for
            ourselves in the first month.
          </p>
        </FadeIn>
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <div
                className={cn(
                  "glass relative h-full rounded-2xl p-8 transition-transform hover:-translate-y-1",
                  p.highlight &&
                    "border-indigo-400/40 bg-indigo-500/[0.07] shadow-xl shadow-indigo-500/10"
                )}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                )}
                <h3 className="mb-1 font-semibold">{p.name}</h3>
                <p className="mb-4 text-sm text-zinc-500">{p.blurb}</p>
                <p className="mb-6">
                  <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm text-zinc-500"> {p.period}</span>
                </p>
                <ul className="mb-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "block rounded-xl px-4 py-2.5 text-center text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]",
                    p.highlight
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25"
                      : "border border-white/15 text-zinc-200 hover:bg-white/5"
                  )}
                >
                  {p.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const testimonials = [
  {
    quote:
      "We were burning $60k/month across four AI providers with zero attribution. AIOptic gave us per-team cost allocation in a week and cut our bill by a third.",
    name: "Priya Raman",
    role: "CTO, Series B fintech",
  },
  {
    quote:
      "The LLM comparison dashboard ended six months of internal debate. We routed 40% of traffic to a cheaper model with identical quality scores.",
    name: "Marcus Webb",
    role: "Head of AI Platform, e-commerce",
  },
  {
    quote:
      "Finance finally trusts our AI forecasts. Budget alerts caught a runaway agent loop that would have cost us $12k overnight.",
    name: "Elena Sokolova",
    role: "VP Engineering, healthcare AI",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Testimonials
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Loved by the teams who own the AI bill
          </h2>
        </FadeIn>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="glass h-full rounded-2xl p-7">
                <Quote className="mb-4 h-6 w-6 text-indigo-400/60" aria-hidden />
                <blockquote className="mb-6 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  {
    q: "How does AIOptic track my AI usage?",
    a: "Two ways: a drop-in gateway (one line change to your base URL) for real-time tracking, or read-only billing API integrations with your cloud and LLM providers for zero-code visibility. Most teams use both.",
  },
  {
    q: "Do you store our prompts?",
    a: "Only if you want us to. Metadata-only mode captures tokens, latency, cost, and model — never prompt or completion content. Prompt analytics is opt-in per project.",
  },
  {
    q: "Can we monitor self-hosted open-source models?",
    a: "Yes. Our lightweight agent deploys via Helm into your Kubernetes cluster (or as a sidecar) and streams usage, GPU utilization, and cost-per-inference — data never leaves your network in air-gapped mode.",
  },
  {
    q: "How accurate is cost forecasting?",
    a: "Forecasts blend your historical usage trends with provider pricing tables and seasonality. Most customers see end-of-month projections within ±7% by their second month.",
  },
  {
    q: "How long does setup take?",
    a: "Cloud billing integrations take about 10 minutes with read-only credentials. The gateway is a one-line change. Most teams see their first unified dashboard within the hour.",
  },
  {
    q: "Does AIOptic add latency to our LLM calls?",
    a: "The gateway adds under 5ms p99 and is fully optional — billing-API integrations add zero latency because they never sit in your request path.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">FAQ</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.05}>
              <div className="glass overflow-hidden rounded-xl">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium transition-colors hover:bg-white/[0.03]"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {f.q}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-zinc-500 transition-transform",
                      open === i && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact / CTA ---------------- */

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div
            className="aurora-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[100px]"
            aria-hidden
          />
          <FadeIn>
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Stop guessing what AI costs you
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-zinc-400">
              Connect your first provider in under 10 minutes. Free forever for early-stage
              teams — no credit card required.
            </p>
            {sent ? (
              <p className="text-emerald-400" role="status">
                Thanks! We&apos;ll be in touch within one business day.
              </p>
            ) : (
              <form
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label htmlFor="email" className="sr-only">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Get early access
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

const footerCols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Live Demo", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact", "Press Kit"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "LLM Cost Calculator", "Status", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA", "Subprocessors"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href="/" className="mb-3 flex items-center gap-2 font-semibold">
              <Aperture className="h-5 w-5 text-indigo-400" aria-hidden />
              AIOptic
            </Link>
            <p className="max-w-xs text-sm text-zinc-500">
              The central AI operations and cost management platform. See every token.
              Control every dollar.
            </p>
          </div>
          {footerCols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-sm font-semibold">{col.title}</h3>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-zinc-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} AIOptic, Inc. All rights reserved.</p>
          <p>Built for CTOs, AI engineers, platform teams, and finance.</p>
        </div>
      </div>
    </footer>
  );
}
