import { useEffect, useRef, useState } from 'react';

const PATH_LENGTH = 307.919; // circumference of the r=49 circle below

/** Back-to-top button whose ring fills as the page scrolls. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (pathRef.current) pathRef.current.style.strokeDashoffset = String(PATH_LENGTH - progress * PATH_LENGTH);
      setVisible(window.scrollY > 250);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`group fixed bottom-[35px] right-[26px] z-[999] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_2px_rgba(22,93,245,0.2)] transition-all duration-200 ${
        visible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-[15px] opacity-0'
      }`}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="-1 -1 102 102" aria-hidden="true">
        <path
          ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          fill="none"
          stroke="#0B1F3A"
          strokeWidth="4"
          style={{ strokeDasharray: `${PATH_LENGTH} ${PATH_LENGTH}`, strokeDashoffset: PATH_LENGTH, transition: 'stroke-dashoffset 10ms linear' }}
        />
      </svg>
      <svg viewBox="0 0 320 512" className="relative h-[18px] w-[18px] text-[#0B1F3A] group-hover:text-navy" fill="currentColor" aria-hidden="true">
        <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
      </svg>
    </button>
  );
}
