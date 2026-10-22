import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import ArrowButton from '../components/ArrowButton.jsx';
import JobsPanel from '../components/JobsPanel.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import { CAREER_INTRO, CAREER_JOBS, CAREER_OUTRO, CAREER_WHY, CONTACT } from '../data/content.js';

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
          <h3 className="head-tag">Why Choose SmarTank?</h3>
          <Reveal as="ul" aos="slide-left" className="caret-list pl-8">
            {CAREER_WHY.map((w) => (
              <li key={w.title} className="relative mb-5 block">
                <h4 className="text-2xl font-bold text-navy">{w.title}</h4>
                {w.text}
              </li>
            ))}
          </Reveal>
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
