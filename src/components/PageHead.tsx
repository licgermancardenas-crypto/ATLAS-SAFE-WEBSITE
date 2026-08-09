import Link from "next/link";

export type Crumb = { href: string; label: string };

export function PageHead({
  label,
  title,
  lede,
  stats,
  crumbs = [{ href: "/", label: "Inicio" }],
}: {
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  stats?: { value: string; label: string }[];
  crumbs?: Crumb[];
}) {
  return (
    <header className="page-head">
      <div className="inner">
        <nav className="crumbs" aria-label="Miga de pan">
          {crumbs.map((crumb) => (
            <Link key={crumb.href} href={crumb.href}>
              {crumb.label}
            </Link>
          ))}
          <span aria-hidden="true">/</span>
          <span className="crumb-current">{label}</span>
        </nav>

        <div className="page-head-body">
          <div>
            <div className="s-label">{label}</div>
            <h1 className="page-title">{title}</h1>
          </div>
          {lede ? <p className="page-lede">{lede}</p> : null}
        </div>

        {stats?.length ? (
          <dl className="page-stats">
            {stats.map((stat) => (
              <div className="page-stat" key={stat.label}>
                <dt className="page-stat-l">{stat.label}</dt>
                <dd className="page-stat-v">{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </header>
  );
}
