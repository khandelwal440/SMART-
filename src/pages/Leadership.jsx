import { useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { Icon, LinkedInIcon } from '../components/Icons.jsx';
import { LEADERS, LEADERSHIP_INTRO } from '../data/content.js';

const initials = (name) =>
  name
    .replace(/^Dr\.?\s*/, '')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

/** One leader: portrait, name, title, short bio; full profile, expertise and credentials on demand. */
function LeaderProfile({ leader }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="grid overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_-30px_rgba(11,31,58,0.5)] lg:grid-cols-[0.8fr_1.2fr]">
      <div className="relative min-h-[320px] bg-navy">
        {leader.photo ? (
          <img src={leader.photo} alt={`Portrait of ${leader.name}`} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          // placeholder until a professional portrait is supplied (see LEADERS in content.js)
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,#13305A,#0B1F3A_70%)]">
            <span className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-gold/70 text-5xl font-extrabold text-gold">
              {initials(leader.name)}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Portrait coming soon</span>
          </div>
        )}
      </div>
      <div className="p-7 sm:p-10">
        <h2 className="mb-1 text-[28px] font-extrabold text-navy sm:text-[34px]">{leader.name}</h2>
        <p className="mb-5 font-bold text-ink">{leader.title}</p>
        <span className="mb-6 block h-[3px] w-10 rounded-full bg-gold" aria-hidden="true" />
        <p className="mb-6 leading-relaxed text-navy">{leader.short}</p>

        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy">Areas of expertise</h3>
            <ul className="space-y-2 text-sm">
              {leader.expertise.map((e) => (
                <li key={e} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy">Education & credentials</h3>
            <ul className="space-y-2 text-sm">
              {leader.credentials.map((c) => (
                <li key={c} className="flex gap-2">
                  <Icon name="award" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-2 rounded-md border border-navy px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
          >
            {open ? 'Hide full profile' : 'Read full profile'}
            <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
          {leader.linkedin && (
            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${leader.name} on LinkedIn (opens in new tab)`} className="flex h-11 w-11 items-center justify-center rounded-md border border-tag text-navy transition hover:border-gold hover:text-gold">
              <LinkedInIcon className="h-5 w-5" />
            </a>
          )}
        </div>
        <div className={`grid transition-all duration-500 ${open ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="space-y-4 overflow-hidden text-[15px] leading-relaxed">
            {leader.bio.map((p) => (
              <p key={p.slice(0, 24)} className="mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/** Leadership grid (suggestions doc section 3): only approved people are listed in LEADERS. */
export default function Leadership() {
  return (
    <>
      <PageBanner title="Leadership Team" crumbs={[{ label: 'About', to: '/about' }, { label: 'Leadership Team' }]} />
      <section className="bg-cream py-16 sm:py-24">
        <div className="container">
          <SectionIntro eyebrow="Leadership" title="The people behind SMARTANK." text={LEADERSHIP_INTRO} className="mb-12 max-w-3xl" />
          <ul className="space-y-8">
            {LEADERS.map((l) => (
              <Reveal as="li" aos="fade-up" key={l.name}>
                <LeaderProfile leader={l} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
