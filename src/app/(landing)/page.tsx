import LandingHero from '@/components/landing-hero'
import LandingNavnar from '@/components/landing-navbar'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-full min-h-screen'>
        <LandingNavnar />
        <LandingHero />
    </div>
  )
}

export default LandingPage