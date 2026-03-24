import type { SiteContent } from "@/content/types";
import { skArticles } from "../articles/sk";

// ═══════════════════════════════════════════════════════════════
// 🇸🇰  SLOVENČINA — Obsah stránky (bez článkov)
// ═══════════════════════════════════════════════════════════════
// Stačí upraviť texty nižšie a zmeny sa okamžite prejavia na stránke.

export const sk: SiteContent = {
  // ─── Navigácia ───────────────────────────────────────────────
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

  // ─── Hero ────────────────────────────────────────────────────
  hero: {
    title: "Digital Consulting",
    subtitle: "Inovatívne riešenia pre modernú priemyselnú výrobu",
    description: "Transformujeme výrobné procesy pomocou digitalizácie, pokročilých technológií a strategického poradenstva.",
    buttons: {
      services: "Naše služby",
      academia: "Akadémia",
    },
    features: [
      "Digitalizácia výroby",
      "3D skenovanie",
      "Priemysel 4.0",
      "Optimalizácia procesov",
      "Smart Factory",
    ],
  },

  // ─── Partneri ────────────────────────────────────────────────
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
      { name: "Bizlink", image: "/partners/bizlink.png" },
      { name: "Deftech", image: "/partners/deftech.png" },
      { name: "m2m", image: "/partners/m2m.png" },
      { name: "Motherson", image: "/partners/motherson.png" },
      { name: "Rosero", image: "/partners/rosero.png" },
      { name: "Schafer", image: "/partners/schafer.png" },
      { name: "SM", image: "/partners/sm.png" },
      { name: "Tatravakonka", image: "/partners/tatravagonka.png" },
      { name: "Tuke", image: "/partners/tuke.png" },
      { name: "Bata", image: "/partners/bata.png" },
      { name: "Witte", image: "/partners/witte.png" },
    ],
  },

  // ─── Služby ──────────────────────────────────────────────────
  services: {
    title: "Naše služby",
    subtitle: "Komplexné riešenia pre vašu digitálnu transformáciu",
    categories: [
      {
        id: "digitalizacia",
        name: "Digitalizácia",
        services: [
          { name: "Tvorba digitálnej dokumentácie v 2D/3D", icon: "FileText", description: "Vypracujeme kompletné riešenie od aktualizácie pôdorysov do skutočného stavu cez tvorbu technologických layoutov až po parametrické 3D modely. Získate tak spoľahlivý podklad pre inžinierske procesy, investičné zámery a efektívny manažment zmien.", benefits: ["Presný dátový základ", "Detekcia kolízií", "Manažment zmien a dispozícií"] },
          { name: "Vizualizácia", icon: "Eye", description: "Prezentujte vaše investičné zámery v virtuálnom prostredí, čím uľahčíte schvaľovacie procesy a získate jasnú predstavu ešte pred fázou realizácie.", benefits: ["Rendery budúcich prevádzok a technologických celkov", "Marketingová podpora investičných projektov"] },
          { name: "3D skenovanie a digitalizácia", icon: "Scan", description: "Získajte digitálny základ pre vaše inovačné zámery prostredníctvom laserového skenovania, ktoré eliminuje nepresnosti pri plánovaní zmien v priestore.", benefits: ["Podklad pre reverzne inžinierstvo", "Digitálna kópia priestoru"] },
        ],
      },
      {
        id: "projektovanie",
        name: "Projektovanie",
        services: [
          { name: "Vnútropodniková logistika ", icon: "Truck", description: "Ponúkame vám odborný pohľad na modernizáciu vnútropodnikovej logistiky, od návrhu stratégie až po dynamickú verifikáciu procesov.", benefits: ["Návrh výrobných dávok a manipulačných jednotiek", "Optimalizácia a audit logistických procesov", "Návrh konceptov automatizovanej logistiky", "Simulácia kapacít a overenie priepustnosti konceptov"] },
          { name: "Skladové hospodárstvo ", icon: "Warehouse", description: "Získajte efektívne riadenie skladového hospodárstva, od optimalizácie skladových zásob a procesov až po implementáciu moderných technológií a kontrolných mechanizmov pre maximálnu presnosť a výkonnosť", benefits: ["Dimenzovanie kapacít a výpočet optimálneho využitia plôch.", "Simulácia dynamiky pre overenie výkonu", "Návrh stupňa automatizácie a technológií", "Štúdia rozvoja a expanzie skladových zón"] },
          { name: "Výrobný systém", icon: "Factory", description: "Komplexné technické riešenie a návrh pracoviska: detailný návrh pracovísk vrátane špecifikácie vybavenia, zástavby a napojenia na energie pre požiadavky výroby.", benefits: ["Optimalizácia kľúčových výrobných parametrov", "Validácia riešení a definovanie KPI", "Kapacitné plánovanie a rozvrhovanie", "Definovanie taktu a cieľového OEE"] },
          { name: "Štúdie realizovateľnosti", icon: "ClipboardCheck", description: "Využite našu externú podporu pri validácii vašich zámerov a získajte objektívny pohľad na technickú a ekonomickú uskutočniteľnosť vašich inovačných cieľov.", benefits: ["Implementácia nových produktov do výroby", "Automatizácia a robotizácia procesov", "Rozvoj a expanzia výrobných kapacít"] },
        ],
      },
      {
        id: "optimalizacia-std",
        name: "Optimalizácia a štandardizácia",
        services: [
          { name: "Balansovanie a taktovanie procesov", icon: "Scale", description: "Optimálne rozloženie operácií na linke zabezpečí rovnomerne vyťaženie pracovísk a odstráni úzke miesta pre zabezpečenie plynulosti toku výroby.", benefits: ["Odstránenie úzkych miest v procesoch", "Vybalansovanie pracovísk pre ich rovnomerné vyťaženie", "Plynulosť toku bez zbytočných prestojov a čakania."] },
          { name: "Data & Process Mining", icon: "Database", description: "Prostredníctvom hĺbkovej analýzy digitálnych stôp vašich procesov odhalíme skutočný priebeh výroby a logistiky, identifikujeme odchýlky od ideálneho stavu a navrhneme riešenia založené na reálnych dátach.", benefits: ["Odhalenie odchýlok od ideálneho stavu", "Získanie prehľadu o skutočnom stave procesov", "Identifikácia skrytých vád a neefektívnych krokov v systéme."] },
          { name: "Ergonomické posúdenie", icon: "User", description: "Identifikujeme a eliminujeme rizikové faktory v pohybových vzorcoch vašich zamestnancov, čím znížime mieru únavy, chybovosti a zlepšíme dlhodobú udržateľnosť ich výkonu.", benefits: ["Eliminácia rizík a korekcia nevhodných pohybov", "Vybalansovanie pracovísk pre ich rovnomerné vyťaženie", "Plynulosť toku bez zbytočných prestojov a čakania."] },
          { name: "Normovanie a štandardizácia", icon: "Ruler", description: "Definovanie exaktných časových štandardov pre nové produkty aj existujúcu výrobu. Tieto dátové podklady umožňujú následnú optimalizáciu či robotizáciu pracovísk.", benefits: ["Definovanie štandardov", "Zlepšenie plánovania", "Tvorba časových noriem"] },
        ],
      },
      {
        id: "rnd",
        name: "R&D",
        services: [
          { name: "Návrh a spracovanie výskumných projektov", icon: "Lightbulb", description: "Získajte komplexné zastrešenie inovačných projektov v oblasti digitalizácie a Smart Factory, od úvodnej štúdie uskutočniteľnosti až po návrh metodiky a technickú realizáciu výskumných úloh.", benefits: ["Technická realizácia výskumných úloh v praxi", "Validácia inovácií formou štúdií uskutočniteľnosti", "Metodiky pre digitálnu transformáciu a Smart Factory"] },
          { name: "Digitalizácia inžinierskeho know-how", icon: "Cpu", description: "Transformujeme vaše interné expertné znalosti do softvérových algoritmov, čím zabezpečíme štandardizáciu a automatizáciu zložitých rozhodovacích úloh vo vašom podniku.", benefits: ["Automatizácia úloh a rozhodovacích procesov", "Štandardizácia práce a eliminácia ľudských chýb", "Prevod znalostí do inteligentných algoritmov"] },
          { name: "Spracovanie inovačných a výskumných projektov", icon: "Rocket", description: "Získajte partnera na vývoj metodík a technických riešení pre digitálnu transformáciu, ktoré posúvajú hranice vašej súčasnej produkcie smerom k Smart Factory.", benefits: ["Technické riešenia pre vyššiu úroveň digitalizácie", "Implementácia poznatkov z oblasti R&D do výroby", "Návrh metodík pre rozvoj Smart Factory"] },
          { name: "Vývoj priemyselného softvéru na mieru", icon: "Code", description: "Vyvíjame špecifické aplikácie, ktoré riešia unikátne výzvy vo výrobe a logistike – od inžinierskych konfigurátorov až po nástroje pre analýzu procesov.", benefits: ["Vývoj konfigurátorov pre automatizáciu procesov", "Analytické nástroje na hĺbkové spracovanie dát", "Softvér na mieru podľa technických zadaní"] },
        ],
      },
    ],
  },

  // ─── Produkty ────────────────────────────────────────────────
  products: {
    title: "Naše produkty",
    subtitle: "Inovatívne technológie pre moderný podnik",
    categories: [
      {
        id: "sw-skladove-hospodarstvo",
        name: "SW Skladové hospodárstvo",
        icon: "PackageSearch",
        media: { type: "image", src: "/atdigital_web/picture/products/example.png" },
        description: "Riadenie zásob je webová aplikácia na komplexnú správu a optimalizáciu skladových zásob s podporou AI, automatických prognóz a prepojenia na externé systémy SQLite a Odoo. Ponúkame vám inteligentný nástroj na riadenie zásob, ktorý v reálnom čase analyzuje stav skladu, automaticky klasifikuje položky, predpovedá budúci dopyt a navrhuje konkrétne nákupné a optimalizačné akcie – všetko na jednom mieste.",
        features: ["Okamžitý obraz o zdraví skladu – výpadky, nadbytky, plnenie cieľov", "Automatické roztriedenie položiek podľa hodnoty a predvídateľnosti dopytu", "Predpoveď budúcej spotreby a detekcia sezónnosti či anomálií", "Výpočet optimálnych objednávacích množstiev, poistnej zásoby a nárazníkových hladín", "Prehľad položiek vyžadujúcich okamžitú akciu s nákupnými odporúčaniami", "Sledovanie jednotlivých komponentov a zákaziek v reálnom čase", "Jednoduché zdieľanie plánov a reportov"],
      },
      {
        id: "sw-planovanie-vyroby",
        name: "SW plánovanie výroby",
        icon: "CalendarClock",
        media: { type: "video", src: "/atdigital_web/reference/examplevideo.mp4" },
        description: "Ponúkame vám aplikáciu pre komplexné plánovanie výrobných zákaziek s podporou MRP a rozkladu kusovníkov (BOM). Nástroj pokrýva celý cyklus od správy materiálu až po expedíciu a pomocou optimalizovaného Ganttovho diagramu s viacerými stratégiami plánovania zabezpečuje maximálnu efektivitu vašej výroby.",
        features: ["Plánovanie zákaziek: Automatické rozplánovanie výroby s ohľadom na termíny a priority.", "Správa materiálu: Prehľad skladových zásob, dostupnosti a materiálových požiadaviek", "Kusovník (BOM): Štruktúra produktu – čo a koľko treba vyrobiť pre každú zákazku", "Gantt diagram: Vizuálny prehľad rozvrhu výroby na strojoch v čase", "Správa strojov a pracovísk: Kapacity, vyťaženie, údržba a stav každého stroja", "Kompletizácia: Sledovanie dokončenosti jednotlivých komponentov a zákaziek", "Export do Excelu: Jednoduché zdieľanie plánov a reportov"],
      },
      {
        id: "sw-digital-twin",
        name: "Digital Twin",
        icon: "Copy",
        media: { type: "video", src: "/atdigital_web/reference/examplevideo.mp4" },
        description: "Digital Twin je webová aplikácia pre vytvorenie presnej digitálnej repliky vašej fyzickej prevádzky – výrobných liniek, logistických tokov, skladových priestorov a údržbových procesov. Systém v reálnom čase synchronizuje dáta zo senzorov, strojov a podnikových systémov do živého digitálneho modelu, ktorý verne odráža skutočný stav prevádzky. Získate tak plnú transparentnosť, schopnosť predvídať udalosti a nástroj na kontinuálne zlepšovanie procesov – bez zásahu do reálnej infraštruktúry.",
        features: ["Presný virtuálny model fyzických aktív, procesov a vzťahov medzi nimi aktualizovaný v reálnom čase", "Kontinuálny príjem dát zo senzorov, PLC systémov a IoT zariadení s okamžitou vizualizáciou stavov", "Detekcia anomálií a včasná identifikácia degradácie zariadení na základe historických a aktuálnych vzorcov správania", "Testovanie zmien, scenárov alebo poruchových stavov priamo v digitálnom modeli bez dopadu na reálnu prevádzku", "Vizualizácia pohybu materiálu, komponentov a zásielok naprieč celým dodávateľským reťazcom", "Výkonnostné ukazovatele a štatistiky"],
      },
      {
        id: "smart-sensor-systems",
        name: "Smart senzorické systémy",
        icon: "Radio",
        media: { type: "image", src: "/atdigital_web/picture/products/example.png" },
        description: "Realizujeme systémy inteligentného monitoringu pre zber a vyhodnocovanie dát v reálnom čase. Integrujeme pokročilé senzory pre vibrodiagnostiku, kamerovú inšpekciu a lokalizáciu, čím zabezpečujeme prediktívny prístup k riadeniu prevádzky.",
        features: ["Vibrodiagnostika strojov a zariadení", "Inteligentné kamerové systémy", "Lokalizačné systémy v reálnom čase (RTLS)", "Senzorické siete pre zber dát", "Monitoring, vizualizácia stavu a simulácia stavu"],
      },
      {
        id: "vr-ar",
        name: "VR & AR",
        icon: "Glasses",
        media: { type: "image", src: "/atdigital_web/picture/products/example.png" },
        description: "Komplexné riešenia v oblasti virtuálnej a rozšírenej reality, ktoré transformujú tradičné postupy na interaktívne zážitky. Od vzdelavacích trenažérov až po virtuálne showroomy.",
        features: ["Interaktívne vzdelávanie a trenažéry", "Virtuálne laboratóriá a múzeá", "Showroomy a prezentačné miestnosti", "Vizuálna podpora údržby a montáže", "Digitálne galérie s interaktívnym obsahom"],
      },
      {
        id: "plugflow",
        name: "PlugFlow",
        icon: "Workflow",
        media: { type: "video", src: "/atdigital_web/reference/examplevideo.mp4" },
        description: "PlugFlow je simulačná hra navrhnutá pre praktický tréning procesného myslenia a princípov smart priemyslu. Produkt ponúkame ako vzdelávaciu pomôcku pre tréningové centrá, vzdelávacie inštitúcie, ale aj ako formu odborných školení a workshopov zameraných na optimalizáciu tokov v podnikovej praxi.",
        features: ["Simulácia reálnych logistických tokov", "Tréning rozhodovania", "Pochopenie princípov štíhlej výroby", "Testovanie optimalizačných scenárov v praxi", "Vzdelávací nástroj pre stredné a vysoké školy", "Praktická výučba optimalizačných princípov", "Odborné školenia a workshopy pre firmy"],
      },
    ],
  },

  // ─── LinkedIn Feed ──────────────────────────────────────────
  linkedInFeed: {
    title: "Sledujte nás",
    subtitle: "Najnovšie príspevky z nášho LinkedIn profilu",
  },

  // ─── Referencie ──────────────────────────────────────────────
  references: {
    title: "Referencie",
    subtitle: "Úspešne realizované projekty",
    categories: [
      {
        id: "projektovanie-vyrobnych-systemov",
        name: "Projektovanie výrobných systémov",
        projects: [
          {
            name: "Transformácia závodu pre výrobu nového produktu v skupine Tatravagonka",
            description: "Návrh komplexného výrobno-logistického konceptu pre integráciu nového typu výroby do existujúcich priestorov.",
            highlights: ["Digitalizácia priestorov pomocou laserového skenovania pre elimináciu kolízií pri zástavbe technológií", "Dynamické preverenie kapacít pre presný výpočet potrebných výrobných a logistických síl.", "Optimalizácia investície odborným porovnaním variantov manuálnej a automatizovanej výroby.", "Garantovaný ročný výkon celého systému vďaka presne navrhnutým výrobným sekvenciám.", "Kompletný realizačný podklad vo forme 3D prehliadky a harmonogramu implementácie."],
          },
          {
            name: "Detailne projektovanie výroby konštrukcii v oblasti defence",
            description: "Realizácia priestorovej dispozície novej haly a detailý návrh pracovísk pre segment defence. Kapacitné prepočty a dátová validácia procesov definovali presné umiestnenie technologických uzlov v parametrizovanom layoute, ktorého výstupom bolo technické zadanie pre zástavbu technológií zohľadňujúc špecifické požiadavky a bezpečnosť špeciálnej výroby.",
            highlights: ["Optimálny návrh layoutu so zástavbou technológií, skladových zón a logistických trás.", "Kapacitné dimenzovanie výrobných zdrojov a personálu.", "Kvantifikácia medzioperačných plôch pre plynulý výrobný cyklus bez úzkych miest.", "Spracovanie technického generelu novej haly ako finálneho podkladu pre realizáciu."],
          },
          {
            name: "Detailne projektovanie výroby konštrukcii v oblasti defence",
            description: "Realizácia priestorovej dispozície novej haly a detailý návrh pracovísk pre segment defence. Kapacitné prepočty a dátová validácia procesov definovali presné umiestnenie technologických uzlov v parametrizovanom layoute, ktorého výstupom bolo technické zadanie pre zástavbu technológií zohľadňujúc špecifické požiadavky a bezpečnosť špeciálnej výroby.",
            highlights: ["Optimálny návrh layoutu so zástavbou technológií, skladových zón a logistických trás.", "Kapacitné dimenzovanie výrobných zdrojov a personálu.", "Kvantifikácia medzioperačných plôch pre plynulý výrobný cyklus bez úzkych miest.", "Spracovanie technického generelu novej haly ako finálneho podkladu pre realizáciu."],
          },
          {
            name: "Detailne projektovanie výroby konštrukcii v oblasti defence",
            description: "Realizácia priestorovej dispozície novej haly a detailý návrh pracovísk pre segment defence. Kapacitné prepočty a dátová validácia procesov definovali presné umiestnenie technologických uzlov v parametrizovanom layoute, ktorého výstupom bolo technické zadanie pre zástavbu technológií zohľadňujúc špecifické požiadavky a bezpečnosť špeciálnej výroby.",
            highlights: ["Optimálny návrh layoutu so zástavbou technológií, skladových zón a logistických trás.", "Kapacitné dimenzovanie výrobných zdrojov a personálu.", "Kvantifikácia medzioperačných plôch pre plynulý výrobný cyklus bez úzkych miest.", "Spracovanie technického generelu novej haly ako finálneho podkladu pre realizáciu."],
          },
        ],
      },
      {
        id: "skladove-hospodarstvo",
        name: "Skladové hospodárstvo",
        projects: [
          {
            name: "UTools",
            description: "Komplexná stratégia rozvoja areálu zameraná na analýzu úzkych miest, optimalizáciu tokov a definovanie kapacitných potrieb. Projekt určuje fázovanie investícií do robotizácie pre maximálnu efektivitu produktových mixov a zahŕňa vývoj softvéru na inteligentné riadenie skladových zásob",
            highlights: ["Identifikácia úzkych miest vo výrobe pre stanovenie priorít rozvoja", "Návrh tokov materiálu v celom areáli závodu", "Definovanie stupňa robotizácie a automatizácie v rámci variantov", "Vývoj softvéru na mieru pre digitálne riadenie skladových zásob"],
          },
          {
            name: "SSI Schaefer",
            description: "Návrh optimálneho dispozičného riešenia a konceptu logistiky pre relokáciu montážnych liniek",
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom závode", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie stability tokov", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest", "Minimalizácia prevádzkových nákladov (OPEX) cez optimalizovaný mix logistiky", "Zníženie závislosti na manuálnej práci prostredníctvom cielenej automatizácie"],
          },
        ],
      },
      {
        id: "navrh-logistickeho-konceptu",
        name: "Návrh logistického konceptu",
        projects: [
          {
            name: "Návrh dispozičného usporiadania s optimálnym logistickým systémom zásobovania v automotive",
            description: "Návrh optimálneho dispozičného riešenia a konceptu logistiky pre relokáciu montážnych liniek",
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom závode", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie stability tokov", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest", "Minimalizácia prevádzkových nákladov (OPEX) cez optimalizovaný mix logistiky", "Zníženie závislosti na manuálnej práci prostredníctvom cielenej automatizácie"],
          },
        ],
      },
      {
        id: "zlepsenie-procesu-vyroby",
        name: "Zlepšenie procesu výroby",
        projects: [
          {
            name: "Schaefermenk",
            description: "Návrh optimálneho dispozičného riešenia a konceptu logistiky pre relokáciu montážnych liniek",
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom závode", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie stability tokov", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest", "Minimalizácia prevádzkových nákladov (OPEX) cez optimalizovaný mix logistiky", "Zníženie závislosti na manuálnej práci prostredníctvom cielenej automatizácie"],
          },
          {
            name: "Incosystems",
            description: "Návrh optimálneho dispozičného riešenia a konceptu logistiky pre relokáciu montážnych liniek",
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom závode", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie stability tokov", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest", "Minimalizácia prevádzkových nákladov (OPEX) cez optimalizovaný mix logistiky", "Zníženie závislosti na manuálnej práci prostredníctvom cielenej automatizácie"],
          },
        ],
      },
      {
        id: "laserove-skenovanie",
        name: "Laserové skenovanie",
        projects: [
          {
            name: "Jungheinrich",
            description: "Návrh optimálneho dispozičného riešenia a konceptu logistiky pre relokáciu montážnych liniek",
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom závode", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie stability tokov", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest", "Minimalizácia prevádzkových nákladov (OPEX) cez optimalizovaný mix logistiky", "Zníženie závislosti na manuálnej práci prostredníctvom cielenej automatizácie"],
          },
        ],
      },
      {
        id: "planovanie-vyroby",
        name: "Plánovanie výroby",
        projects: [
          {
            name: "Bizlink",
            description: "Návrh optimálneho dispozičného riešenia a konceptu logistiky pre relokáciu montážnych liniek",
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom závode", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie stability tokov", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest", "Minimalizácia prevádzkových nákladov (OPEX) cez optimalizovaný mix logistiky", "Zníženie závislosti na manuálnej práci prostredníctvom cielenej automatizácie"],
          },
        ],
      },
    ],
  },

  // ─── O nás ───────────────────────────────────────────────────
  about: {
    title: "O nás",
    subtitle: "Váš partner pre digitálnu transformáciu",
    contactInfoTitle: "Kontaktné informácie",
    contact: {
      company: "ATDigital s.r.o.",
      address: "Rosinská cesta 9 010 08 Žilina",
      phone: "+421 2 1234 5678",
      email: "emailexample@gmail.com",
      ico: "55742203",
      dic: "2122072381",
    },
    form: {
      title: "Kontaktujte nás",
      fields: {
        name: "Meno a priezvisko",
        email: "E-mail",
        phone: "Telefón",
        company: "Spoločnosť",
        message: "Správa",
      },
      button: "Odoslať správu",
      sending: "Odosielam...",
      successMessage: "Správa bola úspešne odoslaná!",
      errorMessage: "Nepodarilo sa odoslať správu. Skúste to znova.",
      captchaLabel: "Bezpečnostná otázka",
      captchaError: "Nesprávna odpoveď na bezpečnostnú otázku",
    },
    mapCenter: {
      lat: 49.1987816,
      lng: 18.7698794,
    },
  },

  // ─── Akadémia ───────────────────────────────────────────────
  academia: {
    title: "Akadémia",
    subtitle: "Odborné články a poznatky z priemyselnej praxe",
    searchPlaceholder: "Vyhľadať články...",
    filterByTags: "Filtrovať podľa tagov",
    allTags: "Všetky tagy",
    readingTime: "min čítania",
    downloadPdf: "Stiahnuť PDF",
    articles: skArticles,
  },

  // ─── Pätička ─────────────────────────────────────────────────
  footer: {
    copyright: "© 2024 Digital Consulting. Všetky práva vyhradené.",
    links: {
      privacy: "Ochrana osobných údajov",
      terms: "Obchodné podmienky",
    },
  },
};
