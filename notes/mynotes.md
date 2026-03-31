
# git deploy

Najprv buildnem, potom commitnem a pushnem.

- npm run build

Build OK. Teraz commitnem všetko a pushnem:

- git add -A; git commit -m "popis"
- git push origin main

Hotovo. Kód je pushnutý na main. Teraz treba počkať, kým GitHub Pages deployment dobehne (zvyčajne 1-2 minúty), a potom bude nová verzia dostupná na https://sevabast.github.io/atdigital_web/.



1. PHP API + MySQL na Websupport
Ako to funguje
Flow
Návštevník:

Otvorí atdigital.sk → načíta React web
React zavolá atdigital.sk/api/articles.php?lang=sk → PHP vráti JSON z MySQL
Akadémia zobrazí články
Admin (ty):

Otvorí atdigital.sk/admin → načíta admin SPA
Prihlásenie (PHP session/JWT)
Vytvorí/upraví článok → POST na /api/articles.php → uloží do MySQL
Zmena je okamžite live
Čo treba napísať
~5 PHP súborov (CRUD pre články, auth, upload obrázkov)
Admin UI v Reacte (formuláre, rich text editor, zoznam článkov)
MySQL tabuľky (articles, users, media)
Celkovo cca 2–4 dni práce
Výhody / Nevýhody
Plná kontrola, žiadne tretie strany, žiadne limity
Ale: musíš napísať aj udržiavať backend + admin panel
Bezpečnosť (SQL injection, auth, CSRF) je na tebe
2. Admin panel cez GitHub — Decap CMS
Áno, toto je tretia cesta a pre tvoj prípad veľmi zaujímavá:

Ako to funguje
Články sú Markdown súbory priamo v GitHub repozitári (/content/articles/)
Admin panel je Decap CMS — beží na atdigital.sk/admin (je to len HTML/JS)
Keď uložíš článok v admin paneli → Decap urobí commit do GitHub
GitHub Actions spustí build → výsledok sa nahrá na Websupport cez FTP
Čo to vyžaduje
Krok	Čo
1	Pridať Decap CMS do projektu (1 HTML + 1 YAML konfig)
2	Nastaviť GitHub OAuth (aby sa admin dal prihlásiť)
3	Články ako .md súbory v repo
4	GitHub Actions workflow: build → FTP deploy na Websupport
Príklad admin konfigurácie
Reálny workflow
Otvoríš atdigital.sk/admin
Prihlásenie cez GitHub
Klikneš "Nový článok" → WYSIWYG editor
Uložíš → commit do GitHub → Actions buildne → FTP na Websupport
O 2–3 minúty je článok live
Porovnanie pre tvoj prípad
PHP + MySQL	Decap CMS + GitHub	Sanity
Kde sú dáta	MySQL na Websupport	Git repo (MD súbory)	Sanity cloud
Admin	Musíš napísať	Hotový (Decap)	Hotový (Studio)
Závislosť	Žiadna	GitHub	Sanity.io
Náklady	0 €	0 €	0 €
Delay po úprave	Okamžite	2–3 min (build)	Okamžite
Práca na implementáciu	Najviac	Najmenej	Stredná
Rich text editor	Musíš pridať	Markdown WYSIWYG	Portable Text
Kompatibilita Websupport	100% (PHP+MySQL)	100% (statické)	100% (statické)
Moje odporúčanie
Pre tvoj prípad (firemný web, pár článkov mesačne, 1 admin) je Decap CMS + GitHub najlepší pomer práca/výsledok:

Admin panel je hotový za 30 minút
Všetko zostáva v tvojom GitHub repo
Žiadna databáza, žiadny backend, žiadna tretia strana (okrem GitHub čo už používaš)
2–3 min delay po uložení je pre teba úplne akceptabilný