# GIMME5 — Storico Obiettivi, Community, Progress Bar e nuove provocazioni

---

## 1. Storico Obiettivi

### Perché serve

GIMME5 è goal-based. Se l'obiettivo è il cuore dell'app, un obiettivo completato non è un dato archiviato — è una prova. "Ho risparmiato per la Grecia e ci sono andato" è infinitamente più motivante di qualsiasi badge. Lo storico trasforma l'app da strumento a diario finanziario personale.

Senza storico, gli obiettivi completati spariscono nel nulla. L'utente perde la prova di ciò che ha fatto. E l'app perde il miglior argomento per proporre il prossimo obiettivo.

### A cosa serve concretamente

- **Ri-attivazione**: l'utente che ha completato 1 obiettivo è il candidato ideale per il secondo. Lo storico è la CTA naturale — "Ne hai completato uno. Il prossimo?"
- **AI Engine**: i dati degli obiettivi completati informano i suggerimenti futuri (importo medio, durata, tipo di fondo scelto, combinazione di routine usate)
- **Resilienza nei momenti negativi**: quando il mercato scende, lo storico ricorda all'utente che ce l'ha già fatta — "Vacanza in Grecia: completata nonostante il -8% di ottobre 2026"
- **Identità**: tre obiettivi completati dicono più di qualsiasi profilo utente. Sono la storia finanziaria personale.

### Dove vive

Nella sezione Obiettivi, sotto gli obiettivi attivi. Due blocchi distinti:

```
┌─────────────────────────────────────┐
│  Obiettivi                          │
│                                     │
│  ATTIVI                             │
│  ┌─────────────────────────────────┐│
│  │  Anticipo Casa · 32% · 2027    ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  + Crea un nuovo obiettivo     ││  ← placeholder card
│  └─────────────────────────────────┘│
│                                     │
│  RAGGIUNTI                          │
│  ┌─────────────────────────────────┐│
│  │  ◎ Vacanza in Grecia           ││
│  │  100% · completato lug 2026    ││
│  │  14 mesi · 36 versamenti       ││
│  │  €340 dal mercato              ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  ◎ iPhone 16                   ││
│  │  100% · completato mar 2026    ││
│  │  5 mesi · 12 versamenti        ││
│  │  €18 dal mercato               ││
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

### Cosa mostra la card storica (compatta)

Quattro informazioni fattuali, niente di più:
- **Nome + illustrazione** (la stessa scelta in fase di creazione)
- **Durata reale** ("14 mesi")
- **Numero versamenti** ("36 versamenti")
- **Contributo mercato** ("€340 dal mercato")

Tap per espandere: timeline completa dei movimenti, routine usate, fondo scelto, grafico di crescita nel tempo.

### Cosa NON deve fare

- Non deve avere un tono celebrativo ogni volta che l'utente lo apre. La celebrazione è al raggiungimento (schermata 100%). Lo storico è un archivio calmo.
- Non deve mostrare gli obiettivi abbandonati/eliminati — quelli sono andati. Lo storico è solo per i successi.
- Non deve essere un tab separato nella nav. Vive dentro Obiettivi, scroll sotto gli attivi.

---

## 2. Community

### La domanda prima della risposta

"Community" è una delle parole più generiche del product design. Prima di costruirla serve rispondere: community di cosa? Per chi? E come traccia all'AUM?

### Cosa NON fare

| Tipo | Perché no |
|------|-----------|
| Forum/feed social | Il risparmio è privato. Pochi vogliono condividere quanto risparmiano. Il 90% dei forum fintech diventa ghost town in 3 mesi. Chi produce il contenuto? |
| Leaderboard estesa | Già criticata. Contraddice il goal-based. Aiuta il 41% attivo, demotiva il 59% dormiente. |
| Sezione "articoli e consigli" | Già coperta dalle pill educative. Duplicazione. Un tab dedicato a contenuti editoriali richiede una redazione — costo operativo senza revenue diretta. |

### Cosa fare: tre layer, zero tab in più

La community non è un luogo — è un layer che attraversa le feature esistenti. Nessuna delle tre proposte richiede un tab nella nav.

---

#### Layer A — "Come risparmiano gli altri" (Storie vere)

Template reali di obiettivi completati da altri utenti, anonimizzati. Non è un social network — è un catalogo di strategie.

**Dove vive**: nel flow di creazione obiettivo, dopo la scelta del template e prima della configurazione. L'utente sceglie "Vacanza", e prima di impostare importo e fondo vede:

```
┌─────────────────────────────────────┐
│  Come risparmiano gli altri         │
│  per una vacanza                    │
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ◎ "Vacanza in due"            ││
│  │  €2.400 in 11 mesi             ││
│  │                                ││
│  │  ↻ Pilota auto €200/mese      ││
│  │  ★ Patto "No delivery" €5/gg  ││
│  │                                ││
│  │  [ Usa come modello ]          ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  ◎ "Viaggio zaino in spalla"   ││
│  │  €1.200 in 8 mesi              ││
│  │                                ││
│  │  ↻ Pilota auto €100/mese      ││
│  │  ⚡ Trigger passi 10k €2       ││
│  │  ★ Patto "No caffè bar" €3/gg ││
│  │                                ││
│  │  [ Usa come modello ]          ││
│  └─────────────────────────────────┘│
│                                     │
│  Oppure configura da zero           │  ← link secondario
│                                     │
└─────────────────────────────────────┘
```

**Revenue link diretto**: "Usa come modello" pre-compila obiettivo + Pilota Automatico + Patti. Un tap e l'utente ha tutto attivo. Riduce la friction di configurazione da 5 step a 1.

**Da dove vengono i dati**: dagli obiettivi completati reali (storico), anonimizzati e aggregati dall'AI Engine. I pattern più comuni per ogni tipo di obiettivo diventano modelli suggeriti. Non serve una redazione.

---

#### Layer B — "Patti collettivi" (social proof invisibile)

Un gruppo di persone fa lo stesso Patto. Non vedono chi sono gli altri, non vedono importi. Vedono solo un numero: quanti hanno confermato oggi.

**Dove vive**: nella card del Patto, come dato aggiuntivo.

```
┌─────────────────────────────────────┐
│  ★ Non ho fumato                    │
│  +€2 su Vacanza in Grecia          │
│                                     │
│  ○○○●●●●●●●●●●○○○○○○○○○○○○        │
│  13 giorni questo mese              │
│                                     │
│  847 persone hanno confermato       │
│  lo stesso Patto oggi               │  ← dato community
│                                     │
│  [■■ Sì, fatto oggi ■■]           │
└─────────────────────────────────────┘
```

Una riga. Nessun profilo. Nessun feed. Nessuna interazione. Solo un numero che dice: "Non sei solo."

**Perché funziona**: è social proof senza confronto diretto. L'utente non compete con nessuno. Sa solo che c'è una comunità invisibile che sta facendo la stessa cosa. Questo è coerente col goal-based perché il Patto resta personale. La differenza con una leaderboard: la leaderboard crea vincitori e perdenti. Il Patto collettivo crea appartenenza.

**Revenue link**: la social accountability aumenta la frequenza di conferma. Più conferme = più micro-depositi giornalieri = più AUM. Studi sulla peer accountability mostrano +15-25% di adesione quando l'utente sa che altri stanno facendo la stessa cosa.

---

#### Layer C — "Obiettivi condivisi" (già proposto, massimo impatto)

Coppie, amici, famiglie che risparmiano per lo stesso obiettivo. Ognuno investe nel proprio account. La progress bar è collettiva. La privacy sugli importi è totale.

**Dove vive**: nel dettaglio obiettivo, come variante della card obiettivo standard.

```
┌─────────────────────────────────────┐
│  Casa al mare                       │
│  Obiettivo condiviso con Marco      │
│                                     │
│  [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░] 58%   │
│  €11.600 / €20.000 · giu 2028      │
│                                     │
│  Il tuo contributo: €6.200          │
│  Contributo di Marco: ████████      │  ← importo nascosto
│                                     │
│  ↻ Pilota: €300/mese (tu)          │
│  ↻ Pilota: attivo (Marco)          │  ← solo stato, no importo
│                                     │
└─────────────────────────────────────┘
```

**Revenue link**: ogni obiettivo condiviso porta almeno un utente nell'app (o riattiva un dormiente). È referral mascherato da feature di prodotto. Ogni partecipante investe nel proprio account — più persone = più AUM, senza costi di acquisizione.

---

### Raccomandazione finale

Non mettere un tab "Community" nella nav. Metti:
- **Storie vere** → dentro il flow di creazione obiettivo
- **Patti collettivi** → nella card del Patto (una riga di dato)
- **Obiettivi condivisi** → nel tab Obiettivi come variante della card

La community non è un posto dove andare. È qualcosa che l'utente sente, ovunque sia nell'app. Un numero. Un modello. Una progress bar condivisa. Niente feed, niente avatar, niente "community manager" — solo dati sociali inseriti nei momenti giusti.

---

## 3. Visualizzazione del progresso: versato vs. rendimento

### Il caso

L'utente ha versato €8.000 su un obiettivo target di €10.000 ("Viaggio in Giappone") tramite un fondo a rischio elevato. Il fondo ha reso +25%, portando il valore a €10.000. L'obiettivo risulta raggiunto al 100% — ma l'utente ha versato solo l'80%. Il restante 20% è rendimento del fondo. Il capitale è completamente esposto alla volatilità: se domani il mercato scende del 12%, il valore torna a €8.800 e l'obiettivo è al 88%.

### Principio: la barra mostra il valore reale, ma la composizione è sempre visibile

La percentuale di completamento è sempre calcolata sul **valore netto attuale** (versato + rendimento - perdite), non sul versato. Se il fondo ha portato il valore al 100%, l'obiettivo è raggiunto. Ma l'utente deve sempre capire **quanta parte è sua e quanta è del mercato**.

### La barra a due segmenti

```
OBIETTIVO IN PROGRESS (versato 80%, mercato +20%)
┌─────────────────────────────────────────────────┐
│  [████████████████████████████████░░░░░░░░░░░░] │
│   ← nero: versato €8.000 (80%) → ← corallo →   │
│                                    +€2.000 (20%)│
└─────────────────────────────────────────────────┘

OBIETTIVO IN PROGRESS (versato 80%, mercato -10%)
┌─────────────────────────────────────────────────┐
│  [████████████████████████████                 ] │
│   ← nero: versato €8.000 →                      │
│   valore attuale: €7.200 (72%)                   │
│   rendimento: -€800                              │
└─────────────────────────────────────────────────┘

OBIETTIVO RAGGIUNTO DAL MERCATO
┌─────────────────────────────────────────────────┐
│  [████████████████████████████████░░░░░░░░░░░░] │
│   ← nero: €8.000 (80%) →  ← corallo: +€2.000 → │
│   100% · €10.000 / €10.000 · Raggiunto          │
└─────────────────────────────────────────────────┘
```

**Segmento nero (pieno)**: quanto l'utente ha versato. Rappresenta il fatto — il denaro messo di tasca propria. Visivamente solido, fisso, affidabile.

**Segmento corallo (tratteggiato o semi-trasparente)**: quanto il mercato ha aggiunto (o tolto). Si estende oltre il nero quando il rendimento è positivo. Si contrae (mangiando parte del nero) quando è negativo. L'utente vede immediatamente: "questa parte si muove."

### Card nella home — tre scenari

**Scenario A: obiettivo in progress, mercato positivo**

```
┌─────────────────────────────────────┐
│  Viaggio in Giappone         85%    │
│                                     │
│  [████████████████████░░░░░░░     ] │
│                                     │
│  €8.500 / €10.000 · dic 2027       │
│  Versato: €7.200 · Rendimento: +€1.300 │
└─────────────────────────────────────┘
```

**Scenario B: obiettivo raggiunto dal mercato (100%)**

```
┌─────────────────────────────────────┐
│  Viaggio in Giappone        100%    │
│                                     │
│  [████████████████████░░░░░░░░░░░░] │
│                                     │
│  €10.000 / €10.000 · Raggiunto     │
│  Versato: €8.000 · Rendimento: +€2.000 │
│                                     │
│  [■■ Riscatta ■■]   Dettagli →     │
└─────────────────────────────────────┘
```

**Scenario C: era al 100%, il mercato è sceso**

```
┌─────────────────────────────────────┐
│  Viaggio in Giappone         88%    │
│                                     │
│  [████████████████████░░░          ] │
│                                     │
│  €8.800 / €10.000                   │
│  Versato: €8.000 · Rendimento: +€800 │
│                                     │
│  Al ritmo attuale, torni al 100%    │
│  entro febbraio 2028.               │
└─────────────────────────────────────┘
```

### Regole di visualizzazione

| Stato | % mostrata | Barra | Copy sotto la barra | CTA |
|-------|-----------|-------|---------------------|-----|
| In progress, mercato positivo | Valore reale / target | Nero (versato) + corallo (rendimento) | "Versato: €X · Rendimento: +€Y" | — |
| In progress, mercato negativo | Valore reale / target | Nero accorciato (il rendimento negativo "mangia" il pieno) | "Versato: €X · Rendimento: -€Y" | — |
| 100% raggiunto (stabile >7gg) | 100% | Nero + corallo che completa | "Raggiunto · Versato: €X · Rendimento: +€Y" | "Riscatta" |
| 100% raggiunto (<7gg, volatile) | 100% | Nero + corallo | "Raggiunto grazie al rendimento. Il valore può variare." | — |
| Era 100%, sceso sotto | Valore reale | Nero + corallo ridotto | "Versato: €X · Rendimento: +€Y · Torni al 100% entro [data]" | — |
| 100% raggiunto solo da versamenti | 100% | Solo nero (pieno) | "Raggiunto · Tutto versato da te" | "Riscatta" |

### Quando proporre il riscatto

**Non immediatamente.** Se l'obiettivo è stato raggiunto dal mercato, il valore può fluttuare. Proporre il riscatto il giorno stesso rischia che l'utente non agisca, il mercato scenda, e l'utente veda il "100%" trasformarsi in "92%" — frustrazione massima.

**Regola**: notifica di riscatto dopo **5 giorni consecutivi sopra il target**. Copy:

```
"Il tuo Viaggio in Giappone è a €10.240 da 5 giorni.
 Hai versato €8.000, il fondo ha aggiunto €2.240.

 Vuoi riscattare e bloccare il risultato?

 [■■ Riscatta €10.240 ■■]
 Continua a far crescere"
```

Se l'utente sceglie "Continua a far crescere", il sistema non ripropone il riscatto per 30 giorni (salvo che il valore scenda sotto il target e poi risalga — in quel caso il ciclo ricomincia).

### Dettaglio obiettivo — vista espansa

```
┌─────────────────────────────────────┐
│  Viaggio in Giappone        100%    │
│                                     │
│  [████████████████████░░░░░░░░░░░░] │
│   80% versato          20% mercato  │
│                                     │
│  COMPOSIZIONE                       │
│  ┌─────────────────────────────────┐│
│  │  Versato da te        €8.000   ││
│  │  Rendimento fondo    +€2.000   ││
│  │  ─────────────────────────────  ││
│  │  Valore attuale      €10.000   ││
│  │  Target              €10.000   ││
│  └─────────────────────────────────┘│
│                                     │
│  Il fondo ha reso +25%              │
│  dall'inizio dell'obiettivo.        │
│                                     │
│  Se continui così                   │
│  ┌─────────────────────────────────┐│
│  │  Tra 5 anni                    ││  ← card effetto composto
│  │  €  14.870,00                  ││     su sfondo corallo
│  │  ↑ aggiornato in tempo reale   ││     chiaro
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

### Nota sul comportamento della barra in caso di perdita

Quando il rendimento è negativo, il segmento corallo non esiste — il nero si accorcia. La barra mostra solo il valore reale, che è inferiore a quanto versato. In questo caso la riga sotto la barra dice:

```
Versato: €8.000 · Rendimento: -€800
Il mercato ha impattato il tuo capitale.
Al ritmo attuale, recuperi entro [data].
```

Il tono è fattuale. Mai allarmista ("perdita!"), mai minimizzante ("tutto ok!"). Il wireframe attuale gestisce bene il downturn nella home (persona 7: "mercati giù, ogni tanto può succedere") — questa stessa filosofia si applica alla barra: il fatto è visibile, il contesto rassicura, la proiezione dà direzione.

---

## 4. Nuove provocazioni

### 4.1 — La scelta del fondo è il più grande punto di attrito invisibile

Durante la creazione obiettivo, all'utente viene chiesto di scegliere un fondo. Il wireframe mostra una lista di card con: abbreviazione, nome del fondo, tipo ("Obbligazionario flessibile · EUR"), rischio (2/7), performance (YTD +3,8%).

**Il problema**: l'utente tipo di GIMME5 versa €50-100 al mese. Non sa cosa sia un obbligazionario flessibile. Non sa interpretare un rischio 2/7. Non sa se +3,8% YTD è buono o cattivo. Mostrare queste informazioni non educa — paralizza. È come mostrare le specifiche del motore a chi sta comprando la prima macchina.

L'evidenza dalla Vision PDF: 455.000 utenti (70%) non hanno un obiettivo. Il flow di creazione è lungo (5 step) e lo step "scegli il fondo" è il più intimidatorio. È lo step in cui l'utente sente di non essere abbastanza competente per prendere una decisione. E chiude l'app.

**Proposta**: eliminare la scelta del fondo dalla creazione obiettivo. Il sistema seleziona automaticamente in base all'orizzonte temporale:

```
Obiettivo: Vacanza in Grecia
Target: €3.000
Data: luglio 2027 (14 mesi)

→ Il sistema seleziona: AcomeA Risparmio (rischio 2/7)
  "Per un obiettivo a 14 mesi, abbiamo scelto un
   fondo a basso rischio. Puoi cambiarlo in qualsiasi
   momento dal dettaglio obiettivo."
```

Chi vuole scegliere il fondo, può farlo dopo — dal dettaglio obiettivo, sezione "Fondo", link "Cambia fondo". Ma il default è: l'app decide per te. Benartzi e Thaler (i creatori del nudge in finanza) hanno dimostrato che il default vince nel 90% dei casi. L'utente che non cambia il fondo non è un utente che non ha scelto — è un utente che ha delegato la scelta. E per un micro-risparmiatore a €75/mese, è la cosa giusta.

**Impatto**: il flow di creazione scende da 5 a 4 step. Lo step più intimidatorio scompare. Il 70% senza obiettivo ha una barriera in meno.

---

### 4.2 — Non esiste il percorso "risparmia ora, obiettivo dopo"

L'app forza un ordine: prima crei l'obiettivo, poi attivi la routine. Ma il dato del 338% dice che chi ha una regola accumula di più — indipendentemente dall'obiettivo. La regola conta più del goal.

Eppure non c'è modo di attivare un Pilota Automatico senza prima creare un obiettivo. L'utente che vuole iniziare subito a risparmiare €50/mese, senza sapere ancora per cosa, è bloccato. Deve inventarsi un obiettivo ("Risparmio generico"?) per sbloccare la routine.

**Proposta**: permettere l'attivazione del Pilota Automatico senza obiettivo. Il denaro va in un "Salvadanaio" generico. Quando l'utente è pronto, assegna il salvadanaio a un obiettivo — o lo divide tra più obiettivi.

```
Onboarding veloce (alternativo):

"Vuoi iniziare a risparmiare
 senza pensarci troppo?"

[■■ Attiva €50/mese ■■]

"Potrai scegliere un obiettivo
 quando ti va. Intanto, i tuoi
 soldi crescono."
```

**Revenue**: questo percorso cattura gli utenti che non hanno un obiettivo ma hanno la volontà di risparmiare. Sono il segmento più grande (70% senza goal). Portarli a versare €50/mese senza obiettivo è meglio che non portarli a versare niente con l'obiettivo.

**Rischio da gestire**: il salvadanaio generico potrebbe ridurre la motivazione a lungo termine (senza goal = senza "perché"). Mitigazione: dopo 30 giorni con salvadanaio attivo, l'AI Engine propone: "Hai risparmiato €50. Per cosa potrebbe essere? [Vacanza] [Casa] [Emergenza]..."

---

### 4.3 — Le notifiche push non sono progettate

La Vision propone un AI Engine con timing personalizzato e contenuti generati dinamicamente. Il wireframe disegna banner e pill in-app. Ma nessuno dei due documenti definisce la strategia push notification:

- **Quante al giorno/settimana?** Senza un cap, l'AI Engine potrebbe spammare. Un utente che riceve 3 push al giorno su un'app di risparmio la disinstalla.
- **Quali sono bloccanti vs. informative?** "Il tuo Pilota Automatico ha versato €100" è informativa (non richiede azione). "Hai resistito oggi?" è bloccante (richiede un tap). Sono due tipi completamente diversi.
- **Qual è il permesso granulare?** L'utente può spegnere le notifiche dei Patti senza perdere quelle del Pilota Automatico? Se no, spegne tutto.
- **Cosa succede quando l'utente ignora 5 push di fila?** L'AI Engine deve interpretare il silenzio. Mandare la sesta è spam. Non mandare più niente è abbandono. Serve una regola di backoff.

**Proposta**: definire 4 categorie di notifica con frequenza massima ciascuna:

| Categoria | Esempio | Frequenza max | Opt-out separato |
|-----------|---------|---------------|------------------|
| **Transazionale** | "Versamento €100 eseguito" | Ogni evento | No (obbligatoria) |
| **Patto** | "Hai resistito oggi?" | 1/giorno | Sì |
| **Motivazionale** | "Sei al 37%, continua così" | 2/settimana | Sì |
| **Educativa** | "Sai cos'è l'effetto composto?" | 1/settimana | Sì |

Regola di backoff: se l'utente non apre 3 push consecutive della stessa categoria, la categoria si mette in pausa per 14 giorni. L'AI Engine non insiste — aspetta.

---

### 4.4 — L'obiettivo non ha un volto

L'obiettivo si chiama "Vacanza in Grecia" e ha un'illustrazione organica generica. Ma la Grecia non c'è da nessuna parte. L'utente non vede una foto del mare, non vede la spiaggia dove vuole andare, non vede la casa che vuole comprare.

Il goal-based investing funziona perché connette il risparmio a un desiderio concreto. Ma se il desiderio resta un nome su uno schermo, la connessione emotiva si indebolisce. Le illustrazioni organiche pesca/corallo sono belle — ma sono le stesse per la vacanza, la casa, l'iPhone e il fondo emergenza.

**Proposta**: permettere all'utente di aggiungere una foto personale all'obiettivo. Non obbligatoria — un'opzione nel dettaglio. La foto della spiaggia in Grecia, la foto della casa su Immobiliare.it, lo screenshot dell'iPhone dal sito Apple.

```
┌─────────────────────────────────────┐
│                                     │
│  ┌─────────────────────────────────┐│
│  │          [foto utente]          ││  ← immagine personale
│  │        spiaggia in Grecia       ││     caricata dall'utente
│  │                                ││
│  │  Vacanza in Grecia       37%   ││
│  │  €1.140 / €3.000 · lug 2027   ││
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

La foto diventa lo sfondo della card obiettivo (con overlay scuro per leggibilità). L'utente apre l'app e vede il suo futuro — non un'illustrazione generica. Questo è il punto dove il risparmio diventa personale.

**Effort basso**: è un campo immagine opzionale. Se l'utente non carica niente, resta l'illustrazione organica di default. Zero rischio, massimo upside emotivo.

---

### 4.5 — Il KYC è l'elefante nella stanza

La Vision PDF lo dice: la review delle 4.232 recensioni mostra che il primo problema è l'onboarding/KYC. "Un mese e mezzo via posta per completare la verifica." Il redirect a Gayadeed con un secondo account e una seconda password è il punto di massima perdita nel funnel.

Il wireframe non ha una singola schermata di KYC. La Vision lo mette in "fase 2". Ma nessuna quantità di gamification, Patti, o AI Engine recupera un utente che ha abbandonato alla verifica identità. Il funnel è rotto a monte. Investire sulla home e sulle routine è come ridipingere il soggiorno quando la porta d'ingresso è bloccata.

Questa non è una provocazione progettuale — è una provocazione strategica. Se la priorità è portare le regole dal 41% al 55%, bisogna prima assicurarsi che gli utenti completino la registrazione. Il dato non è nel PDF, ma la domanda è: quanti dei 650.000 registrati hanno effettivamente completato il KYC? Se il 30% si è bloccato lì, sono 195.000 utenti che non possono nemmeno versare.

**La domanda**: state ottimizzando l'esperienza post-KYC per utenti che forse non hanno mai completato il KYC?

---

### 4.6 — I costi sono invisibili fino al prelievo

Secondo problema dalle recensioni: "Non sapevo delle commissioni finché non ho prelevato." L'informazione esiste (TER nel dettaglio fondo) ma non è nel posto giusto al momento giusto.

Il wireframe mostra il TER nella scheda fondo dentro Esplora. L'utente medio non apre mai Esplora. La commissione lo colpisce al prelievo — il momento di massima frustrazione possibile. Non perché il costo sia alto, ma perché è una sorpresa. Le sorprese negative su questioni di denaro distruggono la fiducia.

**Proposta**: tre interventi di trasparenza.

**a) Nel flow di creazione obiettivo**, dopo la selezione (o auto-selezione) del fondo:
```
"Il fondo AcomeA Risparmio ha un costo annuo
 dello 0,95% (TER). Su €3.000, circa €28/anno.
 È già incluso nella performance che vedi."
```

**b) Nel dettaglio obiettivo**, una riga sempre visibile:
```
Costo fondo: 0,95%/anno · €8,40 quest'anno (dedotto automaticamente)
```

**c) Nel flow di prelievo**, prima della conferma:
```
Importo richiesto: €500
Importo che ricevi: €500
(Nessuna commissione di prelievo. Il costo del fondo
 è già stato dedotto dalla performance mostrata.)
```

L'utente non deve mai scoprire un costo — deve sempre saperlo prima. La trasparenza non riduce i versamenti. La sorpresa sì.

---

### Riepilogo provocazioni

| # | Tema | Domanda chiave |
|---|------|----------------|
| 4.1 | Scelta fondo | Perché un micro-risparmiatore a €75/mese deve scegliere un fondo? |
| 4.2 | Risparmio senza goal | Perché non si può attivare una routine senza obiettivo? |
| 4.3 | Push notifications | Chi ha definito la strategia push? Quante al giorno? Quando smettere? |
| 4.4 | Foto obiettivo | Perché la Vacanza in Grecia non ha un volto? |
| 4.5 | KYC | Quanti dei 650.000 registrati hanno completato il KYC? |
| 4.6 | Trasparenza costi | L'utente scopre le commissioni al prelievo. Perché? |
