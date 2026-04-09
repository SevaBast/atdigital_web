import type { SiteContent } from "@/content/types";
import { skArticles } from "../articles/sk";

// ═══════════════════════════════════════════════════════════════
// 🇸🇰  SLOVENČINA — Obsah stránky (bez článkov)
// ═══════════════════════════════════════════════════════════════
// Stačí upraviť texty nižšie a zmeny sa okamžite prejavia na stránke.

export const sk: SiteContent = {
  // ─── Navigácia ───────────────────────────────────────────────
  navigation: {
    logo: "Digitálna transformácia",
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
    title: "Digitálna transformácia",
    subtitle: "Inovatívne Riešenia pre Modernú Priemyselnú Výrobu",
    description: "AT Digital je technologická spoločnosť, orientovaná na výskum a inovácie v oblasti digitalizácie výrobných a logistických procesov s využitím pokrokových technológií digitálneho podniku.",
    atparkText: "Sme súčasťou",
    atparkLink: "ATPark",
    buttons: {
      services: "Naše služby",
      academia: "Akadémia",
    },
    features: [
      "Digitalizácia výroby",
      "3D skenovanie",
      "Projektovanie výroby",
      "Projektovanie logistiky",
      "Optimalizácia procesov",
      "Smart Factory",
      "Simulačné hry",
      "Vývoj softvéru",
    ],
  },

  // ─── Partneri ────────────────────────────────────────────────
  partners: {
    title: "Dôverujú nám",
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
      { name: "Schafer Menk ", image: "/partners/sm.webp" },
      { name: "Tatravagonka", image: "/partners/tatravagonka.webp" },
      { name: "Tuke", image: "/partners/tuke.webp" },
      { name: "Univerzita Tomáše Bati ve Zlíne", image: "/partners/bata.webp" },
      { name: "Witte", image: "/partners/witte.webp" },
      { name: "26HOUSE", image: "/partners/26house.webp" },
      { name: "DATACQUAINT", image: "/partners/datacquaint.webp" },
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
          { name: "Tvorba digitálnej dokumentácie v 2D/3D", icon: "FileText", description: "Vypracujeme kompletné riešenie od aktualizácie pôdorysov do skutočného stavu cez tvorbu technologických layoutov až po parametrické 3D modely. Získate tak spoľahlivý podklad pre inžinierske procesy, investičné zámery a efektívny manažment zmien.", benefits: ["Presný dátový základ", "Detekcia kolízií", "Manažment zmien a výrobných dispozícií"] },
          { name: "Vizualizácia", icon: "Eye", description: "Prezentujte vaše investičné zámery vo virtuálnom prostredí, čím zrýchlite schvaľovacie procesy a získate jasnú predstavu ešte pred fázou realizácie.", benefits: ["Vizualizácie budúcich prevádzok a technologických celkov", "Marketingová podpora investičných projektov"] },
          { name: "3D skenovanie a digitalizácia", icon: "Scan", description: "Získajte digitálny základ pre vaše investičné zámery prostredníctvom laserového skenovania, ktoré eliminuje nepresnosti pri plánovaní zmien.", benefits: ["Presná dokumentácia skutkového stavu", "Základ pre 3D projektovanie výroby", "Eliminácia kolízií ešte pred realizáciou", "Dokumentácia skutkového stavu haly", "Skrátenie času merania a obmedzenie odstávok výroby", "Podklad pre tvorbu digitálneho dvojčaťa"] },
        ],
      },
      {
        id: "projektovanie",
        name: "Projektovanie",
        services: [
          { name: "Vnútropodniková logistika ", icon: "Truck", description: "Ponúkame vám odborný pohľad na modernizáciu vnútropodnikovej logistiky, od návrhu stratégie, až po dynamickú verifikáciu procesov.", benefits: ["Návrh transportných dávok a manipulačných jednotiek", "Audit logistických procesov s následnou optimalizáciou", "Návrh konceptov automatizovanej logistiky", "Simulácia logistických kapacít"] },
          { name: "Skladové hospodárstvo ", icon: "Warehouse", description: "Získajte efektívne riadenie skladového hospodárstva, od optimalizácie skladových zásob a procesov až po implementáciu moderných technológií", benefits: ["Dimenzovanie kapacít a výpočet optimálneho využitia plôch.", "Simulácia pre overenie výkonnosti skladových systémov", "Návrh automatizácie skladov a výber vhodných technológií", "Štúdia rozvoja a expanzie skladových priestorov/zón"] },
          { name: "Výrobný systém", icon: "Factory", description: "Komplexné technické riešenie a návrh pracoviska s detailným návrhom pracovísk, vrátane špecifikácie vybavenia, zástavby a napojenia na energie pre požiadavky výroby.", benefits: ["Optimalizácia kľúčových výrobných parametrov", "Validácia riešení a definovanie KPI", "Kapacitné plánovanie a rozvrhovanie", "Definovanie taktu a cieľového OEE"] },
          { name: "Štúdie realizovateľnosti", icon: "ClipboardCheck", description: "Využite našu externú podporu pri validácii vašich zámerov a získajte objektívny pohľad na technickú a ekonomickú uskutočniteľnosť vašich inovačných zámerov.", benefits: ["Implementácia nových produktov do výroby", "Automatizácia a robotizácia procesov", "Rozvoj a expanzia výrobných kapacít"] },
        ],
      },
      {
        id: "optimalizacia-std",
        name: "Optimalizácia a štandardizácia",
        services: [
          { name: "Vyváženie a taktovanie procesov", icon: "Scale", description: "Optimálne rozloženie operácií na linke zabezpečí rovnomerne vyťaženie pracovísk a odstráni úzke miesta pre zabezpečenie plynulosti toku výroby.", benefits: ["Odstránenie úzkych miest v procesoch", "Vybalansovanie pracovísk pre ich rovnomerné vyťaženie", "Plynulosť toku bez zbytočných prestojov a čakaní."] },
          { name: "Data & Process Mining", icon: "Database", description: "Prostredníctvom hĺbkovej analýzy digitálnych informácií o vašich procesoch odhalíme skutočný priebeh výroby a logistiky, identifikujeme odchýlky od ideálneho stavu a navrhneme riešenia založené na reálnych dátach.", benefits: ["Odhalenie odchýlok od ideálneho stavu", "Získanie prehľadu o skutočnom stave procesov", "Identifikácia skrytých vád a neefektívnych krokov v systéme."] },
          { name: "Ergonomické posúdenie", icon: "User", description: "Identifikujeme a eliminujeme riziká pri práci zamestnancov, čím znížime mieru ich únavy, chybovosti a zabezpečíme bezpečnosť pracovísk v zmysle legislatívy.", benefits: ["Eliminácia rizík a korekcia nebezpečných pohybov", "Roztaktovanie pracovísk pre ich rovnomerné vyťaženie", "Plynulosť toku bez zbytočných prestojov a čakaní."] },
          { name: "Normovanie a štandardizácia", icon: "Ruler", description: "Definovanie exaktných časových štandardov pre nové produkty aj existujúcu výrobu. Tieto dátové podklady umožňujú následnú optimalizáciu či robotizáciu pracovísk.", benefits: ["Definovanie štandardov", "Zlepšenie plánovania", "Tvorba časových noriem"] },
        ],
      },
      {
        id: "rnd",
        name: "R&D",
        services: [
          { name: "Návrh a spracovanie výskumných projektov", icon: "Lightbulb", description: "Získajte komplexné zastrešenie inovačných projektov v oblasti digitalizácie a Smart Factory, od úvodnej štúdie uskutočniteľnosti až po návrh metodiky a technickú realizáciu výskumných úloh.", benefits: ["Technická realizácia aplikovaných výskumných úloh", "Overenie možnosti nasadenia inovácií formou štúdií realizovateľnosti", "Tvorba metodík pre digitálnu transformáciu a Smart Factory"] },
          { name: "Digitalizácia inžinierskeho know-how", icon: "Cpu", description: "Transformujeme vaše interné expertné znalosti do softvérových algoritmov, čím zabezpečíme štandardizáciu a automatizáciu zložitých rozhodovacích úloh vo vašom podniku.", benefits: ["Automatizácia úloh a rozhodovacích procesov", "Štandardizácia práce a eliminácia ľudských chýb", "Prevod znalostí do inteligentných algoritmov"] },
          { name: "Spracovanie inovačných a výskumných projektov", icon: "Rocket", description: "Získajte partnera na vývoj metodík a technických riešení pre digitálnu transformáciu, ktoré posúvajú hranice vašej súčasnej výroby smerom k Smart Factory.", benefits: ["Technické riešenia pre vyššiu úroveň digitalizácie", "Implementácia poznatkov z oblasti R&D do výroby", "Návrh metodík pre rozvoj Smart Factory"] },
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
        //media: { type: "youtube", src: "ZK-rNEhJIDs" },
        description: "Riadenie zásob je webová aplikácia na komplexnú správu a optimalizáciu skladových zásob s podporou AI, automatických prognóz a prepojenia na externé systémy, ako SQLite, Odoo a pod. Ponúkame vám inteligentný nástroj na riadenie zásob, ktorý v reálnom čase analyzuje stav skladu, automaticky klasifikuje skladové položky, predpovedá budúci dopyt a navrhuje konkrétne nákupné a optimalizačné riešenia – všetko na jednom mieste.",
        features: ["Získate okamžitú informáciu o výkonnosti Vášho skladu", "Automatické roztriedenie položiek podľa hodnoty a predpovedaného dopytu", "Predpoveď budúcej spotreby a detekcia sezónnosti", "Výpočet optimálnych objednávacích množstiev, poistnej zásoby a signálnych hladín", "Prehľad položiek vyžadujúcich okamžité objednanie s nákupnými odporúčaniami", "Sledovanie jednotlivých komponentov a zákaziek v reálnom čase", "Jednoduché zdieľanie plánov a reportov"],
      },
      {
        id: "sw-planovanie-vyroby",
        name: "SW Plánovanie výroby",
        icon: "CalendarClock",
        description: "Ponúkame vám aplikáciu pre komplexné plánovanie výrobných zákaziek s podporou MRP a rozkladu kusovníkov. Nástroj pokrýva celý cyklus od správy materiálu až po expedíciu a pomocou optimalizovaného Ganttovho diagramu s viacerými stratégiami plánovania zabezpečuje maximálnu efektivitu vašej výroby.",
        features: ["Plánovanie zákaziek: Automatické rozplánovanie výroby s ohľadom na termíny a priority.", "Správa materiálu: Prehľad skladových zásob, dostupnosti a materiálových požiadaviek", "Kusovník (BOM): Štruktúra produktu – čo a koľko treba vyrobiť pre každú zákazku", "Gantt diagram: Vizuálny prehľad rozvrhu výroby na strojoch v čase", "Správa strojov a pracovísk: Kapacity, vyťaženie, údržba a stav každého stroja", "Kompletizácia: Sledovanie dokončenosti jednotlivých komponentov a zákaziek", "Export do Excelu: Jednoduché zdieľanie plánov a reportov"],
      },
      {
        id: "sw-digital-twin",
        name: "Digitálne dvojča",
        icon: "Copy",
        description: "Digitálne dvojča je webová aplikácia pre vytvorenie presnej digitálnej kópie vašej fyzickej prevádzky – výrobných liniek, logistických tokov, skladových priestorov a údržbárskych procesov. Systém v reálnom čase synchronizuje dáta zo senzorov, strojov a podnikových systémov do živého digitálneho modelu, ktorý verne odráža skutočný stav prevádzky. Digitálnym dvojčaťom získate plnú transparentnosť, schopnosť predvídať udalosti a nástroj na kontinuálne zlepšovanie procesov – bez zásahu do reálnej infraštruktúry.",
        features: ["Presný virtuálny model fyzických aktív, procesov a vzťahov medzi nimi aktualizovaný v reálnom čase", "Kontinuálny zber dát zo senzorov, PLC systémov a IoT zariadení s okamžitou vizualizáciou stavov", "Detekcia anomálií a včasná identifikácia porúch zariadení na základe historických a aktuálnych vzorcov správania", "Testovanie zmien, scenárov alebo poruchových stavov priamo v digitálnom modeli bez dopadu na reálnu prevádzku", "Vizualizácia pohybu materiálu, komponentov a zásielok naprieč celým dodávateľským reťazcom", "Výkonnostné ukazovatele a štatistiky"],
      },
      {
        id: "smart-sensor-systems",
        name: "Smart senzorické systémy",
        icon: "Radio",
        description: "Ponúkame Vám systémy inteligentného monitoringu pre zber a vyhodnocovanie dát v reálnom čase. Integrujeme pokročilé senzory pre vibrodiagnostiku, kamerovú inšpekciu a lokalizáciu, čím zabezpečujeme prediktívny prístup k riadeniu prevádzky.",
        features: ["Vibrodiagnostika strojov a zariadení", "Inteligentné kamerové systémy", "Lokalizačné systémy v reálnom čase (RTLS)", "Senzorické siete pre zber dát", "Monitoring, vizualizácia a simulácia stavov procesov"],
      },
      {
        id: "vr-ar",
        name: "VR & AR",
        icon: "Glasses",
        description: "Komplexné riešenia v oblasti virtuálnej a rozšírenej reality, ktoré transformujú tradičné postupy na interaktívne zážitky. Ponúkame Vám riešenia od vzdelavacích trenažérov až po virtuálne showroomy.",
        features: ["Interaktívne vzdelávanie a trenažéry", "Virtuálne laboratóriá a múzeá", "Showroomy a prezentačné miestnosti", "Vizuálna podpora údržby a montáže", "Digitálne galérie s interaktívnym obsahom"],
      },
      {
        id: "plugflow",
        name: "PlugFlow",
        icon: "Workflow",
        description: "PlugFlow je simulačná hra navrhnutá pre praktický tréning procesného myslenia a princípov smart priemyslu. Produkt ponúkame ako vzdelávaciu pomôcku pre tréningové centrá, vzdelávacie inštitúcie, ale aj ako formu odborných školení a workshopov zameraných na optimalizáciu tokov v podnikovej praxi.",
        features: ["Simulácia reálnych logistických tokov", "Tréning rozhodovania", "Pochopenie princípov štíhlej výroby", "Testovanie optimalizačných scenárov v praxi", "Vzdelávací nástroj pre stredné a univerzity", "Praktická výučba optimalizačných princípov", "Odborné školenia a workshopy pre firmy"],
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
            highlights: ["Digitalizácia priestorov pomocou laserového skenovania pre elimináciu kolízií pri zástavbe technológií", "Dynamické preverenie kapacít pre presný výpočet potrebných výrobných a logistických zariadení", "Optimalizácia investície odborným porovnaním variantov manuálnej a automatizovanej výroby", "Garantovaný ročný výkon celého systému vďaka presne navrhnutým výrobným sekvenciám", "Kompletný realizačný podklad vo forme 3D prehliadky a harmonogramu implementácie"],
          },
          {
            name: "Detailne projektovanie výroby konštrukcii v oblasti defence",
            description: "Realizácia priestorovej dispozície novej haly a detailný návrh pracovísk pre segment defence. Kapacitné prepočty a dátová validácia procesov definovali presné umiestnenie technologických uzlov v parametrizovanom layoute, ktorého výstupom bolo technické zadanie pre zástavbu technológií zohľadňujúc špecifické požiadavky a bezpečnosť špeciálnej výroby.",
            highlights: ["Optimálny návrh layoutu so zástavbou technológií, skladových zón a logistických trás.", "Kapacitné dimenzovanie výrobných zdrojov a personálu.", "Kvantifikácia medzioperačných plôch pre plynulý výrobný cyklus bez úzkych miest.", "Spracovanie technického generelu novej haly ako finálneho podkladu pre realizáciu."],
          },
          {
            name: "Projekt návrhu usporiadania generelu strojárskeho závodu",
            description: "Hlavným cieľom projektu je navrhnúť optimálnu priestorovú dispozíciu výrobného závodu za účelom zvýšenia podielu automatizácie a efektívnosti výroby.",
            highlights: ["Optimalizácia výrobných noriem, Návrh a simulácia postupných investícií do výrobných technológií.", "Maximálna optimalizácia investičných nákladov.", "Varianty riešenia zohľadňujúce kapacitné požiadavky a stupeň automatizácie.", "Parametrizácia kapacít pre plánovanie produktových mixov."],
          },
        ],
      },
      {
        id: "skladove-hospodarstvo",
        name: "Skladové hospodárstvo",
        projects: [
          {
            name: "SSI Schäfer",
            description: "Návrh optimálneho dispozičného riešenia skladu s využitím systémov Logimat",
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom distribučnom centre", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie efektivity logistiky", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest", "Minimalizácia prevádzkových nákladov (OPEX) cez optimalizovaný mix logistiky", "Zníženie závislosti na manuálnej práci prostredníctvom cielenej automatizácie do systémov Logimat"],
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
            highlights: ["Maximálne využitie plochy a úplná eliminácia fragmentácie zásob v novom závode", "Nastavenie logistických okruhov (Lean Supply) pre zvýšenie stability tokov", "Simulácia logistiky pre overenie priepustnosti a odstránenie úzkych miest"],
          },
          {
            name: "Návrh systému skladovania a kapacitné dimenzovanie skladového priestoru",
            description: "Návrh skladového systému efektívneho skladovanie big-bagov s kapacitne nadimenzovanými skladovacími priestormi s ohľadom na dispozičné možnosti",
            highlights: ["Návrh riešenia skladového systému", "Definovanie možností stohovania big-bag", "Prepočet kapacity na uskladnenie podľa vstupných parametrov", "Umiestnenie paliet v priestore so zakreslením", "Výpočet skladovej plochy pre definované množstvo", "Umiestnenie paliet v priestore so zakreslením", "Návrh manipulačných uličiek podľa typu manipulačnej techniky", "Simulácia hladiny zásob po zadefinovaní frekvencie zaskladňovania a vyskladňovania" ],
          },
        ],
      },
      {
        id: "zlepšovanie-procesu-vyroby",
        name: "Zlepšovanie procesu výroby",
        projects: [
          {
            name: "Optimalizácia procesov na pracoviskách výroby UW rámov v závode Schäfer Menk Praha",
            description: "Hlavným cieľom projektu bola optimalizácia pracovných operácii a ich následná konfigurácia na robotické pracovisko",
            highlights: ["Optimalizácia produkčných časov k jednotlivým operáciám ", " Konfigurácia a taktovanie technologického postupu človek – robot ", " Vybalancovanie technologického procesu", "Definovanie % využiteľnosti robotického pracoviska", "Skrátenie priebežnej doby výroby"],
          },
          {
            name: "Optimalizácia layoutu a logistického zásobovania liniek",
            description: "Hlavným cieľom projektu bolo navrhnúť optimálne dispozičné riešenie a koncept logistiky pre relokáciu 64 montážnych liniek do nových priestorov AUTOMOTIVE spoločnosti",
            highlights: ["Analýza súčasného systému a identifikácia úzkych miest", " Navrhnuté dispozičné riešenie pre relokáciu montážnych pracovísk", " Definovaná koncepcia zásobovania (Lean Supply) a navrhnuté logistické okruhy", " Určené kapacitné požiadavky na techniku a personál podľa cieľovej produktivity", " Navrhnutá miera automatizácie a optimálny mix manuálnej a robotickej logistiky"],
          },
        ],
      },
      {
        id: "laserove-skenovanie",
        name: "Laserové skenovanie",
        projects: [
          {
            name: " Zameranie reálneho stavu výrobných priestorov v spoločnostiEUROMILK",
            description: " Zameranie reálneho stavu vybraných výrobných priestorov v spoločnosti EUROMILK technológiou 3D laserového skenovania",
            highlights: ["3D laserové skenovanie vybraných výrobných priestorov podľa špecifikácie miestností", " Export dát pre TruView – prehliadač, ( formáte .LGS)", " Možnosť exportovať dáta pre AutoCAD, ( formáte .RCP)", " Zdieľanie dát na cloud",],
          },
        ],
      },
      {
        id: "planovanie-vyroby",
        name: "Plánovanie výroby",
        projects: [
          {
            name: "Bizlink",
            description: " Návrh systému pre podporu rozvrhovania výroby",
            highlights: ["Oboznámenie sa s výrobnou linkou a pravidlami rozvrhovania", "Definovanie algoritmu pre nástroj na rozvrhovanie", "Návrh a implementácia logiky ", "Vytvorenie užívateľského rozhrania", "Integračné testovanie a ladenie ", "Dokumentácia a školenie"],
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
      company: "AT Digital, s.r.o.",
      address: "Rosinská cesta 9, 010 08 Žilina",
      phone: "+421 918 111 990",
      email: "atdigital@atdigital.sk",
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
    copyright: "© 2026 ATDigital. Všetky práva vyhradené.",
    createdBy: {
      text: "Vytvoril",
      name: "Vsevolod Bastiuchenko",
      url: "https://www.linkedin.com/in/vsevolod-bastiuchenko-203a31196/",
    },
    links: {
      privacy: "",
      terms: "",
    },
  },
};
