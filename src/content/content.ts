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
      { name: "AT Park", image: "/partners/atpark.png" },
      { name: "exe", image: "/partners/exe.png" },
      { name: "Flaton", image: "/partners/flaton.png" },
      { name: "Jungheinrich", image: "/partners/jungheinrich.png" },
      { name: "AT Crystals", image: "/partners/atcrystals.png" },
      { name: "EdgeCom", image: "/partners/edgecom.png" },
      { name: "University of Žilina", image: "/partners/uniza.png" },
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
            name: "3D skenovanie a digitalizácia",
            description: "text",
            benefits: ["abc"]
          },
          {
            name: "Tvorba digitálnej dokumentácie v 2D",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Tvorba digitálnej dokumentácie v 3D",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Vizualizácia",
            description: "text",
            benefits: ["text"]
          },
        ]
      },
      {
        id: "koncepcne",
        name: "Koncepčné projektovanie",
        services: [
          {
            name: "Návrh výrobných konceptov",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Návrh logistických konceptov",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Plánovanie výrobných, logistických a skladových kapacít",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Návrh dispozičných alebo procesných riešení",
            description: "text",
            benefits: ["text"]
          },
        ]
      },
      {
        id: "detailne",
        name: "Detailné projektovanie",
        services: [
          {
            name: "Detailné projektovanie výrobných a montážnych pracovísk",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Kapacitné dimenzovanie výroby a logistiky",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Normovanie pracovných činností a tvorba štandardov",
            description: "text",
            benefits: ["text"]
          },
          {
            name: "Ergonomické posúdenie",
            description: "text",
            benefits: ["text", "text", "text"]
          },
        ]
      },
      {
        id: "optimalizacia",
        name: "AI nastroje a analýza",
        services: [
          {
            name: "AI agenty na mieru",
            description: "text",
            benefits: ["text", "text", "text"]
          },
          {
            name: "Big data analýza a vizualizácia",
            description: "text",
            benefits: ["text", "text", "text"]
          },
          {
            name: "Automatizácia procesov",
            description: "text",
            benefits: ["text", "text", "text"]
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
      lat: 49.1987816, //48.1486
      lng: 18.7698794  //17.1077
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
        pdfUrl: null,
        fullContent: `
          <h2>Úvod</h2>
          <p>Industry 4.0 predstavuje štvrtú priemyselnú revolúciu, ktorá transformuje spôsob, akým vyrábame produkty a poskytujeme služby. Tento koncept vznikol v Nemecku a rýchlo sa rozšíril po celom svete, pretože prináša bezprecedentné možnosti pre zvýšenie efektivity, flexibility a konkurencieschopnosti výrobných podnikov.</p>
          
          <h2>Kľúčové technológie</h2>
          <p>Industry 4.0 stojí na niekoľkých pilieroch moderných technológií. Internet vecí (IoT) umožňuje prepojenie všetkých zariadení a systémov v reálnom čase. Big Data a pokročilá analytika poskytujú cenné poznatky z obrovského množstva dát generovaných výrobnými procesmi.</p>
          
          <p>Cloud computing zabezpečuje flexibilné a škálovateľné výpočtové zdroje, zatiaľ čo kyberneticko-fyzikálne systémy (CPS) vytvárajú most medzi fyzickým a digitálnym svetom. Umelá inteligencia a strojové učenie umožňujú automatizáciu komplexných rozhodovacích procesov a predikciu budúcich udalostí.</p>
          
          <h2>Prínosy digitalizácie</h2>
          <p>Implementácia Industry 4.0 prináša významné výhody. Zvyšuje produktivitu a efektivitu výroby, znižuje náklady a minimalizuje plytvania. Umožňuje flexibilnejšiu výrobu a rýchlejšiu reakciu na zmeny v dopyte. Zlepšuje kvalitu produktov a zvyšuje spokojnosť zákazníkov.</p>
          
          <p>Dôležitým prínosom je aj prediktívna údržba, ktorá výrazne znižuje neplánované prestoje výroby. Digitalizácia tiež otvára nové obchodné modely a príležitosti pre inovácie.</p>
          
          <h2>Výzvy implementácie</h2>
          <p>Prechod na Industry 4.0 však prináša aj výzvy. Vyžaduje značné investície do technológií a infraštruktúry. Firmy musia čeliť nedostatku kvalifikovaných pracovníkov s potrebnými digitálnymi kompetenciami. Kybernetická bezpečnosť sa stává kritickou otázkou v prepojenom prostredí.</p>
          
          <p>Integrácia nových technológií so staršími systémami môže byť komplexná a nákladná. Zmena organizačnej kultúry a postupov vyžaduje čas a trpezlivosť.</p>
          
          <h2>Záver</h2>
          <p>Industry 4.0 nie je len o technológiách – je to komplexná transformácia výrobných procesov, obchodných modelov a organizačnej kultúry. Podniky, ktoré úspešne implementujú tieto princípy, získavajú významné konkurenčné výhody v globálnom trhu.</p>
        `
      },
      {
        id: "lean-manufacturing",
        title: "Lean Manufacturing v praxi",
        description: "Praktická implementácia Lean metodológií vo výrobnom prostredí. Prípadové štúdie a merateľné výsledky z reálnych projektov.",
        author: "Ing. Jana Kováčová, PhD.",
        date: "2024-01-20",
        readingTime: 12,
        tags: ["Lean", "Optimalizácia", "Process excellence"],
        pdfUrl: "https://drive.google.com/example1",
        fullContent: `
          <h2>Úvod do Lean Manufacturing</h2>
          <p>Lean Manufacturing je filozofia a súbor nástrojov zameraných na eliminá­ciu plytvania (waste) a maximalizáciu hodnoty pre zákazníka. Táto metodológia vznikla v japonskom automobilovom priemysle a dnes sa používa v rôznych odvetviach po celom svete.</p>
          
          <h2>Základné princípy Lean</h2>
          <p>Päť základných princípov Lean tvorí základ tejto filozofie. Prvým je definovanie hodnoty z pohľadu zákazníka. Druhým je identifikácia hodnotového toku – všetkých krokov potrebných na vytvorenie produktu. Tretím princípom je zabezpečenie plynulého toku hodnoty bez prerušení a čakania.</p>
          
          <p>Štvrtým princípom je systém ťahu (pull), kde výroba začína až na základe skutočného dopytu zákazníka. Piatym princípom je neustále zlepšovanie (kaizen) – kontinuálne hľadanie spôsobov, ako zvýšiť efektivitu a kvalitu.</p>
          
          <h2>Sedem typov plytvania</h2>
          <p>Lean identifikuje sedem hlavných typov plytvania: nadprodukcia, čakanie, zbytočná preprava, nadmerné zásoby, zbytočné pohyby, chyby a opravy, a nerealizovaný ľudský potenciál. Eliminácia týchto foriem plytvania vedie k výraznému zvýšeniu efektivity.</p>
          
          <h2>Nástroje a techniky</h2>
          <p>5S je základným nástrojom pre organizáciu pracoviska: Triedenie, Usporiadanie, Čistenie, Štandardizácia a Udržiavanie. Value Stream Mapping pomáha vizualizovať celý výrobný proces a identifikovať príležitosti na zlepšenie.</p>
          
          <p>Kanban systém riadi tok materiálu a informácií. SMED (Single-Minute Exchange of Die) skracuje časy prestavby zariadení. TPM (Total Productive Maintenance) zabezpečuje maximálnu dostupnosť zariadení.</p>
          
          <h2>Prípadová štúdia</h2>
          <p>V jednom z našich projektov sme implementovali Lean metodológiu v automobilovom závode. Výsledkom bolo 30% zníženie priechodného času, 25% zníženie zásob a 40% zlepšenie produktivity. Kvalita produktov sa zlepšila o 45% meraná počtom defektov.</p>
          
          <h2>Záver</h2>
          <p>Lean Manufacturing nie je jednorazový projekt, ale kultúrna zmena vyžadujúca zapojenie všetkých zamestnancov. Úspech závisí od podpory vedenia a vytvorenia prostredia podporujúceho neustále zlepšovanie.</p>
        `
      },
      {
        id: "predictive-maintenance",
        title: "Prediktívna údržba pomocou AI",
        description: "Využitie umelej inteligencie a machine learning pre predikciu porúch zariadení. Technické aspekty implementácie a ROI analýza.",
        author: "Ing. Martin Horváth",
        date: "2024-02-01",
        readingTime: 15,
        tags: ["AI", "Údržba", "IoT", "Analytics"],
        pdfUrl: "https://drive.google.com/example2",
        fullContent: `
          <h2>Úvod do prediktívnej údržby</h2>
          <p>Prediktívna údržba (Predictive Maintenance) využíva pokročilé technológie na predpovedanie porúch zariadení skôr, ako sa vyskytnú. Na rozdiel od reaktívnej údržby (oprava po poruche) alebo preventívnej údržby (údržba podľa harmonogramu), prediktívna údržba optimalizuje načasovanie údržbových zásahov na základe skutočného stavu zariadenia.</p>
          
          <h2>Technológie a senzory</h2>
          <p>Základom prediktívnej údržby sú inteligentné senzory zbierajúce dáta o stave zariadení. Vibračné senzory monitorujú mechanické komponenty, termálne kamery detekujú prehrievanie, akustické senzory identifikujú nezvyčajné zvuky a senzory oleja analyzujú kontamináciu.</p>
          
          <p>IoT brány zabezpečujú prenos dát do cloudu v reálnom čase. Edge computing umožňuje spracovanie kritických dát priamo na zariadení pre okamžitú reakciu.</p>
          
          <h2>Machine Learning modely</h2>
          <p>Umelá inteligencia a strojové učenie analyzujú obrovské množstvo dát zo senzorov. Anomaly detection algoritmy identifikujú odchýlky od normálneho správania. Regresné modely predpovedajú zvyšnú životnosť komponentov (RUL - Remaining Useful Life).</p>
          
          <p>Klasifikačné modely určujú typ a závažnosť problému. Deep learning siete dokážu nájsť komplexné vzťahy v dátach, ktoré tradičné metódy nedokážu zachytiť.</p>
          
          <h2>Implementačný proces</h2>
          <p>Prvým krokom je identifikácia kritických zariadení a možných porúch. Následne inštalujeme potrebné senzory a zberané systémy dát. Historické dáta o poruchách používame na trénovanie machine learning modelov.</p>
          
          <p>Pilotný projekt validuje efektivitu riešenia. Po úspešnom pilote nasleduje postupné rozšírenie na všetky zariadenia. Kontinuálne zlepšovanie modelov zohľadňuje nové dáta a skúsenosti.</p>
          
          <h2>ROI a prínosy</h2>
          <p>Naše projekty ukázali priemerné zníženie neplánovaných prestojov o 30-50%. Náklady na údržbu klesli o 20-30% vďaka optimalizácii harmonogramu zásahov. Životnosť zariadení sa predĺžila o 15-25%.</p>
          
          <p>Typický ROI je 200-300% za 2-3 roky. Okrem finančných prínosov sa zlepšuje bezpečnosť prevádzky a spokojnosť operátorov.</p>
          
          <h2>Výzvy a odporúčania</h2>
          <p>Kvalita dát je kľúčová – garbage in, garbage out. Integrácia s existujúcimi CMMS systémami môže byť komplexná. Zmena kultúry údržby vyžaduje školenie a zapojenie tímov.</p>
          
          <p>Odporúčame začať s pilotným projektom na kritickom zariadení, postaviť kvalitný dátový základ a postupne rozširovať riešenie.</p>
        `
      },
      {
        id: "digital-twin-guide",
        title: "Digital Twin - Kompletný sprievodca",
        description: "Detailný návod na vytvorenie digitálneho dvojčaťa výrobných procesov. Od konceptu cez implementáciu až po praktické využitie.",
        author: "Ing. Peter Novák",
        date: "2024-02-10",
        readingTime: 20,
        tags: ["Digital Twin", "Simulácia", "Industry 4.0"],
        pdfUrl: null,
        fullContent: `
          <h2>Čo je Digital Twin?</h2>
          <p>Digital Twin (digitálne dvojča) je virtuálna replika fyzického objektu, procesu alebo systému, ktorá sa aktualizuje v reálnom čase pomocou dát zo senzorov a iných zdrojov. Umožňuje simulovať, analyzovať a optimalizovať správanie fyzického objektu v digitálnom prostredí.</p>
          
          <h2>Typy Digital Twin</h2>
          <p>Komponentový Digital Twin reprezentuje individuálny komponent alebo zariadenie. Asset Digital Twin zobrazuje kompletný výrobný stroj alebo systém. System Digital Twin zahŕňa celé výrobné linky a ich interakcie.</p>
          
          <p>Process Digital Twin modeluje celé výrobné procesy a toky materiálu. Enterprise Digital Twin integruje všetky systémy na úrovni celého podniku.</p>
          
          <h2>Technologická architektúra</h2>
          <p>Fyzická vrstva obsahuje reálne zariadenia s IoT senzormi zbierajúcimi dáta o teplote, vibrácii, tlaku a ďalších parametroch. Komunikačná vrstva zabezpečuje prenos dát cez IoT brány a edge zariadenia do cloudu.</p>
          
          <p>Dátová vrstva ukla­dá historické aj real-time dáta. Modelovacia vrstva obsahuje 3D modely, fyzikálne simulácie a machine learning modely. Aplikačná vrstva poskytuje vizualizáciu, analytiku a rozhodovací support.</p>
          
          <h2>Implementačný proces</h2>
          <p>Definícia cieľov a rozsahu je prvým krokom. Určíme, čo chceme modelovať a aký má byť prínos. Zber požiadaviek zahŕňa technické špecifikácie a očakávané výstupy.</p>
          
          <p>3D modelovanie vytvára digitálnu reprezentáciu. Integrácia senzorov a dát pripája fyzický svet s digitálnym. Kalibrácia a validácia zabezpečujú presnosť modelu.</p>
          
          <p>Vývoj analytických funkcií pridáva inteligenciu do systému. Deployment a školenie používateľov zabezpečuje úspešné prevzatie riešenia do praxe.</p>
          
          <h2>Praktické využitie</h2>
          <p>Optimalizácia procesov využíva simulácie na testovanie zmien pred ich implementáciou. Prediktívna údržba predpovedá poruchy na základe aktuálneho stavu zariadení.</p>
          
          <p>Plánovanie výroby optimalizuje harmonogramy na základe reálnej kapacity. Training simulátory umožňujú školenie operátorov v bezpečnom prostredí. Virtuálne uvedenie do prevádzky skracuje čas a náklady na spustenie nových liniek.</p>
          
          <h2>Prínosy a ROI</h2>
          <p>Naše projekty Digital Twin priniesli zníženie výrobných chýb o 20-35%, zníženie času uvedenia do prevádzky o 30-50% a úsporu nákladov na údržbu 15-25%. Zvýšenie OEE je 10-20%.</p>
          
          <h2>Budúcnosť Digital Twin</h2>
          <p>Integrácia s AI a machine learning umožní autonómnu optimalizáciu. Rozšírená realita (AR) prinesie nové možnosti vizualizácie. Blockchain zabezpečí dôveryhodnosť dát. 5G siete umožnia ultra-nízku latenciu.</p>
        `
      },
      {
        id: "robotics-automation",
        title: "Robotizácia a automatizácia",
        description: "Trendy v priemyselnej robotike a kolaboratívnych robotoch. Výber správnej automatizácie pre váš proces.",
        author: "Ing. Lucia Szabová",
        date: "2024-02-15",
        readingTime: 10,
        tags: ["Robotika", "Automatizácia", "Cobots"],
        pdfUrl: null,
        fullContent: `
          <h2>Evolúcia priemyselnej robotiky</h2>
          <p>Priemyselné roboty prešli dlhou cestou od prvých jednoduchých manipulátorov po dnešné inteligentné systémy. Moderné roboty sú flexibilnejšie, presnejšie a jednoduchšie na programovanie než kedykoľvek predtým.</p>
          
          <h2>Tradičné priemyselné roboty</h2>
          <p>Klasické priemyselné roboty vynikajú vo vysokej rýchlosti, presnosti a opakovateľnosti. Sú ideálne pre ťažké zaťaženia a náročné prostredia. Používajú sa najmä pre zváran­ie, montáž, paletizáciu a lakovaní­e.</p>
          
          <p>Nevýhodou je potreba bezpečnostných ohrádok, vysoká počiatočná investícia a komplikovanejšie programovanie. Sú menej flexibilné pri zmenách výrobného programu.</p>
          
          <h2>Kolaboratívne roboty (Cobots)</h2>
          <p>Cobots predstavujú novú generáciu robotov navrhnutých na bezpečnú spoluprácu s ľuďmi. Majú vstavaní­e bezpečnostné senzory, sú jednoduchšie na programovanie a rýchlejšie na nasadenie.</p>
          
          <p>Využívajú sa pre pick-and-place operácie, kontrolu kvality, obsluhu strojov a montážne operácie. Výhodou je nižšia počiatočná investícia, jednoduchá rekonfigurácia a bezpečná spolupráca s operátormi.</p>
          
          <h2>Ako vybrať správne riešenie</h2>
          <p>Analýza procesu je prvým krokom. Potrebujeme pochopiť požiadavky na cyklový čas, presnosť, zaťaženie a flexibilitu. ROI kalkulácia musí zahŕňať nielen cenu robota, ale aj integráciu, školenie a údržbu.</p>
          
          <p>Pilotný projekt validuje vhodnosť riešenia pred plným nasadením. Dôležité je zohľadniť budúce potreby a možnosť rozšírenia.</p>
          
          <h2>Trendy v robotike</h2>
          <p>Umelá inteligencia umožňuje robotom učiť sa z dát a adaptovať sa na zmeny. Computer vision systémy poskytujú robotom zrak pre komplexnejšie úlohy. 5G konektivita umožňuje vzdialené riadenie a monitoring.</p>
          
          <p>Mobilné roboty (AMR, AGV) transformujú vnútropodnikovú logistiku. Digital Twin technológie umožňujú virtuálne programovanie a optimalizáciu.</p>
          
          <h2>Záver</h2>
          <p>Automatizácia pomocou robotov už nie je len pre veľké spoločnosti. Moderné riešenia sú dostupnejšie a flexibilnejšie než kedykoľvek predtým. Kľúčom k úspechu je správny výber technológie a profesionálna implementácia.</p>
        `
      },
      {
        id: "energy-efficiency",
        title: "Energetická efektívnosť vo výrobe",
        description: "Stratégie a technológie pre zníženie energetickej náročnosti výrobných procesov. ESG compliance a udržateľnosť.",
        author: "Ing. Jana Kováčová, PhD.",
        date: "2024-02-20",
        readingTime: 9,
        tags: ["Energetika", "Optimalizácia", "ESG"],
        pdfUrl: "https://drive.google.com/example3",
        fullContent: `
          <h2>Význam energetickej efektívnosti</h2>
          <p>Energetické náklady predstavujú významnú položku výrobných nákladov. Zároveň sa zvyšuje tlak na zníženie uhlíkovej stopy v súlade s ESG kritériami a klimatickými záväzkami. Energetická efektívnosť je preto strategickou prioritou moderných výrobných podnikov.</p>
          
          <h2>Audit a monitoring</h2>
          <p>Prvým krokom je komplexný energetický audit identifikujúci hlavné spotrebovatele a možnosti úspor. Smart metering systémy poskytujú real-time monitoring spotreby energie na úrovni jednotlivých zariadení.</p>
          
          <p>Energy management systémy (EMS) analyzujú dáta a identifikujú anomálie a príležitosti na optimalizáciu. ISO 50001 certifikácia poskytuje rámec pre systematické riadenie energie.</p>
          
          <h2>Technológie a riešenia</h2>
          <p>Frekvenčné meniče optimalizujú spotrebu elektromotorov podľa aktuálnej potreby. LED osvetlenie znižuje spotrebu o 50-70% oproti tradičnému osvetleniu. Rekuperácia odpadového tepla využíva teplo z výrobných procesov.</p>
          
          <p>Optimalizácia stlačeného vzduchu eliminuje úniky a znižuje tlak na potrebnú úroveň. Smart HVAC systémy inteligentne riadia vykurovanie a klimatizáciu.</p>
          
          <h2>Obnoviteľné zdroje</h2>
          <p>Solárne panely na strechách výrobných hál generujú vlastnú elektrinu. Tepelné čerpadlá využívajú obnoviteľné zdroje tepla. Batériové úložiská optimalizujú spotrebu a poskytujú rezervu.</p>
          
          <h2>Prípadové štúdie</h2>
          <p>V jednom z projektov sme dosiahli 25% zníženie spotreby elektriny implementáciou frekvenčných meničov a optimalizáciou stlačeného vzduchu. ROI bol dosiahnutý za 2,5 roka.</p>
          
          <p>V inom projekte kombinácia solárnych panelov, LED osvetlenia a rekuperácie tepla znížila energetické náklady o 35% a uhlíkovú stopu o 40%.</p>
          
          <h2>ESG a reporting</h2>
          <p>Energetická efektívnosť je kľúčovým pilierom ESG stratégie. Carbon footprint reporting sa stáva povinnosťou pre väčšie firmy. Green certifikáty zlepšujú reputáciu a otvárajú nové obchodné príležitosti.</p>
          
          <h2>Záver</h2>
          <p>Investície do energetickej efektívnosti majú krátku návratnosť a dlhodobé prínosy. Kombinácia technológií, procesných zmien a správneho riadenia vedie k úsporám 20-40% energetických nákladov.</p>
        `
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
