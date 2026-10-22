import PageBanner from '../components/PageBanner.jsx';
import ArrowButton from '../components/ArrowButton.jsx';

export default function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" />
      <section className="py-16">
        <div className="container max-w-xl text-center">
          <p className="text-7xl font-extrabold text-tag">404</p>
          <h2 className="head mt-4">We couldn't find that page.</h2>
          <p>The page may have moved. Let's get you back on track.</p>
          <ArrowButton to="/" className="mt-6">
            Back to Home
          </ArrowButton>
        </div>
      </section>
    </>
  );
}
