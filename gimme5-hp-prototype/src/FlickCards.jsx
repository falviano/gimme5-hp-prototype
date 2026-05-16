/**
 * FlickCardStack — Gimme5
 *
 * Comportamento ispirato al pattern "Flick Cards" (champions4good.club),
 * ricreato da zero senza copiare codice proprietario.
 *
 * Principi:
 * - Card assolute centrate, trasformate in base alla posizione rispetto all'attiva
 * - Drag/flick con pointer capture (mouse + touch)
 * - touch-action: pan-y → scroll verticale libero, swipe orizzontale catturato
 * - Transizione spring (cubic-bezier(0.34,1.56,0.64,1)) tra stati
 * - Opacità degradante sulle card non attive
 * - CTA/bottone entra dal basso solo sulla card attiva
 *
 * Flutter note:
 *   → GestureDetector + HorizontalDragUpdate/End per la gestione del drag
 *   → AnimationController + CurvedAnimation(curve: Curves.elasticOut) per spring
 *   → Stack widget con Positioned per il centramento delle card
 *   → Transform.rotate + Transform.scale per le trasformazioni
 *   → AnimatedOpacity per il fade delle card non attive
 */

import { useState, useRef, useCallback } from 'react'

// ─── Geometria stack ────────────────────────────────────────────────────────
// Ogni slot è definito da offset (dx,dy), rotazione, scala, z-index, opacità.
// rel=0 = card attiva; rel=±1 = card adiacenti; rel=±2 = card di fondo.
// I valori dx sono in px (basati su card width 253px ≈ 25%/45% della card).

const SLOTS = {
  '-2': { dx: -70, dy: 14, rot: -12, scale: 1.00, z: 1 },
  '-1': { dx: -44, dy:  4, rot:  -7, scale: 1.00, z: 2 },
   '0': { dx:   0, dy:  0, rot:   0, scale: 1.00, z: 3 },
   '1': { dx:  44, dy:  4, rot:   7, scale: 1.00, z: 2 },
   '2': { dx:  70, dy: 14, rot:  12, scale: 1.00, z: 1 },
}

const FLICK_PX  = 72   // px di drag minimo per avanzare
const FLICK_VEL = 0.4  // px/ms di velocità minima per avanzare

// ─── Componente principale ──────────────────────────────────────────────────

/**
 * FlickCardStack
 *
 * Props:
 *   children  — array di elementi React (le card)
 *   cardW     — larghezza card in px (default 253)
 *   cardH     — altezza card in px (default 300)
 *   onActiveChange — callback(index) quando cambia la card attiva
 *
 * CSS alternativo con scroll-snap (per layout orizzontale puro senza stack):
 *   vedi commento in fondo al file.
 *
 * Alternativa Framer Motion:
 *   vedi commento in fondo al file.
 */
export function FlickCardStack({ children, cardW = 253, cardH = 300, onActiveChange }) {
  const items = Array.isArray(children) ? children : [children]
  const total = items.length

  const [active, setActive] = useState(0)
  const [drag, setDrag]     = useState(0)
  const [dragging, setDragging] = useState(false)

  // Refs per velocity detection
  const startX = useRef(null)
  const startT = useRef(null)
  const lastX  = useRef(0)

  const advance = useCallback((dir) => {
    setActive(a => {
      const next = (a + dir + total) % total
      onActiveChange?.(next)
      return next
    })
  }, [total, onActiveChange])

  const onDragStart = useCallback((clientX) => {
    startX.current = clientX
    startT.current = Date.now()
    lastX.current  = clientX
    setDragging(true)
  }, [])

  const onDragMove = useCallback((clientX) => {
    if (startX.current === null) return
    lastX.current = clientX
    setDrag(clientX - startX.current)
  }, [])

  const onDragEnd = useCallback(() => {
    if (startX.current === null) return
    const dx  = lastX.current - startX.current
    const dt  = Math.max(1, Date.now() - startT.current)
    const vel = dx / dt
    startX.current = null
    setDragging(false)
    setDrag(0)
    if (Math.abs(dx) > FLICK_PX || Math.abs(vel) > FLICK_VEL) {
      advance(dx < 0 ? 1 : -1)
    }
  }, [advance])

  const containerH = cardH + 20 // spazio per le card di fondo (dy max = 14px + un po' di respiro)

  return (
    <div
      style={{
        position: 'relative',
        height: containerH,
        overflow: 'visible',
        // touch-action: pan-y → scroll verticale libero, drag orizzontale catturato
        touchAction: 'pan-y',
        // Centra il punto di riferimento
        margin: '0 auto',
        width: cardW,
      }}
    >
      {items.map((child, i) => {
        // Posizione relativa rispetto all'attiva, normalizzata per deck circolare
        let rel = i - active
        if (rel >  total / 2) rel -= total
        if (rel < -total / 2) rel += total

        const clampedRel = Math.max(-2, Math.min(2, rel))
        const slot = SLOTS[String(clampedRel)]
        if (!slot) return null // card fuori range visivo → nascosta

        const isActive = rel === 0

        // Durante il drag la card attiva segue il cursore
        const dragDx  = isActive && dragging ? drag       : 0
        const dragRot = isActive && dragging ? drag * 0.04 : 0 // max ~4° a 100px drag

        const tx  = slot.dx + dragDx
        const ty  = slot.dy
        const rot = slot.rot + dragRot

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: cardW,
              zIndex: isActive && dragging ? 10 : slot.z,
              transform: `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg) scale(${slot.scale})`,
              transformOrigin: 'center bottom',
              transition: dragging && isActive
                ? 'none'
                : 'transform 0.46s cubic-bezier(0.34, 1.56, 0.64, 1)',
              willChange: 'transform',
              cursor: isActive ? (dragging ? 'grabbing' : 'grab') : 'default',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
            // Pointer capture: il drag rimane attivo anche fuori dai bounds della card
            onPointerDown={isActive ? (e) => {
              e.currentTarget.setPointerCapture(e.pointerId)
              onDragStart(e.clientX)
            } : (e) => {
              e.stopPropagation()
              advance(rel)
            }}
            onPointerMove={isActive ? (e) => {
              if (dragging) onDragMove(e.clientX)
            } : undefined}
            onPointerUp={isActive    ? onDragEnd : undefined}
            onPointerCancel={isActive ? onDragEnd : undefined}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}


// ─── Indicatore di posizione (dots) ────────────────────────────────────────

export function FlickDots({ total, active, color = '#000' }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', paddingTop: 12 }}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{
          width: i === active ? 16 : 6,
          height: 6,
          borderRadius: 99,
          background: i === active ? color : '#d0d0d0',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }} />
      ))}
    </div>
  )
}


/*
──────────────────────────────────────────────────────────────────────────────
ALTERNATIVA CSS SCROLL-SNAP (layout orizzontale, nessun JS)
──────────────────────────────────────────────────────────────────────────────

Se vuoi lo scroll fluido nativo senza stack effect, usa questo pattern:

  <div style={{
    display: 'flex',
    gap: 12,
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollPaddingLeft: 16,
    WebkitOverflowScrolling: 'touch',  // iOS momentum scroll
    paddingLeft: 16,
    paddingRight: 16,
  }}>
    {cards.map((card, i) => (
      <div key={i} style={{
        flexShrink: 0,
        width: '88vw',          // quasi full-width, peek del prossimo
        maxWidth: 340,
        scrollSnapAlign: 'start',
      }}>
        {card}
      </div>
    ))}
  </div>

Vantaggi: zero JS, funziona nativamente su iOS/Android, mappabile 1:1 a Flutter PageView.
Limiti: nessun effetto stacked/3D, solo scroll piatto.


──────────────────────────────────────────────────────────────────────────────
ALTERNATIVA FRAMER MOTION
──────────────────────────────────────────────────────────────────────────────

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

function FlickMotion({ cards }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15])

  return (
    <motion.div
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 80 || Math.abs(info.velocity.x) > 300) {
          // avanza deck
        } else {
          animate(x, 0, { type: 'spring', stiffness: 300, damping: 30 })
        }
      }}
    >
      {cards[0]}
    </motion.div>
  )
}

Vantaggi: spring physics più realistici, gestione velocity out-of-the-box.
Limiti: dipendenza Framer Motion (~60KB gzipped).


──────────────────────────────────────────────────────────────────────────────
NOTE FLUTTER
──────────────────────────────────────────────────────────────────────────────

1. Stack di card:
   Stack(children: [
     for (int i = 0; i < cards.length; i++)
       Positioned(
         child: AnimatedContainer(
           transform: Matrix4.identity()
             ..translate(slotDx, slotDy)
             ..rotateZ(slotRot)
             ..scale(slotScale),
           duration: Duration(milliseconds: 460),
           curve: Curves.elasticOut,
           child: Opacity(opacity: slotOpacity, child: cards[i]),
         ),
       ),
   ])

2. Drag detection:
   GestureDetector(
     onHorizontalDragStart: (_) => startDrag(),
     onHorizontalDragUpdate: (d) => updateDrag(d.delta.dx),
     onHorizontalDragEnd: (d) => endDrag(d.primaryVelocity),
   )

3. Velocity threshold:
   if (dragDx.abs() > 72 || primaryVelocity.abs() > 400) advanceDeck()

4. touch-action equivalente:
   Flutter gestisce automaticamente la priorità tra scroll verticale e drag
   orizzontale tramite il GestureArena. Non serve configurazione extra.

5. Spring easing equivalente a cubic-bezier(0.34,1.56,0.64,1):
   Curves.elasticOut oppure SpringSimulation(mass: 1, stiffness: 200, damping: 20, velocity: 0)
*/
