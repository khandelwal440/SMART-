import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { Icon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { SERVICE_DETAILS, SERVICES } from '../data/content.js';

/** Services overview: the four core services, each linking to its own detail page. */
export default function Services() {
  return (
    <>
      <PageBanner title="Services" />
      <section className="bg-cream py-16 sm:py-24">
        <div className="container">
          <SectionIntro
            eyebrow="What We Do"
            title="Strategic HR services, each tied to a business outcome."
            text="SMARTANK works across four connected areas. Choose a service to see the business challenge it solves, what we deliver, how we work and the outcomes to expect."
            className="mb-12 max-w-2xl"
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s, i) => {
              const d = SERVICE_DETAILS[s.id];
              return (
                <Reveal as="li" aos="fade-up" delay={(i % 2) * 120} key={s.id} id={s.id} className="h-full scroll-mt-28">
                  <Link
                    to={`/services/${s.id}`}
                    className="group grid h-full overflow-hidden rounded-lg bg-white shadow-[0_10px_30px_-20px_rgba(11,31,58,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_45px_-26px_rgba(11,31,58,0.6)] sm:grid-cols-[0.9fr_1.1fr]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                      <img src={d.image} alt={d.imageAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="flex flex-col p-6 sm:p-7">
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-navy text-gold">
                        <Icon name={d.icon} className="h-6 w-6" />
                      </span>
                      <span className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-ink">Service 0{i + 1}</span>
                      <h2 className="mb-3 text-xl font-extrabold leading-snug text-navy">{s.title}</h2>
                      <p className="mb-5 flex-1 text-[15px] leading-relaxed">{d.tagline}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-all group-hover:gap-3 group-hover:text-gold">
                        Explore this service <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
