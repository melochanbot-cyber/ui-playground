import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Type, Sparkles, Layers, Component, Layout, MousePointerClick,
  Sun, Moon, Menu, X
} from 'lucide-react'
import { TypographyTab } from './tabs/TypographyTab'
import { AnimationsTab } from './tabs/AnimationsTab'
import { EffectsTab } from './tabs/EffectsTab'
import { ComponentsTab } from './tabs/ComponentsTab'
import { LayoutsTab } from './tabs/LayoutsTab'
import { MicroTab } from './tabs/MicroTab'

const tabs = [
  { id: 'animations', label: 'Animations', icon: Sparkles },
  { id: 'effects', label: 'Effects', icon: Layers },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'components', label: 'Components', icon: Component },
  { id: 'layouts', label: 'Layouts', icon: Layout },
  { id: 'micro', label: 'Micro', icon: MousePointerClick },
] as const

type TabId = (typeof tabs)[number]['id']

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('animations')
  const [darkMode, setDarkMode] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleDark = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'typography': return <TypographyTab />
      case 'animations': return <AnimationsTab />
      case 'effects': return <EffectsTab />
      case 'components': return <ComponentsTab />
      case 'layouts': return <LayoutsTab />
      case 'micro': return <MicroTab />
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'} flex`}>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex flex-col w-56 ${darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-zinc-200'} border-r fixed h-full z-30`}>
        <div className="p-4 border-b border-inherit">
          <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            UI Playground
          </h1>
          <p className={`text-xs mt-1 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Visual explorer for Ray
          </p>
        </div>
        <nav className="flex-1 p-2 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-500/15 text-indigo-400'
                  : darkMode
                    ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-inherit">
          <button
            onClick={toggleDark}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
              darkMode ? 'text-zinc-400 hover:bg-zinc-800' : 'text-zinc-600 hover:bg-zinc-100'
            } transition-colors`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h1 className="text-sm font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          UI Playground
        </h1>
        <button onClick={toggleDark}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -256 }}
              animate={{ x: 0 }}
              exit={{ x: -256 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="md:hidden fixed left-0 top-0 bottom-0 w-64 bg-zinc-900 z-50 p-4"
            >
              <h1 className="text-lg font-bold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                UI Playground
              </h1>
              <nav className="space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSidebarOpen(false) }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-indigo-500/15 text-indigo-400'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Tabs (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-2 py-2 bg-zinc-900/95 backdrop-blur border-t border-zinc-800">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] transition-colors ${
              activeTab === tab.id ? 'text-indigo-400' : 'text-zinc-500'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-56 pt-14 md:pt-0 pb-20 md:pb-0">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {renderTab()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default App
