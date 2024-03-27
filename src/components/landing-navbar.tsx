import React from 'react'
import { Button } from './ui/button'

const LandingNavnar = () => {
  return (
    <div className='top-0 sticky w-full bg-yellow-400 p-4 lg:p-6 flex items-center justify-between border-b border-b-neutral-700'>
        <div>
            Logo Project-X
        </div>
        <ul className='md:flex items-center justify-center gap-4 hidden'>
            <li>Home</li>
            <li>Features</li>
            <li>Company</li>
            <li>Blog</li>
        </ul>
        <div className='flex items-center justify-center gap-3'>
            <Button variant="outline" className='rounded-full'>Get Started</Button>
            <Button variant="outline" className='rounded-full'>Login</Button>
        </div>
    </div>
  )
}

export default LandingNavnar