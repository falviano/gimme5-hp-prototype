# Design System Gap Analysis
Updated: 2026-05-14, deep pass #3 (direct node URLs confirmed)

## Current State of DS Figma (key: 8Ss9MetHgz6C3jbPJzFwoY)

### CONFIRMED VIA API (2026-05-14) [UPDATED]
Foundations now fully confirmed via direct node URLs:
- **Color Primitives**: Primary (50-900), Neutral (100-900), Feedback (4), Fondi (4), Obiettivi (7+)
- **Semantic Tokens**: Full Light/Dark pairs for all token groups (bg, text, brand, border, surface, feedback, icon)
- **Typography**: 23 styles across 7 type roles (display/headline/title/label/body/caption/chip)
- **Spacing**: 2xs=2 through max=80 (11 tokens)
- **Radius**: xs=8 through full=999 (6 tokens)
- **Stroke**: 4 values (0.5, 1, 1.5, 2)
- **Grid**: 375px / 4col / 16px margin / 16px gutter
- **Components**: ONLY Icon (4 sizes) + Icon Button (4 sizes × 3 states)
- **Accessibility**: WCAG contrast matrix documented in 06·Accessibility

### Token Values (complete reference)
See `figma-file-map.md` for full token tables.

### DS Anomalies (NOT YET flagged to Filippo)
1. `title/xs` = `title/s` — both Archivo SemiBold 12/16. Redundant style.
2. `chip/xs` = `chip/m` — both Archivo Medium 12/16. Redundant style.
3. `text/tertiary` — Light=#979797, Dark=#979797. Same value. Intentional or missing dark value?
4. `radius/lg` = `radius/md` — both 16px. Gap in naming scale.

---

## What Blocks UI Production

### 1. COMPONENTS MISSING (CRITICAL BLOCKER)
Only 2 components exist: Icon + Icon Button.
All of these are MISSING:

| Component | Priority | Needed for |
|---|---|---|
| Button (primary/secondary/text/danger) | P0 | Every screen |
| Card — Objective | P0 | Home, Obiettivi tab |
| Card — Salvadanaio | P0 | Home, post-onboarding |
| NavBar (5 tabs) | P0 | Every screen |
| Input (text, amount, search) | P0 | Onboarding, forms |
| TopBar / AppBar | P0 | Every screen |
| List Item (movements, funds) | P1 | Movimenti tab |
| Bottom Sheet / Modal | P1 | Actions, confirmations |
| Card — Fund (pillola) XL/L/M/S | P1 | Fund selection, HP |
| Chip / Tag | P1 | Categories, status |
| Progress Bar | P1 | Objective cards |
| Toggle / Switch | P2 | Settings, routine config |
| Checkbox / Radio | P2 | Onboarding selections |
| Donut Chart | P2 | Portfolio view |
| Badge | P2 | Notifications |
| Snackbar | P2 | Confirmations |
| Divider | P2 | Lists |

### 2. COLORS INCOMPLETE
- Obiettivi category colors: 7 swatches in primitives, NOT APPROVED as production hex values
- Fund color lightened versions: discussed May 13 (lighter tints for backgrounds) but not in DS
- Dark mode semantic tokens: structure exists but actual dark values NOT populated beyond confirmed pairs

### 3. ILLUSTRATIONS MISSING
- Style direction approved: illustrated vector (Apr 23)
- NOT A SINGLE ILLUSTRATION asset created or catalogued
- Blocking: onboarding, HP empty states, community, Profilo card

### 4. ICONS -- CONFIRMED (not a blocker)
- 03·Icons page: 1844 icons across 23 categories (fully catalogued 2026-05-14)
- Naming convention: `icon/{name}` (Lucide-style)
- Icon component in 04·Components: 4 sizes (16/20/24/28)
- All key GIMME5 icons confirmed: wallet, piggy-bank, trending-up/down, euro, coins, banknote, trophy, target, bell, home, user, check, lock, etc.
- See figma-file-map.md for full category breakdown and key icon list

---

## What IS Production Ready

| Item | Status |
|---|---|
| Brand orange: #F55A27 | CONFIRMED |
| Full primary palette (50-900) | CONFIRMED |
| Neutral palette (100-900) | CONFIRMED |
| All semantic token names + Light values | CONFIRMED |
| Dark mode token names (values partially TBD) | CONFIRMED structure |
| Typography scale (23 styles, dual font) | CONFIRMED |
| Spacing, Radius, Stroke, Grid tokens | CONFIRMED |
| WCAG contrast matrix | CONFIRMED |
| Icon + Icon Button components | CONFIRMED (only components) |

---

## DS Architecture
- Primitives → Semantic (Light/Dark) → Components
- Two fonts: Archivo (display/headline/title/chip) + Inter (label/body/caption)
- bg/primary = #F6F6F6 (canvas), bg/secondary = #FFFFFF (card) — intentional
- dark mode designed from start (semantic structure ready)
- 04·Components page exists with only 2 components

---

## Library Architecture
- DS file publishes "Gimme5 - DS" team library
- Lavorazioni file subscribes to Gimme5-DS (correct)
- As-Is file uses MD3 + Simple DS (legacy, intentional isolation)
- gimme5-design-tokens.json at project root: OBSOLETE, does not reflect current DS

---

## Recommended Next Steps
1. Flag 4 anomalies to Filippo for decision
2. Filippo must formally approve Obiettivi category hex values before production
3. Build components in priority order: Button → Card → NavBar → Input → TopBar
4. Read icons page (need Filippo to confirm manageable sub-section URLs)
5. Deprecate gimme5-design-tokens.json
