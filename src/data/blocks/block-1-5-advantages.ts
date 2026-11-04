/**
 * Block 1-5 — advantages: two columns of cards around a central totem.
 * Keyed by "<page>/<section-index>".
 */
export type AdvantageBadge = "circle" | "half-circle" | "square" | "triangle" | "diamond" | "rectangle";
export type AdvantageItem = { badge: AdvantageBadge; title: string; desc: string };
export type AdvantagesProps = {
  title: string;
  left: AdvantageItem[];
  right: AdvantageItem[];
};

export const advantages: Record<string, AdvantagesProps> = {
  "home/05": {
    title: "What you gain by working with us is a balanced approach built on:",
    left: [
      {
        badge: "circle",
        title: "A Single Point of Contact",
        desc: "Our team is made up of specialists and industry experts who guide you through every stage of your project. One dedicated point of contact, always informed and always available.",
      },
      {
        badge: "half-circle",
        title: "A Clear Vision for Your Project",
        desc: "We put our 35 years of experience at your service to help you make the choices that are right for you. Unbiased advice, always focused on your best interests.",
      },
      {
        badge: "square",
        title: "Spaces That Reflect Who You Are",
        desc: "We never rely on standard solutions or copy-and-paste designs. We create spaces that reflect your culture, values, and way of working. Tailor-made, every time.",
      },
    ],
    right: [
      {
        badge: "triangle",
        title: "Complete Risk Management",
        desc: "We take full responsibility for the risks and challenges of your project, managing unexpected issues to deliver the best possible outcome. A successful project, with no surprises.",
      },
      {
        badge: "diamond",
        title: "Workspaces Designed to Last",
        desc: "We integrate tomorrow’s challenges into today’s project to maximize the value of your investment. A lasting solution, never a temporary fix.",
      },
      {
        badge: "rectangle",
        title: "A Project Delivered Within a Fixed Budget",
        desc: "We commit to a firm, final price with a clear breakdown of all services provided. A fixed budget, with no hidden costs.",
      },
    ],
  },
};
