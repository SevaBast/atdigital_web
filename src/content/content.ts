// All website content - easily editable
export const content = {
  navigation: {
    logo: "Digital Consulting",
    links: [
      { name: "Domov", href: "#home" },
      { name: "Služby", href: "#services" },
      { name: "Produkty", href: "#products" },
      { name: "Referencie", href: "#references" },
      { name: "O nás", href: "#about" },
      { name: "Akadémia", href: "/academia" },
    ],
  },

  hero: {
    title: "Digital Consulting",
    subtitle: "Inovatívne riešenia pre modernú priemyselnú výrobu",
    description: "Transformujeme výrobné procesy pomocou digitalizácie, pokročilých technológií a strategického poradenstva.",
    buttons: {
      services: "Naše služby",
      academia: "Akadémia",
    },
  },

  partners: {
    title: "Dôverujú nám",
    logos: [
      "Siemens", "ABB", "Volkswagen", "Bosch", "BMW", 
      "Samsung", "Microsoft", "SAP", "Oracle", "IBM"
    ],
  },

  services: {
    title: "Naše služby",
    subtitle: "Komplexné riešenia pre vašu digitálnu transformáciu",
    categories: [
      {
        id: "digitalizacia",
        name: "Digitalizácia",
        services: [
          {
            name: "Digital Twin",
            description: "Vytvorenie digitálneho dvojčaťa vašich výrobných procesov pre optimalizáciu a simuláciu.",
            benefits: ["Zníženie nákladov o 20-30%", "Predikcia problémov", "Optimalizácia procesov"]
          },
          {
            name: "IoT integrácia",
            description: "Prepojenie strojov a zariadení pre real-time monitoring a kontrolu výroby.",
            benefits: ["Real-time dáta", "Preventívna údržba", "Zvýšená efektivita"]
          },
          {
            name: "Industry 4.0 Consulting",
            description: "Strategické poradenstvo pre prechod na smart factory koncept.",
            benefits: ["Roadmapa digitalizácie", "ROI analýza", "Implementačný plán"]
          }
        ]
      },
      {
        id: "koncepcne",
        name: "Koncepčné projektovanie",
        services: [
          {
            name: "Layout planning",
            description: "Optimálne rozmiestnenie výrobných liniek a logistických tokov.",
            benefits: ["Efektívne využitie priestoru", "Optimalizované toky", "Flexibilita"]
          },
          {
            name: "Process design",
            description: "Návrh a optimalizácia výrobných procesov pre maximálnu efektivitu.",
            benefits: ["Lean production", "Waste reduction", "Štandardizácia"]
          },
          {
            name: "Feasibility studies",
            description: "Komplexná analýza realizovateľnosti investičných projektov.",
            benefits: ["Rizikové hodnotenie", "Finančná analýza", "Technická realizovateľnosť"]
          }
        ]
      },
      {
        id: "detailne",
        name: "Detailné projektovanie",
        services: [
          {
            name: "3D modelovanie",
            description: "Detailné 3D modely výrobných zariadení a systémov.",
            benefits: ["Vizualizácia", "Clash detection", "Presná dokumentácia"]
          },
          {
            name: "Technická dokumentácia",
            description: "Kompletná výrobná a montážna dokumentácia pre realizáciu.",
            benefits: ["Štandardizované výstupy", "BIM integrácia", "As-built dokumentácia"]
          },
          {
            name: "Supplier management",
            description: "Riadenie dodávateľov a koordinácia dodávok technológií.",
            benefits: ["Vendor evaluation", "Quality control", "Termínové riadenie"]
          }
        ]
      },
      {
        id: "optimalizacia",
        name: "Optimalizácia",
        services: [
          {
            name: "OEE improvement",
            description: "Zvyšovanie celkovej efektivity zariadení (Overall Equipment Effectiveness).",
            benefits: ["Merateľné výsledky", "Continuous improvement", "KPI tracking"]
          },
          {
            name: "Energy efficiency",
            description: "Optimalizácia energetickej náročnosti výrobných procesov.",
            benefits: ["Úspora energií", "ESG compliance", "Carbon footprint reduction"]
          },
          {
            name: "Lean Six Sigma",
            description: "Implementácia metód Lean a Six Sigma pre eliminá­ciu plytvania.",
            benefits: ["Zníženie variability", "Process excellence", "Kultúra zlepšovania"]
          }
        ]
      }
    ]
  },

  products: {
    title: "Naše produkty",
    subtitle: "Inovatívne technológie pre modernú výrobu",
    categories: [
      {
        id: "vr-ar",
        name: "Virtuálna a rozšírená realita",
        description: "Využitie VR/AR technológií pre školenia, údržbu a vizualizáciu výrobných procesov. Immersívne prostredie pre návrh a testovanie výrobných liniek pred ich fyzickou realizáciou.",
        features: ["Virtual prototyping", "Remote assistance", "Training simulácie", "3D vizualizácia"]
      },
      {
        id: "smart-sensors",
        name: "Smart senzorické systémy",
        description: "Inteligentné senzory pre monitoring stavu zariadení, prediktívnu údržbu a optimalizáciu výrobných procesov. IoT platforma pre zber a analýzu dát v reálnom čase.",
        features: ["Condition monitoring", "Prediktívna údržba", "Real-time analytics", "Cloud integrácia"]
      },
      {
        id: "konfigurator",
        name: "Konfigurátor výrobných systémov",
        description: "Interaktívny nástroj pre návrh a konfiguráciu výrobných liniek a systémov. Automatizovaná tvorba cenových ponúk a technickej dokumentácie.",
        features: ["3D konfigurácia", "Automatická kalkulácia", "Export dokumentácie", "CAD integrácia"]
      },
      {
        id: "infinity-hub",
        name: "Infinity HUB",
        description: "Centrálna platforma pre riadenie všetkých aspektov smart factory. Dashboard pre monitoring KPI, riadenie výroby a analytiku. Integrácia s ERP, MES a ďalšími systémami.",
        features: ["Unified dashboard", "Real-time KPI", "Advanced analytics", "System integrácia"]
      }
    ]
  },

  references: {
    title: "Referencie",
    subtitle: "Úspešne realizované projekty",
    projects: [
      {
        id: "automotive-plant",
        name: "Automotive výrobný závod",
        description: "Kompletná digitalizácia výrobnej linky pre automotive komponentov s implementáciou Industry 4.0 technológií.",
        metrics: [
          { label: "Zvýšenie produktivity", value: "32%" },
          { label: "Zníženie výrobných chýb", value: "45%" },
          { label: "ROI dosiahnuté za", value: "18 mesiacov" },
          { label: "Plocha projektu", value: "15,000 m²" }
        ]
      },
      {
        id: "electronics-assembly",
        name: "Elektronická montážna linka",
        description: "Návrh a realizácia flexibilnej montážnej linky pre elektroniku s integrovanými AGV systémami a robotizáciou.",
        metrics: [
          { label: "Kapacita linky", value: "2M ks/rok" },
          { label: "Flexibilita produktov", value: "15 variant" },
          { label: "Automatizácia", value: "85%" },
          { label: "Time to market", value: "-40%" }
        ]
      },
      {
        id: "warehouse-optimization",
        name: "Optimalizácia skladu a logistiky",
        description: "Redesign skladových procesov s implementáciou WMS systému a automatizovaných skladových riešení.",
        metrics: [
          { label: "Skladová kapacita", value: "+60%" },
          { label: "Čas vybavenia objednávky", value: "-55%" },
          { label: "Presnosť zásob", value: "99.5%" },
          { label: "Náklady na m²", value: "-25%" }
        ]
      }
    ]
  },

  about: {
    title: "O nás",
    subtitle: "Váš partner pre digitálnu transformáciu",
    contact: {
      company: "Digital Consulting s.r.o.",
      address: "Technologická 123, 841 04 Bratislava",
      phone: "+421 2 1234 5678",
      email: "emailexample@gmail.com",
      ico: "12345678",
      dic: "2023456789"
    },
    form: {
      title: "Kontaktujte nás",
      fields: {
        name: "Meno a priezvisko",
        email: "E-mail",
        phone: "Telefón",
        company: "Spoločnosť",
        message: "Správa"
      },
      button: "Odoslať správu"
    },
    mapCenter: {
      lat: 48.1486,
      lng: 17.1077
    }
  },

  academia: {
    title: "Akadémia",
    subtitle: "Odborné články a poznatky z priemyselnej praxe",
    searchPlaceholder: "Vyhľadať články...",
    filterByTags: "Filtrovať podľa tagov",
    allTags: "Všetky tagy",
    readingTime: "min čítania",
    downloadPdf: "Stiahnuť PDF",
    articles: [
      {
        id: "industry-40-basics",
        title: "Úvod do Industry 4.0",
        description: "Základné princípy štvrtej priemyselnej revolúcie a jej dopad na modernú výrobu. Prehľad kľúčových technológií a prínosy digitalizácie.",
        author: "Ing. Peter Novák",
        date: "2024-01-15",
        readingTime: 8,
        tags: ["Industry 4.0", "Digitalizácia", "IoT"],
        pdfUrl: null
      },
      {
        id: "lean-manufacturing",
        title: "Lean Manufacturing v praxi",
        description: "Praktická implementácia Lean metodológií vo výrobnom prostredí. Prípadové štúdie a merateľné výsledky z reálnych projektov.",
        author: "Ing. Jana Kováčová, PhD.",
        date: "2024-01-20",
        readingTime: 12,
        tags: ["Lean", "Optimalizácia", "Process excellence"],
        pdfUrl: "https://drive.google.com/example1"
      },
      {
        id: "predictive-maintenance",
        title: "Prediktívna údržba pomocou AI",
        description: "Využitie umelej inteligencie a machine learning pre predikciu porúch zariadení. Technické aspekty implementácie a ROI analýza.",
        author: "Ing. Martin Horváth",
        date: "2024-02-01",
        readingTime: 15,
        tags: ["AI", "Údržba", "IoT", "Analytics"],
        pdfUrl: "https://drive.google.com/example2"
      },
      {
        id: "digital-twin-guide",
        title: "Digital Twin - Kompletný sprievodca",
        description: "Detailný návod na vytvorenie digitálneho dvojčaťa výrobných procesov. Od konceptu cez implementáciu až po praktické využitie.",
        author: "Ing. Peter Novák",
        date: "2024-02-10",
        readingTime: 20,
        tags: ["Digital Twin", "Simulácia", "Industry 4.0"],
        pdfUrl: null
      },
      {
        id: "robotics-automation",
        title: "Robotizácia a automatizácia",
        description: "Trendy v priemyselnej robotike a kolaboratívnych robotoch. Výber správnej automatizácie pre váš proces.",
        author: "Ing. Lucia Szabová",
        date: "2024-02-15",
        readingTime: 10,
        tags: ["Robotika", "Automatizácia", "Cobots"],
        pdfUrl: null
      },
      {
        id: "energy-efficiency",
        title: "Energetická efektívnosť vo výrobe",
        description: "Stratégie a technológie pre zníženie energetickej náročnosti výrobných procesov. ESG compliance a udržateľnosť.",
        author: "Ing. Jana Kováčová, PhD.",
        date: "2024-02-20",
        readingTime: 9,
        tags: ["Energetika", "Optimalizácia", "ESG"],
        pdfUrl: "https://drive.google.com/example3"
      }
    ]
  },

  footer: {
    copyright: "© 2024 Digital Consulting. Všetky práva vyhradené.",
    links: {
      privacy: "Ochrana osobných údajov",
      terms: "Obchodné podmienky"
    }
  }
};
