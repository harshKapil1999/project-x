"use client"

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { ComboboxForm } from '@/components/combobox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const Home = () => {
  const router = useRouter();

  const [data, setData] = useState([]);


  useEffect(() => {
    const getJdData = async () => {
    //console.log(`${process.env.BACKEND_URL}/api/jd`);
    const response = await fetch(`http://localhost:8000/api/jd`)

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    setData(data.jd);
  }
  getJdData();
  }, [])
  
  console.log(data);

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
      <div className='w-full h-full p-1 md:p-4 flex flex-col gap-4'>
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
          <div className='flex flex-col md:flex-row w-full gap-4'>
            {/* Experience */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex gap-4'>
                  <div>
                    <Label>Min Experience</Label>
                    <Input type='number' defaultValue={1} min={1} readOnly/>
                  </div>
                  <div>
                    <Label>Max Experience</Label>
                    <Input type='number' defaultValue={10} min={10} readOnly/> 
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
                <Input type='text' placeholder='Enter Location' readOnly/>
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
                    <Textarea placeholder="Type your skills here." readOnly/>
                  </div>
                  <div className='w-full'>
                    <Label>Must have skills</Label>
                    <Textarea placeholder="Type your skills here." readOnly/>
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
                <Textarea placeholder="Type your summary here." readOnly/>
              </CardContent>
            </Card>

            {/* Candidature */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Select your Candidate</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className='w-full'>
                    <Textarea placeholder="Describe your idle candidate." readOnly/>
                  </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
              <Button className='w-full max-w-xs self-center rounded-full'>Confirm</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className='flex flex-col gap-2 w-full'>
                      <div className='flex items-center gap-2 w-full'>
                        <Label>Experience</Label>
                        <Input type='number' defaultValue={1}  /> to <Input type='number' defaultValue={5} readOnly />
                      </div>
                      <div className='flex items-center gap-2 w-full'>
                        <Label>Location</Label>
                        <Input type='text' defaultValue={'India'}  />
                      </div>
                      <div className='flex items-center gap-2 w-full'>
                        <Label>Diverity</Label>
                        <Input type='text' defaultValue={'Any'}  />
                      </div>
                      <div className='flex items-center gap-2 w-full'>
                        <Label>Language</Label>
                        <Input type='text' defaultValue={'English'}  />
                      </div>
                      <div className='flex items-center gap-2 w-full'>
                        <Label>Notice Period</Label>
                        <Input type='number' defaultValue={1}  />
                      </div>
                      <div className='flex items-center gap-2 w-full'>
                      <Label>Skills</Label>
                        <div className='w-full'>
                          <Label>Good to have skills</Label>
                          <Textarea defaultValue={'Rectjs, Nextjs, TailwindCSS, Nodejs, Express, MongoDB, Postgres'}  />
                        </div>
                        <div className='w-full'>
                          <Label>Must have skills</Label>
                          <Textarea defaultValue={'Rectjs, Nextjs, TailwindCSS, Nodejs, Express, MongoDB, Postgres'}  />
                        </div>
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>

                  <AlertDialogAction onClick={() => router.push('/dashboard/jobs')}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
      </div> 
        
    </div>
  )
}

export default Home