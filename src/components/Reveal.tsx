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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.08 },
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
