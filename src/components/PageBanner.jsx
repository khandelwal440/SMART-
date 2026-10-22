import { Link } from 'react-router-dom';

/**
 * Inner-page breadcrumb banner: background image, title, Home > Page trail
 * and the five floating breadcrumb shapes.
 * crumbs: [{ label, to? }] – Home is prepended automatically.
 */
export default function PageBanner({ title, crumbs }) {
  const trail = [{ label: 'Home', to: '/' }, ...(crumbs || [{ label: title }])];

  return (
    <section
      className="relative z-[1] mt-[58px] bg-cover pb-[110px] pt-[105px] max-sm:bg-[60%] sm:bg-[79%] lg:mt-[108px]"
      style={{ backgroundImage: "url('/images/breadcrumb_bg.jpg')" }}
    >
      <div className="container">
        <div className="lg:w-1/2">
          <h1 className="mb-2.5 text-[48px] font-medium leading-[1.2] text-navy">{title}</h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center">
              {trail.map((c, i) => {
                const last = i === trail.length - 1;
                return (
                  <li key={c.label} className="crumb flex items-center text-base text-amber">
                    {c.to && !last ? (
                      <Link to={c.to} className="text-navy transition-colors duration-300 hover:text-amber">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page">{c.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
      <div aria-hidden="true">
        <img src="/images/breadcrumb_shape01.png" alt="" className="absolute left-1/2 top-[14%] -z-10" />
        <img src="/images/breadcrumb_shape03.png" alt="" className="absolute bottom-0 right-0 -z-10 m-auto lg:left-0" />
        <img src="/images/breadcrumb_shape04.png" alt="" className="absolute right-[42%] top-0 -z-10" />
        <img src="/images/breadcrumb_shape05.png" alt="" className="absolute right-1/4 top-[15%] -z-10 animate-bob4" />
      </div>
    </section>
  );
}
