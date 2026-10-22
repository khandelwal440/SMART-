import { useEffect } from 'react';
import { RESUME_ACCEPT, rules } from '../lib/validation.js';
import { Field, FileField, FormStatus, SubmitButton, useForm } from './forms.jsx';

const schema = {
  name: rules.name,
  email: rules.email,
  phone: rules.phone,
  position: (v) => (!v || !v.trim() ? 'Please enter the position you are applying for.' : null),
  resume: rules.resume,
  message: (v) => (v && v.length > 2000 ? 'Message must be under 2000 characters.' : null),
};

/**
 * Job application / resume upload form.
 * Used by the Jobs Open "Apply Now" modal and the Careers page.
 */
export default function ApplicationForm({ position = '', formName = 'job-application', submitLabel = 'Submit Application' }) {
  const form = useForm({
    initial: { name: '', email: '', phone: '', position, resume: null, message: '' },
    schema,
    formName,
  });

  // Keep the position in sync when the modal is reopened for a different role.
  useEffect(() => {
    form.setField('position', position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  return (
    <form onSubmit={form.onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" form={form} autoComplete="name" placeholder="Your full name" />
        <Field label="Email" name="email" type="email" form={form} autoComplete="email" placeholder="you@email.com" />
        <Field label="Phone" name="phone" type="tel" form={form} autoComplete="tel" placeholder="+91 98765 43210" />
        <Field label="Position" name="position" form={form} placeholder="e.g. Chief Financial Officer" />
      </div>
      <FileField label="Resume" name="resume" form={form} accept={RESUME_ACCEPT} hint="PDF, DOC or DOCX · max 5 MB" />
      <Field label="Message" name="message" as="textarea" form={form} required={false} placeholder="Anything you'd like us to know…" />
      <FormStatus
        status={form.status}
        successText="Thank you! Your application has been received. Our team will review your profile and get in touch."
      />
      <SubmitButton status={form.status}>{submitLabel}</SubmitButton>
    </form>
  );
}
