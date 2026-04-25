"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-[1fr_auto] gap-10 items-center"
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-200 text-[11px] font-semibold px-2.5 py-0.5 uppercase tracking-wider">
              Product × AI
            </span>
            <span className="text-sm font-medium text-zinc-500">
              Hi, I&apos;m Adhithya
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl text-zinc-50">
            Product Marketer & GTM Strategist -{" "}
            <span className="text-zinc-500">
              Positioning, Launch & Pricing.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Product marketer and GTM strategist who also ships AI products. Leading positioning and launch at Sensata (+35% qualified leads, $2M+ first-year pipeline) while building AI-native products like SwipeHire (live) and NSE-Bot on the side. Anthropic certified. M.S. Marketing Analytics with a Pricing specialization - Simon Business School. Based in Boston, MA.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 text-zinc-950 px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#clients"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-900 transition-colors"
            >
              <Briefcase className="w-4 h-4" /> Brands I&apos;ve worked with
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-900 transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1.5">
              +35% qualified leads at Sensata
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1.5">
              SwipeHire (live)
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1.5">
              Anthropic Certified
            </span>
          </div>
        </div>

        <div className="relative shrink-0 justify-self-start md:justify-self-end">
          <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-black/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Adhithya Rokhith Bhaskar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/40 text-rose-300 text-[11px] font-semibold px-2.5 py-1 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
            Open to work
          </span>
        </div>
      </motion.div>
    </section>
  );
}
