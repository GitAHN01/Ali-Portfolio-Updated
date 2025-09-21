import React, { useEffect, useState } from 'react'
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ? saved === 'dark' : prefers
    setIsDark(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])
  function toggle() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return <button onClick={toggle} className="btn btn-outline" aria-label="Toggle theme">{isDark ? '🌙' : '☀️'}</button>
}
