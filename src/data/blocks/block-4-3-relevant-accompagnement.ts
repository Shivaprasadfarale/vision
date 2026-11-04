/**
 * Block 4-3 — links to the other expertise pages. The card image alt equals
 * the card title. Keyed by "<page>/<section-index>".
 */
export type RelevantCard = {
  theme: "parme" | "maron" | "sable";
  image: string;
  title: string;
  href: string;
  buttonLabel: string;
};
export type RelevantAccompagnementProps = { title: string; cards: RelevantCard[] };

const TITLE = "Explore Our<br />Other Areas of Expertise";

const architecture = (buttonLabel = "Learn More"): RelevantCard => ({
  theme: "parme",
  image: "2026/06/4.-ARCHITECTURE-DESIGN_200kb.jpg",
  title: "Architecture & Design",
  href: "/en/expertises/architecture-design/",
  buttonLabel,
});
const consulting = (buttonLabel = "Learn More"): RelevantCard => ({
  theme: "maron",
  image: "2026/06/3.-CONSEIL-STRATEGIQUE_200kb.jpg",
  title: "Consulting & Strategy",
  href: "/en/expertises/conseil-strategique/",
  buttonLabel,
});
const technical = (title: string): RelevantCard => ({
  theme: "maron",
  image: "2026/06/5.-TECNIQUE-REALISATION_200kb.jpg",
  title,
  href: "/en/expertises/technique-realisation/",
  buttonLabel: "Learn More",
});
const sustainability = (buttonLabel = "Learn More"): RelevantCard => ({
  theme: "sable",
  image: "2026/06/6.-DURABILITE-ECOLOGIE_200kb.jpg",
  title: "Sustainability & Ecology",
  href: "/en/expertises/durabilite-ecologie/",
  buttonLabel,
});

export const relevantAccompagnement: Record<string, RelevantAccompagnementProps> = {
  "expertises/architecture-design/08": {
    title: TITLE,
    cards: [consulting(), technical("Technical Delivery & Project Execution"), sustainability()],
  },
  "expertises/consulting-strategy/08": {
    title: TITLE,
    cards: [architecture(), technical("Technical Delivery & Project Execution"), sustainability()],
  },
  "expertises/sustainability-ecology/08": {
    title: TITLE,
    cards: [architecture(), technical("Technical Delivery & Construction"), consulting()],
  },
  "expertises/technical-execution/08": {
    title: TITLE,
    cards: [architecture("Learn more"), consulting("Learn more"), sustainability("Learn more")],
  },
};
