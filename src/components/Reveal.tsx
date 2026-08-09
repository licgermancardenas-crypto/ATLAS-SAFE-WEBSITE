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
      // Start slightly before the element enters, so it lands already settled.
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
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
