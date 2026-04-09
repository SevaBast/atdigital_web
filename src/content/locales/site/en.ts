import type { SiteContent } from "@/content/types";
import { enArticles } from "../articles/en";

// ═══════════════════════════════════════════════════════════════
// 🇬🇧  ENGLISH — Site Content (excluding articles)
// ═══════════════════════════════════════════════════════════════
// Simply edit the texts below and the changes will be reflected on the site immediately.

export const en: SiteContent = {
  // ─── Navigation ──────────────────────────────────────────────
  navigation: {
    logo: "Digital Transformation",
    links: [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "Products", href: "#products" },
      { name: "References", href: "#references" },
      { name: "About Us", href: "#about" },
      { name: "Academy", href: "/academia" },
    ],
  },

  // ─── Hero ────────────────────────────────────────────────────
  hero: {
    title: "Digital Transformation",
    subtitle: "Innovative Solutions for Modern Industrial Manufacturing",
    description: "AT Digital is a technology company focused on research and innovation in the digitalisation of manufacturing and logistics processes, leveraging advanced digital enterprise technologies.",
    atparkText: "We are part of",
    atparkLink: "ATPark",
    buttons: {
      services: "Our Services",
      academia: "Academy",
    },
    features: [
      "Manufacturing Digitalisation",
      "3D Scanning",
      "Production Engineering",
      "Logistics Engineering",
      "Process Optimisation",
      "Smart Factory",
      "Simulation Games",
      "Software Development",
    ],
  },

  // ─── Partners ────────────────────────────────────────────────
  partners: {
    title: "Trusted By",
    logos: [
      { name: "AT Park", image: "/partners/atpark.webp" },
      { name: "exe", image: "/partners/exe.webp" },
      { name: "Flaton", image: "/partners/flaton.webp" },
      { name: "Jungheinrich", image: "/partners/jungheinrich.webp" },
      { name: "AT Crystals", image: "/partners/atcrystals.webp" },
      { name: "Datacquaint", image: "/partners/datacquaint.webp" },
      { name: "University of Zilina", image: "/partners/uniza.webp" },
      { name: "Bizlink", image: "/partners/bizlink.webp" },
      { name: "Deftech", image: "/partners/deftech.webp" },
      { name: "m2m", image: "/partners/m2m.webp" },
      { name: "Motherson", image: "/partners/motherson.webp" },
      { name: "Rosero", image: "/partners/rosero.webp" },
      { name: "SSI Schafer", image: "/partners/schafer.webp" },
      { name: "Schafer Menk", image: "/partners/sm.webp" },
      { name: "Tatravagonka", image: "/partners/tatravagonka.webp" },
      { name: "Tuke", image: "/partners/tuke.webp" },
      { name: "Tomas Bata University in Zlin", image: "/partners/bata.webp" },
      { name: "Witte", image: "/partners/witte.webp" },
      { name: "26HOUSE", image: "/partners/26house.webp" },
      { name: "DATACQUAINT", image: "/partners/datacquaint.webp" },
    ],
  },

  // ─── Services ────────────────────────────────────────────────
  services: {
    title: "Our Services",
    subtitle: "Comprehensive Solutions for Your Digital Transformation",
    categories: [
      {
        id: "digitalisation",
        name: "Digitalisation",
        services: [
          { name: "2D/3D Digital Documentation", icon: "FileText", description: "We deliver end-to-end solutions — from updating floor plans to reflect the actual state of your facility, through creating technology layouts, to building parametric 3D models. The result is a reliable foundation for engineering processes, investment planning and efficient change management.", benefits: ["Accurate data foundation", "Collision detection", "Change management and production layout control"] },
          { name: "Visualisation", icon: "Eye", description: "Present your investment plans in a virtual environment to speed up approval processes and gain a clear picture before moving into the implementation phase.", benefits: ["Visualisation of future operations and technology systems", "Marketing support for investment projects"] },
          { name: "3D Scanning and Digitalisation", icon: "Scan", description: "Build a solid digital foundation for your investment plans through laser scanning, eliminating inaccuracies when planning facility changes.", benefits: ["Precise as-built documentation", "Foundation for 3D production engineering", "Collision elimination before implementation", "As-built documentation of the facility", "Reduced measurement time and minimised production downtime", "Basis for creating a digital twin"] },
        ],
      },
      {
        id: "engineering",
        name: "Engineering",
        services: [
          { name: "In-Plant Logistics", icon: "Truck", description: "We provide expert insight into modernising your in-plant logistics — from strategy design through to dynamic process verification.", benefits: ["Transport batch and handling unit design", "Logistics process audit followed by optimisation", "Automated logistics concept design", "Logistics capacity simulation"] },
          { name: "Warehouse Management", icon: "Warehouse", description: "Gain efficient warehouse management — from stock and process optimisation to the implementation of modern technologies.", benefits: ["Capacity dimensioning and optimal space utilisation calculation", "Simulation to verify warehouse system performance", "Warehouse automation design and technology selection", "Expansion and development studies for warehouse areas and zones"] },
          { name: "Production Systems", icon: "Factory", description: "A comprehensive technical solution and workstation design, including detailed equipment specifications, installation layout and utility connections tailored to your production requirements.", benefits: ["Optimisation of key production parameters", "Solution validation and KPI definition", "Capacity planning and scheduling", "Takt time definition and target OEE setting"] },
          { name: "Feasibility Studies", icon: "ClipboardCheck", description: "Leverage our external support to validate your plans and gain an objective view of the technical and economic viability of your innovation initiatives.", benefits: ["New product integration into production", "Process automation and robotisation", "Production capacity expansion and development"] },
        ],
      },
      {
        id: "optimisation-std",
        name: "Optimisation and Standardisation",
        services: [
          { name: "Process Balancing and Takt Time Setting", icon: "Scale", description: "Optimal distribution of operations across the line ensures even workstation utilisation and eliminates bottlenecks, keeping production flow smooth and uninterrupted.", benefits: ["Bottleneck elimination", "Workstation balancing for even utilisation", "Smooth production flow without unnecessary idle time and waiting"] },
          { name: "Data and Process Mining", icon: "Database", description: "Through in-depth analysis of digital information about your processes, we uncover how production and logistics actually operate, identify deviations from the ideal state and propose solutions grounded in real data.", benefits: ["Detection of deviations from the ideal state", "Clear insight into actual process performance", "Identification of hidden defects and inefficient steps in the system"] },
          { name: "Ergonomic Assessment", icon: "User", description: "We identify and eliminate workplace risks, reducing employee fatigue and error rates while ensuring workstation safety in line with legislation.", benefits: ["Risk elimination and correction of hazardous movements", "Workstation balancing for even utilisation", "Smooth production flow without unnecessary idle time and waiting"] },
          { name: "Time Studies and Standardisation", icon: "Ruler", description: "Defining precise time standards for both new products and existing production. These data-driven baselines enable subsequent workstation optimisation or robotisation.", benefits: ["Standard definition", "Improved planning", "Time standard development"] },
        ],
      },
      {
        id: "rnd",
        name: "R&D",
        services: [
          { name: "Research Project Design and Development", icon: "Lightbulb", description: "Get comprehensive coverage of your innovation projects in digitalisation and Smart Factory — from initial feasibility studies through methodology design to the technical execution of research tasks.", benefits: ["Technical execution of applied research tasks", "Feasibility studies to verify innovation deployment potential", "Methodology development for digital transformation and Smart Factory"] },
          { name: "Engineering Know-How Digitalisation", icon: "Cpu", description: "We transform your internal expert knowledge into software algorithms, ensuring standardisation and automation of complex decision-making tasks across your organisation.", benefits: ["Task and decision process automation", "Work standardisation and human error elimination", "Conversion of expertise into intelligent algorithms"] },
          { name: "Innovation and Research Project Delivery", icon: "Rocket", description: "Gain a partner for developing methodologies and technical solutions for digital transformation that push the boundaries of your current production towards a Smart Factory.", benefits: ["Technical solutions for a higher level of digitalisation", "Implementation of R&D findings into production", "Methodology design for Smart Factory development"] },
          { name: "Custom Industrial Software Development", icon: "Code", description: "We develop specialised applications that address unique challenges in manufacturing and logistics — from engineering configurators to process analysis tools.", benefits: ["Configurator development for process automation", "Analytical tools for in-depth data processing", "Bespoke software based on technical specifications"] },
        ],
      },
    ],
  },

  // ─── Products ────────────────────────────────────────────────
  products: {
    title: "Our Products",
    subtitle: "Innovative Technologies for the Modern Enterprise",
    categories: [
      {
        id: "sw-warehouse-management",
        name: "Warehouse Management Software",
        icon: "PackageSearch",
        description: "Inventory Management is a web application for comprehensive stock management and optimisation, powered by AI, automatic forecasting and integration with external systems such as SQLite, Odoo and others. We offer an intelligent inventory management tool that analyses your warehouse status in real time, automatically classifies stock items, forecasts future demand and proposes specific purchasing and optimisation actions — all in one place.",
        features: ["Instant insight into your warehouse performance", "Automatic item classification by value and forecasted demand", "Future consumption forecasting and seasonality detection", "Calculation of optimal order quantities, safety stock and reorder points", "Overview of items requiring immediate ordering with purchasing recommendations", "Real-time tracking of individual components and orders", "Easy sharing of plans and reports"],
      },
      {
        id: "sw-production-planning",
        name: "Production Planning Software",
        icon: "CalendarClock",
        description: "We offer a comprehensive production order planning application with MRP support and bill of materials breakdown. The tool covers the entire cycle from material management through to dispatch and uses an optimised Gantt chart with multiple planning strategies to maximise your production efficiency.",
        features: ["Order planning: Automatic production scheduling based on deadlines and priorities", "Material management: Overview of stock levels, availability and material requirements", "Bill of Materials (BOM): Product structure — what and how much needs to be produced for each order", "Gantt chart: Visual overview of the production schedule across machines over time", "Machine and workstation management: Capacities, utilisation, maintenance and status of each machine", "Completion tracking: Monitoring the readiness of individual components and orders", "Excel export: Easy sharing of plans and reports"],
      },
      {
        id: "sw-digital-twin",
        name: "Digital Twin",
        icon: "Copy",
        description: "Digital Twin is a web application for creating a precise digital replica of your physical operations — production lines, logistics flows, warehouse areas and maintenance processes. The system synchronises data from sensors, machines and enterprise systems into a live digital model that faithfully mirrors the actual state of your operations in real time. With a Digital Twin, you gain full transparency, the ability to anticipate events and a tool for continuous process improvement — without any impact on your real infrastructure.",
        features: ["Accurate virtual model of physical assets, processes and their relationships, updated in real time", "Continuous data collection from sensors, PLC systems and IoT devices with instant status visualisation", "Anomaly detection and early identification of equipment failures based on historical and current behaviour patterns", "Testing of changes, scenarios or failure conditions directly in the digital model with no impact on real operations", "Visualisation of material, component and shipment movement across the entire supply chain", "Performance indicators and statistics"],
      },
      {
        id: "smart-sensor-systems",
        name: "Smart Sensor Systems",
        icon: "Radio",
        description: "We offer intelligent monitoring systems for real-time data collection and analysis. We integrate advanced sensors for vibration diagnostics, camera inspection and localisation, enabling a predictive approach to operations management.",
        features: ["Machine and equipment vibration diagnostics", "Intelligent camera systems", "Real-Time Location Systems (RTLS)", "Sensor networks for data collection", "Process status monitoring, visualisation and simulation"],
      },
      {
        id: "vr-ar",
        name: "VR & AR",
        icon: "Glasses",
        description: "Comprehensive virtual and augmented reality solutions that transform traditional workflows into interactive experiences. We offer solutions ranging from training simulators to virtual showrooms.",
        features: ["Interactive training and simulators", "Virtual laboratories and museums", "Showrooms and presentation rooms", "Visual support for maintenance and assembly", "Digital galleries with interactive content"],
      },
      {
        id: "plugflow",
        name: "PlugFlow",
        icon: "Workflow",
        description: "PlugFlow is a simulation game designed for hands-on training in process thinking and smart industry principles. We offer this product as an educational tool for training centres and educational institutions, as well as a format for professional workshops focused on flow optimisation in business practice.",
        features: ["Simulation of real logistics flows", "Decision-making training", "Understanding lean manufacturing principles", "Testing optimisation scenarios in practice", "Educational tool for secondary schools and universities", "Practical teaching of optimisation principles", "Professional training and workshops for companies"],
      },
    ],
  },

  // ─── LinkedIn Feed ──────────────────────────────────────────
  linkedInFeed: {
    title: "Follow Us",
    subtitle: "Latest posts from our LinkedIn profile",
  },

  // ─── References ──────────────────────────────────────────────
  references: {
    title: "References",
    subtitle: "Successfully Delivered Projects",
    categories: [
      {
        id: "production-system-engineering",
        name: "Production System Engineering",
        projects: [
          {
            name: "Plant Transformation for a New Product Line within the Tatravagonka Group",
            description: "Design of a comprehensive production and logistics concept for integrating a new type of manufacturing into existing facilities.",
            highlights: ["Facility digitalisation through laser scanning to eliminate collisions during technology installation", "Dynamic capacity verification for precise calculation of required production and logistics equipment", "Investment optimisation through expert comparison of manual and automated production variants", "Guaranteed annual system output achieved through precisely designed production sequences", "Complete implementation documentation in the form of a 3D walkthrough and implementation schedule"],
          },
          {
            name: "Detailed Production Engineering of Defence Structures",
            description: "Spatial layout design for a new facility and detailed workstation engineering for the defence segment. Capacity calculations and data-driven process validation defined the precise placement of technology nodes in a parametric layout, resulting in a technical specification for technology installation that accounts for the specific requirements and safety standards of specialised manufacturing.",
            highlights: ["Optimal layout design with technology installation, storage zones and logistics routes", "Capacity dimensioning of production resources and personnel", "Quantification of inter-operational areas for a smooth production cycle without bottlenecks", "Development of a technical master plan for the new facility as the final implementation document"],
          },
          {
            name: "Master Plan Layout Design for a Mechanical Engineering Plant",
            description: "The primary objective of the project was to design an optimal spatial layout for the manufacturing plant to increase the level of automation and production efficiency.",
            highlights: ["Production standard optimisation and design and simulation of phased technology investments", "Maximum optimisation of capital expenditure", "Solution variants accounting for capacity requirements and degree of automation", "Capacity parametrisation for product mix planning"],
          },
        ],
      },
      {
        id: "warehouse-management",
        name: "Warehouse Management",
        projects: [
          {
            name: "SSI Schäfer",
            description: "Design of an optimal warehouse layout using Logimat systems.",
            highlights: ["Maximum space utilisation and complete elimination of stock fragmentation in the new distribution centre", "Lean Supply logistics loop configuration to increase logistics efficiency", "Logistics simulation to verify throughput and eliminate bottlenecks", "Operating cost (OPEX) minimisation through an optimised logistics mix", "Reduced dependence on manual labour through targeted automation with Logimat systems"],
          },
        ],
      },
      {
        id: "logistics-concept-design",
        name: "Logistics Concept Design",
        projects: [
          {
            name: "Layout Design with an Optimal Line Supply Logistics System in Automotive",
            description: "Design of an optimal layout and logistics concept for the relocation of assembly lines.",
            highlights: ["Maximum space utilisation and complete elimination of stock fragmentation in the new plant", "Lean Supply logistics loop configuration to increase flow stability", "Logistics simulation to verify throughput and eliminate bottlenecks"],
          },
          {
            name: "Storage System Design and Warehouse Capacity Dimensioning",
            description: "Design of an efficient big-bag storage system with properly dimensioned warehouse capacity, taking into account available layout options.",
            highlights: ["Storage system solution design", "Definition of big-bag stacking options", "Capacity calculation for storage based on input parameters", "Pallet placement mapping within the facility", "Storage area calculation for the defined quantity", "Pallet placement mapping within the facility", "Aisle design based on the type of handling equipment", "Stock level simulation based on defined receiving and dispatching frequencies"],
          },
        ],
      },
      {
        id: "production-process-improvement",
        name: "Production Process Improvement",
        projects: [
          {
            name: "Process Optimisation at UW Frame Production Workstations at Schäfer Menk Prague",
            description: "The primary objective of the project was to optimise work operations and subsequently configure a robotic workstation.",
            highlights: ["Production time optimisation for individual operations", "Human–robot process configuration and takt time setting", "Technology process balancing", "Definition of robotic workstation utilisation rate", "Reduction of production lead time"],
          },
          {
            name: "Layout Optimisation and Line Supply Logistics",
            description: "The primary objective of the project was to design an optimal layout and logistics concept for the relocation of 64 assembly lines into the new premises of an automotive company.",
            highlights: ["Analysis of the current system and identification of bottlenecks", "Layout solution designed for the relocation of assembly workstations", "Lean Supply concept defined with designed logistics loops", "Capacity requirements for equipment and personnel defined based on target productivity", "Recommended level of automation and optimal mix of manual and robotic logistics"],
          },
        ],
      },
      {
        id: "laser-scanning",
        name: "Laser Scanning",
        projects: [
          {
            name: "As-Built Survey of Production Facilities at EUROMILK",
            description: "As-built survey of selected production facilities at EUROMILK using 3D laser scanning technology.",
            highlights: ["3D laser scanning of selected production areas as specified", "Data export for TruView viewer (LGS format)", "Data export option for AutoCAD (RCP format)", "Cloud-based data sharing"],
          },
        ],
      },
      {
        id: "production-planning",
        name: "Production Planning",
        projects: [
          {
            name: "Bizlink",
            description: "Design of a production scheduling support system.",
            highlights: ["Familiarisation with the production line and scheduling rules", "Algorithm definition for the scheduling tool", "Logic design and implementation", "User interface development", "Integration testing and debugging", "Documentation and training"],
          },
        ],
      },
    ],
  },

  // ─── About Us ────────────────────────────────────────────────
  about: {
    title: "About Us",
    subtitle: "Your Partner for Digital Transformation",
    contactInfoTitle: "Contact Information",
    contact: {
      company: "AT Digital, s.r.o.",
      address: "Rosinská cesta 9, 010 08 Žilina",
      phone: "+421 918 111 990",
      email: "atdigital@atdigital.sk",
      ico: "55742203",
      dic: "2122072381",
    },
    form: {
      title: "Contact Us",
      fields: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
      },
      button: "Send Message",
      sending: "Sending...",
      successMessage: "Your message has been sent successfully!",
      errorMessage: "Failed to send your message. Please try again.",
      captchaLabel: "Security Question",
      captchaError: "Incorrect answer to the security question",
    },
    mapCenter: {
      lat: 49.1987816,
      lng: 18.7698794,
    },
  },

  // ─── Academy ─────────────────────────────────────────────────
  academia: {
    title: "Academy",
    subtitle: "Expert Articles and Insights from Industrial Practice",
    searchPlaceholder: "Search articles...",
    filterByTags: "Filter by tags",
    allTags: "All tags",
    readingTime: "min read",
    downloadPdf: "Download PDF",
    articles: enArticles,
  },

  // ─── Footer ──────────────────────────────────────────────────
  footer: {
    copyright: "© 2026 ATDigital. All rights reserved.",
    createdBy: {
      text: "Created by",
      name: "Vsevolod Bastiuchenko",
      url: "https://www.linkedin.com/in/vsevolod-bastiuchenko-203a31196/",
    },
    links: {
      privacy: "",
      terms: "",
    },
  },
};