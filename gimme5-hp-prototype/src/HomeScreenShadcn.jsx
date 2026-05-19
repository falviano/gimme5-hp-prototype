import { useState } from 'react'
import cardObiettivoOverlay from './assets/card-obiettivo-overlay.jpg'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress, ProgressTrack, ProgressIndicator } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

/* ─── Icons ──────────────────────────────────────────────────────────────── */

const EyeOpenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

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
    <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
  </svg>
)

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const ICON_CHAT      = 'https://www.figma.com/api/mcp/asset/9eb48eb5-e937-4be8-9c10-00752469629e'
const IMG_HELP_ILLUS = 'https://www.figma.com/api/mcp/asset/58628b07-55f9-4d2f-ad42-a47fa86f8b80'
const IMG_PARTNER_LOGO = 'https://www.figma.com/api/mcp/asset/ccf16c01-58ca-495e-8782-5cb02f57433d'

/* ─── Nav Icons ──────────────────────────────────────────────────────────── */

const HomeIconFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const ChartNoAxesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18v3"/><path d="M8 14v7"/><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/>
    <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 7.354a.5.5 0 0 1-.707 0L2 14"/>
  </svg>
)

const ArrowRightLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

/* ─── Amount mask (Wise-style, zero layout shift) ────────────────────────── */
const SPRING_EASE = 'cubic-bezier(0.34, 1.56, 0.64, 1)'

function Amount({ value, hidden, style = {} }) {
  const chars = value.split('')
  const totalDigits = chars.filter(ch => /\d/.test(ch)).length
  let digitIdx = 0

  return (
    <span style={{ display: 'inline-flex', verticalAlign: 'baseline', fontVariantNumeric: 'tabular-nums', ...style }}>
      {chars.map((ch, i) => {
        if (!/\d/.test(ch)) return <span key={i} style={{ display: 'inline-block' }}>{ch}</span>
        const di = digitIdx++
        const dIdx = hidden ? di : (totalDigits - 1 - di)
        const dExit = dIdx * 70
        const dEntr = dExit + 20
        return (
          <span key={i} style={{ display: 'inline-grid' }}>
            <span style={{
              gridArea: '1/1', opacity: hidden ? 0 : 1, filter: hidden ? 'blur(2px)' : 'blur(0px)',
              transform: hidden ? 'scale(0.45)' : 'scale(1)', transformOrigin: 'top center',
              transition: `opacity 150ms ease-in ${dExit}ms, filter 150ms ease-in ${dExit}ms, transform 150ms ease-in ${dExit}ms`,
            }}>{ch}</span>
            <span style={{
              gridArea: '1/1', opacity: hidden ? 1 : 0, filter: hidden ? 'blur(0px)' : 'blur(2px)',
              transform: hidden ? 'scale(1)' : 'scale(0.45)', transformOrigin: 'top center',
              transition: `opacity 160ms ease-out ${dEntr}ms, filter 160ms ease-out ${dEntr}ms, transform 260ms ${SPRING_EASE} ${dEntr}ms`,
            }}>*</span>
          </span>
        )
      })}
    </span>
  )
}

/* ─── Card dimensions ────────────────────────────────────────────────────── */
const CW = 253
const CH = 300

/* ─── Figma asset URLs ───────────────────────────────────────────────────── */
const IMG_PIGGY  = 'https://www.figma.com/api/mcp/asset/920a3603-19b6-4013-87fe-a7571823023d'
const IMG_OBJ_OVL = cardObiettivoOverlay
const IMG_AVATAR = 'https://www.figma.com/api/mcp/asset/d6f02170-136a-4a10-af2f-905d6f9a8162'

/* ─── PlusBtn ────────────────────────────────────────────────────────────── */
function PlusBtn() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="size-12 rounded-full border-[#b4b4b4] bg-white hover:bg-white cursor-default flex-shrink-0"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </Button>
  )
}

/* ─── Card Crea ──────────────────────────────────────────────────────────── */
function CardCrea({ onClick, handlers = {} }) {
  return (
    <Card
      onClick={onClick}
      {...handlers}
      className="relative flex-shrink-0 rounded-[32px] bg-white shadow-none ring-0 border-0 justify-between p-0 gap-0"
      style={{ width: CW, height: CH }}
    >
      {/* Dashed border */}
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} width={CW} height={CH}>
        <rect x={0.75} y={0.75} width={CW - 1.5} height={CH - 1.5}
          rx={31.25} ry={31.25}
          fill="none" stroke="#b4b4b4" strokeWidth={1.5} strokeDasharray="8 6" />
      </svg>
      <CardContent className="flex flex-col justify-between h-full p-6">
        <p className="font-[Inter,sans-serif] font-medium text-base leading-6 text-black">
          Crea un nuovo obiettivo e inizia a risparmiare
        </p>
        <PlusBtn />
      </CardContent>
    </Card>
  )
}

/* ─── Card Salvadanaio ───────────────────────────────────────────────────── */
function CardSalvadanaio({ hidden, amount = '200€', onClick, handlers = {} }) {
  return (
    <Card
      onClick={onClick}
      {...handlers}
      className="relative flex-shrink-0 rounded-[32px] bg-[#FEEEE7] shadow-none ring-0 border-[1.5px] border-[#ffb49d] p-0 gap-0"
      style={{ width: CW, height: CH }}
    >
      {/* Piggy bank illustration */}
      <img
        draggable={false}
        src={IMG_PIGGY}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: 88, top: 114, width: 181, height: 162 }}
      />
      <CardContent className="flex flex-col gap-3 p-6 relative">
        <p className="font-[Archivo,sans-serif] font-bold text-2xl leading-7 text-black">
          Salvadanaio generico
        </p>
        <p className="font-[Inter,sans-serif] font-normal text-[11px] leading-[14px] text-[#4A4A4A]">
          Fondo(1) · Regole(0) · Obiettivi(0)
        </p>
        <p className="font-[Archivo,sans-serif] font-bold text-2xl leading-7 text-black mt-6 relative">
          <Amount value={amount} hidden={hidden} />
        </p>
      </CardContent>
    </Card>
  )
}

/* ─── Card Obiettivo ─────────────────────────────────────────────────────── */
function CardObiettivo({ hidden, onClick, handlers = {} }) {
  const saved = 100, total = 5000
  const progressPct = Math.round(saved / total * 100)

  return (
    <Card
      onClick={onClick}
      {...handlers}
      className="relative flex-shrink-0 rounded-[32px] shadow-none ring-0 border-0 p-3 gap-0 justify-between"
      style={{ width: CW, height: CH }}
    >
      {/* Full-bleed photo */}
      <img draggable={false} src={IMG_OBJ_OVL} alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      {/* Top row */}
      <div className="relative flex h-7 items-center justify-between w-full flex-shrink-0">
        <Badge
          className="bg-[#FFEB69] text-black border-0 rounded-full px-3 py-1.5 h-auto gap-1 font-[Archivo,sans-serif] font-medium text-xs"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          Casa
        </Badge>
        <AvatarGroup className="gap-0">
          <Avatar className="size-7 ring-0 after:hidden border-0">
            <AvatarImage src={IMG_AVATAR} />
          </Avatar>
          <Avatar className="size-7 ring-0 after:hidden border-0" style={{ background: 'linear-gradient(180deg, #942a07 0%, #d03f00 50%, #f8835d 98%)' }}>
            <AvatarFallback className="bg-transparent text-[rgba(255,255,255,0.6)] font-[Archivo,sans-serif] font-semibold text-xs">
              MA
            </AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>

      {/* Bottom section */}
      <div className="relative flex flex-col w-full flex-shrink-0">
        {/* Yellow band */}
        <div className="bg-[#FFEB69] rounded-t-2xl px-3 overflow-hidden flex-shrink-0"
          style={{ height: 63, paddingTop: 8, paddingBottom: 32, marginBottom: -33 }}>
          <div className="flex items-center justify-between h-[14px]">
            <span className="font-[Archivo,sans-serif] font-medium text-[11px] leading-[14px] text-black whitespace-nowrap">Vanguard Diversificato</span>
            <span className="font-[Archivo,sans-serif] font-medium text-[11px] leading-[14px] text-black whitespace-nowrap">giu 2026</span>
          </div>
        </div>

        {/* White box */}
        <div className="bg-white rounded-b-2xl px-3 py-2 flex flex-col gap-3">
          <div className="flex justify-between items-center overflow-hidden">
            <span className="font-[Archivo,sans-serif] font-semibold text-base leading-5 text-black whitespace-nowrap">Anticipo per la Casa</span>
            <span className="font-[Archivo,sans-serif] font-semibold text-base leading-5 text-black whitespace-nowrap">{progressPct}%</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between overflow-hidden">
              <span className="font-[Archivo,sans-serif] font-semibold text-base leading-5 text-black whitespace-nowrap">
                <Amount value="100€" hidden={hidden} />
              </span>
              <span className="font-[Archivo,sans-serif] font-medium text-[11px] leading-[14px] text-[#767676] whitespace-nowrap">
                su <Amount value="5.000€" hidden={hidden} />
              </span>
            </div>
            <Progress value={progressPct} className="gap-0">
              <ProgressTrack className="h-1 bg-[#EBEBEB] rounded-full">
                <ProgressIndicator className="bg-[#F55A27] rounded-full" />
              </ProgressTrack>
            </Progress>
          </div>

          <Badge
            className="bg-[#FFEB69] text-black border-0 rounded-full px-2 py-1 h-auto gap-2 font-[Archivo,sans-serif] font-medium text-[11px] self-start"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
            </svg>
            <Amount value="100€" hidden={hidden} />/mese
          </Badge>
        </div>
      </div>
    </Card>
  )
}

/* ─── Cards Section ──────────────────────────────────────────────────────── */
function CardsSection({ obiettivi, hidden }) {
  const hasObiettivi = obiettivi > 0
  const TOTAL = 200, OBJ_AMOUNT = 100
  const salvAmount = hasObiettivi ? `${TOTAL - OBJ_AMOUNT}€` : `${TOTAL}€`

  return (
    <div className="flex flex-col gap-3 px-4">
      {hasObiettivi ? (
        <>
          <CardObiettivo hidden={hidden} />
          <CardSalvadanaio hidden={hidden} amount={salvAmount} />
          <CardCrea />
        </>
      ) : (
        <>
          <CardCrea />
          <CardSalvadanaio hidden={hidden} amount={salvAmount} />
        </>
      )}
    </div>
  )
}

/* ─── Help Pill ──────────────────────────────────────────────────────────── */
function HelpPill({ onDismiss }) {
  return (
    <Card className="bg-[#e1fccd] rounded-2xl shadow-none ring-0 border-0 p-4 relative overflow-hidden gap-0"
      style={{ height: 140 }}>
      <CardContent className="p-0 relative z-10 flex flex-col justify-between h-full" style={{ width: 191 }}>
        <p className="font-[Archivo,sans-serif] font-bold text-lg leading-[22px] text-black">
          Chi ci vede lungo guadagna di più
        </p>
        <div className="flex flex-col gap-1">
          <span className="font-[Inter,sans-serif] font-normal text-[11px] leading-[14px] text-black">power by</span>
          <img src={IMG_PARTNER_LOGO} alt="Finanz" style={{ width: 54.35, height: 12, display: 'block' }} />
        </div>
      </CardContent>

      {/* Illustration */}
      <div className="absolute pointer-events-none z-0"
        style={{ left: '52%', top: '50%', width: 136, height: 113, transform: 'translateY(-46%) rotate(-7.96deg)', transformOrigin: 'center center' }}>
        <img src={IMG_HELP_ILLUS} alt="" className="w-full h-full object-contain" />
      </div>

      <Button
        variant="secondary"
        size="icon"
        onClick={onDismiss}
        className="absolute top-4 right-4 z-10 size-8 rounded-full bg-black text-white hover:bg-neutral-800"
      >
        <XIcon />
      </Button>
    </Card>
  )
}

/* ─── Icon button helper ─────────────────────────────────────────────────── */
function IconBtn({ onClick, 'aria-label': ariaLabel, children }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      aria-label={ariaLabel}
      className="size-8 rounded-full bg-[#ebebeb] hover:bg-[#d8d8d8] text-black flex-shrink-0"
    >
      {children}
    </Button>
  )
}

/* ─── Nav Bar ─────────────────────────────────────────────────────────────── */
function NavTab({ icon, label, active, gap = 2 }) {
  return (
    <div className="w-[62px] flex-shrink-0 flex flex-col items-center justify-end cursor-default" style={{ gap }}>
      <div style={{ color: active ? '#F55A27' : '#5C5C5C' }}>{icon}</div>
      <span className={cn('text-[11px] leading-[14px] font-[Inter,sans-serif] font-normal', active ? 'text-[#F55A27]' : 'text-[#5C5C5C]')}>
        {label}
      </span>
    </div>
  )
}

function NavBar() {
  return (
    <div className="bg-[#F6F6F6] flex-shrink-0 relative z-40">
      <div className="border-t border-[#ebebeb] border-t-[0.5px] flex items-end justify-center gap-3 pt-3 pb-1.5">
        <NavTab icon={<HomeIconFilled />} label="Home" active />
        <NavTab icon={<ChartNoAxesIcon />} label="Obiettivi" gap={4} />
        <div className="w-[62px] flex-shrink-0 flex flex-col items-center justify-end relative">
          <span className="text-[11px] leading-[14px] text-[#5C5C5C] font-[Inter,sans-serif]">Investi</span>
          <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 size-12 rounded-full bg-black flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
              <line x1="7" y1="1" x2="7" y2="13"/><line x1="1" y1="7" x2="13" y2="7"/>
            </svg>
          </div>
        </div>
        <NavTab icon={<ArrowRightLeftIcon />} label="Movimenti" />
        <NavTab icon={<UserIcon />} label="Profilo" />
      </div>
      <div className="flex items-center justify-center pt-2.5 pb-1.5">
        <div className="w-36 h-[5px] rounded-full bg-[#090909]" />
      </div>
    </div>
  )
}

/* ─── Home Screen ─────────────────────────────────────────────────────────── */
export default function HomeScreenShadcn() {
  const [obiettivi, setObiettivi] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [helpDismissed, setHelpDismissed] = useState(false)

  const hasObiettivi = obiettivi > 0

  return (
    <div className="h-full flex flex-col bg-[#F6F6F6] relative">

      <div className="no-scrollbar flex-1 overflow-y-auto overflow-x-hidden">

        {/* Greeting */}
        <div className="flex items-start justify-between p-4 pb-0">
          <div className="w-[291px] flex-shrink-0">
            <p className="font-[Archivo,sans-serif] font-bold text-2xl leading-7 text-black mb-2">
              {hasObiettivi ? (
                <>Ciao <span className="text-[#F55A27]">Filippo!</span> ormai lo sai anche tu: <span className="text-[#F55A27]">stai andando alla grande!</span></>
              ) : (
                <>Ciao <span className="text-[#F55A27]">Filippo!</span> la tua Routine è attiva, <span className="text-[#F55A27]">manca solo una cosa</span></>
              )}
            </p>
            <p className="font-[Inter,sans-serif] font-medium text-sm leading-[18px] text-[#5d5d5d]">
              {hasObiettivi ? 'I tuoi obiettivi non si fermano' : 'Nessun obiettivo impostato'}
            </p>
          </div>
          <Button variant="ghost" size="icon" aria-label="Supporto"
            className="p-0 size-6 bg-transparent hover:bg-transparent flex-shrink-0">
            <img src={ICON_CHAT} alt="" className="size-6 block" />
          </Button>
        </div>

        {/* Balance */}
        <div className="px-4 pt-6">
          <p className="font-[Inter,sans-serif] font-normal text-xs leading-4 text-[#5D5D5D] mb-1">Totale accumulato</p>
          <div className="flex items-center">
            <p className="font-[Archivo,sans-serif] font-bold text-[36px] leading-10 text-black whitespace-nowrap">
              <Amount value="200,00" hidden={hidden} style={{ verticalAlign: 'top' }} />€
            </p>
            <div className="flex gap-3 ml-3.5">
              <IconBtn onClick={() => setHidden(h => !h)} aria-label={hidden ? 'Mostra' : 'Nascondi'}>
                {hidden ? <EyeOpenIcon /> : <EyeOffIcon />}
              </IconBtn>
              <IconBtn aria-label="Grafico rendimento"><ChartIcon /></IconBtn>
            </div>
            <button
              onClick={() => setObiettivi(o => o === 0 ? 1 : 0)}
              className="ml-auto px-2.5 py-1 rounded-full border-[1.5px] border-[#e0e0e0] bg-transparent text-[10px] cursor-pointer font-[Inter,sans-serif] text-[#999] leading-none flex-shrink-0"
            >
              {obiettivi === 0 ? '+ obiettivo' : 'resetta'}
            </button>
          </div>
        </div>

        {/* Section header */}
        <div className="flex justify-between items-center px-4 pt-6">
          <p className="font-[Archivo,sans-serif] font-semibold text-base leading-5 text-black">
            I tuoi Obiettivi ({obiettivi})
          </p>
          <Button variant="ghost" size="icon" className="size-8 bg-transparent hover:bg-transparent" aria-label="Vai agli obiettivi">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Button>
        </div>

        {/* Cards */}
        <div className="pt-4">
          <CardsSection obiettivi={obiettivi} hidden={hidden} />
        </div>

        {/* Help pill */}
        {!helpDismissed && (
          <div className="px-4 mt-6">
            <p className="font-[Archivo,sans-serif] font-semibold text-base leading-5 text-black mb-3">
              Bisogno di aiuto?
            </p>
            <HelpPill onDismiss={() => setHelpDismissed(true)} />
          </div>
        )}

        <div className="h-5" />
      </div>

      <NavBar />
    </div>
  )
}
