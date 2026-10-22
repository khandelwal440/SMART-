# SmarTank Business Solutions – GSAP edition

A single-file website (`index.html`) with SmarTank's content, styled and animated
after abatable.com using the same stack: GSAP 3.13 (ScrollTrigger, SplitText,
DrawSVG, Flip, CustomEase) and Lenis smooth scroll, all loaded from jsDelivr.

## Run

No build step. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Configure

At the top of the main `<script>` in `index.html`:

| Setting | What it does |
| --- | --- |
| `FORM_ENDPOINT` | URL of a form backend (Formspree, Getform, your API). Empty = the call-back form opens the visitor's email app instead. |
| `CONTACT_EMAIL` | Address used for the form fallback and the job "Apply" links. |

Site copy (services, jobs, leadership, stats) lives in the data arrays near the top of the same script.

## Notes

- Service photos and the Corporate Profile PDF are linked from smartankbiz.com; copy them locally before going live.
- The React/Vite version of the site is on the `main` branch.
