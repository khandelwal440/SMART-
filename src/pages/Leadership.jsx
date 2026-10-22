import PageBanner from '../components/PageBanner.jsx';
import { LEADERSHIP_BLOCKS, LEADERSHIP_INTRO } from '../data/content.js';

export default function Leadership() {
  const blocks = [{ title: 'Our Leadership Team', text: LEADERSHIP_INTRO }, ...LEADERSHIP_BLOCKS];
  return (
    <>
      <PageBanner title="Leadership Team" crumbs={[{ label: 'About', to: '/about' }, { label: 'Leadership Team' }]} />
      <section>
        <div className="container">
          {blocks.map((b, i) => (
            <div key={b.title} className="justify-text border-b border-dashed border-[#686868] py-5 last:border-b-0">
              {i === 0 ? (
                <h2 className="head !text-[30px]">{b.title}</h2>
              ) : (
                <h3 className="head !text-[30px]">{b.title}</h3>
              )}
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
