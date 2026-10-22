import Reveal from './Reveal.jsx';

export function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </svg>
  );
}

/**
 * Navy "Current Openings" band with glassy job tiles that turn white on hover.
 * Pass `onApply` to add an "Apply Now" link to each tile.
 */
export default function JobsPanel({ jobs, onApply, footer, className = '' }) {
  return (
    <div className={`border-b border-white bg-navy py-12 ${className}`}>
      <div className="container">
        <h2 className="mb-[30px] text-[30px] font-extrabold text-white sm:text-[44px]">Current Openings</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j, i) => (
            <Reveal as="li" aos="flip-left" key={`${j.title}-${i}`}>
              <div className="group flex h-full items-baseline rounded-[20px] bg-[linear-gradient(107.98deg,rgba(255,255,255,0.1)_37.75%,rgba(255,255,255,0)_190.53%)] p-5 transition-all duration-200 hover:bg-white max-sm:justify-center">
                <ArrowRight className="mr-[15px] h-4 w-4 shrink-0 text-white group-hover:text-[#171717]" />
                <div className="font-extrabold text-white group-hover:text-[#171717] max-sm:block">
                  <p className="mb-0">
                    {j.title}
                    {j.description && (
                      <>
                        <br />
                        <span className="font-thin">{j.description}</span>
                      </>
                    )}
                    <br />
                    <span className="text-amber group-hover:text-black">Positions open for : {j.locations.join(' | ')}</span>
                  </p>
                  {onApply && (
                    <button
                      type="button"
                      onClick={() => onApply(j)}
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-navy"
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </div>
  );
}
