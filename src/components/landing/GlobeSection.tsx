"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GlobeCanvas } from "@/components/landing/GlobeCanvas";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function GlobeSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "+=45%",
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      gsap.from(".globe-copy > *", {
        opacity: 0,
        y: 36,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      });

      gsap.from(".globe-stage", {
        opacity: 0,
        scale: 0.88,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="reach"
      ref={root}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden border-y border-slate-200/50"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-0">
        <div className="globe-copy max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-cobalt uppercase">
            Multi-site reach
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            One people model across every site you run
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Visitors, credentials, and attendance stay coherent whether you
            operate a single lobby or a distributed estate — with presence and
            punches landing on the hardware you already trust.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-slate-600">
            {[
              "Shared identity family across locations",
              "Desk modes that fit lobby or gate operations",
              "Live presence and timesheets in one operating picture",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="globe-stage relative mx-auto flex w-full max-w-[520px] items-center justify-center">
          <div
            className="pointer-events-none absolute inset-8 rounded-full bg-cobalt/20 blur-3xl"
            aria-hidden
          />
          <GlobeCanvas className="relative" size={480} />
        </div>
      </div>
    </section>
  );
}
