/**
 * Block 4-2 — expertise "What we do for you": two columns of service cards
 * around the animated shape totem. `icon` is an SVG name under
 * /assets/uploads/2026/06/. Keyed by "<page>/<section-index>".
 */
export type AdvantageIcon = "semicircle-down" | "semicircle-up" | "Circle" | "rectangle" | "Rhomb" | "triangle-down" | "triangle-up";
export type AdvantageCard = { icon: AdvantageIcon; title: string; description: string };
export type ExpertiseAdvantagesProps = {
  /** May contain <br />; aria-label is derived by stripping tags. */
  title: string;
  left: AdvantageCard[];
  right: AdvantageCard[];
};

const TITLE = "What We Do<br />for You";

export const expertiseAdvantages: Record<string, ExpertiseAdvantagesProps> = {
  "expertises/architecture-design/03": {
    title: TITLE,
    left: [
      { icon: "semicircle-down", title: "Space Planning", description: "We plan and optimize your workspace layout to make the most of every square meter. Circulation, zoning, flexibility, and comfort are carefully considered together to create a cohesive and efficient working environment." },
      { icon: "Circle", title: "Workplace Design Concept", description: "We develop a comprehensive design concept that gives your spaces a strong identity, translating your company culture into tangible and coherent workplace solutions." },
      { icon: "rectangle", title: "Immersive Experiences & 2D/3D Visualizations", description: "We help you step into your future workspace through realistic 2D and 3D visualizations, allowing you to see the final result before construction begins and make every decision with confidence." },
      { icon: "Rhomb", title: "Aesthetic Concepts", description: "We define the key visual elements of your spaces—colors, materials, and lighting—to create a cohesive atmosphere that reflects your company’s identity." },
      { icon: "semicircle-up", title: "Mood Boards & Material Boards", description: "We create visual mood boards and material selections to help you fully envision the proposed design concepts and confidently validate aesthetic choices." },
    ],
    right: [
      { icon: "triangle-down", title: "Custom Workspace Design", description: "We design custom furniture and bespoke fit-out solutions tailored to the specific requirements of your spaces and your brand identity." },
      { icon: "triangle-up", title: "Furniture Recommendations", description: "We pre-select furniture solutions tailored to your needs and workspace requirements. We carefully balance comfort, functionality, and aesthetic consistency to create high-performing work environments." },
      { icon: "semicircle-down", title: "Branding & Employee Experience", description: "We integrate your brand identity into the design of your spaces and shape the daily employee experience, from the reception area through to the workspaces themselves." },
      { icon: "Circle", title: "Employer Branding & Communication", description: "Your workplace is a powerful communication tool. We help transform your spaces into a driver of attraction and retention, fully aligned with your employer branding strategy." },
      { icon: "rectangle", title: "Eco-Responsible Project Solutions", description: "We integrate sustainable and responsible solutions from the very beginning of the design process, ensuring your project aligns with your environmental commitments and values." },
    ],
  },
  "expertises/consulting-strategy/03": {
    title: TITLE,
    left: [
      { icon: "triangle-down", title: "Real Estate Strategy", description: "We work with you to define a clear roadmap for your real estate portfolio, aligning your location and workplace decisions with your business objectives, growth plans, and budget requirements." },
      { icon: "Circle", title: "Market Analysis", description: "We analyze the local real estate market to provide a clear view of available opportunities, including properties, pricing, market trends, and locations, enabling informed decision-making." },
      { icon: "triangle-up", title: "Feasibility Studies & Test Fits", description: "Before any commitment is made, we assess the feasibility of your project by testing different workplace layouts within the proposed spaces, ensuring they fully meet your operational needs and requirements." },
      { icon: "semicircle-down", title: "Social Impact & Real Estate Challenges", description: "We incorporate human and social considerations into your real estate strategy, including user services, accessibility, local integration, and the transportation impact of your project." },
      { icon: "semicircle-up", title: "Stay or Move", description: "Stay in your current premises or relocate? We objectively assess both options—costs, constraints, and opportunities—to help you make the decision that best supports your business." },
    ],
    right: [
      { icon: "rectangle", title: "Workplace Strategy", description: "We develop a comprehensive workplace vision aligned with your ways of working, company culture, and ambitions for the employee experience." },
      { icon: "Rhomb", title: "Functional Needs Analysis", description: "We gather and structure the needs of your teams to accurately define the types of spaces required, their intended uses, and the appropriate sizing for each environment." },
      { icon: "semicircle-down", title: "Space Utilization Study", description: "Using measurement and observation tools, we analyze how your spaces are actually used to optimize their organization and eliminate underutilized or unnecessary areas." },
      { icon: "triangle-up", title: "Ways of Working", description: "We analyze your ways of working—hybrid work, collaboration, and focused tasks—to design environments that effectively support your organization’s day-to-day operations and performance." },
      { icon: "rectangle", title: "Change Management & User Feedback", description: "Because the success of a project is closely linked to employee engagement, we implement a tailored change management strategy throughout the project to support adoption, facilitate the transition, and ensure long-term success." },
    ],
  },
  "expertises/sustainability-ecology/03": {
    title: TITLE,
    left: [
      { icon: "triangle-up", title: "Workplace Design Aligned with Tertiary Sector Energy Regulations", description: "We design your workspaces in compliance with the requirements of the French Tertiary Decree, helping you meet regulatory obligations without disrupting your business operations." },
      { icon: "semicircle-down", title: "Smart Design to Reduce Project Impact", description: "From the very beginning of the design phase, we integrate thoughtful choices—optimized space planning, responsible material selection, and efficient technical solutions—to reduce the environmental impact of your project without compromising the final outcome." },
      { icon: "triangle-down", title: "Expertise in Building Certifications (BBC, HQE, BREEAM, and More).", description: "We support you in obtaining or maintaining the environmental certifications best suited to your project. By mastering the requirements of each certification framework, we help maximize your chances of success." },
      { icon: "Circle", title: "Energy Audits and Consumption Reduction Strategies", description: "We assess the energy performance of your spaces and implement practical solutions to reduce consumption, helping you achieve both cost savings and environmental responsibility." },
      { icon: "semicircle-up", title: "Carbon Footprint Optimization", description: "We assess and work to reduce the carbon footprint of your project at every stage, from material selection to construction methods, ensuring a controlled and responsible environmental impact." },
    ],
    right: [
      { icon: "rectangle", title: "Reuse of Existing Furniture and Materials", description: "Before any new purchases are made, we identify what can be retained, refurbished, or repurposed within your new workspace, helping to reduce waste and avoid unnecessary costs." },
      { icon: "Rhomb", title: "Integration of Second-Hand Elements", description: "We source and integrate high-quality pre-owned furniture and materials, giving existing elements a second life while enhancing the character and identity of your spaces." },
      { icon: "Circle", title: "Low-Impact Sustainable Materials", description: "We prioritize durable, recycled, and bio-based materials, carefully selected for their low environmental impact and their ability to meet the aesthetic and technical requirements of your project." },
      { icon: "Rhomb", title: "Greenery & Natural Planting", description: "We incorporate natural greenery into the design of your spaces to enhance employee well-being, improve air quality, and create healthier, more welcoming work environments." },
      { icon: "triangle-up", title: "Waste Recovery & Upcycling", description: "We plan for construction waste management from the outset and explore upcycling opportunities, transforming end-of-life materials into valuable new resources for your project." },
    ],
  },
  "expertises/technical-execution/03": {
    title: TITLE,
    left: [
      { icon: "triangle-up", title: "Detailed Progressive Costing for Controlled Budgeting", description: "Our detailed progressive costing process provides a clear and accurate financial view at every stage of the project. Costs are updated with each change, helping you make informed decisions and maintain full budget control." },
      { icon: "triangle-down", title: "Tendering Multiple Contractors for Each Trade", description: "This tender process, involving Ronnsquare-approved contractors, enables us to compare proposals and select the best solution in terms of cost, quality, project control, and schedule adherence." },
      { icon: "semicircle-up", title: "Technical Engineering Consultants", description: "We coordinate the work of specialist engineering consultants—including structural, MEP, electrical, and acoustic experts—to ensure every technical aspect of the project is addressed with the highest level of rigor and expertise." },
      { icon: "Rhomb", title: "Technical Analysis and Selection", description: "We assess and compare the available technical solutions to identify the options best suited to your constraints, performance requirements, and budget." },
      { icon: "rectangle", title: "Complete Schedule Control", description: "We establish a detailed project schedule from the outset and manage it rigorously throughout the delivery process, ensuring that every phase stays on track and that your move-in date is met as planned." },
    ],
    right: [
      { icon: "Circle", title: "Construction Preparation and Technical Execution Plans", description: "We prepare the construction phase in advance to ensure a smooth start and efficient delivery of the works. Technical execution drawings are then developed in line with the approved architectural design and project specifications." },
      { icon: "semicircle-down", title: "Construction Monitoring and Stakeholder Coordination", description: "We maintain a regular presence on-site and coordinate all trades to ensure execution quality, adherence to timelines, and smooth workflow throughout the construction process." },
      { icon: "Rhomb", title: "Health & Safety Coordination", description: "We ensure compliance with all site safety requirements in coordination with the Health & Safety Coordinator, helping to protect everyone involved throughout the construction phase." },
      { icon: "Circle", title: "Defect Resolution and Handover", description: "Upon completion, we carry out a thorough inspection of all completed works and ensure that any outstanding items are resolved before officially handing over your new workspace." },
      { icon: "semicircle-up", title: "Move and Installation Management", description: "We manage the relocation and installation of equipment to ensure a smooth transition, enabling your teams to settle into their new workspace quickly and efficiently." },
    ],
  },

};
