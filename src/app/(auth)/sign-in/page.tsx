"use client"

import React from 'react'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const router = useRouter()
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
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
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
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" onClick={() => router.push('/dashboard')}>
              Sign in
            </Button>
            {/* <Button variant="outline" className="w-full">
              Sign in with Google
            </Button> */}
          </div>
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