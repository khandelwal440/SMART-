# SMARTANK Business Solutions – Website

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
| All site copy (home, services, jobs, insights, about, leadership, online services, contact, privacy, SEO titles) | `src/data/content.js` |
| **Form backend placeholder** – every form posts through here | `src/lib/submitForm.js` |
| Validation rules | `src/lib/validation.js` |
| Brand colours, fonts, animations | `tailwind.config.js`, `src/index.css` |
| Reusable components | `src/components/` |
| Pages | `src/pages/` |
| Site photos | `public/images/site/` |

## Updating content (for the SMARTANK team)

- **Job openings** – add a line to `JOBS` in `src/data/content.js`: `job('Title', 'Short summary', ['India', 'UAE'])`.
  Function and seniority are worked out from the title; override with a 4th argument if needed.
- **Insights** – add an entry to `BLOGS` (title, author, date, category, summary, content).
- **Leadership** – add a person to `LEADERS` (photo, name, title, short bio, full bio, LinkedIn).

## Awaiting approval before launch

These follow the “Items to Confirm” list in *SMARTANK Website Suggestions*. Each is marked `TO CONFIRM`,
`DRAFT` or `PLACEHOLDER` in `src/data/content.js`.

- **Regions served** (`REGIONS_SERVED`) – currently India, Singapore, UAE, UK, Africa (the old site also listed Europe). Shown as regions, not offices.
- **Impact figures** (`IMPACT`) – shown as “TBC” until numbers are approved. The infographic image with figures was not added for this reason.
- **Founder profile** (`LEADERS`) – wording of qualifications and experience, a professional portrait, and the LinkedIn URL.
- **Service detail pages** (`SERVICE_DETAILS`) – draft copy, the HR Business Partnering deliverables list, and the Scaling Up / Rockefeller Habits wording (not shown yet).
- **About** (`ABOUT_PAGE`) – intro, values and method wording.
- **Careers** (`CAREER_INTRO`) – culture copy.
- **Public contact details** (`CONTACT`) – phone, emails, WhatsApp and LinkedIn are the ones from the current smartankbiz.com.
- **Privacy policy** (`PRIVACY_POLICY`) and candidate privacy wording (`CANDIDATE_PRIVACY_NOTE`) – drafts; have them reviewed.
- **Sectors** (`INDUSTRIES_PENDING`) – not shown anywhere until the final list is approved.
- **Insights** (`BLOGS`) – the three posts are placeholders.
- Client logos and testimonials were removed from the home page until approved content exists.

## Not yet connected

- Forms (enquiries, callbacks, job applications, bookings) only log to the console – connect `src/lib/submitForm.js` to your backend or email service.
- Online Services buttons send a booking request; no payment gateway (e.g. Razorpay) is connected.
- `public/images/logo-mark.png` and `logo-word.png` are cut from `logo.jpg`; a vector logo would be sharper.

## Deploying

This is a single-page app using browser routes (`/about`, `/services/...`, …). Configure your host to serve
`index.html` for unknown paths (Netlify `_redirects`: `/* /index.html 200`; Vercel / Apache / Nginx have equivalents).
Old `/blogs` links redirect to `/insights`.
