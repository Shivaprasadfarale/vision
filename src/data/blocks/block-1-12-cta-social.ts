/**
 * Block 1-12 — social media call-to-action: three mock Instagram-style post
 * cards beside a title and social buttons.
 * Keyed by "<page>/<section-index>" (page keys match src/data/pages-meta.json).
 */
export type CtaSocialPost = { image: string; alt: string };

export type CtaSocialProps = {
  variant: "sable" | "maron";
  title: string;
  account: { name: string; location: string };
  /** Left, center and right cards, in that order (paths relative to /assets/uploads/). */
  posts: [CtaSocialPost, CtaSocialPost, CtaSocialPost];
  buttons: { label: string; href: string; icon: "linkedin" }[];
};

const BASE = {
  title: "Discover More on Social Media",
  account: { name: "Ronnsquare", location: "Paris, France" },
  buttons: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/adp-group/?originalSubdomain=fr", icon: "linkedin" }],
} satisfies Omit<CtaSocialProps, "variant" | "posts">;

/** Posts used on most pages. */
const POSTS: CtaSocialProps["posts"] = [
  { image: "2026/05/social-post-1-1-300x200.jpg", alt: "Offices with a wooden slatted screen and a glazed meeting room" },
  { image: "2026/05/social-post-3-1-300x200.jpg", alt: "Cafeteria area with a blue counter and orange stools" },
  { image: "2026/05/social-post-2-1-201x300.jpg", alt: "Reception lounge with a white sofa and round coffee tables" },
];

/** Earlier uploads of the same posts (contact and FAQ pages). */
const POSTS_ALT: CtaSocialProps["posts"] = [
  { image: "2026/05/social-post-1-300x200.jpg", alt: "Office fit-out with a wooden slatted screen" },
  { image: "2026/05/social-post-3-300x200.jpg", alt: "Lounge area with a sofa and coffee table" },
  { image: "2026/05/social-post-2-201x300.jpg", alt: "Counter bar with orange stools" },
];

const SABLE: CtaSocialProps = { ...BASE, variant: "sable", posts: POSTS };

export const ctaSocial: Record<string, CtaSocialProps> = {
  "contact/03": { ...BASE, variant: "sable", posts: POSTS_ALT },
  "dna-team/13": SABLE,
  "expertises/08": SABLE,
  "expertises/architecture-design/10": SABLE,
  "expertises/consulting-strategy/10": SABLE,
  "expertises/sustainability-ecology/10": SABLE,
  "expertises/technical-execution/10": SABLE,
  "faq/02": { ...BASE, variant: "maron", posts: POSTS_ALT },
  "preoccupations/attract-and-retain-talent/10": SABLE,
  "preoccupations/bring-teams-back/10": SABLE,
  "preoccupations/complex-projects/10": SABLE,
  "preoccupations/lease-expiry/10": SABLE,
  "realisations/05": SABLE,
  "testimonials/04": { ...SABLE, variant: "maron" },
};
