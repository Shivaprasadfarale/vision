/**
 * Block 0-1 — full-width image with reveal animation.
 * Keyed by "<page>/<section-index>".
 */
export type FullImageProps = {
  image: { src: string; alt: string };
};

export const fullImage: Record<string, FullImageProps> = {
  "contact/02": {
    image: { src: "2026/05/fullimage-placeholder.jpg", alt: "Workspace fitted out by Ronnsquare" },
  },
};
