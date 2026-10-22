import { useCallback, useEffect, useRef, useState } from 'react';
import { HERO_SLIDES } from '../data/content.js';
import ArrowButton from './ArrowButton.jsx';

const AUTOPLAY = 3000; // slick default autoplaySpeed
const FADE = 1000; // slick speed

/** Fading hero slider (autoplay, dots, swipe/drag) with staggered text entrance. */
export default function HeroSlider({ slides = HERO_SLIDES }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 }); // -1..1 mouse position for shape parallax
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
      className="relative z-[1] mt-[60px] bg-cover bg-center bg-no-repeat lg:mt-[90px]"
      style={{ backgroundImage: "url('/images/hero_3_bg.jpg')" }}
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
      <div className="container">
        <div
          className="grid cursor-[url('/images/drag.png')_16_9,ew-resize] select-none"
          onMouseDown={(e) => start(e.clientX)}
          onMouseUp={(e) => end(e.clientX)}
          onTouchStart={(e) => start(e.touches[0].clientX)}
          onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
        >
          {slides.map((s, i) => {
            const on = i === active;
            return (
              <div
                key={s.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!on}
                inert={on ? undefined : ''}
                className={`col-start-1 row-start-1 transition-opacity ease-linear lg:flex lg:items-end ${
                  on ? 'is-active z-[1] opacity-100' : 'z-0 opacity-0'
                }`}
                style={{ transitionDuration: `${FADE}ms` }}
              >
                <div className="mt-20 lg:mb-[100px] lg:mt-[150px] lg:min-w-0 lg:flex-1">
                  <h2 className="hero-anim hero-anim-1 mb-[15px] inline-block rounded-full bg-tag px-[13px] py-1 text-[13px] font-extrabold uppercase tracking-[0.1em] text-navy">
                    We Are Expert In This Field
                  </h2>
                  {i === 0 ? (
                    <h1 className="hero-anim hero-anim-2 hero-title relative text-[25px] font-extrabold leading-[35px] text-navy sm:text-[40px] sm:leading-[50px] lg:text-[40px] lg:leading-[54px] xl:text-[50px] xl:leading-[60px]">
                      {s.title}
                    </h1>
                  ) : (
                    <p className="hero-anim hero-anim-2 hero-title relative mb-2 text-[25px] font-extrabold leading-[35px] text-navy sm:text-[40px] sm:leading-[50px] lg:text-[40px] lg:leading-[54px] xl:text-[50px] xl:leading-[60px]">
                      {s.title}
                    </p>
                  )}
                  <p className="hero-anim hero-anim-3 mb-[33px] mt-10 text-[#707070]">
                    {s.subtitle.map((line, j) => (
                      <span key={j}>
                        {j > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                  <ArrowButton to="/services" draggable="false">
                    Our Services
                  </ArrowButton>
                </div>
                <div className="relative top-[18px] z-[1] mx-auto mt-8 max-w-[420px] lg:mt-0 lg:w-[37.7%] lg:max-w-none lg:shrink-0">
                  <img src={s.image} alt={s.alt} className="w-[95%]" draggable="false" loading={i === 0 ? 'eager' : 'lazy'} />
                  <div
                    className="absolute top-[14%] -z-10 transition-transform duration-300 ease-out"
                    style={{ transform: `translate(${tilt.x * -18}px, ${tilt.y * -12}px)` }}
                    aria-hidden="true"
                  >
                    <div className="animate-bob4">
                      <img src="/images/hero3_dot_shape.png" alt="" className="w-full" draggable="false" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 -z-10 animate-moveleft lg:-ml-[110px]" aria-hidden="true">
                    <img src="/images/half-circle.png" alt="" draggable="false" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* slick-style dots: navy rings, active one filled */}
      <div className="container pointer-events-none absolute inset-x-0 bottom-[35px] z-[2] max-sm:static max-sm:pb-4">
        <ul className="pointer-events-auto flex gap-1">
          {slides.map((s, i) => (
            <li key={s.title}>
              {/* 24px hit area around the 10px ring; the active ring stretches into a pill */}
              <button
                type="button"
                aria-label={`${i + 1} of ${count}`}
                aria-current={i === active}
                onClick={() => go(i)}
                className="-mx-1.5 flex h-6 min-w-6 items-center justify-center px-1.5"
              >
                <span
                  className={`block h-2.5 rounded-full border-2 border-navy transition-all duration-500 ${
                    i === active ? 'w-7 bg-navy' : 'w-2.5 bg-transparent'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute left-3/4 top-[37%] -translate-x-1/2 sm:left-[45%] lg:top-[14%]"
        style={{ marginLeft: tilt.x * 24, marginTop: tilt.y * 16, transition: 'margin 0.3s ease-out' }}
        aria-hidden="true"
      >
        <img src="/images/box1.png" alt="" className="animate-rotate20" />
      </div>
    </section>
  );
}
