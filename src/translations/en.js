const en = {
  // Navbar
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    portfolio: 'Portfolio',
    process: 'Process',
    testimonials: 'Why Us',
    pricing: 'Pricing',
    cta: 'Free Consultation',
  },

  // Hero
  hero: {
    badge: 'New Agency, Real Commitment',
    h1a: 'Grow Your Business',
    h1b: 'Digitally',
    h1c: 'with',
    desc: 'We help businesses dominate search engines, build professional websites, create quality content, and develop software solutions. Your digital success starts here.',
    cta1: 'Start Your Project',
    cta2: 'Explore Services',
    stat1: 'Services Ready',
    stat2: 'Full Commitment',
    stat3: 'Response Time',
    cardTraffic: 'Organic Traffic Growth',
    cardVisitors: 'Total Visitors',
    cardConversion: 'Conversion Rate',
    floatingCards: [
      { label: 'SEO Ready', value: 'On-Page & Off' },
      { label: 'Google Focused', value: 'Rank Higher' },
      { label: 'Start Project', value: 'Begin Now' },
    ],
  },

  // Services
  services: {
    badge: 'What We Do',
    h2a: 'Services That Deliver',
    h2b: 'Real Results',
    desc: 'From SEO to software, we deliver integrated digital solutions that make your business grow online.',
    learnMore: 'Learn more',
    items: [
      {
        title: 'Web Engine',
        subtitle: 'High-Performance Websites',
        description: 'We build fast, responsive, and visually stunning websites that convert visitors into customers. From landing pages to complex web applications.',
        features: ['Custom UI/UX Design', 'Mobile-First Development', 'Speed Optimization', 'CMS Integration'],
        badge: 'Most Popular',
      },
      {
        title: 'SEO',
        subtitle: 'Search Engine Optimization',
        description: 'Dominate Google search results with our data-driven SEO strategy. We ensure your business is found by the right people at the right time.',
        features: ['Technical SEO Audit', 'On-Page Optimization', 'Link Building', 'Local SEO & Google Maps'],
        badge: null,
      },
      {
        title: 'Content Writing',
        subtitle: 'Quality Content Strategy',
        description: 'Engage your audience with high-quality, SEO-optimized content that ranks in search engines and resonates with your target market.',
        features: ['Blog & Article Writing', 'Website Copywriting', 'Social Media Content', 'Product Descriptions'],
        badge: null,
      },
      {
        title: 'Software Solution',
        subtitle: 'Custom Software Development',
        description: 'From web to mobile apps and enterprise software, we build tailored digital solutions that streamline your business operations.',
        features: ['Web App Development', 'Mobile Apps (iOS & Android)', 'API Integration', 'Cloud & DevOps Solutions'],
        badge: null,
      },
    ],
  },

  // TechStack
  techStack: {
    badge: 'Technology Stack',
    h2: 'Tools & Technologies',
    h2accent: 'We Work With',
    desc: 'We use modern, trusted technologies to build digital products that are fast, scalable, and SEO-ready.',
  },

  // About
  about: {
    badge: 'About NataSEO',
    h2a: 'We Are Here to',
    h2b: 'Grow Your Business',
    p1: 'NataSEO is a digital agency based in Yogyakarta, Indonesia, focused on real and measurable online business growth. We combine technical expertise with a deep understanding of the Indonesian market.',
    p2: 'We believe every business, big or small, deserves a strong digital presence. That\'s why we are committed to delivering high-quality services with transparent pricing and clear communication.',
    cta: 'Start Consultation',
    strengths: [
      'SEO specialists focused on real, measurable rankings',
      'Full team: design, dev, content & strategy',
      'Data-driven approach with clear performance reports',
      'Direct communication — no middlemen, no fluff',
      'Early clients get priority access and exclusive pricing',
    ],
    stats: [
      { label: 'Services Available', value: '4' },
      { label: 'Slots Available', value: 'Open' },
      { label: 'Full Commitment', value: '100%' },
      { label: 'Response Time', value: '<24h' },
    ],
  },

  // Portfolio
  portfolio: {
    badge: 'Real Results',
    h2a: 'Projects We\'ve',
    h2b: 'Already Built',
    desc: 'Not just a portfolio — this is proof of how we think, solve problems, and execute digital solutions for real clients.',
    liveBtn: 'View Website',
    challengeLabel: 'Challenge',
    solutionLabel: 'Solution',
    resultLabel: 'Results',
    stackLabel: 'Tech Stack',
    cta: 'Discuss Your Project',
    ctaDesc: 'Have a similar or different project in mind? Let\'s talk — first consultation is free.',
    cases: [
      {
        client: 'Brothers Trans',
        url: 'https://beta.brotherstrans.id',
        industry: 'Transportation',
        service: 'Web Engine',
        color: 'blue',
        tagline: 'From WA-Only Business to Professional Digital Presence',
        challenge: 'Brothers Trans is a transportation company whose entire operation relied on word-of-mouth referrals and WhatsApp. There was no way for potential corporate clients to find or verify their credibility online.',
        solution: 'We built a professional company profile website showcasing their services, fleet, and operational areas clearly — designed to build corporate client trust from the very first impression.',
        results: [
          'Professional online presence shareable to prospective clients',
          'Detailed service & fleet pages significantly boost credibility',
          'Direct inquiry form reduces booking friction',
          'Stands out against competitors with no website',
        ],
        stack: ['React', 'Tailwind CSS', 'Vercel'],
      },
      {
        client: 'Eazy Trip Yogyakarta',
        url: 'https://eazytripyogyakarta.com',
        industry: 'Tourism & Travel',
        service: 'Web Engine',
        color: 'teal',
        tagline: 'A Full Travel Platform to Compete With Major OTAs',
        challenge: 'A premium local Yogyakarta travel agent — offering 7–19 seat vehicle rentals, tour packages, and airport shuttles — lacked a digital platform to match their service quality. Bookings were entirely manual via WhatsApp, making them unable to compete with OTAs like Traveloka.',
        solution: 'A complete travel website with an interactive fleet catalog, ready-to-book tour packages, destination gallery, and booking integration. Built bilingual (Indonesian & English) to reach both domestic and international travelers.',
        results: [
          'Full fleet catalog from city cars to 19-seat minibuses',
          'UNESCO, volcanic adventure & cultural tour packages displayed cleanly',
          'Bilingual ID/EN opens access to foreign tourists',
          'Integrated customer testimonials build strong social proof',
        ],
        stack: ['React', 'Tailwind CSS', 'Vercel', 'WhatsApp API'],
      },
      {
        client: 'Japan Tourged',
        url: 'https://japan-tourged.vercel.app',
        industry: 'International Tourism',
        service: 'Web Engine',
        color: 'rose',
        tagline: 'A Landing Page That Converts Social Media Traffic Into Bookings',
        challenge: 'A Japan-specialist tour operator with 500+ satisfied travelers, but all leads depended on word-of-mouth. Traffic from Instagram and TikTok wasn\'t converting because there was no strong landing page to capture and convince potential travelers.',
        solution: 'A clean, immersive Japan tour landing page showcasing 4 package types (Private, One Day, Company Trip, Honeymoon) with strong social proof, a destination blog, and strategically placed WhatsApp CTAs to convert social media traffic.',
        results: [
          '4 tour packages presented clearly with descriptions and per-package CTAs',
          '500+ travelers & 5.0★ rating displayed prominently as social proof',
          'Travel blog builds long-term authority and organic traffic',
          'Mobile-optimized — built for Instagram Stories traffic',
        ],
        stack: ['React', 'Vercel', 'Blog System'],
      },
    ],
  },

  // Process
  process: {
    badge: 'How We Work',
    h2a: 'Simple Process,',
    h2b: 'Outstanding Results',
    desc: 'We believe transparency and communication are the keys to every project\'s success. Here\'s our proven workflow.',
    ctaTitle: 'Ready to Start Your Digital Journey?',
    ctaDesc: 'First consultation is free — let\'s discuss how we can help your business grow online.',
    ctaBtn: 'Schedule Free Consultation',
    steps: [
      {
        title: 'Discovery & Consultation',
        description: 'We start by understanding your business goals, target audience, and current digital footprint. This free consultation forms the foundation for everything we build together.',
      },
      {
        title: 'Strategy & Planning',
        description: 'Our team creates a custom digital strategy tailored to your specific goals — from keyword targeting and content calendars to tech stack and design direction.',
      },
      {
        title: 'Execution & Launch',
        description: 'We build, write, and optimize with precision. Whether launching a website, publishing content, or deploying an app, we execute with quality and speed.',
      },
      {
        title: 'Monitor & Grow',
        description: 'We track performance metrics, report transparently, and continuously optimize your campaigns. Growth is an ongoing process — and we\'re with you every step of the way.',
      },
    ],
  },

  // Why NataSEO (Testimonials)
  whyUs: {
    badge: 'Why NataSEO',
    h2a: 'Built to Deliver.',
    h2b: 'Committed to Results.',
    desc: 'We don\'t just sell services — we become your business growth partner. Here\'s what sets our approach apart.',
    cardLabel: 'Our Commitment',
    cardTitle: 'Every project we handle',
    cardTitleAccent: 'as seriously as our own business.',
    cardDesc: 'Your trust is our most valuable asset. That\'s why every detail, every deadline, and every report is held to the highest standards.',
    cardCta: 'Start Free Consultation',
    commitments: [
      'Free initial consultation, no pressure',
      'Detailed proposal before any contract',
      'Weekly progress reports',
      'Unlimited revisions until you\'re satisfied',
      'Maximum 24-hour response on business days',
    ],
    pillars: [
      { title: 'Direct to the Expert', desc: 'You talk and work directly with the founder — not a junior account manager or outsourced staff.' },
      { title: '100% Transparent', desc: 'Regular weekly reports. You know exactly what\'s being worked on, and why.' },
      { title: 'Results-Oriented', desc: 'KPIs set from day one. We don\'t talk about process — we talk about numbers.' },
      { title: 'Fast & Responsive', desc: 'Small focused team = no bureaucracy. Fast decisions, faster execution.' },
    ],
    nudge: 'Free consultation · No obligation · Response within 24 hours',
  },

  // FAQ
  faq: {
    badge: 'FAQ',
    h2a: 'Questions We',
    h2b: 'Get Asked Most',
    desc: 'Everything you need to know before getting started. No question is too small.',
    stillQuestion: 'Still have questions?',
    stillDesc: 'A direct consultation is faster than reading FAQs. We reply within 24 hours.',
    stillBtn: 'Ask Us Directly',
    items: [
      {
        q: 'How long does it take to build a website?',
        a: 'It depends on project complexity. A simple landing page can be done in 3–5 business days. A 5–10 page company profile usually takes 1–2 weeks. Websites with custom features (e-commerce, booking systems) typically take 3–6 weeks. We always agree on a timeline upfront before starting.',
      },
      {
        q: 'Are there any guarantees or revisions after completion?',
        a: 'Yes. Every project includes unlimited revisions during development until you\'re satisfied. After launch, we provide a bug-fix warranty period at no extra cost. Major changes outside the original scope will be discussed and quoted separately.',
      },
      {
        q: 'How long before SEO results are visible?',
        a: 'Honestly: SEO takes time. Ranking movement usually starts appearing in months 2–3. Significant results (reaching page 1 for target keywords) are typically achieved within 4–6 months for medium-competition keywords. That\'s why we require a minimum 3-month contract.',
      },
      {
        q: 'Can you guarantee page 1 rankings on Google?',
        a: 'No one can guarantee rankings — anyone promising page 1 rankings in a short time is a red flag. What we guarantee is the right process: accurate keyword research, solid technical SEO, quality content, and transparent weekly performance reports.',
      },
      {
        q: 'How does payment work?',
        a: 'For Web Engine and Software: 50% upfront as a deposit, 50% after the project is completed and approved. For SEO and Content Writing: paid monthly in advance. We accept bank transfers and can negotiate for larger projects.',
      },
      {
        q: 'Is there a contract? How binding is it?',
        a: 'Yes, we use a simple work agreement (not a thick contract). It covers: scope of work, timeline, pricing, and rights of both parties. This protects you and us. Before signing, you\'ll receive a detailed proposal to review at your own pace.',
      },
      {
        q: 'Where will my website be hosted?',
        a: 'We use modern, fast, and reliable hosting — Vercel for static/React websites, and VPS or shared hosting for WordPress/PHP sites. Domain and hosting can be registered under your own name so you have full ownership after the project.',
      },
      {
        q: 'Can NataSEO handle multiple services at once?',
        a: 'Absolutely — and we recommend it. A great website + SEO content + integrated SEO strategy is far more effective than working with separate vendors. We can put together a bundled package that\'s more efficient for multi-service projects.',
      },
      {
        q: 'How do I get started with NataSEO?',
        a: 'Easy. Contact us via the form below or WhatsApp — we\'ll schedule a free 30-minute consultation (no obligation). In that session we learn your needs, then send a proposal within 1–2 business days. No pressure to commit right away.',
      },
    ],
  },

  // Blog
  blog: {
    badge: 'Insights & Tips',
    h2a: 'Latest',
    h2b: 'Articles',
    desc: 'Discover SEO tips, web development insights, and digital marketing strategies you can apply directly to your business.',
    readMore: 'Read article',
    cta: 'View All Articles',
  },

  // Contact
  contact: {
    badge: 'Contact Us',
    h2a: 'Start a Conversation,',
    h2b: 'Start Growing',
    desc: 'Have a project in mind? Or just want to ask a question? We\'re ready to listen and help your business grow digitally.',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'Your email address',
    servicePlaceholder: 'Select a service',
    msgPlaceholder: 'Tell us about your business and needs...',
    submitBtn: 'Send Message',
    sending: 'Sending...',
    successTitle: 'Message sent!',
    successDesc: 'Thank you for reaching out. We\'ll reply within 24 hours.',
    whatsappLabel: 'Or chat directly via WhatsApp',
    whatsappBtn: 'Chat on WhatsApp',
    infoTitle: 'Contact Information',
    freeLabel: 'Free Consultation',
    freeDesc: 'A 30-minute consultation session to discuss your business digital needs — no cost, no obligation.',
    serviceOptions: ['Web Engine', 'SEO', 'Content Writing', 'Software Solution', 'Other'],
    officeLabel: 'Office',
  },

  // Pricing
  pricing: {
    badge: 'Digital Investment',
    h2a: 'Transparent Pricing,',
    h2b: 'No Surprises',
    desc: 'All prices are initial estimates. Every project is discussed first and tailored to your specific business needs.',
    startingFrom: 'Starting from',
    perMonth: '/ month',
    perArticle: '/ article',
    oneTime: 'one-time',
    retainer: 'monthly retainer',
    minContract: 'Min. 3 months',
    ctaLabel: 'Need a more accurate estimate?',
    ctaDesc: 'Contact us for a free consultation — we\'ll create a proposal tailored to your project scope.',
    ctaBtn: 'Get a Free Estimate',
    customLabel: 'Custom',
    customNote: 'Price determined after consultation',
    services: [
      {
        name: 'Web Engine',
        tagline: 'Professional Website',
        startPrice: 'IDR 3M',
        unit: 'one-time',
        range: 'IDR 3M – IDR 60M',
        highlight: false,
        features: [
          'Landing Page from IDR 3–7M',
          'Company Profile IDR 7–15M',
          'Website + CMS IDR 12–25M',
          'E-commerce / Web App IDR 25–60M',
        ],
        note: 'Price depends on number of pages, features, and design complexity',
      },
      {
        name: 'SEO',
        tagline: 'Search Engine Optimization',
        startPrice: 'IDR 1.5M',
        unit: '/ month',
        range: 'IDR 1.5M – IDR 12M/month',
        highlight: true,
        features: [
          'Basic (1–3 keywords) IDR 1.5–3M/mo',
          'Standard (5–10 keywords) IDR 3–6M/mo',
          'Full / E-commerce IDR 6–12M/mo',
          'Weekly performance reports',
        ],
        note: 'Minimum 3-month contract for measurable results',
      },
      {
        name: 'Content Writing',
        tagline: 'Quality Content',
        startPrice: 'IDR 200K',
        unit: '/ article',
        range: 'IDR 200K – IDR 5M/package',
        highlight: false,
        features: [
          'SEO article 800–1500 words IDR 200–400K',
          'Long-form 2000+ words IDR 400–700K',
          '8 articles/month package IDR 1.5–3M',
          '16 articles/month package IDR 2.5–5M',
        ],
        note: 'Includes keyword research and on-page optimization',
      },
      {
        name: 'Software Solution',
        tagline: 'Custom Development',
        startPrice: 'IDR 8M',
        unit: 'one-time',
        range: 'IDR 8M – IDR 150M+',
        highlight: false,
        features: [
          'Internal tools / Dashboard IDR 8–20M',
          'Full web app IDR 20–50M',
          'Management system / ERP IDR 50–150M',
          'Mobile App (iOS & Android) IDR 30–80M',
        ],
        note: 'Final price after requirements analysis and project scope',
      },
    ],
  },

  // Footer
  footer: {
    desc: 'A digital agency based in Yogyakarta helping Indonesian businesses grow online through SEO, web development, content, and software.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    resourcesTitle: 'Resources',
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Work', href: '#portfolio' },
      { label: 'Process', href: '#process' },
      { label: 'Why Us', href: '#testimonials' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Case Study', href: '#portfolio' },
      { label: 'SEO Checklist', href: '#' },
      { label: 'Free Audit', href: '#contact' },
    ],
    copyright: 'All rights reserved.',
    madeWith: 'Made with',
    forBusiness: 'for Indonesian businesses',
  },

  // WhatsApp
  whatsapp: {
    tooltip: 'Chat WhatsApp',
    message: 'Hello%20NataSEO%2C%20I%27d%20like%20to%20consult%20about%20my%20project',
  },

  // Breadcrumb
  breadcrumb: {
    home: 'Home',
  },

  // RelatedArticles
  related: {
    title: 'Related Articles',
    readMore: 'Read article',
  },

  // Article back button
  article: {
    backBtn: 'Back to Home',
  },
}

export default en
