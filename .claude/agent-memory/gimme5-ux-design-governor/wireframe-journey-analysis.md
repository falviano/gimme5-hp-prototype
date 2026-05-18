# Wireframe Journey Esperto — Analisi Sezione per Sezione
Analizzato: 2026-05-14
File: gimme5-hp-wireframes/wireframe-journey-esperto.html
19 sezioni totali (+ 1 sidebar 05b)

---

## PREMESSA — Cosa ho verificato nella lettura

**Nav bar confermata nel wireframe**: `Home | Obiettivi | [+] | Movimenti | Profilo` — 5 tab. Presente in ogni schermata. Questo risolve la contraddizione nei file di memoria: il wireframe ha già la nav a 5 tab con "Movimenti" (non "Esplora").

**Terminologia nel wireframe**: "Routine" usato correttamente. "Regola" usato nel codice CSS come classe (.routine-row) ma il copy del wireframe dice "Routine" e "Sfida".

**Terminologia nel copy doc (Gimme5_HomePage.docx)**: usa ancora "Gimme ricorrente", "il tuo Gimme", "Regola" — OBSOLETO rispetto al wireframe. Il copy document non è allineato al wireframe.

**Fondi nel wireframe**: Fidelity Global Equity Growth, Amundi Azionario Europa ESG, Eurizon Bilanciato Prudente, Vanguard World Diversificato, AcomeA Risparmio, AcomeA Global Bond — mix di fondi reali e placeholder. Non tutti sono fondi Gimme5.

**Sezione mancante**: [+] flow va da 04 (Sfida) a 06 (Versa/Preleva). Manca il 05 = Switch. Confermato: Switch mai wireframato (discusso call 11 maggio, mai progettato).

---

## SEZIONE 01 — HP: Fondo ✓ Routine ✓ Obiettivo ✘

**Obiettivo UX**: Primo landing post-onboarding. Utente ha fondo e routine dal prototipo, ma non ha ancora creato un obiettivo. HP deve spingere alla creazione obiettivo.

**Logica del flusso**: HP mostra il valore del fondo senza obiettivo → card placeholder "Datti un obiettivo" → CTA primaria → onboarding obiettivo. Il fondo e la routine sono già impostati, quindi la creazione obiettivo si riduce a: nome, target, data.

**Relazione con onboarding**: Questo è lo stato che si genera se l'onboarding React attuale viene usato così com'è. Il prototipo React non crea nessun obiettivo → ogni utente onboardato finisce in questo stato. È lo stato di entry più comune.

**Relazione con HomeScreen**: Questa È la HomeScreen per il caso più frequente del lancio. Tutta la sezione 01 è il cuore della HP.

**Relazione con paradigma goal-based**: TENSIONE. Il paradigma dice "obiettivo prima". Questo stato esiste perché l'onboarding non crea un obiettivo. Se il paradigma fosse rispettato, questo stato non dovrebbe esistere o dovrebbe essere brevissimo.

**Problemi UX**:
- Non è chiaro visivamente quanto è "urgente" creare l'obiettivo vs semplicemente guardare il saldo
- La card placeholder compete visivamente con le card obiettivo reali — stesso container, peso diverso
- Se l'utente ha già versato soldi (dal prototipo: attiva fondo + versa), il saldo è positivo. Ma non ha obiettivo. Contraddizione emotiva: "stai risparmiando, ma per cosa?"

**Incoerenze**:
- Copy doc usa "Gimme ricorrente" — wireframe usa "Routine". Disallineamento se il copy viene portato così com'è.
- Il copy doc (Caso 1) dice "il tuo Gimme ricorrente è attivo, manca solo una cosa" — buono emotivamente, ma usa terminologia sbagliata.

**Dipendenze dalla navigazione**: Dipende da che la nav "Obiettivi" esista come tab. Se Andres rimuove la tab Obiettivi, la card placeholder deve cambiare destinazione (→ [+] hub).

**Dipendenze dal DS**: Button (CTA principale), Card Obiettivo placeholder (variante dashed), Progress bar (assente qui), NavBar component.

**Componenti necessari**: Button primario, Card Obiettivo (variante vuota/placeholder), NavBar a 5 tab, Value block (Valore totale + sub), Greeting text.

**Punti non risolti**:
- Il fondo senza obiettivo ha un nome? "Salvadanaio" o nome del fondo stesso?
- La card placeholder è dismissibile? O è permanente finché non si crea l'obiettivo?
- L'utente può ignorarla e usare il Versa rapido su un fondo senza obiettivo?

**Rischi di implementazione**: Se il backend non espone lo "stato" fondo-senza-obiettivo come dato distinto, il frontend non sa quando mostrare questo stato vs lo stato normale.

**Rischio Flutter handoff**: Il prototipo React non implementa questo stato. Alessandro implementa da React → questo stato non viene costruito.

---

## SEZIONE 01b — Obiettivo Condiviso

**Obiettivo UX**: Mostrare l'obiettivo condiviso come variante della card normale. "Stesso obiettivo, ognuno al proprio ritmo. I progressi si sommano, i conti restano separati."

**Logica del flusso**: Card obiettivo con indicatore partecipanti (👥). Progress bar somma i contributi di più persone. Il saldo mostrato è quello dell'utente, non quello condiviso totale.

**Relazione con paradigma goal-based**: Forte — estende il goal-based a dimensione sociale. Allineato con il "community pillar" di Giuseppe ma non richiede tab Community.

**Problemi UX**:
- Non è chiaro visivamente come si distingue dalla card normale a colpo d'occhio
- "I conti restano separati" è un dettaglio tecnico critico per la compliance — dove viene comunicato?
- Cosa succede se un partecipante si ritira? L'obiettivo condiviso scompare?

**Incoerenze**: Il wireframe mostra "👥 Coinvolgi qualcuno in questo obiettivo" come CTA secondaria nel dettaglio obiettivo — ma il flusso per creare un obiettivo condiviso da zero non è wireframato.

**Punti non risolti**:
- Max partecipanti?
- Il link di invito scade?
- Cosa vede l'altro utente se non è già un utente Gimme5?

**Dipendenze dal DS**: Badge / chip partecipanti, card obiettivo con variante condivisa.

**Rischio Flutter handoff**: Feature complessa. Richiede backend coordinato. Il prototipo React non la implementa.

---

## SEZIONE 02 — Obiettivo Negativo

**Obiettivo UX**: Gestione emotiva della perdita temporanea. Non farsi abbandonare dall'utente durante la volatilità.

**Logica del flusso**: Al primo accesso con rendimento negativo → modale rassicurante full-screen. Poi HP normale con badge rosso "-€X". Tap su card → dettaglio con grafico giù + messaggio rassicurante.

**Relazione con paradigma goal-based**: Perfettamente allineato. Il goal-based protegge dall'abbandono per volatilità: "il tuo obiettivo è ancora X%, stai andando verso dic 2027" — il mercato è rumore, il target è la stella polare.

**Problemi UX**:
- La modale rassicurante appare solo "al primo accesso" con negativo — se l'utente apre e chiude più volte durante un periodo negativo, la vede una volta sola? Serve un meccanismo di cool-down.
- Il badge rosso "-€X" sulla card: si vede solo l'effetto mercato negativo o il saldo netto? Questa distinzione è il punto aperto dell'utile (item #7 degli unresolved).
- Non c'è gestione dell'utente che vuole prelevare per paura. Nessuna CTA "Voglio uscire" con friction positiva.

**Incoerenze**: Il copy doc (Caso 7) parla di "mercati giù" con pop-up, ma usa "Gimme5" come termine per la routine.

**Dipendenze dalla navigazione**: La modale è indipendente dalla nav. Il badge rosso nella card HP è indipendente.

**Componenti necessari**: Modal / Bottom Sheet (stato alert), Badge negativo, Card obiettivo (variante negativa).

**Punti non risolti**:
- Il rendimento mostrato nella card HP è lordo o netto? Questo non è ancora deciso (item #7).
- Quante volte e per quanto tempo appare la modale rassicurante?

**Rischio Flutter handoff**: La modale rassicurante è stateful (non ripete). Richiede persistenza locale o backend.

---

## SEZIONE 03 — Obiettivo Scaduto

**Obiettivo UX**: Scadenza senza 100%. Non punire l'utente, non farlo sentire un fallito. CTA unica: proroga.

**Logica del flusso**: Badge "Attenzione richiesta" in HP → tap → dettaglio con stato scaduto → CTA "Proroga scadenza" (unica). Nessuna CTA "Chiudi obiettivo" o "Preleva" nella schermata principale.

**Relazione con paradigma goal-based**: Forte. Non si "fallisce" un obiettivo, si prolunga. Questo è coerente con i dati (obiettivi a breve termine hanno più successo — la proroga simula un reset a breve termine).

**Problemi UX**:
- "Proroga scadenza" come CTA unica è un'opzione di default forzata. Cosa se l'utente vuole davvero chiudere e prelevare? Il flusso di preleva deve essere accessibile anche dallo stato scaduto, probabilmente con più friction.
- Il badge "Attenzione richiesta" — quante card scadute prima che la HP diventi un muro di badge rossi?

**Punti non risolti**:
- Cosa succede se l'utente ignora il badge per settimane?
- La Routine continua a girare anche dopo la scadenza? (Probabilmente sì, ma non è mostrato.)
- Il sistema invia notifiche push per la scadenza?

**Rischio Flutter handoff**: Stato scaduto richiede logica backend (confronto data target vs oggi). Semplice da implementare ma deve essere esposto correttamente dall'API.

---

## SEZIONE 04 — Obiettivo Completato

**Obiettivo UX**: Celebrazione + reindirizzo immediato verso il prossimo obiettivo. Non mostrare "preleva" nella schermata di celebrazione.

**Logica del flusso**: Schermata celebrazione full-screen (dark) con "100%" e blob → corpo chiaro con fatti sull'investimento → CTA "Crea il prossimo obiettivo" → Routine ancora attiva (visibile nella sezione routine) → pillola educativa "Chi lascia investito dopo il traguardo guadagna in media il 18% in più nei 12 mesi successivi".

**Relazione con paradigma goal-based**: Eccellente. Il completamento non è la fine del risparmio ma l'inizio del prossimo. Il nudge "lascia investito" è supportato dai dati accademici.

**Problemi UX**:
- "Nessuna CTA di prelievo nella celebrazione" è una scelta deliberata. Ma l'utente DEVE poter prelevare. Dove va? Il preleva è accessibile dal dettaglio obiettivo (step successivo) o solo da [+]?
- La Routine "ancora attiva" — verso quale fondo continua a versare se l'obiettivo è chiuso? Il fondo esiste ancora? Va nel salvadanaio?

**Incoerenze**: La pillola educativa cita dati interni Gimme5 ("in media il 18% in più") — questi dati esistono? Sono verificabili? Potrebbero essere un problema compliance.

**Componenti necessari**: Screen celebrazione (variante full-dark), Edu card (formato S), CTA primaria filled.

**Punti non risolti**:
- Routine post-completamento: verso dove?
- Preleva nel flusso celebrazione: come si raggiunge?
- Il "100%" include o esclude l'effetto mercato?

---

## SEZIONE 05 — Obiettivo Dettaglio

**Obiettivo UX**: Pagina di gestione di un singolo obiettivo. Tutto il contesto: progresso, fondo, regole attive, movimenti, azioni rapide. Hub decisionale per l'obiettivo.

**Logica del flusso**: Accesso da tap su card HP → schermata dettaglio con:
- Header: immagine obiettivo (placeholder grafico)
- ← Indietro + ⚙ settings
- Nome obiettivo + %
- Progress bar (con segmento mercato tratteggiato)
- Valore corrente (€ grande) + target + data
- Grid 2 col: Rendimento ⓘ + Ultimi 30gg ⓘ
- Sezione Fondo (card singola)
- Sezione Regole attive (lista con badge)
- + Aggiungi una regola (dashed)
- Ultimi movimenti (3 items + Vedi tutti →)
- CTA Versa rapido (3 button: +€5, +€10, Versa rapido ↑)
- CTA secondaria: "👥 Coinvolgi qualcuno"

**Sub-stati**:
- B: dettaglio con 1 Routine attiva
- B2: dettaglio con 1 Routine + 1 Sfida (card sfida con streak + "Ho sgarrato →")
- C: tap su fondo → pagina fondo (rischio, TER, rendimento YTD, grafici storici)
- D: tap su regola → pagina regola (importo, prossimo versamento, conto, movimenti, Modifica/Pausa/Elimina)
- E: 0 regole → box dashed "Aggiungi una regola" come CTA primaria
- F (futuro): 2 fondi su 1 obiettivo con barra composizione + 2 card fondo

**Relazione con HomeScreen**: Il dettaglio è il "drill down" della card HP. L'informazione chiave (progresso, fondo, routine) è mostrata in modo compresso in HP e espansa qui.

**Problemi UX**:
- Il ⚙ settings in alto a destra: dove porta? Modifica obiettivo? O una action sheet con Modifica/Pausa/Elimina/Condividi?
- "Ultimi 30gg ⓘ" — questo è il punto aperto critico. Fabio ha detto che il calcolo è complesso se ci sono versamenti/rimborsi in mezzo. Il ⓘ suggerisce una spiegazione inline, ma non è definito.
- La Sfida nella B2 mostra "Ho sgarrato →" come pill. Questo implica un flusso di dichiarazione infrazioni — non wireframato qui, solo citato come "G: flusso dichiarazione infrazioni" nella description della sezione [+] Sfida.
- La pagina fondo (C) mostra fondi non-AcomeA (Fidelity, Vanguard) — placeholder ok, ma Alessandro potrebbe implementarla così.

**Incoerenze**:
- La sezione F mostra "2 fondi su 1 obiettivo" annotata come "⚠ Casistica futura" — ma la decisione del 29 aprile dice esplicitamente "obiettivo 1:1 con fondo, multi-fondo rinviato". Questa sezione F non dovrebbe esistere nel MVP. Rischio che venga implementata.
- "Ultimi movimenti" mostra "Effetto mercato" come voce separata. Ma Alessandro ha detto che ci sono 3 tipi di operazioni con stati diversi (item #10 unresolved). L'approccio del wireframe potrebbe non coprire tutti i casi.

**Dipendenze dalla navigazione**: La tab "Home" è sempre active nella bottom nav del dettaglio — questo implica che il dettaglio obiettivo è "dentro" la tab Home, non una schermata separata del stack Obiettivi. Questo ha implicazioni per il back-stack Flutter.

**Componenti necessari**:
- Card fondo (medium, con stats)
- Routine row (con badge stato)
- Sfida card (con streak calendar + "Ho sgarrato")
- Movimento row
- Progress bar (5px, con segmento mercato)
- Grid stat 2x2
- CTA trio (versa rapido)
- Bottom sheet per ⚙ azioni

**Punti non risolti**:
- ⚙ = cosa mostra esattamente?
- "Ultimi 30gg" — calcolo accettato da Fabio?
- Rendimento: lordo o netto? Utile realizzato + in corso?
- Sezione F da escludere formalmente dall'MVP

**Rischio Flutter handoff**: La sezione più complessa dell'intera app. 6 sub-stati. La card Sfida è un componente interamente nuovo. Senza componenti DS, ogni stato sarà reinventato da Alessandro.

---

## SEZIONE 05b — Card Obiettivo: Azioni Rapide da HP

**Obiettivo UX**: Ridurre il friction per il versamento spontaneo. Tap su "+€5" nella card HP → sheet pre-caricato → conferma in 1 tap.

**Logica del flusso**:
1. Card HP mostra inline: [+€5] [+€10] [Versa rapido ↑]
2. Tap "+€5" → bottom sheet con amount pre-selezionato, obiettivo pre-selezionato
3. Tap "Conferma" → feedback visivo → torna a HP

**Problemi UX**:
- L'utente con 3 obiettivi ha 3×3 = 9 chip di azione sulla HP. La HP con 5 obiettivi ha 15 chip. Diventa rumorosa.
- "+€5" e "+€10" sono fissi. Ma il Do&Don'ts dice "nessun ammontare fisso promesso" — i chip sono ok perché sono contributi al fondo (non rendimento), ma vanno comunicati correttamente.
- L'utente che tappa "+€5" per sbaglio: c'è una conferma? Il sheet pre-caricato ha un passo di conferma?

**Dipendenze dal DS**: Bottom Sheet (state pre-caricato), Quick chip component.

**Punti non risolti**:
- Il chip "+€5" apre lo stesso sheet di "+€10" ma con valore diverso pre-selezionato?
- "Versa rapido ↑" porta allo stesso sheet o a una schermata completa con numpad?
- Il versamento rapido da HP bypassa la selezione obiettivo (già selezionato dalla card)?

---

## SEZIONE 06 — Dettaglio Portafoglio

**Obiettivo UX**: Vista aggregata di tutto il portafoglio. Accesso da "Portafoglio →" in HP (testo piccolo sotto il valore totale).

**Logica del flusso**: "Portafoglio →" in HP → schermata portafoglio con:
- Grafico andamento mensile (placeholder "Grafico andamento mensile")
- Chip mese per navigare nel tempo
- Bilancio aggregato (tutti gli obiettivi)
- Espansione dati (dettaglio per fondo/obiettivo)

**Relazione con HomeScreen**: È il "sotto il cofano" della HP. L'HP mostra il singolo obiettivo, il portafoglio mostra il totale.

**Problemi UX**:
- Il punto di accesso "Portafoglio →" è nell'area del valore totale — piccolo, link di testo, non una CTA primaria. Rischio che non venga scoperto.
- Il grafico è un placeholder vuoto. Non c'è decisione su: quale metrica (rendimento cumulato? NAV? Versamenti vs rendimento?), quale range temporale default, come gestire i gap se l'utente ha aggiunto fondi nel tempo.
- "Espansione tutti i dati" — non è chiaro il pattern. Accordion? Schermata separata?

**Incoerenze**: Fabio ha segnalato (call 29 aprile) che il calcolo del rendimento ultimi 30gg è complesso. Il portafoglio aggregato amplia il problema: come calcoli il rendimento del portafoglio complessivo se ogni fondo ha una data di ingresso diversa?

**Dipendenze dal DS**: Grafico (componente non nel DS), Chip filtro mese, Stats aggregato.

**Componenti necessari**: Grafico linea/area (componente nuovo, non nel DS), Chip mese (scrollabile), Fund card (variante compatta per lista), Stacked bar (già nel wireframe CSS).

**Punti non risolti**:
- Cosa mostra il grafico? Rendimento % o valore assoluto?
- La metrica utile/perdita mostrata è realizzata, in corso, o totale? (Item #7 degli unresolved)
- Come funziona il "Donut chart" menzionato nelle call — è questa schermata o un'altra?

**Rischio Flutter handoff**: Il grafico è il componente più complesso da implementare e il più legato alle API. Nessun precedente nel DS o nel prototipo React (c'è gimme5-portfolio-chart.html separato).

---

## SEZIONE: AZIONI SULL'OBIETTIVO (01-04)

### 01 — Modifica Obiettivo
"Flow multi-step identico alla creazione. Parte dalla stessa action sheet."

**Problema UX**: "Identico alla creazione" implica che il flusso di modifica NON differenzia tra modificare il nome (1 step) vs modificare il target/data (2 step) vs cambiare fondo (impatto grosso). L'utente che vuole solo cambiare il nome percorre tutti i step.

**Punti non risolti**: Può l'utente cambiare il fondo di un obiettivo? (Risposta dal call: no per ora — 1:1 obiettivo-fondo.)

---

### 02 — Aggiungi Regola
"Flow: scegli tipo → scegli frequenza → [metodo pagamento sett/giorn] → configura importo → riepilogo."

**Problema UX**: Il tipo di regola include Routine, Trigger, Sfida — ma questi hanno flow molto diversi. "Scegli tipo" è il bivio critico che porta a flow divergenti. Non è wireframato come schermata separata qui.

**Dipendenza critica**: Il metodo di pagamento per routine settimanale/giornaliera (carta/Satispay) è diverso dal mensile (RID). Questa dipendenza non è mostrata nel wireframe di questa sezione.

---

### 03 — Metti in Pausa
"Sospende la Routine senza toccare il saldo investito."

**Problema UX**: La pausa è per quanto tempo? Indefinita? C'è un'opzione "riprendi automaticamente il [data]"? Fabio ha detto che la pausa è fattibile solo per ricorrente, non per eventi sportivi.

**Punti non risolti**: La pausa di una Sfida è diversa dalla pausa di una Routine? Il wireframe non distingue.

---

### 04 — Elimina Obiettivo
"Il saldo rimane nel portafoglio. Parte dalla stessa action sheet."

**Problema UX critico**: "Il saldo rimane nel portafoglio" — dove? Nel salvadanaio? In un fondo senza obiettivo? Questo è esattamente il punto di conflitto tra Filippo e Alessandro sul salvadanaio.

**Incoerenza con decisioni**: Alessandro dice che eliminare un obiettivo crea un nuovo obiettivo (salvadanaio con quel fondo). Filippo dice che il saldo già nel salvadanaio semplicemente rimane lì. Non risolto.

---

## SEZIONE: FLUSSI DAL [+]

### 01 — Crea Obiettivo da [+]
"Stesso flow di creazione dell'utente nuovo. Trigger: modale [+] con 'Nuovo obiettivo' in primo piano."

**Logica del flusso**: [+] → action sheet → "Nuovo obiettivo" → flow creazione: categoria → nome → target+data → recap + fondo preselezionato → crea.

**Problema UX**: "Fondo preselezionato" — da dove viene il preselezionato? Dal fondo che l'utente usa già? Dall'algoritmo? Non è definito.

**Relazione con onboarding**: Questo è il flusso che avrebbe dovuto esistere nell'onboarding ma non c'è. Se l'utente ha completato l'onboarding senza obiettivo, questo è la sua prima esperienza di creazione obiettivo.

**Componenti necessari**: Action sheet [+] (multi-option), Grid category chip (2×N), Input testo, Input importo, Date picker, Recap card.

---

### 02 — Regola Routine da [+]
"Tap 'Routine ↻' → scegli obiettivo → scegli frequenza → [metodo pagamento] → configura importo → recap → obiettivo aggiornato."

**Problema UX**: "Scegli obiettivo" implica che l'utente ha già un obiettivo. Se non ce l'ha, questo flow non funziona. Manca un gate: "prima crea un obiettivo".

**Incoerenza con terminologia**: Il wireframe usa "Routine ↻" come label nella sheet — questo è il nome corretto ma ancora diverso dal copy document che dice "Gimme ricorrente".

---

### 03 — Regola Trigger da [+]
"Versamento automatico basato su eventi sportivi — una squadra segna, tu versi."

**Stato**: ESPLORATIVO. Fabio aveva detto che le API degli eventi sportivi sono in valutazione (call 8 aprile). Nessuna conferma di fattibilità tecnica.

**Problema UX**: Il flusso mostra: sport → competizione → squadra → importo per evento. Questo è molto specifico. Cosa succede se la squadra non segna per 3 mesi? E se la stagione finisce?

**Rischio**: Questo è il flow meno maturo tra quelli wireframati. Non ha validazione tecnica.

---

### 04 — Regola Sfida da [+]
"Logica always-on: il sistema assume che rispetti ogni giorno — dichiara solo le infrazioni, entro fine mese. Addebito mensile."

**Questa è la scelta UX più originale del wireframe.** Invertire il default (rispetti per default, dichiari solo le infrazioni) riduce l'attrito quotidiano rispetto a "spunta ogni giorno che hai rispettato".

**Problemi UX**:
- L'utente capisce la logica inversa? "Dichiari solo le infrazioni" va contro l'intuizione di app abitudinarie come Duolingo.
- Il conto a fine mese: se dichiaro 5 infrazioni su 30 giorni, pago 25×€5 = €125. L'addebito a fine mese può essere una sorpresa.
- Come funziona "G: flusso dichiarazione infrazioni" — è una schermata separata non wireframata?

**Incoerenza con call**: La call del 29 aprile approva la "messa in pausa routine", ma la Sfida ha una logica diversa. La pausa di una Sfida non è wireframata.

**Componenti necessari**: Calendario streak (grid 7 col), Habit card (con "Ho sgarrato →"), Modal dichiarazione infrazione.

---

### 06 — Versa e Preleva da [+]

**Nota**: il numero 05 è MANCANTE — dovrebbe essere Switch (discusso call 11 maggio, mai wireframato).

**Obiettivo UX**: Versamento libero one-shot e prelievo. Il Versa ha numpad + chip rapidi (+€5/+€10/+€20) + selezione obiettivo. Il Preleva è separato.

**Logica del flusso Versa**: Numpad → seleziona obiettivo → conferma → feedback.

**Problemi UX**:
- Il Versa da [+] e il "Versa rapido ↑" dalla card HP/dettaglio sono due entry point allo stesso flusso o due flussi diversi?
- Il Preleva: è un flusso separato nella sheet o una schermata completamente diversa? "Semplificazione prelievo: un unico flusso" approvato il 27 aprile — ma non è wireframato come sub-sezione separata.
- La "Conferma con step" per Versa rapido (discussa call 11 maggio) — c'è un passo di conferma o è immediato?

**Componente mancante**: Numpad custom. Nel CSS esiste (.numpad, .numpad-key) ma non è un componente DS.

---

## SEZIONE: TAB PAGES

### 01 — Pagina Obiettivi
"Chips filtro Attivi / Completati · zero state · lista con placeholder · salvadanaio multi-fondo."

**Obiettivo UX**: Vista completa di tutti gli obiettivi dell'utente. Filtro per stato. Gestisce zero state (nessun obiettivo) e stato con salvadanaio.

**Problemi UX**:
- La lista Obiettivi è una duplicazione dell'HP (che mostra già le card obiettivo)? Andres aveva sollevato questo il 13 maggio: "se gli obiettivi sono già in HP, la tab serve?"
- Il salvadanaio "multi-fondo" in questa tab — come appare? Una card con N sotto-card? O una card per ogni fondo?
- Il zero state: cosa vede l'utente nuovo che non ha ancora nessun obiettivo?

**Relazione con navigazione**: Questa tab è quella che Andres mette in dubbio. Se rimossa, dove va tutta questa UX?

**Dipendenza da decisione aperta**: Il salvadanaio multi-fondo (item #11 degli unresolved — Andres: card separate; Alessandro: card unica con sub-slot) impatta direttamente questa schermata.

---

### 02 — Movimenti
"Registro completo dei movimenti. Filtri per tipo. Raggruppato per settimana."

**Obiettivo UX**: Tab dichiarativa, storico completo. Equivalente del "conto corrente" per l'utente.

**Problemi UX**:
- Alessandro ha introdotto (call 11 maggio) 3 tipi di operazione con stati diversi: versamento non investito, in elaborazione, storico. Il wireframe mostra solo storico raggruppato per settimana — manca il "pending" con gestione visiva dedicata.
- I filtri "per tipo": quali tipi? Versamento / Prelievo / Routine / Sfida / Effetto mercato / Trigger? Non definiti.
- La palette colori per i movimenti in attesa non è decisa (item #10): Filippo propone grigio/nero (come bank app), l'esistente ha viola/blu.

**Incoerenza con prototipo React**: Il prototipo React ha "BonificoConfermaScreen" e "PagamentoSuccessoScreen" — questi stati intermedi (bonifico in attesa) non sono rappresentati nel wireframe Movimenti.

**Componenti necessari**: Movement row (con tipo, tag, data, importo, stato), Chip filtro tipo, Section header settimana.

---

### 03 — Profilo
"Tab Profilo: account, KYC, metodi di pagamento, notifiche."

**Obiettivo UX**: Gestione account. Il meno critico dal punto di vista del paradigma goal-based.

**Decisioni dalla call 11 maggio**:
- Chatbot top-right (sostituisce la campanella)
- Notifiche dentro Profilo (non icona campanella separata)
- Confermato in wireframe? Non verificato nella lettura.

**Problemi UX**:
- Il chatbot come icon "?" in top-right di ogni schermata è già nel CSS (`.phone::after { content: '?'; }`) — ma il flusso chatbot non è wireframato.
- Le notifiche sono un componente autonomo dentro la tab Profilo o un overlay?

**Punti non risolti**: Nessun wireframe per il flusso chatbot, nessuna spec per il contenuto delle notifiche.

---

## PATTERN TRASVERSALI

### Problema 1 — Gap numerazione [+] flows
Il [+] ha: 01 Crea Obiettivo, 02 Routine, 03 Trigger, 04 Sfida, **06 Versa/Preleva**.
Manca il 05 = **Switch**. Non wireframato. È una feature approvata (call 11 maggio) ma non progettata.

### Problema 2 — Nav: "Movimenti" come placeholder
Nel CSS il 4° tab è `.nav-item placeholder` — annotato come placeholder nel codice. Suggerisce incertezza sul nome/posizionamento.

### Problema 3 — "Regola" nel CSS, "Routine" nel copy del wireframe
Il CSS usa class names con "regola" (.routine-row, .routine-badge) — ma il testo mostrato nel wireframe dice "Routine". Il codice ha la vecchia terminologia, il copy ha quella nuova. Rende difficile la search/replace per Flutter.

### Problema 4 — Fondi non-AcomeA come placeholder
Il wireframe usa Fidelity, Vanguard, Eurizon come fondi di esempio. Gimme5 ha solo 4 fondi AcomeA. Alessandro potrebbe implementare aspettandosi un catalogo più grande.

### Problema 5 — Copy document non allineato
Gimme5_HomePage.docx usa "Gimme ricorrente", "il tuo Gimme", "Regola" — linguaggio pre-aprile. Il documento di copy non è stato aggiornato dopo le decisioni del 23 aprile e 6 maggio (approvazione "Routine").

---

## COMPONENTI DS NECESSARI (lista completa dal wireframe)

| Componente | Sezioni che lo usano | Priorità |
|---|---|---|
| NavBar 5 tab | Tutte | P0 |
| Card Obiettivo (+ varianti: dashed, negativa, condivisa, completata) | 01-05, Obiettivi tab | P0 |
| Button (primary/ghost/danger) | Tutte | P0 |
| Progress Bar (con segmento mercato) | 01-05 | P0 |
| Bottom Sheet / Action Sheet | 05b, tutti [+] flows | P0 |
| Greeting text block | HP entry | P0 |
| Value block (€ grande + sub) | HP, Portafoglio | P0 |
| Routine row (con badge stato) | 05, [+]02 | P1 |
| Sfida card (con streak + "Ho sgarrato") | 05b2, [+]04 | P1 |
| Movement row | 05, Movimenti tab | P1 |
| Edu card (XL/L/M/S) | HP, varie sezioni | P1 |
| Quick chip (+€5/+€10) | 05b, Versa | P1 |
| Numpad | [+]06 Versa | P1 |
| Fund card (con stats) | 05C, Portafoglio | P1 |
| Chip filtro (stati, mesi, tipi) | Obiettivi tab, Movimenti, Portafoglio | P1 |
| Popup / Modal rassicurante | 02 Negativo | P1 |
| Grafico (linea/area) | Portafoglio | P2 |
| Streak calendar | [+]04 Sfida | P2 |
| Stacked bar fondi | 05F, Portafoglio | P2 |
| Badge stati (Attenzione/Scaduto/Negativo) | 03, 02 | P2 |

---

## RISCHI HANDOFF FLUTTER — SINTESI

| Sezione | Rischio | Perché |
|---|---|---|
| Nav bar | ALTO | 4 tab nel prototipo vs 5 nel wireframe |
| Dettaglio Obiettivo | ALTO | 6 sub-stati, card Sfida non implementata |
| Portafoglio (grafico) | ALTO | Componente grafico non nel DS, API complessa |
| Switch [05 mancante] | ALTO | Non wireframato, non può essere implementato |
| Salvadanaio post-delete | ALTO | Semantica non risolta tra Filippo/Alessandro |
| Terminologia codice | MEDIO | "regola" nel codice JSX, "Routine" nel wireframe |
| Fondi placeholder | MEDIO | Nomi fondi non-AcomeA nel wireframe |
| Sfida — logica inversa | MEDIO | Complessità backend (calcolo mensile, infrazione tracking) |
| Copy doc obsoleto | MEDIO | Se usato così com'è, porta linguaggio sbagliato |
