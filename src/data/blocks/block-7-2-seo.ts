/**
 * Block 7-2 — "SEO" text + photo split (photo opens the lightbox). Optional decorative
 * totem; layout modifiers --inversed / --no-pt / --no-pb. Body is rich HTML.
 * Keyed by "<page>/<section-index>".
 */
import { ABYLSEN, ARNEG, CCFA, EPICEUM, GROUPE_PHARMA, MERZ, NITERRA, RODL, SOCODA } from "./block-7-projects";
import type { ProjectPhoto } from "./block-7-projects";

export type SeoProps = {
  image: ProjectPhoto;
  title: string;
  /** Rich text (HTML string). */
  body: string;
  totem?: boolean;
  inversed?: boolean;
  noPt?: boolean;
  noPb?: boolean;
};

export const seo: Record<string, SeoProps> = {
  "realisations/abylsen/02": {
    image: ABYLSEN.p8,
    title: "New Premises to Support Rapid Growth",
    body: `
      <p data-start="0" data-end="273"> In a period of rapid growth, Abylsen needed offices that matched its new ambitions. With the previous office no longer able to accommodate all employees, the choice naturally fell on a Haussmann-style building near the Champs-Élysées, reflecting their historic address. </p>
      <p data-start="275" data-end="691"> The challenge was twofold: to design a space that was elegant, refined, and true to the brand image, while also meeting the practical needs of the teams. Modern meeting rooms, dedicated workshop and training areas, a convivial break area at the heart of the floor, and soundproof booths for calls and virtual meetings—every detail was carefully considered to combine comfort, functionality, and daily well-being. </p>
      <p data-start="693" data-end="818" data-is-last-node="" data-is-only-node=""> Upon handover, the teams were unanimously impressed by the quality of the fit-out and the attention given to every space. </p>
    `,
    totem: true,
    noPb: true,
  },
  "realisations/abylsen/05": {
    image: ABYLSEN.p7,
    title: "In a Haussmann-Style Building: Working with the Existing Layout",
    body: `
      <p data-start="0" data-end="292"> Working within a Haussmann-style building means adapting to architectural constraints: load-bearing walls, fixed layouts, and technical limitations linked to the age of the property. Every design decision had to work within an existing structure that was as beautiful as it was demanding. </p>
      <p data-start="294" data-end="602"> Working closely with Abylsen, we identified the right solutions. The most generous space was dedicated to a large meeting room equipped with tiered seating, capable of accommodating the entire team. Custom-built acoustic booths were also designed to provide private spaces for calls and virtual meetings. </p>
      <p data-start="604" data-end="760" data-is-last-node="" data-is-only-node=""> The result is a workplace that respects the character and heritage of the building while fully meeting the requirements of a modern working environment. </p>
    `,
    inversed: true,
    noPb: true,
  },
  "realisations/arneg/02": {
    image: ARNEG.p20,
    title: "A New, More Spacious Building and a Redesigned Internal Organization",
    body: `
      <p data-start="74" data-end="261"> Faced with the constraints of its former offices and continuous team growth, Arneg chose to relocate to a new, more spacious building designed to provide greater flexibility and capacity. </p>
      <p data-start="263" data-end="418"> We supported Arneg throughout the entire project, from workspace design to fit-out works and furniture installation across both floors of the new building. </p>
      <p data-start="420" data-end="785" data-is-last-node="" data-is-only-node=""> Employee well-being was a top priority. Focus areas and collaborative spaces were distributed across the floors to reduce noise and enhance productivity. Hybrid and multi-purpose workstations were also introduced to meet the needs of remote workers, visitors, and collaborative teams—making this new workplace a place where people genuinely enjoy working every day. </p>
    `,
    noPb: true,
  },
  "realisations/arneg/04": {
    image: ARNEG.p18,
    title: "The Cœur du Village® Concept",
    body: `
      <p data-start="34" data-end="325"> To meet the need for a welcoming, multifunctional space capable of hosting all employees, we introduced Arneg to the Cœur du Village® concept. It was reinterpreted to reflect their brand identity through an industrial-inspired atmosphere enhanced with raw materials for greater authenticity. </p>
      <p data-start="327" data-end="557"> More than just a gathering space, Arneg’s Cœur du Village® is a warm and inviting environment that encourages interaction and shared moments among employees, strengthening belonging, team cohesion, and the company’s social fabric. </p>
      <p data-start="559" data-end="913" data-is-last-node="" data-is-only-node=""> Designed to adapt to both current and future needs, this coworking-style space can be reconfigured depending on usage: coffee area, dining space, afterwork gatherings, all-hands meetings, drop-in workstations, collaborative sessions, or even client and external partner meetings. A truly versatile place, designed to support every moment of company life. </p>
    `,
    inversed: true,
    noPt: true,
    noPb: true,
  },
  "realisations/ccfa/02": {
    image: CCFA.p5,
    title: "Workspace Redesign with a View",
    body: `
      <p data-start="0" data-end="289"> As part of a comprehensive transformation of its workplace, this entire floor was completely redesigned to meet the requirements of a flex office. Located at a prestigious address with direct views of the Arc de Triomphe, the project combines functionality with an exceptional setting. </p>
      <p data-start="291" data-end="549"> The layout includes standardized workstations, all equipped with uniform connectivity, as well as individual locker systems allowing each employee to settle in freely. The entire floor was designed to streamline workflows and encourage internal mobility. </p>
      <p data-start="551" data-end="726" data-is-last-node="" data-is-only-node=""> A coworking and client reception area, taking full advantage of the panoramic views, completes the setup—blending everyday practicality with a polished image for visitors. </p>
    `,
    totem: true,
    noPb: true,
  },
  "realisations/epiceum/02": {
    image: EPICEUM.p4,
    title: "A Project Co-Created with All Epiceum Employees",
    body: `
      <p data-start="0" data-end="260"> Epiceum aimed to relocate to a new office floor to create a more welcoming and functional workspace for all employees. We had the privilege of supporting Epiceum throughout this important transition, providing guidance at every stage of the change process. </p>
      <p data-start="262" data-end="489"> The project was carried out in close collaboration with employees through a participatory approach, gathering their feedback and suggestions. The goal was to create a space that truly reflects the team’s identity and needs. </p>
      <p data-start="491" data-end="728" data-is-last-node="" data-is-only-node=""> Particular attention was given to incorporating greenery into the new offices. By integrating plants and green areas, we aimed to create a more pleasant and inspiring work environment that enhances employee well-being and motivation. </p>
    `,
    totem: true,
    noPb: true,
  },
  "realisations/epiceum/05": {
    image: EPICEUM.p7,
    title: "The Importance of a Work Café in Strengthening Team Cohesion",
    body: `
      <div class="qMYqUG_convSearchResultHighlightRoot">
      <div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-36" data-is-intersecting="true">
      <section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-36" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-36" data-testid="conversation-turn-1312" data-scroll-anchor="false" data-turn="assistant">
      <div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)">
      <div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn" data-conversation-screenshot-content="">
      <div class="flex max-w-full flex-col gap-4 grow">
      <div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="797ae74e-5a67-488c-951b-d1febbfafee5" data-message-model-slug="gpt-5-5" data-turn-start-message="true">
      <div class="flex w-full flex-col gap-1 empty:hidden">
      <div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling">
      <p data-start="0" data-end="304"> At Epiceum, the creation of a work café was essential in bringing employees together. Designed as both a relaxation area and a place for informal interaction, it provides a welcoming environment where colleagues can take a break, enjoy a hot drink, and connect in a friendly and inspiring atmosphere. </p>
      <p data-start="306" data-end="573"> This space supports not only individual well-being but also stronger team cohesion. In addition, the terrace plays a key role in enhancing the employee experience, offering an enjoyable outdoor space where people can recharge and step away from their daily tasks. </p>
      <p data-start="575" data-end="741" data-is-last-node="" data-is-only-node=""> This balanced environment helps reduce stress, strengthen employee engagement, and improve productivity, while creating a more enjoyable and fulfilling workplace. </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
    `,
    inversed: true,
    noPb: true,
  },
  "realisations/groupe-pharma/02": {
    image: GROUPE_PHARMA.p1,
    title: "Collaboration and Connection Above the Paris Skyline",
    body: `
      <p data-start="0" data-end="138"> An International Pharmaceutical Group recently relocated to a new space at a different address to establish its European headquarters. </p>
      <p data-start="140" data-end="382"> This redesign aims to create a welcoming environment that fosters collaboration for visiting employees. Our goal was to design an attractive workplace where teams feel motivated to come together, collaborate, and exchange ideas every day. </p>
      <p data-start="384" data-end="519"> The new space, filled with natural light, features ergonomic workstations, a convivial relaxation area, and multiple meeting rooms. </p>
      <p data-start="521" data-end="709" data-is-last-node="" data-is-only-node=""> The meeting rooms were designed with an original and inspiring theme, evoking a stroll across the rooftops of Paris, providing an ideal setting to stimulate creativity and interaction. </p>
    `,
    totem: true,
    noPb: true,
  },
  "realisations/merz-aesthetic/02": {
    image: MERZ.p9,
    title: "A Complete Workplace Reorganization in La Défense",
    body: `
      <p data-start="0" data-end="181"> Following the separation of Merz Aesthetics and Merz Therapeutics, the project involved redesigning an office floor with a focus on employee well-being and space reorganization. </p>
      <p data-start="183" data-end="491"> With the rapid growth of Merz Aesthetics, the existing premises were no longer sufficient to meet the company’s needs. Expansion was necessary, requiring a complete redesign of the workspace. Additionally, several areas were specifically designed to enhance performance and support the company’s dynamic. </p>
      <p data-start="493" data-end="669" data-is-last-node="" data-is-only-node=""> The design was conceived to reflect the welcoming and collaborative spirit of Merz Aesthetics, using soft colors to create a warm and inviting atmosphere for all employees. </p>
    `,
    totem: true,
    noPb: true,
  },
  "realisations/merz-aesthetic/05": {
    image: MERZ.p8,
    title: "A Warm Atmosphere to Promote Employee Well-Being",
    body: `
      <div class="" data-turn-id-container="da08f7f0-1772-41a5-b87a-02c62c7492a3" data-is-intersecting="true"> At Merz Aesthetics, creating a warm and welcoming atmosphere was essential to reflect the brand’s identity while fostering a calm and comfortable environment that supports employee well-being. This positive workplace experience helps boost engagement, motivation, and productivity. </div>
      <div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-15" data-is-intersecting="true">
      <section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-15" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-15" data-testid="conversation-turn-1270" data-scroll-anchor="false" data-turn="assistant">
      <div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)">
      <div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn" data-conversation-screenshot-content="">
      <div class="flex max-w-full flex-col gap-4 grow">
      <div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="5ca70dc8-9c18-447d-9400-1d5510f7fab5" data-message-model-slug="gpt-5-5" data-turn-start-message="true">
      <div class="flex w-full flex-col gap-1 empty:hidden">
      <div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling">
      <p data-start="287" data-end="542"> The design focused on creating collaborative and welcoming spaces that encourage interaction and the flow of information. Open areas and numerous meeting rooms were incorporated to enable employees to collaborate effectively and thrive professionally. </p>
      <p data-start="544" data-end="701"> A dedicated dining and coworking area was also designed to promote informal interactions, providing an enjoyable and inspiring setting for all employees. </p>
      <p data-start="703" data-end="875" data-is-last-node="" data-is-only-node=""> Located in La Défense, this new workplace was immediately embraced by employees, who quickly felt at home in these modern, functional, and thoughtfully designed spaces. </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
    `,
    inversed: true,
    noPb: true,
  },
  "realisations/niterra/02": {
    image: NITERRA.p1,
    title: "A Relocation Designed to Improve the Workplace Environment",
    body: `
      <p data-start="0" data-end="310"> Due to the expiry of its lease, Niterra was required to relocate to new premises, creating an opportunity to rethink and improve the workplace environment. The project aimed to preserve the existing organizational structure while adapting to new ways of working, including hybrid and remote work practices. </p>
      <p data-start="312" data-end="544"> Particular attention was given to the atmosphere of the new offices to create an enjoyable and inspiring workplace. A warm, welcoming environment with subtle touches of color was considered essential to bring the spaces to life. </p>
      <p data-start="546" data-end="773" data-is-last-node="" data-is-only-node=""> Acoustics were also a key priority in the design of the new workplace. Soundproof booths were installed, providing employees with dedicated spaces for focused work and confidential calls, free from surrounding distractions. </p>
    `,
    totem: true,
    noPb: true,
  },
  "realisations/niterra/05": {
    image: NITERRA.p7,
    title: "Integrating Flex Office and a Warm Workplace Atmosphere",
    body: `
      <p data-start="0" data-end="276"> Niterra chose to adopt a flex office model, giving employees the freedom to choose their workspace according to their needs. This flexibility optimizes the use of space while supporting a variety of work activities, from focused individual tasks to collaborative meetings. </p>
      <p data-start="278" data-end="562"> Particular attention was given to creating a warm and welcoming atmosphere. Relaxation areas, comfortable seating, and carefully selected decorative elements were incorporated throughout the workplace to enhance employee well-being and create a more enjoyable working environment. </p>
      <p data-start="564" data-end="896" data-is-last-node="" data-is-only-node=""> Acoustic comfort was also a key consideration, with the installation of soundproof booths that provide quiet spaces for focused work and private conversations. In addition, a dedicated social area was designed to encourage interaction and strengthen team spirit, featuring informal meeting tables and comfortable lounge seating. </p>
    `,
    inversed: true,
    noPb: true,
  },
  "realisations/rodl-partner/02": {
    image: RODL.p18,
    title: "New Spaces Designed to Support Growth",
    body: `
      <p data-start="0" data-end="238"> Rödl &amp; Partner planned to remain in their existing offices while redesigning the spaces to accommodate ongoing growth. The goal was to create workspaces adapted to new ways of working while maintaining the overall office organization. </p>
      <p data-start="240" data-end="449"> To meet these challenges, new workstations were added to welcome additional employees, along with acoustic booths providing a quiet, functional, well-lit, ventilated, and high-performance work environment. </p>
      <p data-start="451" data-end="627" data-is-last-node="" data-is-only-node=""> Design and aesthetics, reflecting the company’s brand, play a key role in this redesign. They strengthen employees’ sense of belonging and represent the company as a whole. </p>
    `,
    totem: true,
    noPb: true,
  },
  "realisations/socoda/02": {
    image: SOCODA.p5274,
    title: "Bringing Socoda Teams Together on a Single Floor",
    body: `
      <p data-start="54" data-end="183"> The relocation was necessary to bring all teams together on one floor, fostering better collaboration and smoother communication. </p>
      <p data-start="185" data-end="296"> The goal of this move was to create an attractive, warm, and comfortable working environment for all employees. </p>
      <p data-start="298" data-end="603"> To achieve this, numerous relaxation and informal meeting areas were designed. These spaces support employee well-being by offering places to unwind, connect, and share ideas in an informal setting. The aim is to promote a healthy balance between work and rest, reducing stress and improving productivity. </p>
      <p data-start="605" data-end="791" data-is-last-node="" data-is-only-node=""> In parallel, shared open-plan areas were created to strengthen team cohesion. These open spaces encourage interaction and collaboration, enabling teams to work together more effectively. </p>
    `,
    totem: true,
    noPb: true,
  },
  "dna-team/05": {
    image: { src: "2026/06/Gilles_Roncoroni_200KB.jpg", alt: "Gilles Roncoroni, Associate Managing Director of Ronnsquare" },
    title: "Strong Values",
    body: `
      <p> Ronnsquare is a people-focused company where everyone contributes to a shared success. Our values guide everything we do—they define who we are, what brings us together, and above all, what we build together. </p>
      <p>Gilles Roncoroni, Managing Director &amp; Partner</p>
    `,
    inversed: true,
    noPt: true,
    noPb: true,
  },
};
