// Shared "contracts" for homepage section variants. Every variant of a given
// section type accepts the SAME props, so they're interchangeable via layout.ts.

export interface HeroData {
  badge: string;
  titleLead: string;
  titleAccent: string; // rendered in the brand accent
  titleTail: string;
  subhead: string;
  badges: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  icon: string;
  image?: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  desc: string;
  proof: string;
}

export interface ReviewItem {
  name: string;
  area: string;
  text: string;
}

export interface AreaLocation {
  city: string;
  state: string;
  summary: string;
  href: string;
}

export interface MapPin {
  city: string;
  top: string;
  left: string;
  hq: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}
