# SmarTank Business Solutions – GSAP edition

A static multi-page website with SmarTank's content, styled and animated after abatable.com
using the same stack: GSAP 3.13 (ScrollTrigger, SplitText, DrawSVG, Flip, CustomEase) and
Lenis smooth scroll, loaded from jsDelivr. No framework, no build tools beyond Node.

Live: https://khandelwal440.github.io/smart.1/

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About Us | `about.html` |
| Services (`#svc-0` … `#svc-3` open a service) | `services.html` |
| Leadership Team | `leadership.html` |
| Jobs Open | `jobs.html` |
| Careers | `careers.html` |
| Blogs | `blogs.html` |
| Contact Us | `contact.html` |

Every page opens with the SmarTank loading screen, then its intro animation.

## Editing

The `.html` pages are **generated** – edit the sources, then rebuild:

```bash
node build.mjs          # writes all 8 pages
node check-links.mjs    # verifies every internal link
```

| What | Where |
| --- | --- |
| Page list, titles, banners, which sections each page shows | `build.mjs` |
| Header/menu, footer, loading screen, logo, favicon | `src/partials/` |
| Page sections (hero, services, jobs, contact …) | `src/sections/` |
| Styles | `assets/site.css` |
| Content data (services, jobs, leadership, stats) and all animation code | `assets/site.js` |

## Configure

At the top of `assets/site.js`:

| Setting | What it does |
| --- | --- |
| `FORM_ENDPOINT` | URL of a form backend (Formspree, Getform, your API). Empty = the call-back form opens the visitor's email app instead. |
| `CONTACT_EMAIL` | Address used for the form fallback and the job "Apply" links. |

## Notes

- GitHub Pages serves the `gh-pages` branch; push to both `main` and `gh-pages`.
- Service photos and the Corporate Profile PDF are linked from smartankbiz.com; copy them locally before going live.
