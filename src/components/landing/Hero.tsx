"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ScanLine, Shield, Users } from "lucide-react";
import { BrandLogo } from "@/components/landing/BrandLogo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pb-20"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:min-h-[68svh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 -m-10 rounded-full bg-cobalt/15 blur-3xl"
              aria-hidden
            />
            <BrandLogo
              height={380}
              priority
              className="relative max-h-[42vw] drop-shadow-[0_24px_60px_rgb(37_99_235_/0.22)] sm:max-h-none"
            />
          </div>
        </motion.div>

        <div className="lg:pl-2">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display max-w-xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]"
          >
            Access operations,{" "}
            <span className="bg-gradient-to-r from-ink via-cobalt to-cobalt-bright bg-clip-text text-transparent">
              unified.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Visitors, door credentials, and employee attendance on one people
            model — so security, reception, and HR stop operating in silos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgb(37_99_235_/0.4)] transition-colors hover:bg-cobalt-bright"
            >
              Talk to us
              <ArrowDownRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              See how it works
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-6 text-xs font-medium tracking-wide text-slate-500 uppercase"
          >
            <span className="inline-flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-cobalt" /> Visit & Host
            </span>
            <span className="inline-flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-cobalt" /> Access & Space
            </span>
            <span className="inline-flex items-center gap-2">
              <ScanLine className="h-3.5 w-3.5 text-cobalt" /> Time & People
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
