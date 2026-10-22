import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { PlainField } from '../components/ContactForm.jsx';
import { FormStatus, useForm } from '../components/forms.jsx';
import { SERVICES, SERVICE_OPTIONS } from '../data/content.js';
import { rules } from '../lib/validation.js';
import { scrollToId } from '../lib/scrollToId.js';

const schema = {
  name: rules.name,
  phone: rules.phone,
  email: rules.email,
  service: (v) => (!v ? 'Please select a service.' : null),
};

/** Amber enquiry strip that sticks to the bottom of the screen while you read. */
function EnquiryStrip() {
  const form = useForm({
    initial: { name: '', phone: '', email: '', service: SERVICE_OPTIONS[0] },
    schema,
    formName: 'services-enquiry',
  });
  const field = 'ghost-input';
  return (
    <section aria-label="Service enquiry" className="border-t-2 border-gold bg-navy py-10">
      <div className="container">
        <form onSubmit={form.onSubmit} noValidate>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-4">
            <PlainField form={form} name="name" label="Your Name" placeholder="Your Name" autoComplete="name" inputClass={field} />
            <PlainField form={form} name="phone" label="Phone No" placeholder="Phone No" type="tel" autoComplete="tel" inputClass={field} />
            <PlainField form={form} name="email" label="E-Mail Address" placeholder="E-Mail Address" type="email" autoComplete="email" inputClass={field} />
            <PlainField form={form} name="service" label="Service Type" as="select" inputClass={field}>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </PlainField>
          </div>
          {form.status !== 'idle' && form.status !== 'submitting' && (
            <div className="mt-3">
              <FormStatus status={form.status} />
            </div>
          )}
          <div className="text-center">
            <button
              type="submit"
              disabled={form.status === 'submitting'}
              className="mt-[23px] rounded-full bg-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.02em] text-navy transition hover:bg-white"
            >
              {form.status === 'submitting' ? 'Sending…' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageBanner title="Services" />

      {/* quick jump to each service; scrolls sideways on phones */}
      <nav aria-label="Jump to a service" className="border-b border-tag bg-white">
        <ul className="container flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s, i) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.replaceState(null, '', `#${s.id}`);
                  scrollToId(s.id);
                }}
                className="flex items-center gap-2 rounded-full border border-tag bg-tag/50 px-4 py-2 text-sm font-bold text-navy transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] text-white">0{i + 1}</span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section>
        <div className="container">
          {SERVICES.map((s, i) => {
            const left = i % 2 === 1;
            return (
              <Reveal
                key={s.id}
                id={s.id}
                aos={left ? 'slide-right' : 'slide-left'}
                className="justify-text block scroll-mt-28 border-b border-dashed border-[#686868] py-[30px] after:block after:clear-both after:content-[''] last:border-b-0 last:pb-[30px] md:py-[60px]"
              >
                <h2 className="head mb-5">{s.title}</h2>
                {/* float beside the text from desktop up; full width above it on phones/tablets */}
                <figure className={`mb-6 w-full lg:mb-2.5 lg:w-[400px] ${left ? 'lg:float-left lg:mr-[30px]' : 'lg:float-right lg:ml-[30px]'}`}>
                  <img src={s.image} alt={s.title} className="max-h-[420px] w-full rounded-2xl object-cover lg:max-h-none lg:rounded-[5px]" loading="lazy" />
                </figure>
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Reveal>
            );
          })}
        </div>
      </section>
      <EnquiryStrip />
    </>
  );
}
