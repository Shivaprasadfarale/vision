/**
 * Block 4-1 — expertise detail page hero. `title` may contain <br /> and
 * entities (rendered as HTML); `ariaLabel` is the original plain-text label.
 * Keyed by "<page>/<section-index>".
 */
export type ExpertiseHeroProps = {
  theme: "parme" | "maron-parme" | "sable" | "maron-sable";
  titleSize: "medium" | "default";
  ariaLabel: string;
  title: string;
  description: string;
  buttonLabel: string;
  image: { src: string; alt: string };
};

export const expertiseHero: Record<string, ExpertiseHeroProps> = {
  "expertises/architecture-design/01": {
    theme: "parme",
    titleSize: "medium",
    ariaLabel: "Architecture &Design",
    title: "Architecture &amp;<br />Design",
    description:
      "Your spaces tell your story. We design them to support your goals and address your challenges through a creative approach that combines aesthetics, functionality, and sustainability—while always keeping your budget in focus.",
    buttonLabel: "Learn More",
    image: { src: "2026/06/4.-ARCHITECTURE-DESIGN_200kb.jpg", alt: "Workspace architecture and design by Ronnsquare" },
  },
  "expertises/consulting-strategy/01": {
    theme: "maron-parme",
    titleSize: "default",
    ariaLabel: "Consulting &Strategy",
    title: "Consulting &amp;<br />Strategy",
    description:
      "Before thinking about square footage, we focus on your business and your objectives. We analyze your challenges, ways of working, and ambitions to build a solid project strategy—one that will guide every decision that follows.",
    buttonLabel: "Learn More",
    image: { src: "2026/06/3.-CONSEIL-STRATEGIQUE_200kb.jpg", alt: "Strategic workspace fit-out consulting by Ronnsquare" },
  },
  "expertises/sustainability-ecology/01": {
    theme: "sable",
    titleSize: "default",
    ariaLabel: "Sustainability & Ecology",
    title: "Sustainability <br />&amp; Ecology",
    description:
      "We integrate tomorrow’s challenges into today’s projects by developing a strategy aligned with your vision. Sustainable certifications, material reuse, and carbon footprint reduction are key considerations throughout the process.",
    buttonLabel: "Learn more",
    image: { src: "2026/06/6.-DURABILITE-ECOLOGIE_200kb.jpg", alt: "Sustainable, eco-friendly office fit-out by Ronnsquare" },
  },
  "expertises/technical-execution/01": {
    theme: "maron-sable",
    titleSize: "default",
    ariaLabel: "Technical Delivery ",
    title: "Technical Delivery",
    description:
      "From the first cost estimate to project handover, we manage every stage of the delivery process. Timelines are met, costs are controlled, and quality is assured—allowing you to move forward with confidence while we handle the complexity.",
    buttonLabel: "Learn more",
    image: { src: "2026/06/5.-TECNIQUE-REALISATION_200kb.jpg", alt: "Technical delivery of fit-outs by Ronnsquare" },
  },
};
