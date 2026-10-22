import { Link } from 'react-router-dom';

export function Chevron({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 320 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M285.5 273L91.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9L188.5 256 34.5 101.3c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L285.5 239c9.4 9.4 9.4 24.6 0 34z" />
    </svg>
  );
}

/**
 * The site's signature amber pill button with the navy circle + chevron.
 * Renders a router Link (`to`), an anchor (`href`) or a <button>.
 */
export default function ArrowButton({ to, href, children, className = '', ...rest }) {
  const content = (
    <>
      {children}
      <Chevron className="ml-[45px] h-3.5 w-3.5 shrink-0 text-white" />
    </>
  );
  const cls = `st-btn ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>;
  return <button type="button" className={cls} {...rest}>{content}</button>;
}
