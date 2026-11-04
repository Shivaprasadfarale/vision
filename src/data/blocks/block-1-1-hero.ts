/**
 * Block 1-1 — home hero: portrait photo + H1 + CTA button.
 * Keyed by "<page>/<section-index>".
 */
export type HeroProps = {
  label: string;
  title: string;
  image: { src: string; alt: string };
  button: { label: string; href: string };
};

export const hero: Record<string, HeroProps> = {
  "home/01": {
    label: "Architecture and Workplace Design Consulting Firm",
    title: "Architecture and Workplace Design Consulting Firm",
    image: { src: "2026/10/Entree-batiment-blanc-Paris.jpg", alt: "Workspace fitted out by Ronnsquare" },
    button: { label: "Our Areas of Expertise", href: "/en/realisations/" },
  },
};
