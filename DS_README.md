# Gimme5 Design System -- Guida Operativa

Questo documento serve a chiunque lavori sul Design System Gimme5: designer, sviluppatori, agenti AI, contributor esterni.

---

## Come leggere il progetto Figma

Il DS vive in un unico file Figma: `8Ss9MetHgz6C3jbPJzFwoY`.

### Struttura pagine (ordine di lettura)

| Pagina | Contenuto | Stato |
|--------|-----------|-------|
| Cover | Copertina visiva, non lavorativa | Fisso |
| ----- | Separatore | -- |
| 01 Foundation | Color Primitives, Semantic (Light/Dark), Typography | Stabile |
| 02 Tokens | Spacing, Radius, Stroke, Grid, Shape | Stabile |
| 03 Icons | 1844 icone Lucide organizzate in 23 categorie | Stabile |
| 04 Components | Componenti interattivi documentati (Button, Link, Icon, IconButton) | In costruzione |
| 05 Patterns | Composizioni di componenti (vuoto per ora) | Non iniziato |
| 06 Accessibility | Matrice contrasti WCAG, esempi visivi | Stabile |
| Playground | Spazio libero per test | Non tracciato |

### Ogni pagina contiene "sezioni" Figma
I contenuti sono organizzati in Sections di Figma. L'API REST non le traversa dal nodo root -- servono URL diretti con node-id per accedere ai contenuti. Questo e' un vincolo noto.

---

## Source of Truth -- Gerarchia

```
1. Figma DS file (8Ss9MetHgz6C3jbPJzFwoY)
   = fonte di verita' assoluta per token, componenti, stili

2. File Memory (.claude/projects/.../memory/)
   = documentazione decisioni, naming, regole, valori token

3. Wireframe HTML (gimme5-hp-wireframes/)
   = riferimento per flussi UX e struttura schermate

4. Flutter prototype (gimme5-onboarding/)
   = implementazione prototipale, NON fonte di verita' per stili
```

Quando c'e' conflitto tra Flutter prototype e Figma DS: **Figma DS comanda**.
Quando c'e' conflitto tra wireframe HTML e decisioni call: **decisioni call comandano** (vedi call-log.md).

### File di riferimento obbligatori

| File | Ruolo |
|------|-------|
| `gimme5_ds_state.md` | Token values completi, stato corrente DS, regole operative |
| `gimme5_ds_naming.md` | Naming convention per token, variabili, componenti, layer |
| `figma_design_system_rules.md` | Regole Figma permanenti |
| `ds_template_spec.md` | Spec per sezioni Foundation/Tokens |
| `ds_master_doc_template.md` | Spec per pagine componenti in 04 Components |
| `call_29apr_decisions.md` | Decisioni wireframe dalla call cliente |

---

## Workflow corretto

```
Token First  -->  Anatomy  -->  Varianti  -->  Documentazione  -->  Audit
    |                |              |                |                |
 Primitives     Layer names    Mobile states    Doc frame 1500px   Checklist
 Semantic L/D   AutoLayout     Properties       sys-header         DS_QUALITY_CHECKLIST.md
 Spacing/Radius Token binding  Component Set    Side/Top labels
```

1. **Token First**: ogni valore visivo (colore, spaziatura, raggio, tipografia) deve esistere come variabile o stile PRIMA di essere usato in un componente
2. **Anatomy**: il componente ha layer semantici nominati, AutoLayout ovunque, nessun posizionamento assoluto libero
3. **Varianti**: solo stati utili su mobile (default, pressed, disabled, loading). Mai hover o focus web
4. **Documentazione**: ogni componente vive dentro un doc frame 1500px su 04 Components, con header, sezioni, e component set con bordo viola tratteggiato
5. **Audit**: passa la DS_QUALITY_CHECKLIST.md prima di segnare come "done"

---

## Regole assolute -- Mai violare

1. **AutoLayout ovunque** -- ogni frame usa layoutMode HORIZONTAL o VERTICAL. HUG o FILL. Nessun frame con posizionamento assoluto se evitabile
2. **Zero hardcoded** -- tutti i fills, strokes, cornerRadius, text usano token/variabili semantiche. Nessun hex libero in produzione
3. **Mobile-first** -- touch target minimo 44x44px, stati: default/pressed/disabled/loading. No hover, no focus web
4. **Dark mode from start** -- ogni variabile semantica ha due modalita' (Light/Dark). Definire entrambe fin dall'inizio
5. **Naming convention** -- il nome Figma e il nome in codice sono la stessa parola. Vedi gimme5_ds_naming.md
6. **Wireframe in B&W** -- niente colori brand nei wireframe, solo bianco/nero/grigi
7. **Navigazione 5 tab** -- Home, Obiettivi, [+], Movimenti, Profilo. Decisione chiusa
8. **Doc frame 1500px** -- tutti i frame documentali su 04 Components sono 1500px di larghezza fissa
9. **cornerSmoothing = 1** su tutte le shapes
10. **Font minima 11px** -- nessun testo nel file DS puo' avere fontSize < 11

---

## Cosa NON modificare senza conferma esplicita del Lead Designer

- Token semantici esistenti (rinominare o eliminare spezza i riferimenti)
- Struttura delle pagine DS (aggiungere/rimuovere pagine)
- Valori delle variabili Primitive (hex, spacing, radius)
- Component set gia' pubblicati nella libreria
- Struttura navigazione (5 tab)
- Font families (Archivo + Inter)
- Decisioni chiuse delle call (vedi DS_DECISIONS_LOG.md)

**Regola d'oro**: se un'azione potrebbe rompere qualcosa che funziona, fermati. Proponi un piano scritto con step numerati. Aspetta conferma.

---

## Come usare Claude per lavorare sul DS

### Modalita' operativa

Claude agisce come DS Governor con queste responsabilita':
- Audit qualita' componenti e token
- Creazione componenti via Figma MCP tools
- Documentazione decisioni e stato
- Segnalazione conflitti e problemi

### Regole per Claude

1. **Leggi prima di agire** -- all'inizio di ogni sessione, leggi gimme5_ds_state.md, gimme5_ds_naming.md, e i file memory rilevanti
2. **Mai cancellare senza piano** -- nessuna azione distruttiva senza mappatura stato attuale + piano scritto + conferma Filippo
3. **Aggiorna la memoria** -- dopo ogni sessione, aggiorna gimme5_ds_state.md con lo stato corrente
4. **Segnala conflitti** -- se una richiesta viola una decisione chiusa, segnalalo esplicitamente prima di procedere
5. **Canvas spacing** -- dopo modifiche che cambiano altezza di una card, riposizionare tutte le sezioni con gap 200px (x=80)
6. **FILL dopo appendChild** -- impostare sizing FILL solo dopo aver aggiunto l'elemento al parent
7. **cornerRadius su RECTANGLE** -- usare i 4 corner individuali, non cornerRadius diretto

### Sessioni di lavoro

Ogni sessione DS ha questa struttura:
1. Lettura stato corrente (file memory)
2. Proposta piano di lavoro
3. Esecuzione con conferma a ogni step critico
4. Aggiornamento memoria e stato
5. Report finale di cosa e' cambiato

---

## Risorse esterne

| Risorsa | Ruolo |
|---------|-------|
| Material Design 3 | Linea guida per spacing, elevation, tipografia, stati |
| Wise Foundations | Reference per pulizia, gerarchia, qualita' percepita |
| Stripe DS / Linear DS | Reference per documentazione componenti |
| Lucide Icons | Libreria icone usata (gia' in 03 Icons) |

---

*Ultimo aggiornamento: 2026-05-14*
*Maintainer: Filippo Alviano (Lead Designer) + Claude (DS Governor)*
