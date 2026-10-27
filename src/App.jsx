import { Navigate, Routes, Route, useParams } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Leadership from './pages/Leadership.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import OnlineServices from './pages/OnlineServices.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import JobsOpen from './pages/JobsOpen.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx';

/** Old /blogs/:slug links keep working after the rename to Insights. */
function OldBlogRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/insights/${slug}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="leadership-team" element={<Leadership />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="online-services" element={<OnlineServices />} />
        <Route path="insights" element={<Blogs />} />
        <Route path="insights/:slug" element={<BlogDetail />} />
        <Route path="blogs" element={<Navigate to="/insights" replace />} />
        <Route path="blogs/:slug" element={<OldBlogRedirect />} />
        <Route path="jobs-open" element={<JobsOpen />} />
        <Route path="career" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
