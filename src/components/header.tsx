"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { BellIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  return (
    <div className='top-0 sticky w-full bg-yellow-400 p-4 lg:p-6 flex items-center justify-between border-b border-b-neutral-700'>
        <div>
           <Link href="/" className='font-bold p-2'>Project-X</Link>
        </div>
        <ul className='md:flex items-center justify-center gap-4 hidden'>
            <Link href="/home" className='p-2'>Home</Link>
            <Link href="/features" className='p-2'>Features</Link>
            <Link href="/company" className='p-2'>Company</Link>
            <Link href="/blog" className='p-2'>Blog</Link>
        </ul>
        <div className='flex items-center justify-center gap-4'>
            <Link href="/notification" className='p-2'><BellIcon fill='' width={20} height={20} /></Link>
            <Link href="/about" className='p-2'>About</Link>
            <Link href="/profile" className='p-2'>Profile</Link>
        </div>
    </div>
  )
}

export default Header