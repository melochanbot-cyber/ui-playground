import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, DemoCard, CodeSnippet } from '../components/Section'

/* ── Glassmorphism ── */
function GlassmorphismDemo() {
  const [blur, setBlur] = useState(12)
  const [opacity, setOpacity] = useState(0.15)
  const [border, setBorder] = useState(0.2)

  return (
    <div>
      <div className="relative h-64 rounded-xl overflow-hidden mb-4">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600">
          <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-pink-400/60" />
          <div className="absolute top-16 right-12 w-32 h-32 rounded-full bg-blue-400/60" />
          <div className="absolute bottom-8 left-1/3 w-28 h-28 rounded-full bg-violet-400/60" />
        </div>
        {/* Glass Cards */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
          <div
            className="w-48 h-40 rounded-xl p-4 flex flex-col justify-center"
            style={{
              background: `rgba(255,255,255,${opacity})`,
              backdropFilter: `blur(${blur}px)`,
              border: `1px solid rgba(255,255,255,${border})`,
            }}
          >
            <p className="text-white font-semibold text-sm">Glass Card</p>
            <p className="text-white/70 text-xs mt-1">Frosted glass effect with adjustable parameters</p>
          </div>
          <div
            className="w-48 h-40 rounded-xl p-4 flex flex-col justify-center hidden md:flex"
            style={{
              background: `rgba(0,0,0,${opacity})`,
              backdropFilter: `blur(${blur}px)`,
              border: `1px solid rgba(255,255,255,${border * 0.5})`,
            }}
          >
            <p className="text-white font-semibold text-sm">Dark Glass</p>
            <p className="text-white/70 text-xs mt-1">Dark variant for contrast</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <label className="space-y-1">
          <span className="text-xs text-zinc-400">Blur: {blur}px</span>
          <input type="range" min="0" max="30" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full accent-indigo-500" />
        </label>
        <label className="space-y-1">
          <span className="text-xs text-zinc-400">Opacity: {opacity.toFixed(2)}</span>
          <input type="range" min="0" max="50" value={opacity * 100} onChange={e => setOpacity(Number(e.target.value) / 100)} className="w-full accent-indigo-500" />
        </label>
        <label className="space-y-1">
          <span className="text-xs text-zinc-400">Border: {border.toFixed(2)}</span>
          <input type="range" min="0" max="50" value={border * 100} onChange={e => setBorder(Number(e.target.value) / 100)} className="w-full accent-indigo-500" />
        </label>
      </div>
      <CodeSnippet code={`backdrop-filter: blur(${blur}px);
background: rgba(255,255,255,${opacity});
border: 1px solid rgba(255,255,255,${border});`} />
    </div>
  )
}

/* ── Neumorphism ── */
function NeumorphismDemo() {
  const [intensity, setIntensity] = useState(10)

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
        {/* Light flat */}
        <div
          className="h-28 rounded-2xl flex items-center justify-center bg-zinc-200"
          style={{
            boxShadow: `${intensity}px ${intensity}px ${intensity * 2}px #b8b8b8, -${intensity}px -${intensity}px ${intensity * 2}px #ffffff`,
          }}
        >
          <span className="text-zinc-600 text-xs font-medium">Light Flat</span>
        </div>
        {/* Light concave */}
        <div
          className="h-28 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
            boxShadow: `${intensity}px ${intensity}px ${intensity * 2}px #b8b8b8, -${intensity}px -${intensity}px ${intensity * 2}px #ffffff`,
          }}
        >
          <span className="text-zinc-600 text-xs font-medium">Light Concave</span>
        </div>
        {/* Dark flat */}
        <div
          className="h-28 rounded-2xl flex items-center justify-center bg-zinc-800"
          style={{
            boxShadow: `${intensity}px ${intensity}px ${intensity * 2}px #1a1a1f, -${intensity}px -${intensity}px ${intensity * 2}px #2e2e35`,
          }}
        >
          <span className="text-zinc-400 text-xs font-medium">Dark Flat</span>
        </div>
        {/* Dark pressed */}
        <div
          className="h-28 rounded-2xl flex items-center justify-center bg-zinc-800"
          style={{
            boxShadow: `inset ${intensity}px ${intensity}px ${intensity * 2}px #1a1a1f, inset -${intensity}px -${intensity}px ${intensity * 2}px #2e2e35`,
          }}
        >
          <span className="text-zinc-400 text-xs font-medium">Dark Pressed</span>
        </div>
      </div>
      <label className="space-y-1 block max-w-xs">
        <span className="text-xs text-zinc-400">Intensity: {intensity}px</span>
        <input type="range" min="2" max="25" value={intensity} onChange={e => setIntensity(Number(e.target.value))} className="w-full accent-indigo-500" />
      </label>
    </div>
  )
}

/* ── Shadows ── */
const shadows = [
  { name: 'Subtle', value: '0 1px 2px rgba(0,0,0,0.05)', code: 'shadow-sm' },
  { name: 'Small', value: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)', code: 'shadow' },
  { name: 'Medium', value: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)', code: 'shadow-md' },
  { name: 'Large', value: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)', code: 'shadow-lg' },
  { name: 'XL', value: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)', code: 'shadow-xl' },
  { name: '2XL', value: '0 25px 50px -12px rgba(0,0,0,0.25)', code: 'shadow-2xl' },
  { name: 'Indigo Glow', value: '0 10px 40px -10px rgba(99,102,241,0.4)', code: 'custom glow' },
  { name: 'Dramatic', value: '0 30px 60px -15px rgba(0,0,0,0.5)', code: 'custom dramatic' },
]

/* ── Gradients ── */
const gradients = [
  { name: 'Ocean', from: '#667eea', to: '#764ba2', css: 'from-indigo-400 to-purple-500' },
  { name: 'Sunset', from: '#f093fb', to: '#f5576c', css: 'from-pink-400 to-rose-500' },
  { name: 'Forest', from: '#11998e', to: '#38ef7d', css: 'from-emerald-500 to-green-400' },
  { name: 'Fire', from: '#f12711', to: '#f5af19', css: 'from-red-500 to-amber-400' },
  { name: 'Sky', from: '#667eea', to: '#00d2ff', css: 'from-indigo-400 to-cyan-400' },
  { name: 'Night', from: '#0f0c29', via: '#302b63', to: '#24243e', css: 'from-slate-900 via-indigo-900 to-slate-800' },
]

/* ── Glow Effects ── */
const glowColors = [
  { name: 'Indigo', color: 'rgba(99,102,241,', text: 'text-indigo-400' },
  { name: 'Violet', color: 'rgba(139,92,246,', text: 'text-violet-400' },
  { name: 'Cyan', color: 'rgba(34,211,238,', text: 'text-cyan-400' },
  { name: 'Emerald', color: 'rgba(52,211,153,', text: 'text-emerald-400' },
  { name: 'Rose', color: 'rgba(251,113,133,', text: 'text-rose-400' },
  { name: 'Amber', color: 'rgba(251,191,36,', text: 'text-amber-400' },
]

export function EffectsTab() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        Effects
      </h1>
      <p className="text-zinc-500 mb-8">Glass, shadows, gradients, glow — visual depth tools.</p>

      <Section title="Glassmorphism">
        <GlassmorphismDemo />
      </Section>

      <Section title="Neumorphism">
        <NeumorphismDemo />
      </Section>

      <Section title="Shadows">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shadows.map(s => (
            <div key={s.name} className="bg-zinc-800 rounded-xl p-5 flex flex-col items-center justify-center gap-2" style={{ boxShadow: s.value }}>
              <span className="text-sm font-medium text-zinc-300">{s.name}</span>
              <code className="text-[10px] text-zinc-500">{s.code}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Gradients">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gradients.map(g => (
            <div
              key={g.name}
              className="h-28 rounded-xl flex flex-col items-center justify-center gap-1"
              style={{
                background: g.via
                  ? `linear-gradient(135deg, ${g.from}, ${g.via}, ${g.to})`
                  : `linear-gradient(135deg, ${g.from}, ${g.to})`,
              }}
            >
              <span className="text-white font-semibold text-sm">{g.name}</span>
              <code className="text-white/60 text-[10px]">{g.css}</code>
            </div>
          ))}
          {/* Mesh gradient */}
          <div
            className="h-28 rounded-xl flex flex-col items-center justify-center gap-1 md:col-span-3 col-span-2"
            style={{
              background: 'radial-gradient(at 40% 20%, #818cf8 0px, transparent 50%), radial-gradient(at 80% 0%, #f472b6 0px, transparent 50%), radial-gradient(at 0% 50%, #34d399 0px, transparent 50%), radial-gradient(at 80% 50%, #fbbf24 0px, transparent 50%), radial-gradient(at 0% 100%, #60a5fa 0px, transparent 50%)',
              backgroundColor: '#18181b',
            }}
          >
            <span className="text-white font-semibold text-sm">Mesh Gradient</span>
            <code className="text-white/60 text-[10px]">multiple radial-gradient layers</code>
          </div>
        </div>
      </Section>

      <Section title="Blur & Backdrop">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Blur SM', filter: 'blur(4px)', code: 'blur(4px)' },
            { name: 'Blur MD', filter: 'blur(8px)', code: 'blur(8px)' },
            { name: 'Blur LG', filter: 'blur(16px)', code: 'blur(16px)' },
            { name: 'Saturate', filter: 'saturate(2)', code: 'saturate(2)' },
            { name: 'Grayscale', filter: 'grayscale(1)', code: 'grayscale(1)' },
            { name: 'Sepia', filter: 'sepia(1)', code: 'sepia(1)' },
          ].map(b => (
            <div key={b.name} className="relative h-24 rounded-xl overflow-hidden border border-zinc-800">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-500" />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backdropFilter: b.filter }}
              >
                <div className="text-center">
                  <span className="text-white font-medium text-sm block">{b.name}</span>
                  <code className="text-white/60 text-[10px]">{b.code}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Glow Effects">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {glowColors.map(g => (
            <div key={g.name} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex flex-col items-center gap-3">
              <span
                className={`text-2xl font-bold ${g.text}`}
                style={{ textShadow: `0 0 10px ${g.color}0.5), 0 0 30px ${g.color}0.3), 0 0 60px ${g.color}0.1)` }}
              >
                Neon
              </span>
              <motion.div
                className="w-full h-1 rounded-full"
                style={{ backgroundColor: `${g.color}1)`, boxShadow: `0 0 8px ${g.color}0.6)` }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <code className="text-[10px] text-zinc-500">{g.name} glow</code>
            </div>
          ))}
        </div>
        <DemoCard label="Pulsing Glow Border">
          <div className="flex gap-4 justify-center">
            {['indigo', 'violet', 'emerald'].map(color => (
              <motion.div
                key={color}
                className={`w-20 h-20 rounded-xl border-2 border-${color}-500/50`}
                animate={{
                  boxShadow: [
                    `0 0 5px var(--color-${color}-500/0.2)`,
                    `0 0 20px var(--color-${color}-500/0.4)`,
                    `0 0 5px var(--color-${color}-500/0.2)`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ))}
          </div>
        </DemoCard>
      </Section>
    </div>
  )
}
