import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT, NAV, NAV_CTA } from '../data/content.js';
import { LinkedInIcon, WhatsAppIcon } from './Icons.jsx';
import { ArrowRight } from './JobsPanel.jsx';

const navLink =
  'relative block whitespace-nowrap px-2 py-2 text-[14px] font-medium text-white/80 transition-colors hover:text-white xl:px-3 xl:text-[15px] xxl:px-4 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100';
const navActive = '!text-white after:!scale-x-100';

/** Horizontal SMARTANK logo: cube mark + gold wordmark, both cut from the original logo. */
export function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img src="/images/logo-mark.png" alt="" className="h-9 w-auto xl:h-11" />
      <img src="/images/logo-word.png" alt="SMARTANK Strategic Consultants" className="h-7 w-auto xl:h-9" />
    </span>
  );
}

/** "/#global-presence" style links are active only on that exact hash. */
function isActive(to, pathname, hash) {
  const [path, anchor] = to.split('#');
  if (anchor) return pathname === (path || '/') && hash === `#${anchor}`;
  if (to === '/') return pathname === '/' && !hash;
  return pathname === to || pathname.startsWith(`${to}/`);
}

function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname, hash } = useLocation();
  const active = item.children.some((c) => c.to && isActive(c.to, pathname, hash));

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`${navLink} inline-flex items-center gap-1.5 ${active ? navActive : ''}`}
      >
        {item.label}
        <span
          className={`mt-0.5 border-x-[4px] border-t-[5px] border-x-transparent border-t-current transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`absolute left-0 top-full z-10 pt-3 transition-all duration-300 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
        }`}
      >
        <ul className="min-w-[13rem] overflow-hidden rounded-xl border-t-[3px] border-gold bg-white py-2 shadow-[0_18px_40px_-12px_rgba(11,31,58,0.45)]">
          {item.children.map((c, i) =>
            c.divider ? (
              <li key={`d${i}`}>
                <hr className="my-2 border-black/10" />
              </li>
            ) : (
              <li key={c.label}>
                {c.external ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap px-5 py-2 font-medium text-navy transition-all hover:bg-tag hover:pl-6"
                  >
                    {c.label} <span className="text-xs text-ink">PDF ↗</span>
                  </a>
                ) : (
                  <Link to={c.to} className="block whitespace-nowrap px-5 py-2 font-medium text-navy transition-all hover:bg-tag hover:pl-6">
                    {c.label}
                  </Link>
                )}
              </li>
            ),
          )}
        </ul>
      </div>
    </li>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY >= 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubOpen(null);
  }, [pathname, hash]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1030] bg-navy transition-shadow duration-500 ${
        // no backdrop-filter here: it would trap the fixed mobile menu inside the header
        sticky ? 'shadow-[0_14px_30px_-18px_rgba(0,0,0,0.7)]' : ''
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-1/2 focus:top-2 focus:z-[2000] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>

      <div className="relative border-b border-white/10">
        <div className="container">
          <nav aria-label="Main" className="flex h-16 items-center justify-between gap-6 lg:h-20">
            <Link to="/" aria-label="SMARTANK home" className="relative z-[1101] shrink-0">
              <Logo />
            </Link>

            {/* Desktop menu */}
            <ul className="hidden items-center lg:flex">
              {NAV.map((item) =>
                item.children ? (
                  <DesktopDropdown key={item.label} item={item} />
                ) : (
                  <li key={item.label}>
                    <NavLink to={item.to} className={() => `${navLink} ${isActive(item.to, pathname, hash) ? navActive : ''}`}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                to={NAV_CTA.to}
                className="hidden items-center gap-2 whitespace-nowrap rounded-md bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-gold-light sm:inline-flex lg:hidden xl:inline-flex"
              >
                {NAV_CTA.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              {/* Mobile toggler: animated hamburger */}
              <button
                type="button"
                className="relative z-[1101] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 lg:hidden"
                aria-controls="main-menu"
                aria-expanded={open}
                aria-label={open ? 'Close navigation' : 'Open navigation'}
                onClick={() => setOpen((o) => !o)}
              >
                <span className="relative block h-4 w-5" aria-hidden="true">
                  <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all duration-300 ${open ? 'top-[7px] rotate-45' : 'top-0'}`} />
                  <span className={`absolute left-0 top-[7px] h-0.5 rounded bg-white transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3.5'}`} />
                  <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all duration-300 ${open ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* Scroll progress */}
        <div className="absolute -bottom-px left-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
      </div>

      {/* Mobile full-screen menu */}
      <div
        id="main-menu"
        className={`fixed inset-0 z-[1100] overflow-y-auto bg-navy transition-[clip-path] duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] lg:hidden ${
          open ? '[clip-path:circle(150%_at_calc(100%-34px)_32px)]' : 'pointer-events-none [clip-path:circle(0%_at_calc(100%-34px)_32px)]'
        }`}
        inert={open ? undefined : ''}
      >
        <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-2xl" aria-hidden="true" />
        <div className="flex min-h-full flex-col px-7 pb-8 pt-24">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li
                key={item.label}
                className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: open ? `${150 + i * 50}ms` : '0ms' }}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={subOpen === item.label}
                      onClick={() => setSubOpen((s) => (s === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between py-3 text-left text-2xl font-bold text-white"
                    >
                      {item.label}
                      <span className={`text-gold transition-transform duration-300 ${subOpen === item.label ? 'rotate-45' : ''}`} aria-hidden="true">
                        +
                      </span>
                    </button>
                    <ul
                      className={`grid overflow-hidden border-l-2 border-gold/60 pl-4 transition-all duration-300 ${
                        subOpen === item.label ? 'mb-2 max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.children
                        .filter((c) => !c.divider)
                        .map((c) => (
                          <li key={c.label}>
                            {c.external ? (
                              <a href={c.href} target="_blank" rel="noopener noreferrer" className="block py-2 text-base font-medium text-white/75 hover:text-gold">
                                {c.label} ↗
                              </a>
                            ) : (
                              <Link to={c.to} className="block py-2 text-base font-medium text-white/75 hover:text-gold">
                                {c.label}
                              </Link>
                            )}
                          </li>
                        ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className={`flex items-center gap-3 py-3 text-2xl font-bold transition-colors hover:text-gold ${
                      isActive(item.to, pathname, hash) ? 'text-gold' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            to={NAV_CTA.to}
            className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 font-bold text-navy transition-all delay-300 duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {NAV_CTA.label}
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className={`mt-auto border-t border-white/15 pt-6 transition-all delay-500 duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <a href={CONTACT.phoneHref} className="block text-lg font-bold text-white">
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.infoEmail}`} className="mt-1 block font-medium text-white/70">
              {CONTACT.infoEmail}
            </a>
            <div className="mt-4 flex gap-3">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#25D366]">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0A66C2]">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
