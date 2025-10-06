import React from 'react'
import data from '../content/experience.json'

export default function Experience(){
  return (
    <section id="experience" className="section bg-zinc-50 dark:bg-zinc-900/40">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Experience & Accolades</h2>

        <div className="space-y-10">
          {data.map((e, idx) => (
            <div key={idx} className="grid grid-cols-[1rem,1fr] gap-4">
              {/* Left column: vertical line + dot */}
              <div className="relative">
                {/* vertical line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-300 dark:bg-zinc-700" />
                {/* dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-50" />
              </div>

              {/* Right column: content */}
              <div>
                <h3 className="font-semibold leading-snug">
                  {e.role} — <span className="text-zinc-500">{e.company}</span>
                </h3>
                <div className="text-sm text-zinc-500 mt-1">
                  {e.location} • {e.start} – {e.end}
                </div>
                <ul className="mt-4 list-disc ml-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                  {e.bullets.map((b,i)=><li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
