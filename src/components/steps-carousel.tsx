"use client"

import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const StepsCarousel = () => {

    const steps = [
        {
            step: 1,
            heading: 'Customer request',
            description: 'Understanding our clients needs and what they hope to achieve.'
        },
        {
            step: 2,
            heading: 'Defining all system requirements',
            description: 'Gathering and documenting all requirements to ensure project success.'
        },
        {
            step: 3,
            heading: 'Detailed, development-ready specs, time, and cost estimates',
            description: 'Providing clear and concise specifications, time, and cost estimates to ensure transparency and predictability.'
        },
        {
            step: 4,
            heading: 'Frontend & backend development',
            description: 'Developing the frontend and backend of the software according to the specifications.'
        },
        {
            step: 5,
            heading: 'Testing',
            description: 'Conducting thorough testing to ensure the software is reliable, secure, and meets all requirements.'
        },
        {
            step: 6,
            heading: 'Delivery',
            description: 'Delivery of the final product to the client.'
        },
    ]

  return (
    <div className='w-full h-full min-h-screen flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col items-center justify-center w-full gap-3'>
            <h1 className='text-5xl font-bold'>Our software development process</h1>
            <p className='text-xl text-muted-foreground'>Here&apos;s a breakdown of our process, which we follow for all projects:</p>
        </div>
       <Carousel className="w-full max-w-4xl h-full" 
        plugins={[
            Autoplay({
            delay: 3000,
            }),
        ]}
        >
            <CarouselContent>
                {steps.map((step, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-6 gap-3">
                                <span className="flex text-7xl font-bold h-full">{step.step}</span>
                                <div className='flex flex-col items-center justify-center gap-3 w-full h-full'>
                                   <h1 className='text-3xl font-bold'>{step.heading}</h1>
                                    <p className='text-xl text-muted-foreground'>{step.description}</p> 
                                </div>
                                
                                
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel> 
    </div>
  )
}

export default StepsCarousel