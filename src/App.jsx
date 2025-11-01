import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Feature } from './components/Feature/Feature.jsx'
import { CTA } from './components/CTA/CTA.jsx'
import { Footer } from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Hero />
        <Feature />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default App
