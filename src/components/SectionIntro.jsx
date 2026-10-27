import { Link } from 'react-router-dom';
import { ArrowRight } from './JobsPanel.jsx';

/**
 * Section opener used across the home page: letter-spaced label with a short
 * gold rule, bold heading, optional text and an outlined link button.
 */
export default function SectionIntro({ eyebrow, title, text, cta, light = false, className = '' }) {
  return (
    <div className={className}>
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.35em] ${light ? 'text-white/80' : 'text-navy'}`}>{eyebrow}</p>
      <span className="mb-6 block h-[3px] w-10 rounded-full bg-gold" aria-hidden="true" />
      <h2 className={`mb-4 text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-[34px] ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mb-6 max-w-md text-[15px] leading-relaxed ${light ? 'text-white/70' : 'text-ink'}`}>{text}</p>}
      {cta && (
        <Link
          to={cta.to}
          className={`inline-flex items-center gap-3 rounded-md border px-5 py-2.5 text-sm font-bold transition ${
            light ? 'border-white/40 text-white hover:border-gold hover:text-gold' : 'border-navy text-navy hover:bg-navy hover:text-white'
          }`}
        >
          {cta.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
