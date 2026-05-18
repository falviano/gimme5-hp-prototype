# GIMME5 UX Design Governor -- Agent Memory

## Key Project Facts
- App: GIMME5, micro-investment app by AcomeA SGR
- Agency: Cosmico (Filippo=UX/UI designer, Sarah=PM, Rinaldo=Developer)
- Client: AcomeA SGR (Giuseppe=Product, Alessandro=FE+UX, Fabio=Backend, Marco=Dev, Andres=Brand)
- Design: Figma DS (key: 8Ss9MetHgz6C3jbPJzFwoY) + HTML wireframes
- Stack: Flutter target, Flutter prototype for onboarding
- Brand color: #F55A27 (orange)
- Fonts: Archivo (headings) + Inter (body)
- Project started ~Feb 2026, weekly calls since Apr 2
- Academic backing: 3 papers by Gargano/Rossi using GIMME5 data

## DS Governance Documents [NEW 2026-05-15]
7 governance files created in repo root `/Users/filippoalviano/Desktop/GIMME5-Onboarding-UI/`:
- `DS_README.md` -- guida operativa per chiunque lavori sul DS
- `DS_OPERATING_SYSTEM.md` -- filosofia, qualita', stile, processo 5 step
- `DS_LAYOUT_RULES.md` -- regole layout doc frame 1500px (04 Components)
- `DS_COMPONENT_RULES.md` -- regole operative per ogni componente
- `DS_QUALITY_CHECKLIST.md` -- checklist obbligatoria pre-done
- `DS_DECISIONS_LOG.md` -- registro storico decisioni (19 entries)
- `DS_BACKLOG.md` -- roadmap componenti per categoria (14 sezioni)

## Navigation [CONFIRMED but not formally frozen]
`Home | Obiettivi | [+] | Movimenti | Profilo` -- no Esplora, no Community tab.
- Andres (May 13) questioned if Obiettivi tab is needed. No decision.

## Core Paradigm [CONFIRMED]
Goal-Based Application: objective is the atomic unit, fund is an attribute.
Salvadanaio = fallback card for funds without objective.
Max 5 objectives (potentially 7). Each objective = 1 fund = 1 new contract.

## Terminology [CONFIRMED May 6]
- "Routine" = recurring investment (replaces "regola"/"joink"/"Gimmi")
- "Sfida" = behavioral challenge (ex "Patto con te stesso")
- "Trigger" = event-based investment (sport, steps, etc.)
- "Versa rapido" = quick one-off deposit (+5, +10, custom)
- "Switch" = transfer between objectives (introduced May 11)

## DS State -- 04 Components [UPDATED 2026-05-15]
API confirmed structure (node 113:3):
- **Button** (id=1232:5): 1500px doc frame, 8 variants (4 style x 2 state: default+disabled)
  - Component set node: `1232:34` (old 1193:18 is INVALID)
  - Styles: Primary, Outline, Ghost, Link -- col headers in Level 3
  - States: Default, Disabled -- Side Label in Level 4
  - sys-header, divider, sys-body structure confirmed matching ds_master_doc_template.md
  - ALL color bindings verified clean (fills, strokes, text fills, radius, padding) -- 2026-05-15 fix: `color/surface/neutral` zombie replaced with `color/bg/tertiary` on primary/disabled fill
  - strokeWeight on Outline bound to `stroke/md` (1.5px) -- 2026-05-15
  - All 8 variants set to HUG content (was FIXED 84x44/20) -- 2026-05-15
- **IconButton** (id=1487:3): DELETED 2026-05-15 by Filippo's request. Doc frame and all contents removed from 04 Components.
- Icon components exist as published library items but NOT as doc frames
- Only 1 component from Gimme5-DS found via search: `icon/squircle`
- Button/Link/IconButton exist in file but NOT published to library (search returns nothing)

## DS Variables -- Confirmed via search_design_system [UPDATED 2026-05-15]
From "Gimme5 - DS" library:
- **Semantic** collection (39 vars): color/bg/*, color/text/*, color/border/*, color/icon/*, color/feedback/*
- color/brand/default (879:74) is ZOMBIE -- exists but NOT in collection variableIds list (gap 879:74-76)
- color/surface/neutral (879:84) WAS ZOMBIE -- DELETED 2026-05-15. Had no values, no collection. 1 ref on Button primary/disabled -> replaced with color/bg/tertiary (879:62)
- **Radius** collection: xs, sm, md, lg, xl, 2xl, full (7 tokens confirmed)
- **Spacing** collection: sm, lg, xl confirmed (others exist but not in search results)
- **Stroke** collection: hairline, default, md, strong (4 tokens confirmed)

## DS Variable Scopes [CONFIRMED 2026-05-15]
Scopes set correctly for all 39 semantic color variables:
- `color/bg/*` (10 vars): `ALL_FILLS` -- upgraded from FRAME_FILL+SHAPE_FILL
- `color/text/*` (8 vars): `TEXT_FILL`
- `color/border/*` (7 vars): `FRAME_FILL, SHAPE_FILL, STROKE_COLOR`
- `color/icon/*` (6 vars): `ALL_FILLS` -- upgraded from FRAME_FILL+SHAPE_FILL+STROKE_COLOR
- `color/feedback/*` (8 vars): `FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR`
- `_ Primitives (base)` collection: ALL scopes = `[]` (hidden from picker, by design)

## 06 Accessibility Cleanup [2026-05-15] -- COMPLETED
25 hardcoded colors found and fixed:
- 7 strokes #ebebeb -> `color/border/default`
- 6 fills #ebebeb (separator rectangles) -> `color/border/default`
- 4 WCAG pill fills -> `color/feedback/success-subtle`, `warning-subtle`, `error-subtle`
- 4 WCAG pill texts -> `color/feedback/success`, `warning`, `error`
- 1 note box fill -> `color/feedback/warning-subtle`
- 2 note texts -> `color/feedback/warning`
- 1 "Legenda:" text -> `color/text/tertiary`
Page now has ZERO hardcoded colors.

## Token Cleanup [2026-05-15] -- COMPLETED
Replaced all 41 refs to zombie `color/brand/default` (879:74):
- 19 stroke bindings -> `color/border/brand` (879:79)
- 10 spacing bar fills -> `color/bg/brand` (879:64)
- 12 logo vector fills -> `color/icon/brand` (879:97)
- `color/brand/subtle` and `color/brand/emphasis` had zero bindings in file
- Figma API note: use `figma.variables.setBoundVariableForPaint(paint, 'color', var)` for fill/stroke bindings
- Figma API note: `setBoundVariable('strokeWeight', var)` expands to strokeTopWeight/Bottom/Left/Right internally. Check per-side keys, NOT `boundVariables.strokeWeight`.

## Figma API Access [UPDATED 2026-05-15]
- ROOT CAUSE: content in Figma Sections, not traversable from root node
- FIX: use direct node URLs (e.g., 113:3 for 04 Components)
- get_metadata works on direct node IDs
- search_design_system finds PUBLISHED library items only
- Button/Link/IconButton NOT in search results = NOT published to library

## Files
- See [call-log.md](call-log.md) -- 12 calls documented
- See [ds-gap-analysis.md](ds-gap-analysis.md) -- component gap analysis
- See [contradictions.md](contradictions.md) -- 14 documented
- See [unresolved-items.md](unresolved-items.md) -- 26 items
- See [stakeholder-preferences.md](stakeholder-preferences.md)
- See [STRATEGIC_ORIGIN.md](STRATEGIC_ORIGIN.md)

## Files to read every session
1. gimme5_ds_state.md  2. gimme5_ds_naming.md  3. figma_design_system_rules.md
4. call_29apr_decisions.md  5. ds_template_spec.md  6. ds_master_doc_template.md
