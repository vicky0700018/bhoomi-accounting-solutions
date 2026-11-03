// Default demo content. Everything here can be edited from the admin panel (persisted in localStorage).
export const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const svc = (title: string, icon: string, img: string, desc: string, points: string[]) => ({
  id: slug(title), slug: slug(title), title, icon, image: u(img, 1000), desc,
  body: `${desc} Our team works closely with promoters, founders and finance heads to understand the commercial context before recommending a course of action. Every engagement is structured around clear deliverables, agreed timelines and transparent fees, so you always know what to expect and when.`,
  points,
});

export const defaultData = {
  settings: {
    siteName: "Bhoomi Business Solutions",
    tagline: "CA Services, Accounting & Business Advisory",
    phone: "+91 00000 00000",
    email: "info@yourdomain.com",
    address: "Office address placeholder, City, State, India",
    hours: "Mon – Sat, 10:00 AM – 7:00 PM",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/",
    footerAbout: "Bhoomi Business Solutions is a business consultancy offering accounting, taxation, audit, compliance and financial advisory services to growing Indian enterprises.",
    logoUrl: "",
  },
  hero: [
    { id: "h1", eyebrow: "Business Growth & Corporate Excellence", title: "Empowering Businesses. Enabling Sustainable Growth.", text: "Your trusted partner for strategic business consulting, corporate advisory and comprehensive business solutions.", image: u("1486406146926-c627a92ad1ab", 1920) },
    { id: "h2", eyebrow: "Strategic Business Consulting", title: "Clarity in Strategy. Confidence in Every Decision.", text: "We help leadership teams turn ambition into structured, measurable plans that hold up in the real world.", image: u("1552664730-d307ca884978", 1920) },
    { id: "h3", eyebrow: "Financial & Corporate Solutions", title: "Sound Finances. Strong Corporate Foundations.", text: "From registrations and compliance to funding readiness, we build the backbone your business grows on.", image: u("1454165804606-c3d57bc86b40", 1920) },
  ],
  highlights: [
    { id: "b1", icon: "Users", title: "Client-Centric Approach", text: "Every recommendation begins with your goals, constraints and context." },
    { id: "b2", icon: "Award", title: "Professional Expertise", text: "Consultants with grounding in finance, law, operations and strategy." },
    { id: "b3", icon: "Target", title: "Strategic Planning", text: "Structured roadmaps with milestones you can track and act on." },
    { id: "b4", icon: "Layers", title: "End-to-End Business Support", text: "One partner from incorporation through expansion and beyond." },
  ],
  about: {
    intro: "Bhoomi Business Solutions is a CA services and accounting firm that partners with entrepreneurs, family businesses and corporates on tax, compliance, audit and financial advisory.",
    who: "We are a team of consultants and advisors who combine financial discipline with practical business sense. We work as an extension of your leadership team.",
    mission: "To make professional, ethical and practical business advice accessible to every growing enterprise.",
    vision: "To be the most trusted growth partner for Indian businesses — rooted in integrity, driven by results.",
    values: "Integrity, transparency, accountability and a long-term view of every client relationship.",
    image: u("1600880292203-757bb62b4baf", 1100),
  },
  stats: [
    { id: "s1", label: "Years of Experience", value: 12, suffix: "+" },
    { id: "s2", label: "Clients Served", value: 350, suffix: "+" },
    { id: "s3", label: "Projects Completed", value: 800, suffix: "+" },
    { id: "s4", label: "Industry Verticals", value: 8, suffix: "" },
  ],
  services: [
    svc("Accounting & Bookkeeping", "BookOpen", "1554224155-6726b3ff858f", "Accurate, up-to-date books of accounts maintained by trained accountants, so your numbers are always decision-ready.", ["Day-to-day bookkeeping", "Ledger & bank reconciliation", "Monthly MIS reports", "Finalisation of accounts"]),
    svc("GST Registration & Returns", "Receipt", "1434626881859-194d67b2b86f", "GST registration, monthly and annual return filing, reconciliation and notice support.", ["GST registration", "GSTR-1, 3B & annual returns", "Input tax credit reconciliation", "GST notice assistance"]),
    svc("Income Tax Filing", "FileText", "1450101499163-c8848c66ca85", "Income tax return filing and tax planning for individuals, firms and companies.", ["ITR filing for all entities", "Tax planning", "Advance tax computation", "Scrutiny & notice support"]),
    svc("Audit & Assurance", "ClipboardCheck", "1460925895917-afdab827c52f", "Statutory, tax and internal audit support that strengthens controls and stakeholder confidence.", ["Statutory audit support", "Tax audit", "Internal audit", "Stock & process audits"]),
    svc("Company Registration", "Building2", "1497366216548-37526070297c", "End-to-end incorporation for private limited companies, LLPs, partnerships and proprietorships.", ["Pvt Ltd & LLP incorporation", "MSME / Udyam registration", "PAN, TAN & licences", "Post-incorporation setup"]),
    svc("ROC & Corporate Compliance", "Scale", "1589829545856-d10d557cf95f", "Annual ROC filings, statutory registers and secretarial compliance handled on time.", ["Annual returns & AOC-4", "Director KYC", "Board & AGM documentation", "Compliance calendar"]),
    svc("TDS & Payroll Services", "Wallet", "1579532537598-459ecdaf39cc", "Payroll processing, TDS deduction, returns and Form 16 issuance for your team.", ["Monthly payroll", "TDS returns", "PF & ESI compliance", "Form 16 / 16A"]),
    svc("Financial Consulting", "LineChart", "1611974789855-9c2a0a7236a3", "Budgeting, cash-flow planning and financial analysis that give you control over cost and capital.", ["Budgeting & forecasting", "Cash-flow management", "Cost optimisation", "Financial analysis"]),
    svc("Project Reports & Bank Loans", "Landmark", "1553877522-43269d4ea984", "CMA data, detailed project reports and documentation support for bank finance.", ["Detailed project reports", "CMA data preparation", "Loan documentation", "Subsidy guidance"]),
    svc("Business Consulting", "Briefcase", "1556761175-5973dc0f32e7", "Practical advice to structure, streamline and grow your business on a sound financial footing.", ["Business structuring", "Process improvement", "Growth planning", "Performance reviews"]),
    svc("Startup Advisory", "Rocket", "1559136555-9303baea8ebd", "From choosing the right entity to compliance and investor readiness for new founders.", ["Entity selection", "Startup India registration", "Founder agreements", "Investor-ready financials"]),
    svc("Virtual CFO Services", "Users", "1522071820081-009f0129c71c", "Senior finance leadership on demand — reporting, controls and strategy without a full-time CFO.", ["Financial reporting", "Internal controls", "Board-ready dashboards", "Strategic finance"]),
  ],
  industries: [
    { id: "manufacturing", title: "Manufacturing", image: u("1581091226825-a6a2a5aee158", 900), desc: "Costing, capacity planning, project finance and compliance for manufacturing units." },
    { id: "construction", title: "Construction", image: u("1503387762-592deb58ef4e", 900), desc: "Project reports, contract structuring and working-capital planning for builders." },
    { id: "real-estate", title: "Real Estate", image: u("1560518883-ce09059eeffa", 900), desc: "Entity structuring, RERA-related compliance and funding advisory for developers." },
    { id: "retail-trading", title: "Retail & Trading", image: u("1441986300917-64674bd600d8", 900), desc: "Inventory, margins, GST and expansion strategy for retailers and traders." },
    { id: "startups", title: "Startups", image: u("1519389950473-47ba0277781c", 900), desc: "Incorporation, business models and investor readiness for new ventures." },
    { id: "corporate-enterprises", title: "Corporate Enterprises", image: u("1486312338219-ce68d2c6f44d", 900), desc: "Governance, restructuring and strategic advisory for established companies." },
    { id: "hospitality", title: "Hospitality", image: u("1566073771259-6a8506099945", 900), desc: "Feasibility, licensing and financial controls for hotels and restaurants." },
    { id: "professional-services", title: "Professional Services", image: u("1521791136064-7986c2920216", 900), desc: "Practice structuring, pricing and growth planning for service firms." },
  ],
  testimonials: [
    { id: "t1", name: "Rohan Mehta", company: "Director, Mehta Industries (sample)", text: "The team helped us restructure our finances and plan an expansion with complete clarity. Their approach is practical and very professional.", avatar: u("1507003211169-0a1dd7228f2b", 200) },
    { id: "t2", name: "Ananya Iyer", company: "Founder, Bloomleaf Retail (sample)", text: "From company registration to our first compliance year, everything was handled smoothly. We always knew what was happening and why.", avatar: u("1494790108377-be9c29b29330", 200) },
    { id: "t3", name: "Vikram Singh", company: "CEO, Northstar Infra (sample)", text: "Their project report and funding guidance were instrumental in getting our expansion approved. A dependable advisory partner.", avatar: u("1500648767791-00dcc994a43e", 200) },
    { id: "t4", name: "Priya Nair", company: "Partner, Nair & Co. (sample)", text: "Thoughtful, responsive and transparent. They took time to understand our firm before recommending anything.", avatar: u("1438761681033-6461ffad8d80", 200) },
  ],
  blogs: [
    { id: "choosing-the-right-business-structure", slug: "choosing-the-right-business-structure", title: "Choosing the Right Business Structure in India", category: "Company Registration", date: "2026-10-12", image: u("1434626881859-194d67b2b86f", 1000), excerpt: "Private limited, LLP or partnership? A practical comparison for founders deciding how to incorporate.", body: "The legal structure you choose shapes your liability, taxation, compliance load and ability to raise capital.\n\nA private limited company offers limited liability and is the preferred structure for investors, but it carries a heavier compliance calendar. An LLP combines limited liability with lower compliance costs and works well for professional firms. Partnerships and proprietorships are simple to start but expose owners to unlimited liability.\n\nBefore deciding, consider your funding plans, the number of founders, expected turnover and how you intend to share profits. A short consultation can save significant restructuring costs later." },
    { id: "cash-flow-discipline-for-growing-smes", slug: "cash-flow-discipline-for-growing-smes", title: "Cash-Flow Discipline for Growing SMEs", category: "Financial Consulting", date: "2026-09-28", image: u("1579532537598-459ecdaf39cc", 1000), excerpt: "Profitable businesses still fail from poor cash management. Five habits that keep working capital healthy.", body: "Growth consumes cash. As order books expand, receivables, inventory and payroll grow faster than collections.\n\nStart with a rolling 13-week cash forecast. Review receivable ageing every week, negotiate supplier terms deliberately, and separate operating cash from capital expenditure. Finally, keep a buffer facility in place before you need it.\n\nThese simple disciplines give management early warning and the time to act." },
    { id: "building-an-investor-ready-business-plan", slug: "building-an-investor-ready-business-plan", title: "Building an Investor-Ready Business Plan", category: "Business Planning", date: "2026-09-05", image: u("1542744173-8e7e53415bb0", 1000), excerpt: "What lenders and investors actually look for — and how to present your numbers with credibility.", body: "Investors read hundreds of plans. The ones that stand out are clear, specific and honest about risk.\n\nLead with the problem and your evidence of demand. Show unit economics, not just topline projections. Explain your assumptions, and connect the funding ask to specific milestones.\n\nA well-built financial model, stress-tested for downside scenarios, builds far more confidence than optimistic forecasts." },
    { id: "annual-compliance-checklist-for-private-companies", slug: "annual-compliance-checklist-for-private-companies", title: "Annual Compliance Checklist for Private Companies", category: "Compliance", date: "2026-08-18", image: u("1568992687947-868a62a9f521", 1000), excerpt: "A simple calendar of the key filings and board actions every private limited company should plan for.", body: "Missing statutory deadlines results in penalties and can affect your company's standing.\n\nPlan for board meetings, the annual general meeting, financial statement and annual return filings, director KYC and applicable tax filings. Maintain statutory registers and minutes throughout the year.\n\nA compliance calendar, reviewed monthly, is the simplest way to stay ahead." },
  ],
  blogCategories: ["Company Registration", "Financial Consulting", "Business Planning", "Compliance", "Strategy"],
  gallery: [
    { id: "g1", image: u("1517245386807-bb43f82c33c4", 900), caption: "Strategy workshop with a client leadership team" },
    { id: "g2", image: u("1497215728101-856f4ea42174", 900), caption: "Our consulting workspace" },
    { id: "g3", image: u("1551836022-d5d88e9218df", 900), caption: "One-to-one advisory session" },
    { id: "g4", image: u("1531973576160-7125cd663d86", 900), caption: "Team collaboration" },
  ],
  inquiries: [
    { id: "q1", name: "Sample Client", email: "client@example.com", phone: "+91 90000 00000", service: "Company Registration", message: "Looking to incorporate a private limited company.", status: "New", date: "2026-11-01" },
    { id: "q2", name: "Demo Enterprises", email: "demo@example.com", phone: "+91 90000 00001", service: "Financial Consulting", message: "Need help with budgeting and MIS.", status: "In Progress", date: "2026-10-29" },
  ],
  updates: [{ id: "u1", text: "Demo content initialised", date: "2026-11-01" }],
};

export type SiteData = typeof defaultData;

export const faqs = [
  { q: "What does a business consultant actually do for my company?", a: "We assess where your business stands, identify the gaps holding back growth and help you implement practical solutions — from strategy and finance to operations and compliance." },
  { q: "How long does company registration take?", a: "Timelines depend on the entity type and government processing, but a private limited company or LLP is typically incorporated within a few working weeks once documents are complete." },
  { q: "Do you offer financial advisory for small businesses?", a: "Yes. Many of our clients are SMEs. We offer budgeting, cash-flow planning, MIS reporting and funding guidance scaled to your size." },
  { q: "Which corporate services do you support?", a: "Corporate structuring, governance, restructuring support, board advisory and ongoing secretarial and statutory compliance coordination." },
  { q: "Can you prepare a business plan for a bank loan?", a: "Yes. We prepare detailed project reports and financial models suitable for banks, financial institutions and investors." },
  { q: "How do you help with compliance?", a: "We set up a compliance calendar, coordinate filings with qualified professionals and keep you informed ahead of every deadline." },
];

export const processSteps = [
  { n: "01", icon: "Search", title: "Understand Your Requirements", text: "We listen first — your goals, challenges, timelines and constraints." },
  { n: "02", icon: "BarChart3", title: "Research & Analysis", text: "We study your numbers, market and operations to find the real issues." },
  { n: "03", icon: "Compass", title: "Strategic Planning", text: "We design a clear, practical plan with milestones and responsibilities." },
  { n: "04", icon: "Rocket", title: "Execution & Support", text: "We help implement, monitor progress and refine as your business evolves." },
];

export const whyCards = [
  { icon: "GraduationCap", title: "Experienced Professionals", text: "Advisors with hands-on experience across finance, law and business operations." },
  { icon: "Puzzle", title: "Customized Business Solutions", text: "No templates — every solution is designed around your specific situation." },
  { icon: "Eye", title: "Transparent Consulting", text: "Clear scope, clear fees and honest advice, even when it is not what you expect." },
  { icon: "Compass", title: "Strategic Approach", text: "We connect day-to-day decisions with your long-term business direction." },
  { icon: "HeartHandshake", title: "Client-Focused Services", text: "Responsive communication and a dedicated point of contact for every client." },
  { icon: "ShieldCheck", title: "Long-Term Business Support", text: "We stay with you beyond the first project, through every stage of growth." },
];

export const careers = [
  { title: "Business Analyst", type: "Full-time", location: "Office location", exp: "1–3 years", desc: "Support client engagements with research, financial analysis and reporting." },
  { title: "Senior Financial Consultant", type: "Full-time", location: "Office location", exp: "5+ years", desc: "Lead financial planning, MIS and funding assignments for SME clients." },
  { title: "Compliance Executive", type: "Full-time", location: "Office location", exp: "2–4 years", desc: "Manage compliance calendars, filings and documentation for clients." },
  { title: "Business Development Associate", type: "Full-time", location: "Office location", exp: "1–3 years", desc: "Build client relationships and support new business initiatives." },
];
