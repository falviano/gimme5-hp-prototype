# Contradictions and Inconsistencies

## CRITICAL

### 1. Navigation: project_nav_schema.md says "Esplora"
- **Source A**: project_nav_schema.md says `Home | Obiettivi | [+] | Esplora | Profilo`
- **Source B**: Wireframe journey-esperto and call decisions say `Home | Obiettivi | [+] | Movimenti | Profilo`
- **Source C**: Apr 27 deep dive explicitly removes Esplora ("eliminare esplora e fondi dalla nav")
- **Resolution**: project_nav_schema.md is STALE. "Movimenti" replaced "Esplora" in later iterations.
- **Risk**: Any agent or person reading project_nav_schema.md will build wrong nav

### 2. feedback_hp_sarah_reference.md says "Home, Regole, Fondi, Profilo"
- This references a VERY early nav structure, pre-Goal-Based paradigm
- Completely obsolete. "Regole" -> "Routine" and are not a tab. "Fondi" eliminated as tab.

### 3. gimme5-design-tokens.json is divergent from DS Figma
- Root-level JSON file has token values that contradict what's in the actual Figma DS
- Must be archived or explicitly deprecated

## MODERATE

### 4. Community tab: on or off?
- **Apr 27 AM**: EXPLICITLY decided "no tab Community in nav bar"
- **Apr 27 PM**: Sarah/Filippo discuss Community as "potential 5th tab placeholder"
- **May 13**: Filippo says if Community gets a tab, Movimenti goes inside Profilo
- **Giuseppe keeps saying**: "community" is one of three pillars
- **Resolution**: Community is NOT a tab currently, but Giuseppe may push for it. No formal closure.

### 5. Obiettivi tab redundancy
- **Wireframes**: Show Obiettivi as separate tab in nav
- **May 13 Andres**: Questions if Obiettivi tab is needed since HP shows them
- **Resolution**: No decision made. Current wireframes keep the tab.

### 6. Colors: objectives vs funds
- **May 13 decision**: OR between category colors and fund colors, start with categories
- **But**: Alessandro says "inizialmente per categoria, poi potenzialmente per fondo"
- **But**: Andres says "scegliamo i colori per obiettivi O per fondi, non entrambi"
- **Resolution**: Start with category. Fund colors may replace later. Not truly resolved.

### 7. Card bianca dual function (first landing)
- **Filippo's intent**: Card bianca = create objective on existing onboarding fund (linked)
- **Alessandro's reading**: Card bianca = create NEW objective (new fund, new contract)
- **May 11 discussion**: Extensively debated but not conclusively resolved
- **Giuseppe (May 13)**: "A me non dispiaceva la forzatura" (Filippo's version)
- **Resolution**: Testing both approaches, no final decision

### 8. Versa rapido placement
- **May 6**: Presented multiple positions (in card, in detail, bottom sheet)
- **May 11**: Alessandro wants confirmation step even for +5 quick versament
- **Filippo**: Avoids putting it in card (too full), prefers detail or [+] menu
- **Resolution**: Step di conferma required. Position TBD.

## LOW

### 9. "Routine" terminology scope
- Marco (Apr 29): routine shows cifra al mese, only for ricorrenze (not triggers/sfide)
- Wireframe: uses "routine" broadly as section label
- Needs clarification: is "routine" umbrella for all recurring investments, or specifically the monthly/weekly ones?

### 10. Orizzonte temporale suggerimenti
- Apr 29 Andres: "da un anno" minimum for suggestions
- Wireframe may still have 3-month and 6-month options
- User can still pick any date, but suggestions should start from 1 year

### 11. DS file key validity -- PARTIALLY RESOLVED (2026-05-14)
- DS file key 8Ss9MetHgz6C3jbPJzFwoY: VALID, but only Cover page visible
- As-is file key zd5Tn4bK7scXBW6VBBQ2Ox: VALID, but only Cover page visible
- Issue was using nodeId 0:1 which doesn't exist in these files
- Using empty nodeId returns page list successfully
- NEW ISSUE: all files show only 1 "Cover" page with no other content accessible
- DS file publishes "Gimme5 - DS" team library -- content exists but API can't traverse it

### 12. DS file content invisible to API [NEW - 2026-05-14]
- All 4 Figma files (DS, Lavorazioni, As-Is, FigJam) have severe API access limitations
- DS and As-Is: only Cover page visible, no variables/components/styles accessible
- Lavorazioni: only Cover visible (was accessible in previous pass -- regression or file change)
- FigJam: tool denied (get_figjam permission blocked)
- This is either a Figma Sections visibility issue or a permission/access limitation
- BLOCKS: all DS governance, component audit, variable verification

### 13. Cover page font vs project fonts [NEW - 2026-05-14]
- Cover pages use "FT Regola Neue Medium" (a commercial display font)
- Project fonts are Archivo (headings) + Inter (body)
- FT Regola Neue is not documented anywhere as a project font
- Low risk: cover pages are not user-facing, but inconsistency worth noting

### 14. As-Is file not connected to Gimme5-DS [NEW - 2026-05-14]
- As-Is file (zd5Tn4bK7scXBW6VBBQ2Ox) subscribes to MD3 + Simple DS (community)
- Does NOT subscribe to "Gimme5 - DS" team library
- This is expected (it's pre-redesign) but confirms it cannot be used as component source
- Any component instances from this file are NOT from the Gimme5 DS
