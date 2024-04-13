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
            heading: 'Discovery',
            subHeading: 'Explore the Power of AI Recruitment',
            description: 'Identify your recruitment challenges and discover how MindPrism’s AI-powered solution can streamline your hiring process. Explore our website, learn about its features, and get inspired by success stories.',
            link: 'Schedule a demo call'
        },
        {
            step: 2,
            heading: 'Connect',
            subHeading: 'Get Personalized Guidance',
            description: 'Schedule a free consultation with a MindPrism expert. Discuss your specific needs, ask questions, and get a tailored demo to see how MindPrism can transform your recruitment.',
            link: 'Learn More About Customization'
        },
        {
            step: 3,
            heading: 'Implementation',
            subHeading: 'Seamless Onboarding',
            description: 'Our dedicated team guides you through a smooth onboarding process, ensuring MindPrism integrates seamlessly with your existing workflows.',
            link: 'See Our Integration Partners'
        },
        {
            step: 4,
            heading: 'Optimize',
            subHeading: 'Refine Your Hiring Strategy',
            description: 'Leverage MindPrism’s analytics and insights to optimize your hiring strategy. Refine your job descriptions, identify top talent pools, and make data-driven hiring decisions.',
            link: 'Watch a Demo of MindPrism in Action'
        },
        {
            step: 5,
            heading: 'Success',
            subHeading: 'Build Your Dream Team Faster',
            description: 'Experience the power of AI recruitment. Reduce time spent screening, find hidden talent, and build a high-performing team with MindPrism`s efficient and unbiased hiring process.',
            link: 'Read Success Stories from MindPrism Users'
        },
        {
            step: 6,
            heading: 'Partnership',
            subHeading: 'Continuous Support and Innovation',
            description: 'MindPrism is dedicated to your success. Our ongoing support ensures you maximize the value of the platform. We continuously innovate and update MindPrism with the latest advancements in AI for a future-proof recruitment experience.',
            link: 'Get Answers in Our Help Center'
        },
    ]

  return (
    <div className='w-full h-full min-h-screen flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col items-center justify-center w-full gap-3'>
            <h1 className='text-5xl text-center font-bold'>Building Your Dream Team: The MindPrism Customer Journey</h1>
            <p className='text-xl text-muted-foreground'>Here&apos;s a breakdown of our 6-step process to help you find top talent faster and smarter:</p>
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
                                <div className='flex flex-col justify-center gap-3 w-full h-full'>
                                   <h1 className='text-4xl font-bold'>{step.heading}</h1>
                                   <h2 className='text-2xl font-semibold'>{step.subHeading}</h2>
                                    <p className='text-xl text-muted-foreground'>{step.description}</p> 
                                    <span className='text-xl text-[#9667E0] hover:text-[#9667E0]/70 cursor-pointer'>{step.link}</span>
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