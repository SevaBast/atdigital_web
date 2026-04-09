import type { Article } from "@/content/types";

// ═══════════════════════════════════════════════════════════════
// 🇸🇰  SLOVENČINA — Články akadémie
// ═══════════════════════════════════════════════════════════════

export const skArticles: Article[] = [
  {
    id: "process-mining",
    title: "Nový prístup k analýze výrobných procesov s podporou Data Science",
    description: "Článok predstavuje process mining ako inovatívnu metódu analýzy podnikových dát. Navrhuje a prakticky overuje vlastnú metodiku na reálnych výrobných dátach s využitím softvéru Fluxicon Disco.",
    author: "Krajčovič, M., Bastiuchenko, V., Furmannová, B., Botka, M., Komačka, D.",
    date: "2024-02-23",
    readingTime: 7,
    tags: ["Process Mining", "Data Science", "Výrobné procesy", "Optimalizácia"],
    pdfUrl: "https://drive.google.com/file/d/1plTJ-KQHmIP5DnirVvnKN6y6fB0QpTdj/view",
    content: `## Úvod do Process Mining
Process mining je inovatívny prístup k analýze podnikových dát, ktorý umožňuje systematickú extrakciu, analýzu a vizualizáciu digitálnych stôp v informačných systémoch. Táto technika vytvára prepojenia v rámci dát a formuje komplexné procesné mapy, ktoré slúžia ako základ pre analýzu, interpretáciu a zlepšovanie interných podnikových procesov.

V dnešnom prostredí, kde dynamika a konkurencia vo výrobe neustále rastú, je nevyhnutné aplikovať pokročilé analytické metódy pred implementáciou akýchkoľvek procesných zmien. Tradičné analytické metódy môžu byť obmedzené v schopnosti spracovať veľký objem dát a zvládnuť komplexnosť moderných výrobných systémov.

## Čo je Process Mining
Process mining je nová oblasť výskumu, ktorá kombinuje informačné vedy s analytickými štatistickými technológiami. Spája štatistiku, informatiku a matematické výpočty na určenie vzťahov medzi kľúčovými faktormi ako využitie, časové parametre a ďalšie. Cieľom je automatická konštrukcia procesného modelu na základe zaznamenaných udalostí z event logov dostupných v informačných systémoch (ERP, MES).

Základným vstupom je event log — záznam sekvenčných transakcií, udalostí alebo správaní, ktoré sa vyskytli v procese. Každý event log musí obsahovať minimálne tri elementy: Case ID (identifikátor prípadu), Activity (aktivita/krok procesu) a Timestamp (časová pečiatka).

## Algoritmy Process Mining
Základným algoritmom je α-miner (α-algoritmus), ktorý rekonštruuje kauzalitu zo sady sekvencií udalostí. Transformuje event log do workflow siete (Petri net) na základe vzťahov medzi aktivitami. Medzi tieto vzťahy patria: priama následnosť (Direct Succession), kauzalita (Causality), paralelizmus (Parallel) a voľba (Choice).

Okrem α-algoritmu existujú ďalšie algoritmy: heuristický miner (generuje modely na základe frekvencie výskytov), fuzzy miner (heuristický prístup vhodný pre zašumené dáta) a genetický algoritmus (GA miner). Kľúčovými faktormi sú rovnováha medzi fitness, presnosťou, generalizáciou a jednoduchosťou.

## Vlastná metodika analýzy výrobných procesov
Autori navrhli 15-krokovú metodiku analýzy výrobných procesov pomocou process mining:

1. Definovanie KPI (rozpracovanosť, priebežné časy, životný cyklus objednávok, prepracovanie, kapacity)

2. Stanovenie cieľov a otázok analýzy

3. Výber zdrojov dát (procesné logy, systémové záznamy, senzorové dáta, dáta z identifikátorov)

4. Extrakcia a čistenie dát (identifikácia, extrakcia, čistenie, normalizácia)

5. Transformácia dát (transformácia atribútov, agregácia, normalizácia času a identifikátorov)

6. Rozhodovací blok — kontrola formátu pre import

7. Prepojenie atribútov s dátami (Case ID, Activity, Timestamp)

8. Spracovanie dát softvérom (algoritmické výpočty, procesné mapy)

9. Rozhodovací blok — úspešnosť spracovania

10. Analýza procesnej mapy (časové, zdrojové a krokové filtrovanie)

11. Validácia dát (porovnanie s historickými dátami, štatistické overenie, expertné hodnotenie)

12. Rozhodovací blok — zhoda s reálnym modelom

13. Štatistická analýza (časové rady, regresná analýza, hodnotenie rozptylu)

14. Detailná analýza prípadov

15. Definovanie zlepšení a interpretácia výsledkov

## Prípadová štúdia
Metodika bola overená na reálnych dátach európskeho výrobného podniku špecializujúceho sa na veľké zvárané oceľové konštrukcie. Dáta boli extrahované z ERP systému a obsahovali informácie o strojoch, zariadeniach, manipulácii, príprave a obrábaní.

Surové dáta boli transformované a importované do softvéru Fluxicon Disco. Boli priradené kľúčové atribúty: časová pečiatka, číslo článku, výrobná objednávka, ID stroja a čísla operácií technologického postupu. Výstupom boli frekvenčné a výkonnostné procesné mapy.

## Kľúčové zistenia
Analýza odhalila kritické objednávky a zariadenia: objednávka A143503-1218326 (10 aktivít, celkové trvanie 29 dní a 5 hodín) a objednávka C402200-7155104 (11 aktivít, 25 dní a 18 hodín). Stroje 999201 a 942101 tvorili viac ako 36 % celého výrobného procesu.

Identifikované problémy zahŕňali dlhé manipulačné časy, dlhé časy spracovania a prestavovania, a dlhý čas prepracovania na stroji 942101 (31,5 dňa). Na základe segmentácie zariadení boli navrhnuté tri skupiny pre bunkovú výrobu s cieľom skrátenia priebežných časov.

## Dosiahnuté výsledky
V modelovom príklade sa podarilo dosiahnuť zníženie času výrobných cyklov o 15 % a zlepšenie využitia zdrojov o 20 %. Výsledkom bolo zvýšenie efektivity procesov a potenciálne zníženie potrebného počtu pracovníkov až o 10 %. Redukciou hlavných problémov (zníženie WIP a skrátenie priebežných časov) existuje potenciál zvýšiť efektivitu prebiehajúcich procesov minimálne o 30 %.

## Obmedzenia metódy
Process mining má aj svoje obmedzenia: závislosť na kvalite vstupných dát, časová náročnosť spracovania veľkých objemov dát, zložitosť interpretácie výsledkov, obmedzená predikčná kapacita a nutnosť správneho výberu časového obdobia analýzy. Pre niektoré organizácie môžu byť vhodnejšie alternatívne metódy ako Six Sigma alebo Lean.

## Záver
Process mining poskytuje významné výhody pri analýze a optimalizácii výrobných procesov. Umožňuje objaviť skryté vzory a variabilitu, identifikovať neefektívne kroky, zvýšiť transparentnosť procesov a podporiť dátovo orientované rozhodovanie. Spolupráca medzi akademickou sférou a priemyslom je kľúčová pre úspešnú aplikáciu týchto metód.`,
},
];
