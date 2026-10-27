# SmarTank Business Solutions – Website

React 18 + Vite + Tailwind CSS 3 + React Router 6.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live

| What | File |
| --- | --- |
| All site copy (services, jobs, blogs, about, leadership, nav, contact details) | `src/data/content.js` |
| **Form backend placeholder** – wire up your API here | `src/lib/submitForm.js` |
| Validation rules | `src/lib/validation.js` |
| Brand colours, fonts, animations | `tailwind.config.js` |
| Reusable components | `src/components/` (Header, Footer, PageBanner, HeroSlider, ServiceCard, JobCard, BlogCard, ContactForm, ApplicationForm, Modal, …) |
| Pages | `src/pages/` |

## Design source

Layout, colours (navy `#225378`, amber `#f7a400`), font (Plus Jakarta Sans), spacing and animations
match smartankbiz.com. All images in `public/images/` and the Corporate Profile (`public/pdf/company-portfolio.pdf`)
were downloaded from that site with the owner's permission.

## Placeholders to replace

**Before launch (all in `src/data/content.js`):**
- `CLIENTS` – placeholder tiles. Add only companies you have permission to name, with their logo files in `public/images/clients/`.
- `TESTIMONIALS` – sample quotes from the design mockup. Replace with real, approved client quotes.
- `GLOBAL_PRESENCE.stats` – 100+ businesses / 20+ industries come from the mockup; confirm the numbers.
- `HERO.image`, `INDUSTRIES.list[].image`, `CONNECT.image` – free Unsplash stock photos loaded from Unsplash; swap for your own photography if you have it.
- `public/images/logo-mark.png` and `logo-word.png` are cut from `logo.jpg` for the dark header; a vector logo from the designer would be sharper.
- The mockup's "Watch Our Story" video button is left out until there is a video.

- `public/logoshare.jpg`, `public/favicon.svg` – generated share image and favicon.
- `CAREER_INTRO`, `CAREER_OUTRO` and `CONTACT_INTRO` in `src/data/content.js` – paste the exact paragraphs from the live site if you want them word-for-word.
- Blog posts are placeholders in `BLOGS` (`src/data/content.js`); the live site links to LinkedIn, which is kept at the top of /blogs.

## Deploying

This is a single-page app using browser routes (`/about`, `/services`, …). Configure your host to serve
`index.html` for unknown paths (Netlify `_redirects`: `/* /index.html 200`; Vercel / Apache / Nginx have equivalents).
