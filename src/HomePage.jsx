import React from 'react'
import Navbar from './Component/NavBar'
import HeroSection from './Component/HeroSection'
import HelpSection from './Component/Features'
import CTASection from './Component/CTAsection'
import Footer from './Component/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <HelpSection></HelpSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
