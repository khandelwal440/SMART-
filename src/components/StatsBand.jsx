import { useEffect, useRef, useState } from 'react';
import { JOBS, REGIONS, SERVICES } from '../data/content.js';
import { useInView } from './Reveal.jsx';

const STATS = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: REGIONS.length, suffix: '', label: 'Regions Served' },
  { value: SERVICES.length, suffix: '', label: 'Core Services' },
  { value: JOBS.length, suffix: '+', label: 'Open Leadership Roles' },
];

/** Counts from 0 to `to` once the element scrolls into view. */
export function CountUp({ to, suffix }) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return undefined;
    done.current = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to);
      return undefined;
    }
    const start = Date.now();
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / 1600);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t >= 1) clearInterval(id);
    }, 30);
    return () => {
      clearInterval(id);
      setN(to); // never leave a half-counted number if unmounted mid-animation
    };
  }, [inView, to]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">
        {n}
        {suffix}
      </span>
    </span>
  );
}

export default function StatsBand() {
  return (
    // white cards that overlap the bottom of the navy hero
    <section aria-label="SMARTANK in numbers" className="relative z-[2] -mt-10 pb-4 sm:-mt-14">
      <div className="container">
        <ul className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-3 shadow-[0_30px_60px_-30px_rgba(11,31,58,0.55)] sm:gap-4 sm:p-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="group relative overflow-hidden rounded-2xl bg-cream px-4 py-6 text-center transition-colors duration-500 hover:bg-navy sm:px-6 sm:py-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-navy transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <p className="mb-1 font-display text-4xl font-bold leading-none text-gold sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mb-0 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors duration-500 group-hover:text-white sm:text-sm">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
