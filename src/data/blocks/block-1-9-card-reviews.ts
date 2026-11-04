/**
 * Block 1-9 — client testimonials carousel (media column + quote slides).
 * Keyed by "<page>/<section-index>" (page keys match src/data/pages-meta.json).
 */
export type ReviewAuthor = {
  /** Project photo shown in the media column (path relative to /assets/uploads/). */
  image: { src: string; alt: string };
  avatar: string;
  name: string;
  role: string;
};

export type ReviewSlide = ReviewAuthor & {
  /** Quote text, without the surrounding quotation marks. */
  quote: string;
};

export type CardReviewsProps = {
  title: string;
  subtitle: string;
  slides: ReviewSlide[];
};

const TITLE = "Client Testimonials";
const SUBTITLE = "They trust us";

const slide = (author: ReviewAuthor, quote: string, overrides: Partial<ReviewAuthor> = {}): ReviewSlide => ({
  ...author,
  ...overrides,
  quote,
});
const reviews = (slides: ReviewSlide[]): CardReviewsProps => ({ title: TITLE, subtitle: SUBTITLE, slides });

const CLIENTS = {
  naarea: {
    image: { src: "2026/05/Temoignage_Naarea_2_200kb-1024x683.jpg", alt: "Naarea fit-out project by Ronnsquare" },
    avatar: "2026/05/Jean-Marc-Magnet-Naarea-150x150.png",
    name: "Jean-Marc Magnet",
    role: "Real Estate Director – Naarea",
  },
  niterra: {
    image: { src: "2026/05/Temoignage_Niterra_200kb-1024x683.jpg", alt: "Niterra fit-out project by Ronnsquare" },
    avatar: "2026/05/Maxime_Vigouroux_Niterra_200kb-150x150.png",
    name: "Maxime Vigouroux",
    role: "Chief Manager – Niterra",
  },
  merz: {
    image: { src: "2026/05/Temoignage_Merz_Aesthetics_1_200kb-1024x677.jpg", alt: "Merz Aesthetics fit-out project by Ronnsquare" },
    avatar: "2026/05/Nicolas_de_La_Hosseraye_Merz_Aesthetics_200kb-150x150.png",
    name: "Nicolas de La Hosseraye",
    role: "Chief Executive Officer – Merz Aesthetics",
  },
  imProjet: {
    image: { src: "2026/05/Temoignage_IM_Projet_200kb-1024x683.jpg", alt: "IM Projet fit-out project by Ronnsquare" },
    avatar: "2026/05/Philippe_Regis_IM_Projet_200kb-150x150.png",
    name: "Philippe Régis",
    role: "President – IM Projet",
  },
  horusPharma: {
    image: { src: "2026/05/Temoignage_Horus_Pharma_2_200KB-1024x768.jpg", alt: "Horus Pharma offices fitted out by Ronnsquare" },
    avatar: "2026/05/Megane_Jeanson_Horus_Pharma_200kb-150x150.png",
    name: "Megane Jeanson",
    role: "Head of Facilities Management – Horus Pharma",
  },
  imProjetEngineer: {
    image: { src: "2026/05/Temoignage_IM_Projet_200kb-1024x683.jpg", alt: "IM Projet fit-out project by Ronnsquare" },
    avatar: "2026/05/Geoffrey-Julien-IM-Projet-150x150.png",
    name: "Geoffrey Julien",
    role: "Engineer – IM Projet",
  },
  rodl: {
    image: { src: "2026/05/Temoignage_Rodl_200kb-1-1024x683.jpg", alt: "Rödl & Partner fit-out project by Ronnsquare" },
    avatar: "2026/05/Nicola_Lohrey_Rodl_Partner_200kb-150x150.png",
    name: "Nicola Lohrey",
    role: "Managing Partner - Rödl & Partner",
  },
  pharmaGroup: {
    image: { src: "2026/05/Temoignage_Groupe_Pharma_3_200kb-1024x690.jpg", alt: "A pharmaceutical group's fit-out project by Ronnsquare" },
    avatar: "2026/05/Office_manager_Groupe_Pharmaceutique_200kb-150x150.png",
    name: "Confidential",
    role: "Office Manager – Pharmaceutical Group",
  },
  vanderlande: {
    image: { src: "2026/05/Temoignage_Vanderlande_200kb-1024x683.jpg", alt: "Vanderlande fit-out project by Ronnsquare" },
    avatar: "2026/05/Christophe_Jallon_Vanderlande-150x150.png",
    name: "Christophe Jallon",
    role: "Chief Executive Officer – Vanderlande",
  },
  abylsen: {
    image: { src: "2026/05/abylsen_compressed_7-1024x683.jpg", alt: "Abylsen offices designed by Ronnsquare" },
    avatar: "2026/05/Olivier-Rustat-Abylsen-150x150.png",
    name: "Olivier Rustat",
    role: "Operations Director – Abylsen",
  },
} satisfies Record<string, ReviewAuthor>;

export const cardReviews: Record<string, CardReviewsProps> = {
  "dna-team/11": reviews([
    slide(
      CLIENTS.naarea,
      "Ronnsquare is a serious company that respects its clients and knows how to listen to their needs. Their expertise in construction management is a major asset that greatly contributed to the success of our fit-out project. We would highly recommend them for any similar project",
    ),
    slide(
      CLIENTS.niterra,
      "We would like to thank Ronnsquare and everyone involved in the project for their attentiveness and commitment throughout the process. It was truly excellent work",
    ),
    slide(
      CLIENTS.merz,
      "We were particularly impressed by the excellent collaboration between the project manager and the talented architect, who delivered a project that perfectly matched both our constraints and our aspirations",
    ),
    slide(
      CLIENTS.imProjet,
      "What impressed me most about Ronnsquare was the quality of the relationship, the availability of the team, their responsiveness, and their ability to truly understand and address our requirements.",
    ),
  ]),
  "expertises/05": reviews([
    slide(
      CLIENTS.naarea,
      "Ronnsquare is a professional company that respects its clients and truly listens to their needs. Their expertise in construction management is an undeniable asset that greatly contributed to the success of our fit-out project.",
    ),
    slide(
      CLIENTS.niterra,
      "We have an office that is truly appreciated by everyone—our employees as well as visiting colleagues. The feedback has been overwhelmingly positive, with many congratulating us on the success and quality of the fit-out",
    ),
    slide(
      CLIENTS.horusPharma,
      "At the beginning of the project, there were many concerns among our employees. But as soon as they stepped into the new offices, those concerns quickly disappeared. They immediately realized that every aspect of the space had been thoughtfully designed with their needs in mind",
    ),
    slide(
      CLIENTS.imProjet,
      "What impressed me most about Ronnsquare was the quality of the relationship, the availability of the team, their responsiveness, and their ability to truly understand and address our requirements.",
    ),
  ]),
  "expertises/architecture-design/06": reviews([
    slide(
      CLIENTS.imProjetEngineer,
      "It gave IM Projet’s image a huge boost. We no longer hesitate to invite external visitors—it’s really fantastic",
    ),
    slide(
      CLIENTS.niterra,
      "The realism of the 3D renderings provided truly allowed us to envision what the new offices could be, and it impressed each and every one of us",
      { role: "Chief Manager - Niterra" },
    ),
    slide(
      CLIENTS.horusPharma,
      "A strategic space planning was implemented, with each floor and department organized thoughtfully. Everything was designed so that teams who need to collaborate can do so effectively, while employees are not confined to their own departments",
    ),
    slide(
      CLIENTS.rodl,
      "During our discussions with Ronnsquare, I found their ideas to be highly creative and insightful, combining modernity and functionality with a strong focus on creating a welcoming and collaborative environment",
    ),
  ]),
  "expertises/consulting-strategy/06": reviews([
    slide(
      CLIENTS.pharmaGroup,
      "We had outgrown our offices in the building and were given the opportunity to move to another floor. We needed a partner to support us and ensure the transition was carried out under the best possible conditions",
    ),
    slide(
      CLIENTS.horusPharma,
      "We didn’t really know which direction to take at the start. Ronnsquare helped us refocus, presented several options to refine our decision, and guided us through numerous discussions, reviews, and iterations throughout the process",
    ),
    slide(
      CLIENTS.merz,
      "We were particularly impressed by the excellent coordination between the project manager and the talented architect, who delivered a project that perfectly met both our requirements and our desires",
    ),
    slide(
      CLIENTS.imProjet,
      "Even while we were still in the study phase and had not yet signed a contract, Ronnsquare pushed the design work quite far. As a result, when we made our decision, we had a very clear understanding of where the project was heading",
    ),
  ]),
  "expertises/sustainability-ecology/06": reviews([
    slide(
      CLIENTS.vanderlande,
      "The solutions were quite innovative, and we were particularly impressed by the quality of the materials you proposed",
    ),
    slide(
      CLIENTS.pharmaGroup,
      "Several proposals were presented in response to our requirements. One of our key priorities was acoustic performance, and Ronnsquare fully delivered on that challenge, ensuring the level of sound insulation we were looking for",
    ),
    slide(
      CLIENTS.rodl,
      "I quickly felt that Ronnsquare truly understood the project: not to disrupt or dismantle what already exists, but to create a more welcoming environment with additional space for employees",
      { role: "Managing Partner – Rödl & Partner" },
    ),
    slide(
      CLIENTS.merz,
      "We were particularly impressed by Ronnsquare’s ability to propose solutions where all teams would feel at home and genuinely look forward to coming to the office",
    ),
  ]),
  "expertises/technical-execution/06": reviews([
    slide(
      CLIENTS.pharmaGroup,
      "Several proposals were presented in response to our requirements. One of our key priorities was acoustic performance, and Ronnsquare fully delivered on that challenge, ensuring the level of sound insulation we were looking for",
    ),
    slide(
      CLIENTS.naarea,
      "Thanks to Ronnsquare, we achieved all our objectives, including carrying out the works in an occupied environment, scheduling noisy activities at strategic times, maintaining effective separation between construction areas, and proactively managing outstanding items.",
    ),
    slide(
      CLIENTS.imProjet,
      "We had a defined budget, and whenever unexpected challenges arose, Ronnsquare was always available to propose solutions that kept the project within budget. In the end, we delivered the project while fully respecting our financial objectives",
    ),
  ]),
  "home/09": reviews([
    slide(
      CLIENTS.vanderlande,
      "Congratulations to the team for delivering the project on time and within budget. We had a number of constraints, particularly the need to minimize disruption to the business, and that objective was fully achieved",
    ),
    slide(
      CLIENTS.pharmaGroup,
      "Ronnsquare embraced the challenge and delivered successfully: spacious and light-filled workspaces, excellent acoustic performance, and an environment that everyone genuinely loved. It was exactly what we were looking for",
    ),
    slide(
      CLIENTS.rodl,
      "I quickly felt that Ronnsquare truly understood the project: not to disrupt or dismantle what already existed, but to create a more welcoming environment with additional space for employees",
    ),
    slide(
      CLIENTS.merz,
      "We even invited our European colleagues to visit, and they were envious of our offices, which now serve as a benchmark for other Merz Aesthetics subsidiaries across Europe",
    ),
  ]),
  "preoccupations/attract-and-retain-talent/08": reviews([
    slide(
      CLIENTS.imProjetEngineer,
      "It gave IM Projet’s image a huge boost. We no longer hesitate to invite external visitors—it’s truly fantastic",
    ),
    slide(
      CLIENTS.horusPharma,
      "At the beginning of the project, there were many concerns among employees. But as soon as they stepped into the new premises, that wave of uncertainty completely faded. They realized that everything had been designed with them in mind",
    ),
    slide(CLIENTS.rodl, "It’s a truly enjoyable place to work, as our employees remind us every day", {
      image: { src: "2026/05/Temoignage_Rodl_200kb-1024x683.jpg", alt: "Rödl & Partner fit-out project by Ronnsquare" },
      role: "Managing Partner – Rödl & Partner",
    }),
    slide(
      CLIENTS.merz,
      "We even invited our European colleagues to visit, and they were envious of our offices, which now serve as a benchmark for other Merz Aesthetics subsidiaries across Europe",
    ),
  ]),
  "preoccupations/bring-teams-back/08": reviews([
    slide(
      CLIENTS.vanderlande,
      "We now have a completely different dynamic. The cafeteria is used far more than before, becoming a social hub where people play foosball and enjoy the available amenities. It really makes coming back to the office something to look forward to",
    ),
    slide(
      CLIENTS.pharmaGroup,
      "Employees really appreciate the new workplace and make full use of it. They now have access to spaces they had never experienced before and that were not available in our previous offices. The result speaks for itself—a successful transformation",
    ),
    slide(
      CLIENTS.horusPharma,
      "The goal was to bring all employees together on a single site and create many more open-plan spaces, as our previous layout was highly compartmentalized, which hindered both team cohesion and cross-department collaboration.",
    ),
    slide(
      CLIENTS.merz,
      "We were particularly impressed by Ronnsquare’s ability to propose solutions where all teams would feel at home and genuinely look forward to coming to the office",
    ),
  ]),
  "preoccupations/complex-projects/08": reviews([
    slide(
      CLIENTS.pharmaGroup,
      "Employees really appreciate the new workplace and make full use of it. They now have access to spaces they had never experienced before and that were not available in our previous offices. The result speaks for itself—a successful transformation",
    ),
    slide(
      CLIENTS.naarea,
      "Thanks to Ronnsquare, we achieved all of our objectives, including delivering the works in an occupied environment, scheduling disruptive activities at strategic times, maintaining effective separation between construction and operational areas, and proactively managing outstanding items throughout the project",
    ),
    slide(
      CLIENTS.niterra,
      "We engaged Ronnsquare to manage the entire project, including the relocation and the strip-out of our former premises",
      { role: "Chief Manager - Niterra" },
    ),
    slide(
      CLIENTS.merz,
      "As a pharmaceutical establishment, we are subject to a number of regulatory requirements. Ronnsquare successfully incorporated these constraints into the project, including a secure archive room and specific access control measures",
    ),
  ]),
  "preoccupations/lease-expiry/08": reviews([
    slide(
      CLIENTS.pharmaGroup,
      "We were feeling cramped in our offices in this building, and we had the opportunity to move to another floor. We needed someone to guide us and ensure everything was set up under the best possible conditions",
    ),
    slide(
      CLIENTS.horusPharma,
      "The objective was to bring all employees together on a single site and create more open-plan workspaces. Our previous offices were highly compartmentalized, which limited both team cohesion and collaboration between departments",
    ),
    slide(
      CLIENTS.rodl,
      "We were looking to create more space while remaining in our current offices. The challenge was to increase capacity without completely disrupting the existing office layout and organization",
      { role: "Managing Partner – Rödl & Partner" },
    ),
    slide(
      CLIENTS.imProjet,
      "Ronnsquare understood our needs very quickly and took all of our requests and requirements into account throughout the project",
    ),
  ]),
  "realisations/04": reviews([
    slide(
      CLIENTS.pharmaGroup,
      "Ronnsquare took on the challenge and delivered successfully: spacious, light-filled workspaces with excellent acoustic performance. In fact, everyone loved it—it was perfect",
    ),
    slide(
      CLIENTS.niterra,
      "We truly have an office that everyone—both our employees and visiting colleagues—enjoys. Everyone has congratulated us on this success and the quality of the fit-out",
    ),
    slide(CLIENTS.rodl, "It’s truly a great place to work, as our employees tell us every day"),
    slide(CLIENTS.abylsen, "Employee feedback was immediate, with a genuine 'wow' at the quality of the final result"),
  ]),
};
