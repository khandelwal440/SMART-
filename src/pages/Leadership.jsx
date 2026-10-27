import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { Icon } from '../components/Icons.jsx';
import { LEADERSHIP_BLOCKS, LEADERSHIP_INTRO } from '../data/content.js';

const ICONS = ['eye', 'target', 'award', 'bulb', 'team'];

export default function Leadership() {
  return (
    <>
      <PageBanner title="Leadership Team" crumbs={[{ label: 'About', to: '/about' }, { label: 'Leadership Team' }]} />

      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-tag blur-3xl" aria-hidden="true" />
        <div className="container relative">
          <Reveal aos="fade-up" className="mx-auto max-w-3xl text-center">
            <span className="head-tag">Leadership</span>
            <h2 className="head">Our Leadership Team</h2>
            <p className="mt-4 text-lg font-medium leading-relaxed">{LEADERSHIP_INTRO}</p>
          </Reveal>

          {/* 6-col grid on desktop: 3 cards on top, last 2 centred underneath */}
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {LEADERSHIP_BLOCKS.map((b, i) => (
              <Reveal
                as="li"
                aos="fade-up"
                key={b.title}
                className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''} ${i === 4 ? 'md:col-span-2 md:mx-auto md:w-1/2 lg:mx-0 lg:w-auto' : ''}`}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-tag bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:bg-navy hover:shadow-[0_30px_60px_-25px_rgba(11,31,58,0.7)]">
                <span
                  className="pointer-events-none absolute -right-3 -top-6 text-[110px] font-extrabold leading-none text-tag/70 transition-colors duration-500 group-hover:text-white/10"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy shadow-[0_12px_24px_-10px_rgba(242,194,48,0.9)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon name={ICONS[i]} className="h-7 w-7" />
                </span>
                <h3 className="relative mb-3 mt-6 text-2xl font-extrabold text-navy transition-colors duration-500 group-hover:text-white">{b.title}</h3>
                <p className="relative mb-0 font-medium leading-relaxed transition-colors duration-500 group-hover:text-white/80">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
