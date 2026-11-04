/**
 * Block 5-3 — DNA & Team ESG policy. Titles may contain <br />; `lottie` is a
 * site-absolute URL to the animation JSON; `image` is relative to /assets/uploads/.
 * Keyed by "<page>/<section-index>".
 */
export type EsgCard = { title: string; description: string; lottie: string };
export type DnaEsgProps = { title: string; description: string; image: string; cards: EsgCard[] };

export const dnaEsg: Record<string, DnaEsgProps> = {
  "dna-team/07": {
    title: "RONNSQUARE ESG<br />Policy",
    description: "",
    image: "2026/05/rse-bg.jpg",
    cards: [
      {
        title: "Our Commitments<br />to the Environment",
        description:
          "We are committed to sustainability at every level: waste recovery and recycling, circular economy practices, responsible sourcing and material certification, reducing consumption and waste, and promoting eco-friendly mobility and environmentally responsible practices.",
        lottie: "/assets/uploads/2026/06/icons-1-ps-parme.json",
      },
      {
        title: "Our Fair and Inclusive<br />Social Policy",
        description:
          "We place health, safety, and fairness at the heart of our priorities by fostering a healthy and respectful work environment, supporting employee growth and development, and contributing to local initiatives alongside associations and public institutions.",
        lottie: "/assets/theme/lottie/icon-5-3-02.json",
      },
      {
        title: "Ethics and Transparency<br />in Our Practices",
        description:
          "We act with integrity and transparency, protect the data of our stakeholders, comply with laws and human rights standards, and maintain a zero-tolerance approach to corruption and fraud.",
        lottie: "/assets/uploads/2026/06/3rd-icon.json",
      },
    ],
  },
};
