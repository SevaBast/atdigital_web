import type { SiteContent } from "@/content/types";
import { enArticles } from "../articles/en";

// ═══════════════════════════════════════════════════════════════
// 🇬🇧  ENGLISH — Website content (without articles)
// ═══════════════════════════════════════════════════════════════
// Edit texts below and changes will be reflected on the website immediately.

export const en: SiteContent = {
  // ─── Navigation ──────────────────────────────────────────────
  navigation: {
    logo: "Digital Consulting",
    links: [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "Products", href: "#products" },
      { name: "References", href: "#references" },
      { name: "About us", href: "#about" },
      { name: "Academy", href: "/academia" },
    ],
  },

  // ─── Hero ────────────────────────────────────────────────────
  hero: {
    title: "Digital Consulting",
    subtitle: "Innovative solutions for modern industrial production",
    description: "We transform manufacturing processes through digitalization, advanced technologies and strategic consulting.",
    buttons: {
      services: "Our services",
      academia: "Academy",
    },
    features: [
      "Production digitalization",
      "3D scanning",
      "Industry 4.0",
      "Process optimization",
      "Smart Factory",
    ],
  },

  // ─── Partners ────────────────────────────────────────────────
  partners: {
    title: "Trusted by",
    logos: [
      { name: "AT Park", image: "/partners/atpark.png" },
      { name: "exe", image: "/partners/exe.png" },
      { name: "Flaton", image: "/partners/flaton.png" },
      { name: "Jungheinrich", image: "/partners/jungheinrich.png" },
      { name: "AT Crystals", image: "/partners/atcrystals.png" },
      { name: "EdgeCom", image: "/partners/edgecom.png" },
      { name: "University of Žilina", image: "/partners/uniza.png" },
    ],
  },

  // ─── Services ────────────────────────────────────────────────
  services: {
    title: "Our services",
    subtitle: "Comprehensive solutions for your digital transformation",
    categories: [
      {
        id: "digitalizacia",
        name: "Digitalization",
        services: [
          { name: "2D/3D digital documentation", icon: "FileText", description: "We deliver complete solutions from updating floor plans to their actual state, through technological layouts, to parametric 3D models. You get a reliable basis for engineering processes, investment plans and efficient change management.", benefits: ["Accurate data foundation", "Collision detection", "Change & layout management"] },
          { name: "3D scanning & digitalization", icon: "Scan", description: "Obtain a digital foundation for your innovation goals through laser scanning that eliminates inaccuracies when planning spatial changes.", benefits: ["abc"] },
          { name: "Visualization", icon: "Eye", description: "Present your investment plans in a virtual environment, simplifying approval processes and gaining a clear picture before the implementation phase.", benefits: ["text"] },
        ],
      },
      {
        id: "projektovanie",
        name: "Engineering",
        services: [
          { name: "Conceptual & detailed engineering", icon: "PenTool", description: "An expert view on conceptual solutions that optimize the performance of your system. Leverage our external support in finding performance improvement potentials and technical validation of your processes.", benefits: ["text"] },
          { name: "Feasibility studies", icon: "ClipboardCheck", description: "Use our external support to validate your plans and gain an objective view of the technical and economic feasibility of your innovation goals.", benefits: ["text"] },
          { name: "Production system", icon: "Factory", description: "Comprehensive technical solution and workplace design: detailed workstation design including equipment specifications, layout and utility connections for production requirements.", benefits: ["Key production parameter optimization", "Solution validation & KPI definition", "Capacity planning & scheduling", "Takt time & target OEE definition"] },
          { name: "Intralogistics", icon: "Truck", description: "We offer an expert perspective on modernizing in-plant logistics, from strategy design to dynamic process verification.", benefits: ["Production batch sizing & handling unit design", "Logistics process optimization & audit", "Logistics automation", "Logistics concept simulation & validation", "Logistics resource capacity planning", "JIT supply strategy design", "Digital logistics-production integration with RTLS system design & implementation"] },
          { name: "Warehouse management", icon: "Warehouse", description: "We offer an expert perspective on efficient warehouse management, from inventory optimization and processes to implementation of modern technologies and control mechanisms for maximum accuracy and performance.", benefits: ["Warehouse capacity dimensioning & calculation", "Warehouse dynamics simulation", "Warehouse process validation via workshops", "Warehouse expansion & development study"] },
        ],
      },
      {
        id: "optimalizacia-std",
        name: "Optimization & standardization",
        services: [
          { name: "Process balancing & takt optimization", icon: "Scale", description: "Optimal operation distribution on the line ensures even workstation utilization and eliminates bottlenecks to ensure smooth production flow.", benefits: ["text"] },
          { name: "Standardization & time studies", icon: "Ruler", description: "Defining exact time standards for new products and existing production. These data foundations enable subsequent process optimization or workstation robotization.", benefits: ["text"] },
          { name: "Ergonomic assessment", icon: "User", description: "We identify and eliminate risk factors in your employees' movement patterns, reducing fatigue, error rates, and improving long-term performance sustainability.", benefits: ["text"] },
          { name: "Data & Process Mining", icon: "Database", description: "Through in-depth analysis of digital footprints of your processes, we reveal the actual flow of production and logistics, identify deviations from the ideal state, and propose solutions based on real data.", benefits: ["text", "text", "text"] },
          { name: "Process efficiency study", icon: "TrendingUp", description: "We develop a comprehensive audit of your current operations that provides a clear list of improvement potentials with benefits for your productivity.", benefits: ["text", "text", "text"] },
        ],
      },
      {
        id: "rnd",
        name: "R&D",
        services: [
          { name: "Research project design & management", icon: "Lightbulb", description: "Get comprehensive coverage of innovation projects in digitalization and Smart Factory, from initial feasibility studies to methodology design and technical implementation of research tasks.", benefits: ["text", "text", "text"] },
          { name: "Innovation & research projects", icon: "Rocket", description: "Get a partner for developing methodologies and technical solutions for digital transformation that push the boundaries of your current production toward Smart Factory.", benefits: ["text", "text", "text"] },
          { name: "Custom industrial software development", icon: "Code", description: "We develop specific applications that solve unique challenges in manufacturing and logistics — from engineering configurators to process analysis tools.", benefits: ["text", "text", "text"] },
          { name: "Engineering know-how digitalization", icon: "Cpu", description: "We transform your internal expert knowledge into software algorithms, ensuring standardization and automation of complex decision-making tasks in your company.", benefits: ["text", "text", "text"] },
        ],
      },
    ],
  },

  // ─── Products ────────────────────────────────────────────────
  products: {
    title: "Our products",
    subtitle: "Innovative technologies for the modern enterprise",
    categories: [
      {
        id: "sw-skladove-hospodarstvo",
        name: "Warehouse Management SW",
        icon: "PackageSearch",
        media: { type: "youtube", src: "ZK-rNEhJIDs" },
        description: "Inventory management is a web application for comprehensive management and optimization of warehouse stocks with AI support, automatic forecasting and integration with external systems SQLite and Odoo. We offer you an intelligent tool for inventory management that analyzes warehouse status in real time, automatically classifies items, predicts future demand and suggests specific purchasing and optimization actions — all in one place.",
        features: ["Overview & KPI: Instant picture of warehouse health — shortages, surpluses, goal fulfillment", "ABC / XYZ Analysis: Automatic item classification by value and demand predictability", "Forecast & Trends: Future consumption prediction and seasonality/anomaly detection", "Inventory optimization: Optimal order quantity, safety stock and buffer level calculation", "Action list & Purchasing: Overview of items requiring immediate action with purchase recommendations", "Supplier evaluation: Supplier reliability and performance analysis", "Import & Export: Data loading from Excel, SQLite or Odoo; HTML report export", "AI decision assistant: Automatic action and decision recommendations for each item"],
      },
      {
        id: "sw-planovanie-vyroby",
        name: "Production Planning SW",
        icon: "CalendarClock",
        media: { type: "video", src: "/atdigital_web/reference/examplevideo.mp4" },
        description: "We offer you an application for comprehensive production order planning with MRP support and bill of materials (BOM) decomposition. The tool covers the entire cycle from material management to dispatch, using an optimized Gantt chart with multiple planning strategies to ensure maximum efficiency of your production.",
        features: ["Order planning: Automatic production scheduling considering deadlines and priorities", "Material management: Inventory, availability and material requirements overview", "Bill of Materials (BOM): Product structure — what and how much needs to be produced for each order", "Gantt chart: Visual overview of production schedule on machines over time", "Machine & workplace management: Capacities, utilization, maintenance and status of each machine", "Assembly tracking: Monitoring completion of individual components and orders", "Excel export: Easy sharing of plans and reports"],
      },
      {
        id: "sw-digital-twin",
        name: "Digital Twin",
        icon: "Copy",
        media: { type: "video", src: "/atdigital_web/reference/examplevideo.mp4" },
        description: "Digital Twin is a web application for creating an accurate digital replica of your physical operations — production lines, logistics flows, warehouse spaces and maintenance processes. The system synchronizes data from sensors, machines and enterprise systems into a live digital model that faithfully reflects actual operational status in real time. You gain full transparency, the ability to predict events and a tool for continuous process improvement — without affecting real infrastructure.",
        features: ["Facility digital replica: Precise virtual model of physical assets, processes and relationships updated in real time", "Live monitoring & Telemetry: Continuous data intake from sensors, PLC systems and IoT devices with instant status visualization", "Predictive analytics: Anomaly detection and early degradation identification based on historical and current behavioral patterns", "Simulation & What-if analyses: Testing process changes, capacity scenarios or failure states directly in the digital model without impact on real operations", "Logistics flow tracking: Visualization of material, component and shipment movement across the entire supply chain", "Performance indicators: Automatic OEE, availability, utilization and other KPI calculation for individual workstations, lines and entire plants", "System integration: Native connection with ERP, MES, SCADA, SQLite and Odoo; bidirectional data synchronization", "AI recommendation module: Intelligent optimization suggestions derived from analysis of deviations between the digital model and reality"],
      },
      {
        id: "smart-sensor-systems",
        name: "Smart sensor systems",
        icon: "Radio",
        media: { type: "image", src: "/atdigital_web/picture/products/example.png" },
        description: "We implement intelligent monitoring systems for real-time data collection and evaluation. We integrate advanced sensors for vibration diagnostics, camera inspection and localization, ensuring a predictive approach to operations management.",
        features: ["Machine & equipment vibration diagnostics", "Intelligent camera systems", "Real-time localization systems (RTLS)", "Sensor networks for data collection", "Status monitoring, visualization and simulation"],
      },
      {
        id: "vr-ar",
        name: "VR & AR",
        icon: "Glasses",
        media: { type: "image", src: "/atdigital_web/picture/products/example.png" },
        description: "Comprehensive solutions in virtual and augmented reality that transform traditional procedures into interactive experiences. From educational simulators to virtual showrooms.",
        features: ["Interactive training & simulators", "Virtual laboratories & museums", "Showrooms & presentation rooms", "Visual maintenance & assembly support", "Digital galleries with interactive content"],
      },
      {
        id: "plugflow",
        name: "PlugFlow",
        icon: "Workflow",
        media: { type: "video", src: "/atdigital_web/reference/examplevideo.mp4" },
        description: "PlugFlow is a simulation game designed for practical process thinking and smart industry principles training. We offer the product as an educational tool for training centers, educational institutions, as well as professional training and workshops focused on flow optimization in corporate practice.",
        features: ["Real logistics flow simulation", "Decision-making training", "Understanding lean manufacturing principles", "Testing optimization scenarios in practice", "Educational tool for high schools & universities", "Practical teaching of optimization principles", "Professional training & workshops for companies"],
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
    subtitle: "Successfully completed projects",
    categories: [
      {
        id: "projektovanie-vyrobnych-systemov",
        name: "Production systems design",
        projects: [
          {
            name: "Assembly line design",
            description: "Complete design and implementation of an assembly line for automotive components with Industry 4.0 technology.",
            highlights: ["Productivity increase by 32%", "Production error reduction by 45%", "Project area 15,000 m²"],
          },
          {
            name: "Production process robotization",
            description: "Deployment of collaborative robots and visual inspection on an assembly line for brake system production.",
            highlights: ["6 collaborative robots", "100% visual inspection", "Takt time reduced by 28%"],
          },
        ],
      },
      {
        id: "skladove-hospodarstvo",
        name: "Warehouse management",
        projects: [
          {
            name: "Warehouse & logistics optimization",
            description: "Redesign of warehouse processes with WMS system implementation and automated warehouse solutions.",
            highlights: ["Warehouse capacity +60%", "Order fulfillment time -55%", "Inventory accuracy 99.5%"],
          },
          {
            name: "Warehouse system automation",
            description: "Implementation of an automated storage and retrieval system with integration to existing ERP.",
            highlights: ["Capacity 5,000 pallets", "Throughput +80%", "ROI in 24 months"],
          },
        ],
      },
      {
        id: "navrh-logistickeho-konceptu",
        name: "Logistics concept design",
        projects: [
          {
            name: "AGV system for internal logistics",
            description: "Implementation of an autonomous vehicle fleet for production line supply with a central control system.",
            highlights: ["12 AGV vehicles", "Supplying 8 lines", "Manual transport elimination"],
          },
          {
            name: "Material flow design",
            description: "Comprehensive material flow design from raw material intake to finished product dispatch.",
            highlights: ["Transport distance reduction by 40%", "Bottleneck elimination", "Cost per m² -25%"],
          },
        ],
      },
      {
        id: "zlepsenie-procesu-vyroby",
        name: "Production process improvement",
        projects: [
          {
            name: "Press shop digital twin",
            description: "Creation of a digital twin of the pressing process with real-time monitoring and predictive maintenance.",
            highlights: ["24/7 real-time monitoring", "Predictive maintenance", "OEE increased to 89%"],
          },
          {
            name: "Lean manufacturing transformation",
            description: "Implementation of lean manufacturing principles to eliminate waste and increase process efficiency.",
            highlights: ["Energy savings 18%", "OEE increase by 15%", "Downtime reduction by 35%"],
          },
        ],
      },
      {
        id: "laserove-skenovanie",
        name: "Laser scanning",
        projects: [
          {
            name: "3D production hall scanning",
            description: "Complete laser surveying of production spaces for digital model creation and layout change planning.",
            highlights: ["Accuracy ±2 mm", "Area 25,000 m²", "Point cloud + BIM model"],
          },
        ],
      },
      {
        id: "planovanie-vyroby",
        name: "Production planning",
        projects: [
          {
            name: "APS system implementation",
            description: "Deployment of an advanced planning system for production schedule and capacity optimization.",
            highlights: ["Deadline adherence +25%", "Machine utilization +18%", "ERP integration"],
          },
          {
            name: "Production plan visualization",
            description: "Interactive Gantt chart with real-time production status updates and automatic rescheduling.",
            highlights: ["Real-time Gantt", "Automatic rescheduling", "Mobile access"],
          },
        ],
      },
    ],
  },

  // ─── About us ────────────────────────────────────────────────
  about: {
    title: "About us",
    subtitle: "Your partner for digital transformation",
    contactInfoTitle: "Contact Information",
    contact: {
      company: "Digital Consulting s.r.o.",
      address: "Technologická 123, 841 04 Bratislava",
      phone: "+421 2 1234 5678",
      email: "emailexample@gmail.com",
      ico: "12345678",
      dic: "2023456789",
    },
    form: {
      title: "Contact us",
      fields: {
        name: "Full name",
        email: "E-mail",
        phone: "Phone",
        company: "Company",
        message: "Message",
      },
      button: "Send message",
      sending: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message. Please try again.",
      captchaLabel: "Security question",
      captchaError: "Incorrect answer to security question",
    },
    mapCenter: {
      lat: 49.1987816,
      lng: 18.7698794,
    },
  },

  // ─── Academy ─────────────────────────────────────────────────
  academia: {
    title: "Academy",
    subtitle: "Expert articles and insights from industrial practice",
    searchPlaceholder: "Search articles...",
    filterByTags: "Filter by tags",
    allTags: "All tags",
    readingTime: "min read",
    downloadPdf: "Download PDF",
    articles: enArticles,
  },

  // ─── Footer ──────────────────────────────────────────────────
  footer: {
    copyright: "© 2024 Digital Consulting. All rights reserved.",
    links: {
      privacy: "Privacy policy",
      terms: "Terms & conditions",
    },
  },
};
