"use client"

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ComboboxForm } from '@/components/combobox'

const Home = () => {
  const router = useRouter();

  const navButtons = [
    {
      name: 'Public Profiles',
      href: '/dashboard/home/public-profiles',
    },
    {
      name: 'Expert',
      href: '/dashboard/home/expert',
    },
    {
      name: 'Github',
      href: '/dashboard/home/github',
    },
  ]

  return (
    <div className='w-full h-full min-h-screen p-2 flex flex-col'>
      <nav className='w-full flex items-center'>
        <h1 className='text-2xl font-bold'>Home</h1>
        {/* <ul className='gap-4 ml-auto hidden sm:flex'>
          {navButtons.map((button) => (
            <li key={button.name}>
              <Button onClick={() => router.push(button.href)}>{button.name}</Button> 
            </li>
          ))}
        </ul> */}
      </nav>
      <div className='w-full h-full py-4'>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <ComboboxForm />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      </div> 
        
    </div>
  )
}

export default Home