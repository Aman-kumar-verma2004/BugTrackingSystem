import React from 'react'
import Navbar from './Navbar'
import HeroSection from "./Hero"
import StepsSection from "./Steps"
import UsesSection from "./Uses"
import Footer from "./Footer"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StepsSection />
      <UsesSection />
      <Footer />
    </div>
  )
}

export default LandingPage
