import { Link } from 'react-router-dom';

/**
 * Inner-page banner: deep navy with a soft gold glow, serif title and a gold
 * breadcrumb. crumbs: [{ label, to? }] – Home is prepended automatically.
 */
export default function PageBanner({ title, crumbs }) {
  const trail = [{ label: 'Home', to: '/' }, ...(crumbs || [{ label: title }])];

  return (
    <section className="relative z-[1] overflow-hidden bg-navy py-14 text-white sm:py-20">
      {/* decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-navy-2 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#F8DA74_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute bottom-0 right-[8%] hidden h-40 w-40 rounded-t-full border-[14px] border-b-0 border-gold/30 md:block" aria-hidden="true" />

      <div className="container relative">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center text-sm font-semibold">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={c.label} className="crumb flex items-center text-gold">
                  {c.to && !last ? (
                    <Link to={c.to} className="inline-block py-1 text-white/70 transition-colors duration-300 hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="mb-0 animate-pageIn text-[34px] leading-[1.1] text-white sm:text-[46px] lg:text-[56px]">{title}</h1>
        <span className="mt-5 block h-1 w-20 rounded-full bg-gradient-to-r from-gold to-gold-light" aria-hidden="true" />
      </div>
    </section>
  );
}
