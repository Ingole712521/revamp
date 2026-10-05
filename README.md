# Nehal Ingole Portfolio

Personal portfolio built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The home page is a single scroll layout with smooth scrolling (Lenis), section reveals (Motion), and GSAP-driven pointer interactions. A separate `/video` page lists demo and walkthrough videos.

Live site: https://www.nehalingole.in/

## Features

- Hero with photo wallpaper, magnetic CTA buttons, social links, and a cursor-tracking mascot (`page-mascot`).
- Proof strip with headline numbers (years shipping, merged pull requests, articles).
- Featured project block for the lead project (AnimioUI), followed by experience, open source, and the full project grid.
- Project grid with filters (All, Frontend, Fullstack, DevOps, Shipped), hover YouTube previews, a full video mode, and case-study links.
- Open-source list of merged and open pull requests across external repositories.
- Experience cards with role points, tech stack, and company links.
- About section with bio, snapshot, grouped skill badges, and a note on how the portfolio was built.
- GitHub activity: contribution calendar (`react-github-calendar`), tooltips (`react-tooltip`), online/offline status, and a client-side "worked today" counter.
- Writing section with featured Hashnode articles, read from local data in `lib/constants.ts` and `lib/blogs.ts`.
- Resume modal: an HTML resume view built from `lib/resume-data.ts`, with print support and a PDF download.
- Gmail redirect prompt when visitors click an email link (opens Gmail compose with the address filled in).
- Floating avatar with quick social links (dismissible, saved in `localStorage`).
- Oneko cat that follows the pointer (`public/oneko.js`).
- Custom cursor label on project hover (GSAP).
- Draggable theme chain for light and dark mode (`next-themes`).
- Skip-to-content link for keyboard users.

## Tech Stack

| Area | Tools |
|---|---|
| Framework | Next.js 16.1 (App Router), React 19.2 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4, `@tailwindcss/postcss`, `tw-animate-css`, shadcn (`components.json`), `class-variance-authority`, `clsx`, `tailwind-merge` |
| Fonts | Geist and Geist Mono (`next/font/google`) |
| Animation | `motion` (`motion/react`), `gsap` with `ScrollTrigger` |
| Smooth scroll | `lenis` (`lenis/react`), synced with GSAP |
| UI primitives | `radix-ui`, `@radix-ui/react-hover-card`, `lucide-react` icons |
| Interactive extras | `page-mascot`, `react-github-calendar`, `react-tooltip`, `qss` (link preview URLs) |
| Theme | `next-themes` |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights`, Google Analytics 4 |
| SEO | Metadata API, JSON-LD, sitemap, robots, web manifest |
| Linting | ESLint 9 with `eslint-config-next` |
| Resume PDF | Python with `fpdf2` (`resume/build_ats_resume.py`) |

## Page Structure

### Root layout (`app/layout.tsx`)

Wraps every page in this order:

- `StructuredData` (JSON-LD)
- `ThemeProvider` (`next-themes`)
- `LenisProvider` (smooth scroll, GSAP sync)
- `GmailRedirectProvider` (email link prompt)
- `Analytics`, `SpeedInsights`, `GoogleAnalytics`

### Home page (`app/page.tsx`)

Renders, top to bottom:

| Component | What it does |
|---|---|
| `HashScroll` | Scrolls to `#section` links through Lenis |
| `CustomCursor` | GSAP cursor label on project hover |
| `Oneko` | Loads the pointer-following cat script |
| `FloatingAvatar` | Corner avatar with social links |
| `ResumeModal` | Resume view, print, and PDF download |
| `Lamphome` | Navbar, glow effects, theme chain, page shell |
| `HeroSection` | Wallpaper, intro, CTAs, socials, mascot |
| `ProofStrip` | Headline proof numbers |
| `FeaturedProject` | Lead project (AnimioUI) |
| `ExperienceSection` | Work history cards |
| `OpenSourceList` | Pull requests to external repos |
| `ProjectsSection` | Filterable project grid |
| `AboutSection` | Bio, snapshot, skills |
| `GithubActivity` | Contribution calendar and status |
| `BlogSection` | Featured articles |
| `QuotesSection` | Random quote |
| `ContactSection` | Contact card and resume button |
| `Footer` | Site links and socials |

Sections from `ExperienceSection` through `ContactSection` are wrapped in `SectionReveal` for scroll-in animation.

### Video page (`app/video/page.tsx`)

`Lamphome` shell with `VideosSection`, which renders `VideoCard` items and opens them in `HeroVideoDialog`.

## Components

### Sections

`hero-section`, `proof-strip`, `featured-project`, `experience-section`, `open-source-list`, `projects-section`, `about-section`, `github-activity`, `blog-section`, `quotes-section`, `contact-section`, `videos-section`, `footer`

### Cards and building blocks

| Component | Use |
|---|---|
| `project-card` | Project card with hover preview, video mode, and links |
| `project-placeholder` | Fallback when a project has no image |
| `video-card` | Card on the `/video` page |
| `card-media-backdrop` | Shared image backdrop for cards |
| `tech-badge` | Skill and tech labels |
| `section-heading` | Section titles and descriptions |
| `section-reveal` | Motion scroll reveal wrapper |
| `magnetic-button` | `MagneticButton` and `MagneticLink` for CTAs |
| `hero-wallpaper` | Hero background image layer |
| `resume-view` | HTML resume rendered inside the modal |

### Providers and utilities

| Component | Use |
|---|---|
| `theme-provider` | `next-themes` wrapper |
| `lenis-provider` | Lenis smooth scroll and GSAP ScrollTrigger sync |
| `hash-scroll` | Anchor scrolling with offset |
| `gmail-redirect-provider` | Gmail compose prompt for email links |
| `structured-data` | JSON-LD output |
| `google-analytics` | GA4 script |
| `custom-cursor` | Project hover cursor |
| `oneko` | Pointer-following cat |
| `floating-avatar` | Corner social widget |

### UI (`components/ui`)

| Component | Use |
|---|---|
| `lamphome` | Page shell with navbar, glow, and theme chain |
| `lamphome/nav-bar` | Navigation with Lenis scrolling |
| `lamphome/glow-effects` | Background glow for light and dark mode |
| `lamphome/theme-chain` | Draggable theme toggle |
| `hero-video-dialog` | Video modal on the `/video` page |

Also in the repo but not mounted on a page right now: `tech-rail`, `ui/link-preview`, `ui/meteor-shower`, `ui/typewriter`, and `hooks/use-visitor-count`.

## Content and Data

| File | Contents |
|---|---|
| `lib/constants.ts` | Navigation, hero, proof numbers, socials, open-source PRs, projects, experiences, bio, blogs, quotes, videos, GitHub stats |
| `lib/resume-data.ts` | Resume content for the modal and the PDF link |
| `lib/blogs.ts` | Featured blog list and reading time helpers |
| `lib/seo-config.ts` | Site URL, title, description, keywords, JSON-LD helpers |
| `lib/motion.ts` | Shared easing curves |
| `lib/card-styles.ts` | Shared card class names |
| `lib/icons.ts` | Custom brand icons |

## SEO

- **Metadata** (`app/layout.tsx`): title template, description, keywords, canonical URL, robots, Open Graph, Twitter cards, authors, `appleWebApp`, and language alternates.
- **Central config** (`lib/seo-config.ts`): override the live domain with `NEXT_PUBLIC_SITE_URL`.
- **Structured data**: JSON-LD `@graph` with `WebSite`, `Person`, and `WebPage`.
- **Sitemap and robots**: `app/sitemap.ts` serves `/sitemap.xml`, and `app/robots.ts` serves `/robots.txt`.
- **Web app manifest**: `app/manifest.ts` serves `/manifest.webmanifest`.
- **Search console verification**: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_BING_SITE_VERIFICATION`.

After deploy, add the site in [Google Search Console](https://search.google.com/search-console) and submit `https://your-domain/sitemap.xml`.

## Resume PDF

`resume/build_ats_resume.py` generates a one-page, text-based resume at `resume/Nehal_Ingole_Resume.pdf`. It uses a single column, standard section titles, and no tables or images, so applicant tracking systems can read it.

```bash
pip install fpdf2
python resume/build_ats_resume.py
```

The resume modal and footer link to `/Nehal_Ingole_7397966719.pdf` (`RESUME_PDF_URL` in `lib/resume-data.ts`). That file must exist in `public/` for the download to work. Copy the generated PDF there under that name, or update `RESUME_PDF_URL` and `RESUME_PDF_FILENAME`.

## Setup

Prerequisites: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev`: start the development server
- `npm run build`: build for production
- `npm run start`: start the production server
- `npm run lint`: run ESLint

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (falls back to the ID in `lib/seo-config.ts`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console meta tag |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster meta tag |

## Assets

Static files live in `public/`: project screenshots, the profile photo, social preview images, video thumbnails, and `oneko.js`. The Oneko script expects `public/oneko.gif` for its sprite, and the resume download expects `public/Nehal_Ingole_7397966719.pdf`.

`next.config.ts` sets image formats and allowed remote image hosts for `next/image`.

## Deployment

Built for [Vercel](https://vercel.com/new). Vercel Analytics and Speed Insights work without extra setup there. Set the environment variables above in the project settings before deploying.
