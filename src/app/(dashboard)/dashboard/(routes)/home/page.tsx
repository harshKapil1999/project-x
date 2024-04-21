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
import Select from 'react-select';
import { Select as SelectShadcn } from '@/components/ui/select'
import axios from 'axios'
import { boolean, number, string } from 'zod'

const Home = () => {
  const router = useRouter();

  const sampleData = {
    "Current Job Title": [ "Lead Data Engineer", "Data Engineer" ],
    "✅Minimum Years of experience required": 6,
    "✅Maximum Years of experience required": 10,
    "✅Location": [ "Chennai", "Gurugram", "Gurgaon" ],
    "Current Employment Years of experience": "More than 1 year",
    "Current Industry": [ "Information Technology" ],
    "Must have Skills": [
        { "Skill Name": "PostgreSQL", "Strict": true },
        { "Skill Name": "Hadoop or Hive", "Strict": false },
        { "Skill Name": "AWS", "Strict": false },
        { "Skill Name": "Java/Python/C#", "Strict": true },
        { "Skill Name": "UNIX/Linux platforms", "Strict": true }
    ],
    "Good to have Skills": [
        { "Skill Name": "Talend" }
    ],

}

  const [data, setData] = useState({
    jD: '',
    currentJobTitle: '',
    minExp: number,
    maxExp: number,
    location: [string],
    currentEmpYearsOfExp: [string],
    currentIndustry: '',
    mustHaveSkills: [
      {
      skillName: '',
      strict: boolean,
    }
  ],
    goodToHaveSkills: [
      {
        skillName: ''
      }
    ],
  });

  const handleChangeData = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    console.log(data)
  }

  
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

  const locationOptions = [
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Gurugram', label: 'Gurugram' },
    { value: 'Gurgaon', label: 'Gurgaon' },
    { value: 'Banglore', label: 'Banglore' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Noida', label: 'Noida' },
  ]
  type LocationOption = {
    value: string;
    label: string;
  };
  
  const [selectedOption, setSelectedOption] = useState([] as LocationOption[]);
  //console.log(selectedOption);

  const handleSelectLocationChange = (selectedOptions: LocationOption[]) => {
    setSelectedOption(selectedOptions);
    //console.log(selectedOptions);

    const locationArray = selectedOption?.map((obj: any) => obj.value)
    //console.log(locationArray);

    setData({
      ...data,
      location: locationArray
    })

    console.log(data)
  };

  const currentEmpYearsOptions = [
    { value: 'Less than 1 Year', label: 'Less than 1 Year' },
    { value: 'From 1 year to 3 years', label: 'From 1 year to 3 years' },
    { value: 'From 3 years to 5 years', label: 'From 3 years to 5 years' },
    { value: 'More than 5 years', label: 'More than 5 years' },
  ]
  type currentEmpYearsOption = {
    value: string;
    label: string;
  };
  
  const [selectedEmpExpOption, setSelectedEmpExpOption] = useState([] as currentEmpYearsOption[]);
  //console.log(selectedOption);

  const handleSelectEmpExpChange = (selectedOptions: currentEmpYearsOption[]) => {
    setSelectedEmpExpOption(selectedOptions);
    //console.log(selectedOptions);

    const EmpExpArray = selectedEmpExpOption?.map((obj: any) => obj.value)
    //console.log(locationArray);

    setData({
      ...data,
      currentEmpYearsOfExp: EmpExpArray
    })

    console.log(data)
  };
  

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
                    <Input type='number' defaultValue={1} min={1} name='minExp' onChange={handleChangeData}/>
                  </div>
                  <div>
                    <Label>Max Experience</Label>
                    <Input type='number' defaultValue={10} min={10} name='maxExp' onChange={handleChangeData}/> 
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
                {/* <Input type='text' placeholder='Enter Location' /> */}
                <Select
                  defaultValue={selectedOption}
                  onChange={handleSelectLocationChange}
                  options={locationOptions}
                  isMulti={true}
                  isSearchable={true}
                  name='location'
                  placeholder="Select"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>

          {/* Current Employment Years of experience */}
          <Card className='w-full'>
              <CardHeader>
                <CardTitle>Current Employment Years of experience</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <Input type='text' placeholder='Enter Location' /> */}
                <Select
                  defaultValue={selectedOption}
                  onChange={handleSelectEmpExpChange}
                  options={currentEmpYearsOptions}
                  isMulti={true}
                  isSearchable={true}
                  name='location'
                  placeholder="Select"
                  className="w-full"
                />
              </CardContent>
            </Card>

          {/* Current Industry and Job Roles */}
          <div className='flex flex-col md:flex-row w-full gap-4'>
            {/* Current Industry */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Current Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <Select />
              </CardContent>
            </Card>
            {/* Location */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Job Roles</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <Input type='text' placeholder='Enter Location' /> */}
                <Select
                  defaultValue={selectedOption}
                  onChange={handleSelectLocationChange}
                  options={locationOptions}
                  isMulti={true}
                  isSearchable={true}
                  name='location'
                  placeholder="Select"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
          
          {/* Skills */}
            <div className='flex flex-col md:flex-row w-full gap-4'>
              {/* Good to have Skills */}
              <Card className='w-full'>
                  <CardHeader>
                    <CardTitle>Good to Have Skill</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select />
                  </CardContent>
                </Card>

                {/* Must Have Skills */}
                <Card className='w-full'>
                  <CardHeader>
                    <CardTitle>Must Have Skill</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select />
                  </CardContent>
                </Card>
            </div>
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