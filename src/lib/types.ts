export type Category =
  | "food"
  | "housing"
  | "workspace"
  | "coffee"
  | "gym"
  | "bars"
  | "grocery"
  | "startup"
  | "vc"
  | "entertainment"
  | "services"
  | "other";

export interface Place {
  id: string;
  name: string;
  category: Category;
  subcategory?: string;
  address: string;
  neighborhood: string;
  description: string;
  price_tier: 1 | 2 | 3 | 4;
  avg_price?: number | string;
  tags: string[];
  lat: number;
  lng: number;
  image_url?: string;
  website?: string;
  status: "pending" | "approved" | "rejected";
  vote_count: number;
  votes_needed: number;
  submitted_by: string;
  created_at: string;
  updated_at: string;
}

export interface Vote {
  id: string;
  place_id: string;
  user_fingerprint: string;
  created_at: string;
}

export const CATEGORIES: { value: Category; label: string; icon: string }[] = [
  { value: "food", label: "Food", icon: "🍽️" },
  { value: "housing", label: "Housing", icon: "🏠" },
  { value: "workspace", label: "Work Spots", icon: "💻" },
  { value: "coffee", label: "Coffee", icon: "☕" },
  { value: "startup", label: "Accelerators", icon: "🚀" },
  { value: "vc", label: "VCs", icon: "💰" },
  { value: "gym", label: "Gym & Fitness", icon: "💪" },
  { value: "bars", label: "Bars & Drinks", icon: "🍺" },
  { value: "grocery", label: "Grocery", icon: "🛒" },
  { value: "entertainment", label: "Entertainment", icon: "🎭" },
  { value: "services", label: "Services", icon: "✂️" },
  { value: "other", label: "Other", icon: "📍" },
];

export const PRICE_TIERS: Record<number, string> = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$",
};

export const NEIGHBORHOODS = [
  "Manhattan - Financial District",
  "Manhattan - Tribeca",
  "Manhattan - SoHo",
  "Manhattan - Greenwich Village",
  "Manhattan - East Village",
  "Manhattan - West Village",
  "Manhattan - Chelsea",
  "Manhattan - Midtown",
  "Manhattan - Hell's Kitchen",
  "Manhattan - Upper West Side",
  "Manhattan - Upper East Side",
  "Manhattan - Harlem",
  "Manhattan - Washington Heights",
  "Manhattan - Inwood",
  "Brooklyn - Williamsburg",
  "Brooklyn - Greenpoint",
  "Brooklyn - Bushwick",
  "Brooklyn - Park Slope",
  "Brooklyn - Carroll Gardens",
  "Brooklyn - Cobble Hill",
  "Brooklyn - Brooklyn Heights",
  "Brooklyn - DUMBO",
  "Brooklyn - Fort Greene",
  "Brooklyn - Prospect Heights",
  "Brooklyn - Crown Heights",
  "Brooklyn - Bed-Stuy",
  "Brooklyn - Sunset Park",
  "Queens - Astoria",
  "Queens - Long Island City",
  "Queens - Flushing",
  "Queens - Jackson Heights",
  "Bronx - South Bronx",
  "Bronx - Fordham",
  "Staten Island",
  "Other",
];
