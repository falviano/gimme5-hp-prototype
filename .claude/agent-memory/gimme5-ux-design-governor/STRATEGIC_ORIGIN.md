# STRATEGIC ORIGIN — Gimme5 × Play New
Fonte: "Gimme5 — Analisi Unificata per Workshop", 17 Febbraio 2026
Questo documento è CONTESTO STORICO, non decisione finale di prodotto.

---

## 1. SINTESI DEL DOCUMENTO

Workshop preparatorio della collaborazione Gimme5 × Play New (Cosmico/Playnew).
Data: 17 febbraio 2026 — circa 6 settimane prima della prima call documentata (2 aprile).

Il documento incrocia 4 fonti:
- Proposta Play New (20260211-PN-Gimme5-v02)
- Brainstorming sviluppo Gimme5 (PDF)
- Brainstorming interno Gimme5 (doc)
- Matrice fattibilità Gimme5 (valore vs difficoltà, scala 1-5)

**60 idee totali**: 37 da Gimme5 (G5), 23 da Play New (PN), 7 sovrapposte.
La divisione fondamentale è: Gimme5 porta idee UX/product. Play New porta AI, data, strategia di riattivazione.

---

## 2. IDEE AD ALTO IMPATTO (dal quadrante "bassa difficoltà, alto valore")

Le idee che il documento indicava come priorità immediata:

| Idea | Fonte | Valore | Note |
|---|---|---|---|
| Card nudge prima regola in home | PN | 4.0 | Per 92% utenti senza regola |
| Ottimizzazione flusso onboarding | G5+PN | 4.4 | +338% conversione |
| Predizione churn (7-14gg anticipo) | PN | 4.5 | Intervento automatico |
| Riattivazione bacino dormiente (89k) | PN | 4.5 | 53k dormienti + 36k mai attivati |
| Tutorial post-onboarding | G5 | 4.0 | Primo accesso guidato |
| Fondo e Obiettivo: creazione congiunta | G5 | 3.25 | Ogni investimento ha un perché |
| Progress bar goal con proiezione temporale | PN | 3.5 | "Raggiungi il goal a luglio" |
| Generazione contenuti push/email dinamici | PN | 4.0 | Personalizzazione comportamentale |
| A/B testing continuo | PN | 4.0 | Da 4 settimane a 3 giorni per ciclo |

---

## 3. IDEE CONFERMATE NELLE CALL SUCCESSIVE

Queste idee del workshop sono diventate decisioni nelle call (apr-mag 2026):

| Idea originale (Feb 2026) | Come è diventata decisione | Call |
|---|---|---|
| Fondo e Obiettivo: creazione sempre congiunta | Paradigma goal-based: obiettivo > fondo come unità atomica | Apr 27 |
| Progress bar goal con proiezione temporale | Progress bar + "Con €X/mese arrivi al 100% a [data]" nel wireframe | Apr 15 |
| Modal celebrazione milestone | Schermata celebrazione full-screen per obiettivo completato (Sezione 04) | Wireframe |
| Card nudge prima regola in home | Card bianca/salvadanaio come CTA per convertire in obiettivo | Apr 29 |
| Crea obiettivo + regola durante onboarding | Approvato concettualmente (Apr 29) ma MAI implementato nel prototipo | Apr 29 |
| Comunicazioni personali | Welcome message dinamico, pillole educative contestuali | May 6 |
| Streak gentili | Diventata "Sfida" con logica always-on invertita | Wireframe |
| Regole semi-automatiche | Diventata "Sfida" comportamentale (palestra, corsa, etc.) | Wireframe |
| Aggiungi un altro obiettivo (post-azione) | "Crea il prossimo obiettivo" CTA dopo completamento | Wireframe |
| Ottimizzazione flusso onboarding | Il prototipo React è l'implementazione di questa idea | Apr-May |

---

## 4. IDEE PROBABILMENTE SUPERATE

| Idea | Perché superata |
|---|---|
| "Rimozione step conferma Joink a fine mese" | Joink è deprecato. L'intera meccanica è stata ripensata come Routine mensile |
| "Attivare Gimme5 con solo fondo risparmio come default" | Superata dal paradigma goal-based: si attiva con obiettivo+fondo, non fondo solo |
| "Member Get Member" / "Member Get Better" | La ricerca accademica (Gargano) mostra che il 90% dei MGM non genera revenue sufficiente. Ancora open come redesign ma bassa priorità |
| "Grafico percentuale regole" | In matrice Gimme5 con valore basso (2.5). Non è apparso in nessuna call |
| "Gimme5 Ranking" | In matrice con valore basso (2.3). Non è apparso in nessuna call |
| Streak gentili come meccanica Duolingo | Trasformata in Sfida con logica più originale (always-on invertita) |

---

## 5. IDEE FUORI PERIMETRO ATTUALE

Queste idee non sono mai entrate nel perimetro delle 12 call documentate:

**AI Engine (interamente fuori scope):**
- Predizione churn
- Suggerimento importo ottimale
- Timing personalizzato notifiche
- Generazione contenuti push/email dinamici
- A/B testing continuo (30-50 varianti)
- Segmentazione dinamica (45k micro-segmenti)
- Probabilità di raggiungimento goal
- Report settimanale automatico
- Contenuti educativi contestuali AI
→ L'AI Engine è il differenziale principale della proposta Play New. Non è ancora entrato nel lavoro di design. È un layer strategico futuro.

**Strategia/Infrastruttura:**
- Riattivazione bacino dormiente (53k + 36k utenti)
- Migrazione Mailup → Brevo
- Setup analytics (Mixpanel + BigQuery)
→ Nessuna di queste è apparsa nelle call. Possibile che siano su un binario separato.

**Prodotti nuovi:**
- Gimme5 for Kids
- Open banking (collegamento conto)
- Obiettivi crowdfunding community

---

## 6. CONNESSIONI CON CALL SUCCESSIVE

### Perché il progetto si è mosso verso goal-based UX
Il documento originale aveva già "Fondo e Obiettivo: creazione sempre congiunta" come quick win G5 (#7). La ricerca accademica (Gargano) confermava che il monitoring dell'obiettivo è il meccanismo causale del risparmio. Le call di aprile hanno trasformato questo da "quick win" a paradigma fondamentale dell'intera architettura.

### Perché onboarding è diventato centrale
Nel documento era già "ottimizzazione flusso onboarding" con valore 4.4 — il più alto dopo predizione churn e riattivazione. Il CF come primo punto di abbandono (Marco, call 2 aprile) ha reso l'ottimizzazione onboarding la prima epic concreta. Il prototipo React è la risposta operativa a questa priorità.

### Perché automazioni (Routine) sono centrali
La ricerca Draft_0_Recurring (Gargano, apr 2025) ha dimostrato causalmente che le routine aumentano il risparmio di 88 EUR/mese. Questo ha giustificato la scelta di mettere le Routine al centro dell'architettura — non solo come feature, ma come meccanismo principale di creazione valore.

### Cosa è rimasto solo nelle idee senza implementazione
- Tutorial post-onboarding: approvato nella matrice ma mai wireframato
- "Spiegare perché chiediamo le informazioni" nell'onboarding: mai implementato nel prototipo
- Questionario profilo utente: discusso come "profilazione" nel prototipo, ma non è il questionario strategico del documento
- Sezione trasparenza costi: mai discussa nelle call

---

## 7. IMPATTO SU UX, ONBOARDING E DS

**Impatto su UX:**
- Il documento spiega *perché* il wireframe esperto è così complesso: stava cercando di implementare almeno 15 delle 60 idee simultaneamente (obiettivi, routine, sfida, trigger, community, progress bar, celebrazione, etc.)
- La Sfida (sezione [+]04) è la versione UX delle "regole semi-automatiche" e delle "streak gentili" unite
- La CTA "Versa rapido" è la versione operativa delle "CTA rapide per nuovo obiettivo"

**Impatto su onboarding:**
- L'onboarding React ha implementato l'"ottimizzazione flusso" ma NON ha implementato "Crea obiettivo + regola durante onboarding" — la feature con valore 3.9 nella matrice originale. Questo spiega perché ogni utente onboardato attualmente finisce in stato "Fondo ✓ Routine ✓ Obiettivo ✘".

**Impatto sul DS:**
- Il documento non menziona il DS. Il DS era un prerequisito implicito, non una deliverable esplicitamente pianificata nel workshop. Questo spiega perché il DS è così indietro rispetto al prototipo.

---

## 8. PUNTI DA NON DIMENTICARE NELLE PROSSIME DECISIONI

1. **Il 92% degli utenti attivi non ha mai attivato una regola** (dato usato nel documento per giustificare il card nudge). Se questo dato è ancora valido, la CTA per creare la prima Routine è la funzione più importante dell'intera HP.

2. **89.000 utenti dormienti** non sono mai stati discussi in nessuna call. Nessun flusso di riattivazione è stato wireframato. Questo è un potenziale enorme che il progetto attuale non tocca.

3. **L'AI Engine è interamente Play New** — non è mai entrato nel perimetro del design/prototipo. Se il contratto prevede questo layer, è completamente non iniziato.

4. **"Crea obiettivo + regola durante onboarding"** era valutata 3.9/5.0 nel documento originale ed è ancora la feature mancante più critica: il prototipo non la include, e ogni utente onboardato arriva in HP senza obiettivo.

5. **Streak e Ranking** avevano valutazione bassa nella matrice Gimme5 (2.3-2.6) ma erano presentate con entusiasmo nel brainstorming PDF. Il documento segnalava questo disallineamento come punto di discussione al workshop. Il fatto che non siano mai state discusse nelle 12 call suggerisce che il team Gimme5 abbia implicitamente confermato la bassa priorità.

6. **Tutorial post-onboarding** ha valore 4.0 nella matrice ed era in scadenza "Quick Win". Non è mai apparso nelle call e non è wireframato. Probabilmente outscoped nel focus sul onboarding.

7. **"Spiegare perché chiediamo le informazioni"** nell'onboarding (KYC friction): valore 2.35 ma difficoltà solo 1.3 — il miglior rapporto valore/effort non sfruttato nel prototipo attuale. Una riga di copy per ogni dato richiesto ridurrebbe l'abbandono al CF.

---

## MAPPA IDEA → STATO ATTUALE

| Idea Workshop (Feb 2026) | Stato attuale |
|---|---|
| Goal-based paradigm | IMPLEMENTATO (wireframe + paradigma) |
| Progress bar con proiezione | IMPLEMENTATO (wireframe) |
| Celebrazione milestone | IMPLEMENTATO (wireframe) |
| Routine/Regole come meccanismo centrale | IMPLEMENTATO (wireframe + prototipo) |
| Sfida comportamentale | WIREFRAMATO, non nel prototipo |
| Trigger sportivi | WIREFRAMATO (esplorativo, no validazione tecnica) |
| Obiettivo + routine in onboarding | APPROVATO ma NON IMPLEMENTATO |
| Tutorial post-onboarding | NON IMPLEMENTATO |
| Card nudge → obiettivo | WIREFRAMATO (card bianca/salvadanaio) |
| Community come pillar | RIMANDATA (nessun wireframe) |
| MGM/MGB redesign | APERTO, bassa priorità |
| AI Engine (10 feature) | FUORI SCOPE, non discusso |
| Riattivazione 89k utenti | FUORI SCOPE, non discusso |
| Open banking | FUORI SCOPE |
| Gimme5 for Kids | FUORI SCOPE |
