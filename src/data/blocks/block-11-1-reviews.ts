/**
 * Block 11-1 — testimonials listing (list layout) with client-side pagination.
 * Only the server-rendered first page is stored here; further pages are loaded
 * by the block script from /api/reviews/list-<n>.json.
 * Keyed by "<page>/<section-index>" (page keys match src/data/pages-meta.json).
 */
export type ReviewEntry = {
  /** Project photo (path relative to /assets/uploads/). */
  image: { src: string; alt: string };
  /** Quote text, without the surrounding quotation marks. */
  quote: string;
  author: { name: string; role: string; avatar: string };
};

export type ReviewsListProps = {
  perPage: number;
  total: number;
  /** Current page (1-based). */
  paged: number;
  reviews: ReviewEntry[];
};

type Client = Omit<ReviewEntry, "quote">;
const client = (image: string, alt: string, name: string, role: string, avatar: string): Client => ({
  image: { src: `2026/05/${image}`, alt },
  author: { name, role, avatar: `2026/05/${avatar}` },
});
const review = (c: Client, quote: string): ReviewEntry => ({ ...c, quote });

const NAAREA = client(
  "Temoignage_Naarea_2_200kb.jpg",
  "Naarea fit-out project by Ronnsquare",
  "Jean-Marc Magnet",
  "Real Estate Director – Naarea",
  "Jean-Marc-Magnet-Naarea.png",
);
const IM_PROJET = client(
  "Temoignage_IM_Projet_200kb.jpg",
  "IM Projet fit-out project by Ronnsquare",
  "Philippe Régis",
  "President – IM Projet",
  "Philippe_Regis_IM_Projet_200kb.png",
);
const MERZ = client(
  "Temoignage_Merz_Aesthetics_1_200kb.jpg",
  "Merz Aesthetics fit-out project by Ronnsquare",
  "Nicolas de La Hosseraye",
  "Chief Executive Officer – Merz Aesthetics",
  "Nicolas_de_La_Hosseraye_Merz_Aesthetics_200kb.png",
);
const NITERRA = client(
  "Temoignage_Niterra_200kb.jpg",
  "Niterra fit-out project by Ronnsquare",
  "Maxime Vigouroux",
  "Chief Manager – Niterra",
  "Maxime_Vigouroux_Niterra_200kb.png",
);
const PHARMA_GROUP = client(
  "Temoignage_Groupe_Pharma_3_200kb.jpg",
  "A pharmaceutical group's fit-out project by Ronnsquare",
  "Confidential",
  "Office Manager – Pharmaceutical Group",
  "Office_manager_Groupe_Pharmaceutique_200kb.png",
);

export const reviewsList: Record<string, ReviewsListProps> = {
  "testimonials/02": {
    perPage: 6,
    total: 53,
    paged: 1,
    reviews: [
      review(
        NAAREA,
        "Ronnsquare is a professional company that respects its clients and truly listens to their needs. Their expertise in construction management is an undeniable asset that greatly contributed to the success of our fit-out project.",
      ),
      review(
        IM_PROJET,
        "What impressed me most about Ronnsquare was the quality of the relationship, the availability of the team, their responsiveness, and their ability to truly understand and address our requirements.",
      ),
      review(
        MERZ,
        "We were particularly impressed by the excellent coordination between the project manager and the talented architect, who delivered a project that perfectly met both our requirements and our desires",
      ),
      review(
        NITERRA,
        "We would like to thank Ronnsquare and everyone involved in the project for their attentiveness and commitment throughout the process. It was truly excellent work",
      ),
      review(
        NITERRA,
        "We have an office that is truly appreciated by everyone—our employees as well as visiting colleagues. The feedback has been overwhelmingly positive, with many congratulating us on the success and quality of the fit-out",
      ),
      review(
        PHARMA_GROUP,
        "Ronnsquare embraced the challenge and delivered successfully: spacious and light-filled workspaces, excellent acoustic performance, and an environment that everyone genuinely loved. It was exactly what we were looking for",
      ),
    ],
  },
};
