/**
 * Block 5-4 — DNA & Team key contacts. `photo` is relative to /assets/uploads/.
 * Keyed by "<page>/<section-index>".
 */
export type TeamMember = { name: string; role: string; photo: string; linkedin: string };
export type DnaTeamProps = { title: string; subtitle: string; members: TeamMember[]; buttonLabel?: string };

const LI = "https://www.linkedin.com/in/";

export const dnaTeam: Record<string, DnaTeamProps> = {
  "dna-team/09": {
    title: "Your Key Contacts",
    subtitle: "Experts Dedicated to Your Project",
    members: [
      { name: "Lorris RONCORONI", role: "Partner", photo: "2026/05/Persona-1.png", linkedin: `${LI}lorris-roncoroni-540a9413a/` },
      { name: "Yvonne KWOK", role: "Lead Designer", photo: "2026/05/Persona-2.png", linkedin: `${LI}ykwok/` },
      { name: "Fiorenzo RUSSIER", role: "Senior account Manager", photo: "2026/05/Persona-3.png", linkedin: `${LI}fiorenzo-russier-566586123/` },
      { name: "Ulrich RONCORONI", role: "Partner", photo: "2026/05/Persona-4.png", linkedin: `${LI}ulrich-roncoroni-a5aa9113a/` },
      { name: "Emma BERNARD", role: "Account Manager", photo: "2026/05/Persona-5.png", linkedin: `${LI}emma-bernard-061b25240/` },
      { name: "Carwyn HEYWOOD", role: "Pre-Construction", photo: "2026/05/Persona-6.png", linkedin: `${LI}carwyn-heywood-9346a624a/` },
      { name: "Fedia MICHAUD", role: "Lead Designer", photo: "2026/05/Persona-7.png", linkedin: `${LI}f%C3%A9dia-m-577528225/` },
      { name: "Samy MOLINES", role: "Project Lead", photo: "2026/05/Persona-8.png", linkedin: `${LI}samy-molines-adp-group/` },
      { name: "Denis ONCINS", role: "Construction Lead", photo: "2026/05/Persona-9.png", linkedin: `${LI}denis-oncins-b1562a202/` },
      { name: "Nawel BENFERHAT", role: "Lead Designer", photo: "2026/05/Person.png", linkedin: `${LI}nawel-benferhat-477995150/` },
    ],
  },
};
