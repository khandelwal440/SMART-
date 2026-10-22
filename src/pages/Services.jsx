import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { PlainField } from '../components/ContactForm.jsx';
import { FormStatus, useForm } from '../components/forms.jsx';
import { SERVICES, SERVICE_OPTIONS } from '../data/content.js';
import { rules } from '../lib/validation.js';

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
    <section aria-label="Service enquiry" className="z-[1029] bg-amber py-[30px] sm:sticky sm:bottom-0">
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
              className="mt-[23px] bg-white p-2 px-4 text-sm font-bold uppercase tracking-[0.02em] text-navy transition hover:bg-navy hover:text-white"
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
                <figure className={`mb-2.5 w-full md:w-[400px] ${left ? 'md:float-left md:mr-[30px]' : 'md:float-right md:ml-[30px]'}`}>
                  <img src={s.image} alt={s.title} className="w-full rounded-[5px]" loading="lazy" />
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
