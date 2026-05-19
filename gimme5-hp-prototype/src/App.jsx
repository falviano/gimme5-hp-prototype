import { useState } from 'react'
import HomeScreen from './HomeScreen.jsx'
import HomeScreenShadcn from './HomeScreenShadcn.jsx'

const PASSWORD = 'playnew'
const STORAGE_KEY = 'hp_proto_unlocked'

function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (value === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, '1')
      onUnlock()
    } else {
      setError(true)
      setValue('')
      setTimeout(() => setError(false), 1200)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <svg aria-label="Gimme5" width="64" height="64" viewBox="0 0 100 100" fill="none">
          <path d="M92.8 48.8C92.8 48.8 92.4 43.2 89.6 38.6C86.6 34 84.8 32.4 84.8 32.4C84.8 32.4 85.2 29.4 86 27.2C87 24.4 88.6 22.2 88.6 22.2C88.6 22.2 85.6 23.2 82.8 24.4C80 25.8 77.8 27 77.8 27C54.8 21.2 21.2 31.2 13 34.8L32.8 36.8L7.6 41.4L36 43L0 49.4L34.2 54.2L13.4 57.4L39.4 60.8L7.4 62.2C7.4 62.2 41.2 74.8 53.4 75.8C62 76.6 67 76.6 77.2 74C87 71.4 94 65 94 65L99 60.6L99.8 48.2C100 48.2 95.6 50.4 92.8 48.8ZM60.6 63.8C55.2 63.8 51.4 61.4 50.4 56.2H57.6C58 57.6 59.2 58.4 60.8 58.4C63 58.4 64.4 57 64.4 55.2C64.4 53.2 63 51.6 61.2 51.6C59.8 51.6 58.4 52.4 57.8 53.6H50.6L54 38.8H69.6V44.6H59.4L58.4 48.2C60 47 61.4 47 63.2 47C67.8 47 71.6 49.8 71.6 54.8C71.6 61.6 66.2 63.8 60.6 63.8Z" fill="#f55a27"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <span style={{ color: '#fff', fontSize: 18, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>HP Prototipo</span>
          <span style={{ color: '#666', fontSize: 13, fontFamily: 'Inter, sans-serif' }}>Inserisci la password per accedere</span>
        </div>
        <input
          type="password"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{
            width: 240, padding: '12px 16px', borderRadius: 16,
            background: '#2a2a2a', border: `1px solid ${error ? '#ef4444' : '#3a3a3a'}`,
            color: '#fff', fontSize: 15, textAlign: 'center', letterSpacing: '0.2em',
            fontFamily: 'Inter, sans-serif', outline: 'none',
          }}
        />
        {error && <span style={{ color: '#ef4444', fontSize: 12, fontFamily: 'Inter' }}>Password errata</span>}
        <button type="submit" style={{
          width: 240, padding: '12px 0', borderRadius: 16, background: '#f55a27',
          border: 'none', color: '#000', fontSize: 15, fontWeight: 600, cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
        }}>
          Entra
        </button>
      </form>
    </div>
  )
}

function DynamicIslandStatusBar() {
  return (
    <div style={{
      height: 59, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      paddingBottom: 3, flexShrink: 0, position: 'relative',
      background: '#f6f6f6',
    }}>
      {/* Time */}
      <div style={{
        position: 'absolute', left: 10, bottom: 3,
        fontFamily: '-apple-system, SF Pro Text, sans-serif',
        fontSize: 16, fontWeight: 600, letterSpacing: -0.3,
        color: '#000', width: 54, textAlign: 'center',
      }}>9:41</div>
      {/* Dynamic Island */}
      <div style={{
        width: 125, height: 37, background: '#000', borderRadius: 100,
        flexShrink: 0,
      }} />
      {/* Signal/Wifi/Battery */}
      <div style={{
        position: 'absolute', right: 11, bottom: 4,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        {/* Signal bars */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#000">
          <rect x="0" y="7" width="3" height="5" rx="0.5"/>
          <rect x="4.5" y="5" width="3" height="7" rx="0.5"/>
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.5"/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#000" strokeWidth="1.4" strokeLinecap="round">
          <circle cx="8" cy="10" r="1.5" fill="#000" stroke="none"/>
          <path d="M4.5 7.5C5.5 6.4 6.7 5.9 8 5.9s2.5.5 3.5 1.6"/>
          <path d="M1.5 4.5C3.1 2.8 5.4 2 8 2s4.9.8 6.5 2.5"/>
        </svg>
        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="2" stroke="#000" strokeOpacity="0.5"/>
          <rect x="2" y="2" width="17" height="9" rx="1" fill="#000"/>
          <path d="M24 4.5v4c.8-.3 1.5-1.2 1.5-2s-.7-1.7-1.5-2z" fill="#000" fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  )
}

export default function App() {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem(STORAGE_KEY) === '1')
  const [useShadcn, setUseShadcn] = useState(false)

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-start',
      padding: '20px 0 40px', background: '#1a1a1a',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12,
      }}>
        <span style={{ color: '#3a3a3a', fontSize: 12, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
          Gimme5 · HP Prototype
        </span>
        <button
          onClick={() => setUseShadcn(s => !s)}
          style={{
            padding: '3px 10px', borderRadius: 99, fontSize: 10, cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: 1,
            background: useShadcn ? '#f55a27' : '#2a2a2a',
            border: '1px solid ' + (useShadcn ? '#f55a27' : '#3a3a3a'),
            color: useShadcn ? '#000' : '#666',
          }}
        >
          {useShadcn ? 'shadcn' : 'original'}
        </button>
      </div>

      {/* Phone frame */}
      <div style={{
        width: 375, height: 812, borderRadius: 44,
        overflow: 'hidden', position: 'relative', flexShrink: 0,
        boxShadow: '0 32px 80px rgba(0,0,0,.6), 0 0 0 10px #111',
        background: '#f6f6f6',
        display: 'flex', flexDirection: 'column',
      }}>
        <DynamicIslandStatusBar />
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {useShadcn ? <HomeScreenShadcn /> : <HomeScreen />}
        </div>
      </div>
    </div>
  )
}
