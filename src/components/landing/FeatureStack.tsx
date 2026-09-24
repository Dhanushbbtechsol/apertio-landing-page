"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DoorOpen, QrCode, ShieldAlert, Timer } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stackCards = [
  {
    id: "visit",
    href: "#visit",
    icon: QrCode,
    label: "01 — Visit & Host",
    title: "Pre-reg to gate pass",
    text: "Public status, host approvals, digital/printed passes, lobby and gate desks, live wayfinding.",
    accent: "from-sky-500/15 to-blue-600/10",
  },
  {
    id: "access",
    href: "#access",
    icon: DoorOpen,
    label: "02 — Access & Space",
    title: "Rooms & temporary credentials",
    text: "Bookings, Standard/VIP/Contractor profiles, provision on check-in, revoke on check-out.",
    accent: "from-indigo-500/15 to-blue-700/10",
  },
  {
    id: "time",
    href: "#time",
    icon: Timer,
    label: "03 — Time & People",
    title: "Punches to payroll-ready sheets",
    text: "Employee master, shifts & rules, live timesheets, OT/comp-off, CSV export.",
    accent: "from-cyan-500/15 to-sky-700/10",
  },
  {
    id: "risk",
    href: "#risk",
    icon: ShieldAlert,
    label: "04 — Risk & Ops",
    title: "Watchlists to exports",
    text: "Blocklists, notification delivery logs, live desks, visitor analytics and reports.",
    accent: "from-blue-600/15 to-slate-700/10",
  },
] as const;

export function FeatureStack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(".stack-card", { clearProps: "all" });
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      if (!cards.length) return;

      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i * 18,
          scale: 1 - i * 0.045,
          rotateZ: i * 1.2,
          zIndex: cards.length - i,
          opacity: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length * 0.85)}`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Peel each card off the stack, revealing the next underneath
      cards.forEach((card, i) => {
        if (i === cards.length - 1) {
          tl.to(
            card,
            {
              y: 0,
              scale: 1,
              rotateZ: 0,
              ease: "none",
              duration: 0.8,
            },
            i,
          );
          return;
        }

        tl.to(
          card,
          {
            yPercent: -120,
            x: i % 2 === 0 ? -72 : 72,
            rotateZ: i % 2 === 0 ? -14 : 14,
            scale: 0.9,
            opacity: 0,
            ease: "none",
            duration: 1,
          },
          i,
        );

        const next = cards[i + 1];
        if (next) {
          tl.to(
            next,
            {
              y: 0,
              scale: 1,
              rotateZ: 0,
              ease: "none",
              duration: 1,
            },
            i,
          );
        }
      });
    },
    { scope: root },
  );

  return (
    <section
      id="features"
      ref={root}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10 lg:py-0">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-cobalt uppercase">
            Core capabilities
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Four pillars. Scroll to peel the stack.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Each card opens a deeper full-screen block below — visit journeys,
            access profiles, attendance ladder, and risk controls.
          </p>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[460px]">
          {stackCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.href}
                className={`stack-card absolute inset-x-0 top-0 rounded-3xl border border-slate-200/80 bg-gradient-to-br ${card.accent} p-6 shadow-[0_20px_50px_rgb(15_23_42_/0.12)] backdrop-blur-md`}
                style={{ backgroundColor: "rgb(255 255 255 / 0.92)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold tracking-[0.14em] text-cobalt uppercase">
                    {card.label}
                  </p>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-ink sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.text}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
