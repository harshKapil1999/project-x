"use client"

import React, { useState } from 'react'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'

const SignIn = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleOnchange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    //console.log(formData);
    
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/login`, formData)
    .then((response) => {
      axios.post(`/api/sign-in`, response.data)
      .then((res) => {
         toast({ title: "User Authenticated" })
         router.push('/dashboard');
        })
      .catch((error) => toast(error.message))
      
    })
    .catch((error) => {
      toast(error.message);
    })
    //router.push('/dashboard/home');
  }
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center w-full h-full min-h-screen">
        <div className="mx-auto grid gap-6 w-full max-w-sm h-full ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign in</h1>
            <p className="text-xs text-muted-foreground">
              Enter your email below to sign in to your account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleOnSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input 
                name="password" 
                id="password" 
                type="password" 
                required 
                onChange={handleOnchange} 
                />
            </div>
            <Button type="submit" className="w-full" >
              Sign in
            </Button>
            {/* <Button variant="outline" className="w-full">
              Sign in with Google
            </Button> */}
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Request a demo
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block w-full">
        <Image
          src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full max-h-screen object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default SignIn