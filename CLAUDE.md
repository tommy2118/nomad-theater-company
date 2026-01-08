# CLAUDE.md

## Project Overview

Nomad Theater Company website — a static site for a community theater organization. The site showcases current productions, impact statistics, and provides ways for visitors to support and contact the theater.

## Stack

- Eleventy 3.1.x (static site generator)
- Tailwind CSS 4.1.x (CSS-first configuration)
- Stimulus 3.2.x (JavaScript behavior)
- Nunjucks (templating)

## Key Files

- `eleventy.config.js` — Build configuration with PostCSS/Tailwind hooks
- `src/assets/css/main.css` — Tailwind theme with NTC brand colors
- `src/assets/js/application.js` — Stimulus setup
- `src/_data/site.json` — Site metadata (name, description, contact info)
- `src/_data/navigation.json` — Navigation structure
- `src/_includes/layouts/base.njk` — Root layout

## Commands

```bash
npm run dev    # Development server (localhost:8080)
npm run build  # Production build to dist/
npm run clean  # Remove build artifacts
```

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| ntc-gold | #D4AF37 | Primary brand, CTAs, headings |
| ntc-gold-light | #E5C76A | Hover states |
| ntc-gold-dark | #B38B22 | Active states, borders |
| ntc-black | #1A1A1A | Backgrounds, text |
| ntc-white | #FFFFFF | Text on dark backgrounds |

## Typography

- **Display:** Trajan Pro (serif) — headings, logo
- **Body:** Open Sans (sans-serif) — paragraphs, UI

## Conventions

- Layouts in `src/_includes/layouts/`
- Partials in `src/_includes/partials/`
- Stimulus controllers in `src/assets/js/controllers/`
- Controllers named `[name]_controller.js`
- Images in `src/assets/images/`
- Productions in `src/productions/*.md` (Eleventy collection)

## Stimulus Controllers

| Controller | Purpose |
|------------|---------|
| `animate` | Scroll-triggered animations (replaces AOS) |
| `form` | Contact form handling with Web3Forms |
| `mobile_nav` | Mobile navigation toggle |

## Collections

### Productions

Location: `src/productions/*.md`

Frontmatter:
```yaml
---
layout: layouts/production.njk
title: Production Name
description: Brief description
date: 2026-01-15
image: /assets/images/production.webp
imageAlt: Alt text
category: Drama  # or Musical, Comedy, etc.
status: current  # or upcoming, past
---
```

## Current State

**After migration:**
- Homepage with hero, productions gallery, impact stats, contact form
- All navigation pages (about, season, support, contact, subscribe, donate)
- Productions as Eleventy collection
- Stimulus-based animations (no AOS dependency)
- Fixed navigation header
- Footer with social links
- Responsive design

## Known Issues

- Form submission requires Web3Forms access key to be configured in form_controller.js
- Trajan Pro font not hosted — will fallback to serif
