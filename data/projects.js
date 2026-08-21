/* ==========================================================================
   PROJECT DATA
   --------------------------------------------------------------------------
   This is the single source of truth for the Projects section.
   To add a project: copy the TEMPLATE at the bottom of this file, fill it in,
   drop your images in assets/images/<your-project-id>/ and you're done.
   No components, no HTML edits, no CSS.

   FIELD REFERENCE
   ---------------
   id           (required) unique kebab-case slug, also used for deep links (#p/<id>)
   title        (required) project name
   subtitle     one-line positioning statement, shown in green under the title
   description  (required) 1-3 sentence card summary
   categories   (required) array of filter tags, e.g. ["Mobile", "Marketplace"]
                Filters in the UI are generated automatically from these.
   featured     true -> sorts to the top of the grid and shows a Featured badge
   year         string, e.g. "2025" (optional, omit if unsure)
   role         your role on the project (optional)
   company      the employer this was built at (optional) - links work to experience
   cover        { type, src, alt } | { type: "phones", shots: [{src, alt}, ...] }
                type "image"  -> single image, cropped to fill the card header
                type "phones" -> 3 phone screenshots arranged as a showcase
   tech         array of technology names -> rendered as badges
   overview     longer paragraph shown at the top of the detail view (optional)
   features     array of { title, text } -> "Key features" list in the detail view
   highlights   array of { title, text } -> "Technical highlights" list (optional)
   gallery      array of { src, full, alt }
                src  = optimised image used for the thumbnail
                full = high-resolution original opened in the lightbox
   wide         true if the gallery images are square/landscape rather than phone-shaped
   links        { github, live } - omit or leave empty and the button won't render
   stores       array of { name, url } - url optional; without it a non-clickable
                "available on" badge is shown instead of a link
   ========================================================================== */

/* CanDev case-study assets are served from the agency CDN. Swap this for a
   local path if you ever mirror the images into assets/images/. */
const CDN = "https://candevwebsite.blob.core.windows.net/assets/projects";

const PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    id: "jobpopper",
    title: "MakeMy Task",
    subtitle: "On-demand services marketplace",
    description:
      "A location-based marketplace that connects customers with nearby service workers in real time. Live on the App Store and Google Play.",
    categories: ["Mobile", "Marketplace"],
    featured: true,
    year: "2025",
    role: "React Native Developer",
    company: "My Digital Pixels",
    cover: {
      type: "phones",
      shots: [
        { src: "assets/images/jobpoper/1.webp", alt: "MakeMy Task app icon and branding" },
        { src: "assets/images/jobpoper/2.webp", alt: "MakeMy Task — post any task and get it completed early" },
        { src: "assets/images/jobpoper/3.webp", alt: "MakeMy Task — Hot Jobs feed with job details" },
        { src: "assets/images/jobpoper/4.webp", alt: "MakeMy Task — Post Jobs and My Jobs management screen" }
      ]
    },
    tech: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "Redux Persist",
      "Twilio (Authy)",
      "Firebase",
      "Google Places API",
      "Reanimated"
    ],
    overview:
      "MakeMy Task turns the gig-economy experience into something immediate and local. Customers post or browse jobs on a live map, service workers discover opportunities near them, and both sides stay in sync through push notifications and persisted offline state.",
    features: [
      {
        title: "Real-time map integration",
        text: "Interactive visualisation of nearby job opportunities."
      },
      {
        title: "Secure OTP authentication",
        text: "Phone-based verification through a Twilio integration."
      },
      {
        title: "Location-based discovery",
        text: "Automatic job filtering driven by user proximity."
      },
      {
        title: "Dynamic profiles",
        text: "Rich user profile management with media upload support."
      },
      {
        title: "Instant notifications",
        text: "Firebase Messaging keeps job status updates arriving in real time."
      },
      {
        title: "Offline-ready state",
        text: "Redux Persist keeps the app usable and fast between sessions."
      }
    ],
    gallery: [
      {
        src: "assets/images/jobpoper/1.webp",
        full: "assets/images/jobpoper/1.webp",
        alt: "MakeMy Task branding mockup with the app on a phone"
      },
      {
        src: "assets/images/jobpoper/2.webp",
        full: "assets/images/jobpoper/2.webp",
        alt: "MakeMy Task promo — post a task and nearby experts complete it"
      },
      {
        src: "assets/images/jobpoper/3.webp",
        full: "assets/images/jobpoper/3.webp",
        alt: "MakeMy Task job detail screen for an urgent medicine pickup"
      },
      {
        src: "assets/images/jobpoper/4.webp",
        full: "assets/images/jobpoper/4.webp",
        alt: "MakeMy Task My Jobs list showing posted tasks"
      }
    ],
    links: {},
    stores: [
      { name: "App Store" },
      { name: "Google Play" }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "school-erp",
    title: "School ERP",
    subtitle: "Multi-vendor school management platform",
    description:
      "An enterprise school management ecosystem with role-based portals for admins, teachers, parents and students, plus vendor areas for uniform sellers, transporters and stationery suppliers.",
    categories: ["Mobile", "Enterprise"],
    featured: true,
    year: "2025",
    role: "React Native Developer",
    company: "My Digital Pixels",
    cover: {
      type: "phones",
      shots: [
        {
          src: "assets/images/school-erp/erp-06.jpg",
          alt: "Parent dashboard with fee alerts, transport status and attendance"
        },
        {
          src: "assets/images/school-erp/erp-05.jpg",
          alt: "School admin dashboard showing the full module grid"
        },
        {
          src: "assets/images/school-erp/erp-09.jpg",
          alt: "Uniform supplier dashboard with sales and inventory metrics"
        }
      ]
    },
    tech: [
      "React Native (Expo SDK 52)",
      "TypeScript",
      "Redux Toolkit",
      "Redux Persist",
      "React Navigation",
      "React Hook Form",
      "Axios",
      "Moment.js",
      "Crypto-js",
      "Reanimated"
    ],
    overview:
      "A comprehensive mobile application that bridges educational institutions, parents, students and service providers. The platform runs on a role-based architecture supporting more than eight distinct user types, each with its own dashboard, navigation stack and functional suite.",
    features: [
      {
        title: "Multi-role ecosystem",
        text: "Role-based authentication for school admins, teachers, parents and students, transporters, micro-financers, uniform suppliers and stationery sellers — each with a tailored flow."
      },
      {
        title: "Academic management",
        text: "Performance tracking with graphical insights, interactive attendance calendars, digitised exam schedules and real-time homework and notice board updates."
      },
      {
        title: "Financial operations",
        text: "Digital fee collection with history tracking, an integrated wallet, and micro-finance loan management for staff and parents."
      },
      {
        title: "Vendor marketplace",
        text: "Dedicated portals let stationery and uniform sellers manage inventory and process school orders."
      },
      {
        title: "Communication hub",
        text: "Real-time chat, a multimedia gallery for school events, and automated push notifications for critical updates."
      },
      {
        title: "Subscription management",
        text: "Tiered subscription plans with billing and upgrade flows built into the admin experience."
      }
    ],
    highlights: [
      {
        title: "Modular routing",
        text: "A dynamic bottom-tab navigator that reshapes itself based on the signed-in role, built on createStaticNavigation."
      },
      {
        title: "Layered API client",
        text: "Specialised Axios instances (erpAuthInstance, erpAxiosInstance) with JWT injection via Redux-linked interceptors."
      },
      {
        title: "State-driven UI",
        text: "Redux Toolkit slices for auth, school detail, loans and enrollments keep data consistent across 250+ reusable components."
      },
      {
        title: "Performance-minded",
        text: "Lazy loading, memoised components and full TypeScript coverage for enterprise-scale maintainability."
      }
    ],
    gallery: [
      { src: "assets/images/school-erp/erp-01.jpg", full: "assets/images/school-erp/full/erp-01.png", alt: "School ERP sign-in screen" },
      { src: "assets/images/school-erp/erp-02.jpg", full: "assets/images/school-erp/full/erp-02.png", alt: "School ERP sign-up screen with role selection" },
      { src: "assets/images/school-erp/erp-03.jpg", full: "assets/images/school-erp/full/erp-03.png", alt: "Role picker listing admin, parent, transporter, uniform supplier, micro financer and stationery seller" },
      { src: "assets/images/school-erp/erp-04.jpg", full: "assets/images/school-erp/full/erp-04.png", alt: "Admin transaction dashboard with new, pending, approved and rejected requests" },
      { src: "assets/images/school-erp/erp-05.jpg", full: "assets/images/school-erp/full/erp-05.png", alt: "Admin module grid including enrollments, fee master, hostel and transport" },
      { src: "assets/images/school-erp/erp-06.jpg", full: "assets/images/school-erp/full/erp-06.png", alt: "Parent dashboard with fee alerts, transport status and attendance summary" },
      { src: "assets/images/school-erp/erp-07.jpg", full: "assets/images/school-erp/full/erp-07.png", alt: "Transporter dashboard showing trips, revenue, vehicles and driver metrics" },
      { src: "assets/images/school-erp/erp-08.jpg", full: "assets/images/school-erp/full/erp-08.png", alt: "Role switcher allowing a user to move between their assigned roles" },
      { src: "assets/images/school-erp/erp-09.jpg", full: "assets/images/school-erp/full/erp-09.png", alt: "Uniform supplier dashboard with sales, inventory, orders and ratings" },
      { src: "assets/images/school-erp/erp-10.jpg", full: "assets/images/school-erp/full/erp-10.png", alt: "Micro financer dashboard with available funds, loan requests and EMI reminders" },
      { src: "assets/images/school-erp/erp-11.jpg", full: "assets/images/school-erp/full/erp-11.png", alt: "Subscription plans and billing screen" }
    ],
    links: {},
    stores: []
  },

  /* ------------------------------------------------------------------ */
  {
    id: "virtus-pro",
    title: "Virtus Pro",
    subtitle: "Professional gastronomy equipment catalogue",
    description:
      "A professional-grade catalogue and ordering app for the industrial kitchen equipment industry, built for technical buyers across six-plus European languages.",
    categories: ["Mobile", "E-Commerce"],
    featured: false,
    role: "React Native Developer",
    cover: {
      type: "image",
      src: "assets/images/virtus-pro/catalog_mockup.jpg",
      alt: "Virtus Pro product catalogue displayed on a phone"
    },
    tech: [
      "React Native 0.81",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "i18next",
      "Firebase (FCM)"
    ],
    overview:
      "Virtus Pro serves the industrial kitchen equipment market, where buyers care about voltage, power draw and exact dimensions as much as price. The app pairs a deep, hierarchical catalogue with a technical spec presentation and full internationalisation.",
    features: [
      {
        title: "Guest-first entry",
        text: "Immediate catalogue exploration with a seamless transition into a full account."
      },
      {
        title: "Advanced SKU management",
        text: "Hierarchical category support scaling to thousands of products."
      },
      {
        title: "Technical precision",
        text: "Detailed specification displays — voltage, power, dimensions — aimed at engineers and procurement teams."
      },
      {
        title: "Global reach",
        text: "Full i18n support across six-plus European languages."
      },
      {
        title: "Security first",
        text: "Custom secure API integration alongside Google Sign-In."
      },
      {
        title: "Real-time sync",
        text: "Firebase Cloud Messaging drives order tracking and product news updates."
      }
    ],
    gallery: [
      { src: "assets/images/virtus-pro/home_mockup.jpg", full: "assets/images/virtus-pro/full/home_mockup.png", alt: "Virtus Pro home screen with featured categories and new arrivals" },
      { src: "assets/images/virtus-pro/catalog_mockup.jpg", full: "assets/images/virtus-pro/full/catalog_mockup.jpg", alt: "Virtus Pro product catalogue listing commercial kitchen equipment" },
      { src: "assets/images/virtus-pro/detail_mockup.jpg", full: "assets/images/virtus-pro/full/detail_mockup.jpg", alt: "Virtus Pro product detail screen showing technical specifications" },
      { src: "assets/images/virtus-pro/profile_mockup.jpg", full: "assets/images/virtus-pro/full/profile_mockup.jpg", alt: "Virtus Pro account settings and profile screen" },
      { src: "assets/images/virtus-pro/profile_light.jpg", full: "assets/images/virtus-pro/full/profile_light.png", alt: "Virtus Pro guest profile screen in light theme" }
    ],
    wide: true,
    links: {},
    stores: []
  },

  /* ==================================================================
     CanDev Software Agency — Jan 2026 to present
     ================================================================== */
  {
    id: "quote-it",
    title: "Quote It",
    subtitle: "Home services marketplace, Ontario",
    description:
      "A two-sided marketplace where Ontario homeowners post a job with a photo and get quotes from nearby pros within minutes. Cross-platform mobile apps plus a web platform.",
    categories: ["Mobile", "Web", "Marketplace"],
    featured: false,
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",
      src: "assets/images/quoiteIt/690370e3-963a-47d3-9d4d-637c48f82f72.webp",
      alt: "Quote It home services marketplace app"
    },
    tech: ["React Native", "Next.js", "Node.js", "GPS / Location", "Cloud"],
    overview:
      "Quote It connects homeowners with local service providers across Ontario — from kitchen renovations and painting to lawn care, pressure washing and general contracting. Homeowners post a job in under a minute with a photo and a few words; nearby providers are notified instantly and submit competitive pricing without paying upfront lead fees.",
    features: [
      { title: "Four-step job flow", text: "Post a job, collect quotes, book a pro, then rate and review." },
      { title: "Location-based matching", text: "Real-time push alerts to nearby providers, filtered by service category." },
      { title: "In-app quoting engine", text: "Providers submit detailed pricing; homeowners compare quotes side by side." },
      { title: "Provider lead dashboard", text: "Job details and photos surfaced upfront so pros can bid accurately." },
      { title: "Booking and reviews", text: "Booking confirmation paired with a full rating and review module." }
    ],
    gallery: [
      { src: "assets/images/quoiteIt/25c9d12a-b471-4449-951c-c6d76b8613cc.webp", full: "assets/images/quoiteIt/25c9d12a-b471-4449-951c-c6d76b8613cc.webp", alt: "Quote It — job posting and quoting interface" },
      { src: "assets/images/quoiteIt/6fe62668-e789-4c0d-a401-24abce9ae149.png",  full: "assets/images/quoiteIt/6fe62668-e789-4c0d-a401-24abce9ae149.png",  alt: "Quote It — provider lead dashboard" },
      { src: "assets/images/quoiteIt/0a0be33a-c3e5-456e-aae4-0b6765e39695.png",  full: "assets/images/quoiteIt/0a0be33a-c3e5-456e-aae4-0b6765e39695.png",  alt: "Quote It — booking and review flow" }
    ],
    wide: true,
    links: {},
    stores: []
  },

  /* ------------------------------------------------------------------ */
  {
    id: "receni",
    title: "Receni",
    subtitle: "AI receipt scanner & expense tracker",
    description:
      "An AI-powered receipt scanner for iOS and Android that reads merchant, date, tax and totals from a photo in under ten seconds. Live on the App Store.",
    categories: ["Mobile", "AI", "SaaS"],
    featured: false,
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",
      src: "assets/images/receni/4925a651-c393-4a38-b11d-bcdc06ec371c.webp",
      alt: "Receni AI receipt scanner app"
    },
    tech: ["React Native", "Next.js", "React.js", ".NET", "AI / ML"],
    overview:
      "Receni turns paper receipts into organised spending data. The hard part was OCR that holds up on faded thermal receipts, wrapped in an interface simple enough that people actually open a finance app. Multi-workspace support lets freelancers and small business owners keep personal and business spending separate without switching apps.",
    features: [
      { title: "Custom AI parsing engine", text: "Extracts merchant, date, line items, tax and totals from any receipt photo." },
      { title: "Multiple workspaces", text: "Switch between personal and business expenses inside one account." },
      { title: "Budget tracking", text: "Category budgets with threshold alerts and a real-time insights dashboard." },
      { title: "Tax-season export", text: "One-click CSV export plus monthly digest emails." },
      { title: "Multi-currency support", text: "Spending tracked correctly across regions." }
    ],
    gallery: [
      { src: "assets/images/receni/a35205bf-6e2b-4096-9d11-32555361371f.png",  full: "assets/images/receni/a35205bf-6e2b-4096-9d11-32555361371f.png",  alt: "Receni — receipt scanning screen" },
      { src: "assets/images/receni/352c1792-38e6-4ab2-830c-e79ec7ee7b1b.webp", full: "assets/images/receni/352c1792-38e6-4ab2-830c-e79ec7ee7b1b.webp", alt: "Receni — spending dashboard and insights" },
      { src: "assets/images/receni/ed1745c3-54cf-4014-a30e-471b1862f3b8.webp", full: "assets/images/receni/ed1745c3-54cf-4014-a30e-471b1862f3b8.webp", alt: "Receni — budgets and category breakdown" }
    ],
    wide: true,
    links: {},
    stores: [
      { name: "App Store", url: "https://apps.apple.com/us/app/receni-receipt-scanner/id6761788208" },
      { name: "Google Play" }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "chamba-express",
    title: "Chamba Express",
    subtitle: "Local services marketplace with escrow payments",
    description:
      "A React Native marketplace connecting clients with skilled local workers, built around a Stripe-powered escrow model so neither side has to trust the other first.",
    categories: ["Mobile", "Marketplace"],
    featured: false,
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",
      src: "assets/images/chamba/670add4e-63e5-4f87-a917-787adaa10a33.webp",
      alt: "Chamba Express local services marketplace app"
    },
    tech: ["React Native", "Node.js", "Stripe", "Stripe Connect", "Google Maps", "Cloud"],
    overview:
      "People post local jobs — cleaning, repairs, deliveries, tutoring, handyman work — and nearby skilled workers apply, negotiate and get hired in the app. Cash between strangers is unsafe for both sides, so escrow sits at the centre of the product: the worker can see funds are secured before starting, and the client only releases payment for completed work.",
    features: [
      { title: "Stripe escrow payments", text: "Funds locked at booking and released on approved completion." },
      { title: "Dispute resolution", text: "A formal flow lets admins review evidence and make a fair call." },
      { title: "Real-time chat", text: "Messaging tied directly to each individual job." },
      { title: "Map-based job search", text: "Google Maps integration for browsing work by location." },
      { title: "Mutual ratings", text: "Two-way reviews with anti-retaliation logic." },
      { title: "In-app wallets", text: "Stripe Connect withdrawals to bank, with a fraud-prevention hold on earnings." }
    ],
    gallery: [
      { src: "assets/images/chamba/5c31e3e7-a304-4534-a011-12a9c8b660e0.webp", full: "assets/images/chamba/5c31e3e7-a304-4534-a011-12a9c8b660e0.webp", alt: "Chamba Express — job marketplace screens" },
      { src: "assets/images/chamba/6dff3cf8-6cb6-49b9-a985-82f100c65607.png",  full: "assets/images/chamba/6dff3cf8-6cb6-49b9-a985-82f100c65607.png",  alt: "Chamba Express — escrow payment flow" },
      { src: "assets/images/chamba/3ec670ef-deb2-44b0-803d-92c89a4fad0b.webp", full: "assets/images/chamba/3ec670ef-deb2-44b0-803d-92c89a4fad0b.webp", alt: "Chamba Express — chat and job management" }
    ],
    wide: true,
    links: {},
    stores: []
  },

  /* ------------------------------------------------------------------ */
  {
    id: "statclash",
    title: "StatClash",
    subtitle: "Competitive gaming stats & contests",
    description:
      "A mobile platform where competitive gamers track performance with real-time analytics, enter free and paid contests, and compare themselves against other players.",
    categories: ["Mobile"],
    featured: false,
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",
      src: CDN + "/detail/1b9799cf-5c36-45a6-9eaa-c7d8b201375d.webp",
      alt: "StatClash competitive gaming statistics app"
    },
    tech: ["React Native", "Node.js", "Cloud", "Payments"],
    overview:
      "Gaming stat trackers tend to be all numbers or all social. StatClash combines both in one app, then adds a contest system with paid entries — which meant handling real-money transactions, fair-play enforcement, transparent scoring and legal compliance across multiple Canadian jurisdictions.",
    features: [
      { title: "Real-time stat tracking", text: "Performance analytics with a detailed insights dashboard." },
      { title: "Competition engine", text: "Supports both free and paid-entry contests." },
      { title: "Transparent scoring", text: "Scoring logic published openly so players trust the results." },
      { title: "Fair play enforcement", text: "A policy enforcement layer built into the contest system." },
      { title: "Secure payments", text: "Payment processing for contest entries." },
      { title: "Community features", text: "Player profiles and connections alongside the stats." }
    ],
    gallery: [
      { src: CDN + "/sections/1657fd01-932c-4ad0-8dd4-6a2c3c630d8f.webp", full: CDN + "/sections/1657fd01-932c-4ad0-8dd4-6a2c3c630d8f.webp", alt: "StatClash — player analytics dashboard" },
      { src: CDN + "/sections/75051da2-b741-4304-a317-cde14411b45a.png",  full: CDN + "/sections/75051da2-b741-4304-a317-cde14411b45a.png",  alt: "StatClash — contests and entry flow" },
      { src: CDN + "/sections/6839ac10-476f-4803-803c-a9cfac3b0954.webp", full: CDN + "/sections/6839ac10-476f-4803-803c-a9cfac3b0954.webp", alt: "StatClash — community and player profiles" }
    ],
    wide: true,
    links: { live: "https://statclash.app/" },
    stores: []
  },

  /* ------------------------------------------------------------------ */
  {
    id: "deal-dock",
    title: "Deal Dock",
    subtitle: "Guided real estate transaction tracker",
    description:
      "A mobile app that walks home buyers and sellers through every stage of their transaction alongside their agent, replacing scattered texts and emails with one clear view.",
    categories: ["Mobile"],
    featured: false,
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",
      src: CDN + "/detail/d808060e-583f-43ce-8b78-12590c9b4f71.webp",
      alt: "Deal Dock real estate transaction app"
    },
    tech: ["React Native", "React", "ASP.NET", "SQL Server"],
    overview:
      "Most of the stress in buying or selling a home comes from silence — clients rarely know what their agent is working on or what happens next. Deal Dock gives every client a personalised, stage-by-stage view of their deal, paced entirely by their agent, with a React-based control panel on the agent side.",
    features: [
      { title: "27 guided stages", text: "Separate journeys for sellers (16 stages) and buyers (11), since the processes differ." },
      { title: "Secure document hub", text: "PDFs, images and Word files shared in one place." },
      { title: "Milestone notifications", text: "Smart alerts tied to real transaction deadlines." },
      { title: "Agent control panel", text: "Agents manage clients, deals, documents and stage progression." },
      { title: "Automated seller updates", text: "Bi-weekly market updates sent automatically for listings." },
      { title: "Click-to-call access", text: "Direct contact with agent, lawyer or utility providers from the journey." }
    ],
    gallery: [
      { src: CDN + "/sections/7f5272ba-b936-4ee6-9427-07c73db11381.webp", full: CDN + "/sections/7f5272ba-b936-4ee6-9427-07c73db11381.webp", alt: "Deal Dock — client transaction journey" },
      { src: CDN + "/sections/6c21001d-8cff-4297-a925-4099f224ac0e.png",  full: CDN + "/sections/6c21001d-8cff-4297-a925-4099f224ac0e.png",  alt: "Deal Dock — document hub" },
      { src: CDN + "/sections/c6d02cb1-9cff-4b83-a0b0-209b3c07ecaf.webp", full: CDN + "/sections/c6d02cb1-9cff-4b83-a0b0-209b3c07ecaf.webp", alt: "Deal Dock — agent control panel" }
    ],
    wide: true,
    links: {},
    stores: []
  },

  /* ------------------------------------------------------------------ */
  {
    id: "warwick-academy",
    title: "Warwick Academy",
    subtitle: "All-in-one K-12 school management platform",
    description:
      "A SaaS web application covering kiosk check-in, behaviour management, attendance, parent portals and reporting — 15+ operational modules in one connected system.",
    categories: ["Web", "SaaS", "Enterprise"],
    featured: false,
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",
      src: CDN + "/detail/11ce7d22-2ebe-47d2-90ac-6a66c24f3807.webp",
      alt: "Warwick Academy school management platform"
    },
    tech: ["React 18", "TypeScript", "ASP.NET Core 8", "SQL Server", "Stripe", "RevenueCat"],
    overview:
      "Schools were running on disconnected tools — gate attendance on paper, house points in spreadsheets, behaviour records in email. Warwick Academy replaces all of it with one web application where admins, head teachers, teachers, staff, students and parents each see exactly the tools and data relevant to their role, including a physical kiosk system running on standard touchscreen hardware.",
    features: [
      { title: "Nine kiosk types", text: "Tailored check-in for school gate, front desk, reception, equipment room, weight room, classroom entry and more." },
      { title: "Behaviour management", text: "House points, demerits, work-offs, missed homework and Saturday detentions with automatic threshold triggers." },
      { title: "Attendance tracking", text: "Gate and classroom attendance, gym sign-ins and after-school club tracking." },
      { title: "Parent and student portals", text: "Real-time visibility with automated email and push notifications." },
      { title: "Screen-level permissions", text: "Admins control access down to individual screens per role." },
      { title: "Full audit logging", text: "Every action tracked with timestamps and IP addresses." }
    ],
    highlights: [
      { title: "Fast kiosk check-in", text: "A student checks in with a 5-digit ID in under five seconds, in a busy hallway." },
      { title: "No installation required", text: "Runs on any device in the browser, replacing legacy on-premise software." },
      { title: "Subscription billing", text: "Stripe and RevenueCat integrated for plan management." }
    ],
    gallery: [
      { src: CDN + "/sections/90dc33c9-169f-4ed2-8ae1-5b1e03117f39.webp", full: CDN + "/sections/90dc33c9-169f-4ed2-8ae1-5b1e03117f39.webp", alt: "Warwick Academy — admin dashboard" },
      { src: CDN + "/sections/04230c51-2485-4084-9e35-047dd20a609a.webp", full: CDN + "/sections/04230c51-2485-4084-9e35-047dd20a609a.webp", alt: "Warwick Academy — kiosk check-in interface" },
      { src: CDN + "/sections/82ac9e82-c46e-400a-85f9-dcef5eb09749.webp", full: CDN + "/sections/82ac9e82-c46e-400a-85f9-dcef5eb09749.webp", alt: "Warwick Academy — behaviour and reporting modules" }
    ],
    wide: true,
    links: {},
    stores: []
  },

  /* ------------------------------------------------------------------ */
  {
    id: "water-me-right",
    title: "Water Me Right",
    subtitle: "Luxury wellness & lifestyle storefront",
    description:
      "A fully custom Shopify storefront for artist Ashley Frank's wellness brand, selling premium alkaline water, a book series and wearable art under one story-driven experience.",
    categories: ["Web", "E-Commerce"],
    featured: false,
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",
      src: CDN + "/detail/84f67284-34fd-4a24-b426-813cdb891d19.webp",
      alt: "Water Me Right luxury wellness storefront"
    },
    tech: ["Shopify", "Liquid", "Custom Theme", "Payments", "Analytics"],
    overview:
      "Water Me Right is a lifestyle brand rooted in art, self-growth and premium wellness. The brand had a strong message but no digital presence, so the store had to feel like a luxury experience rather than another Shopify template — with three very different product categories (water, books, apparel) each carrying its own visual identity while staying cohesive.",
    features: [
      { title: "Fully custom Shopify theme", text: "Built from scratch rather than adapted from a template." },
      { title: "Story-driven design", text: "Bold typography and immersive visuals carrying the brand narrative." },
      { title: "Three-category navigation", text: "Smooth browsing across alkaline water, books and wearable art." },
      { title: "Secure checkout", text: "Payment integration wired into the custom storefront." },
      { title: "Mobile-first responsive", text: "Designed for small screens without losing visual impact." },
      { title: "Performance tuned", text: "Page speed optimised so the premium visuals stay fast." }
    ],
    gallery: [
      { src: CDN + "/sections/1eacb9bd-f08b-40d6-aa11-3f4f3ecfe8bf.webp", full: CDN + "/sections/1eacb9bd-f08b-40d6-aa11-3f4f3ecfe8bf.webp", alt: "Water Me Right — storefront home and brand story" },
      { src: CDN + "/sections/bce77650-9b5e-4e75-93fb-32029cdd1bf7.webp", full: CDN + "/sections/bce77650-9b5e-4e75-93fb-32029cdd1bf7.webp", alt: "Water Me Right — product category pages" },
      { src: CDN + "/sections/0a2d1e51-ac1c-4c3c-a2cb-d4c484bc2611.webp", full: CDN + "/sections/0a2d1e51-ac1c-4c3c-a2cb-d4c484bc2611.webp", alt: "Water Me Right — product detail and checkout" }
    ],
    wide: true,
    links: { live: "https://watermeright.com/" },
    stores: []
  }

  /* ==========================================================================
     TEMPLATE — copy this block, paste it above, and remove the comment markers.
     ==========================================================================
  ,{
    id: "my-new-project",
    title: "My New Project",
    subtitle: "One-line positioning statement",
    description: "One to three sentences describing what it is and who it's for.",
    categories: ["Mobile"],            // "Mobile" | "Web" | "Full Stack" | "Marketplace" | "Enterprise" | anything you like
    featured: false,                   // true = Featured badge, sorted to the top
    year: "2026",
    role: "React Native Developer",
    company: "CanDev Software Agency",
    cover: {
      type: "image",                   // or "phones" with a `shots` array of 3
      src: "assets/images/my-new-project/cover.jpg",
      alt: "Describe the image for screen readers"
    },
    tech: ["React Native", "TypeScript"],
    overview: "A longer paragraph for the detail view.",
    features: [
      { title: "Feature name", text: "What it does." }
    ],
    highlights: [],                    // optional technical highlights
    gallery: [
      {
        src:  "assets/images/my-new-project/shot-01.jpg",
        full: "assets/images/my-new-project/full/shot-01.png",
        alt:  "Describe the screen"
      }
    ],
    wide: false,                       // true for square/landscape screenshots
    links: { github: "", live: "" },   // omit or leave empty to hide the buttons
    stores: []                         // [{ name: "App Store", url: "https://..." }]
  }
  */
];

/* Expose for the renderer. Kept as a plain global so the site works when opened
   directly from the filesystem as well as when served over HTTP. */
window.PROJECTS = PROJECTS;
