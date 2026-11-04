/**
 * Block 5-6 — DNA & Team methodology steps (numbered 01, 02, … in order).
 * Keyed by "<page>/<section-index>".
 */
export type MethodeStep = { title: string; description: string };
export type DnaMethodeProps = { ariaLabel: string; brandLabel: string; steps: MethodeStep[]; subtitle: string };

export const dnaMethode: Record<string, DnaMethodeProps> = {
  "dna-team/04": {
    ariaLabel: "Our Methodology Ronnsquare",
    brandLabel: "Our Methodology",
    subtitle: "Progressive Budgeting",
    steps: [
      {
        title: "Advise",
        description:
          "This initial phase, focused on understanding your needs and challenges, allows us to define the strategy best suited to your workplace and real estate project. We then present an initial design proposal, giving you a clear view of the aesthetic, financial, and technical aspects of what your project could become.",
      },
      {
        title: "Design",
        description:
          "We develop the detailed design of your project: aesthetically through the approved workplace concept, technically through the evaluation of the most suitable solutions, and financially through detailed consultations and cost planning. Progressive budgeting gives you real-time visibility into the financial impact of every decision and project approval.",
      },
      {
        title: "Deliver",
        description:
          "We commit to delivering your project at a fixed, final price with no unexpected extras. Our teams manage every stage of the execution process, from planning and site safety to ongoing construction supervision and quality control, through to final handover and workspace inauguration. Our guiding principle: deliver the project on time and within the agreed budget.",
      },
    ],
  },
};
