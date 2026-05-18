# Call Log -- Chronological Decision Record

## 1. Apr 2 -- Weekly Review
**Attendees**: Sarah, Filippo, Giuseppe, Marco, Andres, Alessandro, Fabio, Rinaldo, Matteo
**Key Decisions**:
- [APPROVED] Bivio post-registrazione: percorso guidato vs autonomo per selezione fondo
- [APPROVED] CF spostato dopo password, prima di "Account Creato" (per categorizzazione cliente)
- [APPROVED] Frequenza investimento: default "mensile 1o del mese", eliminata personalizzazione data
- [APPROVED] Notifiche di sistema: eliminato input dedicato, usare dialog di sistema standard
- [APPROVED] Verifica identita/AML: posizionata a meta onboarding (dopo regola, prima del finale)
- [APPROVED] Disclaimer riepilogo: operazione 1o del mese, investimento 15 del mese successivo
**Next**: HP, Obiettivi, Contenuti Educativi come prossime epic
**Rationale CF**: Marco dice "primo punto di abbandono", serve per identificare utenti e prevenire duplicati
**Terminology**: "Join ricorrente" vs "PAC" -- Alessandro suggerisce concetto semplice, rimandare terminologia

## 2. Apr 8 -- Weekly Review
**Attendees**: stessi
**Key Decisions**:
- [APPROVED] Prototipo v5 onboarding rivisto, loghi Banca d'Italia e CONSOB inseriti
- [APPROVED] Pillole educative: 4 dimensioni card (XL, L, M, S) per priorita diversa
- [APPROVED] Trigger in app: notifica con delay temporale (non real-time) per stimolare riutilizzo
- [DEFERRED] Gamification con Finance: Marco verifica inclusione nel B2B
- [EXPLORED] Stile illustrazioni: 3 direzioni (soft 3D astratto, data biz, editorial tech)
**Key insight**: Giuseppe suggerisce rivedere termine "Regola", non immediatamente comprensibile
**Friction**: educazione finanziaria "non sufficientemente pervasiva" nell'app attuale (Marco)

## 3. Apr 9 -- Onboarding Feedback (solo Filippo+Alessandro)
**Key Decisions**:
- [APPROVED] Documenti precontrattuali: modale interna con testo compliance + link PDF
- [APPROVED] Cittadinanza USA: modale bloccante con testo backend
- [APPROVED] "Nazionalita" rinominato "Cittadinanza"
- [APPROVED] Comune: autocompletamento, popola provincia automaticamente, CAP manuale
- [APPROVED] RID incentivato via modale quando utente clicca "Bonifico Bancario"
- [APPROVED] Importo minimo primo bonifico: 5 EUR
- [APPROVED] Documenti conservati 10 anni (antiriciclaggio)
- [APPROVED] Firme: 2 checkbox su documenti HTML (non PDF)
**Technical**: sistema S400 usa codici interni, non testo. Residenza fiscale da aggiungere precompilata.

## 4. Apr 14 -- Feedback Onboarding (Filippo+Alessandro)
**Key Decisions**:
- [APPROVED] Documenti precontrattuali: integrati nella selezione fondo (non step separato)
- [APPROVED] "Investi con aiuto esperti" accantonata per ora (troppa complessita)
- [APPROVED] Domande iniziali profilano utente -> vetrina dinamica o filtri avanzati
- [APPROVED] Livelli rischio: 2-7 (livello 1 non disponibile)
- [APPROVED] Orizzonte temporale: max 2 anni, 2-5 anni, oltre 5 anni
- [APPROVED] Categorizzazione fondi: "prudente, dinamico, aggressivo" aggiunta ai risultati filtri
- [APPROVED] CF richiesto subito dopo registrazione (vincolo forte)
**Rationale profilazione**: "ne sa qualcosa" -> filtri avanzati; "va a zero" -> vetrina dinamica

## 5. Apr 15 -- Weekly Review
**Attendees**: tutti
**Key Decisions**:
- [APPROVED] HP come pagina dinamica che si adatta allo stato utente
- [APPROVED] Sistema pillole: XL, L, M, S -- piu grandi per utenti nuovi, piu piccole per attivi
- [APPROVED] Rimuovere transazioni da HP (hanno sezione apposita)
- [APPROVED] Revisione termine "Regola" -> nel prossimo sprint
- [EXPLORED] Grafico a torta: 100% suddiviso per obiettivi, stato raggiungimento solo nel dettaglio
- [DEFERRED] DS + esplorazione visiva -> sprint successivo
**Key tension**: Giuseppe critica HP troppo "piena" e orientata al finanziario, vuole engagement emotivo
**Key tension**: Fabio preoccupato per carico API (4 chiamate) e accuratezza percentuali

## 6. Apr 23 -- Weekly Review
**Attendees**: tutti
**MAJOR DECISIONS**:
- [APPROVED] Termine "Routine" come sostituto di "Regola" -- Giuseppe lo propone, piace a tutti
- [APPROVED] Stile illustrato vettoriale preferito su 3D (scalabilita, calore, editabilita SVG)
- [APPROVED] 3D congelato temporaneamente, prompt e SVG inviati ad Andres
- [EXPLORED] Termine "Gimmi" proposto da Sarah per sostituire "regola/joink"
- [REJECTED] "Gimmi": Andres preoccupato sia come "joink" (poco chiaro), Alessandro preferisce non inventare nomi per ogni regola
- [APPROVED] HP divisa in 2 schede: "Obiettivi" e "Portafoglio"
- [APPROVED] Fondi integrati in obiettivo di risparmio predefinito (placeholder/salvadanaio)
**Key quote Giuseppe**: "Gimmy Five basato su tre pilastri: obiettivi, automazioni/regole, community"
**Key quote Marco**: "sotto l'anno [orizzonte temporale] non ha nessun senso"
**Nav discussed**: HP, Fondi, Obiettivi, Profilo -- but NOT final

## 7. Apr 27 AM -- Deep Dive Obiettivi/Azioni (Filippo+Sarah+Alessandro)
**MAJOR DECISIONS**:
- [APPROVED] No tab Community in nav bar -- community "spalmata" nelle varie sezioni
- [APPROVED] Focus progettazione su utente esperto (caso piu complesso per validare)
- [APPROVED] Semplificazione prelievo: un unico flusso (niente parziale/totale separati)
- [APPROVED] Max 5 obiettivi (potenzialmente 7)
- [APPROVED] Ogni obiettivo = nuovo contratto, anche se stesso fondo
- [CONFIRMED] Obiettivo > Fondo come focus visualizzazione
- [EXPLORED] Pilota automatico senza obiettivo -> salvadanaio generico
- [EXPLORED] Notifiche: 4 categorie (transazionali, patto, motivazionali, educative) con backoff
- [EXPLORED] Costi/commissioni visibili nel flusso obiettivo
**Rationale no Community tab**: "forum, feed social, leaderboard demotiverebbero il 59% degli utenti dormienti"

## 8. Apr 27 PM -- Fil/Sarah interno
**Key Decisions**:
- [CONFIRMED] Nav: "page obiettivi", "il plus", "il profilo" -- eliminata Esplora/Fondi
- [EXPLORED] Community come 5a voce placeholder
- [CONFIRMED] Progresso obiettivo = al netto di utile/perdita (conferma Alessandro)
- [EXPLORED] Obiettivi condivisi (convivenza)
- [EXPLORED] Trigger esterni (sport, cultura) per automatizzare versamenti
**Key insight**: Sarah e Filippo concordano che Community potrebbe fungere da placeholder nella nav

## 9. Apr 29 -- Weekly Review (TRANSCRIPT, no summary)
**Attendees**: Sarah, Filippo, Marco, Giuseppe, Alessandro, Fabio, Andres, Rinaldo
**MAJOR DECISIONS**:
- [APPROVED] Salvadanaio come card di fallback HP per fondo senza obiettivo
- [APPROVED] Flusso creazione obiettivo: categoria -> nome -> target+data -> recap+fondo(preselezionato) -> crea
- [APPROVED] Community banner dinamico dentro flusso obiettivo (es. "1204 persone risparmiano per vacanza")
- [APPROVED] Obiettivo condiviso: invito via link/mail/WhatsApp, visualizzazione partecipanti
- [APPROVED] Messa in pausa routine (non eliminazione) -- Alessandro conferma piace, Fabio dice fattibile per ricorrente
- [CONFIRMED] Obiettivo 1:1 con fondo per ora (multi-fondo rinviato)
- [OPEN] Utile mostrato: realizzato+attuale vs solo attuale -- Fabio solleva, nessuna decisione
- [OPEN] Rendimento ultimi 30 giorni: calcolo complesso, Fabio segnala
**Key quote Marco**: "Io per semplicita e per vedere quest'app live il prima possibile, rimarrei su [1:1 fondo-obiettivo]"
**Key quote Sarah**: salvadanaio generico come "basket gigante" per tutti i fallback/cancellazioni

## 10. May 6 -- Weekly Review (TRANSCRIPT)
**Attendees**: Sarah, Filippo, Marco, Giuseppe, Andres, Alessandro, Fabio
**MAJOR DECISIONS**:
- [PRESENTED] 3 proposte UI visive per HP: (1) card colorate sovrapposte, (2) lista verticale, (3) mix
- [APPROVED] Card colorate per obiettivi con accento cromatico per categoria
- [APPROVED] Welcome message dinamico all'apertura (effimero, poi sparisce)
- [APPROVED] Esplorare animazioni per feedback positivo (versamento, obiettivo raggiunto)
- [CONFIRMED] Palette estesa possibile: verde per educazione/Finance, arancione primario
- [WARNING] Andres: accessibilita foto+testo, serve gradiente layer
- [WARNING] Andres: evitare colori semantici (verde=positivo) per categorie
- [APPROVED] MVP approach: nucleo base con dati gia dominati, features extra incrementali
**Key quote Giuseppe**: "obiettivi, routine, community, member-get-member, concorso, AI interazione"
**Key quote Giuseppe**: "il tema dell'automatismo dovremmo cercare di trovare piu nudge"
**Decision: "Routine"** confermato di nuovo da Giuseppe: "iniziamo a chiamarle routine perche piace a tutti"

## 11. May 11 -- Allineamento Filippo+Alessandro
**Key Decisions**:
- [CONFIRMED] Header HP leggero (no ID pieno colorato), piu risalto a obiettivi
- [CONFIRMED] Chatbot top-right (sostituisce campanella notifiche deprecata)
- [CONFIRMED] Notifiche dentro Profilo
- [CONFIRMED] Card obiettivo: scroll orizzontale, piu compatte (meno immagine)
- [CONFIRMED] Colori: inizialmente legati a categoria obiettivo, poi potenzialmente a fondo
- [CONFIRMED] Pillole a carosello dinamico
- [CONFIRMED] Salvadanaio: CTA molto engaggiante per convertire in obiettivo
- [DISCUSSED] Movimenti in attesa: 3 tipi operazioni (versamento non investito, in elaborazione, storico)
- [DISCUSSED] Versa rapido +5/+10: serve step di conferma
- [NEW] Switch: operazione rimborso+versamento tra obiettivi diversi -- da wireframare
- [NEW] Rendimento: "ultima variazione" in percentuale (non 30gg), chip con mini-grafico zigzag
**Key detail**: Alessandro spiega utili/perdite in corso vs rimborsati vs totali -- 3 livelli espandibili

## 12. May 13 -- Weekly Review (TRANSCRIPT)
**Attendees**: Filippo, Andres, Alessandro, Giuseppe, Marco, Sarah (in ritardo)
**Key Decisions**:
- [IN PROGRESS] DS colori: primary scale arancione, neutral gradations, feedback colors
- [APPROVED] Obiettivi: palette colori per categoria (viaggio, casa, famiglia, svago, istruzione, sport, veicolo)
- [DECISION] Colori: OR tra categoria obiettivo e fondo -- non entrambi. Iniziare con categoria, poi valutare fondo
- [APPROVED] Pilole: arancione (Gimme5) + verde (Finance). Viola community valutato ma probabilmente non serve
- [APPROVED] Comunicazioni HP: grigio, iconografia con accento arancione
- [APPROVED] UI flat, senza ombre (tranne bottoni floating)
- [APPROVED] Card stondatina (super-ellipse / squircle), non angoli standard
- [CONFIRMED] Dark mode semantics: in corso nel DS
- [DISCUSSED] Nav: Andres chiede se Obiettivi tab serve dato che sono gia in HP. Movimenti opzionale, Community placeholder
- [CONFIRMED] Wireframe links condivisi, feedback richiesto su flussi
**Key quote Alessandro**: "a livello di priorita farei l'opposto -- suggerimenti in risalto, input secondario"
**Key decision May 13 on nav**: Andres mette in dubbio tab Obiettivi se gia in HP. Nessuna decisione finale.
