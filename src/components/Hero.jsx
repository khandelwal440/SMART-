import { Link } from 'react-router-dom';
import { HERO, NAV_CTA } from '../data/content.js';
import { ArrowRight } from './JobsPanel.jsx';

/** Full-bleed photo hero with headline, CTA and the five SmarTank pillars. */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img src={HERO.image} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchpriority="high" />
      {/* navy wash: solid on the left for the text, fading to the photo on the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />

      <div className="container grid min-h-[460px] items-center gap-10 py-16 sm:min-h-[520px] lg:min-h-[560px] lg:grid-cols-[1fr_auto] lg:py-20">
        <div className="max-w-xl animate-pageIn">
          <h1 className="mb-6 text-[38px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[52px] xl:text-[60px]">
            {HERO.titleLead} <span className="text-gold">{HERO.titleAccent}</span>
          </h1>
          <p className="mb-8 text-lg font-medium leading-relaxed text-white/85 sm:text-xl">
            {HERO.subtitle.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <Link
            to={NAV_CTA.to}
            className="inline-flex items-center gap-3 rounded-md bg-gold px-6 py-3.5 font-bold text-navy shadow-[0_14px_30px_-12px_rgba(242,194,48,0.7)] transition hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {NAV_CTA.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="hidden border-l-2 border-gold pl-5 lg:block" aria-label="What we focus on">
          {HERO.pillars.map((p) => (
            <li key={p} className="py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/90">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
