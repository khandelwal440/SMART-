import { useCallback, useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import Modal from '../components/Modal.jsx';
import { Icon } from '../components/Icons.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { PlainField } from '../components/ContactForm.jsx';
import { FormStatus, useForm } from '../components/forms.jsx';
import { rules } from '../lib/validation.js';
import { ONLINE_SERVICES } from '../data/content.js';

const field =
  'block w-full rounded-md border border-[#E4DCC8] bg-white px-4 py-3 text-[15px] font-normal text-navy placeholder:text-[#7A8494] transition focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/25';

const schema = {
  name: rules.name,
  email: rules.email,
  phone: rules.phone,
  message: (v) => (v && v.length > 1500 ? 'Message must be under 1500 characters.' : null),
};

/**
 * Booking request for a paid online service.
 * NOTE: no payment gateway is connected – this sends a request (see lib/submitForm.js)
 * and the team follows up with payment details.
 */
function BookingForm({ service }) {
  const form = useForm({ initial: { name: '', email: '', phone: '', message: '' }, schema, formName: `online-service:${service.id}` });
  if (form.status === 'success') {
    return (
      <FormStatus
        status="success"
        successText={`Thank you – your request for ${service.title} has been received. The SMARTANK team will contact you to confirm the booking and payment.`}
      />
    );
  }
  return (
    <form onSubmit={form.onSubmit} noValidate className="space-y-4">
      <div className="flex items-baseline justify-between rounded-md bg-cream p-4">
        <span className="font-bold text-navy">{service.title}</span>
        <span className="text-lg font-extrabold text-navy">
          {service.price}
          {service.priceNote && <span className="ml-1 text-xs font-semibold text-ink">{service.priceNote}</span>}
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <PlainField form={form} name="name" label="Name" placeholder="Your name*" autoComplete="name" inputClass={field} />
        <PlainField form={form} name="phone" label="Phone" placeholder="Phone*" type="tel" autoComplete="tel" inputClass={field} />
        <PlainField form={form} name="email" label="Email" placeholder="Email*" type="email" autoComplete="email" inputClass={field} className="sm:col-span-2" />
        <PlainField form={form} name="message" label="Anything we should know?" placeholder="Anything we should know? (optional)" as="textarea" rows={3} inputClass={`${field} resize-y`} className="sm:col-span-2" />
      </div>
      {form.status !== 'idle' && form.status !== 'submitting' && <FormStatus status={form.status} />}
      <p className="text-xs text-ink">Payment details are shared after we confirm your booking.</p>
      <button
        type="submit"
        disabled={form.status === 'submitting'}
        className="inline-flex items-center gap-3 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-navy transition hover:bg-gold-light disabled:opacity-70"
      >
        {form.status === 'submitting' ? 'Sending…' : 'Request Booking'}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}

/** Online Services – six paid services from "Online Services - Website - Smartank". */
export default function OnlineServices() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <PageBanner title="Online Services" />
      <section className="bg-cream py-16 sm:py-24">
        <div className="container">
          <SectionIntro
            eyebrow="Career Services"
            title="Personal career support from senior talent professionals."
            text="Practical, personalised services for job seekers, students and executives — from your resume to leadership coaching."
            className="mb-12 max-w-2xl"
          />
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ONLINE_SERVICES.map((s, i) => (
              <Reveal as="li" aos="fade-up" delay={(i % 3) * 120} key={s.id} className="h-full">
                <article
                  className={`group relative flex h-full flex-col rounded-lg p-7 shadow-[0_10px_30px_-20px_rgba(11,31,58,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_45px_-26px_rgba(11,31,58,0.6)] ${
                    s.featured ? 'bg-navy text-white' : 'border border-black/5 bg-white'
                  }`}
                >
                  {s.featured && (
                    <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">Premium</span>
                  )}
                  <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-md ${s.featured ? 'bg-gold text-navy' : 'bg-navy text-gold'}`}>
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h2 className={`mb-2 text-xl font-extrabold leading-snug ${s.featured ? 'text-white' : 'text-navy'}`}>{s.title}</h2>
                  <p className="mb-4">
                    <span className={`text-[32px] font-extrabold ${s.featured ? 'text-gold' : 'text-navy'}`}>{s.price}</span>
                    {s.priceNote && <span className={`ml-2 text-sm font-semibold ${s.featured ? 'text-white/70' : 'text-ink'}`}>{s.priceNote}</span>}
                  </p>
                  <span className="mb-5 block h-[3px] w-10 rounded-full bg-gold" aria-hidden="true" />
                  <p className={`mb-7 flex-1 text-[15px] leading-relaxed ${s.featured ? 'text-white/80' : ''}`}>{s.text}</p>
                  <button
                    type="button"
                    onClick={() => setActive(s)}
                    className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-bold transition ${
                      s.featured ? 'bg-gold text-navy hover:bg-gold-light' : 'bg-navy text-white hover:bg-gold hover:text-navy'
                    }`}
                  >
                    {s.button}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-center text-sm text-ink">All prices are in Indian Rupees (₹).</p>
        </div>
      </section>

      <Modal open={!!active} onClose={close} title={active ? active.button : ''}>
        {active && <BookingForm key={active.id} service={active} />}
      </Modal>
    </>
  );
}
