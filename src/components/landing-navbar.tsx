"use client"

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { NavigationMenu } from './ui/navigation-menu'
import NavigationMenuDemo from './navigation-menu'

const LandingNavnar = () => {
  
  const router = useRouter()
  return (
    <div className=' z-50 top-2 sticky mx-auto w-fit bg-white p-4 px-8  flex items-center justify-center gap-6 rounded-full'>
        <div className=' font-extrabold text-2xl mx-4 text-black'>
            Mind Prism
        </div>
        <NavigationMenuDemo />
        <div className='flex items-center justify-center gap-3'>
            <Button variant="outline" className='rounded-full p-6' onClick={() => router.push('/sign-in')}>Signin</Button>
            <Button  className='rounded-full p-6  bg-[#9667E0] hover:bg-[#9667E0]/70 hover:-rotate-2' onClick={() => router.push('/book-demo')}>Book a demo</Button>
            
        </div>
    </div>
  )
}

export default LandingNavnar