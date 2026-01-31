import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, DemoCard, CodeSnippet } from '../components/Section'

const fonts = [
  { name: 'Inter', family: "'Inter', sans-serif", category: 'Sans' },
  { name: 'Poppins', family: "'Poppins', sans-serif", category: 'Sans' },
  { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'Sans' },
  { name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'Sans' },
  { name: 'Sora', family: "'Sora', sans-serif", category: 'Sans' },
  { name: 'Outfit', family: "'Outfit', sans-serif", category: 'Sans' },
  { name: 'Nunito', family: "'Nunito', sans-serif", category: 'Rounded' },
  { name: 'Playfair Display', family: "'Playfair Display', serif", category: 'Serif' },
  { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace", category: 'Mono' },
  { name: 'Noto Sans SC', family: "'Noto Sans SC', sans-serif", category: 'CJK' },
  { name: 'LXGW WenKai', family: "'LXGW WenKai', serif", category: 'CJK' },
  { name: 'Ma Shan Zheng', family: "'Ma Shan Zheng', cursive", category: 'CJK' },
]

const pairings = [
  { heading: 'Playfair Display', body: 'Inter', headFamily: "'Playfair Display', serif", bodyFamily: "'Inter', sans-serif" },
  { heading: 'Space Grotesk', body: 'DM Sans', headFamily: "'Space Grotesk', sans-serif", bodyFamily: "'DM Sans', sans-serif" },
  { heading: 'Poppins', body: 'Inter', headFamily: "'Poppins', sans-serif", bodyFamily: "'Inter', sans-serif" },
  { heading: 'Sora', body: 'Nunito', headFamily: "'Sora', sans-serif", bodyFamily: "'Nunito', sans-serif" },
  { heading: 'Outfit', body: 'JetBrains Mono', headFamily: "'Outfit', sans-serif", bodyFamily: "'JetBrains Mono', monospace" },
  { heading: 'LXGW WenKai', body: 'Noto Sans SC', headFamily: "'LXGW WenKai', serif", bodyFamily: "'Noto Sans SC', sans-serif" },
]

const cjkSamples = [
  '你好世界',
  '学习中文很有趣',
  '每天进步一点点',
  '读万卷书，行万里路',
  'ABCDabcd 你好 123',
]

export function TypographyTab() {
  const [fontSize, setFontSize] = useState(24)
  const [fontWeight, setFontWeight] = useState(400)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [selectedFont, setSelectedFont] = useState(fonts[0])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        Typography
      </h1>
      <p className="text-zinc-500 mb-8">Font exploration with CJK focus for MeloChinese.</p>

      <Section title="Font Explorer">
        <div className="grid gap-3">
          {fonts.map(font => (
            <div key={font.name} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="flex items-center gap-2 min-w-[180px]">
                <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">{font.category}</span>
                <span className="text-sm text-zinc-400 font-medium">{font.name}</span>
              </div>
              <p
                className="text-xl text-zinc-200 flex-1"
                style={{ fontFamily: font.family }}
              >
                The quick brown fox jumps over the lazy dog — 你好世界 123
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="CJK Focus — MeloChinese">
        <p className="text-sm text-zinc-400 mb-4">Chinese character rendering across fonts and sizes. Critical for learning app readability.</p>
        <div className="grid gap-4">
          {fonts.filter(f => f.category === 'CJK' || f.name === 'Inter').map(font => (
            <div key={font.name} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <p className="text-xs text-zinc-500 mb-3 font-mono">{font.name}</p>
              <div className="space-y-2">
                {[16, 24, 32, 48].map(size => (
                  <div key={size} className="flex items-baseline gap-3">
                    <span className="text-[10px] text-zinc-600 w-8 shrink-0">{size}px</span>
                    <p style={{ fontFamily: font.family, fontSize: `${size}px` }} className="text-zinc-200">
                      学习中文很有趣
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
          <p className="text-xs text-zinc-500 mb-4 font-mono">Side-by-side Comparison (48px)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fonts.filter(f => f.category === 'CJK').map(font => (
              <div key={font.name} className="text-center">
                <p className="text-zinc-200 mb-1" style={{ fontFamily: font.family, fontSize: '48px' }}>
                  你好世界
                </p>
                <p className="text-xs text-zinc-500">{font.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Font Pairings">
        <div className="grid md:grid-cols-2 gap-4">
          {pairings.map(pair => (
            <div key={pair.heading + pair.body} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-2xl text-zinc-200 mb-2" style={{ fontFamily: pair.headFamily }}>
                The Art of Design
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed" style={{ fontFamily: pair.bodyFamily }}>
                Good typography is invisible. Great typography is unforgettable. The perfect pairing brings harmony between heading and body text.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-400">H: {pair.heading}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-400">B: {pair.body}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Scale Playground">
        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Font</label>
              <select
                value={selectedFont.name}
                onChange={e => setSelectedFont(fonts.find(f => f.name === e.target.value) || fonts[0])}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200"
              >
                {fonts.map(f => <option key={f.name} value={f.name}>{f.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Size: {fontSize}px</label>
              <input type="range" min="10" max="80" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} className="w-full accent-indigo-500" />
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Weight: {fontWeight}</label>
              <input type="range" min="100" max="900" step="100" value={fontWeight} onChange={e => setFontWeight(Number(e.target.value))} className="w-full accent-indigo-500" />
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Line Height: {lineHeight.toFixed(1)}</label>
              <input type="range" min="10" max="30" value={lineHeight * 10} onChange={e => setLineHeight(Number(e.target.value) / 10)} className="w-full accent-indigo-500" />
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Letter Spacing: {letterSpacing}px</label>
              <input type="range" min="-3" max="10" value={letterSpacing} onChange={e => setLetterSpacing(Number(e.target.value))} className="w-full accent-indigo-500" />
            </div>
            <CodeSnippet code={`font-family: ${selectedFont.family};
font-size: ${fontSize}px;
font-weight: ${fontWeight};
line-height: ${lineHeight};
letter-spacing: ${letterSpacing}px;`} />
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
            <p
              className="text-zinc-200"
              style={{
                fontFamily: selectedFont.family,
                fontSize: `${fontSize}px`,
                fontWeight,
                lineHeight,
                letterSpacing: `${letterSpacing}px`,
              }}
            >
              The quick brown fox jumps over the lazy dog. 你好世界！学习中文很有趣。每天进步一点点。
            </p>
          </div>
        </div>
      </Section>

      <Section title="Text Effects">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <DemoCard label="Gradient Text">
            <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Beautiful
            </p>
          </DemoCard>
          <DemoCard label="Text Shadow">
            <p className="text-3xl font-bold text-indigo-400" style={{ textShadow: '0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(99,102,241,0.2)' }}>
              Glowing
            </p>
          </DemoCard>
          <DemoCard label="Stroke Text">
            <p className="text-3xl font-bold" style={{ WebkitTextStroke: '1px #818cf8', color: 'transparent' }}>
              Outlined
            </p>
          </DemoCard>
          <DemoCard label="Animated Gradient">
            <motion.p
              className="text-3xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #818cf8, #a78bfa, #f472b6, #818cf8)',
                backgroundSize: '200% auto',
              }}
              animate={{ backgroundPosition: ['0% center', '200% center'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              Rainbow
            </motion.p>
          </DemoCard>
          <DemoCard label="3D Text">
            <p className="text-3xl font-bold text-zinc-200" style={{ textShadow: '1px 1px 0 #52525b, 2px 2px 0 #3f3f46, 3px 3px 0 #27272a' }}>
              Depth
            </p>
          </DemoCard>
          <DemoCard label="Blur Reveal">
            <motion.p
              className="text-3xl font-bold text-indigo-400"
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
            >
              Reveal
            </motion.p>
          </DemoCard>
        </div>
      </Section>
    </div>
  )
}
