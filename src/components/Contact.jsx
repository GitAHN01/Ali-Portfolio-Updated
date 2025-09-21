import React from 'react'
import site from '../content/site.json'
export default function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Get in touch</h2>
        <form className="card p-6 space-y-4" action="https://formspree.io/f/your-id" method="POST">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-1">Name</label>
              <input className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2" name="name" required />
            </div>
            <div>
              <label className="text-sm block mb-1">Email</label>
              <input type="email" className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2" name="email" required />
            </div>
          </div>
          <div>
            <label className="text-sm block mb-1">Message</label>
            <textarea className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2" name="message" rows="5" required></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Send Message</button>
          <p className="text-xs text-zinc-500">Or email me directly: <a className="underline" href={"mailto:"+site.email}>{site.email}</a></p>
        </form>
      </div>
    </section>
  )
}
