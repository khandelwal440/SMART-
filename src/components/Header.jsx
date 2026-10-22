import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT, NAV } from '../data/content.js';
import { LinkedInIcon, WhatsAppIcon } from './Icons.jsx';

const navLink =
  'relative block px-4 py-2 text-navlink transition-colors hover:text-navy lg:px-3 xxl:px-4 after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded after:bg-amber after:transition-transform after:duration-300 hover:after:scale-x-100';
const navActive = '!text-navy after:!scale-x-100';

function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const active = item.children.some((c) => c.to === pathname);

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
          className={`mt-0.5 border-x-[5px] border-t-[5px] border-x-transparent border-t-current transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`absolute left-0 top-full z-10 pt-2 transition-all duration-300 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
        }`}
      >
        <ul className="min-w-[13rem] overflow-hidden rounded-xl border-t-[3px] border-amber bg-white py-2 shadow-[0_18px_40px_-12px_rgba(34,83,120,0.35)]">
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
                    className="block whitespace-nowrap px-5 py-2 font-medium text-[#212529] transition hover:bg-tag hover:pl-6 hover:text-navy"
                  >
                    {c.label} <span className="text-xs text-amber">PDF ↗</span>
                  </a>
                ) : (
                  <Link
                    to={c.to}
                    className="block whitespace-nowrap px-5 py-2 font-medium text-[#212529] transition-all hover:bg-tag hover:pl-6 hover:text-navy"
                  >
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
  const [aboutOpen, setAboutOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY >= 100);
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
    setAboutOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const logoSize = sticky
    ? 'h-[64px] w-[100px] sm:h-[77px] sm:w-[120px] lg:h-[96px] lg:w-[150px]'
    : 'h-[77px] w-[120px] sm:h-[96px] sm:w-[150px] lg:h-[117px] lg:w-[180px] xl:h-[160px] xl:w-[250px] xxl:h-[211px] xxl:w-[330px]';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1030] border-b-[3px] border-navy transition-all duration-500 ${
        // no backdrop-filter here: it would trap the fixed mobile menu inside the header
        sticky ? 'bg-white shadow-[0_10px_30px_-18px_rgba(34,83,120,0.6)]' : 'bg-white'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-1/2 focus:top-2 focus:z-[2000] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="relative mx-auto w-full px-3 lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]">
        <nav aria-label="Main" className="relative flex h-[55px] items-center justify-end lg:h-auto">
          {/* Mobile toggler: animated hamburger */}
          <button
            type="button"
            className={`group relative z-[1101] flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              open ? 'bg-white/10' : 'bg-tag'
            }`}
            aria-controls="main-menu"
            aria-expanded={open}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-5 rounded transition-all duration-300 ${open ? 'top-[7px] rotate-45 bg-white' : 'top-0 bg-navy'}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 rounded bg-navy transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3.5'}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded transition-all duration-300 ${open ? 'top-[7px] -rotate-45 bg-white' : 'top-[14px] bg-navy'}`} />
            </span>
          </button>

          {/* Desktop menu */}
          <ul className={`hidden items-center justify-end transition-all duration-500 lg:flex ${sticky ? 'h-[60px]' : 'h-[90px]'}`}>
            {NAV.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label}>
                  <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `${navLink} ${isActive ? navActive : ''}`}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Link to="/" className="logo-panel absolute left-3 top-0 pr-8 lg:pr-10" aria-label="SmarTank home">
          <img src="/images/logo.jpg" alt="SmarTank Strategic Consultants" className={`transition-all duration-500 ${logoSize}`} />
        </Link>
      </div>

      {/* Scroll progress */}
      <div className="absolute -bottom-[3px] left-0 h-[3px] bg-gradient-to-r from-amber via-[#ffcc4d] to-amber" style={{ width: `${progress * 100}%` }} aria-hidden="true" />

      {/* Mobile full-screen menu */}
      <div
        id="main-menu"
        className={`fixed inset-0 z-[1100] overflow-y-auto bg-navy transition-[clip-path] duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] lg:hidden ${
          open ? '[clip-path:circle(150%_at_calc(100%-34px)_28px)]' : 'pointer-events-none [clip-path:circle(0%_at_calc(100%-34px)_28px)]'
        }`}
        inert={open ? undefined : ''}
      >
        <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-amber/10 blur-2xl" aria-hidden="true" />
        <div className="flex min-h-full flex-col px-7 pb-8 pt-24">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li
                key={item.label}
                className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: open ? `${150 + i * 60}ms` : '0ms' }}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={aboutOpen}
                      onClick={() => setAboutOpen((o) => !o)}
                      className="flex w-full items-center justify-between py-3 text-left text-2xl font-bold text-white"
                    >
                      {item.label}
                      <span className={`text-amber transition-transform duration-300 ${aboutOpen ? 'rotate-45' : ''}`} aria-hidden="true">
                        +
                      </span>
                    </button>
                    <ul className={`grid overflow-hidden border-l-2 border-amber/60 pl-4 transition-all duration-300 ${aboutOpen ? 'mb-2 max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {item.children
                        .filter((c) => !c.divider)
                        .map((c) => (
                          <li key={c.label}>
                            {c.external ? (
                              <a href={c.href} target="_blank" rel="noopener noreferrer" className="block py-2 text-base font-medium text-white/75 hover:text-amber">
                                {c.label} ↗
                              </a>
                            ) : (
                              <Link to={c.to} className="block py-2 text-base font-medium text-white/75 hover:text-amber">
                                {c.label}
                              </Link>
                            )}
                          </li>
                        ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-3 text-2xl font-bold transition-colors hover:text-amber ${isActive ? 'text-amber' : 'text-white'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div
            className={`mt-auto border-t border-white/15 pt-6 transition-all delay-500 duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
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
