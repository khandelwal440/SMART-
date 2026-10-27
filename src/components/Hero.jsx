import { Fragment, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HERO, NAV_CTA } from '../data/content.js';
import { ArrowRight } from './JobsPanel.jsx';

/**
 * On a fresh page load the gold preloader curtain opens between ~1.4s and 2.4s,
 * so the intro starts as it parts; when you navigate back to Home it plays at once.
 */
function introDelay() {
  return performance.now() < 2500 ? 2000 : 150;
}

/** Splits text into words that each rise into place with a stagger. */
function Words({ text, start, step = 70, className = '' }) {
  return text.split(' ').map((w, i, all) => (
    <Fragment key={`${w}-${i}`}>
      <span className="word-mask">
        <span className={`word ${className}`} style={{ animationDelay: `${start + i * step}ms` }}>
          {w}
        </span>
      </span>
      {/* real space outside the clip box so the line wraps naturally */}
      {i < all.length - 1 ? ' ' : null}
    </Fragment>
  ));
}

/** Full-bleed photo hero with animated headline, CTA and the five SmarTank pillars. */
export default function Hero() {
  const t0 = useMemo(introDelay, []);
  const leadWords = HERO.titleLead.split(' ').length;
  const accentStart = t0 + leadWords * 70;
  const afterTitle = accentStart + HERO.titleAccent.split(' ').length * 70 + 150;

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img src={HERO.image} alt="" aria-hidden="true" className="kenburns absolute inset-0 -z-20 h-full w-full object-cover" fetchpriority="high" />
      {/* navy wash: solid on the left for the text, fading to the photo on the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />
      <div className="glow-drift pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

      <div className="container grid min-h-[460px] items-center gap-10 py-16 sm:min-h-[520px] lg:min-h-[560px] lg:grid-cols-[1fr_auto] lg:py-20">
        <div className="max-w-xl">
          <h1 className="mb-6 text-[38px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[52px] xl:text-[60px]">
            <Words text={HERO.titleLead} start={t0} /> <Words text={HERO.titleAccent} start={accentStart} className="text-gold" />
          </h1>
          <p className="rise-in mb-8 text-lg font-medium leading-relaxed text-white/85 sm:text-xl" style={{ animationDelay: `${afterTitle}ms` }}>
            {HERO.subtitle.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="rise-in" style={{ animationDelay: `${afterTitle + 150}ms` }}>
            <Link
              to={NAV_CTA.to}
              className="group inline-flex items-center gap-3 rounded-md bg-gold px-6 py-3.5 font-bold text-navy shadow-[0_14px_30px_-12px_rgba(242,194,48,0.7)] transition hover:-translate-y-0.5 hover:bg-gold-light"
            >
              {NAV_CTA.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative hidden pl-5 lg:block">
          {/* gold rule draws downward, then the pillars slide in one by one */}
          <span className="grow-down absolute inset-y-0 left-0 w-0.5 bg-gold" style={{ animationDelay: `${t0 + 200}ms` }} aria-hidden="true" />
          <ul aria-label="What we focus on">
            {HERO.pillars.map((p, i) => (
              <li
                key={p}
                className="slide-in-right py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/90"
                style={{ animationDelay: `${t0 + 500 + i * 120}ms` }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
