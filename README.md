# Personal Engineering Portfolio

A modern, high-credibility developer portfolio and technical showcase engineered with **Astro**, **TypeScript**, and **Tailwind CSS**. Designed specifically for an experienced Senior Software Engineer specializing in backend systems, distributed architectures, Microsoft Azure, and applied AI systems.

---

## 🚀 Key Architectural Features

- **Static Site Generation (SSG)**: Zero-server dependency, ultra-fast TTFB, optimized for free hosting on **GitHub Pages**.
- **Dynamic Base-Path Resolution**: Works out-of-the-box whether deployed to a user domain (`<username>.github.io`) or a repository subpath (`<username>.github.io/<repo-name>`).
- **Centralized Data Model**: All biographical details, skills, projects, work milestones, and engineering principles live in dedicated TypeScript data files.
- **Focused Homepage**: Introduction, three selected professional contributions, work history and education, core skills, and direct contact links.
- **Project Drafts**: Personal-project content is retained in `src/data/projects.ts` with `published: false`. Drafts do not generate public routes. Set `published: true` only when a project is ready to share; the homepage lab section is currently unmounted.
- **Accessibility & UX**: Semantic HTML5, WCAG AA contrast ratios, visible keyboard focus rings, skip-to-main-content link, and strict respect for `prefers-reduced-motion`.
- **Zero Hallucinated Metrics**: No arbitrary percentage progress bars, no fake client logos, and no fabricated project outcomes.

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Vector engineering monogram
│   ├── images/
│   │   └── og-card.svg         # Open Graph / Twitter preview image
│   └── resume/
│       └── resume.pdf          # Downloadable curriculum vitae (replace with yours)
├── src/
│   ├── components/
│   │   ├── ArchitectureDiagram.astro # Vector system topology graphic
│   │   ├── Contact.astro             # Direct email & social collaboration section
│   │   ├── EngineeringImpact.astro   # Enterprise achievements on CCH SureTax
│   │   ├── ExperienceTimeline.astro  # Professional work history & milestones
│   │   ├── Expertise.astro           # Core vs learning skills showcase
│   │   ├── Footer.astro              # Dynamic year & understated sign-off
│   │   ├── Hero.astro                # Value proposition, highlights & CTAs
│   │   ├── Navbar.astro              # Sticky header with mobile drawer
│   │   ├── Philosophy.astro          # Direct engineering principles
│   │   ├── ProjectCard.astro         # Reusable project summary card
│   │   └── ProjectsSection.astro     # Personal projects & lab container
│   ├── data/
│   │   ├── experience.ts       # Work experience & career history data
│   │   ├── impact.ts           # 5 verified enterprise initiatives & tax context
│   │   ├── philosophy.ts       # Engineering principles & trade-offs
│   │   ├── projects.ts         # Personal project metadata & architecture notes
│   │   ├── siteConfig.ts       # Personal identity, metadata & social links
│   │   └── skills.ts           # Categorized production vs learning skills
│   ├── layouts/
│   │   └── BaseLayout.astro    # Global HTML wrapper, SEO tags & fonts
│   ├── pages/
│   │   ├── 404.astro           # Custom 404 error page
│   │   ├── index.astro         # Main single-page portfolio
│   │   └── projects/
│   │       └── [slug].astro    # Dynamic architectural case studies
│   ├── styles/
│   │   └── global.css          # Tailwind base layers & accessibility utilities
│   └── utils/
│       └── url.ts              # Robust base-path resolution for GitHub Pages
├── astro.config.mjs            # Astro configuration with static output
├── tailwind.config.mjs         # Theme colors, dark navy palette & fonts
├── tsconfig.json               # TypeScript strict configuration
└── package.json                # Project dependencies and npm scripts
```

---

## 🛠️ Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: v18.17.0+ (LTS v20 or v22 recommended)
- **npm**: v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 4. Run Type Diagnostics
```bash
npm run check
```

### 5. Build for Production
```bash
npm run build
```
The compiled, optimized static files are emitted into the `dist/` directory.

Use Node.js 22.22 or later (CI uses Node.js 24). After building, run `npm test`
to verify page metadata, deployment paths, local assets, and clipboard feedback.
For a subpath build, set the same `BASE_PATH` for both the build and tests.
The stylesheet uses Tailwind 4 with the existing theme in `tailwind.config.mjs`.
See the [Astro migration guide](https://docs.astro.build/en/guides/upgrade-to/v7/)
and [Tailwind migration guide](https://tailwindcss.com/docs/upgrade-guide).

### 6. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Content Customization Guide

You can customize the entire website without touching component markup:

| File | Purpose | What to Customize |
|------|---------|-------------------|
| `src/data/siteConfig.ts` | **Identity & Socials** | Name, tagline, short bio, location, company, LinkedIn, GitHub, email, and SEO metadata. |
| `src/data/skills.ts` | **Technical Expertise** | Backend, Cloud, Frontend, Data, and AI Exploration skills with contextual summaries. |
| `src/data/projects.ts` | **Featured Projects** | Add, edit, or remove projects. Update status (`In Progress`, `Planned`, `Completed`), decisions, and architecture components. |
| `src/data/experience.ts` | **Work Experience** | Fill in your past companies, career milestones, titles, and dates. |
| `src/data/philosophy.ts` | **Engineering Philosophy** | Modify or expand on your engineering approach and architectural beliefs. |
| `public/resume/resume.pdf` | **Résumé Document** | Replace the placeholder PDF with your actual official resume PDF. |

---

## 🌐 Deploying to GitHub Pages

This portfolio includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) using GitHub's official Pages deployment actions.

### Step 1: Initialize Git & Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new).
   - If you want the site at `https://<username>.github.io`, name the repository `<username>.github.io`.
   - If you want the site at `https://<username>.github.io/<repo-name>`, name the repository `<repo-name>` (e.g. `portfolio`).

2. In your terminal, initialize and push:
```bash
git init
git branch -M main
git add .
git commit -m "feat: initial developer portfolio website"
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings

1. On GitHub, navigate to your repository.
2. Click **Settings** (gear icon) -> **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (do *not* select "Deploy from a branch").
4. That's it! Every push to the `main` branch will automatically trigger the workflow, build the static site, and publish it.

### Step 3: Base Path Handling

The workflow automatically detects your deployment target:
- When deployed to a subpath repository (`https://<username>.github.io/<repo-name>`), `configure-pages` passes `BASE_PATH="/<repo-name>"`, ensuring all links, stylesheets, and images load correctly.
- When deployed to a root domain (`https://<username>.github.io`), `BASE_PATH` is automatically `/`.

To test building locally with a subpath:
```bash
BASE_PATH="/<your-repo-name>" npm run build
```

### Step 4: Adding a Custom Domain (Optional)

If you configure a custom domain later (e.g., `https://ankit.dev`):
1. In GitHub repo **Settings -> Pages -> Custom domain**, enter your domain.
2. Update `site` in `astro.config.mjs`:
   ```js
   site: 'https://ankit.dev',
   ```
3. Update `siteUrl` in `src/data/siteConfig.ts`.

---

## 🔒 Security & Privacy

- **No Secrets**: Contains zero hardcoded API keys, private credentials, or tracking scripts.
- **Client Privacy**: Uses zero third-party tracking cookies or external ad networks. System fonts are preferred for instant load times and complete privacy.
- **Sanitized Experience**: Designed to highlight enterprise engineering capabilities without disclosing proprietary employer IP or confidential architecture.

