/**
 * Block 5-2 — DNA & Team values. `description` may contain <br />.
 * Keyed by "<page>/<section-index>".
 */
export type ValueFigure = { shape: "square" | "diamond" | "circle"; title: string; description: string };
export type DnaValuesProps = { ariaLabel: string; figures: ValueFigure[] };

export const dnaValues: Record<string, DnaValuesProps> = {
  "dna-team/06": {
    ariaLabel: "Our commitments",
    figures: [
      { shape: "square", title: "Performance", description: "Tangible Results and<br />the Highest Standards" },
      { shape: "diamond", title: "Teamwork", description: "Succeeding Together Through<br />Collaboration and Shared Knowledge" },
      { shape: "circle", title: "Agility and Excellence", description: "Moving Fast While Maintaining<br />Consistent Excellence" },
      { shape: "diamond", title: "Humility", description: "Listening, Learning, and Growing<br />Through Experience" },
      { shape: "square", title: "Innovation", description: "Continuously Striving to<br />Improve, Experiment, and Grow" },
    ],
  },
};
