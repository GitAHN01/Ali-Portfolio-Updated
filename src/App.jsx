import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useRevealOnScroll(){
  useEffect(()=>{
    const els = Array.from(document.querySelectorAll('.reveal'))
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('inview')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.2 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App(){
  useRevealOnScroll()
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
