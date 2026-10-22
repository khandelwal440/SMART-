import { useState } from 'react';

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d4eef1"/><stop offset="1" stop-color="#a9dde3"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><circle cx="400" cy="270" r="70" fill="#0e8592" opacity=".35"/><rect x="300" y="370" width="200" height="18" rx="9" fill="#0b2d4a" opacity=".2"/></svg>`,
  );

/** Lazy-loaded image with a soft branded fallback if the stock photo fails. */
export default function Img({ src, alt, className = '', eager = false, ...rest }) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => current !== FALLBACK && setCurrent(FALLBACK)}
      className={`bg-tag ${className}`}
      {...rest}
    />
  );
}
