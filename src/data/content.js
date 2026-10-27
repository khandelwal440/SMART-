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

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'About SmarTank', to: '/about' },
      { label: 'Leadership Team', to: '/leadership-team' },
      { divider: true },
      { label: 'Corporate Profile', href: CONTACT.portfolioPdf, external: true },
    ],
  },
  { label: 'What We Do', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Global Presence', to: '/#global-presence' },
  { label: 'Insights', to: '/blogs' },
  {
    label: 'Careers',
    to: '/career',
    children: [
      { label: 'Jobs Open', to: '/jobs-open' },
      { label: 'Join SmarTank', to: '/career' },
    ],
  },
];

/** Gold call-to-action button at the end of the header. */
export const NAV_CTA = { label: 'Let’s Talk', to: '/contact' };

export const FOOTER_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'What We Do', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/blogs' },
  { label: 'Jobs Open', to: '/jobs-open' },
  { label: 'Careers', to: '/career' },
  { label: 'Contact Us', to: '/contact' },
];

/* ------------------------------------------------------------------ */
/*  Home page (consultancy-style layout)                              */
/* ------------------------------------------------------------------ */
const photo = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const HERO = {
  titleLead: 'Building Better Businesses Through',
  titleAccent: 'Strategic Clarity.',
  subtitle: ['People. Performance. Growth.', 'Across Borders.'],
  // Free Unsplash stock photo – replace with your own photography if you have it.
  image: photo('photo-1480714378408-67cf0d13bc1b', 1920),
  pillars: ['Strategy', 'People', 'Systems', 'Leadership', 'Sustainable Growth'],
};

export const WHAT_WE_DO = {
  title: 'From People Strategies to Business Outcomes.',
  text: 'We partner with businesses to build high performing teams, world-class people systems and a culture of sustainable growth.',
  cards: [
    { icon: 'team', title: 'Strategic HR Business Partnership', text: 'Aligning people strategy with business goals.', to: '/services#hr-business-partnering' },
    { icon: 'search', title: 'Talent Acquisition', text: 'Right talent. Right fit. Lasting impact.', to: '/services#executive-talent-acquisition' },
    { icon: 'chart', title: 'Performance Management', text: 'Driving accountability and measurable results.', to: '/services#performance-management-system' },
    { icon: 'leaders', title: 'Leadership Development', text: 'Building leaders for today and tomorrow.', to: '/services#hr-transformation-leadership' },
  ],
};

export const INDUSTRIES = {
  title: 'Diverse Industries. Deeper Expertise.',
  text: 'We work with businesses across key industries, bringing practical solutions that create lasting impact.',
  // Free Unsplash stock photos – replace with your own if you have them.
  list: [
    {
      id: 'energy',
      name: 'Energy & Oil Marketing',
      image: photo('photo-1518709766631-a6a7f45921c3', 700),
      text: 'Leadership hiring and people systems for fuel retail, oil marketing and energy businesses.',
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      image: photo('photo-1601584115197-04ecc0da31d7', 700),
      text: 'Building operations, logistics and supply-chain teams that keep goods moving.',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      image: photo('photo-1513828583688-c52646db42da', 700),
      text: 'Plant leadership, performance frameworks and talent for manufacturing units.',
    },
    {
      id: 'construction',
      name: 'Construction & Infrastructure',
      image: photo('photo-1541888946425-d81bb19240f5', 700),
      text: 'Project and site leadership for construction and infrastructure organisations.',
    },
    {
      id: 'fmcg',
      name: 'FMCG, Retail & Trading',
      image: photo('photo-1604719312566-8912e9227c6a', 700),
      text: 'Sales, marketing and commercial leaders for FMCG, retail and trading companies.',
    },
  ],
};

export const GLOBAL_PRESENCE = {
  title: 'Local Understanding. Global Perspective.',
  text: 'We partner with businesses across key markets, bringing practical insights that create best practices.',
  // Map markers (lat/lon). Africa is placed at Nairobi as a representative point.
  markers: [
    { label: 'UK', lat: 51.5, lon: -0.1 },
    { label: 'UAE', lat: 25.2, lon: 55.3 },
    { label: 'India', lat: 19.1, lon: 72.9 },
    { label: 'Singapore', lat: 1.35, lon: 103.8 },
    { label: 'Africa', lat: -1.3, lon: 36.8 },
  ],
  // TODO: confirm these figures before launch – they come from the design mockup.
  stats: [
    { value: 5, suffix: '', label: 'Countries' },
    { value: 100, suffix: '+', label: 'Businesses Supported' },
    { value: 20, suffix: '+', label: 'Industries Covered' },
  ],
};

/*
 * PLACEHOLDERS – replace before launch.
 * Only list companies you have permission to name, and add their logo files
 * to /public/images/clients/ (set `logo` to the file path). Until then the
 * section shows neutral placeholder tiles.
 */
export const CLIENTS = [
  { name: 'Client 1', logo: null },
  { name: 'Client 2', logo: null },
  { name: 'Client 3', logo: null },
  { name: 'Client 4', logo: null },
  { name: 'Client 5', logo: null },
  { name: 'Client 6', logo: null },
];

/*
 * PLACEHOLDERS – sample quotes from the design mockup. Replace them with real,
 * approved client testimonials before the site goes live.
 */
export const TESTIMONIALS = [
  {
    quote: 'SMARTANK brought structure, clarity and accountability to our people processes. Their approach is practical, professional and highly effective.',
    role: 'HR Leader',
    company: 'Manufacturing Company',
  },
  {
    quote: 'The SMARTANK team understands business, not just HR. They have been a valuable partner in our growth journey.',
    role: 'Director',
    company: 'Logistics & Supply Chain Company',
  },
  {
    quote: 'Their deep industry knowledge and hands-on approach helped us strengthen our leadership pipeline and performance culture.',
    role: 'CHRO',
    company: 'Consumer Goods Company',
  },
];

export const CONNECT = {
  title: 'Let’s Build Something Better Together.',
  text: 'Whether you are looking to hire, build stronger teams, implement a performance system or need a strategic HR partner — we are here to help.',
  // Free Unsplash stock photo – replace with your own if you have it.
  image: photo('photo-1514565131-fce0801e5785', 1920),
};

export const HERO_SLIDES = [
  {
    title: 'Tailor made Performance Management System',
    subtitle: ['Strategic Solutions for Workforce Excellence'],
    image: img('hero_thumb3.png'),
    alt: 'SmarTank consultant',
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
      'At SmarTank Business Solutions, we are driven by a singular mission: to bridge the gap between organizations and job seekers, creating a complete ecosystem where talent and opportunity thrive together.',
    body: [
      'At SmarTank Business Solutions, we are driven by a singular mission: to bridge the gap between organizations and job seekers, creating a complete ecosystem where talent and opportunity thrive together. As a premier consultancy and executive search firm, we understand the evolving dynamics of the job market and the unique challenges faced by both employers and candidates.',
      'Our approach is rooted in deep industry insights, rigorous skill mapping, and a commitment to excellence. We partner with organizations to identify, attract, and secure top-tier talent, ensuring that every placement aligns perfectly with business goals and cultural fit. For job seekers, we provide guidance and opportunities that not only match their skills but also align with their career aspirations.',
      'At SmarTank, we believe in building lasting relationships and fostering an environment where both organizations and individuals can achieve their fullest potential. By creating a seamless connection between the needs of businesses and the ambitions of professionals, we are shaping a future where success is mutual and growth is shared.',
    ],
  },
  {
    id: 'performance-management-system',
    title: 'Performance Management System',
    cardTitle: ['Performance Management', 'System'],
    card: img('ser2.jpg'),
    image: img('service2.jpg'),
    summary:
      'At SmarTank Business Solutions, we recognize that a robust Performance Management System (PMS) is vital for driving organizational success and employee development.',
    body: [
      'At SmarTank Business Solutions, we recognize that a robust Performance Management System (PMS) is vital for driving organizational success and employee development. Our PMS service is designed to seamlessly align individual performance with broader business objectives, fostering a culture of continuous improvement and accountability.',
      'Our approach to performance management is comprehensive and data-driven. We work closely with organizations to develop tailored frameworks that accurately measure, evaluate, and enhance employee performance. Through clear goal setting, regular feedback, and constructive appraisals, we ensure that every team member is empowered to reach their full potential.',
      'By leveraging our expertise in performance management, SmarTank helps organizations not only identify high performers but also provide the necessary support for underperforming employees to improve. Our system is designed to motivate, engage, and retain top talent, ultimately driving the organization towards sustained success.',
      "With SmarTank's Performance Management System, organizations can create an environment where excellence is recognized, challenges are addressed proactively, and every employee feels valued and motivated to contribute to the company's growth. We advocate for the adoption of straightforward HR systems to monitor performance, enabling businesses to harness technology effectively and make informed decisions.",
    ],
  },
  {
    id: 'hr-business-partnering',
    title: 'HR Business Partnering & Consultation',
    cardTitle: ['HR Business Partnering &', 'Consultation'],
    card: img('ser3.jpg'),
    image: img('service3.jpg'),
    summary:
      'At SmarTank Business Solutions, we offer comprehensive HR Business Partnering and Consultation services designed to integrate human resources seamlessly with your business strategy.',
    body: [
      'At SmarTank Business Solutions, we offer comprehensive HR Business Partnering and Consultation services designed to integrate human resources seamlessly with your business strategy. Our approach focuses on aligning HR practices with organizational goals, ensuring that your people strategy drives business success.',
      'We provide expert guidance on all aspects of human resources, from strategic planning and talent management to employee relations and organizational development. By partnering with your leadership team, we help build a robust HR framework that supports both immediate needs and long-term objectives.',
      "With SmarTank's HR Business Partnering & Consultation, you can navigate complex workforce challenges with confidence, make strategic decisions backed by industry insights, and cultivate a thriving, engaged workforce that is aligned with your company's vision.",
    ],
  },
  {
    id: 'hr-transformation-leadership',
    title: 'HR Transformation and Leadership Development',
    cardTitle: ['HR Transformation and Leadership Development'],
    card: img('ser4.jpg'),
    image: img('service4.jpg'),
    summary:
      'SmarTank Business Solutions specializes in HR Transformation and Leadership Development, empowering organizations to evolve their human resources practices and cultivate strong, visionary leaders.',
    body: [
      "SmarTank Business Solutions specializes in HR Transformation and Leadership Development, empowering organizations to evolve their human resources practices and cultivate strong, visionary leaders. Our HR Transformation services are designed to modernize and optimize HR processes, ensuring they are aligned with your business's strategic goals and prepared to meet the challenges of a rapidly changing workplace.",
      "Through our Leadership Development programs, we identify and nurture high-potential talent, equipping them with the skills and insights necessary to lead with confidence and drive organizational success. We focus on developing leadership capabilities that resonate with your company's culture, values, and vision.",
      'At SmarTank, we believe that effective leadership is the cornerstone of a thriving organization. Our tailored solutions ensure that your HR practices are not just efficient but also transformative, and that your leaders are prepared to steer the company towards sustained growth and innovation. We have curated and designed impactful Master Coaching training programs for all departments of your organization, including top executives, adding significant value to the business and promoting growth.',
      "We also offer internationally recognized corporate training programs designed to enhance your team's performance, expand their knowledge, and empower them to excel in their roles.",
    ],
  },
];

const job = (title, description, locations) => ({ title, description, locations });

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

/** Openings inside SmarTank itself, shown on /career. */
export const CAREER_JOBS = [
  job('HR Interns, Part Time (3-6 months)', '', ['India']),
  job('Sales & Marketing - Management Trainee', '', ['India', 'Singapore', 'UK']),
  job('Digital Media & Web Development Specialist', '', ['India']),
  job('Executive Search Consultant', '', ['India']),
  job('Senior Executive Recruiter', '', ['India']),
];

export const JOBS_INTRO =
  'Explore exciting career opportunities with leading organizations through SmarTank Business Solutions. We connect talented professionals with our esteemed clients, offering roles that match your skills and aspirations. Apply now to take the next step in your career';

// TODO: replace with the exact paragraphs from the live Careers page if you want them word-for-word.
export const CAREER_INTRO = [
  'At SmarTank Business Solutions, we are always looking for driven people who want to shape how organisations find, grow and lead their talent.',
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
  'At SmarTank, we aim to revolutionize traditional Shared Services & Talent Management methods by leveraging cutting-edge technology and AI tools.',
  "With a team of seasoned professionals boasting over 20 years of practical expertise across various domains, we are equipped to meet all our clients' business needs and deliver the best solutions.",
  'SmarTank offers a 360-degree approach to cater to all areas of strategy, performance, leadership development, and HR partnering, ensuring comprehensive support for our clients.',
  'Our approach is centred on delivering measurable results by optimizing workforce strategies, improving organizational efficiency, and driving sustainable growth. With a comprehensive suite of services tailored to meet the evolving needs of businesses, we are committed to fostering long-term partnerships that focus on success and innovation.',
  'Our expert team leverages a combination of industry insight and cutting-edge technology to provide strategic HR solutions that align with your business objectives. Whether you are looking for recruitment, talent acquisition, or performance optimization, SmarTank is your go-to partner for sustainable business growth.',
  'Let us streamline your HR and performance needs today!',
];

export const ABOUT_FEATURES = [
  {
    icon: img('about-page-icon1.jpg'),
    title: 'Master Coaching Solutions',
    text: 'SmarTank empowers senior leaders with strategic insights to drive impactful growth, optimize teams, and achieve sustained success.',
  },
  {
    icon: img('about-page-icon2.png'),
    title: 'Human Capital Enhancement',
    text: 'SmarTank empowers talent to achieve growth-aligned goals, fostering agility and performance excellence.',
  },
];

export const VISION =
  'To Transform businesses through innovative strategic solutions & cultivate exceptional leaders in every organisation';
export const MISSION =
  'Our Mission is to differentiate ourselves in the market by leveraging our extensive real-life experiences to revolutionize businesses.';

export const LEADERSHIP_INTRO =
  'At SmarTank Business Solutions, our leadership team is the cornerstone of our success. Guided by a collective vision and a commitment to excellence, our leaders bring a wealth of experience and expertise to drive our mission forward.';

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
    text: 'Innovation is at the heart of what we do. Our leadership team is constantly exploring new ways to enhance our offerings and stay ahead of industry trends, ensuring that SmarTank Business Solutions remains a leader in executive search and HR services.',
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
    author: 'SmarTank Editorial Team',
    category: 'Executive Search',
    image: img('ser1.jpg'),
    alt: 'Executive search consultant at work',
    excerpt:
      'Great leadership hires start long before the first interview. Here is how structured skill mapping helps organisations find leaders who fit both the role and the culture.',
    content: [
      'Placeholder article. Replace this text with the full blog post.',
      'Executive hiring decisions carry outsized impact. A structured skill map – covering technical depth, leadership behaviours and cultural alignment – gives hiring teams a shared language for what "great" looks like before the search begins.',
      'At SmarTank, skill mapping sits at the heart of every search mandate, helping clients compare candidates objectively and reduce the risk of a costly mis-hire.',
    ],
  },
  {
    slug: 'modern-performance-management',
    title: 'Five Signs Your Performance Management System Needs a Refresh',
    date: '2026-08-27',
    author: 'SmarTank Editorial Team',
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
    author: 'SmarTank Editorial Team',
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
