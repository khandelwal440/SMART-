import { rules } from '../lib/validation.js';
import { FormStatus, useForm } from './forms.jsx';
import { PlainField } from './ContactForm.jsx';
import { ArrowRight } from './JobsPanel.jsx';

const schema = {
  name: rules.name,
  email: rules.email,
  company: (v) => (!v || v.trim().length < 2 ? 'Please enter your company name.' : null),
  message: (v) => (v && v.length > 2000 ? 'Message must be under 2000 characters.' : null),
};

const field =
  'block w-full rounded-md border border-white/15 bg-white px-4 py-3 text-[15px] font-normal text-navy placeholder:text-[#7A8494] transition focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/30';

/** "Start a Conversation" form on the home page's Let's Connect section. */
export default function ConnectForm() {
  const form = useForm({ initial: { name: '', email: '', company: '', message: '' }, schema, formName: 'start-a-conversation' });

  return (
    <form onSubmit={form.onSubmit} noValidate className="space-y-3">
      <PlainField form={form} name="name" label="Your Name" placeholder="Your Name*" autoComplete="name" inputClass={field} />
      <PlainField form={form} name="email" label="Business Email" placeholder="Business Email*" type="email" autoComplete="email" inputClass={field} />
      <PlainField form={form} name="company" label="Company Name" placeholder="Company Name*" autoComplete="organization" inputClass={field} />
      <PlainField form={form} name="message" label="How can we help you?" placeholder="How can we help you?" as="textarea" rows={3} inputClass={`${field} resize-y`} />
      {form.status !== 'idle' && form.status !== 'submitting' && <FormStatus status={form.status} />}
      <button
        type="submit"
        disabled={form.status === 'submitting'}
        aria-busy={form.status === 'submitting'}
        className="mt-2 inline-flex items-center gap-3 rounded-md bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:bg-gold-light disabled:opacity-70"
      >
        {form.status === 'submitting' ? 'Sending…' : 'Send Message'}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
