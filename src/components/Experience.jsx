import React from 'react'
import data from '../content/experience.json'
export default function Experience(){
  return (
    <section id="experience" className="section bg-zinc-50 dark:bg-zinc-900/40">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Experience & Accolades</h2>
        <div className="timeline">
          {data.map((e, idx) => (
            <div key={idx} className="node reveal">
              <div className="dot"></div>
              <h3 className="font-semibold">{e.role} — <span className="text-zinc-500">{e.company}</span></h3>
              <div className="text-sm text-zinc-500">{e.location} • {e.start} – {e.end}</div>
              <ul>
                {e.bullets.map((b,i)=><li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
