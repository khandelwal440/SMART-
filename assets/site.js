/* =====================================================================
   CONFIG – set FORM_ENDPOINT to a Formspree / Getform / your own API URL
   to receive call-back requests directly. Left empty, the form opens the
   visitor's email app with the request pre-filled to CONTACT_EMAIL.
   ===================================================================== */
const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'jobs@smartankbiz.com';

/* ---------- DATA (from smartankbiz.com) ---------- */
const IMG='https://smartankbiz.com/images/';
const SERVICES=[
 {t:'Executive Talent Acquisition',short:'Executive Search',img:IMG+'ser1.jpg',
  s:'At SmarTank Business Solutions, we are driven by a singular mission: to bridge the gap between organizations and job seekers, creating a complete ecosystem where talent and opportunity thrive together.',
  d:['At SmarTank Business Solutions, we are driven by a singular mission: to bridge the gap between organizations and job seekers, creating a complete ecosystem where talent and opportunity thrive together. As a premier consultancy and executive search firm, we understand the evolving dynamics of the job market and the unique challenges faced by both employers and candidates.',
     'Our approach is rooted in deep industry insights, rigorous skill mapping, and a commitment to excellence. We partner with organizations to identify, attract, and secure top-tier talent, ensuring that every placement aligns perfectly with business goals and cultural fit. For job seekers, we provide guidance and opportunities that not only match their skills but also align with their career aspirations.',
     'At SmarTank, we believe in building lasting relationships and fostering an environment where both organizations and individuals can achieve their fullest potential. By creating a seamless connection between the needs of businesses and the ambitions of professionals, we are shaping a future where success is mutual and growth is shared.']},
 {t:'Performance Management System',short:'Performance',img:IMG+'ser2.jpg',
  s:'At SmarTank Business Solutions, we recognize that a robust Performance Management System (PMS) is vital for driving organizational success and employee development.',
  d:['At SmarTank Business Solutions, we recognize that a robust Performance Management System (PMS) is vital for driving organizational success and employee development. Our PMS service is designed to seamlessly align individual performance with broader business objectives, fostering a culture of continuous improvement and accountability.',
     'Our approach to performance management is comprehensive and data-driven. We work closely with organizations to develop tailored frameworks that accurately measure, evaluate, and enhance employee performance. Through clear goal setting, regular feedback, and constructive appraisals, we ensure that every team member is empowered to reach their full potential.',
     'By leveraging our expertise in performance management, SmarTank helps organizations not only identify high performers but also provide the necessary support for underperforming employees to improve. Our system is designed to motivate, engage, and retain top talent, ultimately driving the organization towards sustained success.',
     'With SmarTank’s Performance Management System, organizations can create an environment where excellence is recognized, challenges are addressed proactively, and every employee feels valued and motivated to contribute to the company’s growth. We advocate for the adoption of straightforward HR systems to monitor performance, enabling businesses to harness technology effectively and make informed decisions.']},
 {t:'HR Business Partnering & Consultation',short:'HR Partnering',img:IMG+'ser3.jpg',
  s:'At SmarTank Business Solutions, we offer comprehensive HR Business Partnering and Consultation services designed to integrate human resources seamlessly with your business strategy.',
  d:['At SmarTank Business Solutions, we offer comprehensive HR Business Partnering and Consultation services designed to integrate human resources seamlessly with your business strategy. Our approach focuses on aligning HR practices with organizational goals, ensuring that your people strategy drives business success.',
     'We provide expert guidance on all aspects of human resources, from strategic planning and talent management to employee relations and organizational development. By partnering with your leadership team, we help build a robust HR framework that supports both immediate needs and long-term objectives.',
     'With SmarTank\'s HR Business Partnering & Consultation, you can navigate complex workforce challenges with confidence, make strategic decisions backed by industry insights, and cultivate a thriving, engaged workforce that is aligned with your company’s vision.']},
 {t:'HR Transformation & Leadership Development',short:'Leadership',img:IMG+'ser4.jpg',
  s:'SmarTank Business Solutions specializes in HR Transformation and Leadership Development, empowering organizations to evolve their human resources practices and cultivate strong, visionary leaders.',
  d:['SmarTank Business Solutions specializes in HR Transformation and Leadership Development, empowering organizations to evolve their human resources practices and cultivate strong, visionary leaders. Our HR Transformation services are designed to modernize and optimize HR processes, ensuring they are aligned with your business’s strategic goals and prepared to meet the challenges of a rapidly changing workplace.',
     'Through our Leadership Development programs, we identify and nurture high-potential talent, equipping them with the skills and insights necessary to lead with confidence and drive organizational success. We focus on developing leadership capabilities that resonate with your company’s culture, values, and vision.',
     'At SmarTank, we believe that effective leadership is the cornerstone of a thriving organization. Our tailored solutions ensure that your HR practices are not just efficient but also transformative, and that your leaders are prepared to steer the company towards sustained growth and innovation. We have curated and designed impactful Master Coaching training programs for all departments of your organization, including top executives, adding significant value to the business and promoting growth.',
     'We also offer internationally recognized corporate training programs designed to enhance your team\'s performance, expand their knowledge, and empower them to excel in their roles.']}
];
const LEADERSHIP=[
 ['Visionary Leadership','Our leadership team is composed of seasoned professionals with a deep understanding of the consultancy and HR landscape. With diverse backgrounds and a shared passion for innovation, they lead by example, fostering a culture of collaboration and growth.'],
 ['Strategic Expertise','Each member of our leadership team plays a crucial role in shaping our strategic direction. Their insights and decision-making skills are instrumental in delivering outstanding results for our clients and driving the company’s success.'],
 ['Commitment to Excellence','Our leaders are dedicated to maintaining the highest standards of professionalism and integrity. They are committed to nurturing talent, enhancing client relationships, and continuously improving our services to meet the evolving needs of the market.'],
 ['Driving Innovation','Innovation is at the heart of what we do. Our leadership team is constantly exploring new ways to enhance our offerings and stay ahead of industry trends, ensuring that SmarTank Business Solutions remains a leader in executive search and HR services.'],
 ['A Culture of Collaboration','Collaboration and teamwork are fundamental to our approach. Our leaders foster a supportive environment where ideas are shared, and every team member’s contributions are valued, driving collective success.']
];
const PURPOSE=[
 ['Vision','To transform businesses through innovative strategic solutions & cultivate exceptional leaders in every organisation.'],
 ['Mission','Our mission is to differentiate ourselves in the market by leveraging our extensive real-life experiences to revolutionize businesses.']
];
const REGIONS=[['IN','India'],['SG','Singapore'],['EU','Europe'],['AF','Africa'],['AE','UAE']];
const INTERNAL=[
 ['HR Interns, Part Time (3–6 months)','India'],
 ['Sales & Marketing – Management Trainee','India · Singapore · UK'],
 ['Digital Media & Web Development Specialist','India'],
 ['Executive Search Consultant','India'],
 ['Senior Executive Recruiter','India']
];
const JOBS=[
 ['Chief Executive Officer (CEO)','Lead the organization, define strategic vision, and drive overall growth.','India|Singapore|UAE'],
 ['Chief Financial Officer (CFO)','Manage financial planning, reporting, and risk management while driving profitability.','India|Africa|UAE|United Kingdom'],
 ['Head of Sales and Marketing (Modern Trade – Beverages / FMCG)','Manage Sales & Marketing strategy for FMCG / Beverages unit.','Africa|UAE'],
 ['Vice President of Finance','Lead financial planning and analysis, manage budgeting processes, and ensure fiscal responsibility while supporting strategic business decisions.','India|Africa|UAE|Singapore|United Kingdom'],
 ['Head of Logistics','Lead and oversee end-to-end logistics operations, supply chain management, and strategic planning to ensure efficient, cost-effective delivery and distribution across all channels.','India|Africa|UAE'],
 ['Head of Procurement (Manufacturing Unit)','Lead and oversee end-to-end procurement operations, supply chain management, and strategic planning to ensure efficient, cost-effective purchase of raw materials, equipment, and services aligned with production goals.','Africa|UAE'],
 ['Retail Head (Petroleum OMC)','Lead and drive nationwide fuel retail operations, oversee network expansion, ensure compliance, enhance customer experience, and implement strategic initiatives to maximize volume, profitability, and brand visibility across all retail outlets.','Africa|UAE'],
 ['ERP Developer (Implementation Specialist)','Design, customize, and implement ERP solutions tailored to business needs; collaborate with cross-functional teams to streamline processes, ensure data integration, provide technical support, and drive successful end-to-end ERP deployment.','Africa|UAE|India'],
 ['HR Generalist (India, UAE & Africa)','Manage end-to-end HR operations across India, UAE, and Africa; handle recruitment, employee relations, compliance, and performance management; support regional HR initiatives and report directly to the Executive Director.','Africa|UAE|India'],
 ['General Manager – Packaging Unit','Oversee end-to-end production of labels, corrugated boxes, tapes, and packaging materials; manage plant operations, optimize production efficiency, ensure quality control, and drive cost-effective manufacturing while leading cross-functional teams for continuous improvement.','Africa|UAE'],
 ['Glass Project Manager (Bottles & Glassware Manufacturing Unit)','Lead and manage end-to-end project execution for glass bottle and glassware manufacturing; oversee planning, installation, and commissioning of machinery, coordinate with cross-functional teams, ensure timelines, quality, and cost-efficiency across all phases of the project.','Africa|UAE'],
 ['Executive Assistant to M.D. (International Assignment)','Work closely with the Managing Director to manage strategic initiatives, business planning, communication, and high-level coordination; support decision-making with research and analysis. Candidates from IIT, IIM, ISB, or similar institutes preferred for this international role.','Africa|UAE|India'],
 ['Head of Finance','Lead and oversee the company’s financial strategy, planning, budgeting, and reporting; ensure regulatory compliance, manage risk, optimize cash flow, and provide financial insights to support strategic decision-making and sustainable business growth.','Africa|UAE|India'],
 ['Head of Operations (Beverage Industry)','Oversee end-to-end manufacturing, supply chain, and distribution operations; ensure production efficiency, quality control, and cost optimization; drive process improvements and cross-functional coordination to achieve business objectives in the beverage sector.','Africa|UAE'],
 ['Chief Marketing Officer (CMO)','Develop and execute marketing strategies to enhance brand presence and market share.','India|Africa'],
 ['Chief Technology Officer (CTO)','Drive technological innovation and oversee IT strategy and development.','Africa'],
 ['Chief Human Resources Officer (CHRO)','Lead HR strategy, talent acquisition, and organizational development initiatives.','India|Africa|UAE'],
 ['Head of Sales','Drive sales strategy, manage client relationships, and achieve revenue targets.','India|Africa'],
 ['Head of Human Resources','Lead HR initiatives, talent management, and organizational development efforts.','India|Africa|Singapore'],
 ['Head of Finance','Manage financial planning, budgeting, and reporting to support organizational goals.','India|Africa|Singapore'],
 ['Head of IT','Direct IT strategy, infrastructure management, and technology innovation.','India|Africa'],
 ['Head of Procurement','Lead procurement strategies and manage supplier relationships to ensure cost-effective sourcing of materials and services.','India'],
 ['Software Development Lead','Guide software development projects, manage coding standards, and oversee the team in delivering high-quality software solutions.','India|Singapore'],
 ['IT Support Specialist','Provide technical support to end-users, troubleshoot hardware and software issues, and assist in maintaining IT equipment and systems.','India|Singapore|Africa'],
 ['Vice President of Operations','Oversee daily operations, implement strategic initiatives, and drive efficiency across all business functions to achieve organizational goals.','India|Africa'],
 ['ERP Project Manager','Lead end-to-end ERP implementation projects, manage timelines and resources, and ensure alignment with business objectives while overseeing cross-functional teams.','India|Africa|UAE'],
 ['Executive Assistant to the CEO','Provide high-level administrative support to the CEO, manage the executive\'s calendar, coordinate meetings, and prepare reports and presentations. Act as a liaison between the CEO and internal/external stakeholders, ensuring efficient communication and project management.','India|Africa|UAE']
].map(([t,d,l])=>({t,d,l:l.split('|')}));
const STATS=[
 ['20+','Years of practical expertise across domains'],
 ['360°','Approach across strategy, performance, leadership & HR'],
 ['5','Regions: India, Singapore, Europe, Africa & UAE'],
 ['4','Core service lines'],
 [JOBS.length+'','Open roles with leading organisations'],
 [INTERNAL.length+'','Career openings at SmarTank'],
];

const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const HAS_GSAP=typeof window.gsap!=='undefined';
const REDUCE=matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile=()=>innerWidth<=991;
const isTouch='ontouchstart' in window||navigator.maxTouchPoints>0;
/* which page this is (set on <body data-page> by build.mjs) */
const PAGE=document.body.dataset.page||'home';
/* arriving at page.html#section: take the hash over from the browser, which would otherwise
   jump there under the loading screen (and again as images load); we scroll there ourselves */
const START_HASH=location.hash;
if(START_HASH&&typeof window.gsap!=='undefined'){history.replaceState(null,'',location.pathname+location.search);scrollTo(0,0)}
/* run fn only when the element exists on this page */
const on=(sel,fn)=>{const el=$(sel);if(el)fn(el);return el};

/* ---------- topographic contour generator ---------- */
function topo(svg,{bundle=0,trail=false,seed=1,faint=0,baseY=250,stroke,vert}={}){
  const W=1440,H=900,ns='http://www.w3.org/2000/svg';
  let s=seed;const r=()=>(s=(s*9301+49297)%233280)/233280;
  const ph=[r()*6,r()*6,r()*6];
  /* smooth curve through ~30 points (was ~92 straight segments) – far cheaper to paint */
  const line=(base,amp,off)=>{const pts=[];for(let x=-40;x<=W+40;x+=52){pts.push([x,base+amp*Math.sin(x/260+ph[0]+off*.12)+amp*.55*Math.sin(x/110+ph[1]+off*.2)+amp*.2*Math.sin(x/70+ph[2])])}
    let d=`M${pts[0][0]} ${pts[0][1].toFixed(1)}`;for(let i=1;i<pts.length-1;i++){const mx=(pts[i][0]+pts[i+1][0])/2,my=(pts[i][1]+pts[i+1][1])/2;d+=`Q${pts[i][0]} ${pts[i][1].toFixed(1)} ${mx} ${my.toFixed(1)}`}
    const l=pts[pts.length-1];return d+`L${l[0]} ${l[1].toFixed(1)}`};
  const add=(d,cls)=>{const p=document.createElementNS(ns,'path');p.setAttribute('d',d);p.setAttribute('class',cls);if(stroke&&cls!=='faint')p.style.stroke=stroke;svg.appendChild(p);return p};
  for(let i=0;i<faint;i++)add(line(i*H/faint*1.3-120,40+r()*30,i),'faint');
  /* vertical bundle: contours that drop down from the hero's middle line (bottom-right panel) */
  const vline=(bx,amp,off,y0)=>{const pts=[];for(let y=y0;y<=H+60;y+=48){const k=(y-y0)/(H-y0);pts.push([bx+amp*k*Math.sin(y/120+ph[0]+off*.15)+amp*.5*Math.sin(y/70+ph[1]+off*.2)+k*k*(vert.drift??-90),y])}
    let d=`M${pts[0][0].toFixed(1)} ${pts[0][1]}`;for(let i=1;i<pts.length-1;i++){const mx=(pts[i][0]+pts[i+1][0])/2,my=(pts[i][1]+pts[i+1][1])/2;d+=`Q${pts[i][0].toFixed(1)} ${pts[i][1]} ${mx.toFixed(1)} ${my}`}
    const l=pts[pts.length-1];return d+`L${l[0].toFixed(1)} ${l[1]}`};
  if(vert){
    const A=vert.amp??70;
    for(let i=0;i<vert.n;i++)add(vline(vert.x+i*18,A,i*.4,vert.y0+i*10),'dk');
    add(vline(vert.x+vert.n*18+14,A+4,2.2,vert.y0+vert.n*10),'thick');
  }
  if(bundle){
    for(let i=0;i<bundle;i++)add(line(baseY+i*16,60,i*.4),'dk');
    add(line(baseY+80,62,2.2),'thick');
  }
  if(trail)add(`M-20 ${H*.26} C ${W*.08} ${H*.2}, ${W*.06} 60, ${W*.2} -20`,'trail');
}
on('#topoPre',s=>{topo(s,{faint:10,bundle:5,seed:9,stroke:'rgba(255,221,89,.55)'});$$('.faint',s).forEach(p=>p.style.stroke='rgba(255,255,255,.07)')});
on('#topo0',s=>topo(s,{faint:14,bundle:5,seed:3,baseY:220}));
/* scroll-drawn layer: on desktop it drops into the open bottom-right panel; on phones the
   bottom half is the heading panel, so it runs across the visible top half instead */
/* desktop: lines drop down along the right edge, past the intro text and buttons in that panel */
on('#topo1',s=>{if(innerWidth>991)topo(s,{vert:{x:1310,y0:520,n:4,amp:34,drift:50},seed:12});
  else{s.setAttribute('preserveAspectRatio','xMidYMin slice');topo(s,{bundle:4,seed:12,baseY:110})}});
on('#topo2',s=>topo(s,{trail:true,seed:4}));
on('#topoPage',s=>topo(s,{faint:12,bundle:5,seed:6,baseY:120}));
on('#topoAbout',s=>topo(s,{faint:10,seed:7}));
on('#topoContact',s=>topo(s,{faint:10,seed:11}));
on('#topoBlog',s=>{topo(s,{faint:10,bundle:5,seed:5,stroke:'#FFDD59'});$$('.faint',s).forEach(p=>p.style.stroke='rgba(255,255,255,.08)')});

/* ---------- render content ---------- */
/* service links: in-page on the Services page, otherwise open services.html at that service */
const svcHref=i=>(PAGE==='services'?'':'services.html')+'#svc-'+i;
if($('#regRow'))$('#regRow').innerHTML=REGIONS.map(([c,n])=>`
 <div class="reg trusted_item">
  <div class="face trusted_logo"><span class="code">${c}</span><span class="pin"></span><span class="nm">${n}</span></div>
  <div class="face trusted_logo is-alt"><span class="code">${n}</span><span></span><span class="big">${c}</span></div>
 </div>`).join('');

if($('#stepList'))$('#stepList').innerHTML=SERVICES.map((s,i)=>`
 <article class="step" data-sticky-steps-item data-sticky-steps-item-status="${i?'after':'active'}">
  <div data-sticky-steps-anchor>
   <div class="m-img" style="background:#173A55 url('${s.img}') center/cover"></div>
   <p class="n">0${i+1}<i></i></p>
   <h3>${esc(s.t)}</h3>
   <p>${esc(s.s)}</p>
   <a class="btn btn-orange" href="${svcHref(i)}" data-open-acc="${i}"><span class="lbl" data-button-animate-chars>Know more</span> <span class="arr">→</span></a>
  </div>
 </article>`).join('');
if($('#vis'))$('#vis').insertAdjacentHTML('beforeend',SERVICES.map((s,i)=>`<div class="img" style="background-image:url('${s.img}')"></div>`).join('')+
 `<div class="cap"><span class="t" id="visT">${esc(SERVICES[0].t)}</span><span class="c" id="visC">01 / 04</span></div>`);

if($('#tiltCircles'))$('#tiltCircles').innerHTML=LEADERSHIP.map(([t,d],i)=>`
 <div class="tilt-circle"><article class="tilt-card">
  <span class="num">0${i+1}</span><h3>${t}</h3><p>${d}</p>
  <div class="mark"><span>SmarTank Leadership</span><span>0${i+1} / 0${LEADERSHIP.length}</span></div>
 </article></div>`).join('');

if($('#statList'))$('#statList').innerHTML=STATS.map(([v,k],i)=>`<div class="stat" data-i="${i}"><span class="v">${v}</span><span class="k">${k}</span></div>`).join('');

if($('#vList'))$('#vList').innerHTML=PURPOSE.map(([k,v],i)=>`
 <div class="vitem${i===0?' is--active':''}" data-testimonial-item>
  <div class="l"><p class="eyebrow" data-testimonial-split><span>SmarTank × ${k}</span></p><div class="wm" data-testimonial-logo aria-label="SmarTank"><svg class="wmm" aria-hidden="true"><use href="#st-mark"/></svg><svg class="wmw" aria-hidden="true"><use href="#st-word"/></svg></div></div>
  <div class="r"><blockquote data-testimonial-text><span>‘${v}’</span></blockquote><p class="who" data-testimonial-split><span>Our ${k} — SmarTank Business Solutions</span></p></div>
 </div>`).join('');
on('[data-total]',e=>e.textContent=PURPOSE.length);

if($('#acc'))$('#acc').innerHTML=SERVICES.map((s,i)=>`
 <div class="acc-item${i===0?' open':''}" id="svc-${i}">
  <button class="acc-btn" aria-expanded="${i===0}" aria-controls="svcp-${i}"><span class="n">0${i+1}</span><h3>${esc(s.t)}</h3><span class="pm" aria-hidden="true"></span></button>
  <div class="acc-panel" id="svcp-${i}" style="${i===0?'height:auto':''}">
   <div class="acc-content">
    <div class="pimg parallax" data-parallax="trigger"><div class="pt" data-parallax="target" style="background-image:url('${s.img}')"></div></div>
    <div class="txt">${s.d.map(p=>`<p>${esc(p)}</p>`).join('')}<a class="btn btn-outline" href="contact.html"><span class="lbl" data-button-animate-chars>Request call back</span> <span class="arr">→</span></a></div>
   </div>
  </div>
 </div>`).join('');

if($('#ilist'))$('#ilist').innerHTML=INTERNAL.map(([t,l])=>`<li><a href="mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Application: '+t)}" data-cursor-hover data-cursor-text="Apply"><span class="t">${esc(t)}</span><span class="loc">${l}</span></a></li>`).join('');

const REG=['All','India','UAE','Africa','Singapore','United Kingdom'];
if($('#chips'))$('#chips').innerHTML=REG.map(r=>`<button class="chip${r==='All'?' on':''}" data-r="${r}" aria-pressed="${r==='All'}">${r}<span class="c">${r==='All'?JOBS.length:JOBS.filter(j=>j.l.includes(r)).length}</span></button>`).join('');
if($('#jgrid'))$('#jgrid').innerHTML=JOBS.map((j,i)=>`<article class="job" data-i="${i}" data-cursor-hover data-cursor-text="Apply">
 <h3 class="t">${esc(j.t)}</h3><p class="d">${esc(j.d)}</p>
 <div class="locs">${j.l.map(l=>`<span>${l}</span>`).join('')}</div>
 <a class="apply" href="mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Application: '+j.t)}">Apply — send resume →</a></article>`).join('');
$$('[data-dynamic-year]').forEach(e=>e.textContent=new Date().getFullYear());

/* ---------- button char split (data-button-animate-chars) ---------- */
$$('[data-button-animate-chars]').forEach(el=>{const t=el.textContent;el.innerHTML='';[...t].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c===' '?' ':c;s.style.transitionDelay=`${i*.018}s`;el.appendChild(s)})});

/* ======================================================================
   NON-GSAP FALLBACK: if the CDN fails, the site still works statically
   ====================================================================== */
if(!HAS_GSAP){document.documentElement.classList.add('fallback');$$('.stat').forEach((s,i)=>{s.style.opacity=1;s.style.transform=`translateY(${(i-2)*100}px)`})}

/* ======================================================================
   GSAP SETUP – mirrors abatable.com's engine
   ====================================================================== */
let lenis=null;
if(HAS_GSAP){
gsap.registerPlugin(ScrollTrigger,SplitText,DrawSVGPlugin,Flip,CustomEase);
CustomEase.create('osmo','0.625, 0.05, 0, 1');
gsap.defaults({ease:'osmo',duration:.6});
/* phones: don't recalculate every trigger when the address bar shows/hides */
ScrollTrigger.config({ignoreMobileResize:true});

/* Lenis smooth scroll synced to ScrollTrigger */
if(window.Lenis&&!REDUCE){
  lenis=new Lenis({lerp:.1,wheelMultiplier:1});
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(t=>lenis.raf(t*1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}

/* ---------- preloader (every page load) ---------- */
/* Shown by CSS from the first paint; the logo reveals, then the whole screen wipes upward.
   Scrolling unlocks the moment the wipe starts (B), so the visitor is never held back. */
function preloader(tl){
  const pre=$('[data-preloader]');
  if(!pre)return 0;
  const logo=$('[data-preloader-logo]',pre),pbg=$('[data-preloader-bg]',pre),pimg=$('[data-preloader-bg-image]',pre);
  const parts=$$('svg',logo);
  const B=1.25;
  tl.set([logo,pbg],{autoAlpha:1},0)
    .from(pimg,{scale:1.15,duration:2,ease:'linear'},0)
    .fromTo(pbg,{clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'},{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',duration:.9},0)
    .fromTo(parts,{yPercent:40,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:.8,stagger:.1,ease:'expo.out'},.2)
    .to(logo,{yPercent:-30,autoAlpha:0,duration:.5,ease:'power2.in'},B-.35)
    .fromTo(pre,{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'},{clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',duration:.9},B)
    .call(()=>pre.remove(),null,B+.9);
  return B;
}

/* ---------- intro: preloader, then the home hero or the inner-page banner ---------- */
function intro(){
  const tl=gsap.timeline();
  lenis&&lenis.stop();
  const B=preloader(tl);
  tl.call(()=>{lenis&&lenis.start();document.documentElement.classList.add('anim-ready')},null,B);
  if($('[data-home-hero]'))heroIntro(tl,B);
  else if($('[data-page-hero]'))pageIntro(tl,B);
  if(REDUCE)tl.progress(1);
  return tl;
}

/* inner pages: contour lines draw, title letters fade in, crumbs/subtitle follow */
function pageIntro(tl,B){
  const ph=$('[data-page-hero]'),nav=$('[data-nav-bar]'),title=$('[data-page-title]',ph);
  const split=SplitText.create(title,{type:'chars, words',wordsClass:'word-mask',charsClass:'char-mask'});
  gsap.set(split.chars,{opacity:0});gsap.set($$('[data-page-fade]',ph),{autoAlpha:0,y:16});
  tl.fromTo($$('#topoPage path',ph),{drawSVG:'0%'},{drawSVG:'100%',duration:2.6,ease:'power3.out',stagger:.02},B)
    .from(nav,{yPercent:-125,duration:1.1,ease:'expo.out',clearProps:'transform'},B+.3)
    .fromTo($('[data-page-line]',ph),{scaleX:0},{scaleX:1,duration:1.2,transformOrigin:'left center'},B+.2)
    .to(split.chars,{opacity:1,duration:.4,stagger:{each:.02,from:'start'},ease:'none'},B+.4)
    .to($$('[data-page-fade]',ph),{autoAlpha:1,y:0,duration:.7,stagger:.08},B+.5);
  /* lines drift as the banner scrolls away */
  gsap.to($('#topoPage',ph),{yPercent:12,ease:'none',scrollTrigger:{trigger:ph,start:'top top',end:'bottom top',scrub:true}});
}

/* home: the abatable-style hero build */
function heroIntro(tl,B){
  const nav=$('[data-nav-bar]'),hero=$('[data-home-hero]'),bg=$('[data-home-hero-bg]'),svgs=$$('[data-home-hero-bg-svg]',hero);
  const hl=$('[data-home-hero-horizontal-line]'),vl=$('[data-home-hero-vertical-line]'),ch=$('[data-home-hero-crosshair]');
  const bl=$('[data-home-hero-bottom-left-wrap]'),tr=$('[data-home-hero-top-right-wrap]'),h1=$('[data-home-hero-heading]'),fade=$('[data-home-hero-fade]');
  const m=isMobile();
  const split=SplitText.create(h1,{type:'chars, words',wordsClass:'word-mask',charsClass:'char-mask'});
  gsap.set(split.chars,{opacity:0});gsap.set(h1,{opacity:1});
  gsap.set([fade,$('.m-cta')],{autoAlpha:0});
  /* scroll-revealed layers start hidden */
  gsap.set(svgs[1].querySelectorAll('path'),{drawSVG:'0%'});gsap.set(svgs[2],{clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'});
  const bgIn=$('.hero-bg-in',bg);
  initHeroScroll();
  tl.from(bgIn,{scale:1.25,duration:2.2,ease:'expo.out'},B)
    .fromTo(svgs[0].querySelectorAll('path'),{drawSVG:'0%'},{drawSVG:'100%',duration:3,ease:'power3.out',stagger:.015},B+.2);
  if(!(m&&isTouch))tl.from(nav,{yPercent:-125,duration:1.2,ease:'expo.out',clearProps:'transform'},B+.5);
  tl.from(hl,{top:'100%',duration:1.3},B+.2)
    .from(vl,{right:'-60%',duration:1.3},B+.2);
  if(!m)tl.from(ch,{right:'-65%',duration:1.3},B+.2);
  tl.fromTo(bl,{clipPath:m?'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)':'polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)'},{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',duration:1.1},B+.7)
    .to(split.chars,{opacity:1,duration:.4,stagger:{each:.02,from:'start'},ease:'none'},B+1)
    .to([fade,$('.m-cta')],{autoAlpha:1,duration:.6},B+1)
    .fromTo(tr,{clipPath:'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)'},{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',duration:1.1},B+1);
}

/* ---------- hero scroll scrub (desktop + mobile) ---------- */
function initHeroScroll(){
  const hero=$('[data-home-hero]'),bg=$('[data-home-hero-bg]'),svgs=$$('[data-home-hero-bg-svg]',hero),paras=$$('[data-home-hero-paragraph]',hero),links=$$('[data-home-hero-anchor-link]',hero);
  const cur=i=>links.forEach((l,j)=>l.classList.toggle('w--current',j===i));cur(0);
  /* Word reveal: each word's opacity is computed straight from the timeline's time, so every
     scroll position always shows the same state – words light up strictly left to right,
     line 2 first, then line 3 (staggered tweens could get stuck half-lit after a refresh). */
  const w1=SplitText.create(paras[0],{type:'words'}).words,w2=SplitText.create(paras[1],{type:'words'}).words;
  const DIM=.12,WORD=.3;
  const lineAt=(words,start,span,t)=>words.forEach((w,i)=>{const s=start+(words.length>1?i*span/(words.length-1):0);
    const p=Math.min(1,Math.max(0,(t-s)/WORD));w.style.opacity=(DIM+(1-DIM)*p).toFixed(3)});
  const paint=t=>{lineAt(w1,.5,.5,t);lineAt(w2,1.9,.5,t)};
  paint(0);gsap.set(paras,{opacity:1}); /* CSS dims the lines before JS; the words carry the dim state now */
  const tl=gsap.timeline({scrollTrigger:{trigger:hero,start:'clamp(top top)',end:()=>'+='+innerHeight*.55,scrub:.6,
    onUpdate:s=>cur(s.progress<.17?0:s.progress<.6?1:2)},defaults:{ease:'linear'},onUpdate(){paint(this.time())}});
  tl.to(bg,{scale:1.125,duration:3},0)
    .fromTo(svgs[1].querySelectorAll('path'),{drawSVG:'0%'},{drawSVG:'100%',duration:1},0)
    .fromTo(svgs[2],{clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'},{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',duration:1},1.5);
}

/* ---------- mouse-move parallax on hero layers ---------- */
function mouseMove(){
  if(isTouch||!$('[data-home-hero]'))return;
  const rem=10*parseFloat(getComputedStyle(document.documentElement).fontSize);
  const items=$$('[data-mouse-move-strength]').map(el=>({s:parseFloat(el.dataset.mouseMoveStrength)||0,x:gsap.quickTo(el,'x',{duration:2,ease:'power3'}),y:gsap.quickTo(el,'y',{duration:2,ease:'power3'})}));
  /* only move the layers while the hero is on screen */
  let on=true;ScrollTrigger.create({trigger:'[data-home-hero]',start:'top bottom',end:'bottom top',onToggle:s=>on=s.isActive});
  addEventListener('mousemove',e=>{if(!on)return;const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;items.forEach(i=>{i.x(x*-rem*i.s);i.y(y*-rem*i.s)})},{passive:true});
}

/* ---------- nav hide on scroll (desktop) ---------- */
function navScroll(){
  const nav=$('[data-menu-wrap]');let last=0,hidden=false;
  const onScroll=({scroll})=>{
    if(innerWidth<992||document.body.classList.contains('menu-open')){last=scroll;return}
    const d=scroll-last;
    if(d>0&&scroll>80&&!hidden){gsap.to(nav,{yPercent:-150,duration:.4,ease:'power2.inOut'});hidden=true}
    else if(d<0&&hidden){gsap.to(nav,{yPercent:0,duration:.4,ease:'power2.inOut'});hidden=false}
    last=scroll};
  lenis?lenis.on('scroll',onScroll):addEventListener('scroll',()=>onScroll({scroll:scrollY}),{passive:true});
}

/* ---------- mobile menu ---------- */
function mobileMenu(){
  const b=$('#burger'),menu=$('#mmenu'),lines=$$('[data-burger-line]'),links=$$('#mmenu a.l span'),btns=$('#mmenu .btns');let open=false,tl;
  const set=o=>{open=o;document.body.classList.toggle('menu-open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');
    tl&&tl.kill();tl=gsap.timeline();
    if(o){lenis&&lenis.stop();tl.set(menu,{visibility:'visible'}).to(menu,{clipPath:'inset(0 0 0% 0)',duration:.7})
      .to(lines[0],{y:5,rotate:45,duration:.5},0).to(lines[1],{y:-5,rotate:-45,duration:.5},0)
      .fromTo(links,{yPercent:110},{yPercent:0,stagger:.05,duration:.7},.2).fromTo(btns,{autoAlpha:0,y:20},{autoAlpha:1,y:0},.45)}
    else{lenis&&lenis.start();tl.to(menu,{clipPath:'inset(0 0 100% 0)',duration:.6}).set(menu,{visibility:'hidden'})
      .to(lines,{y:0,rotate:0,duration:.5},0)}};
  b.addEventListener('click',()=>set(!open));
  $$('#mmenu a').forEach(a=>a.addEventListener('click',()=>set(false)));
  addEventListener('keydown',e=>{if(e.key==='Escape'&&open)set(false)});
}

/* ---------- reveal content (heading chars / paragraph scale / fade) ---------- */
function reveal(){
  const m=false; /* same letter-by-letter reveal on phones as on desktop */
  $$('[data-reveal-content="component"]').forEach(c=>{
    const heads=$$('[data-reveal-content="heading"]',c),paras=$$('[data-reveal-content="paragraph"]',c),fades=$$('[data-reveal-content="fade"]',c);
    const tl=gsap.timeline({scrollTrigger:{trigger:c,start:'top 92%',once:true}});
    heads.forEach(h=>{
      if(m){gsap.set(h,{opacity:0});tl.to(h,{opacity:1,duration:.5,ease:'power2.out'},0)}
      else{const s=SplitText.create(h,{type:'chars, words',wordsClass:'word-mask',charsClass:'char-mask'});gsap.set(s.chars,{opacity:0});tl.to(s.chars,{opacity:1,duration:.5,stagger:{each:.03,from:'start'},ease:'none'},0)}});
    paras.forEach(p=>{gsap.set(p,{opacity:0,scale:m?1:.9,transformOrigin:'center'});tl.to(p,{opacity:1,scale:1,duration:.8,ease:'power2.out'},.4)});
    if(fades.length){gsap.set(fades,{autoAlpha:0});tl.to(fades,{autoAlpha:1,duration:.5,ease:'power2.out',stagger:.08},.8)}
  });
}

/* ---------- trusted/regions crossfade flipping ---------- */
function regionsFlip(){
  const items=$$('.trusted_item');const DUR=.5,MIN=.3,MAX=.9,HOLD=2000;
  const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  const xf=(f,t,cb)=>{gsap.to(f,{opacity:0,duration:DUR,ease:'power2.inOut'});gsap.to(t,{opacity:1,duration:DUR,ease:'power2.inOut',onComplete:cb})};
  function cycle(rev){let done=0,delay=0;shuffle(items).forEach(it=>{const a=$('.trusted_logo:not(.is-alt)',it),b=$('.trusted_logo.is-alt',it);
    setTimeout(()=>xf(rev?b:a,rev?a:b,()=>{if(++done===items.length)setTimeout(()=>cycle(!rev),rev?1000:HOLD)}),delay*1000);delay+=MIN+Math.random()*(MAX-MIN)})}
  setTimeout(()=>cycle(false),1500);
}

/* ---------- circle clip text ---------- */
function clipText(){
  const wrap=$('[data-clip-hero]');if(!wrap)return;const t=$('[data-clip-text]',wrap),mob=innerWidth<768;
  t.style.clipPath='circle(0% at 50% 120%)';
  ScrollTrigger.create({trigger:wrap,start:mob?'top 95%':'top 70%',end:mob?'bottom 90%':'center center',scrub:1,onUpdate:s=>{t.style.clipPath=`circle(${s.progress*150}% at 50% 120%)`}});
}

/* ---------- sticky steps ---------- */
function stickySteps(){
  const items=$$('[data-sticky-steps-item]'),imgs=$$('#vis .img');let active=-1;
  if(!items.length)return;
  const show=i=>{if(i===active)return;const prev=active;active=i;
    if(imgs[i]){gsap.killTweensOf(imgs);imgs.forEach((im,j)=>{if(j!==i&&j!==prev)gsap.set(im,{clipPath:'inset(100% 0 0 0)',zIndex:0})});
      gsap.set(imgs[i],{zIndex:2});if(prev>=0)gsap.set(imgs[prev],{zIndex:1});
      gsap.fromTo(imgs[i],{clipPath:i>prev?'inset(100% 0 0 0)':'inset(0 0 100% 0)',scale:1.15},{clipPath:'inset(0% 0 0% 0)',scale:1,duration:1.1})}
    $('#visT').textContent=SERVICES[i].t;$('#visC').textContent=`0${i+1} / 0${SERVICES.length}`};
  const upd=()=>{const mid=innerHeight/2;let best=0,dist=1e9;items.forEach((n,i)=>{const r=$('[data-sticky-steps-anchor]',n).getBoundingClientRect(),d=Math.abs(mid-(r.top+r.height/2));if(d<dist){dist=d;best=i}});
    items.forEach((n,i)=>n.setAttribute('data-sticky-steps-item-status',i<best?'before':i>best?'after':'active'));show(best)};
  ScrollTrigger.create({trigger:'[data-sticky-steps-init]',start:'top bottom',end:'bottom top',onUpdate:upd,onRefresh:upd});
  /* phones: the pinned visual is hidden, so each step's own photo wipes open as it scrolls in */
  gsap.matchMedia().add('(max-width: 991px)',()=>{
    $$('.step .m-img').forEach(im=>gsap.fromTo(im,{clipPath:'inset(18% 12% 18% 12%)'},{clipPath:'inset(0% 0% 0% 0%)',ease:'none',scrollTrigger:{trigger:im,start:'top 95%',end:'top 45%',scrub:true}}));
  });
  addEventListener('resize',upd);upd();
}

/* ---------- tilt cards (pinned, all screen sizes) ---------- */
function tiltCards(){
  if(!$('.tilt-cards_wrap'))return;
  const mm=gsap.matchMedia();
  mm.add('all',()=>{
    const wrap=$('.tilt-cards_wrap'),ph=$('.tilt-pin-height',wrap),circles=$$('.tilt-circle',wrap);
    gsap.fromTo($('.tilt-circles',wrap),{y:'5%'},{y:'-5%',ease:'none',scrollTrigger:{trigger:ph,start:'top top',end:'bottom bottom',pin:$('.tilt-contain',wrap),scrub:true,anticipatePin:1,pinSpacing:true}});
    const dist=()=>ph.clientHeight-innerHeight;
    gsap.to($('.tilt-content',wrap),{opacity:0,ease:'none',scrollTrigger:{trigger:ph,start:'top top',end:()=>'+='+dist()*.25,scrub:true}});
    const step=innerWidth<768?1.2:4,seg=()=>dist()/circles.length;let rot=-((circles.length-1)*step)/2;
    circles.forEach((c,i)=>{const r=rot;
      gsap.to(c,{rotation:r,ease:'power1.out',scrollTrigger:{trigger:ph,start:()=>'top top-='+seg()*i,end:()=>'+='+seg(),scrub:true,invalidateOnRefresh:true}});
      gsap.fromTo($('.tilt-card',c),{y:()=>innerHeight*.6+300},{y:()=>-($('.tilt-card',c).offsetHeight/2),rotation:r,ease:'power1.out',scrollTrigger:{trigger:ph,start:()=>'top top-='+seg()*i,end:()=>'+='+seg(),scrub:true,invalidateOnRefresh:true}});
      rot+=step});
    return()=>circles.forEach(c=>{gsap.set(c,{clearProps:'all'});gsap.set($('.tilt-card',c),{clearProps:'all'})});
  });
}

/* ---------- counters ---------- */
function counters(){
  $$('[data-counter]').forEach(el=>{const to=parseFloat(el.dataset.counterTo),o={v:0};
    ScrollTrigger.create({trigger:el,start:'top 80%',once:true,onEnter:()=>gsap.to(o,{v:to,duration:3,ease:'power2.out',onUpdate:()=>el.textContent=Math.round(o.v).toLocaleString('en-GB')})})});
}

/* ---------- vertical stat slider (5 visible, centred, loop, autoplay) ---------- */
function statSlider(){
  const wrap=$('#statSlider');if(!wrap)return;
  const slides=$$('.stat',wrap),N=slides.length;let active=0,prevOff=slides.map(()=>0),timer;
  const H=()=>slides[0].offsetHeight;
  const off=i=>{let o=((i-active)%N+N)%N;if(o>N/2)o-=N;return o};
  function render(first){slides.forEach((s,i)=>{const o=off(i),a=Math.abs(o),op=a===0?1:a===1?.5:a===2?.25:0,x=a===0?0:a===1?32:64;
    s.classList.toggle('is-active',o===0);
    const jump=Math.abs(o-prevOff[i])>1;
    if(first||jump){gsap.set(s,{y:o*H(),x});gsap.fromTo(s,{opacity:0},{opacity:op,duration:.6,ease:'power2.out'})}
    else gsap.to(s,{y:o*H(),x,opacity:op,duration:.6,ease:'power2.out'});prevOff[i]=o})}
  const go=i=>{active=(i%N+N)%N;render();restart()};
  const restart=()=>{clearInterval(timer);timer=setInterval(()=>go(active+1),2500)};
  $('.swiper-next',wrap).onclick=()=>go(active+1);$('.swiper-prev',wrap).onclick=()=>go(active-1);
  slides.forEach((s,i)=>s.onclick=()=>go(i));
  render(true);
  ScrollTrigger.create({trigger:wrap,start:'top bottom',end:'bottom top',onToggle:s=>s.isActive?restart():clearInterval(timer)});
  addEventListener('resize',()=>render(true));
}

/* ---------- testimonial (vision/mission) line-mask slider ---------- */
function testimonial(){
  const wrap=$('[data-testimonial-wrap]');if(!wrap)return;
  const items=$$('[data-testimonial-item]',wrap),cur=$('[data-current]',wrap);let idx=0,busy=false,timer;
  const data=items.map(it=>({it,logo:$('[data-testimonial-logo]',it),splits:[$('[data-testimonial-text]',it),...$$('[data-testimonial-split]',it)].map(t=>SplitText.create(t.children,{type:'lines',mask:'lines',linesClass:'text-line'}))}));
  const lines=d=>d.splits.flatMap(s=>s.lines);
  data.forEach((d,i)=>{gsap.set(d.it,{autoAlpha:i===0?1:0});gsap.set(lines(d),{yPercent:i===0?0:110});gsap.set(d.logo,{clipPath:i===0?'inset(0% 0% 0% 0%)':'inset(50% 50% 50% 50%)'})});
  function go(n){if(busy)return;n=(n+items.length)%items.length;if(n===idx)return;busy=true;const a=data[idx],b=data[n];
    const tl=gsap.timeline({onComplete:()=>{busy=false}});
    tl.to(lines(a),{yPercent:-110,duration:.6,stagger:.03}).to(a.logo,{clipPath:'inset(50% 50% 50% 50%)',duration:.6},0)
      .set(a.it,{autoAlpha:0}).set(b.it,{autoAlpha:1}).fromTo(lines(b),{yPercent:110},{yPercent:0,duration:.8,stagger:.04})
      .fromTo(b.logo,{clipPath:'inset(50% 50% 50% 50%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:.8},'<');
    idx=n;cur.textContent=n+1;restart()}
  const restart=()=>{clearInterval(timer);timer=setInterval(()=>go(idx+1),7000)};
  $('[data-prev]',wrap).onclick=()=>go(idx-1);$('[data-next]',wrap).onclick=()=>go(idx+1);restart();
}

/* ---------- parallax images ---------- */
function parallax(){
  $$('[data-parallax="trigger"]').forEach(t=>{const tg=$('[data-parallax="target"]',t)||t;
    gsap.fromTo(tg,{yPercent:-8},{yPercent:8,ease:'none',scrollTrigger:{trigger:t,start:'clamp(top bottom)',end:'clamp(bottom top)',scrub:true}})});
}

/* ---------- custom cursor ---------- */
function cursor(){
  const c=$('[data-cursor]'),txt=$('[data-cursor-text-target]');if(!matchMedia('(hover: hover) and (pointer: fine)').matches)return;
  let x=0,y=0,moved=false;const qx=gsap.quickTo(c,'x',{duration:.4,ease:'power3.out'}),qy=gsap.quickTo(c,'y',{duration:.4,ease:'power3.out'});
  const check=()=>{const h=document.elementFromPoint(x,y)?.closest('[data-cursor-hover]');const edge=x+60>=innerWidth;c.setAttribute('data-cursor',h?(edge?'active-edge':'active'):'');if(h)txt.textContent=h.getAttribute('data-cursor-text')||'View'};
  let queued=false;const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;check()})};
  addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;moved=true;qx(x);qy(y);schedule()},{passive:true});
  addEventListener('scroll',()=>moved&&schedule(),{passive:true});
}

/* ---------- run ---------- */
/* start as soon as the font is ready, but never wait more than 400ms for it */
Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,400))]).then(()=>{
  intro();mouseMove();navScroll();mobileMenu();reveal();regionsFlip();clipText();stickySteps();tiltCards();counters();statSlider();testimonial();parallax();cursor();
  /* arrived with a #hash (e.g. services.html#svc-2): open/scroll to it once the preloader is gone */
  if(START_HASH)gsap.delayedCall(1.6,()=>{if(goToHash(START_HASH))history.replaceState(null,'',START_HASH)});
});
} // HAS_GSAP

/* ======================================================================
   FUNCTIONAL BEHAVIOUR (works with or without GSAP)
   ====================================================================== */
/* underline the menu item for the page we're on */
$$(`[data-nav="${PAGE}"]`).forEach(a=>{a.classList.add('is-current');a.setAttribute('aria-current','page')});

/* smooth anchor scrolling */
function scrollToEl(el){if(!el)return;const y=el.getBoundingClientRect().top+scrollY-90;lenis?lenis.scrollTo(y,{duration:1.4}):scrollTo({top:y,behavior:REDUCE?'auto':'smooth'})}
/* scroll to #id on this page; #svc-N also opens that service in the accordion */
function goToHash(hash){
  if(!hash||hash==='#')return false;
  const el=hash==='#top'?$('#top'):$(hash);if(!el)return false;
  const m=/^#svc-(\d)$/.exec(hash);if(m)openAcc(+m[1]);
  /* let the accordion finish opening/closing (0.7s) so the scroll target is measured in its final place */
  setTimeout(()=>scrollToEl(el),m&&HAS_GSAP?760:0);return true;
}
/* in-page links (#x, or this-page.html#x) scroll smoothly instead of jumping/reloading */
document.addEventListener('click',e=>{const a=e.target.closest('a[href*="#"]');if(!a||a.target==='_blank')return;
  const u=new URL(a.href,location.href);if(u.pathname!==location.pathname||!u.hash)return;
  if(goToHash(u.hash)){e.preventDefault();history.replaceState(null,'',u.hash)}});
/* safety net: never leave a visitor behind the loading screen */
setTimeout(()=>{const p=$('[data-preloader]');if(p){p.remove();document.documentElement.classList.add('anim-ready');lenis&&lenis.start()}},6000);
if(!HAS_GSAP){$('#burger').onclick=()=>{const o=document.body.classList.toggle('menu-open');$('#mmenu').style.cssText=o?'visibility:visible;clip-path:none':''};$$('#mmenu a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');$('#mmenu').style.cssText=''}))}

/* accordion */
function setAcc(item,open){const p=$('.acc-panel',item),b=$('.acc-btn',item);if(item.classList.contains('open')===open)return;item.classList.toggle('open',open);b.setAttribute('aria-expanded',open);
  if(HAS_GSAP){gsap.to(p,{height:open?'auto':0,duration:.7,onComplete:()=>ScrollTrigger.refresh()})}else p.style.height=open?'auto':'0'}
function openAcc(i){$$('.acc-item').forEach((it,j)=>setAcc(it,j===i))}
$$('.acc-item').forEach(it=>$('.acc-btn',it).addEventListener('click',()=>setAcc(it,!it.classList.contains('open'))));

/* jobs filter with GSAP Flip */
let jf='All',jAll=false;const JSTEP=6;
function jobs(animate=true){
  const cards=$$('.job');const list=cards.filter(c=>jf==='All'||JOBS[c.dataset.i].l.includes(jf));const show=new Set(jAll?list:list.slice(0,JSTEP));
  const state=HAS_GSAP&&animate&&!REDUCE?Flip.getState(cards):null;
  cards.forEach(c=>c.hidden=!show.has(c));
  if(state)Flip.from(state,{duration:.7,ease:'osmo',absolute:true,nested:true,onEnter:el=>gsap.fromTo(el,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.03}),onLeave:el=>gsap.to(el,{opacity:0,duration:.3}),onComplete:()=>ScrollTrigger.refresh()});
  const b=$('#moreJobs');
  /* home shows a preview; its button opens the full Jobs page */
  if(PAGE==='home'){b.hidden=false;b.textContent=`Explore all ${JOBS.length} opportunities →`;return}
  b.hidden=list.length<=JSTEP;b.textContent=jAll?'Show fewer':`Explore more opportunities (${list.length-JSTEP})`;
}
if($('#jgrid')){
  $$('.chip').forEach(c=>c.addEventListener('click',()=>{jf=c.dataset.r;jAll=false;$$('.chip').forEach(x=>{x.classList.toggle('on',x===c);x.setAttribute('aria-pressed',x===c)});jobs()}));
  $('#moreJobs').addEventListener('click',()=>{if(PAGE==='home'){location.href='jobs.html';return}jAll=!jAll;jobs();if(!jAll)scrollToEl($('#jobs'))});
  jobs(false);
}

/* call-back form */
if($('#cbForm'))$('#cbForm').addEventListener('submit',async e=>{
  e.preventDefault();const f=e.target,msg=$('#cbMsg');msg.className='msg';
  let ok=true;$$('input,select',f).forEach(i=>{const bad=!i.checkValidity();i.classList.toggle('err',bad);if(bad)ok=false});
  if(!ok){msg.textContent='Please fill in your name, a valid phone number and the service you need.';msg.classList.add('bad');return}
  const d=Object.fromEntries(new FormData(f));
  if(FORM_ENDPOINT){
    try{const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;
      msg.textContent='Thank you — our team will call you back shortly.';msg.classList.add('ok');f.reset()}
    catch(_){msg.textContent='Something went wrong. Please call us on +91 91677 99779.';msg.classList.add('bad')}
  }else{
    const body=`Call back request\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email||'-'}\nService: ${d.service}\n\n${d.msg||''}`;
    location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Call back request – '+d.service)}&body=${encodeURIComponent(body)}`;
    msg.textContent='Your email app is opening with the request filled in — just press send.';msg.classList.add('ok');
  }
});
$$('#cbForm input,#cbForm select').forEach(i=>i.addEventListener('input',()=>i.classList.remove('err')));
