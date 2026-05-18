# Gimme5 Design System -- Layout Rules

Regole precise di layout per ogni pagina documentale del DS Figma (04 Components).
Fonte di verita': ds_master_doc_template.md (estratto da "Button BASE PER TUTTO IL DS").

---

## Outer Frame (doc frame componente)

```
FRAME "NomeComponente"
  width:           1500px FIXED
  height:          AUTO (VERTICAL autolayout)
  fills:           color/bg/secondary (#FFFFFF)
  stroke:          color/border/default (#EBEBEB), 1px
  cornerRadius:    12px
  layoutMode:      VERTICAL
  paddingAll:      0 (il padding e' nei children)
  cornerSmoothing: 1
```

NOTA: la larghezza 1500px e' stata aggiornata da 1400px (sessione 11). Tutti i nuovi doc frame usano 1500px. Quelli esistenti a 1400px vanno migrati quando vengono toccati.

---

## 1. sys-header

```
FRAME "sys-header"
  width:                     FILL
  height:                    128px FIXED
  layoutMode:                HORIZONTAL
  primaryAxisAlignItems:     SPACE_BETWEEN
  counterAxisAlignItems:     CENTER
  padding:                   32/32/32/32

  FRAME "header-left"
    layoutMode:              VERTICAL
    gap:                     4px
    width:                   HUG
    height:                  HUG

    TEXT -- titolo componente
      textStyle:             display/s (Archivo Bold 32px lh=36)
      fill:                  color/text/primary
      align:                 LEFT

    TEXT -- sottotitolo
      textStyle:             body/l (Inter Regular 16px lh=24)
      fill:                  color/text/secondary
      align:                 LEFT

  INSTANCE "Logo/Mark"
    width:                   56px FIXED
    height:                  30px FIXED
```

---

## 2. Divider

```
FRAME "divider"
  width:   FILL
  height:  1px
  fill:    color/border/default (#EBEBEB)
```

Il divider separa sys-header da sys-body. E' un rettangolo con sizing FILL settato DOPO appendChild.

---

## 3. sys-body

```
FRAME "Sys.Body Type/Component"
  width:                     FILL
  height:                    AUTO
  layoutMode:                VERTICAL
  padding:                   32/32/32/32
  gap:                       16px (tra Top Label e Wrapper)
  fill:                      color/bg/secondary (#FFFFFF)
```

### 3a. Top Label

```
FRAME "Top Label"
  width:                     FILL
  height:                    58px FIXED
  layoutMode:                VERTICAL
  paddingLeft:               36px  <-- DEVE essere uguale alla larghezza del Side Label
  gap:                       16px
  primaryAxisAlignItems:     CENTER
  counterAxisAlignItems:     CENTER
```

#### Level 2 -- Section title bar

```
FRAME "Level 2"
  width:                     FILL
  height:                    22px
  layoutMode:                GRID

  FRAME "Label"
    width:                   FILL
    height:                  22px
    layoutMode:              VERTICAL
    primaryAxisAlignItems:   MIN
    counterAxisAlignItems:   CENTER

    TEXT -- nome sezione (es. "Stili / Default + Disabled")
      textStyle:             title/l (Archivo SemiBold 16px lh=20)
      fill:                  color/violet/500 (VariableID:1225:3)
      align:                 CENTER
      width:                 FILL
      height:                20px

    FRAME "Bracket"
      width:                 FILL
      height:                2px
      fill:                  color/violet/500
```

#### Level 3 -- Column headers

```
FRAME "Level 3"
  width:                     FILL
  height:                    20px
  layoutMode:                GRID
  N celle = numero colonne, ciascuna FILL width

  FRAME "Label" (x N)
    width:                   FILL
    height:                  20px
    layoutMode:              VERTICAL
    primaryAxisAlignItems:   MIN
    counterAxisAlignItems:   CENTER

    TEXT -- nome colonna (es. "Primary", "Outline", "Ghost")
      textStyle:             body/m medium (Inter Medium 14px lh=20)
      fill:                  color/violet/500
      align:                 CENTER
      width:                 FILL
```

---

### 3b. Wrapper

```
FRAME "Wrapper"
  width:                     FILL
  height:                    AUTO
  layoutMode:                HORIZONTAL
  primaryAxisAlignItems:     MIN
  counterAxisAlignItems:     CENTER
```

#### Side Label

```
FRAME "Side Label"
  width:                     HUG (20px frame + 16px padding right = 36px totali)
  height:                    FILL
  layoutMode:                HORIZONTAL
  paddingRight:              16px
  primaryAxisAlignItems:     CENTER
  counterAxisAlignItems:     CENTER

  FRAME "Level 4"
    width:                   HUG (20px)
    height:                  FILL
    layoutMode:              VERTICAL
    primaryAxisAlignItems:   CENTER
    counterAxisAlignItems:   MAX
    N celle = numero righe

    FRAME "Label" (x N)
      width:                 20px HUG
      height:                proporzionale (es. 96px per 2 righe in 192px)
      layoutMode:            VERTICAL
      primaryAxisAlignItems: CENTER
      counterAxisAlignItems: CENTER

      TEXT -- nome riga (es. "Default", "Disabled")
        textStyle:           body/m medium (Inter Medium 14px lh=20)
        fill:                color/violet/500
        align:               CENTER
        NOTA: il testo overflowa (49px in frame 20px) -- clipsContent=false
```

#### Component Set

```
COMPONENT_SET
  width:                     FILL
  height:                    AUTO
  layoutMode:                GRID
  gap (cols):                20px
  rowGap:                    32px
  fill:                      color/bg/primary (#F6F6F6)
  stroke:                    color/violet/500, 1px DASHED
  cornerRadius:              5px
```

NOTA: i componenti restano alla loro dimensione NATURALE (HUG). Non si stretchano a riempire le celle. La spaziatura visiva viene dalle celle GRID, non dal resize.

---

## Regole di allineamento

### Col headers <-> Component Grid

Il paddingLeft del Top Label (36px) deve essere ESATTAMENTE uguale alla larghezza totale del Side Label (20px frame + 16px padding = 36px).

Questo garantisce che:
- Le etichette delle colonne (Level 3) siano allineate sopra le colonne del grid
- Le etichette delle righe (Level 4) siano allineate a sinistra delle righe del grid

Se cambi la larghezza del Side Label, aggiorna anche il paddingLeft del Top Label.

---

## Color bindings obbligatori

| Uso nel doc frame | Token | Hex risolto (Light) |
|-------------------|-------|---------------------|
| Sfondo card | color/bg/secondary | #FFFFFF |
| Bordo card | color/border/default | #EBEBEB |
| Sfondo grid | color/bg/primary | #F6F6F6 |
| Titolo componente | color/text/primary | #000000 |
| Sottotitolo | color/text/secondary | #4A4A4A |
| Label viola (tutti) | color/violet/500 | #8A38F5 |
| Bracket viola | color/violet/500 | #8A38F5 |
| Bordo component set | color/violet/500 | #8A38F5 |
| Testo disabled | color/text/disabled | #979797 |

**ATTENZIONE**: i label viola usano `color/violet/500` (VariableID:1225:3), NON `color/feedback/info`. Dopo il restructure della sessione 6, feedback/info e' diventato blue/500 (teal). Il viola e' un colore dedicato alle annotation DS.

---

## Layout Foundation e Tokens (01 e 02)

### Outer frame (per sezioni Foundation/Tokens)

```
width:        1400px FIXED  <-- NB: Foundation/Tokens usano 1400px, Components usa 1500px
height:       HUG
padding:      32/32/32/32
gap:          24
radius:       12
fill:         #FFFFFF
```

### Canvas spacing

- Prima sezione: y=80 dal top del canvas
- Gap tra sezioni: 200px (bottom card -> top card successiva)
- x=80 per tutte le card (allineate a sinistra)
- Ricalcolare SEMPRE dopo modifiche che cambiano altezza di una card

---

## Regole MAI violare

1. **GRID layout sul component set** -- mai HORIZONTAL WRAP
2. **Componenti a dimensione naturale** -- mai stretch per riempire colonne
3. **paddingLeft Top Label = larghezza Side Label** -- allineamento col headers / grid
4. **Violet = color/violet/500** -- ovunque nei label, bracket, bordo component set
5. **Gap cols=20px, gap rows=32px** sul component set -- non cambiare
6. **Ogni fill/stroke/text = token o style** -- zero hardcoded
7. **clipsContent = false** su frame container AutoLayout (non sui frame visivi shape)
8. **FILL sizing** va impostato SEMPRE dopo appendChild
9. **cornerSmoothing = 1** su tutti i frame/shape

---

*Ultimo aggiornamento: 2026-05-14*
