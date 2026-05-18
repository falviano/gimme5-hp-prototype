// ─────────────────────────────────────────────────────────────────────────────
// Gimme5 — Strategia Interna · Board Tecnico per il Team
// 9 sezioni: utente, segmenti, scoring, HP stati, pillole, trigger, repository,
// regole d'oro, mappa casistiche
// ─────────────────────────────────────────────────────────────────────────────

figma.showUI(__html__, { width: 340, height: 310 })

figma.ui.onmessage = async function (msg) {
  if (msg.type !== 'generate') return

  var C = {
    orange:  { r: 1,    g: 0.36, b: 0    },
    black:   { r: 0.07, g: 0.07, b: 0.07 },
    white:   { r: 1,    g: 1,    b: 1    },
    grey:    { r: 0.96, g: 0.96, b: 0.96 },
    mid:     { r: 0.5,  g: 0.5,  b: 0.5  },
    dim:     { r: 0.7,  g: 0.7,  b: 0.7  },
    dark:    { r: 0.2,  g: 0.2,  b: 0.2  },
    green:   { r: 0.09, g: 0.64, b: 0.26 },
    blue:    { r: 0.05, g: 0.65, b: 0.91 },
    red:     { r: 0.86, g: 0.15, b: 0.15 },
    purple:  { r: 0.39, g: 0.40, b: 0.95 },
    amber:   { r: 0.90, g: 0.60, b: 0    },
    navy:    { r: 0.10, g: 0.10, b: 0.18 },
    indigo:  { r: 0.388,g: 0.400,b: 0.945},
    greenBg: { r: 0.94, g: 1,    b: 0.96 },
    orangeBg:{ r: 1,    g: 0.97, b: 0.94 },
    blueBg:  { r: 0.94, g: 0.97, b: 1    },
    redBg:   { r: 1,    g: 0.94, b: 0.94 },
    purpleBg:{ r: 0.96, g: 0.96, b: 1    },
    amberBg: { r: 1,    g: 0.97, b: 0.90 },
    indigoBg:{ r: 0.95, g: 0.95, b: 1    },
  }

  try {
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' })
    await figma.loadFontAsync({ family: 'Inter', style: 'Medium' })
    await figma.loadFontAsync({ family: 'Inter', style: 'Bold' })
  } catch (e) {
    try {
      await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
      await figma.loadFontAsync({ family: 'Roboto', style: 'Medium' })
      await figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })
    } catch (e2) {}
  }

  function mkFrame(name, x, y, w, h, fill, radius) {
    var f = figma.createFrame()
    f.name = name; f.x = x; f.y = y
    f.resize(w, h)
    f.fills = fill ? [{ type: 'SOLID', color: fill }] : []
    if (radius) f.cornerRadius = radius
    f.clipsContent = true
    return f
  }
  function mkRect(parent, x, y, w, h, color, radius) {
    var r = figma.createRectangle()
    r.x = x; r.y = y; r.resize(w, h)
    r.fills = [{ type: 'SOLID', color: color }]
    if (radius) r.cornerRadius = radius
    if (parent) parent.appendChild(r)
    return r
  }
  function mkText(parent, txt, x, y, size, weight, color, maxW) {
    var t = figma.createText()
    var style = weight === 'bold' ? 'Bold' : weight === 'medium' ? 'Medium' : 'Regular'
    try { t.fontName = { family: 'Inter', style: style } } catch (e) {
      try { t.fontName = { family: 'Roboto', style: style } } catch (e2) {}
    }
    t.fontSize = size
    t.fills = [{ type: 'SOLID', color: color }]
    if (maxW) { t.textAutoResize = 'HEIGHT'; t.resize(maxW, 20) }
    t.characters = txt
    t.x = x; t.y = y
    if (parent) parent.appendChild(t)
    return t
  }
  function trySection(name, x, y, w, h) {
    try {
      var s = figma.createSection()
      s.name = name; s.x = x; s.y = y
      s.resizeWithoutConstraints(w, h)
      figma.currentPage.appendChild(s)
      return s
    } catch (e) {
      var f = mkFrame(name, x, y, w, h, C.grey)
      figma.currentPage.appendChild(f)
      return f
    }
  }
  function card(parent, x, y, w, h, fill, radius) {
    var f = mkFrame('card', x, y, w, h, fill || C.white, radius || 14)
    if (parent) parent.appendChild(f)
    return f
  }
  function topBar(parent, w, h, color) { mkRect(parent, 0, 0, w, h, color) }

  var PAD = 200, GAP = 40, ITEM_Y = 240, LABEL_Y = 170

  var page = figma.createPage()
  page.name = '⚙️ Strategia Interna — Team'
  figma.currentPage = page

  var cursorY = 0
  var allNodes = []
  var MAIN_W = 3200
  var mainSec = trySection('📖 Pillole Educative — Strategia · Board Interno', 0, 0, MAIN_W, 100)

  function progress(text) { figma.ui.postMessage({ type: 'progress', text: text }) }

  // ══════════════════════════════════════════════════════════════════════════════
  // S0 — HEADER
  // ══════════════════════════════════════════════════════════════════════════════
  {
    var W = 2400, H = 220
    var sec = mkFrame('00 — Header', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    var bg = mkFrame('bg', 0, 0, W, H, C.navy)
    sec.appendChild(bg)
    mkRect(bg, 0, 0, 10, H, C.orange)
    mkText(bg, 'Strategia HP + Pillole Educative — Board Interno', 72, 30, 36, 'bold', C.white, 1000)
    mkText(bg, 'Gimme5  ·  Aprile 2026  ·  Da call team + documenti cliente + matrice funzionalità', 72, 86, 13, 'regular', C.dim, 1100)
    mkText(bg, 'EXECUTION ONLY — nessun contenuto personalizzato su portafoglio specifico  ·  Pillole = informare, mai orientare', 72, 114, 12, 'medium', C.orange, 1000)
    mkText(bg, '5 segmenti  ·  Scoring 3 assi  ·  Split Gimme5 / Finanz  ·  7 HP stati  ·  7 trigger  ·  35+ casistiche', 72, 148, 11, 'regular', C.dim, 1000)
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S1 — CHI È L'UTENTE REALE
  // ══════════════════════════════════════════════════════════════════════════════
  progress('Utente reale...')
  {
    var stats = [
      { n: '70%',   l: 'under 45 anni',              s: 'vs 20% media settore',                c: C.orange },
      { n: '65%',   l: 'non aveva piattaforme prima', s: 'Target vergine — massima educabilità',c: C.blue   },
      { n: '50%+',  l: 'usa l\'app 18:00–9:00',       s: 'Momento privato, tono caldo',         c: C.purple },
      { n: '36',    l: 'anni · 18% donne',            s: 'Gender gap da lavorare',              c: C.green  },
      { n: '19%',   l: 'scelgono Viaggi',             s: 'Default visivo consigliato in HP',   c: C.orange },
      { n: '89k',   l: 'utenti dormienti',            s: 'Priorità assoluta Q2 — trigger pill', c: C.red    },
      { n: '30%',   l: 'obiettivi completato',        s: 'UX retention da migliorare',          c: C.amber  },
      { n: '+€102', l: '/mese netti con regola',      s: 'Da paper accademico Gimme5',          c: C.green  },
    ]
    var CW = 240, CH = 150
    var W = PAD * 2 + stats.length * CW + (stats.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('01 — Chi è l\'utente reale', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '👤  CHI È L\'UTENTE REALE — da Gimme5 Statistiche, Draft_0_Recurring, Survey Results', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)
    var cx = PAD
    for (var i = 0; i < stats.length; i++) {
      var s = stats[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, C.white)
      topBar(c, CW, 5, s.c)
      mkText(c, s.n, 16, 16, 28, 'bold', s.c, CW - 32)
      mkText(c, s.l, 16, 54, 12, 'medium', C.black, CW - 32)
      mkText(c, s.s, 16, 80, 11, 'regular', C.mid, CW - 32)
      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S2 — 5 SEGMENTI UTENTE
  // ══════════════════════════════════════════════════════════════════════════════
  progress('5 segmenti...')
  {
    var segments = [
      {
        lbl: '🔴 NUOVO', name: 'Nuovo', c: C.red,
        sub: '2 sub-stati: A senza regola · B prima regola attivata',
        onb: 'Scelta piano: "Non so da dove iniziare"\nCF: età < 30 · AML: studente / primo lavoro',
        sig: 'A: Login 3gg · Regola assente 48h · No obiettivo\nB: Regola ok → Push 6h · Attesa versamento',
        con: 'A: Hero card + Pill Large dark\n→ "Crea la tua prima regola"\nB: Countdown + Pill Large orange\n→ Se bonifico: card IBAN, zero pill',
        rule: '📖 MAX 1 pillola/sessione\n⚠️ Nessun contenuto su portafoglio',
      },
      {
        lbl: '😴 DORMIENTE', name: 'Dormiente', c: C.blue,
        sub: 'Inattivo 14+ giorni · Include chi ha prelevato',
        onb: 'Ha attivato regola in passato\nHa prelevato o disattivato la regola',
        sig: '- Nessun login da 14+ giorni (-20 score)\n- Regola disattivata (-30 score)\n- Prelievo effettuato (-25 score)',
        con: 'Zero pillole in-app — solo saldo fermo\nPush: "Avresti potuto avere €X in più"\nRientro: modal riattivazione (non pill)',
        rule: '🔕 ZERO pillole in-app\n📲 Solo push con €reali dell\'utente',
      },
      {
        lbl: '⚠️ A RISCHIO', name: 'A Rischio', c: C.amber,
        sub: 'Controlla ogni giorno · Post-calo · Stabilità < 30',
        onb: 'AML: settore finanziario\nScelta piano: "Investi con esperti"\nCF: età > 45',
        sig: '- Login durante calo >3% (-15 score)\n- Prelievo dopo calo (-30 score)\n- Stabilità emotiva < 30',
        con: 'ZERO pillole nelle 24h post-calo\nDopo 48h: bottom sheet contestuale\n→ Parla del suo portafoglio, non del mercato',
        rule: '🚨 SILENZIO 24h post-calo\n⏰ Bottom sheet automatico dopo 48h',
      },
      {
        lbl: '🟢 ATTIVO', name: 'Attivo', c: C.green,
        sub: 'Usa app regolarmente · Regola + obiettivo attivi',
        onb: 'Scelta piano: "Piano di accumulo"\nAML: reddito stabile · Obiettivo nominato',
        sig: '+ Login settimanale (+15 score)\n+ Regola attiva (+20 score)\n+ Versamento completato (+15 score)',
        con: 'Pill Medium G5 (dato reale) o Finanz\nProgress bar + data arrivo proiettata\nPush: aggiornamento goal settimanale',
        rule: '✅ 1 pillola/sessione\n🎯 Sempre contestuale all\'obiettivo',
      },
      {
        lbl: '🟣 ESPERTO', name: 'Esperto', c: C.purple,
        sub: '6+ mesi · 2+ regole · Score conoscenza > 70',
        onb: 'Scelta piano: "Investi con esperti"\nEsperienza dichiarata con investimenti',
        sig: '+ 6+ mesi utilizzo (+5/mese score)\n+ 2+ regole attive (+15 score)\n+ Nessun prelievo in 90 giorni (+20 score)',
        con: 'ZERO pillole in-app — mai\nLayout denso: obiettivi + regole + saldo\nSolo alert push trimestrale su rendimento',
        rule: '🚫 ZERO pillole in-app\n📊 Solo alert intelligenti fuori app',
      },
    ]
    var CW = 340, CH = 500
    var W = PAD * 2 + segments.length * CW + (segments.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('02 — 5 Segmenti Utente', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '👥  5 SEGMENTI — rilevati da onboarding + comportamento in-app · Ricalcolo ogni 7 giorni + su eventi critici', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)
    var cx = PAD
    for (var i = 0; i < segments.length; i++) {
      var sg = segments[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, C.white)
      mkRect(c, 0, 0, CW, 54, sg.c)
      mkText(c, sg.lbl, 14, 8, 10, 'bold', C.white, CW - 28)
      mkText(c, sg.name, 14, 24, 16, 'bold', C.white, CW - 28)
      mkText(c, sg.sub, 14, 42, 9, 'regular', { r: 0.9, g: 0.9, b: 0.9 }, CW - 28)
      mkText(c, '📋 Onboarding:', 14, 64, 9, 'bold', C.mid, CW - 28)
      mkText(c, sg.onb, 14, 77, 10, 'regular', C.dark, CW - 28)
      mkRect(c, 14, 136, CW - 28, 1, { r: 0.9, g: 0.9, b: 0.9 })
      mkText(c, '📡 Segnali:', 14, 144, 9, 'bold', C.mid, CW - 28)
      mkText(c, sg.sig, 14, 157, 10, 'regular', C.dark, CW - 28)
      mkRect(c, 14, 228, CW - 28, 1, { r: 0.9, g: 0.9, b: 0.9 })
      mkText(c, '📲 Contenuto:', 14, 236, 9, 'bold', C.mid, CW - 28)
      mkText(c, sg.con, 14, 249, 10, 'regular', C.dark, CW - 28)
      var ruleBg = mkFrame('rule', 14, CH - 68, CW - 28, 52, sg.c, 8)
      mkText(ruleBg, sg.rule, 10, 8, 10, 'medium', C.white, CW - 48)
      c.appendChild(ruleBg)
      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S3 — SCORING DINAMICO 3 ASSI
  // ══════════════════════════════════════════════════════════════════════════════
  progress('Scoring dinamico...')
  {
    var axes = [
      {
        name: 'ENGAGEMENT (0–100)', sub: 'Quanto l\'utente è attivo', c: C.orange, bg: C.orangeBg,
        plus: ['+15 Login negli ultimi 7gg', '+20 Regola attiva', '+10 Obiettivo nominato', '+15 Versamento completato', '+5  Pillola aperta (non skip)'],
        minus: ['-20 Nessun login da 14gg', '-25 Prelievo effettuato', '-30 Regola disattivata'],
        note: 'Ricalcolo ogni 7gg\n+ immediato su eventi critici\n(prelievo, rientro dopo 30gg)',
      },
      {
        name: 'CONOSCENZA (0–100)', sub: 'Quanto conosce il prodotto', c: C.blue, bg: C.blueBg,
        plus: ['+5  Ogni pillola completata', '+5  Per mese di utilizzo attivo', '+15 2+ regole attive', '+10 Ha superato €500 investiti', '+10 Esperienza dichiarata onboarding'],
        minus: ['-20 "Non so da dove iniziare" onboarding', '-10 Età < 25 (proxy)'],
        note: 'Non si azzera mai.\nRimane anche se l\'utente\ndiventa Dormiente.',
      },
      {
        name: 'STABILITÀ EMOTIVA (0–100)', sub: 'Rischio comportamento impulsivo', c: C.green, bg: C.greenBg,
        plus: ['+20 Nessun prelievo in 90gg', '+15 Obiettivo scadenza > 2 anni', '+10 Ha ignorato cali senza agire', '+5  Login regolare (non solo cali)'],
        minus: ['-15 Login durante calo > 3%', '-30 Prelievo dopo calo mercato', '-25 Regola disattivata dopo calo'],
        note: 'Se Stabilità < 30:\n→ Blocca TUTTE le pillole\n→ Solo bottom sheet\n   anti-panico dopo 48h',
      },
    ]
    var CW = 400, CH = 440
    var W = PAD * 2 + axes.length * CW + (axes.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('03 — Scoring Dinamico · 3 Assi', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '⚡  SCORING DINAMICO — 3 ASSI · Definisce il segmento automaticamente · Ricalcolo ogni 7gg + su eventi critici', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)
    var cx = PAD
    for (var i = 0; i < axes.length; i++) {
      var ax = axes[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, ax.bg)
      topBar(c, CW, 6, ax.c)
      mkText(c, ax.name, 16, 16, 14, 'bold', ax.c, CW - 32)
      mkText(c, ax.sub, 16, 36, 11, 'regular', C.mid, CW - 32)
      mkRect(c, 16, 58, CW - 32, 1, { r: 0.85, g: 0.85, b: 0.85 })
      mkText(c, '▲  AUMENTA', 16, 66, 9, 'bold', C.green, CW - 32)
      mkText(c, ax.plus.join('\n'), 16, 80, 10.5, 'regular', C.dark, CW - 32)
      mkRect(c, 16, 80 + ax.plus.length * 20, CW - 32, 1, { r: 0.85, g: 0.85, b: 0.85 })
      var minusY = 88 + ax.plus.length * 20
      mkText(c, '▼  DIMINUISCE', 16, minusY, 9, 'bold', C.red, CW - 32)
      mkText(c, ax.minus.join('\n'), 16, minusY + 14, 10.5, 'regular', C.dark, CW - 32)
      var noteBg = mkFrame('note', 16, CH - 80, CW - 32, 64, ax.c, 8)
      mkText(noteBg, ax.note, 10, 8, 10, 'medium', C.white, CW - 52)
      c.appendChild(noteBg)
      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S4 — HOMEPAGE 7 STATI
  // ══════════════════════════════════════════════════════════════════════════════
  progress('Homepage 7 stati...')
  {
    var states = [
      {
        lbl: '🔵 BONIFICO PENDENTE', name: 'Stato T0 · Onboarding fatto · Saldo €0', c: C.indigo,
        lines: ['👋 Ciao Mario', '──────────────────', '📋  STEP TRACKER', '    [✓] Registrato  [●] Bonifico  [ ] Investito', '──────────────────', '🏦  IBAN DA PAGARE', '    IT60 X054 2811 1010 0000 0123 456', '    [📋 Copia IBAN]  [🏦 Apri banca]', '    Min. €5 per il primo versamento', '──────────────────', '⏳  Saldo: €0,00', '    In attesa del primo bonifico', '──────────────────', '❌  Nessuna pillola educativa', '    Solo schermata operativa'],
        note: 'Trigger T0: immediato, nessun delay.\nNessun contenuto educativo.\nRegola annullata — utente deve bonificare.',
      },
      {
        lbl: '🔴 NUOVO — A', name: 'Stato 0a · Senza prima regola', c: C.red,
        lines: ['👋 Ciao Mario', '──────────────────', '🎯  HERO CARD', '    "Cosa stai risparmiando per?"', '    [Viaggio][Casa][Veicolo][Libero]', '    ↳ CTA arancione grande', '──────────────────', '📖  PILL LARGE dark [Gimme5]', '    "INIZIA CON €1 AL GIORNO"', '──────────────────', '📰  ESPLORA', '──────────────────', '❌  Nessun saldo visibile'],
        note: 'Unico focus: creare il primo obiettivo.\nDefault visivo Viaggi (19% utenti).',
      },
      {
        lbl: '🔴 NUOVO — B', name: 'Stato 0b · Prima regola attivata', c: C.red,
        lines: ['👋 Ciao Mario', '──────────────────', '🔴  Se RID:', '    "Il tuo piano parte il 1° marzo"', '', '🔴  Se Bonifico:', '    [📋 Copia IBAN]  [🏦 Apri banca]', '    Min €5 per il primo versamento', '──────────────────', '📖  Se RID: PILL LARGE orange', '    "COS\'È IL PAC"', '❌  Se Bonifico: nessuna pill', '    (regola annullata — solo IBAN)'],
        note: 'CALL 9/4: bonifico → regola annullata.\nMin €5 primo versamento.\nBonus €5 solo con RID attivo.',
      },
      {
        lbl: '😴 DORMIENTE', name: 'Stato 1 · Inattivo 14+ giorni', c: C.blue,
        lines: ['€240  Amundi Azionario ESG', '──────────────────', '❌  Nessuna pillola in-app', '❌  Nessun nudge educativo', '', '── Solo push esterno ──', '"In questi 14gg avresti', ' potuto avere €56 in più.', ' La regola è ancora lì."', '──────────────────', '── Al rientro in app ──', 'Modal riattivazione regola'],
        note: 'Silenzio in-app intenzionale.\nRe-engagement solo fuori app\ncon dati €reali.',
      },
      {
        lbl: '⚠️ A RISCHIO', name: 'Stato 2 · Post-calo · Stabilità < 30', c: C.amber,
        lines: ['──────────────────', '⚠️  BOTTOM SHEET (dopo 48h)', '', '    "I mercati hanno corretto.', '     Sul tuo portafoglio:', '     -€11 questa settimana.', '     È normale per te."', '', '    [Ho capito →]', '──────────────────', '❌  Zero pillole educative', '❌  Zero push nelle 24h post-calo'],
        note: 'Silenzio 24h obbligatorio.\nIl bottom sheet parla del suo\nportafoglio, non del mercato.',
      },
      {
        lbl: '🟢 ATTIVO', name: 'Stato 3 · Regola + obiettivo attivi', c: C.green,
        lines: ['Il tuo piano  ✓ Tutto ok', '──────────────────', '🏖️  Viaggio in Giappone', '████░░░  €420/€2.000  21%', '  Arrivi a luglio 2026  €25/mese', '──────────────────', '⚡  JOINK [+ Versa ora]', '──────────────────', '📖  PILL MEDIUM [G5 o Finanz]', '    1 sola/sessione, skippabile', '──────────────────', '📰  ESPLORA'],
        note: 'Progress bar con data reale.\n1 pillola max per sessione.\nLabel autore visibile (G5/Finanz).',
      },
      {
        lbl: '🟣 ESPERTO', name: 'Stato 4 · 6+ mesi · Score alto', c: C.purple,
        lines: ['Portafoglio  €1.240  +2.3% ↑', '──────────────────', 'OBIETTIVI', '  🏖️  ████░  21%  [→]', '  🏠  ██░░░   8%  [→]', '  [+ Nuovo obiettivo]', '──────────────────', 'REGOLE', '  €25/mese  [→]', '  [+ Nuova regola]', '──────────────────', '❌  ZERO pillole — mai', '⚙️  [Personalizza HP]'],
        note: 'Layout denso. Nessuna pillola.\nSolo alert push trimestrale.',
      },
    ]
    var CW = 340, CH = 520
    var W = PAD * 2 + states.length * CW + (states.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('04 — Homepage · 7 Stati', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '🏠  HOMEPAGE — 7 STATI · 1 slot pillola fisso tra regola ed Esplora · Contenuto variabile per segmento · Bonifico Pendente: solo operativo', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)
    var cx = PAD
    for (var i = 0; i < states.length; i++) {
      var s = states[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, C.white)
      mkRect(c, 0, 0, CW, 54, s.c)
      mkText(c, s.lbl, 14, 8, 10, 'bold', C.white, CW - 28)
      mkText(c, s.name, 14, 24, 13, 'bold', C.white, CW - 28)
      var wf = mkFrame('wf', 14, 66, CW - 28, 330, C.grey, 8)
      mkText(wf, s.lines.join('\n'), 12, 10, 10, 'regular', C.dark, CW - 52)
      c.appendChild(wf)
      mkText(c, s.note, 14, 412, 10, 'regular', C.mid, CW - 28)
      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S5 — TRIGGER MAP 7 TRIGGER
  // ══════════════════════════════════════════════════════════════════════════════
  progress('Trigger map...')
  {
    var triggers = [
      { id: 'T0', icon: '🔵', name: 'Onboarding completato via bonifico', when: 'Fine onboarding · Scelta bonifico · Saldo €0', timing: 'Immediato — nessun delay', copy: '"Benvenuto! Per iniziare, fai il tuo primo\nbonifico di min. €5 verso questo IBAN.\nAppena arriva, il tuo piano parte automaticamente."', pill: 'Nessuna — solo card operativa IBAN', legal: '✓ Operativo — nessun contenuto advisory', c: C.indigo, bg: C.indigoBg },
      { id: 'T1', icon: '🎯', name: 'Prima regola impostata', when: 'Appena attivata la 1° regola', timing: 'Delay 6h → Push', copy: '"Hai fatto la mossa più difficile: iniziare.\nEcco cosa succede ai tuoi €X ogni mese →"', pill: 'Cos\'è il PAC · Cosa succede ai miei soldi', legal: '✓ Stesso contenuto per tutti', c: C.orange, bg: C.orangeBg },
      { id: 'T2', icon: '⏰', name: 'Obiettivo senza regola · 48h', when: 'Goal creato, regola assente 48h', timing: 'Delay 48h → Push', copy: '"Il tuo obiettivo aspetta.\n€X/mese ti ci portano entro [data calcolata] →"', pill: 'Perché il PAC funziona · Automatico vs manuale', legal: '✓ Trigger comportamentale generico', c: C.amber, bg: C.amberBg },
      { id: 'T3', icon: '😴', name: 'Inattività 30 giorni', when: '30+ giorni senza login', timing: 'Push + badge app', copy: '"In questi 30 giorni avresti potuto\navere €X in più. La regola è ancora lì →"', pill: 'Dati €reali dell\'utente (non educativo)', legal: '✓ Dato neutro — importo calcolato non è consulenza', c: C.blue, bg: C.blueBg },
      { id: 'T4', icon: '🏁', name: '80% obiettivo raggiunto', when: 'Raggiunto 80% del target goal', timing: 'Push immediato + banner HP', copy: '"Sei all\'80%! Solo €X ancora\ne hai raggiunto il tuo obiettivo →"', pill: 'Importo accumulato · Proiezione data arrivo', legal: '✓ Dato neutro', c: C.green, bg: C.greenBg },
      { id: 'T5', icon: '🎉', name: 'Milestone temporale', when: '1 / 3 / 6 / 12 mesi dall\'inizio', timing: 'Push + banner celebrativo HP', copy: '"Hai investito per 3 mesi di fila.\nHai già capito la cosa più difficile: la continuità."', pill: 'Dati €reali accumulati · Nessuna proiezione', legal: '✓ Celebrativo — non advisory', c: C.purple, bg: C.purpleBg },
      { id: 'T6', icon: '📉', name: 'Calo mercato > 3% · A Rischio', when: 'Calo > 3% + Stabilità utente < 30', timing: 'SILENZIO 24h → Push dopo 48h', copy: '"I mercati hanno corretto.\nIl tuo portafoglio: -€11 questa settimana.\nÈ normale. Ecco perché →"', pill: 'Bottom sheet contestuale (Finanz white label)\nSu calo del suo portafoglio specifico', legal: '⚠️ Stesso copy per tutti · Fonte Finanz obbligatoria', c: C.red, bg: C.redBg },
    ]
    var CW = 320, CH = 400
    var W = PAD * 2 + triggers.length * CW + (triggers.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('05 — Trigger Map · 7 Trigger', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '🔔  TRIGGER MAP — 7 TRIGGER · T0 immediato (bonifico) · T1–T5 sempre con delay · Orario ottimale push: 19:00–21:00 · T6: silenzio 24h obbligatorio', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)
    var cx = PAD
    for (var i = 0; i < triggers.length; i++) {
      var t = triggers[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, t.bg)
      topBar(c, CW, 52, t.c)
      mkText(c, t.icon + '  ' + t.id, 14, 8, 18, 'bold', C.white, CW - 28)
      mkText(c, t.name, 14, 34, 11, 'medium', { r: 0.93, g: 0.93, b: 0.93 }, CW - 28)
      mkText(c, '⏰  ' + t.when, 14, 66, 10, 'regular', C.dark, CW - 28)
      mkText(c, '📲  ' + t.timing, 14, 86, 10, 'medium', t.c, CW - 28)
      var copyBg = mkFrame('copy', 14, 108, CW - 28, 72, C.white, 6)
      mkText(copyBg, t.copy, 10, 8, 10, 'regular', C.dark, CW - 48)
      c.appendChild(copyBg)
      mkText(c, '📖  ' + t.pill, 14, 192, 10, 'regular', C.dark, CW - 28)
      mkRect(c, 14, 252, CW - 28, 1, { r: 0.85, g: 0.85, b: 0.85 })
      mkText(c, t.legal, 14, 260, 10, 'medium', t.c, CW - 28)
      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S6 — REPOSITORY CONTENUTI: GIMME5 vs FINANZ
  // ══════════════════════════════════════════════════════════════════════════════
  progress('Repository contenuti...')
  {
    var cats = [
      {
        icon: '🟠', name: 'GIMME5 — Prodotto', sub: 'Solo Gimme5 · Tono operativo · Dati reali utente', c: C.orange, bg: C.orangeBg,
        items: ['Il PAC spiegato in 60 secondi', 'Perché il giorno fisso funziona', 'Regola automatica vs timing perfetto', 'Cosa succede se metto in pausa la regola', 'Come leggere la schermata obiettivo'],
      },
      {
        icon: '🟠', name: 'GIMME5 — Milestone', sub: 'Solo Gimme5 · Celebrativo · Mai advisory', c: C.green, bg: C.greenBg,
        items: ['Milestone: €100 raggiunti (celebrazione)', 'Milestone: €500 raggiunti', 'Milestone: €1.000 raggiunti', '1 mese / 3 mesi / 6 mesi consecutivi', '"Dai un nome al tuo risparmio"'],
      },
      {
        icon: '🔵', name: 'FINANZ — Concetti base', sub: 'Finanz white label · Educativo · Uguale per tutti', c: C.blue, bg: C.blueBg,
        items: ['DCA: comprare a prezzi diversi nel tempo', 'Interesse composto spiegato', 'Azioni vs obbligazioni in parole semplici', 'Inflazione: il costo di non investire', 'Diversificazione: non tutto in un posto'],
      },
      {
        icon: '🔵', name: 'FINANZ — Mercati & Avanzati', sub: 'Finanz white label · Trigger eventi · Disclaimer MiFID II', c: C.purple, bg: C.purpleBg,
        items: ['Cosa succede quando i mercati scendono', 'Perché il panico è il peggior investimento', 'Correzione vs crollo: le differenze', 'Rischio e rendimento: non esiste pranzo gratis', 'Rendimenti passati e aspettative future'],
      },
      {
        icon: '⚠️', name: 'MAI — Contenuto vietato', sub: 'Execution only · Violazione MiFID II', c: C.red, bg: C.redBg,
        items: ['"Il fondo X è migliore per te"', '"Dovresti aumentare il versamento"', '"Con il tuo profilo, questo fondo..."', 'Proiezioni specifiche senza disclaimer MiFID II', 'Qualsiasi contenuto su portafoglio specifico'],
      },
    ]
    var CW = 320, CH = 290
    var W = PAD * 2 + cats.length * CW + (cats.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('06 — Repository Contenuti · Gimme5 vs Finanz', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '📚  REPOSITORY CONTENUTI — 2 canali: Generico (Explora/blog via tag, già attivo) · Contestuale (comportamento utente, identico per tutti sullo stesso trigger) · Colonna rossa = mai pubblicare', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)
    var cx = PAD
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, cat.bg)
      topBar(c, CW, 6, cat.c)
      mkText(c, cat.icon + '  ' + cat.name, 14, 16, 13, 'bold', cat.c, CW - 28)
      mkText(c, cat.sub, 14, 36, 10, 'regular', C.mid, CW - 28)
      mkRect(c, 14, 58, CW - 28, 1, { r: 0.85, g: 0.85, b: 0.85 })
      var iy = 68
      for (var j = 0; j < cat.items.length; j++) {
        mkText(c, '• ' + cat.items[j], 14, iy, 11, 'regular', C.dark, CW - 28)
        iy += 38
      }
      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S7 — REGOLE D'ORO
  // ══════════════════════════════════════════════════════════════════════════════
  progress('Regole d\'oro...')
  {
    var rules = [
      {
        icon: '✅', title: 'Sempre', c: C.green, bg: C.greenBg,
        items: ['Viaggi come default visivo (19% utenti)', 'Frame obiettivi di vita, non prodotti finanziari', 'Celebrare la costanza, non l\'importo', 'CTA pill sempre soft: "vedi piano / crea obiettivo"', 'Label autore visibile: Gimme5 🟠 o Finanz 🔵', 'Trust badges (Banca d\'Italia) nei momenti chiave', 'Orizzonte temporale esplicito: "nel tempo", "entro luglio 2026" — mai crescita immediata'],
      },
      {
        icon: '❌', title: 'Mai', c: C.red, bg: C.redBg,
        items: ['Promettere rendimenti garantiti o crescite specifiche', '"Il fondo migliore per te" → è consulenza', 'Contenuto pill su portafoglio specifico', 'CTA pill "investi / compra / aggiungi"', 'Push in tempo reale (delay minimo 6h)', 'Pillole per Esperto (mai, zero eccezioni)', 'Qualsiasi contenuto nelle 24h post-calo (A Rischio)'],
      },
      {
        icon: '⚖️', title: 'Vincoli normativi', c: C.amber, bg: C.amberBg,
        items: ['EXECUTION ONLY — nessuna consulenza personalizzata', 'Stesso contenuto per tutti sullo stesso trigger', 'Disclaimer MiFID II su proiezioni (+338%, €600 a 1 anno)', '"A parità di versamenti, al lordo di rendimenti e commissioni"', 'Fonte Finanz = maggiore copertura legale', 'Trigger su eventi comportamentali, non su portafoglio specifico', 'Explora + carosello già attivi via tag blog — non creare sistemi paralleli al mail marketing'],
      },
      {
        icon: '🔑', title: '3 Regole Fondamentali', c: C.purple, bg: C.purpleBg,
        items: ['1.  UNA sola pillola per sessione', '    Mai due. Se non c\'è quella giusta: zero pillole.', '', '2.  ESPERTO = zero pillole in-app', '    Mai. Nessuna eccezione.', '    Solo alert push trimestrali fuori app.', '', '3.  SILENZIO per A Rischio post-calo', '    Nessuna pillola nelle 24h dopo un calo.', '    Il silenzio è la pillola più efficace.'],
      },
    ]
    var CW = 380, CH = 380
    var W = PAD * 2 + rules.length * CW + (rules.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('07 — Regole d\'Oro · Riferimento Permanente', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '📌  REGOLE D\'ORO — Controlla ogni schermata e ogni pillola contro questi criteri', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)
    var cx = PAD
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, r.bg)
      topBar(c, CW, 6, r.c)
      mkText(c, r.icon + '  ' + r.title, 18, 16, 18, 'bold', r.c, CW - 36)
      var iy = 52
      for (var j = 0; j < r.items.length; j++) {
        var it = r.items[j]
        if (it === '') { iy += 6; continue }
        var prefix = (it.startsWith('   ') || /^\d\./.test(it)) ? '' : '• '
        mkText(c, prefix + it, 18, iy, 10.5, 'regular', C.dark, CW - 36)
        iy += it.split('\n').length * 18 + 4
      }
      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S8 — MAPPA CASISTICHE
  // ══════════════════════════════════════════════════════════════════════════════
  progress('Mappa casistiche...')
  {
    var groups = [
      {
        name: 'GRUPPO 1 — Pre-Investimento', sub: 'Utente che non ha ancora investito un euro', c: C.red,
        cases: [
          { id: '1.1', sev: '🔴', name: 'Registrazione incompleta', trigger: 'Abbandono mid-onboarding', hp: 'N/A — non ha accesso', push: '"Hai quasi finito. Manca solo 1 step."', pill: 'Nessuna', note: 'Push dopo 2h' },
          { id: '1.2', sev: '🔴', name: 'KYC pendente', trigger: 'Doc non caricato dopo onboarding', hp: 'Banner rosso "Completa la verifica identità"', push: 'Reminder 24h e 72h', pill: 'Solo operativa (no educativa)', note: 'Non può operare senza KYC' },
          { id: '1.3', sev: '🔴', name: 'Bonifico pendente', trigger: 'Ha scelto bonifico, non ha pagato', hp: 'Card IBAN + [Copia IBAN] + [Apri banca]', push: 'Coordinate bancarie dopo 24h', pill: 'Nessuna — solo card operativa', note: 'CALL 9/4: regola cancellata. Min €5.' },
          { id: '1.4', sev: '🟡', name: 'RID attivato, aspetta 1° versamento', trigger: 'RID ok, aspetta primo addebito', hp: 'Countdown "Il tuo piano parte il 1° marzo"', push: 'Reminder 3gg prima', pill: 'G5: "cosa succede il giorno del versamento"', note: 'Momento di massima ansia' },
          { id: '1.5', sev: '🟡', name: 'Ha saltato RID', trigger: '"Continua senza RID"', hp: 'Nudge RID persistente', push: '48h: "Attiva RID e ricevi bonus €5"', pill: 'Nessuna educativa', note: 'Se promo code: PERDE bonus senza RID' },
          { id: '1.6', sev: '🟡', name: 'Tutorial post-onboarding', trigger: 'Prima sessione dopo registrazione', hp: 'Overlay tutorial 3 step', push: 'N/A — in-app', pill: 'Pills integrate nel tutorial', note: 'MATRICE #3: valore 4.0 Q1. Non ancora fatto.' },
        ]
      },
      {
        name: 'GRUPPO 2 — Primo Versamento', sub: 'Utente che sta investendo per la prima volta', c: C.orange,
        cases: [
          { id: '2.1', sev: '🟢', name: '1° versamento completato (RID)', trigger: 'Addebito andato a buon fine', hp: 'Modal celebrazione + pill "Cos\'è il PAC"', push: 'N/A — in-app', pill: 'G5 Large: "Congratulazioni"', note: 'Momento chiave per la retention' },
          { id: '2.2', sev: '🟡', name: '1° bonifico ricevuto (>= €5)', trigger: 'Bonifico accreditato', hp: 'Saldo aggiornato + nudge "Attiva ora la regola"', push: 'Notifica accredito', pill: 'G5: come funziona il piano di accumulo', note: 'Regola ancora da riattivare' },
          { id: '2.3', sev: '🟡', name: 'Bonus €5 promo code con RID', trigger: 'RID attivo + promo code valido', hp: 'Messaggio "Bonus €5 accreditato"', push: 'N/A — in-app', pill: 'Nessuna', note: 'Bonus solo con RID attivo' },
        ]
      },
      {
        name: 'GRUPPO 3 — Utente Attivo', sub: 'Usa l\'app regolarmente, ha regola + obiettivo', c: C.green,
        cases: [
          { id: '3.1', sev: '🟢', name: 'Versamento regolare completato', trigger: 'Addebito mensile ok', hp: 'Progress bar aggiornata + pill medium G5', push: 'Aggiornamento goal settimanale', pill: 'G5: dato reale "€270 questo mese"', note: 'Il più comune — massima retention' },
          { id: '3.2', sev: '🟢', name: '80% obiettivo raggiunto', trigger: 'Soglia 80% superata', hp: 'Banner "Sei quasi arrivato!"', push: 'Immediato', pill: 'G5: proiezione data arrivo', note: 'Trigger T4 — fortissimo engagement' },
          { id: '3.3', sev: '🟢', name: 'Milestone €100/€500/€1.000', trigger: 'Soglia capitale raggiunta', hp: 'Modal celebrazione fullscreen', push: 'Immediato', pill: 'G5: celebrazione + MGM invite', note: 'Alta probabilità referral' },
          { id: '3.4', sev: '🟡', name: 'Regola in pausa (volontaria)', trigger: 'Utente mette in pausa', hp: 'Card "Regola in pausa" con CTA riattiva', push: '7gg dopo: nudge riattivazione', pill: 'G5: perché la continuità funziona', note: 'Non trattare come dormiente subito' },
          { id: '3.5', sev: '🟢', name: 'Invita un amico (MGM)', trigger: 'Tap su "Invita"', hp: 'N/A — flusso condivisione', push: 'N/A', pill: 'Nessuna', note: '75%+ si iscrive anche senza bonus €5' },
        ]
      },
      {
        name: 'GRUPPO 4 — Operative Critiche', sub: 'Azioni che richiedono attenzione speciale', c: C.amber,
        cases: [
          { id: '4.1', sev: '🔴', name: 'Prelievo richiesto', trigger: 'Tap su "Preleva"', hp: 'MATRICE #1: informativa differenza importo rimborsato PRIMA della conferma', push: 'N/A — in-app', pill: 'Nessuna educativa', note: 'MATRICE #1: valore 4.3 Q1 — OBBLIGATORIO' },
          { id: '4.2', sev: '🟡', name: 'IBAN non riconosciuto', trigger: 'Prelievo verso IBAN non verificato', hp: 'Email automatica con procedura verifica', push: 'Email (non push)', pill: 'Nessuna', note: 'MATRICE #10: valore 3.3 Q1' },
          { id: '4.3', sev: '🔴', name: 'Regola fallita (pagamento rifiutato)', trigger: 'Addebito fallito', hp: 'Card rossa "Regola fallita" + CTA risolvi', push: 'Immediato — critico', pill: 'Nessuna — solo operativa', note: 'Nessun contenuto marketing durante errori' },
          { id: '4.4', sev: '🔴', name: 'KYC scaduto / da aggiornare', trigger: 'Documento scaduto', hp: 'Banner rosso in HP', push: 'Reminder escalation', pill: 'Nessuna', note: 'Blocca operatività se non risolto' },
        ]
      },
      {
        name: 'GRUPPO 5 — A Rischio / Emotivo', sub: 'Comportamento impulsivo da gestire con cura', c: C.red,
        cases: [
          { id: '5.1', sev: '🔴', name: 'Login post-calo mercato', trigger: 'Calo >3% + login entro 24h', hp: 'SILENZIO TOTALE — nessuna pill', push: 'SILENZIO 24h', pill: 'Nessuna nelle prime 24h', note: 'Il silenzio è la pillola più efficace' },
          { id: '5.2', sev: '🔴', name: 'Bottom sheet anti-panico', trigger: '48h dopo il calo + apertura app', hp: 'Bottom sheet automatico con dati reali', push: 'Push contestuale dopo 48h', pill: 'Finanz: "È normale — ecco perché"', note: 'Fonte Finanz obbligatoria' },
          { id: '5.3', sev: '🔴', name: 'Pre-churn prediction', trigger: 'Modello predittivo: churn probabile 7–14gg', hp: 'Card viola gentle "Vuoi raccontarci qualcosa?"', push: 'Push delicato', pill: 'Nessuna educativa', note: 'MATRICE #21: valore 4.5 Q2 — massima priorità' },
        ]
      },
      {
        name: 'GRUPPO 6 — Dormiente / Abbandono', sub: 'Utente che si è fermato o vuole chiudere', c: C.blue,
        cases: [
          { id: '6.1', sev: '🟡', name: 'Inattivo 14 giorni', trigger: 'Nessun login da 14gg', hp: 'Saldo fermo — nessuna pill', push: '14gg: push con €reali', pill: 'Zero in-app', note: 'Inizio fase dormiente' },
          { id: '6.2', sev: '🟡', name: 'Inattivo 30 giorni (89k utenti)', trigger: 'Nessun login da 30gg', hp: 'Solo saldo visibile', push: '"Avresti avuto €56 in più. La regola è lì."', pill: 'Zero in-app', note: 'MATRICE #23: valore 4.5 Q2 — 89k utenti' },
          { id: '6.3', sev: '🟠', name: 'Rientro dopo lunga assenza', trigger: 'Login dopo 30+ giorni di assenza', hp: 'Modal riattivazione semplice', push: 'N/A — è in-app', pill: 'G5: "bentornato — il tuo piano è ancora lì"', note: 'Non sovraccaricare con pill educative' },
          { id: '6.4', sev: '🔴', name: 'Richiesta chiusura conto', trigger: 'Tap su "Chiudi conto"', hp: 'Flusso chiusura con recap valore accumulato', push: 'Email di conferma', pill: 'Nessuna', note: 'Mostrare il valore perso prima della conferma' },
        ]
      },
      {
        name: 'GRUPPO 7 — Worst Cases', sub: 'Combinazioni difficili da gestire', c: C.purple,
        cases: [
          { id: '7.1', sev: '🔴', name: 'KYC rifiutato + promo code attivo', trigger: 'KYC fallito, bonus non erogabile', hp: 'Banner rosso + messaggio chiaro su bonus', push: 'Email con istruzioni', pill: 'Nessuna', note: 'Non promettere il bonus se KYC non confermato' },
          { id: '7.2', sev: '🔴', name: 'Prelievo durante calo mercato', trigger: 'Richiesta prelievo + stabilità < 30', hp: 'MATRICE #1: informativa importo + messaggio calmante', push: 'N/A — in-app', pill: 'Nessuna', note: 'Non bloccare il prelievo — solo informare' },
          { id: '7.3', sev: '🔴', name: 'Bonifico + IBAN non noto a G5', trigger: 'Bonifico verso IBAN non verificato', hp: 'Blocco con flusso verifica IBAN', push: 'Email verifica', pill: 'Nessuna', note: 'AML: verifica obbligatoria' },
          { id: '7.4', sev: '🔴', name: 'Reclamo formale', trigger: 'Email/form reclamo ricevuto', hp: 'N/A — gestito fuori app', push: 'N/A', pill: 'Nessuna', note: 'Procedura compliance — fuori scope UX' },
          { id: '7.5', sev: '🟡', name: 'Cittadinanza USA', trigger: 'Seleziona USA nell\'onboarding', hp: 'Modal bloccante → contatta supporto', push: 'N/A', pill: 'Nessuna', note: 'CALL: modal bloccante, testo dal backend' },
        ]
      },
    ]

    // Calculate total height
    var ROW_H = 52, GRP_HDR = 40, GRP_GAP = 16
    var allGroupH = 0
    for (var gi = 0; gi < groups.length; gi++) {
      allGroupH += GRP_HDR + groups[gi].cases.length * (ROW_H + 4) + GRP_GAP
    }
    var CW = 1400
    var secW = PAD * 2 + CW
    var secH = PAD + 40 + allGroupH + PAD
    var sec = mkFrame('08 — Mappa Casistiche · 35+ Casi', 0, cursorY, secW, secH, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '🗺️  MAPPA CASISTICHE — 7 gruppi · 35+ casi · Inclusi worst cases · Da call, matrice, onboarding', PAD, LABEL_Y, 12, 'bold', C.dim, secW - PAD * 2)

    var rowY = ITEM_Y
    for (var gi = 0; gi < groups.length; gi++) {
      var grp = groups[gi]
      var ghf = mkFrame('grp-' + gi, PAD, rowY, CW, GRP_HDR - 4, grp.c, 8)
      mkText(ghf, grp.name, 14, 9, 13, 'bold', C.white, 500)
      mkText(ghf, grp.sub, 520, 11, 10, 'regular', { r: 0.85, g: 0.85, b: 0.85 }, 500)
      sec.appendChild(ghf)
      rowY += GRP_HDR

      for (var ci = 0; ci < grp.cases.length; ci++) {
        var cs = grp.cases[ci]
        var bg2 = ci % 2 === 0 ? C.white : { r: 0.98, g: 0.98, b: 0.98 }
        var rowF = mkFrame('r-' + gi + '-' + ci, PAD, rowY, CW, ROW_H, bg2, 6)

        mkText(rowF, cs.sev, 8, 16, 14, 'regular', C.white, 20)
        mkText(rowF, cs.id, 26, 8, 9, 'bold', grp.c, 34)
        mkText(rowF, cs.name, 26, 22, 11, 'bold', C.black, 190)

        mkRect(rowF, 224, 0, 1, ROW_H, { r: 0.9, g: 0.9, b: 0.9 })
        mkText(rowF, 'TRIGGER', 232, 6, 8, 'bold', C.mid, 160)
        mkText(rowF, cs.trigger, 232, 18, 9, 'regular', C.dark, 165)

        mkRect(rowF, 404, 0, 1, ROW_H, { r: 0.9, g: 0.9, b: 0.9 })
        mkText(rowF, 'IN-APP', 412, 6, 8, 'bold', C.mid, 230)
        mkText(rowF, cs.hp, 412, 18, 9, 'regular', C.dark, 235)

        mkRect(rowF, 652, 0, 1, ROW_H, { r: 0.9, g: 0.9, b: 0.9 })
        mkText(rowF, 'PUSH', 660, 6, 8, 'bold', C.mid, 185)
        mkText(rowF, cs.push, 660, 18, 9, 'regular', C.dark, 190)

        mkRect(rowF, 852, 0, 1, ROW_H, { r: 0.9, g: 0.9, b: 0.9 })
        mkText(rowF, 'PILLOLA', 860, 6, 8, 'bold', C.mid, 220)
        mkText(rowF, cs.pill, 860, 18, 9, 'regular', C.dark, 225)

        mkRect(rowF, 1088, 0, 1, ROW_H, { r: 0.9, g: 0.9, b: 0.9 })
        mkText(rowF, 'NOTE', 1096, 6, 8, 'bold', C.mid, CW - 1106)
        mkText(rowF, cs.note, 1096, 18, 9, 'regular', grp.c, CW - 1106)

        sec.appendChild(rowF)
        rowY += ROW_H + 4
      }
      rowY += GRP_GAP
    }
    cursorY += secH + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S9 — WF01: CARD PILL — 7 STATI HP
  // ══════════════════════════════════════════════════════════════════════════════
  progress('WF01 card pill 7 stati...')
  {
    var hpCards = [
      {
        state: 'Bonifico Pendente', sub: 'Percorso B · €0 · nessun versamento. Stato critico per il drop.', dot: C.indigo,
        pillColor: C.indigo, pillTag: 'Gimme5 · Operativo',
        pillTitle: 'Il tuo IBAN è pronto. Fai il primo bonifico.',
        pillBody: 'Appena arriva (min. €5), il tuo piano parte automaticamente.',
        pillCta: 'Copia IBAN →',
        sizeTag: 'LG', sizeColor: C.indigo, src: 'Gimme5 · indigo',
        hasTracker: true,
      },
      {
        state: 'Nuovo A', sub: 'Nessuna regola. Focus: creare il primo obiettivo.', dot: C.red,
        pillColor: C.dark, pillTag: 'Gimme5 · Inizia',
        pillTitle: 'Inizia con €1 al giorno. Davvero.',
        pillBody: 'Non serve sapere tutto. Serve solo il primo passo.',
        pillCta: 'Crea il tuo piano →',
        sizeTag: 'LG', sizeColor: C.red, src: 'Gimme5',
        hasTracker: false,
      },
      {
        state: 'Nuovo RID', sub: 'PAC + regola automatica attiva. Il sistema lavora.', dot: C.green,
        pillColor: C.orange, pillTag: 'Gimme5 · Come funziona',
        pillTitle: 'Risparmia €1 al giorno. Senza pensarci.',
        pillBody: 'Il tuo versamento automatico è attivo. Ogni giorno lavora per te.',
        pillCta: 'Come funziona →',
        sizeTag: 'LG', sizeColor: C.orange, src: 'Gimme5',
        hasTracker: false,
      },
      {
        state: 'Dormiente', sub: 'Inattivo +30gg. Tono positivo, mostra progressi.', dot: C.mid,
        pillColor: C.orange, pillTag: 'Gimme5 · Il tuo piano',
        pillTitle: 'Non ci pensavi — ma il tuo piano sì. €420.',
        pillBody: 'Sei al 42% del tuo obiettivo. Stai andando bene.',
        pillCta: 'Vedi i progressi →',
        sizeTag: 'MD', sizeColor: C.blue, src: 'Gimme5',
        hasTracker: false,
      },
      {
        state: 'A Rischio', sub: 'Segnali abbandono. Tono leggero, nessuna pressione.', dot: C.red,
        pillColor: { r: 0.95, g: 0.95, b: 0.95 }, pillTag: 'Gimme5 · Nota tranquilla',
        pillTitle: 'Un versamento mancato non cambia tutto.',
        pillBody: 'Ecco quanto impatta davvero sul tuo obiettivo.',
        pillCta: 'Scopri →',
        sizeTag: 'SM o nessuna', sizeColor: C.dark, src: 'Gimme5',
        hasTracker: false,
      },
      {
        state: 'Attivo', sub: 'Utente regolare. Può ricevere contenuti Finanz più profondi.', dot: C.blue,
        pillColor: C.blue, pillTag: 'Finanz · Mercati',
        pillTitle: 'Cos\'è la diversificazione e perché protegge.',
        pillBody: 'Non mettere tutte le uova in un paniere — in pratica cosa significa?',
        pillCta: 'Leggi in 3 min →',
        sizeTag: 'MD', sizeColor: C.blue, src: 'Finanz / Gimme5',
        hasTracker: false,
      },
      {
        state: 'Esperto', sub: 'Alta conoscenza, multi-fondo. Suggerimento discreto.', dot: C.amber,
        pillColor: { r: 0.95, g: 0.95, b: 0.95 }, pillTag: 'Finanz · Avanzato',
        pillTitle: 'Asset allocation: cosa cambia dopo i 40',
        pillBody: 'Finanz · 5 min',
        pillCta: 'Leggi →',
        sizeTag: 'SM', sizeColor: C.dark, src: 'Finanz',
        hasTracker: false,
      },
    ]

    var CW = 240, CH = 380
    var W = PAD * 2 + hpCards.length * CW + (hpCards.length - 1) * GAP
    var H = PAD + 40 + CH + PAD
    var sec = mkFrame('09 — WF01 · Card Pill · 7 Stati HP', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '💊  WF01 · CARD PILL — 7 STATI HP · Chrome identico per tutti · Cambia solo la pill · Bonifico Pendente: solo operativo, no educativo', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)

    var cx = PAD
    for (var i = 0; i < hpCards.length; i++) {
      var hp = hpCards[i]
      var c = card(sec, cx, ITEM_Y, CW, CH, C.white)

      // state header
      mkRect(c, 14, 14, 8, 8, hp.dot, 4)
      mkText(c, hp.state, 30, 11, 12, 'bold', C.navy, CW - 44)
      mkText(c, hp.sub, 14, 32, 9, 'regular', C.mid, CW - 28)

      // tracker (only bonifico pendente)
      if (hp.hasTracker) {
        var tkY = 66
        var tkF = mkFrame('tracker', 14, tkY, CW - 28, 28, { r: 0.96, g: 0.96, b: 1 }, 8)
        mkRect(tkF, 8, 11, 6, 6, C.green, 3)
        mkText(tkF, '✓ Registrato', 18, 3, 8, 'medium', C.green, 60)
        mkRect(tkF, 84, 14, 20, 2, C.indigo)
        mkRect(tkF, 108, 9, 8, 8, C.indigo, 4)
        mkText(tkF, 'Bonifico', 120, 3, 8, 'medium', C.indigo, 50)
        mkRect(tkF, 168, 14, 20, 2, { r: 0.85, g: 0.85, b: 0.85 })
        mkRect(tkF, 192, 9, 8, 8, { r: 0.85, g: 0.85, b: 0.85 }, 4)
        mkText(tkF, 'Investito', 204, 3, 8, 'regular', C.mid, 50)
        c.appendChild(tkF)
      }

      // pill card
      var pillY = hp.hasTracker ? 106 : 66
      var pillH = 160
      var isDark = (hp.pillColor === C.indigo || hp.pillColor === C.orange || hp.pillColor === C.blue || hp.pillColor === C.dark)
      var pillTextColor = isDark ? C.white : C.dark
      var pf = mkFrame('pill', 14, pillY, CW - 28, pillH, hp.pillColor, 12)
      mkText(pf, hp.pillTag, 10, 10, 8, 'medium', isDark ? { r: 0.85, g: 0.85, b: 0.85 } : C.mid, CW - 48)
      mkText(pf, hp.pillTitle, 10, 26, 11, 'bold', pillTextColor, CW - 48)
      mkText(pf, hp.pillBody, 10, 62, 9.5, 'regular', isDark ? { r: 0.9, g: 0.9, b: 0.9 } : C.dark, CW - 48)
      mkText(pf, hp.pillCta, 10, pillH - 22, 9, 'bold', isDark ? C.white : hp.sizeColor, CW - 48)
      c.appendChild(pf)

      // size tag bottom
      var sizeY = pillY + pillH + 12
      mkText(c, hp.sizeTag, 14, sizeY, 9, 'bold', hp.sizeColor, 60)
      mkText(c, hp.src, CW - 80, sizeY, 9, 'regular', C.mid, 70)

      cx += CW + GAP
    }
    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S10 — WF02: PILL DEMO TABLE — 3 FORMATI × 2 FONTI
  // ══════════════════════════════════════════════════════════════════════════════
  progress('WF02 pill demo table...')
  {
    var rows = [
      {
        sizeLabel: 'LG', sizeDesc: 'Nuovi utenti',
        g5: { tag: 'Gimme5 · Inizia oggi', title: 'Risparmia €1 al giorno. Davvero.', body: 'Non serve sapere tutto. Serve solo il primo passo.', cta: 'Crea il tuo piano →', color: C.orange },
        fin: { tag: 'Finanz · Educazione base', title: 'Cosa succede ai tuoi soldi ogni mese.', body: 'Il PAC spiegato in 60 secondi — senza numeri complicati.', cta: 'Scopri →', color: C.blue },
      },
      {
        sizeLabel: 'MD', sizeDesc: 'Utenti attivi',
        g5: { tag: 'Gimme5 · Il tuo piano', title: 'Sei al 42% del tuo obiettivo. Stai andando bene.', body: '€420 versati. Solo €580 ti separano da Viaggio in Giappone.', cta: 'Vedi l\'obiettivo →', color: C.orange },
        fin: { tag: 'Finanz · Cultura finanziaria', title: 'Cos\'è l\'inflazione e perché erode i risparmi.', body: 'Non è solo un numero. Impatta quello che puoi comprare tra 10 anni.', cta: 'Leggi in 3 min →', color: C.blue },
      },
      {
        sizeLabel: 'SM', sizeDesc: 'Utenti esperti',
        g5: { tag: 'Gimme5 · 2 min', title: 'Hai saltato un versamento — ecco l\'impatto reale', body: '', cta: '›', color: C.dark },
        fin: { tag: 'Finanz · 5 min', title: 'Asset allocation: cosa cambia dopo i 40', body: '', cta: '›', color: C.blue },
      },
    ]

    var PILL_W = 320, PILL_H = 140, SIZE_W = 80, COL_GAP = 24, ROW_H = PILL_H + 32
    var W = PAD * 2 + SIZE_W + COL_GAP + PILL_W + COL_GAP + PILL_W
    var H = PAD + 40 + rows.length * ROW_H + PAD
    var sec = mkFrame('10 — WF02 · Pill Demo · 3 Formati × 2 Fonti', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '💊  WF02 · PILL DEMO TABLE — 3 formati × 2 fonti · Ogni formato ha un\'altezza e densità diversa · SM per esperti', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)

    // header row
    var hx = PAD + SIZE_W + COL_GAP
    mkText(sec, '🟠  GIMME5 — Prodotto', hx, ITEM_Y - 24, 11, 'bold', C.orange, PILL_W)
    mkText(sec, '🔵  FINANZ — Cultura finanziaria', hx + PILL_W + COL_GAP, ITEM_Y - 24, 11, 'bold', C.blue, PILL_W)

    var ry = ITEM_Y
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i]
      // size label
      var szF = mkFrame('sz', PAD, ry + 8, SIZE_W, 48, C.grey, 8)
      mkText(szF, row.sizeLabel, 0, 6, 14, 'bold', C.navy, SIZE_W)
      mkText(szF, row.sizeDesc, 0, 28, 9, 'regular', C.mid, SIZE_W)
      sec.appendChild(szF)

      // G5 pill
      var g5x = PAD + SIZE_W + COL_GAP
      var g5f = mkFrame('pill-g5', g5x, ry, PILL_W, PILL_H, row.g5.color, 14)
      mkText(g5f, row.g5.tag, 14, 10, 8, 'medium', { r: 0.85, g: 0.85, b: 0.85 }, PILL_W - 28)
      mkText(g5f, row.g5.title, 14, 26, row.sizeLabel === 'LG' ? 18 : row.sizeLabel === 'MD' ? 14 : 12, 'bold', C.white, PILL_W - 28)
      if (row.g5.body) mkText(g5f, row.g5.body, 14, row.sizeLabel === 'LG' ? 68 : 54, 10, 'regular', { r: 0.9, g: 0.9, b: 0.9 }, PILL_W - 28)
      mkText(g5f, row.g5.cta, 14, PILL_H - 26, 10, 'bold', C.white, PILL_W - 28)
      sec.appendChild(g5f)

      // Finanz pill
      var finx = g5x + PILL_W + COL_GAP
      var finf = mkFrame('pill-fin', finx, ry, PILL_W, PILL_H, row.fin.color, 14)
      mkText(finf, row.fin.tag, 14, 10, 8, 'medium', { r: 0.85, g: 0.85, b: 0.85 }, PILL_W - 28)
      mkText(finf, row.fin.title, 14, 26, row.sizeLabel === 'LG' ? 18 : row.sizeLabel === 'MD' ? 14 : 12, 'bold', C.white, PILL_W - 28)
      if (row.fin.body) mkText(finf, row.fin.body, 14, row.sizeLabel === 'LG' ? 68 : 54, 10, 'regular', { r: 0.9, g: 0.9, b: 0.9 }, PILL_W - 28)
      mkText(finf, row.fin.cta, 14, PILL_H - 26, 10, 'bold', C.white, PILL_W - 28)
      sec.appendChild(finf)

      ry += ROW_H
    }

    // Bonifico Pendente note
    var noteF = mkFrame('note-indigo', PAD + SIZE_W + COL_GAP, ry + 8, PILL_W * 2 + COL_GAP, 52, C.indigoBg, 10)
    mkRect(noteF, 0, 0, 4, 52, C.indigo, 2)
    mkText(noteF, '🔵  Bonifico Pendente (LG indigo) — solo operativo, no educativo. Guida al primo bonifico con tracker passi. Nessun contenuto finanziario.', 14, 10, 10, 'medium', { r: 0.388, g: 0.400, b: 0.945 }, PILL_W * 2 + COL_GAP - 28)
    sec.appendChild(noteF)

    cursorY += H + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S11 — WF03: TRIGGER ROWS T0–T6
  // ══════════════════════════════════════════════════════════════════════════════
  progress('WF03 trigger rows...')
  {
    var wfTriggers = [
      { id: 'T0', name: 'Onboarding completato · saldo €0', desc: 'Scelto bonifico manuale. HP entra subito in "Bonifico Pendente". Nessun messaggio urgente.', delay: 'Immediato', copy: '"Il tuo piano è pronto. Aspettiamo insieme."', c: C.indigo, bg: C.indigoBg },
      { id: 'T1', name: 'Primo accesso post-onboarding', desc: 'Prima apertura app dopo onboarding con regola attiva (Percorso A) o senza (Percorso C).', delay: '6 ore', copy: '"Il tuo piano è attivo. Il tempo è il tuo vantaggio più grande."', c: C.orange, bg: C.orangeBg },
      { id: 'T2', name: 'Primo versamento ricevuto', desc: 'Addebito o bonifico andato a buon fine. Per Bonifico Pendente: porta in Nuovo A o RID.', delay: '48 ore', copy: '"Il tuo primo €30 è al lavoro. Così si inizia."', c: C.green, bg: C.greenBg },
      { id: 'T3', name: 'Versamento saltato', desc: 'Addebito non andato a buon fine (conto scoperto, errore tecnico).', delay: '24 ore', copy: '"Un versamento mancato non cambia tutto. Ecco quanto impatta davvero."', c: C.amber, bg: C.amberBg },
      { id: 'T4', name: 'Milestone raggiunta', desc: '€100 / €500 / €1.000 versati — oppure 30 / 90 / 365 giorni consecutivi.', delay: '2 ore', copy: '"€500 versati. Sei nel 20% più costante dei nostri utenti."', c: C.purple, bg: C.purpleBg },
      { id: 'T5', name: 'Inattività prolungata', desc: 'Nessun login da 30+ giorni (o 60 per utenti dormant storici).', delay: '72 ore', copy: '"Anche se non guardi, il tuo piano ha lavorato per te questo mese."', c: C.blue, bg: C.blueBg },
      { id: 'T6', name: 'Calo mercato > 3%', desc: 'Mercato scende > 3% in un giorno. Utenti a bassa stabilità emotiva a rischio uscita.', delay: 'Silenzio 24h poi push', copy: '"Il mercato è sceso del 4%. Chi è rimasto nel 2008 ha guadagnato il 130% nei 5 anni successivi."', c: C.red, bg: C.redBg },
    ]

    var TW = 1200, ROW_H2 = 72, HDR_H = 36
    var secW2 = PAD * 2 + TW
    var secH2 = PAD + 40 + HDR_H + wfTriggers.length * (ROW_H2 + 4) + PAD
    var sec = mkFrame('11 — WF03 · Trigger Rows · T0–T6', 0, cursorY, secW2, secH2, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '🔔  WF03 · TRIGGER ROWS — 7 trigger · T0 immediato · T1–T5 con delay · T6 silenzio 24h + push · Le pillole non appaiono mai in tempo reale', PAD, LABEL_Y, 12, 'bold', C.dim, secW2 - PAD * 2)

    // table header
    var hdrF = mkFrame('hdr', PAD, ITEM_Y, TW, HDR_H, C.navy, 8)
    mkText(hdrF, 'ID', 12, 10, 9, 'bold', C.dim, 40)
    mkText(hdrF, 'EVENTO', 56, 10, 9, 'bold', C.dim, 240)
    mkText(hdrF, 'DELAY', 304, 10, 9, 'bold', C.dim, 100)
    mkText(hdrF, 'COPY NOTIFICA', 412, 10, 9, 'bold', C.dim, TW - 422)
    sec.appendChild(hdrF)

    var ty = ITEM_Y + HDR_H + 4
    for (var i = 0; i < wfTriggers.length; i++) {
      var tr = wfTriggers[i]
      var bg2 = i % 2 === 0 ? C.white : { r: 0.98, g: 0.98, b: 0.98 }
      var rowF = mkFrame('tr-' + i, PAD, ty, TW, ROW_H2, bg2, 6)
      mkRect(rowF, 0, 0, 4, ROW_H2, tr.c, 2)
      mkText(rowF, tr.id, 12, 14, 12, 'bold', tr.c, 40)
      mkText(rowF, tr.name, 56, 8, 11, 'bold', C.navy, 240)
      mkText(rowF, tr.desc, 56, 28, 10, 'regular', C.mid, 240)
      mkRect(rowF, 300, 8, 1, ROW_H2 - 16, { r: 0.9, g: 0.9, b: 0.9 })
      var delayF = mkFrame('delay', 308, 12, 88, 48, tr.bg, 8)
      mkText(delayF, tr.delay, 8, 10, 10, 'bold', tr.c, 72)
      rowF.appendChild(delayF)
      mkRect(rowF, 404, 8, 1, ROW_H2 - 16, { r: 0.9, g: 0.9, b: 0.9 })
      mkText(rowF, tr.copy, 412, 14, 10, 'regular', C.dark, TW - 424)
      sec.appendChild(rowF)
      ty += ROW_H2 + 4
    }
    cursorY += secH2 + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S12 — WF04: TIMELINE 6 MESI
  // ══════════════════════════════════════════════════════════════════════════════
  progress('WF04 timeline 6 mesi...')
  {
    var tlRows = [
      { time: 'Giorno 1', sub: 'Onboarding',
        a: { label: 'Percorso A — Nuovo RID', text: 'Regola automatica attiva. HP: countdown primo addebito. Pillola LG orange "Cos\'è il PAC". T1 scatta dopo 6h.', c: C.orange },
        b: { label: 'Percorso B — Bonifico Pendente', text: 'Saldo €0. HP: tracker passi + IBAN. Pillola LG indigo "Il tuo piano è pronto". T0 immediato.', c: C.indigo } },
      { time: 'Giorni 2–5', sub: 'Attesa',
        a: { label: '', text: 'HP stabile. Nessun trigger attivo. Attesa primo addebito automatico.', c: C.border },
        b: { label: '', text: 'HP mostra ancora il tracker. Push reminder IBAN dopo 3gg. Tono paziente, mai urgente.', c: C.indigo } },
      { time: 'Settimana 1', sub: 'Primo versamento',
        a: { label: 'T2 scatta', text: 'Addebito RID completato. Modal celebrazione. Pillola LG "Congratulazioni, il primo passo è fatto".', c: C.green },
        b: { label: 'Bonifico ricevuto → T2', text: 'Saldo aggiornato. Passa a Nuovo A o RID. Tracker completato. Stessa flow di A da qui.', c: C.green } },
      { time: 'Mese 1–2', sub: 'Consolidamento',
        a: { label: 'Diventa Attivo', text: 'Engagement cresce. HP: progress bar obiettivo. Pillola MD Gimme5 o Finanz base.', c: C.blue },
        b: { label: '', text: 'Stesso percorso di A dal momento del primo versamento.', c: C.border } },
      { time: 'Mese 3', sub: 'Crisi possibile',
        a: { label: 'T3 o T6', text: 'Versamento saltato (T3, 24h delay) o calo mercato (T6, silenzio 24h poi push). Pillola MD contestuale.', c: C.amber },
        b: { label: '', text: 'Stesso comportamento di A.', c: C.border } },
      { time: 'Mese 6+', sub: 'Maturità',
        a: { label: 'Esperto', text: '2+ fondi, engagement alto, conoscenza > 70. HP densa: obiettivi + regole + saldo. Zero pillole in-app.', c: C.amber },
        b: { label: '', text: 'Percorso B converge identico ad A dal mese 1.', c: C.border } },
    ]

    var TIME_W = 110, PATH_W = 480, TL_GAP = 1, ROW_H3 = 80
    var TLW = TIME_W + PATH_W * 2 + TL_GAP * 2
    var secW3 = PAD * 2 + TLW
    var secH3 = PAD + 40 + 32 + tlRows.length * (ROW_H3 + 1) + PAD
    var sec = mkFrame('12 — WF04 · Timeline · 6 Mesi', 0, cursorY, secW3, secH3, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '📅  WF04 · TIMELINE — 6 mesi · 2 percorsi paralleli · Percorso B converge ad A dopo il primo versamento', PAD, LABEL_Y, 12, 'bold', C.dim, secW3 - PAD * 2)

    // col headers
    var hx2 = PAD + TIME_W
    mkText(sec, 'Percorso A — RID attivo', hx2 + 16, ITEM_Y - 28, 11, 'bold', C.orange, PATH_W - 32)
    mkText(sec, 'Percorso B — Bonifico manuale', hx2 + PATH_W + 16, ITEM_Y - 28, 11, 'bold', C.indigo, PATH_W - 32)

    var tly = ITEM_Y
    for (var i = 0; i < tlRows.length; i++) {
      var row = tlRows[i]
      var isLast = i === tlRows.length - 1
      var rowH = ROW_H3

      // time cell
      var timeF = mkFrame('time-' + i, PAD, tly, TIME_W - 4, rowH, C.grey, 6)
      mkText(timeF, row.time, 10, 10, 11, 'bold', C.navy, TIME_W - 20)
      mkText(timeF, row.sub, 10, 30, 9, 'regular', C.mid, TIME_W - 20)
      sec.appendChild(timeF)

      // path A
      var borderColorA = row.a.c === C.border ? { r: 0.9, g: 0.9, b: 0.9 } : row.a.c
      var pathAF = mkFrame('pathA-' + i, PAD + TIME_W, tly, PATH_W, rowH, C.white, 0)
      mkRect(pathAF, 0, 0, 3, rowH, borderColorA)
      if (row.a.label) mkText(pathAF, row.a.label, 12, 8, 9, 'bold', borderColorA, PATH_W - 24)
      mkText(pathAF, row.a.text, 12, row.a.label ? 24 : 12, 10, 'regular', C.dark, PATH_W - 24)
      mkRect(pathAF, PATH_W - 1, 0, 1, rowH, { r: 0.9, g: 0.9, b: 0.9 })
      mkRect(pathAF, 0, rowH - 1, PATH_W, 1, { r: 0.9, g: 0.9, b: 0.9 })
      sec.appendChild(pathAF)

      // path B
      var borderColorB = row.b.c === C.border ? { r: 0.9, g: 0.9, b: 0.9 } : row.b.c
      var pathBF = mkFrame('pathB-' + i, PAD + TIME_W + PATH_W, tly, PATH_W, rowH, C.white, 0)
      mkRect(pathBF, 0, 0, 3, rowH, borderColorB)
      if (row.b.label) mkText(pathBF, row.b.label, 12, 8, 9, 'bold', borderColorB, PATH_W - 24)
      mkText(pathBF, row.b.text, 12, row.b.label ? 24 : 12, 10, 'regular', C.dark, PATH_W - 24)
      mkRect(pathBF, 0, rowH - 1, PATH_W, 1, { r: 0.9, g: 0.9, b: 0.9 })
      sec.appendChild(pathBF)

      tly += rowH + 1
    }
    cursorY += secH3 + 100
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // S13 — WF05: COSA GARANTISCE IL SISTEMA — SEMPRE / MAI
  // ══════════════════════════════════════════════════════════════════════════════
  progress('WF05 garanzie...')
  {
    var guarantees = [
      {
        icon: '✓', title: 'Sempre', c: C.green, bg: C.greenBg,
        items: [
          'Usa dati reali dell\'utente ("€420 versati")',
          'Disclaimer su tutti i contenuti Finanz',
          'Stessa voce dell\'onboarding ("versamento automatico", non "RID")',
          'Tono caldo, mai scolastico',
          'Delay intenzionale su ogni trigger (tranne T0)',
          '1 sola pillola per sessione (max 2 SM affiancate per Esperto)',
          'Stato Bonifico Pendente trattato con zero pressione',
          'Label autore visibile: Gimme5 🟠 o Finanz 🔵',
        ],
      },
      {
        icon: '✗', title: 'Mai', c: C.red, bg: C.redBg,
        items: [
          'Due pillole sullo stesso tema nello stesso giorno',
          'Risposta immediata a evento di mercato (silenzio 24h)',
          '"Compra questo / vendi quello" — vietato MiFID II',
          'Pillola LG a un utente esperto',
          'Push dopo le 21:00 o prima delle 19:00',
          'Più di 3 push al mese per utente',
          'Pressione sull\'utente Bonifico Pendente (tono mai urgente)',
          'Proiezioni di rendimento senza disclaimer MiFID II',
        ],
      },
    ]

    var GW = 560, GH = 320
    var W = PAD * 2 + guarantees.length * GW + (guarantees.length - 1) * GAP
    var H = PAD + 40 + GH + PAD
    var sec = mkFrame('13 — WF05 · Garanzie · Sempre / Mai', 0, cursorY, W, H, { r: 0.97, g: 0.97, b: 0.97 })
    mainSec.appendChild(sec)
    mkText(sec, '📌  WF05 · COSA GARANTISCE IL SISTEMA — Controlla ogni schermata e ogni pillola contro questi criteri prima di pubblicare', PAD, LABEL_Y, 12, 'bold', C.dim, W - PAD * 2)

    var cx = PAD
    for (var i = 0; i < guarantees.length; i++) {
      var g = guarantees[i]
      var c = card(sec, cx, ITEM_Y, GW, GH, g.bg)
      mkRect(c, 0, 0, GW, 6, g.c)
      mkText(c, g.icon + '  ' + g.title, 20, 18, 20, 'bold', g.c, GW - 40)
      mkRect(c, 20, 52, GW - 40, 1, { r: 0.85, g: 0.85, b: 0.85 })
      var iy = 62
      for (var j = 0; j < g.items.length; j++) {
        mkText(c, (g.icon === '✓' ? '✓  ' : '✗  ') + g.items[j], 20, iy, 10.5, 'regular', C.dark, GW - 40)
        iy += 30
      }
      cx += GW + GAP
    }
    cursorY += H + 100
  }

  // ── DONE ─────────────────────────────────────────────────────────────────────
  mainSec.resizeWithoutConstraints(MAIN_W, cursorY + 200)
  figma.viewport.scrollAndZoomIntoView([mainSec])
  figma.notify('✅ Board generato in 1 sezione — ' + (cursorY / 1000).toFixed(1) + 'k px', { timeout: 4000 })
  figma.ui.postMessage({ type: 'done', sections: 1 })
}
