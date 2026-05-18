# Unresolved Items (updated 2026-05-14, comprehensive pass)

## HIGH PRIORITY -- Blocks production

### 1. DS has no components
Only IconButton exists. Cannot build ANY screen in Figma without Button, Card, Input, NavBar.
See [ds-gap-analysis.md](ds-gap-analysis.md)

### 2. Card bianca dual function (post-onboarding landing)
Filippo: card bianca links to onboarding fund, creates objective on it.
Alessandro: card bianca creates NEW objective (new fund, new contract).
Giuseppe (May 13): prefers Filippo's forzatura approach.
NOT CLOSED. Needs explicit decision before wireframe-to-UI conversion.
Source: May 11 call, May 13 call.

### 3. Color system: objectives vs funds
Decision (May 13): start with category colors, potentially switch to fund colors later.
BUT: no formal hex values approved for categories. Filippo has proposed palette, never signed off.
Andres: "scegliamo O obiettivi O fondi, non entrambi"
Alessandro: "possiamo andare avanti con palette per categoria"
NEEDS: formal color approval meeting before UI production begins.

### 4. Navigation: not formally frozen
Current working assumption: Home|Obiettivi|[+]|Movimenti|Profilo
Andres (May 13): questions Obiettivi tab redundancy with HP
Community may resurface as tab (Giuseppe's "three pillars")
NEEDS: explicit nav freeze in next call.

### 5. Figma files: content invisible to API [UPDATED 2026-05-14]
File keys CONFIRMED VALID. Issue is NOT wrong keys.
All 4 files show only Cover pages via API. No DS content, no screens, no variables accessible.
Possible causes: Figma Sections not traversable by MCP, or file needs to be open in desktop app.
NEEDS: Filippo to either share direct node URLs, export variables as JSON, or grant search_design_system permission.

### 6. Flutter-Figma color divergence
Flutter prototype uses different background values than Figma DS.
Flutter bg=#F2F2F2, Figma bg/primary=#F6F6F6. Flutter card=#F4F4F4, Figma bg/secondary=#FFFFFF.
NEEDS: alignment decision -- which is source of truth? If Figma, Flutter needs update.

## MEDIUM PRIORITY -- Affects UI but has workarounds

### 7. Performance metrics display
What to show: daily variation % (Alessandro's preference, May 11) vs 30-day vs cumulative.
Fabio: 30-day calculation complex if user has invested/redeemed.
Mini-graph chip (zigzag up/down) discussed (May 11) but not finalized.
NEEDS: Fabio+Alessandro to confirm data availability.

### 8. Utile display: cumulated vs active only
Fabio (Apr 29): "punto di ragionamento importante". Three levels:
- Utile/perdite in corso
- Utile/perdite rimborsate
- Utile/perdite totali
Marco prefers FIFO. Giuseppe wants "onesta intellettuale."
Alessandro (Apr 29): "finiamocelo con un punto aperto"
STILL OPEN. No decision.

### 9. Pause routine: scope and implementation
Concept approved (liked by all, Apr 29)
Fabio: feasible for ricorrente only, "sport la vedo molto piu complicata"
Marco: "possiamo anche andare per step"
NEEDS: Fabio to confirm which routine types support pause.

### 10. Switch operation flow
Introduced May 11 by Alessandro. Rimborso+versamento between objectives.
Filippo: might put it inside "modifica obiettivo" rather than as primary action.
Alessandro: versa+preleva+switch must all be available per objective.
NEEDS: wireframe for switch flow.

### 11. Movimenti in attesa visualization
Alessandro (May 11): 3 types of operations with different states.
Filippo proposed: grey for pending, black for executed (like bank apps).
Currently: viola for in-attesa, blu for executed (existing app).
NEEDS: decision on color coding and priority ordering.

### 12. Salvadanaio with multiple funds
If user deletes multiple objectives, each fund falls into salvadanaio.
Single salvadanaio with N funds inside? Or N salvadanai?
Alessandro (Apr 29): "potrebbe funzionare" as single card with sub-slots.
Andres (Apr 29): prefers separate cards per fund.
NOT RESOLVED.

### 13. Flutter terminology not updated
Prototype still uses "regola" everywhere (regola_intro, regola_importo, regola_frequenza, regola_conferma).
Should be "routine" per May 6 decision. Low urgency since prototype, but will confuse stakeholders in demos.

### 14. Onboarding: objective creation NOT in flow
Brainstorming doc (Feb 6) proposes creating objective + rule during onboarding.
Flutter prototype only creates fund + rule, no objective.
Matrice ranks this as Q2-Strategic (2.8 difficulty, 3.9 value).
Wireframe section 01 shows the post-onboarding "create first objective" flow, but it's NOT part of onboarding.
NEEDS: decision on whether to add objective creation to onboarding or keep as post-landing flow.

## LOW PRIORITY / DEFERRED

### 15. Fund switch on active objective
Multi-fund per objective explicitly deferred (Marco, Apr 29: "non fa parte di questa revisione")

### 16. API for external triggers (X Factor, Sanremo)
Fabio evaluating. Sarah asked about real-time feasibility (Apr 8).
Deferred to future sprint.

### 17. Chatbot design
Space approved (top-right icon replacing bell, May 11).
No wireframe, no flow, no integration spec exists.

### 18. Error states
No general error wireframes exist. No offline state. No empty state for searches.

### 19. Onboarding-to-app transition
How does user go from completed onboarding to first HP landing?
Wireframe shows landing scenarios but transition animation/flow not designed.

### 20. Responsive/tablet behavior
Never discussed. Not in scope for MVP.

### 21. Communication cards: dismiss vs forced
Andres (May 13): "entrambi" -- some dismissible, some forced.
No rules defined for which is which.

### 22. Dark mode values
Semantic structure exists in DS but actual dark mode hex values not populated.

### 23. Illustrations asset library
Style approved (illustrated vector, Apr 23). No assets created or catalogued.

### 24. MGM redesign ("Member Get Better")
Current MGM program not cost-effective (90% of referred users don't generate enough revenue).
Academic recommendation: pay bonus only after user creates rule active 3-6 months.
Matrice ranks this as Q2-Strategic (3.5/3.4).

### 25. Dormant user reactivation
89k dormant users identified. Matrice ranks reactivation as Q2-Strategic (3.0/4.5) -- second highest value.
No wireframe or flow exists.

### 26. Churn prediction
Matrice ranks this as highest value item (3.5/4.5).
No design, no data pipeline, no wireframe.

## STALE DOCUMENTATION (to fix)
- project_nav_schema.md: says "Esplora" -> should say "Movimenti"
- feedback_hp_sarah_reference.md: says "Home, Regole, Fondi, Profilo" -> completely obsolete
- gimme5-design-tokens.json: divergent from DS Figma -> archive or deprecate
