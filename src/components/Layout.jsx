import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Preloader from './Preloader.jsx';
import BackToTop from './BackToTop.jsx';
import WhatsAppFloat from './WhatsAppFloat.jsx';
import { scrollToId } from '../lib/scrollToId.js';
import { BLOGS, PAGE_META, SERVICE_DETAILS, SERVICES } from '../data/content.js';

/** Page title + meta description for a path (SEO, suggestions doc section 12). */
function metaFor(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (PAGE_META[path]) return PAGE_META[path];
  const [, section, slug] = path.split('/');
  if (section === 'services') {
    const s = SERVICES.find((x) => x.id === slug);
    if (s) return [`${s.title} | SMARTANK`, SERVICE_DETAILS[s.id]?.tagline || s.summary];
  }
  if (section === 'insights') {
    const b = BLOGS.find((x) => x.slug === slug);
    if (b) return [`${b.title} | SMARTANK Insights`, b.excerpt];
  }
  return ['Page not found | SMARTANK', PAGE_META['/'][1]];
}

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const [title, description] = metaFor(pathname);
    document.title = title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
  }, [pathname]);

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
      {/* reserves the fixed header's height (64px on phones, 80px on desktop, + 1px border) */}
      <div className="h-[65px] lg:h-[81px]" aria-hidden="true" />
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
