// Detailed project data for the detail panel
import { ASSET_URLS } from '../config/assetUrls';

const projectDetails = {
    budget_tiers: {
        id: 'budget_tiers',
        title: 'Improving Sponsorship Rates with Budget Tiers',
        company: 'Indeed',
        year: '2024',
        role: 'Senior Product Designer',
        team: 'Monetization & Growth',
        tags: ['Product Design', 'B2B SaaS', 'Revenue Growth', 'User Research'],

        hero: ASSET_URLS.budgetTiersUi,

        overview: 'Led the design of a budget recommendation framework that helped employers understand how much to invest in job sponsorships to achieve their hiring goals.',

        problem: 'Our research team found a common thread in user feedback: customers wanted more information around how much they needed to spend to fill a role as soon as possible. There was a significant gap between employer expectations and the reality of what effective job sponsorship costs.',

        solution: 'We created a budget tiers framework after multiple rounds of user testing and iterations. The framework analyzes job characteristics, market data, and historical performance to recommend appropriate budget levels. This provides clear guidance and sets realistic expectations for employers.',

        features: [
            'Data-driven budget recommendations based on job type and market',
            'Clear tier visualization (Good, Better, Best)',
            'Transparent explanation of what each tier delivers',
            'Market benchmarking data to support recommendations',
            'Seamless integration into existing job posting flow'
        ],

        impact: [
            { metric: '$65M+', label: 'Annualized Revenue Impact' },
            { metric: 'US & JP', label: 'Markets Launched' },
            { metric: 'June 2024', label: 'Launch Date' },
            { metric: '15%+', label: 'Conversion Rate Increase' }
        ],

        testimonials: [
            {
                quote: 'We had to explain the complexity of our product in just a few pages, and Nick took that challenge to heart and kept focused on building an experience that is simple, beautiful, and informative. Several of his designs led to major wins for our user experience (and key related business metrics, like revenue and retention).',
                author: 'Prashant Patel',
                title: 'Product Manager @ Indeed'
            }
        ],

        process: [
            { description: 'Market research and competitive analysis', media: [] },
            { description: 'User journey mapping', media: [] },
            { description: 'Interactive prototype development', media: [] },
            { description: 'Animation and micro-interaction design', media: [] },
            { description: 'Supply chain and fulfillment planning', media: [] },
            { description: 'Beta testing with collectors', media: [] }
        ],

        launched: [
            {
                description: 'The budget tiers framework was successfully launched to US and JP markets, resulting in a 15% increase in conversion rate.',
                media: []
            }
        ]
    },

    digital_power_packs: {
        id: 'digital_power_packs',
        title: 'Digital PowerPacks',
        company: 'GameStop',
        year: '2025',
        role: 'Lead Product Designer',
        team: 'Special Projects',
        tags: ['Product Design', 'E-commerce', 'Collectibles', 'Innovation'],

        hero: ASSET_URLS.digitalPowerPacksBg,

        overview: 'Pioneered a new product category that bridges digital collectibles with physical memorabilia, allowing users to purchase digital packs and receive physical PSA-graded cards.',

        problem: 'GameStop needed to identify a new revenue stream to move graded Pokemon card inventory. The challenge was to create an engaging digital experience that would drive sales of physical assets while appealing to both traditional collectors and digital natives.',

        solution: 'Digital packs, physical cards. Users purchase digital packs online, enjoy the thrill of revealing cards digitally, and receive physical PSA-authenticated slabs delivered to their door. This hybrid approach combines the best of both worlds.',

        features: [
            'On-demand pack ripping experience',
            'Real-time card reveal animations',
            'PSA grading integration',
            'Physical card fulfillment',
            'Collection management dashboard',
            'Rarity indicators and market value tracking'
        ],

        impact: [
            { metric: '$15M+', label: 'Avg Weekly Revenue' },
            { metric: '10,000+', label: 'Beta Users' },
            { metric: '85%', label: 'Average Buyback' }
        ],

        links: [
            {
                label: 'View Launch Announcement',
                url: 'https://www.linkedin.com/feed/update/urn:li:activity:7391942200911110144/'
            }
        ],

        process: [
            {
                description: 'The process began by identifying the revenue stream and gathering generative feedback and research to validate the target market. We built a prototype to test market fit with our current users.',
                media: [
                    { type: 'image', url: ASSET_URLS.PP1Mock, caption: 'Initial Concept Mockup' },
                    { type: 'image', url: ASSET_URLS.PP2Mock, caption: 'Pack Opening Flow' },
                    { type: 'video', url: ASSET_URLS.vidPP00, caption: 'Early Prototype Demo' }
                ]
            },
            {
                description: 'We iterated on the prototype and mocks based on user feedback, refining the interaction models and visual design.',
                media: [
                    { type: 'image', url: ASSET_URLS.PP3Mock, caption: 'Refined UI Iteration' },
                    { type: 'image', url: ASSET_URLS.PP4Mock, caption: 'Card Reveal Animation' },
                    { type: 'video', url: ASSET_URLS.vidPP01, caption: 'High-Fidelity Interaction' }
                ]
            }
        ],

        launched: [
            {
                description: 'Synthesized feedback and presented findings to leadership to drive product manager adoption and define MVP features. Managed cross-company design and product relationships with PSA to ensure design consistency across all touchpoints.',
                media: [
                    { type: 'image', url: ASSET_URLS.PP5Mock, caption: 'Final Dashboard Design' },
                    { type: 'image', url: ASSET_URLS.PP6Mock, caption: 'Mobile Experience' },
                    { type: 'image', url: ASSET_URLS.PP7Mock, caption: 'Physical Redemption Flow' }
                ]
            }
        ]
    },

    gamestop_redesign: {
        id: 'gamestop_redesign',
        title: 'GameStop Mobile Redesign',
        company: 'GameStop',
        year: '2024',
        role: 'Lead Product Designer',
        team: 'Digital Experience',
        tags: ['Product Design', 'Mobile', 'UX Research', 'Design Systems'],

        overview: 'Led a comprehensive redesign of the GameStop mobile experience, modernizing the UI and improving key user flows to enhance the shopping and discovery experience.',

        problem: 'The existing GameStop mobile app had outdated UI patterns, confusing navigation, and poor conversion rates. Users struggled to find products and complete purchases efficiently.',

        solution: 'Conducted extensive user research and created a modern, intuitive mobile experience with streamlined navigation, improved product discovery, and a cohesive design system.',

        features: [
            'Redesigned navigation and information architecture',
            'Modern UI with consistent design language',
            'Enhanced product discovery and search',
            'Streamlined checkout flow',
            'Personalized recommendations',
            'Improved accessibility standards'
        ],

        impact: [
            { metric: '2024', label: 'Launch Year' },
            { metric: 'iOS & Android', label: 'Platforms' },
            { metric: 'Improved', label: 'User Experience' }
        ],

        process: [
            { description: 'User research and synthesis', media: [] },
            { description: 'Concept ideation and sketching', media: [] },
            { description: 'Rapid prototyping and testing', media: [] },
            { description: 'Design system integration', media: [] },
            { description: 'Collaboration with data science team', media: [] },
            { description: 'A/B testing and iteration', media: [] }
        ],

        launched: [
            {
                description: 'The redesigned mobile app launched on iOS and Android in 2024, receiving positive feedback for its improved navigation and modern UI.',
                media: []
            }
        ]
    },

    activations: {
        id: 'activations',
        title: 'Creating a Campaign',
        company: 'Indeed',
        year: '2023',
        role: 'Senior Product Designer',
        team: 'Monetization & Growth',
        tags: ['Product Design', 'B2B', 'Workflow Optimization'],

        overview: 'Streamlined the campaign creation process for job sponsors, making it easier for employers to manage multiple job postings under unified budgets.',

        problem: 'Employers managing multiple job postings faced a fragmented experience with no way to view or control spending across all their jobs. Each posting was managed independently, leading to budget overruns and confusion.',

        solution: 'Designed a unified campaign creation flow that allows employers to group jobs, set shared budgets, and manage performance holistically. This simplified the mental model and gave employers better control.',

        features: [
            'Multi-job campaign grouping',
            'Unified budget allocation',
            'Performance dashboard',
            'Bulk editing capabilities',
            'Smart budget recommendations'
        ],

        impact: [
            { metric: '2023', label: 'Launch Year' },
            { metric: '40%', label: 'Time Saved' },
            { metric: 'US Market', label: 'Initial Release' }
        ],

        process: [
            { description: 'User research and synthesis', media: [] },
            { description: 'Concept ideation and sketching', media: [] },
            { description: 'Rapid prototyping and testing', media: [] },
            { description: 'Design system integration', media: [] },
            { description: 'Collaboration with data science team', media: [] },
            { description: 'A/B testing and iteration', media: [] }
        ],

        launched: [
            {
                description: 'The unified campaign creation flow was released to the US market, significantly reducing the time employers spend managing job postings.',
                media: []
            }
        ]
    },

    indeed_midmarket: {
        id: 'indeed_midmarket',
        title: 'Helping Mid-market Employers',
        company: 'Indeed',
        year: '2022',
        role: 'Senior Product Designer',
        team: 'Design Systems',
        tags: ['Design Systems', 'B2B', 'Scale'],

        overview: 'Built tools and systems to support mid-market employers on the Indeed platform, focusing on self-service capabilities and scalable design patterns.',

        problem: 'Mid-market employers (50-500 employees) needed enterprise-level features but with self-service simplicity. Existing tools were either too basic or too complex.',

        solution: 'Created a design system and component library specifically tailored for mid-market needs, balancing power with usability.',

        process: [
            { description: 'Stakeholder interviews', media: [] },
            { description: 'Component audit', media: [] },
            { description: 'Design token definition', media: [] },
            { description: 'Component documentation', media: [] },
            { description: 'Adoption strategy', media: [] }
        ],

        impact: [
            { metric: '2022', label: 'Launch Year' },
            { metric: '50-500', label: 'Company Size' },
            { metric: 'Self-service', label: 'Model' }
        ]
    },

    splunk: {
        id: 'splunk',
        title: 'Enterprise Design System',
        company: 'Handsome (for Splunk)',
        year: '2020',
        role: 'Product Designer',
        team: 'Agency',
        tags: ['Design Systems', 'Enterprise', 'Components'],

        overview: 'Built a comprehensive design system for Splunk\'s enterprise products, ensuring consistency and efficiency across multiple product teams.',

        problem: 'Splunk\'s products lacked visual and interaction consistency, leading to poor user experience and slow development cycles.',

        solution: 'Created a robust design system with reusable components, clear documentation, and governance processes.',

        features: [
            'Component library (50+ components)',
            'Design tokens',
            'Documentation site',
            'Accessibility guidelines',
            'Code snippets'
        ],

        impact: [
            { metric: '2020', label: 'Launch Year' },
            { metric: '50+', label: 'Components' },
            { metric: 'Enterprise', label: 'Scale' }
        ],

        process: [
            { description: 'Stakeholder interviews', media: [] },
            { description: 'Component audit', media: [] },
            { description: 'Design token definition', media: [] },
            { description: 'Component documentation', media: [] },
            { description: 'Adoption strategy', media: [] }
        ],

        launched: [
            {
                description: 'The enterprise design system is now the standard for all Splunk products, ensuring a consistent user experience across the platform.',
                media: []
            }
        ]
    },

    jet: {
        id: 'jet',
        title: 'Grocery Shopping Experience',
        company: 'Jet.com',
        year: '2018',
        role: 'Product Designer',
        team: 'Mobile',
        tags: ['Mobile Design', 'E-commerce', 'iOS', 'Android'],

        overview: 'Designed an intuitive grocery shopping experience for Jet.com\'s mobile apps (iOS and Android), optimizing for quick reordering and discovery.',

        problem: 'Grocery shopping on mobile needed to be fast and frictionless. Users wanted to quickly reorder favorites while also discovering new products.',

        solution: 'Created a dual-track experience: favorites for quick access, and curated discovery feeds for exploration.',

        features: [
            'Smart favorites lists',
            'Quick add to cart',
            'Personalized recommendations',
            'Category browsing',
            'Receipt scanning for list building'
        ],

        impact: [
            { metric: '2018', label: 'Launch Year' },
            { metric: 'iOS & Android', label: 'Platforms' },
            { metric: '30%', label: 'Reorder Rate Increase' }
        ],

        process: [
            { description: 'User research', media: [] },
            { description: 'Flow mapping', media: [] },
            { description: 'Visual design', media: [] },
            { description: 'Prototyping', media: [] },
            { description: 'Usability testing', media: [] }
        ],

        launched: [
            {
                description: 'The new grocery shopping experience launched on Jet.com mobile apps, driving a 30% increase in reorder rates.',
                media: []
            }
        ]
    }
};

export default projectDetails;
