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
          { name: "Tvorba digitálnej dokumentácie v 2D/3D", description: "Vypracujeme kompletné riešenie od aktualizácie pôdorysov do skutočného stavu cez tvorbu technologických layoutov až po parametrické 3D modely. Získate tak spoľahlivý podklad pre inžinierske procesy, investičné zámery a efektívny manažment zmien.", benefits: ["Presný dátový základ", "Detekcia kolízií", "Manažment zmien a dispozícií"] },
          { name: "3D skenovanie a digitalizácia", description: "Získajte digitálny základ pre vaše inovačné zámery prostredníctvom laserového skenovania, ktoré eliminuje nepresnosti pri plánovaní zmien v priestore.", benefits: ["abc"] },
          { name: "Vizualizácia", description: "Prezentujte vaše investičné zámery v virtuálnom prostredí, čím uľahčíte schvaľovacie procesy a získate jasnú predstavu ešte pred fázou realizácie.", benefits: ["text"] },
        ],
      },
      {
        id: "projektovanie",
        name: "Projektovanie",
        services: [
          { name: "Koncepčne a detailne projektovanie", description: "Odborný pohľad na koncepčné riešenia, ktoré optimalizujú výkon vášho systému. Využite našu externú podporu pri hľadaní potenciálov na zvýšenie výkonu a technickú validáciu vašich procesov.", benefits: ["text"] },
          { name: "Štúdie realizovateľnosti", description: "Využite našu externú podporu pri validácii vašich zámerov a získajte objektívny pohľad na technickú a ekonomickú uskutočniteľnosť vašich inovačných cieľov.", benefits: ["text"] },
          { name: "Výrobný systém", description: "Komplexné technické riešenie a návrh pracoviska: detailný návrh pracovísk vrátane špecifikácie vybavenia, zástavby a napojenia na energie pre požiadavky výroby.", benefits: ["Optimalizácia kľúčových výrobných parametrov", "Validácia riešení a definovanie KPI", "Kapacitné plánovanie a rozvrhovanie", "Definovanie taktu a cieľového OEE"] },
          { name: "Vnútropodniková logistika ", description: "Ponúkame vám odborný pohľad na modernizáciu vnútropodnikovej logistiky, od návrhu stratégie až po dynamickú verifikáciu procesov.", benefits: ["Dimenzovanie výrobných dávok a návrh manipulačných jednotiek", "Optimalizácia a audit logistických procesov", "Automatizácia logistiky", "Simulácia a validácia logistických konceptov", "Kapacitné plánovanie logistických zdrojov", "Návrh zásobovacích stratégii JIT", "Digitálne prepojenie logistiky a výroby s presným návrhom a implementáciou RTLS systému"] },
          { name: "Skladové hospodárstvo ", description: "Ponúkame vám odborný pohľad na efektívne riadenie skladového hospodárstva, od optimalizácie skladových zásob a procesov až po implementáciu moderných technológií a kontrolných mechanizmov pre maximálnu presnosť a výkonnosť.", benefits: ["Dimenzovanie a výpočet skladových kapacít", "Simulácia dynamiky skladu", "Validácia skladových procesov formou workshopov", "Štúdia rozvoja a expanzie skladových zón"] },
        ],
      },
      {
        id: "optimalizacia-std",
        name: "Optimalizácia a štandardizácia",
        services: [
          { name: "Balansovanie a taktovanie procesov", description: "Optimálne rozloženie operácií na linke zabezpečí rovnomerne vyťaženie pracovísk a odstráni úzke miesta pre zabezpečenie plynulosti toku výroby.", benefits: ["text"] },
          { name: "Normovanie a štandardizácia", description: "Definovanie exaktných časových štandardov pre nové produkty aj existujúcu výrobu. Tieto dátové podklady umožňujú následnú optimalizáciu či robotizáciu pracovísk.", benefits: ["text"] },
          { name: "Ergonomické posúdenie", description: "Identifikujeme a eliminujeme rizikové faktory v pohybových vzorcoch vašich zamestnancov, čím znížime mieru únavy, chybovosti a zlepšíme dlhodobú udržateľnosť ich výkonu.", benefits: ["text"] },
          { name: "Data & Process Mining", description: "Prostredníctvom hĺbkovej analýzy digitálnych stôp vašich procesov odhalíme skutočný priebeh výroby a logistiky, identifikujeme odchýlky od ideálneho stavu a navrhneme riešenia založené na reálnych dátach.", benefits: ["text", "text", "text"] },
          { name: "Štúdia procesnej efektivity", description: "Vypracujeme komplexný audit vašich súčasných operácií, ktorý vám poskytne jasný zoznam potenciálov na zlepšenie s prínosom pre vašu produktivitu.", benefits: ["text", "text", "text"] },
        ],
      },
      {
        id: "rnd",
        name: "R&D",
        services: [
          { name: "Návrh a spracovanie výskumných projektov", description: "Získajte komplexné zastrešenie inovačných projektov v oblasti digitalizácie a Smart Factory, od úvodnej štúdie uskutočniteľnosti až po návrh metodiky a technickú realizáciu výskumných úloh.", benefits: ["text", "text", "text"] },
          { name: "Spracovanie inovačných a výskumných projektov", description: "Získajte partnera na vývoj metodík a technických riešení pre digitálnu transformáciu, ktoré posúvajú hranice vašej súčasnej produkcie smerom k Smart Factory.", benefits: ["text", "text", "text"] },
          { name: "Vývoj priemyselného softvéru na mieru", description: "Vyvíjame špecifické aplikácie, ktoré riešia unikátne výzvy vo výrobe a logistike – od inžinierskych konfigurátorov až po nástroje pre analýzu procesov.", benefits: ["text", "text", "text"] },
          { name: "Digitalizácia inžinierskeho know-how", description: "Transformujeme vaše interné expertné znalosti do softvérových algoritmov, čím zabezpečíme štandardizáciu a automatizáciu zložitých rozhodovacích úloh vo vašom podniku.", benefits: ["text", "text", "text"] },
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
        description: "Riadenie zásob je webová aplikácia na komplexnú správu a optimalizáciu skladových zásob s podporou AI, automatických prognóz a prepojenia na externé systémy SQLite a Odoo. Ponúkame vám inteligentný nástroj na riadenie zásob, ktorý v reálnom čase analyzuje stav skladu, automaticky klasifikuje položky, predpovedá budúci dopyt a navrhuje konkrétne nákupné a optimalizačné akcie – všetko na jednom mieste.",
        features: ["Prehľad & KPI: Okamžitý obraz o zdraví skladu – výpadky, nadbytky, plnenie cieľov", "ABC / XYZ Analýza: Automatické roztriedenie položiek podľa hodnoty a predvídateľnosti dopytu", "Prognóza & Trendy: Predpoveď budúcej spotreby a detekcia sezónnosti či anomálií", "Optimalizácia zásob: Výpočet optimálnych objednávacích množstiev, poistnej zásoby a nárazníkových hladín", "Akčný zoznam & Nákup:  Prehľad položiek vyžadujúcich okamžitú akciu s nákupnými odporúčaniami", "Hodnotenie dodávateľov: Analýza spoľahlivosti a výkonnosti dodávateľov", "Import & Export: Načítanie dát z Excelu, SQLite alebo Odoo; export HTML reportov", "AI rozhodovací asistent: Automatické návrhy akcií a rozhodovacích postupov pre každú položku"],
      },
      {
        id: "sw-planovanie-vyroby",
        name: "SW plánovanie výroby",
        description: "Ponúkame vám aplikáciu pre komplexné plánovanie výrobných zákaziek s podporou MRP a rozkladu kusovníkov (BOM). Nástroj pokrýva celý cyklus od správy materiálu až po expedíciu a pomocou optimalizovaného Ganttovho diagramu s viacerými stratégiami plánovania zabezpečuje maximálnu efektivitu vašej výroby.",
        features: ["Plánovanie zákaziek: Automatické rozplánovanie výroby s ohľadom na termíny a priority.", "Správa materiálu: Prehľad skladových zásob, dostupnosti a materiálových požiadaviek", "Kusovník (BOM): Štruktúra produktu – čo a koľko treba vyrobiť pre každú zákazku", "Gantt diagram: Vizuálny prehľad rozvrhu výroby na strojoch v čase", "Správa strojov a pracovísk: Kapacity, vyťaženie, údržba a stav každého stroja", "Kompletizácia: Sledovanie dokončenosti jednotlivých komponentov a zákaziek", "Export do Excelu: Jednoduché zdieľanie plánov a reportov"],
      },
      {
        id: "sw-digital-twin",
        name: "Digital Twin",
        description: "Digital Twin je webová aplikácia pre vytvorenie presnej digitálnej repliky vašej fyzickej prevádzky – výrobných liniek, logistických tokov, skladových priestorov a údržbových procesov. Systém v reálnom čase synchronizuje dáta zo senzorov, strojov a podnikových systémov do živého digitálneho modelu, ktorý verne odráža skutočný stav prevádzky. Získate tak plnú transparentnosť, schopnosť predvídať udalosti a nástroj na kontinuálne zlepšovanie procesov – bez zásahu do reálnej infraštruktúry.",
        features: ["Digitálna replika prevádzky: Presný virtuálny model fyzických aktív, procesov a vzťahov medzi nimi aktualizovaný v reálnom čase", "Živý monitoring & Telemetria: Kontinuálny príjem dát zo senzorov, PLC systémov a IoT zariadení s okamžitou vizualizáciou stavov", "Prediktívna analytika: Detekcia anomálií a včasná identifikácia degradácie zariadení na základe historických a aktuálnych vzorcov správania", "Simulácia & What-if analýzy: Testovanie procesných zmien, kapacitných scenárov alebo poruchových stavov priamo v digitálnom modeli bez dopadu na reálnu prevádzku", "Sledovanie logistických tokov: Vizualizácia pohybu materiálu, komponentov a zásielok naprieč celým dodávateľským reťazcom", "Výkonnostné ukazovatele: Automatický výpočet OEE, dostupnosti, vyťaženosti a ďalších KPI pre jednotlivé pracoviská, linky aj celé závody", "Integrácia systémov: Natívne prepojenie s ERP, MES, SCADA, SQLite a Odoo; obojsmerná synchronizácia dát", "AI odporúčací modul: Inteligentné návrhy optimalizačných opatrení odvodené z analýzy odchýlok medzi digitálnym modelom a realitou"],
      },
      {
        id: "smart-sensor-systems",
        name: "Smart senzorické systémy",
        description: "Realizujeme systémy inteligentného monitoringu pre zber a vyhodnocovanie dát v reálnom čase. Integrujeme pokročilé senzory pre vibrodiagnostiku, kamerovú inšpekciu a lokalizáciu, čím zabezpečujeme prediktívny prístup k riadeniu prevádzky.",
        features: ["Vibrodiagnostika strojov a zariadení", "Inteligentné kamerové systémy", "Lokalizačné systémy v reálnom čase (RTLS)", "Senzorické siete pre zber dát", "Monitoring, vizualizácia stavu a simulácia stavu"],
      },
      {
        id: "vr-ar",
        name: "VR & AR",
        description: "Komplexné riešenia v oblasti virtuálnej a rozšírenej reality, ktoré transformujú tradičné postupy na interaktívne zážitky. Od vzdelavacích trenažérov až po virtuálne showroomy.",
        features: ["Interaktívne vzdelávanie a trenažéry", "Virtuálne laboratóriá a múzeá", "Showroomy a prezentačné miestnosti", "Vizuálna podpora údržby a montáže", "Digitálne galérie s interaktívnym obsahom"],
      },
      {
        id: "plugflow",
        name: "PlugFlow",
        description: "PlugFlow je simulačná hra navrhnutá pre praktický tréning procesného myslenia a princípov smart priemyslu. Produkt ponúkame ako vzdelávaciu pomôcku pre tréningové centrá, vzdelávacie inštitúcie, ale aj ako formu odborných školení a workshopov zameraných na optimalizáciu tokov v podnikovej praxi.",
        features: ["Simulácia reálnych logistických tokov", "Tréning rozhodovania", "Pochopenie princípov štíhlej výroby", "Testovanie optimalizačných scenárov v praxi", "Vzdelávací nástroj pre stredné a vysoké školy", "Praktická výučba optimalizačných princípov", "Odborné školenia a workshopy pre firmy"],
      },
    ],
  },

  // ─── Referencie ──────────────────────────────────────────────
  references: {
    title: "Referencie",
    subtitle: "Úspešne realizované projekty",
    categories: [
      {
        id: "automotive",
        name: "Automotive",
        projects: [
          {
            name: "Digitalizácia výrobnej linky",
            description: "Kompletná digitalizácia výrobnej linky pre automotive komponentov s implementáciou Industry 4.0 technológií.",
            highlights: ["Zvýšenie produktivity o 32%", "Zníženie výrobných chýb o 45%", "ROI dosiahnuté za 18 mesiacov", "Plocha projektu 15,000 m²"],
            media: { type: "video", src: "/atdigital_web/reference/file_example_MP4_1280_10MG.mp4", alt: "Výrobná linka" },
          },
          {
            name: "Automatizácia montážnej linky",
            description: "Nasadenie kolaboratívnych robotov a vizuálnej inšpekcie na montážnu linku pre výrobu brzdových systémov.",
            highlights: ["6 kolaboratívnych robotov", "100% vizuálna kontrola", "Takt time znížený o 28%", "Zero-defect výroba"],
            media: { type: "image", src: "/atdigital_web/reference/Project-Managers-in-a-Meeting-1024x722.jpg", alt: "Výrobná Photo" },
          },
          {
            name: "Digitálny dvojča lisovne",
            description: "Vytvorenie digitálneho dvojčaťa lisovacieho procesu s real-time monitoringom a prediktívnou údržbou.",
            highlights: ["Real-time monitoring 24/7", "Prediktívna údržba", "Úspora energií 18%", "OEE zvýšené na 89%"],
          },
        ],
      },
      {
        id: "elektronika",
        name: "Elektronika",
        projects: [
          {
            name: "Flexibilná montážna linka",
            description: "Návrh a realizácia flexibilnej montážnej linky pre elektroniku s integrovanými AGV systémami a robotizáciou.",
            highlights: ["Kapacita 2M ks/rok", "15 produktových variant", "85% automatizácia", "Time to market -40%"],
          },
          {
            name: "Smart testovacia stanica",
            description: "Vývoj automatizovanej testovacej stanice s AI-podporovanou analýzou defektov pre PCB dosky.",
            highlights: ["AI detekcia defektov", "Testovací čas -65%", "False positive <0.1%", "Integrácia s MES"],
          },
        ],
      },
      {
        id: "logistika",
        name: "Logistika",
        projects: [
          {
            name: "Optimalizácia skladu a logistiky",
            description: "Redesign skladových procesov s implementáciou WMS systému a automatizovaných skladových riešení.",
            highlights: ["Skladová kapacita +60%", "Čas vybavenia objednávky -55%", "Presnosť zásob 99.5%", "Náklady na m² -25%"],
          },
          {
            name: "AGV systém pre internú logistiku",
            description: "Implementácia flotily autonómnych vozíkov pre zásobovanie výrobných liniek s centrálnym riadiacim systémom.",
            highlights: ["12 AGV vozíkov", "Zásobovanie 8 liniek", "Eliminácia manuálnej prepravy", "ROI za 14 mesiacov"],
          },
        ],
      },
    ],
  },

  // ─── O nás ───────────────────────────────────────────────────
  about: {
    title: "O nás",
    subtitle: "Váš partner pre digitálnu transformáciu",
    contact: {
      company: "Digital Consulting s.r.o.",
      address: "Technologická 123, 841 04 Bratislava",
      phone: "+421 2 1234 5678",
      email: "emailexample@gmail.com",
      ico: "12345678",
      dic: "2023456789",
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
