export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium tracking-wide text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
