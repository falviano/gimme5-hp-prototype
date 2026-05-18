import { useState, useRef, useCallback, useEffect } from 'react'
import cardObiettivoOverlay from './assets/card-obiettivo-overlay.jpg'
// FlickCardStack non più usato — logica replicata inline in CardsSection

/* ─── Icons ──────────────────────────────────────────────────────────────── */

// icon/eye — mostra quando amount è NASCOSTO (click per rivelare)
const EyeOpenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

// icon/eye-off — mostra quando amount è VISIBILE (click per nascondere)
const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
    <line x1="2" y1="2" x2="22" y2="22"/>
  </svg>
)

const ChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </svg>
)

// icon/gallery-horizontal (da Figma DS)
const GalleryHorizontalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1.333 2V14M14.667 2V14M5.333 2H10.667C11.403 2 12 2.597 12 3.333V12.667C12 13.403 11.403 14 10.667 14H5.333C4.597 14 4 13.403 4 12.667V3.333C4 2.597 4.597 2 5.333 2Z"/>
  </svg>
)

// icon/gallery-vertical-end — mostrata in gallery mode, indica "torna a stack"
const GalleryVerticalEndIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 2h10"/>
    <path d="M5 6h14"/>
    <rect x="3" y="10" width="18" height="12" rx="2"/>
  </svg>
)

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const ICON_CHAT = 'https://www.figma.com/api/mcp/asset/9eb48eb5-e937-4be8-9c10-00752469629e'
const IMG_HELP_ILLUS   = 'https://www.figma.com/api/mcp/asset/58628b07-55f9-4d2f-ad42-a47fa86f8b80'
const IMG_PARTNER_LOGO = 'https://www.figma.com/api/mcp/asset/ccf16c01-58ca-495e-8782-5cb02f57433d'

const ChatIcon = () => (
  <img src={ICON_CHAT} alt="" style={{ width: 24, height: 24, display: 'block' }} />
)

/* ─── Nav Icons ──────────────────────────────────────────────────────────── */

const HomeIconFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const ChartNoAxesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18v3"/>
    <path d="M8 14v7"/>
    <path d="M12 16v5"/>
    <path d="M16 14v7"/>
    <path d="M20 10v11"/>
    <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 7.354a.5.5 0 0 1-.707 0L2 14"/>
  </svg>
)

const ArrowRightLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 3 4 4-4 4"/>
    <path d="M20 7H4"/>
    <path d="m8 21-4-4 4-4"/>
    <path d="M4 17h16"/>
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

/* ─── Gimme5 Logo ────────────────────────────────────────────────────────── */

const Gimme5Logo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M92.8 48.8C92.8 48.8 92.4 43.2 89.6 38.6C86.6 34 84.8 32.4 84.8 32.4C84.8 32.4 85.2 29.4 86 27.2C87 24.4 88.6 22.2 88.6 22.2C88.6 22.2 85.6 23.2 82.8 24.4C80 25.8 77.8 27 77.8 27C54.8 21.2 21.2 31.2 13 34.8L32.8 36.8L7.6 41.4L36 43L0 49.4L34.2 54.2L13.4 57.4L39.4 60.8L7.4 62.2C7.4 62.2 41.2 74.8 53.4 75.8C62 76.6 67 76.6 77.2 74C87 71.4 94 65 94 65L99 60.6L99.8 48.2C100 48.2 95.6 50.4 92.8 48.8ZM60.6 63.8C55.2 63.8 51.4 61.4 50.4 56.2H57.6C58 57.6 59.2 58.4 60.8 58.4C63 58.4 64.4 57 64.4 55.2C64.4 53.2 63 51.6 61.2 51.6C59.8 51.6 58.4 52.4 57.8 53.6H50.6L54 38.8H69.6V44.6H59.4L58.4 48.2C60 47 61.4 47 63.2 47C67.8 47 71.6 49.8 71.6 54.8C71.6 61.6 66.2 63.8 60.6 63.8Z" fill="#f55a27"/>
  </svg>
)

/* ─── Amount mask (Wise-style, zero layout shift) ────────────────────────── */
const FADE_EASE = 'opacity 220ms cubic-bezier(0.25, 0.1, 0.25, 1)'

// Offset pseudo-random per stagger organico
const CHAR_OFFSETS  = [0, 15, 5, 25, 10, 20, 8, 18]
const SPRING_EASE   = 'cubic-bezier(0.34, 1.56, 0.64, 1)'  // overshoot leggero

function Amount({ value, hidden, style = {} }) {
  const chars = value.split('')
  const totalDigits = chars.filter(ch => /\d/.test(ch)).length
  let digitIdx = 0

  return (
    <span style={{ display: 'inline-flex', verticalAlign: 'baseline', fontVariantNumeric: 'tabular-nums', ...style }}>
      {chars.map((ch, i) => {
        if (!/\d/.test(ch)) {
          return <span key={i} style={{ display: 'inline-block' }}>{ch}</span>
        }

        const di   = digitIdx++
        // Nascondere: onda sx→dx | Rivelare: onda dx→sx
        const dIdx  = hidden ? di : (totalDigits - 1 - di)
        const dExit = dIdx * 70
        const dEntr = dExit + 20

        return (
          <span key={i} style={{ display: 'inline-grid' }}>
            <span style={{
              gridArea: '1/1',
              opacity:         hidden ? 0 : 1,
              filter:          hidden ? 'blur(2px)' : 'blur(0px)',
              transform:       hidden ? 'scale(0.45)' : 'scale(1)',
              transformOrigin: 'top center',
              transition: `opacity 150ms ease-in ${dExit}ms, filter 150ms ease-in ${dExit}ms, transform 150ms ease-in ${dExit}ms`,
            }}>{ch}</span>
            <span style={{
              gridArea: '1/1',
              opacity:         hidden ? 1 : 0,
              filter:          hidden ? 'blur(0px)' : 'blur(2px)',
              transform:       hidden ? 'scale(1)' : 'scale(0.45)',
              transformOrigin: 'top center',
              transition: `opacity 160ms ease-out ${dEntr}ms, filter 160ms ease-out ${dEntr}ms, transform 260ms ${SPRING_EASE} ${dEntr}ms`,
            }}>*</span>
          </span>
        )
      })}
    </span>
  )
}

/* ─── Card dimensions (Figma: 253×300) ──────────────────────────────────── */

const CW = 253
const CH = 300

// Slot geometry — base allineata (dy uguale per tutte le card)
// transformOrigin:center bottom → le card ruotano attorno alla stessa base
const SLOTS = {
  '-2': { dx: -20, dy:  0, rot: +8, z: 1 },
  '-1': { dx:   2, dy: -1, rot:  -8, z: 1 },
   '0': { dx:   0, dy: 13, rot:   0, z: 3 },
   '1': { dx:  -3, dy: -2, rot:  +9, z: 2, origin: 'right bottom' },
   '2': { dx: -20, dy:  0, rot: -4, z: 1 },
}
const FLICK_PX  = 72
const FLICK_VEL = 0.4

// Path squircle per il dashed border di CardCrea.
// La card usa cornerShape:'squircle' (Chrome 135+): il clip è squircle.
// Il border SVG deve seguire lo stesso percorso — altrimenti agli angoli
// il border circolare e il clip squircle non coincidono.
// inset=0.75 → il centro dello stroke è a 0.75px dal bordo,
// così il bordo esterno cade esattamente sul profilo squircle della card.
function squircleBorderPath(W, H, r, inset) {
  const x0 = inset, y0 = inset, x1 = W - inset, y1 = H - inset
  const ri = r  // corner radius invariato (inset è solo posizionamento stroke)
  const p  = Math.min(2 * ri, (x1 - x0) / 2, (y1 - y0) / 2)
  const b  = ri / Math.cos(Math.PI / 8) // r / cos(22.5°)
  const la = p - b
  return [
    `M ${x0 + p} ${y0}`,
    `L ${x1 - p} ${y0}`,
    `C ${x1 - p + la} ${y0}, ${x1} ${y0 + p - la}, ${x1} ${y0 + p}`,
    `L ${x1} ${y1 - p}`,
    `C ${x1} ${y1 - p + la}, ${x1 - p + la} ${y1}, ${x1 - p} ${y1}`,
    `L ${x0 + p} ${y1}`,
    `C ${x0 + p - la} ${y1}, ${x0} ${y1 - p + la}, ${x0} ${y1 - p}`,
    `L ${x0} ${y0 + p}`,
    `C ${x0} ${y0 + p - la}, ${x0 + p - la} ${y0}, ${x0 + p} ${y0}`,
    'Z',
  ].join(' ')
}

const CARD_BORDER_PATH = squircleBorderPath(CW, CH, 32, 0.75)



/* ─── Figma asset URLs ───────────────────────────────────────────────────── */
const IMG_PIGGY    = 'https://www.figma.com/api/mcp/asset/920a3603-19b6-4013-87fe-a7571823023d'
const IMG_OBJ_OVL  = cardObiettivoOverlay
const IMG_AVATAR   = 'https://www.figma.com/api/mcp/asset/d6f02170-136a-4a10-af2f-905d6f9a8162'

/* ─── Shared + button ────────────────────────────────────────────────────── */
function PlusBtn() {
  return (
    <div style={{
      width: 48, height: 48, borderRadius: 99, flexShrink: 0,
      background: '#fff', border: '1px solid #b4b4b4',
      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default',
    }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </div>
  )
}

/* ─── Card Crea ──────────────────────────────────────────────────────────── */

function CardCrea({ style, isAbsolute, onClick, handlers = {} }) {
  return (
    <div onClick={onClick} {...handlers} style={{
      width: CW, height: CH, borderRadius: 32,
      background: '#fff', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: 24, flexShrink: 0,
      position: isAbsolute ? 'absolute' : 'relative',
      ...style,
    }}>
      {/* Dashed border: rx=31.25 → outer edge dello stroke coincide con borderRadius:32 */}
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} width={CW} height={CH}>
        <rect x={0.75} y={0.75} width={CW - 1.5} height={CH - 1.5}
          rx={31.25} ry={31.25}
          fill="none" stroke="#b4b4b4" strokeWidth={1.5} strokeDasharray="8 6" />
      </svg>
      <div style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16,
        color: '#000', lineHeight: '24px',
      }}>
        Crea un nuovo obiettivo e inizia a risparmiare
      </div>
      <PlusBtn borderColor="#b4b4b4" />
    </div>
  )
}

/* ─── Card Salvadanaio ───────────────────────────────────────────────────── */

function CardSalvadanaio({ hidden, amount = '200€', style, isAbsolute, onClick, handlers = {} }) {
  return (
    <div onClick={onClick} {...handlers} style={{
      width: CW, height: CH, borderRadius: 32,
      background: '#FEEEE7', border: '1.5px solid #ffb49d', overflow: 'hidden',
      padding: 24, flexShrink: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      position: isAbsolute ? 'absolute' : 'relative',
      ...style,
    }}>
      {/* Piggy bank illustration */}
      <img
        draggable={false}
        src={IMG_PIGGY}
        alt=""
        style={{
          position: 'absolute', left: 88, top: 114,
          width: 181, height: 162, pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', gap: 12 }}>
        <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 24, lineHeight: '28px', color: '#000' }}>
          Salvadanaio generico
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, lineHeight: '14px', color: '#4A4A4A' }}>
          Fondo(1) · Regole(0) · Obiettivi(0)
        </div>
      </div>

      {/* Amount */}
      <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 24, lineHeight: '28px', color: '#000', position: 'relative', marginTop: 24 }}>
        <Amount value={amount} hidden={hidden} />
      </div>
    </div>
  )
}

/* ─── Card Obiettivo ─────────────────────────────────────────────────────── */

function CardObiettivo({ hidden, style, isAbsolute, onClick, handlers = {} }) {
  const saved = 100, total = 5000
  const progressPct = Math.round(saved / total * 100) // 2%

  return (
    <div onClick={onClick} {...handlers} style={{
      width: CW, height: CH, borderRadius: 32,
      overflow: 'hidden', flexShrink: 0,
      position: isAbsolute ? 'absolute' : 'relative',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: 12,
      ...style,
    }}>
      {/* Full-bleed photo — absolute behind */}
      <img draggable={false} src={IMG_OBJ_OVL} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />

      {/* Top row: Casa chip + avatars — h:28px */}
      <div style={{ position: 'relative', display: 'flex', height: 28, alignItems: 'center', justifyContent: 'space-between', width: '100%', flexShrink: 0 }}>
        <div style={{ background: '#FFEB69', borderRadius: 200, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 4 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: 12, color: '#000', lineHeight: '16px' }}>Casa</span>
        </div>
        {/* Avatars — isolate stacking, mr:-4px */}
        <div style={{ display: 'flex', height: 28, alignItems: 'center', isolation: 'isolate' }}>
          <img draggable={false} src={IMG_AVATAR} alt="" style={{ width: 28, height: 28, borderRadius: 58, objectFit: 'cover', marginRight: -4, zIndex: 2, position: 'relative' }} />
          <div style={{ width: 28, height: 28, borderRadius: 999, background: 'linear-gradient(180deg, #942a07 0%, #d03f00 50.415%, #f8835d 98.003%)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
            <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: '16px' }}>MA</span>
          </div>
        </div>
      </div>

      {/* Bottom section — flex column, in normal flow */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', flexShrink: 0 }}>
        {/* Yellow band: h:63, pt:8 pb:32 px:12, mb:-33, top corners 16px */}
        <div style={{
          background: '#FFEB69', borderRadius: '16px 16px 0 0',
          height: 63, paddingTop: 8, paddingBottom: 32, paddingLeft: 12, paddingRight: 12,
          marginBottom: -33, overflow: 'hidden', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 14 }}>
            <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: 11, color: '#000', lineHeight: '14px', whiteSpace: 'nowrap' }}>Vanguard Diversificato</span>
            <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: 11, color: '#000', lineHeight: '14px', whiteSpace: 'nowrap' }}>giu 2026</span>
          </div>
        </div>
        {/* White box: px:12 py:8, gap:12, bottom corners 16px */}
        <div style={{ background: '#fff', borderRadius: '0 0 16px 16px', padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Title + % — Archivo SemiBold 16/20 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden' }}>
            <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 16, color: '#000', lineHeight: '20px', whiteSpace: 'nowrap' }}>Anticipo per la Casa</span>
            <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 16, color: '#000', lineHeight: '20px', whiteSpace: 'nowrap' }}>{progressPct}%</span>
          </div>
          {/* Amount + progress bar — gap:8 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden' }}>
              <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 16, color: '#000', lineHeight: '20px', whiteSpace: 'nowrap' }}>
                <Amount value="100€" hidden={hidden} />
              </span>
              {/* Archivo Medium 11px, color #767676 */}
              <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: 11, color: '#767676', lineHeight: '14px', whiteSpace: 'nowrap' }}>
                su <Amount value="5.000€" hidden={hidden} />
              </span>
            </div>
            <div style={{ background: '#EBEBEB', borderRadius: 100, height: 4, width: '100%' }}>
              <div style={{ background: '#F55A27', borderRadius: 100, height: 4, width: `${progressPct}%`, minWidth: 4 }} />
            </div>
          </div>
          {/* Monthly pill — py:4 px:8, gap:8, Archivo Medium 11px */}
          <div style={{ background: '#FFEB69', borderRadius: 1071, padding: '4px 8px', display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
            </svg>
            <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: 11, color: '#000', lineHeight: '14px', whiteSpace: 'nowrap' }}>
              <Amount value="100€" hidden={hidden} />/mese
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Cards Section ──────────────────────────────────────────────────────── */

function CardsSection({ obiettivi, galleryMode, hidden }) {
  const hasObiettivi = obiettivi > 0

  // ── Stack drag: 2-card flip ───────────────────────────────────────────────
  const [front2, setFront2]       = useState(0)
  const [drag2, setDrag2]         = useState(0)
  const [dragging2, setDragging2] = useState(false)
  const startX2 = useRef(null), startT2 = useRef(null), lastX2 = useRef(0)

  const onDrag2Start = useCallback((clientX) => {
    startX2.current = clientX; startT2.current = Date.now(); lastX2.current = clientX; setDragging2(true)
  }, [])
  const onDrag2Move = useCallback((clientX) => {
    if (startX2.current === null) return
    lastX2.current = clientX; setDrag2(clientX - startX2.current)
  }, [])
  const onDrag2End = useCallback(() => {
    if (startX2.current === null) return
    const dx = lastX2.current - startX2.current
    const vel = dx / Math.max(1, Date.now() - startT2.current)
    startX2.current = null; setDragging2(false); setDrag2(0)
    if (Math.abs(dx) > 60 || Math.abs(vel) > 0.4) setFront2(f => 1 - f)
  }, [])

  // ── Stack drag: multi-card (champions4good style) ─────────────────────────
  const [activeCard, setActiveCard]       = useState(0)
  const [stackDrag, setStackDrag]         = useState(0)
  const [stackDragging, setStackDragging] = useState(false)
  const [swipeOutState, setSwipeOutState] = useState(null) // { flyDir: -1|1 }
  const sX = useRef(null), sT = useRef(null), sLX = useRef(0)

  const onStackStart = useCallback((clientX) => {
    if (swipeOutState) return
    sX.current = clientX; sT.current = Date.now(); sLX.current = clientX; setStackDragging(true)
  }, [swipeOutState])
  const onStackMove = useCallback((clientX) => {
    if (sX.current === null) return
    sLX.current = clientX; setStackDrag(clientX - sX.current)
  }, [])
  const onStackEnd = useCallback((total) => {
    if (sX.current === null) return
    const dx = sLX.current - sX.current
    const vel = dx / Math.max(1, Date.now() - sT.current)
    sX.current = null; setStackDragging(false); setStackDrag(0)
    if (Math.abs(dx) > FLICK_PX || Math.abs(vel) > FLICK_VEL) {
      const flyDir = dx < 0 ? -1 : 1
      setSwipeOutState({ flyDir })
      setTimeout(() => {
        setActiveCard(a => (a + (dx < 0 ? 1 : -1) + total) % total)
        setSwipeOutState(null)
      }, 320)
    }
  }, [])

  // ── Cards array ───────────────────────────────────────────────────────────
  const TOTAL = 200, OBJ_AMOUNT = 100
  const salvAmount = hasObiettivi ? `${TOTAL - OBJ_AMOUNT}€` : `${TOTAL}€`

  const cards = hasObiettivi
    ? [
        <CardObiettivo key="ob" hidden={hidden} />,
        <CardSalvadanaio key="sv" hidden={hidden} amount={salvAmount} />,
        <CardCrea key="cr" />,
      ]
    : [
        <CardCrea key="cr" />,
        <CardSalvadanaio key="sv" hidden={hidden} amount={salvAmount} />,
      ]

  // ── Gallery drag (shared tutti i casi) ───────────────────────────────────
  const GPAD = 16, GGAP = 12
  const centerX = (375 - CW) / 2

  const galPanRef   = useRef(0)
  const [galPan, setGalPan] = useState(0)
  const galDX = useRef(null), galDP = useRef(0), galVel = useRef(0)
  const galLX = useRef(0), galLT = useRef(0)
  const galRaf = useRef(null), galContRef = useRef(null), galCardRefs = useRef([])

  const MAX_PAN = (cards.length - 1) * (CW + GGAP)

  useEffect(() => {
    if (!galleryMode) { galPanRef.current = 0; setGalPan(0) }
  }, [galleryMode])

  // Ripristina transition sui DOM element DURANTE il render (prima che React committi i nuovi transform)
  // Fix: el.style.transition='none' impostato via DOM diretto non viene visto da React → al toggle l'animazione sparisce
  const prevGalleryModeRef = useRef(galleryMode)
  if (prevGalleryModeRef.current !== galleryMode) {
    prevGalleryModeRef.current = galleryMode
    if (galRaf.current) cancelAnimationFrame(galRaf.current)
    galCardRefs.current.forEach(el => {
      if (el) el.style.transition = 'transform 0.45s cubic-bezier(0.34,1.35,0.64,1)'
    })
  }

  const rubberBand = useCallback((pan) => {
    if (pan < 0)       return pan * 0.25
    if (pan > MAX_PAN) return MAX_PAN + (pan - MAX_PAN) * 0.25
    return pan
  }, [MAX_PAN])

  const applyGalPan = useCallback((raw) => {
    const pan = rubberBand(raw)
    galPanRef.current = raw
    galCardRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.transition = 'none'
      el.style.transform  = `translateX(${GPAD + i * (CW + GGAP) - pan}px) translateY(0px) rotate(0deg)`
    })
  }, [rubberBand])

  const springTo = useCallback((targetRaw) => {
    let cur = rubberBand(galPanRef.current)
    const target = rubberBand(targetRaw)
    const run = () => {
      cur += (target - cur) * 0.18
      if (Math.abs(target - cur) < 0.2) {
        galPanRef.current = targetRaw
        galCardRefs.current.forEach((el, i) => {
          if (!el) return
          el.style.transform  = `translateX(${GPAD + i * (CW + GGAP) - target}px) translateY(0px) rotate(0deg)`
          el.style.transition = 'transform 0.45s cubic-bezier(0.34,1.35,0.64,1)'
        })
        setGalPan(targetRaw); return
      }
      galCardRefs.current.forEach((el, i) => {
        if (!el) return
        el.style.transition = 'none'
        el.style.transform  = `translateX(${GPAD + i * (CW + GGAP) - cur}px) translateY(0px) rotate(0deg)`
      })
      galRaf.current = requestAnimationFrame(run)
    }
    galRaf.current = requestAnimationFrame(run)
  }, [rubberBand])

  const onGalDown = useCallback((e) => {
    if (galRaf.current) cancelAnimationFrame(galRaf.current)
    galDX.current = e.clientX; galDP.current = galPanRef.current
    galVel.current = 0; galLX.current = e.clientX; galLT.current = Date.now()
    e.currentTarget.setPointerCapture(e.pointerId)
    e.currentTarget.style.cursor = 'grabbing'
    galCardRefs.current.forEach(el => { if (el) el.style.transition = 'none' })
  }, [])

  const onGalMove = useCallback((e) => {
    if (galDX.current === null) return
    const now = Date.now(), dt = Math.max(1, now - galLT.current)
    galVel.current = (galLX.current - e.clientX) / dt
    galLX.current = e.clientX; galLT.current = now
    applyGalPan(galDP.current + (galDX.current - e.clientX))
  }, [applyGalPan])

  const onGalUp = useCallback(() => {
    if (galDX.current === null) return
    galCardRefs.current.forEach(el => { if (el) el.style.transition = 'transform 0.45s cubic-bezier(0.34,1.35,0.64,1)' })
    galDX.current = null
    if (galContRef.current) galContRef.current.style.cursor = 'grab'
    const step = CW + GGAP, n = cards.length
    const predicted = galPanRef.current + galVel.current * 80
    const idx = Math.max(0, Math.min(n - 1, Math.round(predicted / step)))
    springTo(idx * step)
  }, [springTo, cards.length])

  // ── Render unificato (smart animate per tutti i casi) ─────────────────────
  const isMulti = hasObiettivi // 3 card

  return (
    <div
      ref={galContRef}
      style={{
        position: 'relative',
        height: galleryMode ? CH : (isMulti ? CH + 51 : CH + 30),
        overflow: galleryMode ? 'hidden' : 'visible',
        touchAction: 'pan-y',
        cursor: galleryMode ? 'grab' : 'default',
        transition: 'height 0.45s cubic-bezier(0.34,1.35,0.64,1)',
      }}
      onPointerDown={galleryMode ? onGalDown : undefined}
      onPointerMove={galleryMode ? onGalMove : undefined}
      onPointerUp={galleryMode ? onGalUp : undefined}
      onPointerCancel={galleryMode ? onGalUp : undefined}
    >
      {cards.map((card, i) => {
        let tx, ty, rot, zIdx, isDraggingThis = false, cardTransition = null

        if (galleryMode) {
          // ── Gallery: tutte le card in linea orizzontale ──
          tx = GPAD + i * (CW + GGAP) - galPan; ty = 0; rot = 0; zIdx = 1
        } else if (isMulti) {
          // ── Stack 3+ card: SLOTS fan layout + fly-out su swipe ──
          let rel = i - activeCard
          const n = cards.length
          if (rel >  n / 2) rel -= n
          if (rel < -n / 2) rel += n
          const clamped = Math.max(-2, Math.min(2, rel))
          const slot = SLOTS[String(clamped)]
          if (!slot) return null
          const isActiveCard = rel === 0
          if (swipeOutState && isActiveCard) {
            // Fly-out: la card attiva vola nella direzione dello swipe
            tx  = centerX + slot.dx + swipeOutState.flyDir * 480
            ty  = slot.dy
            rot = slot.rot + swipeOutState.flyDir * 20
            cardTransition = 'transform 0.28s cubic-bezier(0.4, 0, 1, 1)'
          } else if (isActiveCard && stackDragging) {
            tx  = centerX + slot.dx + stackDrag
            ty  = slot.dy
            rot = slot.rot + stackDrag * 0.04
            isDraggingThis = true
          } else {
            tx   = centerX + slot.dx
            ty   = slot.dy
            rot  = slot.rot
          }
          zIdx = isActiveCard && stackDragging ? 10 : slot.z
        } else {
          // ── Stack 2 card: flip layout ──
          const isFront = i === front2
          const liveDx  = isFront && dragging2 ? drag2       : 0
          const liveRot = isFront && dragging2 ? drag2 * 0.04 : 0
          tx   = (isFront ? centerX : centerX + 18) + liveDx
          ty   = isFront ? 0 : 12
          rot  = (isFront ? -9 : 5) + liveRot
          zIdx = isFront ? (dragging2 ? 10 : 2) : 1
          isDraggingThis = isFront && dragging2
        }

        // Pointer handlers per stack mode
        let pointerHandlers = {}
        if (!galleryMode) {
          if (isMulti) {
            const n = cards.length
            const absRel = (i - activeCard + n) % n
            const isActive = absRel === 0
            pointerHandlers = {
              onPointerDown: isActive ? (e) => {
                e.currentTarget.setPointerCapture(e.pointerId)
                onStackStart(e.clientX)
              } : (e) => {
                e.stopPropagation()
                if (!swipeOutState) {
                  const rel2 = (i - activeCard + n) % n > n / 2
                    ? (i - activeCard + n) % n - n
                    : (i - activeCard + n) % n
                  setActiveCard(a => (a + rel2 + n) % n)
                }
              },
              onPointerMove: isActive ? (e) => { if (stackDragging) onStackMove(e.clientX) } : undefined,
              onPointerUp: isActive ? () => onStackEnd(cards.length) : undefined,
              onPointerCancel: isActive ? () => onStackEnd(cards.length) : undefined,
            }
          } else {
            const isFront = i === front2
            pointerHandlers = {
              onPointerDown: isFront ? (e) => {
                e.currentTarget.setPointerCapture(e.pointerId); onDrag2Start(e.clientX)
              } : (e) => { e.stopPropagation(); setFront2(f => 1 - f) },
              onPointerMove: isFront ? (e) => { if (dragging2) onDrag2Move(e.clientX) } : undefined,
              onPointerUp: isFront ? onDrag2End : undefined,
              onPointerCancel: isFront ? onDrag2End : undefined,
            }
          }
        }

        return (
          <div
            key={i}
            ref={el => { galCardRefs.current[i] = el }}
            style={{
              position: 'absolute', left: 0, top: 0,
              transform: `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg)`,
              transformOrigin: 'center bottom',
              zIndex: zIdx,
              transition: isDraggingThis ? 'none' : (cardTransition || 'transform 0.45s cubic-bezier(0.34,1.35,0.64,1)'),
              cursor: !galleryMode ? (isDraggingThis ? 'grabbing' : 'grab') : 'default',
              userSelect: 'none', WebkitUserSelect: 'none',
            }}
            {...pointerHandlers}
          >
            {card}
          </div>
        )
      })}
    </div>
  )
}

/* ─── Help Pill ──────────────────────────────────────────────────────────── */

function HelpPill({ onDismiss }) {
  return (
    <div style={{
      background: '#e1fccd', borderRadius: 16,
      padding: 16, position: 'relative', overflow: 'hidden', height: 140,
    }}>
      {/* Left content */}
      <div style={{ position: 'relative', zIndex: 1, width: 191, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 18,
          color: '#000', lineHeight: '22px',
        }}>
          Chi ci vede lungo guadagna di più
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, lineHeight: '14px', color: '#000' }}>
            power by
          </div>
          <img src={IMG_PARTNER_LOGO} alt="Finanz" style={{ width: 54.35, height: 12, display: 'block' }} />
        </div>
      </div>

      {/* Illustration — 135.99×112.55px da Figma, posizione da misurazione diretta */}
      <div style={{
        position: 'absolute', left: '52%', top: '50%',
        width: 136, height: 113,
        pointerEvents: 'none', zIndex: 0,
        transform: 'translateY(-46%) rotate(-7.96deg)',
        transformOrigin: 'center center',
      }}>
        <img src={IMG_HELP_ILLUS} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* X button */}
      <button
        onClick={onDismiss}
        style={{
          width: 32, height: 32, borderRadius: 99,
          background: '#000', border: 'none',
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: '#fff',
          position: 'absolute', top: 16, right: 16, zIndex: 2,
        }}
      >
        <XIcon />
      </button>
    </div>
  )
}

/* ─── Nav Bar ─────────────────────────────────────────────────────────────── */

function NavBar() {
  return (
    <div style={{ background: '#F6F6F6', flexShrink: 0, position: 'relative', zIndex: 40 }}>
      {/* Tab row */}
      <div style={{
        borderTop: '0.5px solid #ebebeb',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        gap: 12, padding: '12px 0 6px',
      }}>
        <NavTab icon={<HomeIconFilled />} label="Home" active />
        <NavTab icon={<ChartNoAxesIcon />} label="Obiettivi" gap={4} />
        <div style={{ width: 62, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }}>
          <span style={{ fontSize: 11, lineHeight: '14px', color: '#5C5C5C', fontFamily: 'Inter, sans-serif' }}>Investi</span>
          <div style={{
            position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)',
            width: 48, height: 48, borderRadius: 99, background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
              <line x1="7" y1="1" x2="7" y2="13"/>
              <line x1="1" y1="7" x2="13" y2="7"/>
            </svg>
          </div>
        </div>
        <NavTab icon={<ArrowRightLeftIcon />} label="Movimenti" />
        <NavTab icon={<UserIcon />} label="Profilo" />
      </div>
      {/* Home indicator — pt:10 pb:6 come Figma (375×21 Hug) */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingTop: 10, paddingBottom: 6,
      }}>
        <div style={{ width: 144, height: 5, borderRadius: 99, background: '#090909' }} />
      </div>
    </div>
  )
}

function NavTab({ icon, label, active, gap = 2 }) {
  return (
    <div style={{
      width: 62, flexShrink: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-end', gap, cursor: 'default',
    }}>
      <div style={{ color: active ? '#F55A27' : '#5C5C5C' }}>{icon}</div>
      <span style={{
        fontSize: 11, lineHeight: '14px', fontFamily: 'Inter, sans-serif',
        color: active ? '#F55A27' : '#5C5C5C',
        fontWeight: 400,
      }}>
        {label}
      </span>
    </div>
  )
}

/* ─── Home Screen ─────────────────────────────────────────────────────────── */

export default function HomeScreen() {
  const [obiettivi, setObiettivi] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [galleryMode, setGalleryMode] = useState(false)
  const [helpDismissed, setHelpDismissed] = useState(false)

  const hasObiettivi = obiettivi > 0

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F6F6F6', position: 'relative' }}>

      {/* ── Scrollable content ── */}
      <div className="no-scrollbar" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>

        {/* ── Greeting ── */}
        <div style={{ padding: '16px 16px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ width: 291, flexShrink: 0 }}>
            <div style={{
              fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 24, color: '#000',
              lineHeight: '28px', marginBottom: 8,
            }}>
              {hasObiettivi ? (
                <>Ciao <span style={{ color: '#F55A27' }}>Filippo!</span> ormai lo sai anche tu: <span style={{ color: '#F55A27' }}>stai andando alla grande!</span></>
              ) : (
                <>Ciao <span style={{ color: '#F55A27' }}>Filippo!</span> la tua Routine è attiva, <span style={{ color: '#F55A27' }}>manca solo una cosa</span></>
              )}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, lineHeight: '18px', color: '#5d5d5d' }}>
              {hasObiettivi ? 'I tuoi obiettivi non si fermano' : 'Nessun obiettivo impostato'}
            </div>
          </div>
          <button
            aria-label="Supporto"
            style={{ background: 'none', border: 'none', cursor: 'default', padding: 0, lineHeight: 0, flexShrink: 0 }}
          >
            <ChatIcon />
          </button>
        </div>

        {/* ── Balance ── */}
        <div style={{ padding: '24px 16px 0' }}>
          <div style={{ fontSize: 12, lineHeight: '16px', fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5D5D5D', marginBottom: 4 }}>
            Totale accumulato
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              fontFamily: 'Archivo, sans-serif', fontWeight: 700,
              fontSize: 36, lineHeight: '40px', color: '#000', whiteSpace: 'nowrap',
            }}>
              <Amount value="200,00" hidden={hidden} style={{ verticalAlign: 'top' }} />€
            </div>
            <div style={{ display: 'flex', gap: 12, marginLeft: 14 }}>
              <button
                className="btn-icon"
                onClick={() => setHidden(h => !h)}
                aria-label={hidden ? 'Mostra' : 'Nascondi'}
              >
                {hidden ? <EyeOpenIcon /> : <EyeOffIcon />}
              </button>
              <button className="btn-icon" aria-label="Grafico rendimento">
                <ChartIcon />
              </button>
            </div>
            <button
              onClick={() => { setObiettivi(o => (o === 0 ? 1 : 0)); setGalleryMode(false) }}
              style={{
                marginLeft: 'auto',
                padding: '4px 10px', borderRadius: 99,
                border: '1.5px solid #e0e0e0', background: 'transparent',
                fontSize: 10, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                color: '#999', lineHeight: 1, flexShrink: 0,
              }}
            >
              {obiettivi === 0 ? '+ obiettivo' : 'resetta'}
            </button>
          </div>
        </div>

        {/* ── Obiettivi section header ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 16px 0',
        }}>
          <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 16, lineHeight: '20px', color: '#000' }}>
            I tuoi Obiettivi ({obiettivi})
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              className="btn-icon"
              onClick={() => setGalleryMode(m => !m)}
              aria-label={galleryMode ? 'Vista scroll' : 'Vista sovrapposta'}
            >
              {galleryMode ? <GalleryVerticalEndIcon /> : <GalleryHorizontalIcon />}
            </button>
            <button style={{
              width: 32, height: 32, background: 'none', border: 'none',
              cursor: 'default', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }} aria-label="Vai agli obiettivi">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div style={{ paddingTop: 24 }}>
          <CardsSection obiettivi={obiettivi} galleryMode={galleryMode} hidden={hidden} />
        </div>

        {/* ── Help pill ── */}
        {!helpDismissed && (
          <div style={{ padding: '0 16px 0', marginTop: galleryMode ? 24 : (hasObiettivi ? -14 : 6) }}>
            <div style={{
              fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 16,
              lineHeight: '20px', color: '#000', marginBottom: 12,
            }}>
              Bisogno di aiuto?
            </div>
            <HelpPill onDismiss={() => setHelpDismissed(true)} />
          </div>
        )}

        <div style={{ height: 20 }} />
      </div>

      {/* ── Nav bar ── */}
      <NavBar />
    </div>
  )
}
