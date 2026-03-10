# Haruspex–JADE Laboratórium

Website for Haruspex–JADE Laboratórium — a veterinary and water microbiology diagnostics lab.

**Live:** [https://dasatest.xyz/](https://dasatest.xyz/)

## Tech Stack

- **React 18** + **React Router 6** (SPA)
- **Vite 5** (build tool)
- **Tailwind CSS 3** (styling)
- **Framer Motion** (animations)
- **GitHub Pages** (hosting)

## Project Structure

```
src/
├── animations.js            # Shared animation variants
├── App.jsx                  # Router setup
├── main.jsx                 # Entry point
├── index.css                # Global styles (Tailwind)
├── components/
│   ├── Accordion.jsx        # Collapsible section
│   ├── Footer.jsx           # Site footer
│   ├── InfoCard.jsx         # Icon + title + text card
│   ├── Navbar.jsx           # Navigation bar with dropdowns
│   ├── PageHeader.jsx       # Animated page title + subtitle
│   ├── PageLayout.jsx       # Page wrapper with transition
│   ├── SectionHeading.jsx   # Animated section heading
│   ├── ServiceCard.jsx      # Service listing card
│   └── TeamCard.jsx         # Team member card
├── pages/
│   ├── Home.jsx             # Landing page (hero, services, about teaser)
│   ├── About.jsx            # About page (tabs: intro, policy, permits)
│   ├── Services.jsx         # Services page (accordion sections)
│   ├── Forms.jsx            # Downloadable forms
│   └── Contact.jsx          # Contact info, team, map
└── public/
    ├── 404.html             # GitHub Pages SPA redirect
    └── img/                 # Static images
```

## Getting Started

### Prerequisites

- **Node.js 20+** and npm
- **Docker** + **Docker Compose** (optional, for containerised dev/deploy)

### Local Development

```bash
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

### Docker Development

```bash
docker compose up dev
```

Hot-reloads source files via volume mount. Available at port `5173`.

### Production Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

### Option 1: GitHub Actions (recommended)

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

**Setup:**
1. Go to repo **Settings → Pages → Source** → select **GitHub Actions**
2. If using a custom domain, add a `CNAME` file in `public/` with your domain

### Option 2: Docker Deploy

```bash
# Set your GitHub token in .env
echo "GITHUB_TOKEN=ghp_your_token_here" > .env

docker compose up prod
```

This builds the site and force-pushes the `dist/` contents to the `gh-pages` branch.

### Option 3: gh-pages npm package

```bash
npm run deploy
```

Runs `vite build` then pushes `dist/` to `gh-pages` branch via the `gh-pages` package.

## Custom Domain

The site is configured with `base: '/'` in `vite.config.js` for use with a custom domain. If you switch back to hosting at `username.github.io/jadelabor/`, change:

- `vite.config.js` → `base: '/jadelabor/'`
- `src/App.jsx` → `<Router basename="/jadelabor">`
- `index.html` → favicon href to `/jadelabor/favicon.ico`

## Environment Variables

| Variable | Used by | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | `deploy.sh` / Docker prod | PAT for pushing to `gh-pages` branch |
| `GITHUB_REPO` | `deploy.sh` / Docker prod | Repo in `owner/name` format (default: `Dasa122/jadelabor`) |
