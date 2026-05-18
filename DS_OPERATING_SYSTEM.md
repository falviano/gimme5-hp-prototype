# Gimme5 Design System -- Operating System

Il "cervello" del DS. Questo documento definisce la filosofia, la qualita' attesa, e il processo operativo per ogni elemento del sistema.

---

## 1. Filosofia

### Il DS e' un sistema editoriale, non un UI kit

Il DS Gimme5 non e' una raccolta di bottoni e card. E' un sistema di documentazione professionale dove ogni componente vive dentro un contesto strutturato che ne spiega l'anatomia, gli stati, i token, e le regole d'uso.

Reference: Wise Foundations, Stripe DS, Linear DS, shadcnblocks.
NON reference: variant boards, component dumps, showcase canvas, UI kit senza gerarchia.

Il componente non e' il focus. La documentazione del componente e' il focus. Il componente vive DENTRO la documentazione.

### Ogni decisione deve rispondere a una domanda

Non si aggiunge nulla al sistema senza sapere:
- Che problema risolve per l'utente finale?
- Che problema risolve per il team (designer + sviluppatore)?
- Esiste gia' qualcosa nel sistema che copre questo caso?

Se la risposta alla terza domanda e' "si'", non serve un nuovo componente.

---

## 2. Qualita' attesa

### Production-ready

Ogni elemento nel DS deve essere consegnabile a uno sviluppatore Flutter senza bisogno di chiarimenti vocali. Il designer non e' presente quando lo sviluppatore implementa. La documentazione deve bastare.

### Flutter-ready

Ogni componente deve essere mappabile 1:1 a un Flutter widget. Questo significa:
- Nessun effetto Figma-only non riproducibile in Flutter
- Dimensioni in multipli di 4px dove possibile
- Token corrispondono a variabili CSS/Flutter gia' definite
- Stati mappabili direttamente a stati widget

### Token-driven

Zero valori hardcoded in produzione. Ogni fill, stroke, cornerRadius, spacing, e tipografia deve essere legato a un token (variabile Figma o stile di testo). Se modifichi un token, tutto il sistema si aggiorna.

---

## 3. Stile Gimme5

### Warm, emotivo, editoriale, soft

Gimme5 e' un'app di micro-investimento per persone normali. Non e' Bloomberg, non e' una dashboard finanziaria, non e' un'app per trader. Lo stile deve essere:

- **Caldo**: l'arancione #F55A27 come primary, palette pastello per le categorie obiettivo
- **Emotivo**: l'investimento e' legato a un sogno (viaggio, casa, educazione), non a un numero
- **Editoriale**: contenuti educativi integrati, pillole contestuali, copy che rassicura
- **Soft**: angoli super-ellipse (squircle), cornerSmoothing=1, bordi sottili, ombre quasi assenti
- **Flat**: niente ombre eccetto bottoni floating. UI pulita, spaziosa, respirante

### Cosa NON e' lo stile Gimme5

- Freddo o corporate
- Denso di dati finanziari
- Aggressivo con CTA multiple
- Giocoso in modo infantile (no emoji come elementi UI, no illustrazioni cartoon)
- Oscuro o cupo (anche il dark mode deve restare caldo)

---

## 4. Influenza Wise

### Cosa prendere da Wise

| Principio | Come si applica a Gimme5 |
|-----------|--------------------------|
| Pulizia | Spazio bianco generoso, pochi elementi per schermata, gerarchia chiara |
| Gerarchia | Un'azione primaria per schermata, testo secondario visivamente subordinato |
| Densita' informativa | Mostrare il dato utile senza sovraccaricare -- ogni numero ha contesto |
| Ritmo | Alternanza contenuto denso / respiro / contenuto denso |
| Struttura DS | Documentazione componenti di livello professionale |
| Qualita' percepita | L'utente sente che l'app e' "curata" -- ogni pixel ha senso |

### Cosa NON copiare da Wise

| Elemento Wise | Perche' non per Gimme5 |
|---------------|------------------------|
| Identita' visiva Wise | Gimme5 ha il suo brand arancione, non verde-acqua |
| Tono freddo/britannico | Gimme5 parla italiano, caldo, motivazionale |
| Meccaniche specifiche (multi-currency, borderless) | Gimme5 e' micro-investimento goal-based, non un conto multi-valuta |
| Palette fredda | La palette Gimme5 e' calda (arancione/pastello), non fredda (grigio-blu) |
| Densita' da power user | L'utente Gimme5 medio ha 1-3 obiettivi, non 10 conti in 5 valute |

**Regola**: distilla il principio, non copiare la soluzione.

---

## 5. Come costruire componenti

### Processo in 5 step

```
STEP 1 — Token First
  Verifica che tutti i token necessari esistano.
  Colori? Semantic vars. Spaziature? Spacing collection. Raggi? Radius collection.
  Se manca un token, CREALO PRIMA del componente.

STEP 2 — Anatomy
  Disegna la struttura con layer semantici:
  - Ogni layer ha un nome significativo (no "Frame 123", no "Rectangle 4")
  - AutoLayout ovunque (HUG/FILL)
  - Token bindati su ogni proprieta' visiva
  - cornerSmoothing = 1 su tutte le shapes

STEP 3 — Varianti
  Crea il Component Set con properties standard:
  - size: xs/sm/md/lg/xl (solo quelle che servono)
  - state: default/pressed/disabled/loading
  - style: primary/secondary/ghost/outline/link
  - Booleane per slot opzionali (hasIconLeft, hasIconRight)
  NO hover, NO focus web, NO desktop variants.

STEP 4 — Documentazione
  Il componente vive dentro un doc frame 1500px su 04 Components:
  - sys-header: titolo display/s + sottotitolo body/l + Logo/Mark
  - divider
  - sys-body: Top Label (sezione + col headers) + Wrapper (Side Label + Component Set)
  - Component Set con bordo viola tratteggiato, sfondo bg/primary
  - Ogni label in color/feedback/info (viola #8A38F5)

STEP 5 — Audit
  Passa la DS_QUALITY_CHECKLIST.md punto per punto.
  Se anche un solo punto critico fallisce, il componente non e' "done".
```

---

## 6. Logica varianti

### Solo cio' che serve su mobile

L'app Gimme5 e' mobile-only. Nessun utente la usera' su desktop. Questo significa:

**INCLUDI**:
- `default` -- stato base
- `pressed` -- feedback tattile (il dito sta premendo)
- `disabled` -- elemento non interattivo
- `loading` -- solo se il componente triggera un'azione asincrona (es. Button con API call)

**NON INCLUDERE**:
- `hover` -- non esiste su mobile
- `focus` -- gestito dal sistema operativo, non dal design
- `active` in senso web -- use `pressed` invece

**ECCEZIONE**: se il componente sara' usato anche in un contesto web (backoffice, landing page), aggiungere hover e focus. Ma documentare il motivo.

### Regola max varianti

Massimo 8 varianti per component set, salvo casi documentati. Se servono piu' di 8, il componente probabilmente deve essere decomposto in sotto-componenti.

Esempio Button: 4 style x 3 state x 3 size = 36 varianti -- accettabile perche' e' IL componente base del sistema.

---

## 7. Mobile-first

### Touch target 44px minimo

Ogni elemento interattivo deve avere un'area tappabile di almeno 44x44px.
Se il componente visivo e' piu' piccolo (es. icon 16px), il container deve comunque essere 44px.

Eccezione: elementi inline nel testo (link testuali) possono avere touch target piu' piccolo se la riga di testo e' sufficientemente alta.

### Regola SM WCAG

Il Button SM (36px) e' sotto il minimo 44px. Questo e' documentato come debito tecnico. Usare SM solo per azioni secondarie in contesti dove lo spazio e' critico (es. dentro una card).

### Gesture-friendly

- Swipe orizzontale: per card carousel (card obiettivo in HP)
- Pull to refresh: per aggiornamento dati
- Bottom sheet: per azioni contestuali (piu' raggiungibile di un modal centrato)
- FAB (+): sempre raggiungibile col pollice destro

---

## 8. Flutter readiness

### Mapping 1:1

| Figma | Flutter |
|-------|---------|
| Component Set con properties | StatefulWidget con parametri |
| Variante `size` | Enum `ButtonSize { sm, md, lg }` |
| Variante `state` | `isLoading`, `isDisabled`, `onPressed` |
| Semantic color variable | `Theme.of(context).colorScheme.xxx` |
| Text style | `Theme.of(context).textTheme.xxx` |
| Spacing token | `const double spacingMd = 12` |
| Radius token | `BorderRadius.circular(radiusSm)` |
| AutoLayout HORIZONTAL | `Row()` |
| AutoLayout VERTICAL | `Column()` |
| HUG | `mainAxisSize: MainAxisSize.min` |
| FILL | `Expanded()` o `Flexible()` |

### Divergenze note Figma-Flutter

| Proprieta' | Figma DS | Flutter Prototype | Azione |
|------------|----------|-------------------|--------|
| Background | #F6F6F6 | #F2F2F2 | Flutter deve aggiornare |
| Card surface | #FFFFFF | #F4F4F4 | Flutter deve aggiornare |
| Terminologia | "routine" | "regola" | Flutter deve aggiornare |
| Button height MD | 44px | 46px | Flutter deve aggiornare |

**Fonte di verita'**: Figma DS comanda. Flutter si allinea.

---

## 9. Scala del DS

```
FOUNDATIONS (01)
  Color Primitives, Typography Scale, Base Grid
    |
TOKENS (02)
  Semantic Colors (Light/Dark), Spacing, Radius, Stroke, Elevation, Shape
    |
ICONS (03)
  Lucide library, 4 size (Icon component), IconButton
    |
COMPONENTS (04)
  Button, Input, Card, NavBar, BottomSheet, Toggle, Chip...
    |
PATTERNS (05)
  Composizioni: GoalCard, MovementRow, FundSelector, OnboardingStep...
    |
FLOWS
  Schermate complete: HP, Onboarding, Crea Obiettivo, Routine...
```

Ogni livello dipende solo dai livelli precedenti. Un componente non puo' usare un pattern. Un pattern non puo' definire un nuovo token.

---

## 10. Regola 60-30-10

Distribuzione colore approvata da Andres (Brand, AcomeA):

- **60%** Neutri (bg/primary #F6F6F6, bg/secondary #FFFFFF, bordi, testo)
- **30%** Primary orange (brand/default #F55A27, bg/brand, accenti)
- **10%** Accent categoriali (colori obiettivo, feedback, fondi)

Questo rapporto vale per ogni schermata. Se una schermata ha piu' del 30% di arancione, e' troppo.

---

*Ultimo aggiornamento: 2026-05-14*
