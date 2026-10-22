import { useCallback, useMemo, useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import JobsPanel from '../components/JobsPanel.jsx';
import Modal from '../components/Modal.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import { JOBS, JOBS_INTRO } from '../data/content.js';

const ALL = 'All locations';

export default function JobsOpen() {
  const [job, setJob] = useState(null);
  const [place, setPlace] = useState(ALL);
  const close = useCallback(() => setJob(null), []);

  // Location chips with counts, most common first
  const places = useMemo(() => {
    const counts = new Map();
    JOBS.forEach((j) => j.locations.forEach((l) => counts.set(l, (counts.get(l) || 0) + 1)));
    return [[ALL, JOBS.length], ...[...counts].sort((a, b) => b[1] - a[1])];
  }, []);
  const shown = place === ALL ? JOBS : JOBS.filter((j) => j.locations.includes(place));

  return (
    <>
      <PageBanner title="Jobs Open" />
      <section>
        <div className="container py-6 text-center">
          <p className="mx-auto max-w-3xl">{JOBS_INTRO}</p>
        </div>

        <div className="bg-navy pt-10">
          <div className="container">
            <p id="loc-label" className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-white/70">
              Filter by location
            </p>
            {/* scrolls sideways on phones instead of wrapping into a tall block */}
            <div
              role="group"
              aria-labelledby="loc-label"
              className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-2 [scrollbar-width:none] sm:flex-wrap [&::-webkit-scrollbar]:hidden"
            >
              {places.map(([name, count]) => {
                const on = name === place;
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPlace(name)}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                      on ? 'border-amber bg-amber text-white shadow-[0_10px_24px_-10px_rgba(247,164,0,0.9)]' : 'border-white/25 text-white hover:border-amber hover:text-amber'
                    }`}
                  >
                    {name}
                    <span className={`rounded-full px-2 py-0.5 text-xs ${on ? 'bg-white/25' : 'bg-white/10'}`}>{count}</span>
                  </button>
                );
              })}
            </div>
            <p className="mb-0 mt-3 text-sm font-medium text-white/70" aria-live="polite">
              Showing {shown.length} {shown.length === 1 ? 'role' : 'roles'}
              {place !== ALL ? ` in ${place}` : ''}
            </p>
          </div>
        </div>

        <JobsPanel key={place} jobs={shown} onApply={setJob} className="mb-12 !pt-6" />
      </section>

      <Modal open={!!job} onClose={close} title={job ? `Apply for ${job.title}` : ''}>
        {job && <ApplicationForm key={job.title} position={job.title} formName="job-application" />}
      </Modal>
    </>
  );
}
