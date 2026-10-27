import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import Modal from '../components/Modal.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import { Icon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { CANDIDATE_PRIVACY_NOTE, JOBS, JOBS_INTRO } from '../data/content.js';

const ANY = 'All';
const GENERAL = { title: 'General application', description: 'Send us your CV for future roles that match your experience.', locations: [], func: '', level: '' };
const SENIORITY_ORDER = ['C-Suite', 'Vice President', 'Head / Director', 'Manager', 'Specialist / Executive'];

/** Unique values with counts, for a filter dropdown. */
function optionsFor(values, order) {
  const counts = new Map();
  values.forEach((v) => counts.set(v, (counts.get(v) || 0) + 1));
  const keys = [...counts.keys()].sort((a, b) => (order ? order.indexOf(a) - order.indexOf(b) : counts.get(b) - counts.get(a)));
  return keys.map((k) => ({ value: k, count: counts.get(k) }));
}

function FilterSelect({ id, label, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-white/70">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border border-white/20 bg-white px-4 py-3 text-[15px] font-semibold text-navy focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/30"
      >
        <option value={ANY}>All</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.value} ({o.count})
          </option>
        ))}
      </select>
    </div>
  );
}

/** Job board (suggestions doc, section 8): filters, View / Apply, general CV option, privacy wording. */
export default function JobsOpen() {
  const [job, setJob] = useState(null);
  const [place, setPlace] = useState(ANY);
  const [func, setFunc] = useState(ANY);
  const [level, setLevel] = useState(ANY);
  const close = useCallback(() => setJob(null), []);

  const locations = useMemo(() => optionsFor(JOBS.flatMap((j) => j.locations)), []);
  const functions = useMemo(() => optionsFor(JOBS.map((j) => j.func)), []);
  const levels = useMemo(() => optionsFor(JOBS.map((j) => j.level), SENIORITY_ORDER), []);

  const shown = JOBS.filter(
    (j) => (place === ANY || j.locations.includes(place)) && (func === ANY || j.func === func) && (level === ANY || j.level === level),
  );
  const filtered = place !== ANY || func !== ANY || level !== ANY;
  const reset = () => {
    setPlace(ANY);
    setFunc(ANY);
    setLevel(ANY);
  };

  return (
    <>
      <PageBanner title="Current Openings" crumbs={[{ label: 'Jobs' }]} />

      <section className="bg-navy pb-10 pt-12 text-white">
        <div className="container">
          <p className="mb-8 max-w-3xl text-lg text-white/80">{JOBS_INTRO}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <FilterSelect id="f-location" label="Location" value={place} onChange={setPlace} options={locations} />
            <FilterSelect id="f-function" label="Function" value={func} onChange={setFunc} options={functions} />
            <FilterSelect id="f-level" label="Seniority" value={level} onChange={setLevel} options={levels} />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="mb-0 text-sm font-semibold text-white/80" aria-live="polite">
              Showing {shown.length} of {JOBS.length} roles
            </p>
            {filtered && (
              <button type="button" onClick={reset} className="py-1 text-sm font-bold text-gold underline-offset-4 hover:underline">
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="container">
          {shown.length === 0 ? (
            <div className="rounded-lg bg-white p-10 text-center">
              <p className="mb-4 text-lg font-bold text-navy">No roles match these filters right now.</p>
              <button type="button" onClick={reset} className="rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-gold hover:text-navy">
                Clear filters
              </button>
            </div>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" key={`${place}|${func}|${level}`}>
              {shown.map((j, i) => (
                <Reveal as="li" aos="fade-up" delay={(i % 3) * 90} key={`${j.title}-${i}`} className="h-full">
                  <article className="flex h-full flex-col rounded-lg border border-black/5 bg-white p-6 shadow-[0_10px_30px_-22px_rgba(11,31,58,0.4)] transition hover:-translate-y-1 hover:border-gold">
                    <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
                      <span className="rounded-full bg-navy px-3 py-1 text-white">{j.level}</span>
                      <span className="rounded-full bg-tag px-3 py-1 text-navy">{j.func}</span>
                    </div>
                    <h2 className="mb-2 text-lg font-extrabold leading-snug text-navy">{j.title}</h2>
                    <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">{j.description}</p>
                    <p className="mb-5 flex items-start gap-2 text-sm font-semibold text-navy">
                      <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {j.locations.join(' · ')}
                    </p>
                    <button
                      type="button"
                      onClick={() => setJob(j)}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-gold hover:text-navy"
                    >
                      View / Apply <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </article>
                </Reveal>
              ))}
            </ul>
          )}

          {/* general CV submission */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg bg-navy p-8 text-white lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-2xl font-extrabold text-white">Don’t see a matching role?</h2>
              <p className="mb-0 max-w-xl text-white/75">Send us your CV and we will contact you when a suitable opportunity opens up.</p>
            </div>
            <button
              type="button"
              onClick={() => setJob(GENERAL)}
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gold px-6 py-3.5 font-bold text-navy transition hover:bg-gold-light"
            >
              Submit Your CV <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="mt-4 text-center text-xs text-ink">
            Looking to work at SMARTANK itself? See{' '}
            <Link to="/career" className="inline-block py-1 font-bold text-navy underline">
              Careers at SMARTANK
            </Link>
            .
          </p>
        </div>
      </section>

      <Modal open={!!job} onClose={close} title={job ? (job === GENERAL ? 'Submit your CV' : job.title) : ''}>
        {job && (
          <div>
            {job !== GENERAL && (
              <div className="mb-6 rounded-md bg-cream p-4">
                <div className="mb-3 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded-full bg-navy px-3 py-1 text-white">{job.level}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-navy">{job.func}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-navy">{job.locations.join(' · ')}</span>
                </div>
                <p className="mb-0 text-sm leading-relaxed text-navy">{job.description}</p>
              </div>
            )}
            <ApplicationForm key={job.title} position={job === GENERAL ? '' : job.title} formName={job === GENERAL ? 'general-cv' : 'job-application'} />
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink">
              <Icon name="lock" className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
              <span>
                {CANDIDATE_PRIVACY_NOTE.replace(' See our Privacy Policy.', ' ')}
                <Link to="/privacy-policy" className="inline-block py-1 font-bold text-navy underline" onClick={close}>
                  Privacy Policy
                </Link>
                .
              </span>
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
