// Prism Background Configuration
// Editujte tieto hodnoty pre zmenu vzhľadu Prism efektu

export const prismConfig = {
  // Typ animácie: 'rotate' | 'hover' | '3drotate'
  animationType: 'rotate' as 'rotate' | 'hover' | '3drotate',
  
  // Rýchlosť animácie (0 = žiadna animácia, 1 = normálna, 2 = dvojnásobná)
  timeScale: 0.5,
  
  // Geometria
  height: 3.5,           // Výška prizmy
  baseWidth: 5.5,        // Šírka základne
  scale: 3.6,            // Celková veľkosť
  
  // Farby a efekty
  hueShift: 0,           // Posun farieb (0-360, kde 0 = modrá)
  colorFrequency: 1,     // Frekvencia farebných vzorov
  glow: 1,               // Intenzita žiarenia (0-2)
  bloom: 1,              // Bloom efekt (0-2)
  noise: 0,            // Šum/grain (0-1)
  
  // Interakcia (iba pre animationType: 'hover')
  hoverStrength: 2,      // Sila hover efektu
  inertia: 0.05,         // Zotrvačnosť pohybu (0-1)
  
  // Výkon
  transparent: true,     // Priehľadné pozadie
  suspendWhenOffscreen: true, // Pozastaviť animáciu mimo obrazovky
  
  // Pozícia
  offset: { x: 0, y: 0 } // Posun X a Y v pixeloch
};

// Farebné presety (zmeňte hueShift hodnotu)
export const colorPresets = {
  blue: 0,        // Modrá (predvolená)
  purple: 60,     // Fialová
  pink: 90,       // Ružová
  red: 120,       // Červená
  orange: 180,    // Oranžová
  yellow: 210,    // Žltá
  green: 270,     // Zelená
  cyan: 330,      // Tyrkysová
};

// Príklady rôznych nastavení:
export const stylePresets = {
  // Jemný a tichý
  subtle: {
    ...prismConfig,
    glow: 0.5,
    bloom: 0.5,
    noise: 0.3,
    colorFrequency: 0.5,
  },
  
  // Intenzívny a živý
  intense: {
    ...prismConfig,
    glow: 1.5,
    bloom: 1.5,
    noise: 0.7,
    colorFrequency: 1.5,
    timeScale: 0.8,
  },
  
  // Pomalá rotácia
  slow: {
    ...prismConfig,
    timeScale: 0.2,
  },
  
  // Rýchla rotácia
  fast: {
    ...prismConfig,
    timeScale: 1.2,
  },
  
  // 3D rotácia
  rotating3d: {
    ...prismConfig,
    animationType: '3drotate' as 'rotate' | 'hover' | '3drotate',
    timeScale: 0.3,
  },
  
  // Interaktívny hover
  interactive: {
    ...prismConfig,
    animationType: 'hover' as 'rotate' | 'hover' | '3drotate',
    hoverStrength: 2.5,
    inertia: 0.08,
  },
};
