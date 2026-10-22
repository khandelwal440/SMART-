import { useCallback, useEffect, useRef, useState } from 'react';
import { SERVICES } from '../data/content.js';
import ArrowButton from './ArrowButton.jsx';

const SPEED = 1000;
const AUTOPLAY = 3000;

/** Same breakpoints as the original slick settings. */
function useLayout() {
  const get = () => {
    const w = window.innerWidth;
    if (w < 540) return { show: 1, center: false, arrows: false, dots: true };
    if (w < 992) return { show: 2, center: false, arrows: true, dots: false };
    return { show: 3, center: true, arrows: true, dots: false };
  };
  const [layout, setLayout] = useState(get);
  useEffect(() => {
    const onResize = () => setLayout(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return layout;
}

function ServiceCard({ s }) {
  return (
    <article className="group overflow-hidden rounded-[15px] bg-white transition-all duration-500 [filter:drop-shadow(0px_7px_7px_rgba(189,202,202,0.35))] hover:-translate-y-2 hover:[filter:drop-shadow(0px_20px_25px_rgba(34,83,120,0.25))]">
      <div className="overflow-hidden rounded-t-[15px]">
        <img src={s.card} alt={s.title} className="w-full transition-transform duration-700 group-hover:scale-110" draggable="false" loading="lazy" />
      </div>
      <div className="flex flex-col items-center p-4">
        <h3 className="mb-[7px] text-center text-2xl font-extrabold text-navy max-lg:text-[23px]">
          {s.cardTitle.map((line, j) => (
            <span key={j}>
              {j > 0 && <br />}
              {line}
            </span>
          ))}
        </h3>
        <p className="mb-5 text-center text-base font-normal leading-6 text-ink">{s.summary}</p>
        <ArrowButton to={`/services#${s.id}`} className="mb-5" draggable="false">
          Know More
        </ArrowButton>
      </div>
    </article>
  );
}

/**
 * Infinite services carousel: centre mode with scaled centre card on desktop,
 * 2-up on tablets, 1-up with dots on phones. Autoplays and pauses on hover.
 */
export default function ServiceCarousel({ items = SERVICES }) {
  const { show, center, arrows, dots } = useLayout();
  const n = items.length;
  // Clone the list on both sides so it can loop seamlessly.
  const slides = [...items, ...items, ...items];
  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const dragX = useRef(null);

  const go = useCallback((i) => {
    setAnimate(true);
    setIndex(i);
  }, []);

  // After sliding into a clone, jump back to the matching real slide without animation.
  useEffect(() => {
    if (index >= 2 * n || index < n) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex((i) => (i >= 2 * n ? i - n : i + n));
      }, SPEED);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [index, n]);

  useEffect(() => {
    if (!animate) {
      // re-enable transitions just after the instant jump has been painted
      const t = setTimeout(() => setAnimate(true), 30);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [animate]);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => go(index + 1), AUTOPLAY + SPEED);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const width = 100 / show;
  const offset = center ? index - Math.floor(show / 2) : index;
  const realIndex = ((index % n) + n) % n;

  const end = (x) => {
    if (dragX.current == null) return;
    const dx = x - dragX.current;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    dragX.current = null;
  };

  return (
    <div
      className="relative mt-[30px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Our services"
    >
      <div
        className="overflow-hidden px-[10px]"
        onMouseDown={(e) => (dragX.current = e.clientX)}
        onMouseUp={(e) => end(e.clientX)}
        onTouchStart={(e) => (dragX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
      >
        <div
          className="flex"
          style={{
            transform: `translate3d(-${offset * width}%, 0, 0)`,
            transition: animate ? `transform ${SPEED}ms ease` : 'none',
          }}
        >
          {slides.map((s, i) => {
            const isCenter = center && i === index;
            const visible = i >= offset && i < offset + show;
            return (
              <div
                key={i}
                className="shrink-0 px-3 py-10"
                style={{
                  width: `${width}%`,
                  transform: `scale(${isCenter ? 1.1 : 0.9})`,
                  transition: animate ? 'transform 0.4s ease-in-out' : 'none',
                }}
                aria-hidden={!visible}
                inert={visible ? undefined : ''}
              >
                <ServiceCard s={s} />
              </div>
            );
          })}
        </div>
      </div>

      {arrows && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(index - 1)}
            className="absolute left-0 top-1/2 z-[1] h-[35px] w-[52px] -translate-y-1/2 bg-[url('/images/gal-prev.png')] bg-cover xl:-left-[50px]"
          />
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(index + 1)}
            className="absolute right-0 top-1/2 z-[1] h-[35px] w-[52px] -translate-y-1/2 bg-[url('/images/gal-next.png')] bg-cover xl:-right-[48px]"
          />
        </>
      )}

      {dots && (
        <ul className="flex justify-center gap-1 px-3">
          {items.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                aria-label={`${i + 1} of ${n}`}
                aria-current={i === realIndex}
                onClick={() => go(n + i)}
                className="flex h-6 items-center px-1.5"
              >
                <span
                  className={`block h-2.5 rounded-full border-2 border-navy transition-all duration-500 ${i === realIndex ? 'w-7 bg-navy' : 'w-2.5'}`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
