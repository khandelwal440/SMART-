import { CONTACT } from '../data/content.js';
import ContactForm from './ContactForm.jsx';

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M497.4 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6.6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0-14-27.6z" />
    </svg>
  );
}

/** Image + phone pill on the left, floating "Get In Touch" form on the right. */
export default function ContactSection({ formName = 'home-callback', className = 'pt-14 lg:pt-[118px]' }) {
  return (
    <section className={`relative overflow-hidden pb-16 lg:pb-[217px] ${className}`}>
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full lg:w-7/12">
            <div className="relative">
              <img
                src="/images/contact.jpg"
                alt="SmarTank consultant on a call"
                className="w-full rounded-2xl object-cover max-sm:aspect-[4/3] lg:w-auto lg:rounded-none"
                loading="lazy"
              />

              {/* sm+: glass pill on the photo, as on the original site */}
              <div className="absolute bottom-[10%] left-[10%] hidden items-center justify-center rounded-[40px] border-2 border-white/25 bg-white/20 py-[18px] pr-10 backdrop-blur-sm sm:flex">
                <div className="relative z-[1] mr-[30px]">
                  <span className="absolute -left-[61%] -top-[88%] -z-10 h-[103px] w-[103px] animate-pulse rounded-full border-2 border-amber" aria-hidden="true" />
                  <span className="absolute -left-[39%] -top-[60%] -z-10 h-20 w-20 rounded-full bg-amber" aria-hidden="true" />
                  <span className="mr-5 flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-white text-white">
                    <PhoneIcon className="h-[13px] w-[13px]" />
                  </span>
                </div>
                <h3 className="m-0 text-2xl font-extrabold text-white">
                  <a href={CONTACT.phoneHref} className="text-white">
                    {CONTACT.phone}
                  </a>
                </h3>
              </div>

              <div className="absolute bottom-[21%] left-[6%] hidden animate-bob sm:block" aria-hidden="true">
                <img src="/images/contact_shapes.png" alt="" />
              </div>
            </div>

            {/* phones: solid call card that overlaps the photo, always readable */}
            <a
              href={CONTACT.phoneHref}
              className="relative z-[1] mx-4 -mt-10 flex items-center gap-4 rounded-2xl bg-navy p-4 text-white shadow-[0_18px_40px_-16px_rgba(34,83,120,0.8)] sm:hidden"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber">
                <span className="absolute inset-0 animate-ping rounded-full bg-amber/60" aria-hidden="true" />
                <PhoneIcon className="relative h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-white/70">Call us anytime</span>
                <span className="block text-xl font-extrabold">{CONTACT.phone}</span>
              </span>
            </a>
          </div>

          <div className="mt-8 w-full lg:mt-0 lg:w-5/12">
            <div className="relative rounded-2xl bg-white px-5 pb-10 pt-8 [filter:drop-shadow(0px_5px_40px_rgba(189,202,202,0.45))] sm:px-10 sm:pb-[60px] sm:pt-11 lg:top-[100px] lg:rounded-none">
              <h2 className="head-tag">CONTACT US</h2>
              <h3 className="head !text-[26px] !leading-[34px] sm:!text-[30px] xl:!leading-[55px]">Get In Touch with SMARTANK</h3>
              <ContactForm formName={formName} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[4%] left-[7%] -z-10 hidden animate-dance sm:block" aria-hidden="true">
        <img src="/images/animate.png" alt="" />
      </div>
      <div className="absolute bottom-[3%] right-[9%] -z-10 hidden animate-dance2 sm:block" aria-hidden="true">
        <img src="/images/service_shpe2.png" alt="" />
      </div>
    </section>
  );
}
