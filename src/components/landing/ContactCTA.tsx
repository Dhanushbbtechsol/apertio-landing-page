"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-strong rounded-[2rem] px-6 py-14 sm:px-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-cobalt uppercase">
            Next step
          </p>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Ready to unify access operations?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Apertio is delivered with your access-management collaborators. Tell us
            about your sites and we will walk through Visit, Access, and Time on
            your hardware spine.
          </p>

          <motion.a
            href="mailto:hello@apertio.app?subject=Apertio%20inquiry"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgb(37_99_235_/0.35)] transition-colors hover:bg-cobalt-bright"
          >
            <Mail className="h-4 w-4" />
            Talk to us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
