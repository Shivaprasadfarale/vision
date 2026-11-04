/**
 * Block 5-1 — DNA & Team page hero with stats and photo ticker.
 * Photo paths are relative to /assets/uploads/. Keyed by "<page>/<section-index>".
 */
export type DnaHeroPhoto = { full: string; thumb: string; alt: string };
export type DnaHeroProps = {
  title: string;
  stats: string[];
  description: string;
  button: string;
  photos: DnaHeroPhoto[];
};

const LANDSCAPE = "1024x683";
const PORTRAIT = "683x1024";
/** Showroom photo `n` (file stem differs for #9), with its thumbnail size. */
const photo = (n: number, size: string, alt: string): DnaHeroPhoto => {
  const stem = `2026/06/${n}.-PHOTOS-EQUIPES-SHOWROOM${n === 9 ? "" : "1"}_200kb`;
  return { full: `${stem}.jpg`, thumb: `${stem}-${size}.jpg`, alt };
};

export const dnaHero: Record<string, DnaHeroProps> = {
  "dna-team/01": {
    title: "Independent Workplace Design Consultancy",
    stats: ["50 experts in consulting, architecture, and project delivery", "35 years of experience", "6 European countries"],
    description:
      "One goal: to create a workspace that truly fits your needs by finding the right balance between ambition, functionality, and constraints.",
    button: "Get to Know Us",
    photos: [
      photo(1, LANDSCAPE, "The Ronnsquare team in the showroom"),
      photo(2, LANDSCAPE, "The Ronnsquare teams at the showroom"),
      photo(3, PORTRAIT, "The Ronnsquare showroom and its team"),
      photo(4, PORTRAIT, "The Ronnsquare team at work in the showroom"),
      photo(5, PORTRAIT, "Ronnsquare staff in the showroom"),
      photo(6, LANDSCAPE, "The Ronnsquare showroom space"),
      photo(7, LANDSCAPE, "The Ronnsquare team meeting in the showroom"),
      photo(8, PORTRAIT, "The Ronnsquare showroom and team"),
      photo(9, PORTRAIT, "Ronnsquare staff at the showroom"),
      photo(10, LANDSCAPE, "The Ronnsquare team in their premises"),
    ],
  },
};
