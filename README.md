# Finni AI Landing Page

A Next.js 14 landing page for Finni AI (heyfinni.com) — your personal money buddy.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS animations
- **CMS:** Sanity v3 (Privacy Policy only)
- **Font:** Plus Jakarta Sans via next/font/google
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Sanity

Copy the example env file and add your Sanity credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Sanity Studio

- **Embedded:** [http://localhost:3000/studio](http://localhost:3000/studio)
- **Standalone:** `npm run studio`

## Project Structure

```
src/
  app/
    page.tsx              # Home
    privacy-policy/       # Privacy Policy (Sanity CMS)
    studio/[[...tool]]/   # Embedded Sanity Studio
    layout.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    Navbar.tsx
    Hero.tsx
    ChatMockup.tsx
    HowItWorks.tsx
    WhyFinni.tsx
    InsightsMockup.tsx
    CTABanner.tsx
    Footer.tsx
  lib/
    sanity.ts
sanity/
  schemas/
    privacyPolicy.ts
sanity.config.ts
```

## Vercel Deployment

1. Push to GitHub and import in [Vercel](https://vercel.com)
2. Add environment variables: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`
3. Add heyfinni.com as CORS origin in Sanity project settings
4. Studio will be at heyfinni.com/studio
