# As-Is UX Analysis
Updated: 2026-05-14, deep pass #3 (direct node URLs confirmed)

## File Status
- **Key**: zd5Tn4bK7scXBW6VBBQ2Ox
- **Title**: "Gimme5 / Flussi as-is"
- **Library**: MD3 + Simple DS (NOT Gimme5-DS) — pre-redesign, intentionally isolated
- **API access**: Direct node URLs required; root navigation returns Cover only

---

## Navigation (As-Is, Confirmed)
`Home · Operatività · [Joink] · Community · Profilo`
→ Redesign: `Home · Obiettivi · [+] · Movimenti · Profilo`

**Delta:**
- [Joink] → [+] (renamed, paradigm shift)
- Operatività → Movimenti
- Community → REMOVED (Giuseppe: "spalmata nelle varie sezioni")
- Obiettivi → PROMOTED to dedicated tab (wasn't a tab before)

---

## Screens Read (2026-05-14)

### 1.0.1 Home (node 2274:534)
- **Header**: Full-width orange (#F55A27), user avatar top-right
- **Balance**: €1.000,99 (fund total, not goal-based)
- **Quick actions row**: Versa · Portafoglio · Regole
- **Section "Nuovo fondo disponibile"**: Carousel card, promotional
- **Section "I tuoi obiettivi"**: Horizontal scroll, objective cards
- **Section "Per te"**: Editorial/educational content cards
- **Design notes**: Fund-centric, balance is primary info, no goal progress bars

### 2.0 Community (node 275:4548)
- **Tab**: "Community" (5th tab, now removed in redesign)
- **Hero**: Orange money tree illustration
- **Card "Amici"**: Referral program — earn €50 per referral
- **Card "Sostenitori"**: Co-saving concept (friends investing together)
- **Design notes**: Community = referral + co-saving only; no gamification, no leaderboard, no social feed

### 1.0 Profilo (node 275:4696)
- **Header**: Orange, user avatar
- **Card "Le tue regole"**: Robot + piggy bank illustration, "Hai 2 regole attive"
- **"Contatta assistenza"**: List item for support
- **Profile settings list**: Standard account settings
- **Design notes**: "Regole" managed from Profile (not from [+] as in redesign); notifications were here

### operativita_home_3.0 (node 1499:2357)
- **Title**: "Card Joink v.3" pattern (header text)
- **3 summary cards**:
  - "Risparmi del mese" — orange background (main KPI)
  - "In attesa" — purple background (#6F16A3)
  - "Saldo operazioni" — blue background (#1268B3)
- **Section "Operazioni in corso"**: Active/pending transactions
- **Section "Storico"**: Historical transactions
- **Design notes**: Purple/blue for pending/executed — Filippo proposed grey/black (May 11). Unresolved (item #10).

---

## Unknown Screens (UNREAD)
- **Node 752:10068**: Too large (103k chars). Likely Obiettivi detail or Regole flow. DEFERRED.
- Other pages beyond "Home" canvas not yet identified.

---

## UX Problems Motivating Redesign

| Problem | Evidence |
|---|---|
| Fund-centric paradigm | Home shows balance, not goal progress |
| "Regole" in Profile tab | Users don't discover automation features |
| No goal completion visualization | No progress bars, no target amounts visible |
| Community = referral only | No community sense of shared saving |
| No gamification | No sfide, triggers, behavioral nudges |
| No educational content | No pillole, no contextual learning |
| Joink branding confusion | Term not intuitive, deprecated in redesign |
| Operations hard to parse | 3 color-coded states (orange/purple/blue) not self-explanatory |

---

## Current Onboarding Flow (from FigJam node 2843:128, section "ATTUALE")
1. Welcome (3 screens) — branded intro
2. Login — Email+Browser choice + social login
3. Return to app (handoff from browser flow)
4. Anagrafica — personal data entry
5. Antiriciclaggio — AML compliance questions
6. Scelta Fondi — fund selection screen
7. Attiva Fondo — fund activation
8. Firma Contratti — contract signature
9. Versamento — initial deposit
10. Home — first app landing

**Key redesign question**: CF (codice fiscale) identified by Marco as first abandonment point. New onboarding should reduce friction here. Transition from onboarding completion to first HP landing not yet designed (item #16).

---

## As-Is vs Redesign Terminology
| Old term | New term |
|---|---|
| Regola | Routine |
| Joink (button) | [+] hub |
| Patto con te stesso | Sfida |
| Operatività (tab) | Movimenti (tab) |
| Community (tab) | REMOVED |
| (no dedicated tab) | Obiettivi (new tab) |
| (no concept) | Trigger |
| (no concept) | Versa rapido |
| (no concept) | Switch |
