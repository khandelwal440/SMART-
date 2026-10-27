import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import WorldMap from '../components/WorldMap.jsx';
import ConnectForm from '../components/ConnectForm.jsx';
import { CountUp } from '../components/StatsBand.jsx';
import { Icon, LinkedInIcon, WhatsAppIcon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { CLIENTS, CONNECT, CONTACT, GLOBAL_PRESENCE, INDUSTRIES, REGIONS, TESTIMONIALS, WHAT_WE_DO } from '../data/content.js';

function WhatWeDo() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-12">
        <SectionIntro eyebrow="What We Do" title={WHAT_WE_DO.title} text={WHAT_WE_DO.text} cta={{ label: 'Explore Our Services', to: '/services' }} />
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {WHAT_WE_DO.cards.map((c, i) => (
            <Reveal as="li" aos="fade-up" delay={i * 120} key={c.title} className="h-full">
              <Link
                to={c.to}
                className="group flex h-full flex-col rounded-lg border border-black/5 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(11,31,58,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_24px_40px_-24px_rgba(11,31,58,0.55)]"
              >
                <Icon name={c.icon} className="mb-6 h-10 w-10 text-navy transition-colors group-hover:text-gold" />
                <h3 className="mb-3 text-lg font-extrabold leading-snug text-navy">{c.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed">{c.text}</p>
                <ArrowRight className="h-4 w-4 text-navy transition-transform group-hover:translate-x-1.5 group-hover:text-gold" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-12">
        <SectionIntro eyebrow="Industries We Cater" title={INDUSTRIES.title} text={INDUSTRIES.text} cta={{ label: 'Explore Industries', to: '/industries' }} />
        {/* sideways scroll with snapping on phones; 5 columns on wide screens */}
        <ul className="-mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-2 [scrollbar-width:thin] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 xl:grid-cols-5">
          {INDUSTRIES.list.map((ind, i) => (
            <Reveal as="li" aos="fade-up" delay={i * 110} key={ind.id} className="w-[70%] shrink-0 snap-start sm:w-[45%] md:w-auto">
              <Link to={`/industries#${ind.id}`} className="group relative block aspect-[3/4] overflow-hidden rounded-lg bg-navy">
                <img src={ind.image} alt={ind.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-2 block h-[3px] w-8 origin-left rounded-full bg-gold transition-transform duration-300 group-hover:scale-x-150" aria-hidden="true" />
                  <span className="block text-base font-extrabold leading-snug text-white">{ind.name}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section id="global-presence" className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-navy-2 blur-3xl" aria-hidden="true" />
      <div className="container relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.5fr_0.7fr]">
        <SectionIntro eyebrow="Our Global Presence" title={GLOBAL_PRESENCE.title} text={GLOBAL_PRESENCE.text} light />
        <WorldMap markers={GLOBAL_PRESENCE.markers} className="w-full" />
        <ul className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-white/10">
          {GLOBAL_PRESENCE.stats.map((s, i) => (
            <Reveal as="li" aos="fade-left" delay={300 + i * 150} key={s.label} className="flex flex-col items-start gap-1 lg:flex-row lg:items-center lg:gap-5 lg:py-5">
              <span className="text-[38px] font-extrabold leading-none text-gold sm:text-[46px]">
                <CountUp to={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/85">{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="bg-white py-14">
      <div className="container grid items-center gap-8 lg:grid-cols-[0.8fr_2fr]">
        <SectionIntro eyebrow="Our Clients" title="Trusted by Leading Organizations." text="We are proud to partner with forward-thinking organisations across industries." className="lg:border-r lg:border-black/10 lg:pr-8" />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {CLIENTS.map((c, i) => (
            <Reveal
              as="li"
              aos="zoom-in"
              delay={i * 80}
              key={c.name}
              className="flex h-20 items-center justify-center rounded-lg border border-dashed border-black/15 bg-cream px-4"
            >
              {c.logo ? (
                <img src={c.logo} alt={c.name} className="max-h-12 w-auto object-contain grayscale transition hover:grayscale-0" loading="lazy" />
              ) : (
                // placeholder until real, approved client logos are added in content.js
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-ink/70">{c.name} logo</span>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-12">
        <SectionIntro eyebrow="What Our Clients Say" title="Real Partnerships. Real Results." text="Hear from leaders who have experienced our impact." />
        <ul className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" aos="fade-up" delay={i * 150} key={t.role + t.company} className="h-full">
              <figure className="flex h-full flex-col rounded-lg bg-white p-6 shadow-[0_10px_30px_-20px_rgba(11,31,58,0.35)]">
                <span className="mb-2 font-display text-5xl leading-none text-gold" aria-hidden="true">
                  “
                </span>
                <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-navy">{t.quote}</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold" aria-hidden="true">
                    {t.role
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-navy">— {t.role}</span>
                    <span className="block text-xs text-ink">{t.company}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Connect() {
  const rows = [
    { icon: 'mail', text: CONTACT.infoEmail, href: `mailto:${CONTACT.infoEmail}` },
    { icon: 'phone', text: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: 'globe', text: REGIONS.join(' | ') },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-20">
      <img src={CONNECT.image} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-navy/85" aria-hidden="true" />

      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr_0.8fr] lg:items-start">
        <SectionIntro eyebrow="Let’s Connect" title={CONNECT.title} text={CONNECT.text} light />

        <Reveal aos="fade-up" delay={150} className="rounded-lg border border-white/10 bg-navy/90 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] sm:p-8">
          <h3 className="mb-5 text-xl font-extrabold text-white">Start a Conversation</h3>
          <ConnectForm />
        </Reveal>

        <Reveal aos="fade-left" delay={300}>
          <ul className="space-y-4">
            {rows.map((r) => (
              <li key={r.text} className="flex items-center gap-4">
                <Icon name={r.icon} className="h-5 w-5 shrink-0 text-gold" />
                {r.href ? (
                  <a href={r.href} className="break-all py-1 text-[15px] font-medium text-white transition hover:text-gold">
                    {r.text}
                  </a>
                ) : (
                  <span className="text-[15px] font-medium text-white/90">{r.text}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 transition hover:border-gold hover:text-gold">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (opens in new tab)" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 transition hover:border-gold hover:text-gold">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Industries />
      <GlobalPresence />
      <Clients />
      <Testimonials />
      <Connect />
    </>
  );
}
