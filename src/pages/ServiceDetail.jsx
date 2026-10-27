import { Link, useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { Icon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { SERVICE_DETAILS, SERVICE_OPTIONS, SERVICES } from '../data/content.js';
import NotFound from './NotFound.jsx';

/** Maps a service to its option label in the enquiry form ("and" vs "&" spelling differs). */
function optionFor(title) {
  return SERVICE_OPTIONS.find((o) => o.replace('&', 'and').toLowerCase() === title.replace('&', 'and').toLowerCase()) || '';
}

/** Service detail: business challenge, what SMARTANK delivers, how we work, outcomes, enquiry. */
export default function ServiceDetail() {
  const { slug } = useParams();
  const index = SERVICES.findIndex((s) => s.id === slug);
  if (index < 0) return <NotFound />;
  const s = SERVICES[index];
  const d = SERVICE_DETAILS[slug];
  const others = SERVICES.filter((x) => x.id !== slug);

  return (
    <>
      <PageBanner title={s.title} crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]} />

      {/* intro + business challenge */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal aos="fade-right">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-navy">Service 0{index + 1}</p>
            <span className="mb-6 block h-[3px] w-10 rounded-full bg-gold" aria-hidden="true" />
            <p className="mb-8 text-2xl font-extrabold leading-snug text-navy sm:text-[28px]">{d.tagline}</p>
            <div className="rounded-lg border-l-4 border-gold bg-white p-6 shadow-[0_10px_30px_-22px_rgba(11,31,58,0.4)]">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-navy">The business challenge</h2>
              <p className="mb-0 leading-relaxed">{d.challenge}</p>
            </div>
          </Reveal>
          <Reveal aos="fade-left">
            <img src={d.image} alt={d.imageAlt} className="aspect-[4/3] w-full rounded-lg object-cover shadow-[0_30px_60px_-30px_rgba(11,31,58,0.6)]" />
          </Reveal>
        </div>
      </section>

      {/* what we deliver + outcomes */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <SectionIntro eyebrow="What SMARTANK Delivers" title="What you get from this engagement." className="mb-6" />
            <ul className="grid gap-3">
              {d.delivers.map((item, i) => (
                <Reveal as="li" aos="fade-up" delay={i * 80} key={item} className="flex items-start gap-3 rounded-md bg-cream p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium text-navy">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal aos="fade-up" className="self-start rounded-lg bg-navy p-7 text-white">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/70">Expected Outcomes</p>
            <span className="mb-6 block h-[3px] w-10 rounded-full bg-gold" aria-hidden="true" />
            <ul className="space-y-4">
              {d.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <Icon name="target" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="font-semibold">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* how we work */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container">
          <SectionIntro eyebrow="How We Work" title="A structured approach, step by step." className="mb-10 max-w-2xl" />
          <ol className={`grid gap-4 sm:grid-cols-2 ${d.process.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
            {d.process.map((p, i) => (
              <Reveal as="li" aos="fade-up" delay={i * 110} key={p.title} className="relative rounded-lg bg-white p-6 shadow-[0_10px_30px_-22px_rgba(11,31,58,0.4)]">
                <span className="mb-4 block text-3xl font-extrabold text-gold">0{i + 1}</span>
                <h3 className="mb-2 text-lg font-extrabold text-navy">{p.title}</h3>
                <p className="mb-0 text-sm leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* service-specific enquiry */}
      <section id="enquire" className="bg-white py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionIntro
              eyebrow="Enquire"
              title={`Discuss ${s.title} with SMARTANK.`}
              text="Share a few details and the right specialist will get back to you."
              className="mb-8"
            />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-navy">Other services</p>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.id}>
                  <Link to={`/services/${o.id}`} className="inline-flex items-center gap-2 py-1 font-semibold text-navy transition hover:gap-3 hover:text-gold">
                    <ArrowRight className="h-3.5 w-3.5 text-gold" /> {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-tag bg-cream p-6 sm:p-8">
            {/* key resets the form when moving between service pages */}
            <EnquiryForm key={slug} service={optionFor(s.title)} formName={`service-enquiry:${slug}`} submitLabel="Discuss Your Requirements" />
          </div>
        </div>
      </section>
    </>
  );
}
