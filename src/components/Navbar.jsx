import React from 'react'
import ThemeToggle from './ThemeToggle'
export default function Navbar() {
  const items = [
    {href:'#about', label:'About'},
    {href:'#experience', label:'Experience'},
    {href:'#projects', label:'Projects'},
    {href:'#contact', label:'Contact'}
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-zinc-950/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="container flex items-center justify-between py-3">
        <a href="#" className="font-semibold">Ali H. Naqvi</a>
        <div className="hidden md:flex items-center gap-6">
          {items.map(i => <a key={i.href} href={i.href} className="text-sm hover:opacity-80">{i.label}</a>)}
          <ThemeToggle />
        </div>
        <div className="md:hidden"><ThemeToggle /></div>
      </nav>
    </header>
  )
}
