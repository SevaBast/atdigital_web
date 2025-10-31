# Partners Banner - Návod na Customizáciu

## 📍 Kde nájdeš súbory

### 1. **Komponent**: `src/components/PartnersBanner.tsx`
   - Beziaci carousel s partnerskimi logami
   - Automaticky číta konfiguráciu z `partnersConfig.ts`

### 2. **Konfigurácia**: `src/config/partnersConfig.ts`
   - Všetky nastavenia štýlov, animácie, fade efektov
   - Presety pre rôzne vizuálne štýly

### 3. **Obsah**: `src/content/content.ts`
   - Zoznam partnerských lôg (názov + cesta k obrázku)

---

## 🎨 Ako meniť ŠTÝL LÔG

### V súbore `partnersConfig.ts`:

```typescript
logos: {
  height: "48px",           // ⬅️ Výška lôg (48px, 64px, 80px)
  spacing: "32px",          // ⬅️ Medzery medzi logami
  
  opacity: {
    default: 0.6,           // ⬅️ Základná priehľadnosť (0-1)
    hover: 1.0,             // ⬅️ Pri hover (myš nad logom)
  },
  
  filters: {
    grayscale: true,        // ⬅️ true = čiernobiele, false = farebné
    brightness: 0,          // ⬅️ 0 = čierne, 1 = normálne
    invert: true,           // ⬅️ true = biele logo na tmavom pozadí
    
    shadow: {
      enabled: true,        // ⬅️ Zapnutie/vypnutie tieňa
      offsetX: 0,
      offsetY: 2,           // ⬅️ Vertikálny posun tieňa
      blur: 4,              // ⬅️ Rozmazanie tieňa
      color: "rgba(0, 0, 0, 0.3)",  // ⬅️ Farba tieňa
    },
  },
},
```

---

## ⚡ Ako meniť RÝCHLOSŤ ANIMÁCIE

```typescript
animation: {
  duration: "40s",          // ⬅️ Čas jedného cyklu
                            // 20s = rýchlo, 40s = normálne, 60s = pomaly
  
  duplicates: 3,            // ⬅️ Počet opakovaní lôg (2-4 odporúčané)
},
```

**Príklady:**
- `duration: "20s"` = rýchly carousel
- `duration: "60s"` = pomalý, elegantný carousel

---

## 🌫️ Ako meniť FADE IN/OUT EFEKTY

```typescript
fadeGradients: {
  enabled: true,            // ⬅️ Zapnúť/vypnúť fade efekty
  
  left: {
    enabled: true,          // ⬅️ Ľavý fade
    width: "128px",         // ⬅️ Šírka fade oblasti (128px, 192px, 256px)
    gradient: "from-background to-transparent",
  },
  
  right: {
    enabled: true,          // ⬅️ Pravý fade
    width: "128px",
    gradient: "from-background to-transparent",
  },
},
```

**Možnosti:**
- `enabled: false` = Bez fade efektov, ostré okraje
- `width: "192px"` = Širší fade, jemnejší prechod
- `width: "64px"` = Úzky fade, rýchlejší prechod

---

## 🎪 HOTOVÉ PRESETY

V `partnersConfig.ts` máš pripravené presety:

### 1. **Default** (aktuálny štýl)
```typescript
grayscale: true, brightness: 0, invert: true, opacity: 0.6, shadow: true
```
Čiernobiele logá s jemným tieňom.

### 2. **Colorful** (farebné)
```typescript
grayscale: false, brightness: 1, invert: false, opacity: 0.8
```
Farebné logá vo svojej pôvodnej podobe.

### 3. **Minimal** (minimalistické)
```typescript
grayscale: true, brightness: 0, invert: true, opacity: 0.4, shadow: false
```
Veľmi jemné, bez tieňa, nízka priehľadnosť.

### 4. **Bold** (výrazné)
```typescript
opacity: 0.9, shadow: { blur: 8, color: "rgba(0, 0, 0, 0.5)" }
```
Výrazné logá so silným tieňom.

### 5. **Subtle** (jemné)
```typescript
brightness: 0.3, opacity: 0.5, shadow: { blur: 2 }
```
Jemné, svetlejšie, jemný tieň.

**Použitie presetu:**
```typescript
// V partnersConfig.ts
logos: {
  filters: partnersConfig.presets.colorful  // ⬅️ Použi farebný preset
}
```

---

## 📐 ROZLOŽENIE SEKCIE

```typescript
section: {
  paddingY: "48px",         // ⬅️ Vertikálny padding sekcie
  
  topGradient: {
    enabled: true,          // ⬅️ Horný gradient prechod z Hero
    height: "128px",
    gradient: "from-background via-background/50 to-transparent",
  },
},
```

---

## 🛠️ PRAKTICKÉ PRÍKLADY

### Príklad 1: Rýchle farebné logá
```typescript
// partnersConfig.ts
animation: {
  duration: "25s",          // Rýchlejšie
},
logos: {
  filters: {
    grayscale: false,       // Farebné
    brightness: 1,
    invert: false,
  },
},
```

### Príklad 2: Pomalé, výrazné čiernobiele
```typescript
animation: {
  duration: "60s",          // Pomalšie
},
logos: {
  opacity: {
    default: 0.9,           // Výraznejšie
  },
  filters: {
    shadow: {
      blur: 8,              // Silnejší tieň
      color: "rgba(0, 0, 0, 0.5)",
    },
  },
},
```

### Príklad 3: Bez fade efektov
```typescript
fadeGradients: {
  enabled: false,           // Vypni fade
},
```

### Príklad 4: Širší fade gradient
```typescript
fadeGradients: {
  left: {
    width: "256px",         // Širší fade vľavo
  },
  right: {
    width: "256px",         // Širší fade vpravo
  },
},
```

---

## 📦 Pridanie nového loga

V `src/content/content.ts`:

```typescript
partners: {
  logos: [
    { name: "Názov firmy", image: "/partners/logo.png" },
    // ... pridaj ďalšie
  ],
},
```

Logá ulož do `public/partners/` s transparentným pozadím (PNG).

---

## 🎯 TIPY A TRIKY

1. **Rovnaká veľkosť lôg**: Všetky PNG súbory by mali mať podobnú šírku pre konzistentný vzhľad
2. **Transparentné pozadie**: Použite PNG s alpha kanálom
3. **Optimalizácia**: Komprimujte obrázky pre rýchlejšie načítanie
4. **Počet duplicitov**: Vyšší počet (4-5) = plynulejší loop, ale väčší DOM
5. **Rýchlosť vs plynulosť**: Pomalšia animácia vyzerá profesionálnejšie

---

## ⚙️ Pokročilé nastavenia

### Vlastný filter kombinácia:
```typescript
filters: {
  grayscale: true,
  brightness: 0.2,          // Čiernobiele s miernou svetlosťou
  invert: true,
  shadow: {
    enabled: true,
    offsetY: 3,
    blur: 6,
    color: "rgba(0, 100, 200, 0.3)",  // Modrý tieň
  },
},
```

### Asymetrické fade:
```typescript
fadeGradients: {
  left: {
    width: "256px",         // Široký fade vľavo
  },
  right: {
    width: "64px",          // Úzky fade vpravo
  },
},
```

---

## 🔧 Riešenie problémov

**Logá sú príliš malé/veľké:**
- Zmeň `logos.height` v partnersConfig.ts

**Animácia je trhavá:**
- Zvýš `animation.duplicates` na 4-5
- Skontroluj či sú obrázky optimalizované

**Fade gradient nie je viditeľný:**
- Zmeň `fadeGradients.left.width` na väčšiu hodnotu
- Skontroluj `gradient` nastavenie

**Logá majú zlú farbu:**
- Použi preset `colorful` pre farebné logá
- Nastav `brightness: 1` a `grayscale: false`
