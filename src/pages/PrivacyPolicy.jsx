import PageBanner from '../components/PageBanner.jsx';
import { PRIVACY_POLICY } from '../data/content.js';

/** DRAFT privacy policy – wording in content.js must be reviewed before launch. */
export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section className="bg-cream py-16 sm:py-20">
        <div className="container max-w-3xl">
          <p className="mb-8 text-sm font-semibold text-ink">Last updated: {PRIVACY_POLICY.updated}</p>
          <div className="space-y-8">
            {PRIVACY_POLICY.sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-xl font-extrabold text-navy">{s.title}</h2>
                <p className="mb-0 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
