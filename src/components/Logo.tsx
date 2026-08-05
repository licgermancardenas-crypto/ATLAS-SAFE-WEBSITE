export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 44"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 3 L45 40 L3 40 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 16 L35.5 36 L12.5 36 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Mark className="h-6 w-6 text-accent" />
      <span className="font-semibold tracking-tight text-foreground">
        ATLAS <span className="text-accent">SAFE</span>
      </span>
    </span>
  );
}
