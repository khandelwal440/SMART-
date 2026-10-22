const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s()-]{7,18}$/;
const MAX_RESUME_MB = 5;
const RESUME_TYPES = ['.pdf', '.doc', '.docx'];

export const rules = {
  required: (label) => (v) => (v == null || String(v).trim() === '' ? `${label} is required.` : null),
  name: (v) => {
    if (!v || !v.trim()) return 'Name is required.';
    if (v.trim().length < 2) return 'Please enter your full name.';
    return null;
  },
  email: (v) => {
    if (!v || !v.trim()) return 'Email is required.';
    return EMAIL_RE.test(v.trim()) ? null : 'Please enter a valid email address.';
  },
  phone: (v) => {
    if (!v || !v.trim()) return 'Phone number is required.';
    const digits = v.replace(/\D/g, '');
    return PHONE_RE.test(v.trim()) && digits.length >= 7 ? null : 'Please enter a valid phone number.';
  },
  resume: (file) => {
    if (!file) return 'Please attach your resume.';
    const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    if (!RESUME_TYPES.includes(ext)) return 'Resume must be a PDF, DOC or DOCX file.';
    if (file.size > MAX_RESUME_MB * 1024 * 1024) return `Resume must be smaller than ${MAX_RESUME_MB} MB.`;
    return null;
  },
};

/** Runs each field's validator and returns { field: message } for failures. */
export function validate(values, schema) {
  const errors = {};
  Object.entries(schema).forEach(([field, check]) => {
    const msg = check(values[field]);
    if (msg) errors[field] = msg;
  });
  return errors;
}

export const RESUME_ACCEPT = RESUME_TYPES.join(',');
