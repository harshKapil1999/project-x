"use client"

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

import NavigationMenuDemo from './navigation-menu'
import Link from 'next/link'

const LandingNavnar = () => {
  
  const router = useRouter()
  return (
    <div className=' z-50 top-2 sticky mx-auto w-fit bg-white p-4 px-8  flex items-center justify-center gap-6 rounded-full'>
        <Link href="/" className=' font-extrabold text-2xl mx-4 text-black'>
            Mind Prism
        </Link>
        <NavigationMenuDemo />
        <div className='flex items-center justify-center gap-3'>
            {/* <Button variant="outline" className='rounded-full p-6' onClick={() => router.push('/sign-in')}>Signin</Button> */}
            <Button  className='rounded-full p-6  bg-[#9667E0] hover:bg-[#9667E0]/70 hover:-rotate-2' onClick={() => router.push('/dashboard')}>Sign in</Button>
            
        </div>
    </div>
  )
}

export default LandingNavnar