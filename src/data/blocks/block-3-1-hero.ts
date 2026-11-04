/**
 * Block 3-1 — hub page hero title. Keyed by "<page>/<section-index>".
 */
export type HubHeroProps = { title: string; centered?: boolean };

export const hubHero: Record<string, HubHeroProps> = {
  "expertises/01": { title: "More than 35 years of experience in" },
  "testimonials/01": { title: "They Trusted Us. Hear Their Stories", centered: true },
};
