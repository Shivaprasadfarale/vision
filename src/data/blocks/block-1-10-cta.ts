/**
 * Block 1-10 — call-to-action card over a parallax photograph.
 * Keyed by "<page>/<section-index>" (page keys match src/data/pages-meta.json).
 */
export type CtaProps = {
  image: string;
  title: string;
  body: string;
  button: { label: string; href: string };
};

const AUDIT_IMG = "2026/05/14.-CALL-TO-ACTION-1024x683.jpg";
const CTA_BG = "2026/05/cta-bg-1024x678.jpg";
const contact = (label: string) => ({ label, href: "/en/contact/" });

const expertiseCta = (body: string): CtaProps => ({
  image: CTA_BG,
  title: "Learn More About Our Expertise",
  body,
  button: contact("Book a Consultation"),
});
const concernCta = (body: string, label: string, image = CTA_BG): CtaProps => ({
  image,
  title: "Do you have a workplace project?",
  body,
  button: contact(label),
});

export const cta: Record<string, CtaProps> = {
  "home/10": {
    image: AUDIT_IMG,
    title: "Do you have a workplace design project?",
    body: "Receive a complimentary workspace audit and get personalized recommendations tailored to your project.",
    button: contact("Free Audit"),
  },
  "expertises/07": {
    image: AUDIT_IMG,
    title: "Do you have a workplace design project?",
    body: "Receive a complimentary audit of your spaces and personalized recommendations for your project.",
    button: contact("Free audit"),
  },
  "expertises/architecture-design/09": {
    ...expertiseCta("Speak with our experts and receive personalized recommendations tailored to your needs."),
    button: contact("Book an Appointment"),
  },
  "expertises/consulting-strategy/09": expertiseCta("Speak with our experts and receive personalized recommendations tailored to your needs."),
  "expertises/sustainability-ecology/09": expertiseCta("Speak with our experts and receive personalized recommendations tailored to your needs."),
  "expertises/technical-execution/09": expertiseCta(
    "Speak with our experts and receive personalized recommendations tailored to your needs and project goals.",
  ),
  "preoccupations/attract-and-retain-talent/09": concernCta(
    "Receive a complimentary workplace audit and personalized recommendations tailored to your project.",
    "Free Audit",
  ),
  "preoccupations/bring-teams-back/09": concernCta(
    "Receive a complimentary workplace audit and personalized recommendations tailored to your project.",
    "Free Audit",
  ),
  "preoccupations/complex-projects/09": concernCta(
    "Receive a complimentary workplace audit and personalized recommendations tailored to your project.",
    "Free audit",
  ),
  "preoccupations/lease-expiry/09": concernCta(
    "Receive a complimentary audit of your spaces and get personalized recommendations for your project.",
    "Free audit",
    "2026/07/Batiments-1-1024x683.jpg",
  ),
  "testimonials/03": {
    image: CTA_BG,
    title: "Do You Have a Workplace Project?",
    body: "Contact us for a complimentary assessment of your workplace",
    button: contact("Contact Us"),
  },
};
