import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider.jsx';
import Reveal from '../components/Reveal.jsx';
import ArrowButton from '../components/ArrowButton.jsx';
import ContactSection from '../components/ContactSection.jsx';
import StatsBand from '../components/StatsBand.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { CONTACT, HOME_JOBS, REGIONS, SERVICES } from '../data/content.js';

function SectionTitle({ tag, title, light = false, center = true }) {
  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`head-tag ${light ? '!border-gold/40 !bg-white/5 !text-gold-light' : ''}`}>{tag}</span>
      <h2 className={`head ${light ? '!text-white' : ''}`}>{title}</h2>
    </div>
  );
}

function AboutTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal aos="fade-right">
          <span className="head-tag">About SmarTank</span>
          <h2 className="head">India’s leading Executive Search and HR Consultancy Firm, Offering Unmatched Skill Mapping Services.</h2>
          <p className="mb-8 mt-5 text-lg">Discover how we streamline your talent acquisition today!</p>
          <ArrowButton to="/about">Know More About Us</ArrowButton>
        </Reveal>

        <Reveal aos="fade-left" className="relative">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl border-2 border-gold/50 sm:-right-5 sm:-top-5" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-[0_30px_60px_-30px_rgba(11,31,58,0.8)] sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-2xl" aria-hidden="true" />
            <img src="/images/abt-logo.jpg" alt="SmarTank Strategic Consultants" className="relative mb-8 w-full max-w-[320px] rounded-xl bg-white p-3" loading="lazy" />
            <p className="relative mb-6 font-display text-2xl italic leading-snug text-white sm:text-3xl">
              “Let us streamline your HR and performance needs today!”
            </p>
            <ul className="relative grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.id} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {s.title}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RegionsStrip() {
  return (
    <section aria-labelledby="regions-title" className="border-y border-tag bg-white py-8">
      <div className="container flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
        <h2 id="regions-title" className="mb-0 text-center text-xl text-navy sm:text-2xl lg:text-left">
          Our Services are available in
        </h2>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {REGIONS.map((r) => (
            <li
              key={r}
              className="flex items-center gap-2 rounded-full border border-tag bg-cream px-4 py-2 text-sm font-bold text-navy transition hover:border-gold hover:bg-gold hover:text-navy sm:text-base"
            >
              <img src="/images/star.png" alt="" className="h-4 w-4" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-tag bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_30px_50px_-28px_rgba(11,31,58,0.55)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={s.card} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent" aria-hidden="true" />
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-navy">
          0{i + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl leading-snug text-navy">{s.title}</h3>
        <p className="mb-5 line-clamp-4 flex-1 text-[15px] leading-relaxed">{s.summary}</p>
        <Link
          to={`/services#${s.id}`}
          aria-label={`Know more about ${s.title}`}
          className="inline-flex items-center gap-2 self-start py-1.5 text-sm font-bold uppercase tracking-[0.08em] text-navy transition-all group-hover:gap-3 group-hover:text-gold"
        >
          Know More
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

function WhatWeDo() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container">
        <SectionTitle tag="What We Do For You" title="Empowering your success with innovative business solutions and strategic insights." />
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal as="li" aos="fade-up" key={s.id} className="h-full">
              <ServiceCard s={s} i={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function JobsCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#E8CB6A_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal aos="fade-right">
          <span className="head-tag !border-gold/40 !bg-white/5 !text-gold-light">Careers</span>
          <h2 className="mb-6 text-[34px] leading-[1.15] text-white sm:text-[48px]">
            Looking for a <em className="italic text-gold">New Opportunity?</em>
          </h2>
          <p className="mb-8 max-w-lg text-lg text-white/70">
            Explore leadership roles with our clients across India, Singapore, Europe, Africa and the UAE.
          </p>
          <div className="flex flex-wrap gap-4">
            <ArrowButton href={`mailto:${CONTACT.jobsEmail}`}>Send Resume</ArrowButton>
            <Link
              to="/jobs-open"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-[15px] text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:border-gold hover:text-gold"
            >
              Explore more opportunities
            </Link>
          </div>
        </Reveal>

        <Reveal aos="fade-left">
          <h3 className="mb-5 text-2xl text-white">Current Openings</h3>
          <ul className="space-y-4">
            {HOME_JOBS.map((j) => (
              <li key={j.title}>
                <Link
                  to="/jobs-open"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-gold hover:bg-white/10"
                >
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-lg font-bold text-white">{j.title}</span>
                    <span className="mt-1 block text-sm font-normal text-white/70">{j.description}</span>
                    <span className="mt-2 block text-sm font-semibold text-gold-light">Positions open for: {j.locations.join(' | ')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsBand />
      <AboutTeaser />
      <RegionsStrip />
      <WhatWeDo />
      <JobsCta />
      <ContactSection />
    </>
  );
}
