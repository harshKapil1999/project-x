"use client"

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const LandingNavnar = () => {
  
  const router = useRouter()
  return (
    <div className='top-0 sticky w-full bg-neutral-900 p-4 lg:p-6 flex items-center justify-between border-b border-b-neutral-700'>
        <div className='text-white'>
            Logo Project-X
        </div>
        <ul className='md:flex items-center justify-center gap-4 hidden text-white'>
            <li>Home</li>
            <li>Features</li>
            <li>Company</li>
            <li>Blog</li>
        </ul>
        <div className='flex items-center justify-center gap-3'>
            <Button variant="outline" className='rounded-full' onClick={() => router.push('/dashboard')}>Get Started</Button>
            <Button variant="outline" className='rounded-full' onClick={() => router.push('/sign-in')}>Signin</Button>
        </div>
    </div>
  )
}

export default LandingNavnar