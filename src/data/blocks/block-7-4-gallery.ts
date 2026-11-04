/**
 * Block 7-4 — case-study photo gallery (2-column grid reusing the block-1-8 card
 * markup); every card opens the lightbox. Keyed by "<page>/<section-index>".
 */
import { ABYLSEN, ARNEG, CCFA, EPICEUM, GROUPE_PHARMA, MERZ, NITERRA, RODL, SOCODA } from "./block-7-projects";
import type { ProjectPhoto } from "./block-7-projects";

export type GalleryProps = {
  photos: ProjectPhoto[];
  /** Adds block-7-4-gallery--no-pb (no bottom padding). */
  noPb?: boolean;
};

export const gallery: Record<string, GalleryProps> = {
  "realisations/abylsen/03": { photos: [ABYLSEN.p3, ABYLSEN.p1, ABYLSEN.p2, ABYLSEN.p5] },
  "realisations/arneg/03": { photos: [ARNEG.p21, ARNEG.p22] },
  "realisations/ccfa/03": { photos: [CCFA.p7, CCFA.p8, CCFA.p9, CCFA.p10], noPb: true },
  "realisations/epiceum/03": { photos: [EPICEUM.p7, EPICEUM.p6, EPICEUM.p5, EPICEUM.p3] },
  "realisations/groupe-pharma/03": { photos: [GROUPE_PHARMA.p11, GROUPE_PHARMA.p9, GROUPE_PHARMA.p7, GROUPE_PHARMA.p1] },
  "realisations/merz-aesthetic/03": { photos: [MERZ.p2, MERZ.p4, MERZ.p6, MERZ.p5] },
  "realisations/niterra/03": { photos: [NITERRA.p6, NITERRA.p7] },
  "realisations/rodl-partner/03": { photos: [RODL.p1, RODL.p3] },
  "realisations/socoda/03": { photos: [SOCODA.p5305, SOCODA.p5295], noPb: true },
};
