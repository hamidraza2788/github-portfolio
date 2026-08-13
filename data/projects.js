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
   featured     true -> renders as a large, full-width card at the top of the grid
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

const PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    id: "jobpopper",
    title: "JobPopper",
    subtitle: "On-demand services marketplace",
    description:
      "A location-based marketplace that connects customers with nearby service workers in real time. Live on the App Store and Google Play.",
    categories: ["Mobile", "Marketplace"],
    featured: true,
    year: "2025",
    role: "React Native Developer",
    company: "My Digital Pixels",
    cover: {
      type: "image",
      src: "assets/images/jobpoper/auth_mockup.jpg",
      alt: "JobPopper mobile app sign-in screen shown on a phone"
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
      "JobPopper turns the gig-economy experience into something immediate and local. Customers post or browse jobs on a live map, service workers discover opportunities near them, and both sides stay in sync through push notifications and persisted offline state.",
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
        src: "assets/images/jobpoper/auth_mockup.jpg",
        full: "assets/images/jobpoper/full/auth_mockup.jpg",
        alt: "JobPopper sign-in screen with OTP, Google and Apple options"
      },
      {
        src: "assets/images/jobpoper/home_mockup.jpg",
        full: "assets/images/jobpoper/full/home_mockup.png",
        alt: "JobPopper home dashboard showing hot jobs and listed jobs"
      },
      {
        src: "assets/images/jobpoper/hotjobs_mockup.jpg",
        full: "assets/images/jobpoper/full/hotjobs_mockup.png",
        alt: "JobPopper hot jobs search results screen"
      },
      {
        src: "assets/images/jobpoper/detail_mockup.jpg",
        full: "assets/images/jobpoper/full/detail_mockup.png",
        alt: "JobPopper job detail screen"
      },
      {
        src: "assets/images/jobpoper/list_mockup.jpg",
        full: "assets/images/jobpoper/full/list_mockup.png",
        alt: "JobPopper listed jobs interface"
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
    featured: false,                   // true = large full-width card at the top
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
