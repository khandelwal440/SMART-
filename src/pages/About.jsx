import PageBanner from '../components/PageBanner.jsx';
import { ABOUT_FEATURES, ABOUT_INTRO, MISSION, VISION } from '../data/content.js';

const RING = 'Years Of-Experience-'.split('');

/** Amber badge with a trophy and "Years Of-Experience-20" spinning around it. */
function ExperienceBadge() {
  return (
    <div className="absolute right-[-4px] top-[-20px] z-[3] flex h-[150px] w-[150px] origin-top-right scale-[0.7] items-center justify-center rounded-full border-4 border-white bg-amber shadow-[0_14px_30px_-12px_rgba(247,164,0,0.9)] sm:right-[-7px] sm:top-[37%] sm:origin-center sm:-translate-x-1/2 sm:scale-100">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy text-white">
        <svg viewBox="0 0 576 512" className="h-9 w-9" fill="currentColor" aria-hidden="true">
          <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" />
        </svg>
      </div>
      <p className="absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 animate-rotate10 text-[15px] font-extrabold uppercase text-white" aria-label="20 Years Of Experience">
        {RING.map((ch, i) => (
          <span key={i} aria-hidden="true" className="absolute -top-16 inline-block origin-[0_64px]" style={{ transform: `rotate(${i * 17}deg)` }}>
            {ch}
          </span>
        ))}
        <span aria-hidden="true" className="absolute -top-16 inline-block origin-[0_64px]" style={{ transform: 'rotate(323deg)' }}>
          <b>2</b>
        </span>
        <span aria-hidden="true" className="absolute -top-16 inline-block origin-[0_64px]" style={{ transform: 'rotate(340deg)' }}>
          <b>0</b>
        </span>
      </p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageBanner title="About Us" crumbs={[{ label: 'About' }]} />

      <section className="relative py-12">
        <div className="container">
          <div className="justify-text after:block after:clear-both after:content-['']">
            {/* floats beside the text only on desktop; above it on phones/tablets so the text column isn't squeezed */}
            <figure className="mb-6 w-full lg:float-right lg:mb-2.5 lg:ml-[30px] lg:w-[500px] xl:w-[700px]">
              <img src="/images/about-img.png" alt="SmarTank team at work" className="w-full rounded-2xl lg:rounded-[5px]" />
            </figure>
            {ABOUT_INTRO.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="container pt-12">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="order-2 w-full lg:order-1 lg:w-1/2">
              {/* phones: big photo with the second one tucked over its lower-right corner */}
              <div className="relative mt-8 pb-16 text-left sm:mt-0 sm:block sm:pb-[90px] md:text-center lg:text-left">
                <img
                  src="/images/about-page-img1.jpg"
                  alt="SmarTank consultants"
                  className="w-[82%] rounded-2xl object-cover sm:w-auto sm:rounded-none"
                />
                <img
                  src="/images/about-page-img2.jpg"
                  alt="SmarTank leadership"
                  className="absolute bottom-0 right-0 z-[2] w-[52%] rounded-2xl border-4 border-white shadow-[0_20px_40px_-18px_rgba(34,83,120,0.6)] sm:bottom-[25px] sm:right-[60px] sm:w-auto sm:rounded-none sm:border-0 sm:shadow-none"
                />
                <ExperienceBadge />
                <img src="/images/about-page-img-shape.png" alt="" aria-hidden="true" className="absolute bottom-0 left-[70px] -z-10 max-sm:hidden md:left-[29%] md:bottom-[3%] lg:left-[70px] lg:bottom-0" />
              </div>
            </div>
            <div className="order-1 w-full lg:order-2 lg:w-1/2">
              <h2 className="head-tag">ABOUT SMARTANK</h2>
              <p className="head mb-2">We help Organisations achieve ultimate business growth and success.</p>
              <ul className="mb-[25px] mt-5 flex flex-col gap-5">
                {ABOUT_FEATURES.map((f) => (
                  <li
                    key={f.title}
                    className="group flex items-start gap-[15px] rounded-2xl p-3 transition-all duration-300 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(34,83,120,0.45)] max-sm:block"
                  >
                    <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-lg bg-cream transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 max-sm:mb-2.5">
                      <img src={f.icon} alt="" />
                    </span>
                    <div>
                      <h3 className="mb-[5px] text-xl font-bold">{f.title}</h3>
                      <p className="mb-0">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="mb-2 mr-2 inline-block bg-amber px-2.5 py-[5px] text-xl font-extrabold text-[#1c1e1f]">VISION</h3>
              <p>{VISION}</p>
              <h3 className="mb-2 mr-2 inline-block bg-amber px-2.5 py-[5px] text-xl font-extrabold text-[#1c1e1f]">MISSION</h3>
              <p>{MISSION}</p>
            </div>
          </div>
        </div>
        <img src="/images/about-page-img-bg.png" alt="" aria-hidden="true" className="absolute bottom-0 right-0 -z-10 max-sm:hidden" />
      </section>
    </>
  );
}
