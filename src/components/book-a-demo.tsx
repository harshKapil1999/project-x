import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const BookADemo = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full min-h-screen gap-4'>
        {/* <Link href="/book-demo" className=' p-20 flex items-center justify-center gap-5 hover:bg-muted rounded-2xl'>
            <h1 className='text-5xl font-bold'>Book A Demo </h1>
            <ArrowRightIcon width={24} height={24} />
        </Link> */}
        <div className="relative flex overflow-x-hidden w-full font-extrabold text-7xl">
          <div className="py-12 animate-marquee whitespace-nowrap ">
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
            <span className="mx-4">MIND PRISM</span>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-7xl bg-[#D4BBFC] p-20 rounded-3xl '>
            <div className='w-full max-w-lg text-white'>
                <h1 className='font-bold text-4xl'>Meet with a Webinar & Virtual Event Expert</h1>
                <p>We&apos;ll take the work out of elevating your virtual experiences</p>
            </div>
            <Button className='rounded-full  p-8 text-lg font-bold hover:text-black hover:bg-white'>Book A Demo</Button>
        </div>
    </div>
  )
}

export default BookADemo