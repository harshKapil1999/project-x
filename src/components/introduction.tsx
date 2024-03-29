"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'


const Introduction = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col  items-center justify-center w-full h-full'>
        {/* Introduction */}
        <div className='w-full h-full min-h-[75dvh] flex flex-col md:flex-row p-2 md:p-4 lg:py-20 gap-2 md:gap-6 '>
            <div className='w-full p-2 py-4'>
                {/* Introduction with Tagline */}
                <h1 className='text-4xl font-bold w-full'>Hire India&apos;s Top Remote Talents, Matched by AI</h1>
                <p className='text-lg w-full'>AI-driven platform that makes hiring, and getting hired, reliable, simple, and fast.</p>
                <ul className='w-full'>
                    <li>{`\u2022`} Sourced via ML signals</li>
                    <li>{`\u2022`} Screened via AI based assessments</li>
                    <li>{`\u2022`} Hire in just 72 hours</li>
                </ul>
                <div className=' flex gap-4 w-full py-4'>
                    <Button className='rounded-full w-full bg-primary  p-6 text-lg font-bold text-primary-foreground' onClick={() => router.push('/book-demo')}>Book a demo</Button>
                    <Button className='rounded-full w-full bg-primary  p-6 text-lg font-bold text-primary-foreground' onClick={() => router.push('/sign-in')}>Signin</Button> 
                </div>
                
            </div>
            <div className='w-full p-2'>
                {/* Introduction with image or static asset */}
                <Image 
                    src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt='Barand image'
                    className='w-full h-full rounded-xl'
                    width={1080}
                    height={1080}
                />
            </div>
        </div>
        {/* Banner section */}
        <div className=' bg-neutral-200 w-full h-36 flex items-center justify-center'>
            Banner section
        </div>
    </div>
  )
}

export default Introduction