import { Link } from 'react-router-dom';
import { CONTACT, FOOTER_NAV, REGIONS, SERVICES } from '../data/content.js';
import { LinkedInIcon, WhatsAppIcon } from './Icons.jsx';

const heading = 'mb-5 text-lg font-extrabold text-white after:mt-2 after:block after:h-[3px] after:w-10 after:rounded after:bg-amber after:content-[""]';
const link = 'group inline-flex items-center gap-2 py-1 font-medium text-white/75 transition-colors hover:text-amber';

function Dot() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber/70 transition-transform group-hover:scale-150" aria-hidden="true" />;
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/5" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-amber/10 blur-2xl" aria-hidden="true" />

      <div className="container relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.2fr] lg:gap-8">
        <div>
          <Link to="/" aria-label="SmarTank home" className="inline-block">
            <img src="/images/logo.jpg" alt="SmarTank Strategic Consultants" className="h-[96px] w-[150px] rounded-lg" loading="lazy" />
          </Link>
          <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed text-white/70">
            India’s leading Executive Search and HR Consultancy Firm, Offering Unmatched Skill Mapping Services.
          </p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-amber">{REGIONS.join(' · ')}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className={heading}>Quick Links</h2>
          <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-1">
            {FOOTER_NAV.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={link}>
                  <Dot />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Our Services</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className={`${link} items-start`}>
                  <span className="mt-2">
                    <Dot />
                  </span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Get In Touch</h2>
          <ul className="space-y-2 text-white/75">
            <li>
              <a href={CONTACT.phoneHref} className="inline-block py-1.5 font-bold text-white transition hover:text-amber">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.infoEmail}`} className="inline-block break-all py-1.5 font-medium transition hover:text-amber">
                {CONTACT.infoEmail}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.jobsEmail}`} className="inline-block break-all py-1.5 font-medium transition hover:text-amber">
                {CONTACT.jobsEmail}
              </a>
            </li>
          </ul>
          <p className="mb-3 mt-6 text-sm font-bold">Connect with us on</p>
          <div className="flex gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp (opens in new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-[#25D366]"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-[#0A66C2]"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-amber text-sm sm:text-base">
        <div className="container flex flex-col items-center gap-1 py-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <span className="order-2 font-bold text-white lg:order-1">© SMARTANK. ALL RIGHTS RESERVED.</span>
          <a href={CONTACT.credit} target="_blank" rel="noopener noreferrer" className="order-1 py-1 font-bold text-white hover:underline lg:order-2">
            Designed &amp; Developed by Web Creative Dreams
          </a>
        </div>
      </div>
    </footer>
  );
}
