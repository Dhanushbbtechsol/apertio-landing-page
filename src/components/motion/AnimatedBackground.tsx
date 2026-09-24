"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

/** Page-wide animated mesh — inspired by UI Vault / Aceternity-style aurora backgrounds. */
export function AnimatedBackground() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.to(".bg-blob-a", {
        x: 80,
        y: -60,
        scale: 1.15,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".bg-blob-b", {
        x: -100,
        y: 70,
        scale: 1.2,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".bg-blob-c", {
        x: 60,
        y: 90,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".bg-beam", {
        xPercent: 40,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f0f4fb]"
      aria-hidden
    >
      <div className="bg-blob-a absolute -left-[20%] -top-[10%] h-[55vh] w-[55vh] rounded-full bg-cobalt/25 blur-[100px]" />
      <div className="bg-blob-b absolute -right-[15%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-blue-400/20 blur-[110px]" />
      <div className="bg-blob-c absolute bottom-[-10%] left-[25%] h-[45vh] w-[45vh] rounded-full bg-indigo-300/20 blur-[90px]" />
      <div className="bg-beam absolute left-[-20%] top-[30%] h-[2px] w-[60vw] rotate-[-18deg] bg-gradient-to-r from-transparent via-cobalt/40 to-transparent blur-sm" />
      <div className="bg-beam absolute right-[-10%] top-[55%] h-[2px] w-[50vw] rotate-[12deg] bg-gradient-to-r from-transparent via-blue-400/35 to-transparent blur-sm" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(37 99 235 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(37 99 235 / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 10%, transparent 75%)",
        }}
      />
      <div className="noise-overlay absolute inset-0 opacity-[0.12]" />
    </div>
  );
}
