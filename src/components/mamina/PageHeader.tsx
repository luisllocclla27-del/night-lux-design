import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  description?: string;
  breadcrumbs?: { label: string; to?: string }[];
}

export function PageHeader({
  eyebrow,
  title,
  titleItalic,
  description,
  breadcrumbs = [{ label: "Inicio", to: "/" }],
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-[#C9A86A]/15 bg-[#121212]/40 pt-36 pb-16 lg:pt-44 lg:pb-24">
      {/* Background ambiance */}
      <div className="ambient-radial pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C9A86A]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Breadcrumbs Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-[11px] tracking-[0.2em] text-[#7A7A75] uppercase font-medium"
        >
          {breadcrumbs.map((b, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {b.to ? (
                <Link to={b.to} className="transition-colors hover:text-[#C9A86A]">
                  {b.label}
                </Link>
              ) : (
                <span className="text-[#C9A86A]/80">{b.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span className="opacity-40">/</span>}
            </span>
          ))}
        </nav>

        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-white">
            {title}{" "}
            {titleItalic && (
              <span className="text-gold-gradient italic font-editorial font-normal tracking-normal lowercase first-letter:uppercase">
                {titleItalic}
              </span>
            )}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.6] text-[#D1D1CB]">{description}</p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
