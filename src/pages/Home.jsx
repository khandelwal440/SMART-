import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import WorldMap from '../components/WorldMap.jsx';
import { CountUp } from '../components/StatsBand.jsx';
import { Icon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import {
  CALLBACK_BAND,
  HOME_ABOUT,
  IMPACT,
  JOBS,
  REGIONS_SERVED,
  SERVICE_DETAILS,
  SERVICES,
  WHY_SMARTANK,
} from '../data/content.js';

// Map pins for the regions strip (Africa shown at Nairobi as a representative point).
const PINS = {
  India: { lat: 19.1, lon: 72.9 },
  Singapore: { lat: 1.35, lon: 103.8 },
  UAE: { lat: 25.2, lon: 55.3 },
  UK: { lat: 51.5, lon: -0.1 },
  Africa: { lat: -1.3, lon: 36.8 },
};

function RegionsStrip() {
  const markers = REGIONS_SERVED.filter((r) => PINS[r]).map((r) => ({ label: r, ...PINS[r] }));
  return (
    <section aria-labelledby="regions-title" className="relative overflow-hidden bg-navy text-white">
      <div className="container grid items-center gap-6 py-10 lg:grid-cols-[1fr_1.2fr] lg:py-6">
        <Reveal aos="fade-up">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-white/70">Regions we serve</p>
          <h2 id="regions-title" className="mb-5 text-2xl font-extrabold text-white sm:text-3xl">
            Local understanding. Global perspective.
          </h2>
          <ul className="flex flex-wrap gap-2">
            {REGIONS_SERVED.map((r) => (
              <li key={r} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold">
                <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
        <WorldMap markers={markers} className="w-full lg:max-h-[260px]" />
      </div>
    </section>
  );
}

function HomeAbout() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal aos="fade-right" className="relative">
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-lg border-2 border-gold/60" aria-hidden="true" />
          <img src={HOME_ABOUT.image} alt={HOME_ABOUT.imageAlt} className="relative aspect-[4/3] w-full rounded-lg object-cover shadow-[0_30px_60px_-30px_rgba(11,31,58,0.6)]" loading="lazy" />
        </Reveal>
        <SectionIntro eyebrow="About SMARTANK" title={HOME_ABOUT.title} text={HOME_ABOUT.text} cta={{ label: 'Know More', to: '/about' }} />
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container">
        <SectionIntro
          eyebrow="What We Do"
          title="Four ways we connect people decisions to business outcomes."
          cta={{ label: 'Explore All Services', to: '/services' }}
          className="mb-10 max-w-2xl"
        />
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => {
            const d = SERVICE_DETAILS[s.id];
            return (
              <Reveal as="li" aos="fade-up" delay={i * 120} key={s.id} className="h-full">
                <Link
                  to={`/services/${s.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-black/5 bg-white shadow-[0_10px_30px_-20px_rgba(11,31,58,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_24px_40px_-24px_rgba(11,31,58,0.55)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={d.image} alt={d.imageAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-navy text-gold">
                      <Icon name={d.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-lg font-extrabold leading-snug text-navy">{s.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed">{d.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-all group-hover:gap-3 group-hover:text-gold">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function WhySmartank() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionIntro
            eyebrow="Why SMARTANK"
            title="A consulting partner focused on business outcomes."
            cta={{ label: 'How we work', to: '/about#why-smartank' }}
            className="mb-8"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {WHY_SMARTANK.map((w, i) => (
              <Reveal as="li" aos="fade-up" delay={i * 110} key={w.title} className="rounded-lg bg-white p-5 shadow-[0_10px_30px_-22px_rgba(11,31,58,0.4)]">
                <Icon name={w.icon} className="mb-3 h-8 w-8 text-gold" />
                <h3 className="mb-1.5 text-base font-extrabold text-navy">{w.title}</h3>
                <p className="mb-0 text-sm leading-relaxed">{w.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal aos="fade-left" className="relative hidden lg:block">
          <img src="/images/site/advisors-conversation.jpg" alt="Two SMARTANK advisors in conversation" className="aspect-[4/5] w-full rounded-lg object-cover" loading="lazy" />
          <div className="absolute -bottom-6 -left-6 rounded-lg bg-navy p-6 text-white shadow-[0_30px_60px_-30px_rgba(11,31,58,0.8)]">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">Our promise</p>
            <p className="mb-0 max-w-[16rem] font-bold">Discreet, structured and measured by business results.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container">
        <SectionIntro eyebrow="Impact" title={IMPACT.title} className="mb-10 max-w-2xl" />
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {IMPACT.stats.map((s, i) => (
            <Reveal as="li" aos="fade-up" delay={i * 120} key={s.label} className="rounded-lg border border-tag bg-cream p-6">
              <p className="mb-2 text-[40px] font-extrabold leading-none text-navy sm:text-[48px]">
                {s.value == null ? (
                  // placeholder until the figure is approved (see IMPACT in content.js)
                  <span className="text-ink/40">TBC</span>
                ) : (
                  <CountUp to={s.value} suffix={s.suffix} />
                )}
              </p>
              <span className="mb-3 block h-[3px] w-8 rounded-full bg-gold" aria-hidden="true" />
              <p className="mb-0 text-xs font-bold uppercase tracking-[0.12em] text-navy">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedOpenings() {
  const featured = JOBS.slice(0, 3);
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro eyebrow="Featured Openings" title="Leadership roles we are hiring for." className="max-w-2xl" />
          <Link to="/jobs-open" className="inline-flex items-center gap-2 self-start py-1 font-bold text-navy transition hover:gap-3 hover:text-gold lg:self-auto">
            View all openings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {featured.map((j, i) => (
            <Reveal as="li" aos="fade-up" delay={i * 120} key={`${j.title}-${i}`} className="h-full">
              <Link
                to="/jobs-open"
                className="group flex h-full flex-col rounded-lg border border-black/5 bg-white p-6 shadow-[0_10px_30px_-22px_rgba(11,31,58,0.4)] transition hover:-translate-y-1 hover:border-gold"
              >
                <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded-full bg-navy px-3 py-1 text-white">{j.level}</span>
                  <span className="rounded-full bg-tag px-3 py-1 text-navy">{j.func}</span>
                </div>
                <h3 className="mb-2 text-lg font-extrabold leading-snug text-navy">{j.title}</h3>
                <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">{j.description}</p>
                <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-navy">
                  <Icon name="pin" className="h-4 w-4 text-gold" />
                  {j.locations.join(' · ')}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-all group-hover:gap-3 group-hover:text-gold">
                  View / Apply <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CallbackBand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-20">
      <img src="/images/site/team-global.webp" alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/60" aria-hidden="true" />
      <div className="container flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal aos="fade-up" className="max-w-2xl">
          <span className="mb-5 block h-[3px] w-10 rounded-full bg-gold" aria-hidden="true" />
          <h2 className="mb-3 text-[30px] font-extrabold leading-tight text-white sm:text-[40px]">{CALLBACK_BAND.title}</h2>
          <p className="mb-0 text-lg text-white/75">{CALLBACK_BAND.text}</p>
        </Reveal>
        <Reveal aos="fade-up" delay={200}>
          <Link
            to={CALLBACK_BAND.cta.to}
            className="group inline-flex items-center gap-3 rounded-md bg-gold px-7 py-4 font-bold text-navy shadow-[0_14px_30px_-12px_rgba(242,194,48,0.7)] transition hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {CALLBACK_BAND.cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <RegionsStrip />
      <HomeAbout />
      <ServicesGrid />
      <WhySmartank />
      <Impact />
      <FeaturedOpenings />
      <CallbackBand />
    </>
  );
}
