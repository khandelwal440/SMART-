import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { INDUSTRIES, NAV_CTA } from '../data/content.js';

export default function Industries() {
  return (
    <>
      <PageBanner title="Industries" />
      <section className="bg-cream py-16 sm:py-20">
        <div className="container">
          <SectionIntro eyebrow="Industries We Cater" title={INDUSTRIES.title} text={INDUSTRIES.text} className="mb-12 max-w-2xl" />
          <ul className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.list.map((ind) => (
              <Reveal as="li" aos="fade-up" key={ind.id} id={ind.id} className="scroll-mt-28">
                <article className="group grid h-full overflow-hidden rounded-lg bg-white shadow-[0_10px_30px_-20px_rgba(11,31,58,0.35)] sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                    <img src={ind.image} alt={ind.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex flex-col p-6 sm:p-8">
                    <span className="mb-4 block h-[3px] w-10 rounded-full bg-gold" aria-hidden="true" />
                    <h2 className="mb-3 text-2xl font-extrabold text-navy">{ind.name}</h2>
                    <p className="mb-6 flex-1 leading-relaxed">{ind.text}</p>
                    <Link to={NAV_CTA.to} className="inline-flex items-center gap-2 self-start py-1 text-sm font-bold text-navy transition hover:gap-3 hover:text-gold">
                      Talk to us about {ind.name.split(' ')[0].replace(',', '')}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
