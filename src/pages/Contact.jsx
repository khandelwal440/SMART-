import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { Icon, LinkedInIcon, WhatsAppIcon } from '../components/Icons.jsx';
import { CONTACT, CONTACT_PAGE, REGIONS_SERVED } from '../data/content.js';

/*
 * Contact (suggestions doc, section 11).
 * TO CONFIRM: the phone, emails, WhatsApp and LinkedIn below are the ones from
 * the current smartankbiz.com site – confirm they are the correct public details.
 * Regions are regions served, not physical offices (none are listed).
 */
export default function Contact() {
  const channels = [
    { icon: <Icon name="phone" className="h-5 w-5" />, label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: <Icon name="mail" className="h-5 w-5" />, label: 'Business enquiries', value: CONTACT.infoEmail, href: `mailto:${CONTACT.infoEmail}` },
    { icon: <Icon name="mail" className="h-5 w-5" />, label: 'Job applications', value: CONTACT.jobsEmail, href: `mailto:${CONTACT.jobsEmail}` },
  ];

  return (
    <>
      <PageBanner title="Contact" />
      <section className="bg-cream py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionIntro eyebrow="Contact SMARTANK" title={CONTACT_PAGE.title} text={CONTACT_PAGE.text} className="mb-8" />

            <ul className="mb-8 space-y-3">
              {channels.map((c) => (
                <li key={c.value}>
                  <a href={c.href} className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-[0_10px_30px_-24px_rgba(11,31,58,0.45)] transition hover:-translate-y-0.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-gold">{c.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.15em] text-ink">{c.label}</span>
                      <span className="block break-all font-bold text-navy transition group-hover:text-gold">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mb-8 flex items-center gap-3">
              <span className="text-sm font-semibold text-navy">Connect with us</span>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (opens in new tab)" className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-navy shadow-sm transition hover:bg-[#25D366] hover:text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-navy shadow-sm transition hover:bg-[#0A66C2] hover:text-white">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="rounded-lg bg-navy p-6 text-white">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-white/70">Regions we serve</p>
              <p className="mb-4 text-xs text-white/50">We work with clients across these regions.</p>
              <ul className="flex flex-wrap gap-2">
                {REGIONS_SERVED.map((r) => (
                  <li key={r} className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal aos="fade-up" className="self-start rounded-lg bg-white p-6 shadow-[0_30px_60px_-34px_rgba(11,31,58,0.55)] sm:p-9">
            <h2 className="mb-1 text-2xl font-extrabold text-navy">Request a Callback</h2>
            <p className="mb-6 text-sm text-ink">All fields marked * are required.</p>
            <EnquiryForm formName="contact-page" submitLabel="Discuss Your Requirements" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
