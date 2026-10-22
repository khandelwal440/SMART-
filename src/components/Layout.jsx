import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Preloader from './Preloader.jsx';
import BackToTop from './BackToTop.jsx';
import WhatsAppFloat from './WhatsAppFloat.jsx';

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Start each new page at the top, or at the #section in the URL.
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash]);

  return (
    <>
      <Preloader />
      <Header />
      <main id="main" tabIndex={-1} className="overflow-x-hidden outline-none">
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
