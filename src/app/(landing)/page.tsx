import Footer from '@/components/footer'
import LandingHero from '@/components/landing-hero'
import LandingNavnar from '@/components/landing-navbar'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-full min-h-screen'>
        <LandingNavnar />
        <LandingHero />
        {/* Banner section */}
        <div className=' bg-neutral-200 w-full h-36 flex items-center justify-center'>
            Banner section
        </div>
        <Footer />
    </div>
  )
}

export default LandingPage