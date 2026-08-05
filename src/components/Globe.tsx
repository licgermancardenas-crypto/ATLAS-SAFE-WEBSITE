"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let phi = 2.1;
    let width = wrap.offsetWidth;
    let frame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta: 0.32,
      dark: 1,
      diffuse: 1.3,
      mapSamples: 18000,
      mapBrightness: 7.5,
      baseColor: [0, 0.72, 0.44],
      markerColor: [0, 0.9, 0.56],
      glowColor: [0, 0.4, 0.25],
      offset: [0, 0],
      markers: [],
    });

    const onResize = () => {
      width = wrap.offsetWidth;
      globe.update({ width: width * 2, height: width * 2 });
    };
    window.addEventListener("resize", onResize);

    if (!prefersReducedMotion) {
      const animate = () => {
        phi += 0.0022;
        globe.update({ phi });
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
