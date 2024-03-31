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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

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
      <div className='w-full h-full p-4 flex flex-col gap-4'>
        {/* Job selection */}
        <Card className='flex flex-col items-center justify-center'>
          <CardHeader className='flex flex-col items-center justify-center'>
            <CardTitle>Job Description</CardTitle>
            <CardDescription>Select the job type you want to apply for</CardDescription>
          </CardHeader>
          <CardContent>
            <ComboboxForm />
          </CardContent>
          {/* <CardFooter>
            <Button>Confirm</Button>
          </CardFooter> */}
        </Card>
      
        {/* Job Details */}
          <div className='flex w-full gap-4'>
            {/* Experience */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex gap-4'>
                  <div>
                    <Label>Min Experience</Label>
                    <Input type='number' defaultValue={1} min={1} />
                  </div>
                  <div>
                    <Label>Max Experience</Label>
                    <Input type='number' defaultValue={10} min={10} /> 
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Location */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <Input type='text' placeholder='Enter Location' />
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <Card className='w-full'>
              <CardHeader>
                <CardTitle>Skill</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='w-full flex gap-4'>
                  <div className='w-full'>
                    <Label>Good to have skills</Label>
                    <Textarea placeholder="Type your skills here."/>
                  </div>
                  <div className='w-full'>
                    <Label>Must have skills</Label>
                    <Textarea placeholder="Type your skills here."/>
                  </div>
                </div>
                
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Quick Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Type your summary here."/>
              </CardContent>
            </Card>
      </div> 
        
    </div>
  )
}

export default Home