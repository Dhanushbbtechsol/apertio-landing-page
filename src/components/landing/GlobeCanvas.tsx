"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { prefersReducedMotion } from "@/lib/motion";

type GlobeCanvasProps = {
  className?: string;
  size?: number;
};

export function GlobeCanvas({ className, size = 520 }: GlobeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let raf = 0;
    const reduce = prefersReducedMotion();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.35,
      scale: 1.05,
      mapSamples: 18000,
      mapBrightness: 5.5,
      baseColor: [0.82, 0.88, 0.96],
      markerColor: [0.15, 0.39, 0.92],
      glowColor: [0.88, 0.92, 1],
      markers: [
        { location: [28.6139, 77.209], size: 0.08 },
        { location: [1.3521, 103.8198], size: 0.06 },
        { location: [51.5074, -0.1278], size: 0.07 },
        { location: [25.2048, 55.2708], size: 0.06 },
        { location: [40.7128, -74.006], size: 0.07 },
        { location: [-33.8688, 151.2093], size: 0.05 },
      ],
      arcs: [
        { from: [28.6139, 77.209], to: [1.3521, 103.8198] },
        { from: [28.6139, 77.209], to: [51.5074, -0.1278] },
        { from: [25.2048, 55.2708], to: [40.7128, -74.006] },
        { from: [1.3521, 103.8198], to: [-33.8688, 151.2093] },
      ],
      arcColor: [0.22, 0.45, 0.95],
      arcWidth: 0.45,
      arcHeight: 0.28,
    });

    const tick = () => {
      if (!reduce) {
        phi += 0.0035;
        globe.update({ phi });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: size, height: size, maxWidth: "100%" }}
      width={size * 2}
      height={size * 2}
      aria-hidden
    />
  );
}
