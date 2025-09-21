import React, { useState } from 'react'
import data from '../content/projects.json'
export default function Projects(){
  const [open, setOpen] = useState(false)
  const [video, setVideo] = useState('')
  function play(url){ setVideo(url); setOpen(true) }
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p, idx) => (
            <article key={idx} className="card overflow-hidden group reveal">
              <div className="relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"/>
                {p.videoUrl && (
                  <button onClick={()=>play(p.videoUrl)} className="absolute inset-0 m-auto h-12 w-20 rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/70">►</button>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">{p.summary}</p>
                {p.videoUrl && (<button onClick={()=>play(p.videoUrl)} className="btn btn-outline text-xs mt-3">Watch video</button>)}
              </div>
            </article>
          ))}
        </div>
        {open && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={()=>setOpen(false)}>
            <div className="bg-zinc-900 rounded-xl w-full max-w-3xl aspect-video overflow-hidden" onClick={(e)=>e.stopPropagation()}>
              <iframe className="w-full h-full" src={video} title="Project video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
