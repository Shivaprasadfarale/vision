/**
 * Block 5-5 — DNA & Team locations map. Card text lines are joined with <br />.
 * Image paths are relative to /assets/uploads/. Keyed by "<page>/<section-index>".
 */
export type MapGroup = { label: string; lines: string[] };
export type DnaMapProps = {
  title: string;
  subtitle: string;
  map: { desktop: string; mobile: string; alt: string };
  groups: MapGroup[];
};

export const dnaMap: Record<string, DnaMapProps> = {
  "dna-team/10": {
    title: "Our Locations",
    subtitle: "Based in Paris, Operating Across Europe",
    map: {
      desktop: "2026/06/Map_new_under200KB.jpg",
      mobile: "2026/06/Map-mobile-1.png",
      alt: "Map of Europe - Ronnsquare's areas of operation",
    },
    groups: [
      { label: "Headquarters in Paris", lines: ["1–3 Rue Jean Richepin", "93160 Noisy-le-Grand, France"] },
      { label: "Presence in 6 European Countries", lines: ["France", "Germany", "Spain", "Italy", "Ireland", "United Kingdom"] },
    ],
  },
};
