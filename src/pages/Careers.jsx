import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import ArrowButton from '../components/ArrowButton.jsx';
import JobsPanel from '../components/JobsPanel.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import { Icon } from '../components/Icons.jsx';
import { CAREER_INTRO, CAREER_JOBS, CAREER_OUTRO, CAREER_WHY, CONTACT } from '../data/content.js';

const WHY_ICONS = ['bulb', 'growth', 'target', 'team'];

export default function Careers() {
  return (
    <>
      <PageBanner title="Careers" />
      <section>
        <div className="container py-6">
          <h2 className="head">Explore Your Future with SmarTank Business Solutions</h2>
          {CAREER_INTRO.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <h3 className="head-tag mt-4">Why Choose SmarTank?</h3>
          <ul className="mb-8 mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_WHY.map((w, i) => (
              <Reveal as="li" aos="fade-up" key={w.title}>
                <div className="group h-full rounded-2xl border border-tag bg-gradient-to-b from-white to-tag/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_24px_45px_-22px_rgba(11,31,58,0.6)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-all duration-500 group-hover:rotate-6 group-hover:bg-gold group-hover:text-navy">
                    <Icon name={WHY_ICONS[i]} className="h-6 w-6" />
                  </span>
                  <h4 className="mb-2 mt-5 text-xl font-extrabold text-navy">{w.title.replace(/:$/, '')}</h4>
                  <p className="mb-0 font-medium leading-relaxed">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p>{CAREER_OUTRO}</p>
        </div>

        <JobsPanel
          jobs={CAREER_JOBS}
          footer={<ArrowButton href={`mailto:${CONTACT.jobsEmail}`}>Send Resume</ArrowButton>}
        />
      </section>

      {/* Extra: on-site resume upload */}
      <section id="apply" className="scroll-mt-28 py-16">
        <div className="container max-w-3xl">
          <h2 className="head-tag">Join Us</h2>
          <p className="head mb-6">Send us your resume</p>
          <div className="bg-white px-7 pb-10 pt-8 [filter:drop-shadow(0px_5px_40px_rgba(189,202,202,0.35))] sm:px-10">
            <ApplicationForm formName="careers-resume" submitLabel="Send Resume" />
          </div>
        </div>
      </section>
    </>
  );
}
