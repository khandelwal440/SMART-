import { useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Img from '../components/Img.jsx';
import ArrowButton from '../components/ArrowButton.jsx';
import BlogCard, { formatDate } from '../components/BlogCard.jsx';
import { BLOGS } from '../data/content.js';
import NotFound from './NotFound.jsx';

/** Blog detail template – content comes from BLOGS in data/content.js. */
export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOGS.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  const related = BLOGS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageBanner title="Blogs" crumbs={[{ label: 'Blogs', to: '/blogs' }, { label: post.category }]} />
      <article className="py-12">
        <div className="container max-w-4xl">
          <span className="head-tag">{post.category}</span>
          <h2 className="head">{post.title}</h2>
          <p className="text-sm font-normal">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.author}
          </p>
          <Img src={post.image} alt={post.alt} eager className="my-8 aspect-[16/9] w-full rounded-[15px] object-cover" />
          <div className="justify-text font-normal">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <ArrowButton to="/blogs">Back to Blogs</ArrowButton>
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="bg-[#f6f9fb] py-12" aria-labelledby="related-title">
          <div className="container max-w-5xl">
            <h2 id="related-title" className="head mb-8 !text-[30px]">
              More from our blog
            </h2>
            <div className="grid gap-7 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
