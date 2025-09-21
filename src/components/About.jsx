import React from 'react'
import strengths from '../content/strengths.json'
export default function About(){
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-[1fr,2fr] gap-10 items-start">
        <div className="card p-6">
          <img src="/headshot.jpg" alt="Headshot of Ali H. Naqvi" className="w-full rounded-xl object-cover aspect-square"/>
          <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            Open to security engineering or cyber operations lead roles in the NYC area.
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">About & Strengths</h2>
          <p className="text-zinc-600 dark:text-zinc-300 mb-6">
            Passionate about operationalizing and scaling high-impact cybersecurity solutions that measurably reduce risk and enable the business.
            Focus areas include SIEM/EDR, Incident Response, Zero Trust, Vulnerability Management, Cloud Security, Audit & Governance.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <div key={i} className="card p-5 reveal">
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-3 font-medium">{s.title}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
