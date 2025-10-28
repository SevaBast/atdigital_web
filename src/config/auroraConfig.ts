/**
 * Aurora Background Configuration
 * 
 * Tu môžeš meniť všetky farby a parametre Aurora efektu
 */

export const auroraConfig = {
  // === FARBY AURORA EFEKTU ===
  // Tieto farby tvoria severné svetlo
  colors: {
    // Hlavná modrá (--blue-500)
    blue500: "59 130 246",      // rgb(59, 130, 246) - Jasná modrá
    
    // Indigo svetlá (--indigo-300)
    indigo300: "165 180 252",   // rgb(165, 180, 252) - Svetlá indigo
    
    // Modrá svetlá (--blue-300)
    blue300: "147 197 253",     // rgb(147, 197, 253) - Svetlá modrá
    
    // Fialová svetlá (--violet-200)
    violet200: "221 214 254",   // rgb(221, 214, 254) - Veľmi svetlá fialová
    
    // Modrá stredná (--blue-400)
    blue400: "96 165 250",      // rgb(96, 165, 250) - Stredná modrá
  },

  // === ANIMÁCIA ===
  animation: {
    // Rýchlosť animácie v sekundách
    duration: "60s",            // Predvolené: 60s (pomalšia = 120s, rýchlejšia = 30s)
    
    // Typ animácie
    timingFunction: "linear",   // linear | ease | ease-in | ease-out | ease-in-out
    
    // Nekonečná slučka
    iterationCount: "infinite",
  },

  // === BLUR EFEKT ===
  blur: {
    // Intenzita rozmazania
    amount: "10px",             // Predvolené: 10px (viac = 20px, menej = 5px)
  },

  // === OPACITY ===
  opacity: {
    // Priehľadnosť celého efektu
    main: "0.5",                // Predvolené: 0.5 (0 = neviditeľné, 1 = plne viditeľné)
  },

  // === RADIAL GRADIENT MASK ===
  // Týmto vytvoríš fokus v určitej oblasti
  radialGradient: {
    enabled: true,              // Zapnúť/vypnúť radial mask
    
    // Pozícia centra (ellipse_at_X_Y)
    position: {
      x: "100%",                // 0% = vľavo, 50% = stred, 100% = vpravo
      y: "0%",                  // 0% = hore, 50% = stred, 100% = dole
    },
    
    // Veľkosť viditeľnej oblasti
    visibleArea: "10%",         // Čierna oblasť (viditeľná aurora)
    fadeArea: "70%",            // Kde začína fade do transparentnej
  },

  // === BACKGROUND VEĽKOSŤ ===
  backgroundSize: {
    primary: "300%",            // Veľkosť prvej vrstvy gradientu
    secondary: "200%",          // Veľkosť druhej vrstvy (aurora)
    afterPrimary: "200%",       // After pseudo-element prvá vrstva
    afterSecondary: "100%",     // After pseudo-element druhá vrstva
  },

  // === PRESETY PRE RÔZNE ŠTÝLY ===
  presets: {
    // Severné svetlá (predvolené)
    northern: {
      blue500: "59 130 246",
      indigo300: "165 180 252",
      blue300: "147 197 253",
      violet200: "221 214 254",
      blue400: "96 165 250",
    },

    // Zelené aurora (Iceland vibe)
    green: {
      blue500: "34 197 94",      // Zelená
      indigo300: "134 239 172",  // Svetlá zelená
      blue300: "167 243 208",    // Mentolová
      violet200: "187 247 208",  // Svetlá tyrkysová
      blue400: "52 211 153",     // Smaragdová
    },

    // Ružová/fialová (sunset vibe)
    sunset: {
      blue500: "236 72 153",     // Ružová
      indigo300: "249 168 212",  // Svetlá ružová
      blue300: "244 114 182",    // Sýta ružová
      violet200: "250 204 21",   // Zlatá
      blue400: "251 146 60",     // Oranžová
    },

    // Modrá/tyrkysová (ocean vibe)
    ocean: {
      blue500: "6 182 212",      // Tyrkysová
      indigo300: "103 232 249",  // Svetlá tyrkysová
      blue300: "34 211 238",     // Cyan
      violet200: "165 243 252",  // Ice blue
      blue400: "14 165 233",     // Sky blue
    },

    // Červená/oranžová (fire vibe)
    fire: {
      blue500: "239 68 68",      // Červená
      indigo300: "251 146 60",   // Oranžová
      blue300: "252 211 77",     // Žltá
      violet200: "254 240 138",  // Svetlá žltá
      blue400: "249 115 22",     // Tmavá oranžová
    },
  },
};

/**
 * NÁVOD NA POUŽITIE:
 * 
 * 1. ZMENA FARIEB:
 *    - Zmeň hodnoty v `auroraConfig.colors`
 *    - Alebo použi preset: `auroraConfig.colors = auroraConfig.presets.green`
 * 
 * 2. ZMENA RÝCHLOSTI:
 *    - Uprav `auroraConfig.animation.duration`
 *    - 30s = rýchla, 60s = normálna, 120s = pomalá
 * 
 * 3. ZMENA BLUR-U:
 *    - Uprav `auroraConfig.blur.amount`
 *    - 5px = ostrá, 10px = normálna, 20px = veľmi rozmazaná
 * 
 * 4. ZMENA OPACITY:
 *    - Uprav `auroraConfig.opacity.main`
 *    - 0.3 = jemná, 0.5 = normálna, 0.8 = intenzívna
 * 
 * 5. FOKUS OBLASTI:
 *    - Zmeň `auroraConfig.radialGradient.position` pre iný fokus
 *    - Vypni `enabled: false` pre rovnomerný efekt
 */
