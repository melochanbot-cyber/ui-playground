import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Loader2, ArrowRight, Download, Heart, Star, Trash2, Plus,
  Check, X, Search, Info, AlertTriangle, CheckCircle, XCircle,
  Bell, Zap, Crown, Sparkles, ChevronRight, User, BarChart3,
  BookOpen, Target
} from 'lucide-react'
import { Section, DemoCard } from '../components/Section'

/* ── Buttons ── */
function ButtonsSection() {
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors">Primary</button>
      <button className="px-4 py-2 rounded-lg bg-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-600 transition-colors">Secondary</button>
      <button className="px-4 py-2 rounded-lg border border-indigo-500/50 text-indigo-400 text-sm font-medium hover:bg-indigo-500/10 transition-colors">Outline</button>
      <button className="px-4 py-2 rounded-lg text-zinc-400 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-colors">Ghost</button>
      <button className="px-4 py-2 rounded-lg bg-rose-500/15 text-rose-400 text-sm font-medium hover:bg-rose-500/25 border border-rose-500/20 transition-colors">Destructive</button>
      <button
        onClick={handleLoading}
        className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors flex items-center gap-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading && <Loader2 size={14} className="animate-spin" />}
        {loading ? 'Loading...' : 'Loading'}
      </button>
      <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors flex items-center gap-2">
        Next <ArrowRight size={14} />
      </button>
      <button className="p-2.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors">
        <Download size={16} />
      </button>
      <button className="px-6 py-2 rounded-full bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors">Pill</button>
      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">Gradient</button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium"
      >
        Animated
      </motion.button>
      <button className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium border border-zinc-700 hover:border-indigo-500/50 transition-colors flex items-center gap-2">
        <Heart size={14} className="text-rose-400" /> Like
      </button>
      <button className="px-4 py-2 rounded-lg bg-emerald-500/15 text-emerald-400 text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors flex items-center gap-2">
        <Check size={14} /> Success
      </button>
      <button className="group px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium border border-zinc-700 hover:border-violet-500/50 transition-all flex items-center gap-2">
        Hover me <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="px-4 py-2 rounded-lg text-sm font-medium bg-zinc-900 text-indigo-400 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-shadow">
        Glow
      </button>
      <button className="px-4 py-2 rounded-lg text-sm font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-2">
        <Star size={14} className="fill-amber-400" /> Premium
      </button>
      <button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400" disabled>
        Disabled
      </button>
      <button className="px-4 py-2 rounded-lg text-sm font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 flex items-center gap-1.5">
        <Plus size={14} /> Add New
      </button>
      <motion.button
        className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white"
        style={{ backgroundSize: '200% auto' }}
        animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Animated Gradient
      </motion.button>
    </div>
  )
}

/* ── Cards ── */
function CardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Simple */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <h3 className="font-semibold text-zinc-200 mb-2">Simple Card</h3>
        <p className="text-sm text-zinc-400">A minimal card with just text. Clean and functional for basic content display.</p>
      </div>

      {/* Image card */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="h-32 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 flex items-center justify-center">
          <BookOpen size={32} className="text-indigo-400/60" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-zinc-200 mb-1">Image Card</h3>
          <p className="text-xs text-zinc-500">With header image area</p>
        </div>
      </div>

      {/* Stats card */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-zinc-400">Total Users</span>
          <BarChart3 size={16} className="text-indigo-400" />
        </div>
        <p className="text-3xl font-bold text-zinc-200">2,847</p>
        <p className="text-xs text-emerald-400 mt-1">↑ 12.5% from last month</p>
      </div>

      {/* Profile card */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
          <User size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200">Ray M.</h3>
          <p className="text-xs text-zinc-500">Developer · MeloChinese</p>
        </div>
      </div>

      {/* Feature card */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-indigo-500/30 transition-colors">
        <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-3">
          <Zap size={20} className="text-indigo-400" />
        </div>
        <h3 className="font-semibold text-zinc-200 mb-1">Feature Card</h3>
        <p className="text-sm text-zinc-400">Icon + title + description. Great for feature grids and landing pages.</p>
      </div>

      {/* Pricing card */}
      <div className="bg-zinc-900/60 border border-indigo-500/30 rounded-xl p-5 relative">
        <div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-indigo-500 text-[10px] text-white font-medium">Popular</div>
        <h3 className="font-semibold text-zinc-200 mb-1">Pro Plan</h3>
        <p className="text-3xl font-bold text-zinc-200 mb-3">$12<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
        <ul className="space-y-1.5 text-sm text-zinc-400 mb-4">
          <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Unlimited lessons</li>
          <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Voice recognition</li>
          <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Progress tracking</li>
        </ul>
        <button className="w-full py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium">Get Started</button>
      </div>

      {/* Testimonial */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <div className="flex gap-1 mb-3">
          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
        </div>
        <p className="text-sm text-zinc-300 italic mb-3">"MeloChinese made learning characters actually fun. The stroke order animations are incredible."</p>
        <p className="text-xs text-zinc-500">— Sarah K., Student</p>
      </div>

      {/* Interactive card */}
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 20px 40px -15px rgba(99,102,241,0.2)' }}
        className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-zinc-200">Interactive</h3>
          <Sparkles size={16} className="text-violet-400" />
        </div>
        <p className="text-sm text-zinc-400">Hover me! This card lifts and glows on hover using Framer Motion.</p>
        <div className="mt-3 flex items-center gap-1 text-xs text-indigo-400 font-medium">
          Learn more <ChevronRight size={12} />
        </div>
      </motion.div>
    </div>
  )
}

/* ── Inputs ── */
function InputsSection() {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [tags, setTags] = useState(['Chinese', 'HSK2'])
  const [tagInput, setTagInput] = useState('')
  const [floatFocused, setFloatFocused] = useState(false)
  const [floatValue, setFloatValue] = useState('')
  const otpRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)]

  const handleOtp = (idx: number, val: string) => {
    if (val.length > 1) return
    const newOtp = [...otp]
    newOtp[idx] = val
    setOtp(newOtp)
    if (val && idx < 3) otpRefs[idx + 1].current?.focus()
  }

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <DemoCard label="Text Input">
        <input
          type="text"
          placeholder="Type something..."
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all"
        />
      </DemoCard>

      <DemoCard label="Search Input">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search characters..."
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-9 pr-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all"
          />
        </div>
      </DemoCard>

      <DemoCard label="Floating Label">
        <div className="relative">
          <input
            type="text"
            value={floatValue}
            onChange={e => setFloatValue(e.target.value)}
            onFocus={() => setFloatFocused(true)}
            onBlur={() => setFloatFocused(false)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 pt-5 pb-2 text-sm text-zinc-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all peer"
          />
          <label
            className={`absolute left-3 transition-all pointer-events-none ${
              floatFocused || floatValue
                ? 'top-1.5 text-[10px] text-indigo-400'
                : 'top-3.5 text-sm text-zinc-500'
            }`}
          >
            Email address
          </label>
        </div>
      </DemoCard>

      <DemoCard label="OTP Input (edu apps)">
        <div className="flex gap-3 justify-center">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={otpRefs[idx]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleOtp(idx, e.target.value)}
              className="w-12 h-14 bg-zinc-800 border border-zinc-700 rounded-lg text-center text-xl font-bold text-zinc-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all"
            />
          ))}
        </div>
      </DemoCard>

      <DemoCard label="Tags Input" className="md:col-span-2">
        <div className="flex flex-wrap gap-2 p-2 bg-zinc-800 border border-zinc-700 rounded-lg min-h-[42px]">
          {tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 px-2 py-1 rounded-md bg-indigo-500/15 text-indigo-400 text-xs">
              {tag}
              <button onClick={() => setTags(tags.filter(t => t !== tag))} className="hover:text-indigo-200">
                <X size={12} />
              </button>
            </span>
          ))}
          <input
            type="text"
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTag()}
            placeholder="Add tag..."
            className="flex-1 min-w-[100px] bg-transparent text-sm text-zinc-200 placeholder-zinc-500 outline-none"
          />
        </div>
      </DemoCard>
    </div>
  )
}

/* ── Toasts ── */
function ToastsSection() {
  const [toasts, setToasts] = useState<Array<{ id: number; type: string; msg: string }>>([])

  const addToast = (type: string, msg: string) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, type, msg }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000)
  }

  const icons: Record<string, React.ReactNode> = {
    success: <CheckCircle size={16} className="text-emerald-400" />,
    error: <XCircle size={16} className="text-rose-400" />,
    info: <Info size={16} className="text-blue-400" />,
    warning: <AlertTriangle size={16} className="text-amber-400" />,
  }

  const borders: Record<string, string> = {
    success: 'border-emerald-500/30',
    error: 'border-rose-500/30',
    info: 'border-blue-500/30',
    warning: 'border-amber-500/30',
  }

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={() => addToast('success', 'Lesson completed!')} className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/30">Success Toast</button>
        <button onClick={() => addToast('error', 'Failed to save progress')} className="px-3 py-1.5 rounded-lg bg-rose-500/15 text-rose-400 text-xs border border-rose-500/30">Error Toast</button>
        <button onClick={() => addToast('info', 'New lesson available!')} className="px-3 py-1.5 rounded-lg bg-blue-500/15 text-blue-400 text-xs border border-blue-500/30">Info Toast</button>
        <button onClick={() => addToast('warning', 'Streak about to expire!')} className="px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 text-xs border border-amber-500/30">Warning Toast</button>
      </div>
      <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-zinc-900 border ${borders[t.type]} shadow-lg pointer-events-auto`}
            >
              {icons[t.type]}
              <span className="text-sm text-zinc-200">{t.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ── Badges ── */
function BadgesSection() {
  return (
    <div className="flex flex-wrap gap-3">
      <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-400 text-xs font-medium">Default</span>
      <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium">Success</span>
      <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-medium">Warning</span>
      <span className="px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-400 text-xs font-medium">Error</span>
      <span className="px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-400 text-xs font-medium flex items-center gap-1"><Crown size={12} /> Pro</span>
      <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">Outline</span>
      <motion.span
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-medium"
      >
        New
      </motion.span>
      <span className="relative px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
        Notifications
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] flex items-center justify-center font-bold">3</span>
      </span>
      <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-medium flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Live
      </span>
      <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium flex items-center gap-1.5">
        HSK 2 <button className="hover:text-zinc-200"><X size={10} /></button>
      </span>
    </div>
  )
}

/* ── Modals ── */
function ModalsSection() {
  const [centerOpen, setCenterOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        <button onClick={() => setCenterOpen(true)} className="px-4 py-2 rounded-lg bg-indigo-500/15 text-indigo-400 text-sm border border-indigo-500/30">Center Modal</button>
        <button onClick={() => setSheetOpen(true)} className="px-4 py-2 rounded-lg bg-violet-500/15 text-violet-400 text-sm border border-violet-500/30">Bottom Sheet</button>
      </div>

      {/* Center Modal */}
      <AnimatePresence>
        {centerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setCenterOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">Lesson Complete! 🎉</h3>
                <p className="text-sm text-zinc-400 mb-4">You've mastered 10 new characters. Keep up the streak!</p>
                <div className="flex gap-3 justify-end">
                  <button onClick={() => setCenterOpen(false)} className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:bg-zinc-800">Close</button>
                  <button onClick={() => setCenterOpen(false)} className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium">Continue</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {sheetOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setSheetOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 rounded-t-2xl p-6 max-h-[60vh]"
            >
              <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">Character Details</h3>
              <div className="text-center my-6">
                <p className="text-6xl mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>学</p>
                <p className="text-sm text-zinc-400">xué · to study, to learn</p>
              </div>
              <button onClick={() => setSheetOpen(false)} className="w-full py-3 rounded-lg bg-indigo-500 text-white font-medium">Got it</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ComponentsTab() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        Components
      </h1>
      <p className="text-zinc-500 mb-8">Ready-to-use UI patterns and interactive components.</p>

      <Section title="Buttons">
        <ButtonsSection />
      </Section>

      <Section title="Cards">
        <CardsSection />
      </Section>

      <Section title="Inputs">
        <InputsSection />
      </Section>

      <Section title="Modals">
        <ModalsSection />
      </Section>

      <Section title="Toasts / Notifications">
        <ToastsSection />
      </Section>

      <Section title="Badges & Tags">
        <BadgesSection />
      </Section>
    </div>
  )
}
