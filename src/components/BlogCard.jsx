import { Link } from 'react-router-dom';
import Img from './Img.jsx';
import ArrowButton from './ArrowButton.jsx';

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

/** Blog tile styled like the home-page service cards. */
export default function BlogCard({ post }) {
  return (
    <article className="flex h-full flex-col rounded-[15px] bg-white transition-transform duration-300 [filter:drop-shadow(0px_7px_7px_rgba(189,202,202,0.35))] hover:-translate-y-1">
      <Link to={`/blogs/${post.slug}`} tabIndex={-1} aria-hidden="true">
        <Img src={post.image} alt="" className="aspect-[16/10] w-full rounded-t-[15px] object-cover" />
      </Link>
      <div className="flex flex-1 flex-col items-start p-5">
        <span className="head-tag !mb-3">{post.category}</span>
        <time dateTime={post.date} className="text-sm font-normal">
          {formatDate(post.date)}
        </time>
        <h3 className="mb-2 mt-2 text-xl font-extrabold text-navy">
          <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mb-5 flex-1 font-normal leading-6">{post.excerpt}</p>
        <ArrowButton to={`/blogs/${post.slug}`} aria-label={`Read more: ${post.title}`}>
          Read More
        </ArrowButton>
      </div>
    </article>
  );
}
