/**
 * Block 7-1 — case-study hero: looping photo ticker (lightbox-enabled), project
 * title/subtitle and the key facts ("theses": sector, location, duration, …).
 * Keyed by "<page>/<section-index>".
 */
import { ABYLSEN, ARNEG, CCFA, EPICEUM, GROUPE_PHARMA, MERZ, NITERRA, RODL, SOCODA } from "./block-7-projects";
import type { ProjectPhoto } from "./block-7-projects";

export type HeroThesis = { label: string; value: string };
export type HeroProps = {
  /** Project name (h1 + section aria-label). */
  title: string;
  subtitle: string;
  /** Ticker photos (each needs its `large` rendition for the thumbnail). */
  photos: ProjectPhoto[];
  theses: HeroThesis[];
};

const EXPERTISE = { label: "Expertise", value: "Consulting · Design · Project Delivery" };
const EMPTY = { label: "", value: "" };
const fact = (label: string, value: string): HeroThesis => ({ label, value });

export const hero: Record<string, HeroProps> = {
  "realisations/abylsen/01": {
    title: "Abylsen",
    subtitle: "Headquarters Fit-Out",
    photos: [ABYLSEN.p5, ABYLSEN.p1, ABYLSEN.p3, ABYLSEN.p2, ABYLSEN.p8, ABYLSEN.p7, ABYLSEN.p6],
    theses: [fact("Sector", "Consulting Firm"), fact("Location", "Paris 8ème"), fact("Duration", "2 Months"), EXPERTISE],
  },
  "realisations/arneg/01": {
    title: "Arneg",
    subtitle: "Relocation for Greater Flexibility",
    photos: [ARNEG.p4, ARNEG.p11, ARNEG.p18, ARNEG.p19],
    theses: [fact("Sector", "Industry"), fact("Area", "890 m²"), fact("Location", "Tremblay-en-France"), fact("Duration", "2 Months")],
  },
  "realisations/ccfa/01": {
    title: "CCFA",
    subtitle: "A Prime Location",
    photos: [CCFA.p1, CCFA.p2, CCFA.p3, CCFA.p4, CCFA.p5, CCFA.p6],
    theses: [fact("Sector", "Automotive Industry"), fact("Location", "Paris 8ème"), fact("Duration", "3 Months"), EMPTY],
  },
  "realisations/epiceum/01": {
    title: "Epiceum",
    subtitle: "Relocation to a New Office Floor",
    photos: [EPICEUM.p1, EPICEUM.p2, EPICEUM.p3, EPICEUM.p4, EPICEUM.p5, EPICEUM.p6, EPICEUM.p7],
    theses: [fact("Sector", "Media & Communications"), fact("Location", "Montreuil"), fact("Duration", "2 Months"), EMPTY],
  },
  "realisations/groupe-pharma/01": {
    title: "Groupe Pharmaceutique",
    subtitle: "European Headquarters Fit-Out",
    photos: [GROUPE_PHARMA.p2, GROUPE_PHARMA.p3, GROUPE_PHARMA.p4, GROUPE_PHARMA.p6, GROUPE_PHARMA.p9],
    theses: [fact("Sector", "Healthcare & Life Sciences"), fact("Location", "Grand Paris"), fact("Duration", "3 Months"), EXPERTISE],
  },
  "realisations/merz-aesthetic/01": {
    title: "Merz Aesthetics",
    subtitle: "A New Space for Optimal Reorganization",
    photos: [MERZ.p1, MERZ.p9, MERZ.p8, MERZ.p7, MERZ.p5, MERZ.p6, MERZ.p4, MERZ.p3, MERZ.p2],
    theses: [fact("Sector", "Healthcare & Life Sciences"), fact("Location", "Courbevoie"), fact("Duration", "2 Months"), EMPTY],
  },
  "realisations/niterra/01": {
    title: "Niterra",
    subtitle: "Relocation at Lease Expiry",
    photos: [NITERRA.p1, NITERRA.p2, NITERRA.p3, NITERRA.p4, NITERRA.p5],
    theses: [fact("Sector", "Automotive Industry"), fact("Location", "Le Plessis Roinson"), fact("Duration", "3 Months"), EXPERTISE],
  },
  "realisations/rodl-partner/01": {
    title: "Rödl & Partner",
    subtitle: "Law Firm Interior Design",
    photos: [RODL.p1, RODL.p3, RODL.p5, RODL.p13, RODL.p18],
    theses: [fact("Sector", "Consulting Firm"), fact("Location", "Paris 8ème"), fact("Duration", "3 Months"), EXPERTISE],
  },
  "realisations/socoda/01": {
    title: "Socoda",
    subtitle: "Bringing Teams Together",
    photos: [SOCODA.p5340, SOCODA.p5274, SOCODA.p5280, SOCODA.p5282, SOCODA.p5386],
    theses: [fact("Sector", "Industry"), fact("Location", "Paris 1er"), fact("Duration", "2 Months"), EMPTY],
  },
};
