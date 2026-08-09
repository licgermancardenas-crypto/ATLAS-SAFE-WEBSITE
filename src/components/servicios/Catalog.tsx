"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { practices } from "@/data/services";

/** Accent-insensitive, case-insensitive haystack for the search box. */
function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function Catalog() {
  const [query, setQuery] = useState("");
  const q = normalize(query.trim());

  const filtered = useMemo(() => {
    if (!q) return practices;
    return practices
      .map((practice) => ({
        ...practice,
        services: practice.services.filter((s) =>
          normalize(`${s.name} ${s.desc} ${practice.title}`).includes(q),
        ),
      }))
      .filter((practice) => practice.services.length > 0);
  }, [q]);

  const matches = filtered.reduce((total, p) => total + p.services.length, 0);

  return (
    <div className="catalog">
      <aside className="catalog-rail" aria-label="Índice de prácticas">
        <div className="catalog-rail-inner">
          <div className="catalog-rail-title">Prácticas</div>
          <ul className="catalog-index">
            {practices.map((practice) => {
              const hits = filtered.find((p) => p.slug === practice.slug)?.services.length ?? 0;
              return (
                <li key={practice.slug}>
                  <a
                    href={`#${practice.slug}`}
                    className={hits === 0 ? "is-empty" : undefined}
                    aria-disabled={hits === 0 ? true : undefined}
                  >
                    <span>{practice.title}</span>
                    <span className="catalog-index-n">{hits || practice.services.length}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className="catalog-main">
        <div className="catalog-search">
          <label className="cf-label" htmlFor="svc-search">
            Buscar en el catálogo
          </label>
          <div className="catalog-search-field">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              width="15"
              height="15"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="svc-search"
              type="search"
              className="catalog-input"
              placeholder="pentest, ransomware, ISO 27001, LLM…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            {query ? (
              <button type="button" className="catalog-clear" onClick={() => setQuery("")}>
                Limpiar
              </button>
            ) : null}
          </div>
          <p className="catalog-count" role="status">
            {q
              ? `${matches} ${matches === 1 ? "servicio" : "servicios"} en ${filtered.length} ${
                  filtered.length === 1 ? "práctica" : "prácticas"
                }`
              : "59 servicios · 13 prácticas"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="catalog-empty">
            <p>
              Sin resultados para <strong>“{query}”</strong>.
            </p>
            <p>
              Si el servicio que buscás no figura acá, igual podemos armarlo.{" "}
              <Link href="/#contact">Contanos qué necesitás</Link>.
            </p>
          </div>
        ) : (
          filtered.map((practice) => (
            <section className="catalog-practice" id={practice.slug} key={practice.slug}>
              <div className="catalog-practice-head">
                <h2 className="catalog-practice-title">
                  {practice.title}
                  {practice.badge ? <span className="svc-new">{practice.badge}</span> : null}
                </h2>
                <span className="practice-count">{practice.services.length} servicios</span>
              </div>
              <p className="catalog-practice-blurb">{practice.blurb}</p>
              <div className="svc-list">
                {practice.services.map((s) => (
                  <div className="svc" key={s.n}>
                    <span className="svc-n">{s.n}</span>
                    <div className="svc-body">
                      <h3 className="svc-name">{s.name}</h3>
                      <p className="svc-desc">{s.desc}</p>
                    </div>
                    <div className="svc-price">Cotización a medida</div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
