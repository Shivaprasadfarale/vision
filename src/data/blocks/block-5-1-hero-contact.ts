/**
 * Block 5-1 (contact) — contact page hero + enquiry form.
 * Form fields: `placeholder` doubles as aria-label; fields with `errors` get an
 * error slot (#rs-err-<name>) referenced by aria-describedby, and each message
 * is emitted as data-error-<kind>. Keyed by "<page>/<section-index>".
 */
export type ContactField = {
  tag?: "input" | "textarea";
  type?: "text" | "email" | "tel";
  name: string;
  placeholder: string;
  autocomplete?: string;
  inputmode?: string;
  required?: boolean;
  pattern?: string;
  rows?: number;
  errors?: { required?: string; type?: string; pattern?: string };
};
export type ContactRow = { modifiers: string[]; fields: ContactField[] };
export type ContactCoord = { label: string; value: string; copyLabel: string };
export type ContactHeroProps = {
  /** May contain <br />; aria-label strips tags. */
  heading: string;
  coordTitle: string;
  address: ContactCoord;
  hours: { label: string; value: string };
  email: ContactCoord;
  phone: ContactCoord;
  social: { label: string; href: string };
  formButton: string;
  callbackButton: string;
  formTitle: string;
  rows: ContactRow[];
  /** Consent checkbox: label HTML (with policy links) and required-error message. */
  consent: { label: string; error: string };
  submitLabel: string;
};

const EMAIL_PATTERN = String.raw`[^@\s]+@[^@\s]+\.[^@\s]+`;
const PHONE_PATTERN = String.raw`(?=(?:\D*\d){6,})[\d+\(\)\s.\/\-]+`;

export const contactHero: Record<string, ContactHeroProps> = {
  "contact/01": {
    heading: "LET'S TALK ABOUT<br />YOUR PROJECT",
    coordTitle: "Contact Information",
    address: { label: "Head office", value: "25 rue du 4 Septembre 75002 Paris", copyLabel: "Copy address" },
    hours: { label: "Opening hours", value: "Mon - Fri: 9:00 AM - 6:30 PM" },
    email: { label: "Email", value: "contact@ronnsquare.com", copyLabel: "Copy email" },
    phone: { label: "Phone", value: "01 83 68 00 04", copyLabel: "Copy phone number" },
    social: { label: "LinkedIn", href: "https://www.linkedin.com/company/ronnsquare/" },
    formButton: "Fill Out a Form",
    callbackButton: "Get a Call Back in 1 Minute",
    formTitle: "Fill out the form below",
    rows: [
      {
        modifiers: ["2col", "2col-mobile"],
        fields: [
          {
            type: "text",
            name: "nom",
            placeholder: "Your last name *",
            autocomplete: "family-name",
            required: true,
            errors: { required: "Please enter your last name." },
          },
          {
            type: "text",
            name: "prenom",
            placeholder: "Your first name *",
            autocomplete: "given-name",
            required: true,
            errors: { required: "Please enter your first name." },
          },
        ],
      },
      {
        modifiers: ["2col"],
        fields: [
          {
            type: "email",
            name: "email",
            placeholder: "Business email *",
            autocomplete: "email",
            required: true,
            pattern: EMAIL_PATTERN,
            errors: { required: "Please enter your email.", type: "Please enter a valid email.", pattern: "Please enter a valid email." },
          },
          {
            type: "tel",
            name: "telephone",
            inputmode: "tel",
            placeholder: "Phone",
            autocomplete: "tel",
            pattern: PHONE_PATTERN,
            errors: { pattern: "Please enter a valid phone number." },
          },
        ],
      },
      {
        modifiers: ["efl"],
        fields: [
          {
            type: "text",
            name: "entreprise",
            placeholder: "Company *",
            autocomplete: "organization",
            required: true,
            errors: { required: "Please enter your company name." },
          },
          { type: "text", name: "surface", placeholder: "Estimated surface area" },
          {
            type: "text",
            name: "localisation",
            placeholder: "Location *",
            required: true,
            errors: { required: "Please enter the location." },
          },
        ],
      },
      {
        modifiers: [],
        fields: [
          {
            tag: "textarea",
            name: "projet",
            placeholder: "Your project *",
            rows: 5,
            required: true,
            errors: { required: "Please describe your project." },
          },
        ],
      },
    ],
    consent: {
      label:
        'I accept Ronnsquare\'s <a class="consent-link" href="/en/privacy-policy/" data-privacy-open="">Privacy Policy</a>. It is also protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.',
      error: "Please accept the Privacy Policy.",
    },
    submitLabel: "Send My Request",
  },
};
