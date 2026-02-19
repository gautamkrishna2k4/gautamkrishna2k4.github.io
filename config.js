// ============================================================
//  PORTFOLIO CONFIG — Edit this file to update your portfolio!
// ============================================================

const CONFIG = {
    // ── Personal Info ──────────────────────────────────────────
    name: "Gautam Krishna R",
    initials: "GK",
    taglines: [
        "B.Com Graduate",
        "Finance & Business Enthusiast",
        "Aspiring Business Analyst",
        "Numbers Tell Stories",
    ],
    heroSubtext:
        "A commerce graduate passionate about finance, business strategy, and turning data into actionable insights that drive growth.",

    // ── About ──────────────────────────────────────────────────
    about: {
        paragraphs: [
            "I'm a B.Com graduate with a strong foundation in accounting, finance, and business management. I enjoy analyzing market trends, building financial models, and finding data-driven solutions to real-world business challenges.",
            "Beyond academics, I'm always exploring new areas in business analytics, investment strategies, and entrepreneurship. I believe in continuous learning and bringing fresh perspectives to the world of commerce.",
        ],
        stats: [
            { label: "Projects Completed", value: "15+" },
            { label: "Certifications", value: "5+" },
            { label: "Internships", value: "3+" },
            { label: "Cups of Coffee", value: "∞" },
        ],
        resumeLink: "#", // Link to your resume PDF
    },

    // ── Skills ─────────────────────────────────────────────────
    skills: [
        {
            category: "Finance & Accounting",
            icon: "💰",
            items: [
                { name: "Financial Analysis", level: 90 },
                { name: "Accounting (Tally / Zoho)", level: 85 },
                { name: "Taxation (GST / Income Tax)", level: 80 },
                { name: "Auditing", level: 75 },
            ],
        },
        {
            category: "Business & Analytics",
            icon: "📊",
            items: [
                { name: "Business Strategy", level: 85 },
                { name: "Market Research", level: 80 },
                { name: "Data Analysis", level: 75 },
                { name: "Financial Modelling", level: 70 },
            ],
        },
        {
            category: "Tools & Software",
            icon: "🛠️",
            items: [
                { name: "Microsoft Excel", level: 92 },
                { name: "Google Sheets", level: 88 },
                { name: "Power BI / Tableau", level: 70 },
                { name: "MS Office Suite", level: 90 },
            ],
        },
        {
            category: "Soft Skills",
            icon: "🤝",
            items: [
                { name: "Communication", level: 90 },
                { name: "Leadership", level: 85 },
                { name: "Problem Solving", level: 88 },
                { name: "Team Collaboration", level: 92 },
            ],
        },
    ],

    // ── GitHub ─────────────────────────────────────────────────
    github: {
        username: "gautamkrishna2k4", // ← Change to Gautam's real GitHub username
        maxRepos: 6,
        sortBy: "updated", // "stars", "updated", "pushed"
        pinnedRepos: [],   // e.g. ["repo-name"] to always show these first
        excludeRepos: [],  // repos to hide
        excludeForks: true,
    },

    // ── Contact ────────────────────────────────────────────────
    contact: {
        email: "gautamkrishna.r@example.com",
        heading: "Let's Connect & Collaborate",
        subtext:
            "Looking for opportunities in finance, business analytics, or accounting? Let's talk!",
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/gautamkrishna2k4",
                icon: "github",
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/gautamkrishna2k4",
                icon: "linkedin",
            },
            {
                name: "Twitter",
                url: "https://twitter.com/gautamkrishna2k4",
                icon: "twitter",
            },
            {
                name: "Email",
                url: "mailto:gautamkrishna.r@example.com",
                icon: "mail",
            },
        ],
    },

    // ── Theme ──────────────────────────────────────────────────
    theme: {
        default: "dark", // "dark" or "light"
        accentHue: 250,  // Change this number (0-360) to shift the entire palette
    },
};
