/**
 * Block 1-11 — FAQ accordion with an animated illustration (one per page).
 * Keyed by "<page>/<section-index>" (page keys match src/data/pages-meta.json).
 * Answers are HTML strings, rendered with set:html (some answers keep extra
 * wrapper markup that was pasted into the original CMS content).
 */
/** Illustration preset: "faq" = bowl + ball (01), "faq-02*" = stacked circles, "faq-03*" = orbiting circles. */
export type FaqAnimation = "faq" | "faq-02" | "faq-02-v2" | "faq-03" | "faq-03-v2";

export type FaqItem = { question: string; answer: string };

export type FaqProps = {
  title: string;
  /** Illustration + animation preset (data-faq-animation). */
  animation: FaqAnimation;
  items: FaqItem[];
};

const faq = (animation: FaqAnimation, items: FaqItem[]): FaqProps => ({ title: "FAQ", animation, items });

export const faqSection: Record<string, FaqProps> = {
  "dna-team/12": faq("faq-02", [
    {
      question: "How is the RONNSQUARE methodology different from its competitors?",
      answer:
        "<p>Our methodology was developed by experts with more than 35 years of experience in the workplace sector. It combines the best of traditional project delivery and design &amp; build approaches into a unique process that enables projects to be delivered up to 25% faster.</p>",
    },
    {
      question: "A single point of contact: how can you be sure they have the right expertise?",
      answer:
        "<p>Working with Ronnsquare means having a single point of contact—your project manager—supported by the right specialists whenever required by the scope and complexity of your project. You will always have access to the expertise needed to address your requirements, whatever the subject may be.</p>",
    },
    {
      question: "Does working with Ronnsquare cost more than a traditional project approach?",
      answer:
        "<p>No. On average, our projects cost 20% less than a traditional approach, thanks to our unique methodology: a strong upfront strategy phase to define and control the budget, progressive cost planning that ensures full transparency, and a commitment to a fixed, final price.</p>",
    },
    {
      question: "What are the risks of a workplace design project?",
      answer:
        "<p>Workplace projects involve many risks, including budget overruns, schedule delays, technical challenges, and safety concerns. At Ronnsquare, we take full responsibility for your project. As your single contractual partner, we use our methodology to identify and eliminate risks before they arise.</p>",
    },
  ]),
  "expertises/06": faq("faq-03", [
    {
      question: "Which way of working should you choose: hybrid, flex office, or activity-based working?",
      answer:
        '<div class="qMYqUG_convSearchResultHighlightRoot"><div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-310" data-is-intersecting="true"><section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-310" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-310" data-testid="conversation-turn-1268" data-scroll-anchor="false" data-turn="assistant"><div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)"><div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn"><div class="flex max-w-full flex-col gap-4 grow"><div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="c488ca8f-59ff-423e-8ba5-2617d25ccd92" data-message-model-slug="gpt-5-3-mini" data-turn-start-message="true"><div class="flex w-full flex-col gap-1 empty:hidden"><div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling"><p data-start="0" data-end="277" data-is-last-node="" data-is-only-node="">Without proper analysis, it would be incorrect to say that one way of working is better than another. Our Consulting &amp; Strategy expertise allows us to work with you to define the most suitable ways of working for your organization, based on your teams and their activities.</p></div></div></div></div></div></div></section></div></div>',
    },
    {
      question: "Do you have a specific architectural style?",
      answer:
        "<p>No, we don’t have a specific “artistic signature,” but all our projects share one thing: they are as unique as our clients. We don’t just create visually appealing spaces; we design environments that truly reflect our clients.</p>",
    },
    {
      question: "How can you ensure the budget does not overrun during the project?",
      answer:
        "<p>We apply progressive and detailed cost estimation from the earliest stages, consulting multiple contractors for each trade. This gives you clear budget visibility at every step and allows you to make informed decisions with a full understanding of the financial impact.</p>",
    },
    {
      question: "Do you offer solutions for companies concerned about their environmental impact?",
      answer:
        "<p>Yes. We systematically integrate eco-responsible options into our projects, including sustainable materials, committed suppliers, and resource optimization. We can go as far as you wish in this approach.</p>",
    },
  ]),
  "expertises/architecture-design/07": faq("faq", [
    {
      question: "Can the design concept be adjusted during the design phase?",
      answer:
        "<p>Yes. Our process is designed to incorporate your feedback at every key stage before moving on to the next phase. The 2D and 3D visualizations we create are specifically intended to facilitate adjustments and refinements before any final decisions are made.</p>",
    },
    {
      question: "How do you take our budget into account when making design decisions?",
      answer:
        "<p>Your budget is considered from the very start of the design phase. We tailor our recommendations—from furniture and materials to space planning solutions—to align with your financial objectives, while maintaining the quality and integrity of the final result.</p>",
    },
    {
      question: "How do you integrate our brand identity into the design?",
      answer:
        "<p>We build on your visual identity, values, and company culture to translate your brand into tangible design choices—from colors, materials, and furniture to signage and the overall employee experience.</p>",
    },
    {
      question: "Do you work with specific furniture suppliers?",
      answer:
        "<p>We operate independently and select suppliers—whether for furniture or any other aspect of the project—based on your needs, budget, and aesthetic requirements.</p>",
    },
  ]),
  "expertises/consulting-strategy/07": faq("faq-03-v2", [
    {
      question: "When should we engage with you?",
      answer:
        "<p>As early as possible. We get involved before any real estate commitment is made, helping you ask the right questions and avoid costly mistakes. The earlier we are involved, the greater our ability to positively influence the outcome of your project.</p>",
    },
    {
      question: "How do you assess our actual space requirements?",
      answer:
        "<p>We combine interviews with your teams, an analysis of your ways of working, and a utilization study of your current workspace. This enables us to size your project accurately—avoiding both overestimating and underestimating your actual space requirements.</p>",
    },
    {
      question: "What exactly is a Stay or Move study?",
      answer:
        "<p>A Stay or Move study is an objective comparison between staying in your current premises—potentially with a refurbishment—and relocating to a new workspace. We evaluate both options from financial, operational, and people perspectives to help you make the right decision with confidence.</p>",
    },
    {
      question: "Do you work with our HR teams and leadership team?",
      answer:
        "<p>Yes. A successful workplace strategy involves all key stakeholders. We work closely with leadership teams on the project’s key decisions to define a strategy that aligns with your company’s long-term vision and objectives.</p>",
    },
  ]),
  "expertises/sustainability-ecology/07": faq("faq", [
    {
      question: "Does a sustainable project cost more?",
      answer:
        "<p>Not necessarily. The true return on a project should be assessed not only through the initial investment but also through the savings generated over the following 5 to 15 years. Sustainable does not mean premium or expensive. A well-designed sustainable project can cost the same as—or sometimes even less than—a conventional one.</p>",
    },
    {
      question: "Is it possible to combine employee well-being with a sustainable project?",
      answer:
        "<p>Absolutely. Sustainability is one component of the project, and it does not come at the expense of employee well-being—quite the opposite. In many cases, sustainable workplaces provide a better experience for users through improved air quality, increased greenery, and carefully selected materials.</p>",
    },
    {
      question: "Does a sustainable project require a complete demolition and reconstruction of my premises?",
      answer:
        "<p>Not necessarily. A low-carbon project starts with asking the right questions. The goal is not “What is the newest solution?” but rather “What solution minimizes the use of materials and energy?” Demolition and reconstruction can be one option, but they are far from being the only answer.</p>",
    },
    {
      question: "How can the project's environmental commitments be demonstrated in a tangible way?",
      answer:
        "<p>There are several measurable indicators that can demonstrate the environmental commitments of a project, including carbon footprint assessments, environmental certifications, energy consumption performance, and the rate of furniture and material reuse or recovery.</p>",
    },
  ]),
  "expertises/technical-execution/07": faq("faq", [
    {
      question: "How do you ensure the project stays within the original budget?",
      answer:
        "<p>Through a progressive costing approach established from the earliest project phases and updated throughout the process. We consult multiple contractors for each work package and alert you immediately if any risk of budget overrun is identified.</p>",
    },
    {
      question: "What happens in the event of delays or unforeseen issues on the construction site?",
      answer:
        "<p>We anticipate potential issues during the planning phase and maintain a regular presence on-site throughout the project. If unforeseen circumstances arise, we act quickly to implement the necessary adjustments and minimize any impact on the overall schedule.</p>",
    },
    {
      question: "Do we need to manage relationships with the contractors on site?",
      answer:
        "<p>No. We act as your single point of contact and manage all relationships with contractors, engineering consultants, and specialist trades. You do not need to worry about day-to-day coordination or project management.</p>",
    },
    {
      question: "How is the project handover carried out?",
      answer:
        "<p>We carry out a comprehensive inspection of all completed works before any handover takes place. Any identified defects or outstanding items are documented and tracked through to full resolution, ensuring that the final delivery meets the agreed specifications and quality standards.</p>",
    },
  ]),
  "home/11": faq("faq", [
    {
      question: "Do you work on all types of projects?",
      answer:
        "<p>We support businesses in the delivery of their office projects, whether it involves a new workspace, a refurbishment, or an expansion.</p>",
    },
    {
      question: "Do we need to work with other service providers alongside you?",
      answer:
        "<p>No. Our strength lies in managing the entire project, from initial strategy and design through to project delivery. You benefit from a single point of contact, fully accountable for the success of your project.</p>",
    },
    {
      question: "What does the first stage of a project look like?",
      answer:
        "<p>Every project begins with a listening and analysis phase. We assess your needs, ways of working, and constraints to build a strategy tailored to your objectives before any investment is made.</p>",
    },
    {
      question: "How do you support our teams through change?",
      answer:
        "<p>We involve employees in the process from the very beginning through collaborative workshops and regular check-ins. After the move-in, we gather their feedback to refine what can be improved and confirm what is working well.</p>",
    },
  ]),
  "preoccupations/attract-and-retain-talent/06": faq("faq-02", [
    {
      question: "How can redesigning my workplace help attract and retain talent?",
      answer:
        "<p>We create workspaces tailored to your business, culture, and ways of working, while reflecting your identity. The result is an environment that attracts talent, supports engagement, and drives performance.</p>",
    },
    {
      question: "What looks good is not always practical—and often comes at a higher cost",
      answer:
        "<p>We assess the return on investment of your workplace project to create spaces that support business performance and help attract and retain top talent.</p>",
    },
    {
      question: "My company has no plans to grow its headcount beyond its current size..",
      answer:
        "<p>Redesigning your workplace is not only about attracting talent—it is also about retaining it by providing an environment that enhances productivity and supports employee well-being.</p>",
    },
    {
      question: "How can I determine the type of spaces my business needs?",
      answer:
        "<p>That is precisely the purpose of the initial consulting phase: understanding the expectations and needs of each team to create a workplace tailored to the way people actually work.</p>",
    },
  ]),
  "preoccupations/bring-teams-back/06": faq("faq-02-v2", [
    {
      question: "If I require my employees to return to the office, won't they just resign?",
      answer:
        "<p>The goal is not to force employees into a particular way of working, but to involve and support them in creating a working model that best meets the needs of both the business and its people.</p>",
    },
    {
      question: "Isn’t workplace design alone unlikely to change employee behavior?",
      answer:
        "<p>Exactly. Aesthetic improvements alone will not transform the workplace experience. We design spaces around the actual needs and behaviors of employees, incorporating features, interactions, and experiences that simply cannot be replicated through remote work.</p>",
    },
    {
      question: "How can a workplace redesign improve communication?",
      answer:
        '<div class="" data-turn-id-container="1f866c8c-66b6-4fac-b682-3c0d8efa2ee1" data-is-intersecting="true">More than just an attractive workplace, we create a compelling reason for employees to return to the office by designing spaces that foster collaboration, connection, and meaningful interactions.</div>',
    },
  ]),
  "preoccupations/complex-projects/06": faq("faq-03", [
    {
      question: "I’m different from other companies; this won’t work for us.",
      answer:
        "<p>We don’t do copy-paste solutions—every project is unique, tailored to meet the specific needs, challenges, ways of working, and vision of each client.</p>",
    },
    {
      question: "My project is too complex for a single provider.",
      answer:
        "<p>We operate through a dedicated project team led by a single project manager who selects and coordinates the specialists best suited to your project. This ensures that all the expertise required for successful delivery is brought together under one roof.</p>",
    },
    {
      question: "A project of this complexity will cost me much more.",
      answer:
        '<div class="qMYqUG_convSearchResultHighlightRoot"><div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-54" data-is-intersecting="true"><section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-54" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-54" data-testid="conversation-turn-1058" data-scroll-anchor="false" data-turn="assistant"><div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)"><div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn" data-conversation-screenshot-content=""><div class="flex max-w-full flex-col gap-4 grow"><div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="1531468c-ce1e-4694-bb03-ab405fe51698" data-message-model-slug="gpt-5-5" data-turn-start-message="true"><div class="flex w-full flex-col gap-1 empty:hidden"><div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling"><p data-start="0" data-end="176" data-is-last-node="" data-is-only-node="">Our progressive costing process allows you to see the project’s financial requirements well in advance and guides the strategy to ensure your allocated budget is respected.</p></div></div></div></div></div></div></section></div></div>',
    },
    {
      question: "A project of this complexity will take a lot of time.",
      answer:
        "<p>By taking full responsibility for the project’s risks and challenges, we free up your time and reduce your stress, allowing you to focus on your business rather than managing the workplace project.</p>",
    },
  ]),
  "preoccupations/lease-expiry/06": faq("faq-02", [
    {
      question: "My lease expiry is still far away, so it’s not the right time to deal with it.",
      answer:
        "<p>Every milestone is an opportunity to negotiate and optimize your rent, including during a fixed-term lease. Planning ahead helps you make the right decision and secure the best possible opportunity.</p>",
    },
    {
      question: "I can handle this internally; I don’t need external support.",
      answer:
        '<div class="qMYqUG_convSearchResultHighlightRoot"><div class="" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-279" data-is-intersecting="true"><section class="text-token-text-primary w-full focus:outline-none has-data-writing-block:pointer-events-none [&amp;:has([data-writing-block])>*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]" dir="auto" data-turn-id="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-279" data-turn-id-container="request-6a217e60-300c-83eb-9f4a-f549b7a40ac5-279" data-testid="conversation-turn-1206" data-scroll-anchor="false" data-turn="assistant"><div class="text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)"><div class="[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn"><div class="flex max-w-full flex-col gap-4 grow"><div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1" dir="auto" tabindex="0" data-message-author-role="assistant" data-message-id="146bf226-9048-4b4b-8bbd-288dcce099b0" data-message-model-slug="gpt-5-3-mini" data-turn-start-message="true"><div class="flex w-full flex-col gap-1 empty:hidden"><div class="markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling"><p data-start="0" data-end="189" data-is-last-node="" data-is-only-node="">Do you have the qualified staff and available time to carry out the study? Our team of experts brings an external perspective to help define and structure your needs and key challenges.</p></div></div></div></div></div></div></section></div></div>',
    },
    {
      question: "My lease is still active, and I don’t want to disclose a potential move unless it’s certain.",
      answer:
        "<p>During the Stay or Move study phase, our work is conducted with absolute confidentiality. Neither landlords, real estate agents, nor property owners are informed of the project until the strategy has been validated.</p>",
    },
    {
      question: "I don’t want to commit to the architectural design until I know where I’m going.",
      answer:
        "<p>That is precisely the purpose of the Stay or Move study: to define project needs and strategy based on business challenges and expected growth. No design or architectural work is carried out during this phase.</p>",
    },
  ]),
};
