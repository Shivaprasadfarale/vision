/**
 * Block 1-4 — "Your challenges" grid of four concern cards.
 * Keyed by "<page>/<section-index>".
 *
 * Cards show either an inline equilibre shape (`--shapes` variant, home) or an
 * SVG illustration image (`--shape-media` cards, preoccupations hub).
 */
export type PreoccupationShape = "square" | "diamond" | "circle" | "triangle";
export type PreoccupationCard = {
  slug: string;
  title: string;
  desc: string;
  shape: PreoccupationShape;
  /** Upload path of the illustration (media variant only). */
  image?: string;
};
export type PreoccupationsProps = {
  /** Accessible label (plain text). */
  label: string;
  /** Title HTML (contains <br />). */
  titleHtml: string;
  headingLevel: "h1" | "h2";
  /** Inline shapes (home) vs illustration images (hub). */
  variant: "shapes" | "media";
  ctaLabel: string;
  cards: PreoccupationCard[];
};

export const preoccupations: Record<string, PreoccupationsProps> = {
  "home/04": {
    label: "YOUR CHALLENGES",
    titleHtml: "YOUR<br />CHALLENGES",
    headingLevel: "h2",
    variant: "shapes",
    ctaLabel: "LEARN MORE",
    cards: [
      {
        slug: "lease-expiry",
        shape: "square",
        title: "End of Lease: Stay or Move?",
        desc: "Is your lease coming to an end? Stay or move—we analyze both options for you. A clear, data-driven answer with no obligation.",
      },
      {
        slug: "bring-teams-back",
        shape: "diamond",
        title: "Bring Teams Back to the Office",
        desc: "Bring teams back to the office? Struggling with team cohesion and engagement? We provide a clear solution that benefits both your business and your employees.",
      },
      {
        slug: "attract-and-retain-talent",
        shape: "circle",
        title: "Attract and Retain Talent",
        desc: "A workplace that reflects your culture attracts top talent and helps retain your teams. Your employees should want to come to the office—and stay.",
      },
      {
        slug: "complex-projects",
        shape: "triangle",
        title: "Complex Projects",
        desc: "Is your project too complex for a single provider? We coordinate all the required expertise. We take on the risk—so you don’t have to.",
      },
    ],
  },
  "preoccupations/01": {
    label: "YOUR CONCERNS",
    titleHtml: "YOUR<br />CONCERNS",
    headingLevel: "h1",
    variant: "media",
    ctaLabel: "Learn more",
    cards: [
      {
        slug: "lease-expiry",
        shape: "square",
        image: "2026/06/1.svg",
        title: "Lease Expiry: Stay or Move?",
        desc: "Is your lease coming to an end? Stay or move—we analyze both options for you. A clear, data-driven recommendation with no obligation.",
      },
      {
        slug: "bring-teams-back",
        shape: "diamond",
        image: "2026/06/2.svg",
        title: "Bringing Teams Back to the Office",
        desc: "Bring Your Teams Back to the Office? Struggling with a lack of team cohesion and collaboration? A clear solution that benefits both your business and your employees.",
      },
      {
        slug: "attract-and-retain-talent",
        shape: "circle",
        image: "2026/06/3.svg",
        title: "Attract and Retain Talent",
        desc: "A workplace that reflects your culture attracts top talent and helps retain your teams. Your employees should want to come to the office—and stay.",
      },
      {
        slug: "complex-projects",
        shape: "triangle",
        image: "2026/06/4.svg",
        title: "Complex Projects",
        desc: "Is your project too complex for a single provider? We coordinate all the required expertise. All the risks are on us, not on you.",
      },
    ],
  },
};
