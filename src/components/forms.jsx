import { useId, useState } from 'react';
import { submitForm } from '../lib/submitForm.js';
import { validate } from '../lib/validation.js';
import { Icon } from './Icons.jsx';
import { Chevron } from './ArrowButton.jsx';

/** Shared state, validation and submit handling for every form on the site. */
export function useForm({ initial, schema, formName, onSuccess }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: schema[name]?.(value) || undefined }));
  };

  const onChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === 'file') {
      const file = files?.[0] || null;
      setValues((v) => ({ ...v, [name]: file }));
      setErrors((er) => ({ ...er, [name]: schema[name]?.(file) || undefined }));
      return;
    }
    setField(name, value);
  };

  const onBlur = (e) => {
    const { name } = e.target;
    if (schema[name]) setErrors((er) => ({ ...er, [name]: schema[name](values[name]) || undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values, schema);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('error');
      const first = e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus('submitting');
    try {
      await submitForm(formName, values);
      setStatus('success');
      setValues(initial);
      e.target.reset?.();
      onSuccess?.();
    } catch {
      setStatus('failed');
    }
  };

  return { values, errors, status, setStatus, onChange, onBlur, onSubmit, setField };
}

export function Field({ label, name, as = 'input', form, required = true, children, className = '', ...rest }) {
  const id = useId();
  const err = form.errors[name];
  const Tag = as;
  const common = {
    id,
    name,
    onChange: form.onChange,
    onBlur: form.onBlur,
    'aria-invalid': err ? 'true' : undefined,
    'aria-describedby': err ? `${id}-err` : undefined,
    className: `form-control ${err ? 'is-invalid' : ''} ${as === 'textarea' ? 'min-h-[100px] resize-y' : ''}`,
    ...rest,
  };
  if (rest.type !== 'file') common.value = form.values[name] ?? '';

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-navy">
        {label}
        {required && <span className="text-amber"> *</span>}
      </label>
      <Tag {...common}>{children}</Tag>
      {err && (
        <p id={`${id}-err`} className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
          <Icon name="alert" className="h-3.5 w-3.5" />
          {err}
        </p>
      )}
    </div>
  );
}

export function FileField({ label, name, form, accept, hint }) {
  const id = useId();
  const err = form.errors[name];
  const file = form.values[name];
  return (
    <div>
      <span className="mb-1.5 block text-sm font-bold text-navy">
        {label}
        <span className="text-amber"> *</span>
      </span>
      <label
        htmlFor={id}
        className={`flex cursor-pointer items-center gap-3 rounded border-2 border-dashed px-4 py-4 text-sm transition focus-within:ring-4 focus-within:ring-tag hover:border-navy hover:bg-tag/40 ${
          err ? 'border-red-300 bg-red-50/50' : 'border-[#ced4da]'
        }`}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-amber">
          <Icon name={file ? 'file' : 'upload'} />
        </span>
        <span className="min-w-0">
          <span className="block truncate font-bold text-navy">{file ? file.name : 'Click to upload your resume'}</span>
          <span className="block text-xs font-normal text-ink">{hint}</span>
        </span>
        <input
          id={id}
          type="file"
          name={name}
          accept={accept}
          onChange={form.onChange}
          className="sr-only"
          aria-invalid={err ? 'true' : undefined}
          aria-describedby={err ? `${id}-err` : undefined}
        />
      </label>
      {err && (
        <p id={`${id}-err`} className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
          <Icon name="alert" className="h-3.5 w-3.5" />
          {err}
        </p>
      )}
    </div>
  );
}

export function FormStatus({ status, successText = 'Thank you! Your request has been received. Our team will get back to you shortly.' }) {
  if (status === 'success') {
    return (
      <div role="status" className="flex items-start gap-3 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800 ring-1 ring-emerald-200">
        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
        {successText}
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div role="alert" className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
        <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0" />
        Please correct the highlighted fields and try again.
      </div>
    );
  }
  if (status === 'failed') {
    return (
      <div role="alert" className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
        <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0" />
        Something went wrong while sending. Please try again or reach us on WhatsApp.
      </div>
    );
  }
  return null;
}

export function SubmitButton({ status, children, className = 'st-btn' }) {
  const busy = status === 'submitting';
  return (
    <button type="submit" className={className} disabled={busy} aria-busy={busy}>
      {busy ? 'Sending…' : children}
      <Chevron className="ml-[45px] h-3.5 w-3.5 text-white" />
    </button>
  );
}
