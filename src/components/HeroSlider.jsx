import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data/content.js';
import ArrowButton from './ArrowButton.jsx';

const AUTOPLAY = 4000;
const FADE = 1000;

/** Splits a title so its last two words can be set in gold italic. */
function splitTitle(title) {
  const words = title.split(' ');
  return [words.slice(0, -2).join(' '), words.slice(-2).join(' ')];
}

/** Dark navy fading hero slider (autoplay, dots, swipe/drag) with staggered text entrance. */
export default function HeroSlider({ slides = HERO_SLIDES }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 }); // -1..1 mouse position for parallax
  const dragX = useRef(null);
  const count = slides.length;
  const go = useCallback((i) => setActive(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => go(active + 1), AUTOPLAY + FADE);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  const start = (x) => (dragX.current = x);
  const end = (x) => {
    if (dragX.current == null) return;
    const dx = x - dragX.current;
    if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
    dragX.current = null;
  };

  return (
    <section
      className="relative z-[1] overflow-hidden bg-navy text-white"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({ x: ((e.clientX - r.left) / r.width) * 2 - 1, y: ((e.clientY - r.top) / r.height) * 2 - 1 });
      }}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* background: navy gradient, gold glows, dot texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#13305A_0%,#0B1F3A_55%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl transition-transform duration-300"
        style={{ transform: `translate(${tilt.x * -20}px, ${tilt.y * -14}px)` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#F8DA74_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="container relative">
        <div
          className="grid cursor-[url('/images/drag.png')_16_9,ew-resize] select-none"
          onMouseDown={(e) => start(e.clientX)}
          onMouseUp={(e) => end(e.clientX)}
          onTouchStart={(e) => start(e.touches[0].clientX)}
          onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
        >
          {slides.map((s, i) => {
            const on = i === active;
            const [lead, tail] = splitTitle(s.title);
            const TitleTag = i === 0 ? 'h1' : 'p';
            return (
              <div
                key={s.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!on}
                inert={on ? undefined : ''}
                className={`col-start-1 row-start-1 grid items-center gap-10 py-14 transition-opacity ease-linear lg:grid-cols-[1.15fr_0.85fr] lg:py-24 ${
                  on ? 'is-active z-[1] opacity-100' : 'z-0 opacity-0'
                }`}
                style={{ transitionDuration: `${FADE}ms` }}
              >
                <div>
                  <p className="hero-anim hero-anim-1 mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    We Are Expert In This Field
                  </p>
                  <TitleTag className="hero-anim hero-anim-2 mb-0 font-display text-[34px] font-bold leading-[1.12] text-white sm:text-[46px] xl:text-[58px]">
                    {lead} <em className="font-display italic text-gold">{tail}</em>
                  </TitleTag>
                  <p className="hero-anim hero-anim-3 mb-9 mt-6 max-w-xl text-lg font-medium text-white/70">
                    {s.subtitle.join(' ')}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <ArrowButton to="/services" draggable="false">
                      Our Services
                    </ArrowButton>
                    <Link
                      to="/contact"
                      draggable="false"
                      className="inline-flex items-center rounded-full border border-white/30 px-6 py-[15px] text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:border-gold hover:text-gold"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* photo on a gold ring */}
                <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[460px]">
                  <div
                    className="absolute inset-[6%] rounded-full border-2 border-gold/60 transition-transform duration-300"
                    style={{ transform: `translate(${tilt.x * 10}px, ${tilt.y * 8}px)` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-[14%] rounded-full bg-gradient-to-br from-gold/30 to-transparent" aria-hidden="true" />
                  <img src={s.image} alt={s.alt} className="relative w-full" draggable="false" loading={i === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute -left-2 top-10 h-4 w-4 animate-bob4 rounded-full bg-gold shadow-[0_0_0_8px_rgba(242,194,48,0.18)]" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>

        {/* dots: gold rings, the active one stretches into a pill */}
        <ul className="relative z-[2] flex pb-8 lg:absolute lg:bottom-8 lg:pb-0">
          {slides.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                aria-label={`${i + 1} of ${count}`}
                aria-current={i === active}
                onClick={() => go(i)}
                className="flex h-7 items-center justify-center px-2"
              >
                <span
                  className={`block h-2.5 rounded-full border-2 border-gold transition-all duration-500 ${
                    i === active ? 'w-8 bg-gold' : 'w-2.5 bg-transparent'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
