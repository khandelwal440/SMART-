import { REGION_OPTIONS, SERVICE_OPTIONS } from '../data/content.js';
import { rules } from '../lib/validation.js';
import { FormStatus, useForm } from './forms.jsx';
import { PlainField } from './ContactForm.jsx';
import { ArrowRight } from './JobsPanel.jsx';

const schema = {
  name: rules.name,
  organisation: (v) => (!v || v.trim().length < 2 ? 'Please enter your organisation.' : null),
  email: rules.email,
  phone: rules.phone,
  service: (v) => (!v ? 'Please choose a service.' : null),
  region: (v) => (!v ? 'Please choose a country or region.' : null),
  message: (v) => (v && v.length > 2000 ? 'Message must be under 2000 characters.' : null),
};

const field =
  'block w-full rounded-md border border-[#E4DCC8] bg-white px-4 py-3 text-[15px] font-normal text-navy placeholder:text-[#7A8494] transition focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/25';

/**
 * Business enquiry form (suggestions doc, section 11): name, organisation, work email,
 * phone, service of interest, country/region, message and an optional callback request.
 */
export default function EnquiryForm({ service = '', formName = 'business-enquiry', submitLabel = 'Send Enquiry' }) {
  const form = useForm({
    initial: { name: '', organisation: '', email: '', phone: '', service, region: '', message: '', callback: false },
    schema,
    formName,
  });

  return (
    <form onSubmit={form.onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <PlainField form={form} name="name" label="Name" placeholder="Your name*" autoComplete="name" inputClass={field} />
      <PlainField form={form} name="organisation" label="Organisation" placeholder="Organisation*" autoComplete="organization" inputClass={field} />
      <PlainField form={form} name="email" label="Work email" placeholder="Work email*" type="email" autoComplete="email" inputClass={field} />
      <PlainField form={form} name="phone" label="Phone" placeholder="Phone*" type="tel" autoComplete="tel" inputClass={field} />
      <PlainField form={form} name="service" label="Service of interest" as="select" inputClass={field}>
        <option value="">Service of interest*</option>
        {SERVICE_OPTIONS.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </PlainField>
      <PlainField form={form} name="region" label="Country / region" as="select" inputClass={field}>
        <option value="">Country / region*</option>
        {REGION_OPTIONS.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </PlainField>
      <PlainField
        form={form}
        name="message"
        label="Message"
        placeholder="Tell us about your people challenge and the outcome you want"
        as="textarea"
        rows={4}
        inputClass={`${field} resize-y`}
        className="sm:col-span-2"
      />
      <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-navy sm:col-span-2">
        <input
          type="checkbox"
          checked={form.values.callback}
          onChange={(e) => form.setField('callback', e.target.checked)}
          className="h-6 w-6 shrink-0 rounded border-[#E4DCC8] accent-[#F2C230]"
        />
        Please call me back to discuss
      </label>
      {form.status !== 'idle' && form.status !== 'submitting' && (
        <div className="sm:col-span-2">
          <FormStatus status={form.status} successText="Thank you. Your enquiry has reached SMARTANK – the right specialist will get back to you shortly." />
        </div>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={form.status === 'submitting'}
          aria-busy={form.status === 'submitting'}
          className="inline-flex items-center gap-3 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-navy transition hover:bg-gold-light disabled:opacity-70"
        >
          {form.status === 'submitting' ? 'Sending…' : submitLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </form>
  );
}
