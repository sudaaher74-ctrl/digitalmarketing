// Site-wide constants and data
export const SITE_CONFIG = {
  name: "My Agency",
  tagline: "Digital Marketing & Web Solutions",
  email: "hello@youragencyname.com",
  phone: "+91 87670 67884",
  address: "Mumbai, Maharashtra, India",
  whatsapp: "918767067884",
  social: {
    instagram: "https://instagram.com/youragencyname",
    facebook: "https://facebook.com/youragencyname",
    linkedin: "https://linkedin.com/company/youragencyname",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 3, suffix: "+", label: "Active Clients" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Custom Solutions" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const CLIENTS = [
  {
    name: "aivaenterprises",
    industry: "Frozen Food Export",
    services: ["Website Development", "SEO Optimization", "Product Showcase"],
    description: "A premium frozen food export company requiring a corporate web presence to establish trust with international clients.",
    color: "#00E5FF",
    link: "https://aivaenterprises.com"
  },
  {
    name: "milquufresh",
    industry: "Dairy Products",
    services: ["Website Development", "Branding", "Mobile Optimization"],
    description: "A dairy brand looking to build a strong digital presence with modern branding and mobile-first approach.",
    color: "#6C63FF",
    link: "https://milquufresh.in"
  },
  {
    name: "osinterior",
    industry: "Interior Design",
    services: ["Portfolio Website", "Lead Generation", "Responsive Design"],
    description: "An interior design studio needing a stunning portfolio to showcase projects and generate leads online.",
    color: "#00FFB2",
    link: "https://osinterior.in"
  },
  {
    name: "brandkettle",
    industry: "E-Commerce",
    services: ["E-Commerce Website", "SEO Optimization", "Branding"],
    description: "A comprehensive digital presence and e-commerce platform for a growing brand.",
    color: "#FF3366",
    link: "https://brandkettle.co.in"
  },
  {
    name: "dronaarchery",
    industry: "Sports Equipment",
    services: ["Online Store", "Performance Marketing", "Social Media"],
    description: "An online store for premium archery equipment, designed for better conversions.",
    color: "#FF9900",
    link: "https://dronaarchery.in"
  },
];

export const SERVICES = [
  {
    title: "Website Development",
    description: "Custom business websites, portfolios, landing pages and ecommerce solutions built with modern technologies.",
    icon: "code",
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, Local SEO, On-Page SEO and ranking improvements to drive organic traffic.",
    icon: "search",
  },
  {
    title: "Google Ads Management",
    description: "Lead generation and ROI-focused advertising campaigns that maximize your ad spend.",
    icon: "ads",
  },
  {
    title: "Social Media Marketing",
    description: "Instagram, Facebook and LinkedIn growth strategies to build your brand community.",
    icon: "social",
  },
  {
    title: "Branding & Design",
    description: "Logo design, packaging design and visual identity creation that makes your brand stand out.",
    icon: "design",
  },
  {
    title: "Content Marketing",
    description: "Blogs, articles and content strategy for organic growth and thought leadership.",
    icon: "content",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Results-Driven Approach",
    description: "Every strategy is backed by data and focused on delivering measurable outcomes for your business.",
    icon: "target",
  },
  {
    title: "Custom Marketing Strategies",
    description: "No cookie-cutter solutions. Each campaign is tailored specifically to your industry and goals.",
    icon: "strategy",
  },
  {
    title: "Mobile-First Development",
    description: "All websites are designed mobile-first, ensuring flawless experiences on every device.",
    icon: "mobile",
  },
  {
    title: "SEO-Friendly Websites",
    description: "Built-in SEO best practices from day one, so your website ranks higher and gets found.",
    icon: "seo",
  },
  {
    title: "Fast Turnaround",
    description: "Efficient workflows and clear communication ensure your project launches on time.",
    icon: "speed",
  },
  {
    title: "Dedicated Support",
    description: "Round-the-clock support and maintenance to keep your digital assets performing at their best.",
    icon: "support",
  },
];

export const CASE_STUDIES = [
  {
    title: "milquufresh",
    slug: "milquu-fresh",
    category: "Dairy Products",
    challenge: "Build a strong online presence for a dairy brand entering the competitive market with no digital footprint.",
    solution: "Custom website design with modern branding, intuitive mobile optimization, and a compelling product showcase.",
    result: "Professional digital presence established, significant boost in customer engagement and brand recognition.",
    services: ["Website Design", "Branding", "Mobile UX"],
    metrics: [{ v: "+180%", l: "Engagement" }, { v: "100%", l: "Satisfaction" }],
    color: "#6C63FF",
    link: "https://milquufresh.in",
    details: [
      {
        title: "🚀 Key Value Propositions",
        items: [
          { label: "All-in-One Dashboard", desc: "Manage everything from procurement and inventory to customer delivery from one central hub." },
          { label: "Data-Driven Insights", desc: "Real-time analytics, revenue tracking, and automated reporting." },
          { label: "Seamless User Experience", desc: "A fast, responsive, and intuitive interface for customers to buy, subscribe, and track orders." },
          { label: "AI-Powered Assistance", desc: "Integrated AI chatbot to provide instant support and enhance customer engagement." }
        ]
      },
      {
        title: "👥 User Roles & Their Portals",
        subsections: [
          {
            title: "1. Customer Portal (B2C/B2B)",
            desc: "The frontend interface designed for a frictionless shopping experience.",
            items: [
              { label: "Product Catalog & Cart", desc: "Interactive browsing of categories with a seamless add-to-cart experience." },
              { label: "Subscription Engine", desc: "Customers can set up recurring daily/weekly/monthly deliveries of essentials (like milk) and pause/resume their subscriptions anytime." },
              { label: "Free Sample Campaigns", desc: "Users can request free samples for newly launched products to try before they buy." },
              { label: "Digital Wallet System", desc: "Integrated wallet where users can add funds, receive cashbacks, and manage their balance." },
              { label: "Withdrawal Requests", desc: "Customers can easily request to withdraw funds from their digital wallet to their bank accounts." },
              { label: "Real-Time Order Tracking", desc: "Live status updates for all active orders, from placement to delivery." },
              { label: "Multi-language Support", desc: "Customers can browse the platform in their preferred language." }
            ]
          },
          {
            title: "2. Administrator Dashboard",
            desc: "The command center for business owners and managers.",
            items: [
              { label: "Business Overview & Analytics", desc: "Visual charts and KPIs for revenue, orders, and overall business health." },
              { label: "Order & Subscription Management", desc: "Complete control over all incoming orders and active subscriptions." },
              { label: "Inventory & Wastage Tracking", desc: "Monitor stock levels in real-time and log any product wastage to calculate accurate profits." },
              { label: "Procurement & Purchases", desc: "Manage relationships with suppliers and track inbound inventory shipments." },
              { label: "Customer Relationship Management (CRM)", desc: "View detailed customer profiles, order history, and manage their wallet balances." },
              { label: "Delivery Staff Management", desc: "Onboard delivery boys, assign specific deliveries, and track their performance." },
              { label: "Point of Sale (POS)", desc: "Built-in POS system to quickly process offline or in-store orders, syncing directly with the online inventory." },
              { label: "Financial Reports & Exports", desc: "Generate detailed reports (PDF/Excel) for profit analytics, expenses, and revenue." },
              { label: "Built-in SEO Generator", desc: "Tools to optimize product and category pages for better search engine rankings directly from the admin panel." },
              { label: "Promotions & Notifications", desc: "Send real-time push notifications and manage marketing campaigns." }
            ]
          },
          {
            title: "3. Delivery Staff Application",
            desc: "A dedicated interface to streamline the last-mile delivery process.",
            items: [
              { label: "Delivery Dashboard", desc: "An organized view of all assigned deliveries for the day." },
              { label: "Integrated Maps (Leaflet)", desc: "Get real-time directions to customer addresses." },
              { label: "Status Updates", desc: "Mark orders as picked up, on the way, or delivered with instant updates sent to the customer and admin." }
            ]
          }
        ]
      },
      {
        title: "🛠 Advanced System Features",
        items: [
          { label: "Gemini AI Chatbot", desc: "A smart, AI-driven assistant that helps answer customer queries, reducing the load on your support team." },
          { label: "Secure Payment Gateway", desc: "Fully integrated with Razorpay for safe, reliable, and instant online transactions (Cards, UPI, NetBanking)." },
          { label: "Automated Cron Jobs", desc: "Background tasks that automatically handle subscription renewals, invoice generation, and wallet deductions." },
          { label: "Real-Time WebSocket Communication", desc: "Instant updates across the platform (e.g., when a delivery boy updates an order status, the customer's screen updates instantly without refreshing)." },
          { label: "Responsive & Premium Design", desc: "Built using modern UI libraries (Framer Motion, Tailwind CSS) for a stunning, glassmorphism-inspired look that works flawlessly on mobiles, tablets, and desktops." }
        ]
      },
      {
        title: "💻 Technology Stack Highlights",
        items: [
          { label: "Frontend", desc: "React.js, Vite, TailwindCSS (for high-speed, beautiful UI)" },
          { label: "Backend", desc: "Node.js, Express.js (for scalable, non-blocking operations)" },
          { label: "Database", desc: "MongoDB (secure, flexible NoSQL data storage)" },
          { label: "Integrations", desc: "Razorpay (Payments), Cloudinary (Media Hosting), Google Gemini AI (Smart Chat), Nodemailer (Email services)." }
        ]
      }
    ]
  },
  {
    title: "aivaenterprises",
    slug: "aiva-enterprises",
    category: "Frozen Food Export",
    challenge: "Establish trust and credibility for an export-focused business targeting international clients.",
    solution: "Corporate website with professional product showcase, trust signals, and international-grade UX design.",
    result: "Improved brand credibility, stronger international client relationships, and increased inquiry conversion.",
    services: ["Corporate Website", "Product Showcase", "SEO"],
    metrics: [{ v: "+200%", l: "Credibility" }, { v: "+75%", l: "Inquiries" }],
    color: "#00E5FF",
    link: "https://aivaenterprises.com",
    details: [
      {
        title: "🎯 Project Overview",
        content: "The aivaenterprises project is a comprehensive enterprise system built for aivaenterprises. It consists of a public-facing website, a secure internal admin dashboard, and a robust backend API to handle everything from product inquiries to inventory and purchase order management. The project is structured as a monorepo containing three main workspaces: frontend, admin, and backend."
      },
      {
        title: "🏗 Architecture & Tech Stack",
        subsections: [
          {
            title: "💻 Frontend (Public Website)",
            desc: "The customer-facing application used to showcase products and capture inquiries.",
            items: [
              { label: "Framework", desc: "React 19 + Vite" },
              { label: "Routing", desc: "React Router DOM" },
              { label: "Styling & Animations", desc: "Tailwind CSS, Framer Motion, GSAP, Lenis (smooth scrolling)" },
              { label: "Data Fetching", desc: "Tanstack React Query, Axios" },
              { label: "Key Features", desc: "Product catalog, Informational pages, Interactive Chatbot, Static Site Generation (SSG) via vite-react-ssg for better SEO and performance." }
            ]
          },
          {
            title: "🛡️ Admin (Internal Dashboard)",
            desc: "A secure management portal for AIVA staff to manage business operations.",
            items: [
              { label: "Framework", desc: "React 19 + TypeScript + Vite" },
              { label: "UI Components", desc: "Radix UI primitives, Tailwind CSS" },
              { label: "Forms & Validation", desc: "React Hook Form, Zod" },
              { label: "Data Visualization", desc: "Recharts" },
              { label: "PDF Generation", desc: "jsPDF, jsPDF-autotable" },
              { label: "Key Features", desc: "Dashboard analytics, CRM features, Product & Inventory management, Sales & Orders" }
            ]
          },
          {
            title: "⚙️ Backend (REST API)",
            desc: "The core server powering both the frontend and admin applications.",
            items: [
              { label: "Framework", desc: "Node.js, Express" },
              { label: "Database", desc: "MongoDB (using Mongoose ODM)" },
              { label: "Authentication", desc: "JWT (JSON Web Tokens), bcryptjs" },
              { label: "Media & File Storage", desc: "Cloudinary, Multer" },
              { label: "Email", desc: "Nodemailer" },
              { label: "AI Integration", desc: "Google Generative AI (@google/generative-ai) likely used for the Chatbot or smart analytics." },
              { label: "Security", desc: "Helmet, CORS, Express Rate Limit, XSS Clean, Mongo Sanitize" }
            ]
          }
        ]
      },
      {
        title: "🗄️ Core Domain Models (Database)",
        items: [
          { label: "Product", desc: "Details of products sold by aivaenterprises." },
          { label: "Inventory", desc: "Stock levels and tracking." },
          { label: "Customer", desc: "Profiles of B2B or B2C clients." },
          { label: "Inquiry", desc: "Leads or questions captured from the frontend (often via the chatbot)." },
          { label: "Quotation", desc: "Pricing estimates generated for customers." },
          { label: "PurchaseOrder", desc: "Formal orders placed." },
          { label: "User", desc: "Admin staff accounts with role-based access." },
          { label: "Conversation & AnalyticsEvent", desc: "Data points for tracking user interactions and chatbot histories." }
        ]
      },
      {
        title: "🔄 Key Workflows",
        items: [
          { label: "1. Lead Generation", desc: "A user visits the frontend, views a ProductDetail, and interacts with the chatbot or inquiry form. This creates an Inquiry and Conversation in the backend." },
          { label: "2. Lead Management", desc: "Admin logs into the admin dashboard, navigates to the Leads page, and reviews the Inquiry." },
          { label: "3. Sales Conversion", desc: "The admin can generate a Quotation (exported as a PDF via jsPDF) and send it to the Customer. Once accepted, it becomes a PurchaseOrder." },
          { label: "4. Inventory Sync", desc: "As orders are fulfilled, the Inventory system is updated." }
        ]
      }
    ]
  },
  {
    title: "osinterior",
    slug: "os-interior",
    category: "Interior Design",
    challenge: "Generate quality leads through an online portfolio that showcases design expertise effectively.",
    solution: "Modern responsive website with immersive project showcase, lead capture forms, and conversion optimization.",
    result: "Enhanced customer trust, significant increase in qualified inquiry generation and project bookings.",
    services: ["Portfolio Website", "Lead Gen", "Responsive Design"],
    metrics: [{ v: "+120%", l: "Leads" }, { v: "+90%", l: "Bookings" }],
    color: "#00FFB2",
    link: "https://osinterior.in",
    details: [
      {
        title: "🎯 Project Overview",
        content: "osinteriors is a comprehensive full-stack web application designed for a premium interior design agency. It serves a dual purpose: 1. Client-Facing Portal: A beautifully crafted, highly interactive website to showcase the agency's portfolio (residential, commercial, and hospitality projects). 2. Internal ERP/CRM System: A robust administrative backend that manages employees, tracks leads, handles site attendance via geolocation, and generates dynamic work reports."
      },
      {
        title: "💻 Tech Stack",
        subsections: [
          {
            title: "Frontend",
            items: [
              { label: "Core Framework", desc: "React 19, Vite, React Router v7" },
              { label: "Data Fetching", desc: "Axios" },
              { label: "UI/UX & Styling", desc: "Custom CSS (.module.css), reveal animations, custom cursor implementation, and dynamic hero sliders." },
              { label: "Maps & Geolocation", desc: "Leaflet & React-Leaflet (used for employee site visit and attendance tracking)." },
              { label: "Data Visualization", desc: "Recharts (for admin dashboard analytics)." },
              { label: "Document Generation", desc: "jsPDF & jsPDF-AutoTable (for exporting reports)." },
              { label: "Notifications", desc: "React Hot Toast." }
            ]
          },
          {
            title: "Backend",
            items: [
              { label: "Environment", desc: "Node.js with Express.js" },
              { label: "Database", desc: "MongoDB with Mongoose ODM" },
              { label: "Authentication", desc: "JSON Web Tokens (JWT) & bcryptjs for secure password hashing." },
              { label: "Security", desc: "Helmet (HTTP headers) and express-rate-limit (brute-force protection on logins)." },
              { label: "Architecture", desc: "Modular RESTful API architecture (e.g., modularized /api/v2/ routes for scalable ERP features)." }
            ]
          }
        ]
      },
      {
        title: "🚀 Key Features",
        subsections: [
          {
            title: "1. Client-Facing Website",
            items: [
              { label: "Premium User Experience", desc: "Custom micro-interactions, smooth page transitions, and a modern aesthetic suited for an interior design firm." },
              { label: "Dynamic Portfolio", desc: "Detailed project showcases complete with budgets, location, and categorization (Hospitality, Commercial, Residential)." },
              { label: "Interactive Project Details", desc: "Individual project pages that render rich descriptions and cover images (e.g., The Bombay Canteen, Lakhani Centrium)." }
            ]
          },
          {
            title: "2. Admin CRM & Dashboard",
            items: [
              { label: "Lead Management", desc: "Capture and manage potential client inquiries securely." },
              { label: "Project Tracking", desc: "Monitor ongoing, completed, and upcoming projects." },
              { label: "Employee Management", desc: "Role-Based Access Control (RBAC) supporting 'Super Admin' and 'Employee' roles, with the ability to assign staff to specific sites." },
              { label: "Analytics", desc: "Visual dashboards using Recharts to display company metrics and progress." }
            ]
          },
          {
            title: "3. Employee Portal (ERP)",
            items: [
              { label: "Smart Attendance", desc: "Geo-fenced or location-aware check-ins using Leaflet maps to ensure staff are on-site." },
              { label: "Work Reports", desc: "Employees can submit detailed daily work reports, complete with image uploads and progress tracking." },
              { label: "Automated PDF Export", desc: "Employees and admins can seamlessly export data grids and reports into PDF format via jsPDF." }
            ]
          }
        ]
      },
      {
        title: "🏗️ Architecture & Deployment",
        items: [
          { label: "SPA", desc: "The frontend operates as a highly optimized Vite-based Single Page Application (SPA)." },
          { label: "Serverless backend", desc: "The backend is structured to support serverless deployment (configured with vercel.json and modularly separated routes)." },
          { label: "Seeding", desc: "Database seeding scripts (seed-erp.js) allow for rapid environment bootstrapping with mock data (admins, employees, and portfolio projects)." }
        ]
      }
    ]
  },
  {
    title: "brandkettle",
    slug: "brand-kettle",
    category: "Interior Design & E-Commerce",
    challenge: "Develop a high-converting e-commerce platform with a strong brand identity.",
    solution: "Designed a modern, fast, and SEO-optimized online store with seamless checkout.",
    result: "Increased online sales, better brand positioning, and higher search rankings.",
    services: ["E-Commerce", "Branding", "SEO", "Custom CMS"],
    metrics: [{ v: "+150%", l: "Sales" }, { v: "-40%", l: "Bounce" }],
    color: "#FF3366",
    link: "https://brandkettle.co.in",
    details: [
      {
        title: "📌 Project Overview",
        content: "brandkettle is a premium, high-performance web application designed to serve as a digital storefront and administrative platform. Built with a 'mobile-first' approach, the application delivers immersive 3D experiences, smooth scrolling animations, and dynamic data presentation to showcase the client's expertise in commercial fit-outs, residential interiors, and custom furniture. I engineered a bespoke Headless CMS from the ground up to ensure full control over content."
      },
      {
        title: "🛠 Technology Stack",
        subsections: [
          {
            title: "Frontend (Client-Side & SSR)",
            items: [
              { label: "Framework", desc: "Next.js (App Router, v15) & React 19" },
              { label: "Styling", desc: "Tailwind CSS" },
              { label: "Language", desc: "TypeScript" },
              { label: "3D Graphics & WebGL", desc: "React Three Fiber, React Three Drei, Three.js" },
              { label: "Animations & Scrolling", desc: "Framer Motion, GSAP, Lenis (Smooth Scroll)" },
              { label: "Rich Text Editor", desc: "Tiptap" },
              { label: "Testing", desc: "Playwright (End-to-End)" }
            ]
          },
          {
            title: "Backend (Server-Side API)",
            items: [
              { label: "Framework", desc: "Express.js (Node.js)" },
              { label: "Language", desc: "TypeScript" },
              { label: "Database", desc: "MongoDB (Native Node.js Driver)" },
              { label: "Data Validation", desc: "Zod" },
              { label: "File Handling", desc: "Multer" },
              { label: "Security & Auth", desc: "Express-Rate-Limit, CORS, Cookie-Parser, Custom JWT Auth Middleware" }
            ]
          }
        ]
      },
      {
        title: "🚀 Key Features & Technical Implementations",
        items: [
          { label: "1. Immersive 3D & Advanced Animations", desc: "Heavily utilizes React Three Fiber and GSAP for interactive 3D elements and complex, timeline-based scroll animations (coupled with Lenis for buttery-smooth scrolling)." },
          { label: "2. High-Performance Server-Side Rendering (SSR)", desc: "Leveraged Next.js Server-Side Rendering (SSR) alongside Incremental Static Regeneration (ISR) to dynamically fetch and cache data while balancing heavy WebGL rendering." },
          { label: "3. Custom Headless CMS & Admin Dashboard", desc: "Built a secure, client-side routed admin panel from scratch with a custom WYSIWYG editor using @tiptap/react and a Multer-based upload pipeline." },
          { label: "4. Robust RESTful API & Database Architecture", desc: "Independent Node.js/Express REST API bypassing bulky ORMs in favor of the native MongoDB driver for highly performant database queries and strict Zod validation." },
          { label: "5. Security & Lead Generation", desc: "Custom forms protected by express-rate-limit and administrative routes secured behind custom cookie-based authentication middleware." }
        ]
      },
      {
        title: "💡 Outcome",
        content: "The final product is a highly customized, visually striking monorepo application. It provides the client with a premium digital presence that stands out in the architectural space, while giving them a powerful, easy-to-use bespoke CMS to scale their content and SEO efforts moving forward."
      }
    ]
  },
  {
    title: "dronaarchery",
    slug: "drona-archery",
    category: "Sports",
    challenge: "Create a digital storefront to sell specialized sports equipment to a niche audience.",
    solution: "Built a customized e-commerce experience with detailed product catalogs and easy navigation.",
    result: "Expanded market reach, higher conversion rates, and improved customer satisfaction.",
    services: ["Online Store", "UX/UI Design", "Marketing"],
    metrics: [{ v: "+85%", l: "Conv." }, { v: "+300%", l: "Reach" }],
    color: "#FF9900",
    link: "https://dronaarchery.in",
    details: [
      {
        title: "🎯 Project Overview",
        content: "dronaarchery (Sidhi Project) is a modern, high-performance marketing & lead generation web application built to promote dronaarchery located in New Panvel, Navi Mumbai. The site aims to drive local student enrollments, highlight professional coaching services, and establish authority in Olympic recurve and compound bow training."
      },
      {
        title: "🛠 Tech Stack & Architecture",
        subsections: [
          {
            title: "Core Technologies",
            items: [
              { label: "Frontend Framework", desc: "React 19 (via Vite for blazing-fast development and build times)" },
              { label: "Routing", desc: "React Router v7" },
              { label: "Styling", desc: "Custom CSS (Modular and responsive)" }
            ]
          },
          {
            title: "Animations & UX Enhancements",
            items: [
              { label: "GSAP", desc: "For complex, timeline-based scroll animations." },
              { label: "Framer Motion", desc: "For fluid, declarative component-level animations and page transitions." },
              { label: "Lenis", desc: "For buttery-smooth scrolling experiences across all devices." },
              { label: "Lucide React", desc: "For clean, scalable SVG iconography." }
            ]
          },
          {
            title: "SEO & Discoverability",
            items: [
              { label: "React Helmet Async", desc: "For dynamic meta tags, titles, and descriptions across different routes." },
              { label: "JSON-LD Schema", desc: "Custom Local Business and FAQ schemas implemented for rich Google Search results." }
            ]
          }
        ]
      },
      {
        title: "✨ Key Features & Functionality",
        items: [
          { label: "1. High-Performance UX & Smooth Scrolling", desc: "Wrapped in <ReactLenis> to provide a premium, smooth-scrolling experience combined with GSAP and Framer Motion." },
          { label: "2. Mobile-First Navigation Strategies", desc: "Features a sticky navbar on desktop and an app-like MobileBottomNav on mobile, plus a persistent WhatsApp integration." },
          { label: "3. Local SEO Optimized", desc: "Dedicated schema.js data file that injects LocalBusiness and FAQPage JSON-LD schemas to rank highly for hyper-local searches." },
          { label: "4. Rich Storytelling & Visual Sections", desc: "Includes 'Meet the Coach', a dynamic 'Storytelling Scroll', and dedicated routes detailing specific offerings." }
        ]
      }
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Sudarshan",
    role: "Founder",
    phone: "8767067884",
    initials: "SU",
    color: "var(--lime)",
    expertise: ["Development", "Project Planning", "Strategy"],
    bio: "Passionate about building scalable digital solutions and strategizing project roadmaps to deliver exceptional results."
  },
  {
    name: "Siddhi Deshmukh",
    role: "Co-Founder",
    phone: "7506696276",
    initials: "SD",
    color: "var(--violet)",
    expertise: ["Website Design", "SEO", "User Experience"],
    bio: "Creative mind focused on designing beautiful, intuitive interfaces and optimizing digital presence for search engines."
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We learn about your business, goals, target audience, and challenges.",
  },
  {
    step: 2,
    title: "Research & Planning",
    description: "Deep dive into your industry, competitors, and market opportunities.",
  },
  {
    step: 3,
    title: "Strategy Development",
    description: "Craft a custom roadmap with clear milestones and KPIs.",
  },
  {
    step: 4,
    title: "Design & Development",
    description: "Bring the strategy to life with premium design and clean code.",
  },
  {
    step: 5,
    title: "Launch & Optimization",
    description: "Deploy your project and fine-tune for maximum performance.",
  },
  {
    step: 6,
    title: "Growth & Scaling",
    description: "Continuous improvement, analytics, and scaling your success.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    company: "aivaenterprises",
    role: "Managing Director",
    quote: "Working with My Agency transformed our digital presence completely. Their team understood our export business needs and delivered a website that truly represents our brand internationally. The attention to detail and professionalism was exceptional.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    company: "milquufresh",
    role: "Founder",
    quote: "From branding to website development, they handled everything with incredible creativity and precision. Our online presence has never looked better, and we're seeing real results in customer engagement. Highly recommended!",
    rating: 5,
  },
  {
    name: "Omkar Deshmukh",
    company: "osinterior",
    role: "Creative Director",
    quote: "The portfolio website they built for us is stunning. It perfectly showcases our interior design projects and has significantly increased our lead generation. Their responsive design ensures it looks amazing on every device.",
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. Typically, you can start seeing initial improvements within 3-6 months, with significant results in 6-12 months. We focus on sustainable, white-hat techniques that build lasting rankings. We provide monthly reports so you can track progress every step of the way.",
  },
  {
    question: "What is your website development process?",
    answer: "Our process follows six key stages: Discovery Call, Research & Planning, Strategy Development, Design & Development, Launch & Optimization, and Growth & Scaling. Each phase involves close collaboration with you to ensure the final product exceeds expectations. Most websites are completed within 2-4 weeks.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely! We offer 24/7 dedicated support and maintenance packages. This includes regular updates, security monitoring, performance optimization, content updates, and technical support. We're your long-term digital partner, not just a one-time service provider.",
  },
  {
    question: "Can you manage our Google Ads and social media?",
    answer: "Yes! We offer comprehensive Google Ads management and social media marketing services. We create targeted campaigns with detailed analytics, A/B testing, and continuous optimization to maximize your ROI. Our team manages everything from strategy to execution.",
  },
  {
    question: "How much does digital marketing cost?",
    answer: "Every business is unique, so we provide custom quotes based on your specific needs, goals, and budget. We offer flexible packages starting from affordable plans for startups to comprehensive enterprise solutions. Schedule a free consultation to get a detailed proposal tailored to your business.",
  },
];
