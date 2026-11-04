/**
 * Block 1-3 — highlighted quote with an animated "equilibre" totem.
 * Keyed by "<page>/<section-index>".
 *
 * - `modifiers` become `block-1-3-quote--<modifier>` classes and select the
 *   animation in src/scripts/blocks/block-1-3-quote.js:
 *     fly-in            → four separate shapes fly in (square/diamond/circle/triangle)
 *     assemble|wiggle|stretch → single stacked totem SVG
 *     maron / totem-left → colour / layout variants
 * - `exit` maps to data-quote-exit (home only: "land").
 */
export type QuoteModifier = "fly-in" | "maron" | "assemble" | "totem-left" | "wiggle" | "stretch";
export type QuoteProps = {
  text: string;
  modifiers: QuoteModifier[];
  exit?: string;
};

const flyIn = (text: string): QuoteProps => ({ text, modifiers: ["fly-in"] });

export const quote: Record<string, QuoteProps> = {
  "home/03": {
    ...flyIn(
      "Our signature: Shaping spaces. Commitment is at the heart of how we work. A strong belief and a total dedication to supporting businesses and the people who use their spaces.",
    ),
    exit: "land",
  },
  "dna-team/03": {
    text: "Committed to your success, we transform your challenges into cohesive and high-performing workspaces. Between ambition, functionality, and constraints, we find the right balance",
    modifiers: ["maron", "assemble"],
  },
  "expertises/03": {
    text: "Comprehensive expertise. We address the full range of workplace challenges.",
    modifiers: ["maron", "totem-left", "assemble"],
  },
  "expertises/architecture-design/05": flyIn(
    "Workspaces that bring your vision to life. We create environments designed around the way people work, the needs of your teams, and the identity of your business.",
  ),
  "expertises/consulting-strategy/05": flyIn(
    "A great workplace starts with the right decisions. We align strategy, ways of working, and real estate considerations to help you make the right choices.",
  ),
  "expertises/sustainability-ecology/05": flyIn(
    "Behind every sustainable project are better decisions and smarter trade-offs. We see sustainability as an operational responsibility, not just a statement of intent.",
  ),
  "expertises/technical-execution/05": flyIn(
    "Mastering a project means mastering every detail. We manage every project with a constant focus on budget, schedule, and quality.",
  ),
  "preoccupations/attract-and-retain-talent/03": flyIn(
    "Competing for talent doesn’t happen by chance. We support you with a structured approach to help make your recruitment efforts a success.",
  ),
  "preoccupations/bring-teams-back/03": flyIn(
    "Bringing teams back to the office doesn’t happen by chance. We guide you through a structured approach to ensure a successful and sustainable return.",
  ),
  "preoccupations/complex-projects/03": flyIn(
    "Delivering a complex project doesn’t happen by chance. We guide you with a structured methodology to ensure your project’s success.",
  ),
  "preoccupations/lease-expiry/03": {
    text: "Deciding whether to stay in your current premises or relocate is not something to be left to chance. We guide you with a structured approach to ensure your strategic decision is a success.",
    modifiers: ["maron", "stretch"],
  },
  "realisations/03": {
    text: "Our best project isn’t online yet—maybe it will be yours.",
    modifiers: ["maron", "totem-left", "wiggle"],
  },
};
