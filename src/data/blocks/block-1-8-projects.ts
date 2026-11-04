/**
 * Block 1-8 — project cards grid. Each card is a hover/scroll slideshow
 * (zones + progress bars driven by src/scripts/blocks/block-1-8-projects.js).
 * Keyed by "<page>/<section-index>" (page keys match src/data/pages-meta.json).
 */
export type ProjectSlide = { src: string; alt: string };

export type Project = {
  company: string;
  location: string;
  href: string;
  slides: ProjectSlide[];
};

/** A card in the grid; `full` spans the whole row (only used in "mixed" grids). */
export type ProjectsCard = Project & { full?: boolean };

export type ProjectsCta =
  | { kind: "link"; label: string; href: string }
  | {
      kind: "load-more";
      label: string;
      /** e.g. "Viewed 8 of 9" */
      counter: string;
      perPage: number;
      offset: number;
      total: number;
      /** post IDs already rendered (sent to the load-more endpoint) */
      exclude: number[];
    };

export type ProjectsProps = {
  grid: "mixed" | "uniform";
  /** `--related` variant (project detail pages, 404) */
  related?: boolean;
  ariaLabel: string;
  /** Heading; may contain inline HTML (<br>). Omitted = no heading. */
  title?: string;
  cards: ProjectsCard[];
  cta?: ProjectsCta;
};

const realisation = (slug: string) => `/en/realisations/${slug}/`;

const P = {
  abylsen: {
    company: "ABYLSEN",
    location: "Paris 8ème",
    href: realisation("abylsen"),
    slides: [
      { src: "2026/05/6.-CHIFFRES-CLES-1024x687.jpg", alt: "Ronnsquare's key figures" },
      { src: "2026/05/abylsen_compressed_3-1-1024x684.jpg", alt: "Abylsen offices delivered by Ronnsquare" },
      { src: "2026/05/abylsen_compressed_1-1-1024x678.jpg", alt: "Fit-out of Abylsen offices by Ronnsquare" },
    ],
  },
  epiceum: {
    company: "EPICEUM",
    location: "Montreuil",
    href: realisation("epiceum"),
    slides: [
      { src: "2026/05/epiceum_compressed_3-1-1024x694.jpg", alt: "Epiceum offices delivered by Ronnsquare" },
      { src: "2026/05/epiceum_compressed_7-1-1024x684.jpg", alt: "Epiceum office project by Ronnsquare" },
      { src: "2026/05/epiceum_compressed_6-1-1024x683.jpg", alt: "Epiceum offices designed by Ronnsquare" },
    ],
  },
  groupePharma: {
    company: "GROUPE PHARMA",
    location: "Grand Paris",
    href: realisation("groupe-pharma"),
    slides: [
      { src: "2026/05/GROUPE-PHARMA-4_200kb-1024x683.jpg", alt: "Interior fit-out of a pharmaceutical group's offices by Ronnsquare" },
      { src: "2026/05/GROUPE-PHARMA-11_200kb-1024x683.jpg", alt: "A pharmaceutical group's workspaces by Ronnsquare" },
      { src: "2026/05/GROUPE-PHARMA-9_200kb-1024x690.jpg", alt: "A pharmaceutical group's offices designed by Ronnsquare" },
    ],
  },
  merz: {
    company: "MERZ AESTHETIC",
    location: "Courbevoie",
    href: realisation("merz-aesthetic"),
    slides: [
      { src: "2026/05/merz_compressed_1-1-694x1024.jpg", alt: "Fit-out of Merz Aesthetics offices by Ronnsquare" },
      { src: "2026/05/merz_compressed_2-1-1024x683.jpg", alt: "Merz Aesthetics workspaces fitted out by Ronnsquare" },
      { src: "2026/05/merz_compressed_4-1-1024x681.jpg", alt: "Interior fit-out of Merz Aesthetics offices by Ronnsquare" },
    ],
  },
  ccfa: {
    company: "CCFA",
    location: "Paris 8ème",
    href: realisation("ccfa"),
    slides: [
      { src: "2026/06/CCFA-4-1024x674.jpg", alt: "Interior fit-out of CCFA offices by Ronnsquare" },
      { src: "2026/06/CCFA-7-1024x684.jpg", alt: "CCFA office project by Ronnsquare" },
      { src: "2026/06/CCFA-8-680x1024.jpg", alt: "Fit-out of CCFA offices by Ronnsquare" },
    ],
  },
  niterra: {
    company: "NITERRA",
    location: "Le Plessis Robinson",
    href: realisation("niterra"),
    slides: [
      { src: "2026/05/Niterra-1-retouche_200kb-1024x694.jpg", alt: "Niterra workspaces fitted out by Ronnsquare" },
      { src: "2026/05/Niterra-6-retouche_200kb-1024x680.jpg", alt: "Niterra workspaces by Ronnsquare" },
      { src: "2026/05/Niterra-7-retouche_200kb-1024x671.jpg", alt: "Niterra office project by Ronnsquare" },
    ],
  },
  rodl: {
    company: "RÖDL & PARTNER",
    location: "Paris 8ème",
    href: realisation("rodl-partner"),
    slides: [
      { src: "2026/05/Temoignage_Rodl_200kb-1-1024x683.jpg", alt: "Rödl & Partner fit-out project by Ronnsquare" },
      { src: "2026/06/ADP-Group_RodlPartner-1_under200KB-683x1024.jpg", alt: "Fit-out of Rödl & Partner offices by Ronnsquare" },
      { src: "2026/06/ADP-Group_RodlPartner-3_under200KB-683x1024.jpg", alt: "Rödl & Partner workspaces fitted out by Ronnsquare" },
    ],
  },
  socoda: {
    company: "SOCODA",
    location: "Paris 1er",
    href: realisation("socoda"),
    slides: [
      { src: "2026/06/Socoda-_62B5280-retouchee_under200KB-1024x683.jpg", alt: "Socoda workspaces fitted out by Ronnsquare" },
      { src: "2026/06/Socoda-_62B5305-retouchee_under200KB-1024x678.jpg", alt: "Socoda workspace by Ronnsquare" },
      { src: "2026/06/Socoda-_62B5295-retouchee_under200KB-1024x683.jpg", alt: "Interior fit-out of Socoda offices by Ronnsquare" },
    ],
  },
  arneg: {
    company: "ARNEG",
    location: "Tremblay-en-France",
    href: realisation("arneg"),
    slides: [
      { src: "2026/06/Arneg-11_200KB-1024x683.jpg", alt: "ARNEG offices fitted out by Ronnsquare" },
      { src: "2026/06/Arneg-21_200KB-683x1024.jpg", alt: "ARNEG workspaces by Ronnsquare" },
      { src: "2026/06/Arneg-22_under200KB-1024x683.jpg", alt: "ARNEG office project by Ronnsquare" },
    ],
  },
} satisfies Record<string, Project>;

const full = (p: Project): ProjectsCard => ({ ...p, full: true });

const EXPLORE: ProjectsCta = { kind: "link", label: "Explore Our Projects", href: "/en/realisations/" };

/** Two-up "Selected Projects" grid used on expertise / concern pages. */
const selected = (a: Project, b: Project, title = "Selected Projects"): ProjectsProps => ({
  grid: "uniform",
  ariaLabel: "Our projects",
  title,
  cards: [a, b],
  cta: EXPLORE,
});

/** "--related" grid at the bottom of each project detail page. */
const related = (a: Project, b: Project): ProjectsProps => ({
  grid: "uniform",
  related: true,
  ariaLabel: "Selected Projects",
  title: "Selected Projects",
  cards: [a, b],
  cta: EXPLORE,
});

export const projects: Record<string, ProjectsProps> = {
  "home/08": {
    grid: "mixed",
    ariaLabel: "Our projects",
    title: "Our Projects",
    cards: [full(P.abylsen), P.epiceum, P.groupePharma, full(P.merz)],
    cta: EXPLORE,
  },
  "realisations/02": {
    grid: "mixed",
    ariaLabel: "Our projects",
    cards: [full(P.abylsen), P.merz, P.epiceum, full(P.groupePharma), P.ccfa, P.niterra, P.rodl, P.socoda],
    cta: {
      kind: "load-more",
      label: "See more",
      counter: "Viewed 8 of 9",
      perPage: 4,
      offset: 8,
      total: 9,
      exclude: [843, 840, 842, 841, 837, 839, 836, 835],
    },
  },
  "expertises/architecture-design/04": selected(P.abylsen, P.epiceum, "Selected <br>Projects"),
  "expertises/consulting-strategy/04": selected(P.arneg, P.socoda),
  "expertises/sustainability-ecology/04": selected(P.abylsen, P.merz),
  "expertises/technical-execution/04": selected(P.niterra, P.merz),
  "preoccupations/attract-and-retain-talent/07": selected(P.abylsen, P.epiceum),
  "preoccupations/bring-teams-back/07": selected(P.abylsen, P.epiceum),
  "preoccupations/complex-projects/07": selected(P.abylsen, P.epiceum),
  "preoccupations/lease-expiry/07": selected(P.abylsen, P.merz),
  "realisations/abylsen/06": related(P.rodl, P.merz),
  "realisations/arneg/05": related(P.merz, P.abylsen),
  "realisations/ccfa/04": related(P.rodl, P.epiceum),
  "realisations/epiceum/06": related(P.arneg, P.niterra),
  "realisations/groupe-pharma/05": related(P.rodl, P.epiceum),
  "realisations/merz-aesthetic/06": related(P.groupePharma, P.epiceum),
  "realisations/niterra/06": related(P.arneg, P.groupePharma),
  "realisations/rodl-partner/05": related(P.abylsen, P.epiceum),
  "realisations/socoda/04": related(P.arneg, P.groupePharma),
  "404/02": {
    grid: "uniform",
    related: true,
    ariaLabel: "404",
    cards: [P.merz, P.ccfa],
  },
};
