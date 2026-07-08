# Nehal Ingole Portfolio

Portfolio website built with Next.js (App Router), Tailwind CSS, and animated UI (Motion + GSAP). The home page is a single scroll-based layout composed of multiple sections (Hero, Experience, Projects, Bio/Skills, GitHub Activity, Blogs, Quotes, Contact, Footer).

Live site: https://www.nehalingole.in/

## Features

- Animated landing hero with tech badges, social icons (with hover preview), and CTA buttons.
- Theme toggle using a draggable “theme chain” UI (dark/light) powered by `next-themes`.
- Custom cursor that reacts to project hover events (GSAP-powered).
- Interactive project cards:
  - Hover overlay + clickable external links.
  - Optional video preview on hover using a YouTube iframe.
  - Optional full video player mode.
- Experience section with expandable cards for role points and tech stack.
- GitHub Activity section:
  - GitHub contribution calendar (`react-github-calendar`).
  - Online/offline indicator from browser `navigator.onLine`.
  - “Worked today” counter computed client-side.
- Blogs section that fetches the latest posts from Hashnode using GraphQL.
- Resume modal:
  - Click “Resume / CV” to open an animated modal.
  - Preview the PDF in an `iframe` and provide a download button.
- Loading screen:
  - A Remotion composition is shown while the page “hydrates”/loads.
- Optional Visitor Count section (`counterapi.dev`) is implemented but currently commented out in `app/page.tsx`.

## Tech Stack

- Framework: Next.js 16 + React 19 (App Router)
- Language: TypeScript (strict mode enabled)
- Styling: Tailwind CSS v4 + `shadcn/tailwind.css`
- UI/Animation:
  - `motion/react` (section and component animations)
  - `gsap` (cursor + project hover interactions)
  - `@remotion/player` (loading animation)
- Icons: `lucide-react`
- Theme: `next-themes`
- Data/content:
  - Portfolio content defined in `lib/constants.ts`
  - Blogs fetched from Hashnode via GraphQL in `components/blog-section.tsx`
- Analytics: `@vercel/analytics/next` and Google Analytics 4 (`components/google-analytics.tsx`, ID in `lib/seo-config.ts` or `NEXT_PUBLIC_GA_MEASUREMENT_ID`)

## SEO

Technical SEO is implemented for discoverability (not a guarantee of ranking—Google ranks pages by relevance, quality signals, and competition):

- **Metadata** (`app/layout.tsx`): title template, description, keywords, canonical URL, `robots`, Open Graph, Twitter cards, `authors` / `publisher`, `appleWebApp`, `alternates.languages`.
- **Central config** (`lib/seo-config.ts`): site URL, copy, and JSON-LD helpers. Override the live domain with `NEXT_PUBLIC_SITE_URL` (see `.env.example`).
- **Structured data**: JSON-LD `@graph` with `WebSite`, `Person`, and `WebPage` for rich results eligibility.
- **Sitemap & robots**: `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt` with sitemap URL.
- **Web app manifest**: `app/manifest.ts` → `/manifest.webmanifest` (name, theme colors, icons).

After deploy, add the site in [Google Search Console](https://search.google.com/search-console) and submit the sitemap URL (`https://your-domain/sitemap.xml`). Set verification env vars if you use meta-tag verification.

## Sections (What you see on the page)

The main page is implemented in `app/page.tsx` and renders, in order:

- `CustomCursor`
- `ResumeModal` (controlled by state in `app/page.tsx`)
- `Lamphome` (navbar + glow effects + theme chain + layout wrapper)
- `HeroSection` (avatar, greeting, typewriter effect, tech badges, social icons, CTAs)
- `ExperienceSection` (expandable work cards + hover video + social popup)
- `ProofOfWorkSection` (highlight cards: open source, client work, AnimioUI)
- `ProjectsSection` (interactive project cards with images and optional video previews)
- `AboutSection` (avatar + bio + skills badges)
- `GithubActivity` (contribution calendar + status + “worked today”)
- `BlogSection` (Hashnode GraphQL fetch + post cards)
- `QuotesSection` (random quote from `QUOTES`)
- `ContactSection` (parallax/glow contact card with mailto link)
- `Footer`

## Key Implementation Details

### Content model (`lib/constants.ts`)

Most portfolio content is centralized in `lib/constants.ts`, including:

- Navigation items (`NAVIGATION_LINKS`)
- Hero content (`HERO`)
- Social links (`SOCIALS`)
- Tech stack for badges (`TECH_STACK`, `SKILLS_CATEGORIES`)
- Projects (`PROJECTS`) including tags and optional `videoUrl`
- About/bio paragraphs (`BIO`)
- Experiences (`EXPERIENCES`)
- Quotes (`QUOTES`)
- Blogs metadata (`BLOGS`) (note: the blogs section currently fetches from Hashnode at runtime)
- GitHub stats stub (`GITHUB_STATS`)

### Theme toggle

Theme behavior is controlled by `ThemeProvider` in `app/layout.tsx` and the interactive chain UI in:

- `components/ui/lamphome.tsx`
- `components/ui/lamphome/theme-chain.tsx`

### Projects video preview

`components/projects-section.tsx` uses:

- A YouTube iframe preview when `project.videoUrl` exists and the card is hovered.
- GSAP to fade the hover video container.

### Blogs fetching

`components/blog-section.tsx` requests posts from Hashnode’s GraphQL endpoint (`https://gql.hashnode.com`) for `learnwithnehal.hashnode.dev`.

Important note: the GraphQL request uses an `Authorization` header that is currently hard-coded in the component. For production, move it to an environment variable (for security).

## Setup

Prerequisites:

- Node.js 18+ (recommended)

Install dependencies and run:

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Next.js image domains

`next.config.ts` configures allowed image formats and remote image `remotePatterns` for Next’s `next/image`.

### Assets

Static assets used by the portfolio live in `public/`:

- Project images (ex: `connect.png`, `webpratice.png`, etc.)
- Social preview images (ex: `linkedin-profile.png`, `github-profile.png`, `twitter-profile.png`)
- Resume PDF: `Nehal_Ingole_7397966719.pdf`
- Background/hero images (ex: `image (3).jpg`)
- Videos used in UI (ex: `Video Project.mp4`)

## Deployment

This project is designed to run well on Vercel:

- `next build`
- `next start`

Make sure any secrets for external APIs (for example, the Hashnode GraphQL authorization) are provided via environment variables before deploying.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
