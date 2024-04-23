import React from 'react'

import { useRouter } from 'next/navigation'

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
  import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
const AlertDialogConformation = () => {
    const router = useRouter();
  return (
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
  )
}

export default AlertDialogConformation