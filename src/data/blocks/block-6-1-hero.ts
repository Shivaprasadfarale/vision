/**
 * Block 6-1 — listing hero: split-line heading, description and the
 * "équilibre" totem sliding in from the right (src/scripts/blocks/block-6-1-hero.js).
 * Only the `--no-filters` variant is used on the site (the filter panel is not rendered).
 * Keyed by "<page>/<section-index>" (page keys match src/data/pages-meta.json).
 */
export type HeroProps = {
  /** Heading; may contain inline HTML (<br>). */
  heading: string;
  description: string;
  ariaLabel: string;
  /** "above-fold" plays the entrance on page load instead of on scroll. */
  entrance?: "above-fold" | "scroll";
};

export const hero: Record<string, HeroProps> = {
  "realisations/01": {
    heading: "Our<br>Projects",
    description: "Discover our latest workplace design and fit-out projects",
    ariaLabel: "OurProjects",
    entrance: "above-fold",
  },
};
