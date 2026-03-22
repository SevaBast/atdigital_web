
# git deploy

Najprv buildnem, potom commitnem a pushnem.

- npm run build

Build OK. Teraz commitnem všetko a pushnem:

- git add -A; git commit -m "popis"
- git push origin main

Hotovo. Kód je pushnutý na main. Teraz treba počkať, kým GitHub Pages deployment dobehne (zvyčajne 1-2 minúty), a potom bude nová verzia dostupná na https://sevabast.github.io/atdigital_web/.
