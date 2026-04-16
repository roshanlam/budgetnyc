import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: "BudgetNYC — Cheap Spots in NYC, by Locals",
  description:
    "Community-curated budget-friendly food, groceries, gyms, and more in New York City. Open source, powered by locals.",
  openGraph: {
    title: "BudgetNYC — Cheap Spots in NYC",
    description:
      "Find the cheapest food, groceries, gyms & more in New York City. Community-curated, 5 approvals to go live.",
    siteName: "BudgetNYC",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "BudgetNYC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BudgetNYC — Cheap Spots in NYC",
    description:
      "Community-curated budget spots in New York City. Discover or add your favorites.",
    images: ["/api/og"],
  },
  keywords: [
    "New York City",
    "NYC",
    "budget",
    "cheap food",
    "cheap gym",
    "NYC deals",
    "community",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
