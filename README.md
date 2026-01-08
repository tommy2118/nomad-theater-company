# Nomad Theater Company

Website for Nomad Theater Company — professional theater, anywhere and everywhere.

## Quick Start

```bash
npm install
npm run dev
```

Site runs at http://localhost:8080

## Project Structure

```
src/
├── _data/                  # Global data files
│   ├── site.json           # Site metadata
│   └── navigation.json     # Navigation links
├── _includes/
│   ├── layouts/            # Page layouts
│   │   ├── base.njk        # Root HTML shell
│   │   ├── page.njk        # Standard page
│   │   └── production.njk  # Production detail page
│   └── partials/           # Reusable components
│       ├── head.njk        # <head> contents
│       ├── nav.njk         # Navigation
│       ├── footer.njk      # Footer
│       └── scripts.njk     # JS includes
├── assets/
│   ├── css/main.css        # Tailwind styles
│   ├── js/                 # Stimulus controllers
│   └── images/             # Static images
├── productions/            # Production collection
│   └── *.md                # Individual productions
├── index.njk               # Homepage
├── about.njk               # About page
├── contact.njk             # Contact page
├── season.njk              # Season listing
├── support.njk             # Support options
├── subscribe.njk           # Subscription info
└── donate.njk              # Donation info
```

## Development

### Prerequisites

- Node.js 20+

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run clean` | Remove build artifacts |

### Adding Content

#### New Production

Create a markdown file in `src/productions/`:

```yaml
---
layout: layouts/production.njk
title: Production Name
description: Brief description
date: 2026-01-15
image: /assets/images/production.webp
imageAlt: Alt text for image
category: Musical
status: current
---

Production description and details here...
```

#### New Page

Create a `.njk` file in `src/`:

```yaml
---
layout: layouts/page.njk
title: Page Title
description: Meta description
---

Page content here...
```

### Styling

Styles use Tailwind CSS 4 with custom theme tokens in `src/assets/css/main.css`:

- `ntc-gold` — Primary brand color (#D4AF37)
- `ntc-gold-light` — Hover states (#E5C76A)
- `ntc-gold-dark` — Active states (#B38B22)
- `ntc-black` — Background (#1A1A1A)
- `ntc-white` — Text (#FFFFFF)

### JavaScript

Interactive behavior uses Stimulus controllers in `src/assets/js/controllers/`:

- `animate_controller.js` — Scroll-triggered animations
- `form_controller.js` — Contact form handling
- `mobile_nav_controller.js` — Mobile menu toggle

To add a new controller:

1. Create `src/assets/js/controllers/[name]_controller.js`
2. Register in `src/assets/js/application.js`

## Deployment

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to `master` branch

The workflow in `.github/workflows/deploy.yml` handles the rest.

### Form Submission

The contact form uses [Web3Forms](https://web3forms.com/). To enable:

1. Get an access key from Web3Forms
2. Replace `YOUR-ACCESS-KEY` in the form templates

## Stack

- [Eleventy 3.1](https://www.11ty.dev/) — Static site generator
- [Tailwind CSS 4.1](https://tailwindcss.com/) — Utility-first CSS
- [Stimulus 3.2](https://stimulus.hotwired.dev/) — JavaScript framework
- [Nunjucks](https://mozilla.github.io/nunjucks/) — Templating

## License

MIT
