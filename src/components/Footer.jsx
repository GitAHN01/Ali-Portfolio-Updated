import React from 'react'
import site from '../content/site.json'
export default function Footer(){
  return (
    <footer className="py-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-zinc-500">© <span>{new Date().getFullYear()}</span> {site.name}. All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          {site.socials.map((s, i)=>(<a key={i} href={s.url} className="hover:underline" target="_blank" rel="noreferrer">{s.label}</a>))}
        </div>
      </div>
    </footer>
  )
}
