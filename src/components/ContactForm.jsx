import { useId } from 'react';
import { SERVICE_OPTIONS } from '../data/content.js';
import { rules } from '../lib/validation.js';
import { FormStatus, useForm } from './forms.jsx';
import { Chevron } from './ArrowButton.jsx';

const initial = { name: '', phone: '', email: '', service: SERVICE_OPTIONS[0], message: '' };
const schema = {
  name: rules.name,
  phone: rules.phone,
  email: rules.email,
  service: (v) => (!v ? 'Please select a service.' : null),
  message: (v) => (v && v.length > 2000 ? 'Message must be under 2000 characters.' : null),
};

/** Placeholder-style input with a visually hidden label and an inline error. */
export function PlainField({ form, name, label, as: Tag = 'input', className = '', inputClass = 'form-control', children, ...rest }) {
  const id = useId();
  const err = form.errors[name];
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        value={form.values[name] ?? ''}
        onChange={form.onChange}
        onBlur={form.onBlur}
        aria-invalid={err ? 'true' : undefined}
        aria-describedby={err ? `${id}-err` : undefined}
        className={`${inputClass} ${err ? 'is-invalid' : ''}`}
        {...rest}
      >
        {children}
      </Tag>
      {err && (
        <p id={`${id}-err`} className="mb-0 mt-1 text-sm font-medium text-red-600">
          {err}
        </p>
      )}
    </div>
  );
}

/** "Request Call Back" form used on Home and Contact pages. */
export default function ContactForm({ formName = 'contact' }) {
  const form = useForm({ initial, schema, formName });

  return (
    <form onSubmit={form.onSubmit} noValidate>
      <div className="grid gap-x-6 md:grid-cols-2">
        <PlainField form={form} name="name" label="Your Name" placeholder="Your Name" autoComplete="name" className="mb-6 md:col-span-2" />
        <PlainField form={form} name="phone" label="Phone No" placeholder="Phone No" type="tel" autoComplete="tel" className="mb-6" />
        <PlainField form={form} name="email" label="E-Mail Address" placeholder="E-Mail Address" type="email" autoComplete="email" className="mb-6" />
        <PlainField form={form} name="service" label="Service Type" as="select" className="mb-6 md:col-span-2">
          {SERVICE_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </PlainField>
        <PlainField form={form} name="message" label="Comments" as="textarea" rows={3} placeholder="Comments" className="mb-6 md:col-span-2" />
      </div>
      <div className="mb-4">
        <FormStatus status={form.status} />
      </div>
      <button type="submit" className="st-btn" disabled={form.status === 'submitting'} aria-busy={form.status === 'submitting'}>
        {form.status === 'submitting' ? 'Sending…' : 'Request Call Back'}
        <Chevron className="ml-[45px] h-3.5 w-3.5 text-white" />
      </button>
    </form>
  );
}
