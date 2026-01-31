import { Section } from '../components/Section'
import { Home, Search, User, Settings, Bell, BarChart3, BookOpen, ChevronRight, Menu, Zap, Target, Star, Layers } from 'lucide-react'

function GridPatterns() {
  const placeholder = (h: string, label: string) => (
    <div className={`${h} bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center text-xs text-zinc-500`}>{label}</div>
  )

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-zinc-500 mb-2 font-mono">2-Column</p>
        <div className="grid grid-cols-2 gap-3">
          {placeholder('h-24', '1')}{placeholder('h-24', '2')}
        </div>
      </div>
      <div>
        <p className="text-xs text-zinc-500 mb-2 font-mono">3-Column</p>
        <div className="grid grid-cols-3 gap-3">
          {placeholder('h-24', '1')}{placeholder('h-24', '2')}{placeholder('h-24', '3')}
        </div>
      </div>
      <div>
        <p className="text-xs text-zinc-500 mb-2 font-mono">Asymmetric (2:1)</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">{placeholder('h-32', 'Main')}</div>
          {placeholder('h-32', 'Side')}
        </div>
      </div>
      <div>
        <p className="text-xs text-zinc-500 mb-2 font-mono">Masonry-style</p>
        <div className="columns-3 gap-3 space-y-3">
          {placeholder('h-24', '1')}{placeholder('h-36', '2')}{placeholder('h-20', '3')}
          {placeholder('h-32', '4')}{placeholder('h-24', '5')}{placeholder('h-28', '6')}
        </div>
      </div>
    </div>
  )
}

function HeroSections() {
  return (
    <div className="space-y-6">
      {/* Centered Hero */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center">
        <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400 font-medium">Centered Hero</span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-200 mt-4 mb-3">Learn Chinese the Fun Way</h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-5">Master characters, pronunciation, and grammar with interactive lessons powered by AI.</p>
        <div className="flex gap-3 justify-center">
          <button className="px-5 py-2.5 rounded-lg bg-indigo-500 text-white text-sm font-medium">Get Started</button>
          <button className="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-medium">Learn More</button>
        </div>
      </div>

      {/* Split Hero */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <span className="text-xs px-3 py-1 rounded-full bg-violet-500/15 text-violet-400 font-medium">Split Hero</span>
          <h2 className="text-2xl font-bold text-zinc-200 mt-4 mb-3">Your Chinese Journey Starts Here</h2>
          <p className="text-zinc-400 mb-5 text-sm">Structured lessons from HSK 1 to HSK 6. Practice reading, writing, and speaking.</p>
          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium">Start Free Trial</button>
        </div>
        <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center">
          <span className="text-6xl" style={{ fontFamily: "'LXGW WenKai', serif" }}>你好</span>
        </div>
      </div>

      {/* Gradient Hero */}
      <div className="rounded-xl p-8 text-center relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2), rgba(244,114,182,0.2))',
      }}>
        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-medium">Gradient Hero</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">Beautiful by Default</h2>
        <p className="text-white/60 max-w-md mx-auto mb-5">Gradient backgrounds create depth and visual interest. Perfect for landing pages.</p>
        <button className="px-5 py-2.5 rounded-lg bg-white text-zinc-900 text-sm font-semibold">Explore</button>
      </div>
    </div>
  )
}

function NavigationPatterns() {
  return (
    <div className="space-y-6">
      {/* Top Nav */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
        <p className="text-xs text-zinc-500 px-4 pt-3 font-mono">Top Navigation Bar</p>
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
          <span className="text-sm font-bold text-indigo-400">MeloChinese</span>
          <div className="hidden md:flex items-center gap-4">
            <a className="text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer">Lessons</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer">Practice</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer">Progress</a>
            <a className="text-sm text-indigo-400 font-medium cursor-pointer">Pro</a>
          </div>
          <div className="flex items-center gap-3">
            <Bell size={16} className="text-zinc-400" />
            <div className="w-7 h-7 rounded-full bg-indigo-500/30" />
          </div>
        </div>
        <div className="h-16 flex items-center justify-center text-xs text-zinc-600">Page content</div>
      </div>

      {/* Sidebar Nav */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
        <p className="text-xs text-zinc-500 px-4 pt-3 font-mono">Sidebar Navigation</p>
        <div className="flex">
          <div className="w-48 border-r border-zinc-800 p-3 space-y-1">
            {[
              { icon: Home, label: 'Dashboard', active: true },
              { icon: BookOpen, label: 'Lessons', active: false },
              { icon: Target, label: 'Practice', active: false },
              { icon: BarChart3, label: 'Progress', active: false },
              { icon: Settings, label: 'Settings', active: false },
            ].map(item => (
              <div key={item.label} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-pointer ${
                item.active ? 'bg-indigo-500/15 text-indigo-400' : 'text-zinc-400 hover:bg-zinc-800'
              }`}>
                <item.icon size={14} />
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex-1 h-40 flex items-center justify-center text-xs text-zinc-600">Main content area</div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
        <p className="text-xs text-zinc-500 px-4 pt-3 font-mono">Bottom Tab Bar (Mobile)</p>
        <div className="h-24 flex items-center justify-center text-xs text-zinc-600">Content</div>
        <div className="flex items-center justify-around px-4 py-3 border-t border-zinc-800">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: BookOpen, label: 'Learn', active: false },
            { icon: Target, label: 'Practice', active: false },
            { icon: BarChart3, label: 'Stats', active: false },
            { icon: User, label: 'Profile', active: false },
          ].map(item => (
            <div key={item.label} className={`flex flex-col items-center gap-0.5 text-[10px] cursor-pointer ${
              item.active ? 'text-indigo-400' : 'text-zinc-500'
            }`}>
              <item.icon size={18} />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
        <p className="text-xs text-zinc-500 mb-3 font-mono">Breadcrumbs</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-zinc-400 hover:text-zinc-200 cursor-pointer">Home</span>
          <ChevronRight size={14} className="text-zinc-600" />
          <span className="text-zinc-400 hover:text-zinc-200 cursor-pointer">Lessons</span>
          <ChevronRight size={14} className="text-zinc-600" />
          <span className="text-zinc-400 hover:text-zinc-200 cursor-pointer">HSK 2</span>
          <ChevronRight size={14} className="text-zinc-600" />
          <span className="text-indigo-400 font-medium">Lesson 5</span>
        </div>
      </div>
    </div>
  )
}

function DashboardLayout() {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
      <p className="text-xs text-zinc-500 px-4 pt-3 font-mono">Dashboard Layout</p>
      <div className="p-4 space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Characters', value: '248', icon: Layers, color: 'text-indigo-400' },
            { label: 'Streak', value: '12 days', icon: Zap, color: 'text-amber-400' },
            { label: 'Accuracy', value: '94%', icon: Target, color: 'text-emerald-400' },
            { label: 'XP Today', value: '450', icon: Star, color: 'text-violet-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-zinc-800/60 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-zinc-500">{stat.label}</span>
                <stat.icon size={14} className={stat.color} />
              </div>
              <span className="text-lg font-bold text-zinc-200">{stat.value}</span>
            </div>
          ))}
        </div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-3">
          <div className="md:col-span-2 bg-zinc-800/60 rounded-lg p-4 h-36 flex items-center justify-center">
            <span className="text-xs text-zinc-600">Chart / Progress area</span>
          </div>
          <div className="bg-zinc-800/60 rounded-lg p-4 h-36">
            <p className="text-xs text-zinc-400 mb-2">Recent Activity</p>
            {['Learned 学', 'Reviewed 你好', 'Completed L5'].map(a => (
              <p key={a} className="text-[10px] text-zinc-500 py-1 border-b border-zinc-700/50">{a}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CardGrids() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-zinc-500 mb-2 font-mono">Dense Grid (4-col)</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 h-24 flex items-center justify-center">
              <span className="text-xs text-zinc-500">Card {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-zinc-500 mb-2 font-mono">Feature Grid (icon cards)</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { icon: BookOpen, label: 'Lessons', color: 'text-indigo-400 bg-indigo-500/15' },
            { icon: Target, label: 'Practice', color: 'text-emerald-400 bg-emerald-500/15' },
            { icon: BarChart3, label: 'Analytics', color: 'text-violet-400 bg-violet-500/15' },
            { icon: Star, label: 'Achievements', color: 'text-amber-400 bg-amber-500/15' },
            { icon: Zap, label: 'Challenges', color: 'text-cyan-400 bg-cyan-500/15' },
            { icon: Settings, label: 'Settings', color: 'text-zinc-400 bg-zinc-500/15' },
          ].map(item => (
            <div key={item.label} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors cursor-pointer">
              <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center mb-2`}>
                <item.icon size={18} />
              </div>
              <p className="text-sm font-medium text-zinc-300">{item.label}</p>
              <p className="text-xs text-zinc-500 mt-0.5">Description text here</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function LayoutsTab() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        Layouts
      </h1>
      <p className="text-zinc-500 mb-8">Page structure patterns and responsive layout ideas.</p>

      <Section title="Grid Patterns">
        <GridPatterns />
      </Section>

      <Section title="Hero Sections">
        <HeroSections />
      </Section>

      <Section title="Navigation Patterns">
        <NavigationPatterns />
      </Section>

      <Section title="Card Grids">
        <CardGrids />
      </Section>

      <Section title="Dashboard Layout">
        <DashboardLayout />
      </Section>
    </div>
  )
}
