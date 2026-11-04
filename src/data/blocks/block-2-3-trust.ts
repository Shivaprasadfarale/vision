/**
 * Block 2-3 — concern page "Why trust us" cards (SVG icons under /assets/uploads/).
 * Keyed by "<page>/<section-index>".
 */
export type TrustCard = { icon: string; title: string; description: string };
export type ConcernTrustProps = { title: string; cards: TrustCard[] };

const TITLE = "Why Trust Us";
const ICON = {
  forefront: "2026/06/A-la-pointe-du-marche.svg",
  specialists: "2026/06/Des-specialistes-dans.svg",
  experience: "2026/06/35-ans-experience-1.svg",
  process: "2026/06/Un-process-eprouve.svg",
};
const EXPERIENCE_TITLE = "35 Years of Experience";
const EXPERIENCE_WORKPLACE: TrustCard = {
  icon: ICON.experience,
  title: EXPERIENCE_TITLE,
  description:
    "A team of workplace experts covering every stage of your project—from strategic consulting and workplace strategy to architecture, design, and project delivery.",
};

export const concernTrust: Record<string, ConcernTrustProps> = {
  "preoccupations/attract-and-retain-talent/05": {
    title: TITLE,
    cards: [
      {
        icon: ICON.forefront,
        title: "At the Forefront of the Market",
        description:
          "We stay at the forefront of the market to identify the workplace strategies and ways of working best suited to support your company’s growth.",
      },
      {
        icon: ICON.specialists,
        title: "Change Management Support",
        description:
          "Through direct engagement with your employees, we help address concerns, support adoption, and enable everyone to perform at their best in the new workplace environment.",
      },
      EXPERIENCE_WORKPLACE,
      {
        icon: ICON.process,
        title: "A Proven Process",
        description: "The Ronnsquare methodology was developed to deliver projects up to 25% faster than traditional project delivery methods.",
      },
    ],
  },
  "preoccupations/bring-teams-back/05": {
    title: TITLE,
    cards: [
      {
        icon: ICON.forefront,
        title: "At the Forefront of the Market",
        description:
          "We stay at the forefront of workplace trends and market developments to identify the ways of working best suited to support your company’s growth and long-term success.",
      },
      {
        icon: ICON.specialists,
        title: "Change Management Support",
        description:
          "Through ongoing engagement with your employees, we address concerns, support adoption, and help everyone perform at their best in the new workplace environment.",
      },
      EXPERIENCE_WORKPLACE,
      {
        icon: ICON.process,
        title: "A Proven Process",
        description: "The Ronnsquare methodology was developed to deliver projects up to 25% faster than traditional delivery methods.",
      },
    ],
  },
  "preoccupations/complex-projects/05": {
    title: TITLE,
    cards: [
      {
        icon: ICON.specialists,
        title: "Specialists in Every Field",
        description: "For every project, we bring together the specialists best suited to its technical requirements and level of complexity.",
      },
      {
        icon: "2026/06/Un-interlocuteur.svg",
        title: "A Dedicated Single Point of Contact",
        description:
          "We bring together all the stakeholders required to deliver your project through a single, streamlined process that is easy to manage and follow.",
      },
      {
        icon: ICON.experience,
        title: EXPERIENCE_TITLE,
        description:
          "A team of experts specialized in complex and technical environments, including sensitive areas, security, nuclear facilities, data centers, healthcare, and hygiene-critical spaces.",
      },
      {
        icon: ICON.process,
        title: "A Proven Methodology",
        description: "The Ronnsquare methodology was developed to deliver complex projects up to 25% faster than traditional delivery methods.",
      },
    ],
  },
  "preoccupations/lease-expiry/05": {
    title: TITLE,
    cards: [
      {
        icon: "2026/06/Independant-1.svg",
        title: "Independent",
        description:
          "A team of 50 dedicated experts committed to your project, fully independent and not affiliated with any real estate agency. Zero conflicts of interest.",
      },
      {
        icon: "2026/06/Discretion-absolue.svg",
        title: "Absolute Discretion",
        description: "We never disclose your identity on the market. Searches and property visits are conducted in complete confidentiality.",
      },
      {
        icon: "2026/06/35-ans-experience.svg",
        title: EXPERIENCE_TITLE,
        description: "A team of experts in real estate and workplace consulting and strategy. Our data and benchmarks are reliable and proven.",
      },
      {
        icon: "2026/06/Conseil-pur-1.svg",
        title: "Pure Advisory",
        description: "No design, no fit-out at this stage—only precise data, analysis, and a clear recommendation.",
      },
    ],
  },
};
