# Hyperframes Composition Brief: Nehal Ingole

## Objective
Create a short launch-style brag video for the Nehal Ingole portfolio.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 21.0 seconds (plan was 20.5; extended so the 16-word headline can sit a full 4.8s after it settles, and so the beat locks still land)

## Source Material
- Project root: `D:\animioui\Portfolio`
- Primary files read: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `lib/constants.ts`, `lib/seo-config.ts`, `components/hero-section.tsx`, `components/hero-wallpaper.tsx`, `README.md`, `package.json`
- Product name: Nehal Ingole
- Tagline / strongest claim: "I build modern web apps, reusable UI systems, and the cloud workflows that keep them in production."
- Key UI or visual moment to recreate: dark-theme hero lockup (name, typed role, emerald status dot, 32px dot grid) and three project cards from the projects section
- Copy that must appear verbatim (trimmed only where noted):
  - Nehal Ingole
  - Software Developer
  - Pune, India
  - I build modern web apps, reusable UI systems, and the cloud workflows that keep them in production.
  - AnimioUI / Creator of AnimioUI / Next.js
  - Revio / Reviews PRs in seconds / TypeScript
  - EMQX on AWS / 300K concurrent connections / Terraform
  - nehalingole.in
  - React · TypeScript · AWS

Do not put an email address, a phone number, or a résumé filename on screen.

## Creative Direction
- Tone preset: polished
- Creative direction: quiet premium product film of a developer portfolio
- Interpretation: four scenes, mixed case, fast entrances, long holds, soft blur crossfades, no joke and no feature-list dump
- Angle: The page is the product. Black field, white dot grid, the name at scale, the site's own sentence, then the work.
- Hook: "Nehal Ingole" locks in over the dot grid while "Software Developer" types underneath.
- Outro / punchline: `nehalingole.in` with "React · TypeScript · AWS" beneath it. Music fades. No invented closer.
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign
  - Email, phone, analytics IDs

## Visual Identity
- Background: `#000000` with `radial-gradient(rgba(255, 255, 255, 0.13) 1.15px, rgba(0, 0, 0, 0) 1.15px)` at `32px 32px` (dark theme body)
- Text: `#fafafa`
- Muted text: `#a1a1aa`
- Accent: `#10b981` (avatar status dot)
- Card: `#1c1c1f` fill, `rgba(255, 255, 255, 0.15)` hairline, 16px radius (site radius scale)
- Display font: Inter (the portfolio's actual face — intentional, not a fallback pick)
- Mono: Geist Mono for the role caret, card tags, and the domain (the site's `--font-geist-mono`)
- Visual references: dotted field, left-aligned hero lockup, bordered project cards

## Storyboard
Use `brag-output/brag-plan.md` as the creative contract. Implemented clocks:

1. Name — 0.0–4.55s, then a 0.6s blur crossfade. Name settles at 1.60s. Role types and holds.
2. The line — settles at 5.80s, stays sharp until 10.60s (4.8s). Blur crossfade out.
3. The work — cards at 11.06s, 12.65s, 14.22s, then hold until 17.10s.
4. Domain — settles at 17.91s, holds, fade to black across 19.95–21.0s.

## Audio
- Audio role: warm bed
- Audio arc: one bed from the first frame, a few soft UI sounds, fade across the last 1.2s
- Music: `happy-beats-business-moves-vol-11-by-ende-dot-app.mp3`, trimmed to 21s with an ffmpeg fade starting at 19.8s. Volume 0.35.
- Music treatment: bed under the picture. No voice duck. Fade is baked into the file.
- Music cue guidance: preset `.claude/skills/brag/assets/music/cues/happy-beats-business-moves-vol-11-by-ende-dot-app.music-cues.md` (114.84 BPM). Locks: name 1.60s, headline 5.80s, domain 17.91s. Cards on beats 11.06, 12.65, 14.22.
- Audio-reactive treatment: subtle. A single emerald halo behind the field breathes with bass/RMS. No waveform.
- Audio-coupled moments:
  - Scene 1 — name land, then typed role with sparse key ticks
  - Scene 3 — one soft click per card
  - Scene 4 — quiet land on the domain
- SFX selection guidance: low high-frequency risk only. `assets/sfx/sfx-analysis.md` in the brag skill. Impacts for the two lands, clicks for cards, a handful of keypresses for the type. No glitch, no punch.
- Exact SFX choice: Hyperframes picks files after the motion exists. Chosen set: `impactSoft_medium_000`, `impactSoft_medium_004`, `click_002`, `click_003`, `click_005`, and five `keypress` wavs.
- Audio files: music and SFX live in `brag-output/composition/assets/`

## Hyperframes Instructions
Composition is one standalone `index.html` (no template wrapper). CSS blur crossfades between scenes. Entrance tweens only, until the final fade to black. Inter is required because it is the site's font. Palette hex values, not oklch, so contrast sampling can see them.

LOOK: black dotted field, Inter, emerald status dot, left-aligned name, three real project cards, domain close.
