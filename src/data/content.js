// All site copy lives here so it can be edited in one place.
// Images in /public/images come from smartankbiz.com (reused with the owner's permission).

const img = (name) => `/images/${name}`;

export const CONTACT = {
  phone: '+91 9167799779',
  phoneHref: 'tel:+919167799779',
  infoEmail: 'info@smartankbiz.com',
  jobsEmail: 'jobs@smartankbiz.com',
  whatsapp: 'https://wa.link/wdrylz',
  linkedin: 'https://www.linkedin.com/company/smartank-strategic-consultants/about/?viewAsMember=true',
  linkedinPosts: 'https://www.linkedin.com/company/smartank-strategic-consultants/posts/?feedView=all&viewAsMember=true',
  credit: 'https://webcreativedreams.com',
  portfolioPdf: '/pdf/company-portfolio.pdf',
};

// Sitemap follows "SMARTANK Website Suggestions" (sections 1–11).
export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About SMARTANK', to: '/about' },
      { label: 'Why SMARTANK', to: '/about#why-smartank' },
      { label: 'Leadership Team', to: '/leadership-team' },
      { divider: true },
      { label: 'Corporate Profile', href: CONTACT.portfolioPdf, external: true },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'All Services', to: '/services' },
      { label: 'Executive Talent Acquisition', to: '/services/executive-talent-acquisition' },
      { label: 'Performance Management System', to: '/services/performance-management-system' },
      { label: 'HR Business Partnering & Consultation', to: '/services/hr-business-partnering' },
      { label: 'HR Transformation & Leadership Development', to: '/services/hr-transformation-leadership' },
    ],
  },
  { label: 'Online Services', to: '/online-services' },
  { label: 'Jobs', to: '/jobs-open' },
  { label: 'Careers', to: '/career' },
  { label: 'Insights', to: '/insights' },
];

/** Gold call-to-action button at the end of the header. */
export const NAV_CTA = { label: 'Request a Callback', to: '/contact' };

export const FOOTER_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About SMARTANK', to: '/about' },
  { label: 'Leadership Team', to: '/leadership-team' },
  { label: 'Services', to: '/services' },
  { label: 'Online Services', to: '/online-services' },
  { label: 'Jobs', to: '/jobs-open' },
  { label: 'Careers', to: '/career' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

/* ------------------------------------------------------------------ */
/*  Home page                                                          */
/*  Copy follows "SMARTANK Website Suggestions" (sections 1 and 12).   */
/* ------------------------------------------------------------------ */
const site = (name) => `/images/site/${name}`;

export const HERO = {
  titleLead: 'Build Better Teams.',
  titleAccent: 'Enable Better Business.',
  subtitle:
    'SMARTANK partners with organisations to strengthen talent, leadership and performance through strategic HR solutions aligned with business priorities.',
  cta: { label: 'Discuss Your Business Needs', to: '/contact' },
  image: site('team-discussion.jpg'),
  imageAlt: 'SMARTANK consultants reviewing a talent plan with a client',
  pillars: ['Strategy', 'People', 'Performance', 'Leadership', 'Growth'],
};

/*
 * TO CONFIRM: regions served. The suggestions document proposes India,
 * Singapore, UAE, UK and Africa (the original site also listed Europe).
 * These are regions served, not physical offices.
 */
export const REGIONS_SERVED = ['India', 'Singapore', 'UAE', 'UK', 'Africa'];

export const HOME_ABOUT = {
  title: 'Where people, leadership and business performance meet.',
  text: 'SMARTANK Business Solutions helps organisations align talent decisions and people systems with business priorities — from hiring critical talent to building effective performance-management practices and leadership capability.',
  image: site('team-smartank.webp'),
  imageAlt: 'The SMARTANK team in the office',
};

/* Why SMARTANK – the four focus areas named in the suggestions document. */
export const WHY_SMARTANK = [
  {
    icon: 'target',
    title: 'Business-aligned HR',
    text: 'Every people decision starts from your business priorities, so HR work moves the numbers that matter.',
  },
  {
    icon: 'search',
    title: 'Structured talent assessment',
    text: 'Clear success profiles, talent mapping and structured assessment before any shortlist reaches you.',
  },
  {
    icon: 'chart',
    title: 'Performance discipline',
    text: 'Goals, accountability and regular reviews that turn strategy into measurable outcomes.',
  },
  {
    icon: 'lock',
    title: 'Confidentiality',
    text: 'Discreet handling of leadership searches, candidate information and organisational change.',
  },
];

/*
 * PLACEHOLDERS – impact figures are NOT approved yet ("leave statistics as
 * placeholders until I approve the numbers"). Set `value` to a number once
 * confirmed; while it is null the site shows "TBC".
 */
export const IMPACT = {
  title: 'Impact that shows up in the business.',
  stats: [
    { value: null, suffix: '+', label: 'Clients served' },
    { value: null, suffix: '+', label: 'Leadership roles closed' },
    { value: null, suffix: '+', label: 'Business units supported' },
    { value: 5, suffix: '', label: 'Regions served' },
  ],
};

export const CALLBACK_BAND = {
  title: 'Let’s talk about your business priorities.',
  text: 'Tell us what you want to achieve and we will connect you with the right SMARTANK specialist.',
  cta: { label: 'Request a Callback', to: '/contact' },
};

/*
 * PENDING APPROVAL – sector list ("propose a sector page only if we can
 * support it with relevant expertise"). Not linked anywhere on the site yet.
 */
export const INDUSTRIES_PENDING = [
  'Energy / Oil Marketing',
  'Logistics',
  'Manufacturing',
  'General Trading',
  'Construction / Infrastructure',
  'FMCG',
  'Fashion / Retail',
  'IT',
  'BFSI',
  'Healthcare',
];

export const HERO_SLIDES = [
  {
    title: 'Tailor made Performance Management System',
    subtitle: ['Strategic Solutions for Workforce Excellence'],
    image: img('hero_thumb3.png'),
    alt: 'SMARTANK consultant',
  },
  {
    title: 'Strategic HR Partnerships for Sustainable Success',
    subtitle: ['Navigating business challenges', 'with strategic talent solutions'],
    image: img('hero_thumb2.png'),
    alt: 'HR partner smiling',
  },
  {
    title: 'Get a Smarter Approach to Elevate Your Business',
    subtitle: ['Precision-driven strategies for maximum', 'workforce productivity and growth.'],
    image: img('hero_thumb1.png'),
    alt: 'Business professional',
  },
];

export const REGIONS = ['India', 'Singapore', 'Europe', 'Africa', 'UAE'];

/** Regions offered in the contact form's country/region field. */
export const REGION_OPTIONS = ['India', 'Singapore', 'UAE', 'United Kingdom', 'Europe', 'Africa', 'Other'];

export const SERVICE_OPTIONS = [
  'Executive Talent Acquisition',
  'Performance Management System',
  'HR Business Partnering & Consultation',
  'HR Transformation & Leadership Development',
];

export const SERVICES = [
  {
    id: 'executive-talent-acquisition',
    title: 'Executive Talent Acquisition',
    cardTitle: ['Executive Talent', 'Acquisition'],
    card: img('ser1.jpg'),
    image: img('service1.jpg'),
    summary:
      'At SMARTANK Business Solutions, we are driven by a singular mission: to bridge the gap between organizations and job seekers, creating a complete ecosystem where talent and opportunity thrive together.',
    body: [
      'At SMARTANK Business Solutions, we are driven by a singular mission: to bridge the gap between organizations and job seekers, creating a complete ecosystem where talent and opportunity thrive together. As a premier consultancy and executive search firm, we understand the evolving dynamics of the job market and the unique challenges faced by both employers and candidates.',
      'Our approach is rooted in deep industry insights, rigorous skill mapping, and a commitment to excellence. We partner with organizations to identify, attract, and secure top-tier talent, ensuring that every placement aligns perfectly with business goals and cultural fit. For job seekers, we provide guidance and opportunities that not only match their skills but also align with their career aspirations.',
      'At SMARTANK, we believe in building lasting relationships and fostering an environment where both organizations and individuals can achieve their fullest potential. By creating a seamless connection between the needs of businesses and the ambitions of professionals, we are shaping a future where success is mutual and growth is shared.',
    ],
  },
  {
    id: 'performance-management-system',
    title: 'Performance Management System',
    cardTitle: ['Performance Management', 'System'],
    card: img('ser2.jpg'),
    image: img('service2.jpg'),
    summary:
      'At SMARTANK Business Solutions, we recognize that a robust Performance Management System (PMS) is vital for driving organizational success and employee development.',
    body: [
      'At SMARTANK Business Solutions, we recognize that a robust Performance Management System (PMS) is vital for driving organizational success and employee development. Our PMS service is designed to seamlessly align individual performance with broader business objectives, fostering a culture of continuous improvement and accountability.',
      'Our approach to performance management is comprehensive and data-driven. We work closely with organizations to develop tailored frameworks that accurately measure, evaluate, and enhance employee performance. Through clear goal setting, regular feedback, and constructive appraisals, we ensure that every team member is empowered to reach their full potential.',
      'By leveraging our expertise in performance management, SMARTANK helps organizations not only identify high performers but also provide the necessary support for underperforming employees to improve. Our system is designed to motivate, engage, and retain top talent, ultimately driving the organization towards sustained success.',
      "With SMARTANK's Performance Management System, organizations can create an environment where excellence is recognized, challenges are addressed proactively, and every employee feels valued and motivated to contribute to the company's growth. We advocate for the adoption of straightforward HR systems to monitor performance, enabling businesses to harness technology effectively and make informed decisions.",
    ],
  },
  {
    id: 'hr-business-partnering',
    title: 'HR Business Partnering & Consultation',
    cardTitle: ['HR Business Partnering &', 'Consultation'],
    card: img('ser3.jpg'),
    image: img('service3.jpg'),
    summary:
      'At SMARTANK Business Solutions, we offer comprehensive HR Business Partnering and Consultation services designed to integrate human resources seamlessly with your business strategy.',
    body: [
      'At SMARTANK Business Solutions, we offer comprehensive HR Business Partnering and Consultation services designed to integrate human resources seamlessly with your business strategy. Our approach focuses on aligning HR practices with organizational goals, ensuring that your people strategy drives business success.',
      'We provide expert guidance on all aspects of human resources, from strategic planning and talent management to employee relations and organizational development. By partnering with your leadership team, we help build a robust HR framework that supports both immediate needs and long-term objectives.',
      "With SMARTANK's HR Business Partnering & Consultation, you can navigate complex workforce challenges with confidence, make strategic decisions backed by industry insights, and cultivate a thriving, engaged workforce that is aligned with your company's vision.",
    ],
  },
  {
    id: 'hr-transformation-leadership',
    title: 'HR Transformation and Leadership Development',
    cardTitle: ['HR Transformation and Leadership Development'],
    card: img('ser4.jpg'),
    image: img('service4.jpg'),
    summary:
      'SMARTANK Business Solutions specializes in HR Transformation and Leadership Development, empowering organizations to evolve their human resources practices and cultivate strong, visionary leaders.',
    body: [
      "SMARTANK Business Solutions specializes in HR Transformation and Leadership Development, empowering organizations to evolve their human resources practices and cultivate strong, visionary leaders. Our HR Transformation services are designed to modernize and optimize HR processes, ensuring they are aligned with your business's strategic goals and prepared to meet the challenges of a rapidly changing workplace.",
      "Through our Leadership Development programs, we identify and nurture high-potential talent, equipping them with the skills and insights necessary to lead with confidence and drive organizational success. We focus on developing leadership capabilities that resonate with your company's culture, values, and vision.",
      'At SMARTANK, we believe that effective leadership is the cornerstone of a thriving organization. Our tailored solutions ensure that your HR practices are not just efficient but also transformative, and that your leaders are prepared to steer the company towards sustained growth and innovation. We have curated and designed impactful Master Coaching training programs for all departments of your organization, including top executives, adding significant value to the business and promoting growth.',
      "We also offer internationally recognized corporate training programs designed to enhance your team's performance, expand their knowledge, and empower them to excel in their roles.",
    ],
  },
];

/*
 * Function and seniority are worked out from the job title so the team can add
 * a role with just job(title, summary, locations). To override, pass a 4th
 * argument, e.g. job('Head of Growth', '…', ['India'], { func: 'Sales & Marketing', level: 'Head / Director' }).
 */
function classifyJob(title) {
  const t = title.toLowerCase();
  const func =
    /finance|cfo/.test(t) ? 'Finance'
    : /human resources|hr |chro|^hr/.test(t) ? 'Human Resources'
    : /sales|marketing|cmo|retail/.test(t) ? 'Sales & Marketing'
    : /erp|software|\bit\b|cto|technology/.test(t) ? 'IT & Technology'
    : /procurement|logistics|supply/.test(t) ? 'Supply Chain & Procurement'
    : /operations|packaging|project|manufactur/.test(t) ? 'Operations & Manufacturing'
    : /assistant/.test(t) ? 'Executive Office'
    : /ceo|chief executive/.test(t) ? 'General Management'
    : 'Other';
  const level =
    /chief|\(c[a-z]o\)/.test(t) ? 'C-Suite'
    : /vice president/.test(t) ? 'Vice President'
    : /head|general manager/.test(t) ? 'Head / Director'
    : /manager|lead/.test(t) ? 'Manager'
    : 'Specialist / Executive';
  return { func, level };
}
const job = (title, description, locations, meta = {}) => ({ title, description, locations, ...classifyJob(title), ...meta });

/** Openings shown on the Home page "Current Openings" panel. */
export const HOME_JOBS = [
  job('Chief Executive Officer (CEO)', 'Lead the organization, define strategic vision, and drive overall growth.', ['India', 'Singapore', 'UAE']),
  job(
    'Chief Financial Officer (CFO)',
    'Manage financial planning, reporting, and risk management while driving profitability.',
    ['India', 'Africa', 'UAE', 'United Kingdom'],
  ),
];

/** Full list on /jobs-open (same order as the live site). */
export const JOBS = [
  job('Head of Sales and Marketing (Modern Trade – Beverages / FMCG)', 'Manage Sales & Marketing strategy for FMCG / Beverages unit', ['Africa', 'UAE']),
  job('Vice President of Finance', 'Lead financial planning and analysis, manage budgeting processes, and ensure fiscal responsibility while supporting strategic business decisions.', ['India', 'Africa', 'UAE', 'Singapore', 'United Kingdom']),
  job('Head of Logistics', 'Lead and oversee end-to-end logistics operations, supply chain management, and strategic planning to ensure efficient, cost-effective delivery and distribution across all channels.', ['India', 'Africa', 'UAE']),
  job('Head of Procurement (Manufacturing Unit)', 'Lead and oversee end-to-end procurement operations, supply chain management, and strategic planning to ensure efficient, cost-effective purchase.', ['Africa', 'UAE']),
  job('Head of Procurement (Manufacturing Unit)', 'Lead and oversee end-to-end procurement operations, supply chain management, and strategic planning to ensure efficient, cost-effective purchase of raw materials, equipment, and services aligned with production goals.', ['Africa', 'UAE']),
  job('Retail Head (Petroleum OMC)', 'Lead and drive nationwide fuel retail operations, oversee network expansion, ensure compliance, enhance customer experience, and implement strategic initiatives to maximize volume, profitability, and brand visibility across all retail outlets.', ['Africa', 'UAE']),
  job('ERP Developer (Implementation Specialist)', 'Design, customize, and implement ERP solutions tailored to business needs; collaborate with cross-functional teams to streamline processes, ensure data integration, provide technical support, and drive successful end-to-end ERP deployment.', ['Africa', 'UAE', 'India']),
  job('HR Generalist (India, UAE & Africa)', 'Manage end-to-end HR operations across India, UAE, and Africa; handle recruitment, employee relations, compliance, and performance management; support regional HR initiatives and report directly to the Executive Director.', ['Africa', 'UAE', 'India']),
  job('General Manager – Packaging Unit', 'Oversee end-to-end production of labels, corrugated boxes, tapes, and packaging materials; manage plant operations, optimize production efficiency, ensure quality control, and drive cost-effective manufacturing while leading cross-functional teams for continuous improvement.', ['Africa', 'UAE']),
  job('Glass Project Manager (Bottles & Glassware Manufacturing Unit)', 'Lead and manage end-to-end project execution for glass bottle and glassware manufacturing; oversee planning, installation, and commissioning of machinery, coordinate with cross-functional teams, ensure timelines, quality, and cost-efficiency across all phases of the project.', ['Africa', 'UAE']),
  job('Executive Assistant to M.D. (International Assignment)', 'Work closely with the Managing Director to manage strategic initiatives, business planning, communication, and high-level coordination; support decision-making with research and analysis. Candidates from IIT, IIM, ISB, or similar institutes preferred for this international role.', ['Africa', 'UAE', 'India']),
  job('Head of Finance', 'Lead and oversee the company’s financial strategy, planning, budgeting, and reporting; ensure regulatory compliance, manage risk, optimize cash flow, and provide financial insights to support strategic decision-making and sustainable business growth.', ['Africa', 'UAE', 'India']),
  job('Head of Operations (Beverage Industry)', 'Oversee end-to-end manufacturing, supply chain, and distribution operations; ensure production efficiency, quality control, and cost optimization; drive process improvements and cross-functional coordination to achieve business objectives in the beverage sector.', ['Africa', 'UAE']),
  ...HOME_JOBS,
  job('Chief Marketing Officer (CMO)', 'Develop and execute marketing strategies to enhance brand presence and market share.', ['India', 'Africa']),
  job('Chief Technology Officer (CTO)', 'Drive technological innovation and oversee IT strategy and development.', ['Africa']),
  job('Chief Human Resources Officer (CHRO)', 'Lead HR strategy, talent acquisition, and organizational development initiatives.', ['India', 'Africa', 'UAE']),
  job('Head of Sales', 'Drive sales strategy, manage client relationships, and achieve revenue targets', ['India', 'Africa']),
  job('Head of Human Resources', 'Lead HR initiatives, talent management, and organizational development efforts.', ['India', 'Africa', 'Singapore']),
  job('Head of Finance', 'Manage financial planning, budgeting, and reporting to support organizational goals.', ['India', 'Africa', 'Singapore']),
  job('Head of IT', 'Direct IT strategy, infrastructure management, and technology innovation.', ['India', 'Africa']),
  job('Head of Procurement', 'Lead procurement strategies and manage supplier relationships to ensure cost-effective sourcing of materials and services.', ['India']),
  job('Software Development Lead', 'Guide software development projects, manage coding standards, and oversee the team in delivering high-quality software solutions.', ['India', 'Singapore']),
  job('IT Support Specialist', 'Provide technical support to end-users, troubleshoot hardware and software issues, and assist in maintaining IT equipment and systems.', ['India', 'Singapore', 'Africa']),
  job('Vice President of Operations', 'Oversee daily operations, implement strategic initiatives, and drive efficiency across all business functions to achieve organizational goals.', ['India', 'Africa']),
  job('Vice President of Finance', 'Lead financial planning and analysis, manage budgeting processes, and ensure fiscal responsibility while supporting strategic business decisions.', ['India', 'Africa', 'UAE', 'Singapore', 'United Kingdom']),
  job('ERP Project Manager', 'Lead end-to-end ERP implementation projects, manage timelines and resources, and ensure alignment with business objectives while overseeing cross-functional teams.', ['India', 'Africa', 'UAE']),
  job('Executive Assistant to the CEO', "Provide high-level administrative support to the CEO, manage the executive's calendar, coordinate meetings, and prepare reports and presentations. Act as a liaison between the CEO and internal/external stakeholders, ensuring efficient communication and project management.", ['India', 'Africa', 'UAE']),
];

/** Openings inside SMARTANK itself, shown on /career. */
export const CAREER_JOBS = [
  job('HR Interns, Part Time (3-6 months)', '', ['India']),
  job('Sales & Marketing - Management Trainee', '', ['India', 'Singapore', 'UK']),
  job('Digital Media & Web Development Specialist', '', ['India']),
  job('Executive Search Consultant', '', ['India']),
  job('Senior Executive Recruiter', '', ['India']),
];

export const JOBS_INTRO =
  'Explore exciting career opportunities with leading organizations through SMARTANK Business Solutions. We connect talented professionals with our esteemed clients, offering roles that match your skills and aspirations. Apply now to take the next step in your career';

// TODO: replace with the exact paragraphs from the live Careers page if you want them word-for-word.
export const CAREER_INTRO = [
  'At SMARTANK Business Solutions, we are always looking for driven people who want to shape how organisations find, grow and lead their talent.',
  'Join a team that combines executive search, performance management and HR consulting expertise to deliver measurable results for clients across India, Singapore, Europe, Africa and the UAE.',
];
export const CAREER_WHY = [
  { title: 'Innovative Environment', text: 'Work in a forward-thinking company with a culture that fosters creativity and growth.' },
  { title: 'Career Development', text: 'Benefit from continuous learning opportunities and professional advancement.' },
  { title: 'Impactful Work', text: 'Contribute to shaping the future of top executive talent and high-performing organizations.' },
  { title: 'Supportive Team:', text: 'Join a team of passionate experts who value collaboration and mentorship.' },
];
export const CAREER_OUTRO = 'Ready to take the next step? Send your resume to jobs@smartankbiz.com or use the form below.';

// TODO: replace with the exact paragraph from the live Contact page if you want it word-for-word.
export const CONTACT_INTRO =
  'Whether you are looking to hire exceptional leaders, strengthen your HR practices or explore your next career move, our team is ready to help. Reach out and we will get back to you shortly.';

export const ABOUT_INTRO = [
  'At SMARTANK, we aim to revolutionize traditional Shared Services & Talent Management methods by leveraging cutting-edge technology and AI tools.',
  "With a team of seasoned professionals boasting over 20 years of practical expertise across various domains, we are equipped to meet all our clients' business needs and deliver the best solutions.",
  'SMARTANK offers a 360-degree approach to cater to all areas of strategy, performance, leadership development, and HR partnering, ensuring comprehensive support for our clients.',
  'Our approach is centred on delivering measurable results by optimizing workforce strategies, improving organizational efficiency, and driving sustainable growth. With a comprehensive suite of services tailored to meet the evolving needs of businesses, we are committed to fostering long-term partnerships that focus on success and innovation.',
  'Our expert team leverages a combination of industry insight and cutting-edge technology to provide strategic HR solutions that align with your business objectives. Whether you are looking for recruitment, talent acquisition, or performance optimization, SMARTANK is your go-to partner for sustainable business growth.',
  'Let us streamline your HR and performance needs today!',
];

export const ABOUT_FEATURES = [
  {
    icon: img('about-page-icon1.jpg'),
    title: 'Master Coaching Solutions',
    text: 'SMARTANK empowers senior leaders with strategic insights to drive impactful growth, optimize teams, and achieve sustained success.',
  },
  {
    icon: img('about-page-icon2.png'),
    title: 'Human Capital Enhancement',
    text: 'SMARTANK empowers talent to achieve growth-aligned goals, fostering agility and performance excellence.',
  },
];

export const VISION =
  'To Transform businesses through innovative strategic solutions & cultivate exceptional leaders in every organisation';
export const MISSION =
  'Our Mission is to differentiate ourselves in the market by leveraging our extensive real-life experiences to revolutionize businesses.';

export const LEADERSHIP_INTRO =
  'At SMARTANK Business Solutions, our leadership team is the cornerstone of our success. Guided by a collective vision and a commitment to excellence, our leaders bring a wealth of experience and expertise to drive our mission forward.';

export const LEADERSHIP_BLOCKS = [
  {
    title: 'Visionary Leadership',
    text: 'Our leadership team is composed of seasoned professionals with a deep understanding of the consultancy and HR landscape. With diverse backgrounds and a shared passion for innovation, they lead by example, fostering a culture of collaboration and growth.',
  },
  {
    title: 'Strategic Expertise',
    text: "Each member of our leadership team plays a crucial role in shaping our strategic direction. Their insights and decision-making skills are instrumental in delivering outstanding results for our clients and driving the company's success.",
  },
  {
    title: 'Commitment to Excellence',
    text: 'Our leaders are dedicated to maintaining the highest standards of professionalism and integrity. They are committed to nurturing talent, enhancing client relationships, and continuously improving our services to meet the evolving needs of the market.',
  },
  {
    title: 'Driving Innovation',
    text: 'Innovation is at the heart of what we do. Our leadership team is constantly exploring new ways to enhance our offerings and stay ahead of industry trends, ensuring that SMARTANK Business Solutions remains a leader in executive search and HR services.',
  },
  {
    title: 'A Culture of Collaboration',
    text: "Collaboration and teamwork are fundamental to our approach. Our leaders foster a supportive environment where ideas are shared, and every team member's contributions are valued, driving collective success.",
  },
];

// Placeholder blog posts (the live site links out to LinkedIn) – replace with real posts.
export const BLOGS = [
  {
    slug: 'skill-mapping-executive-search',
    title: 'Why Skill Mapping Is the Secret Weapon of Executive Search',
    date: '2026-09-18',
    author: 'SMARTANK Editorial Team',
    category: 'Executive Search',
    image: img('ser1.jpg'),
    alt: 'Executive search consultant at work',
    excerpt:
      'Great leadership hires start long before the first interview. Here is how structured skill mapping helps organisations find leaders who fit both the role and the culture.',
    content: [
      'Placeholder article. Replace this text with the full blog post.',
      'Executive hiring decisions carry outsized impact. A structured skill map – covering technical depth, leadership behaviours and cultural alignment – gives hiring teams a shared language for what "great" looks like before the search begins.',
      'At SMARTANK, skill mapping sits at the heart of every search mandate, helping clients compare candidates objectively and reduce the risk of a costly mis-hire.',
    ],
  },
  {
    slug: 'modern-performance-management',
    title: 'Five Signs Your Performance Management System Needs a Refresh',
    date: '2026-08-27',
    author: 'SMARTANK Editorial Team',
    category: 'Performance Management',
    image: img('ser2.jpg'),
    alt: 'Team reviewing performance goals',
    excerpt:
      'Annual appraisals that nobody looks forward to? Goals that drift away from strategy? These warning signs suggest it is time to rethink how you manage performance.',
    content: [
      'Placeholder article. Replace this text with the full blog post.',
      'A modern performance management system links individual goals to business objectives, encourages regular feedback, and uses simple tools that managers actually adopt.',
      'If your current process feels like paperwork rather than a growth conversation, it may be time for a tailor-made approach.',
    ],
  },
  {
    slug: 'hr-business-partner-role',
    title: 'The Evolving Role of the HR Business Partner',
    date: '2026-07-30',
    author: 'SMARTANK Editorial Team',
    category: 'HR Strategy',
    image: img('ser3.jpg'),
    alt: 'HR business partner meeting leadership',
    excerpt:
      'HR business partners are moving from policy guardians to strategic advisors. We explore what that shift means for leadership teams and how to make it work.',
    content: [
      'Placeholder article. Replace this text with the full blog post.',
      "Today's HR business partner is expected to understand the commercial drivers of the business as deeply as the people agenda.",
      'Organisations that embed HR in strategic planning are better placed to navigate change, retain talent and build leadership pipelines.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Service detail pages – DRAFT copy for approval                     */
/*  Structure per suggestions doc section 5/6: business challenge,     */
/*  what SMARTANK delivers, how we work, expected outcomes, CTA.       */
/* ------------------------------------------------------------------ */
export const SERVICE_DETAILS = {
  'executive-talent-acquisition': {
    icon: 'search',
    image: '/images/site/team-meeting-sofa.jpg',
    imageAlt: 'SMARTANK consultants discussing a leadership shortlist',
    tagline: 'The right leader, aligned to your business — found through a structured search.',
    challenge:
      'A wrong senior hire costs far more than a delayed one. Organisations need leaders who fit both the role and the culture, often in markets where the best candidates are not actively looking.',
    delivers: [
      'Role and success-profile alignment with your leadership team',
      'Talent mapping across your industry and target markets',
      'Structured candidate assessment against the success profile',
      'A focused shortlist with clear, evidence-based recommendations',
      'Interview coordination and offer support through to acceptance',
    ],
    process: [
      { title: 'Align', text: 'Define the role, its business outcomes and the success profile.' },
      { title: 'Map', text: 'Identify and approach relevant talent in the market.' },
      { title: 'Assess', text: 'Evaluate candidates against the agreed success profile.' },
      { title: 'Shortlist', text: 'Present a focused shortlist with our recommendations.' },
      { title: 'Close', text: 'Coordinate interviews and support the offer to acceptance.' },
    ],
    outcomes: ['Leaders who fit the role and the culture', 'Lower risk of a costly mis-hire', 'A faster, better-informed hiring decision'],
  },
  'performance-management-system': {
    icon: 'chart',
    image: '/images/site/document-review.jpg',
    imageAlt: 'A manager and consultant reviewing performance goals together',
    tagline: 'A structured performance framework that connects business priorities to everyday accountability.',
    challenge:
      'Without a clear framework, goals drift away from strategy, reviews become paperwork and high performers go unrecognised while performance gaps go unaddressed.',
    delivers: [
      'A performance framework built around your business priorities',
      'Goal setting that cascades from company priorities to teams and individuals',
      'Clear accountability and a regular review rhythm',
      'Simple tools and HR systems your managers will actually use',
      'Guidance for supporting under-performance and recognising excellence',
    ],
    process: [
      { title: 'Priorities', text: 'Start from the business priorities for the year.' },
      { title: 'Goals', text: 'Translate them into team and individual goals.' },
      { title: 'Accountability', text: 'Agree ownership, measures and expectations.' },
      { title: 'Reviews', text: 'Run regular, structured performance conversations.' },
      { title: 'Outcomes', text: 'Track measurable results and refine the system.' },
    ],
    outcomes: ['Goals aligned with strategy', 'Visible accountability at every level', 'Measurable, reviewable results'],
    // TO CONFIRM: the suggestions doc mentions the approach is informed by Scaling Up and
    // Rockefeller Habits principles – add that wording here only once approved.
  },
  'hr-business-partnering': {
    icon: 'team',
    image: '/images/site/team-discussion.jpg',
    imageAlt: 'An HR business partner working with a leadership team',
    tagline: 'Strategic HR support that sits alongside your leadership team and your business priorities.',
    challenge:
      'As businesses grow, HR often stays reactive. Leaders need a partner who understands the commercial agenda and can plan the workforce, leadership and organisation to support it.',
    // TO CONFIRM: final list of deliverables (suggestions doc asks to review it).
    delivers: [
      'Strategic HR support aligned with business priorities',
      'Workforce planning for current and future needs',
      'Advice on leadership needs and organisation design',
      'Talent management and employee-relations guidance',
      'An HR framework that supports immediate and long-term goals',
    ],
    process: [
      { title: 'Understand', text: 'Learn the business context, priorities and constraints.' },
      { title: 'Diagnose', text: 'Identify the people issues behind business challenges.' },
      { title: 'Plan', text: 'Agree a practical HR roadmap with leadership.' },
      { title: 'Partner', text: 'Work alongside your team to deliver it and review progress.' },
    ],
    outcomes: ['A people strategy that supports the business plan', 'Better-informed workforce decisions', 'A more effective, engaged organisation'],
  },
  'hr-transformation-leadership': {
    icon: 'leaders',
    image: '/images/site/advisors-conversation.jpg',
    imageAlt: 'Two leaders in a coaching conversation',
    tagline: 'Modern HR processes and stronger leaders, built for how your organisation needs to grow.',
    challenge:
      'Outdated HR processes and under-prepared managers slow organisations down. Growth needs efficient people processes and leaders who can steer teams through change.',
    delivers: [
      'Review and improvement of core HR processes',
      'Leadership capability building for high-potential talent',
      'Manager development programmes',
      'Master Coaching programmes for departments and senior executives',
      'Corporate training programmes to build team capability',
    ],
    process: [
      { title: 'Assess', text: 'Review current HR processes and leadership capability.' },
      { title: 'Design', text: 'Shape improvements and development programmes.' },
      { title: 'Develop', text: 'Deliver coaching, training and process changes.' },
      { title: 'Sustain', text: 'Embed new ways of working and measure progress.' },
    ],
    outcomes: ['Efficient, business-aligned HR processes', 'Managers ready to lead', 'A leadership pipeline for growth'],
  },
};

/* ------------------------------------------------------------------ */
/*  About SMARTANK – DRAFT for approval                                */
/* ------------------------------------------------------------------ */
export const ABOUT_PAGE = {
  // Draft intro wording from the suggestions document, section 2.
  intro:
    'SMARTANK Business Solutions works at the intersection of people, leadership and business performance. We help organisations align talent decisions and people systems with business priorities—from hiring critical talent to building effective performance-management practices and leadership capability.',
  storyImage: '/images/site/team-at-work.webp',
  storyImageAlt: 'SMARTANK consultants working together at a laptop',
  // Values suggested in the document ("to explore") – confirm before launch.
  values: [
    { icon: 'lock', title: 'Integrity & Discretion', text: 'We handle people, data and decisions with care and confidentiality.' },
    { icon: 'target', title: 'Business Impact', text: 'We measure our work by the outcomes it creates for the business.' },
    { icon: 'search', title: 'Rigour', text: 'Structured methods and evidence behind every recommendation.' },
    { icon: 'team', title: 'Partnership', text: 'We work alongside leaders as an extension of their team.' },
    { icon: 'growth', title: 'Continuous Improvement', text: 'We keep learning, refining and raising the standard.' },
  ],
  // Method taken from the founder profile: understand context, find root causes, turn priorities into actions.
  method: [
    { title: 'Understand the business', text: 'Start from your context, priorities and constraints.' },
    { title: 'Find the root causes', text: 'Look past symptoms to the people issues that matter.' },
    { title: 'Turn priorities into actions', text: 'Agree clear, practical steps with owners and measures.' },
    { title: 'Review and refine', text: 'Track outcomes and adjust until the results hold.' },
  ],
  why: 'SMARTANK focuses on business alignment, structured delivery, confidentiality and measurable outcomes. Case studies and performance figures will be added once approved.',
};

/* ------------------------------------------------------------------ */
/*  Leadership – from "CEO_Smartank Website_Profile"                   */
/*  TO CONFIRM before launch: wording of qualifications, coaching      */
/*  certifications and experience claims (editorial note in the doc);  */
/*  founder portrait; LinkedIn URL (left out until confirmed).         */
/* ------------------------------------------------------------------ */
export const LEADERS = [
  {
    name: 'Dr. Geetraj Singh',
    title: 'Founder & CEO, SMARTANK Business Solutions',
    photo: null, // add '/images/site/geetraj-singh.jpg' once a professional portrait is supplied
    linkedin: null,
    short:
      'Dr. Geetraj Singh is the Founder and CEO of SMARTANK Business Solutions. With 22+ years of corporate experience and exposure across 30+ countries, he works across strategic HR, talent acquisition, performance management, leadership development and organisational effectiveness. He holds a PhD in Business Psychology from the University of Oxford, UK, and an MBA in Organisation Development and Human Resources Management.',
    bio: [
      'Dr. Geetraj Singh is the Founder and CEO of SMARTANK Business Solutions, where he works with organisations to strengthen talent, leadership and business performance. With more than 22 years of corporate experience and professional exposure across more than 30 countries, he brings a cross-functional, international perspective to management consulting, corporate culture and organisational development.',
      'He holds a PhD in Business Psychology from the University of Oxford, UK, and an MBA in Organisation Development and Human Resources Management. His areas of work include strategic HR business partnering, talent acquisition, performance management, talent assessment, team profiling, corporate training and leadership coaching.',
      'Geetraj’s approach is practical and evidence-led. He focuses on understanding the business context, identifying root causes and helping leaders translate priorities into clear actions. His work draws on structured approaches to people management, leadership, communication, emotional intelligence and performance execution.',
      'Through SMARTANK, he aims to help organisations build capable teams, strengthen accountability and align people practices with business goals. He believes in continuous learning, thoughtful use of technology and practical solutions that support sustainable organisational progress.',
    ],
    expertise: [
      'Strategic HR Business Partnering & Management Consulting',
      'Executive Talent Acquisition & Recruitment',
      'Performance Management Systems',
      'Talent Assessment & Team Profiling',
      'Leadership Development, Corporate Training & Master Coaching',
      'Organisational Development & Corporate Culture',
      'Start-up Business Planning & Growth Strategy',
    ],
    credentials: [
      'PhD in Business Psychology — University of Oxford, United Kingdom',
      'MBA in Organisation Development & Human Resources Management',
      'Certified Master Coach — Emotional Intelligence',
      'Certified Master Coach — Myers-Briggs Type Indicator (MBTI)',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Online Services – from "Online Services - Website - Smartank"      */
/*  Buttons open a booking request; no payment gateway is connected.   */
/* ------------------------------------------------------------------ */
export const ONLINE_SERVICES = [
  {
    id: 'resume-writing',
    title: 'Professional Resume Writing',
    price: '₹1,999',
    icon: 'file',
    text: 'A professionally written resume designed to highlight your qualifications, experience, skills, and achievements. The service helps job seekers present their professional profile effectively and create a strong first impression with potential employers.',
    button: 'Purchase Resume Writing Service',
  },
  {
    id: 'profiling-career-assistance',
    title: 'Professional Profiling & Career Assistance',
    price: '₹6,999',
    icon: 'user',
    text: 'Receive personalised consultation with senior talent management professionals to evaluate your professional profile, identify career opportunities, and improve your career positioning. The service includes career assistance and guidance for a period of 90 days.',
    button: 'Book Profiling & Career Assistance',
  },
  {
    id: 'mbti',
    title: 'MBTI — Professional Personality Type Indicator',
    price: '₹8,999',
    icon: 'search',
    text: 'Gain deeper insight into your personality preferences, communication style, decision-making approach, and workplace behaviour through the Myers-Briggs Type Indicator (MBTI). This service supports greater self-awareness and informed personal and professional development.',
    button: 'Book MBTI Assessment',
  },
  {
    id: 'overseas-career',
    title: 'Overseas Job Application & Professional Profiling',
    price: '₹9,999',
    icon: 'globe',
    text: 'Get personalised guidance on preparing your professional profile for international employment opportunities. The service covers overseas job application guidance, profile positioning, and career assistance over 90 days, helping you navigate the process of pursuing opportunities in global markets.',
    button: 'Book Overseas Career Consultation',
  },
  {
    id: 'student-counselling',
    title: 'Career Counselling for Students & Postgraduates',
    price: '₹999',
    icon: 'growth',
    text: 'Personalised career counselling for students pursuing or completing postgraduate education. Explore suitable career paths, understand professional opportunities, identify strengths and interests, and gain clarity on the next steps towards building a successful career.',
    button: 'Book Student Career Counselling',
  },
  {
    id: 'executive-coaching',
    title: 'Executive Master Coaching Consultation',
    price: '₹25,000',
    priceNote: 'per executive',
    icon: 'leaders',
    text: 'A premium, personalised coaching engagement designed for senior professionals and executives seeking to strengthen leadership effectiveness, strategic thinking, decision-making, and professional impact. The package includes two individual coaching sessions of 30 minutes each.',
    button: 'Book Executive Master Coaching',
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Contact – suggestions doc section 11                               */
/*  TO CONFIRM: public phone, email, WhatsApp and LinkedIn details.    */
/*  Regions listed are regions served, not physical offices.           */
/* ------------------------------------------------------------------ */
export const CONTACT_PAGE = {
  title: 'Let’s Talk About Your Business Priorities.',
  text: 'Tell us about your organisation, your people challenges and the outcomes you want to achieve. We will direct your enquiry to the appropriate SMARTANK specialist.',
  image: '/images/site/office-desk.jpg',
};

/* DRAFT – candidate privacy wording; have it reviewed before launch. */
export const CANDIDATE_PRIVACY_NOTE =
  'Your CV and details are used only to assess your fit for current and future roles, are shared with a client only with your consent, and are never sold. See our Privacy Policy.';

/* DRAFT privacy policy – must be reviewed (ideally by a legal adviser) before launch. */
export const PRIVACY_POLICY = {
  updated: 'Draft – pending review',
  sections: [
    {
      title: 'Who we are',
      text: 'SMARTANK Business Solutions ("SMARTANK", "we") provides executive search and HR consulting services. This policy explains how we handle personal information collected through this website.',
    },
    {
      title: 'What we collect',
      text: 'Information you give us through our forms: your name, contact details, organisation, the service you are interested in, your message and, for job applications, your CV.',
    },
    {
      title: 'How we use it',
      text: 'To respond to enquiries, arrange callbacks and bookings, assess candidates for roles, and share a candidate’s profile with a client only with the candidate’s consent.',
    },
    {
      title: 'How long we keep it',
      text: 'Only as long as needed for the purpose it was collected, or as required by law. You can ask us to delete your information at any time.',
    },
    {
      title: 'Cookies',
      text: 'This website does not use advertising or tracking cookies. If analytics are added in future, this section and a cookie notice will be updated first.',
    },
    {
      title: 'Your rights and contact',
      text: 'You can ask to see, correct or delete your personal information by contacting us through the Contact page.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  SEO – page titles and meta descriptions (clean URLs).             */
/* ------------------------------------------------------------------ */
export const PAGE_META = {
  '/': ['SMARTANK | Executive Search & Strategic HR Consulting', 'SMARTANK partners with organisations to strengthen talent, leadership and performance through strategic HR solutions aligned with business priorities.'],
  '/about': ['About SMARTANK | Strategic HR Consultants', 'Who SMARTANK is, what we help businesses achieve, our values and how we work.'],
  '/leadership-team': ['Leadership Team | SMARTANK', 'Meet the leadership behind SMARTANK Business Solutions.'],
  '/services': ['Services | SMARTANK', 'Executive talent acquisition, performance management systems, HR business partnering and leadership development from SMARTANK.'],
  '/online-services': ['Online Career Services | SMARTANK', 'Resume writing, career profiling, MBTI assessment, overseas career guidance, student counselling and executive coaching from SMARTANK.'],
  '/jobs-open': ['Current Openings | SMARTANK', 'Leadership and specialist roles SMARTANK is hiring for on behalf of clients across India, Singapore, UAE, UK and Africa.'],
  '/career': ['Careers at SMARTANK', 'Work at SMARTANK: our culture, values and internal opportunities.'],
  '/insights': ['Insights | SMARTANK', 'Perspectives on executive hiring, talent assessment, performance management and leadership.'],
  '/contact': ['Contact SMARTANK', 'Tell us about your organisation and people challenges and request a callback from a SMARTANK specialist.'],
  '/privacy-policy': ['Privacy Policy | SMARTANK', 'How SMARTANK handles personal information collected through this website.'],
};
