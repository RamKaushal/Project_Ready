"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, TrendingDown, Coins, HeartPulse } from "lucide-react";

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) return;
    const start = performance.now();
    const duration = 1400;
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, reduce]);

  return (
    <span className="font-[family-name:var(--font-geist-mono)] tabular-nums">
      {prefix}
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Spend this month", value: 28451, prefix: "$", trend: "-12.4%", down: true, icon: Coins },
  { label: "Tokens today", value: 2.41, suffix: "B", decimals: 2, trend: "+8.1%", down: false, icon: TrendingUp },
  { label: "Active API keys", value: 143, trend: "+6", down: false, icon: HeartPulse },
  { label: "Forecast (EOM)", value: 41208, prefix: "$", trend: "-5.2%", down: true, icon: TrendingDown },
];

export function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
            {s.label}
            <s.icon className="h-4 w-4 text-indigo-400" aria-hidden />
          </div>
          <p className="text-xl font-semibold">
            <AnimatedNumber
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              decimals={s.decimals ?? 0}
            />
          </p>
          <p className={`mt-1 text-xs ${s.down ? "text-emerald-400" : "text-indigo-300"}`}>
            {s.trend} vs last period
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function SpendChart() {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium">Spend by provider</h3>
        <div className="flex gap-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo-400" aria-hidden /> OpenAI
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden /> Anthropic
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden /> Gemini
          </span>
        </div>
      </div>
      <svg viewBox="0 0 600 200" className="w-full" role="img" aria-label="Spend by provider over time">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
        ))}
        <path className="chart-line" d="M0,150 C60,140 100,100 160,105 C220,110 260,70 320,75 C380,80 420,45 480,50 C540,55 570,35 600,38" fill="none" stroke="#818cf8" strokeWidth="2.5" />
        <path className="chart-line" d="M0,170 C70,165 110,130 170,135 C230,140 280,105 340,110 C400,115 460,80 600,85" fill="none" stroke="#a78bfa" strokeWidth="2.5" style={{ animationDelay: "0.3s" }} />
        <path className="chart-line" d="M0,185 C80,182 130,160 190,163 C250,166 320,140 380,143 C440,146 520,120 600,125" fill="none" stroke="#22d3ee" strokeWidth="2.5" style={{ animationDelay: "0.6s" }} />
      </svg>
    </div>
  );
}

const providerUsage = [
  { name: "GPT-4o", pct: 84, color: "bg-indigo-400" },
  { name: "Claude Sonnet", pct: 67, color: "bg-violet-400" },
  { name: "Gemini Flash", pct: 52, color: "bg-cyan-400" },
  { name: "Llama 3 (self-hosted)", pct: 38, color: "bg-emerald-400" },
  { name: "Mistral Large", pct: 21, color: "bg-amber-400" },
];

export function ProviderBars() {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="mb-5 text-sm font-medium">Top models by tokens</h3>
      <div className="space-y-4">
        {providerUsage.map((p, i) => (
          <div key={p.name}>
            <div className="mb-1.5 flex justify-between text-xs">
              <span className="text-zinc-300">{p.name}</span>
              <span className="font-[family-name:var(--font-geist-mono)] text-zinc-500">{p.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className={`h-full rounded-full ${p.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${p.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.12, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
