import HeroSlider from '../components/HeroSlider.jsx';
import Reveal from '../components/Reveal.jsx';
import ArrowButton from '../components/ArrowButton.jsx';
import ServiceCarousel from '../components/ServiceCarousel.jsx';
import ContactSection from '../components/ContactSection.jsx';
import StatsBand from '../components/StatsBand.jsx';
import { ArrowRight } from '../components/JobsPanel.jsx';
import { CONTACT, HOME_JOBS, REGIONS } from '../data/content.js';

function AboutTeaser() {
  return (
    <Reveal as="section" aos="flip-right" className="py-[60px]">
      <div className="container flex flex-col items-center">
        <img src="/images/abt-logo.jpg" width="471" height="112" alt="SmarTank Strategic Consultants" className="max-[482px]:h-auto max-[482px]:w-full" loading="lazy" />
        <h2 className="head my-6 text-center">
          India’s leading Executive Search and HR Consultancy Firm, Offering Unmatched Skill Mapping Services.
        </h2>
        <h3 className="mb-6 text-center text-ink">Discover how we streamline your talent acquisition today!</h3>
        <ArrowButton to="/about">Know More About Us</ArrowButton>
      </div>
    </Reveal>
  );
}

function RegionsStrip() {
  return (
    <section className="bg-navy pb-[23px] pt-10 text-white">
      <div className="container">
        <h2 className="text-center text-[calc(1.275rem+0.3vw)] font-medium leading-[1.2] xl:text-[1.5rem]">Our Services are available in</h2>
        {/* md+: static row like the original */}
        <Reveal aos="zoom-in" as="ul" className="hidden items-center justify-center md:flex">
          {REGIONS.map((r) => (
            <li key={r} className="group mb-2 mr-4">
              <span className="flex items-center font-medium">
                <img src="/images/star.png" alt="" className="mr-2 transition-transform duration-500 group-hover:rotate-[144deg] group-hover:scale-125" />
                <span className="text-[35px] leading-[1.2] transition-colors group-hover:text-amber">{r}</span>
              </span>
            </li>
          ))}
        </Reveal>
      </div>
      {/* phones: endless marquee so the names stay large and readable */}
      <div className="relative mt-2 overflow-hidden md:hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee">
          {[...REGIONS, ...REGIONS, ...REGIONS, ...REGIONS].map((r, i) => (
            <li key={i} className="flex items-center px-5" aria-hidden={i >= REGIONS.length}>
              <img src="/images/star.png" alt="" className="mr-2 h-5 w-5" />
              <span className="text-2xl font-medium leading-[1.2]">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section
      className="relative z-[1] bg-cover bg-center bg-no-repeat py-[60px] lg:h-[1000px]"
      style={{ backgroundImage: "url('/images/ser-bg.jpg')" }}
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="head-tag">What We Do For You</h2>
          <p className="head mb-2">Empowering your success with innovative business solutions and strategic insights.</p>
        </div>
        <ServiceCarousel />
      </div>
    </section>
  );
}

function JobsCta() {
  return (
    <section
      className="relative z-[1] bg-cover bg-center py-[120px] after:absolute after:inset-0 after:-z-10 after:bg-amber after:mix-blend-multiply after:content-['']"
      style={{ backgroundImage: "url('/images/jobs-open-bg.jpg')" }}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-evenly lg:flex-row">
          <Reveal aos="fade-right">
            <h2 className="mb-10 text-[34px] font-extrabold leading-[1.2] text-white sm:text-[55px] lg:text-[63px]">
              Looking for a New Opportunity?
            </h2>
            <ArrowButton href={`mailto:${CONTACT.jobsEmail}`} className="!bg-white !text-[#272727] hover:!text-white">
              Send Resume
            </ArrowButton>
          </Reveal>
          <Reveal
            aos="fade-left"
            className="mt-[30px] inline-block border-t border-white/30 pt-[30px] lg:mt-0 lg:w-[41.5%] lg:border-l lg:border-t-0 lg:pl-[30px] lg:pt-0"
          >
            <h3 className="mb-[30px] text-[30px] font-extrabold text-white sm:text-[44px]">Current Openings</h3>
            <ul className="mb-4">
              {HOME_JOBS.map((j) => (
                <li key={j.title} className="mb-[15px] flex items-baseline font-extrabold text-white">
                  <ArrowRight className="mr-[15px] h-4 w-4 shrink-0" />
                  <p>
                    {j.title}
                    <br />
                    <span className="font-thin">{j.description}</span>
                    <br />
                    <span className="font-thin">Positions open for : {j.locations.join(' | ')}</span>
                  </p>
                </li>
              ))}
            </ul>
            <ArrowButton to="/jobs-open">Explore more opportunities</ArrowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutTeaser />
      <RegionsStrip />
      <StatsBand />
      <WhatWeDo />
      <JobsCta />
      <ContactSection />
    </>
  );
}
