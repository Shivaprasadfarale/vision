/**
 * Block 2-2 — concern page "about" section. `title` may contain <br />.
 * Keyed by "<page>/<section-index>".
 */
export type AboutImage = { src: string; alt: string; sizes: string };
export type ConcernAboutProps = {
  title: string;
  images: [AboutImage, AboutImage];
  description: string;
  button: { label: string; href: string };
};

const sizes = (w: number) => `auto, (max-width: ${w}px) 100vw, ${w}px`;
const BUREAU: AboutImage = { src: "2026/07/Bureau.jpg", alt: "Breakout area with a sofa and acoustic ceiling baffles", sizes: sizes(1357) };
const ABOUT_2: AboutImage = {
  src: "2026/05/about-2-1536x2048.jpg",
  alt: "Office corridor with an acoustic phone booth and blue armchairs",
  sizes: sizes(1536),
};
const contact = (label: string) => ({ label, href: "/en/contact/" });
const GET_IN_TOUCH = contact("Get in touch with us");

export const concernAbout: Record<string, ConcernAboutProps> = {
  "preoccupations/attract-and-retain-talent/02": {
    title: "The war for talent is also<br />won—or lost—in your workplace.",
    images: [{ src: "2026/06/card-b-3.jpg", alt: "Team meeting in a room with yellow walls", sizes: sizes(1348) }, ABOUT_2],
    description:
      "Struggling to attract and retain talent? Embarrassed to welcome candidates into your current workspace? The quality and image of your workplace play a key role in successful recruitment—and we can help you turn it into a real competitive advantage.",
    button: GET_IN_TOUCH,
  },
  "preoccupations/bring-teams-back/02": {
    title: "The Office Has Lost Its Appeal",
    images: [BUREAU, ABOUT_2],
    description:
      "Remote work has become widely adopted, giving employees the flexibility to work from anywhere. However, this shift has often come at the expense of internal communication and team cohesion. As a result, offices are increasingly underutilized, with employees choosing to work from home instead.",
    button: GET_IN_TOUCH,
  },
  "preoccupations/complex-projects/02": {
    title: "When No One Can Do It All",
    images: [{ src: "2026/05/14.-CALL-TO-ACTION.jpg", alt: "", sizes: sizes(2048) }, ABOUT_2],
    description:
      "Some workplace projects go beyond traditional office spaces: hospitality, sensitive areas, security, defense, data centers, nuclear facilities, laboratories, clean rooms, multi-site operations, and more. Our agency brings together experts across all these specialized fields.",
    button: GET_IN_TOUCH,
  },
  "preoccupations/lease-expiry/02": {
    title: "Lease Expiry =<br />Critical Decision",
    images: [BUREAU, { src: "2026/07/Batiments-1.jpg", alt: "Glass office towers seen from below", sizes: sizes(2048) }],
    description:
      "Whether your lease is ending in one or three years, you will need to make a decision: stay in your current premises or relocate. This decision will impact your business for years to come and deserves a thorough and rigorous analysis.",
    button: contact("Contact Us"),
  },
};
