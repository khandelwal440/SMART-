import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { BLOGS, CONTACT } from '../data/content.js';

export default function Blogs() {
  return (
    <>
      <PageBanner title="Insights" />
      <section>
        <h2 className="my-12 px-3 text-center text-[calc(1.375rem+1.5vw)] font-medium leading-tight text-ink xl:text-[2.5rem]">
          CHECK OUR BLOGS ON{' '}
          <a href={CONTACT.linkedinPosts} target="_blank" rel="noopener noreferrer" className="text-[#0d6efd] underline">
            LINKEDIN
          </a>
        </h2>
      </section>

      {/* Extra: on-site blog grid (placeholder posts) */}
      <section className="pb-16">
        <div className="container">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {BLOGS.map((post) => (
              <Reveal key={post.slug} aos="fade-up" className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
