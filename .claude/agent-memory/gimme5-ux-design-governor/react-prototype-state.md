# React Prototype State
Analizzato: 2026-05-14 — prototipo in `gimme5-onboarding/app/`
52 schermate JSX + 12 componenti condivisi + CSS + store + routing

---

## Flusso completo (routes.js — 52 schermate)

### Auth
- `welcome` → WelcomeScreen (3 slide)
- `login` → LoginScreen
- `email` → EmailScreen
- `password` → PasswordScreen
- `registra-social` → RegistraSocialScreen
- `registra-successo` → RegistraSuccessoScreen
- `social-cf` → SocialCfScreen
- `social-privacy` → SocialPrivacyScreen
- `social-successo` → SocialSuccessoScreen

### Onboarding — piano
- `intro-steps` → IntroStepsScreen
- `scelta-piano` → SceltaPianoScreen
- `scelta-conferma` → SceltaConfermaScreen
- `step-piano` → StepPianoScreen

### Onboarding — identità
- `cf` → CfScreen
- `nazionalita` → NazionalitaScreen
- `indirizzo` → IndirizzoScreen
- `telefono` → TelefonoScreen
- `conferma-riepilogo` → ConfermaRiepilogoScreen

### Onboarding — KYC documenti
- `step-identita` → StepIdentitaScreen
- `doc-disclaimer` → DocDisclaimerScreen
- `doc-choice` → DocChoiceScreen
- `doc-conferma` → DocConfermaScreen
- `doc-fronte` → DocFronteScreen
- `doc-reader` → DocReaderScreen
- `kyc-attesa` → KycAttesaScreen

### Onboarding — sottoscrizione
- `sottoscrizione` → SottoscrizioneScreen
- `firma-contratti` → FirmaContrattiScreen

### Onboarding — profilazione e fondi
- `scelta-rapporto` → SceltaRapportoScreen
- `profilazione` → ProfilazioneScreen
- `classificazione-utente` → ClassificazioneUtenteScreen
- `fondi-lista` → FondiListaScreen
- `fondo-dettaglio` → FondoDettaglioScreen
- `tutti-fondi` → TuttiFondiScreen
- `vetrina-fondi` → VetrinaFondiScreen

### Onboarding — regola
- `regola-intro` → RegolaIntroScreen
- `regola-importo` → RegolaImportoScreen
- `regola-conferma` → RegolaConfermaScreen

### Onboarding — AML
- `aml-intro` → AmlIntroScreen
- `aml-step` → AmlStepScreen
- `step-aml` → StepAmlScreen
- `aml-recap` → AmlRecapScreen
- `aml-conferma` → AmlConfermaScreen

### Onboarding — attivazione
- `step-attivazione` → StepAttivazioneScreen
- `attiva-fondo` → AttivFondoScreen
- `bonifico-coordinate` → BonificoCoordinateScreen
- `bonifico-conferma` → BonificoConfermaScreen
- `pagamento-successo` → PagamentoSuccessoScreen

### App
- `home` → HomeScreen
- `loading` → LoadingScreen

---

## DIVERGENZE CRITICHE rispetto alle decisioni approvate

### 1. NAV BAR HOME — CRITICA
HomeScreen ha 4 tab: `Home / Regole / Fondi / Profilo`
Decisione chiusa: `Home / Obiettivi / [+] / Movimenti / Profilo`
- "Regole" non esiste nel nuovo paradigma (→ "Routine", gestite dal [+])
- "Fondi" non è una tab (→ attributo dell'obiettivo)
- Manca tab "Obiettivi" e tab "[+]"
- Manca tab "Movimenti"

### 2. TERMINOLOGIA
- Ovunque nel codice: "regola" — dovrebbe essere "routine"
- Nessuna menzione di "obiettivo" come concetto primario
- "Fondi" come tab primaria (vecchio paradigma fund-centric)

### 3. NESSUN OBIETTIVO NELL'ONBOARDING
Il prototipo si ferma a: scelta fondo + impostazione regola
Non c'è nessun step di creazione obiettivo nell'onboarding.
La direzione nuova prevede: obiettivo first, fondo come attributo.

---

## Componenti condivisi (src/components/)
12 componenti identificati, tra cui:
- `Sheet.jsx` — MONOLITE da 1080 righe con 20+ tipi di sheet diversi (da smontare)
- Componenti base: button, input, nav bar, stepper, radio, toast, notif modal, bottom CTA, phone frame

---

## Design tokens nel CSS

### Colori effettivamente usati (hard-coded — NO sistema semantico)
- Primary orange: `#f55a27` / `#F55A27` (usate entrambe le forme — inconsistente)
- Background: `#f6f6f6` in quasi tutte le schermate, ma token CSS dice `#f5f5f5` (DIVERGENZA)
- 9 grigi diversi hard-coded senza naming semantico
- 4 verdi diversi per feedback positivo (nessuno corrisponde al DS: success=#16A34A)
- Cards: `#ffffff`

### Typography
- Archivo + Inter (corretto, allineato al DS)
- Dimensioni non sempre allineate alla scala DS (23 stili)

---

## Bug e problemi tecnici

### Bug logico confermato
- `CfScreen`: bottone "Continua" si abilita con 1 solo carattere (`cf.length < 1`)
  Dovrebbe richiedere 16 caratteri validi. Il CF italiano è 16 caratteri.

### Codice morto
- `AttivFondoScreen`: `RegolaSheet` definita ma mai aperta — codice morto

### Accessibilità
- Checkbox/radio target visivo: 16×16px (minimo WCAG: 44×44px)
- Auto-advance carousel e AML step: problematici per screen reader

---

## Open items tecnici
- Sheet.jsx va smontato in componenti separati
- Tutti i colori hard-coded vanno tokenizzati
- SVG inline vanno convertiti in asset file
- Validazione CF da correggere
- Terminologia da aggiornare (regola → routine)
- Nav bar da redesignare (4 tab → 5 tab nuovo schema)

---

## Note per Flutter handoff
- Il prototipo è React (Vite) — non Flutter
- Flutter è un progetto separato in `flutter_onboarding/` (45 schermate, diverso flusso)
- I due progetti sono DIVERGENTI: React è più aggiornato visivamente, Flutter più vecchio
- Il `routes.js` è documentato come "reference for Flutter route mapping"
