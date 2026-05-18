# Brief Wireframe Definitivo — Gimme5 Utente Esperto V5
_Aprile 2026 · Sintetizzato da: provoke-brief-gimme5.md, wireframe-hp-v4.html, wireframe-flow-esperto.html, strategia-pillole.html, strategia-hp.html, sistema.html, dal cliente (5 PDF), flussi as-is, nav schema, design tokens_

---

## SEZIONE 0 — Contesto di prodotto e regole fisse

### Descrizione Gimme5
Gimme5 è un salvadanaio digitale che permette di risparmiare e investire in fondi comuni a partire da €1. L'app è goal-oriented: ogni versamento è sempre collegato a un obiettivo concreto (viaggio, casa, università, ecc.). Il meccanismo centrale è l'automazione — chi attiva una Routine risparmia il 338% di più rispetto a chi versa manualmente. Gimme5 non offre consulenza; fornisce strumenti, educazione e automazione perché l'utente faccia scelte consapevoli in autonomia. La motivazione è costruita su costanza e identità personale, non su rendimenti garantiti.

### Regola d'oro del sistema
**Obiettivo → Fondo → Routine.** Non si può attivare una Routine senza un obiettivo associato. Non si può creare un obiettivo senza un fondo. L'ordine mentale è WHY (obiettivo) → WHAT (fondo) → HOW (routine) → KICK-START (primo versamento).

### Nomenclatura fissa — NON modificare mai questi termini

| Termine | Significato | Icona |
|---------|------------|-------|
| **Routine** | Termine ombrello per qualsiasi automazione di versamento | — |
| **Pilota automatico** | Versamento ricorrente fisso (€/mese, data fissa) | ↻ |
| **Trigger** | Regola evento-based (sport, passi, date speciali) | ⚡ |
| **Patto con te stesso** | Scelta comportamentale manuale confermata ogni giorno ("non ho fumato → +€5") | ★ |
| **Fondo** | Strumento di investimento (AcomeA Risparmio, Performance, ESG, ecc.) | — |
| **Obiettivo** | Goal con nome + target € + data scadenza | — |
| **Effetto mercato** | Rendimento dovuto ai mercati, distinto dai versamenti | — |
| **Pillola** | Contenuto educativo contestuale dimensionato per anzianità utente | — |

### Device target
App mobile iOS e Android (entrambi). Nessuna preferenza esplicita nei documenti. Wireframe a 390×844px (iPhone 14 reference), adattato ad Android con stessa logica. Bottom nav con safe area.

### Struttura navigazione — DECISIONE CHIUSA
**4 tab esatte:** `Home · Obiettivi · [+] · Profilo`

> ⚠️ **Contraddizione rilevata**: Il file `gimme5-nav-schema.svg` mostra 5 tab (Home · Obiettivi · [+] · Esplora · Profilo). Questa struttura è stata superata dalla call del 23 aprile (Alessandro + Sarah + Giuseppe Codazzi) che ha confermato 4 tab senza Esplora permanente. Il nav schema SVG è un documento obsoleto. La struttura a 4 tab è quella da usare.

---

## SEZIONE 1 — Sheet [+] condizionale

Il pulsante [+] è il punto di accesso alle azioni principali. Il contenuto dello sheet cambia in base allo stato utente.

### Logica condizionale
- **Nessun obiettivo attivo** → Flow A è la CTA primaria (crea obiettivo)
- **1+ obiettivi, nessuna Routine** → Flow B è la CTA primaria (aggiungi Routine)
- **1+ obiettivi + Routine attiva** → Flow C/D (versa / preleva) come azioni rapide, Flow A come secondaria

### Flow A — Crea nuovo obiettivo
**Trigger:** Tap [+] → "Crea un nuovo obiettivo" (CTA primaria nel sheet)

**Step:**
1. **Scegli categoria** — griglia emoji (🏠 Casa · ✈️ Vacanza · 🛡️ Emergenza · 📚 Istruzione · 💼 Pensione · ✦ Altro). Social card contestuale: "N persone stanno risparmiando per [categoria] in questo momento." (Community Layer B — solo lettura, nessuna interazione)
2. **Nome obiettivo** — campo testuale. Suggerimenti rapidi come chip sotto (es. "Vacanza estate", "Weekend"). CTA: "Avanti"
3. **Target + data** — importo € (input numerico) + selezione data tra opzioni suggerite (es. "Giugno 2027 · 14 mesi · €286/mese" | "Dicembre 2027 · 20 mesi · €200/mese"). CTA: "Avanti"
4. **Scegli fondo** — lista 2-3 fondi con nome, tipo, rischio, TER, rendimento ytd. Uno preselezionato (consigliato per orizzonte temporale). CTA: "Avanti"
5. **Prima Routine** (skippabile) — Pilota automatico pre-calcolato (target ÷ mesi rimanenti). Mostra: importo, frequenza, prossima data. CTA primaria "Crea obiettivo", secondaria "Salta — aggiungo dopo"
6. **Conferma** — HP si aggiorna con nuovo obiettivo

**Stati errore:** importo < €1 → messaggio inline; data nel passato → messaggio inline; nome vuoto → CTA disabilitata.

---

### Flow B — Aggiungi Routine
**Trigger:** Tap [+] → "Aggiungi Routine" · oppure · CTA "+ Aggiungi una regola" dal dettaglio obiettivo

**Step:**
1. **Scegli obiettivo** (se >1 obiettivo attivo) — sheet con lista scrollabile, card compatte con nome + % + data scadenza
2. **Scegli tipo di Routine:**
   - **Pilota automatico** (↻) — versamento ricorrente automatico
   - **Trigger** (⚡) — evento esterno (sport · passi · data speciale)
   - **Patto con te stesso** (★) — conferma comportamentale giornaliera
3. **Configura Routine** (parametri per tipo — vedi sotto)
4. **Conferma** — la Routine appare nel dettaglio obiettivo

#### Parametri Pilota automatico
- Importo (€) — input numerico, min €1
- Frequenza: Mensile / Settimanale / Giornaliero
- Giorno del mese (se mensile) — default 1°
- Data inizio
- IBAN sorgente (pre-compilato se già inserito)

#### Parametri Trigger
- Tipo evento:
  - **Sport** — scegli squadra, importo per vittoria
  - **Passi** — soglia passi/giorno, importo
  - **Data speciale** — data (compleanno, anniversario), importo
- Importo versamento per evento

#### Parametri Patto con te stesso
- Descrizione impegno (testo libero breve, es. "Non ho fumato")
- Importo versamento per conferma (€)
- Obiettivo destinatario
- Il Patto genera ogni giorno due azioni: "Confermo" (versa) e "Ho sgarrato" (blocca versamento)

**Stati errore:** importo 0 → CTA disabilitata; nessun obiettivo → prima mostra Flow A; data speciale nel passato → warning inline.

---

### Flow C — Versa
**Trigger:** Tap [+] → "Versa ↑" · oppure · CTA "Versa" dal dettaglio obiettivo

**Step:**
1. **Scegli obiettivo** (se >1) — lista scrollabile
2. **Importo** — input numerico con quick chips (€10 · €25 · €50 · €100)
3. **Conferma** — recap: obiettivo + importo + IBAN sorgente. CTA "Versa"
4. **Successo** — conferma animata, aggiornamento saldo visibile in HP

**Stati errore:** importo > saldo disponibile → messaggio; IBAN non configurato → rimanda a Profilo → Dati bancari.

---

### Flow D — Preleva
**Trigger:** Tap [+] → "Preleva ↓" · oppure · CTA "Preleva" dal dettaglio obiettivo

**Step:**
1. **Scegli obiettivo sorgente** (se >1)
2. **Importo** — input numerico. Sotto: indicazione impatto su data target ("Se prelevi €500 arrivi all'obiettivo a febbraio 2028 invece di settembre 2027")
3. **Conferma** — recap con soft friction: "Stai prelevando €500 dall'obiettivo Casa. Il tuo piano si sposta di 5 mesi." CTA primaria "Conferma prelievo", secondaria "Annulla"
4. **Elaborazione** — nota: "I fondi arrivano sul tuo conto in 2-3 giorni lavorativi"

**Stati errore:** importo > valore obiettivo → cap automatico con avviso; costo prelievo €1 mostrato in modo trasparente nel recap.

---

## SEZIONE 2 — Home (utente esperto)

### Layout standard HP esperto (2+ obiettivi attivi)

```
[Status bar]
[Greeting: "Filippo, sei una forza! · Vorremmo tutti essere come te."]
[Value block: Valore totale €X.XXX · ±€XX effetto mercato]
─────────────────────────────────
[Patto del giorno — se Patto attivo e non confermato]
[Obj Card 1]
[Obj Card 2]
[...eventuali altri obiettivi]
[Pillola S — edu-list format]
─────────────────────────────────
[Bottom nav: Home · Obiettivi · [+] · Profilo]
```

### Componente Obj Card
```
[Nome obiettivo]                    [XX%]
[████████░░░░░░░░░░░░░░░░░░░░░░░]
€X.XXX/€X.XXX                       [data scadenza]
[Fondo · ↻ €XX/mese]
```
- Progress bar a 2 segmenti: fill pieno (versato) + tratteggio (rendimento mercato)
- Variante `.negative` per rendimento negativo (grigio più chiaro, mai rosso)

### Patto del giorno (se Patto attivo, non ancora confermato oggi)
```
★ Non ho fumato
+€5 su [Obiettivo] · automatico
[██████████████░░░░░░░░░░░░░░] calendario 28 giorni
"Conferma: non ho fumato oggi → +€5"
[Ho sgarrato — blocca il versamento di oggi]
```
- Se già confermato: card dimmed con opacità ridotta, calendario tutto pieno, testo "✓ versati"

### Tap possibili dalla HP
- Tap Obj Card → Dettaglio Obiettivo
- Tap Patto → espande dettaglio o mostra calendario completo
- Tap pillola S (edu-list row) → Dettaglio pillola
- Tap [+] → Sheet azioni
- Tap Obiettivi (nav) → Pagina Obiettivi
- Tap Profilo (nav) → Pagina Profilo

### Dettaglio Obiettivo

**Struttura (dall'alto verso il basso):**
1. `[← Obiettivi]` back link
2. **Hero image** — placeholder "Immagine obiettivo" (rettangolo 210×60px, sfondo card). Se utente ha caricato foto: foto come sfondo con overlay scuro.
3. **Nome obiettivo** + percentuale grande (es. "32%")
4. **Progress bar** height 5px — segmento versato (pieno) + segmento rendimento (tratteggiato). Variante negativa: rendimento come linea tratteggiata più chiara.
5. **€ totale** (bold 18px) · **target** · **data scadenza**
6. **Performance chips** — rendimento 30gg (es. "+1.2%") · rendimento totale (es. "+3.8%")
7. **Sezione Fondo**
   - Fund card: nome fondo · tipo (es. "Obbligazionario") · rischio (es. "Basso") · TER · rendimento ytd
   - Se multi-fondo (futuro): stacked bar + legenda (nome · % · €) + una card per fondo
8. **Sezione Regole attive**
   - Una row per ogni Routine attiva: icona tipo (↻/⚡/★) + label + parametri
   - Row dashed "+ Aggiungi una regola" (se 0 regole: nudge con testo "Aggiungere una Routine ti aiuta a risparmiare costantemente" + CTA filled "Aggiungi una regola")
9. **Ultimi movimenti** — 3 righe: tipo (Versamento / Effetto mercato / Prelievo) + fondo + data + importo. Importi negativi in grigio, mai rosso.
10. **CTA pair** — "Preleva" (outline) · "Versa" (filled)

### Dettaglio Fondo
Accessibile dal tap sul nome fondo nel Dettaglio Obiettivo.

**Elementi:**
- `[← Obiettivo]` back link
- Nome fondo (heading)
- Tipo · Rischio · Orizzonte temporale
- Stats: YTD · TER · AUM (se disponibile)
- Grafico placeholder (area chart ultimi 12 mesi)
- Descrizione testuale fondo
- Pillola edu-list inline (contenuto educativo sul tipo di fondo — Community Layer A)
- CTA "Cambia fondo" (se applicabile)

### Dettaglio Routine (Regola)
Accessibile dal tap sulla row Routine nel Dettaglio Obiettivo.

**Elementi comuni:**
- Tipo Routine con icona (↻/⚡/★)
- Nome/descrizione
- Importo configurato
- Prossima esecuzione (data)
- Storico versamenti da questa Routine (mini lista 3 righe)
- CTA pair: "Modifica" · "Metti in pausa"
- Link "Elimina questa Routine" (destructive, testo rosso o grigio — non CTA primaria)

**Elementi specifici Pilota automatico:**
- Frequenza (mensile/settimanale)
- Giorno del mese
- IBAN sorgente

**Elementi specifici Trigger:**
- Tipo evento + dettaglio (squadra / soglia passi / data)
- Storico trigger attivati

**Elementi specifici Patto:**
- Calendario 28 giorni (conferme/sgarre)
- % giorni confermati
- Totale versato da questo Patto

### Flusso Modifica Obiettivo
1. Dettaglio Obiettivo → tap "···" o CTA "Modifica"
2. Schermata edit con campi:
   - Nome obiettivo (testuale)
   - Target € (numerico)
   - Data scadenza (date picker)
   - Foto/immagine (opzionale — scegli da libreria o emoji)
3. CTA "Salva modifiche"
4. Torna al dettaglio con valori aggiornati

**Nota:** La Routine NON si modifica qui. Ha il suo flusso separato (tap sulla row Routine → Dettaglio Routine → "Modifica").

### Flusso Cancella Obiettivo
1. Dettaglio Obiettivo → tap "···" → "Elimina obiettivo"
2. **Modale di conferma:**
   - Titolo: "Vuoi eliminare [Nome obiettivo]?"
   - Body: "Il saldo (€X.XXX) resterà nel fondo finché non lo prelevi."
   - Gate: digita il nome dell'obiettivo per confermare (type-to-confirm)
   - CTA: "Annulla" (ghost) · "Sì, elimina" (destructive — attiva solo dopo type-to-confirm)
3. Se confermato: obiettivo rimosso dalla HP e da Obiettivi. Il saldo rimane nel fondo come "Risparmio Generico" (obiettivo placeholder).
4. Se era l'ultimo obiettivo: HP mostra stato "nessun obiettivo" con CTA primaria "Crea il tuo primo obiettivo".

---

## SEZIONE 3 — Pagina Obiettivi

### Layout lista
```
[Header: "I tuoi obiettivi"]
────────────
ATTIVI
[Obj Card 1 — con progress, fondo, Routine]
[Obj Card 2 — con progress, fondo, Routine]
[+ Aggiungi obiettivo] (CTA outline secondaria)
────────────
RAGGIUNTI  (solo se esistono obiettivi completati)
[Card compatta Raggiunto 1 — nome · durata · versamenti · contributo mercato]
[Card compatta Raggiunto 2]
────────────
[Bottom nav]
```

**Nota:** Non esiste una tab "Storico" separata. I raggiunti sono una sezione sotto gli attivi nella stessa pagina. Gli obiettivi eliminati o abbandonati NON appaiono qui — spariscono senza lasciare traccia.

### Card RAGGIUNTI (compatta)
```
[Nome obiettivo]                    ✓ RAGGIUNTO
14 mesi · 36 versamenti · +€340 dal mercato
```
- Tap → espande timeline, Routine usate, fondo, grafico crescita
- Tono celebrativo puntuale (non permanente)

### Flusso creazione obiettivo dalla pagina Obiettivi
Tap "+ Aggiungi obiettivo" → identico a Flow A (Sheet [+]). Nessuna differenza di step.

### Casistica A — Obiettivo personale
Standard. Vedi Flow A, Sezione 1.

### Casistica B — Obiettivo condiviso
**Stato iniziale: solo l'utente**
- Obj card standard con badge "Condiviso" (pending)
- Sezione "Partecipanti" nel dettaglio: "[Tu] ████████ · [Partner] ░░░░░░░░" (importi nascosti)

**Flow invito partner:**
1. Dettaglio obiettivo → "Invita qualcuno"
2. Inserisci nome + contatto (telefono/email)
3. Partner riceve link di invito
4. Stato: "In attesa di accettazione"

**Stato "In attesa":**
- Badge giallo "In attesa" sulla card
- Nel dettaglio: "Marco non ha ancora accettato l'invito" + CTA "Rinvia invito" · "Annulla invito"

**Stato "Accettato":**
- Progress bar collettiva con due segmenti colorati diversamente (uno per utente)
- Importi nascosti: "Il tuo contributo: €X.XXX · Contributo di Marco: ████████"
- Entrambi i partner possono versare
- Solo il creatore può eliminare l'obiettivo (con conferma dell'altro partner)
- Notifiche: "Marco ha versato su [obiettivo]"

**Ruoli/permessi:**
| Azione | Creatore | Partner |
|--------|----------|---------|
| Versare | ✓ | ✓ |
| Visualizzare progresso | ✓ | ✓ |
| Aggiungere Routine | ✓ | ✓ (sulla propria quota) |
| Modificare target/data | ✓ | ✗ |
| Eliminare obiettivo | ✓ (con conferma partner) | ✗ |
| Abbandonare | ✓ (diventa personale) | ✓ (si separa) |

---

## SEZIONE 4 — Pillole educative

### 4 formati in ordine decrescente di prominenza

#### Formato XL
- **Contesto:** Utente nuovo (0-30 giorni), primo accesso post-onboarding
- **Dove appare:** In HP, subito dopo l'obiettivo (unico obiettivo)
- **Dimensioni:** Card full-width, padding 10px 12px 28px, titolo 13px/800, sottotitolo 8px, illustrazione fuori dal bordo (42px)
- **Elementi:** Label categoria (es. "Sapevi che") · Titolo grande · Sottotitolo · Illustrazione emoji
- **Copy esempio:** "Il risparmio automatico batte quello manuale del 40% · Chi imposta una Routine risparmia in media 3× di più nei 12 mesi successivi."
- **Tap:** Apre dettaglio pillola (schermata full)

#### Formato L
- **Contesto:** Utente primo mese, ha completato onboarding e ha 1 obiettivo con Routine attiva
- **Dove appare:** In HP, subito dopo l'obiettivo
- **Dimensioni:** Card full-width, padding 9px 12px 22px, titolo 11px/800, sottotitolo 7.5px, illustrazione 26px
- **Elementi:** Label · Titolo medio · Sottotitolo · Illustrazione (più piccola di XL)
- **Copy esempio:** "L'effetto composto inizia a lavorare per te · Ogni mese che passa, il mercato porta un contributo aggiuntivo ai tuoi risparmi."
- **Tap:** Apre dettaglio pillola

#### Formato M
- **Contesto:** Utente intermedio (2-6 mesi), regolare, obiettivo con progresso visibile
- **Dove appare:** In HP, dopo gli obiettivi
- **Dimensioni:** Card full-width, padding 8px 12px, min-height 52px, titolo 10px/700, sottotitolo 7.5px, illustrazione 20px
- **Elementi:** Label · Titolo · Sottotitolo · Illustrazione piccola
- **Copy esempio:** "L'effetto composto sui tuoi €890 · A questo ritmo, il mercato aggiungerà ~€400 ai tuoi risparmi entro apr 2027."
- **Tap:** Apre dettaglio pillola

#### Formato S (lista articoli/insight)
- **Contesto:** Utente esperto (2+ obiettivi attivi, 6+ mesi), nessun rumore necessario
- **Dove appare:** In fondo alla HP, sotto gli obiettivi e il Patto
- **Dimensioni:** Lista di righe compatte (edu-list), nessuna card colorata
- **Elementi per riga:** Icona (emoji) · Titolo breve · Fonte (es. "GIMME5 · 3 min") · Arrow "›"
- **La seconda riga è sempre Community social proof passivo:** es. "Sei nel top 15% degli utenti per risparmio mensile · Community insight"
- **Tap riga:** Apre dettaglio pillola (o link articolo)

### Regole pillole
1. **Max 1 format per sessione** — non si mescolano formati nella stessa HP
2. **Silenzio in momenti fragili** — utente dormiente e mercato in calo ricevono bottom sheet, non pillola
3. **Sempre tappabile** — ogni pillola porta a un approfondimento
4. **Dati reali dell'utente** — "i tuoi €890", non importi generici
5. **Nessuna XL/L/M per utenti esperti** — solo S

### Schermata dettaglio pillola
- Back link "← Home" o "← Esplora"
- Label formato (es. "Sapevi che")
- Titolo (grande)
- Corpo testo (1-3 paragrafi, linguaggio semplice)
- Fonte (Gimme5 arancio | Finanz verde)
- Disclaimer MiFID II se contenuto finanziario (fonte Finanz)
- CTA contestuale: es. "Attiva il Pilota automatico" se pillola su automazione; "Vedi il tuo obiettivo" se pillola su progresso

---

## SEZIONE 5 — Profilo

### Voci presenti (da wireframe-hp-v4.html)

**Header:**
- Avatar (iniziali in cerchio)
- Nome utente
- @username o email

**Preview card Traguardi:**
- N badge sbloccati · streak giorni · ranking ("top 24%")
- Tap → sotto-pagina Traguardi

**Sezione Impostazioni:**
- **Dati personali** — nome, cognome, data nascita, codice fiscale, indirizzo
- **Documenti** — carta identità / passaporto (upload/visualizza)
- **Sicurezza** — PIN · Biometrico · Modifica password · Modifica email
- **Notifiche** — toggle per: Versamenti · Mercato · Patto · Educazione · Push generali

**Sezione Il tuo conto:**
- **IBAN collegati** — lista IBAN, aggiunta nuovo, rimozione
- **Gestione SDD** — visualizza/modifica mandato SDD per Pilota automatico
- **Lettere e certificazioni** — documenti scaricabili (rendiconti annuali, semestrali)

**Sezione Assistenza:**
- Chat (in-app)
- Email (apre client mail)
- FAQ (lista domande frequenti)
- Link utili

**Footer:**
- Termini e privacy (link)
- Logout
- Disattiva account (destructive, nascosto in fondo)

### Sotto-pagina Traguardi
- **Streak:** N giorni consecutivi con versamento o conferma Patto. Calendario settimanale (L/M/M/G/V/S/D). Tono: non punitivo (streak interrotto → "Sei già a 5 giorni di fila questa settimana").
- **Ranking:** "Sei nel top X% degli utenti per costanza." Basato su frequenza versamenti, non importi (privacy).
- **Badge:** Griglia 3 colonne. Badge sbloccati visibili, locked in grigio. Esempi: "Primo obiettivo" · "Prima Routine" · "7 giorni di fila" · "30 giorni di fila" · "Primo Patto confermato" · "Top 15%"

### Flussi modifica per sezione
- **Dati personali:** tap campo → edit inline → "Salva". Alcuni campi bloccati (codice fiscale, data nascita) dopo KYC verificato.
- **Sicurezza PIN:** vecchio PIN → nuovo PIN → conferma nuovo PIN.
- **Notifiche:** toggle immediato, nessuna conferma.
- **IBAN:** aggiungi IBAN → validazione formato → micro-transazione di verifica → conferma. Rimozione: "Sei sicuro?" modale.

---

## SEZIONE 6 — Community

### Posizionamento nel sistema
Community **non ha una tab dedicata** e **non è una schermata autonoma**. Appare come layer trasversale in 3 punti precisi dell'app, con due modalità: social proof passivo (nessuna interazione) e funzione attiva (obiettivo condiviso).

### Punto 1 — Social context nella creazione obiettivo (passivo)
- **Dove:** Flow A, step "Scegli categoria"
- **Cos'è:** Social card con dato aggregato anonimo: "1.204 persone stanno risparmiando per una vacanza in questo momento."
- **Interazione:** Nessuna — solo visualizzazione
- **Scopo:** Riduce ansia da scelta, valida l'intenzione dell'utente
- **Ingresso:** Automatico durante il flow
- **Uscita:** Tap "Avanti" → step successivo

### Punto 2 — Social proof nella pillola S (passivo)
- **Dove:** HP utente esperto, seconda riga del formato edu-list (pillola S)
- **Cos'è:** Dato comparativo: "Sei nel top 15% degli utenti per risparmio mensile"
- **Interazione:** Tap apre dettaglio pillola con contesto
- **Scopo:** Motivazione identitaria per l'utente avanzato
- **Ingresso:** Automatico nella HP degli esperti
- **Uscita:** Tap → dettaglio; nessuna azione verso altri flussi

### Punto 3 — Obiettivo condiviso (funzione attiva — J12)
- **Dove:** Pagina Obiettivi → Dettaglio obiettivo → "Invita qualcuno"
- **Cos'è:** Flow completo di co-risparmio: invite → accettazione → progress condiviso → contribuzioni → notifiche
- **Interazione:** Completa (invita, accetta, versa, abbandona)
- **Scopo:** Risparmio collaborativo tra coppia, amici, genitori-figli
- **Ingresso:** Dal dettaglio obiettivo (non dal [+] direttamente)
- **Uscita:** Verso HP (aggiornamento card) · verso notifiche (alert versamento partner)

### Cosa NON progettare
- Schermata Community standalone
- Feed di attività utenti
- Lista di altri utenti o classifica pubblica
- Messaggistica tra utenti
- Qualsiasi funzione che mostri importi altrui

---

## SEZIONE 7 — Flusso Obiettivo completato/scaduto

### Scenario A — Obiettivo raggiunto (100%)

**Quando:** Il valore dell'obiettivo raggiunge o supera il target.

**Notifica push (se app in background):** "Complimenti! Hai raggiunto [Nome obiettivo]. Cosa vuoi fare ora?"

**In app:**
1. HP: obj card mostra "100% ✓ RAGGIUNTO" con progress bar piena
2. **Schermata celebrativa** (si apre automaticamente o al tap della card):
   - Titolo: "Hai raggiunto [Nome obiettivo]!"
   - Dati: "€X.XXX in N mesi · Versato: €X.XXX · Dal mercato: +€XXX"
   - Barra progress con composizione versato/mercato
   - 3 CTA:
     - "Ritira tutto" → Flow D (preleva intero saldo)
     - "Crea nuovo obiettivo" → Flow A
     - "Mantieni nel fondo" → chiude schermata, obiettivo si sposta in RAGGIUNTI

3. **Stato post-azione:**
   - Se "Ritira tutto": obiettivo in RAGGIUNTI con importo €0
   - Se "Crea nuovo obiettivo": schermata si trasforma in Flow A con campo saldo pre-compilato ("Vuoi spostare €X.XXX su questo nuovo obiettivo?")
   - Se "Mantieni nel fondo": obiettivo in RAGGIUNTI, saldo resta investito, continua a generare rendimento

**Nota:** Non mostrare immediatamente la schermata celebrativa se il 100% è raggiunto temporaneamente per effetto mercato. Attendere 5 giorni consecutivi sopra target prima di attivare il flusso celebrativo (regola anti-volatilità).

---

### Scenario B — Obiettivo scaduto senza aver completato

**Quando:** La data target è passata e il valore è < 100%.

**Notifica push:** "L'obiettivo [Nome] è scaduto. Sei al X%. Vuoi continuare?"

**In app:**
1. HP: obj card mostra badge "⏳ SCADUTO" sotto il nome
2. **Bottom sheet** (non schermata full, tono morbido):
   - Titolo: "Il tempo è scaduto, ma non i tuoi risparmi."
   - Body: "Sei al X% di [Nome obiettivo]. Hai €X.XXX investiti."
   - 3 CTA:
     - "Proroga data" → modifica data scadenza (date picker)
     - "Ritira quello che c'è" → Flow D
     - "Continua senza scadenza" → rimuove data, obiettivo rimane attivo

3. **Se ignorato:** L'obiettivo rimane visibile nella pagina Obiettivi con badge "SCADUTO". La Routine associata **non si disattiva automaticamente** — continua a versare salvo azione dell'utente.

---

## SEZIONE 8 — Note di output per il designer

### Formato wireframe
- Scala di grigi. **Nessun colore brand** in nessun elemento.
- Palette CSS: `--bg:#fff · --surface:#f3f3f3 · --card:#e8e8e8 · --border:#d0d0d0 · --border-active:#555 · --text-1:#111 · --text-2:#555 · --text-3:#aaa`
- Eccezione: pillole salmon (sfondo `#111`, testo `#fff`) per evocare darkmode senza colore
- Base: `wireframe-hp-v4.html` (CSS e componenti di riferimento)

### Nomenclatura schermate
Formato: `[JOURNEY-ID] · [FLOW-LABEL] — [Step N/Totale]`
Esempi:
- `J01 · Flow A — Step 1/6 · Scegli categoria`
- `J08 · Flow B — Step 3/5 · Configura Pilota automatico`
- `J12 · Obiettivo condiviso — Step 4/7 · Stato in attesa`

### Flussi condizionali — come rappresentarli
- **Biforcazioni:** La schermata che genera la scelta mostra le due CTA. La schermata successiva ha una label "Ramo A" o "Ramo B" nel step-label.
- **Step opzionali (skip):** Il telefono mostra la CTA "Salta" in basso al frame. L'annotazione `.ann` sotto il telefono specifica: "Skippabile → porta a Step N+2"
- **Bottom sheet vs schermata:** Bottom sheet = frame con la parte superiore semitrasparente e il sheet in primo piano. Non una schermata separata.

### Annotazioni UX `.ann`
- **Sotto ogni telefono** (mai dentro lo schermo)
- Formato: "[cosa fa l'utente · cosa succede · dove porta]"
- Annotazione evidenziata `.ann.hi` per: decisioni critiche, biforcazioni, errori da gestire
- Community annotation obbligatoria nei 3 punti dove appare: "Community — [tipo] — [nessuna interazione / interazione attiva]"

### Stato vuoto / populated / errore — obbligatori per ogni flusso
Ogni flow deve avere almeno 3 varianti wireframate:
1. **Stato vuoto** (nessun dato, prima apertura)
2. **Stato populated** (dati reali, utente esperto)
3. **Stato errore** (input invalido, connessione assente, azione non completabile)
La conferma è implicita nella schermata di successo (animazione + recap).

---

## APPENDICE — Contraddizioni rilevate tra documenti

| # | Contraddizione | Documento A | Documento B | Decisione |
|---|---------------|------------|------------|-----------|
| 1 | Nav 4 vs 5 tab | `gimme5-nav-schema.svg` (5 tab con Esplora) | Call 23 aprile | **4 tab — call 23 aprile** |
| 2 | Pillole 3 vs 4 formati | `wireframe-hp-v4.html` (XL/M/S) | Confermato utente | **4 formati: XL/L/M/S** |
| 3 | "Regola" vs "Routine" | Vecchi wireframe usano "Regola" | Call Sarah + V4 | **"Routine" ovunque** |
| 4 | Storico obiettivi come tab | Assunzione nei file vecchi | Provoke brief 27 aprile | **Sezione "RAGGIUNTI" in pagina Obiettivi, non tab** |
| 5 | Community come tab/schermata | File nav schema (placeholder) | Call 23 aprile | **Nessuna tab Community** |
| 6 | Esplora come destinazione fondi | Nav schema + wireframe-app-completo | Call 23 aprile | **Esplora non è tab permanente nel nav** |

---

_Brief prodotto il 28 aprile 2026. Sintetizzato da 20+ file di progetto. Fonte unica di verità per wireframe V5._
