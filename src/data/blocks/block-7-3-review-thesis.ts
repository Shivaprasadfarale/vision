/**
 * Block 7-3 — client testimonial card over a parallax project photo.
 * Keyed by "<page>/<section-index>".
 */
import { ABYLSEN, EPICEUM, GROUPE_PHARMA, MERZ, NITERRA, RODL } from "./block-7-projects";
import type { ProjectPhoto } from "./block-7-projects";

export type ReviewThesisProps = {
  image: ProjectPhoto;
  quote: string;
  author: {
    name: string;
    title: string;
    /** 60×60 portrait (relative to /assets/uploads/); its alt is the author name. */
    avatar?: string;
  };
};

export const reviewThesis: Record<string, ReviewThesisProps> = {
  "realisations/abylsen/04": {
    image: ABYLSEN.p7,
    quote: `"Employee feedback was immediate, with a unanimous 'wow' at the quality of the final result: the light-filled workspaces, the layout of the rooms, the use of white, wood, and black. All opinions were completely unanimous. Mission accomplished, ADP."`,
    author: { name: "Olivier Rustat", title: "Operations Director – Abylsen", avatar: "2026/05/Olivier-Rustat-Abylsen.png" },
  },
  "realisations/epiceum/04": {
    image: EPICEUM.p1,
    quote: `"Designing a collaborative workspace tailored to our activity proved to be essential, both for the efficiency of our operations and the well-being of our teams. Thank you for this wonderful project, which we enjoy every day! All our visitors are envious!"`,
    author: { name: "Christian De La Guéronnière", title: "Chief Executive Officer – Epiceum" },
  },
  "realisations/groupe-pharma/04": {
    image: GROUPE_PHARMA.p4,
    quote: `"Employees were eager to move into the new spaces, and they were absolutely amazed by the final result, which perfectly matched our expectations. A successfully completed challenge."`,
    author: { name: "Confidential", title: "Office manager, Groupe Pharmaceutique", avatar: "2026/05/Office_manager_Groupe_Pharmaceutique_200kb.png" },
  },
  "realisations/merz-aesthetic/04": {
    image: MERZ.p3,
    quote: `"Our goal was to create a workplace where employees would genuinely enjoy working. We wanted to design an environment that combined open-plan workspaces with numerous meeting and private areas, allowing people to collaborate and focus without disrupting one another."`,
    author: { name: "Nicolas De La Hosseraye", title: "Chief Executive Officer – Merz Aesthetics", avatar: "2026/05/Nicolas_de_La_Hosseraye_Merz_Aesthetics_200kb.png" },
  },
  "realisations/niterra/04": {
    image: NITERRA.p4,
    quote: `"We now have an office that is appreciated by both our employees and visitors from outside the company. Ronnsquare was the firm that best understood our brief and invested the most effort during the preliminary design phase."`,
    author: { name: "Maxime Vigouroux", title: "Chief Manager – Niterra", avatar: "2026/05/Maxime_Vigouroux_Niterra_200kb.png" },
  },
  "realisations/rodl-partner/04": {
    image: RODL.testimonial,
    quote: `"Truly a very pleasant space to work in, as our employees experience every day. Ronnsquare really understood the project: not to destroy or disrupt what already exists, but to create a more welcoming environment with more space for employees."`,
    author: { name: "Nicola Lohrey", title: "Managing Partner – Rödl & Partner", avatar: "2026/05/Nicola_Lohrey_Rodl_Partner_200kb.png" },
  },
};
