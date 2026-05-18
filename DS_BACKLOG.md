# Gimme5 Design System -- Backlog

Roadmap componenti organizzata per categoria.
Legenda: [x] = DONE (con data) / [ ] = TODO / [~] = In progress

---

## 01 -- Foundations

- [x] Color Primitives (Primary 50-900, Neutral 100-900, Feedback 4, Fondi 8, Category 10) -- 05/2026
- [x] Semantic Colors Light mode (30+ token con alias a Primitives) -- 05/2026
- [x] Semantic Colors Dark mode (struttura completa, valori definiti) -- 05/2026
- [x] Typography Scale (24 stili: display, headline, title, label, body, caption, chip, overline) -- 05/2026
- [ ] Elevation Scale -- valori definiti in gimme5_ds_state.md ma NON come variabili Figma (da creare solo su richiesta)
- [x] Grid system (375px, 4col, 16px margin, 16px gutter) -- 05/2026
- [ ] Motion / Animation tokens -- non iniziato

---

## 02 -- Tokens

- [x] Spacing collection (2xs=2 through max=80, 10 valori) -- 05/2026
- [x] Radius collection (xs=8 through full=999, 7 valori) -- 05/2026
- [x] Stroke collection (hairline=0.5 through strong=2, 4 valori) -- 05/2026
- [x] Shape system (card dimensions, pill dimensions, nesting rules, content box) -- 05/2026
- [ ] Opacity tokens -- non definiti
- [ ] Z-index / layer tokens -- non definiti

---

## 03 -- Icons

- [x] Icon library (1844 icone Lucide, 23 categorie) -- 05/2026
- [x] Icon component (4 size: XS=16, S=20, M=24, L=28) -- 05/2026
- [x] IconButton component (4 size x 3 state = 12 varianti) -- 05/2026
- [ ] Icon color usage guidelines -- non documentato
- [ ] Icon set ridotto (solo icone effettivamente usate nell'app) -- da definire

---

## 04 -- Core Components

- [x] Button (4 style x 3 size x 3 state + Loading, icon slots, Archivo SemiBold) -- 05/2026
- [x] Link (3 varianti: default/pressed/disabled, Inter Medium, underline) -- 05/2026
- [ ] Input / TextField -- P0, piu' usato dopo Button, stati complessi (default/focus/error/disabled/filled)
- [ ] Checkbox -- P2
- [ ] Radio -- P2
- [ ] Toggle / Switch -- P2
- [ ] Slider -- P3 (per importo investimento?)

---

## 05 -- Navigation

- [ ] NavBar (5 tab: Home, Obiettivi, [+], Movimenti, Profilo) -- P0, serve per ogni schermata
- [ ] TopBar / AppBar -- P0, serve per ogni schermata
- [ ] TabBar (toggle Obiettivi/Portafoglio in HP) -- P1
- [ ] BottomSheet -- P1, usato per azioni [+], conferme
- [ ] Modal / Dialog -- P1, usato per conferme, errori
- [ ] Drawer -- P3, non usato nel wireframe attuale

---

## 06 -- Feedback

- [ ] Toast / Snackbar -- P2, conferme azioni
- [ ] Alert / Banner -- P2, comunicazioni HP
- [ ] Badge -- P2, notifiche
- [ ] Tag / Chip -- P1, categorie obiettivo, filtri, stato
- [ ] Skeleton loader -- P2, loading state schermate
- [ ] ProgressBar (lineare) -- P1, progresso obiettivo
- [ ] Spinner / Loading indicator -- P2, stati caricamento

---

## 07 -- Cards

- [ ] Card/Full (343x400 r:32) -- P1, card obiettivo HP
- [ ] Card/Gallery (253x300 r:24) -- P1, lista fondi, gallery
- [ ] Card/Compact (164x200 r:12) -- P2, card secondarie
- [ ] Card/Goal -- P0, card obiettivo con progress, colore categoria, cifra
- [ ] Card/Fund -- P1, card fondo con rendimento, rischio, dettaglio
- [ ] Card/Salvadanaio -- P0, fallback per fondi senza obiettivo

---

## 08 -- Financial Modules

- [ ] GoalCard (obiettivo con progress bar, immagine, cifra, routine) -- P0
- [ ] FundCard (fondo con rendimento, rischio, categoria) -- P1
- [ ] SavingProgress (barra progresso verso target con proiezione) -- P1
- [ ] MovementRow (riga lista movimenti: icona, label, importo, stato, data) -- P1
- [ ] BonificoForm (form bonifico con importo, IBAN, conferma) -- P2
- [ ] AmountInput (input importo con quick actions +5/+10/custom) -- P1

---

## 09 -- Goal System

- [ ] GoalCreation flow components (categoria, nome, target, data, recap) -- P1
- [ ] GoalDetail (dettaglio obiettivo: fondo, routine, progresso, azioni) -- P1
- [ ] GoalProgress (progress arc/bar con proiezione temporale) -- P1
- [ ] GoalCelebration (schermata full-screen obiettivo raggiunto) -- P2
- [ ] GoalEmpty (stato vuoto: nessun obiettivo, CTA creazione) -- P2
- [ ] GoalExpired (stato scaduto: CTA proroga) -- P2
- [ ] GoalShared (obiettivo condiviso: partecipanti, invito) -- P3

---

## 10 -- Routine System

- [ ] RoutineCard (card routine attiva con cifra, frequenza, stato) -- P1
- [ ] RoutineCreation (flusso creazione: frequenza, importo, obiettivo, conferma) -- P2
- [ ] RoutineDetail (dettaglio routine: storico, pausa, modifica) -- P2
- [ ] RoutineList (lista routine attive in schermata profilo/obiettivo) -- P2
- [ ] RoutinePause (conferma pausa/riattivazione routine) -- P3

---

## 11 -- Charts

- [ ] ProgressArc (arco circolare progresso obiettivo) -- P2
- [ ] LineChart (grafico andamento fondo) -- P2
- [ ] BarChart (storico versamenti) -- P3
- [ ] AllocationPie (torta allocazione portafoglio) -- P2
- [ ] MiniChart (chip con zigzag up/down per rendimento) -- P2

---

## 12 -- Onboarding Modules

- [ ] StepIndicator (progress bar flusso onboarding) -- P1
- [ ] WelcomeSlide (slide benvenuto con illustrazione) -- P2
- [ ] KYCStep (step raccolta dati con validazione) -- P2
- [ ] PlanCard (card riepilogo piano scelto) -- P2
- [ ] DocumentModal (modale documenti precontrattuali) -- P2

---

## 13 -- Motion

- [ ] Page transitions -- P3
- [ ] Micro-interactions (button press, toggle, card expand) -- P3
- [ ] Celebration animation (confetti, checkmark animato) -- P3
- [ ] Loading states animation -- P3

---

## 14 -- Experimental

- [ ] Sfida widget (sfida comportamentale con tracking) -- P3
- [ ] Trigger sportivo (investimento legato a eventi sport) -- P3
- [ ] CommunityCard (banner community contestuale con contatore) -- P3
- [ ] ChatbotEntry (punto ingresso chatbot HP) -- P3
- [ ] WelcomeMessage (messaggio dinamico effimero apertura app) -- P3

---

## Priorita' prossimi componenti (ordine consigliato)

1. **Input/TextField** -- piu' usato dopo Button, serve per onboarding e tutti i form
2. **NavBar** -- serve per ogni schermata, 5 tab con [+] arancione
3. **TopBar/AppBar** -- serve per ogni schermata, titolo + azioni
4. **Card/Goal** -- componente chiave della HP, obiettivo con progress
5. **Tag/Chip** -- usato per categorie, stati, filtri
6. **ProgressBar** -- progresso obiettivo nelle card
7. **BottomSheet** -- azioni [+], conferme
8. **Card/Salvadanaio** -- fallback HP per utente senza obiettivo
9. **MovementRow** -- tab Movimenti
10. **AmountInput** -- versamento rapido, routine importo

---

*Ultimo aggiornamento: 2026-05-14*
