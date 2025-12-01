// Conversation flow data structure
// Each node represents a conversation state with bot messages and quick reply options

const conversationData = {
    welcome: {
        id: 'welcome',
        botMessages: [
            "Hi! I'm Nick Braver 👋",
            "I'm a Product Designer who's been crafting digital experiences for B2B, B2C e-commerce companies and startups since 2014."
        ],
        image: './assets/hero-image.png',
        quickReplies: [
            { id: 'about', label: 'Tell me more about you', icon: '👋' },
            { id: 'projects', label: 'I want to see your work', icon: '🎨' },
            { id: 'experience', label: 'I want to know about your experience', icon: '💼' },
            { id: 'reviews', label: 'I want to read some reviews about you', icon: '⭐' },
            { id: 'credits', label: 'How was this built?', icon: '💻' }
        ]
    },

    about: {
        id: 'about',
        botMessages: [
            "I specialize in designing products that balance user needs with business objectives.",
            "Currently, I'm a Lead Product Designer at GameStop, working on eCommerce, special projects, and store tools.",
            "I've worked with companies like Indeed, Handsome (Splunk), Jet.com, and major brands like Nike and Audi."
        ],
        quickReplies: [
            { id: 'projects', label: 'I want to see your work', icon: '🎨' },
            { id: 'experience', label: 'I want to know about your experience', icon: '💼' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    projects: {
        id: 'projects',
        displayMode: 'carousel',
        botMessages: [
            "Here are some of my projects:"
        ],
        quickReplies: [
            {
                id: 'project_digital_power_packs',
                label: 'Digital PowerPacks',
                title: 'Digital PowerPacks',
                tags: ['2025', 'Product Design', 'Web3'],
                image: '/assets/digital_power_packs_bg.png',
                icon: '🎮'
            },
            {
                id: 'project_budget_tiers',
                label: 'Indeed Budget Tiers',
                title: 'Indeed Budget Tiers',
                tags: ['2024', 'UX Research', 'B2B'],
                image: '/assets/budget_tiers_ui.png',
                icon: '💰'
            },
            {
                id: 'project_activations',
                label: 'Campaign Creation',
                title: 'Campaign Creation',
                tags: ['2023', 'Interaction Design', 'Mobile'],
                image: '/assets/hero-image.png',
                icon: '📱'
            },
            {
                id: 'project_indeed_midmarket',
                label: 'Mid-market Tools',
                title: 'Mid-market Tools',
                tags: ['2022', 'Enterprise', 'SaaS'],
                image: '/assets/hero-image.png',
                icon: '🛠️'
            },
            {
                id: 'project_splunk',
                label: 'Splunk Design System',
                title: 'Splunk Design System',
                tags: ['2020', 'Design Systems', 'UI Kit'],
                image: '/assets/splunk_components.png',
                icon: '🎨'
            },
            {
                id: 'project_jet',
                label: 'Jet.com Grocery',
                title: 'Jet.com Grocery',
                tags: ['2018', 'Mobile App', 'eCommerce'],
                image: '/assets/jet_final_ui_implementation.png',
                icon: '🛒'
            },
            {
                id: 'welcome',
                label: '← Back to menu',
                title: 'Back to Menu',
                tags: ['Navigation', 'Home'],
                icon: '🏠'
            }
        ]
    },

    // Digital Power Packs Project
    project_digital_power_packs: {
        id: 'project_digital_power_packs',
        botMessages: [
            "🎮 Digital PowerPacks"
        ],
        loadingMessages: [
            "Opening Figma workspace and loading recent project files...",
            "Parsing design system components and visual specifications...",
            "Compiling product screenshots and user flow diagrams...",
            "Gathering launch metrics and user feedback data..."
        ],
        detailPanelId: 'digital_power_packs',
        quickReplies: [
            { id: 'project_digital_power_packs_details', label: 'Tell me more about it', icon: '📖' },
            { id: 'projects', label: '← Back to projects', icon: '🎨' }
        ]
    },

    project_digital_power_packs_details: {
        id: 'project_digital_power_packs_details',
        botMessages: [
            "Digital packs, physical cards. Rip packs on-demand to reveal PSA slabs.",
            "This innovative product bridges the gap between digital collectibles and physical memorabilia.",
            "Users can purchase digital packs and reveal cards digitally, then receive physical PSA-graded cards."
        ],
        image: './assets/digital_power_packs_bg.png',
        quickReplies: [
            { id: 'project_digital_power_packs_link', label: 'View launch post', icon: '🔗' },
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    project_digital_power_packs_link: {
        id: 'project_digital_power_packs_link',
        externalLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7391942200911110144/',
        botMessages: [
            "Opening LinkedIn... 🔗"
        ],
        quickReplies: [
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Budget Tiers Project
    project_budget_tiers: {
        id: 'project_budget_tiers',
        botMessages: [
            "💰 Improving Sponsorship Rates with Budget Tiers",
            "Indeed · 2024 · Monetization & Growth"
        ],
        loadingMessages: [
            "Accessing user research database and feedback transcripts...",
            "Parsing qualitative insights and pain point analysis...",
            "Loading A/B test results and conversion metrics...",
            "Compiling revenue impact data and market adoption rates..."
        ],
        detailPanelId: 'budget_tiers',
        quickReplies: [
            { id: 'project_budget_tiers_problem', label: 'What was the problem?', icon: '❓' },
            { id: 'project_budget_tiers_solution', label: 'The solution', icon: '💡' },
            { id: 'project_budget_tiers_impact', label: 'Impact & results', icon: '📊' },
            { id: 'projects', label: '← Back to projects', icon: '🎨' }
        ]
    },

    project_budget_tiers_problem: {
        id: 'project_budget_tiers_problem',
        botMessages: [
            "Our research team found a common thread in user feedback:",
            "Customers wanted more information around how much they needed to spend to fill a role as soon as possible.",
            "There was a lack of clarity and guidance in the budgeting process for job sponsorships."
        ],
        quickReplies: [
            { id: 'project_budget_tiers_solution', label: 'How did you solve it?', icon: '💡' },
            { id: 'project_budget_tiers_impact', label: 'Impact & results', icon: '📊' },
            { id: 'projects', label: '← Back to projects', icon: '🎨' }
        ]
    },

    project_budget_tiers_solution: {
        id: 'project_budget_tiers_solution',
        botMessages: [
            "We created a budget tiers framework after multiple rounds of user testing and iterations.",
            "The framework provides clear guidance on recommended budget levels based on job characteristics and market data.",
            "This helps employers make informed decisions about their job sponsorship investments."
        ],
        image: '/assets/budget_tiers_ui.png',
        quickReplies: [
            { id: 'project_budget_tiers_impact', label: 'What was the impact?', icon: '📊' },
            { id: 'project_budget_tiers_testimonial', label: 'Testimonial', icon: '💬' },
            { id: 'projects', label: '← Back to projects', icon: '🎨' }
        ]
    },

    project_budget_tiers_impact: {
        id: 'project_budget_tiers_impact',
        botMessages: [
            "📊 $65M+ annualized revenue win",
            "🌍 Launched in US & JP markets",
            "📅 Launched in June 2024",
            "This was one of the biggest wins for our monetization team!"
        ],
        quickReplies: [
            { id: 'project_budget_tiers_testimonial', label: 'See testimonial', icon: '💬' },
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    project_budget_tiers_testimonial: {
        id: 'project_budget_tiers_testimonial',
        botMessages: [
            '"…We had to explain the complexity of our product in just a few pages, and Nick took that challenge to heart and kept focused on building an experience that is simple, beautiful, and informative. Several of his designs led to major wins for our user experience (and key related business metrics, like revenue and retention)…"',
            "— Prashant Patel, Product Manager @ Indeed"
        ],
        quickReplies: [
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Campaign Activations Project
    project_activations: {
        id: 'project_activations',
        botMessages: [
            "📱 Creating a Campaign",
            "Indeed · 2023 · Monetization & Growth",
            "Streamlining the campaign creation process for job sponsors."
        ],
        loadingMessages: [
            "Retrieving campaign creation wireframes and prototypes...",
            "Loading user journey maps and interaction flows...",
            "Compiling usability test recordings and heatmaps...",
            "Gathering design iteration history and feedback loops..."
        ],
        detailPanelId: 'activations',
        quickReplies: [
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Indeed Mid-market Project
    project_indeed_midmarket: {
        id: 'project_indeed_midmarket',
        botMessages: [
            "🛠️ Helping Mid-market Employers",
            "Indeed · 2022 · Design Systems",
            "Building tools and systems to support mid-market employers on the Indeed platform."
        ],
        loadingMessages: [
            "Accessing design system repository and component library...",
            "Loading pattern documentation and usage guidelines...",
            "Retrieving accessibility standards and implementation notes...",
            "Compiling adoption metrics across product teams..."
        ],
        detailPanelId: 'indeed_midmarket',
        quickReplies: [
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Splunk Project
    project_splunk: {
        id: 'project_splunk',
        botMessages: [
            "🎨 Enterprise Design System",
            "Handsome (for Splunk) · 2020",
            "Built a comprehensive design system for Splunk's enterprise products."
        ],
        loadingMessages: [
            "Dusting off archived design system files from 2020...",
            "Retrieving component library specifications and tokens...",
            "Loading enterprise product integrations and use cases...",
            "Gathering stakeholder feedback and adoption stories..."
        ],
        detailPanelId: 'splunk',
        quickReplies: [
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Jet.com Project
    project_jet: {
        id: 'project_jet',
        botMessages: [
            "🛒 Grocery Shopping Experience",
            "Jet.com · 2018 · Android & iOS",
            "Designed an intuitive grocery shopping experience for Jet.com's mobile apps."
        ],
        loadingMessages: [
            "Dusting off mobile app designs from the archives (2018)...",
            "Loading iOS and Android interface specifications...",
            "Retrieving grocery shopping user flows and cart interactions...",
            "Compiling app store performance data and ratings..."
        ],
        detailPanelId: 'jet',
        quickReplies: [
            { id: 'projects', label: 'See other projects', icon: '🎨' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Experience Timeline
    experience: {
        id: 'experience',
        botMessages: [
            "Here's my professional journey:",
            "Which role would you like to learn more about?"
        ],
        quickReplies: [
            { id: 'exp_gamestop', label: 'GameStop (2025)', icon: '🎮' },
            { id: 'exp_indeed_growth', label: 'Indeed - Growth (2024)', icon: '📈' },
            { id: 'exp_indeed_systems', label: 'Indeed - Design Systems (2021)', icon: '🎨' },
            { id: 'exp_handsome', label: 'Handsome (2020)', icon: '💼' },
            { id: 'exp_jet', label: 'Jet.com (2017)', icon: '🛒' },
            { id: 'exp_earlier', label: 'Earlier roles', icon: '📜' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    exp_gamestop: {
        id: 'exp_gamestop',
        botMessages: [
            "🎮 Lead Product Designer at GameStop",
            "2025 - Present",
            "Working on eCom, Special Projects, and Store Tools",
            "Leading design efforts for innovative retail experiences like Digital PowerPacks."
        ],
        quickReplies: [
            { id: 'project_digital_power_packs', label: 'See Digital PowerPacks', icon: '🎨' },
            { id: 'experience', label: '← Back to experience', icon: '💼' }
        ]
    },

    exp_indeed_growth: {
        id: 'exp_indeed_growth',
        botMessages: [
            "📈 Senior Product Designer at Indeed",
            "2024",
            "Monetization & Growth team",
            "Led design for budget tiers and campaign creation features, resulting in $65M+ revenue impact."
        ],
        quickReplies: [
            { id: 'project_budget_tiers', label: 'Budget Tiers project', icon: '💰' },
            { id: 'project_activations', label: 'Campaign creation', icon: '📱' },
            { id: 'experience', label: '← Back to experience', icon: '💼' }
        ]
    },

    exp_indeed_systems: {
        id: 'exp_indeed_systems',
        botMessages: [
            "🎨 Senior Product Designer at Indeed",
            "2021 - 2024",
            "Design Systems team",
            "Built and maintained design systems supporting mid-market employer products."
        ],
        quickReplies: [
            { id: 'project_indeed_midmarket', label: 'Mid-market tools', icon: '🛠️' },
            { id: 'experience', label: '← Back to experience', icon: '💼' }
        ]
    },

    exp_handsome: {
        id: 'exp_handsome',
        botMessages: [
            "💼 Product Designer at Handsome",
            "2020",
            "Enterprise design system for Splunk",
            "Created comprehensive design systems for enterprise products."
        ],
        quickReplies: [
            { id: 'project_splunk', label: 'Splunk design system', icon: '🎨' },
            { id: 'experience', label: '← Back to experience', icon: '💼' }
        ]
    },

    exp_jet: {
        id: 'exp_jet',
        botMessages: [
            "🛒 Product Designer at Jet.com",
            "2017 - 2020",
            "Android & iOS apps",
            "Designed mobile shopping experiences and grocery features."
        ],
        quickReplies: [
            { id: 'project_jet', label: 'Grocery experience', icon: '🛒' },
            { id: 'experience', label: '← Back to experience', icon: '💼' }
        ]
    },

    exp_earlier: {
        id: 'exp_earlier',
        botMessages: [
            "Earlier in my career:",
            "• 2016: UX/UI Designer - Agency work with Nike, Anheuser-Busch, Polaris, Audi",
            "• 2015: Interaction Designer - Checkout & Payments",
            "• 2014: Web Designer - ICESAT-2 Satellite public website"
        ],
        quickReplies: [
            { id: 'experience', label: '← Back to experience', icon: '💼' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Reviews
    reviews: {
        id: 'reviews',
        botMessages: [
            "Here's what people I've mentored say about working with me:",
            "Check out my reviews on ADPList below 👇"
        ],
        showReviewsWidget: true,
        quickReplies: [
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    // Credits
    credits: {
        id: 'credits',
        botMessages: [
            "This portfolio was vibe-coded and launched with AntiGravity. The design was crafted in Figma with love and attention to detail.",
            "Want to see how it's built? Check out the source code on GitHub! 👇"
        ],
        quickReplies: [
            { id: 'credits_github', label: 'View on GitHub', icon: '🔗' },
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    },

    credits_github: {
        id: 'credits_github',
        externalLink: 'https://github.com/ShawTheHuman/portfolio',
        botMessages: [
            "Opening GitHub repository... 🔗"
        ],
        quickReplies: [
            { id: 'welcome', label: '← Back to menu', icon: '🏠' }
        ]
    }
};

export default conversationData;
