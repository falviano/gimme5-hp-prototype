# Gimme5 Design System -- Decisions Log

Registro storico di tutte le decisioni prese sul DS e sul prodotto che impattano il sistema.
Formato: data, titolo, stato, motivo, impatto, riferimento.

---

## 2026-04-23 -- Stile illustrazioni: vettoriale illustrato

**Stato**: approved
**Motivo**: scalabilita', calore, editabilita' SVG. Il 3D richiede troppo effort e non scala per tutte le categorie obiettivo.
**Impatto**: le illustrazioni dell'app saranno flat/vector, non 3D render. Il DS dovra' definire uno styleguide illustrativo.
**Riferimento**: call 23 aprile (call-log.md #6)

---

## 2026-04-23 -- Termine "Routine" sostituisce "Regola"

**Stato**: approved
**Motivo**: "regola" non era immediatamente comprensibile. Giuseppe propone "routine", piace a tutti. Confermato definitivamente il 6 maggio.
**Impatto**: ogni label, copy, e componente nell'app e nel DS deve usare "routine", non "regola". Il prototipo Flutter deve essere aggiornato.
**Riferimento**: call 23 aprile (#6), confermato call 6 maggio (#10)

---

## 2026-04-27 -- Navigazione: no tab Community

**Stato**: approved (con riserva)
**Motivo**: "forum, feed social, leaderboard demotiverebbero il 59% degli utenti dormienti". Community spalmata nelle sezioni, non contenitore unico.
**Impatto**: la NavBar ha 5 tab: Home, Obiettivi, [+], Movimenti, Profilo. Nessuna tab Community o Esplora.
**Riferimento**: call 27 aprile AM (#7). Nota: Giuseppe potrebbe riaprire la discussione (community come "pillar").

---

## 2026-04-27 -- Paradigma goal-based

**Stato**: approved
**Motivo**: la ricerca accademica (Gargano/Rossi) dimostra che il goal-setting aumenta il risparmio del 91%. L'obiettivo e' l'unita' atomica, il fondo e' un attributo.
**Impatto**: tutta l'architettura dell'app ruota attorno agli obiettivi. Ogni obiettivo = 1 fondo = 1 contratto. Max 5-7 obiettivi.
**Riferimento**: call 27 aprile (#7, #8), confermato in tutte le call successive

---

## 2026-04-29 -- Salvadanaio come fallback

**Stato**: approved
**Motivo**: l'utente non e' obbligato a creare un obiettivo. Il Salvadanaio e' la card di fallback per fondi senza obiettivo. Piu' fondi senza obiettivo = sub-slot in un'unica card.
**Impatto**: serve un componente Card/Salvadanaio nel DS. CTA forte per convertire in obiettivo.
**Riferimento**: call 29 aprile (#9), call_29apr_decisions.md

---

## 2026-04-29 -- Terminologia Sfida, Trigger, Versa rapido

**Stato**: approved
**Motivo**: "Patto con te stesso" rinominato "Sfida". "Trigger" per investimenti event-based. "Versa rapido" per depositi one-off (+5, +10, custom).
**Impatto**: naming nei componenti DS, copy nelle schermate, flussi wireframe.
**Riferimento**: call 29 aprile (#9), terminology-evolution.md

---

## 2026-05-06 -- Pillole educative: 4 formati

**Stato**: approved
**Motivo**: dimensioni diverse per priorita' diversa. XL per utenti nuovi, S per utenti attivi. Formato editoriale, non tutorial step-by-step.
**Impatto**: servono 4 varianti componente Card/Pill: XL (343x400 r:32), L (343x200 r:24), M (343x140 r:16), S (343x100 r:12).
**Riferimento**: call 8 aprile (#2), confermato sessioni successive

---

## 2026-05-06 -- Card colorate per obiettivi con accento categoria

**Stato**: approved
**Motivo**: engagement emotivo. Ogni categoria obiettivo ha un colore pastello dedicato. Colori per categoria OR per fondo, non entrambi.
**Impatto**: palette colori categoria nel DS (10 colori category/* nei Primitives). Decisione finale hex non ancora formalmente approvata.
**Riferimento**: call 6 maggio (#10), confermato 13 maggio (#12)

---

## 2026-05-13 -- UI flat, senza ombre

**Stato**: approved
**Motivo**: Andres approva lo stile flat. Niente ombre eccetto bottoni floating (FAB).
**Impatto**: elevation/none come default. Usare elevation solo su FAB e bottom sheet.
**Riferimento**: call 13 maggio (#12)

---

## 2026-05-13 -- Card super-ellipse (squircle)

**Stato**: approved
**Motivo**: angoli piu' morbidi dei standard rounded. cornerSmoothing=1 su tutte le shapes.
**Impatto**: cornerSmoothing=1 applicato globalmente nel DS. Flutter deve implementare squircle (SmoothBorderRadius).
**Riferimento**: call 13 maggio (#12)

---

## 2026-05-13 -- Regola colore 60-30-10

**Stato**: approved
**Motivo**: distribuzione colore equilibrata. Andres (Brand) propone e approva.
**Impatto**: 60% neutri, 30% primary orange, 10% accent. Ogni schermata verificata contro questa regola.
**Riferimento**: call 13 maggio, stakeholder-preferences.md (Andres)

---

## 2026-05-14 (sessione 6) -- color/feedback/info = blue/500 (teal)

**Stato**: approved
**Motivo**: dopo restructure semantici, feedback/info punta a blue/500 (#126B83) non piu' a violet. Il viola e' riservato alle annotation DS.
**Impatto**: color/feedback/info non e' piu' viola. Per i label DS usare color/violet/500 (VariableID:1225:3).
**Riferimento**: gimme5_ds_state.md sessione 6

---

## 2026-05-14 (sessione 6) -- color/violet/500 per DS annotation labels

**Stato**: approved
**Motivo**: i label viola nel doc frame (Level 2, Level 3, Level 4, bracket, bordo component set) devono usare una variabile dedicata, non il token feedback/info che ora e' teal.
**Impatto**: tutti i label viola nel doc frame legati a color/violet/500. Primitivo con VariableID:1225:3.
**Riferimento**: gimme5_ds_state.md sessione 6, ds_master_doc_template.md

---

## 2026-05-14 (sessione 9) -- Button: 4 stili, 3 size, 3+1 stati

**Stato**: approved
**Motivo**: Button come componente base del DS. Stili: Primary, Secondary (deprecated), Ghost, Outline. Size: SM/MD/LG. Stati: Default, Pressed, Disabled, Loading.
**Impatto**: 36+ varianti nel component set. Font Archivo SemiBold. Token 100% semantic.
**Riferimento**: gimme5_ds_state.md sessione 9

---

## 2026-05-14 (sessione 9) -- Ghost button: Inter Regular, no fill, no border

**Stato**: approved
**Motivo**: Ghost e' l'azione piu' leggera ("Salta per ora"). Nessun fill, nessun border, nessun underline. color/text/tertiary (#5C5C5C).
**Impatto**: Ghost Button usa Inter Regular + color/text/tertiary. Non Archivo SemiBold.
**Riferimento**: gimme5_ds_state.md sessione 9

---

## 2026-05-14 (sessione 9) -- Link button: Inter Medium, underline, text/primary

**Stato**: approved
**Motivo**: Link e' il testo cliccabile inline ("Accedi", "Condizioni d'uso"). Underline per distinguerlo dal testo normale. color/text/primary (nero).
**Impatto**: Link usa Inter Medium + underline + color/text/primary. Componente separato da Button.
**Riferimento**: gimme5_ds_state.md sessione 9

---

## 2026-05-14 (sessione 10) -- text/on-brand: nero su arancio (WCAG 6.84:1)

**Stato**: approved
**Motivo**: il testo su sfondo brand (#F55A27) deve essere nero (#000000), non bianco. Nero su arancio = 6.84:1 WCAG. Bianco su arancio = solo 3.07:1.
**Impatto**: text/on-brand punta a neutral/900 (nero) in entrambe le modalita'. Tutti i testi su bg arancione sono neri.
**Riferimento**: gimme5_ds_state.md sessione 10

---

## 2026-05-14 (sessione 7) -- bg/primary e bg/secondary swap

**Stato**: approved
**Motivo**: bg/primary = #F6F6F6 (canvas app, lo "sfondo"). bg/secondary = #FFFFFF (card surface). Gerarchia: l'app ha sfondo grigio chiaro, le card sono bianche.
**Impatto**: tutti i componenti su card usano bg/secondary. Lo sfondo app usa bg/primary.
**Riferimento**: gimme5_ds_state.md sessione 7

---

## 2026-05-14 (sessione 7) -- Neutral scale redistribution

**Stato**: approved
**Motivo**: gap L* uniformi (~15-16 per step) da neutral/300 a neutral/900. Garantisce contrasti WCAG prevedibili.
**Impatto**: neutral/400-800 tutti ridistribuiti. 21 hex label aggiornati nel documento DS.
**Riferimento**: gimme5_ds_state.md sessione 7

---

## 2026-05 -- Token collections: 5 collezioni

**Stato**: approved
**Motivo**: architettura variabili Figma definita incrementalmente nelle sessioni 1-6.
**Impatto**: 5 collections nel file DS:
- `_ Primitives (base)` -- 30 colori, scopes=[] (nascosti dai picker)
- `Semantic` -- 30+ variabili con mode Light/Dark
- `Spacing` -- 10 valori (2xs -> max)
- `Radius` -- 6 valori (xs -> full)
- `Stroke` -- 4 valori (hairline -> strong)
**Riferimento**: gimme5_ds_state.md, ds_master_doc_template.md

---

## 2026-05-14 -- Doc frame 1500px (aggiornamento da 1400px)

**Stato**: approved
**Motivo**: i doc frame su 04 Components sono 1500px wide. Le sezioni Foundation/Tokens restano 1400px. L'aumento permette piu' spazio per component set con molte varianti.
**Impatto**: tutti i nuovi doc frame su 04 Components = 1500px FIXED. I vecchi a 1400px vanno migrati quando toccati.
**Riferimento**: MEMORY.md (auto-memory), ds_master_doc_template.md

---

*Ultimo aggiornamento: 2026-05-14*
