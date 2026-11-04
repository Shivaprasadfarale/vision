/**
 * Block 1-2 — "Latest projects" running line (infinite ticker of project cards).
 * Keyed by "<page>/<section-index>". The component renders the item list twice
 * (second copy aria-hidden) for the seamless loop.
 */
export type RunningLineItem = {
  href: string;
  image: { src: string; alt: string };
  type: string;
  meta: string;
};
export type RunningLineProps = {
  title: string;
  items: RunningLineItem[];
};

const project = (slug: string, src: string, alt: string, type: string, meta: string): RunningLineItem => ({
  href: `/en/realisations/${slug}/`,
  image: { src, alt },
  type,
  meta,
});

const P = {
  abylsen: project("abylsen", "2026/05/6.-CHIFFRES-CLES-1024x687.jpg", "Ronnsquare's key figures", "ABYLSEN", "Paris 8ème"),
  epiceum: project("epiceum", "2026/05/epiceum_compressed_3-1-1024x694.jpg", "Epiceum offices delivered by Ronnsquare", "EPICEUM", "Montreuil"),
  pharma: project(
    "groupe-pharma",
    "2026/05/GROUPE-PHARMA-4_200kb-1024x683.jpg",
    "Interior fit-out of a pharmaceutical group's offices by Ronnsquare",
    "GROUPE PHARMA",
    "Grand Paris",
  ),
  merz: project("merz-aesthetic", "2026/05/merz_compressed_1-1-694x1024.jpg", "Fit-out of Merz Aesthetics offices by Ronnsquare", "MERZ AESTHETIC", "Courbevoie"),
  niterra: project("niterra", "2026/05/Niterra-1-retouche_200kb-1024x694.jpg", "Niterra workspaces fitted out by Ronnsquare", "NITERRA", "Le Plessis Robinson"),
  arneg: project("arneg", "2026/06/Arneg-11_200KB-1024x683.jpg", "ARNEG offices fitted out by Ronnsquare", "ARNEG", "Tremblay-en-France"),
  socoda: project("socoda", "2026/06/Socoda-_62B5280-retouchee_under200KB-1024x683.jpg", "Socoda workspaces fitted out by Ronnsquare", "SOCODA", "Paris 1er"),
  rodl: project("rodl-partner", "2026/05/Temoignage_Rodl_200kb-1-1024x683.jpg", "Rödl & Partner fit-out project by Ronnsquare", "RÖDL & PARTNER", "Paris 8ème"),
  ccfa: project("ccfa", "2026/06/CCFA-4-1024x674.jpg", "Interior fit-out of CCFA offices by Ronnsquare", "CCFA", "Paris 8ème"),
};

const TITLE = "Our Latest Projects";
const line = (items: RunningLineItem[]): RunningLineProps => ({ title: TITLE, items });

const HOME_LINE = line([P.abylsen, P.epiceum, P.pharma, P.merz, P.niterra, P.arneg, P.socoda, P.rodl]);
const EXPERTISE_LINE = line([P.arneg, P.socoda, P.rodl, P.ccfa, P.niterra, P.merz, P.pharma, P.epiceum]);

export const runningLine: Record<string, RunningLineProps> = {
  "home/02": HOME_LINE,
  "dna-team/08": line([P.abylsen, P.pharma, P.epiceum, P.merz, P.niterra, P.arneg, P.socoda, P.rodl]),
  "expertises/architecture-design/02": EXPERTISE_LINE,
  "expertises/consulting-strategy/02": line([P.abylsen, P.epiceum, P.pharma, P.merz, P.arneg, P.socoda, P.rodl, P.ccfa]),
  "expertises/sustainability-ecology/02": EXPERTISE_LINE,
  "expertises/technical-execution/02": EXPERTISE_LINE,
};
