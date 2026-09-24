"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Cpu, Database, MonitorSmartphone, Radio } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    icon: Radio,
    title: "Hardware edge",
    text: "Access readers and ACS doors at the edge — your existing hardware stays the source of record.",
  },
  {
    icon: Cpu,
    title: "Apertio adapters",
    text: "Server-side clients provision temp visitors and sync employee biometric users.",
  },
  {
    icon: Database,
    title: "Domain services",
    text: "Visit ACS on/off, PunchLog → DailyTimesheet, watchlists, and notification logs.",
  },
  {
    icon: MonitorSmartphone,
    title: "Portals & exports",
    text: "Host, desk, employee, and admin surfaces — plus payroll-ready CSV handoff.",
  },
] as const;

export function HardwareWorkflow() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".workflow-step", {
        opacity: 0,
        y: 36,
        stagger: 0.14,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".workflow-track",
          start: "top 78%",
        },
      });

      gsap.fromTo(
        ".workflow-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".workflow-track",
            start: "top 72%",
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section id="workflow" ref={root} className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-cobalt uppercase">
          Architecture
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          How Apertio connects hardware to software
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Readers stay the door and punch source of record. Apertio orchestrates
          identities, presence, and timesheets without putting secrets in the
          browser.
        </p>

        <div className="workflow-track relative mt-14">
          <div
            className="workflow-line pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-0.5 origin-left bg-gradient-to-r from-cobalt via-slate-200 to-cobalt lg:block"
            aria-hidden
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="workflow-step glass-strong relative rounded-2xl p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt text-white shadow-[0_8px_24px_rgb(37_99_235_/0.35)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="font-display text-xs font-bold tracking-wider text-cobalt">
                      0{i + 1}
                    </span>
                    {i < steps.length - 1 ? (
                      <ArrowRight className="h-3.5 w-3.5 text-slate-300 lg:hidden" />
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
