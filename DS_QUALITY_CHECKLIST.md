# Gimme5 Design System -- Quality Checklist

Checklist obbligatoria prima di considerare un componente "done".
Ogni punto deve essere verificato. Se un punto FONDAMENTALE fallisce, il componente non e' pronto.

---

## FONDAMENTALI

- [ ] Nome segue naming convention DS (PascalCase/lowercase, vedi gimme5_ds_naming.md)
- [ ] Tutte le properties usano i nomi standard (size/state/style/mode, lowercase)
- [ ] Nessun valore hardcoded: tutti i fills/strokes/radius/spacing sono token
- [ ] Typography usa DS text styles (non font-size libero) -- textStyleId SET su ogni text node
- [ ] AutoLayout su ogni frame (HUG/FILL, nessun absolute positioning libero salvo documentato)
- [ ] Description del componente compilata in Figma (nome, stati, warning WCAG se presente)
- [ ] cornerSmoothing = 1 su tutte le shapes

---

## VARIANTI & STATI

- [ ] Varianti: default, pressed, disabled presenti
- [ ] Loading state presente se il componente triggera un'azione async
- [ ] Nessuna variante hover/focus desktop (se presente da legacy, rinominare)
- [ ] Nessuna variante inutile (ogni variante ha un use case reale nell'app)
- [ ] Max 8 varianti per component set (se piu': motivo documentato in DS_DECISIONS_LOG.md)
- [ ] Property names lowercase (size, state, style -- non Size, State, Style)
- [ ] Property values lowercase (sm, md, lg -- non SM, MD, LG in Figma internal)

---

## SPACING & LAYOUT

- [ ] Touch target minimo 44x44px per elementi interattivi (documentare eccezioni)
- [ ] Spacing usa token Spacing collection (2xs/xs/sm/md/lg/xl/2xl/3xl/4xl/max)
- [ ] cornerRadius usa token Radius collection (xs=8/sm=12/md=16/lg=20/xl=24/2xl=32/full=999)
- [ ] Padding interno coerente col resto del sistema
- [ ] Dimensioni in multipli di 4px dove possibile (Flutter alignment)
- [ ] Gap tra elementi usa spacing token, non valori liberi

---

## ACCESSIBILITA'

- [ ] Contrasto testo/sfondo WCAG AA (4.5:1 testo normale, 3:1 large text >= 18px bold o >= 24px regular)
- [ ] Stato disabled visivamente distinto ma non solo per colore (anche opacita' o struttura)
- [ ] Layer naming semantico (no "Frame 123", "Rectangle 4", "Text 7")
- [ ] Icone con ruolo decorativo o significativo esplicitato nel naming (icon-left, indicator, separator)
- [ ] Se WCAG fallisce su una variante, documentare nella description del componente

---

## DOCUMENTAZIONE DS

- [ ] Componente vive dentro il doc frame 1500px su 04 Components
- [ ] sys-header con titolo (display/s), sottotitolo (body/l), Logo/Mark (56x30)
- [ ] Divider tra header e body (color/border/default)
- [ ] sys-body con padding 32px e gap 16px
- [ ] Top Label con sezione title (Level 2) e col headers (Level 3)
- [ ] Side Label con row labels (Level 4), testi ruotati, clipsContent=false
- [ ] Component Set con bordo viola tratteggiato (color/violet/500, 1px DASHED)
- [ ] Sfondo grid: color/bg/primary (#F6F6F6)
- [ ] Tutti i label viola legati a color/violet/500 (NON color/feedback/info)
- [ ] paddingLeft Top Label = larghezza Side Label (36px)

---

## FLUTTER READINESS

- [ ] Ogni variante mappabile a uno stato Flutter widget
- [ ] Nessun effetto Figma-only non riproducibile in Flutter (es. gradient stroke impossibile)
- [ ] Dimensioni in multipli di 4px dove possibile
- [ ] Token corrispondono a variabili CSS/Flutter gia' definite in gimme5_ds_state.md
- [ ] Struttura componente mappabile a Row/Column/Stack/Container Flutter
- [ ] Nessun "magic number" -- ogni valore ha un token o una giustificazione

---

## SISTEMA

- [ ] Componente non duplica un componente esistente (cercato con search_design_system)
- [ ] Coerente visivamente con almeno 3 altri componenti del sistema
- [ ] Revisionato da una seconda persona prima di "done"
- [ ] Aggiunto a DS_BACKLOG.md come "completed" con data
- [ ] Decisione documentata in DS_DECISIONS_LOG.md se ha introdotto pattern nuovi
- [ ] gimme5_ds_state.md aggiornato con nuovo componente (ID, varianti, posizione)
- [ ] Se il componente ha token nuovi, aggiunti anche a gimme5_ds_naming.md

---

## COME USARE QUESTA CHECKLIST

1. Copia questa checklist nel messaggio di audit del componente
2. Metti [x] per ogni punto verificato
3. Metti [!] per ogni punto che fallisce con nota di spiegazione
4. Se tutti i FONDAMENTALI sono [x]: il componente puo' essere "done"
5. Se un FONDAMENTALE e' [!]: il componente NON e' done, serve fix
6. I punti non-FONDAMENTALI con [!] generano un debito tecnico da tracciare

---

## DEBITI TECNICI NOTI

### Button SM
- [!] WCAG: 12px nero su #F55A27 = 3.29:1 (sotto 4.5:1 AA) -- documentato in description
- [!] Touch target: 36px sotto minimo 44px -- documentato in description

### DS Anomalies (da risolvere)
- [!] title/xs = title/s -- entrambi Archivo SemiBold 12/16. Stile ridondante
- [!] chip/xs = chip/m -- entrambi Archivo Medium 12/16. Stile ridondante
- [!] text/tertiary -- stesso valore #979797 in Light e Dark. Intenzionale o bug?
- [!] radius/lg = radius/md -- entrambi 16px. Gap nella scala naming

---

*Ultimo aggiornamento: 2026-05-14*
