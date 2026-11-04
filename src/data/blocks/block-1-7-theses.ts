/**
 * Block 1-7 (theses) — key figures strip.
 * Keyed by "<page>/<section-index>".
 */
export type ThesesStat = { number: string; label: string };
export type ThesesProps = {
  title: string;
  stats: ThesesStat[];
};

const tailStats: ThesesStat[] = [
  { number: "35", label: "years of experience" },
  { number: "50+", label: "dedicated experts" },
  { number: "10", label: "year warranty" },
];

const RONNSQUARE_IS: ThesesProps = {
  title: "Ronnsquare is",
  stats: [{ number: "+1M", label: "m² of office space completed" }, ...tailStats],
};
const RONNSQUARE_CEST: ThesesProps = {
  title: "Ronnsquare c'est",
  stats: [{ number: "+1M", label: "of square meters developed" }, ...tailStats],
};

export const theses: Record<string, ThesesProps> = {
  "home/06": RONNSQUARE_IS,
  "dna-team/02": RONNSQUARE_IS,
  "expertises/04": RONNSQUARE_CEST,
};
