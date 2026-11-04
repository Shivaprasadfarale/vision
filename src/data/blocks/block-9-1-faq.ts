/**
 * Block 9-1 — full FAQ page: category tabs (desktop sidebar + mobile scroller)
 * and one accordion group per category.
 * Answers are HTML strings, rendered with set:html (some answers keep extra
 * wrapper markup that was pasted into the original CMS content).
 */
import type { FaqAnimation, FaqItem } from "./block-1-11-faq";

export type { FaqItem };
export type FaqCategory = { title: string; items: FaqItem[] };

export type FaqPageProps = {
  title: string;
  animation: FaqAnimation;
  categories: FaqCategory[];
};

const CATEGORIES: FaqCategory[] = [
  {
    title: "Who We Are",
    items: [
      {
        question: "Do you work on all types of projects?",
        answer:
          "<p>We support companies in the delivery of their workplace projects, whether it involves a new office location, a workplace refurbishment, or an expansion of existing premises.</p>",
      },
      {
        question: "Do we need to work with other service providers alongside you?",
        answer:
          "<p>No. Our strength lies in covering the entire project, from the initial strategy and design phases through to project delivery. You benefit from a single point of contact, responsible for coordinating every stage and ensuring the success of your project.</p>",
      },
      {
        question: "What does the first stage of a project look like?",
        answer:
          "<p>Everything begins with a listening and analysis phase. We assess your needs, ways of working, and constraints to build a strategy tailored to your objectives before any investment or commitment is made.</p>",
      },
      {
        question: "How do you support our teams through change?",
        answer:
          "<p>We involve employees from the very beginning through participatory workshops and regular check-ins. After the move-in, we gather their feedback to refine what can be improved and confirm what is working effectively.</p>",
      },
    ],
  },
  {
    title: "Consulting & Support",
    items: [
      {
        question: "Which way of working should we choose: hybrid, flexible office, or activity-based working?",
        answer:
          '<div class="" data-turn-id-container="71e48957-e33f-4c3f-a685-1bd949f2bc53" data-is-intersecting="true">Without a proper assessment, it would be misleading to claim that one way of working is better than another. Through our Consulting &amp; Strategy expertise, we help define the working model best suited to your organization, based on your teams, their activities, and your business objectives.</div>',
      },
      {
        question: "Do you have a particular architectural style?",
        answer:
          "<p>No, we don’t have a specific “artistic signature,” but all our projects share one thing: they are as unique as our clients themselves. We don’t just create aesthetically pleasing spaces; we design environments that truly reflect the identity of our clients.</p>",
      },
      {
        question: "How can we ensure the project budget stays under control?",
        answer:
          '<div class="qMYqUG_convSearchResultHighlightRoot"><div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-163" data-is-intersecting="true"><section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-163" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-163" data-testid="conversation-turn-974" data-scroll-anchor="false" data-turn="assistant"><div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)"><div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn"><div class="flex max-w-full flex-col gap-4 grow"><div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="ebc01ead-9026-47b9-965e-df360089f03f" data-message-model-slug="gpt-5-5" data-turn-start-message="true"><div class="flex w-full flex-col gap-1 empty:hidden"><div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling"><p data-start="0" data-end="278" data-is-last-node="" data-is-only-node="">We implement a progressive and detailed cost planning approach from the very beginning, consulting multiple suppliers for each trade. This gives you clear budget visibility at every stage and allows you to make informed decisions with full knowledge of the financial impact.</p></div></div></div></div></div></div></section></div></div>',
      },
      {
        question: "Do you offer solutions for companies that are concerned about their environmental impact?",
        answer:
          "<p>Yes. We systematically integrate sustainable options into our projects, including responsible materials, environmentally committed suppliers, and resource optimization strategies. We can take this approach as far as you wish, depending on your objectives and ambitions.</p>",
      },
    ],
  },
  {
    title: "The Advantages of Ronnsquare",
    items: [
      {
        question: "How is the RONNSQUARE methodology different from its competitors?",
        answer:
          "<p>Our methodology was developed by experts with over 35 years of experience in the tertiary sector, combining the best of traditional approaches and design &amp; build into a unique process that enables projects to be delivered up to 25% faster.</p>",
      },
      {
        question: "A single point of contact: how can you be sure they have the right expertise?",
        answer:
          "<p>Working with Ronnsquare means having a single point of contact—your project manager—supported by the right specialists according to the complexity and requirements of your project. No matter the subject, you will always have access to the expertise needed to provide clear and informed guidance.</p>",
      },
      {
        question: "Does working with Ronnsquare cost more than a traditional project?",
        answer:
          "<p>No. Our projects are on average 20% more cost-effective than traditional approaches, thanks to our unique methodology: a strategic planning phase that establishes a clear budget framework, progressive cost planning that ensures full transparency, and a commitment to a fixed and final project price.</p>",
      },
      {
        question: "What are the risks of a workplace design project?",
        answer:
          '<div class="" data-turn-id-container="86da6678-e994-4e98-a165-1b494d7a157f" data-is-intersecting="true">Workplace projects involve multiple risks, including budget overruns, schedule delays, technical challenges, and safety concerns. At Ronnsquare, we take full responsibility for your project. As your sole contractual partner, our methodology identifies and mitigates risks before they arise.</div>',
      },
    ],
  },
  {
    title: "Consulting & Strategy",
    items: [
      {
        question: "When should we engage with you?",
        answer:
          "<p>As early as possible. We get involved before any real estate commitments are made to help you ask the right questions and avoid costly mistakes. The earlier we are engaged, the greater our ability to positively influence the project outcome.</p>",
      },
      {
        question: "How do you assess our actual space requirements?",
        answer:
          '<div class="qMYqUG_convSearchResultHighlightRoot"><div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-179" data-is-intersecting="true"><section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-179" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-179" data-testid="conversation-turn-1006" data-scroll-anchor="false" data-turn="assistant"><div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)"><div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn"><div class="flex max-w-full flex-col gap-4 grow"><div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="4463fdb4-f56e-4688-983e-89b2f1fa3917" data-message-model-slug="gpt-5-5" data-turn-start-message="true"><div class="flex w-full flex-col gap-1 empty:hidden"><div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling"><p data-start="0" data-end="259" data-is-last-node="" data-is-only-node="">We combine interviews with your teams, an analysis of your ways of working, and a utilization study of your current spaces. This allows us to size your project accurately, avoiding both overestimation and underestimation of your actual space requirements.</p></div></div></div></div></div></div></section></div></div>',
      },
      {
        question: "What exactly is a Stay or Move study?",
        answer:
          "<p>A Stay or Move study is an objective comparative analysis between staying in your current premises—potentially with a refurbishment—and relocating to new spaces. We evaluate both options from financial, operational, and human perspectives to help you make the most informed decision.</p>",
      },
      {
        question: "Do you work with our HR teams and leadership?",
        answer:
          "<p>Yes. A successful project strategy involves all key stakeholders. We engage leadership teams in the project’s critical decisions to ensure the strategy aligns with your company’s long-term vision.</p>",
      },
    ],
  },
  {
    title: "Architecture & Design",
    items: [
      {
        question: "Can the concept be modified during the design phase?",
        answer:
          "<p>Yes. Our process is designed to incorporate your feedback at every key stage before moving on to the next phase. The 2D and 3D visualizations we produce are specifically intended to facilitate adjustments before any final commitment is made.</p>",
      },
      {
        question: "How do you take our budget into account when making design decisions?",
        answer:
          "<p>The budget is considered from the very start of the design phase. We tailor our recommendations—furniture, materials, and layouts—to align with your financial framework, without compromising the quality of the final result.</p>",
      },
      {
        question: "How do you incorporate our brand identity into the design?",
        answer:
          "<p>We start with your visual identity, values, and company culture to translate your brand into tangible design decisions—from colors, materials, and furniture to signage and the overall employee experience.</p>",
      },
      {
        question: "Do you work with specific furniture suppliers?",
        answer:
          "<p>We work independently and select suppliers—whether for furniture or any other aspect of the project—based on your needs, budget, and aesthetic requirements.</p>",
      },
    ],
  },
  {
    title: "Technical Delivery & Project Execution",
    items: [
      {
        question: "How do you ensure the initial budget is respected?",
        answer:
          '<div class="qMYqUG_convSearchResultHighlightRoot"><div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-195" data-is-intersecting="true"><section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-195" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-195" data-testid="conversation-turn-1038" data-scroll-anchor="false" data-turn="assistant"><div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)"><div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn"><div class="flex max-w-full flex-col gap-4 grow"><div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="7039d761-44ed-44d2-9e7b-7235977d11d5" data-message-model-slug="gpt-5-5" data-turn-start-message="true"><div class="flex w-full flex-col gap-1 empty:hidden"><div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling"><p data-start="0" data-end="256" data-is-last-node="" data-is-only-node="">Through progressive cost planning established from the earliest project stages and continuously updated throughout the process. We consult multiple contractors for each work package and immediately alert you if any risk of budget overrun is identified.</p></div></div></div></div></div></div></section></div></div>',
      },
      {
        question: "What happens in the event of delays or unforeseen issues on the construction site?",
        answer:
          "<p>We anticipate potential issues during the planning phase and maintain a regular presence on site throughout the project. If unexpected challenges arise, we quickly implement the necessary adjustments to minimize their impact on the overall schedule.</p>",
      },
      {
        question: "Do we need to manage relationships with the contractors on site?",
        answer:
          "<p>No. We act as your single point of contact and manage all relationships with contractors, consultants, and specialist trades. You do not need to worry about the day-to-day coordination of the project.</p>",
      },
      {
        question: "How is the project handover carried out?",
        answer:
          "<p>We carry out a comprehensive inspection of all completed works before handover. Any identified defects or outstanding items are documented and monitored until they are fully resolved, ensuring the final delivery meets the agreed specifications and expectations.</p>",
      },
    ],
  },
  {
    title: "Sustainability & Ecology",
    items: [
      {
        question: "Does a sustainable project cost more?",
        answer:
          "<p>Not necessarily. The true return on investment should be assessed not only through the initial project cost, but also through the savings generated over the following 5 to 15 years. Sustainable does not mean premium or expensive. A well-designed sustainable project can cost the same as—or sometimes even less than—a conventional one.</p>",
      },
      {
        question: "Is it possible to combine employee well-being with a sustainable project?",
        answer:
          "<p>Absolutely. Sustainability is one component of the project, and it does not come at the expense of employee well-being—quite the opposite. In many cases, sustainable workplaces provide a better experience for users through improved air quality, increased greenery, and carefully selected materials.</p>",
      },
      {
        question: "Does a sustainable project require a complete demolition and reconstruction of my premises?",
        answer:
          "<p>Not necessarily. A thoughtful, low-carbon project starts with asking the right questions: it’s not “what’s the newest?” but “what minimizes material use and energy consumption?” Demolition and reconstruction can be one option, but it is by no means the only solution.</p>",
      },
      {
        question: "How can the project’s environmental commitments be demonstrated in a tangible way?",
        answer:
          "<p>There are several measurable indicators that can demonstrate a project’s environmental commitments, including carbon footprint assessments, environmental certifications, energy performance, and the rate of furniture and material reuse or recovery. These metrics provide clear and tangible evidence of the project’s sustainability outcomes.</p>",
      },
    ],
  },
  {
    title: "Lease Expiry: Stay or Move?",
    items: [
      {
        question: "My lease expiration is far off, so it’s not the right time to address it.",
        answer:
          "<p>Any lease milestone is an opportunity to negotiate and optimize your rent, even during a fixed-term lease. Planning ahead allows you to make the right decision and secure the perfect space.</p>",
      },
      {
        question: "I can handle the analysis internally; I don’t need external support.",
        answer:
          "<p>Do you have the qualified resources and the available time to carry out the study? Our team of experts brings an external perspective to help clearly define your needs, challenges, and priorities, ensuring a well-informed decision-making process.</p>",
      },
      {
        question: "My lease is still active, and I don’t want to disclose a potential move unless it’s certain.",
        answer:
          "<p>During the Stay or Move study phase, our work is conducted with complete confidentiality. Neither landlords, real estate agents, nor property owners will be informed of the project until the strategy has been validated and a decision has been made.</p>",
      },
      {
        question: "I don’t want to commit to the architectural design until I know where I’m relocating.",
        answer:
          "<p>That is exactly the purpose of the Stay or Move study: to define the project’s needs and strategy based on your business challenges and anticipated growth. No design or architectural work is carried out during this phase.</p>",
      },
    ],
  },
  {
    title: "Bringing Teams Back to the Office",
    items: [
      {
        question: "If I force my employees to return to the office, won’t they just resign?",
        answer:
          "<p>The goal is not to force employees into a specific way of working, but to support them in co-creating the working model that best meets the needs of both the business and its people.</p>",
      },
      {
        question: "Workplace aesthetics alone won’t change employee behavior.",
        answer:
          "<p>Exactly. Aesthetics alone won’t transform your spaces. We design environments tailored to employees’ ways of working, incorporating features and functionalities that simply don’t exist in remote work.</p>",
      },
      {
        question: "How can a workplace redesign improve communication?",
        answer:
          '<div class="qMYqUG_convSearchResultHighlightRoot"><div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-226" data-is-intersecting="true"><section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-226" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-226" data-testid="conversation-turn-1100" data-scroll-anchor="false" data-turn="assistant"><div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)"><div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn"><div class="flex max-w-full flex-col gap-4 grow"><div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="ff904ac1-a6c7-4f2b-8941-0c8e32d19c0e" data-message-model-slug="gpt-5-5" data-turn-start-message="true"><div class="flex w-full flex-col gap-1 empty:hidden"><div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling"><p data-start="0" data-end="183" data-is-last-node="" data-is-only-node="">More than just an attractive environment, we create a compelling reason for employees to return to the office by designing spaces that foster collaboration and social interaction.</p></div></div></div></div></div></div></section></div></div>',
      },
      {
        question: "I don’t need to redesign my workplace to bring employees back to the office.",
        answer:
          "<p>Bringing teams back to the office is not just about providing a desk for everyone—it’s about creating spaces that meet their needs and support their interactions while at work.</p>",
      },
    ],
  },
  {
    title: "Attract and Retain Talent",
    items: [
      {
        question: "How will redesigning my workplace help attract and retain talent?",
        answer:
          "<p>We create spaces tailored to your business, culture, and ways of working—spaces that reflect your identity and become a driver of engagement, performance, and talent retention.</p>",
      },
      {
        question: "What looks good is often expensive, but not necessarily functional..",
        answer:
          "<p>We assess the return on investment of your workplace project to design spaces that support performance and help attract and recruit talent.</p>",
      },
      {
        question: "My company has no intention of increasing its headcount beyond its current size.",
        answer:
          "<p>Redesigning your workplace is not only about attracting talent but also about retaining it, by providing an environment that boosts productivity and enhances employee well-being.</p>",
      },
      {
        question: "How do I know what spaces I actually need?",
        answer:
          "<p>That is precisely the purpose of the initial consulting phase: to understand the expectations and needs of each team and design a workplace that reflects everyone’s ways of working and usage patterns.</p>",
      },
    ],
  },
  {
    title: "Complex Projects",
    items: [
      {
        question: "I’m different from other companies, so this approach won’t work for us.",
        answer:
          "<p>We don’t use a one-size-fits-all approach; every project is unique and tailored to the needs, challenges, ways of working, and vision of each client.</p>",
      },
      {
        question: "My project is too complex for a single provider.",
        answer:
          "<p>We work as a project team with a single project manager who selects and coordinates the specialists best suited to your project, ensuring that all necessary expertise is available throughout the process.</p>",
      },
      {
        question: "A project of this complexity will cost me significantly more.",
        answer:
          "<p>Our progressive cost planning process allows you to see the required project costs well in advance and guides the strategy to ensure your allocated budget is respected.</p>",
      },
      {
        question: "A project of this complexity will take a lot of my time.",
        answer:
          "<p>By taking on all project risks and challenges, we free up your time and reduce your stress, allowing you to focus your energy on other priorities beyond the workplace project.</p>",
      },
    ],
  },
];

export const faqPage: Record<string, FaqPageProps> = {
  "faq/01": { title: "FAQ", animation: "faq", categories: CATEGORIES },
};
