import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { RotateCcw, Check, Star, PartyPopper } from 'lucide-react'
import { Section, DemoCard, CodeSnippet } from '../components/Section'

/* ── Entrance Animations ── */
const entranceAnimations = [
  { name: 'Fade In', initial: { opacity: 0 }, animate: { opacity: 1 }, code: 'opacity: 0 → 1' },
  { name: 'Slide Up', initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, code: 'y: 40 → 0' },
  { name: 'Slide Left', initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, code: 'x: 40 → 0' },
  { name: 'Slide Down', initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 }, code: 'y: -40 → 0' },
  { name: 'Scale', initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, code: 'scale: 0.5 → 1' },
  { name: 'Rotate', initial: { opacity: 0, rotate: -180 }, animate: { opacity: 1, rotate: 0 }, code: 'rotate: -180 → 0' },
  { name: 'Bounce', initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring' as const, bounce: 0.6 }, code: 'spring bounce: 0.6' },
  { name: 'Flip X', initial: { opacity: 0, rotateX: 90 }, animate: { opacity: 1, rotateX: 0 }, code: 'rotateX: 90 → 0' },
  { name: 'Flip Y', initial: { opacity: 0, rotateY: 90 }, animate: { opacity: 1, rotateY: 0 }, code: 'rotateY: 90 → 0' },
  { name: 'Zoom + Rotate', initial: { opacity: 0, scale: 0, rotate: 180 }, animate: { opacity: 1, scale: 1, rotate: 0 }, code: 'scale+rotate combo' },
  { name: 'Elastic', initial: { opacity: 0, scale: 0.3 }, animate: { opacity: 1, scale: 1 }, transition: { type: 'spring' as const, stiffness: 300, damping: 10 }, code: 'spring stiffness: 300' },
  { name: 'Slide + Scale', initial: { opacity: 0, x: -30, scale: 0.8 }, animate: { opacity: 1, x: 0, scale: 1 }, code: 'x + scale combo' },
]

function EntranceCard({ anim }: { anim: typeof entranceAnimations[0] }) {
  const [key, setKey] = useState(0)
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col items-center gap-3">
      <motion.div
        key={key}
        initial={anim.initial}
        animate={anim.animate}
        transition={anim.transition ?? { duration: 0.5 }}
        className="w-full h-20 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 rounded-lg flex items-center justify-center border border-indigo-500/20"
      >
        <span className="text-sm font-medium text-indigo-300">{anim.name}</span>
      </motion.div>
      <div className="flex items-center justify-between w-full">
        <code className="text-[10px] text-zinc-500">{anim.code}</code>
        <button
          onClick={() => setKey(k => k + 1)}
          className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Replay"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  )
}

/* ── Hover Effects ── */
const hoverEffects = [
  { name: 'Scale Up', className: 'hover:scale-105 transition-transform duration-200', code: 'hover:scale-105' },
  { name: 'Lift', className: 'hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200', code: 'hover:-translate-y-1 + shadow' },
  { name: 'Glow', className: 'hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-shadow duration-300', code: 'shadow glow on hover' },
  { name: 'Border Color', className: 'border-2 !border-zinc-700 hover:!border-indigo-500 transition-colors duration-300', code: 'hover:border-indigo-500' },
  { name: 'Bg Shift', className: 'hover:bg-indigo-500/20 transition-colors duration-300', code: 'hover:bg-indigo-500/20' },
  { name: 'Rotate', className: 'hover:rotate-3 transition-transform duration-200', code: 'hover:rotate-3' },
]

function HoverCard({ effect }: { effect: typeof hoverEffects[0] }) {
  return (
    <div className={`bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 cursor-pointer flex flex-col items-center justify-center gap-2 min-h-[100px] ${effect.className}`}>
      <span className="text-sm font-medium text-zinc-300">{effect.name}</span>
      <code className="text-[10px] text-zinc-500">{effect.code}</code>
    </div>
  )
}

/* ── Underline Draw ── */
function UnderlineDrawCard() {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 cursor-pointer flex flex-col items-center justify-center gap-2 min-h-[100px] group">
      <span className="text-sm font-medium text-zinc-300 relative">
        Underline Draw
        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-indigo-500 transition-all duration-300" />
      </span>
      <code className="text-[10px] text-zinc-500">width 0 → 100% on hover</code>
    </div>
  )
}

/* ── Loading Animations ── */
function Spinner() {
  return (
    <div className="w-8 h-8 border-2 border-zinc-700 border-t-indigo-500 rounded-full animate-spin" />
  )
}

function PulseLoader() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-3 h-3 rounded-full bg-indigo-500"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

function BouncingDots() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-2.5 h-2.5 rounded-full bg-violet-500"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

function SkeletonLoader() {
  return (
    <div className="space-y-2 w-full">
      <div className="skeleton h-4 w-3/4 rounded" />
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-1/2 rounded" />
    </div>
  )
}

function ProgressBar() {
  return (
    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: '75%' }}
        transition={{ duration: 2, ease: 'easeOut', repeat: Infinity, repeatDelay: 1 }}
      />
    </div>
  )
}

function BarSpinner() {
  return (
    <div className="flex items-center gap-0.5 h-8">
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          className="w-1 bg-indigo-500 rounded-full"
          animate={{ height: ['8px', '24px', '8px'] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  )
}

/* ── Page Transitions ── */
const pageTransitions = [
  { name: 'Fade', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  { name: 'Slide', initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -100, opacity: 0 } },
  { name: 'Scale', initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 1.1, opacity: 0 } },
  { name: 'Slide Up', initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -50, opacity: 0 } },
]

function PageTransitionsDemo() {
  const [page, setPage] = useState(0)
  const [transType, setTransType] = useState(0)
  const trans = pageTransitions[transType]
  const pages = ['Page A', 'Page B', 'Page C']
  const colors = ['from-indigo-500/20 to-blue-500/20', 'from-violet-500/20 to-pink-500/20', 'from-emerald-500/20 to-teal-500/20']

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {pageTransitions.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setTransType(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              transType === i ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="relative h-40 bg-zinc-900/60 rounded-xl overflow-hidden border border-zinc-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${colors[page]}`}
          >
            <span className="text-lg font-bold text-zinc-300">{pages[page]}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 mt-3 justify-center">
        {pages.map((p, i) => (
          <button
            key={p}
            onClick={() => setPage(i)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              page === i ? 'bg-indigo-500 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Scroll Animations ── */
function ScrollRevealItem({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ── Celebration Animations ── */
function ConfettiDemo() {
  const [active, setActive] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => { setActive(false); requestAnimationFrame(() => setActive(true)) }}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <PartyPopper size={16} className="inline mr-2" />
        Confetti!
      </button>
      {active && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#818cf8', '#a78bfa', '#f472b6', '#34d399', '#fbbf24', '#60a5fa'][i % 6],
              }}
              initial={{ x: 0, y: 0, scale: 0 }}
              animate={{
                x: (Math.random() - 0.5) * 200,
                y: Math.random() * -150 - 30,
                scale: [0, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 0.8 + Math.random() * 0.4, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function CheckmarkDemo() {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={() => { setShow(false); requestAnimationFrame(() => setShow(true)) }}
        className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
      >
        Complete!
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500"
          >
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            >
              <Check size={28} className="text-emerald-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StarBurstDemo() {
  const [active, setActive] = useState(false)

  return (
    <div className="relative flex flex-col items-center gap-3">
      <button
        onClick={() => { setActive(false); requestAnimationFrame(() => setActive(true)) }}
        className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-medium border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
      >
        <Star size={16} className="inline mr-2" />
        Stars!
      </button>
      {active && (
        <div className="relative w-8 h-8">
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2"
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{
                  x: Math.cos(angle) * 40,
                  y: Math.sin(angle) * 40,
                  scale: [0, 1.2, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{ duration: 0.7 }}
              >
                <Star size={14} className="text-amber-400 fill-amber-400" />
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function PointsCounter() {
  const [points, setPoints] = useState(0)
  const [popup, setPopup] = useState(false)

  const addPoints = () => {
    setPoints(p => p + 10)
    setPopup(false)
    requestAnimationFrame(() => setPopup(true))
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <motion.span
          key={points}
          className="text-2xl font-bold text-amber-400"
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        >
          {points}
        </motion.span>
        <span className="text-sm text-zinc-500 ml-1">pts</span>
        <AnimatePresence>
          {popup && (
            <motion.span
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -30 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-2 left-full ml-1 text-sm font-bold text-emerald-400"
            >
              +10
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={addPoints}
        className="px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-400 text-sm font-medium border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors"
      >
        Earn Points
      </button>
    </div>
  )
}


/* ── Stagger Demo ── */
function StaggerGrid() {
  const [key, setKey] = useState(0)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <div>
      <button
        onClick={() => setKey(k => k + 1)}
        className="mb-3 px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 text-xs hover:bg-zinc-700 transition-colors flex items-center gap-2"
      >
        <RotateCcw size={12} /> Replay Stagger
      </button>
      <motion.div
        key={key}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 gap-2"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            variants={item}
            className="h-16 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/10"
          />
        ))}
      </motion.div>
    </div>
  )
}


export function AnimationsTab() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        Animations
      </h1>
      <p className="text-zinc-500 mb-8">Framer Motion powered animation library. Click replay to see each animation again.</p>

      <Section title="Entrance Animations">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {entranceAnimations.map(anim => (
            <EntranceCard key={anim.name} anim={anim} />
          ))}
        </div>
      </Section>

      <Section title="Hover Effects">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {hoverEffects.map(e => (
            <HoverCard key={e.name} effect={e} />
          ))}
          <UnderlineDrawCard />
        </div>
      </Section>

      <Section title="Loading Animations">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <DemoCard label="Spinner"><div className="flex justify-center"><Spinner /></div></DemoCard>
          <DemoCard label="Pulse"><div className="flex justify-center"><PulseLoader /></div></DemoCard>
          <DemoCard label="Bouncing Dots"><div className="flex justify-center"><BouncingDots /></div></DemoCard>
          <DemoCard label="Skeleton"><SkeletonLoader /></DemoCard>
          <DemoCard label="Progress Bar"><ProgressBar /></DemoCard>
          <DemoCard label="Bar Spinner"><div className="flex justify-center"><BarSpinner /></div></DemoCard>
        </div>
      </Section>

      <Section title="Page Transitions">
        <PageTransitionsDemo />
        <CodeSnippet code={`<AnimatePresence mode="wait">
  <motion.div key={page}
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
  />
</AnimatePresence>`} />
      </Section>

      <Section title="Scroll & Stagger">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-zinc-400 mb-3">Scroll to reveal (scroll within the page)</p>
            <div className="space-y-3">
              {[0, 1, 2, 3].map(i => (
                <ScrollRevealItem key={i} delay={i * 0.1}>
                  <div className="h-16 rounded-lg bg-gradient-to-r from-indigo-500/15 to-violet-500/15 border border-indigo-500/10 flex items-center justify-center">
                    <span className="text-sm text-zinc-400">Revealed item {i + 1}</span>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-zinc-400 mb-3">Stagger children</p>
            <StaggerGrid />
          </div>
        </div>
      </Section>

      <Section title="Celebration / Reward">
        <p className="text-sm text-zinc-400 mb-4">Perfect for edu app gamification 🎮</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DemoCard label="Confetti"><div className="flex justify-center"><ConfettiDemo /></div></DemoCard>
          <DemoCard label="Checkmark"><CheckmarkDemo /></DemoCard>
          <DemoCard label="Star Burst"><div className="flex justify-center"><StarBurstDemo /></div></DemoCard>
          <DemoCard label="Points Counter"><PointsCounter /></DemoCard>
        </div>
      </Section>
    </div>
  )
}
