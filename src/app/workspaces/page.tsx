"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type WorkspaceType =
  | "all"
  | "free"
  | "coworking"
  | "library"
  | "hotel-lobby"
  | "cafe";

type Workspace = {
  name: string;
  type: WorkspaceType;
  neighborhood: string;
  description: string;
  price: string;
  wifi: boolean;
  outlets: boolean;
  hours: string;
  vibe: string;
  address?: string;
  url?: string;
  tip?: string;
};

const WORKSPACES: Workspace[] = [
  // 🆓 Free / near-free coworking vibes
  {
    name: "Industry City",
    type: "free",
    neighborhood: "Sunset Park",
    description:
      "Massive indoor/outdoor complex with tons of seating, wifi, and food vendors. Easy to spend all day here.",
    price: "$10-15 (coffee + food)",
    wifi: true,
    outlets: true,
    hours: "Varies by building",
    vibe: "Spacious, creative, chill",
    tip: "Best on weekday mornings. Grab coffee + lunch and camp out.",
  },
  {
    name: "Brookfield Place",
    type: "free",
    neighborhood: "FiDi",
    description:
      "Upscale shopping and dining complex with plenty of seating and quieter corners for laptop work.",
    price: "$10-15",
    wifi: true,
    outlets: true,
    hours: "Daily",
    vibe: "Quiet, clean, corporate",
    tip: "Try the upper-level seating for a calmer setup.",
  },

  // 📚 Libraries (best value = $0)
  {
    name: "NYPL Stephen A. Schwarzman Building",
    type: "library",
    neighborhood: "Bryant Park",
    description:
      "Iconic main branch with beautiful reading rooms and a classic quiet-work atmosphere.",
    price: "Free",
    wifi: true,
    outlets: false,
    hours: "10am–6pm",
    vibe: "Silent, focused, beautiful",
    tip: "Go early for the best seating in the Rose Main Reading Room.",
  },
  {
    name: "Brooklyn Public Library Central Library",
    type: "library",
    neighborhood: "Prospect Heights",
    description:
      "Large public library with coworking-style spaces and a strong setup for focused work.",
    price: "Free",
    wifi: true,
    outlets: true,
    hours: "10am–6pm",
    vibe: "Quiet, local, spacious",
    tip: "The Information Commons is the best area for laptop work.",
  },

  // 🏨 Hotel lobbies / public atriums
  {
    name: "Ace Hotel New York Lobby",
    type: "hotel-lobby",
    neighborhood: "NoMad",
    description:
      "Classic NYC laptop lobby with strong wifi, long tables, and lots of remote workers.",
    price: "$8-15",
    wifi: true,
    outlets: true,
    hours: "All day",
    vibe: "Busy, startup energy",
    tip: "Arrive earlier in the day for the best seats.",
  },
  {
    name: "Moxy Lower East Side Lobby",
    type: "hotel-lobby",
    neighborhood: "Lower East Side",
    description:
      "Modern, sleek lobby with natural light and a good amount of communal seating.",
    price: "$10-15",
    wifi: true,
    outlets: false,
    hours: "All day",
    vibe: "Minimal, stylish",
    tip: "Best for shorter work sessions or calls.",
  },
  {
    name: "Ace Hotel Brooklyn Lobby",
    type: "hotel-lobby",
    neighborhood: "Downtown Brooklyn",
    description:
      "Large airy lobby with comfortable seating and a strong work-from-hotel feel.",
    price: "$10-15",
    wifi: true,
    outlets: true,
    hours: "All day",
    vibe: "Bright, creative",
    tip: "Good for focused work if you want a polished environment.",
  },

  // ☕ Cafes (best under $20 combo)
  {
    name: "Partners Coffee",
    type: "cafe",
    neighborhood: "Williamsburg",
    description:
      "Popular plant-filled cafe with good coffee and a comfortable setup for laptop work.",
    price: "$12-18",
    wifi: true,
    outlets: true,
    hours: "8am–6pm",
    vibe: "Calm, aesthetic",
    tip: "Back area tends to be best for longer sessions.",
  },
  {
    name: "Housing Works Bookstore Cafe",
    type: "cafe",
    neighborhood: "SoHo",
    description:
      "Bookstore-cafe with a quiet literary vibe and a unique setting for working.",
    price: "$10-15",
    wifi: true,
    outlets: false,
    hours: "10am–6pm",
    vibe: "Quiet, intellectual",
    tip: "Great if you want a low-noise environment.",
  },
  {
    name: "Blank Street Coffee",
    type: "cafe",
    neighborhood: "Multiple",
    description:
      "Low-cost coffee option with some locations offering seating for quick work sessions.",
    price: "$8-12",
    wifi: true,
    outlets: false,
    hours: "7am–5pm",
    vibe: "Casual, quick",
    tip: "Best budget choice when you only need a few hours.",
  },
  {
    name: "Think Coffee",
    type: "cafe",
    neighborhood: "Union Square",
    description:
      "Reliable wifi, lots of seating, and a very work-friendly crowd.",
    price: "$12-18",
    wifi: true,
    outlets: true,
    hours: "7am–7pm",
    vibe: "Student/work heavy",
  },
  {
    name: "Housing Works Bookstore Cafe",
    type: "cafe",
    neighborhood: "SoHo",
    description:
      "One of the most distinctive laptop spots in Manhattan, with a bookstore feel and a quiet atmosphere.",
    price: "$10-15",
    wifi: true,
    outlets: false,
    hours: "10am–6pm",
    vibe: "Quiet, literary",
    tip: "Upstairs seating is usually the best if available.",
  },

  // 💻 Budget coworking
  {
    name: "The Yard (day pass deals)",
    type: "coworking",
    neighborhood: "Multiple",
    description:
      "Occasionally offers day passes or trials that can land under the usual membership cost.",
    price: "$15-20",
    wifi: true,
    outlets: true,
    hours: "Business hours",
    vibe: "Professional",
    tip: "Check promos because pricing varies a lot.",
  },
  {
    name: "The Yard: Lower East Side",
    type: "coworking",
    neighborhood: "Lower East Side",
    description:
      "Community-focused coworking with strong amenities, lounge space, and occasional access options.",
    price: "$15-20",
    wifi: true,
    outlets: true,
    hours: "Varies",
    vibe: "Community, startup",
  },
];

const FILTERS: { value: WorkspaceType; label: string; icon: string }[] = [
  { value: "all", label: "All", icon: "" },
  { value: "free", label: "Free", icon: "🆓" },
  { value: "coworking", label: "Coworking", icon: "💻" },
  { value: "library", label: "Libraries", icon: "📚" },
  { value: "hotel-lobby", label: "Hotel Lobbies", icon: "🏨" },
  { value: "cafe", label: "Cafes", icon: "☕" },
];

export default function WorkspacesPage() {
  const [filter, setFilter] = useState<WorkspaceType>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return WORKSPACES.filter((w) => {
      const matchesType = filter === "all" || w.type === filter;
      const matchesSearch =
        search === "" ||
        w.name.toLowerCase().includes(search.toLowerCase()) ||
        w.neighborhood.toLowerCase().includes(search.toLowerCase()) ||
        w.description.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [filter, search]);

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
            <span className="text-muted text-xs">/ Workspaces</span>
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
            <span>💻</span> Free &amp; budget work spots
          </div>
          <h1
            className="text-3xl sm:text-4xl text-foreground mb-3 slide-up"
            style={{
              fontFamily: "var(--font-dm-serif)",
              animationDelay: "0.05s",
              animationFillMode: "both",
            }}
          >
            Work Spots
          </h1>
          <p
            className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Coworking spaces, libraries, hotel lobbies, and cafes where you can
            get work done in SF without breaking the bank.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search spots, neighborhoods..."
            className="flex-1 px-4 py-2 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  filter === f.value
                    ? "bg-foreground text-white"
                    : "bg-white text-muted border border-border hover:border-foreground/20"
                }`}
              >
                {f.icon && <span>{f.icon}</span>} {f.label}
                {f.value === "all" ? (
                  <span className="ml-0.5 opacity-60">
                    ({WORKSPACES.length})
                  </span>
                ) : (
                  <span className="ml-0.5 opacity-60">
                    ({WORKSPACES.filter((w) => w.type === f.value).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          {filtered.map((workspace) => (
            <WorkspaceCard key={workspace.name} workspace={workspace} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-sm text-muted">No spots found</p>
          </div>
        )}

        <div className="text-center pt-10 text-xs text-muted">
          Know a great work spot?{" "}
          <Link href="/submit" className="text-accent hover:underline">
            Submit it
          </Link>
        </div>

      </div>
    </div>
  );
}

function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  const typeColors: Record<string, { bg: string; text: string }> = {
    free: { bg: "bg-green-50", text: "text-green-700" },
    coworking: { bg: "bg-blue-50", text: "text-blue-700" },
    library: { bg: "bg-amber-50", text: "text-amber-700" },
    "hotel-lobby": { bg: "bg-purple-50", text: "text-purple-700" },
    cafe: { bg: "bg-orange-50", text: "text-orange-700" },
  };

  const typeLabels: Record<string, string> = {
    free: "Free Coworking",
    coworking: "Coworking",
    library: "Library",
    "hotel-lobby": "Hotel Lobby",
    cafe: "Cafe",
  };

  const colors = typeColors[workspace.type] ?? {
    bg: "bg-gray-50",
    text: "text-gray-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-border p-5 hover:shadow-sm transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h3 className="text-sm font-semibold text-foreground">
              {workspace.url ? (
                <a
                  href={workspace.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {workspace.name}
                  <span className="ml-1 text-[10px] opacity-40">&#8599;</span>
                </a>
              ) : (
                workspace.name
              )}
            </h3>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text}`}
            >
              {typeLabels[workspace.type]}
            </span>
          </div>

          <p className="text-xs text-muted mb-2.5">{workspace.description}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-muted">
            <span>
              <span className="font-medium text-foreground">
                {workspace.neighborhood}
              </span>
            </span>
            <span>
              <span className="font-medium text-foreground">
                {workspace.price}
              </span>
            </span>
            {workspace.wifi && <span>Wifi</span>}
            {workspace.outlets && <span>Outlets</span>}
            <span>{workspace.hours}</span>
          </div>

          {workspace.tip && (
            <div className="mt-2.5 rounded-lg bg-accent-light/40 border border-accent/10 px-3 py-2">
              <p className="text-[11px] text-accent-dark">
                <span className="font-semibold">Tip:</span> {workspace.tip}
              </p>
            </div>
          )}
        </div>

        <div className="shrink-0 text-right">
          <span className="text-xs font-medium text-muted italic">
            {workspace.vibe}
          </span>
        </div>
      </div>
    </div>
  );
}
