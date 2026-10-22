import { CONTACT } from '../data/content.js';
import ContactForm from './ContactForm.jsx';
import { LinkedInIcon, WhatsAppIcon } from './Icons.jsx';

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M497.4 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6.6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0-14-27.6z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

/** Navy contact panel (photo, phone, emails, socials) beside the "Get In Touch" form card. */
export default function ContactSection({ formName = 'home-callback', className = 'py-16 sm:py-24' }) {
  const rows = [
    { icon: <PhoneIcon className="h-4 w-4" />, label: 'Call us anytime', value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: <MailIcon className="h-4 w-4" />, label: 'General enquiries', value: CONTACT.infoEmail, href: `mailto:${CONTACT.infoEmail}` },
    { icon: <MailIcon className="h-4 w-4" />, label: 'Careers', value: CONTACT.jobsEmail, href: `mailto:${CONTACT.jobsEmail}` },
  ];

  return (
    <section className={`relative ${className}`}>
      <div className="container">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-40px_rgba(11,31,58,0.55)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* info panel */}
          <div className="relative overflow-hidden bg-navy p-7 text-white sm:p-10">
            <img
              src="/images/contact.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/70 to-navy" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />

            <div className="relative">
              <span className="head-tag !border-gold/40 !bg-white/5 !text-gold-light">Contact Us</span>
              <h2 className="mb-4 text-[30px] leading-tight text-white sm:text-[38px]">
                Let’s talk about your <em className="italic text-gold">talent needs</em>
              </h2>
              <p className="mb-8 max-w-sm text-white/70">Request a call back and our team will reach out to discuss your requirement.</p>

              <ul className="space-y-3">
                {rows.map((r) => (
                  <li key={r.value}>
                    <a
                      href={r.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-gold hover:bg-white/10"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-navy">{r.icon}</span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.15em] text-white/60">{r.label}</span>
                        <span className="block break-all text-base font-bold text-white transition group-hover:text-gold sm:text-lg">{r.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <span className="text-sm font-semibold text-white/70">Connect with us on</span>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp (opens in new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#25D366]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (opens in new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#0A66C2]"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="p-7 sm:p-10 lg:p-12">
            <span className="head-tag">Request a Call Back</span>
            <h3 className="head mb-6 !text-[28px] !leading-[36px] sm:!text-[34px] sm:!leading-[42px]">Get In Touch with SMARTANK</h3>
            <ContactForm formName={formName} />
          </div>
        </div>
      </div>
    </section>
  );
}
