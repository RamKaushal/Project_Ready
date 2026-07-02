"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Aperture } from "lucide-react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        aria-label="Main"
        className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3"
      >
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Aperture className="h-5 w-5 text-indigo-400" aria-hidden />
          <span>AIOptic</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/dashboard"
            className="rounded-lg px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Live Demo
          </Link>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden"
        >
          <div className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Link href="/dashboard" className="text-zinc-300 hover:text-white">
              Live Demo
            </Link>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-center font-medium text-white"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
