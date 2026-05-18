# Figma File Map
Updated: 2026-05-14, deep pass #3 (direct node URLs)

## File 1: Design System
- **Key**: 8Ss9MetHgz6C3jbPJzFwoY
- **Library status**: Publishes "Gimme5 - DS" team library (key: lk-cc2825ec7dd622b7413845aa38abd497ccb1f91bc1a32af2678e3dc82a1eb86445de2ef173caa19423cc49a230146961d9eb4cc260706ed07d34ca628e154c8f)
- **API access**: Only works with DIRECT node URLs -- root/page navigation returns Cover only
- **Root cause confirmed**: Content inside Figma Sections not traversable from root; must use specific node-id

### Pages confirmed via direct URL access:
| Page/Section | Node | Status |
|---|---|---|
| 01·Foundation | 2:14701 | READ OK |
| -- Color primitives | 233:118 | READ OK (full content) |
| -- Semantic tokens | 680:4 | READ OK (full content) |
| -- Typography | 234:217 | READ OK (full content) |
| 02·Tokens | 113:2 | READ OK (full content) |
| 03·Icons | 14:3939 | READ OK (structure via XML parse) |
| 04·Components | 113:3 | READ OK (2 components only) |
| 06·Accessibility | 113:5 | READ OK (contrast matrix) |

### DS Token Values Confirmed (2026-05-14):

**Color Primitives (233:118):**
- Primary: 50=#FFF4F0, 100=#FFD4C4, 200=#FFAA8A, 300=#FF8060, 400=#FF6640, 500=#F55A27 (brand), 600=#D94C1E, 700=#B83E18, 800=#963212, 900=#72240A
- Neutral: 100=#FAFAFA, 200=#F6F6F6, 300=#EBEBEB, 400=#D6D6D6, 500=#ABABAB, 600=#979797, 700=#6E6E6E, 800=#3D3D3D, 900=#1A1A1A
- Feedback: error=#DC2626, success=#16A34A, warning=#D97706, info=#2563EB
- Fondi (4): Gimme5 Azioni Mondo=#F55A27 (orange), Gimme5 Obbligazionario=#4A90D9 (blue), Gimme5 Flessibile=#7B61FF (purple), Gimme5 Liquidità=#2ECC71 (green)
- Obiettivi (7): Casa=#FF6B6B, Viaggio=#4ECDC4, Emergenza=#FFE66D, Educazione=#A8E6CF, Auto=#FFB347, Pensione=#C3B1E1, (7th not captured)

**Semantic Tokens Light/Dark (680:4):**
- bg/primary: Light=#F6F6F6, Dark=#1A1A1A
- bg/secondary: Light=#FFFFFF, Dark=#3D3D3D
- bg/brand: Light=#F55A27, Dark=#F55A27
- bg/inverse: Light=#1A1A1A, Dark=#FFFFFF
- text/primary: Light=#1A1A1A, Dark=#FAFAFA
- text/secondary: Light=#6E6E6E, Dark=#ABABAB
- text/tertiary: Light=#979797, Dark=#979797 [ANOMALY: identical in both modes]
- text/on-brand: Light=#FFFFFF, Dark=#FFFFFF
- brand/primary: Light=#F55A27, Dark=#F55A27
- brand/secondary: Light=#FFD4C4, Dark=#963212
- border/default: Light=#EBEBEB, Dark=#6E6E6E
- border/strong: Light=#6E6E6E, Dark=#ABABAB
- border/brand: Light=#F55A27, Dark=#F55A27
- NOTE: bg/primary = #F6F6F6 (canvas), bg/secondary = #FFFFFF (card) -- intentional hierarchy

**Typography Scale (234:217) -- 23 styles:**
- Display: display/l Archivo Bold 57/64, display/m Archivo Bold 45/52, display/s Archivo Bold 36/44
- Headline: headline/l Archivo SemiBold 32/40, headline/m Archivo SemiBold 28/36, headline/s Archivo SemiBold 24/32
- Title: title/l Archivo SemiBold 22/28, title/m Archivo SemiBold 16/24, title/s Archivo SemiBold 14/20, title/xs Archivo SemiBold 12/16 [ANOMALY: same as title/s]
- Label: label/l Inter Medium 14/20, label/m Inter Medium 12/16, label/s Inter Medium 11/16, label/xs Inter Medium 10/16
- Body: body/l Inter Regular 16/24, body/m Inter Regular 14/20, body/s Inter Regular 12/16, body/xs Inter Regular 11/16
- Caption: caption/m Inter Regular 12/16, caption/s Inter Regular 11/16
- Chip: chip/l Archivo Medium 14/20, chip/m Archivo Medium 12/16, chip/xs Archivo Medium 12/16 [ANOMALY: chip/xs = chip/m]

**Spacing tokens (113:2):**
- 2xs=2, xs=4, s=8, m=12, l=16, xl=20, 2xl=24, 3xl=32, 4xl=40, 5xl=48, max=80

**Radius tokens:**
- xs=8, s=12, md=16, lg=16 [ANOMALY: lg=md], xl=24, full=999

**Stroke tokens:** 0.5, 1, 1.5, 2

**Grid:** 375px canvas, 4 columns, 16px margin, 16px gutter

**Icons (03·Icons — node 14:3939) -- 1844 icons, 23 categories:**
| Category | Count |
|---|---|
| navigation-arrows | 206 |
| feedback-status | 134 |
| actions | 180 |
| users | 32 |
| communication | 54 |
| layout-navigation | 92 |
| files-docs | 84 |
| settings | 18 |
| media | 77 |
| charts-data | 44 |
| finance | 30 |
| commerce | 30 |
| security | 15 |
| development | 37 |
| time | 14 |
| maps-location | 23 |
| health | 20 |
| nature-weather | 60 |
| food-drink | 46 |
| transport | 17 |
| shapes | 73 |
| brands | 10 |
| misc | 548 |

**Icon library**: Lucide-style naming convention (e.g. `icon/wallet`, `icon/trending-up`). NOT a custom set.

**Key GIMME5-relevant icons confirmed in library:**
- Finance: `icon/piggy-bank`, `icon/wallet`, `icon/wallet-cards`, `icon/wallet-minimal`, `icon/wallet2`, `icon/banknote`, `icon/banknote-arrow-up`, `icon/banknote-arrow-down`, `icon/coins`, `icon/credit-card`, `icon/euro`, `icon/dollar-sign`, `icon/percent`, `icon/receipt-euro`, `icon/hand-coins`
- Charts: `icon/trending-up`, `icon/trending-down`, `icon/trending-up-down`, `icon/chart-line`, `icon/chart-pie`, `icon/chart-area`, `icon/chart-bar`
- Actions: `icon/plus`, `icon/minus`, `icon/arrow-up`, `icon/arrow-down`, `icon/send`, `icon/refresh-cw`, `icon/history`
- Navigation: `icon/home`, `icon/search`, `icon/settings`, `icon/bell`, `icon/bell-ring`, `icon/bell-off`
- User: `icon/user`, `icon/user-round`, `icon/users`, `icon/user-check`
- Status: `icon/check`, `icon/check-circle`, `icon/lock`, `icon/eye`, `icon/eye-off`, `icon/shield-check`
- Goals/Gamification: `icon/trophy`, `icon/target`, `icon/flag`, `icon/star`, `icon/heart`, `icon/calendar`

**DS Anomalies to discuss with Filippo:**
1. `title/xs` = `title/s` — both Archivo SemiBold 12/16. Duplicate naming.
2. `chip/xs` = `chip/m` — both Archivo Medium 12/16. Duplicate naming.
3. `text/tertiary` — identical Light and Dark (#979797). Intentional or oversight?
4. `radius/lg` = `radius/md` — both 16px. Naming gap.

**Components (113:3) -- ONLY 2 EXIST:**
- Icon component: 4 size variants (16/20/24/28)
- Icon Button component: 4 size variants × 3 states (default/hover/pressed)
- Nothing else. Button, Card, Input, NavBar all MISSING.

**Accessibility (113:5):**
- Light mode WCAG contrast matrix documented (text × background combinations)
- All standard combinations documented with pass/fail status

---

## File 2: Lavorazioni (Working File)
- **Key**: 5Td9jhszbTK3otiK4xMWlq
- **Pages**: 1 visible -- "Cover" (12:2)
- **Library status**: Subscribes to "Gimme5 - DS"
- **Status**: UNREAD -- no direct URLs provided
- **Priority**: HIGH (contains in-progress screens and HP variants)

---

## File 3: Analisi / Research Board (FigJam)
- **Key**: nNxGCOUQqYP5Xz1xkuxm9m
- **Type**: FigJam [CONFIRMED]
- **Status**: PARTIALLY READ via direct URL

### FigJam node read (2026-05-14):
| Node | Content | Status |
|---|---|---|
| 2843:128 | "ANALISI [ONBOARDING]" -- current onboarding flow | READ OK |

**Current Onboarding Flow (section "ATTUALE", node 2843:128):**
1. Welcome (3 screens)
2. Login — Email+Browser + social login options
3. Return to app
4. Anagrafica (personal data)
5. Antiriciclaggio (AML compliance)
6. Scelta Fondi (fund selection)
7. Attiva Fondo (fund activation)
8. Firma Contratti (contract signature)
9. Versamento (initial deposit)
10. Home (app landing)
- Branding: Cosmico × GIMME5 logo present

**Other FigJam sections: UNREAD** -- need URLs from Filippo

---

## File 4: As-Is Flows
- **Key**: zd5Tn4bK7scXBW6VBBQ2Ox
- **Title**: "Gimme5 / Flussi as-is"
- **Library**: Subscribes to MD3 + Simple DS (NOT Gimme5-DS) -- legacy reference, not connected to new DS
- **Status**: PARTIALLY READ via direct URLs

### As-Is screens read (2026-05-14):
| Node | Screen | Status |
|---|---|---|
| 274:4343 | "Home" canvas (page with 4 frames) | READ OK |
| 2274:534 | "1.0.1 Home" | READ OK |
| 275:4548 | "2.0 Community" | READ OK |
| 275:4696 | "1.0 Profilo" | READ OK |
| 1499:2357 | "operativita_home_3.0" | READ OK |
| 752:10068 | Unknown section | TOO LARGE -- not read |

**Screen: 1.0.1 Home (2274:534):**
- Orange header, user avatar top-right
- Balance: €1.000,99
- Quick actions row: Versa / Portafoglio / Regole
- Carousel: "Nuovo fondo disponibile" promotional card
- Horizontal scroll: Obiettivi section with objective cards
- Section "Per te": editorial/educational content
- Nav bar: Home · Operatività · [Joink] · Community · Profilo

**Screen: 2.0 Community (275:4548):**
- "Community" tab active (no orange)
- Orange money tree illustration (hero)
- Card "Amici": referral program (earn €50)
- Card "Sostenitori": co-saving concept
- Nav bar: same 5-tab structure

**Screen: 1.0 Profilo (275:4696):**
- Orange header, user avatar
- "Le tue regole" card: robot + piggy bank illustration, "Hai 2 regole attive"
- "Contatta assistenza" list item
- Profile settings list

**Screen: operativita_home_3.0 (1499:2357):**
- "Card Joink v.3" pattern (header)
- 3 status cards:
  - "Risparmi del mese" — orange background
  - "In attesa" — purple #6F16A3
  - "Saldo operazioni" — blue #1268B3
- "Operazioni in corso" section
- "Storico" section
- This is the current Operatività tab UX

**Node 752:10068:** Too large (103k chars). Content unknown. Possibly Obiettivi or Regole screens. DEFERRED.

---

## Library Architecture [CONFIRMED]
- "Gimme5 - DS" is a TEAM library published from File 1 (DS)
- Files 1 and 2 subscribe to Gimme5-DS
- File 4 (As-Is) subscribes to MD3 + Simple DS -- legacy/pre-redesign
- File 3 (FigJam) -- libraries not checked

## API Workflow Confirmed
- `get_metadata` or `get_design_context` with empty/root nodeId → returns Cover only
- `get_design_context` with DIRECT nodeId from Figma URL → works reliably
- FigJam: requires `get_figjam` tool (not `get_design_context`)
- Pattern: always request direct URL from Filippo for specific sections
