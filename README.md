# BudgetNYC

**The guide to New York City I wish I had when I moved here.**

---

## The Problem

I moved to NYC to build find a job and work on my startup. But unfortunately its very expensive, thankfully Hanoor built BudgetSF and seeing that I decided to fork the project and lauch BudgetNYC as we definitely need it here as well.

I will make a few modifications to platform as needed with feedback from users.

## What This Is

[BudgetNYC](https://budgetnyc.com) is a map-first web app with community-curated spots across New York City — cheap eats, affordable gyms, free coworking, budget groceries, and more. Everything on the site is submitted and approved by the community.

**It's not a review site.** It's a survival guide.

### What's Inside

- **Interactive Map** — Every spot pinned, color-coded by category, searchable. "Near Me" finds what's closest.
- **Free Things** — 60+ free activities. Museum free days, parks, trails. NYC gives away a lot if you know where to look.
- **Getting Around** — Subway passes, Citi Bike, and public transit info to navigate NYC affordably.
- **Work Spots** — Free and cheap places to work from. Libraries, cafe-offices, and coworking spaces.
- **Events & Community** — Discover events and connect with communities across NYC.
- **Community Voting** — Anyone can submit a spot. 5 community approvals and it goes live on the map.

## Why Open Source

Because this should've existed years ago and it shouldn't be behind a paywall. If you know a cheap spot, add it. If you just moved to NYC, use it.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Leaflet** for maps
- **HydraDB** for semantic search
- **Clerk** for auth
- **Tailwind CSS 4**
- Deployed on **Vercel**

## Run It Locally

```bash
git clone https://github.com/roshanlam/BudgetNYC.git
cd BudgetNYC
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Contribute

Know a cheap spot? Two ways:

1. **On the site** — Go to the Community page, sign in, submit it. Community votes it in.
2. **In the code** — PRs welcome. Add spots to `src/lib/sample-data.ts`, build features, fix bugs.

## License

MIT

---

*Built Originally by [@iharnoor](https://github.com/iharnoor) in SF, on a budget. Modified and maintaining for NYC by [@roshanlam](https://github.com/roshanlam)*
