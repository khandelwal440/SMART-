import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV } from '../data/content.js';

const navLink = 'block px-4 py-2 text-navlink transition-colors hover:text-black/70 lg:px-3 xxl:px-4';

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
        className={`${navLink} inline-flex items-center gap-1.5 ${active ? '!text-black/90' : ''}`}
      >
        {item.label}
        <span className="mt-0.5 border-x-[5px] border-t-[5px] border-x-transparent border-t-current" aria-hidden="true" />
      </button>
      <ul
        className={`absolute left-0 top-full z-10 min-w-[10rem] rounded border border-black/15 bg-white py-2 text-left shadow-sm ${
          open ? 'block' : 'hidden'
        }`}
      >
        {item.children.map((c, i) =>
          c.divider ? (
            <li key={`d${i}`}>
              <hr className="my-2 border-black/15" />
            </li>
          ) : (
            <li key={c.label}>
              {c.external ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="block whitespace-nowrap px-4 py-1 font-normal text-[#212529] hover:bg-[#e9ecef]">
                  {c.label}
                </a>
              ) : (
                <Link to={c.to} className="block whitespace-nowrap px-4 py-1 font-normal text-[#212529] hover:bg-[#e9ecef]">
                  {c.label}
                </Link>
              )}
            </li>
          ),
        )}
      </ul>
    </li>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const logoSize = sticky
    ? 'h-[96px] w-[150px]'
    : 'h-[117px] w-[180px] xl:h-[160px] xl:w-[250px] xxl:h-[211px] xxl:w-[330px]';

  return (
    <header className="fixed inset-x-0 top-0 z-[1030] border-b-[3px] border-navy bg-white transition-all duration-500">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-1/2 focus:top-2 focus:z-[2000] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="relative mx-auto w-full px-3 lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]">
        <nav aria-label="Main" className="relative flex items-center justify-end">
          {/* Mobile toggler */}
          <button
            type="button"
            className="relative z-[10000] my-2 rounded border border-black/10 px-3 py-1 text-black/55 max-[350px]:border-white max-[350px]:text-white lg:hidden"
            aria-controls="main-menu"
            aria-expanded={open}
            aria-label={open ? 'Close navigation' : 'Toggle navigation'}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 30 30" className="h-[30px] w-[30px]" aria-hidden="true">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d={open ? 'M8 8 L22 22 M8 22 L22 8' : 'M4 7h22M4 15h22M4 23h22'}
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className={`hidden items-center justify-end transition-all duration-500 lg:flex ${sticky ? 'h-[50px]' : 'h-[90px]'}`}>
            {NAV.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `${navLink} ${isActive ? '!text-black/90' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Link to="/" className="logo-panel absolute left-3 top-0 pr-10" aria-label="SmarTank home">
          <img src="/images/logo.jpg" alt="SmarTank Strategic Consultants" className={`transition-all duration-500 ${logoSize}`} />
        </Link>
      </div>

      {/* Mobile full-screen menu */}
      <div
        id="main-menu"
        className={`fixed inset-0 bg-white transition-all duration-[400ms] lg:hidden ${
          open ? 'visible z-[1099] opacity-100' : 'invisible -z-10 opacity-0'
        }`}
        inert={open ? undefined : ''}
      >
        <ul className="absolute top-[90px] flex w-full flex-col items-center sm:items-end sm:pr-10">
          {NAV.map((item) => (
            <li
              key={item.label}
              className={`mb-[18px] text-center transition-opacity duration-[400ms] sm:mb-[30px] sm:text-right ${open ? 'opacity-100' : 'opacity-0'}`}
            >
              {item.children ? (
                <>
                  <span className="block text-xl font-medium leading-6 tracking-[0.24px] text-navlink sm:text-2xl sm:text-black">
                    {item.label}
                  </span>
                  <ul className="mt-3 space-y-2">
                    {item.children
                      .filter((c) => !c.divider)
                      .map((c) => (
                        <li key={c.label}>
                          {c.external ? (
                            <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-base font-normal text-navlink">
                              {c.label}
                            </a>
                          ) : (
                            <Link to={c.to} className="text-base font-normal text-navlink">
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
                  className="text-xl font-medium leading-6 tracking-[0.24px] text-navlink sm:text-2xl sm:text-black"
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
