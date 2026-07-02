"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Aperture,
  LayoutDashboard,
  Activity,
  Coins,
  LineChart,
  BellRing,
  Users,
  GitCompareArrows,
  ScrollText,
  Settings,
  ArrowLeft,
  Search,
} from "lucide-react";
import { StatCards, SpendChart, ProviderBars } from "@/components/charts";
import { cn } from "@/lib/utils";

const nav = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Activity, label: "Live Usage" },
  { icon: Coins, label: "Token Analytics" },
  { icon: LineChart, label: "Forecasting" },
  { icon: BellRing, label: "Alerts" },
  { icon: GitCompareArrows, label: "Model Compare" },
  { icon: Users, label: "Teams" },
  { icon: ScrollText, label: "Audit Logs" },
  { icon: Settings, label: "Settings" },
];

const requests = [
  { model: "gpt-4o", team: "Search", tokens: "12,402", cost: "$0.186", latency: "820ms", status: "200" },
  { model: "claude-sonnet-4", team: "Support Bot", tokens: "8,911", cost: "$0.134", latency: "1.1s", status: "200" },
  { model: "gemini-2.5-flash", team: "Summarizer", tokens: "31,205", cost: "$0.047", latency: "460ms", status: "200" },
  { model: "llama-3-70b (self-hosted)", team: "Internal QA", tokens: "5,113", cost: "$0.005", latency: "640ms", status: "200" },
  { model: "gpt-4o-mini", team: "Search", tokens: "44,890", cost: "$0.027", latency: "390ms", status: "429" },
  { model: "mistral-large", team: "Extraction", tokens: "9,384", cost: "$0.075", latency: "980ms", status: "200" },
];

const alerts = [
  { level: "warn", text: "Search team at 82% of monthly budget ($8,200 / $10,000)" },
  { level: "error", text: "Rate limit hit on gpt-4o-mini — 14 throttled requests in 5 min" },
  { level: "info", text: "Recommendation: route Summarizer to gemini-2.5-flash, save ~$1,240/mo" },
];

export function DashboardApp() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-white/5 bg-white/[0.02] p-4 md:flex">
        <Link href="/" className="mb-8 flex items-center gap-2 px-2 font-semibold">
          <Aperture className="h-5 w-5 text-indigo-400" aria-hidden />
          AIOptic
        </Link>
        <nav className="flex-1 space-y-1" aria-label="Dashboard">
          {nav.map((n) => (
            <button
              key={n.label}
              onClick={() => setActive(n.label)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active === n.label
                  ? "bg-indigo-500/15 text-indigo-200"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              )}
              aria-current={active === n.label ? "page" : undefined}
            >
              <n.icon className="h-4 w-4" aria-hidden />
              {n.label}
            </button>
          ))}
        </nav>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to site
        </Link>
      </aside>

      {/* Main */}
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold">{active}</h1>
            <p className="text-xs text-zinc-500">acme-corp · production · all regions</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="glass hidden items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-zinc-500 sm:flex">
              <Search className="h-4 w-4" aria-hidden />
              Search…
              <kbd className="rounded border border-white/10 px-1.5 font-[family-name:var(--font-geist-mono)] text-[10px]">
                ⌘K
              </kbd>
            </div>
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xs font-semibold"
              aria-label="User avatar"
            >
              RK
            </div>
          </div>
        </header>

        <main className="space-y-6 p-6">
          <StatCards />

          <div className="grid gap-6 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <SpendChart />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <ProviderBars />
            </motion.div>
          </div>

          {/* Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
          >
            <h2 className="mb-4 text-sm font-medium">Active alerts & recommendations</h2>
            <ul className="space-y-3">
              {alerts.map((a) => (
                <li key={a.text} className="flex items-start gap-3 text-sm">
                  <span
                    className={cn(
                      "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                      a.level === "error" && "bg-red-400",
                      a.level === "warn" && "bg-amber-400",
                      a.level === "info" && "bg-cyan-400"
                    )}
                    aria-hidden
                  />
                  <span className="text-zinc-300">{a.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Live requests table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
          >
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
              <h2 className="text-sm font-medium">Live API requests</h2>
              <span className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                streaming
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-xs text-zinc-500">
                    <th scope="col" className="px-5 py-3 font-medium">Model</th>
                    <th scope="col" className="px-5 py-3 font-medium">Team</th>
                    <th scope="col" className="px-5 py-3 font-medium">Tokens</th>
                    <th scope="col" className="px-5 py-3 font-medium">Cost</th>
                    <th scope="col" className="px-5 py-3 font-medium">Latency</th>
                    <th scope="col" className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="font-[family-name:var(--font-geist-mono)] text-xs">
                  {requests.map((r) => (
                    <tr
                      key={`${r.model}-${r.tokens}`}
                      className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-3 text-zinc-200">{r.model}</td>
                      <td className="px-5 py-3 text-zinc-400">{r.team}</td>
                      <td className="px-5 py-3 text-zinc-400">{r.tokens}</td>
                      <td className="px-5 py-3 text-zinc-400">{r.cost}</td>
                      <td className="px-5 py-3 text-zinc-400">{r.latency}</td>
                      <td className="px-5 py-3">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5",
                            r.status === "200"
                              ? "bg-emerald-500/15 text-emerald-300"
                              : "bg-red-500/15 text-red-300"
                          )}
                        >
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
