import { useState, useRef } from 'react'
import { motion, AnimatePresence, Reorder } from 'framer-motion'
import { Heart, Star, Flame, Zap, Trophy, Check } from 'lucide-react'
import { Section, DemoCard } from '../components/Section'

/* ── Button Press Feedback ── */
function ButtonPress() {
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null)
  const [flash, setFlash] = useState(false)

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() })
    setTimeout(() => setRipple(null), 600)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <DemoCard label="Scale Down">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-full py-3 rounded-lg bg-indigo-500 text-white text-sm font-medium"
        >
          Press Me
        </motion.button>
      </DemoCard>

      <DemoCard label="Ripple Effect">
        <button
          onClick={handleRipple}
          className="relative w-full py-3 rounded-lg bg-violet-500 text-white text-sm font-medium overflow-hidden"
        >
          Press Me
          {ripple && (
            <span
              key={ripple.id}
              className="absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out]"
              style={{ left: ripple.x - 5, top: ripple.y - 5, width: 10, height: 10 }}
            />
          )}
        </button>
      </DemoCard>

      <DemoCard label="Color Flash">
        <motion.button
          whileTap={{ backgroundColor: '#818cf8' }}
          onClick={() => { setFlash(true); setTimeout(() => setFlash(false), 200) }}
          className={`w-full py-3 rounded-lg text-white text-sm font-medium transition-colors ${flash ? 'bg-indigo-400' : 'bg-zinc-700'}`}
        >
          Press Me
        </motion.button>
      </DemoCard>
    </div>
  )
}

/* ── Toggle / Switch ── */
function ToggleSwitches() {
  const [t1, setT1] = useState(false)
  const [t2, setT2] = useState(false)
  const [t3, setT3] = useState(false)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <DemoCard label="Classic Toggle">
        <button
          onClick={() => setT1(!t1)}
          className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${t1 ? 'bg-indigo-500' : 'bg-zinc-700'}`}
        >
          <motion.div
            className="w-6 h-6 rounded-full bg-white shadow-md"
            animate={{ x: t1 ? 22 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>
      </DemoCard>

      <DemoCard label="iOS Style">
        <button
          onClick={() => setT2(!t2)}
          className={`w-[52px] h-8 rounded-full p-0.5 transition-colors duration-300 ${t2 ? 'bg-emerald-500' : 'bg-zinc-600'}`}
        >
          <motion.div
            className="w-7 h-7 rounded-full bg-white shadow"
            animate={{ x: t2 ? 20 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>
      </DemoCard>

      <DemoCard label="Labeled">
        <button
          onClick={() => setT3(!t3)}
          className={`w-20 h-9 rounded-full relative transition-colors duration-300 ${t3 ? 'bg-indigo-500' : 'bg-zinc-700'}`}
        >
          <motion.div
            className="absolute top-1 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center"
            animate={{ x: t3 ? 44 : 4 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            {t3 ? <Check size={12} className="text-indigo-500" /> : <span className="text-zinc-400 text-[10px]">✕</span>}
          </motion.div>
          <span className={`absolute text-[10px] font-medium ${t3 ? 'left-2.5 text-white' : 'right-2.5 text-zinc-400'} top-1/2 -translate-y-1/2`}>
            {t3 ? 'ON' : 'OFF'}
          </span>
        </button>
      </DemoCard>
    </div>
  )
}

/* ── Like / Heart ── */
function LikeHeart() {
  const [liked, setLiked] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <div className="grid grid-cols-2 gap-4">
      <DemoCard label="Instagram Heart">
        <div className="flex justify-center">
          <motion.button
            onClick={() => setLiked(!liked)}
            whileTap={{ scale: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={liked ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart
                size={40}
                className={`transition-colors duration-200 ${liked ? 'text-rose-500 fill-rose-500' : 'text-zinc-500'}`}
              />
            </motion.div>
            {liked && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i / 6) * Math.PI * 2
                  return (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-rose-400"
                      initial={{ x: 0, y: 0, scale: 0 }}
                      animate={{
                        x: Math.cos(angle) * 25,
                        y: Math.sin(angle) * 25,
                        scale: [0, 1, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  )
                })}
              </div>
            )}
          </motion.button>
        </div>
      </DemoCard>

      <DemoCard label="Star Rating">
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map(star => (
            <motion.button
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            >
              <Star
                size={28}
                className={`transition-colors ${
                  star <= (hoverRating || rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-zinc-600'
                }`}
              />
            </motion.button>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-500 mt-2">{rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Rate this'}</p>
      </DemoCard>
    </div>
  )
}

/* ── Progress ── */
function ProgressSection() {
  const [progress, setProgress] = useState(65)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DemoCard label="Animated Bar">
        <div className="space-y-3">
          <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
          <input type="range" min={0} max={100} value={progress} onChange={e => setProgress(Number(e.target.value))} className="w-full accent-indigo-500" />
          <p className="text-xs text-zinc-500 text-center">{progress}%</p>
        </div>
      </DemoCard>

      <DemoCard label="Circular Progress">
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#27272a" strokeWidth="8" />
              <motion.circle
                cx="50" cy="50" r="42" fill="none" stroke="url(#grad)" strokeWidth="8"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 264 - (264 * progress) / 100 }}
                strokeDasharray={264}
                transition={{ duration: 1 }}
              />
              <defs>
                <linearGradient id="grad"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#a78bfa" /></linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-zinc-200">{progress}%</span>
            </div>
          </div>
        </div>
      </DemoCard>

      <DemoCard label="Step Indicator">
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map(step => {
            const stepProgress = Math.min(100, Math.max(0, (progress - (step - 1) * 25) * 4))
            const completed = progress >= step * 25
            const active = progress >= (step - 1) * 25 && progress < step * 25
            return (
              <div key={step} className="flex items-center gap-2">
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                    completed
                      ? 'bg-indigo-500 border-indigo-500 text-white'
                      : active
                        ? 'border-indigo-500 text-indigo-400'
                        : 'border-zinc-700 text-zinc-600'
                  }`}
                  animate={active ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {completed ? <Check size={14} /> : step}
                </motion.div>
                {step < 4 && <div className={`w-6 h-0.5 ${completed ? 'bg-indigo-500' : 'bg-zinc-700'}`} />}
              </div>
            )
          })}
        </div>
      </DemoCard>
    </div>
  )
}

/* ── Drag Reorder ── */
function DragReorder() {
  const [items, setItems] = useState(['学习', '复习', '测试', '完成'])

  return (
    <DemoCard label="Drag to Reorder">
      <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-2">
        {items.map(item => (
          <Reorder.Item
            key={item}
            value={item}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 cursor-grab active:cursor-grabbing flex items-center gap-3"
            whileDrag={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
          >
            <span className="text-zinc-600">⠿</span>
            <span className="text-sm text-zinc-300" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item}</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </DemoCard>
  )
}

/* ── Reward Animations ── */
function RewardAnimations() {
  const [streak, setStreak] = useState(0)
  const [xp, setXp] = useState(0)
  const [showTrophy, setShowTrophy] = useState(false)

  const incrementStreak = () => {
    setStreak(s => s + 1)
  }

  const earnXp = () => {
    setXp(x => x + 25)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <DemoCard label="Streak Flame 🔥">
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <motion.div
              animate={streak > 0 ? {
                scale: [1, 1.1, 1],
                rotate: [-2, 2, -2],
              } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Flame
                size={40}
                className={`${streak > 0 ? 'text-orange-400 fill-orange-400' : 'text-zinc-600'} transition-colors`}
              />
            </motion.div>
            <AnimatePresence>
              {streak > 0 && (
                <motion.span
                  key={streak}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-3 text-lg font-bold text-orange-400"
                >
                  {streak}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={incrementStreak}
            className="px-3 py-1.5 rounded-lg bg-orange-500/15 text-orange-400 text-xs border border-orange-500/30"
          >
            + Day
          </button>
        </div>
      </DemoCard>

      <DemoCard label="XP Counter">
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <motion.div
              className="flex items-center gap-1"
              key={xp}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              <Zap size={20} className="text-amber-400 fill-amber-400" />
              <span className="text-2xl font-bold text-amber-400">{xp}</span>
              <span className="text-xs text-zinc-500">XP</span>
            </motion.div>
            <AnimatePresence>
              {xp > 0 && (
                <motion.span
                  key={xp}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -25 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-2 right-0 text-sm font-bold text-emerald-400"
                >
                  +25
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={earnXp}
            className="px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 text-xs border border-amber-500/30"
          >
            Earn XP
          </button>
        </div>
      </DemoCard>

      <DemoCard label="Trophy Unlock">
        <div className="flex flex-col items-center gap-3">
          <AnimatePresence mode="wait">
            {showTrophy ? (
              <motion.div
                key="trophy"
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative"
              >
                <Trophy size={40} className="text-amber-400 fill-amber-400" />
                {/* Sparkles around trophy */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2
                  return (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-amber-300"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: Math.cos(angle) * 30,
                        y: Math.sin(angle) * 30,
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  )
                })}
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"
              >
                <Trophy size={24} className="text-zinc-600" />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => { setShowTrophy(false); requestAnimationFrame(() => setShowTrophy(true)) }}
            className="px-3 py-1.5 rounded-lg bg-violet-500/15 text-violet-400 text-xs border border-violet-500/30"
          >
            Unlock!
          </button>
        </div>
      </DemoCard>
    </div>
  )
}

export function MicroTab() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        Micro-interactions
      </h1>
      <p className="text-zinc-500 mb-8">Tactile feedback, toggles, progress, and gamification elements.</p>

      <Section title="Button Press Feedback">
        <ButtonPress />
      </Section>

      <Section title="Toggle / Switch">
        <ToggleSwitches />
      </Section>

      <Section title="Like / Heart / Rating">
        <LikeHeart />
      </Section>

      <Section title="Progress Indicators">
        <ProgressSection />
      </Section>

      <Section title="Drag to Reorder">
        <DragReorder />
      </Section>

      <Section title="Reward Animations (Edu/Gamification)">
        <p className="text-sm text-zinc-400 mb-4">Streak flames, XP counters, trophy unlocks — perfect for MeloChinese 🎮</p>
        <RewardAnimations />
      </Section>
    </div>
  )
}
