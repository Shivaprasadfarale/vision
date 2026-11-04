/**
 * Block 2-1 — concern ("préoccupation") page hero.
 * Keyed by "<page>/<section-index>".
 */
export type ConcernHeroProps = {
  title: string;
  image: { src: string; alt: string; sizes: string };
  description: string;
  button: { label: string; href: string };
};

const HERO_IMG = { src: "2026/05/hero-photo.png", alt: "Open-plan workspace", sizes: "(max-width: 1800px) 100vw, 1800px" };
const contact = (label: string) => ({ label, href: "/en/contact/" });

export const concernHero: Record<string, ConcernHeroProps> = {
  "preoccupations/attract-and-retain-talent/01": {
    title: "Your Workplace Is Your Best Recruitment Tool",
    image: HERO_IMG,
    description:
      "A workplace that reflects your culture attracts top talent and helps retain your teams. Your employees should want to come to the office—and stay.",
    button: contact("Discuss Workplace"),
  },
  "preoccupations/bring-teams-back/01": {
    title: "Bring Your Teams Back to the Office?",
    image: HERO_IMG,
    description: "Lack of team cohesion and collaboration? A clear solution that benefits both your business and your employees.",
    button: contact("Let's Talk"),
  },
  "preoccupations/complex-projects/01": {
    title: "Is your project too complex for a single provider?",
    image: HERO_IMG,
    description: "A single project manager coordinates all the required expertise. All the risks are on us, not on you.",
    button: contact("Let's Talk"),
  },
  "preoccupations/lease-expiry/01": {
    title: "Is your lease coming to an end?",
    image: { src: "2026/07/AdobeStock_332667448_200kb.jpg", alt: "Open-plan workspace", sizes: "(max-width: 2048px) 100vw, 2048px" },
    description: "Stay or move—we analyze both options for you. A clear, data-driven answer with no commitment required.",
    button: contact("Request the Study"),
  },
};
