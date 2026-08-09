"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNarrow = window.matchMedia("(max-width: 720px)").matches;

    let phi = 2.1;
    let width = wrap.offsetWidth;
    let frame = 0;

    const globe = createGlobe(canvas, {
      // Capped: a 3x retina phone gains nothing visible here and pays for every pixel.
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width * 2,
      height: width * 2,
      phi,
      theta: 0.32,
      dark: 1,
      diffuse: 1.3,
      mapSamples: isNarrow ? 9000 : 18000,
      mapBrightness: 7.5,
      baseColor: [0, 0.72, 0.44],
      markerColor: [0, 0.9, 0.56],
      glowColor: [0, 0.4, 0.25],
      offset: [0, 0],
      markers: [],
    });

    // cobe (v2) has no render callback, so fade in once the first frame is out.
    const readyFrame = requestAnimationFrame(() => setReady(true));

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
      cancelAnimationFrame(readyFrame);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`${className ?? ""} globe${ready ? " is-ready" : ""}`} aria-hidden="true">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
