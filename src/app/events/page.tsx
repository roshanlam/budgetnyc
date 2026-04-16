"use client";

import Link from "next/link";

type EventPlatform = {
  name: string;
  description: string;
  url: string;
  icon: string;
  highlight?: string;
};

type Community = {
  name: string;
  description: string;
  url?: string;
  vibe: string;
  free: boolean;
};

const EVENT_PLATFORMS: EventPlatform[] = [
  {
    name: "Luma",
    description:
      "Where most NYC tech events are hosted. Search by city, follow organizers, and RSVP. Tech talks, founder meetups, and networking events.",
    url: "https://lu.ma/nyc",
    icon: "✨",
    highlight: "Most Events Here",
  },
  {
    name: "Eventbrite",
    description:
      "Conferences, workshops, and networking events. Filter by free events to find panels, talks, and meetups across the city.",
    url: "https://www.eventbrite.com/d/ny--new-york/free--events/",
    icon: "🎟️",
  },
  {
    name: "Meetup",
    description:
      "Classic platform for recurring meetups. Great for niche communities — engineering, product, design, specific languages and frameworks.",
    url: "https://www.meetup.com/find/?location=us--ny--new-york",
    icon: "👥",
  },
  {
    name: "Partiful",
    description:
      "Invite-only events app. More social and party-oriented — great for founder dinners, house parties, and informal gatherings.",
    url: "https://partiful.com",
    icon: "🎉",
    highlight: "Social Events",
  },
  {
    name: "Tech:NYC Events",
    description:
      "NYC's largest tech advocacy organization hosts events, panels, and networking for the NYC tech ecosystem.",
    url: "https://www.technyc.org/events",
    icon: "🗽",
  },
];

const COMMUNITIES: Community[] = [
  {
    name: "NYC Tech Meetup",
    description:
      "Monthly meetup featuring demos from NYC startups. One of the oldest and largest tech communities in the city.",
    vibe: "Large, established, demos",
    free: true,
  },
  {
    name: "Brooklyn JS",
    description:
      "Monthly JavaScript meetup with talks, demos, and networking. One of the best tech communities in Brooklyn.",
    vibe: "JavaScript, technical",
    free: true,
  },
  {
    name: "HackerX",
    description:
      "Tech recruiting events where developers meet companies. Free for developers, good for networking and job hunting.",
    vibe: "Recruiting, networking",
    free: true,
  },
  {
    name: "Product School NYC",
    description:
      "Product management talks, workshops, and networking events. Great for PMs and aspiring product people.",
    vibe: "Product managers",
    free: true,
  },
  {
    name: "NYC Design Systems Coalition",
    description:
      "Community for designers and engineers working on design systems. Monthly meetups and workshops.",
    vibe: "Design systems, technical",
    free: true,
  },
  {
    name: "General Assembly Workshops",
    description:
      "Regular free workshops on coding, design, data, and digital marketing. Great for beginners and skill building.",
    vibe: "Educational, beginner-friendly",
    free: true,
  },
  {
    name: "NY Tech Alliance",
    description:
      "Network of 45,000+ tech professionals. Regular events, mixers, and professional development workshops.",
    vibe: "Professional networking",
    free: true,
  },
  {
    name: "Civic Hall",
    description:
      "Community space for civic tech and social impact. Regular events on tech for good, open data, and civic innovation.",
    vibe: "Civic tech, impact-focused",
    free: true,
  },
  {
    name: "Women Who Code NYC",
    description:
      "Community for women in tech with study groups, talks, and networking events. Very active chapter.",
    vibe: "Women in tech, supportive",
    free: true,
  },
  {
    name: "Black Tech Pipeline",
    description:
      "Building the next generation of Black technologists through networking events, workshops, and mentorship.",
    vibe: "Diversity in tech",
    free: true,
  },
  {
    name: "Flatiron School Events",
    description:
      "Regular tech talks, workshops, and networking at their NYC campus. Open to the public, not just students.",
    vibe: "Educational, coding",
    free: true,
  },
  {
    name: "NYC Machine Learning",
    description:
      "Monthly meetup for ML practitioners, researchers, and enthusiasts. Technical talks and networking.",
    vibe: "Machine learning, technical",
    free: true,
  },
  {
    name: "Techstars NYC",
    description:
      "Demo days, mentorship events, and founder meetups from one of the top accelerators in the city.",
    vibe: "Startups, high-growth",
    free: true,
  },
  {
    name: "AngelList NYC Meetups",
    description:
      "Networking events for startup founders, early employees, and angel investors in the NYC ecosystem.",
    vibe: "Startups, early-stage",
    free: true,
  },
  {
    name: "The New York Python Meetup",
    description:
      "One of the largest Python communities in the world. Monthly talks, workshops, and project nights.",
    vibe: "Python, technical",
    free: true,
  },
  {
    name: "NYC Blockchain Center",
    description:
      "Educational hub for blockchain and crypto with regular events, workshops, and networking.",
    vibe: "Blockchain, crypto",
    free: true,
  },
  {
    name: "NYC React Meetup",
    description:
      "Monthly meetup for React developers with talks, demos, and networking. Very active community.",
    vibe: "React, frontend",
    free: true,
  },
  {
    name: "Junior Developer Happy Hour",
    description:
      "Monthly networking for junior developers, bootcamp grads, and career changers. Supportive and welcoming.",
    vibe: "Junior devs, supportive",
    free: true,
  },
];

export default function EventsPage() {
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
            <span className="text-muted text-xs">/ Events</span>
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
            <span>🗓️</span> Get plugged in
          </div>
          <h1
            className="text-3xl sm:text-4xl text-foreground mb-3 slide-up"
            style={{
              fontFamily: "var(--font-dm-serif)",
              animationDelay: "0.05s",
              animationFillMode: "both",
            }}
          >
            Events & Community
          </h1>
          <p
            className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            The best way to meet people in NYC is to show up. Here&apos;s where
            to find tech events and communities across the city.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Event Platforms */}
        <section className="mb-12">
          <h2
            className="text-xl text-foreground mb-1"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Where to Find Events
          </h2>
          <p className="text-xs text-muted mb-5">
            Bookmark these. Most NYC tech events are posted on one of these platforms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EVENT_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-border p-5 hover:shadow-sm transition-shadow group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{platform.icon}</span>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {platform.name}
                      <span className="ml-1 text-[10px] opacity-40">
                        &#8599;
                      </span>
                    </h3>
                  </div>
                  {platform.highlight && (
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-accent-light text-accent-dark text-[10px] font-semibold">
                      {platform.highlight}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {platform.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Communities */}
        <section className="mb-10">
          <h2
            className="text-xl text-foreground mb-1"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            NYC Tech Communities
          </h2>
          <p className="text-xs text-muted mb-5">
            Show up consistently to one or two of these and you&apos;ll build a
            real network fast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMMUNITIES.map((community) => (
              <div
                key={community.name}
                className="bg-white rounded-2xl border border-border p-4"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {community.name}
                  </h3>
                  <span
                    className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      community.free
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {community.free ? "Free" : "Paid"}
                  </span>
                </div>
                <p className="text-xs text-muted mb-2 leading-relaxed">
                  {community.description}
                </p>
                <span className="text-[10px] text-muted italic">
                  {community.vibe}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white rounded-2xl border border-border p-5 text-center">
          <p className="text-xs text-muted mb-2">
            <strong>Pro tip:</strong> Most communities post events on Luma and Meetup. Follow the ones that interest you to get notified about new events.
          </p>
          <p className="text-[11px] text-muted">
            Many communities have Slack/Discord groups where the real conversations happen. Ask organizers how to join after attending your first event.
          </p>
        </div>
      </div>
    </div>
  );
}
