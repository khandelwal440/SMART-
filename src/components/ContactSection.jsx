import { CONTACT } from '../data/content.js';
import ContactForm from './ContactForm.jsx';

/** Image + phone pill on the left, floating "Get In Touch" form on the right. */
export default function ContactSection({ formName = 'home-callback', className = 'pt-[118px]' }) {
  return (
    <section className={`relative overflow-hidden pb-[217px] ${className}`}>
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full lg:w-7/12">
            <div className="relative">
              <img src="/images/contact.jpg" alt="SmarTank consultant on a call" className="w-full md:w-full lg:w-auto" loading="lazy" />
              <div className="absolute bottom-[10%] left-[10%] flex items-center justify-center rounded-[40px] border-2 border-white/25 bg-white/20 py-[18px] pl-0 pr-10 max-sm:block max-sm:border-0 max-sm:bg-transparent max-sm:p-0">
                <div className="relative z-[1] mr-[30px]">
                  <span
                    className="absolute -left-[61%] -top-[88%] -z-10 h-[103px] w-[103px] rounded-full border-2 border-amber max-sm:hidden"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -left-[39%] -top-[60%] -z-10 h-20 w-20 rounded-full bg-amber max-sm:-left-[12%] max-sm:-top-[47%] max-sm:h-[70px] max-sm:w-[70px]"
                    aria-hidden="true"
                  />
                  <span className="mr-5 flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-white text-white">
                    <svg viewBox="0 0 512 512" className="h-[13px] w-[13px]" fill="currentColor" aria-hidden="true">
                      <path d="M497.4 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6.6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0-14-27.6z" />
                    </svg>
                  </span>
                </div>
                <h3 className="m-0 text-2xl font-extrabold text-white max-sm:mt-6 max-sm:inline-block max-sm:text-[22px]">
                  <a href={CONTACT.phoneHref} className="text-white">
                    {CONTACT.phone}
                  </a>
                </h3>
              </div>
              <div className="absolute bottom-[41%] left-[6%] animate-bob sm:bottom-[21%]" aria-hidden="true">
                <img src="/images/contact_shapes.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="relative bg-white px-7 pb-[60px] pt-11 [filter:drop-shadow(0px_5px_40px_rgba(189,202,202,0.35))] sm:px-10 lg:top-[100px]">
              <h2 className="head-tag">CONTACT US</h2>
              <h3 className="head !text-[30px]">Get In Touch with SMARTANK</h3>
              <ContactForm formName={formName} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[4%] left-[7%] -z-10 animate-dance" aria-hidden="true">
        <img src="/images/animate.png" alt="" />
      </div>
      <div className="absolute bottom-[3%] right-[9%] -z-10 animate-dance2" aria-hidden="true">
        <img src="/images/service_shpe2.png" alt="" />
      </div>
    </section>
  );
}
