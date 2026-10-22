import PageBanner from '../components/PageBanner.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { CONTACT, CONTACT_INTRO } from '../data/content.js';

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section>
        <div className="container py-6">
          <h2 className="head">We’d Love to Hear From You!</h2>
          <p>{CONTACT_INTRO}</p>
          <div className="block justify-between pt-4 md:flex">
            <div>
              <h3 className="head-tag">General Inquiries</h3>
              <p>For general questions or information about our services, please email us at:</p>
              <p>
                <b>Email:</b>{' '}
                <a className="inline-block py-1 text-ink underline decoration-amber decoration-2 underline-offset-4 transition hover:text-navy" href={`mailto:${CONTACT.infoEmail}`}>
                  {CONTACT.infoEmail}
                </a>
              </p>
              <p>
                Phone:{' '}
                <a className="inline-block py-1 text-ink underline decoration-amber decoration-2 underline-offset-4 transition hover:text-navy" href={CONTACT.phoneHref}>
                  {CONTACT.phone}
                </a>
              </p>
            </div>
            <div>
              <h3 className="head-tag">Careers &amp; job applications</h3>
              <p>Looking for an opportunity? Send your resume and cover letter to:</p>
              <p>
                <b>Email:</b>{' '}
                <a className="inline-block py-1 text-ink underline decoration-amber decoration-2 underline-offset-4 transition hover:text-navy" href={`mailto:${CONTACT.jobsEmail}`}>
                  {CONTACT.jobsEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection formName="contact-page" className="pt-0" />
    </>
  );
}
