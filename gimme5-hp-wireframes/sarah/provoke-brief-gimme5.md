# Provoke Brief: GIMME5 — Goal-Based Investing + Gamification

> Analisi adversarial del wireframe HP v4 e della Vision Strategy & Design 2026.
> Metodologia: [super-designer/provoke](https://github.com/sarahcorti-PN/super-designer) — interrogazione strategica, evidence-based, anti-retorica.

---

## Cosa ho capito

GIMME5 ha 650.000 utenti. Il 59% non ha una regola automatica. Il 70% non ha un obiettivo. Chi ha una regola accumula il **338% in più**. Il problema non è acquisire utenti — è attivare quelli che ci sono. Il wireframe HP v4 è un **vocabulary visivo di componenti** da cui l'AI Engine pesca e compone homepage dinamiche. Definisce routine automatiche, regole comportamentali (sport, passi, scelte smart), gamification basata su costanza (streaks, badge, leaderboard), ed educational pills adattive per tenure. La Vision propone un AI Engine a 10 componenti per personalizzare timing, contenuti e comunicazione.

Il vocabulary è ricco. Quello che manca sono le regole di composizione, i componenti assenti, e il coraggio di mettere al centro ciò che è davvero differenziante.

---

## Decisioni che sono state prese

1. **Goal-centric IA** — fondi e regole vivono dentro gli obiettivi, non in tab separate. Scelta forte e corretta: il "perché" (obiettivo) avvolge il "come" (fondo) e il "quando" (routine).
2. **Costanza > importo** — leaderboard e social proof misurano frequenza, non cifre. Protezione equity per piccoli risparmiatori.
3. **Soft friction** — prelievi mostrano impatto temporale ("slitterà di 3 mesi"), non bloccano. Cancellazione con type-to-confirm.
4. **Educational pills adattive** — size XL/M/S per tenure. Riduzione progressiva del rumore informativo.
5. **Regole comportamentali** — sport (vittoria = versamento), passi, "scelte smart" (non fumare = investi 2 euro). L'unica cosa genuinamente inedita nel wireframe.

---

## Decisioni che non sono mai state prese

### 1. Streaks e badge sono il pattern di Duolingo. Nessuno ha chiesto se funzionano per il risparmio.

Duolingo insegna una lingua. Saltare un giorno non costa soldi. GIMME5 gestisce denaro reale. Saltare una routine non è un fallimento — è una decisione finanziaria legittima. Uno streak che si rompe perché l'utente ha avuto una spesa imprevista crea **colpa**, non motivazione. L'evidenza: la gamification in finance aumenta il risparmio del 22%, ma quel 22% è sulla regolarità automatica, non sugli streaks manuali. Gli streaks funzionano quando il costo dell'interruzione è zero (lezione di 5 minuti). Quando il costo dell'interruzione è economico, creano ansia.

**La domanda**: lo streak di GIMME5 premia l'utente per aver avuto soldi sufficienti ogni mese? Perché in quel caso premia la ricchezza, non il comportamento.

### 2. La leaderboard contraddice il goal-based.

Il wireframe mostra "Sei nel top 15% degli utenti per risparmio mensile" e "top 24% per costanza". Goal-based investing è personale — il *mio* obiettivo, il *mio* ritmo, la *mia* vacanza. Una leaderboard è competitiva — il mio ranking *contro* gli altri. Queste due filosofie si escludono a vicenda. Research sul goal setting mostra che chi si pone obiettivi personali risparmia 345 euro/anno in più, ma il confronto sociale può inibire chi è sotto la media.

**La domanda**: l'utente al 76esimo percentile (sotto il top 24%) cosa prova? Motivazione o vergogna? La leaderboard aiuta chi è già sopra la media e demotiva chi è sotto. È una feature per il retention dei power user che sacrifica l'attivazione dei dormienti — esattamente il segmento che vale 70M euro di AUM.

### 3. Il vocabulary è ricco, ma mancano le regole di composizione.

Il wireframe è confermato come vocabulary visivo per l'AI Engine. Questo è l'approccio corretto — ma il vocabulary da solo non basta. Mancano tre cose:

**a) Component contract** — ogni componente dovrebbe dichiarare: condizione di attivazione (quando appare), dati richiesti (cosa gli serve), posizione ammessa (dove può stare nella home), priorità rispetto agli altri (cosa vince quando due componenti competono per lo stesso slot). Senza queste regole, l'AI Engine compone a caso o serve a qualcuno definire le regole manualmente per ogni segmento — che è esattamente il lavoro che l'AI Engine doveva automatizzare.

**b) Componenti mutuamente esclusivi** — la pill educativa XL e la pop-up card di re-engagement occupano lo stesso spazio visivo. La greeting personalizzata e il banner del patto competono per l'attenzione nel primo viewport. Quali componenti non possono coesistere? Quali si rafforzano a vicenda? Questo è il manuale di istruzioni che l'AI Engine legge per comporre.

**c) Componenti mancanti** — il vocabulary copre 10 persona-state ma non copre: il referral (nessuna schermata), il primo versamento post-routine (il momento di massima motivazione), il market rally positivo (solo il downturn è disegnato), l'anniversario del primo obiettivo, l'obiettivo raggiunto al 100%, il multi-goal con performance divergenti (un obiettivo va bene, l'altro no). Se l'AI Engine può solo pescare dai componenti esistenti, queste situazioni non avranno una risposta progettata.

### 4. Le regole comportamentali sono l'unica vera innovazione — e sono sepolte.

La regola "Non ho fumato → investi 2 euro" è potentissima. Collega risparmio a identità personale. Non è finanza — è un patto con sé stessi. Ma nel wireframe è un sub-flow (Flow B → B.2 → selezione tipo → configurazione). Tre tap per raggiungere l'unica cosa che nessun competitor ha. Acorn fa round-up. Revolut fa vault. Qapital fa regole automatiche. Nessuno lega il risparmio a un cambiamento comportamentale personale.

**La domanda**: perché la feature più differenziante è la più nascosta?

### 5. Il referral non è nel wireframe.

La Vision identifica il referral come problema critico: 25 euro/utente, 90% non attiva mai una regola. Il wireframe non ha una singola schermata di referral. Nessun flow, nessuna UI, nessun redesign. O è stato rimandato consapevolmente, o è stato dimenticato. In entrambi i casi, è una decisione che vale potenzialmente milioni di euro di acquisizione sprecata che non è stata formalizzata.

### 6. La "Routine" è una parola che nasconde tre concetti diversi.

Nel wireframe "Routine" significa simultaneamente:

- **Versamento automatico ricorrente** (100 euro/mese ogni 1° del mese)
- **Regola evento-based** (vittoria Inter → 10 euro)
- **Scelta comportamentale manuale** (non ho fumato → 2 euro)

Queste tre cose hanno trigger diversi, frequenze diverse, psicologie diverse. L'utente che paga 100 euro/mese non sta facendo la stessa cosa di chi registra "non ho fumato". Chiamarle entrambe "Routine" è un'astrazione prematura che confonde l'utente e impedisce di comunicare il valore specifico di ciascuna.

---

## Evidence Report

| Claim | Evidence | Fonte |
|-------|----------|-------|
| Gamification aumenta risparmio | +22% saving habits in gamified finance apps | [Startup House 2026](https://startup-house.com/blog/gamification-in-financial-services-benefits) |
| Goal setting raddoppia il risparmio | +345 euro/anno per chi usa goal setting | [Gargano & Rossi, UC Riverside](https://economics.ucr.edu/wp-content/uploads/2022/03/3-10-22-Rossi-2.pdf) |
| Default automatici > engagement attivo | Auto-saving plans sono il fattore più rilevante nel cambiare il comportamento | [Philadelphia Fed](https://www.philadelphiafed.org/-/media/frbp/assets/events/2017/consumer-finance/fintech-2017/day-2/does-fintech-affect-household-saving-behavior.pdf) |
| Social layer aumenta engagement | Public usa following anonimo per accountability sociale | [DashDevs 2026](https://dashdevs.com/blog/how-to-build-a-micro-investing-platform/) |
| Streaks creano ansia in contesti finanziari | La rottura di streak in app finanziarie correla con churn, non con ri-attivazione | [Pushwoosh](https://www.pushwoosh.com/blog/decrease-user-churn-rate/) |
| Round-up automatico genera $28/mese senza percezione di sforzo | Acorn/Stash data, card-linking tech | [Growtary 2025](https://growtary.com/2025-micro-investing-apps/) |

---

## Le domande dure

### Per il business

**1. State progettando gamification per l'utente o per la dashboard interna?**

Badge e streak sono metriche facili da tracciare. Ma l'AUM non cresce con i badge — cresce con i versamenti. Ogni meccanismo di gamification deve avere un collegamento diretto a un movimento di denaro. Se un badge non triggera un deposito, è decorazione.

**2. Il target feeling di GIMME5 è mai stato dichiarato?**

Il wireframe oscilla tra tre feeling diversi: "calm control" (mercati giù, tutto ok), "playful challenge" (streaks, badge, top 15%), "warm encouragement" (pills educative, copy affettuoso). Un prodotto non può essere tre cose. Quale scegli determina cosa tagli.

**3. Quanto costa un utente frustrato dallo streak vs. quanto vale un utente motivato dallo streak?**

Se lo streak rompe, l'utente dormiente (59% della base) non torna — sparisce. Lo streak trattiene chi è già attivo. La matematica: retention del 5% del 41% attivo vs. attivazione del 15% del 59% dormiente. La seconda cifra vale 4x in AUM.

### Per il design

**4. Perché la home mostra "Valore totale" come hero metric?**

Il valore totale è una metrica passiva. L'utente la guarda e basta. Una hero metric goal-based sarebbe: "37% del tuo obiettivo — al ritmo attuale arrivi a luglio 2027". Il wireframe ce l'ha nella card obiettivo, ma l'euro-amount in 20px bold vince la gerarchia visiva. Il numero più grande sullo schermo è quello meno azionabile.

---

## Cosa taglierei

### 1. La leaderboard competitiva

Contraddice il goal-based. Sostituirei con **"il tuo ritmo"** — un grafico personale che mostra la regolarità dell'utente nel tempo, senza confronto con altri. L'effetto psicologico ("sto migliorando") è lo stesso, senza il rischio di demotivare il 76% che non è nel top quartile.

### 2. Lo streak numerico

Un contatore che si rompe è una punizione, non una ricompensa. Sostituirei con un **"calendario di consistenza"** — come GitHub contributions. I giorni attivi restano verdi per sempre. Non c'è niente da "rompere". L'utente vede la sua storia, non una serie da mantenere. Il wireframe già accenna a questo (weekly calendar grid nella sezione Traguardi) ma poi lo distrugge mettendoci sopra un contatore "12 giorni" che implica reset.

### 3. Il "Valore totale" come hero element

Retrocedere a metrica secondaria. Al suo posto: la proiezione dell'obiettivo o il patto del giorno. Il numero più grande sullo schermo deve essere quello che spinge un'azione, non quello che si guarda e basta.

---

## Cosa costruirei: le 5 innovazioni che non toccano la revenue

### 1. "Patti con te stesso" come feature primaria, non sub-flow

Le regole comportamentali (smettere di fumare, fare sport, resistere a un acquisto impulsivo) sono l'unico meccanismo di gamification che:

- È legato a un versamento reale (ogni trigger = micro-deposito → +AUM)
- Non esiste in nessun competitor (differenziazione totale)
- Crea identità, non competizione ("sto diventando la persona che...")
- Ha un ciclo di feedback giornaliero (alta frequenza di interazione)

**Proposta**: i "Patti" diventano un pilastro della home, non un sotto-menu delle routine. L'utente vede il suo patto del giorno direttamente nella greeting section. "Hai resistito oggi? +2 euro su Vacanza in Grecia". Un tap. Non tre.

**Revenue impact**: ogni patto attivato è un micro-deposito automatico. Un utente con 1 patto attivo a 2 euro/giorno versa 60 euro/mese. Con 3 patti: 180 euro/mese. Senza sentirlo. I round-up automatici generano $28/mese; i patti possono generare 2-6x di più perché sono volontari e identitari.

### 2. Obiettivi condivisi (senza rivelare importi)

Nessuna app di micro-investimento ha obiettivi di coppia o di gruppo. GIMME5 potrebbe permettere:

- **Coppia** che risparmia per la casa → entrambi vedono la % di progresso, non chi ha versato quanto
- **Amici** che risparmiano per un viaggio → ognuno contribuisce al proprio ritmo
- **Genitore** che co-risparmia con il figlio

**Perché non causa perdita revenue**: ogni partecipante investe nel proprio account. L'obiettivo condiviso è solo una visualizzazione aggregata. Più persone attive = più AUM. La social accountability aumenta il saving del 20%+.

**Perché è inedito**: Revolut ha shared vault (conto comune). Questo è diverso — ogni persona ha il proprio fondo, ma la progress bar è collettiva. La privacy è totale, la motivazione è sociale.

### 3. "Effetto composto visibile" invece di badge

I badge sono gratificazione istantanea. L'investimento è gratificazione differita. Queste psicologie si contraddicono. Proposta alternativa: rendere visibile l'effetto composto in tempo reale.

> "Se continui così, tra 5 anni i tuoi 50 euro/mese saranno diventati 3.847 euro — di cui 847 regalati dal mercato."

Non un numero statico. Un **contatore che cresce in tempo reale** nella home, come il "debt clock" ma in positivo. L'utente apre l'app e vede il suo futuro crescere di qualche centesimo ogni secondo. Ipnotico. Motivante. Unico.

**Revenue**: l'utente che visualizza il compound effect ha meno probabilità di prelevare (il prelievo "rompe" la proiezione) e più probabilità di aumentare la routine.

### 4. "Routine Intelligente" con importo elastico

Invece di 100 euro/mese fissi, l'AI Engine propone importi variabili basati sul comportamento reale:

> "Questo mese hai speso meno del solito. Vuoi versare 130 euro invece di 100? Arrivi alla casa 2 mesi prima."

Oppure il contrario:

> "Mese difficile? Versa 70 euro invece di 100. Il tuo obiettivo slitta di 8 giorni, non di un mese."

**Perché non causa churn**: l'utente che ha un mese difficile non deve scegliere tra "pago la routine e sto stretto" e "pauso la routine e rompo lo streak". L'importo si adatta. I default automatici adattivi sono il fattore più efficace nel mantenere il saving behavior.

**Revenue**: meno pause = meno churn = più AUM costante. Un utente che versa 70 euro in un mese difficile vale infinitamente più di un utente che pausa e non torna.

### 5. Referral condizionato all'attivazione, con visibilità bidirezionale

Il referral attuale costa 25 euro e il 90% non attiva una regola. Proposta:

- Il bonus si sblocca quando l'invitato **attiva la prima routine** (non alla registrazione)
- L'invitante vede lo stato dell'invitato: "Marco si è registrato → Marco ha creato un obiettivo → Marco ha attivato la routine → Bonus sbloccato!"
- Il bonus non è cash ma un **boost al proprio obiettivo**: +25 euro versati automaticamente sull'obiettivo dell'invitante

**Revenue**: il costo di acquisizione resta 25 euro ma ora ogni euro genera AUM (il bonus va nel fondo, non in un buono Amazon). L'invitante è motivato a fare follow-up ("Marco, hai attivato?"). L'invitato ha un motivo per completare. Win-win-win.

---

## Come ridisegnare l'app: consigli concreti

### Linguaggio visivo di riferimento

La grafica attuale stabilisce un sistema a due zone:
- **Header/greeting**: sfondo scuro (#111), testo bianco, illustrazioni organiche pesca/corallo, tab "Obiettivi" / "Portafoglio"
- **Content area**: sfondo bianco/grigio chiaro, testo nero, card bianche con bordi grigi sottili
- **Pill educativa**: sfondo arancione/corallo pieno, testo scuro, illustrazioni organiche grandi
- **CTA primarie**: sfondo nero pieno, testo bianco
- **CTA secondarie**: outline nere o link sottili
- **Progress bar**: nere su sfondo chiaro
- **Tipografia**: sans-serif pulita, gerarchia per peso e dimensione (non per opacità)

Le proposte seguenti rispettano questo sistema e lo estendono.

---

### A. Ridefinire l'architettura della Home

La home attuale ha questa gerarchia implicita:

```
1. Greeting (testo)
2. Valore totale (hero — 20px bold)
3. Card obiettivo (progress + dettagli)
4. Card routine (stato + prossimo versamento)
5. Pill educativa (variabile per tenure)
6. CTA (versamento / attivazione)
```

**La home dovrebbe avere questa gerarchia:**

```
1. Patto del giorno / azione immediata (hero — primo viewport)
   "Hai resistito oggi? +€2 su Vacanza in Grecia" [Sì ✓]
   Oppure: "La tua routine versa domani €100. Tutto ok?" [Ok / Modifica]

2. Proiezione obiettivo (hero metric — non il valore totale)
   "Vacanza in Grecia — 37% — arrivi a luglio 2027"
   Progress bar con effetto mercato sovrapposto

3. Valore totale (secondario — metrica di contesto, non focale)
   €1.140 · +€3,20 effetto mercato

4. Routine attive (stato compatto)
   Tre tipi separati visivamente:
   ↻ Automatica: €100/mese · prossimo 1 maggio
   ⚡ Evento: €10 a ogni vittoria Inter
   ★ Patto: "Non ho fumato" · 13 giorni · +€26

5. Componente contestuale (slot AI Engine)
   Pill educativa / nudge attivazione / social moment / market context
   Uno solo per volta. Mai due. L'AI Engine decide quale.
```

**Perché questo ordine**: il primo viewport deve contenere un'azione, non un'informazione. L'utente apre l'app e ha qualcosa da fare, non qualcosa da guardare. Il valore totale scende perché non guida nessun comportamento — è un dato che l'utente consulta, non che lo spinge ad agire.

---

### B. Spacchettare "Routine" in tre concetti con nome e UI propri

La parola "Routine" è un contenitore generico. Tre proposte di naming e trattamento visivo distinto:

| Concetto | Nome proposto | Icona | Frequenza | Trigger | UI nella home |
|----------|---------------|-------|-----------|---------|---------------|
| Versamento automatico | **Pilota automatico** | ↻ | Mensile/settimanale | Calendario | Badge compatto con importo e data prossima |
| Regola evento | **Trigger** | ⚡ | Variabile | Evento esterno (sport, mercato) | Card con ultimo evento e prossimo atteso |
| Scelta comportamentale | **Patto** | ★ | Giornaliera | Azione manuale dell'utente | Card interattiva con bottone "Fatto oggi" |

Ogni tipo ha la sua card con visual language distinto. L'utente capisce immediatamente la differenza tra "il sistema versa per me" (pilota automatico), "succede qualcosa e il sistema versa" (trigger) e "io faccio qualcosa e verso" (patto).

Nel [+] bottom sheet, la sezione "Aggiungi regola" diventa tre voci esplicite:

```
Cosa vuoi fare?

↻  Pilota automatico
   Versa una cifra fissa ogni mese

⚡  Trigger
   Versa quando succede qualcosa (sport, passi, date)

★  Patto con te stesso
   Versa quando mantieni un impegno personale
```

---

### C. Ridisegnare il sistema di composizione per l'AI Engine

Il vocabulary ha bisogno di un **component manifest** — un documento che l'AI Engine legge per decidere cosa mostrare. Per ogni componente del vocabulary, servono queste proprietà:

```yaml
component: patto-del-giorno
slot: hero-action
priority: 95
condition: user.patti.active > 0 AND NOT patto.registrato_oggi
conflicts_with: [nudge-attivazione-routine, greeting-re-engagement]
requires_data: [patto.nome, patto.importo, obiettivo.nome]
fallback: greeting-standard
```

```yaml
component: nudge-attivazione-routine
slot: hero-action
priority: 90
condition: user.routine.count == 0 AND user.days_since_signup > 1
conflicts_with: [patto-del-giorno]
requires_data: [user.nome, dato_338_percento]
fallback: null
```

```yaml
component: pill-educativa
slot: contextual
priority: 60
condition: NOT user.has_dismissed_pill_today
conflicts_with: [market-context-card, social-moment]
requires_data: [user.tenure_days, pill.content]
size: XL if tenure < 30, M if tenure < 90, S if tenure >= 90
fallback: null
```

**Regola fondamentale**: ogni slot ha al massimo un componente. Se due componenti competono per lo stesso slot, vince quello con priorità più alta la cui condizione è vera. L'AI Engine può sovrascrivere le priorità base in funzione di ciò che impara — ma parte da qui.

**Slot della home** (dall'alto verso il basso):

| Slot | Funzione | Componenti possibili |
|------|----------|---------------------|
| `greeting` | Saluto + micro-contesto | greeting-standard, greeting-re-engagement, greeting-milestone |
| `hero-action` | Azione primaria del giorno | patto-del-giorno, nudge-attivazione, routine-tomorrow-confirm |
| `goal-progress` | Stato obiettivo principale | obiettivo-card (sempre presente se esiste un goal) |
| `portfolio-summary` | Valore + effetto mercato | valore-totale (sempre presente, ruolo secondario) |
| `routines-status` | Stato delle tre routine | pilota-card, trigger-card, patto-card (uno per tipo attivo) |
| `contextual` | Slot variabile AI Engine | pill-educativa, market-context, social-moment, referral-nudge |
| `cta-primary` | Azione principale mancante | crea-obiettivo, attiva-routine, versa (solo se manca un pezzo) |

---

### D. Componenti mancanti da aggiungere al vocabulary

Il vocabulary attuale copre bene le situazioni negative (dormiente, pausa, mercato giù) ma non copre quelle positive e i momenti di transizione. Componenti da progettare:

**1. Obiettivo raggiunto (100%)**
Il momento più importante nella vita dell'utente su GIMME5 — e non è disegnato. Servono: celebrazione (non un toast — un momento pieno schermo), recap del percorso ("Ci hai messo 14 mesi, hai versato 36 volte, il mercato ti ha regalato €340"), e CTA naturale ("Il prossimo obiettivo?"). Questo è il miglior momento per proporre un secondo goal.

**2. Market rally positivo**
Il wireframe disegna solo il downturn (persona 7). Ma il rally è un'opportunità: "Il mercato è salito del 3% questa settimana. La tua Vacanza in Grecia è al 41% — una settimana fa era al 38%." Questo rinforza la decisione di restare investiti e motiva l'utente a raccontarlo (viralità organica).

**3. Referral dashboard**
Schermata dedicata nel profilo: lista invitati, stato di ciascuno (registrato / obiettivo creato / routine attiva / bonus sbloccato), CTA per reinvitare chi si è bloccato. Il referral diventa un mini-gioco di mentoring, non una lista di link inviati.

**4. Primo versamento post-routine**
Il giorno in cui la prima routine esegue il primo versamento automatico è il momento di massimo rinforzo positivo. L'utente non ha fatto niente — e il sistema ha versato per lui. Componente dedicato: "Il tuo Pilota Automatico ha versato €100. Senza muovere un dito, sei al 3% della tua Casa." Se questo momento passa in silenzio, si perde l'occasione di ancorare l'abitudine.

**5. Anniversario e milestone temporali**
"Oggi è un anno che risparmi con GIMME5. In 12 mesi hai versato €1.200 e il mercato ti ha aggiunto €87." Non è un badge — è un fatto. I fatti motivano più dei premi.

**6. Multi-goal con performance divergenti**
L'utente con due obiettivi di cui uno va bene e l'altro no. Il wireframe mostra solo il caso "tutto bene". Serve un componente che gestisca: "Olimpiadi 2027 è in anticipo di 2 mesi. Anticipo Casa è in ritardo di 4. Vuoi ribilanciare la routine?"

---

### E. Declinazione schermate nel linguaggio visivo attuale

Il sistema grafico attuale è **light mode a due zone**: header scuro (#111) con testo bianco e illustrazioni pesca/corallo nella parte alta, content area bianca con testo nero, card bianche con bordi grigi sottili, pill arancione/corallo con testo scuro, CTA nere piene. Le proposte seguenti usano questo sistema.

---

#### E.1 — HOME: Utente con Patto attivo + obiettivo + Pilota Automatico

```
┌─────────────────────────────────────┐
│  10:06                              │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← ZONA HEADER (#111)
│                                     │
│  Filippo, hai fatto il             │  ← testo bianco
│  tuo patto oggi?                    │
│                                     │
│  Nessun obiettivo impostato         │  ← 8px #aaa (se assente)
│                                     │
│  ┌──────────────┐ ┌──────────────┐  │  ← tab pill nel header
│  │  Obiettivi   │ │ Portafoglio  │  │     come attuale
│  └──────────────┘ └──────────────┘  │
│                                     │
│  ◎ ◎ ◎                             │  ← illustr. organiche
│  pesca/corallo                      │     nel header scuro
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
├─────────────────────────────────────┤  ← ZONA CONTENT (bianca)
│                                     │
│  ★ Non ho fumato                    │  ← card patto: sfondo
│  ┌─────────────────────────────────┐│     bianco, bordo 1px
│  │  +€2 su Vacanza in Grecia      ││     corallo (#E8825A)
│  │                                ││
│  │  ○○○●●●●●●●●●●○○○○○           ││  ← calendario mese
│  │  13 giorni questo mese         ││     ● = corallo pieno
│  │                                ││     ○ = #e0e0e0
│  │  [■■■ Sì, fatto oggi ■■■]     ││  ← CTA nera piena
│  └─────────────────────────────────┘│
│                                     │
│  Vacanza in Grecia                  │  ← 12px bold nero
│  ┌─────────────────────────────────┐│
│  │  [▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░] 37%  ││  ← progress bar nera
│  │  €1.140 / €3.000 · lug 2027   ││     su sfondo #e8e8e8
│  │  +€3,20 effetto mercato        ││  ← 8px #888
│  └─────────────────────────────────┘│
│                                     │
│  Valore totale                      │  ← 8px uppercase #888
│  €1.140,00                          │  ← 14px bold nero
│  Ultimo movimento: +€50,00          │  ← 8px #888
│                                     │
│  Le tue routine                     │  ← 9px uppercase #888
│  ┌─────────────────────────────────┐│
│  │ ↻  Pilota automatico           ││  ← card bianca
│  │    €100/mese · prossimo 1 mag  ││     bordo 1px #e0e0e0
│  │    Attivo                       ││  ← chip nero pieno 7px
│  ├─────────────────────────────────┤│
│  │ ⚡  Trigger Sport               ││  ← divider #e0e0e0
│  │    €10 a vittoria Inter        ││
│  │    Ultima: 20 apr · +€10       ││
│  ├─────────────────────────────────┤│
│  │ ★  Patto: Non ho fumato        ││  ← bordo corallo 1px
│  │    13 gg · totale +€26         ││     (#E8825A)
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│  ← pill corallo (M)
│  │  La costanza batte la           ││     sfondo #E8825A
│  │  fortuna. Con €100/mese  ◎     ││     testo #111
│  │  arrivi a €3.000 in            ││     illustr. organica
│  │  2 anni e mezzo.               ││     angolo dx
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│  [Home]  [Obiettivi]  [+]  [Profilo]│  ← nav 4 elementi
└─────────────────────────────────────┘
```

**Cosa cambia rispetto all'attuale**:
- Il **Patto** è il primo elemento nella content area — non sepolto in un sub-flow
- Il **calendario di consistenza** sostituisce lo streak numerico (pallini corallo, nessun contatore)
- Il **valore totale scende a 14px** e diventa contesto, non hero
- La **proiezione temporale** ("lug 2027") è nella card obiettivo, non nascosta
- Le **tre routine** hanno icone e bordi distinti (↻ neutro, ⚡ neutro, ★ corallo)
- La **nav passa a 4 elementi** (senza Esplora)

---

#### E.2 — HOME: Utente nuovo, nessuna routine, nessun obiettivo (Caso C attuale)

```
┌─────────────────────────────────────┐
│  10:06                              │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← ZONA HEADER (#111)
│                                     │
│  Filippo, il tuo Gimme             │  ← testo bianco
│  ricorrente è attivo, manca        │
│  solo una cosa                      │
│                                     │
│  Nessun obiettivo impostato         │
│                                     │
│  ┌──────────────┐ ┌──────────────┐  │
│  │  Obiettivi   │ │ Portafoglio  │  │
│  └──────────────┘ └──────────────┘  │
│                                     │
│  ◎ ◎ ◎                             │  ← illustr. pesca/corallo
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
├─────────────────────────────────────┤  ← ZONA CONTENT (bianca)
│                                     │
│       0,00€                         │  ← 20px bold nero
│                                     │
│  ┌─────────────────────────────────┐│  ← card hero: sfondo
│  │                                ││     bianco, bordo 2px
│  │  Chi risparmia in automatico   ││     nero (enfasi)
│  │  accumula il 338% in più.      ││  ← 14px bold nero
│  │                                ││
│  │  Non è magia. È costanza.      ││  ← 9px #888
│  └─────────────────────────────────┘│
│                                     │
│  Per cosa vuoi risparmiare?         │  ← 11px bold nero
│                                     │
│  ┌──────────┐  ┌──────────┐        │  ← grid 2 colonne
│  │  Vacanza │  │  Casa    │        │     card bianche
│  └──────────┘  └──────────┘        │     bordo #e0e0e0
│  ┌──────────┐  ┌──────────┐        │     tap → flow A
│  │  Fondo   │  │  Tech    │        │
│  │  emerg.  │  │          │        │
│  └──────────┘  └──────────┘        │
│  ┌──────────┐  ┌──────────┐        │
│  │  Regalo  │  │  Altro   │        │
│  └──────────┘  └──────────┘        │
│                                     │
│  [■■ Crea il tuo obiettivo ■■]     │  ← CTA nera piena
│                                     │
│  ┌─────────────────────────────────┐│  ← pill XL corallo
│  │  Chi ci vede lungo              ││     sfondo #E8825A
│  │  guadagna di più.               ││     testo #111
│  │                                ││
│  │  Sapevi che chi crea       ◎   ││     illustr. organica
│  │  un obiettivo risparmia        ││     grande (70px)
│  │  il 30% in più?                ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│  [Home]  [Obiettivi]  [+]  [Profilo]│
└─────────────────────────────────────┘
```

**Cosa cambia rispetto al Caso C attuale**:
- Il **dato 338%** è in una card con bordo forte, visibile subito sotto il valore
- I **template obiettivo** sono in grid nella home — l'utente sceglie, non inventa
- La **pill educativa corallo** rinforza con un dato diverso (30%), non duplica il 338%
- L'utente ha **un tap** per scegliere un template e entrare nel flow A

---

#### E.3 — HOME: Utente dormiente, 60+ giorni assente

```
┌─────────────────────────────────────┐
│  10:06                              │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← ZONA HEADER (#111)
│                                     │
│  Ciao Filippo,                      │  ← testo bianco
│  63 giorni. Per essere precisi.     │
│                                     │
│  ◎ ◎                               │  ← illustr. pesca
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
├─────────────────────────────────────┤  ← ZONA CONTENT (bianca)
│                                     │
│  ┌─────────────────────────────────┐│  ← pop-up card
│  │  Il tuo piano ha               ││     sfondo bianco
│  │  lavorato per te.              ││     bordo 2px nero
│  │                                ││
│  │  Hai messo da parte €90        ││  ← 12px bold nero
│  │  senza muovere un dito.        ││
│  │  Sei al 37%.                   ││
│  │                                ││
│  │  Con €10/mese arrivi al        ││  ← 9px #888
│  │  100% a luglio.                ││
│  │                                ││
│  │  [■■■ Continua così ■■■]      ││  ← CTA nera piena
│  └─────────────────────────────────┘│
│                                     │
│  Vacanza in Grecia                  │
│  ┌─────────────────────────────────┐│
│  │  [▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░] 37%  ││  ← progress bar nera
│  │  €205 / €3.000 · lug 2027     ││
│  │  +€3,20 effetto mercato        ││
│  └─────────────────────────────────┘│
│                                     │
│  Valore totale                      │
│  €205,00                            │
│                                     │
│  Il tuo Pilota Automatico           │
│  ┌─────────────────────────────────┐│
│  │ ↻  €100/mese · In pausa       ││  ← chip "In pausa"
│  │    da 60 giorni                ││     bordo tratteggiato
│  │                                ││
│  │  [ Riattiva ]                  ││  ← CTA outline nera
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│  ← pill M corallo
│  │  Una pausa fa bene a te,  ◎    ││     sfondo #E8825A
│  │  un po' meno ai tuoi           ││     testo #111
│  │  risparmi.                     ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│  [Home]  [Obiettivi]  [+]  [Profilo]│
└─────────────────────────────────────┘
```

---

#### E.4 — HOME: Obiettivo raggiunto 100% (componente nuovo)

```
┌─────────────────────────────────────┐
│  10:06                              │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← HEADER (#111) espanso
│                                     │     occupa metà schermo
│                                     │     per il momento
│        ◎ ◎ ◎ ◎ ◎                   │     celebrativo
│     forme organiche                 │
│     pesca/corallo grandi (80px+)    │  ← illustrazioni
│     animate lente                   │     protagoniste
│                                     │
│     Vacanza in Grecia               │  ← 18px bold bianco
│          100%                       │  ← 28px bold bianco
│                                     │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
├─────────────────────────────────────┤  ← ZONA CONTENT (bianca)
│                                     │
│  Ci hai messo 14 mesi.             │  ← 11px nero centrato
│  Hai versato 36 volte.             │
│  Il mercato ti ha                  │
│  regalato €340.                     │
│                                     │
│                                     │
│  [■■ Il prossimo obiettivo? ■■]    │  ← CTA nera piena
│                                     │
│  Torna alla Home                    │  ← link 9px #888
│                                     │
└─────────────────────────────────────┘
```

**Note**: l'header scuro si espande a metà schermo per dare spazio alle illustrazioni. È il momento più importante sulla app — merita un trattamento full. Il recap nella zona bianca è fattuale. La CTA primaria è il prossimo obiettivo.

---

#### E.5 — ONBOARDING: 5 schermate nello stile attuale

```
SCHERMATA 1                          SCHERMATA 2
┌───────────────────────┐            ┌───────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░│ ← #111    │                       │  ← bianco
│                       │            │  Per cosa stai        │  ← nero
│    ◎ ◎ ◎              │ ← pesca   │  risparmiando?        │
│  illustrazioni        │            │                       │
│  organiche grandi     │            │  ┌────────┐┌────────┐ │  ← card
│                       │            │  │Vacanza ││ Casa   │ │    bianche
│  Chi risparmia in     │ ← bianco  │  └────────┘└────────┘ │    bordo
│  automatico           │   18px    │  ┌────────┐┌────────┐ │    grigio
│  accumula il          │            │  │Fondo   ││ Tech   │ │
│  338% in più.         │            │  │emerg.  ││        │ │
│                       │            │  └────────┘└────────┘ │
│  Non è magia.         │ ← #aaa   │  ┌────────┐┌────────┐ │
│  È costanza.          │   10px    │  │Regalo  ││ Altro  │ │
│                       │            │  └────────┘└────────┘ │
│░░░░░░░░░░░░░░░░░░░░░░│            │                       │
│                       │ ← bianco  │  [■■ Continua ■■]     │  ← CTA nera
│ [■ Mostrami come → ■] │ ← CTA    │                       │
│                       │   nera    │                       │
└───────────────────────┘            └───────────────────────┘

SCHERMATA 3                          SCHERMATA 4
┌───────────────────────┐            ┌───────────────────────┐
│                       │ ← bianco  │                       │  ← bianco
│  Quanto vuoi mettere  │ ← nero    │  Attiva il Pilota     │
│  da parte ogni mese?  │            │  Automatico           │
│                       │            │                       │
│        €75            │ ← 24px    │  ┌───────────────────┐ │  ← card
│                       │   bold    │  │ ↻                 │ │    bianca
│  ───●─────────────    │ ← slider  │  │ €75/mese          │ │    bordo
│  €25            €500  │   nero    │  │ ogni 1° del mese  │ │    grigio
│                       │            │  │                   │ │
│  Con €75/mese arrivi  │ ← 9px    │  │ Prossimo:         │ │
│  a €3.000 in 3 anni   │   #888   │  │ 1 giugno 2026     │ │
│  e 4 mesi.            │            │  └───────────────────┘ │
│                       │            │                       │
│  [■■ Continua ■■]     │ ← CTA    │  [■ Attiva · €75/mese ■]│ ← CTA nera
│                       │   nera    │                       │
│                       │            │  Salta per ora        │  ← link
│                       │            │  ← 8px #888           │    grigio
└───────────────────────┘            └───────────────────────┘

SCHERMATA 5
┌───────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░│  ← #111
│                       │
│      ◎                │  ← illustrazione
│   pesca/corallo       │     grande
│                       │
│░░░░░░░░░░░░░░░░░░░░░░│
│                       │  ← bianco
│  Fatto.               │  ← 18px bold nero
│                       │
│  Il tuo primo         │  ← 10px #888
│  versamento parte     │
│  il 1° giugno.        │
│                       │
│  Da qui in poi,       │
│  il Pilota Automatico │
│  lavora per te.       │
│                       │
│  [■■ Vai alla Home ■■]│  ← CTA nera piena
│                       │
└───────────────────────┘
```

**5 schermate. Un minuto. L'utente esce con un obiettivo e una routine attiva.**

---

#### E.6 — PROFILO: Sezione Traguardi (ridisegnata)

```
┌─────────────────────────────────────┐
│  ←  I tuoi traguardi                │  ← sfondo bianco
├─────────────────────────────────────┤
│                                     │
│  Il tuo ritmo                       │  ← 12px bold nero
│                                     │
│  ┌─────────────────────────────────┐│  ← card bianca
│  │  Aprile 2026                   ││     bordo #e0e0e0
│  │                                ││
│  │  L  M  M  G  V  S  D          ││  ← calendario mese
│  │  ●  ●  ●  ○  ●  ○  ○          ││     ● = corallo pieno
│  │  ●  ●  ○  ●  ●  ○  ○          ││     ○ = #e8e8e8
│  │  ●  ●  ●  ●  ●  ○  ●          ││     nessun contatore
│  │  ●  ●  ●  ◌  ◌  ◌  ◌          ││     ◌ = futuro (outline)
│  │                                ││
│  │  19 giorni attivi su 25        ││  ← 9px #888
│  └─────────────────────────────────┘│
│                                     │
│  I tuoi fatti                       │  ← 12px bold nero
│                                     │
│  ┌─────────────────────────────────┐│  ← card bianca
│  │  Prima routine attivata        ││     bordo #e0e0e0
│  │  12 febbraio 2026              ││     lista fatti
│  ├─────────────────────────────────┤│     non badge
│  │  Primo obiettivo creato        ││
│  │  10 febbraio 2026              ││
│  ├─────────────────────────────────┤│
│  │  30 giorni con routine attiva  ││
│  │  14 marzo 2026                 ││
│  ├─────────────────────────────────┤│
│  │  €500 versati in totale        ││
│  │  2 aprile 2026                 ││
│  ├─────────────────────────────────┤│
│  │  100 giorni su GIMME5          ││  ← prossimo milestone
│  │  21 maggio 2026 (tra 26 gg)   ││
│  │  [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░] 74%  ││  ← progress bar nera
│  └─────────────────────────────────┘│
│                                     │
│  Invita un amico                    │  ← 12px bold nero
│                                     │
│  ┌─────────────────────────────────┐│  ← card bianca
│  │  Hai invitato 2 persone        ││     bordo #e0e0e0
│  │                                ││
│  │  Marco · registrato · ⏳       ││  ← stato: in attesa
│  │  Anna  · routine attiva · ✓   ││  ← stato: bonus ok
│  │         +€25 su Casa al mare   ││     boost ricevuto
│  │                                ││
│  │  [■■ Invita qualcuno ■■]      ││  ← CTA nera piena
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│  [Home]  [Obiettivi]  [+]  [Profilo]│
└─────────────────────────────────────┘
```

**Cosa cambia rispetto alla sezione Traguardi attuale**:
- **Niente streak numerico** — il calendario parla da solo. I pallini corallo restano per sempre.
- **"Fatti" invece di "Badge"** — ogni milestone è una data, non un trofeo.
- **Il prossimo milestone** ha una progress bar sottile — motivazione senza ansia.
- **Il referral** è qui, nel profilo, con stato visibile di ogni invitato.
- **Niente leaderboard** — il calendario personale e i fatti sono sufficienti.

---

#### E.7 — BOTTOM SHEET [+]: Tre tipi di routine

```
┌─────────────────────────────────────┐  ← sfondo bianco
│                                     │
│  ─────  (handle bar)                │
│                                     │
│  Cosa vuoi fare?                    │  ← 14px bold nero
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ✦  Crea un nuovo obiettivo    ││  ← card bianca
│  │     Scegli nome, target, fondo ││     bordo 2px nero
│  └─────────────────────────────────┘│     (primaria)
│                                     │
│  Aggiungi una regola                │  ← 10px bold #888
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ↻  Pilota automatico          ││  ← card bianca
│  │     Versa una cifra fissa      ││     bordo #e0e0e0
│  │     ogni mese                  ││
│  ├─────────────────────────────────┤│
│  │  ⚡  Trigger                    ││  ← divider #e0e0e0
│  │     Versa quando succede       ││
│  │     qualcosa (sport, passi,    ││
│  │     date speciali)             ││
│  ├─────────────────────────────────┤│
│  │  ★  Patto con te stesso        ││  ← bordo corallo 1px
│  │     Versa quando mantieni      ││     #E8825A (distinto)
│  │     un impegno personale       ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌────────────────┬────────────────┐│
│  │  ↓ Preleva     │  ↑ Versa      ││  ← coppia CTA
│  │  (outline nera)│  (outline nera)││     8px, flex 1:1
│  └────────────────┴────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

---

#### E.8 — DETTAGLIO OBIETTIVO: Con effetto composto live

```
┌─────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← HEADER (#111)
│  ← Obiettivi                        │
│                                     │
│        ◎ illustrazione              │  ← organica pesca
│        obiettivo, 64px              │
│                                     │
│  Vacanza in Grecia                  │  ← 14px bold bianco
│  37%                                │  ← 18px bold bianco
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
├─────────────────────────────────────┤  ← ZONA CONTENT (bianca)
│                                     │
│  €1.140 / €3.000 · lug 2027        │  ← 10px nero
│  [▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░]       │  ← progress bar nera
│  ╌╌╌╌ effetto mercato +€3,20       │     tratteggio overlay
│                                     │
│  Se continui così                   │  ← 11px bold nero
│  ┌─────────────────────────────────┐│
│  │  Tra 5 anni                    ││  ← card sfondo
│  │  €  4.287,00                   ││     corallo chiaro
│  │  ↑ aggiornato in tempo reale   ││     (#FFF0E8)
│  │                                ││     testo nero
│  │  di cui €1.287 regalati        ││  ← contatore live
│  │  dal mercato                   ││
│  └─────────────────────────────────┘│
│                                     │
│  Fondo                              │  ← 9px uppercase #888
│  ┌─────────────────────────────────┐│
│  │  AcomeA Performance            ││  ← card bianca
│  │  Obbligazionario globale misto ││     bordo #e0e0e0
│  │  EUR · Rischio 3/7             ││
│  │  +€125 · +5,1% dall'inizio    ││
│  └─────────────────────────────────┘│
│                                     │
│  Le tue routine                     │  ← 9px uppercase #888
│  ┌─────────────────────────────────┐│
│  │  ↻  Pilota automatico          ││  ← card bianca
│  │     €100/mese · ogni 1°        ││     bordo #e0e0e0
│  │     Prossimo: 1 maggio · Attivo││
│  ├─────────────────────────────────┤│
│  │  ★  Patto: Non ho fumato       ││  ← bordo corallo
│  │     +€2/giorno · 13 gg         ││
│  │     Totale: +€26               ││
│  ├─────────────────────────────────┤│
│  │  [ + Aggiungi regola ]         ││  ← link nero
│  └─────────────────────────────────┘│
│                                     │
│  Movimenti                          │  ← 9px uppercase #888
│  ┌─────────────────────────────────┐│
│  │  Patto      20 apr  10:15  +€2 ││
│  │  Eff.merc.  19 apr         +€1 ││
│  │  Patto      19 apr  09:30  +€2 ││
│  │  Routine    1 apr   10:00 +€100││
│  │  Eff.merc.  28 mar        +€80 ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌────────────────┬────────────────┐│
│  │   Preleva      │    Versa       ││  ← CTA outline nere
│  └────────────────┴────────────────┘│
│                                     │
├─────────────────────────────────────┤
│  [Home]  [Obiettivi]  [+]  [Profilo]│
└─────────────────────────────────────┘
```

**Novità nel dettaglio**:
- **Header scuro** con nome obiettivo, %, illustrazione — coerente col sistema a due zone
- **Card "effetto composto"** su sfondo corallo chiaro (#FFF0E8) — spicca nella content area bianca, il numero cresce live
- **Movimenti** mostrano anche i versamenti dei Patti
- **Le tre routine** visibili con icone distinte

---

### F. Navigazione: semplificare

La bottom nav attuale ha 5 elementi: Home, Obiettivi, [+], Esplora, Profilo.

**Problema**: "Esplora" è un catalogo fondi. Un utente che ha un obiettivo attivo non esplora fondi. È una sezione per il 5% degli utenti in fase di creazione obiettivo. Darle un posto permanente nella nav è dare importanza permanente a un'azione occasionale.

**Proposta**: 4 elementi.

```
[Home]   [Obiettivi]   [+]   [Profilo]
```

- **Home**: portafoglio + azione del giorno + proiezioni
- **Obiettivi**: lista obiettivi + dettaglio + storico movimenti
- **[+]**: bottom sheet unificato (com'è ora — scelta corretta)
- **Profilo**: traguardi + referral + impostazioni + assistenza

"Esplora fondi" vive dentro il flow di creazione obiettivo (step A.4 del wireframe — già così). Non serve un tab dedicato. Se un utente vuole esplorare fondi fuori dal flow, la sezione è raggiungibile dal profilo o da un link nel dettaglio obiettivo.

**Il tab Obiettivi diventa il centro gravitazionale**: lista obiettivi con progress, tap per dettaglio, swipe per azioni rapide. Se l'utente ha un solo obiettivo, il tab mostra direttamente il dettaglio senza lista intermedia.

---

### G. Onboarding: il dato del 338% come hero del primo minuto

La Vision lo dice: comunicare il dato +338% subito. Il wireframe non ha flow di onboarding. La declinazione visiva è nella sezione E.5. I principi:

- **5 schermate, un minuto**. L'utente esce con un obiettivo e una routine attiva.
- **Il 338% è la prima cosa che vede.** Hero card con illustrazioni organiche pesca/corallo.
- **Template obiettivo** (Vacanza, Casa, Fondo emergenza, Tech, Regalo, Altro) invece di campo libero.
- **Slider** per l'importo con proiezione temporale live ("Con €75/mese arrivi in 3 anni e 4 mesi").
- **Default = attiva**. Il Pilota Automatico è pre-compilato. "Salta per ora" è un link secondario, non un bottone.
- **Conferma fattuale**: "Il tuo primo versamento parte il 1° giugno. Da qui in poi, il Pilota Automatico lavora per te."

---

### H. Cosa manca al vocabulary: tabella riassuntiva dei componenti da aggiungere

| Componente | Slot | Quando appare | Priorità |
|-----------|------|---------------|----------|
| Patto del giorno (interattivo) | hero-action | Patto attivo + non registrato oggi | 95 |
| Obiettivo raggiunto 100% | hero-action (full-screen) | Obiettivo completo | 100 |
| Primo versamento automatico | contextual | Prima esecuzione routine | 92 |
| Market rally positivo | contextual | Portafoglio +2%+ settimana | 70 |
| Anniversario risparmio | contextual | 365 giorni dalla prima routine | 80 |
| Referral status card | contextual (profilo) | Utente ha invitato almeno 1 persona | 65 |
| Multi-goal divergente | contextual | 2+ obiettivi con delta performance >15% | 75 |
| Routine elastica (suggerimento) | hero-action | AI Engine rileva variazione spesa | 85 |
| Obiettivo condiviso (progress collettiva) | goal-progress | Obiettivo con 2+ partecipanti | 88 |
| Effetto composto live | goal-progress (dettaglio) | Sempre, nel dettaglio obiettivo | 60 |

---

## La sfida

Il wireframe HP v4 è un vocabulary solido di product design. Ma il vocabulary da solo non è il prodotto. Mancano le regole di composizione, mancano i componenti per i momenti positivi e le transizioni, e manca il coraggio di spostare al centro ciò che nessun competitor ha.

La Vision PDF promette un approccio AI-native con 650.000 micro-segmenti e 50 varianti a settimana. Il vocabulary è il punto di partenza giusto — ma l'AI Engine ha bisogno di un component manifest con condizioni, priorità, conflitti e fallback. Senza quello, la composizione dinamica è un'idea, non un sistema.

**La vera domanda è questa**: GIMME5 vuole essere un'app di risparmio con gamification (come 50 altre) o l'unica app che trasforma il risparmio in un atto di identità personale?

Se la risposta è la seconda, allora:

- I "Patti con te stesso" diventano il cuore dell'app, non una sub-feature
- Gli obiettivi condivisi creano un network effect che nessun competitor ha
- L'AI Engine non sceglie tra 10 template — compone in tempo reale da un manifest strutturato
- Lo streak diventa un calendario permanente, non un contatore che punisce
- Il referral diventa un gesto sociale ("ti aiuto a risparmiare"), non un meccanismo transazionale
- I fatti ("14 mesi, 36 versamenti, €340 dal mercato") sostituiscono i badge

La gamification inedita non è inventare nuovi badge. È trovare il punto in cui il risparmio diventa una dichiarazione su chi sei. GIMME5 ha già il seme (le regole comportamentali). Non l'ha ancora piantato al centro.

---

## Sources

- [Gamification in Financial Services 2026 - Startup House](https://startup-house.com/blog/gamification-in-financial-services-benefits)
- [Goal Setting and Saving in the FinTech Era - UC Riverside](https://economics.ucr.edu/wp-content/uploads/2022/03/3-10-22-Rossi-2.pdf)
- [Does FinTech Affect Household Saving Behavior? - Philadelphia Fed](https://www.philadelphiafed.org/-/media/frbp/assets/events/2017/consumer-finance/fintech-2017/day-2/does-fintech-affect-household-saving-behavior.pdf)
- [Micro-Investing Apps 2025 - Growtary](https://growtary.com/2025-micro-investing-apps/)
- [How to Build a Micro-Investing Platform - DashDevs](https://dashdevs.com/blog/how-to-build-a-micro-investing-platform/)
- [Fintech Gamification Guide - Netguru](https://www.netguru.com/blog/fintech-gamification)
- [Mobile App Churn Rate Strategies - Pushwoosh](https://www.pushwoosh.com/blog/decrease-user-churn-rate/)
- [Yu-kai Chou - Finance Gamification 2026](https://yukaichou.com/gamification-examples/top-10-finance-apps-for-2017-from-an-octalysis-gamification-perspective/)
- [Behavioral Economics in Fintech - DashDevs](https://dashdevs.com/blog/role-of-behavioral-economics-in-fintech/)
