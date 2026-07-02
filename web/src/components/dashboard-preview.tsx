"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { SpendChart, ProviderBars, StatCards } from "@/components/charts";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Live dashboard
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Your AI stack, at a glance
          </h2>
          <p className="mt-4 text-zinc-400">
            Real-time spend, token flow, and provider health — the moment you connect.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="glass overflow-hidden rounded-3xl shadow-2xl shadow-indigo-950/40">
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-green-400/70" aria-hidden />
              <span className="ml-3 font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500">
                app.aioptic.dev/overview
              </span>
            </div>
            <div className="space-y-6 p-6 md:p-8">
              <StatCards />
              <div className="grid gap-6 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <SpendChart />
                </div>
                <div className="lg:col-span-2">
                  <ProviderBars />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
          >
            Explore the full interactive demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
