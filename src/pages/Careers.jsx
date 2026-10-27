import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import { Icon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { ABOUT_PAGE, CANDIDATE_PRIVACY_NOTE, CAREER_INTRO, CAREER_JOBS, CAREER_WHY } from '../data/content.js';

const WHY_ICONS = ['bulb', 'growth', 'target', 'team'];

/*
 * Careers AT SMARTANK – culture, values and internal opportunities, kept separate
 * from client job openings (suggestions doc, section 9). Copy is a DRAFT for approval.
 */
export default function Careers() {
  return (
    <>
      <PageBanner title="Careers at SMARTANK" crumbs={[{ label: 'Careers' }]} />

      {/* intro with team photo */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro eyebrow="Work With Us" title="Help organisations build better teams." />
            <div className="space-y-4 text-[15px] leading-relaxed">
              {CAREER_INTRO.map((p) => (
                <p key={p.slice(0, 20)} className="mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <Reveal aos="fade-left" className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border-2 border-gold/60" aria-hidden="true" />
            <img src="/images/site/team-at-work.webp" alt="SMARTANK team members working together" className="relative aspect-[4/3] w-full rounded-lg object-cover" />
          </Reveal>
        </div>
      </section>

      {/* culture */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container">
          <SectionIntro eyebrow="Our Culture" title="What working at SMARTANK is like." className="mb-10 max-w-2xl" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_WHY.map((w, i) => (
              <Reveal as="li" aos="fade-up" delay={i * 110} key={w.title} className="rounded-lg border border-tag bg-cream p-6">
                <Icon name={WHY_ICONS[i]} className="mb-4 h-8 w-8 text-gold" />
                <h3 className="mb-2 text-lg font-extrabold text-navy">{w.title.replace(/:$/, '')}</h3>
                <p className="mb-0 text-sm leading-relaxed">{w.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* values + photo */}
      <section className="bg-navy py-16 text-white sm:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal aos="fade-right">
            <img src="/images/site/team-global.webp" alt="SMARTANK colleagues in conversation" className="aspect-square w-full rounded-lg object-cover" loading="lazy" />
          </Reveal>
          <div>
            <SectionIntro eyebrow="Our Values" title="The way we work with each other and with clients." light className="mb-8" />
            <ul className="space-y-3">
              {ABOUT_PAGE.values.map((v, i) => (
                <Reveal as="li" aos="fade-up" delay={i * 90} key={v.title} className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                  <Icon name={v.icon} className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                  <span>
                    <span className="block font-extrabold text-white">{v.title}</span>
                    <span className="block text-sm text-white/70">{v.text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* internal opportunities */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionIntro eyebrow="Internal Opportunities" title="Open roles at SMARTANK." className="max-w-2xl" />
            <Link to="/jobs-open" className="inline-flex items-center gap-2 self-start py-1 font-bold text-navy transition hover:gap-3 hover:text-gold">
              Looking for client roles? See current openings <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAREER_JOBS.map((j, i) => (
              <Reveal as="li" aos="fade-up" delay={(i % 3) * 100} key={j.title} className="flex flex-col rounded-lg bg-white p-6 shadow-[0_10px_30px_-22px_rgba(11,31,58,0.4)]">
                <h3 className="mb-2 text-lg font-extrabold text-navy">{j.title}</h3>
                <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-navy">
                  <Icon name="pin" className="h-4 w-4 text-gold" /> {j.locations.join(' · ')}
                </p>
                <a href="#apply" className="mt-auto inline-flex items-center gap-2 self-start py-1 text-sm font-bold text-navy transition hover:gap-3 hover:text-gold">
                  Apply below <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* application */}
      <section id="apply" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionIntro eyebrow="Join SMARTANK" title="Send us your CV." text="Tell us which role interests you, or apply generally and we will be in touch when a suitable position opens." />
            <img src="/images/site/consultants-laptop.webp" alt="SMARTANK consultants at work" className="mt-4 hidden aspect-[4/5] w-full rounded-lg object-cover lg:block" loading="lazy" />
          </div>
          <div className="self-start rounded-lg border border-tag bg-cream p-6 sm:p-9">
            <ApplicationForm formName="careers-at-smartank" submitLabel="Send CV" />
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink">
              <Icon name="lock" className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
              <span>
                {CANDIDATE_PRIVACY_NOTE.replace(' See our Privacy Policy.', ' ')}
                <Link to="/privacy-policy" className="inline-block py-1 font-bold text-navy underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
