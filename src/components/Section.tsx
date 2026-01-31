import type { ReactNode } from 'react'

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-6 text-zinc-200 border-b border-zinc-800 pb-3">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function DemoCard({ label, children, className = '' }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={`bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 ${className}`}>
      <p className="text-xs text-zinc-500 mb-3 font-mono">{label}</p>
      {children}
    </div>
  )
}

export function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-3 text-[11px] text-zinc-500 bg-zinc-900/80 rounded-lg p-2.5 overflow-x-auto font-mono border border-zinc-800/50">
      {code}
    </pre>
  )
}
