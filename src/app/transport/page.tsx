"use client";

import Link from "next/link";

type TransportMode = {
  name: string;
  icon: string;
  tagline: string;
  cost: string;
  bestFor: string;
  description: string;
  tips: string[];
  link?: string;
  linkLabel?: string;
  highlight?: string;
};

const TRANSPORT_MODES: TransportMode[] = [
  // === Subway ===
  {
    name: "MTA Subway",
    icon: "🚇",
    tagline: "The backbone of NYC — 472 stations, 24/7",
    cost: "$2.90/ride or $34/week unlimited",
    bestFor: "Getting anywhere in NYC fast and cheap",
    description:
      "The NYC subway is the most extensive public transit system in North America. 24 lines, 472 stations, running 24/7. Once you learn the system, you can get anywhere. The unlimited weekly MetroCard ($34) pays for itself after 12 rides.",
    tips: [
      "Get a MetroCard or use OMNY (tap-to-pay with phone/card)",
      "$34/week unlimited is the best deal if you ride 2+ times per day",
      "Express trains skip stops — check the map before boarding",
      "Late night service is slower but still runs — safer than walking",
      "Download Citymapper or Google Maps for real-time train tracking",
      "Uptown = north, Downtown = south, Crosstown = east-west",
    ],
    link: "https://new.mta.info",
    linkLabel: "MTA Info",
    highlight: "$34/week Unlimited",
  },

  // === Citi Bike ===
  {
    name: "Citi Bike",
    icon: "🚴",
    tagline: "20,000+ bikes across NYC — $15/month unlimited",
    cost: "$15/month unlimited | $4.49/ride",
    bestFor: "Short trips under 45 minutes",
    description:
      "NYC's bike share system with docking stations across Manhattan, Brooklyn, Queens, and the Bronx. The $15/month membership gives you unlimited 45-minute rides. Perfect for quick crosstown trips or avoiding crowded trains.",
    tips: [
      "$15/month unlimited is an incredible deal — cheaper than 6 subway rides",
      "Check bike/dock availability in the app before heading out",
      "Bike lanes exist but stay alert — NYC traffic is intense",
      "Swap bikes at any station to reset your 45-minute timer",
      "E-bikes cost an extra $0.20/min but make bridges and hills easy",
      "Return bikes 5 minutes before the 45-min mark to avoid fees",
    ],
    link: "https://citibikenyc.com",
    linkLabel: "Get Citi Bike",
    highlight: "$15/mo Unlimited",
  },

  // === Buses ===
  {
    name: "MTA Buses",
    icon: "🚌",
    tagline: "When the subway doesn't go where you need",
    cost: "$2.90/ride (free transfer from subway within 2 hours)",
    bestFor: "Crosstown routes, outer boroughs, late night",
    description:
      "NYC buses fill in the gaps where the subway doesn't reach. Slower than trains but sometimes more direct. The M15 SBS (Select Bus Service) lines are faster with fewer stops. Free transfers from subway to bus within 2 hours.",
    tips: [
      "Use Google Maps or Citymapper to find the right bus",
      "SBS (Select Bus Service) lines are express — fewer stops, faster",
      "Pay before boarding on SBS routes at the sidewalk kiosk",
      "M14, M15, M34 are key crosstown routes",
      "Buses show 'Limited' for express routes that skip stops",
      "Free transfer from subway to bus within 2 hours with MetroCard",
    ],
    link: "https://new.mta.info/guides/buses",
    linkLabel: "Bus Guide",
  },

  // === Walking ===
  {
    name: "Walking",
    icon: "🚶",
    tagline: "NYC is built for walking",
    cost: "Free",
    bestFor: "Short distances, exploring neighborhoods",
    description:
      "Manhattan is only 13.4 miles long and 2.3 miles wide. Many neighborhoods are more walkable than you think. Walking is often faster than waiting for the subway for trips under 10 blocks. Plus you actually see the city.",
    tips: [
      "20 blocks = 1 mile — use this to estimate walking time",
      "Walk north-south when possible — avenues are long, blocks are short",
      "Download CityMapper for the best walk/transit combo routes",
      "Avoid walking through certain areas late at night — take the subway",
      "Central Park is great for walking meetings",
      "Pedestrians have right of way, but don't test NYC drivers",
    ],
    highlight: "Free & Healthy",
  },

  // === Rideshare ===
  {
    name: "Uber / Lyft",
    icon: "🚗",
    tagline: "For when you really need a car",
    cost: "$15-40+ per ride (surge pricing applies)",
    bestFor: "Late nights, groups, outer boroughs, luggage",
    description:
      "In NYC, rideshare is expensive and often slower than the subway due to traffic. Best for late nights, traveling with luggage, or splitting costs with friends. Always check both Uber and Lyft — pricing varies.",
    tips: [
      "Subway is almost always faster and cheaper for Manhattan",
      "Rideshare makes sense for outer boroughs with poor subway access",
      "Split rides with friends to make it more affordable",
      "Avoid Friday/Saturday nights — surge pricing is brutal",
      "For airports, compare with subway — it's usually way cheaper",
      "Use UberX Share or Lyft Shared to save 30-50%",
    ],
    link: "https://uber.com",
    linkLabel: "Download Uber",
  },
  {
    name: "Via",
    icon: "🚐",
    tagline: "Shared rides for $5-8 in outer boroughs",
    cost: "$5-8 per ride",
    bestFor: "Affordable rides in outer boroughs and transit deserts",
    description:
      "Via operates shared van service in areas with limited subway access. Much cheaper than Uber/Lyft for short trips. Available in parts of Brooklyn, Queens, and the Bronx. Book through the app and get picked up at a nearby corner.",
    tips: [
      "Only works in specific zones — check the app for coverage",
      "Shared ride means small detours to pick up other passengers",
      "Way cheaper than Uber for outer borough trips",
      "Book ahead for better pricing",
    ],
    link: "https://ridewithvia.com",
    linkLabel: "Get Via",
  },

  // === Ferry ===
  {
    name: "NYC Ferry",
    icon: "⛴️",
    tagline: "Scenic commute across the waterways",
    cost: "$4.50/ride (same as subway)",
    bestFor: "Commuting from Brooklyn/Queens, avoiding subway crowds",
    description:
      "NYC Ferry connects Manhattan, Brooklyn, Queens, and the Bronx with routes along the East River and Hudson. Same price as the subway but with better views. Runs year-round, weather permitting.",
    tips: [
      "$4.50 per ride — same price as a subway ride",
      "Great for avoiding packed trains during rush hour",
      "Routes include Astoria, Williamsburg, DUMBO, and Rockaway Beach",
      "Bikes allowed on board for free",
      "Can be delayed or canceled in bad weather",
      "The Rockaway route is perfect for summer beach trips",
    ],
    link: "https://www.ferry.nyc",
    linkLabel: "NYC Ferry",
    highlight: "Same Price as Subway",
  },

  {
    name: "Staten Island Ferry",
    icon: "🛳️",
    tagline: "Free ride with Statue of Liberty views",
    cost: "FREE",
    bestFor: "Free Statue of Liberty views, killing time",
    description:
      "The Staten Island Ferry is completely free and runs 24/7 between Manhattan and Staten Island. The 25-minute ride offers incredible views of the Statue of Liberty, Ellis Island, and the downtown skyline. Tourists pay $30+ for worse views.",
    tips: [
      "Completely free — best deal in NYC",
      "Runs 24/7 every 15-30 minutes",
      "Board on the right side (Manhattan to SI) for Statue of Liberty views",
      "Round trip takes about 1 hour — you don't have to get off in Staten Island",
      "Bring a jacket — it gets windy on the outdoor decks",
      "Go at sunset for the best photos",
    ],
    link: "https://www.siferry.com",
    linkLabel: "Staten Island Ferry",
    highlight: "FREE",
  },

  // === Commuter Rail ===
  {
    name: "Metro-North & LIRR",
    icon: "🚆",
    tagline: "Commuter trains to the suburbs",
    cost: "$5-20 depending on distance",
    bestFor: "Getting to outer suburbs, Westchester, Long Island",
    description:
      "Metro-North goes north to Westchester and Connecticut from Grand Central. LIRR goes east to Long Island from Penn Station. Both are essential if you're living in the suburbs or visiting friends outside the city.",
    tips: [
      "Metro-North leaves from Grand Central, LIRR from Penn Station",
      "Off-peak tickets are cheaper — avoid rush hour if possible",
      "Monthly passes available if you're commuting regularly",
      "LIRR goes to beaches on Long Island in summer",
      "Check weekend schedules — service is less frequent",
    ],
    link: "https://new.mta.info/agency/metro-north",
    linkLabel: "Metro-North / LIRR",
  },
];

const BUDGET_HACKS = [
  "MetroCard unlimited ($34/week) pays for itself after 12 rides",
  "Citi Bike ($15/mo) is cheaper than 6 subway rides and gets you around faster",
  "Walking is often faster than subway for trips under 10 blocks",
  "Staten Island Ferry is FREE and has the best Statue of Liberty views",
  "Free subway-to-bus transfers within 2 hours — use it strategically",
  "Skip Uber/Lyft unless absolutely necessary — subway is faster and way cheaper",
];

export default function TransportPage() {
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
            <span className="text-muted text-xs">/ Getting Around</span>
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
            <span>🚇</span> You don't need a car
          </div>
          <h1
            className="text-3xl sm:text-4xl text-foreground mb-3 slide-up"
            style={{
              fontFamily: "var(--font-dm-serif)",
              animationDelay: "0.05s",
              animationFillMode: "both",
            }}
          >
            Getting Around NYC
          </h1>
          <p
            className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Subway, bikes, buses, and ferries. Everything you need to navigate
            NYC without breaking the bank.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Transit commuter chart */}
        <TransitChart />

        {/* Budget hacks */}
        <div className="bg-white rounded-2xl border border-border p-5 mb-10">
          <h2
            className="text-lg text-foreground mb-3"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Budget Transport Hacks
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {BUDGET_HACKS.map((hack) => (
              <li
                key={hack}
                className="flex items-start gap-2 text-xs text-muted"
              >
                <span className="text-accent mt-0.5 shrink-0">*</span>
                {hack}
              </li>
            ))}
          </ul>
        </div>

        {/* Transport modes */}
        <div className="space-y-4">
          {TRANSPORT_MODES.map((mode) => (
            <div
              key={mode.name}
              className="bg-white rounded-2xl border border-border p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{mode.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {mode.name}
                    </h3>
                    <p className="text-xs text-muted">{mode.tagline}</p>
                  </div>
                </div>
                {mode.highlight && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-accent-light text-accent-dark text-[10px] font-semibold">
                    {mode.highlight}
                  </span>
                )}
              </div>

              <p className="text-sm text-foreground mb-3 leading-relaxed">
                {mode.description}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted mb-4">
                <span>
                  <span className="font-medium text-foreground">Cost:</span>{" "}
                  {mode.cost}
                </span>
                <span>
                  <span className="font-medium text-foreground">Best for:</span>{" "}
                  {mode.bestFor}
                </span>
              </div>

              <div className="rounded-xl bg-background border border-border/60 p-4 mb-3">
                <p className="text-[11px] font-semibold text-foreground mb-2">
                  Tips
                </p>
                <ul className="space-y-1.5">
                  {mode.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-xs text-muted"
                    >
                      <span className="text-accent mt-0.5 shrink-0">-</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {mode.link && (
                <a
                  href={mode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-accent hover:underline"
                >
                  {mode.linkLabel}
                  <span className="ml-1">&rarr;</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TRANSIT_DATA = [
  { city: "New York, NY", pct: 31.2, country: "us" },
  { city: "Toronto, ON", pct: 24.7, country: "ca" },
  { city: "Vancouver, BC", pct: 21.5, country: "ca" },
  { city: "Montreal, QC", pct: 21.5, country: "ca" },
  { city: "Calgary, AB", pct: 15.5, country: "ca" },
  { city: "San Francisco, CA", pct: 14.4, country: "us" },
  { city: "Ottawa-Gatineau, ON", pct: 12.7, country: "ca" },
  { city: "Boston, MA", pct: 11.6, country: "us" },
  { city: "Victoria, BC", pct: 11.4, country: "ca" },
  { city: "Winnipeg, MB", pct: 11.2, country: "ca" },
  { city: "Washington, DC", pct: 10.4, country: "us" },
  { city: "Chicago, IL", pct: 10.2, country: "us" },
  { city: "Bridgeport, CT", pct: 10.0, country: "us" },
  { city: "Hamilton, ON", pct: 9.5, country: "ca" },
  { city: "Philadelphia, PA", pct: 8.7, country: "us" },
  { city: "Kitchener-Waterloo, ON", pct: 8.6, country: "ca" },
  { city: "Edmonton, AB", pct: 8.3, country: "ca" },
  { city: "Seattle, WA", pct: 8.1, country: "us" },
];

const MAX_PCT = 35;

function TransitChart() {
  return (
    <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 mb-10 slide-up">
      <h2
        className="text-lg text-foreground mb-1"
        style={{ fontFamily: "var(--font-dm-serif)" }}
      >
        NYC leads North America in transit usage
      </h2>
      <p className="text-[11px] text-muted mb-5">
        Canadian &amp; U.S. metro areas with the highest share of transit
        commuters.{" "}
        <span className="italic">
          Source: Statistics Canada (LFS 2025) &amp; U.S. Census Bureau (ACS
          2024)
        </span>
      </p>

      <div className="space-y-1.5">
        {TRANSIT_DATA.map((d) => {
          const isNYC = d.city.startsWith("New York");
          const barColor = isNYC
            ? "bg-accent"
            : d.country === "ca"
              ? "bg-red-400"
              : "bg-blue-400";
          const textColor = isNYC ? "text-accent font-semibold" : "text-muted";

          return (
            <div key={d.city} className="flex items-center gap-2">
              <span
                className={`text-[11px] w-[140px] sm:w-[170px] shrink-0 text-right truncate ${textColor}`}
              >
                {d.city}
              </span>
              <div className="flex-1 h-5 bg-background rounded overflow-hidden">
                <div
                  className={`h-full rounded transition-all duration-700 ${barColor} ${isNYC ? "shadow-sm" : ""}`}
                  style={{ width: `${(d.pct / MAX_PCT) * 100}%` }}
                />
              </div>
              <span className={`text-[11px] w-[38px] shrink-0 ${textColor}`}>
                {d.pct}%
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-4 text-[10px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-blue-400 inline-block" /> U.S.
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-red-400 inline-block" />{" "}
          Canada
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-accent inline-block" /> New
          York City
        </span>
      </div>
    </div>
  );
}
