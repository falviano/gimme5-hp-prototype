# Gimme5 Design System -- Component Rules

Regole operative per ogni componente del DS. Obbligatorie per designer, agenti AI, e sviluppatori che toccano 04 Components.

---

## 1. Naming Convention

### Componenti

```
NomeComponente/variante    (PascalCase sul nome, lowercase sulla variante)

Esempi:
  Button/Primary
  Card/Full
  IconButton/sm
  Input/Default
  NavBar/Default
```

### Property naming standard

Tutte le properties dei component set usano questi nomi (lowercase, non PascalCase):

| Property | Tipo | Valori standard |
|----------|------|-----------------|
| `size` | String | `xs`, `sm`, `md`, `lg`, `xl` |
| `state` | String | `default`, `pressed`, `disabled`, `loading` |
| `style` | String | `primary`, `secondary`, `ghost`, `outline`, `link` |
| `mode` | String | `light`, `dark` (solo se il componente ha varianti cromatiche esplicite) |
| `hasIconLeft` | Boolean | `true`, `false` |
| `hasIconRight` | Boolean | `true`, `false` |

Non inventare nomi nuovi se quelli standard coprono il caso. Se serve una nuova property, documentarla in DS_DECISIONS_LOG.md.

---

## 2. Struttura Anatomy obbligatoria

Ogni componente ha layer semantici nominati. Mai "Frame 1", "Rectangle 3", "Text 4".

```
Button/Primary
  |-- container          (frame AutoLayout)
  |   |-- icon-left      (instance Icon, opzionale)
  |   |-- label          (text node)
  |   |-- icon-right     (instance Icon, opzionale)
```

Regole naming layer:
- `container` -- frame wrapper principale
- `label` -- testo primario
- `sublabel` -- testo secondario
- `icon-left`, `icon-right` -- slot icone
- `indicator` -- badge, dot, chip
- `separator` -- divider interno
- `background` -- fill shape se diverso dal container

---

## 3. Varianti obbligatorie per mobile

### Sempre presenti

| Stato | Quando | Come |
|-------|--------|------|
| `default` | Stato base | Colori normali, interattivo |
| `pressed` | Dito sta premendo | Opacity ridotta o colore piu' scuro/chiaro |
| `disabled` | Non interattivo | Opacity ridotta, colori desaturati, no interazione |

### Condizionali

| Stato | Quando includerlo |
|-------|-------------------|
| `loading` | Se il componente triggera un'azione asincrona (API call, save, submit) |
| `error` | Se il componente ha validazione (Input, Form) |
| `success` | Se il componente ha feedback di completamento (raro su mobile) |
| `empty` | Se il componente puo' non avere contenuto (lista, card) |

### Varianti vietate

| Stato | Perche' |
|-------|---------|
| `hover` | Non esiste su mobile. L'utente non ha un cursore |
| `focus` | Gestito dal sistema operativo (accessibility ring), non dal design |
| `active` (web) | Usare `pressed` invece. "Active" e' ambiguo |

**Eccezione**: IconButton ha "Pressed" al posto di "Hover" (rinominato dalla sessione 10). Se un componente legacy ha "Hover", va rinominato in "Pressed".

---

## 4. Component Properties vs Varianti

### Usa varianti (component set) quando

- Lo stato cambia la struttura visiva del componente (layout, elementi visibili/nascosti)
- Il cambio e' discreto (SM/MD/LG, non un range continuo)
- Lo sviluppatore ha bisogno di vedere tutti gli stati affiancati

### Usa component properties (boolean, instance swap) quando

- Un elemento e' opzionalmente visibile (hasIconLeft: true/false)
- Un elemento interno e' sostituibile (icon: instance swap)
- Il valore cambia ma la struttura resta identica

### Esempio concreto -- Button

```
Component Set con varianti:
  size: SM / MD / LG            -> cambiano dimensioni, padding, font
  state: Default / Pressed / Disabled / Loading  -> cambiano colori/struttura
  style: Primary / Secondary / Ghost / Outline   -> cambiano fill/stroke/text

Boolean properties:
  hasIconLeft: true/false        -> mostra/nasconde slot icona sinistra
  hasIconRight: true/false       -> mostra/nasconde slot icona destra
```

---

## 5. Nested Components

Usare componenti annidati quando:
- Un elemento interno e' riusabile indipendentemente (Icon, Badge)
- L'elemento interno ha i propri stati/varianti
- Facilita il swap di contenuto (instance swap property)

NON annidare quando:
- L'elemento e' puramente strutturale (un rettangolo di sfondo)
- L'annidamento aggiunge complessita' senza beneficio
- L'elemento non verra' mai usato fuori dal componente genitore

---

## 6. Regola "no variant explosion"

**Massimo 8 varianti per component set**, salvo casi documentati.

Se servono piu' di 8 varianti:
1. Documentare il motivo in DS_DECISIONS_LOG.md
2. Considerare decomposizione in sotto-componenti
3. Valutare se alcune varianti sono realmente usate nell'app

Componenti approvati con piu' di 8 varianti:
- **Button**: 36+ varianti (4 style x 3 state x 3 size) -- giustificato, e' il componente base
- **IconButton**: 12 varianti (4 size x 3 state) -- giustificato, e' un derivato

---

## 7. Token binding obbligatori

Ogni elemento visivo deve essere legato a un token. Nessun valore hardcoded.

| Proprieta' | Token collection | Esempio |
|------------|------------------|---------|
| fills (sfondo) | Semantic colors | `color/bg/brand` |
| fills (testo) | Semantic colors | `color/text/primary` |
| strokes | Semantic colors + Stroke | `color/border/default` + `stroke/default` |
| cornerRadius | Radius | `radius/sm` (12px) |
| padding/gap | Spacing | `spacing/md` (12px) |
| font | Text styles | `title/m` |
| shadow | Elevation | `elevation/sm` |

### Come verificare il binding

In Figma API:
- Fill: `fills[0].boundVariables.color` deve essere SET (non null)
- Stroke: `strokes[0].boundVariables.color` deve essere SET
- cornerRadius: `boundVariables.topLeftRadius` (su RECTANGLE) o `boundVariables.cornerRadius` (su FRAME)
- text: `textStyleId` deve essere SET

Se un nodo ha un valore senza binding, e' un bug.

---

## 8. AutoLayout -- Obbligatorio

Ogni frame del componente usa AutoLayout. Non esistono eccezioni a questa regola.

```
layoutMode:              HORIZONTAL o VERTICAL
primaryAxisSizingMode:   HUG_CONTENTS o FIXED
counterAxisSizingMode:   HUG_CONTENTS o FIXED

Su child:
  layoutSizingHorizontal: HUG o FILL
  layoutSizingVertical:   HUG o FILL
```

### Quando HUG vs FILL

- **HUG**: il contenuto definisce la dimensione (label text, icon)
- **FILL**: l'elemento riempie lo spazio disponibile (container in una riga, separatore)

### Posizionamento assoluto

Unica eccezione ammessa: icon-slot nei Button (ABSOLUTE positioning dentro il container). Usato per posizionare icone sinistra/destra senza influenzare il layout del label.

Documentare ogni uso di posizionamento assoluto.

---

## 9. Description compilata

Ogni componente in Figma deve avere il campo `description` compilato con:

```
[Nome componente] -- [Descrizione breve in italiano]
Stati: [lista stati]
Token WCAG warning: [se presente]
```

Esempio:
```
Button -- Pulsante primario dell'app Gimme5.
Stati: default, pressed, disabled, loading.
WCAG: SM 12px nero su #F55A27 = 3.29:1 (sotto 4.5:1 AA).
Touch: SM 36px sotto minimo 44px.
```

---

## 10. Tipografia nei componenti

### Font families

- **Archivo**: display, headline, title, chip -- usato per testi brevi, label azione, titoli
- **Inter**: label, body, caption -- usato per testi lunghi, descrizioni, meta info

### Regola Button/Link

Tutti i Button e Link usano **Archivo SemiBold** con text style legato:
- SM -> title/s (12px lh=16)
- MD -> title/m (14px lh=18)
- LG -> title/l (16px lh=20)

### Regola font minima

Nessun testo nel DS puo' avere fontSize < 11px. Questo esclude:
- Caption/M (10px) -- non usare nei canvas DS
- Caption/S (8px) -- non usare nei canvas DS
- Overline (10px) -- non usare nei canvas DS

Questi stili esistono nella type scale per uso futuro nell'app, ma non nei documenti DS.

---

*Ultimo aggiornamento: 2026-05-14*
