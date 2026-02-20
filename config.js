// ============================================================
//  PORTFOLIO CONFIG — Edit this file to update your portfolio!
// ============================================================

const CONFIG = {
    // ── Personal Info ──────────────────────────────────────────
    name: "Gautam Krishna R",
    initials: "GK",
    taglines: [
        "CMA USA Aspirant",
        "Finance Graduate",
        "Numbers Tell Stories",
        "Aspiring Finance Professional",
    ],
    heroSubtext:
        "Finance graduate and CMA USA candidate with strong fundamentals in financial reporting, costing, and analytical problem-solving. Looking to start my career in a finance related role.",

    // ── About ──────────────────────────────────────────────────
    about: {
        paragraphs: [
            "Finance graduate and CMA USA candidate with strong fundamentals in financial reporting, costing, and analytical problem-solving. Experienced in preparing financial statements for academic projects, leading finance-focused initiatives, and using Excel for analysis.",
            "Looking to start my career in a finance related role that aligns with my interest, where I can apply my financial knowledge, technical skills, and academics.",
        ],
        stats: [
            { label: "CGPA", value: "7.4" },
            { label: "Certifications", value: "3" },
            { label: "Languages", value: "4" },
            { label: "Cups of Coffee", value: "∞" },
        ],
        resumeLink: "#", // Link to your resume PDF
    },

    // ── Education ──────────────────────────────────────────────
    education: [
        {
            degree: "Bachelor of Commerce (Finance)",
            institution: "Government Arts College, Thiruvananthapuram",
            year: "2022 – 2025",
            score: "CGPA: 7.4",
            icon: "🎓",
        },
        {
            degree: "CBSE, Class XII",
            institution: "Arya Central School, Pattom, Thiruvananthapuram",
            year: "2022",
            score: "89%",
            icon: "📚",
        },
        {
            degree: "CBSE, Class X",
            institution: "Arya Central School, Pattom, Thiruvananthapuram",
            year: "2020",
            score: "88%",
            icon: "📖",
        },
    ],

    // ── Certifications ─────────────────────────────────────────
    certifications: [
        { name: "CMA USA", status: "Pursuing", icon: "🏆" },
        { name: "Advanced Excel", status: "Completed", icon: "📊" },
        { name: "SAP FICO", status: "Completed", icon: "💼" },
    ],

    // ── Projects / Academic Works ──────────────────────────────
    projects: [
        {
            title: "Stock Market Awareness Study",
            description:
                "Designed a questionnaire-based study to measure stock market awareness as an investment option across districts in Kerala. Collected and analyzed responses from participants across different age groups.",
            highlights: [
                "Overall public awareness of stock markets was low",
                "Individuals below age 40 showed higher awareness",
                "Participants above age 60 showed minimal interest due to retirement stage",
                "Comprehensive report covering stock market basics, investment theories, and perception analysis",
            ],
            tags: ["Research", "Data Analysis", "Finance"],
            icon: "📈",
        },
        {
            title: "Innovative Product Presentation",
            description:
                "Proposed an innovative self-charging wireless computer mouse that regenerates battery power through user hand movements.",
            highlights: [
                "Presented concept feasibility with energy-harvesting mechanism",
                "Analyzed cost implications and user convenience benefits",
                "Eliminating the need for battery replacement or charging",
            ],
            tags: ["Innovation", "Presentation", "Product Design"],
            icon: "🖱️",
        },
    ],

    // ── Skills ─────────────────────────────────────────────────
    skills: [
        {
            category: "Tools & Techniques",
            icon: "🛠️",
            items: [
                { name: "MS Excel (Pivot Tables, Dashboards)", level: 92 },
                { name: "Data Cleaning & Analysis", level: 85 },
                { name: "MS Word", level: 88 },
                { name: "PowerPoint", level: 85 },
            ],
        },
        {
            category: "Accounting & Finance",
            icon: "💰",
            items: [
                { name: "Financial Reporting Basics", level: 85 },
                { name: "Internal Controls", level: 80 },
                { name: "Variance Analysis", level: 78 },
                { name: "Budgeting Concepts", level: 82 },
            ],
        },
        {
            category: "Soft Skills",
            icon: "🤝",
            items: [
                { name: "Attention to Detail", level: 90 },
                { name: "Analytical Thinking", level: 88 },
                { name: "Team Collaboration", level: 92 },
                { name: "Effective Communication", level: 85 },
            ],
        },
    ],

    // ── Co-Curricular Activities ───────────────────────────────
    activities: [
        {
            title: "World Cube Association Tournament",
            description: "Finalist — Rubik's Cube",
            icon: "🧩",
        },
        {
            title: "Community Service",
            description: "Volunteered in community service programs, contributing to social awareness and outreach activities",
            icon: "🤲",
        },
        {
            title: "Sports",
            description: "Participated in multiple college sports events in cricket and badminton; part of the winning team in a cricket tournament",
            icon: "🏏",
        },
    ],

    // ── Languages ──────────────────────────────────────────────
    languages: [
        { name: "English", level: "Professional", proficiency: 90 },
        { name: "Tamil", level: "Mother Tongue", proficiency: 100 },
        { name: "Hindi", level: "Communication", proficiency: 75 },
        { name: "Malayalam", level: "Communication", proficiency: 75 },
    ],

    // ── Contact ────────────────────────────────────────────────
    contact: {
        email: "gautamkrishna2k4@gmail.com",
        phone: "+918590742459",
        heading: "Let's Connect & Collaborate",
        subtext:
            "Looking for opportunities in finance, accounting, or business analytics? Let's talk!",
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/gautamkrishna2k4",
                icon: "github",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/gautam-krishna-551a0a280",
                icon: "linkedin",
            },
            {
                name: "Email",
                url: "mailto:gautamkrishna2k4@gmail.com",
                icon: "mail",
            },
            {
                name: "Phone",
                url: "tel:+918590742459",
                icon: "phone",
            },
        ],
    },

    // ── Theme ──────────────────────────────────────────────────
    theme: {
        default: "dark", // "dark" or "light"
        accentHue: 250,  // Change this number (0-360) to shift the entire palette
    },
};
