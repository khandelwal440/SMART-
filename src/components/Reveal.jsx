import { useEffect, useRef, useState } from 'react';

/*
 * One shared scroll/resize listener for every <Reveal>. Each element is judged
 * on its VERTICAL position only, so slide-left/right elements that start fully
 * off-screen sideways (translateX ±100%) still trigger. An IntersectionObserver
 * would never see those, which left Services sections stuck off-screen.
 */
const OFFSET = 80; // px an element must rise above the bottom edge before it animates
const watchers = new Map(); // element -> setOn
let timer = 0;

function check() {
  timer = 0;
  const vh = window.innerHeight;
  watchers.forEach((setOn, el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh - OFFSET && r.bottom > 0) setOn(true);
    else if (r.top >= vh) setOn(false); // reset only once it is back below the fold, like AOS
  });
}

// Throttled with a timer rather than requestAnimationFrame, which some
// embedded/background views pause entirely.
function schedule() {
  if (!timer) timer = setTimeout(check, 40);
}

function watch(el, setOn) {
  if (watchers.size === 0) {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // re-check once images have loaded (layout shifts) and when a background tab becomes visible
    window.addEventListener('load', schedule);
    document.addEventListener('visibilitychange', schedule);
  }
  watchers.set(el, setOn);
  schedule();
}

function unwatch(el) {
  watchers.delete(el);
  if (watchers.size === 0) {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    window.removeEventListener('load', schedule);
    document.removeEventListener('visibilitychange', schedule);
  }
}

/** Returns [ref, inView] using the shared vertical-position check above. */
export function useInView() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    watch(el, setOn);
    return () => unwatch(el);
  }, []);
  return [ref, on];
}

/**
 * AOS-style scroll animation (same effect names as the original site:
 * fade-left/right/up, zoom-in, flip-left/right, slide-left/right).
 * Animates in on scroll down and resets when the element drops back below the fold.
 */
export default function Reveal({ as: Tag = 'div', aos = 'fade-up', className = '', children, ...rest }) {
  const [ref, on] = useInView();

  return (
    <Tag ref={ref} data-aos={aos} className={`${on ? 'aos-animate' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
