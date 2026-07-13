# rukhshanarifm.github.io/personal-site

Personal website of **Rukhshan Arif Mian** — data consultant based in Lahore, Pakistan.

Live at [rukhshanarifm.github.io/personal-site](https://rukhshanarifm.github.io/personal-site).

## How it works

The site is plain, dependency-free HTML and CSS in the [`site/`](site/) folder:

```
site/
├── index.html      # the whole site (one page)
├── styles.css      # design tokens + styles, light & dark mode
└── assets/         # headshot, favicon, resume PDF
```

Every push to `main` deploys `site/` to GitHub Pages automatically via
[`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml) — no build step.

## Editing

- **Content** (experience, projects, contact links): edit `site/index.html` directly.
- **Look and feel**: colors and spacing live as CSS custom properties at the top of `site/styles.css`.
- **Resume**: replace `site/assets/rukhshan_arif_mian_resume.pdf` with a new PDF (keep the filename).

To preview locally, open `site/index.html` in a browser, or run:

```bash
python3 -m http.server -d site
```

## History

The previous version was based on [mldangelo/personal-site](https://github.com/mldangelo/personal-site)
(MIT licensed) — that React app still lives in `src/` and `public/` for reference and can be
removed once no longer needed.
