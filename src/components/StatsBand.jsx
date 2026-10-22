import { useEffect, useRef, useState } from 'react';
import { JOBS, REGIONS, SERVICES } from '../data/content.js';

const STATS = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: REGIONS.length, suffix: '', label: 'Regions Served' },
  { value: SERVICES.length, suffix: '', label: 'Core Services' },
  { value: JOBS.length, suffix: '+', label: 'Open Leadership Roles' },
];

/** Counts from 0 to `to` once the element scrolls into view. */
function CountUp({ to, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setN(to);
      return undefined;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / 1600);
          setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

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
    <section aria-label="SmarTank in numbers" className="relative z-[2] bg-white py-10 sm:py-14">
      <div className="container">
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="lift group relative overflow-hidden rounded-2xl border border-tag bg-gradient-to-br from-white to-tag/60 px-4 py-6 text-center sm:px-6 sm:py-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber to-navy transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <p className="text-gradient mb-1 animate-gradient text-4xl font-extrabold leading-none sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mb-0 text-xs font-bold uppercase tracking-[0.12em] text-navy sm:text-sm">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
