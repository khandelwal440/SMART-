/**
 * ============================================================
 *  BACKEND SUBMIT PLACEHOLDER
 * ============================================================
 *  Every form on the site (contact, enquiry, job application,
 *  careers resume upload) calls this function.
 *
 *  Replace the simulated delay below with a real request, e.g.:
 *
 *    const body = new FormData();
 *    Object.entries(data).forEach(([k, v]) => body.append(k, v));
 *    const res = await fetch('https://your-api.example.com/forms/' + formName, {
 *      method: 'POST',
 *      body,
 *    });
 *    if (!res.ok) throw new Error('Submission failed');
 *    return res.json();
 *
 *  `data` may contain File objects (resume uploads), so use
 *  FormData rather than JSON when sending files.
 * ============================================================
 */
export async function submitForm(formName, data) {
  // eslint-disable-next-line no-console
  console.info(`[SMARTANK] "${formName}" form submitted (placeholder – no backend connected):`, data);
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}
