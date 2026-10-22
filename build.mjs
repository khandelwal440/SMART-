// Builds every page of the site from src/ into this folder.
//   node build.mjs
// Shared pieces live in src/partials, page sections in src/sections; the page list is below.
import { readFileSync, writeFileSync } from 'node:fs';

const read = (p) => readFileSync(new URL(p, import.meta.url), 'utf8').trim();
const part = (n) => read(`src/partials/${n}.html`);
const section = (n) => read(`src/sections/${n}.html`);

/* inner-page banner, styled like the home hero (contour lines, crosshair, letter reveal) */
const pageHero = ({ crumb, eyebrow, title, sub }) => `<!-- PAGE HERO -->
<section class="page-hero" data-page-hero>
  <svg class="topo ph-topo" id="topoPage" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900" aria-hidden="true"></svg>
  <div class="wrap ph-in">
    <nav class="crumbs" aria-label="Breadcrumb" data-page-fade><a href="index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">${crumb}</span></nav>
    <p class="eyebrow" data-page-fade>${eyebrow}</p>
    <h1 data-page-title>${title}</h1>
    ${sub ? `<p class="ph-sub" data-page-fade>${sub}</p>` : ''}
  </div>
  <div class="ph-line" data-page-line></div>
</section>`;

const PAGES = [
  { file: 'index.html', page: 'home', title: 'SmarTank Business Solutions',
    desc: "SmarTank – India's leading Executive Search and HR Consultancy firm. Executive talent acquisition, performance management, HR business partnering and leadership development across India, Singapore, Europe, Africa and UAE.",
    body: ['hero', 'regions', 'clip', 'steps', 'about', 'leadership', 'stats', 'vision', 'jobs', 'blogs', 'contact'] },
  { file: 'about.html', page: 'about', title: 'About Us – SmarTank Business Solutions',
    desc: 'About SmarTank: 20+ years of expertise in executive search, performance management, leadership development and HR partnering.',
    hero: { crumb: 'About Us', eyebrow: 'About SmarTank', title: 'Revolutionizing talent management with experience and technology', sub: 'A 360-degree approach to strategy, performance, leadership development and HR partnering.' },
    body: ['about', 'stats', 'vision', 'regions'] },
  { file: 'services.html', page: 'services', title: 'Services – SmarTank Business Solutions',
    desc: 'Executive Talent Acquisition, Performance Management System, HR Business Partnering & Consultation, HR Transformation & Leadership Development.',
    hero: { crumb: 'Services', eyebrow: 'What we do for you', title: 'Strategic solutions for workforce excellence', sub: 'Four service lines, one partner — from finding your next leader to building the systems that help every team perform.' },
    body: ['steps', 'service-detail', 'clip'] },
  { file: 'leadership.html', page: 'leadership', title: 'Leadership Team – SmarTank Business Solutions',
    desc: 'Our leadership team: visionary leadership, strategic expertise, commitment to excellence, innovation and collaboration.',
    hero: { crumb: 'Leadership Team', eyebrow: 'Our leadership team', title: 'Guided by a collective vision', sub: 'Seasoned professionals with a deep understanding of the consultancy and HR landscape.' },
    body: ['leadership', 'vision'] },
  { file: 'jobs.html', page: 'jobs', title: 'Jobs Open – SmarTank Business Solutions',
    desc: 'Current executive openings across India, Singapore, UAE, Africa and the United Kingdom through SmarTank Business Solutions.',
    hero: { crumb: 'Jobs Open', eyebrow: 'Jobs open', title: 'Take the next step in your career', sub: 'Roles with leading organisations across India, Singapore, UAE, Africa and the United Kingdom.' },
    body: ['jobs'] },
  { file: 'careers.html', page: 'careers', title: 'Careers – SmarTank Business Solutions',
    desc: 'Build your career at SmarTank Business Solutions – executive search, performance management and client services roles.',
    hero: { crumb: 'Careers', eyebrow: 'Careers at SmarTank', title: 'Every career is a journey', sub: "We're constantly on the lookout for dynamic professionals who are eager to grow and make a difference." },
    body: ['careers'] },
  { file: 'blogs.html', page: 'blogs', title: 'Blogs – SmarTank Business Solutions',
    desc: 'SmarTank insights on executive search, performance and HR transformation – on LinkedIn.',
    hero: { crumb: 'Blogs', eyebrow: 'Insights', title: 'Perspectives on talent, performance and HR', sub: 'Our latest thinking is published on LinkedIn.' },
    body: ['blogs'] },
  { file: 'contact.html', page: 'contact', title: 'Contact Us – SmarTank Business Solutions',
    desc: 'Get in touch with SmarTank – request a call back, send your resume or chat with us on WhatsApp.',
    hero: { crumb: 'Contact Us', eyebrow: 'Contact us', title: "Let's talk about your people strategy", sub: 'Request a call back, send your resume or reach us on WhatsApp.' },
    body: ['contact'] },
];

const shell = (p) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
${part('favicon')}
<meta name="description" content="${p.desc.replace(/"/g, '&quot;')}">
${part('head-extra')}
<link rel="stylesheet" href="assets/site.css">
</head>
<body data-page="${p.page}">
<!-- generated by build.mjs from src/ – edit the source files, then run: node build.mjs -->
${part('sprite')}
${part('preloader')}
${part('nav')}
<main id="top">
${[p.hero ? pageHero(p.hero) : '', ...p.body.map(section)].filter(Boolean).join('\n\n')}
</main>
${part('footer')}
${part('libs')}
<script src="assets/site.js"></script>
</body>
</html>
`;

for (const p of PAGES) {
  writeFileSync(new URL(p.file, import.meta.url), shell(p));
  console.log('built', p.file);
}
