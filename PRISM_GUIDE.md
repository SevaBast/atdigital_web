# 🎨 Prism Background - Návod na úpravu

Prism je pokročilý WebGL komponent vytvárajúci animované 3D pozadie na hero sekcii.

## 📁 Súbory

- **`src/components/Prism.tsx`** - Hlavný komponent (neupravujte, ak neviete čo robíte)
- **`src/components/Prism.css`** - Štýly
- **`src/config/prismConfig.ts`** - **UPRAVUJTE TU** - Všetky nastavenia efektu

## ⚙️ Ako upraviť vzhľad

Otvorte súbor: `src/config/prismConfig.ts`

### Základné nastavenia

```typescript
export const prismConfig = {
  animationType: 'rotate',  // Typ animácie
  timeScale: 0.5,          // Rýchlosť (0-2)
  
  // Geometria
  height: 3.5,             // Výška prizmy
  baseWidth: 5.5,          // Šírka základne
  scale: 3.6,              // Celková veľkosť
  
  // Farby a efekty
  hueShift: 0,             // Posun farieb (0-360)
  colorFrequency: 1,       // Frekvencia vzorov
  glow: 1,                 // Žiarenie (0-2)
  bloom: 1,                // Bloom efekt (0-2)
  noise: 0.5,              // Šum (0-1)
}
```

## 🎨 Zmena farby

Použite hodnotu z `colorPresets`:

```typescript
import { prismConfig, colorPresets } from '@/config/prismConfig';

// Zmeniť na fialovú
prismConfig.hueShift = colorPresets.purple;

// Zmeniť na zelenú
prismConfig.hueShift = colorPresets.green;
```

**Dostupné farby:**
- `blue: 0` - Modrá (predvolená)
- `purple: 60` - Fialová
- `pink: 90` - Ružová
- `red: 120` - Červená
- `orange: 180` - Oranžová
- `yellow: 210` - Žltá
- `green: 270` - Zelená
- `cyan: 330` - Tyrkysová

## 🔄 Typy animácie

### 1. Rotate (predvolená)
```typescript
animationType: 'rotate'
```
Jednoduchá rotácia okolo osi.

### 2. 3D Rotate
```typescript
animationType: '3drotate'
```
Komplexná 3D rotácia s náhodnými pohybmi.

### 3. Hover (interaktívna)
```typescript
animationType: 'hover'
```
Reaguje na pohyb myši.

## 🎭 Hotové štýly (Presety)

V súbore `prismConfig.ts` sú pripravené presety:

```typescript
import { stylePresets } from '@/config/prismConfig';

// Použiť preset:
export const prismConfig = {
  ...stylePresets.intense  // alebo .subtle, .slow, .fast, atď.
};
```

**Dostupné presety:**
- `subtle` - Jemný a tichý
- `intense` - Intenzívny a živý
- `slow` - Pomalá rotácia
- `fast` - Rýchla rotácia
- `rotating3d` - 3D rotácia
- `interactive` - Interaktívny hover

## 📊 Parametre v detaile

| Parameter | Typ | Rozsah | Popis |
|-----------|-----|--------|-------|
| `animationType` | string | rotate, hover, 3drotate | Typ animácie |
| `timeScale` | number | 0-2 | Rýchlosť animácie (0 = stop) |
| `height` | number | 0.1+ | Výška 3D tvaru |
| `baseWidth` | number | 0.1+ | Šírka základne |
| `scale` | number | 0.1+ | Celková veľkosť |
| `hueShift` | number | 0-360 | Posun farebného spektra |
| `colorFrequency` | number | 0+ | Hustota farebných vzorov |
| `glow` | number | 0-2 | Intenzita žiarenia |
| `bloom` | number | 0-2 | Bloom post-processing |
| `noise` | number | 0-1 | Film grain efekt |
| `hoverStrength` | number | 0+ | Sila hover efektu |
| `inertia` | number | 0-1 | Zotrvačnosť hover pohybu |
| `offset` | object | {x, y} | Posun v pixeloch |

## 💡 Tipy na ladenie

### Jemnejší efekt
```typescript
{
  glow: 0.5,
  bloom: 0.5,
  noise: 0.3,
  colorFrequency: 0.5,
}
```

### Dramatický efekt
```typescript
{
  glow: 1.5,
  bloom: 1.5,
  noise: 0.7,
  colorFrequency: 1.5,
  timeScale: 0.8,
}
```

### Minimalistický
```typescript
{
  glow: 0.3,
  bloom: 0.3,
  noise: 0.1,
  colorFrequency: 0.3,
  timeScale: 0.2,
}
```

## 🚀 Výkon

- `suspendWhenOffscreen: true` - Pozastaví animáciu keď nie je viditeľná
- `transparent: true` - Priehľadné pozadie
- Nižší `timeScale` = menšia záťaž CPU
- Vyššie hodnoty `glow` a `bloom` zvyšujú záťaž GPU

## 🛠️ Pokročilé úpravy

Pre pokročilé úpravy shader kódu upravte súbor `src/components/Prism.tsx`.

**Varovanie:** Úprava shader kódu vyžaduje znalosti GLSL.

## 📝 Príklad komplexnej konfigurácie

```typescript
export const prismConfig = {
  // Interaktívna 3D animácia
  animationType: 'hover',
  timeScale: 0.4,
  
  // Väčší tvar
  height: 4.0,
  baseWidth: 6.0,
  scale: 4.0,
  
  // Zelená farba s intenzívnym žiarením
  hueShift: 270,
  colorFrequency: 1.2,
  glow: 1.3,
  bloom: 1.2,
  noise: 0.4,
  
  // Plynulý hover
  hoverStrength: 2.0,
  inertia: 0.1,
  
  // Optimalizácia
  transparent: true,
  suspendWhenOffscreen: true,
  offset: { x: 0, y: 0 },
};
```

## ❓ Časté problémy

**Prism sa nezobrazuje:**
- Skontrolujte, či je nainštalovaná knižnica `ogl`: `npm install ogl`
- Skontrolujte konzolu prehliadača (F12) pre chybové hlášky

**Animácia je pomalá:**
- Znížte `timeScale`
- Znížte `glow` a `bloom`
- Nastavte `suspendWhenOffscreen: true`

**Farby nevyzerajú správne:**
- Hodnoty `hueShift` sú v stupňoch (0-360)
- Skúste rôzne hodnoty `colorFrequency`

---

**Vytvorené pre AT Digital Web** 🎨✨
