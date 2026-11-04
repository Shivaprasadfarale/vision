/**
 * Block 1-7 (services) — pinned stack of service cards with an assembling totem.
 * Keyed by "<page>/<section-index>".
 *
 * Variant classes are derived: `--no-title` when `title` is omitted,
 * `--no-image` when no card has an image. `layout` sets the base modifiers
 * (all current instances use list + totem).
 */
export type ServicesTone = "dark" | "parme" | "sable";
export type ServicesCard = {
  title: string;
  description: string;
  button: { label: string; href: string };
  image?: { src: string; alt: string };
  /** Card colour; defaults to the dark/parme/dark/sable cycle. */
  tone?: ServicesTone;
};
export type ServicesProps = {
  title?: string;
  layout?: ("list" | "totem")[];
  cards: ServicesCard[];
};

const CONTACT = "/en/contact/";
const IMG = {
  consulting: { src: "2026/06/3.-CONSEIL-STRATEGIQUE_200kb-1024x668.jpg", alt: "Strategic workspace fit-out consulting by Ronnsquare" },
  architecture: { src: "2026/06/4.-ARCHITECTURE-DESIGN_200kb-1024x673.jpg", alt: "Workspace architecture and design by Ronnsquare" },
  technical: { src: "2026/06/5.-TECNIQUE-REALISATION_200kb-1024x680.jpg", alt: "Technical delivery of fit-outs by Ronnsquare" },
  sustainability: { src: "2026/06/6.-DURABILITE-ECOLOGIE_200kb-1024x680.jpg", alt: "Sustainable, eco-friendly office fit-out by Ronnsquare" },
};

/** Text-only cards that all link to the contact page with the same label. */
const studyCards = (label: string, items: [string, string][]): ServicesCard[] =>
  items.map(([title, description]) => ({ title, description, button: { label, href: CONTACT } }));

export const services: Record<string, ServicesProps> = {
  "home/07": {
    title: "Our Support",
    cards: [
      {
        title: "Consulting & Strategy",
        description:
          "Before thinking about square meters, we focus on your business and your goals. We analyze your challenges, ways of working, and ambitions to build a solid project strategy—one that will guide every decision that follows.",
        button: { label: "LEARN MORE", href: "/en/expertises/consulting-strategy/" },
        image: IMG.consulting,
      },
      {
        title: "Architecture & Design",
        description:
          "Your spaces tell your story. We design them to support your goals and meet your challenges, combining creativity, aesthetics, functionality, and sustainability—while always keeping your budget in mind.",
        button: { label: "LEARN MORE", href: "/en/expertises/architecture-design/" },
        image: IMG.architecture,
      },
      {
        title: "Technical Delivery & Project Execution",
        description:
          "From the initial cost estimate to project completion, we manage every aspect of the construction process. Timelines are met, costs are controlled, and quality is guaranteed—giving you peace of mind while we handle the complexity.",
        button: { label: "LEARN MORE", href: "/en/expertises/technical-execution/" },
        image: IMG.technical,
      },
      {
        title: "Sustainability & Ecology",
        description:
          "We integrate tomorrow’s challenges into today’s projects by developing a strategy aligned with your vision. Sustainable certifications, material reuse, and carbon footprint reduction are all part of the conversation.",
        button: { label: "LEARN MORE", href: "/en/expertises/sustainability-ecology/" },
        image: IMG.sustainability,
      },
    ],
  },
  // Note: the original links here point to legacy (French) expertise slugs.
  "expertises/02": {
    cards: [
      {
        title: "Consulting & Strategy",
        description:
          "Before thinking about square footage, we focus on your business and your project. We analyze challenges, ways of working, and ambitions to build a solid project strategy—one that will guide every decision moving forward.",
        button: { label: "Learn more", href: "/en/expertises/conseil-strategique/" },
        image: IMG.consulting,
      },
      {
        title: "Architecture & Design",
        description:
          "Your spaces reflect who you are. We design them to achieve your goals and address your challenges, combining creativity, aesthetics, functionality, and responsibility—always with your budget in mind.",
        button: { label: "Learn more", href: "/en/expertises/architecture-design/" },
        image: IMG.architecture,
      },
      {
        title: "Technical Delivery & Execution",
        description:
          "From the initial cost estimate to project completion, we manage the entire construction process. On-time delivery, controlled costs, and guaranteed quality: you move forward with peace of mind while we handle the complexity.",
        button: { label: "Learn more", href: "/en/expertises/technique-realisation/" },
        image: IMG.technical,
      },
      {
        title: "Sustainability & Ecology",
        description:
          "We integrate tomorrow’s challenges into today’s projects by developing a strategy aligned with your vision. Sustainable certifications, reuse, and carbon footprint reduction are among the key topics we address.",
        button: { label: "Learn more", href: "/en/expertises/durabilite-ecologie/" },
        image: IMG.sustainability,
      },
    ],
  },
  "preoccupations/attract-and-retain-talent/04": {
    title: "Attract and Retain Talent",
    cards: studyCards("Stay or Move Study", [
      [
        "Assessment of Your Challenges and Market",
        "Understand the needs and expectations of your employees and candidates to improve performance through better workplace design and more effective use of space.",
      ],
      [
        "Evidence-Based Recommendation",
        "Our professional recommendation: a clear, evidence-based proposal outlining the most effective solutions to attract and retain talent.",
      ],
      [
        "Architectural Concept",
        "Employee and visitor journey, along with the layout of key activity zones: collaboration, focus, social interaction, and more.",
      ],
      [
        "Detailed Financial Overview",
        "Comprehensive and detailed financial approach, with progressive cost planning that clearly shows the impact of every change and decision. Our expertise for your success – Single point of contact – Unbiased advice",
      ],
    ]),
  },
  "preoccupations/bring-teams-back/04": {
    title: "Bringing Teams Back to the Office",
    cards: studyCards("Request the Study", [
      [
        "Workplace Usage Analysis",
        "Understand how your teams work and identify how to help each individual perform at their best through spaces designed around their needs and ways of working.",
      ],
      [
        "Evidence-Based Recommendation",
        "Our professional recommendation: a clear, evidence-based proposal outlining the ways of working best suited to support your organization's success.",
      ],
      [
        "Architectural Concept",
        "Location of key activity areas—collaboration, focused work, social interaction, and more—as well as the relationships and interactions between teams.",
      ],
      [
        "Detailed Financial Overview",
        "Comprehensive and detailed financial approach, with progressive cost planning that clearly demonstrates the impact of every decision and change. Our expertise for your success – Single point of contact – Independent advice.",
      ],
    ]),
  },
  "preoccupations/complex-projects/04": {
    title: "A Complex Project",
    cards: studyCards("Request the Study", [
      [
        "Detailed Project Assessment",
        "Understand the overall vision and project requirements to identify, engage, and assign the right specialists for successful project delivery.",
      ],
      [
        "Coordination of Multiple Experts",
        "Interactions and oversight of: licensed architects, space designers, acousticians, engineering consultants, specialized engineers, furniture, fit-out, IT, and security, among others.",
      ],
      [
        "One Unified and Controlled Schedule",
        "We create a comprehensive project schedule that brings together all stakeholders and workstreams, ensuring a single, coordinated project completion date.",
      ],
      [
        "A Detailed Budget",
        "Integration of all project components and studies into a progressive cost plan that clearly shows the impact of each decision and change. Single point of contact – Multiple areas of expertise – We assume all risks",
      ],
    ]),
  },
  "preoccupations/lease-expiry/04": {
    title: "A Stay or Move Study",
    cards: studyCards("Request the Study", [
      [
        "Audit of Your Current Situation.",
        "Technical, functional, and financial analysis of your current situation, including your buildings, legal and contractual framework, needs, and key challenges.",
      ],
      [
        "Real Estate Market Study",
        "Search for premises matching your criteria—surface area, location, needs, and strategic requirements. 100% confidential and without alerting the market.",
      ],
      [
        "Quantified Stay or Move Comparison",
        "Comprehensive and detailed financial analysis of different scenarios, including rent, operating costs, refurbishment works, relocation expenses, and hidden costs.",
      ],
      [
        "Evidence-Based Recommendation",
        "Our professional recommendation: a clear, fact-based answer—stay or move—and most importantly, why. No commitment required – 100% confidential – Independent advice.",
      ],
    ]),
  },
};
