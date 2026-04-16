import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-warm">
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
            <span className="text-muted text-xs">/ About</span>
          </div>
          <Link href="/" className="text-xs text-accent hover:underline">
            Back to Map
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-3xl sm:text-4xl text-foreground mb-3"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            About BudgetNYC
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed">
            A community-curated guide to living affordably in New York City
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
              What is BudgetNYC?
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              BudgetNYC is an open-source, community-driven platform that helps New Yorkers discover
              affordable food, gyms, coworking spaces, free activities, and more across the city.
            </p>
            <p className="text-muted leading-relaxed">
              Unlike traditional review sites, BudgetNYC focuses specifically on budget-friendly options
              that make living in NYC more accessible. Every spot on the map is community-curated and
              requires 5 community approvals before going live.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
              How It Works
            </h2>
            <ul className="space-y-2 text-muted">
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span><strong>Discover:</strong> Browse the interactive map to find budget spots near you</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span><strong>Contribute:</strong> Submit new spots you've discovered through the Community page</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span><strong>Vote:</strong> Help approve or reject community submissions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span><strong>Share:</strong> Tell other New Yorkers about spots that saved you money</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Open Source & Community-Driven
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              BudgetNYC is fully open source and available on{" "}
              <a
                href="https://github.com/roshanlam/BudgetNYC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>
              . We believe budget resources should be free and accessible to everyone.
            </p>
            <p className="text-muted leading-relaxed">
              This project was forked from{" "}
              <a
                href="https://github.com/iharnoor/BudgetSF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                BudgetSF
              </a>
              , created by{" "}
              <a
                href="https://github.com/iharnoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                @iharnoor
              </a>
              , and adapted for New York City by{" "}
              <a
                href="https://github.com/roshanlam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                @roshanlam
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Get Involved
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              BudgetNYC is maintained by the community. Here's how you can help:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/community"
                className="p-4 bg-white border border-border rounded-xl hover:border-accent transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">Submit Spots</h3>
                <p className="text-xs text-muted">Know a cheap spot? Share it with the community</p>
              </Link>
              <a
                href="https://github.com/roshanlam/BudgetNYC"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-border rounded-xl hover:border-accent transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">Contribute Code</h3>
                <p className="text-xs text-muted">Help build features or fix bugs on GitHub</p>
              </a>
            </div>
          </section>

          <section className="text-center pt-8 border-t border-border">
            <p className="text-xs text-muted">
              Made with ❤️ by the NYC community
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
