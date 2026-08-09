"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No entrance animation when the user asked for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          // One-shot: nothing re-hides, so stop paying for the observation.
          observer.disconnect();
        });
      },
      // Fire ~240px before the element reaches the viewport, so by the time it
      // is actually on screen the entrance has already finished. A negative
      // bottom margin here is what made scrolling feel like waiting on a load.
      { threshold: 0, rootMargin: "0px 0px 240px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `d${delay}` : "";

  return (
    <div ref={ref} className={`r ${delayClass} ${visible ? "vis" : ""} ${className}`}>
      {children}
    </div>
  );
}
