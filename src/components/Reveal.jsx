import { useEffect, useRef, useState } from 'react';

/**
 * AOS-style scroll animation (same effect names as the original site:
 * fade-left/right/up, zoom-in, flip-left/right, slide-left/right).
 * Like AOS without `once`, it animates in on scroll down and resets when the
 * element drops back below the viewport.
 */
export default function Reveal({ as: Tag = 'div', aos = 'fade-up', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setOn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOn(true);
        else if (entry.boundingClientRect.top > 0) setOn(false); // only reset when it is below the fold
      },
      { rootMargin: '0px 0px -120px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-aos={aos} className={`${on ? 'aos-animate' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
