"use client"

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { getCookie } from 'cookies-next';
import { Checkbox } from "@/components/ui/checkbox"

import { ComboboxForm } from '@/components/combobox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import Select from 'react-select';
import { SelectContent, SelectItem, Select as SelectShadcn, SelectTrigger, SelectValue } from '@/components/ui/select'
import axios from 'axios'
import { boolean, number, string, z } from 'zod'

const Home = () => {
  const myCookie = getCookie('mindprism-token')

  type LocationOption = {
    value: string;
    label: string;
  };

  type currentEmpYearsOption = {
    value: string;
    label: string;
  };

  type JobRolesOption = {
    value: string;
    label: string;
  };

  type GoodToHaveSkills = {
    skillName: string;
    value: string;
    strict: boolean;
  }

  type MustHaveSkills = {
    skillName: string;
    value: string;
    strict: boolean;
  }

  const [jd, setJd] = useState('');
  const [data, setData] = useState({
        jD: '',
        currentJobTitle: '',
        minExp: number,
        maxExp: number,
        location: z.string().array(),
        currentEmpYearsOfExp: [] as string[],
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
        avoidCompany: boolean,
      });
  const [checked, setIsChecked] = useState(false);
  const [selectIndustry, setSelectIndustry] = useState(string);
  const [selectedOption, setSelectedOption] = useState([] as LocationOption[]);
  const [selectedEmpExpOption, setSelectedEmpExpOption] = useState([] as currentEmpYearsOption[]);
  const [selectJobRoles, setSelectJobRoles] = useState([] as JobRolesOption[]);
  const [goodToHaveSkills, setGoodToHaveSkills] = useState([] as GoodToHaveSkills[]);
  const [mustHaveSkills, setMustHaveSkills] = useState([] as MustHaveSkills[]);
  
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

  const handleChangeData = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    console.log(data)
  }

  const handleCheckboxChange = (e: any) => {
    
    setIsChecked(!checked)
    ///console.log(checked)
    setData({
      ...data,
      avoidCompany: !checked
    })
    console.log(data)
  }

  const handleSelectIndustryChange = (value: string) => {
    setSelectIndustry(value);
    //console.log(selectIndustry);

    setData({
      ...data,
      currentIndustry: value
    })

    console.log(data)
  }

  const locationOptions = [
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Gurugram', label: 'Gurugram' },
    { value: 'Gurgaon', label: 'Gurgaon' },
    { value: 'Banglore', label: 'Banglore' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Noida', label: 'Noida' },
  ]

  const handleSelectLocationChange = (e: any) => {
    setSelectedOption(Array.isArray(e) ? e.map((obj: any) => obj.value) : [string]);
    //console.log(selectedOptions);

    setData({
      ...data,
      location: (Array.isArray(e) ? e.map((obj: any) => obj.value) : [string])
    })

    console.log(data)
  };

  const currentEmpYearsOptions = [
    { value: 'Less than 1 Year', label: 'Less than 1 Year' },
    { value: 'From 1 year to 3 years', label: 'From 1 year to 3 years' },
    { value: 'From 3 years to 5 years', label: 'From 3 years to 5 years' },
    { value: 'More than 5 years', label: 'More than 5 years' },
  ]

  const handleSelectEmpExpChange = (e: any) => {
    setSelectedEmpExpOption(Array.isArray(e) ? e.map((obj: any) => obj.value) : [string])
    //console.log(selectedEmpExpOption);

    //const EmpExpArray = selectedEmpExpOption?.map((obj: any) => obj.value)
    //console.log(locationArray);

    setData({
      ...data,
      currentEmpYearsOfExp: (Array.isArray(e) ? e.map((obj: any) => obj.value) : [string])
    })

    console.log(data)
  };

  const jobRolesOptions = [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
    { value: 'Contractual', label: 'Contractual' },
    { value: 'Internship', label: 'Internship' },
  ]

  const handleSelectJobRolesChange = (e: any) => {
    setSelectJobRoles(Array.isArray(e) ? e.map((obj: any) => obj.value) : [string]) 

    setData({
      ...data,
      currentJobTitle: (Array.isArray(e) ? e.map((obj: any) => obj.value) : [string])
    }) 
  }

  const goodToHaveSkillsOptions = [
    { value: 'React', label: 'React' },
    { value: 'Python', label: 'Python' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'C#', label: 'C#' },
    { value: 'C', label: 'C' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Go', label: 'Go' },
    { value: 'Dart', label: 'Dart' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Scala', label: 'Scala' },
  ]

  const handleSelectGoodToHaveSkillsChange = (e: any) => {
    setGoodToHaveSkills(Array.isArray(e) ? e.map((obj: any) => obj.value) : [string])

    setData({
      ...data,
      goodToHaveSkills: (Array.isArray(e) ? e.map((obj: any) => obj.value) : [string])
    })
  }

  const mustHaveSkillsOptions = [
    { value: 'React', label: 'React' },
    { value: 'Python', label: 'Python' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'C#', label: 'C#' },
    { value: 'C', label: 'C' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Go', label: 'Go' },
    { value: 'Dart', label: 'Dart' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Scala', label: 'Scala' },
  ]

  const handleSelectMustHaveSkillsChange = (e: any) => {
    setMustHaveSkills(Array.isArray(e) ? e.map((obj: any) => obj.value) : [string]) 

    setData({
      ...data,
      mustHaveSkills: (Array.isArray(e) ? e.map((obj: any) => obj.value) : [string])
    })
  }

  const handleSubmitData = () => {
    console.log(data)
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/recuitersearch`, data, { headers: { 'Authorization': `Bearer ${myCookie}` } })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

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
      <div className='w-full h-full p-1 md:p-4 flex flex-col gap-6'>
        {/* Job selection */}
        <Card className='flex flex-col items-center justify-center mx-auto'>
          <CardHeader className='flex flex-col items-center justify-center'>
            <CardTitle>Job Description</CardTitle>
            <CardDescription>Select the job type you want to apply for</CardDescription>
          </CardHeader>
          <CardContent>
            <ComboboxForm data={data} setData={setData} />
          </CardContent>
          {/* <CardFooter>
            <Button>Confirm</Button>
          </CardFooter> */}
        </Card>
      
        {/* Job Details */}
          <div className='flex flex-col md:flex-row w-full gap-6'>
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
                  defaultValue={selectedEmpExpOption}
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
          <div className='flex flex-col md:flex-row w-full gap-6'>
            {/* Current Industry */}
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Current Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <SelectShadcn onValueChange={(value) => handleSelectIndustryChange(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Software">Software</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="HR">HR</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Product Management">Product Management</SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </SelectShadcn>
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
                  defaultValue={selectJobRoles}
                  onChange={handleSelectJobRolesChange}
                  options={jobRolesOptions}
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
            <div className='flex flex-col md:flex-row w-full gap-6'>
              {/* Good to have Skills */}
              <Card className='w-full'>
                  <CardHeader>
                    <CardTitle>Good to Have Skill</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select 
                      defaultValue={goodToHaveSkills}
                      onChange={handleSelectGoodToHaveSkillsChange}
                      options={goodToHaveSkillsOptions}
                      isMulti={true}
                      isSearchable={true}
                      name='goodToHaveSkills'
                      placeholder="Select"
                      className="w-full"
                    />
                  </CardContent>
                </Card>

                {/* Must Have Skills */}
                <Card className='w-full'>
                  <CardHeader>
                    <CardTitle>Must Have Skill</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select 
                      defaultValue={mustHaveSkills}
                      onChange={handleSelectMustHaveSkillsChange}
                      options={mustHaveSkillsOptions}
                      isMulti={true}
                      isSearchable={true}
                      name='mustHaveSkills'
                      placeholder="Select"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
            </div>

            {/* Avoid companies checkbox */}
            <Card className='flex items-center gap-5 mx-auto'>
              <CardContent className='flex items-center justify-center p-2 gap-2'>
                <Label className='text-md font-bold'>Avoid Companies</Label>
                <Checkbox checked={checked} onCheckedChange={handleCheckboxChange}  />
              </CardContent>
            </Card>
            

            {/* Candidature */}
            {/* <Card className='w-full'>
              <CardHeader>
                <CardTitle>Select your Candidate</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className='w-full'>
                    <Textarea placeholder="Describe your idle candidate." readOnly/>
                  </div>
              </CardContent>
            </Card> */}

            {/* Submit */}
            <Button className='w-full max-w-xs self-center' onClick={handleSubmitData}>Submit</Button>
            
      </div> 
        
    </div>
  )
}

export default Home