/**
 * Case-study photo library (Block 7 — "réalisations" pages), one constant per project.
 * Each photo is the full-size upload (relative to /assets/uploads/) plus its alt text;
 * hero sliders, galleries, SEO blocks and testimonial backgrounds all pick from here.
 */
export type ProjectPhoto = {
  src: string;
  alt: string;
  /** 1024px "large" rendition, used by the hero ticker thumbnails. */
  large?: string;
};

/** /en/realisations/abylsen/ */
export const ABYLSEN = {
  p1: { src: "2026/05/abylsen_compressed_1-1.jpg", alt: "Fit-out of Abylsen offices by Ronnsquare", large: "2026/05/abylsen_compressed_1-1-1024x678.jpg" },
  p2: { src: "2026/05/abylsen_compressed_2-1.jpg", alt: "Abylsen workspaces fitted out by Ronnsquare", large: "2026/05/abylsen_compressed_2-1-685x1024.jpg" },
  p3: { src: "2026/05/abylsen_compressed_3-1.jpg", alt: "Abylsen offices delivered by Ronnsquare", large: "2026/05/abylsen_compressed_3-1-1024x684.jpg" },
  p5: { src: "2026/05/abylsen_compressed_5-1.jpg", alt: "Interior fit-out of Abylsen offices by Ronnsquare", large: "2026/05/abylsen_compressed_5-1-1024x687.jpg" },
  p6: { src: "2026/05/abylsen_compressed_6-1.jpg", alt: "Abylsen workspace by Ronnsquare", large: "2026/05/abylsen_compressed_6-1-1024x686.jpg" },
  p7: { src: "2026/05/abylsen_compressed_7.jpg", alt: "Abylsen offices designed by Ronnsquare", large: "2026/05/abylsen_compressed_7-1024x683.jpg" },
  p8: { src: "2026/05/abylsen_compressed_8.jpg", alt: "Abylsen office project by Ronnsquare", large: "2026/05/abylsen_compressed_8-1024x687.jpg" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/arneg/ */
export const ARNEG = {
  p4: { src: "2026/06/Arneg-4_200KB.jpg", alt: "ARNEG workspaces fitted out by Ronnsquare", large: "2026/06/Arneg-4_200KB-1024x683.jpg" },
  p11: { src: "2026/06/Arneg-11_200KB.jpg", alt: "ARNEG offices fitted out by Ronnsquare", large: "2026/06/Arneg-11_200KB-1024x683.jpg" },
  p18: { src: "2026/06/Arneg-18_under200KB.jpg", alt: "ARNEG workspace delivered by Ronnsquare", large: "2026/06/Arneg-18_under200KB-1024x683.jpg" },
  p19: { src: "2026/06/Arneg-19_200KB.jpg", alt: "Interior fit-out of ARNEG offices by Ronnsquare", large: "2026/06/Arneg-19_200KB-1024x683.jpg" },
  p20: { src: "2026/06/Arneg-20_200KB.jpg", alt: "ARNEG offices designed and fitted out by Ronnsquare" },
  p21: { src: "2026/06/Arneg-21_200KB.jpg", alt: "ARNEG workspaces by Ronnsquare" },
  p22: { src: "2026/06/Arneg-22_under200KB.jpg", alt: "ARNEG office project by Ronnsquare" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/ccfa/ */
export const CCFA = {
  p1: { src: "2026/06/CCFA-1.jpg", alt: "CCFA workspaces fitted out by Ronnsquare", large: "2026/06/CCFA-1-1024x684.jpg" },
  p2: { src: "2026/06/CCFA-2.jpg", alt: "CCFA offices fitted out by Ronnsquare", large: "2026/06/CCFA-2-1024x674.jpg" },
  p3: { src: "2026/06/CCFA-3.jpg", alt: "CCFA workspace delivered by Ronnsquare", large: "2026/06/CCFA-3-1024x676.jpg" },
  p4: { src: "2026/06/CCFA-4.jpg", alt: "Interior fit-out of CCFA offices by Ronnsquare", large: "2026/06/CCFA-4-1024x674.jpg" },
  p5: { src: "2026/06/CCFA-5.jpg", alt: "CCFA offices designed by Ronnsquare", large: "2026/06/CCFA-5-1024x674.jpg" },
  p6: { src: "2026/06/CCFA-6.jpg", alt: "CCFA workspaces by Ronnsquare", large: "2026/06/CCFA-6-1024x671.jpg" },
  p7: { src: "2026/06/CCFA-7.jpg", alt: "CCFA office project by Ronnsquare" },
  p8: { src: "2026/06/CCFA-8.jpg", alt: "Fit-out of CCFA offices by Ronnsquare" },
  p9: { src: "2026/06/CCFA-9.jpg", alt: "CCFA workspace fitted out by Ronnsquare" },
  p10: { src: "2026/06/CCFA-10.jpg", alt: "CCFA offices delivered by Ronnsquare" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/epiceum/ */
export const EPICEUM = {
  p1: { src: "2026/05/epiceum_compressed_1-1.jpg", alt: "Fit-out of Epiceum offices by Ronnsquare", large: "2026/05/epiceum_compressed_1-1-1024x688.jpg" },
  p2: { src: "2026/05/epiceum_compressed_2-1.jpg", alt: "Epiceum workspaces fitted out by Ronnsquare", large: "2026/05/epiceum_compressed_2-1-1024x692.jpg" },
  p3: { src: "2026/05/epiceum_compressed_3-1.jpg", alt: "Epiceum offices delivered by Ronnsquare", large: "2026/05/epiceum_compressed_3-1-1024x694.jpg" },
  p4: { src: "2026/05/epiceum_compressed_4-1.jpg", alt: "Interior fit-out of Epiceum offices by Ronnsquare", large: "2026/05/epiceum_compressed_4-1-1024x665.jpg" },
  p5: { src: "2026/05/epiceum_compressed_5-1.jpg", alt: "Epiceum workspace by Ronnsquare", large: "2026/05/epiceum_compressed_5-1-1024x661.jpg" },
  p6: { src: "2026/05/epiceum_compressed_6-1.jpg", alt: "Epiceum offices designed by Ronnsquare", large: "2026/05/epiceum_compressed_6-1-1024x683.jpg" },
  p7: { src: "2026/05/epiceum_compressed_7-1.jpg", alt: "Epiceum office project by Ronnsquare", large: "2026/05/epiceum_compressed_7-1-1024x684.jpg" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/groupe-pharma/ */
export const GROUPE_PHARMA = {
  p1: { src: "2026/05/GROUPE-PHARMA-1_200kb.jpg", alt: "Fit-out of a pharmaceutical group's offices by Ronnsquare" },
  p2: { src: "2026/05/GROUPE-PHARMA-2_200kb.jpg", alt: "A pharmaceutical group's workspaces fitted out by Ronnsquare", large: "2026/05/GROUPE-PHARMA-2_200kb-1024x687.jpg" },
  p3: { src: "2026/05/GROUPE-PHARMA-3_200kb.jpg", alt: "A pharmaceutical group's offices delivered by Ronnsquare", large: "2026/05/GROUPE-PHARMA-3_200kb-685x1024.jpg" },
  p4: { src: "2026/05/GROUPE-PHARMA-4_200kb.jpg", alt: "Interior fit-out of a pharmaceutical group's offices by Ronnsquare", large: "2026/05/GROUPE-PHARMA-4_200kb-1024x683.jpg" },
  p6: { src: "2026/05/GROUPE-PHARMA-6_200kb.jpg", alt: "Pharmaceutical offices fitted out by Ronnsquare", large: "2026/05/GROUPE-PHARMA-6_200kb-1024x684.jpg" },
  p7: { src: "2026/05/GROUPE-PHARMA-7_200kb.jpg", alt: "A pharmaceutical group's office project by Ronnsquare" },
  p9: { src: "2026/05/GROUPE-PHARMA-9_200kb.jpg", alt: "A pharmaceutical group's offices designed by Ronnsquare", large: "2026/05/GROUPE-PHARMA-9_200kb-1024x690.jpg" },
  p11: { src: "2026/05/GROUPE-PHARMA-11_200kb.jpg", alt: "A pharmaceutical group's workspaces by Ronnsquare" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/merz-aesthetic/ */
export const MERZ = {
  p1: { src: "2026/05/merz_compressed_1-1.jpg", alt: "Fit-out of Merz Aesthetics offices by Ronnsquare", large: "2026/05/merz_compressed_1-1-694x1024.jpg" },
  p2: { src: "2026/05/merz_compressed_2-1.jpg", alt: "Merz Aesthetics workspaces fitted out by Ronnsquare", large: "2026/05/merz_compressed_2-1-1024x683.jpg" },
  p3: { src: "2026/05/merz_compressed_3-1.jpg", alt: "Merz Aesthetics offices delivered by Ronnsquare", large: "2026/05/merz_compressed_3-1-1024x677.jpg" },
  p4: { src: "2026/05/merz_compressed_4-1.jpg", alt: "Interior fit-out of Merz Aesthetics offices by Ronnsquare", large: "2026/05/merz_compressed_4-1-1024x681.jpg" },
  p5: { src: "2026/05/merz_compressed_5-1.jpg", alt: "Merz Aesthetics workspace by Ronnsquare", large: "2026/05/merz_compressed_5-1-1024x684.jpg" },
  p6: { src: "2026/05/merz_compressed_6-1.jpg", alt: "Merz Aesthetics offices designed by Ronnsquare", large: "2026/05/merz_compressed_6-1-1024x672.jpg" },
  p7: { src: "2026/05/merz_compressed_7-1.jpg", alt: "Merz Aesthetics office project by Ronnsquare", large: "2026/05/merz_compressed_7-1-1024x680.jpg" },
  p8: { src: "2026/05/merz_compressed_8-1.jpg", alt: "Fit-out of Merz Aesthetics spaces by Ronnsquare", large: "2026/05/merz_compressed_8-1-1024x670.jpg" },
  p9: { src: "2026/05/merz_compressed_9-1.jpg", alt: "Merz Aesthetics workspaces by Ronnsquare", large: "2026/05/merz_compressed_9-1-1024x671.jpg" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/niterra/ */
export const NITERRA = {
  p1: { src: "2026/05/Niterra-1-retouche_200kb.jpg", alt: "Niterra workspaces fitted out by Ronnsquare", large: "2026/05/Niterra-1-retouche_200kb-1024x694.jpg" },
  p2: { src: "2026/05/Niterra-2-retouche_200kb.jpg", alt: "Niterra offices fitted out by Ronnsquare", large: "2026/05/Niterra-2-retouche_200kb-1024x677.jpg" },
  p3: { src: "2026/05/Niterra-3-retouche_200kb.jpg", alt: "Niterra workspace delivered by Ronnsquare", large: "2026/05/Niterra-3-retouche_200kb-1024x687.jpg" },
  p4: { src: "2026/05/Niterra-4-retouche_200kb.jpg", alt: "Interior fit-out of Niterra offices by Ronnsquare", large: "2026/05/Niterra-4-retouche_200kb-1024x676.jpg" },
  p5: { src: "2026/05/Niterra-5-retouche_200kb.jpg", alt: "Niterra offices designed by Ronnsquare", large: "2026/05/Niterra-5-retouche_200kb-1024x683.jpg" },
  p6: { src: "2026/05/Niterra-6-retouche_200kb.jpg", alt: "Niterra workspaces by Ronnsquare" },
  p7: { src: "2026/05/Niterra-7-retouche_200kb.jpg", alt: "Niterra office project by Ronnsquare" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/rodl-partner/ */
export const RODL = {
  p1: { src: "2026/06/ADP-Group_RodlPartner-1_under200KB.jpg", alt: "Fit-out of Rödl & Partner offices by Ronnsquare", large: "2026/06/ADP-Group_RodlPartner-1_under200KB-683x1024.jpg" },
  p3: { src: "2026/06/ADP-Group_RodlPartner-3_under200KB.jpg", alt: "Rödl & Partner workspaces fitted out by Ronnsquare", large: "2026/06/ADP-Group_RodlPartner-3_under200KB-683x1024.jpg" },
  p5: { src: "2026/06/ADP-Group_RodlPartner-5_under200KB.jpg", alt: "Rödl & Partner offices delivered by Ronnsquare", large: "2026/06/ADP-Group_RodlPartner-5_under200KB-1024x683.jpg" },
  p13: { src: "2026/06/ADP-Group_RodlPartner-13_under200KB.jpg", alt: "Interior fit-out of Rödl & Partner offices by Ronnsquare", large: "2026/06/ADP-Group_RodlPartner-13_under200KB-683x1024.jpg" },
  p18: { src: "2026/06/ADP-Group_RodlPartner-18_under200KB.jpg", alt: "Rödl & Partner office project by Ronnsquare", large: "2026/06/ADP-Group_RodlPartner-18_under200KB-1024x683.jpg" },
  testimonial: { src: "2026/05/Temoignage_Rodl_200kb-1.jpg", alt: "Rödl & Partner fit-out project by Ronnsquare" },
} satisfies Record<string, ProjectPhoto>;

/** /en/realisations/socoda/ */
export const SOCODA = {
  p5274: { src: "2026/06/Socoda-_62B5274-retouchee_under200KB.jpg", alt: "Fit-out of Socoda offices by Ronnsquare", large: "2026/06/Socoda-_62B5274-retouchee_under200KB-1024x673.jpg" },
  p5280: { src: "2026/06/Socoda-_62B5280-retouchee_under200KB.jpg", alt: "Socoda workspaces fitted out by Ronnsquare", large: "2026/06/Socoda-_62B5280-retouchee_under200KB-1024x683.jpg" },
  p5282: { src: "2026/06/Socoda-_62B5282-retouchee_under200KB.jpg", alt: "Socoda offices delivered by Ronnsquare", large: "2026/06/Socoda-_62B5282-retouchee_under200KB-1024x678.jpg" },
  p5295: { src: "2026/06/Socoda-_62B5295-retouchee_under200KB.jpg", alt: "Interior fit-out of Socoda offices by Ronnsquare" },
  p5305: { src: "2026/06/Socoda-_62B5305-retouchee_under200KB.jpg", alt: "Socoda workspace by Ronnsquare" },
  p5340: { src: "2026/06/62B5340-retouchee_under200KB.jpg", alt: "Fit-out of Socoda offices by Ronnsquare", large: "2026/06/62B5340-retouchee_under200KB-1024x682.jpg" },
  p5386: { src: "2026/06/socoda-_62B5386-retouche_under200KB.jpg", alt: "Socoda office project by Ronnsquare", large: "2026/06/socoda-_62B5386-retouche_under200KB-1024x680.jpg" },
} satisfies Record<string, ProjectPhoto>;
