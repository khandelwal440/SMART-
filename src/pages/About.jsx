import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { Icon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { ABOUT_INTRO, ABOUT_PAGE, MISSION, REGIONS_SERVED, VISION, WHY_SMARTANK } from '../data/content.js';

/*
 * About SMARTANK – who we are, what we help businesses achieve and how we work
 * (suggestions doc, section 2). "Why SMARTANK" lives here as a section, so the
 * same content isn't repeated on a separate page (section 4).
 */
export default function About() {
  return (
    <>
      <PageBanner title="About SMARTANK" crumbs={[{ label: 'About' }]} />

      {/* who we are */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro eyebrow="Who We Are" title="People, leadership and business performance — together." />
            <Reveal aos="fade-up" as="p" className="mb-0 text-lg leading-relaxed text-navy">
              {ABOUT_PAGE.intro}
            </Reveal>
          </div>
          <Reveal aos="fade-left" className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-lg border-2 border-gold/60" aria-hidden="true" />
            <img src="/images/site/team-smartank.webp" alt="The SMARTANK team in the office" className="relative aspect-[4/3] w-full rounded-lg object-cover" />
          </Reveal>
        </div>
      </section>

      {/* our story */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal aos="fade-right" className="order-2 lg:order-1">
            <img src={ABOUT_PAGE.storyImage} alt={ABOUT_PAGE.storyImageAlt} className="aspect-[4/3] w-full rounded-lg object-cover" loading="lazy" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionIntro eyebrow="Our Story" title="Built on two decades of practical experience." />
            <div className="space-y-4 text-[15px] leading-relaxed">
              {ABOUT_INTRO.slice(0, 3).map((p) => (
                <p key={p.slice(0, 20)} className="mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* mission & vision */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            { label: 'Our Mission', text: MISSION, icon: 'mission' },
            { label: 'Our Vision', text: VISION, icon: 'vision' },
          ].map((b, i) => (
            <Reveal aos="fade-up" delay={i * 150} key={b.label} className="rounded-lg border border-white/10 bg-white/5 p-8">
              <Icon name={b.icon} className="mb-5 h-9 w-9 text-gold" />
              <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/70">{b.label}</h2>
              <p className="mb-0 text-xl font-bold leading-snug text-white">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container">
          <SectionIntro eyebrow="Our Values" title="What guides every engagement." className="mb-10 max-w-2xl" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ABOUT_PAGE.values.map((v, i) => (
              <Reveal as="li" aos="fade-up" delay={i * 100} key={v.title} className="rounded-lg bg-white p-6 shadow-[0_10px_30px_-22px_rgba(11,31,58,0.4)]">
                <Icon name={v.icon} className="mb-4 h-8 w-8 text-gold" />
                <h3 className="mb-2 text-base font-extrabold text-navy">{v.title}</h3>
                <p className="mb-0 text-sm leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* how we work + why SMARTANK */}
      <section id="why-smartank" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro eyebrow="How We Work" title="From business context to clear action." className="mb-8" />
            <ol className="space-y-4">
              {ABOUT_PAGE.method.map((m, i) => (
                <Reveal as="li" aos="fade-up" delay={i * 110} key={m.title} className="flex gap-5 rounded-lg bg-cream p-5">
                  <span className="text-3xl font-extrabold leading-none text-gold">0{i + 1}</span>
                  <span>
                    <span className="mb-1 block font-extrabold text-navy">{m.title}</span>
                    <span className="block text-sm leading-relaxed">{m.text}</span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <SectionIntro eyebrow="Why SMARTANK" title="Business-aligned, structured and discreet." text={ABOUT_PAGE.why} className="mb-8" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {WHY_SMARTANK.map((w, i) => (
                <Reveal as="li" aos="fade-up" delay={i * 110} key={w.title} className="rounded-lg border border-tag p-5">
                  <Icon name={w.icon} className="mb-3 h-7 w-7 text-gold" />
                  <h3 className="mb-1.5 text-base font-extrabold text-navy">{w.title}</h3>
                  <p className="mb-0 text-sm leading-relaxed">{w.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* regions + next step */}
      <section className="bg-navy py-14 text-white">
        <div className="container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/70">Regions we serve</p>
            <ul className="flex flex-wrap gap-2">
              {REGIONS_SERVED.map((r) => (
                <li key={r} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold">
                  <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/leadership-team" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 font-bold transition hover:border-gold hover:text-gold">
              Meet our leadership
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-bold text-navy transition hover:bg-gold-light">
              Request a Callback <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
