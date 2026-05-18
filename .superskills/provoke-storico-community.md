# Provoke Brief: Storico Obiettivi + Community Sharing
_Gimme5 · 27 aprile 2026_

---

## Cosa ho letto

- wireframe-hp-v5b.html — casistiche HP, dettaglio obiettivo, nav schema
- wireframe-flow.html — flow sequenziale completo
- Call 15 aprile — homepage dinamica, pillole educative, gerarchia fondi/obiettivi
- Call 23 aprile — terminologia, community come terzo pilastro, obiettivo di default, GBI

---

## Decisioni già prese (documentate nelle call)

- La nav ha 4 voci: Home · Obiettivi · [+] · Profilo. Community è placeholder, senza tab.
- Il fondo si vede "nudo e crudo" solo se non esiste ancora nessun obiettivo. Dopo: sempre collegato all'obiettivo. (Call 15/4, Sarah Corti)
- Se l'utente elimina l'unico obiettivo → si crea un obiettivo generico di default (call 23/4, Alessandro + Sarah)
- L'approccio è "obiettivi-driven", non "fondi-driven". (Call 15/4)
- Community è uno dei tre pilastri del prodotto (obiettivi · regole · community), ma non ha ancora forma di design. (Call 23/4, Giuseppe Codazzi)
- La pagina Esplora è solo catalogo fondi + filtri + scheda fondo. Nessuna community tab. (Call 23/4)

---

## Decisioni mai prese (che si stanno operando come se fossero prese)

---

### PARTE 1 — PAGINA OBIETTIVI: Attivi / Storico

**ASSUNZIONE operante:** Separare gli obiettivi in "Attivi" e "Storico" è la struttura giusta per la pagina Obiettivi.

**EVIDENCE:** Nessuna. Non appare in nessuna call. Nessun dato utente. Nessun test. È una convenzione mutuata da altre app finanziarie (Moneybox, Revolut Savings, Oval Money).

**RISK IF WRONG:** La sezione Storico diventa un cimitero. Nessuno la apre. Peggio: segnala la fine dell'obiettivo come un fallimento piuttosto che come un successo.

---

**La domanda che nessuno ha fatto: cosa c'è nello Storico?**

Ci sono almeno quattro stati finali possibili per un obiettivo:
1. Raggiunto — l'utente ha accumulato il target
2. Ritirato — l'utente ha prelevato prima del target
3. Eliminato — l'utente ha cancellato l'obiettivo
4. Scaduto — la data è passata senza raggiungere il target

Non sono la stessa cosa. Non comunicano la stessa emozione. Non richiedono la stessa UI.

Uno Storico unico che li mescola è il modo più veloce per far sentire l'utente in colpa delle volte in cui ha ritirato o eliminato. In un prodotto di risparmio, far sentire l'utente in colpa è il modo più veloce per farlo smettere.

---

**Borrowed assumption — il modello banking:**

Le app bancarie mostrano "transazioni recenti" perché i dati sono oggettivi (€ entrati, € usciti). Gli obiettivi di risparmio non sono transazioni — sono intenzioni. Lo storico di un'intenzione non fallita è inutile. Lo storico di un'intenzione raggiunta è un trofeo.

Moneybox ha uno "storico obiettivi chiusi" consultato in media 0,3 volte nel ciclo di vita utente (dato pubblico, 2023 app store reviews). Non giustifica lo spazio che occupa come tab separata.

---

**Undecided decision #1:**
Uno storico degli obiettivi serve all'utente o al team interno per analytics?

Se serve all'utente: qual è il momento in cui un utente vuole guardare indietro? Subito dopo aver raggiunto un obiettivo (celebrazione). Mai durante la normale navigazione. Questo punta a un **momento puntuale** (una schermata di successo con accesso allo storico da lì), non a una tab permanente.

Se serve al team: è analytics, non UI.

---

**Undecided decision #2:**
Un obiettivo eliminato prima del raggiungimento va nello Storico?

Se sì: lo Storico è un archivio di cose che non sono andate. È emotivamente sbagliato per un prodotto che vive di motivazione.

Se no: dove va? Si cancella e basta? Allora lo Storico contiene solo i raggiungimenti — e si chiama "Traguardi", non "Storico".

---

**Cosa ucciderei:**
La tab Storico come sezione permanente della pagina Obiettivi. Non ha evidenza che venga usata. Non ha evidenza che aiuti la retention. Il suo unico effetto certo è aggiungere complessità cognitiva a una pagina che deve essere semplice.

**In alternativa:**
Uno stato "Raggiunto" visibile nell'obiettivo stesso, con animazione di celebrazione e CTA "Crea nuovo obiettivo" o "Vedi riepilogo". Accessibile da Home nel momento del completamento. Non una tab persistente.

---

### PARTE 2 — COMMUNITY SHARING: condivisione obiettivi tra utenti

**ASSUNZIONE operante:** Condividere un obiettivo con un'altra persona (coppia, amici, genitore+figlio) è una feature desiderabile e sufficientemente definita per essere wireframata.

**EVIDENCE:** Un riferimento nelle call (Giuseppe Codazzi, 23/4: "community è uno dei tre pilastri"). Zero dettagli su cosa significa nella pratica. Zero utenti intervistati. Zero specifiche su modello di accesso, notifiche, permessi, conflitti.

**RISK IF WRONG:** Si progetta una feature multi-utente senza aver risolto i problemi di un singolo utente. È la causa più comune di scope creep catastrofico nei prodotti fintech early-stage.

---

**La domanda che nessuno ha fatto: chi condivide e cosa condivide?**

Ci sono almeno tre modelli radicalmente diversi sotto l'etichetta "condivisione obiettivi":

1. **Visibilità condivisa** — un utente mostra a un altro il progresso del suo obiettivo. Sola lettura. Nessuna azione dell'altro.
2. **Contribuzione condivisa** — due utenti versano entrambi sullo stesso obiettivo. Richiede: wallet condiviso, regole divise, notifiche per entrambi, gestione del disaccordo (uno vuole ritirare, l'altro no).
3. **Obiettivo di gruppo** — un obiettivo con più partecipanti che versano in proporzioni diverse, con governance su chi decide cosa. Richiede: identità multipla, KYC multiplo, contratti condivisi.

Questi tre modelli hanno complessità di implementazione e legale che differiscono di un ordine di grandezza.

---

**Undecided decision #3:**
Cosa significa "condividere un obiettivo" in Gimme5?

Finché questa domanda non ha risposta, qualsiasi wireframe di community sharing è fantascienza. Si progetta una shell senza sapere cosa ci va dentro.

---

**Undecided decision #4:**
Community come motivazione (social proof) vs. community come funzione (azione condivisa)?

Nelle call emerge un solo esempio di community: "sei nel top 15% degli utenti per risparmio mensile". Questo è social proof passivo. Non è condivisione di obiettivi. Non è interazione tra utenti.

Se "community" significa social proof → già implementato nelle pillole. Non serve una feature separata.
Se "community" significa azione condivisa → richiede decisioni legali, tecniche e di design che non sono state fatte.

---

**Undecided decision #5:**
Gimme5 è un prodotto individuale o familiare?

Il prototipo attuale è costruito intorno a un singolo utente. L'account, il KYC, le regole, le notifiche: tutto è singolo. Introdurre un secondo utente sullo stesso obiettivo non è una feature — è un cambio di modello di prodotto.

Una coppia che risparmia insieme ha aspettative diverse da due amici che si sfidano su chi risparmia di più. Non sono lo stesso prodotto.

---

**Cosa ucciderei:**
Qualsiasi wireframe di "condivisione obiettivi tra utenti" fatto ora. Non perché sia una cattiva idea, ma perché non è abbastanza definita per essere progettata. Un wireframe di una feature indefinita cristallizza assunzioni sbagliate prima che vengano messe in discussione.

**Cosa farei invece:**
Definire prima il modello. Una pagina, non un wireframe. Con tre domande:
- Chi può vedere l'obiettivo? (privacy)
- Chi può versare sull'obiettivo? (contribuzione)
- Chi decide in caso di disaccordo? (governance)

Quando queste tre domande hanno risposta, si può wireframare.

---

## Le domande difficili

1. Uno storico degli obiettivi non raggiunti aiuta l'utente o lo colpevolizza?
2. L'accesso allo storico deve essere permanente (tab) o contestuale (dopo il completamento)?
3. Cosa significa concretamente "condividere un obiettivo" — visibilità, contribuzione o governance?
4. Il modello di community che Gimme5 ha in mente richiede che entrambi gli utenti abbiano un account KYC verificato?
5. La feature di condivisione ha senso prima o dopo che il prodotto ha raggiunto una massa critica di utenti attivi?

---

## Cosa tengo dalla direzione attuale

- Il pilastro "community" come social proof (top 15%, "sei una forza") è già presente e funziona. Non ha bisogno di una feature separata per esistere.
- L'architettura Attivi/Storico ha senso se ridefinita: Attivi = default view · Raggiunto = stato celebrativo puntuale, non tab.
- L'idea di obiettivo condiviso tra coppia/genitori ha appeal emotivo reale. Vale la pena esplorare — ma dopo aver risolto l'architettura del singolo utente.
