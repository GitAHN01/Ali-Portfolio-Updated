import React from 'react'
import site from '../content/site.json'
export default function Hero(){
  return (
    <section id="hero" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="badge">Security Engineer & SecOps Leader</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {site.name} — <span className="text-zinc-500 dark:text-zinc-400">{site.role}</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">{site.tagline}</p>
          <div className="flex gap-3">
            <a className="btn btn-primary" href={site.resumeUrl} download>Download Resume</a>
            <a className="btn btn-outline" href="#contact">Contact Me</a>
          </div>
          <div className="flex gap-4 pt-2">
            {site.socials.map(s => (
              <a key={s.label} className="underline-offset-4 hover:underline" href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
        {site.introVideoUrl && (
          <div className="card overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={site.introVideoUrl}
                title="Intro video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
