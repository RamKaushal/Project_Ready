"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingDown, Activity, DollarSign } from "lucide-react";
import { Float } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40" aria-label="Hero">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="grid-bg absolute inset-0" />
        <div className="aurora-blob absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="aurora-blob absolute -top-10 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px] [animation-delay:-5s]" />
        <div className="aurora-blob absolute top-40 left-1/2 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[100px] [animation-delay:-9s]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-zinc-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" aria-hidden />
          The control plane for enterprise AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl"
        >
          See every token.
          <br />
          <span className="glow-text">Control every dollar.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-zinc-400"
        >
          AIOptic unifies AI usage, cost, and governance across every cloud and every
          LLM provider — so your team ships AI with total visibility, not guesswork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-medium text-white shadow-xl shadow-indigo-500/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Start free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <Link
            href="/dashboard"
            className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-zinc-200 transition-colors hover:bg-white/[0.08]"
          >
            View live demo
          </Link>
        </motion.div>

        {/* Floating stat cards */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="glass relative rounded-2xl p-6 shadow-2xl shadow-indigo-950/50"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                Live — all providers
              </div>
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500">
                last 30 days
              </span>
            </div>
            <svg viewBox="0 0 800 220" className="w-full" role="img" aria-label="AI spend trend chart">
              <defs>
                <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,180 C80,160 120,120 200,130 C280,140 320,80 400,90 C480,100 520,50 600,60 C680,70 740,30 800,40 L800,220 L0,220 Z"
                fill="url(#heroFill)"
              />
              <path
                className="chart-line"
                d="M0,180 C80,160 120,120 200,130 C280,140 320,80 400,90 C480,100 520,50 600,60 C680,70 740,30 800,40"
                fill="none"
                stroke="#818cf8"
                strokeWidth="2.5"
              />
              <path
                className="chart-line"
                d="M0,200 C100,195 160,170 240,175 C320,180 400,140 480,150 C560,160 640,110 800,120"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeOpacity="0.7"
                style={{ animationDelay: "0.4s" }}
              />
            </svg>
          </motion.div>

          <Float className="absolute -left-6 -top-8 hidden md:block" duration={5}>
            <div className="glass flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl">
              <TrendingDown className="h-5 w-5 text-emerald-400" aria-hidden />
              <div className="text-left">
                <p className="text-xs text-zinc-400">Cost reduction</p>
                <p className="font-semibold">-38.2%</p>
              </div>
            </div>
          </Float>
          <Float className="absolute -right-8 top-10 hidden md:block" duration={7} distance={16}>
            <div className="glass flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl">
              <Activity className="h-5 w-5 text-indigo-400" aria-hidden />
              <div className="text-left">
                <p className="text-xs text-zinc-400">Tokens / day</p>
                <p className="font-semibold">2.4B</p>
              </div>
            </div>
          </Float>
          <Float className="absolute -bottom-6 right-16 hidden md:block" duration={6} distance={10}>
            <div className="glass flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl">
              <DollarSign className="h-5 w-5 text-violet-400" aria-hidden />
              <div className="text-left">
                <p className="text-xs text-zinc-400">Forecast (Dec)</p>
                <p className="font-semibold">$41,208</p>
              </div>
            </div>
          </Float>
        </div>
      </div>
    </section>
  );
}
