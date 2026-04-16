"use client";

import Link from "next/link";

type FreeActivity = {
  name: string;
  description: string;
  location: string;
  when: string;
  tip?: string;
  url?: string;
};

const MUSEUM_FREE_DAYS: FreeActivity[] = [
  {
    name: "The Metropolitan Museum of Art",
    description:
      "One of the greatest museums in the world. Pay-what-you-wish for NY residents.",
    location: "Upper East Side",
    when: "Daily (pay-what-you-wish for NY residents)",
    tip: "Enter through the main steps early to avoid crowds.",
    url: "https://www.metmuseum.org",
  },
  {
    name: "MoMA (Museum of Modern Art)",
    description:
      "World-class modern art collection including Van Gogh and Warhol.",
    location: "Midtown",
    when: "Free Fridays 4–8pm",
    tip: "Expect long lines — go right at 4pm.",
    url: "https://www.moma.org",
  },
  {
    name: "Whitney Museum",
    description: "Modern American art + great rooftop views.",
    location: "Meatpacking District",
    when: "Free Fridays 5–10pm",
    url: "https://whitney.org",
  },
  {
    name: "Brooklyn Museum",
    description: "Huge museum with rotating exhibits and Egyptian art.",
    location: "Brooklyn",
    when: "First Saturday of the month",
    url: "https://www.brooklynmuseum.org",
  },
];

const PARKS_AND_NATURE: FreeActivity[] = [
  {
    name: "Central Park",
    description: "843 acres of trails, lakes, and iconic NYC scenery.",
    location: "Manhattan",
    when: "Open daily 6am–1am",
    tip: "Walk from Bethesda Terrace to Bow Bridge for the best views.",
  },
  {
    name: "Prospect Park",
    description:
      "Brooklyn's version of Central Park — less crowded, more local.",
    location: "Brooklyn",
    when: "Open daily",
    tip: "Great for picnics and chill weekends.",
  },
  {
    name: "The High Line",
    description: "Elevated park built on old train tracks with city views.",
    location: "Chelsea / Meatpacking",
    when: "Open daily",
    tip: "Go at sunset for the best vibe.",
  },
  {
    name: "Brooklyn Bridge Park",
    description: "Waterfront park with skyline views of Manhattan.",
    location: "DUMBO / Brooklyn Heights",
    when: "Open daily",
    tip: "Best skyline photos at sunset.",
  },
  {
    name: "Governors Island",
    description: "Car-free island with hammocks, biking, and skyline views.",
    location: "NY Harbor",
    when: "Open seasonally",
    tip: "Free ferry on weekend mornings.",
  },
];

const PUBLIC_SPACES: FreeActivity[] = [
  {
    name: "Grand Central Terminal",
    description: "Iconic train station with beautiful architecture.",
    location: "Midtown",
    when: "Daily",
    tip: "Look up at the celestial ceiling in the main hall.",
  },
  {
    name: "New York Public Library",
    description: "Historic library with stunning reading rooms.",
    location: "Bryant Park",
    when: "Daily",
    tip: "Rose Main Reading Room is the highlight.",
  },
  {
    name: "Chelsea Market",
    description: "Indoor food market — free to explore.",
    location: "Chelsea",
    when: "Daily",
    tip: "Go even if you don't buy anything — great vibe.",
  },
  {
    name: "Staten Island Ferry",
    description: "Free ferry ride with Statue of Liberty views.",
    location: "Lower Manhattan",
    when: "Runs 24/7",
    tip: "Sit on the right side going out for the best views.",
  },
];

const FREE_ACTIVITIES: FreeActivity[] = [
  {
    name: "Free Walking Tours",
    description: "Explore neighborhoods like SoHo, Chinatown, and Brooklyn.",
    location: "Various",
    when: "Daily",
    tip: "Tip-based — bring cash.",
  },
  {
    name: "DUMBO Art Walk",
    description: "Street art, cobblestone streets, and iconic photo spots.",
    location: "DUMBO",
    when: "Anytime",
    tip: "Washington St view = classic Manhattan Bridge shot.",
  },
  {
    name: "Times Square at Night",
    description: "Bright lights and chaos — classic NYC experience.",
    location: "Midtown",
    when: "Best at night",
    tip: "Go once. That's enough.",
  },
  {
    name: "Brooklyn Bridge Walk",
    description: "Walk across one of NYC's most famous landmarks.",
    location: "Manhattan ↔ Brooklyn",
    when: "Open daily",
    tip: "Go early morning to avoid crowds.",
  },
  {
    name: "Outdoor Movies (Summer)",
    description: "Free movie screenings in parks across NYC.",
    location: "Various parks",
    when: "Summer evenings",
    tip: "Bring a blanket and snacks.",
  },
];

export default function FreePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-white font-bold text-[10px]">
                NYC
              </div>
              <span className="font-semibold text-sm text-foreground">
                BudgetNYC
              </span>
            </Link>
            <span className="text-muted text-xs">/ Free Things</span>
          </div>
          <Link href="/" className="text-xs text-accent hover:underline">
            Back to Map
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-warm/40" />
        <div className="relative max-w-4xl mx-auto px-4 pt-10 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light text-accent-dark text-xs font-medium mb-4 slide-up">
            <span>🆓</span> $0 required
          </div>
          <h1
            className="text-3xl sm:text-4xl text-foreground mb-3 slide-up"
            style={{
              fontFamily: "var(--font-dm-serif)",
              animationDelay: "0.05s",
              animationFillMode: "both",
            }}
          >
            Free Things to Do in NYC
          </h1>
          <p
            className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Museums, parks, public spaces, and activities that cost nothing. NYC
            is expensive — but the best parts are free.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Section
          title="Free Museum Days"
          subtitle="Mark your calendar — most museums have one free day per month"
          items={MUSEUM_FREE_DAYS}
        />
        <Section
          title="Parks & Nature"
          subtitle="NYC has some of the best urban parks in the world"
          items={PARKS_AND_NATURE}
        />
        <Section
          title="Public Spaces"
          subtitle="Beautiful spaces that are free and open to everyone"
          items={PUBLIC_SPACES}
        />
        <Section
          title="Free Activities"
          subtitle="Things to do that cost $0"
          items={FREE_ACTIVITIES}
        />
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: FreeActivity[];
}) {
  return (
    <section className="mb-12">
      <h2
        className="text-xl text-foreground mb-1"
        style={{ fontFamily: "var(--font-dm-serif)" }}
      >
        {title}
      </h2>
      <p className="text-xs text-muted mb-5">{subtitle}</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl border border-border p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <h3 className="text-sm font-semibold text-foreground">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {item.name}
                    <span className="ml-1 text-[10px] opacity-40">&#8599;</span>
                  </a>
                ) : (
                  item.name
                )}
              </h3>
              <span className="shrink-0 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-medium">
                Free
              </span>
            </div>
            <p className="text-xs text-muted mb-2 leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
              <span>
                <span className="font-medium text-foreground">Where:</span>{" "}
                {item.location}
              </span>
              <span>
                <span className="font-medium text-foreground">When:</span>{" "}
                {item.when}
              </span>
            </div>
            {item.tip && (
              <div className="mt-2.5 rounded-lg bg-accent-light/40 border border-accent/10 px-3 py-2">
                <p className="text-[11px] text-accent-dark">
                  <span className="font-semibold">Tip:</span> {item.tip}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
