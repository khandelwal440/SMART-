import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Preloader from './Preloader.jsx';
import BackToTop from './BackToTop.jsx';
import WhatsAppFloat from './WhatsAppFloat.jsx';
import { scrollToId } from '../lib/scrollToId.js';

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Start each new page at the top, or at the #section in the URL.
  useEffect(() => {
    // undo any sideways shift a browser anchor jump may have caused
    const main = document.getElementById('main');
    if (main) main.scrollLeft = 0;
    if (hash) {
      const t = setTimeout(() => scrollToId(decodeURIComponent(hash.slice(1))), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash]);

  return (
    <>
      <Preloader />
      <Header />
      {/* reserves the fixed header's height (64px bar on phones; 40px top bar + 88px bar on desktop) */}
      <div className="h-[65px] lg:h-[129px]" aria-hidden="true" />
      <main id="main" tabIndex={-1} className="clip-x outline-none">
        {/* keyed by path so every page fades up on navigation */}
        <div key={pathname} className="animate-pageIn">
          <Outlet />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
