# Aurora Background - Návod na Customizáciu

## 📍 Kde nájdeš súbory

### 1. **Komponent**: `src/components/ui/aurora-background.tsx`
   - Hlavný React komponent
   - Tu meníš štruktúru a CSS classes

### 2. **Konfigurácia**: `src/config/auroraConfig.ts`
   - Všetky farby, rýchlosti, blur, opacity
   - Presety pre rôzne štýly

### 3. **Tailwind animácia**: `tailwind.config.ts`
   - Keyframes pre aurora animáciu
   - Rýchlosť animácie (duration)

---

## 🎨 Ako meniť FARBY

### Metóda 1: Priamo v komponente
V súbore `aurora-background.tsx` na riadku ~30, zmeň CSS variables:

```tsx
[--aurora:repeating-linear-gradient(
  100deg,
  var(--blue-500)_10%,      // ⬅️ Farba 1
  var(--indigo-300)_15%,    // ⬅️ Farba 2
  var(--blue-300)_20%,      // ⬅️ Farba 3
  var(--violet-200)_25%,    // ⬅️ Farba 4
  var(--blue-400)_30%       // ⬅️ Farba 5
)]
```

**Nahraď s vlastnými farbami:**
```tsx
[--aurora:repeating-linear-gradient(
  100deg,
  rgb(59_130_246)_10%,      // Modrá
  rgb(165_180_252)_15%,     // Indigo
  rgb(147_197_253)_20%,     // Svetlá modrá
  rgb(221_214_254)_25%,     // Fialová
  rgb(96_165_250)_30%       // Stredná modrá
)]
```

### Metóda 2: Použiť presety z configu
V `auroraConfig.ts` už máš pripravené presety:

```typescript
// Zelená aurora (Iceland)
auroraConfig.presets.green

// Ružová/fialová (Sunset)
auroraConfig.presets.sunset

// Tyrkysová (Ocean)
auroraConfig.presets.ocean

// Červená/oranžová (Fire)
auroraConfig.presets.fire
```

---

## ⚡ Ako meniť RÝCHLOSŤ animácie

### V Tailwind config (`tailwind.config.ts`):
```typescript
animation: {
  "aurora": "aurora 60s linear infinite",  // ⬅️ 60s = rýchlosť
}
```

**Možnosti:**
- `30s` = Rýchla animácia
- `60s` = Normálna (predvolená)
- `90s` = Pomalá
- `120s` = Veľmi pomalá

---

## 🌫️ Ako meniť BLUR (rozmazanie)

V komponente `aurora-background.tsx`, riadok ~36:

```tsx
filter blur-[10px]  // ⬅️ Zmeň 10px
```

**Možnosti:**
- `blur-[5px]` = Ostrá
- `blur-[10px]` = Normálna (predvolená)
- `blur-[15px]` = Stredne rozmazaná
- `blur-[20px]` = Veľmi rozmazaná

---

## 💎 Ako meniť OPACITY (priehľadnosť)

V komponente, riadok ~42:

```tsx
opacity-50  // ⬅️ Zmeň číslo
```

**Možnosti:**
- `opacity-30` = Jemná (0.3)
- `opacity-40` = Svetlá (0.4)
- `opacity-50` = Normálna (0.5, predvolená)
- `opacity-60` = Stredná (0.6)
- `opacity-70` = Intenzívna (0.7)
- `opacity-80` = Silná (0.8)

---

## 🎯 Ako meniť FOKUS oblasti (radial gradient)

V komponente Props:

```tsx
<AuroraBackground 
  showRadialGradient={true}  // ⬅️ true/false
>
```

**Pozícia fokusa** - v komponente, riadok ~45:
```tsx
[mask-image:radial-gradient(
  ellipse_at_100%_0%,    // ⬅️ Pozícia (X% Y%)
  black_10%,             // ⬅️ Viditeľná oblasť
  var(--transparent)_70% // ⬅️ Kde začína fade
)]
```

**Možnosti pozície:**
- `ellipse_at_0%_0%` = Ľavý horný roh
- `ellipse_at_50%_50%` = Stred
- `ellipse_at_100%_0%` = Pravý horný roh (predvolené)
- `ellipse_at_50%_0%` = Horný stred
- `ellipse_at_50%_100%` = Dolný stred

---

## 🎪 PRAKTICKÉ PRÍKLADY

### Príklad 1: Zelená Aurora (Iceland)
```tsx
// V aurora-background.tsx
[--aurora:repeating-linear-gradient(
  100deg,
  rgb(34_197_94)_10%,
  rgb(134_239_172)_15%,
  rgb(167_243_208)_20%,
  rgb(187_247_208)_25%,
  rgb(52_211_153)_30%
)]
```

### Príklad 2: Rýchla ružová Aurora
```tsx
// V tailwind.config.ts
"aurora": "aurora 30s linear infinite",

// V aurora-background.tsx
[--aurora:repeating-linear-gradient(
  100deg,
  rgb(236_72_153)_10%,
  rgb(249_168_212)_15%,
  rgb(244_114_182)_20%,
  rgb(250_204_21)_25%,
  rgb(251_146_60)_30%
)]
```

### Príklad 3: Jemná oceánska Aurora
```tsx
// V komponente
opacity-30 blur-[15px]

// Farby
[--aurora:repeating-linear-gradient(
  100deg,
  rgb(6_182_212)_10%,
  rgb(103_232_249)_15%,
  rgb(34_211_238)_20%,
  rgb(165_243_252)_25%,
  rgb(14_165_233)_30%
)]
```

---

## 🚀 Ako použiť v Hero sekcii

```tsx
import { AuroraBackground } from "@/components/ui/aurora-background";

<AuroraBackground showRadialGradient={true}>
  <div className="relative z-10 container mx-auto px-4">
    {/* Tvoj obsah tu */}
    <h1>AT Digital</h1>
  </div>
</AuroraBackground>
```

---

## ⚠️ DÔLEŽITÉ POZNÁMKY

1. **CSS variables** - Ak používaš `var(--blue-500)`, musíš ich definovať v CSS
2. **RGB farby** - Použi `rgb(R_G_B)` syntax (podčiarkovník namiesto čiarky!)
3. **Performance** - Aurora je **CSS animácia** = 60fps na GPU, žiadny JavaScript!
4. **Mobile** - Funguje perfektne na mobile, pretože je to pure CSS
5. **Dark mode** - Aurora automaticky podporuje dark mode

---

## 🎨 RGB Farebná Tabuľka

| Názov | RGB |
|-------|-----|
| Modrá jasná | `59 130 246` |
| Modrá svetlá | `147 197 253` |
| Indigo | `165 180 252` |
| Fialová | `221 214 254` |
| Zelená | `34 197 94` |
| Tyrkysová | `6 182 212` |
| Ružová | `236 72 153` |
| Červená | `239 68 68` |
| Oranžová | `251 146 60` |
| Žltá | `252 211 77` |

**Použitie:**
```tsx
rgb(59_130_246)  // Modrá jasná
```
