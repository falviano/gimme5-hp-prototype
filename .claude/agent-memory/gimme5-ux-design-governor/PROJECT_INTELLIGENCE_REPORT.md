# PROJECT INTELLIGENCE REPORT — GIMME5
Data: 2026-05-14
Autore: GIMME5 UX Design Governor
Status: documento vivo — aggiornare ad ogni cambio strategico significativo

---

## 1. COSA È DAVVERO GIMME5 OGGI

### Il paradigma UX reale

Gimme5 non è un'app di investimento. È un dispositivo di cambiamento comportamentale regolato come prodotto finanziario.

La ricerca accademica interna (Gargano & Rossi, su dati Gimme5 reali) ha dimostrato che il meccanismo causale che aumenta il risparmio non è la performance del fondo, non è la categoria dell'obiettivo, non è la gamification. È il **monitoring**: la capacità di vedere il proprio progresso verso un target. Il goal-setting aumenta i depositi netti del 91%. Le routine automatizzate azzerano il "return gap" (1.5% annuo perso da chi investe manualmente per timing sbagliato).

Questo significa che il prodotto ha un'unica responsabilità reale: fare in modo che l'utente crei un obiettivo, attivi una routine, e apra l'app abbastanza spesso da vedere il progresso. Tutto il resto — scelta del fondo, categorie colorate, sfide, community — è sovrastruttura che serve la retention, non il comportamento core.

### Il comportamento che il prodotto vuole cambiare

Il nemico è il **present bias**: le persone sovrastimano i bisogni presenti e sottostimano quelli futuri. Risparmiano meno di quanto vorrebbero perché il consumo oggi è più saliente del goal di domani.

Il prodotto lo aggira in tre modi:
1. **Goal-setting**: rende il futuro concreto (nome, cifra, data)
2. **Automazione**: rimuove la decisione ripetuta (la routine non richiede impegno ogni mese)
3. **Monitoring**: rende visibile il progresso (progress bar, %, "Con €X/mese arrivi a luglio")

Il 41% degli utenti attivi usa le routine. Tra questi, il 73% automatizza i depositi. Questi utenti hanno comportamento fondamentalmente diverso dagli altri: non market-timing, non oscillazioni emotive, risparmio stabile.

### Il ruolo di ogni area del prodotto

**Onboarding**: L'unico momento in cui il prodotto può fare il lavoro più difficile: far creare un obiettivo e attivare una routine prima che l'utente esca. Se l'utente completa l'onboarding senza un obiettivo, il 92% degli utenti non lo creerà mai spontaneamente (dato dal documento workshop). Il prototipo React attuale fallisce su questo punto.

**Home**: Non è una dashboard finanziaria. È uno specchio del progresso verso gli obiettivi. Il suo lavoro è rispondere a "come sto andando?" in meno di 3 secondi, e al tempo stesso rimuovere l'attrito per le azioni più frequenti (versa, modifica routine).

**Obiettivi**: Il cuore dell'architettura. Non sono "contenitori di fondi". Sono impegni psicologici con una cifra e una data. La progress bar è più importante del nome del fondo.

**Routine**: Il meccanismo che fa funzionare tutto. Senza routine, il prodotto è un conto deposito con UX bella. Con la routine, diventa un abito finanziario. La freccia causale dai paper: routine → risparmio medio +88 EUR/mese rispetto a chi non ha routine.

**Community**: Un pillar dichiarato (Giuseppe) ma non definito. L'unica implementazione esistente è l'obiettivo condiviso (sezione 01b del wireframe) e il "👥 Coinvolgi qualcuno" nel dettaglio obiettivo. Non è una tab, non è un feed, non è una leaderboard. È dispersa. Finché non viene data una forma concreta, rimane una promessa.

**Sfida**: La feature più originale del progetto. La logica always-on invertita (dichiara solo le infrazioni) è più intelligente di qualsiasi habit tracker esistente perché azzera l'attrito quotidiano e riduce il rischio di abbandono per missed check-in. Ma ha un rischio: l'addebito mensile a sorpresa.

### Le tensioni strutturali del prodotto

**Semplicità vs finanza**: Gimme5 vuole essere Duolingo, ma è regolata da Consob e Banca d'Italia. Ogni fondo ha un KIID, ogni contratto deve essere firmato, ogni rendimento mostrato ha un disclaimer. La tensione non è risolvibile — va gestita con copy chirurgico e UX che minimizza il momento regolatorio senza nasconderlo.

**Engagement vs regolamentazione**: La Sfida è il caso limite più interessante. È un meccanismo di gamification (streak, penalità) applicato a comportamenti non finanziari (palestra, non fumare). Questo è deliberato: spostate la gamification sul comportamento, non sul denaro, e la regolamentazione si allenta. Ma l'addebito mensile del "non ho rispettato la sfida" è comunque denaro — e deve essere comunicato con precisione.

**Goal utente vs obiettivo aziendale**: Il 45% degli utenti usa "Risparmio generico" come categoria. Gli obiettivi specifici hanno un tasso di completamento 10 punti più basso. Gimme5 sta costruendo un sistema di colori per categoria (viaggio, casa, etc.) — ma i dati interni dicono che la categoria non importa per l'outcome. Importa il monitoring. L'investimento nel sistema cromatico degli obiettivi è un investimento nella experience, non nella efficacia comportamentale.

---

## 2. LE 5 DECISIONI ARCHITETTURALI PIÙ IMPORTANTI

### Decisione 1 — La navigazione non è congelata

**Perché è critica**: La nav a 5 tab non è solo una questione di UX. È la mappa dell'intera architettura informativa. Ogni wireframe, ogni componente, ogni flusso [+] dipende dal fatto che esistano 5 tab specifiche. Se Andres rimuove la tab Obiettivi (come proposto il 13 maggio), tutta la tab page degli obiettivi (sezione del wireframe), il modello mentale dell'utente ("dove trovo i miei obiettivi?"), e la CTA "vai agli obiettivi" dalla HP perdono una destinazione.

**Cosa impatta**: Ogni schermata del wireframe esperto. Il sistema di back-stack Flutter. La tab bar component nel DS. Il comportamento del [+] hub (se non c'è tab Obiettivi, da dove crea un nuovo obiettivo?).

**Cosa rischia di rompere**: Se Alessandro inizia a implementare HomeScreen prima del freeze nav, costruisce con la nav sbagliata. Ogni schermata Flutter con la bottom nav diventa tech debt immediato.

**Cosa dipende da essa**: Letteralmente tutto. Non si può costruire un componente NavBar senza sapere quante tab ha e con che label.

**Soluzione**: Una call di 30 minuti con Giuseppe + Andres + Alessandro. Due opzioni su carta. Decisione e firma. Fine.

---

### Decisione 2 — L'onboarding crea o non crea un obiettivo

**Perché è critica**: Il 92% degli utenti attivi non ha mai attivato una routine spontaneamente dopo l'onboarding (dato workshop). Se l'onboarding non porta l'utente a creare un obiettivo + attivare una routine, il prodotto sta garantendo che la maggioranza degli utenti resterà nel limbo "Fondo ✓ Routine ✓ Obiettivo ✘" — esattamente lo stato che ha la minore probabilità di retention.

**Cosa impatta**: La HomeScreen di primo accesso (che è la schermata che l'utente vedrà più di tutte nelle prime 2 settimane). L'efficacia comportamentale del prodotto. Il tasso di attivazione routine.

**Cosa rischia di rompere**: Se Flutter viene costruito senza la creazione di obiettivo nell'onboarding, il flusso "Crea obiettivo da [+]" diventa la seconda priorità per ogni utente appena registrato. Questo è un design dell'attrito, non della frizione positiva.

**Cosa dipende da essa**: Il prototipo React, il wireframe flusso [+]01, la HomeScreen primo accesso, il tutorial post-onboarding.

**Soluzione**: Aggiungere una schermata nell'onboarding React (dopo "Fondo attivato", prima di "Home") che fa: seleziona categoria → nome → target → data → "Il tuo primo obiettivo è pronto." Una schermata. Il cambio più alto ROI possibile nel progetto.

---

### Decisione 3 — Cosa è il Salvadanaio

**Perché è critica**: Il Salvadanaio appare in tre contesti critici: (1) post-onboarding se l'utente non crea obiettivo, (2) quando si elimina un obiettivo, (3) nella tab Obiettivi per i fondi senza obiettivo. Ognuno di questi contesti ha una semantica diversa nella testa di Filippo vs Alessandro vs Giuseppe. Senza una definizione concordata, ogni sviluppatore e designer implementerà una versione diversa.

**Le tre interpretazioni in conflitto**:
- Filippo: card che mostra il fondo già attivato e propone di creare un obiettivo sopra di esso
- Alessandro: card che, se tappata, crea un NUOVO obiettivo (nuovo fondo, nuovo contratto)
- Implicita nel wireframe: contenitore permanente per "fondi orfani" da qualsiasi eliminazione

Questi tre comportamenti hanno implicazioni tecniche, legali (ogni nuovo contratto è un nuovo prodotto regolamentato) e UX completamente diverse.

**Cosa rischia di rompere**: L'intero flusso post-onboarding. La HomeScreen di primo accesso. Il flusso "Elimina Obiettivo". La tab Obiettivi.

**Soluzione**: Una call di 20 minuti con Giuseppe + Alessandro. Una frase di 2 righe che descrive il comportamento esatto del Salvadanaio. Scritta nel call-log e mai più messa in discussione.

---

### Decisione 4 — Il DS produce componenti o solo token

**Perché è critica**: Questa non sembra una decisione architetturale, ma lo è. Un token set senza componenti non è un Design System nel senso operativo. È un vocabolario senza grammatica. Ogni schermata Flutter che Alessandro costruisce senza componenti DS è una schermata che non rispetta le regole implicite di spacing, radius, e comportamento dei componenti — anche se usa i colori giusti.

**Cosa impatta**: La consistenza visiva dell'app. La velocità di sviluppo Flutter (senza componenti, ogni schermata richiede decisioni di layout da zero). La capacità di iterare rapidamente (senza componenti, un cambiamento al Button primario richiede intervento in ogni schermata).

**Cosa rischia di rompere**: Il lancio con un'app visivamente inconsistente dove ogni schermata "guarda giusta" ma non è la stessa app. Questo è il modo in cui i prodotti fintech perdono credibilità percepita: quando un utente vede che il pulsante su una schermata ha il radius diverso da un'altra.

**Cosa dipende da essa**: Il handoff Flutter. La capacità di Filippo di fare revisioni visive rapide. La scalabilità del design quando si aggiungono nuove schermate.

**Soluzione**: Dedicare uno sprint intero (2 settimane) a costruire 5 componenti nel DS Figma prima di toccare nuove schermate. Non è un lusso. È il prerequisito per tutto il lavoro successivo.

---

### Decisione 5 — Il prototipo React è lo spec o è un mock

**Perché è critica**: Il prototipo React è visivamente credibile, tecnicamente completo, e Alessandro lo ha approvato call dopo call. Ma architetturalmente riflette il vecchio paradigma: nav a 4 tab, nessun obiettivo, terminologia "regola". Se Alessandro lo usa come spec definitiva per Flutter (il routes.js è documentato come "reference for Flutter route mapping"), Flutter eredita questi problemi.

**Le due opzioni**:
A) Il React è spec → Flutter implementa nav sbagliata, nessun obiettivo, terminologia sbagliata
B) Il React è mock visivo → serve un documento di spec separato che definisce il comportamento esatto

Nessuno ha mai detto esplicitamente quale delle due vale.

**Cosa impatta**: L'intero sviluppo Flutter. Ogni decisione che Alessandro prende quando il wireframe e il React contraddicono.

**Cosa rischia di rompere**: Il lancio con un'app che non riflette le decisioni prese in 12 call.

**Soluzione**: Allineare il React alle decisioni approvate (nav 5 tab, terminologia routine, aggiungere obiettivo nell'onboarding) prima che Alessandro inizi la HomeScreen Flutter. Non è un refactor enorme. È un allineamento.

---

## 3. DOVE IL PROGETTO È FORTE

**Evidenza scientifica interna (unico nel settore)**
Tre paper accademici (Gargano & Rossi) usano esplicitamente i dati di Gimme5. Quasi nessun prodotto consumer ha la fortuna di avere validazione causale delle proprie scelte di design. Il paradigma goal-based non è un'intuizione: è dimostrato con controfattuali e diff-in-diff su centinaia di migliaia di transazioni. Quando un cliente chiede "perché goal-based?", la risposta è "perché i nostri dati interni dimostrano +91% di depositi netti".

**Il wireframe esperto**
È il documento di specifica UX più maturo che esiste nel progetto. 19 sezioni, 6 sub-stati per il dettaglio obiettivo, 4 flow dal [+], 3 tab page. Copre scenari positivi, negativi, scaduti, condivisi. Ha annotazioni inline, logica di navigazione esplicita, componenti identificabili. È già un documento da cui un designer senior potrebbe costruire UI direttamente.

**La Sfida**
La logica always-on invertita (dichiara solo le infrazioni) è genuinamente originale nel panorama delle app habit. Non è una copia di Duolingo. Ha una meccanica comportamentale coerente (non punisce il fallimento, registra solo l'eccezione) e un modello di addebito mensile che riduce l'attrito quotidiano. È la feature che differenzia Gimme5 da qualsiasi altro prodotto di risparmio europeo.

**La terminologia**
Routine, Sfida, Trigger, Versa rapido, Switch — ogni termine è stato deliberato, discusso, e approvato da stakeholder multipli. Non sono termini finanziari travestiti da consumer. Sono termini che descrivono comportamenti, non prodotti. Questo è raro e prezioso.

**Il team principale**
Filippo (UX/UI) + Sarah (PM) + Alessandro (FE ibrido) hanno una frequenza di comunicazione settimanale e un rispetto reciproco evidente nelle call. Filippo pone domande prima di disegnare. Alessandro segnala problemi tecnici prima che diventino blocchi. Questa dinamica è la risorsa più sottovalutata del progetto.

**Foundation DS**
I token sono tutti verificati via API con node URL diretti. Colori primari, neutral, feedback, tipografia, spacing, radius, stroke, grid — tutto confermato e annotato con anomalie. È una base rara: la maggior parte dei DS che si vedono in produzione hanno i token sbagliati o non documentati.

---

## 4. DOVE IL PROGETTO SOFFRE

**Il prototipo React è il documento più pericoloso del progetto**
È visivamente credibile (50+ schermate, interazioni complete, design coerente). Proprio per questo è pericoloso: sembra done. Ma ha la nav sbagliata (4 tab vs 5), nessun obiettivo nell'onboarding, "regola" ovunque nel codice. Alessandro lavora da questo. Ogni giorno che passa senza allinearlo è un giorno di debito Flutter.

**Il DS non è un DS**
È un foundation kit. Due componenti su ~20 necessari non è un sistema — è un archivio di token con 2 exception. Senza componenti, il passaggio wireframe→UI→Flutter è una sequenza di reinvenzioni. Ogni designer e developer fa scelte diverse su padding, border radius, stati hover/pressed, behavior. Il prodotto finale sarà visivamente inconsistente non per negligenza, ma per assenza di grammatica condivisa.

**La community non ha forma**
Giuseppe la chiama "pillar fondamentale" in ogni call. Non c'è un singolo wireframe. Non è una tab. "Spalmata nelle sezioni" significa che nessuno sa dove sta. Quando un utente cericherà un qualsiasi elemento comunitario, non lo troverà perché non è stato progettato. Questo non è un problema futuro: è una promessa non mantenuta che diventerà visibile al lancio.

**Il copy document è obsoleto e potenzialmente pericoloso**
Gimme5_HomePage.docx usa "Gimme ricorrente", "Regola", "il tuo Gimme". Se qualcuno usa questo documento per scrivere il copy dell'app (cosa normale in un progetto), il prodotto lancia con la terminologia sbagliata. Non è un dettaglio: la terminologia è stata discussa in 4 call su 12.

**Il Salvadanaio è semanticamente indefinito**
Appare in 5 contesti critici del wireframe. Ha 3 interpretazioni diverse tra i principali stakeholder. Ogni volta che viene disegnato o implementato, chi lo fa sceglie inconsciamente una delle 3 versioni. Il risultato sarà un componente che si comporta diversamente in diversi punti dell'app — il tipo di incoerenza che gli utenti sentono anche se non sanno nominarla.

**Il debito di governance non viene riconosciuto**
Non c'è un documento che definisce cosa è "done" per una schermata. Non c'è un processo per approvare nuovi componenti DS. Non c'è una regola su chi può modificare i token. Non c'è un owner formale del DS. Quando il progetto scala (più designer, più developer), queste assenze diventano conflitti attivi.

**Switch non è wireframato**
È una feature approvata (call 11 maggio), discussa come operazione fondamentale da Alessandro. Non c'è un singolo frame che la mostra. Se Alessandro la implementa da solo, basandosi sulla sua comprensione verbale della call, il risultato potrebbe non corrispondere a quello che Filippo avrebbe disegnato.

---

## 5. LE CONTRADDIZIONI PIÙ IMPORTANTI

### Contraddizione 1 — "Siamo goal-based" + "Il prototipo è fund-centric"

**Perché esiste**: Il prototipo è stato costruito progressivamente, call dopo call, partendo dal flusso tecnico-regolatorio (CF, KYC, AML, firma) che era la priorità operativa. Il paradigma goal-based è stato ratificato concettualmente nelle call di aprile, ma nessuno ha mai fermato il React per allinearlo. La velocità di sviluppo ha vinto sulla coerenza architetturale.

**Cosa l'ha generata**: La pressione di avere qualcosa da mostrare al cliente (il prototipo era la deliverable) vs il tempo necessario per ripensare l'architettura.

**Cosa rischia**: Flutter implementa un prodotto fund-centric con terminologia goal-based. L'utente crea una routine per un fondo, non per un obiettivo. L'intera ricerca accademica sulla efficacia del goal-setting diventa irrilevante perché il meccanismo non è nel prodotto.

**Va chiusa subito**: Sì. È la contraddizione più costosa.

---

### Contraddizione 2 — "Mensile è il default" + "Il mensile produce meno risparmio"

**Perché esiste**: La decisione del default mensile è stata presa nella call del 2 aprile, prima che il Draft_0_Recurring (Gargano, aprile 2025) venisse letto e analizzato. Se fosse stato letto prima, la discussione sarebbe stata diversa.

**Cosa l'ha generata**: Sequenza temporale: decisione prima, evidenza dopo.

**Cosa rischia**: Il prodotto incoraggia il comportamento meno efficace (mensile → meno risparmio aggregato) perché è "più comodo". Gli utenti che si fidano del default risparmiano di meno di quelli che cambiano a settimanale.

**Va chiusa subito?** Non urgente come la nav, ma prima del lancio va discussa con Giuseppe. La soluzione potrebbe essere: default mensile ma con nudge "sapevi che chi risparmia settimanalmente accumula il 12% in più?"

---

### Contraddizione 3 — "Community è un pillar" + "Community non ha né tab né wireframe"

**Perché esiste**: Giuseppe usa la parola community come visione strategica di lungo termine. Il team di design (giustamente) ha scelto di non wireframare qualcosa che non è definita. Il risultato è un gap: parola presente nelle call, assente nel prodotto.

**Cosa l'ha generata**: Differenza di timescale tra la visione di Giuseppe (prodotto maturo, 2-3 anni) e il lavoro corrente (MVP 2026).

**Cosa rischia**: Al lancio, qualcuno chiederà "dov'è la community?". La risposta "è spalmata nelle sezioni" non regge davanti a un utente reale. L'obiettivo condiviso e il "👥 Coinvolgi qualcuno" sono elementi community esistenti ma non comunicati come tali.

**Va chiusa subito?** Va definita almeno concettualmente: "community in v1 = obiettivo condiviso + social proof nelle pillole". Tutto il resto è v2.

---

### Contraddizione 4 — "Il DS è la base di tutto" + "Il DS non ha componenti"

**Perché esiste**: Il DS è stato costruito come fondazione (token, tipografia) che è il lavoro meno visibile ma più necessario. I componenti richiedono decisioni UX che non erano ancora stabili quando si costruiva la foundation. Ora le decisioni UX sono più stabili, ma il momento di costruire i componenti non è stato mai formalmente dichiarato.

**Cosa l'ha generata**: Corretta prioritizzazione della foundation, mancata pianificazione del passo successivo.

**Cosa rischia**: Il Flutter viene implementato senza componenti DS. Ogni widget Flutter è un'interpretazione personale. Il refactoring post-lancio per allineare al DS costerà 10 volte il tempo che costerebbe farlo adesso.

**Va chiusa subito**: Sì. 5 componenti DS (Button, Card Obiettivo, NavBar, Input, TopBar) bloccano tutto il passaggio UI. Priorità assoluta dopo il freeze nav.

---

### Contraddizione 5 — "Il prototipo React è il riferimento Flutter" + "Il prototipo React e il wireframe contraddicono su punti fondamentali"

**Perché esiste**: Il React è stato costruito come deliverable visiva per il cliente. Il wireframe esperto è stato costruito come specifica UX. Nessuno ha mai formalmente dichiarato quale dei due ha la precedenza quando contraddicono.

**Cosa l'ha generata**: Due documenti con ruoli diversi ma senza gerarchia formale.

**Cosa rischia**: Alessandro sceglie ogni volta uno dei due in base alla convenienza. Il Flutter risultante è una terza versione, diversa da entrambi.

**Va chiusa subito**: Sì. Dichiarare formalmente: il wireframe esperto è la spec di comportamento. Il React è la reference visiva. Quando contraddicono, il wireframe vince. Scriverlo nel README.

---

## 6. QUAL È IL VERO STATO DEL DESIGN SYSTEM

### È un DS reale?

No. Non ancora. È un **foundation kit professionale** con una struttura da DS maturo (Primitives → Semantic → Components) ma senza il corpo: i componenti.

Un Design System, nel senso operativo del termine, è uno strumento che permette a designer e developer di costruire nuove schermate senza dover reinventare le regole ogni volta. Gimme5 DS oggi non fa questo. Permette di usare i colori giusti e la tipografia giusta, ma ogni decisione su padding, gap, border, stati (hover/pressed/disabled), behavior, varianti — va reinventata da zero.

### È solo un foundation kit?

Sì. E un buon foundation kit: i token sono verificati, le anomalie sono documentate, la struttura semantica (Light/Dark) è pronta. È la parte più sottovalutata e più solida del lavoro fatto finora.

### Quanto è pronto per Flutter?

I token in quanto valori numerici sono implementabili in Flutter immediatamente (gimme5_colors.dart e gimme5_typography.dart già esistono nel progetto Flutter, con divergenze da correggere). Ma senza componenti Flutter corrispondenti ai componenti Figma DS (che non esistono), ogni developer Flutter deve prendere decisioni di layout da zero.

Pronti per Flutter: i valori dei token.
Non pronti per Flutter: qualsiasi cosa sopra i token.

### Quanto è pronto per scalare?

Non è pronto. Scalare significa che una terza persona (designer o developer) arriva nel progetto, apre Figma, trova i componenti di cui ha bisogno, e costruisce una nuova schermata in 2 ore invece di 2 giorni. Oggi quella persona troverebbe 2 componenti e un bellissimo archivio di token. Costruirebbe la schermata da zero, usando probabilmente colori hard-coded perché è più veloce.

### Cosa manca davvero?

Nell'ordine che sblocca il maggior numero di schermate:

1. **Button** (primario / secondario / ghost / danger) — usato in ogni singola schermata
2. **Card Obiettivo** (+ varianti: base, dashed/placeholder, negativa, condivisa, scaduta) — usato in HP, tab Obiettivi, dettaglio
3. **NavBar** a 5 tab — usato in ogni schermata app
4. **TopBar / AppBar** (con back, con settings, con azioni) — usato in ogni schermata di dettaglio
5. **Input** (testo, importo, ricerca) — usato in onboarding e in tutti i flow di creazione

Questi 5, nell'ordine elencato, sbloccano l'80% delle schermate del wireframe esperto.

---

## 7. SE IO DOVESSI GUIDARE IL TEAM DA DOMANI

### Piano 2 settimane

**Settimana 1 — Decisioni e allineamento**

Giorno 1-2: Organizzare call di 30 minuti (Giuseppe + Andres + Alessandro) con un solo obiettivo: congelare la nav. Portare due opzioni visive: A (con tab Obiettivi), B (senza). Decisione, firma, scritto nel call-log. Nessun'altra call sul tema.

Giorno 2-3: Call di 20 minuti (Giuseppe + Alessandro) con un solo obiettivo: definire il Salvadanaio in una frase. "Il Salvadanaio è [X]. Quando si elimina un obiettivo, il saldo [Y]." Nessun'altra call sul tema.

Giorno 3-4: Email ad Andres con la palette colori obiettivi (7 hex specifici). Richiesta di approvazione formale entro venerdì. Nessun lavoro di UI sugli obiettivi finché non arriva il sì.

Giorno 4-5: Aggiornare il prototipo React. Find-and-replace "regola" → "routine" in tutti i file JSX e nei route labels. Aggiornare la nav da 4 tab a 5 tab nella HomeScreen (anche solo un placeholder visivo). Committare e pushare.

**Settimana 2 — Primo componente DS + Prima schermata onboarding**

Giorni 6-8: Costruire Button component in Figma DS (4 varianti: primario, secondario, ghost, danger) × 3 stati (default, pressed, disabled). AutoLayout, documentation, naming convention.

Giorni 8-10: Aggiungere una schermata di creazione obiettivo nell'onboarding React — dopo "Attiva Fondo", prima di "Home". Flow minimo: griglia categorie (8 tile) → nome obiettivo (input) → target + data → "Obiettivo creato! Inizia a risparmiare." Non deve essere perfetta. Deve esistere.

---

### Piano 1 mese

Settimana 3-4: Costruire Card Obiettivo (tutte le varianti), NavBar 5 tab, TopBar nel DS Figma. Questi 3 componenti + Button = possibilità di costruire l'intera HP in Figma.

Settimana 3: Wireframare Switch ([+]05 mancante). Una schermata, 3 step: seleziona obiettivo sorgente → seleziona obiettivo destinazione → importo → conferma.

Settimana 4: Decisione formale su "Utile mostrato" (realizzato + in corso vs solo in corso). Portare le 3 opzioni di Fabio al prossimo weekly con una raccomandazione e una risposta da Alessandro su fattibilità tecnica.

Fine mese 1: Il React è allineato al wireframe su nav e terminologia. Il DS ha 4 componenti. Lo Switch è wireframato. I colori obiettivi sono approvati.

---

### Piano 3 mesi

Mese 2:
- DS completo P0 e P1: tutti i componenti nel wireframe esperto fino alla sezione 05
- Flutter HomeScreen allineata alla nav corretta, con card obiettivo reale
- Tutorial post-onboarding (quick win valore 4.0, mai implementato)
- Decisione formale community v1: "Community in v1 = obiettivo condiviso + social proof pillole"

Mese 3:
- Flutter completamente allineato al wireframe esperto per i flussi core (HP, dettaglio obiettivo, [+] routine, versa/preleva)
- DS con tutti i componenti P0/P1 + documentazione token anomalie risolte
- Copy document aggiornato con terminologia corretta
- Movimenti tab wireframe completato con gestione stati pending/processing/done
- Prima valutazione di Switch in Flutter

---

## 8. COSA NON DOBBIAMO ASSOLUTAMENTE FARE

**Non continuare ad aggiungere sezioni al wireframe prima di congelare la nav.**
Ogni nuova sezione scritta su una nav instabile è potenzialmente da riscrivere. Il wireframe è già maturo. Meglio risolvere le decisioni aperte che aggiungere nuovo territorio.

**Non passare alla Figma UI prima di avere Button e Card Obiettivo come componenti DS.**
Se si apre un file Figma per fare UI e si disegnano i componenti inline, quei componenti non sono il DS. Il primo frame che si fa in UI Figma deve usare componenti dalla libreria, non componenti locali. Altrimenti si crea debito visivo permanente.

**Non lasciare che Alessandro implementi HomeScreen Flutter da React.**
React ha la nav sbagliata. Se Alessandro costruisce HomeScreen Flutter guardando il React, costruisce una schermata sbagliata. La HomeScreen Flutter deve essere costruita guardando il wireframe esperto, sezione 01/05, con la nav a 5 tab approvata.

**Non usare il copy document Gimme5_HomePage.docx senza aggiornarlo.**
"Gimme ricorrente" e "Regola" nel copy di produzione è un errore di brand dopo 3 mesi di lavoro sulla terminologia. Prima che qualsiasi copy venga passato ad Alessandro o al cliente, va fatto un pass terminologico completo.

**Non wireframare Community prima di averla definita.**
Wireframare qualcosa di indefinito produce wireframe che si contraddicono tra loro e che nessuno approverà mai. Community va prima definita concettualmente ("cosa fa un utente nella community di Gimme5?") e poi wireframata.

**Non trattare il DS come work-in-progress permanente.**
"Ci pensiamo al DS dopo" ha già portato a 2 prototipi (React + Flutter) con colori hard-coded divergenti. Non c'è un "dopo" sicuro per il DS: ogni settimana senza componenti è una settimana di implementazione Flutter che diventa debito visivo.

**Non aggiungere feature al prototipo React senza prima allinearlo.**
Il React ha già 52 schermate con problemi architetturali. Aggiungere una 53a con gli stessi problemi amplia il debito senza ridurlo. Il prossimo commit significativo sul React deve essere di allineamento, non di espansione.

**Non lasciare le anomalie DS come note passive.**
Le 4 anomalie (title/xs=title/s, chip/xs=chip/m, text/tertiary L=D, radius/lg=md) sono documentate ma mai discusse con Filippo. Alcune potrebbero essere intenzionali (text/tertiary stesso valore per accessibilità?). Alcune potrebbero essere errori. Finché non vengono decise, ogni designer che le trova le userà in modo inconsistente.

---

*Questo documento va aggiornato quando: (1) la nav viene congelata, (2) il Salvadanaio viene definito, (3) i componenti DS vengono costruiti, (4) il prototipo React viene allineato.*
