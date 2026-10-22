import { useCallback, useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import JobsPanel from '../components/JobsPanel.jsx';
import Modal from '../components/Modal.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import { JOBS, JOBS_INTRO } from '../data/content.js';

export default function JobsOpen() {
  const [job, setJob] = useState(null);
  const close = useCallback(() => setJob(null), []);

  return (
    <>
      <PageBanner title="Jobs Open" />
      <section>
        <div className="container py-6 text-center">
          <p>{JOBS_INTRO}</p>
        </div>
        <JobsPanel jobs={JOBS} onApply={setJob} className="mb-12" />
      </section>

      <Modal open={!!job} onClose={close} title={job ? `Apply for ${job.title}` : ''}>
        {job && <ApplicationForm key={job.title} position={job.title} formName="job-application" />}
      </Modal>
    </>
  );
}
