"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import TypewriterComponent from "typewriter-effect";


const Introduction = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col min-h-screen items-center w-full h-full'>
        {/* Introduction */}
        <div className='w-full h-full flex flex-col md:flex-row gap-2 my-auto mt-10'>
            <div className='w-full h-full p-2 py-4 flex flex-col items-center justify-center gap-8 ml-6 my-auto'>
                {/* Introduction with Tagline */}
                <p className='text-lg w-full text-muted-foreground '>10x Faster Hiring: AI Streamlines Recruitment</p>
                <h1 className='text-4xl lg:text-6xl font-bold w-full'>The All-in-One AI Hiring Solution for Modern Recruiters</h1>
                <div className='text-xl w-full flex'>AI-powered Talent Acquisition. &nbsp;  
                    <TypewriterComponent 
                        options={{
                            strings: [
                                "Faster.",
                                "Smarter.",
                                "Fairer.",
                                
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
                
                {/* <ul className='w-full'>
                    <li>{`\u2022`} Sourced via ML signals</li>
                    <li>{`\u2022`} Screened via AI based assessments</li>
                    <li>{`\u2022`} Hire in just 72 hours</li>
                </ul> */}
                <div className=' flex gap-4 w-full py-4'>
                    {/* <Button className='rounded-full  p-6 text-lg font-bold' variant='outline' onClick={() => router.push('/sign-in')}>Signin</Button> */}
                    <Button className='rounded-full bg-primary  p-8 text-lg font-bold bg-[#9667E0] hover:bg-[#9667E0]/70' onClick={() => router.push('/book-demo')}>Book a demo</Button>
                </div>
                
            </div>
            <div className='w-full h-full hidden md:flex bg-black rounded-l-full pt-12 object-contain overflow-hidden mt-auto'>
                <div className='flex flex-col items-center justify-center mx-auto gap-4 w-full h-full ml-28 mt-24'>
                    <nav className='text-3xl font-bold text-white bg-[#9667E0] w-full p-4 rounded-l-xl'>
                        AI Products
                    </nav>
                    {/* Introduction with image or static asset */}
                    <div className='bg-[#9667E0] w-full p-10 rounded-l-xl'>
                        <video 
                            src="https://videos.pexels.com/video-files/7688001/7688001-hd_1920_1080_30fps.mp4"
                            preload="none"
                            className='w-full max-w-sm h-full rounded-lg ml-8 aspect-square'
                            width={1280}
                            height={720} autoPlay muted loop
                        >
                            {/* <source src="https://videos.pexels.com/video-files/7688001/7688001-hd_1920_1080_30fps.mp4" type="video/mp4" /> */}
                        </video>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Introduction